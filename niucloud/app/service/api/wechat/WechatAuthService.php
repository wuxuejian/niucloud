<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\api\wechat;


use app\dict\member\MemberLoginTypeDict;
use app\dict\member\MemberRegisterTypeDict;
use app\dict\scan\ScanDict;
use app\service\api\login\LoginService;
use app\service\api\login\RegisterService;
use app\service\api\member\MemberConfigService;
use app\service\api\member\MemberService;
use app\service\core\scan\CoreScanService;
use app\service\core\wechat\CoreWechatFansService;
use app\service\core\wechat\CoreWechatServeService;
use core\base\BaseApiService;
use core\exception\ApiException;
use core\exception\AuthException;
use think\db\exception\DataNotFoundException;
use think\db\exception\DbException;
use think\db\exception\ModelNotFoundException;


/**
 * 微信配置模型
 * Class WechatConfigService
 * @package app\service\core\wechat
 */
class WechatAuthService extends BaseApiService
{

    public $core_wechat_serve_service;

    public function __construct()
    {
        parent::__construct();
        $this->core_wechat_serve_service = new CoreWechatServeService();
    }

    /**
     * 网页授权
     * @param string $url
     * @param string $scopes
     * @return array
     */
    public function authorization(string $url = '', string $scopes = 'snsapi_base')
    {
        //todo  业务落地
        return [ 'url' => $this->core_wechat_serve_service->authorization($this->site_id, $url, $scopes) ];
    }

    /**
     * 处理授权回调
     * @param string $code
     * @return array
     */
    public function userFromCode(string $code)
    {
        $userinfo = $this->core_wechat_serve_service->userFromCode($this->site_id, $code);
        if (empty($userinfo)) throw new ApiException('WECHAT_EMPOWER_NOT_EXIST');
        $token_response = $userinfo->getTokenResponse();
        if (empty($token_response)) throw new ApiException('WECHAT_EMPOWER_NOT_EXIST');
        $scope = $token_response[ 'scope' ];
        if ($scope == 'snsapi_base') {//静默授权
            $openid = $token_response[ 'openid' ] ?? '';
        } else {
            $openid = $userinfo->getId();//对应微信的 openid
            $nickname = $userinfo->getNickname();//对应微信的 nickname
            $avatar = $userinfo->getAvatar();//对应微信的 头像地址
        }
        $unionid = $userinfo->getRaw()[ 'unionid' ] ?? '';
        if (empty($openid)) throw new ApiException('WECHAT_EMPOWER_NOT_EXIST');
        //todo 这儿还可能会获取用户昵称 头像  性别 ....用以更新会员信息
        return [ $avatar ?? '', $nickname ?? '', $openid, $unionid ];
        //todo  业务落地
    }

    /**
     * 登录通过code
     * @param string $code
     * @return array|string[]|null
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function loginByCode(string $code)
    {
        [ $avatar, $nickname, $openid, $unionid ] = $this->userFromCode($code);
        return $this->login($openid, $nickname, $avatar, $unionid);
    }

    /**
     * 公众号登录
     * @param string $openid
     * @param string $nickname
     * @param string $avatar
     * @return array|null
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function login(string $openid, string $nickname = '', string $avatar = '', string $unionid = '')
    {

        $member_service = new MemberService();
        $member_info = $member_service->findMemberInfo([ 'wx_openid' => $openid, 'site_id' => $this->site_id ]);
        if ($member_info->isEmpty() && !empty($unionid)) {
            $member_info = $member_service->findMemberInfo([ 'wx_unionid' => $unionid, 'site_id' => $this->site_id ]);
            if (!$member_info->isEmpty()) {
                $member_info->wx_openid = $openid;
            }
        }
        if ($member_info->isEmpty()) {
            $config = ( new MemberConfigService() )->getLoginConfig();
            $is_auth_register = $config[ 'is_auth_register' ];
            // 去掉强制绑定手机号判断，否则开启强制绑定的情况下公众号第三方注册无法注册
            if ($is_auth_register == 1) {
                return $this->register($openid, '', $nickname, $avatar, $unionid);
            } else {
                return [ 'avatar' => $avatar, 'nickname' => $nickname, 'openid' => $openid, 'unionid' => $unionid ];
            }
        } else {
            //可能会更新用户和粉丝表
            $login_service = new LoginService();
            return $login_service->login($member_info, MemberLoginTypeDict::WECHAT);
        }
    }

    /**
     * 同步数据
     * @param string $code
     * @return true
     */
    public function sync(string $code)
    {
        [ $avatar, $nickname, $openid ] = $this->userFromCode($code);
        //更新粉丝
        $core_wechat_fans_service = new CoreWechatFansService();
        //这儿或许可以异步
        $core_wechat_fans_service->edit($this->site_id, $openid, [ 'avatar' => $avatar, 'nickname' => $nickname ]);
        $member_service = new MemberService();
        $member_info = $member_service->findMemberInfo([ 'wx_openid' => $openid, 'site_id' => $this->site_id ]);
        if ($member_info->isEmpty()) throw new AuthException('MEMBER_NOT_EXIST');//账号不存在
        $member_service->editByFind($member_info, [ 'headimg' => $avatar, 'nickname' => $nickname ]);
        return true;
    }

