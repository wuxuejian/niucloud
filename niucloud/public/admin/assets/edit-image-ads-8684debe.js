import{d as B,w as T,r as A,o as F,E as R,e as h,f,Q as c,u as o,g as m,B as b,y as l,x as d,A as v,F as x,z as $,h as z}from"./base-9962c822.js";/* empty css                *//* empty css                  */import{_ as N}from"./index.vue_vue_type_script_setup_true_lang-1767d980.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-780dd221.js";import{_ as P}from"./index-500ed4b6.js";import"./el-form-item-4ed993c7.js";/* empty css                 */import{v as g}from"./index-5c4817f4.js";import{t as n}from"./index-5516aed6.js";import{S as W}from"./sortable.esm-be94e56d.js";import{f as j}from"./storage-0874d153.js";import{u as M}from"./diy-00fc7bfe.js";import{r as O}from"./range-d4dd345f.js";import{E as L}from"./index-19251c17.js";import{a as Q,E as q}from"./index-7c833df7.js";import{E as G}from"./index-7ab57426.js";import{_ as J}from"./_plugin-vue_export-helper-c27b6911.js";const K={class:"content-wrap"},X={class:"edit-attr-item-wrap"},Y={class:"mb-[10px]"},Z={class:"text-sm text-gray-400 mb-[10px]"},ee=["onClick"],te={class:"style-wrap"},oe=B({__name:"edit-image-ads",setup(ie,{expose:y}){const t=M();t.editComponent.ignore=[],t.editComponent.verify=a=>{var e={code:!0,message:""};return t.value[a].imageHeight==0?(e.code=!1,e.message=n("imageHeightPlaceholder"),e):/^\d+.?\d{0,2}$/.test(t.value[a].imageHeight)?(t.value[a].list.forEach(s=>{if(s.imageUrl==="")return e.code=!1,e.message=n("imageUrlTip"),e}),e):(e.code=!1,e.message=n("imageHeightRegNum"),e)},t.editComponent.list.forEach(a=>{a.id||(a.id=t.generateRandom())}),T(()=>t.editComponent.list,(a,e)=>{_()},{deep:!0});const w=()=>{t.editComponent.list.push({id:t.generateRandom(),imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}})},H=a=>{_(!0)},_=(a=!1)=>{t.editComponent.list.forEach((e,s)=>{let i=new Image;i.src=j(e.imageUrl),i.onload=async()=>{if(e.imgWidth=i.width,e.imgHeight=i.height,a&&s==0){var u=e.imgHeight/e.imgWidth;e.width=375,e.height=e.width*u,t.editComponent.imageHeight=parseInt(e.height)}}})},V=()=>{t.editComponent.imageHeight=parseInt(t.editComponent.imageHeight)},C=A();return F(()=>{R(()=>{const a=W.create(C.value,{group:"item-wrap",animation:200,onEnd:e=>{const s=t.editComponent.list[e.oldIndex];t.editComponent.list.splice(e.oldIndex,1),t.editComponent.list.splice(e.newIndex,0,s),a.sort(O(t.editComponent.list.length).map(i=>i.toString())),_(!0)}})})}),y({}),(a,e)=>{const s=L,i=Q,u=P,I=D,k=N,E=G,S=q;return h(),f(x,null,[c(m("div",K,[m("div",X,[m("h3",Y,b(o(n)("imageSet")),1),l(S,{"label-width":"80px",class:"px-[10px]"},{default:d(()=>[l(i,{label:o(n)("imageHeight"),class:"display-block"},{default:d(()=>[l(s,{modelValue:o(t).editComponent.imageHeight,"onUpdate:modelValue":e[0]||(e[0]=r=>o(t).editComponent.imageHeight=r),placeholder:o(n)("imageHeightPlaceholder"),clearable:"",maxlength:"10",onBlur:V},{append:d(()=>[v("px")]),_:1},8,["modelValue","placeholder"]),m("div",Z,b(o(n)("imageAdsTips")),1)]),_:1},8,["label"]),m("div",{ref_key:"imageBoxRef",ref:C},[(h(!0),f(x,null,$(o(t).editComponent.list,(r,U)=>(h(),f("div",{key:r.id,class:"item-wrap !cursor-move p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[l(i,{label:o(n)("image")},{default:d(()=>[l(u,{modelValue:r.imageUrl,"onUpdate:modelValue":p=>r.imageUrl=p,limit:1,onChange:H},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),c(m("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:p=>o(t).editComponent.list.splice(U,1)},[l(I,{name:"element-CircleCloseFilled",color:"#bbb",size:"20px"})],8,ee),[[g,o(t).editComponent.list.length>1]]),l(i,{label:o(n)("link")},{default:d(()=>[l(k,{modelValue:r.link,"onUpdate:modelValue":p=>r.link=p},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512),c(l(E,{class:"w-full",onClick:w},{default:d(()=>[v(b(o(n)("addImageAd")),1)]),_:1},512),[[g,o(t).editComponent.list.length<10]])]),_:1})])],512),[[g,o(t).editTab=="content"]]),c(m("div",te,[z(a.$slots,"style",{},void 0,!0)],512),[[g,o(t).editTab=="style"]])],64)}}});const ae=J(oe,[["__scopeId","data-v-cb793c9e"]]),we=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{we as _};
