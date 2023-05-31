import{u as N,t as T,E as j,_ as z}from"./test.4419888c.js";import{E as D}from"./el-input.16174efa.js";import{E as $,a as G}from"./el-overlay.d52a4f9a.js";import{E as H}from"./el-button.15af20ac.js";import{_ as J}from"./nuxt-link.a60afb85.js";import{a as M,W as O,$ as Q,r as b,s as E,D as Y,o as v,e as y,j as d,f as a,u as o,I as K,F as W,G as X,w as i,a0 as A,a1 as S,V as s,h as w,t as c,k as Z,a7 as ee,a8 as oe,y as le,J as se,K as ae}from"./entry.58b5d0b7.js";import{u as re}from"./useLogin.0e6e0bc6.js";import{_ as te}from"./_plugin-vue_export-helper.c27b6911.js";import"./throttle.27dab4ef.js";import"./debounce.07c829e4.js";import"./use-form-item.a46d28b8.js";import"./index.fbbc8ba5.js";import"./index.9ac2b7ac.js";import"./_initCloneObject.a43daffc.js";import"./vnode.59a8ea73.js";const R=_=>(se("data-v-a22e105d"),_=_(),ae(),_),ie={class:"w-full h-full bg-page flex items-center justify-center"},ne={class:"flex bg-white"},de={class:"flex flex-col items-center w-[330px] py-[100px] border-r"},me=R(()=>d("div",{class:"title font-bold text-xl"},"打开手机微信",-1)),ue=R(()=>d("div",{class:"tips text-sm mt-[5px]"},"点击右上角打开扫一扫",-1)),pe={class:"qrcode mt-[30px] border leading-none"},ce={class:"bg-white w-[380px] p-[30px]"},ge={class:"flex items-end my-[30px]"},fe=["onClick"],_e={class:"py-0 leading-none"},he={class:"flex justify-end leading-none"},be={key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},ve={class:"text-primary"},ye={class:"text-primary"},we=M({__name:"register",setup(_){const x=O(),u=Q();u.getLoginConfig();const n=b(""),q=E(()=>{const e=[];return u.login.is_username&&e.push({type:"username",title:s("usernameRegister")}),u.login.is_mobile&&!u.login.is_bind_mobile&&e.push({type:"mobile",title:s("mobileRegister")}),n.value=e[0]?e[0].type:"",e}),f=b(!1),r=Y({username:"",password:"",confirm_password:"",mobile:"",mobile_code:"",mobile_key:"",captcha_key:"",captcha_code:""}),L=E(()=>({username:{type:"string",required:n.value=="username",message:s("usernamePlaceholder"),trigger:["blur","change"]},password:{type:"string",required:n.value=="username",message:s("passwordPlaceholder"),trigger:["blur","change"]},confirm_password:[{type:"string",required:n.value=="username",message:s("confirmPasswordPlaceholder"),trigger:["blur","change"]},{validator(e,l,g){return l==r.password},message:s("confirmPasswordError"),trigger:["change","blur"]}],mobile:[{type:"string",required:n.value=="mobile"||u.login.is_bind_mobile,message:s("mobilePlaceholder"),trigger:["blur","change"]},{validator(e,l,g){return n.value!="mobile"&&!u.login.is_bind_mobile?!0:T.mobile(l)},message:s("mobileError"),trigger:["change","blur"]}],mobile_code:{type:"string",required:n.value=="mobile"||u.login.is_bind_mobile,message:s("codePlaceholder"),trigger:["blur","change"]},captcha_code:{type:"string",required:n.value=="username",message:s("captchaPlaceholder"),trigger:["blur","change"]}})),V=b(),U=async()=>{var e;await((e=V.value)==null?void 0:e.validate(async(l,g)=>{if(l){if(f.value)return;f.value=!0,(n.value=="username"?ee:oe)(r).then(p=>{x.setToken(p.data.token),re().handleLoginBack()}).catch(()=>{f.value=!1,h.refresh()})}}))},h=N(r);h.refresh();const C=b(null),I=async()=>{var e;await((e=V.value)==null?void 0:e.validateField("mobile",async(l,g)=>{var m;l&&((m=C.value)==null||m.send())}))};return(e,l)=>{const g=j,m=D,p=$,B=z,P=H,k=J,F=G;return v(),y("div",ie,[d("div",ne,[d("div",de,[me,ue,d("div",pe,[a(g,{src:("img"in e?e.img:o(K))("https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQHU7zwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAySlJSbU1Sb0hiMlQxOEcwSGhBY1AAAgTSfStkAwRYAgAA"),class:"w-[120px]"},null,8,["src"])])]),d("div",ce,[d("div",ge,[(v(!0),y(W,null,X(o(q),t=>(v(),y("div",{class:le(["mr-[20px] text-base cursor-pointer leading-none",{"font-bold":o(n)==t.type}]),onClick:Ve=>n.value=t.type},c(t.title),11,fe))),256))]),a(F,{model:o(r),ref_key:"formRef",ref:V,rules:o(L),"validate-on-rule-change":!1},{default:i(()=>[A(d("div",null,[a(p,{prop:"username"},{default:i(()=>[a(m,{modelValue:o(r).username,"onUpdate:modelValue":l[0]||(l[0]=t=>o(r).username=t),placeholder:("t"in e?e.t:o(s))("usernamePlaceholder"),clearable:"","inline-message":!0},null,8,["modelValue","placeholder"])]),_:1}),a(p,{prop:"password"},{default:i(()=>[a(m,{modelValue:o(r).password,"onUpdate:modelValue":l[1]||(l[1]=t=>o(r).password=t),placeholder:("t"in e?e.t:o(s))("passwordPlaceholder"),type:"password",clearable:"","show-password":!0},null,8,["modelValue","placeholder"])]),_:1}),a(p,{prop:"confirm_password"},{default:i(()=>[a(m,{modelValue:o(r).confirm_password,"onUpdate:modelValue":l[2]||(l[2]=t=>o(r).confirm_password=t),placeholder:("t"in e?e.t:o(s))("confirmPasswordPlaceholder"),type:"password",clearable:"","show-password":!0},null,8,["modelValue","placeholder"])]),_:1})],512),[[S,o(n)=="username"]]),A(d("div",null,[a(p,{prop:"mobile"},{default:i(()=>[a(m,{modelValue:o(r).mobile,"onUpdate:modelValue":l[3]||(l[3]=t=>o(r).mobile=t),placeholder:("t"in e?e.t:o(s))("mobilePlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),_:1}),a(p,{prop:"mobile_code"},{default:i(()=>[a(m,{modelValue:o(r).mobile_code,"onUpdate:modelValue":l[5]||(l[5]=t=>o(r).mobile_code=t),placeholder:("t"in e?e.t:o(s))("codePlaceholder")},{suffix:i(()=>[a(B,{mobile:o(r).mobile,type:"login",modelValue:o(r).mobile_key,"onUpdate:modelValue":l[4]||(l[4]=t=>o(r).mobile_key=t),onClick:I,ref_key:"smsCodeRef",ref:C},null,8,["mobile","modelValue"])]),_:1},8,["modelValue","placeholder"])]),_:1})],512),[[S,o(n)=="mobile"||o(u).login.is_bind_mobile]]),A(d("div",null,[a(p,{prop:"captcha_code"},{default:i(()=>[a(m,{modelValue:o(r).captcha_code,"onUpdate:modelValue":l[7]||(l[7]=t=>o(r).captcha_code=t),placeholder:("t"in e?e.t:o(s))("captchaPlaceholder")},{suffix:i(()=>[d("div",_e,[a(g,{src:o(h).image.value,class:"h-[30px] cursor-pointer",onClick:l[6]||(l[6]=t=>o(h).refresh())},null,8,["src"])])]),_:1},8,["modelValue","placeholder"])]),_:1})],512),[[S,o(n)=="username"]]),d("div",he,[a(k,{to:"/auth/login"},{default:i(()=>[a(P,{type:"primary",link:""},{default:i(()=>[w(c(("t"in e?e.t:o(s))("haveAccount"))+"，"+c(("t"in e?e.t:o(s))("toLogin")),1)]),_:1})]),_:1})]),a(p,null,{default:i(()=>[a(P,{type:"primary",class:"mt-[20px] w-full",size:"large",onClick:U,loading:o(f)},{default:i(()=>[w(c(o(f)?("t"in e?e.t:o(s))("registering"):("t"in e?e.t:o(s))("register")),1)]),_:1},8,["loading"])]),_:1}),o(u).login.agreement_show?(v(),y("div",be,[w(c(("t"in e?e.t:o(s))("registerAgreeTips"))+" ",1),a(k,{to:"/auth/agreement?key=service"},{default:i(()=>[d("span",ve,c(("t"in e?e.t:o(s))("userAgreement")),1)]),_:1}),w(" "+c(("t"in e?e.t:o(s))("and"))+" ",1),a(k,{to:"/auth/agreement?key=privacy"},{default:i(()=>[d("span",ye,c(("t"in e?e.t:o(s))("privacyAgreement")),1)]),_:1})])):Z("",!0)]),_:1},8,["model","rules"])])])])}}});const Te=te(we,[["__scopeId","data-v-a22e105d"]]);export{Te as default};
