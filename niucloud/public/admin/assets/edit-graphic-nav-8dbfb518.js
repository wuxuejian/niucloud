import"./base-962c0c23.js";import{B as z,d as I}from"./index-f1b9f75f.js";/* empty css                 *//* empty css                  *//* empty css                  *//* empty css                        */import"./el-tooltip-58212670.js";import{_ as M}from"./index.vue_vue_type_script_setup_true_lang-b0b1684a.js";import{_ as R}from"./index-62d981e4.js";/* empty css                     */import{E as B,b as G}from"./el-radio-bfd4b1ad.js";import{v as c}from"./event-ff03ec12.js";import{t as a}from"./index-e8f72538.js";import{S as P}from"./sortable.esm-be94e56d.js";import{d as W}from"./storage-abe718b1.js";import{u as $}from"./diy-e408e671.js";import{r as D}from"./range-5a416794.js";import{a as H,E as L}from"./index-61c777fa.js";import{E as j}from"./index-93f2c618.js";import{E as A}from"./index-bba9e58c.js";import{E as O}from"./index-3220fc45.js";import{d as q,w as J,r as K,o as Q,A as X,b as v,e as C,L as g,u as e,f as s,x as m,q as t,p as o,v as r,F as w,t as Y,g as Z}from"./runtime-core.esm-bundler-dc7a07d7.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const le={class:"content-wrap"},te={class:"edit-attr-item-wrap"},oe={class:"mb-[10px]"},ae={class:"edit-attr-item-wrap"},ie={class:"mb-[10px]"},de={class:"text-sm text-gray-400 mb-[10px]"},ne=["onClick"],me={class:"style-wrap"},re={class:"edit-attr-item-wrap"},pe={class:"mb-[10px]"},se={class:"edit-attr-item-wrap"},ue={class:"mb-[10px]"},_e=q({__name:"edit-graphic-nav",setup(ge,{expose:S}){const l=$();l.editComponent.ignore=[],l.editComponent.verify=u=>{var i={code:!0,message:""};return l.value[u].list.forEach(n=>{if((l.value[u].mode==="graphic"||l.value[u].mode==="img")&&n.imageUrl==="")return i.code=!1,i.message=a("imageUrlTip"),i;if((l.value[u].mode==="graphic"||l.value[u].mode==="text")&&n.title==="")return i.code=!1,i.message=a("graphicNavTitlePlaceholder"),i}),i},l.editComponent.list.forEach(u=>{u.id||(u.id=l.generateRandom())}),J(()=>l.editComponent.list,(u,i)=>{l.editComponent.list.forEach(n=>{let _=new Image;_.src=W(n.imageUrl),_.onload=async()=>{n.imgWidth=_.width,n.imgHeight=_.height}})},{deep:!0});const y=()=>{l.editComponent.list.push({id:l.generateRandom(),title:"",imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""},label:{control:!1,text:"热门",textColor:"#FFFFFF",bgColorStart:"#F83287",bgColorEnd:"#FE3423"}})},x=K();return Q(()=>{X(()=>{const u=P.create(x.value,{group:"item-wrap",animation:200,onEnd:i=>{const n=l.editComponent.list[i.oldIndex];l.editComponent.list.splice(i.oldIndex,1),l.editComponent.list.splice(i.newIndex,0,n),u.sort(D(l.editComponent.list.length).map(_=>_.toString()))}})})}),S({}),(u,i)=>{const n=B,_=G,p=H,V=j,b=L,N=R,U=z,E=M,F=A,h=O,T=I;return v(),C(w,null,[g(s("div",le,[s("div",te,[s("h3",oe,m(e(a)("graphicNavModeTitle")),1),t(b,{"label-width":"80px",class:"px-[10px]"},{default:o(()=>[t(p,{label:e(a)("layoutMode")},{default:o(()=>[t(_,{modelValue:e(l).editComponent.layout,"onUpdate:modelValue":i[0]||(i[0]=d=>e(l).editComponent.layout=d)},{default:o(()=>[t(n,{label:"horizontal"},{default:o(()=>[r(m(e(a)("layoutModeHorizontal")),1)]),_:1}),t(n,{label:"vertical"},{default:o(()=>[r(m(e(a)("layoutModeVertical")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(p,{label:e(a)("graphicNavTitle")},{default:o(()=>[t(V,{modelValue:e(l).editComponent.navTitle,"onUpdate:modelValue":i[1]||(i[1]=d=>e(l).editComponent.navTitle=d),placeholder:e(a)("graphicNavTitlePlaceholder"),clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(p,{label:e(a)("graphicNavSelectMode")},{default:o(()=>[t(_,{modelValue:e(l).editComponent.mode,"onUpdate:modelValue":i[2]||(i[2]=d=>e(l).editComponent.mode=d)},{default:o(()=>[t(n,{label:"graphic"},{default:o(()=>[r(m(e(a)("graphicNavModeGraphic")),1)]),_:1}),t(n,{label:"img"},{default:o(()=>[r(m(e(a)("graphicNavModeImg")),1)]),_:1}),t(n,{label:"text"},{default:o(()=>[r(m(e(a)("graphicNavModeText")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),g(s("template",null,[t(p,{label:e(a)("graphicNavShowStyle")},{default:o(()=>[t(_,{modelValue:e(l).editComponent.showStyle,"onUpdate:modelValue":i[3]||(i[3]=d=>e(l).editComponent.showStyle=d)},{default:o(()=>[t(n,{label:"fixed"},{default:o(()=>[r(m(e(a)("graphicNavStyleFixed")),1)]),_:1}),t(n,{label:"singleSlide"},{default:o(()=>[r(m(e(a)("graphicNavStyleSingleSlide")),1)]),_:1}),t(n,{label:"pageSlide"},{default:o(()=>[r(m(e(a)("graphicNavStylePageSlide")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(p,{label:e(a)("graphicNavRowCount")},{default:o(()=>[t(_,{modelValue:e(l).editComponent.rowCount,"onUpdate:modelValue":i[4]||(i[4]=d=>e(l).editComponent.rowCount=d)},{default:o(()=>[t(n,{label:3},{default:o(()=>[r("3"+m(e(a)("piece")),1)]),_:1}),t(n,{label:4},{default:o(()=>[r("4"+m(e(a)("piece")),1)]),_:1}),t(n,{label:5},{default:o(()=>[r("5"+m(e(a)("piece")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(p,{label:e(a)("graphicNavPageCount")},{default:o(()=>[t(_,{modelValue:e(l).editComponent.pageCount,"onUpdate:modelValue":i[5]||(i[5]=d=>e(l).editComponent.pageCount=d)},{default:o(()=>[t(n,{label:1},{default:o(()=>[r("1"+m(e(a)("line")),1)]),_:1}),t(n,{label:2},{default:o(()=>[r("2"+m(e(a)("line")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"])],512),[[c,e(l).editComponent.layout=="horizontal"]])]),_:1})]),s("div",ae,[s("h3",ie,m(e(a)("graphicNavSetLabel")),1),t(b,{"label-width":"80px",class:"px-[10px]"},{default:o(()=>[s("p",de,m(e(a)("graphicNavTips")),1),s("div",{ref_key:"imageBoxRef",ref:x},[(v(!0),C(w,null,Y(e(l).editComponent.list,(d,k)=>(v(),C("div",{key:d.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[g(t(p,{label:e(a)("image")},{default:o(()=>[t(N,{modelValue:d.imageUrl,"onUpdate:modelValue":f=>d.imageUrl=f,limit:1},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),[[c,e(l).editComponent.mode==="graphic"||e(l).editComponent.mode==="img"]]),g(t(p,{label:e(a)("graphicNavTitle")},{default:o(()=>[t(V,{modelValue:d.title,"onUpdate:modelValue":f=>d.title=f,placeholder:e(a)("graphicNavTitlePlaceholder"),clearable:"",maxlength:"20","show-word-limit":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1032,["label"]),[[c,e(l).editComponent.mode==="graphic"||e(l).editComponent.mode==="text"]]),g(s("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:f=>e(l).editComponent.list.splice(k,1)},[t(U,{name:"element-CircleCloseFilled",color:"#bbb",size:"20px"})],8,ne),[[c,e(l).editComponent.list.length>1]]),t(p,{label:e(a)("link")},{default:o(()=>[t(E,{modelValue:d.link,"onUpdate:modelValue":f=>d.link=f},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))],512),g(t(F,{class:"w-full",onClick:y},{default:o(()=>[r(m(e(a)("addGraphicNav")),1)]),_:1},512),[[c,e(l).editComponent.list.length<10]])]),_:1})])],512),[[c,e(l).editTab=="content"]]),g(s("div",me,[g(s("div",re,[s("h3",pe,m(e(a)("graphicNavImageSet")),1),t(b,{"label-width":"80px",class:"px-[10px]"},{default:o(()=>[t(p,{label:e(a)("graphicNavImageSize")},{default:o(()=>[t(h,{modelValue:e(l).editComponent.imageSize,"onUpdate:modelValue":i[6]||(i[6]=d=>e(l).editComponent.imageSize=d),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",min:20,max:60},null,8,["modelValue"])]),_:1},8,["label"]),t(p,{label:e(a)("graphicNavAroundRadius")},{default:o(()=>[t(h,{modelValue:e(l).editComponent.aroundRadius,"onUpdate:modelValue":i[7]||(i[7]=d=>e(l).editComponent.aroundRadius=d),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})],512),[[c,["graphic","img"].includes(e(l).editComponent.mode)]]),g(s("div",se,[s("h3",ue,m(e(a)("textSet")),1),t(b,{"label-width":"80px",class:"px-[10px]"},{default:o(()=>[t(p,{label:e(a)("textFontSize")},{default:o(()=>[t(h,{modelValue:e(l).editComponent.font.size,"onUpdate:modelValue":i[8]||(i[8]=d=>e(l).editComponent.font.size=d),"show-input":"",size:"small",class:"ml-[10px] graphic-nav-slider",min:12,max:16},null,8,["modelValue"])]),_:1},8,["label"]),t(p,{label:e(a)("textFontWeight")},{default:o(()=>[t(_,{modelValue:e(l).editComponent.font.weight,"onUpdate:modelValue":i[9]||(i[9]=d=>e(l).editComponent.font.weight=d)},{default:o(()=>[t(n,{label:"normal"},{default:o(()=>[r(m(e(a)("fontWeightNormal")),1)]),_:1}),t(n,{label:"bold"},{default:o(()=>[r(m(e(a)("fontWeightBold")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),t(p,{label:e(a)("textColor")},{default:o(()=>[t(T,{modelValue:e(l).editComponent.font.color,"onUpdate:modelValue":i[10]||(i[10]=d=>e(l).editComponent.font.color=d),"show-alpha":"",predefine:e(l).predefineColors},null,8,["modelValue","predefine"])]),_:1},8,["label"])]),_:1})],512),[[c,["graphic","text"].includes(e(l).editComponent.mode)]]),Z(u.$slots,"style",{},void 0,!0)],512),[[c,e(l).editTab=="style"]])],64)}}});const ce=ee(_e,[["__scopeId","data-v-d50b41b0"]]),We=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"}));export{We as _};
