import"./base-962c0c23.js";/* empty css                   *//* empty css                  *//* empty css                     *//* empty css                *//* empty css                 */import{t as l}from"./index-e8f72538.js";import{L as C,M as F}from"./member-dd698f0f.js";import{E as N}from"./index-93f2c618.js";import{a as B,E as D}from"./index-61c777fa.js";import{E as I}from"./index-69523418.js";import{E as M}from"./index-bba9e58c.js";import{v as R}from"./directive-c0c3e9a3.js";import{d as $,r as g,M as h,b as x,e as L,L as P,m as k,p as s,q as i,f,x as _,u as a,v as q}from"./runtime-core.esm-bundler-dc7a07d7.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";import"./common-6291c908.js";import"./common-2cf17469.js";import"./index-f1b9f75f.js";import"./vue-router-79053937.js";import"./el-overlay-60700377.js";import"./event-ff03ec12.js";import"./index-5d86eb33.js";import"./focus-trap-b8b5a003.js";import"./el-radio-bfd4b1ad.js";import"./storage-abe718b1.js";import"./index-8bcaafa6.js";import"./index-7a123a20.js";import"./el-tooltip-58212670.js";import"./el-avatar-3bb47ce2.js";import"./index-d57cc47d.js";import"./_Uint8Array-6ff3cafa.js";import"./_initCloneObject-28e6bdaa.js";const S={class:"main-container"},T={class:"panel-title"},U={class:"form-tip"},j={class:"text-lg"},z={class:"fixed-footer-wrap"},A={class:"fixed-footer"},O=$({__name:"member",setup(Z){const m=g(!0),p=g({});let v=g("");const b=h({prefix:[{validator:(r,e,o)=>{e&&!/^[a-zA-Z]*$/g.test(e)?o(new Error(l("prefixHint"))):o()},trigger:"blur"}],length:[{required:!0,message:l("lengthPlaceholder"),trigger:"blur"},{validator:(r,e,o)=>{parseInt(e)>30||parseInt(e)-t.prefix.length<4?o(new Error(l("lengthHint"))):o()},trigger:"blur"}]}),t=h({prefix:"",length:10});(async()=>{const r=await(await C()).data;Object.keys(t).forEach(e=>{r[e]!=null&&(t[e]=r[e])}),c(p.value),m.value=!1})();const c=async r=>{await r.validate(e=>{if(e){let o="",d=t.length-t.prefix.length-1;for(let u=1;u<=d;u++)o+="0";v.value=t.prefix+o+"1"}})},w=async r=>{m.value||!r||await r.validate(e=>{e&&F(t).then(()=>{m.value=!1,c()}).catch(()=>{m.value=!1})})};return(r,e)=>{const o=N,d=B,u=I,E=D,y=M,V=R;return x(),L("div",S,[P((x(),k(E,{model:t,"label-width":"150px",ref_key:"ruleFormRef",ref:p,rules:b,class:"page-form"},{default:s(()=>[i(u,{class:"box-card !border-none",shadow:"never"},{default:s(()=>[f("h3",T,_(a(l)("memberNoRule")),1),i(d,{label:a(l)("prefix"),prop:"prefix"},{default:s(()=>[i(o,{modelValue:t.prefix,"onUpdate:modelValue":e[0]||(e[0]=n=>t.prefix=n),placeholder:a(l)("prefixPlaceholder"),class:"input-width",clearable:"",maxlength:"20",onChange:e[1]||(e[1]=n=>c(p.value))},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),i(d,{label:a(l)("length"),prop:"length"},{default:s(()=>[i(o,{modelValue:t.length,"onUpdate:modelValue":e[2]||(e[2]=n=>t.length=n),placeholder:a(l)("lengthPlaceholder"),class:"input-width",clearable:"",type:"number",onChange:e[3]||(e[3]=n=>c(p.value))},null,8,["modelValue","placeholder"]),f("div",U,_(a(l)("lengthTips")),1)]),_:1},8,["label"]),i(d,null,{default:s(()=>[f("div",j,_(a(v)),1)]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[V,m.value]]),f("div",z,[f("div",A,[i(y,{type:"primary",onClick:e[4]||(e[4]=n=>w(p.value))},{default:s(()=>[q(_(a(l)("save")),1)]),_:1})])])])}}});const Ne=H(O,[["__scopeId","data-v-5634f385"]]);export{Ne as default};
