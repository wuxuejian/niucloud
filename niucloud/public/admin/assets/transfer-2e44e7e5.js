import{d as E,r as y,R as S,c as k,V as q,e as b,f as T,y as a,x as p,g as i,B as c,u as t,Q as U,v as R,A as B}from"./base-04829be5.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                */import{_ as F}from"./index.vue_vue_type_style_index_0_lang-91f82d8d.js";/* empty css                 *//* empty css                 *//* empty css                */import{t as e}from"./index-043d021e.js";import{X as D,Y as K}from"./sys-f9859bed.js";import{u as N}from"./vue-router-fee568b2.js";import{E as A}from"./index-7e933ae4.js";import{E as W}from"./index-7037df89.js";import{E as $}from"./index-db9b8d96.js";import{a as j,E as z}from"./index-6bd50bb5.js";import{E as L}from"./index-88566e4e.js";import{E as Q}from"./index-eb678249.js";import{v as X}from"./directive-013f0a4e.js";import{_ as Y}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                    */import"./storage-1a3ddb14.js";import"./index-30df2c14.js";import"./index-92283b18.js";import"./typescript-defaf979.js";import"./index-a2524300.js";import"./index-760fce0d.js";import"./error-78e43d3e.js";import"./index-1d455165.js";import"./common-111e3797.js";import"./common-2cf17469.js";import"./index-faea7bd5.js";import"./index-236cb599.js";import"./event-9519ab40.js";import"./index-d7f4b4bb.js";import"./index-de053f2e.js";import"./castArray-11aea762.js";import"./_Uint8Array-99b916e9.js";import"./_initCloneObject-e5a1aa13.js";import"./index-4edf2cad.js";const G={class:"main-container"},H={class:"flex items-center"},J={class:"text-base"},M={class:"flex ml-[18px] justify-between items-center mt-[20px]"},O={class:"text-[20px]"},Z={class:"panel-title !text-sm"},ee={class:"form-tip"},ae={class:"form-tip"},te={class:"input-width"},le={class:"form-tip"},oe={class:"input-width"},re={class:"form-tip"},ie={class:"panel-title !text-sm"},pe={class:"form-tip"},ce={class:"input-width"},se={class:"input-width"},_e={class:"input-width"},ne={class:"fixed-footer-wrap"},de={class:"fixed-footer"},me=E({__name:"transfer",setup(ue){const w=N().meta.title,_=y(!1),l=S({...{wechatpay_config:{mch_id:"",mch_secret_key:"",mch_secret_cert:"",mch_public_cert_path:""},alipay_config:{app_secret_cert:"",app_public_cert_path:"",alipay_public_cert_path:"",alipay_root_cert_path:"",app_id:""}}});(async()=>{_.value=!0;let n=await(await D("transfer")).data;n&&n.length&&(l.wechatpay_config=n[0].config,l.alipay_config=n[1].config),_.value=!1})();const u=y(),v=k(()=>({"wechatpay_config.mch_id":[{required:!0,message:e("mchIdPlaceholder"),trigger:"blur"}],"wechatpay_config.mch_secret_key":[{required:!0,message:e("mchSecretKeyPlaceholder"),trigger:"blur"}],"wechatpay_config.mch_secret_cert":[{required:!0,message:e("mchSecretCertPlaceholder"),trigger:"blur"}],"wechatpay_config.mch_public_cert_path":[{required:!0,message:e("mchPublicCertPathPlaceholder"),trigger:"blur"}],"alipay_config.app_id":[{required:!0,message:e("appIdPlaceholder"),trigger:"blur"}],"alipay_config.app_secret_cert":[{required:!0,message:e("appSecretCertPlaceholder"),trigger:"blur"}],"alipay_config.app_public_cert_path":[{required:!0,message:e("appPublicCertPathPlaceholder"),trigger:"blur"}],"alipay_config.alipay_public_cert_path":[{required:!0,message:e("alipayPublicCertPathPlaceholder"),trigger:"blur"}],"alipay_config.alipay_root_cert_path":[{required:!0,message:e("alipayRootCertPathPlaceholder"),trigger:"blur"}]})),V=async n=>{_.value||!n||await n.validate(async o=>{o&&(_.value=!0,K(l).then(f=>{_.value=!1}).catch(()=>{_.value=!1}))})};return(n,o)=>{const h=q("Warning"),f=A,P=W,m=$,s=j,d=F,g=L,x=z,C=Q,I=X;return b(),T("div",G,[a(P,{class:"warm-prompt",type:"info"},{default:p(()=>[i("div",H,[a(f,{class:"mr-2",size:"18"},{default:p(()=>[a(h)]),_:1}),i("p",J,c(t(e)("operationTip")),1)])]),_:1}),i("div",M,[i("span",O,c(t(w)),1)]),U((b(),R(x,{model:l,"label-width":"200px",ref_key:"formRef",ref:u,rules:t(v),class:"page-form"},{default:p(()=>[a(g,{class:"box-card !border-none",shadow:"never"},{default:p(()=>[i("h3",Z,c(t(e)("wechatpay")),1),a(s,{label:t(e)("mchId"),prop:"wechatpay_config.mch_id"},{default:p(()=>[a(m,{modelValue:l.wechatpay_config.mch_id,"onUpdate:modelValue":o[0]||(o[0]=r=>l.wechatpay_config.mch_id=r),placeholder:t(e)("mchIdPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),i("div",ee,c(t(e)("mchIdTips")),1)]),_:1},8,["label"]),a(s,{label:t(e)("mchSecretKey"),prop:"wechatpay_config.mch_secret_key"},{default:p(()=>[a(m,{modelValue:l.wechatpay_config.mch_secret_key,"onUpdate:modelValue":o[1]||(o[1]=r=>l.wechatpay_config.mch_secret_key=r),placeholder:t(e)("mchSecretKeyPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),i("div",ae,c(t(e)("mchSecretKeyTips")),1)]),_:1},8,["label"]),a(s,{label:t(e)("mchSecretCert"),prop:"wechatpay_config.mch_secret_cert"},{default:p(()=>[i("div",te,[a(d,{modelValue:l.wechatpay_config.mch_secret_cert,"onUpdate:modelValue":o[2]||(o[2]=r=>l.wechatpay_config.mch_secret_cert=r),api:"sys/document/wechat"},null,8,["modelValue"])]),i("div",le,c(t(e)("mchSecretCertTips")),1)]),_:1},8,["label"]),a(s,{label:t(e)("mchPublicCertPath"),prop:"wechatpay_config.mch_public_cert_path"},{default:p(()=>[i("div",oe,[a(d,{modelValue:l.wechatpay_config.mch_public_cert_path,"onUpdate:modelValue":o[3]||(o[3]=r=>l.wechatpay_config.mch_public_cert_path=r),api:"sys/document/wechat"},null,8,["modelValue"])]),i("div",re,c(t(e)("mchPublicCertPathTips")),1)]),_:1},8,["label"])]),_:1}),a(g,{class:"box-card mt-4 !border-none",shadow:"never"},{default:p(()=>[i("h3",ie,c(t(e)("alipay")),1),a(s,{label:t(e)("appId"),prop:"alipay_config.app_id"},{default:p(()=>[a(m,{modelValue:l.alipay_config.app_id,"onUpdate:modelValue":o[4]||(o[4]=r=>l.alipay_config.app_id=r),placeholder:t(e)("appIdPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),i("div",pe,c(t(e)("appIdTips")),1)]),_:1},8,["label"]),a(s,{label:t(e)("appSecretCert"),prop:"alipay_config.app_secret_cert"},{default:p(()=>[a(m,{modelValue:l.alipay_config.app_secret_cert,"onUpdate:modelValue":o[5]||(o[5]=r=>l.alipay_config.app_secret_cert=r),placeholder:t(e)("appSecretCertPlaceholder"),class:"input-width",type:"textarea",rows:"4",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(s,{label:t(e)("appPublicCertPath"),prop:"alipay_config.app_public_cert_path"},{default:p(()=>[i("div",ce,[a(d,{modelValue:l.alipay_config.app_public_cert_path,"onUpdate:modelValue":o[6]||(o[6]=r=>l.alipay_config.app_public_cert_path=r),api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"]),a(s,{label:t(e)("alipayPublicCertPath"),prop:"alipay_config.alipay_public_cert_path"},{default:p(()=>[i("div",se,[a(d,{modelValue:l.alipay_config.alipay_public_cert_path,"onUpdate:modelValue":o[7]||(o[7]=r=>l.alipay_config.alipay_public_cert_path=r),api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"]),a(s,{label:t(e)("alipayRootCertPath"),prop:"alipay_config.alipay_root_cert_path"},{default:p(()=>[i("div",_e,[a(d,{modelValue:l.alipay_config.alipay_root_cert_path,"onUpdate:modelValue":o[8]||(o[8]=r=>l.alipay_config.alipay_root_cert_path=r),api:"sys/document/aliyun"},null,8,["modelValue"])])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[I,_.value]]),i("div",ne,[i("div",de,[a(C,{type:"primary",loading:_.value,onClick:o[9]||(o[9]=r=>V(u.value))},{default:p(()=>[B(c(t(e)("save")),1)]),_:1},8,["loading"])])])])}}});const oa=Y(me,[["__scopeId","data-v-7a41c87b"]]);export{oa as default};
