import{d as N,O as T,f as A,r as h,n as B,aK as $,s as D,a3 as v,N as e,h as b,c as I,a as s,u as a,t as n,y as O,I as R,w as p,e as t,i as g,W,X as j,_ as F,Y as L,E as Q,$ as z}from"./index-b19d04dd.js";/* empty css                   *//* empty css                  *//* empty css                */import{_ as M}from"./index.vue_vue_type_style_index_0_lang-488770a0.js";/* empty css                */import{_ as X}from"./index-34e6dc3a.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{g as Y,a as G,s as H}from"./aliapp-f934cfbe.js";/* empty css                    *//* empty css                        */import"./index.vue_vue_type_style_index_0_lang-4806f3ef.js";/* empty css                   */import"./attachment-b6d6fc85.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                         *//* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-6089139d.js";/* empty css                */import"./sys-dbdff24e.js";import"./_plugin-vue_export-helper-c27b6911.js";const J={class:"main-container"},Z={class:"detail-head"},ee=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),ae={class:"ml-[1px]"},le=s("span",{class:"adorn"},"|",-1),te={class:"right"},oe={class:"panel-title !text-sm"},se={class:"form-tip"},ie={class:"panel-title !text-sm"},pe={class:"input-width"},ne={class:"form-tip"},re={class:"input-width"},de={class:"form-tip"},ue={class:"input-width"},ce={class:"form-tip"},me={class:"panel-title !text-sm"},_e={class:"flex"},fe={class:"panel-title !text-sm"},ye={class:"fixed-footer-wrap"},he={class:"fixed-footer"},He=N({__name:"config",setup(ve){const V=T(),w=A(),x=V.meta.title,u=h(!0),o=B({name:"",qrcode:"",private_key:"",app_id:"",aes_key:"",public_key_crt:"",alipay_public_key_crt:"",alipay_with_crt:"",request_url:""}),f=h();Y().then(d=>{Object.assign(o,d.data),u.value=!1}),G().then(d=>{o.request_url=d.data.domain});const{copy:k,isSupported:C,copied:y}=$(),S=d=>{if(!C.value){v({message:e("notSupportCopy"),type:"warning"});return}k(d)};D(y,()=>{y.value&&v({message:e("copySuccess"),type:"success"})});const E=async d=>{u.value||!d||await d.validate(async l=>{l&&(u.value=!0,H(o).then(()=>{u.value=!1}).catch(()=>{u.value=!1}))})};return(d,l)=>{const c=W,r=j,P=X,m=F,_=M,U=L,q=Q,K=z;return b(),I("div",J,[s("div",Z,[s("div",{class:"left",onClick:l[0]||(l[0]=i=>a(w).push({path:"/channel/aliapp"}))},[ee,s("span",ae,n(a(e)("returnToPreviousPage")),1)]),le,s("span",te,n(a(x)),1)]),O((b(),R(U,{model:o,"label-width":"150px",ref_key:"formRef",ref:f,class:"page-form"},{default:p(()=>[t(m,{class:"box-card !border-none",shadow:"never"},{default:p(()=>[s("h3",oe,n(a(e)("aliappSet")),1),t(r,{label:a(e)("aliappName")},{default:p(()=>[t(c,{modelValue:o.name,"onUpdate:modelValue":l[1]||(l[1]=i=>o.name=i),placeholder:a(e)("aliappNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(r,{label:a(e)("aliappQrcode")},{default:p(()=>[t(P,{modelValue:o.qrcode,"onUpdate:modelValue":l[2]||(l[2]=i=>o.qrcode=i)},null,8,["modelValue"]),s("div",se,n(a(e)("aliappQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),t(m,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:p(()=>[s("h3",ie,n(a(e)("aliappDevelopInfo")),1),t(r,{label:a(e)("aliappOriginal")},{default:p(()=>[t(c,{modelValue:o.private_key,"onUpdate:modelValue":l[3]||(l[3]=i=>o.private_key=i),placeholder:a(e)("aliappOriginalPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(r,{label:a(e)("aliappAppid")},{default:p(()=>[t(c,{modelValue:o.app_id,"onUpdate:modelValue":l[4]||(l[4]=i=>o.app_id=i),placeholder:a(e)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(r,{label:a(e)("countersignType")},{default:p(()=>[g(n(a(e)("certificate")),1)]),_:1},8,["label"]),t(r,{label:a(e)("publicKey")},{default:p(()=>[s("div",pe,[t(_,{modelValue:o.public_key_crt,"onUpdate:modelValue":l[5]||(l[5]=i=>o.public_key_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),s("div",ne,n(a(e)("publicKeyTips")),1)]),_:1},8,["label"]),t(r,{label:a(e)("alipayPublicKey")},{default:p(()=>[s("div",re,[t(_,{modelValue:o.alipay_public_key_crt,"onUpdate:modelValue":l[6]||(l[6]=i=>o.alipay_public_key_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),s("div",de,n(a(e)("alipayPublicKeyTips")),1)]),_:1},8,["label"]),t(r,{label:a(e)("alipayWithCrt")},{default:p(()=>[s("div",ue,[t(_,{modelValue:o.alipay_with_crt,"onUpdate:modelValue":l[7]||(l[7]=i=>o.alipay_with_crt=i),api:"sys/document/aliyun"},null,8,["modelValue"])]),s("div",ce,n(a(e)("alipayWithCrtTips")),1)]),_:1},8,["label"])]),_:1}),t(m,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:p(()=>[s("h3",me,n(a(e)("theServerSetting")),1),t(r,{label:"AESKey"},{default:p(()=>[t(c,{modelValue:o.aes_key,"onUpdate:modelValue":l[8]||(l[8]=i=>o.aes_key=i),placeholder:a(e)("AESKeyPlaceholder"),class:"input-width","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"])]),_:1})]),_:1}),t(m,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:p(()=>[s("div",_e,[s("h3",fe,n(a(e)("functionSetting")),1)]),t(r,{label:a(e)("serveWhiteList")},{default:p(()=>[t(c,{"model-value":o.request_url,class:"input-width",readonly:!0},{append:p(()=>[s("div",{class:"cursor-pointer",onClick:l[9]||(l[9]=i=>S(o.request_url))},n(a(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"])),[[K,u.value]]),s("div",ye,[s("div",he,[t(q,{type:"primary",loading:u.value,onClick:l[10]||(l[10]=i=>E(f.value))},{default:p(()=>[g(n(a(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{He as default};