    /**
     * 注册
     * @param string $openid
     * @param string $mobile
     * @param string $nickname
     * @param string $avatar
     * @param string $wx_unionid
     * @return array
     * @throws DataNotFoundException
     * @throws DbException
     * @throws ModelNotFoundException
     */
    public function register(string $openid, string $mobile = '', string $nickname = '', string $avatar = '', string $wx_unionid = '')
    {
        $member_service = new MemberService();
        $member_info = $member_service->findMemberInfo([ 'wx_openid' => $openid, 'site_id' => $this->site_id ]);
        if (!$member_info->isEmpty()) throw new AuthException('MEMBER_IS_EXIST');//账号已存在, 不能在注册
        if (!empty($wx_unionid)) {
            $member_info = $member_service->findMemberInfo([ 'wx_unionid' => $wx_unionid, 'site_id' => $this->site_id ]);
            if (!$member_info->isEmpty()) throw new AuthException('MEMBER_IS_EXIST');//账号已存在, 不能在注册
        }
        $register_service = new RegisterService();
        return $register_service->register($mobile,
            [
                'wx_openid' => $openid,
                'nickname' => $nickname,
                'headimg' => $avatar,
                'wx_unionid' => $wx_unionid
            ],
            MemberRegisterTypeDict::WECHAT
        );

    }

    /**
     * 获取jssdkconfig
     * @param string $url
     * @return mixed[]
     * @throws \EasyWeChat\Kernel\Exceptions\HttpException
     * @throws \EasyWeChat\Kernel\Exceptions\InvalidArgumentException
     * @throws \Psr\SimpleCache\InvalidArgumentException
     * @throws \Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface
     * @throws \Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface
     */
    public function jssdkConfig(string $url = '')
    {
        return $this->core_wechat_serve_service->jssdkConfig($this->site_id, $url);
    }

    /**
     * 扫码登录
     * @return array
     */
    public function scanLogin()
    {
        $data = array(
            'channel' => $this->channel,
        );
        $key = ( new  CoreScanService() )->scan($this->site_id, ScanDict::WECHAT_LOGIN, $data, 300);
        $url = $this->core_wechat_serve_service->scan($this->site_id, $key, 300)[ 'url' ] ?? '';
        return [
            'url' => $url,
            'key' => $key
        ];
    }

    /**
     * 更新openid（用于账号密码或手机号注册时未正常获取到openid时再次获取）
     * @param string $code
     * @return true
     */
    public function updateOpenid(string $code)
    {
        [ $avatar, $nickname, $openid, $unionid ] = $this->userFromCode($code);
        $member_service = new MemberService();
        $member = $member_service->findMemberInfo([ 'wx_openid' => $openid, 'site_id' => $this->site_id ]);
        if (!$member->isEmpty()) throw new AuthException('MEMBER_OPENID_EXIST');//openid已存在

        $member_info = $member_service->findMemberInfo([ 'member_id' => $this->member_id, 'site_id' => $this->site_id ]);
        if ($member_info->isEmpty()) throw new AuthException('MEMBER_NOT_EXIST');//账号不存在
        $member_service->editByFind($member_info, [ 'wx_openid' => $openid ]);
        return true;
    }
}
