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

namespace app\api\controller\sys;

use app\service\api\site\SiteService;
use app\service\api\sys\ConfigService;
use core\base\BaseApiController;
use think\Response;

class Config extends BaseApiController
{

    /**
     * 获取版权信息
     * @return Response
     */
    public function getCopyright()
    {
        return success(( new ConfigService() )->getCopyright());
    }

    /**
     * 场景域名
     * @return Response
     */
    public function getSceneDomain()
    {
        return success(( new ConfigService() )->getSceneDomain());
    }

    /**
     * 获取站点信息
     * @return Response
     */
    public function site()
    {
        return success(( new SiteService() )->getSiteCache());
    }

    /**
     * 获取手机端首页列表
     */
    public function getWapIndexList()
    {
        $data = $this->request->params([
            [ 'title', '' ],
            [ 'key', '' ] // 多个查询，逗号隔开
        ]);
        return success(( new ConfigService() )->getWapIndexList($data));
    }

    /**
     * 获取地图配置
     * @return Response
     */
    public function getMap()
    {
        return success(( new ConfigService() )->getMap());
    }
}
