import{d as D,O as $,f as j,r as y,n as b,N as e,aK as O,s as B,a3 as x,h as V,c as I,a as s,u as t,t as i,y as K,I as W,w as l,e as a,i as f,W as z,X as F,_ as L,ay as Q,az as G,Y as X,E as Y,$ as H}from"./index-efa627c5.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 *//* empty css                */import{_ as J}from"./index-03d5f840.js";/* empty css                 */import{g as Z,a as ee,e as te}from"./wechat-fab99187.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-10ccc001.js";/* empty css                   */import"./attachment-99990bcb.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                         *//* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-4a091848.js";/* empty css                */import"./sys-7f18d1e7.js";import"./_plugin-vue_export-helper-c27b6911.js";const ae={class:"main-container"},oe={class:"detail-head"},le=s("span",{class:"iconfont iconxiangzuojiantou !text-xs"},null,-1),se={class:"ml-[1px]"},ie=s("span",{class:"adorn"},"|",-1),re={class:"right"},ne={class:"panel-title !text-sm"},de={class:"form-tip"},pe={class:"panel-title !text-sm"},ce={class:"form-tip"},ue={class:"form-tip"},me={class:"panel-title !text-sm"},_e={class:"form-tip"},he={class:"form-tip"},fe={class:"form-tip"},ge={class:"form-tip"},be={class:"form-tip"},ve={class:"flex"},we={class:"panel-title !text-sm"},ye={class:"form-tip"},xe={class:"fixed-footer-wrap"},Ve={class:"fixed-footer"},at=D({__name:"config",setup(ke){const k=$(),P=j(),S=k.meta.title,m=y(!0),n=b({wechat_name:"",wechat_original:"",app_id:"",app_secret:"",qr_code:"",token:"",encoding_aes_key:"",encryption_type:"not_encrypt"}),v=y(),C=b({wechat_name:[{required:!0,message:e("wechatNamePlaceholder"),trigger:"blur"}],wechat_original:[{required:!0,message:e("wechatOriginalPlaceholder"),trigger:"blur"}],app_id:[{required:!0,message:e("appidPlaceholder"),trigger:"blur"}],app_secret:[{required:!0,message:e("appSecretPlaceholder"),trigger:"blur"}],token:[{required:!0,message:e("tokenPlaceholder"),trigger:"blur"}],encoding_aes_key:[{required:!0,message:e("encodingAesKeyPlaceholder"),trigger:"blur"}]});Z().then(u=>{Object.assign(n,u.data),m.value=!1});const c=b({business_domain:"",js_secure_domain:"",serve_url:"",web_auth_domain:""});ee().then(u=>{Object.assign(c,u.data),m.value=!1});const{copy:E,isSupported:M,copied:w}=O(),_=u=>{if(!M.value){x({message:e("notSupportCopy"),type:"warning"});return}E(u)};B(w,()=>{w.value&&x({message:e("copySuccess"),type:"success"})});const T=async u=>{m.value||!u||await u.validate(async o=>{o&&(m.value=!0,te(n).then(()=>{m.value=!1}).catch(()=>{m.value=!1}))})};return(u,o)=>{const p=z,d=F,q=J,h=L,g=Q,A=G,U=X,N=Y,R=H;return V(),I("div",ae,[s("div",oe,[s("div",{class:"left",onClick:o[0]||(o[0]=r=>t(P).push({path:"/channel/wechat"}))},[le,s("span",se,i(t(e)("returnToPreviousPage")),1)]),ie,s("span",re,i(t(S)),1)]),K((V(),W(U,{model:n,"label-width":"150px",ref_key:"formRef",ref:v,rules:C,class:"page-form"},{default:l(()=>[a(h,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[s("h3",ne,i(t(e)("wechatInfo")),1),a(d,{label:t(e)("wechatName"),prop:"wechat_name"},{default:l(()=>[a(p,{modelValue:n.wechat_name,"onUpdate:modelValue":o[1]||(o[1]=r=>n.wechat_name=r),modelModifiers:{trim:!0},placeholder:t(e)("wechatNamePlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{label:t(e)("wechatOriginal"),prop:"wechat_original"},{default:l(()=>[a(p,{modelValue:n.wechat_original,"onUpdate:modelValue":o[2]||(o[2]=r=>n.wechat_original=r),modelModifiers:{trim:!0},placeholder:t(e)("wechatOriginalPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(d,{label:t(e)("wechatQrcode"),prop:"qr_code"},{default:l(()=>[a(q,{modelValue:n.qr_code,"onUpdate:modelValue":o[3]||(o[3]=r=>n.qr_code=r)},null,8,["modelValue"]),s("div",de,i(t(e)("wechatQrcodeTips")),1)]),_:1},8,["label"])]),_:1}),a(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[s("h3",pe,i(t(e)("wechatDevelopInfo")),1),a(d,{label:t(e)("wechatAppid"),prop:"app_id"},{default:l(()=>[a(p,{modelValue:n.app_id,"onUpdate:modelValue":o[4]||(o[4]=r=>n.app_id=r),modelModifiers:{trim:!0},placeholder:t(e)("appidPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),s("div",ce,i(t(e)("wechatAppidTips")),1)]),_:1},8,["label"]),a(d,{label:t(e)("wechatAppsecret"),prop:"app_secret"},{default:l(()=>[a(p,{modelValue:n.app_secret,"onUpdate:modelValue":o[5]||(o[5]=r=>n.app_secret=r),modelModifiers:{trim:!0},placeholder:t(e)("appSecretPlaceholder"),class:"input-width",clearable:""},null,8,["modelValue","placeholder"]),s("div",ue,i(t(e)("wechatAppsecretTips")),1)]),_:1},8,["label"])]),_:1}),a(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[s("h3",me,i(t(e)("theServerSetting")),1),a(d,{label:"URL"},{default:l(()=>[a(p,{"model-value":c.serve_url,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[s("div",{class:"cursor-pointer",onClick:o[6]||(o[6]=r=>_(c.serve_url))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1}),a(d,{label:"Token",prop:"token"},{default:l(()=>[a(p,{modelValue:n.token,"onUpdate:modelValue":o[7]||(o[7]=r=>n.token=r),modelModifiers:{trim:!0},placeholder:t(e)("tokenPlaceholder"),class:"input-width",maxlength:"32","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),s("div",_e,i(t(e)("tokenTips")),1)]),_:1}),a(d,{label:"EncodingAESKey",prop:"encoding_aes_key"},{default:l(()=>[a(p,{modelValue:n.encoding_aes_key,"onUpdate:modelValue":o[8]||(o[8]=r=>n.encoding_aes_key=r),modelModifiers:{trim:!0},placeholder:t(e)("encodingAesKeyPlaceholder"),class:"input-width",maxlength:"43","show-word-limit":"",clearable:""},null,8,["modelValue","placeholder"]),s("div",he,i(t(e)("encodingAESKeyTips")),1)]),_:1}),a(d,{label:t(e)("encryptionType"),prop:"encryption_type"},{default:l(()=>[a(A,{modelValue:n.encryption_type,"onUpdate:modelValue":o[9]||(o[9]=r=>n.encryption_type=r)},{default:l(()=>[a(g,{label:"not_encrypt"},{default:l(()=>[f(i(t(e)("cleartextMode")),1)]),_:1}),a(g,{label:"compatible"},{default:l(()=>[f(i(t(e)("compatibleMode")),1)]),_:1}),a(g,{label:"safe"},{default:l(()=>[f(i(t(e)("safeMode")),1)]),_:1})]),_:1},8,["modelValue"]),s("div",fe,i(t(e)("cleartextModeTips")),1),s("div",ge,i(t(e)("compatibleModeTips")),1),s("div",be,i(t(e)("safeModeTips")),1)]),_:1},8,["label"])]),_:1}),a(h,{class:"box-card !border-none mt-[16px]",shadow:"never"},{default:l(()=>[s("div",ve,[s("h3",we,i(t(e)("functionSetting")),1)]),a(d,{label:""},{default:l(()=>[s("div",ye,i(t(e)("functionSettingTips")),1)]),_:1}),a(d,{label:t(e)("businessDomain")},{default:l(()=>[a(p,{"model-value":c.business_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[s("div",{class:"cursor-pointer",onClick:o[10]||(o[10]=r=>_(c.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),a(d,{label:t(e)("jsSecureDomain")},{default:l(()=>[a(p,{"model-value":c.js_secure_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[s("div",{class:"cursor-pointer",onClick:o[11]||(o[11]=r=>_(c.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"]),a(d,{label:t(e)("webAuthDomain")},{default:l(()=>[a(p,{"model-value":c.web_auth_domain,placeholder:"Please input",class:"input-width",readonly:!0},{append:l(()=>[s("div",{class:"cursor-pointer",onClick:o[12]||(o[12]=r=>_(c.business_domain))},i(t(e)("copy")),1)]),_:1},8,["model-value"])]),_:1},8,["label"])]),_:1})]),_:1},8,["model","rules"])),[[R,m.value]]),s("div",xe,[s("div",Ve,[a(N,{type:"primary",loading:m.value,onClick:o[13]||(o[13]=r=>T(v.value))},{default:l(()=>[f(i(t(e)("save")),1)]),_:1},8,["loading"])])])])}}});export{at as default};
