import{d as R,N as p,r as A,q as T,h as r,c as u,y as f,z as b,u as e,a as o,t as x,e as n,w as c,F as h,G as y,A as v,R as w,b as j,X as F,Y as G,cz as H}from"./index-30b146d4.js";/* empty css                  *//* empty css                        *//* empty css                 */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{_ as I}from"./index.vue_vue_type_style_index_0_lang-16076208.js";import{_ as L}from"./index-703c7b0d.js";/* empty css                     */import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-d070c8c8.js";import{u as B}from"./diy-4ec16809.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const O={class:"content-wrap rubik-cube"},W={class:"edit-attr-item-wrap"},q={class:"mb-[10px]"},M={class:"selected-template-list"},P=["onClick"],X={class:"edit-attr-item-wrap"},Y={class:"mb-[10px]"},J={class:"layout"},K={class:"have-preview-image"},Q=["src"],Z={class:"style-wrap"},ee={class:"edit-attr-item-wrap"},se={class:"mb-[10px]"},te=R({__name:"edit-rubik-cube",setup(le,{expose:k}){const s=B();s.editComponent.ignore=[],s.editComponent.verify=d=>{const t={code:!0,message:""};return s.value[d].list.forEach(i=>{if(i.imageUrl==="")return t.code=!1,t.message=p("imageUrlTip"),t}),t};const _=A([{name:"1行2个",src:"iconyihangliangge",className:"row1-of2",dimensionScale:[{desc:"宽度50%",size:"200px * 200px",name:"图一"},{desc:"宽度50%",size:"200px * 200px",name:"图二"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：200px"},{name:"1行3个",src:"iconyihangsange",className:"row1-of3",dimensionScale:[{desc:"宽度33.33%",size:"200px * 200px",name:"图一"},{desc:"宽度33.33%",size:"200px * 200px",name:"图二"},{desc:"宽度33.33%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：130px"},{name:"1行4个",src:"iconyihangsige",className:"row1-of4",dimensionScale:[{desc:"宽度25%",size:"200px * 200px",name:"图一"},{desc:"宽度25%",size:"200px * 200px",name:"图二"},{desc:"宽度25%",size:"200px * 200px",name:"图三"},{desc:"宽度25%",size:"200px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：100px"},{name:"2左2右",src:"iconmofang-liangzuoliangyou",className:"row2-lt-of2-rt",dimensionScale:[{desc:"宽度50%",size:"200px * 200px",name:"图一"},{desc:"宽度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50%",size:"200px * 200px",name:"图三"},{desc:"宽度50%",size:"200px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，建议添加尺寸一致的图片，宽度最小建议为：200px"},{name:"1左2右",src:"iconmofang-yizuoliangyou",className:"row1-lt-of2-rt",dimensionScale:[{desc:"宽度50% * 高度100%",size:"200px * 400px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，宽度最小建议为：200px，右侧两张图片高度一致，左侧图片高度为右侧两张图片高度之和（例：左侧图片尺寸：200px * 300px，右侧两张图片尺寸：200px * 150px）"},{name:"1上2下",src:"iconmofang-yishangliangxia",className:"row1-tp-of2-bm",dimensionScale:[{desc:"宽度100% * 高度50%",size:"400px * 200px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图三"}],descAux:"选定布局区域，在下方添加图片，上方一张图片的宽度为下方两张图片宽度之和，下放两张图片尺寸一致，高度可根据实际需求自行确定（例：上方图片尺寸：400px * 150px，下方两张图片尺寸：200px * 150px）"},{name:"1左3右",src:"iconxuanzemoban-yizuosanyou",className:"row1-lt-of1-tp-of2-bm",dimensionScale:[{desc:"宽度50% * 高度100%",size:"200px * 400px",name:"图一"},{desc:"宽度50% * 高度50%",size:"200px * 200px",name:"图二"},{desc:"宽度25% * 高度50%",size:"100px * 200px",name:"图三"},{desc:"宽度25% * 高度50%",size:"100px * 200px",name:"图四"}],descAux:"选定布局区域，在下方添加图片，左右两侧内容宽高相同，右侧上下区域高度各占50%，右侧内容下半部分两张图片的宽度相同，各占右侧内容宽度的50%（例：左侧图片尺寸：200px * 400px，右侧上半部分图片尺寸：200px * 200px，右侧下半部分两张图片尺寸：100px * 200px）"}]),g=T(()=>{let d;return _.value.forEach(t=>{t.className==s.editComponent.mode&&(d=t)}),d}),S=d=>{for(let t=0;t<_.value.length;t++)if(t==d){s.editComponent.mode=_.value[t].className;const i=_.value[t].dimensionScale.length;if(i>s.editComponent.list.length)for(let l=0;l<i;l++)l+1>s.editComponent.list.length&&s.editComponent.list.push({imageUrl:"",imgWidth:0,imgHeight:0,link:{name:""}});else if(i!=s.editComponent.list.length)for(let l=0;l<s.editComponent.list.length;l++)l+1>i&&(s.editComponent.list.splice(l,1),l=0)}},V=d=>{U(!0)},U=(d=!1)=>{s.editComponent.list.forEach((t,i)=>{const l=new Image;l.src=w(t.imageUrl),l.onload=async()=>{t.imgWidth=l.width,t.imgHeight=l.height}})};return k({}),(d,t)=>{const i=F,l=$,z=G,N=L,E=I,C=H;return r(),u(h,null,[f(o("div",O,[o("div",W,[o("h3",q,x(e(p)("selectStyle")),1),n(z,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[n(i,{label:e(p)("template")},{default:c(()=>[o("span",null,x(e(g).name),1)]),_:1},8,["label"]),o("ul",M,[(r(!0),u(h,null,y(_.value,(a,m)=>(r(),u("li",{key:m,class:v([a.className==e(s).editComponent.mode?"selected":""]),onClick:oe=>S(m)},[n(l,{name:"iconfont-"+a.src,size:"16px"},null,8,["name"])],10,P))),128))])]),_:1})]),o("div",X,[o("h3",Y,x(e(p)("rubikCubeLayout")),1),n(z,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[o("ul",J,[(r(!0),u(h,null,y(e(g).dimensionScale,(a,m)=>(r(),u("li",{key:m,class:v([e(g).className])},[f(o("div",K,[o("img",{src:e(w)(e(s).editComponent.list[m].imageUrl)},null,8,Q)],512),[[b,e(s).editComponent.list[m].imageUrl&&e(s).editComponent.list[m].imageUrl!="static/resource/images/diy/figure.png"]]),f(o("div",{class:v(["empty",[e(g).className]])},[o("p",null,x(a.name),1),o("p",null,x(a.desc),1)],2),[[b,!e(s).editComponent.list[m].imageUrl||e(s).editComponent.list[m].imageUrl=="static/resource/images/diy/figure.png"]])],2))),128))]),(r(!0),u(h,null,y(e(s).editComponent.list,a=>(r(),u("div",{key:a.id,class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[n(i,{label:e(p)("image")},{default:c(()=>[n(N,{modelValue:a.imageUrl,"onUpdate:modelValue":m=>a.imageUrl=m,limit:1,onChange:V},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"]),n(i,{label:e(p)("link")},{default:c(()=>[n(E,{modelValue:a.link,"onUpdate:modelValue":m=>a.link=m},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["label"])]))),128))]),_:1})])],512),[[b,e(s).editTab=="content"]]),f(o("div",Z,[o("div",ee,[o("h3",se,x(e(p)("rubikCubeStyle")),1),n(z,{"label-width":"80px",class:"px-[10px]"},{default:c(()=>[n(i,{label:e(p)("imageGap")},{default:c(()=>[n(C,{modelValue:e(s).editComponent.imageGap,"onUpdate:modelValue":t[0]||(t[0]=a=>e(s).editComponent.imageGap=a),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:30},null,8,["modelValue"])]),_:1},8,["label"]),n(i,{label:e(p)("topRounded")},{default:c(()=>[n(C,{modelValue:e(s).editComponent.topElementRounded,"onUpdate:modelValue":t[1]||(t[1]=a=>e(s).editComponent.topElementRounded=a),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"]),n(i,{label:e(p)("bottomRounded")},{default:c(()=>[n(C,{modelValue:e(s).editComponent.bottomElementRounded,"onUpdate:modelValue":t[2]||(t[2]=a=>e(s).editComponent.bottomElementRounded=a),"show-input":"",size:"small",class:"ml-[10px] horz-blank-slider",max:50},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),j(d.$slots,"style",{},void 0,!0)],512),[[b,e(s).editTab=="style"]])],64)}}});const ae=D(te,[["__scopeId","data-v-6640f69b"]]),be=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{be as _};
