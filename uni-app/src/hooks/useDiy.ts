import { ref, reactive, computed } from 'vue';
import { onLoad, onShow, onPullDownRefresh, onPageScroll, onUnload } from '@dcloudio/uni-app';
import { img, handleOnloadParams } from '@/utils/common';
import { getDiyInfo } from '@/app/api/diy';
import useDiyStore from '@/app/stores/diy';

export function useDiy(params: any = {}) {

    const loading = ref(true);
    const diyStore = useDiyStore();
    const pullDownRefreshCount = ref(0)

    const id = ref(0)
    const name = ref(params.name || '')
    const template = ref('')

    // 自定义页面 数据
    const diyData = reactive({
        pageMode: 'diy',
        title: '',
        global: {},
        value: []
    })

    const getLoading = () => {
        return loading.value;
    }

    const data = computed(() => {
        if (diyStore.mode == 'decorate') {
            return diyStore;
        } else {
            return diyData;
        }
    })

    const isShowTopTabbar = ref(false);

    const pageStyle = () => {
        var style = '';
        if (data.value.global.pageStartBgColor) {
            if (data.value.global.pageStartBgColor && data.value.global.pageEndBgColor) style += `background:linear-gradient(${ data.value.global.pageGradientAngle },${ data.value.global.pageStartBgColor },${ data.value.global.pageEndBgColor });`;
            else style += 'background-color:' + data.value.global.pageStartBgColor + ';';
        }

        style += 'min-height:calc(100vh - 50px);';
        if (data.value.global.bgUrl) {
            style += `background-image:url('${ img(data.value.global.bgUrl) }');`;
        }

        if (data.value.global.bgHeightScale) {
            style += `background-size: 100% ${ data.value.global.bgHeightScale }%;`;
        }

        return style;
    };

    // 监听页面加载
    const onLoadLifeCycle = () => {
        onLoad((option: any) => {
            // #ifdef MP-WEIXIN
            // 处理小程序场景值参数
            option = handleOnloadParams(option);
            // #endif

            // #ifdef H5
            // 装修模式
            diyStore.mode = option.mode || '';
            if (diyStore.mode == 'decorate') {
                loading.value = false;
            }
            // #endif

            id.value = option.id || '';
            if (name.value == '') name.value = option.name || '';
            template.value = option.template || '';
        });
    }

    // 监听页面显示
    const onShowLifeCycle = (callback: any = null) => {
        onShow(() => {
            // 装修模式
            if (diyStore.mode == 'decorate') {
                diyStore.init();
            } else {
                getDiyInfo({
                    id: id.value,
                    name: name.value,
                    template: template.value
                }).then((res: any) => {
                    let requestData = res.data;
                    if (requestData.value) {
                        diyData.pageMode = requestData.mode;
                        diyData.title = requestData.title;

                        let sources = JSON.parse(requestData.value);
                        diyData.global = sources.global;
                        diyData.value = sources.value;
                        diyData.value.forEach((item: any, index) => {
                            item.pageStyle = '';
                            if (item.pageStartBgColor) {
                                if (item.pageStartBgColor && item.pageEndBgColor) item.pageStyle += `background:linear-gradient(${ item.pageGradientAngle },${ item.pageStartBgColor },${ item.pageEndBgColor });`;
                                else item.pageStyle += 'background-color:' + item.pageStartBgColor + ';';
                            }

                            if (item.margin) {
                                if (item.margin.top > 0) {
                                    item.pageStyle += 'padding-top:' + item.margin.top * 2 + 'rpx' + ';';
                                }
                                item.pageStyle += 'padding-bottom:' + item.margin.bottom * 2 + 'rpx' + ';';
                                item.pageStyle += 'padding-right:' + item.margin.both * 2 + 'rpx' + ';';
                                item.pageStyle += 'padding-left:' + item.margin.both * 2 + 'rpx' + ';';
                            }
                        });

                        // 控制自定义头部是否出现 | 微信小程序
                        isShowTopTabbar.value = diyData.value.some((item) => {
                            return item && item.position && item.position == 'top_fixed'
                        });

                        uni.setNavigationBarTitle({
                            title: diyData.title
                        });

                    }

                    loading.value = false;

                    if (callback) callback(requestData)

                });
            }

        })
    }

    // 监听页面卸载
    const onUnloadLifeCycle = () => {
        onUnload(() => {
            // 兼容轮播搜索组件-切换分类时，导致个人中心白屏
            diyStore.topFixedStatus = 'home'
        })
    }

    // 监听下拉刷新事件
    const onPullDownRefreshLifeCycle = () => {
        onPullDownRefresh(() => {
            pullDownRefreshCount.value++;
            uni.stopPullDownRefresh();
        })
    }

    // 监听滚动事件
    const onPageScrollLifeCycle = () => {
        onPageScroll((e) => {
            if (e.scrollTop > 0) {
                diyStore.scrollTop = e.scrollTop;
            }
        })
    }

    return {
        getLoading,
        pullDownRefreshCount,
        data: data.value,
        isShowTopTabbar,
        pageStyle,
        onLoad: onLoadLifeCycle,
        onShow: onShowLifeCycle,
        onUnload: onUnloadLifeCycle,
        onPullDownRefresh: onPullDownRefreshLifeCycle,
        onPageScroll: onPageScrollLifeCycle,
    }
}
