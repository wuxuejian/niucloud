import { img, isWeixinBrowser, currRoute, currShareRoute } from '@/utils/common'
import { onShareAppMessage, onShareTimeline } from '@dcloudio/uni-app'
import { getShareInfo } from '@/app/api/diy';

// #ifdef H5
import wechat from '@/utils/wechat'
// #endif

export const useShare = () => {
    var wechatOptions: any = {};

    var weappOptions: any = {};

    const wechatInit = () => {
        if (!isWeixinBrowser()) return;
        // 初始化sdk
        wechat.init();
    }

    // 微信公众号分享
    const wechatShare = () => {
        if (!isWeixinBrowser()) return;
        wechat.share(wechatOptions);
    }

    const getQuery = () => {
        let query: any = currShareRoute().params;
        let wap_member_id = uni.getStorageSync('wap_member_id');
        if (wap_member_id) {
            query.mid = wap_member_id;
        }

        let queryStr = [];
        for (let key in query) {
            queryStr.push(key + '=' + query[key]);
        }

        return queryStr

    }

    const setShare = (options: any = {}) => {
        if (currRoute() == '' || currRoute().indexOf('app/pages/index/close') != -1 || currRoute().indexOf('app/pages/index/nosite') != -1) return;

        let queryStr = getQuery();

        // #ifdef H5

        let h5Link = location.origin + location.pathname + (queryStr.length > 0 ? '?' + queryStr.join('&') : '');

        wechatOptions = {
            link: h5Link
        }

        // #endif

        // #ifdef MP-WEIXIN
        weappOptions = {
            path: '/' + currRoute() + (queryStr.length > 0 ? '?' + queryStr.join('&') : ''),
            query: queryStr.join('&'),
        }
        // #endif

        if (options && options.wechat && options.weapp) {

            // #ifdef H5
            wechatOptions.title = options.wechat.title || ''
            wechatOptions.link = options.wechat.link || h5Link
            wechatOptions.desc = options.wechat.desc || ''
            wechatOptions.imgUrl = options.wechat.url ? img(options.wechat.url) : ''
            wechatShare()
            // #endif

            // #ifdef MP-WEIXIN
            weappOptions.title = options.weapp.title || ''
            weappOptions.query = options.weapp.path || queryStr.join('&')
            weappOptions.imageUrl = options.weapp.url ? img(options.weapp.url) : ''
            // #endif

            uni.setStorageSync('weappOptions', weappOptions)
        } else {
            getShareInfo({
                route: '/' + currRoute(),
                params: JSON.stringify(currShareRoute().params)
            }).then((res: any) => {
                let data = res.data;

                // #ifdef H5
                let wechat = data.wechat;
                if (wechat) {
                    wechatOptions.title = wechat.title
                    wechatOptions.desc = wechat.desc
                    wechatOptions.imgUrl = wechat.url ? img(wechat.url) : ''
                } else {
                    wechatOptions.title = document.title;
                    wechatOptions.desc = ''
                }
                wechatShare()
                // #endif

                // #ifdef MP-WEIXIN
                let weapp = data.weapp;
                if (weapp) {
                    weappOptions.title = weapp.title
                    weappOptions.imageUrl = weapp.url ? img(weapp.url) : ''
                }
                // #endif

                uni.setStorageSync('weappOptions', weappOptions)
            })
        }
    }

    // 小程序分享，分享给好友
    const shareApp = (options = {}) => {
        onShareAppMessage(() => {
            let config: any = uni.getStorageSync('weappOptions')
            if (!config) config = {}
            return {
                ...config,
                ...options
            }
        })

    }

    // 小程序分享，分享到朋友圈
    const shareTime = (options = {}) => {
        onShareTimeline(() => {
            let config: any = uni.getStorageSync('weappOptions')
            if (!config) config = {}
            return {
                ...config,
                ...options
            }
        })
    }

    return {
        wechatInit: wechatInit,
        setShare: setShare,
        onShareAppMessage: shareApp,
        onShareTimeline: shareTime,
    }
}
