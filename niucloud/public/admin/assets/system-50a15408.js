import{d as P,x as S,r as h,m as C,n as g,q as o,h as w,c as I,e as t,w as d,a as r,t as u,u as a,P as V,s as v,a6 as B,B as D,i as R,dQ as T,dR as F,dS as j,D as q,j as W,J as L,K as A,a0 as J,L as K,E as M,U as O}from"./index-ae2d9b78.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                */import Q from"./index-b111e282.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                        */import"./index.vue_vue_type_style_index_0_lang-b2ddc674.js";/* empty css                  *//* empty css                   */import"./attachment-8d650cb6.js";import"./index.vue_vue_type_script_setup_true_lang-57aca5c9.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                         */import"./index.vue_vue_type_script_setup_true_lang-43b3de63.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-657c47c5.js";/* empty css                */import"./_plugin-vue_export-helper-c27b6911.js";const $={class:"main-container"},z={class:"flex justify-between items-center"},G={class:"text-page-title"},H={class:"panel-title !text-sm"},X={class:"text-[12px] text-[#a9a9a9]"},Y={class:"text-[12px] text-[#a9a9a9]"},Z={class:"panel-title !text-sm"},ee={class:"panel-title !text-sm"},le={class:"fixed-footer-wrap"},te={class:"fixed-footer"},qe=P({__name:"system",setup(oe){const x=S().meta.title,m=h(!0),f=h(C()),e=g({site_name:"",logo:"",desc:"",latitude:"",keywords:"",longitude:"",province_id:"",city_id:"",district_id:"",address:"",full_address:"",business_hours:"",phone:"",front_end_name:"",front_end_logo:"",front_end_icon:"",icon:"",wechat_code:"",enterprise_wechat:"",tel:""});(async(c=0)=>{const l=await(await T()).data;Object.keys(e).forEach(n=>{l[n]!=null&&(e[n]=l[n])});const i=await(await F()).data;e.wechat_code=i.wechat_code,e.enterprise_wechat=i.enterprise_wechat,e.tel=i.tel,m.value=!1})();const b=h(),y=g({site_name:[{required:!0,message:o("siteNamePlaceholder"),trigger:"blur"}],front_end_name:[{required:!0,message:o("frontEndNamePlaceholder"),trigger:"blur"}]}),U=async c=>{m.value||!c||await c.validate(async l=>{l&&(m.value=!0,j(e).then(()=>{m.value=!1,f.value=="admin"?q().getWebsiteInfo():W().getSiteInfo()}).catch(()=>{m.value=!1}))})};return(c,l)=>{const i=L,n=A,p=Q,_=J,E=K,N=M,k=O;return w(),I("div",$,[t(_,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[r("div",z,[r("span",G,u(a(x)),1)]),V((w(),v(E,{model:e,"label-width":"150px",ref_key:"formRef",ref:b,rules:y,class:"page-form"},{default:d(()=>[t(_,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[r("h3",H,u(a(o)("websiteInfo")),1),t(n,{label:a(o)("siteName"),prop:"site_name"},{default:d(()=>[t(i,{modelValue:e.site_name,"onUpdate:modelValue":l[0]||(l[0]=s=>e.site_name=s),modelModifiers:{trim:!0},placeholder:a(o)("siteNamePlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(o)("logo")},{default:d(()=>[r("div",null,[t(p,{modelValue:e.logo,"onUpdate:modelValue":l[1]||(l[1]=s=>e.logo=s)},null,8,["modelValue"]),r("p",X,u(a(o)("logoPlaceholder")),1)])]),_:1},8,["label"]),t(n,{label:a(o)("icon")},{default:d(()=>[r("div",null,[t(p,{modelValue:e.icon,"onUpdate:modelValue":l[2]||(l[2]=s=>e.icon=s)},null,8,["modelValue"]),r("p",Y,u(a(o)("iconPlaceholder")),1)])]),_:1},8,["label"]),t(n,{label:a(o)("keywords")},{default:d(()=>[t(i,{modelValue:e.keywords,"onUpdate:modelValue":l[3]||(l[3]=s=>e.keywords=s),placeholder:a(o)("keywordsPlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(o)("desc")},{default:d(()=>[t(i,{modelValue:e.desc,"onUpdate:modelValue":l[4]||(l[4]=s=>e.desc=s),type:"textarea",rows:"4",clearable:"",placeholder:a(o)("descPlaceholder"),class:"input-width",maxlength:"100","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),V(t(_,{class:"box-card !border-none",shadow:"never"},{default:d(()=>[r("h3",Z,u(a(o)("frontEndInfo")),1),t(n,{label:a(o)("frontEndName")},{default:d(()=>[t(i,{modelValue:e.front_end_name,"onUpdate:modelValue":l[5]||(l[5]=s=>e.front_end_name=s),placeholder:a(o)("frontEndNamePlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(o)("logo")},{default:d(()=>[t(p,{modelValue:e.front_end_logo,"onUpdate:modelValue":l[6]||(l[6]=s=>e.front_end_logo=s)},null,8,["modelValue"])]),_:1},8,["label"]),t(n,{label:a(o)("icon")},{default:d(()=>[t(p,{modelValue:e.front_end_icon,"onUpdate:modelValue":l[7]||(l[7]=s=>e.front_end_icon=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[B,f.value=="site"]]),f.value=="admin"?(w(),v(_,{key:0,class:"box-card !border-none",shadow:"never"},{default:d(()=>[r("h3",ee,u(a(o)("serviceInformation")),1),t(n,{label:a(o)("contactsTel")},{default:d(()=>[t(i,{modelValue:e.tel,"onUpdate:modelValue":l[8]||(l[8]=s=>e.tel=s),placeholder:a(o)("contactsTelPlaceholder"),class:"input-width",clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{label:a(o)("wechatCode")},{default:d(()=>[t(p,{modelValue:e.wechat_code,"onUpdate:modelValue":l[9]||(l[9]=s=>e.wechat_code=s)},null,8,["modelValue"])]),_:1},8,["label"]),t(n,{label:a(o)("customerServiceCode")},{default:d(()=>[t(p,{modelValue:e.enterprise_wechat,"onUpdate:modelValue":l[10]||(l[10]=s=>e.enterprise_wechat=s)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})):D("",!0)]),_:1},8,["model","rules"])),[[k,m.value]])]),_:1}),r("div",le,[r("div",te,[t(N,{type:"primary",loading:m.value,onClick:l[11]||(l[11]=s=>U(b.value))},{default:d(()=>[R(u(a(o)("save")),1)]),_:1},8,["loading"])])])])}}});export{qe as default};
