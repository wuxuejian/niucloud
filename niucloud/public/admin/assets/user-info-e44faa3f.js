import{d as N,j as A,r as x,n as V,q as l,h as H,c as L,e,w as r,br as v,a,u as o,cL as z,A as M,t as _,i as E,b3 as T,aI as j,bg as K,bh as X,bi as G,K as J,L as O,M as Q,E as W,X as Y,p as Z,g as oo,f as eo}from"./index-34979a7f.js";/* empty css                  *//* empty css                   *//* empty css                  *//* empty css                     *//* empty css                 *//* empty css                    *//* empty css                  *//* empty css                     */import"./el-dropdown-item-4ed993c7.js";import{_ as so}from"./index.vue_vue_type_script_setup_true_lang-e10327f5.js";/* empty css                  */import{s as to}from"./personal-b1aada71.js";import{_ as ao}from"./index.vue_vue_type_script_setup_true_lang-633427cd.js";/* empty css                        */import{_ as lo}from"./_plugin-vue_export-helper-c27b6911.js";import"./index-0da618fa.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-645eb1b7.js";import"./attachment-0daaf0f6.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-d47218dc.js";/* empty css               *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    */import"./index.vue_vue_type_script_setup_true_lang-0998f18f.js";/* empty css                   */import"./sortable.esm-be94e56d.js";const f=c=>(Z("data-v-4d6c4268"),c=c(),oo(),c),ro={class:"userinfo flex h-full items-center"},no={class:"user-name pl-[8px]"},po=f(()=>a("div",{class:"flex items-center leading-[1] py-[5px]"},[a("span",{class:"iconfont iconqiehuan ml-[4px] !text-[14px] mr-[10px]"}),a("span",{class:"text-[14px]"},"切换站点")],-1)),io=f(()=>a("div",{class:"flex items-center leading-[1] py-[5px]"},[a("span",{class:"iconfont iconshezhi1 ml-[4px] !text-[14px] mr-[10px]"}),a("span",{class:"text-[14px]"},"账号设置")],-1)),mo=f(()=>a("div",{class:"flex items-center leading-[1] py-[5px]"},[a("span",{class:"iconfont iconxiugai ml-[4px] !text-[14px] mr-[10px]"}),a("span",{class:"text-[14px]"},"修改密码")],-1)),co=f(()=>a("div",{class:"flex items-center leading-[1] py-[5px]"},[a("span",{class:"iconfont icontuichudenglu ml-[4px] !text-[14px] mr-[10px]"}),a("span",{class:"text-[14px]"},"退出登录")],-1)),uo={class:"form-tip"},_o={class:"dialog-footer"},fo=N({__name:"user-info",setup(c){const m=A(),k=eo(),P=i=>{switch(i){case"logout":m.logout();break}},C=()=>{m.logout()},D=i=>{k.push(i)},h=x(null),R=()=>{var i;(i=h.value)==null||i.open()};let p=x(!1);const y=x();let s=V({original_password:"",password:"",password_copy:""});const U=V({original_password:[{required:!0,message:l("originalPasswordPlaceholder"),trigger:"blur"}],password:[{required:!0,message:l("passwordPlaceholder"),trigger:"blur"}],password_copy:[{required:!0,message:l("passwordPlaceholder"),trigger:"blur"}]}),S=i=>{i&&i.validate(t=>{if(t){let d="";if(s.password&&!s.original_password&&(d=l("originalPasswordHint")),s.password&&s.original_password&&!s.password_copy&&(d=l("newPasswordHint")),s.password&&s.original_password&&s.password_copy&&s.password!=s.password_copy&&(d=l("doubleCipherHint")),d){T({type:"error",message:d});return}to(s).then(b=>{p.value=!1})}else return!1})};return(i,t)=>{const d=j,b=so,u=K,q=X,$=G,w=J,g=O,B=Q,I=W,F=Y;return H(),L("div",null,[e($,{onCommand:P,tabindex:1},{dropdown:r(()=>[e(q,null,{default:r(()=>[e(u,{onClick:t[0]||(t[0]=n=>D("/home/index"))},{default:r(()=>[po]),_:1}),e(u,{onClick:R},{default:r(()=>[io]),_:1}),e(u,{onClick:t[1]||(t[1]=n=>v(p)?p.value=!0:p=!0)},{default:r(()=>[mo]),_:1}),e(u,{onClick:C},{default:r(()=>[co]),_:1})]),_:1})]),default:r(()=>[a("div",ro,[e(d,{size:25,icon:o(z),src:o(m).userInfo.head_img?o(M)(o(m).userInfo.head_img):""},null,8,["icon","src"]),a("div",no,_(o(m).userInfo.username),1),e(b,{name:"element ArrowDown",class:"ml-[5px]"})])]),_:1}),e(F,{modelValue:o(p),"onUpdate:modelValue":t[7]||(t[7]=n=>v(p)?p.value=n:p=n),width:"450px",title:"修改密码"},{footer:r(()=>[a("span",_o,[e(I,{onClick:t[5]||(t[5]=n=>v(p)?p.value=!1:p=!1)},{default:r(()=>[E(_(o(l)("cancel")),1)]),_:1}),e(I,{type:"primary",onClick:t[6]||(t[6]=n=>S(y.value))},{default:r(()=>[E(_(o(l)("save")),1)]),_:1})])]),default:r(()=>[a("div",null,[e(B,{model:o(s),"label-width":"90px",ref_key:"formRef",ref:y,rules:U,class:"page-form"},{default:r(()=>[e(g,{label:o(l)("originalPassword"),prop:"original_password"},{default:r(()=>[e(w,{modelValue:o(s).original_password,"onUpdate:modelValue":t[2]||(t[2]=n=>o(s).original_password=n),type:"password",placeholder:o(l)("originalPasswordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(g,{label:o(l)("newPassword"),prop:"password"},{default:r(()=>[e(w,{modelValue:o(s).password,"onUpdate:modelValue":t[3]||(t[3]=n=>o(s).password=n),type:"password",placeholder:o(l)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"]),a("div",uo,_(o(l)("passwordTip")),1)]),_:1},8,["label"]),e(g,{label:o(l)("passwordCopy"),prop:"password_copy"},{default:r(()=>[e(w,{modelValue:o(s).password_copy,"onUpdate:modelValue":t[4]||(t[4]=n=>o(s).password_copy=n),type:"password",placeholder:o(l)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])])]),_:1},8,["modelValue"]),e(ao,{ref_key:"userInfoEditRef",ref:h},null,512)])}}});const Qo=lo(fo,[["__scopeId","data-v-4d6c4268"]]);export{Qo as default};
