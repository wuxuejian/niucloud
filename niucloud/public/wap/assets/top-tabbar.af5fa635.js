import{d as t,aT as e,aw as l,H as a,r as s,bA as o,ag as n,_ as i,aA as r,o as c,O as u,f as y,u as d,c as p,w as f,b as g,n as v,A as h,D as x,E as k,Q as m,a7 as b,ao as C,aB as w,a1 as _,a6 as B,M as S,aD as j,a as T,bB as q,aK as A,i as L,W as $,F as D,a0 as F,aC as H,bq as O}from"./index-f0b22e55.js";import{m as U}from"./manifest.f0e1739a.js";import{_ as W}from"./_plugin-vue_export-helper.1b428a4d.js";const z=W(t({__name:"top-tabbar",props:{data:{type:Object,default:{}},titleColor:{type:String,default:"#606266"},customBack:{type:Function,default:null},scrollTop:{type:[String,Number],default:"0"},isBack:{type:Boolean,default:!0}},setup(t,{expose:W}){const z=t;let I=e();I.platform;let R={};const E=l(),K=a((()=>z.data)),M=a((()=>{if(z.data&&z.data.topStatusBar)return z.data.topStatusBar})),N=a((()=>{let t="";return z.isBack&&G.value?(t+="padding-left: 30rpx;","style-1"==M.value.style&&(t+="padding-right:80rpx;")):("style-1"==M.value.style&&(t+="padding-right: 30rpx;"),t+="padding-left: 30rpx;"),t})),P=a((()=>{let t="";return t+="font-size: 28rpx;",t+=`color: ${M.value.textColor};`,"style-1"==M.value.style&&(t+=`text-align: ${M.value.textAlign};`),t})),Q=a((()=>{var t="";if(M.value.isTransparent){t="transparent";let e=1;t=z.scrollTop>e?M.value.bgColor:"transparent"}else t=M.value.bgColor;return t}));let G=s(!1),J=o();const V=()=>{"function"==typeof z.customBack?z.customBack():b()},X=a((()=>`calc(100vw - ${R.right}px + ${R.width}px + 10px)`));let Y=s(0);const Z=H(),tt=t=>{if(Object.keys(t).length){if(!t.url)return;if("app/pages/member/index"==_()&&!B())return void S().setLoginBack({url:t.url});j(t)}else T(t)},et=n();let lt=s("定位中..."),at=uni.getStorageSync("mapConfig");const st=()=>{if(it("latng")){lt.value="定位中...";let e=et.location;var t=it("latng").split(",");e.latitude=t[0],e.longitude=t[1],et.setLocation(e)}lt.value="定位中...",uni.getStorageSync("addressByLatlng")&&(lt.value=uni.getStorageSync("addressByLatlng").formatted_addresses.recommend),1==at.is_open&&q()&&q().is_expired&&A({fail:t=>{lt.value="定位中..."}})};i((()=>et.location),((t,e)=>{t.latitude&&t.longitude?ot():lt.value="定位中..."}),{deep:!0});const ot=()=>{let t={latlng:""};t.latlng=et.location.latitude+","+et.location.longitude,O(t).then((t=>{t.data&&Object.keys(t.data).length?(lt.value=t.data.formatted_addresses.recommend,uni.setStorageSync("addressByLatlng",t.data)):lt.value="定位中..."}))},nt=()=>{let t=location.origin+location.pathname;window.location.href="https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl="+encodeURIComponent(t)+"&key="+U.h5.sdkConfigs.maps.qqmap.key+"&referer=myapp"},it=t=>{for(var e=window.location.search.substring(1).split("&"),l=0;l<e.length;l++){var a=e[l].split("=");if(a[0]==t)return a[1]}return!1};let rt=s("");i((()=>M.value.style),((t,e)=>{if("style-5"==M.value.style){rt.value="";let t=I.windowWidth/K.value.imgWidth*K.value.imgHeight;rt.value+="width:100%;",t-=88,rt.value+=`padding-top:${t}px;`,rt.value+="height:0;"}}),{immediate:!0,deep:!0}),r((()=>{C((()=>{w().in(Z).select(".ns-navbar-wrap .u-navbar .content-wrap").boundingClientRect((t=>{Y.value=t?t.height:0,E.topTabarHeight=Y.value})).exec()})),J.length>1&&(G.value=!0),M.value&&"style-4"==M.value.style&&st()}));return W({refresh:()=>{M.value&&"style-4"==M.value.style&&st()}}),(e,l)=>{const a=L,s=$,o=D;return c(),u(m,null,[y(" diyStore.mode !='decorate' && topStatusBarData topStatusBarData.style == 'style-5 为了兼容风格五 "),"decorate"!=d(E).mode&&d(M)||"decorate"==d(E).mode&&d(M)&&"style-5"==d(M).style?(c(),p(a,{key:0,class:h(["ns-navbar-wrap",d(M).style])},{default:f((()=>[g(a,{class:"u-navbar",style:v({backgroundColor:d(Q)})},{default:f((()=>[g(a,{class:"navbar-inner",style:v({width:"100%",height:d(Y)+"px"})},{default:f((()=>["style-1"==d(M).style?(c(),p(a,{key:0,class:h(["content-wrap",[d(M).textAlign]]),style:v(d(N))},{default:f((()=>[t.isBack&&d(G)?(c(),p(a,{key:0,class:"back-wrap iconfont iconjiantou3",style:v({color:d(M).textColor||t.titleColor}),onClick:V},null,8,["style"])):y("v-if",!0),g(a,{class:"title-wrap",style:v(d(P))},{default:f((()=>[x(k(d(K).title),1)])),_:1},8,["style"])])),_:1},8,["class","style"])):y("v-if",!0),"style-2"==d(M).style?(c(),p(a,{key:1,class:"content-wrap",style:v(d(N)),onClick:l[0]||(l[0]=t=>tt(d(M).link))},{default:f((()=>[t.isBack&&d(G)?(c(),p(a,{key:0,class:"back-wrap iconfont iconjiantou3",style:v({color:d(M).textColor||t.titleColor}),onClick:V},null,8,["style"])):y("v-if",!0),g(a,{class:"title-wrap",style:v({color:d(M).textColor})},{default:f((()=>[g(a,null,{default:f((()=>[g(s,{src:d(F)(d(M).imgUrl),mode:"heightFix"},null,8,["src"])])),_:1}),g(a,{style:v({color:d(M).textColor})},{default:f((()=>[x(k(d(K).title),1)])),_:1},8,["style"])])),_:1},8,["style"])])),_:1},8,["style"])):y("v-if",!0),"style-3"==d(M).style?(c(),p(a,{key:2,style:v(d(N)),class:"content-wrap"},{default:f((()=>[t.isBack&&d(G)?(c(),p(a,{key:0,class:"back-wrap iconfont iconjiantou3",style:v({color:d(M).textColor||t.titleColor}),onClick:V},null,8,["style"])):y("v-if",!0),g(a,{class:"title-wrap",onClick:l[1]||(l[1]=t=>tt(d(M).link))},{default:f((()=>[g(s,{src:d(F)(d(M).imgUrl),mode:"heightFix"},null,8,["src"])])),_:1}),g(a,{class:"search",onClick:l[2]||(l[2]=t=>tt(d(M).link)),style:v({height:d(R).height-2+"px",lineHeight:d(R).height-2+"px"})},{default:f((()=>[g(o,{class:"iconfont iconsousuo absolute left-[20rpx]"}),g(o,{class:"text-[28rpx]"},{default:f((()=>[x(k(d(M).inputPlaceholder),1)])),_:1})])),_:1},8,["style"]),g(a,{style:v({width:d(X)})},null,8,["style"])])),_:1},8,["style"])):y("v-if",!0),"style-4"==d(M).style?(c(),p(a,{key:3,style:v(d(N)),class:"content-wrap"},{default:f((()=>[t.isBack&&d(G)?(c(),p(a,{key:0,class:"back-wrap iconfont iconjiantou3",style:v({color:d(M).textColor||t.titleColor}),onClick:V},null,8,["style"])):y("v-if",!0),g(o,{class:"iconfont iconxiazai19 text-[28rpx]",style:v({color:d(M).textColor})},null,8,["style"]),g(a,{class:"title-wrap",onClick:l[3]||(l[3]=t=>nt()),style:v({color:d(M).textColor})},{default:f((()=>[x(k(d(lt)),1)])),_:1},8,["style"]),g(o,{class:"iconfont iconxiangyoujiantou text-[24rpx]",onClick:l[4]||(l[4]=t=>nt()),style:v({color:d(M).textColor})},null,8,["style"])])),_:1},8,["style"])):y("v-if",!0)])),_:1},8,["style"])])),_:1},8,["style"]),y(" 风格5，填充 "),"style-5"==d(M).style?(c(),p(a,{key:0,style:v(d(rt))},null,8,["style"])):y("v-if",!0),y(" 解决fixed定位后导航栏塌陷的问题 "),g(a,{class:"u-navbar-placeholder",style:v({width:"100%",paddingTop:d(Y)+"px"})},null,8,["style"])])),_:1},8,["class"])):y("v-if",!0)],2112)}}}),[["__scopeId","data-v-bbab40fe"]]);export{z as _};
