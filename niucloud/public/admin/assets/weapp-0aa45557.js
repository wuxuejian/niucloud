import{d as S,O as W,n as E,r as v,q as M,N as t,h as y,c as O,e as l,w as r,a as d,t as m,u as s,i as g,y as C,I as k,a8 as X,E as Y,ah as A,aj as G,at as H,$ as J,W as K,X as Q,Y as Z,aa as ee,a0 as te,_ as ae}from"./index-4dcc0234.js";/* empty css                   *//* empty css                   *//* empty css                */import{_ as oe}from"./index.vue_vue_type_style_index_0_lang-cd8f78e9.js";import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                *//* empty css                      *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  */import{h as le,i as ne,j as se,k as ie}from"./weapp-4d690662.js";import{_ as re}from"./cron-info.vue_vue_type_script_setup_true_lang-13e7b8d6.js";/* empty css                    */const pe={class:"main-container"},de={class:"flex justify-between items-center"},me={class:"text-[20px]"},ce={class:"mt-[10px]"},ue={class:"mt-[16px] flex justify-end"},_e={class:"dialog-footer"},fe=S({__name:"weapp",setup(ve){const D=W().meta.title,a=E({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",type:"",last_time:""}}),c=(i=1)=>{a.loading=!0,a.page=i,le({page:a.page,limit:a.limit,...a.searchParam}).then(e=>{a.loading=!1,a.data=e.data.data,a.total=e.data.total}).catch(()=>{a.loading=!1})};c();const u=v(!1),o=E({...{id:0,desc:"",path:"",version:"",type:"weapp"}}),b=v(),T=()=>{o.id=0,o.desc="",o.path="",o.version="",u.value=!0},B=M(()=>({version:[{required:!0,message:t("versionPlaceholder"),trigger:"blur"}],path:[{required:!0,validator:P,trigger:"blur"}]})),P=(i,e,p)=>o.path==""?p(new Error(t("filePlaceholder"))):p(),_=v(!1),$=async i=>{_.value||!i||await i.validate(async e=>{if(e){_.value=!0;const p=o;(o.id>0?ne:se)(p).then(w=>{_.value=!1,u.value=!1,c()}).catch(()=>{_.value=!1})}})},z=i=>{o.id=i.id,o.desc=i.desc,o.path=i.path,o.version=i.version,u.value=!0},U=i=>{X.confirm(t("weappVersionDeleteTips"),t("warning"),{confirmButtonText:t("confirm"),cancelButtonText:t("cancel"),type:"warning"}).then(()=>{ie(i).then(()=>{c()}).catch(()=>{})})},j=v(null);return(i,e)=>{const p=Y,f=A,w=G,N=H,F=J,V=K,h=Q,I=oe,R=Z,q=ee,x=te;return y(),O("div",pe,[l(F,{class:"box-card !border-none",shadow:"never"},{default:r(()=>[d("div",de,[d("span",me,m(s(D)),1),l(p,{type:"primary",onClick:T},{default:r(()=>[g(m(s(t)("addVersion")),1)]),_:1})]),d("div",ce,[C((y(),k(w,{data:a.data,size:"large"},{empty:r(()=>[d("span",null,m(a.loading?"":s(t)("emptyData")),1)]),default:r(()=>[l(f,{prop:"version",label:s(t)("version"),"min-width":"150"},null,8,["label"]),l(f,{prop:"create_time",label:s(t)("createTime"),"min-width":"150"},null,8,["label"]),l(f,{label:s(t)("operation"),align:"right",fixed:"right",width:"130"},{default:r(({row:n})=>[l(p,{type:"primary",link:"",onClick:L=>z(n)},{default:r(()=>[g(m(s(t)("edit")),1)]),_:2},1032,["onClick"]),l(p,{type:"primary",link:"",onClick:L=>U(n.id)},{default:r(()=>[g(m(s(t)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[x,a.loading]]),d("div",ue,[l(N,{"current-page":a.page,"onUpdate:current-page":e[0]||(e[0]=n=>a.page=n),"page-size":a.limit,"onUpdate:page-size":e[1]||(e[1]=n=>a.limit=n),layout:"total, sizes, prev, pager, next, jumper",total:a.total,onSizeChange:e[2]||(e[2]=n=>c()),onCurrentChange:c},null,8,["current-page","page-size","total"])])])]),_:1}),l(re,{ref_key:"cronDialog",ref:j,onComplete:a},null,8,["onComplete"]),l(q,{modelValue:u.value,"onUpdate:modelValue":e[7]||(e[7]=n=>u.value=n),title:s(t)("editVersion"),width:"550px","destroy-on-close":!0},{footer:r(()=>[d("span",_e,[l(p,{type:"primary",onClick:e[6]||(e[6]=n=>$(b.value))},{default:r(()=>[g(m(s(t)("confirm")),1)]),_:1})])]),default:r(()=>[C((y(),k(R,{model:o,"label-width":"110px",ref_key:"formRef",ref:b,rules:s(B),class:"page-form"},{default:r(()=>[l(h,{label:s(t)("version"),prop:"version"},{default:r(()=>[l(V,{modelValue:o.version,"onUpdate:modelValue":e[3]||(e[3]=n=>o.version=n),placeholder:s(t)("versionPlaceholder"),class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,{label:s(t)("file"),prop:"path"},{default:r(()=>[l(I,{modelValue:o.path,"onUpdate:modelValue":e[4]||(e[4]=n=>o.path=n),class:"input-width",api:"applet/upload"},null,8,["modelValue"])]),_:1},8,["label"]),l(h,{label:s(t)("desc")},{default:r(()=>[l(V,{type:"textarea",modelValue:o.desc,"onUpdate:modelValue":e[5]||(e[5]=n=>o.desc=n),class:"input-width",clearable:""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model","rules"])),[[x,i.loading]])]),_:1},8,["modelValue","title"])])}}});const Le=ae(fe,[["__scopeId","data-v-5edd1c19"]]);export{Le as default};
