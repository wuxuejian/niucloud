import{d as z,O as M,n as P,r as h,h as v,c as T,e as t,w as n,a as u,t as m,u as e,i as _,N as l,y as $,I as V,a8 as j,E as I,W as R,X as U,Y as S,$ as A,ah as O,aj as W,as as X,a0 as Y}from"./index-9d601459.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                  */import{z as q,A as G}from"./member-aa9fcf40.js";import{_ as H}from"./edit-label.vue_vue_type_script_setup_true_lang-f21fa7be.js";/* empty css                   */const J={class:"main-container"},K={class:"flex justify-between items-center"},Q={class:"text-[20px]"},Z={class:"mt-[10px]"},ee={class:"mt-[16px] flex justify-end"},we=z({__name:"label",setup(ae){const y=M().meta.title;let a=P({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{label_name:""}});const b=h(),x=i=>{i&&(i.resetFields(),s())},s=(i=1)=>{a.loading=!0,a.page=i,q({page:a.page,limit:a.limit,...a.searchParam}).then(o=>{a.loading=!1,a.data=o.data.data,a.total=o.data.total}).catch(()=>{a.loading=!1})};s();const p=h(null),w=()=>{p.value.setFormData(),p.value.showDialog=!0},C=i=>{p.value.setFormData(i),p.value.showDialog=!0},k=i=>{j.confirm(l("memberLabelDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{G(i).then(()=>{s()}).catch(()=>{})})};return(i,o)=>{const d=I,E=R,f=U,D=S,g=A,c=O,L=W,N=X,B=Y;return v(),T("div",J,[t(g,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[u("div",K,[u("span",Q,m(e(y)),1),t(d,{type:"primary",onClick:w},{default:n(()=>[_(m(e(l)("addMemberLabel")),1)]),_:1})]),t(g,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[t(D,{inline:!0,model:e(a).searchParam,ref_key:"searchFormRef",ref:b},{default:n(()=>[t(f,{label:e(l)("labelName"),prop:"label_name"},{default:n(()=>[t(E,{modelValue:e(a).searchParam.label_name,"onUpdate:modelValue":o[0]||(o[0]=r=>e(a).searchParam.label_name=r),placeholder:e(l)("labelNamePlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(f,null,{default:n(()=>[t(d,{type:"primary",onClick:o[1]||(o[1]=r=>s())},{default:n(()=>[_(m(e(l)("search")),1)]),_:1}),t(d,{onClick:o[2]||(o[2]=r=>x(b.value))},{default:n(()=>[_(m(e(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",Z,[$((v(),V(L,{data:e(a).data,size:"large"},{empty:n(()=>[u("span",null,m(e(a).loading?"":e(l)("emptyData")),1)]),default:n(()=>[t(c,{prop:"label_name",label:e(l)("labelName"),"min-width":"120"},null,8,["label"]),t(c,{prop:"member_num",label:e(l)("memberNumber"),"min-width":"120"},null,8,["label"]),t(c,{prop:"memo",label:e(l)("memo"),"min-width":"120"},null,8,["label"]),t(c,{prop:"sort",label:e(l)("sort"),"min-width":"120"},null,8,["label"]),t(c,{label:e(l)("operation"),align:"right",fixed:"right",width:"130"},{default:n(({row:r})=>[t(d,{type:"primary",link:"",onClick:F=>C(r)},{default:n(()=>[_(m(e(l)("edit")),1)]),_:2},1032,["onClick"]),t(d,{type:"primary",link:"",onClick:F=>k(r.label_id)},{default:n(()=>[_(m(e(l)("delete")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[B,e(a).loading]]),u("div",ee,[t(N,{"current-page":e(a).page,"onUpdate:current-page":o[3]||(o[3]=r=>e(a).page=r),"page-size":e(a).limit,"onUpdate:page-size":o[4]||(o[4]=r=>e(a).limit=r),layout:"total, sizes, prev, pager, next, jumper",total:e(a).total,onSizeChange:o[5]||(o[5]=r=>s()),onCurrentChange:s},null,8,["current-page","page-size","total"])])]),t(H,{ref_key:"editMemberLabelDialog",ref:p,onComplete:s},null,512)]),_:1})])}}});export{we as default};
