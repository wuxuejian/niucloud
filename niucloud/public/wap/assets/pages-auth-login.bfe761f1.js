import{d as e,a as l,U as a,Y as r,r as o,c as t,h as s,i as u,w as n,j as d,D as i,E as p,l as m,M as c,N as b,O as g,m as _,k as f,v as x,Z as y,_ as h,X as v,t as j,p as k,q as w,H as V,J as P,F as U}from"./index-15eacd31.js";import{_ as T}from"./u-input.4212a359.js";import{_ as q,a as S}from"./u-form.84a1fd52.js";import{_ as A}from"./sms-code.vue_vue_type_script_setup_true_lang.bcd0d968.js";import{_ as C}from"./app-link.vue_vue_type_script_setup_true_lang.18597de0.js";import{_ as L}from"./u-button.5c85e6cc.js";import"./u-icon.f5369555.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.bb8d1497.js";import"./u-modal.755a4b61.js";import"./u-loading-icon.ea8c9ece.js";import"./u-popup.8a491625.js";import"./u-transition.a952a64b.js";import"./u-safe-bottom.593b5cec.js";const E=e({__name:"login",setup(e){const E=l({username:"",password:"",mobile:"",mobile_code:"",mobile_key:""});uni.getStorageSync("openid")&&Object.assign(E,{openid:uni.getStorageSync("openid")});const O=a(),R=r(),Z=o(!1),$=o(""),B=t((()=>{const e=[];return R.login.is_username&&e.push({type:"username",title:P("usernameLogin")}),R.login.is_mobile&&e.push({type:"mobile",title:P("mobileLogin")}),$.value=e[0]?e[0].type:"",e})),D=t((()=>({username:{type:"string",required:"username"==$.value,message:P("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==$.value,message:P("passwordPlaceholder"),trigger:["blur","change"]},mobile:[{type:"string",required:"mobile"==$.value,message:P("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=$.value||uni.$u.test.mobile(l),message:P("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==$.value,message:P("codePlaceholder"),trigger:["blur","change"]}}))),F=o(null),H=()=>{F.value.validate().then((()=>{if(Z.value)return;Z.value=!0;("username"==$.value?y:h)(E).then((e=>{O.setToken(e.data.token),v().handleLoginBack()})).catch((()=>{Z.value=!1}))}))};return(e,l)=>{const a=j,r=k(w("u-input"),T),o=k(w("u-form-item"),q),t=k(w("sms-code"),A),y=V,h=k(w("app-link"),C),v=k(w("u-button"),L),O=k(w("u-form"),S);return s(),u(a,{class:"w-screen h-screen flex flex-col"},{default:n((()=>[d(a,{class:"flex-1"},{default:n((()=>[d(a,{class:"h-[100rpx]"}),d(a,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:n((()=>[d(a,{class:"font-bold text-xl"},{default:n((()=>[i(p(m(P)("login")),1)])),_:1})])),_:1}),m(B).length>1?(s(),u(a,{key:0,class:"px-[60rpx] text-sm flex mb-[50rpx] font-bold leading-none"},{default:n((()=>[(s(!0),c(g,null,b(m(B),((e,l)=>(s(),c(g,null,[d(a,{class:U({"text-gray-300":e.type!=$.value}),onClick:l=>$.value=e.type},{default:n((()=>[i(p(e.title),1)])),_:2},1032,["class","onClick"]),f(d(a,{class:"mx-[30rpx] border-solid border-0 border-r-[2px] border-gray-300"},null,512),[[x,0==l]])],64)))),256))])),_:1})):_("",!0),d(a,{class:"px-[60rpx]"},{default:n((()=>[d(O,{labelPosition:"left",model:E,errorType:"toast",rules:m(D),ref_key:"formRef",ref:F},{default:n((()=>[f(d(a,null,{default:n((()=>[d(o,{label:"",prop:"username","border-bottom":!0},{default:n((()=>[d(r,{modelValue:E.username,"onUpdate:modelValue":l[0]||(l[0]=e=>E.username=e),border:"none",clearable:"",placeholder:m(P)("usernamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),d(a,{class:"mt-[40rpx]"},{default:n((()=>[d(o,{label:"",prop:"password","border-bottom":!0},{default:n((()=>[d(r,{modelValue:E.password,"onUpdate:modelValue":l[1]||(l[1]=e=>E.password=e),border:"none",type:"password",clearable:"",placeholder:m(P)("passwordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[x,"username"==$.value]]),f(d(a,null,{default:n((()=>[d(o,{label:"",prop:"mobile","border-bottom":!0},{default:n((()=>[d(r,{modelValue:E.mobile,"onUpdate:modelValue":l[2]||(l[2]=e=>E.mobile=e),border:"none",clearable:"",placeholder:m(P)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1}),d(a,{class:"mt-[40rpx]"},{default:n((()=>[d(o,{label:"",prop:"mobile_code","border-bottom":!0},{default:n((()=>[d(r,{modelValue:E.mobile_code,"onUpdate:modelValue":l[4]||(l[4]=e=>E.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:m(P)("codePlaceholder")},{suffix:n((()=>[d(t,{mobile:E.mobile,type:"login",modelValue:E.mobile_key,"onUpdate:modelValue":l[3]||(l[3]=e=>E.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[x,"mobile"==$.value]]),d(a,{class:"flex text-xs justify-between mt-[20rpx] text-gray-400"},{default:n((()=>[d(h,{url:"/pages/auth/register"},{default:n((()=>[i(p(m(P)("noAccount"))+" ",1),d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("toRegister")),1)])),_:1})])),_:1}),d(h,{url:"/pages/auth/resetpwd"},{default:n((()=>[i(p(m(P)("resetpwd")),1)])),_:1})])),_:1}),d(a,{class:"mt-[80rpx]"},{default:n((()=>[d(v,{type:"primary",loading:Z.value,loadingText:m(P)("logining"),onClick:H},{default:n((()=>[i(p(m(P)("login")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),m(R).login.agreement_show?(s(),u(a,{key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},{default:n((()=>[i(p(m(P)("agreeTips"))+" ",1),d(h,{url:"/pages/auth/agreement?key=service"},{default:n((()=>[d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("userAgreement")),1)])),_:1})])),_:1}),i(" "+p(m(P)("and"))+" ",1),d(h,{url:"/pages/auth/agreement?key=privacy"},{default:n((()=>[d(y,{class:"text-primary"},{default:n((()=>[i(p(m(P)("privacyAgreement")),1)])),_:1})])),_:1})])),_:1})):_("",!0)])),_:1})}}});export{E as default};
