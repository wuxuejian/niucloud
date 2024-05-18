<?php
// +----------------------------------------------------------------------
// | Niucloud-admin 企业快速开发的多应用管理平台
// +----------------------------------------------------------------------
// | 官方网址：https://www.niucloud.com
// +----------------------------------------------------------------------
// | niucloud团队 版权所有 开源版本可自由商用
// +----------------------------------------------------------------------
// | Author: Niucloud Team
// +----------------------------------------------------------------------

namespace app\dict\diy;

use core\dict\DictLoader;

/**
 * 基础组件
 * Class ComponentDict
 * @package app\dict\diy
 */
class ComponentDict
{

    public static function getComponent()
    {
        $system_components = [
            'BASIC' => [
                'title' => get_lang('dict_diy.component_type_basic'),
                'list' => [
                    'Text' => [
                        'title' => '标题',
                        'icon' => 'iconfont-iconbiaoti',
                        'path' => 'edit-text', // 编辑组件属性名称
                        'support_page' => [], // 支持页面
                        'uses' => 0, // 最大添加数量
                        'sort' => 10001,
                        'position' => '', // 组件置顶标识，不能拖拽，可选值：fixed、top_fixed、right_fixed、bottom_fixed、left_fixed
                        // 组件属性
                        'template' => [
                            "textColor" => "#303133", // 文字颜色
                            'pageStartBgColor' => '', // 底部背景颜色（开始）
                            'pageEndBgColor' => '', // 底部背景颜色（结束）
                            'pageGradientAngle' => 'to bottom', // 渐变角度，从上到下（to bottom）、从左到右（to right）
                            'componentBgUrl' => '', // 组件背景图片
                            'componentBgAlpha' => 2, // 组件背景图片的透明度，0~10
                            "componentStartBgColor" => '', // 组件背景颜色（开始）
                            "componentEndBgColor" => '', // 组件背景颜色（结束）
                            "componentGradientAngle" => 'to bottom', // 渐变角度，上下（to bottom）、左右（to right）
                            "topRounded" => 0, // 组件上圆角
                            "bottomRounded" => 0, // 组件下圆角
                            "elementBgColor" => '', // 元素背景颜色
                            "topElementRounded" => 0,// 元素上圆角
                            "bottomElementRounded" => 0, // 元素下圆角
                            "margin" => [
                                "top" => 0, // 上边距
                                "bottom" => 0, // 下边距
                                "both" => 0 // 左右边距
                            ],
                        ],
                        'value' => [
                            "style" => "style-1",
                            "styleName" => "风格1",
                            "text" => "标题栏",
                            "link" => [
                                "name" => ""
                            ],
                            "textColor" => "#303133",
                            "fontSize" => 16,
                            "fontWeight" => "normal",
                            "textAlign" => "center",
                            "subTitle" => [
                                "text" => "副标题",
                                "color" => "#999999",
                                "fontSize" => 14,
                                "control" => false,
                                "fontWeight" => "normal"
                            ],
                            "more" => [
                                "text" => "查看更多",
                                "control" => false,
                                "isShow" => true,
                                "link" => [
                                    "name" => ""
                                ],
                                "color" => "#999999"
                            ],
                        ]
                    ],
                    'ImageAds' => [
                        'title' => '图片广告',
                        'icon' => 'iconfont-icontupianguanggao1',
                        'path' => 'edit-image-ads',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10002,
                        'value' => [
                            "imageHeight" => 180,
                            "list" => [
                                [
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "",
                                    "imgWidth" => 0,
                                    "imgHeight" => 0
                                ]
                            ]
                        ]
                    ],
                    'GraphicNav' => [
                        'title' => '图文导航',
                        'icon' => 'iconfont-icontuwendaohang2',
                        'path' => 'edit-graphic-nav',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10003,
                        'value' => [
                            "layout" => "horizontal",
                            "mode" => "graphic",
                            "type" => "img",
                            "showStyle" => "fixed",
                            "rowCount" => 4,
                            "pageCount" => 2,
                            "carousel" => [
                                "type" => "circle",
                                "color" => "#FFFFFF"
                            ],
                            "imageSize" => 40,
                            "aroundRadius" => 25,
                            "font" => [
                                "size" => 14,
                                "weight" => "normal",
                                "color" => "#303133"
                            ],
                            "list" => [
                                [
                                    "title" => "",
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "",
                                    "label" => [
                                        "control" => false,
                                        "text" => "热门",
                                        "textColor" => "#FFFFFF",
                                        "bgColorStart" => "#F83287",
                                        "bgColorEnd" => "#FE3423"
                                    ]
                                ],
                                [
                                    "title" => "",
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "",
                                    "label" => [
                                        "control" => false,
                                        "text" => "热门",
                                        "textColor" => "#FFFFFF",
                                        "bgColorStart" => "#F83287",
                                        "bgColorEnd" => "#FE3423"
                                    ]
                                ],
                                [
                                    "title" => "",
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "",
                                    "label" => [
                                        "control" => false,
                                        "text" => "热门",
                                        "textColor" => "#FFFFFF",
                                        "bgColorStart" => "#F83287",
                                        "bgColorEnd" => "#FE3423"
                                    ]
                                ],
                                [
                                    "title" => "",
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "",
                                    "label" => [
                                        "control" => false,
                                        "text" => "热门",
                                        "textColor" => "#FFFFFF",
                                        "bgColorStart" => "#F83287",
                                        "bgColorEnd" => "#FE3423"
                                    ]
                                ]
                            ],
                        ]
                    ],
                    'RubikCube' => [
                        'title' => '魔方',
                        'icon' => 'iconfont-iconmofang1',
                        'path' => 'edit-rubik-cube',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10004,
                        'value' => [
                            "mode" => "row1-of2",
                            "imageGap" => 0,
                            "list" => [
                                [
                                    "imageUrl" => "",
                                    "imgWidth" => 0,
                                    "imgHeight" => 0,
                                    "link" => [
                                        "name" => ""
                                    ]
                                ],
                                [
                                    "imageUrl" => "",
                                    "imgWidth" => 0,
                                    "imgHeight" => 0,
                                    "link" => [
                                        "name" => ""
                                    ]
                                ]
                            ]
                        ],
                    ],
                    'HotArea' => [
                        'title' => '热区',
                        'icon' => 'iconfont-iconrequ',
                        'path' => 'edit-hot-area',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10007,
                        'value' => [
                            "imageUrl" => "",
                            "imgWidth" => 0,
                            "imgHeight" => 0,
                            "heatMapData" => []
                        ],
                    ],
                    'MemberInfo' => [
                        'title' => '会员信息',
                        'icon' => 'iconfont-iconhuiyuanzhongxin',
                        'path' => 'edit-member-info',
                        'support_page' => [ 'DIY_MEMBER_INDEX' ],
                        'uses' => 1,
                        'sort' => 10008,
                        'value' => [
                            "style" => "style-1",
                            "styleName" => "风格1",
                            'bgUrl' => '',
                            'bgColorStart' => '',
                            'bgColorEnd' => ''
                        ],
                    ],
                    'MemberLevel' => [
                        'title' => '会员等级',
                        'icon' => 'iconfont-iconhuangguan',
                        'path' => 'edit-member-level',
                        'support_page' => [],
                        'uses' => 1,
                        'sort' => 10009,
                        'value' => [
                            "style" => "style-1",
                            "styleName" => "风格1"
                        ],
                    ],
                    'Notice' => [
                        'title' => '公告',
                        'icon' => 'iconfont-icongonggao',
                        'path' => 'edit-notice',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10010,
                        'value' => [
                            "noticeType" => 'img',
                            'imgType' => 'system',
                            "systemUrl" => "style_1", // 系统定义的图片
                            "imageUrl" => "", // 上传自定义图片
                            "showType" => "popup", // 点击类型 弹出框，跳转
                            "scrollWay" => "upDown", // 滚动方式 upDown：上下滚动，horizontal：横向滚动
                            "fontSize" => 14,
                            "fontWeight" => "normal",
                            "noticeTitle" => "公告", // 公告标题文字
                            "list" => [
                                [
                                    "text" => "公告",
                                    "link" => [
                                        "name" => ""
                                    ]
                                ]
                            ],
                        ],
                    ],
                    'RichText' => [
                        'title' => '富文本',
                        'icon' => 'iconfont-iconfuwenben1',
                        'path' => 'edit-rich-text',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10011,
                        'value' => [
                            "html" => ""
                        ],
                    ],
                    'ActiveCube' => [
                        'title' => '活动魔方',
                        'icon' => 'iconfont-iconmofang1',
                        'path' => 'edit-active-cube',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10012,
                        'value' => [
                            "titleStyle" => [
                                'title' => '风格1',
                                'value' => 'style-1'
                            ],
                            'text' => '超值爆款',
                            "textLink" => [
                                "name" => ""
                            ],
                            "titleColor" => "#F91700",
                            "subTitle" => [
                                "text" => "为您精选爆款",
                                "textColor" => "#FFFFFF",
                                "startColor" => "#FB792F",
                                "endColor" => "#F91700",
                                "link" => [
                                    "name" => ""
                                ],
                            ],
                            "blockStyle" => [
                                'title' => '风格1',
                                'value' => 'style-1',
                                'fontWeight' => 'normal'
                            ],
                            'list' => [
                                [
                                    "title" => [
                                        "text" => "今日推荐",
                                        "textColor" => "#303133"
                                    ],
                                    "subTitle" => [
                                        "text" => "诚意推荐",
                                        "textColor" => "#999999",
                                        "startColor" => "",
                                        "endColor" => "",
                                    ],
                                    "moreTitle" => [
                                        "text" => "去看看",
                                        "startColor" => "#FEA715",
                                        "endColor" => "#FE1E00",
                                    ],
                                    "listFrame" => [
                                        "startColor" => "#FEA715",
                                        "endColor" => "#FE1E00",
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods1.png",
                                ],
                                [
                                    "title" => [
                                        "text" => "优惠好物",
                                        "textColor" => "#303133"
                                    ],
                                    "subTitle" => [
                                        "text" => "领券更优惠",
                                        "textColor" => "#999999",
                                        "startColor" => "",
                                        "endColor" => "",
                                    ],
                                    "moreTitle" => [
                                        "text" => "去看看",
                                        "startColor" => "#FFBF50",
                                        "endColor" => "#FF9E03",
                                    ],
                                    "listFrame" => [
                                        "startColor" => "#FFBF50",
                                        "endColor" => "#FF9E03",
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods2.png",
                                ],
                                [
                                    "title" => [
                                        "text" => "热销推荐",
                                        "textColor" => "#303133"
                                    ],
                                    "subTitle" => [
                                        "text" => "本周热销商品",
                                        "textColor" => "#999999",
                                        "startColor" => "",
                                        "endColor" => "",
                                    ],
                                    "moreTitle" => [
                                        "text" => "去看看",
                                        "startColor" => "#A2E792",
                                        "endColor" => "#49CD2D",
                                    ],
                                    "listFrame" => [
                                        "startColor" => "#A2E792",
                                        "endColor" => "#49CD2D",
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods3.png",
                                ],
                                [
                                    "title" => [
                                        "text" => "书桌好物",
                                        "textColor" => "#303133"
                                    ],
                                    "subTitle" => [
                                        "text" => "办公好物推荐",
                                        "textColor" => "#999999",
                                        "startColor" => "",
                                        "endColor" => "",
                                    ],
                                    "moreTitle" => [
                                        "text" => "去看看",
                                        "startColor" => "#4AC1FF",
                                        "endColor" => "#1D7CFF",
                                    ],
                                    "listFrame" => [
                                        "startColor" => "#4AC1FF",
                                        "endColor" => "#1D7CFF",
                                    ],
                                    "link" => [
                                        "name" => ""
                                    ],
                                    "imageUrl" => "static/resource/images/diy/active_cube/active_cube_goods4.png",
                                ],
                            ],
                            // 组件属性
                            'template' => [
                                "textColor" => "#303133", // 文字颜色
                                'pageStartBgColor' => '', // 底部背景颜色（开始）
                                'pageEndBgColor' => '', // 底部背景颜色（结束）
                                'pageGradientAngle' => 'to bottom', // 渐变角度，从上到下（to bottom）、从左到右（to right）
                                'componentBgUrl' => '', // 组件背景图片
                                'componentBgAlpha' => 2, // 组件背景图片的透明度，0~10
                                "componentStartBgColor" => '', // 组件背景颜色（开始）
                                "componentEndBgColor" => '', // 组件背景颜色（结束）
                                "componentGradientAngle" => 'to bottom', // 渐变角度，上下（to bottom）、左右（to right）
                                "topRounded" => 12, // 组件上圆角
                                "bottomRounded" => 12, // 组件下圆角
                                "elementBgColor" => '#FFFAF5', // 元素背景颜色
                                "topElementRounded" => 0,// 元素上圆角
                                "bottomElementRounded" => 0, // 元素下圆角
                                "margin" => [
                                    "top" => 10, // 上边距
                                    "bottom" => 10, // 下边距
                                    "both" => 10 // 左右边距
                                ],
                            ],
                        ],
                    ],
                    'CarouselSearch' => [
                        'title' => '轮播搜索',
                        'icon' => 'iconfont-iconsousuokuang',
                        'path' => 'edit-carousel-search',
                        'support_page' => [],
                        'uses' => 1,
                        'sort' => 10013,
                        'position' => 'top_fixed', // 组件置顶标识，不能拖拽
                        'value' => [
                            'positionWay' => 'static',
                            'fixedBgColor' => '',
                            'bgGradient' => false,
                            // 搜索设置
                            'search' => [
                                'logo' => '',
                                'text' => '请输入搜索关键词',
                                "link" => [
                                    "name" => ""
                                ],
                                'hotWord' => [
                                    "interval" => 3,
                                    'list' => []
                                ]
                            ],
                            // 选项卡设置
                            'tab' => [
                                'control' => true, // 控制显示隐藏
                                'noColor' => '', // 未选中颜色
                                'selectColor' => '', // 选中颜色
                                'fixedNoColor' => '', // 下滑未选中颜色
                                'fixedSelectColor' => '', // 下滑选中颜色
                                'list' => [
                                    [
                                        'text' => '分类名称', // 最多4个字
                                        'source' => 'diy_page',
                                        'diy_id' => '',
                                        'diy_title' => ''
                                    ],
                                    [
                                        'text' => '分类名称',
                                        'source' => 'diy_page',
                                        'diy_id' => '',
                                        'diy_title' => ''
                                    ],
                                    [
                                        'text' => '分类名称',
                                        'source' => 'diy_page',
                                        'diy_id' => '',
                                        'diy_title' => ''
                                    ],
                                    [
                                        'text' => '分类名称',
                                        'source' => 'diy_page',
                                        'diy_id' => '',
                                        'diy_title' => ''
                                    ]
                                ]
                            ],
                            // 轮播图设置
                            'swiper' => [
                                'control' => true, // 控制显示隐藏
                                "interval" => 5,
                                'indicatorColor' => 'rgba(0, 0, 0, 0.3)', // 未选中颜色
                                "indicatorActiveColor" => '#FF0E0E',
                                'indicatorStyle' => 'style-1',
                                'indicatorAlign' => 'center',
                                'swiperStyle' => 'style-1',
                                'imageHeight' => 168,
                                'topRounded' => 0,
                                'bottomRounded' => 0,
                                'list' => [
                                    [
                                        "imageUrl" => "",
                                        "imgWidth" => 690,
                                        "imgHeight" => 330,
                                        "link" => [
                                            "name" => ""
                                        ]
                                    ]
                                ]
                            ]
                        ],
                    ],
                    'FloatBtn' => [
                        'title' => '浮动按钮',
                        'icon' => 'iconfont-iconfudonganniu1',
                        'path' => 'edit-float-btn',
                        'support_page' => [],
                        'uses' => 1,
                        'sort' => 10014,
                        'position' => 'fixed',
                        'value' => [
                            "imageSize" => 40,
                            "aroundRadius" => 0,
                            "bottomPosition" => "lowerRight", // 左上：upperLeft，右上：upperRight，左下：lowerLeft，右下：lowerRight
                            "list" => [
                                [
                                    "imageUrl" => "",
                                    "link" => [
                                        "name" => ""
                                    ]
                                ]
                            ],
                            "offset" => 0 // 偏移量
                        ],
                    ],
                    'HorzBlank' => [
                        'title' => '辅助空白',
                        'icon' => 'iconfont-iconfuzhukongbai1',
                        'path' => 'edit-horz-blank',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10015,
                        'value' => [
                            'height' => 20
                        ],
                    ],
                    'HorzLine' => [
                        'title' => '辅助线',
                        'icon' => 'iconfont-iconfuzhuxian1',
                        'path' => 'edit-horz-line',
                        'support_page' => [],
                        'uses' => 0,
                        'sort' => 10016,
                        'value' => [
                            'borderWidth' => 1,
                            'borderColor' => '#303133',
                            'borderStyle' => 'solid'
                        ],
                    ],

                ],
            ],
        ];
        return ( new DictLoader("UniappComponent") )->load($system_components);
    }

}
