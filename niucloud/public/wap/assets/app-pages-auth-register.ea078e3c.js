import{d as e,a as l,K as a,P as r,r as o,c as s,i as t,j as i,w as u,k as n,H as d,I as p,n as m,Q as c,R as g,S as b,m as _,l as f,v as h,E as x,p as y,T as v,L as w,W as k,X as V,O as j,x as P,q as S,t as C,Y as q,J as T,e as U}from"./index-87ab774c.js";import{_ as A}from"./u-input.a6337814.js";import{_ as R,a as E}from"./u-form.265b98ab.js";import{u as L,_ as O}from"./sms-code.vue_vue_type_script_setup_true_lang.2388e2d2.js";import{_ as W}from"./u-button.01d935e0.js";import"./u-icon.e07e714b.js";import"./_plugin-vue_export-helper.1b428a4d.js";import"./u-line.39b96898.js";import"./u-modal.828b889f.js";import"./u-loading-icon.387770c2.js";import"./u-popup.3478eb27.js";import"./u-transition.ec8f5bea.js";import"./u-safe-bottom.da624f42.js";const X=e({__name:"register",setup(e){const X=l({username:"",password:"",confirm_password:"",mobile:"",mobile_code:"",mobile_key:"",captcha_key:"",captcha_code:""});uni.getStorageSync("openid")&&Object.assign(X,{openid:uni.getStorageSync("openid")}),uni.getStorageSync("pid")&&Object.assign(X,{pid:uni.getStorageSync("pid")});const Y=L(X);Y.refresh();const z=a(),B=r(),F=o(!1),H=o(""),I=s((()=>{const e=[];return B.login.is_username&&e.push({type:"username",title:w("usernameRegister")}),B.login.is_mobile&&!B.login.is_bind_mobile&&e.push({type:"mobile",title:w("mobileRegister")}),H.value=e[0]?e[0].type:"",e})),J=s((()=>({username:{type:"string",required:"username"==H.value,message:w("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:"username"==H.value,message:w("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:"username"==H.value,message:w("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>l==X.password,message:w("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:"mobile"==H.value||B.login.is_bind_mobile,message:w("mobilePlaceholder"),trigger:["blur","change"]},{validator:(e,l)=>"mobile"!=H.value&&!B.login.is_bind_mobile||uni.$u.test.mobile(l),message:w("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:"mobile"==H.value||B.login.is_bind_mobile,message:w("codePlaceholder"),trigger:["blur","change"]},captcha_code:{type:"string",required:"username"==H.value,message:w("captchaPlaceholder"),trigger:["blur","change"]}}))),K=o(!1),Q=o(null),$=()=>{Q.value.validate().then((()=>{if(B.login.agreement_show&&!K.value)return v({title:w("isAgreeTips"),icon:"none"}),!1;if(F.value)return;F.value=!0;("username"==H.value?k:V)(X).then((e=>{z.setToken(e.data.token),uni.removeStorageSync("pid"),j().handleLoginBack()})).catch((()=>{F.value=!1,Y.refresh()}))}))};return(e,l)=>{const a=P,r=S(C("u-input"),A),o=S(C("u-form-item"),R),s=S(C("sms-code"),O),v=q,k=T,V=S(C("u-button"),W),j=S(C("u-form"),E);return t(),i(a,{class:"w-screen h-screen flex flex-col",style:y(e.themeColor())},{default:u((()=>[n(a,{class:"flex-1"},{default:u((()=>[n(a,{class:"h-[100rpx]"}),n(a,{class:"px-[60rpx] pt-[100rpx] mb-[100rpx]"},{default:u((()=>[n(a,{class:"font-bold text-xl"},{default:u((()=>[d(p(m(w)("register")),1)])),_:1})])),_:1}),m(I).length>1?(t(),i(a,{key:0,class:"px-[60rpx] text-sm flex mb-[50rpx] font-bold leading-none"},{default:u((()=>[(t(!0),c(b,null,g(m(I),((e,l)=>(t(),c(b,null,[n(a,{class:x({"text-gray-300":e.type!=H.value}),onClick:l=>H.value=e.type},{default:u((()=>[d(p(e.title),1)])),_:2},1032,["class","onClick"]),f(n(a,{class:"mx-[30rpx] border-solid border-0 border-r-[2px] border-gray-300"},null,512),[[h,0==l]])],64)))),256))])),_:1})):_("v-if",!0),n(a,{class:"px-[60rpx]"},{default:u((()=>[n(j,{labelPosition:"left",model:X,errorType:"toast",rules:m(J),ref_key:"formRef",ref:Q},{default:u((()=>[f(n(a,null,{default:u((()=>[n(a,{class:"mt-[30rpx]"},{default:u((()=>[n(o,{label:"",prop:"username","border-bottom":!0},{default:u((()=>[n(r,{modelValue:X.username,"onUpdate:modelValue":l[0]||(l[0]=e=>X.username=e),border:"none",clearable:"",placeholder:m(w)("usernamePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),n(a,{class:"mt-[30rpx]"},{default:u((()=>[n(o,{label:"",prop:"password","border-bottom":!0},{default:u((()=>[n(r,{modelValue:X.password,"onUpdate:modelValue":l[1]||(l[1]=e=>X.password=e),border:"none",type:"password",clearable:"",placeholder:m(w)("passwordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),n(a,{class:"mt-[30rpx]"},{default:u((()=>[n(o,{label:"",prop:"confirm_password","border-bottom":!0},{default:u((()=>[n(r,{modelValue:X.confirm_password,"onUpdate:modelValue":l[2]||(l[2]=e=>X.confirm_password=e),border:"none",type:"password",clearable:"",placeholder:m(w)("confirmPasswordPlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==H.value]]),f(n(a,null,{default:u((()=>[n(a,{class:"mt-[30rpx]"},{default:u((()=>[n(o,{label:"",prop:"mobile","border-bottom":!0},{default:u((()=>[n(r,{modelValue:X.mobile,"onUpdate:modelValue":l[3]||(l[3]=e=>X.mobile=e),border:"none",clearable:"",placeholder:m(w)("mobilePlaceholder")},null,8,["modelValue","placeholder"])])),_:1})])),_:1}),n(a,{class:"mt-[30rpx]"},{default:u((()=>[n(o,{label:"",prop:"code","border-bottom":!0},{default:u((()=>[n(r,{modelValue:X.mobile_code,"onUpdate:modelValue":l[5]||(l[5]=e=>X.mobile_code=e),border:"none",type:"password",clearable:"",placeholder:m(w)("codePlaceholder")},{suffix:u((()=>[n(s,{mobile:X.mobile,type:"register",modelValue:X.mobile_key,"onUpdate:modelValue":l[4]||(l[4]=e=>X.mobile_key=e)},null,8,["mobile","modelValue"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"mobile"==H.value||m(B).login.is_bind_mobile]]),f(n(a,null,{default:u((()=>[n(a,{class:"mt-[30rpx]"},{default:u((()=>[n(o,{label:"",prop:"captcha_code","border-bottom":!0},{default:u((()=>[n(r,{modelValue:X.captcha_code,"onUpdate:modelValue":l[7]||(l[7]=e=>X.captcha_code=e),border:"none",clearable:"",placeholder:m(w)("captchaPlaceholder")},{suffix:u((()=>[n(v,{src:m(Y).image.value,class:"h-[48rpx] ml-[20rpx]",mode:"heightFix",onClick:l[6]||(l[6]=e=>m(Y).refresh())},null,8,["src"])])),_:1},8,["modelValue","placeholder"])])),_:1})])),_:1})])),_:1},512),[[h,"username"==H.value]]),n(a,{class:"flex text-xs justify-between mt-[20rpx] text-gray-400"},{default:u((()=>[n(a,{onClick:l[8]||(l[8]=e=>m(U)({url:"/app/pages/auth/login"}))},{default:u((()=>[d(p(m(w)("haveAccount"))+"，",1),n(k,{class:"text-primary"},{default:u((()=>[d(p(m(w)("toLogin")),1)])),_:1})])),_:1})])),_:1}),n(a,{class:"mt-[80rpx]"},{default:u((()=>[n(V,{type:"primary",loading:F.value,loadingText:m(w)("registering"),onClick:$},{default:u((()=>[d(p(m(w)("register")),1)])),_:1},8,["loading","loadingText"])])),_:1})])),_:1},8,["model","rules"])])),_:1})])),_:1}),m(B).login.agreement_show?(t(),i(a,{key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},{default:u((()=>[n(k,{class:x(["iconfont text-[var(--primary-color)] text-[34rpx] mr-[12rpx]",K.value?"iconxuanze1":"iconcheckbox_nol"]),onClick:l[9]||(l[9]=e=>K.value=!K.value)},null,8,["class"]),d(" "+p(m(w)("registerAgreeTips"))+" ",1),n(a,{onClick:l[10]||(l[10]=e=>m(U)({url:"/app/pages/auth/agreement?key=service"}))},{default:u((()=>[n(k,{class:"text-primary"},{default:u((()=>[d(p(m(w)("userAgreement")),1)])),_:1})])),_:1}),d(" "+p(m(w)("and"))+" ",1),n(a,{onClick:l[11]||(l[11]=e=>m(U)({url:"/app/pages/auth/agreement?key=privacy"}))},{default:u((()=>[n(k,{class:"text-primary"},{default:u((()=>[d(p(m(w)("privacyAgreement")),1)])),_:1})])),_:1})])),_:1})):_("v-if",!0)])),_:1},8,["style"])}}});export{X as default};
