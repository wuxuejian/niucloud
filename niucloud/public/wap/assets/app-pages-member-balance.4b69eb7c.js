import{_ as e}from"./u-loading-page.7f46a889.js";import{B as a,C as t,D as r,q as o,t as l,i as s,j as i,w as n,k as d,p as u,m as p,G as c,Y as m,x as y,d as g,a6 as h,r as f,af as _,e as v,F as b,H as x,I as w,n as k,L as S,a9 as C,Q as E,S as $,R as I,y as L,T as U,ae as j,K as B,ag as T,a as F,b as R,a8 as H,l as z,v as O,J as M}from"./index-87ab774c.js";import{_ as N}from"./u-button.01d935e0.js";import{_ as P}from"./u-icon.e07e714b.js";import{_ as A}from"./u-transition.ec8f5bea.js";import{_ as Y}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as q}from"./u-popup.3478eb27.js";import{p as D,g as G}from"./pay.d4b72a5e.js";import{w as J}from"./wechat.965189a0.js";import"./u-loading-icon.387770c2.js";import"./u-safe-bottom.da624f42.js";const K=Y({name:"u-image",mixins:[t,r,{props:{src:{type:String,default:a.image.src},mode:{type:String,default:a.image.mode},width:{type:[String,Number],default:a.image.width},height:{type:[String,Number],default:a.image.height},shape:{type:String,default:a.image.shape},radius:{type:[String,Number],default:a.image.radius},lazyLoad:{type:Boolean,default:a.image.lazyLoad},showMenuByLongpress:{type:Boolean,default:a.image.showMenuByLongpress},loadingIcon:{type:String,default:a.image.loadingIcon},errorIcon:{type:String,default:a.image.errorIcon},showLoading:{type:Boolean,default:a.image.showLoading},showError:{type:Boolean,default:a.image.showError},fade:{type:Boolean,default:a.image.fade},webp:{type:Boolean,default:a.image.webp},duration:{type:[String,Number],default:a.image.duration},bgColor:{type:String,default:a.image.bgColor}}}],data(){return{isError:!1,loading:!0,opacity:1,durationTime:this.duration,backgroundStyle:{},show:!1}},watch:{src:{immediate:!0,handler(e){e?(this.isError=!1,this.loading=!0):this.isError=!0}}},computed:{wrapStyle(){let e={};return e.width=this.$u.addUnit(this.width),e.height=this.$u.addUnit(this.height),e.borderRadius="circle"==this.shape?"10000px":uni.$u.addUnit(this.radius),e.overflow=this.radius>0?"hidden":"visible",uni.$u.deepMerge(e,uni.$u.addStyle(this.customStyle))}},mounted(){this.show=!0},emits:["click","error","load"],methods:{onClick(){this.$emit("click")},onErrorHandler(e){this.loading=!1,this.isError=!0,this.$emit("error",e)},onLoadHandler(e){this.loading=!1,this.isError=!1,this.$emit("load",e),this.removeBgColor()},removeBgColor(){this.backgroundStyle={backgroundColor:"transparent"}}}},[["render",function(e,a,t,r,g,h){const f=m,_=o(l("u-icon"),P),v=y,b=o(l("u-transition"),A);return s(),i(b,{mode:"fade",show:g.show,duration:e.fade?1e3:0},{default:n((()=>[d(v,{class:"u-image",onClick:h.onClick,style:u([h.wrapStyle,g.backgroundStyle])},{default:n((()=>[g.isError?p("v-if",!0):(s(),i(f,{key:0,src:e.src,mode:e.mode,onError:h.onErrorHandler,onLoad:h.onLoadHandler,"show-menu-by-longpress":e.showMenuByLongpress,"lazy-load":e.lazyLoad,class:"u-image__image",style:u({borderRadius:"circle"==e.shape?"10000px":e.$u.addUnit(e.radius),width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},null,8,["src","mode","onError","onLoad","show-menu-by-longpress","lazy-load","style"])),e.showLoading&&g.loading?(s(),i(v,{key:1,class:"u-image__loading",style:u({borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.radius),backgroundColor:this.bgColor,width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},{default:n((()=>[c(e.$slots,"loading",{},(()=>[d(_,{name:e.loadingIcon,width:e.width,height:e.height},null,8,["name","width","height"])]),!0)])),_:3},8,["style"])):p("v-if",!0),e.showError&&g.isError&&!g.loading?(s(),i(v,{key:2,class:"u-image__error",style:u({borderRadius:"circle"==e.shape?"50%":e.$u.addUnit(e.radius),width:e.$u.addUnit(e.width),height:e.$u.addUnit(e.height)})},{default:n((()=>[c(e.$slots,"error",{},(()=>[d(_,{name:e.errorIcon,width:e.width,height:e.height},null,8,["name","width","height"])]),!0)])),_:3},8,["style"])):p("v-if",!0)])),_:3},8,["onClick","style"])])),_:3},8,["show","duration"])}],["__scopeId","data-v-466b6710"]]),Q=Y(g({__name:"pay",emits:["close"],setup(e,{expose:a,emit:t}){h()&&J.init();const r=f(!1),u=f(!1),c=f(null),m=f(""),g=()=>{var e,a;uni.$u.test.isEmpty(m.value)?U({title:S("pay.notHavePayType"),icon:"none"}):u.value||(u.value=!0,D({trade_type:null==(e=c.value)?void 0:e.trade_type,trade_id:null==(a=c.value)?void 0:a.trade_id,type:m.value}).then((e=>{var a,t,r,o,l,s;switch(m.value){case"wechatpay":h()?(e.data.timestamp=e.data.timeStamp,delete e.data.timeStamp,J.pay({...e.data,success:()=>{B()},cancel:()=>{u.value=!1}})):(uni.setStorageSync("paymenting",{trade_type:null==(a=c.value)?void 0:a.trade_type,trade_id:null==(t=c.value)?void 0:t.trade_id}),location.href=e.data.h5_url);break;case"alipay":h()?v({url:"/app/pages/pay/browser",param:{trade_type:null==(r=c.value)?void 0:r.trade_type,trade_id:null==(o=c.value)?void 0:o.trade_id,alipay:encodeURIComponent(e.data.url)},mode:"redirectTo"}):(uni.setStorageSync("paymenting",{trade_type:null==(l=c.value)?void 0:l.trade_type,trade_id:null==(s=c.value)?void 0:s.trade_id}),location.href=e.data.url);break;default:B()}})).catch((()=>{u.value=!1})))};_("checkIsReturnAfterPayment",(()=>{const e=uni.getStorageSync("paymenting");uni.getStorageSync("paymenting")&&v({url:"/app/pages/pay/result",param:{trade_type:e.trade_type,trade_id:e.trade_id},mode:"redirectTo",success(){uni.removeStorageSync("paymenting")}})}));const B=()=>{var e,a;v({url:"/app/pages/pay/result",param:{trade_type:null==(e=c.value)?void 0:e.trade_type,trade_id:null==(a=c.value)?void 0:a.trade_id},mode:"redirectTo"})},T=()=>{uni.removeStorageSync("paymenting"),r.value=!1,t("close")};return a({open:(e,a,t="")=>{uni.setStorageSync("payReturn",encodeURIComponent(t)),G(e,a).then((e=>{let{data:a}=e;c.value=a,uni.$u.test.isEmpty(a)?U({title:S("pay.notObtainedInfo"),icon:"none"}):0!=a.money?(m.value=a.pay_type_list[0]?a.pay_type_list[0].key:"",r.value=!0):B()})).catch((()=>{}))}}),(e,a)=>{const t=y,h=o(l("u-image"),K),f=o(l("u-icon"),P),_=j,v=o(l("u-button"),N),U=o(l("u-popup"),q);return s(),i(U,{show:r.value,round:10,onClose:T,closeable:!0,bgColor:"#fff",zIndex:"10081",closeOnClickOverlay:!1},{default:n((()=>[c.value?(s(),i(t,{key:0,class:"flex flex-col h-[75vh]",onTouchmove:a[0]||(a[0]=b((()=>{}),["prevent","stop"]))},{default:n((()=>[d(t,{class:"head"},{default:n((()=>[d(t,{class:"text-center py-[26rpx]"},{default:n((()=>[x(w(k(S)("pay.payTitle")),1)])),_:1}),d(t,{class:"flex items-end justify-center w-full text-xl font-bold py-[20rpx]"},{default:n((()=>[d(t,{class:"text-base mr-[4rpx]"},{default:n((()=>[x(w(k(S)("currency")),1)])),_:1}),x(" "+w(k(C)(c.value.money)),1)])),_:1})])),_:1}),d(_,{"scroll-y":"true",class:"flex-1 pt-[20rpx]"},{default:n((()=>[d(t,{class:"flex text-sm px-[30rpx] py-[20rpx]"},{default:n((()=>[d(t,{class:"text-gray-500"},{default:n((()=>[x(w(k(S)("pay.orderInfo")),1)])),_:1}),d(t,{class:"text-right flex-1 pl-[30rpx] truncate"},{default:n((()=>[x(w(c.value.body),1)])),_:1})])),_:1}),d(t,{class:"mx-[30rpx] py-[10rpx] px-[30rpx] bg-white rounded-md bg-page"},{default:n((()=>[c.value.pay_type_list.length?(s(!0),E($,{key:0},I(c.value.pay_type_list,((e,a)=>(s(),i(t,{class:"pay-item py-[18rpx] flex items-center border-0 border-b border-solid border-[#eee]",key:a,onClick:a=>m.value=e.key},{default:n((()=>[d(h,{src:k(L)(e.icon),width:"50rpx",height:"50rpx"},null,8,["src"]),d(t,{class:"flex-1 px-[20rpx] text-sm font-bold"},{default:n((()=>[x(w(e.name),1)])),_:2},1024),e.key==m.value?(s(),i(f,{key:0,name:"checkbox-mark",color:"var(--primary-color)"})):p("v-if",!0)])),_:2},1032,["onClick"])))),128)):(s(),i(t,{key:1,class:"py-[20rpx] text-center text-sm text-gray-subtitle"},{default:n((()=>[x(w(k(S)("pay.notHavePayType")),1)])),_:1}))])),_:1})])),_:1}),d(t,{class:"p-[30rpx]"},{default:n((()=>[d(v,{type:"primary",loading:u.value,text:k(S)("pay.confirmPay"),shape:"circle",onClick:g},null,8,["loading","text"])])),_:1})])),_:1})):p("v-if",!0)])),_:1},8,["show"])}}}),[["__scopeId","data-v-f08c60b8"]]),W=Y(g({__name:"balance",setup(a){const t=B(),r=T(),c=F({is_auto_transfer:0,is_auto_verify:0,is_open:0,min:0,rate:0,transfer_type:[]}),g=f(!0);R((()=>{H().then((e=>{for(let a in e.data)c[a]=e.data[a];g.value=!1}))}));const h=()=>{uni.setStorageSync("cashOutAccountType","money"),v({url:"/app/pages/member/apply_cash_out"})};return(a,f)=>{const _=o(l("u-loading-page"),e),b=y,E=m,$=M,I=o(l("u-button"),N),U=o(l("pay"),Q);return s(),i(b,{style:u(a.themeColor())},{default:n((()=>[d(_,{loading:g.value,loadingText:""},null,8,["loading"]),z(d(b,{class:"account-info-wrap"},{default:n((()=>[d(b,{class:"account-info-head",style:u({background:"url("+k(L)("static/resource/images/member/balance_bg.png")+") no-repeat 95% 30% / auto 250rpx, linear-gradient(314deg, #FE7849 0%, #FF1959 100%)"})},{default:n((()=>[d(b,{class:"name"},{default:n((()=>[x(w(k(S)("balanceInfo")),1)])),_:1}),d(b,{class:"content"},{default:n((()=>[d(b,{class:"money"},{default:n((()=>[x(w(k(t).info?k(C)((parseFloat(k(t).info.balance)+parseFloat(k(t).info.money)).toString()):"0.00"),1)])),_:1}),d(b,{class:"text"},{default:n((()=>[x(w(k(S)("accountBalance")),1)])),_:1}),d(b,{class:"money-wrap"},{default:n((()=>[d(b,{class:"money-item",onClick:f[0]||(f[0]=e=>k(v)({url:"/app/pages/member/detailed_account",param:{type:"balance"}}))},{default:n((()=>[d(b,{class:"money"},{default:n((()=>{var e;return[x(w(k(C)(null==(e=k(t).info)?void 0:e.balance)||"0.00"),1)]})),_:1}),d(b,{class:"text leading-none"},{default:n((()=>[x(w(k(S)("balance")),1)])),_:1})])),_:1}),d(b,{class:"money-item",onClick:f[1]||(f[1]=e=>k(v)({url:"/app/pages/member/detailed_account",param:{type:"money"}}))},{default:n((()=>[d(b,{class:"money"},{default:n((()=>{var e;return[x(w(k(C)(null==(e=k(t).info)?void 0:e.money)||"0.00"),1)]})),_:1}),d(b,{class:"text leading-none"},{default:n((()=>[x(w(k(S)("money")),1)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["style"]),d(b,{class:"account-info-btn"},{default:n((()=>[k(r).siteAddons.includes("recharge")?(s(),i(I,{key:0,type:"primary",shape:"circle",class:"btn",customStyle:{backgroundColor:"#FE4E50",color:"#fff",borderColor:"#FE4E50",width:"calc(100vw - 64rpx)"},onClick:f[2]||(f[2]=e=>k(v)({url:"/addon/recharge/pages/recharge"}))},{default:n((()=>[d(E,{class:"max-w-[36rpx] max-h-[36rpx] mr-1",src:k(L)("static/resource/images/member/reset.png")},null,8,["src"]),d($,null,{default:n((()=>[x(w(k(S)("recharge")),1)])),_:1})])),_:1},8,["customStyle"])):p("v-if",!0),1==c.is_open?(s(),i(I,{key:1,type:"primary",plain:!0,shape:"circle",class:"btn",customStyle:{backgroundColor:"#fff",color:"#FE4E50",borderColor:"#FE4E50",width:"calc(100vw - 64rpx)"},onClick:h},{default:n((()=>[d(E,{class:"max-w-[36rpx] max-h-[36rpx] mr-1",src:k(L)("static/resource/images/member/withdraw_deposit.png")},null,8,["src"]),d($,null,{default:n((()=>[x(w(k(S)("cashOut")),1)])),_:1})])),_:1},8,["customStyle"])):p("v-if",!0)])),_:1}),d(U,{ref:"payRef",onClose:f[3]||(f[3]=e=>a.rechargeLoading=!1)},null,512)])),_:1},512),[[O,!g.value]])])),_:1},8,["style"])}}}),[["__scopeId","data-v-d70634ed"]]);export{W as default};
