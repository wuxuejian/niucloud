import{d as j,O as F,r as B,n as L,h as s,c as d,e as n,w as l,a as h,t as i,u as t,i as r,N as e,y as N,I as u,B as c,a8 as O,E as P,ah as R,av as S,aj as U,aC as q,aD as A,_ as G,$ as H}from"./index-efa627c5.js";/* empty css                   *//* empty css                *//* empty css                    *//* empty css                 *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     */import{_ as J}from"./index.vue_vue_type_script_setup_true_lang-4a091848.js";/* empty css                        *//* empty css                  */import{b as K,d as Q}from"./sys-7f18d1e7.js";import{_ as W}from"./edit-menu.vue_vue_type_script_setup_true_lang-ef0a1446.js";/* empty css                *//* empty css                   *//* empty css                     *//* empty css                        *//* empty css                 */import"./index-ae484a7c.js";import"./index.vue_vue_type_style_index_0_lang-10ccc001.js";import"./attachment-99990bcb.js";/* empty css                        *//* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css                 *//* empty css               *//* empty css                    *//* empty css                         *//* empty css                   */import"./_plugin-vue_export-helper-c27b6911.js";/* empty css                *//* empty css                       *//* empty css                 */import"./tools-5a808432.js";const X={class:"main-container"},Y={class:"flex justify-between items-center"},Z={class:"text-page-title"},ee={key:0},te={key:1},ae={key:2},le={key:0},ne={key:1},oe={key:2},Ge=j({__name:"site_menu",setup(ie){const M=F(),v=B("system"),V=M.meta.title,m=L({loading:!0,system:[],application:[]}),g=()=>{m.loading=!0,K("site").then(({data:_})=>{m.loading=!1;const y=[],p=[];_.forEach(o=>{o.addon==""?y.push(o):p.push(o)}),m.system=y,m.application=p}).catch(()=>{})};g();const f=B(null),$=()=>{f.value.setFormData({app_type:"site"}),f.value.showDialog=!0},w=_=>{f.value.setFormData(_),f.value.showDialog=!0},T=_=>{O.confirm(e("menuDeleteTips"),e("warning"),{confirmButtonText:e("confirm"),cancelButtonText:e("cancel"),type:"warning"}).then(()=>{Q("site",_).then(y=>{g()}).catch(()=>{})})};return(_,y)=>{const p=P,o=R,D=J,b=S,C=U,x=q,z=A,I=G,E=H;return s(),d("div",X,[n(I,{class:"box-card !border-none",shadow:"never"},{default:l(()=>[h("div",Y,[h("span",Z,i(t(V)),1),n(p,{type:"primary",class:"w-[100px]",onClick:$},{default:l(()=>[r(i(t(e)("addMenu")),1)]),_:1})]),n(z,{modelValue:v.value,"onUpdate:modelValue":y[0]||(y[0]=a=>v.value=a)},{default:l(()=>[n(x,{label:t(e)("system"),name:"system"},{default:l(()=>[N((s(),u(C,{data:m.system,"row-key":"menu_key",size:"large"},{empty:l(()=>[h("span",null,i(m.loading?"":t(e)("emptyData")),1)]),default:l(()=>[n(o,{prop:"menu_name","show-overflow-tooltip":!0,label:t(e)("menuName"),"min-width":"150"},null,8,["label"]),n(o,{label:t(e)("icon"),width:"100",align:"center"},{default:l(({row:a})=>[a.icon?(s(),u(D,{key:0,name:a.icon,size:"18px"},null,8,["name"])):c("",!0)]),_:1},8,["label"]),n(o,{label:t(e)("menuType"),width:"80"},{default:l(({row:a})=>[a.menu_type==0?(s(),d("div",ee,i(t(e)("menuTypeDir")),1)):a.menu_type==1?(s(),d("div",te,i(t(e)("menuTypeMenu")),1)):a.menu_type==2?(s(),d("div",ae,i(t(e)("menuTypeButton")),1)):c("",!0)]),_:1},8,["label"]),n(o,{prop:"api_url",label:t(e)("authId"),"min-width":"150",align:"center"},null,8,["label"]),n(o,{label:t(e)("status"),"min-width":"120",align:"center"},{default:l(({row:a})=>[a.status==1?(s(),u(b,{key:0,class:"ml-2",type:"success"},{default:l(()=>[r(i(t(e)("statusNormal")),1)]),_:1})):c("",!0),a.status==0?(s(),u(b,{key:1,class:"ml-2",type:"error"},{default:l(()=>[r(i(t(e)("statusDeactivate")),1)]),_:1})):c("",!0)]),_:1},8,["label"]),n(o,{prop:"sort",label:t(e)("sort"),"min-width":"100"},null,8,["label"]),n(o,{label:t(e)("operation"),align:"right",fixed:"right",width:"130"},{default:l(({row:a})=>[n(p,{type:"primary",link:"",onClick:k=>w(a)},{default:l(()=>[r(i(t(e)("edit")),1)]),_:2},1032,["onClick"]),n(p,{type:"primary",link:"",onClick:k=>T(a.menu_key)},{default:l(()=>[r(i(t(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[E,m.loading]])]),_:1},8,["label"]),n(x,{label:t(e)("application"),name:"application"},{default:l(()=>[N((s(),u(C,{data:m.application,"row-key":"menu_key",size:"large"},{empty:l(()=>[h("span",null,i(m.loading?"":t(e)("emptyData")),1)]),default:l(()=>[n(o,{prop:"menu_name","show-overflow-tooltip":!0,label:t(e)("menuName"),"min-width":"150"},null,8,["label"]),n(o,{label:t(e)("icon"),width:"100",align:"center"},{default:l(({row:a})=>[a.icon?(s(),u(D,{key:0,name:a.icon,size:"18px"},null,8,["name"])):c("",!0)]),_:1},8,["label"]),n(o,{label:t(e)("menuType"),width:"80"},{default:l(({row:a})=>[a.menu_type==0?(s(),d("div",le,i(t(e)("menuTypeDir")),1)):a.menu_type==1?(s(),d("div",ne,i(t(e)("menuTypeMenu")),1)):a.menu_type==2?(s(),d("div",oe,i(t(e)("menuTypeButton")),1)):c("",!0)]),_:1},8,["label"]),n(o,{prop:"api_url",label:t(e)("authId"),"min-width":"150",align:"center"},null,8,["label"]),n(o,{label:t(e)("status"),"min-width":"120",align:"center"},{default:l(({row:a})=>[a.status==1?(s(),u(b,{key:0,class:"ml-2",type:"success"},{default:l(()=>[r(i(t(e)("statusNormal")),1)]),_:1})):c("",!0),a.status==0?(s(),u(b,{key:1,class:"ml-2",type:"error"},{default:l(()=>[r(i(t(e)("statusDeactivate")),1)]),_:1})):c("",!0)]),_:1},8,["label"]),n(o,{prop:"sort",label:t(e)("sort"),"min-width":"100"},null,8,["label"]),n(o,{label:t(e)("operation"),align:"right",fixed:"right",width:"130"},{default:l(({row:a})=>[n(p,{type:"primary",link:"",onClick:k=>w(a)},{default:l(()=>[r(i(t(e)("edit")),1)]),_:2},1032,["onClick"]),n(p,{type:"primary",link:"",onClick:k=>T(a.menu_key)},{default:l(()=>[r(i(t(e)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[E,m.loading]])]),_:1},8,["label"])]),_:1},8,["modelValue"]),n(W,{ref_key:"editMenuDialog",ref:f,"menu-tree":m.data,onComplete:g},null,8,["menu-tree"])]),_:1})])}}});export{Ge as default};
