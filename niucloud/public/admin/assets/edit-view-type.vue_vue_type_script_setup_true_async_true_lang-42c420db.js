import{d as z,r as m,q as X,N as t,h as d,I as p,w as u,a as Y,e as s,i as k,t as w,u as n,c as f,F as b,G as g,B as V,aw as H,cy as J,ay as K,az as Q,X as W,ar as Z,aE as ee,Y as le,E as ae,a9 as oe}from"./index-b19d04dd.js";/* empty css                   *//* empty css                  *//* empty css                *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  */import"./el-form-item-4ed993c7.js";/* empty css                 */import{c as te}from"./dict-0ab090e5.js";import{g as ue,l as re,n as de}from"./tools-e72ef746.js";const ne={class:"dialog-footer"},Pe=z({__name:"edit-view-type",emits:["complete"],setup(se,{expose:M,emit:U}){const i=m(!1),x=m(""),C={select_type:1,dict_type:"",addon:"",model:"",value_key:"",label_key:""},e=m({...C}),h=m(),F=m([]),L=m([]),D=o=>{re(o).then(a=>{L.value=a.data})},P=m([]);(async()=>{let{data:o}=await ue({});P.value=[{title:"系统",key:"system"}],P.value.push(...o),D({addon:"system"})})();const B=o=>{e.value.model="",D({addon:o})},E=m([]),T=o=>{de(o).then(a=>{E.value=a.data})},G=o=>{T({model:o})},R=X(()=>({dict_type:[{validator:(o,a,r)=>{console.log(e.value.select_type),e.value.select_type==1&&e.value.dict_type==""?r(new Error(t("dictTypePlaceholder"))):r()},trigger:"blur"}],addon:[{validator:(o,a,r)=>{e.value.select_type==2&&e.value.addon==""?r(new Error(t("addonsPlaceholder"))):r()},trigger:"blur"}],model:[{validator:(o,a,r)=>{console.log(e.value.model),e.value.select_type==2&&e.value.model==""?r(new Error(t("associatedModelPlaceholder"))):r()},trigger:"blur"}],value_key:[{validator:(o,a,r)=>{e.value.select_type==2&&e.value.value_key==""?r(new Error(t("remotePullDownValuePlaceholder"))):r()},trigger:"blur"}],label_key:[{validator:(o,a,r)=>{e.value.select_type==2&&e.value.label_key==""?r(new Error(t("remotePullDownLabelPlaceholder"))):r()},trigger:"blur"}]})),$=()=>{te().then(o=>{F.value=o.data})},N=async o=>{o&&await o.validate(async a=>{a&&(U("complete",H(e.value)),i.value=!1)})},I=async(o=null)=>{e.value=J(Object.assign(C,o)),$(),e.value.model!=""&&(D({addon:e.value.addon}),T({model:e.value.model})),i.value=!0},O=o=>{var a;(a=h.value)==null||a.clearValidate(),o()};return M({showDialog:i,setFormData:I}),(o,a)=>{const r=K,S=Q,c=W,v=Z,_=ee,j=le,A=ae,q=oe;return d(),p(q,{modelValue:i.value,"onUpdate:modelValue":a[8]||(a[8]=l=>i.value=l),title:x.value,width:"480px","before-close":O,"destroy-on-close":!0},{footer:u(()=>[Y("span",ne,[s(A,{onClick:a[6]||(a[6]=l=>i.value=!1)},{default:u(()=>[k(w(n(t)("cancel")),1)]),_:1}),s(A,{type:"primary",onClick:a[7]||(a[7]=l=>N(h.value))},{default:u(()=>[k(w(n(t)("confirm")),1)]),_:1})])]),default:u(()=>[s(j,{model:e.value,"label-width":"130px",ref_key:"formRef",ref:h,rules:n(R),class:"page-form"},{default:u(()=>[s(c,{label:n(t)("selectType"),prop:"type"},{default:u(()=>[s(S,{modelValue:e.value.select_type,"onUpdate:modelValue":a[0]||(a[0]=l=>e.value.select_type=l)},{default:u(()=>[s(r,{label:1},{default:u(()=>[k(w(n(t)("dictType")),1)]),_:1}),s(r,{label:2},{default:u(()=>[k(w(n(t)("remotePullDown")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e.value.select_type==1?(d(),p(c,{key:0,label:n(t)("dictType"),prop:"dict_type"},{default:u(()=>[s(_,{class:"input-width",placeholder:n(t)("dictTypePlaceholder"),modelValue:e.value.dict_type,"onUpdate:modelValue":a[1]||(a[1]=l=>e.value.dict_type=l),filterable:"",remote:"",clearable:""},{default:u(()=>[(d(!0),f(b,null,g(F.value,l=>(d(),p(v,{label:l.name,value:l.key,key:l.key},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):V("",!0),e.value.select_type==2?(d(),p(c,{key:1,label:n(t)("addons"),prop:"addon"},{default:u(()=>[s(_,{modelValue:e.value.addon,"onUpdate:modelValue":a[2]||(a[2]=l=>e.value.addon=l),placeholder:n(t)("addonsPlaceholder"),class:"input-width",onChange:B},{default:u(()=>[(d(!0),f(b,null,g(P.value,(l,y)=>(d(),p(v,{label:l.title,value:l.key,key:y},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])):V("",!0),e.value.select_type==2?(d(),p(c,{key:2,label:n(t)("associatedModel"),prop:"model"},{default:u(()=>[s(_,{placeholder:n(t)("associatedModelPlaceholder"),modelValue:e.value.model,"onUpdate:modelValue":a[3]||(a[3]=l=>e.value.model=l),class:"input-width",filterable:"",onChange:G},{default:u(()=>[(d(!0),f(b,null,g(L.value,l=>(d(),p(v,{label:l,value:l,key:l},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):V("",!0),e.value.select_type==2?(d(),p(c,{key:3,prop:"value_key",label:n(t)("remotePullDownValue")},{default:u(()=>[s(_,{class:"input-width",placeholder:n(t)("remotePullDownValuePlaceholder"),modelValue:e.value.value_key,"onUpdate:modelValue":a[4]||(a[4]=l=>e.value.value_key=l)},{default:u(()=>[(d(!0),f(b,null,g(E.value,(l,y)=>(d(),p(v,{label:`${l.name}:${l.comment}`,value:l.name,key:y},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):V("",!0),e.value.select_type==2?(d(),p(c,{key:4,prop:"label_key",label:n(t)("remotePullDownLabel")},{default:u(()=>[s(_,{class:"input-width",placeholder:n(t)("remotePullDownLabelPlaceholder"),modelValue:e.value.label_key,"onUpdate:modelValue":a[5]||(a[5]=l=>e.value.label_key=l)},{default:u(()=>[(d(!0),f(b,null,g(E.value,(l,y)=>(d(),p(v,{label:`${l.name}:${l.comment}`,value:l.name,key:y},null,8,["label","value"]))),128))]),_:1},8,["placeholder","modelValue"])]),_:1},8,["label"])):V("",!0)]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])}}});export{Pe as _};
