import{d as v,O as w,n as T,r as D,h as i,c as m,e as o,w as n,y as x,I as p,a as N,t as s,u as e,N as t,B as u,i as f,ah as B,av as C,aj as E,$ as M,a0 as V}from"./index-9d601459.js";/* empty css                   *//* empty css                *//* empty css                        *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     */import{_ as $}from"./index.vue_vue_type_script_setup_true_lang-6df3a9a5.js";import{a as z}from"./sys-45a56363.js";import{_ as I}from"./edit-menu.vue_vue_type_script_setup_true_lang-dd063e76.js";/* empty css                *//* empty css                   *//* empty css                  *//* empty css                *//* empty css                        *//* empty css                 */import"./index-5380230b.js";import"./index.vue_vue_type_style_index_0_lang-e34cc8d7.js";import"./attachment-b997aaa8.js";/* empty css                        */import"./el-form-item-4ed993c7.js";/* empty css                  *//* empty css                  *//* empty css                      *//* empty css                 *//* empty css                 *//* empty css               *//* empty css                    *//* empty css                         *//* empty css                   *//* empty css                 */import"./select-menu-item.vue_vue_type_script_setup_true_lang-79cfe1ef.js";const L={class:"main-container"},j={key:0},O={key:1},R={key:2},we=v({__name:"menu",setup(S){w().meta.title;const l=T({loading:!0,data:[]}),c=()=>{l.loading=!0,z("admin").then(d=>{l.loading=!1,l.data=d.data}).catch(()=>{})};c();const h=D(null);return(d,A)=>{const r=B,y=$,_=C,b=E,g=M,k=V;return i(),m("div",L,[o(g,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[x((i(),p(b,{data:l.data,"row-key":"menu_key",size:"large"},{empty:n(()=>[N("span",null,s(l.loading?"":e(t)("emptyData")),1)]),default:n(()=>[o(r,{prop:"menu_name","show-overflow-tooltip":!0,label:e(t)("menuName"),"min-width":"150"},null,8,["label"]),o(r,{label:e(t)("icon"),width:"100",align:"center"},{default:n(({row:a})=>[a.icon?(i(),p(y,{key:0,name:a.icon,size:"18px"},null,8,["name"])):u("",!0)]),_:1},8,["label"]),o(r,{label:e(t)("menuType"),width:"80"},{default:n(({row:a})=>[a.menu_type==0?(i(),m("div",j,s(e(t)("menuTypeDir")),1)):a.menu_type==1?(i(),m("div",O,s(e(t)("menuTypeMenu")),1)):a.menu_type==2?(i(),m("div",R,s(e(t)("menuTypeButton")),1)):u("",!0)]),_:1},8,["label"]),o(r,{prop:"api_url",label:e(t)("authId"),"min-width":"150",align:"center"},null,8,["label"]),o(r,{label:e(t)("status"),"min-width":"120",align:"center"},{default:n(({row:a})=>[a.status==1?(i(),p(_,{key:0,class:"ml-2",type:"success"},{default:n(()=>[f(s(e(t)("statusNormal")),1)]),_:1})):u("",!0),a.status==0?(i(),p(_,{key:1,class:"ml-2",type:"error"},{default:n(()=>[f(s(e(t)("statusDeactivate")),1)]),_:1})):u("",!0)]),_:1},8,["label"]),o(r,{prop:"sort",label:e(t)("sort"),"min-width":"100"},null,8,["label"]),o(r,{label:e(t)("operation"),align:"right",fixed:"right",width:"130"},{default:n(({row:a})=>[]),_:1},8,["label"])]),_:1},8,["data"])),[[k,l.loading]]),o(I,{ref_key:"editMenuDialog",ref:h,"menu-tree":l.data,onComplete:c},null,8,["menu-tree"])]),_:1})])}}});export{we as default};
