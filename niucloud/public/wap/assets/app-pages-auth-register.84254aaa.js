import{d as e,a,Y as l,a1 as r,r as o,c as s,i as t,j as u,w as d,k as i,K as n,L as p,n as m,F as c,H as g,G as b,m as _,l as f,v as h,a4 as x,a5 as y,a0 as v,x as w,q as V,t as j,M as k,N as P,Z as S,I as q}from"./index-e6eea94a.js";import{_ as U}from"./u-input.b22dc8a5.js";import{_ as T,a as A}from"./u-form.b4025d59.js";import{u as C,_ as L}from"./sms-code.vue_vue_type_script_setup_true_lang.4a4810c5.js";import{_ as R}from"./app-link.vue_vue_type_script_setup_true_lang.31991b67.js";import{_ as E}from"./u-button.95082534.js";import"./u-icon.576e3c1b.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.3d983a7d.js";import"./u-modal.7c7fdfc6.js";import"./u-loading-icon.30209938.js";import"./u-popup.3f96e499.js";import"./u-transition.169ec9f0.js";import"./u-safe-bottom.7330cb29.js";const F=e({__name:"register",setup(e){const F=a({username:"",password:"",confirm_password:"",mobile:"",mobile_code:"",mobile_key:"",captcha_key:"",captcha_code:""});uni.getStorageSync("openid")&&Object.assign(F,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(F,{pid:uni.getStorageSync("pid")});const O=C(F);O.refresh();const Y=l(),Z=r(),B=o(!1),G=o(""),H=s((()=>{const e=[];return Z.login.is_username&&e.push({type:"username",title:S("usernameRegister")}),Z.login.is_mobile&&!Z.login.is_bind_mobile&&e.push({type:"mobile",title:S("mobileRegister")}),G.value=e[0]?e[0].type:"",e})),I=s((()=>({username:{type:"string",required:"username"==G.value,message:S("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==G.value,message:S("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:"username"==G.value,message:S("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,a)=>a==F.password,message:S("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:"mobile"==G.value||Z.login.is_bind_mobile,message:S("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,a)=>"mobile"!=G.value&&!Z.login.is_bind_mobile||uni.$u.test.mobile(a),message:S("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==G.value||Z.login.is_bind_mobile,message:S("codePlaceholder"),trigger:["blur","change"]},captcha_code:{type:"string",required:"username"==G.value,message:S("captchaPlaceholder"),trigger:["blur","change"]}}))),K=o(null),M=()=>{K.value.validate().then((()=>{if(B.value)return;B.value=!0;("username"==G.value?x:y)(F).then((e=>{Y.setToken(e.data.token),v().handleLoginBack()})).catch((()=>{B.value=!1,O.refresh()}))}))};return(e,a)=>{const l=w,r=V(j("u-input"),U),o=V(j("u-form-item"),T),s=V(j("sms-code"),L),x=k,y=P,v=V(j("app-link"),R),C=V(j("u-button"),E),Y=V(j("u-form"),A);return t(),u(l,{class:"w-screen h-screen flex flex-col"},{default:d((()=>[i(l,{class:"flex-1"},{default:d((()=>[i(l,{class:"h-[100rpx]"}),i(l,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:d((()=>[i(l,{class:"font-bold text-xl"},{default:d((()=>[n(p(m(S)("register")),1)])),_:1})])),_:1}),m(H).length>1?(t(),u(l,{key:0,class:"px-[60rpx] text-sm flex mb-[50rpx] font-bold leading-none"},{default:d((()=>[(t(!0),c(b,null,g(m(H),((e,a)=>(t(),c(b,null,[i(l,{class:q({"text-gray-300":e.type!=G.value}),onClick:a=>G.value=e.type},{default:d((()=>[n(p(e.title),1)])),_:2},1032,["class","onClick"]),f(i(l,{class:"mx-[30rpx] border-solid border-0 border-r-[2px] border-gray-300"},null,512),[[h,0==a]])],64)))),256))])),_:1})):_("v-if",!0),i(l,{class:"px-[60rpx]"},{default:d((()=>[i(Y,{labelPosition:"left",model:F,errorType:"toast",rules:m(I),ref_key:"formRef",ref:K},{default:d((()=>[f(i(l,null,{default:d((()=>[i(l,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"username","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.username,"onUpdate:modelValue":a[0]||(a[0]=e=>F.username=e),border:"none",clearable:"",placeholder:m(S)("usernamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(l,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"password","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.password,"onUpdate:modelValue":a[1]||(a[1]=e=>F.password=e),border:"none",type:"password",clearable:"",placeholder:m(S)("passwordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(l,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"confirm_password","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.confirm_password,"onUpdate:modelValue":a[2]||(a[2]=e=>F.confirm_password=e),border:"none",type:"password",clearable:"",placeholder:m(S)("confirmPasswordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==G.value]]),f(i(l,null,{default:d((()=>[i(l,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"mobile","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.mobile,"onUpdate:modelValue":a[3]||(a[3]=e=>F.mobile=e),border:"none",clearable:"",placeholder:m(S)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),i(l,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"code","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.mobile_code,"onUpdate:modelValue":a[5]||(a[5]=e=>F.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:m(S)("codePlaceholder")},{suffix:d((()=>[i(s,{mobile:F.mobile,type:"register",modelValue:F.mobile_key,"onUpdate:modelValue":a[4]||(a[4]=e=>F.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"mobile"==G.value||m(Z).login.is_bind_mobile]]),f(i(l,null,{default:d((()=>[i(l,{class:"mt-[30rpx]"},{default:d((()=>[i(o,{label:"",prop:"captcha_code","border-bottom":!0},{default:d((()=>[i(r,{modelValue:F.captcha_code,"onUpdate:modelValue":a[7]||(a[7]=e=>F.captcha_code=e),border:"none",clearable:"",placeholder:m(S)("captchaPlaceholder")},{suffix:d((()=>[i(x,{src:m(O).image.value,class:"h-[48rpx] ml-[20rpx]",mode:"heightFix",onClick:a[6]||(a[6]=e=>m(O).refresh())},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==G.value]]),i(l,{class:"flex text-xs justify-between mt-[20rpx] text-gray-400"},{default:d((()=>[i(v,{url:"/app/pages/auth/login"},{default:d((()=>[n(p(m(S)("haveAccount"))+"，",1),i(y,{class:"text-primary"},{default:d((()=>[n(p(m(S)("toLogin")),1)])),_:1})])),_:1})])),_:1}),i(l,{class:"mt-[80rpx]"},{default:d((()=>[i(C,{type:"primary",loading:B.value,loadingText:m(S)("registering"),onClick:M},{default:d((()=>[n(p(m(S)("register")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),m(Z).login.agreement_show?(t(),u(l,{key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},{default:d((()=>[n(p(m(S)("registerAgreeTips"))+" ",1),i(v,{url:"/app/pages/auth/agreement?key=service"},{default:d((()=>[i(y,{class:"text-primary"},{default:d((()=>[n(p(m(S)("userAgreement")),1)])),_:1})])),_:1}),n(" "+p(m(S)("and"))+" ",1),i(v,{url:"/app/pages/auth/agreement?key=privacy"},{default:d((()=>[i(y,{class:"text-primary"},{default:d((()=>[n(p(m(S)("privacyAgreement")),1)])),_:1})])),_:1})])),_:1})):_("v-if",!0)])),_:1})}}});export{F as default};
