import{d as T,q as n,Q as B,A,r as R,aJ as $,a$ as F,h,c as f,R as c,a0 as g,u as o,a as r,t as b,e as l,w as m,i as x,F as v,T as M,b as N,K as z,L as D,E as P,M as W}from"./index-34979a7f.js";/* empty css                     *//* empty css                  */import{_ as j}from"./index.vue_vue_type_style_index_0_lang-9f7c5f1a.js";import{_ as L}from"./index.vue_vue_type_script_setup_true_lang-e10327f5.js";import O from"./index-0da618fa.js";/* empty css                 */import{S as q}from"./sortable.esm-be94e56d.js";import{u as J}from"./diy-12b41f8c.js";import{r as K}from"./range-290b6bb5.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";const G={class:"content-wrap"},X={class:"edit-attr-item-wrap"},Y={class:"mb-[10px]"},Z={class:"text-sm text-gray-400 mb-[10px]"},ee=["onClick"],te={class:"style-wrap"},oe=T({__name:"edit-image-ads",setup(ie,{expose:w}){const t=J();t.editComponent.ignore=[],t.editComponent.verify=a=>{const e={code:!0,message:""};return t.value[a].imageHeight==0?(e.code=!1,e.message=n("imageHeightPlaceholder"),e):/^\d+.?\d{0,2}$/.test(t.value[a].imageHeight)?(t.value[a].list.forEach(s=>{if(s.imageUrl==="")return e.code=!1,e.message=n("imageUrlTip"),e}),e):(e.code=!1,e.message=n("imageHeightRegNum"),e)},t.editComponent.list.forEach(a=>{a.id||(a.id=t.generateRandom())}),B(()=>t.editComponent.list,(a,e)=>{_()},{deep:!0});const y=()=>{t.editComponent.list.push({id:t.generateRandom(),imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}})},H=a=>{_(!0)},_=(a=!1)=>{t.editComponent.list.forEach((e,s)=>{const i=new Image;i.src=A(e.imageUrl),i.onload=async()=>{if(e.imgWidth=i.width,e.imgHeight=i.height,a&&s==0){const u=e.imgHeight/e.imgWidth;e.width=375-t.editComponent.margin.both*2,e.height=e.width*u,t.editComponent.imageHeight=parseInt(e.height)}}})},V=()=>{t.editComponent.imageHeight=parseInt(t.editComponent.imageHeight)},C=R();return $(()=>{F(()=>{const a=q.create(C.value,{group:"item-wrap",animation:200,onEnd:e=>{const s=t.editComponent.list[e.oldIndex];t.editComponent.list.splice(e.oldIndex,1),t.editComponent.list.splice(e.newIndex,0,s),a.sort(K(t.editComponent.list.length).map(i=>i.toString())),_(!0)}})})}),w({}),(a,e)=>{const s=z,i=D,u=O,I=L,k=j,S=P,U=W;return h(),f(v,null,[c(r("div",G,[r("div",X,[r("h3",Y,b(o(n)("imageSet")),1),l(U,{"label-width":"80px",class:"px-[10px]"},{default:m(()=>[l(i,{label:o(n)("imageHeight"),class:"display-block"},{default:m(()=>[l(s,{modelValue:o(t).editComponent.imageHeight,"onUpdate:modelValue":e[0]||(e[0]=d=>o(t).editComponent.imageHeight=d),modelModifiers:{trim:!0},placeholder:o(n)("imageHeightPlaceholder"),clearable:"",maxlength:"10",onBlur:V},{append:m(()=>[x("px")]),_:1},8,["modelValue","placeholder"]),r("div",Z,b(o(n)("imageAdsTips")),1)]),_:1},8,["label"]),r("div",{ref_key:"imageBoxRef",ref:C},[(h(!0),f(v,null,M(o(t).editComponent.list,(d,E)=>(h(),f("div",{key:d.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[l(i,{label:o(n)("image")},{default:m(()=>[l(u,{modelValue:d.imageUrl,"onUpdate:modelValue":p=>d.imageUrl=p,limit:1,onChange:H},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),c(r("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:p=>o(t).editComponent.list.splice(E,1)},[l(I,{name:"element CircleCloseFilled",color:"#bbb",size:"20px"})],8,ee),[[g,o(t).editComponent.list.length>1]]),l(i,{label:o(n)("link")},{default:m(()=>[l(k,{modelValue:d.link,"onUpdate:modelValue":p=>d.link=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512),c(l(S,{class:"w-full",onClick:y},{default:m(()=>[x(b(o(n)("addImageAd")),1)]),_:1},512),[[g,o(t).editComponent.list.length<10]])]),_:1})])],512),[[g,o(t).editTab=="content"]]),c(r("div",te,[N(a.$slots,"style",{},void 0,!0)],512),[[g,o(t).editTab=="style"]])],64)}}});const ae=Q(oe,[["__scopeId","data-v-b8c7f7f3"]]),he=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{he as _};
