import{d as t,r as e,o as a,A as s,L as l,i as o,j as u,w as r,k as n,E as i,H as c,I as p,n as m,m as d,p as f,e as x,bb as y,J as _,x as v,q as j,t as b,ab as h}from"./index-6f7dfcc0.js";import{_ as g}from"./u-button.2c6f4da9.js";import{_ as w}from"./u-loading-icon.8bd45fe0.js";import{_ as T}from"./u-modal.cb75bc2d.js";import{g as C}from"./pay.a7760228.js";import"./u-icon.4a3c5455.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.8022b244.js";import"./u-popup.1c7e0660.js";import"./u-transition.77d401ec.js";import"./u-safe-bottom.fa559bf3.js";const S=t({__name:"result",setup(t){const S=e(null),k=e(!1);let z="",E=0,F=0;a((t=>{z=t.trade_type,E=t.trade_id,I()}));const I=()=>{C(z,E).then((t=>{if(!uni.$u.test.isEmpty(t.data)){if(1==t.data.status&&F<5)return k.value=!0,F++,void setTimeout((()=>{I()}),1e3);S.value=t.data,k.value=!1,s({title:2==S.value.status?l("pay.paySuccess"):l("pay.payFail")})}})).catch((()=>{}))},P=()=>{var t;const e=decodeURIComponent(uni.getStorageSync("payReturn"));x(e?{url:e,mode:"redirectTo"}:{url:y(),param:{code:null==(t=S.value)?void 0:t.out_trade_no},mode:"redirectTo"})};return(t,e)=>{const a=_,s=v,x=j(b("u-button"),g),y=j(b("u-loading-icon"),w),C=j(b("u-modal"),T);return o(),u(s,{style:f(t.themeColor())},{default:r((()=>[S.value?(o(),u(s,{key:0,class:"w-screen h-screen flex flex-col items-center"},{default:r((()=>[n(s,{class:"flex-1 flex flex-col items-center w-full pt-[100rpx]"},{default:r((()=>[n(a,{class:i(["iconfont text-2xl",2==S.value.status?"text-primary iconduigou":"iconzhifushibai text-red"])},null,8,["class"]),n(s,{class:"text-sm"},{default:r((()=>[c(p(2==S.value.status?m(l)("pay.paySuccess"):m(l)("pay.payFail")),1)])),_:1}),n(s,{class:"text-xl font-bold pt-[30rpx]"},{default:r((()=>[n(a,{class:"text-base"},{default:r((()=>[c(p(m(l)("currency")),1)])),_:1}),n(a,null,{default:r((()=>[c(p(m(h)(S.value.money)),1)])),_:1})])),_:1})])),_:1}),n(s,{class:"pb-[200rpx] w-[240rpx]"},{default:r((()=>[n(x,{type:"primary",text:2==S.value.status?m(l)("complete"):m(l)("close"),plain:!0,onClick:P},null,8,["text"])])),_:1})])),_:1})):d("v-if",!0),n(C,{show:k.value,showCancelButton:!0,confirmText:m(l)("pay.completePay"),cancelText:m(l)("pay.incompletePay"),onCancel:P},{default:r((()=>[n(s,{class:"py-[20rpx]"},{default:r((()=>[n(y,{text:m(l)("pay.getting"),textSize:"16",mode:"circle",vertical:!0},null,8,["text"])])),_:1})])),_:1},8,["show","confirmText","cancelText"])])),_:1},8,["style"])}}});export{S as default};
