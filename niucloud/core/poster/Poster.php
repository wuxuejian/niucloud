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
namespace core\poster;

use AlibabaCloud\Client\AlibabaCloud;
use core\exception\NoticeException;
use core\sms\BaseSms;
use Exception;
use Grafika\Color;
use Grafika\Grafika;
use Kkokk\Poster\PosterManager;


class Poster extends BasePoster
{


    /**
     * @param array $config
     * @return void
     */
    protected function initialize(array $config = [])
    {
        parent::initialize($config);
    }


    /**
     * 创建海报
     * @param array $poster
     * @param string $dir
     * @param array $file_path
     * @return void
     */
    public function createPoster(array $poster_data, string $dir, string $file_path)
    {
        $bg_type = $poster_data['bg_type'];
        $editor = Grafika::createEditor();
        if($bg_type == 'url'){

            $editor->open($bg_image, $poster_data['bg_url']);
            $editor->resizeFill($bg_image, $poster_data['w'], $poster_data['h']);
        }else{
            $bg_image = Grafika::createBlankImage($poster_data['w'],$poster_data['h']);
            //填充背景色
            $editor->fill($bg_image ,new Color($poster_data['bg_color']));
        }
        foreach($poster_data['items'] as $k => $v){
            $type = $v['type'];
            switch($type){
                case 'text':
                    $default_font = 'static'.DIRECTORY_SEPARATOR.'font'.DIRECTORY_SEPARATOR.'SourceHanSansCN-Regular.ttf';
                    $editor->text($bg_image , $v['value'], $v['font_size'], $v['x'], $v['y'], new Color($v['font_color']), $v['font'] ?: $default_font, $v['angle']);
                    break;
                case 'image':
                    $image_name = 'image'.$k;
                    $$image_name = null;
                    if(is_file($v['value'])){
                        $editor->open($$image_name, $v['value']);
                        $editor->resizeFill($$image_name, $v['w'], $v['h']);
                        $editor->blend( $bg_image, $$image_name , 'normal', 0, 'top-left', $v['x'], $v['y']);
                    }
                    break;
                case 'draw':
                    $draw_name = 'draw'.$k;
                    $$draw_name = Grafika::createDrawingObject($v['draw_type'], $v['points'], 1, NULL, new Color($v['bg_color']));
                    // 在图像上绘制上面创建的绘制对象
                    $editor->draw( $bg_image, $$draw_name );

                    break;
            }
        }
        $editor->save($bg_image, $dir.'/'.$file_path);
        return $dir.'/'.$file_path;
    }


}