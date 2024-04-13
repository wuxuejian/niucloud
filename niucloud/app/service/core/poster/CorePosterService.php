<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的saas管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud-admin.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\service\core\poster;

use app\dict\sys\FileDict;
use app\dict\sys\PosterDict;
use app\model\sys\Poster;
use app\service\core\upload\CoreFetchService;
use core\base\BaseCoreService;
use core\dict\DictLoader;
use core\exception\CommonException;
use core\poster\PosterLoader;
use Throwable;

/**
 * 图片处理层
 */
class CorePosterService extends BaseCoreService
{

    /**
     * 创建模板
     * @param $site_id
     * @param $addon
     * @param $data
     * @return true
     */
    public function add($site_id, $addon, $data)
    {
        $data['addon'] = $addon;
        $data['site_id'] = $site_id;
        (new Poster())->create($data);
        return true;
    }


    /**
     * 海报类型
     * @return void
     */
    public function getType()
    {
        return PosterDict::getType();
    }

    /**
     *海报变量
     * @param $addon
     * @return array|null
     */
    public function getVars($addon)
    {
        $addon_load = new DictLoader('Poster');
        return $addon_load->loadVars([
            'addon' => $addon
        ]);
    }

    /**
     *海报模板
     * @param $addon
     * @return array|null
     */
    public function getTemplateList($addon = '')
    {
        $addon_load = new DictLoader('Poster');
        return $addon_load->load([
            'addon' => $addon
        ]);
    }

    /**
     * 实例化模板引擎
     * @param $site_id
     * @param $poster_type
     * @return \core\upload\UploadLoader|void
     */
    public function driver($site_id, $poster_type = 'poster')
    {

        //查询启用的上传方式
        return new PosterLoader($poster_type, []);
    }

    /**
     * 获取海报
     * @param int $site_id
     * @param string|int $type 模板类型
     * @param array $param
     * @param bool $is_throw_exception
     * @return string|void
     */
    public function get(int $site_id, string|int $type, array $param = [], string $channel = '', bool $is_throw_exception = true)
    {
        //先查询模板,如果不存在就抛出异常
        $poster = (new Poster())->where([['site_id', '=', $site_id], ['type', '=', $type], ['status', '=', PosterDict::ON]])->findOrEmpty();
        try {
            if ($poster->isEmpty()){
                //临时plain
                $template = array_column($this->getTemplateList(), null, 'type');
                $poster = $template[$type] ?? [];
            }else{
                $poster = $poster->toArray();
                $poster = $poster['value'];
            }
            if(empty($poster)) throw new CommonException('海报模板不存在');


            //各类型没模板整理模板数据
            $poster_data = array_values(array_filter(event('GetPosterData', [
                'type' => $type,
                'site_id' => $site_id,
                'param' => $param,
                'channel' => $channel
            ])))[0] ?? [];
            $dir = 'upload/poster/' . $site_id;
            $temp1 = md5(json_encode($poster));
            $temp2 = md5(json_encode($poster_data));
            $file_path = 'poster' . $temp1 . '_' . $temp2 . '.png';
            $path = $dir . '/'. $file_path;
            //判断当前海报是否存在,存在直接返回地址,不存在的话则创建
            if (is_file($path)) {
                return $path;
            } else {
                return $this->create($site_id, $poster, $poster_data, $dir, $file_path, $channel);
            }
        } catch ( Throwable $e ) {
            if ($is_throw_exception) {
                throw new CommonException($e->getMessage() . $e->getFile() . $e->getLine());
            } else {
                return '';
            }

        }
    }

    /**
     * 生成海报
     * @param int $site_id
     * @param $poster
     * @param $data 填充数据(存在映射关系)
     * @param $dir
     * @param $file_path
     * @param $channel
     * @return void
     */
    public function create(int $site_id, array $poster, array $data, string $dir, string $file_path, string $channel = '')
    {
        //将模版中的部分待填充值替换
        $core_upload_service = new CoreFetchService();
        if ($poster['bg_type'] == 'url') {
            if (str_contains($poster['bg_url'], 'http://') || str_contains($poster['bg_url'], 'https://')) {
                //判断是否是是远程图片,远程图片需要本地化
                $temp_dir = 'file/' . 'image' . '/' . $site_id . '/' . date('Ym') . '/' . date('d');
                try {
                    $poster['bg_url'] = $core_upload_service->image($poster['bg_url'], $site_id, $temp_dir, FileDict::LOCAL)['url'] ?? '';
                } catch ( \Exception $e ) {

                }
            }
        }

        foreach ($poster['items'] as &$v) {
            foreach ($data as $data_k => $data_v) {
                if ($data_k == $v['relate']) {
                    $v['value'] = $data_v;
                    //如果类型是二维码的话就根据生成渠道生成对应的二维码
                    if ($v['type'] == 'qrcode') {
                        $v['type'] = 'image';
                        //将二维码类型转化为图片类型,并且将二维码链接转化为图片路径

                        $v['value'] = qrcode($data_v['url'], $data_v['page'], $data_v['data'], $site_id, '', $channel);
                    } else if ($v['type'] == 'image') {//校验图片文件是否是远程文件
                        if (str_contains($v['value'], 'http://') || str_contains($v['value'], 'https://')) {
                            //判断是否是是远程图片,远程图片需要本地化
                            $temp_dir = 'file/' . 'image' . '/' . $site_id . '/' . date('Ym') . '/' . date('d');
                            try {
                                $v['value'] = $core_upload_service->image($v['value'], $site_id, $temp_dir, FileDict::LOCAL)['url'] ?? '';
                            } catch ( \Exception $e ) {
                                $v['value'] = '';
                            }
                        }

                    }
                }
            }
        }
        if (!is_dir($dir) && !mkdir($dir, 0777, true) && !is_dir($dir)) {
            throw new \RuntimeException(sprintf('Directory "%s" was not created', $dir));
        }
        //将填充后的数据赋值
        return $this->driver($site_id, 'poster')->createPoster($poster, $dir, $file_path);
    }


}