import{d as P,n as V,r as b,h as _,c as z,e as l,w as n,a as f,u as r,N as o,i as p,t as i,y as j,I as g,B as k,a8 as I,W as L,X as U,E as S,Y as M,ah as W,av as X,aj as Y,a4 as q,_ as A,$ as G}from"./index-efa627c5.js";/* empty css                   *//* empty css                *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                     *//* empty css                  */import{c as H,e as J}from"./sys-7f18d1e7.js";import{_ as K}from"./edit-role.vue_vue_type_script_setup_true_async_true_lang-3f8c3bc5.js";/* empty css                   *//* empty css                *//* empty css                 */const O={class:"main-container"},Q={class:"flex justify-between items-center"},Z={class:"mt-[16px] flex justify-end"},Ce=P({__name:"role",setup(ee){const e=V({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{seach:""}}),v=b(),C=s=>{s&&(s.resetFields(),m())},m=(s=1)=>{e.loading=!0,e.page=s,H({page:e.page,limit:e.limit,role_name:e.searchParam.seach}).then(t=>{e.loading=!1,e.data=t.data.data,e.total=t.data.total}).catch(()=>{e.loading=!1})};m();const d=b(null),x=()=>{d.value.setFormData(),d.value.showDialog=!0},E=s=>{d.value.setFormData(s),d.value.showDialog=!0},D=s=>{I.confirm(o("roleDeleteTips"),o("warning"),{confirmButtonText:o("confirm"),cancelButtonText:o("cancel"),type:"warning"}).then(()=>{J(s).then(()=>{m()}).catch(()=>{})})};return(s,t)=>{const B=L,h=U,c=S,T=M,u=W,y=X,w=Y,F=q,N=A,R=G;return _(),z("div",O,[l(N,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[f("div",Q,[l(T,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:v},{default:n(()=>[l(h,{label:r(o)("roleName"),prop:"seach"},{default:n(()=>[l(B,{modelValue:e.searchParam.seach,"onUpdate:modelValue":t[0]||(t[0]=a=>e.searchParam.seach=a),class:"w-[240px]",placeholder:r(o)("roleNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(h,null,{default:n(()=>[l(c,{type:"primary",onClick:t[1]||(t[1]=a=>m())},{default:n(()=>[p(i(r(o)("search")),1)]),_:1}),l(c,{onClick:t[2]||(t[2]=a=>C(v.value))},{default:n(()=>[p(i(r(o)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"]),l(c,{type:"primary",class:"w-[100px] self-start",onClick:x},{default:n(()=>[p(i(r(o)("addRole")),1)]),_:1})]),f("div",null,[j((_(),g(w,{data:e.data,size:"large"},{empty:n(()=>[f("span",null,i(e.loading?"":r(o)("emptyData")),1)]),default:n(()=>[l(u,{prop:"role_name",label:r(o)("roleName")},null,8,["label"]),l(u,{label:r(o)("status")},{default:n(({row:a})=>[a.status==1?(_(),g(y,{key:0,type:"success"},{default:n(()=>[p(i(a.status_name),1)]),_:2},1024)):k("",!0),a.status==0?(_(),g(y,{key:1,type:"error"},{default:n(()=>[p(i(a.status_name),1)]),_:2},1024)):k("",!0)]),_:1},8,["label"]),l(u,{prop:"create_time",label:r(o)("createTime")},null,8,["label"]),l(u,{label:r(o)("operation"),align:"right",fixed:"right",width:"130"},{default:n(({row:a})=>[l(c,{type:"primary",link:"",onClick:$=>E(a)},{default:n(()=>[p(i(r(o)("edit")),1)]),_:2},1032,["onClick"]),l(c,{type:"primary",link:"",onClick:$=>D(a.role_id)},{default:n(()=>[p(i(r(o)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[R,e.loading]]),f("div",Z,[l(F,{"current-page":e.page,"onUpdate:current-page":t[3]||(t[3]=a=>e.page=a),"page-size":e.limit,"onUpdate:page-size":t[4]||(t[4]=a=>e.limit=a),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:t[5]||(t[5]=a=>m()),onCurrentChange:m},null,8,["current-page","page-size","total"])])]),l(K,{ref_key:"editRoleDialog",ref:d,onComplete:t[6]||(t[6]=a=>m())},null,512)]),_:1})])}}});export{Ce as default};
