import{d as D,O as E,n as L,r as h,h as v,c as F,e as t,w as n,a as u,u as e,N as r,i as c,t as m,y as U,I as $,W as z,X as B,E as T,Y as j,ah as N,aj as I,as as R,$ as S,a0 as O}from"./index-9d601459.js";/* empty css                   *//* empty css                *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                *//* empty css                  */import"./el-form-item-4ed993c7.js";import{a as W}from"./site-c0bc0315.js";import{_ as X}from"./user-log-detail.vue_vue_type_script_setup_true_lang-453fae70.js";/* empty css                   *//* empty css                             */const Y={class:"main-container"},q={class:"flex justify-between items-center"},A={class:"mt-[16px] flex justify-end"},fe=D({__name:"log",setup(G){E().meta.title;let a=L({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{ip:"",username:""}});const b=h(),y=i=>{i&&(i.resetFields(),s())},s=(i=1)=>{a.loading=!0,a.page=i,W({page:a.page,limit:a.limit,...a.searchParam}).then(l=>{a.loading=!1,a.data=l.data.data,a.total=l.data.total}).catch(()=>{a.loading=!1})};s();const g=h(null),P=i=>{g.value.setFormData(i),g.value.showDialog=!0};return(i,l)=>{const _=z,d=B,f=T,w=j,p=N,C=I,V=R,k=S,x=O;return v(),F("div",Y,[t(k,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[u("div",q,[t(w,{inline:!0,model:e(a).searchParam,ref_key:"searchFormRef",ref:b},{default:n(()=>[t(d,{label:e(r)("ip"),prop:"ip"},{default:n(()=>[t(_,{modelValue:e(a).searchParam.ip,"onUpdate:modelValue":l[0]||(l[0]=o=>e(a).searchParam.ip=o),placeholder:e(r)("ipPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e(r)("username"),prop:"username"},{default:n(()=>[t(_,{modelValue:e(a).searchParam.username,"onUpdate:modelValue":l[1]||(l[1]=o=>e(a).searchParam.username=o),placeholder:e(r)("usernamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,{label:e(r)("url"),prop:"url"},{default:n(()=>[t(_,{modelValue:e(a).searchParam.url,"onUpdate:modelValue":l[2]||(l[2]=o=>e(a).searchParam.url=o),placeholder:e(r)("urlPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(d,null,{default:n(()=>[t(f,{type:"primary",onClick:l[3]||(l[3]=o=>s())},{default:n(()=>[c(m(e(r)("search")),1)]),_:1}),t(f,{onClick:l[4]||(l[4]=o=>y(b.value))},{default:n(()=>[c(m(e(r)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),u("div",null,[U((v(),$(C,{data:e(a).data,size:"large"},{empty:n(()=>[u("span",null,m(e(a).loading?"":e(r)("emptyData")),1)]),default:n(()=>[t(p,{prop:"username",label:e(r)("username"),"min-width":"120"},null,8,["label"]),t(p,{prop:"ip",label:e(r)("ip"),"min-width":"100",align:"left"},null,8,["label"]),t(p,{prop:"url",label:e(r)("url"),"min-width":"180"},null,8,["label"]),t(p,{prop:"type",label:e(r)("type"),"min-width":"100",align:"center"},null,8,["label"]),t(p,{label:e(r)("createTime"),"min-width":"180",align:"center"},{default:n(({row:o})=>[c(m(o.create_time||""),1)]),_:1},8,["label"]),t(p,{label:e(r)("operation"),align:"right",fixed:"right",width:"130"},{default:n(({row:o})=>[t(f,{type:"primary",link:"",onClick:J=>P(o)},{default:n(()=>[c(m(e(r)("detail")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[x,e(a).loading]]),u("div",A,[t(V,{"current-page":e(a).page,"onUpdate:current-page":l[5]||(l[5]=o=>e(a).page=o),"page-size":e(a).limit,"onUpdate:page-size":l[6]||(l[6]=o=>e(a).limit=o),layout:"total, sizes, prev, pager, next, jumper",total:e(a).total,onSizeChange:l[7]||(l[7]=o=>s()),onCurrentChange:s},null,8,["current-page","page-size","total"])]),t(X,{ref_key:"userLogDetailDialog",ref:g,onComplete:l[8]||(l[8]=o=>s())},null,512)])]),_:1})])}}});export{fe as default};
