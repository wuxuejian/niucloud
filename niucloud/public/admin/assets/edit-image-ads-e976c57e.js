import"./base-962c0c23.js";/* empty css                     *//* empty css                  */import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-b0b1684a.js";import{B as E}from"./index-f1b9f75f.js";import{_ as I}from"./index-62d981e4.js";import{v as p}from"./event-ff03ec12.js";import{t as r}from"./index-e8f72538.js";import{S as U}from"./sortable.esm-be94e56d.js";import{d as B}from"./storage-abe718b1.js";import{u as T}from"./diy-e408e671.js";import{r as A}from"./range-5a416794.js";import{a as F,E as R}from"./index-61c777fa.js";import{E as $}from"./index-bba9e58c.js";import{d as z,w as D,r as N,o as j,A as H,b as u,e as g,L as c,u as t,f as s,x as f,q as l,p as _,F as b,t as L,v as M,g as O}from"./runtime-core.esm-bundler-dc7a07d7.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const q={class:"content-wrap"},P={class:"edit-attr-item-wrap"},G={class:"mb-[10px]"},J={class:"text-sm text-gray-400 mb-[10px]"},K=["onClick"],Q={class:"style-wrap"},X=z({__name:"edit-image-ads",setup(Z,{expose:x}){const e=T();e.editComponent.ignore=[],e.editComponent.verify=a=>{var o={code:!0,message:""};return e.value[a].list.forEach(n=>{if(n.imageUrl==="")return o.code=!1,o.message=r("imageUrlTip"),o}),o},e.editComponent.list.forEach(a=>{a.id||(a.id=e.generateRandom())}),D(()=>e.editComponent.list,(a,o)=>{e.editComponent.list.forEach(n=>{let i=new Image;i.src=B(n.imageUrl),i.onload=async()=>{n.imgWidth=i.width,n.imgHeight=i.height}})},{deep:!0});const C=()=>{e.editComponent.list.push({id:e.generateRandom(),imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}})},h=N();return j(()=>{H(()=>{const a=U.create(h.value,{group:"item-wrap",animation:200,onEnd:o=>{const n=e.editComponent.list[o.oldIndex];e.editComponent.list.splice(o.oldIndex,1),e.editComponent.list.splice(o.newIndex,0,n),a.sort(A(e.editComponent.list.length).map(i=>i.toString()))}})})}),x({}),(a,o)=>{const n=I,i=F,v=E,y=S,w=$,k=R;return u(),g(b,null,[c(s("div",q,[s("div",P,[s("h3",G,f(t(r)("imageSet")),1),l(k,{"label-width":"80px",class:"px-[10px]"},{default:_(()=>[s("p",J,f(t(r)("imageAdsTips")),1),s("div",{ref_key:"imageBoxRef",ref:h},[(u(!0),g(b,null,L(t(e).editComponent.list,(m,V)=>(u(),g("div",{key:m.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[l(i,{label:t(r)("image")},{default:_(()=>[l(n,{modelValue:m.imageUrl,"onUpdate:modelValue":d=>m.imageUrl=d,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),c(s("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:d=>t(e).editComponent.list.splice(V,1)},[l(v,{name:"element-CircleCloseFilled",color:"#bbb",size:"20px"})],8,K),[[p,t(e).editComponent.list.length>1]]),l(i,{label:t(r)("link")},{default:_(()=>[l(y,{modelValue:m.link,"onUpdate:modelValue":d=>m.link=d},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512),c(l(w,{class:"w-full",onClick:C},{default:_(()=>[M(f(t(r)("addImageAd")),1)]),_:1},512),[[p,t(e).editComponent.list.length<10]])]),_:1})])],512),[[p,t(e).editTab=="content"]]),c(s("div",Q,[O(a.$slots,"style",{},void 0,!0)],512),[[p,t(e).editTab=="style"]])],64)}}});const Y=W(X,[["__scopeId","data-v-4bae92e3"]]),fe=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));export{fe as _};
