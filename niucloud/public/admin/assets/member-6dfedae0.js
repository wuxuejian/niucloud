import{d as Q,x as X,n as Z,r as b,f as ee,h as m,c as h,e as l,w as o,a as u,t as i,u as a,i as c,q as t,F as k,T as w,s as y,R as le,A as ae,E as te,K as re,L as oe,aa as ne,aB as se,bG as ie,M as me,a6 as pe,ab as de,aj as ce,ac as ue,W as be,Y as _e}from"./index-34979a7f.js";/* empty css                   */import{_ as fe}from"./index.vue_vue_type_script_setup_true_lang-be9edc38.js";/* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                        *//* empty css                *//* empty css                     *//* empty css                       *//* empty css                  */import{_ as he}from"./default_headimg-a897263d.js";import{A as ge,O as ve,B as ye,k as ke,P as we}from"./member-3d8539dd.js";import{_ as xe}from"./add-member.vue_vue_type_script_setup_true_lang-9e0ad6a3.js";import{_ as Ce}from"./edit-member.vue_vue_type_script_setup_true_lang-4547087c.js";/* empty css                  *//* empty css                   */import"./index-0da618fa.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-645eb1b7.js";import"./attachment-0daaf0f6.js";import"./index.vue_vue_type_script_setup_true_lang-d47218dc.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-0998f18f.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-e10327f5.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./sortable.esm-be94e56d.js";const Pe={class:"main-container"},De={class:"flex justify-between items-center"},Le={class:"text-page-title"},Ve={class:"mt-[10px]"},Me={class:"flex items-center"},Ee=["src"],$e={key:1,class:"w-[50px] h-[50px] mr-[10px]",src:he,alt:""},Fe={class:"flex flex flex-col"},Te={class:"flex flex-col items-center"},Se={class:"flex items-center"},Be={class:"mt-[16px] flex justify-end"},Pl=Q({__name:"member",setup(Ue){const S=X().meta.title,n=Z({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{keyword:"",register_type:"",member_label:"",register_channel:"",create_time:[],member_level:""}}),V=b(),M=b([]);(async()=>{M.value=await(await ve({})).data})();const E=b([]);(async()=>{E.value=await(await ye()).data})();const $=b([]);ge().then(({data:s})=>{$.value=s});const B=s=>{s&&(s.resetFields(),_())},_=(s=1)=>{n.loading=!0,n.page=s,ke({page:n.page,limit:n.limit,...n.searchParam}).then(r=>{n.loading=!1,n.data=r.data.data,n.total=r.data.total}).catch(()=>{n.loading=!1})};_();const U=ee(),x=b(null),C=b(null);function z(s){const r=b({type:"member_label",id:s.member_id,title:t("setLable"),data:s});C.value.setDialogType(r.value),C.value.showDialog=!0}const A=()=>{x.value.setFormData(),x.value.showDialog=!0},I=s=>{U.push(`/member/detail?id=${s.member_id}`)},N=b(null),P=b(!1),R=s=>{P.value=s},Y=()=>{P.value=!0},F=(s,r)=>{we({status:r,member_ids:[s.member_id]}).then(f=>{f.code>=0&&_()})};return(s,r)=>{const f=te,j=re,g=oe,v=ne,D=se,H=ie,O=me,T=pe,p=de,L=ce,q=ue,G=be,K=fe,W=_e;return m(),h("div",Pe,[l(T,{class:"box-card !border-none",shadow:"never"},{default:o(()=>[u("div",De,[u("span",Le,i(a(S)),1),l(f,{type:"primary",onClick:A},{default:o(()=>[c(i(a(t)("addMember")),1)]),_:1})]),l(T,{class:"box-card !border-none my-[20px] table-search-wrap",shadow:"never"},{default:o(()=>[l(O,{inline:!0,model:n.searchParam,ref_key:"searchFormRef",ref:V},{default:o(()=>[l(g,{label:a(t)("memberInfo"),prop:"keyword"},{default:o(()=>[l(j,{modelValue:n.searchParam.keyword,"onUpdate:modelValue":r[0]||(r[0]=e=>n.searchParam.keyword=e),class:"w-[240px]",placeholder:a(t)("memberInfoPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:a(t)("registerChannel"),prop:"register_channel"},{default:o(()=>[l(D,{modelValue:n.searchParam.register_channel,"onUpdate:modelValue":r[1]||(r[1]=e=>n.searchParam.register_channel=e),clearable:"",placeholder:a(t)("channelPlaceholder"),class:"input-width"},{default:o(()=>[l(v,{label:a(t)("selectPlaceholder"),value:""},null,8,["label"]),(m(!0),h(k,null,w(M.value,(e,d)=>(m(),y(v,{label:e,value:d,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:a(t)("memberLabel"),prop:"member_label"},{default:o(()=>[l(D,{modelValue:n.searchParam.member_label,"onUpdate:modelValue":r[2]||(r[2]=e=>n.searchParam.member_label=e),"collapse-tags":"",clearable:"",placeholder:a(t)("memberLabelPlaceholder"),class:"input-width"},{default:o(()=>[l(v,{label:a(t)("selectPlaceholder"),value:""},null,8,["label"]),(m(!0),h(k,null,w(E.value,(e,d)=>(m(),y(v,{label:e.label_name,value:e.label_id,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:a(t)("memberLevel"),prop:"member_label"},{default:o(()=>[l(D,{modelValue:n.searchParam.member_level,"onUpdate:modelValue":r[3]||(r[3]=e=>n.searchParam.member_level=e),"collapse-tags":"",clearable:"",placeholder:a(t)("memberLevelPlaceholder"),class:"input-width"},{default:o(()=>[l(v,{label:a(t)("selectPlaceholder"),value:""},null,8,["label"]),(m(!0),h(k,null,w($.value,(e,d)=>(m(),y(v,{label:e.level_name,value:e.level_id,key:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(g,{label:a(t)("createTime"),prop:"create_time"},{default:o(()=>[l(H,{modelValue:n.searchParam.create_time,"onUpdate:modelValue":r[4]||(r[4]=e=>n.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":a(t)("startDate"),"end-placeholder":a(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(g,null,{default:o(()=>[l(f,{type:"primary",onClick:r[5]||(r[5]=e=>_())},{default:o(()=>[c(i(a(t)("search")),1)]),_:1}),l(f,{onClick:r[6]||(r[6]=e=>B(V.value))},{default:o(()=>[c(i(a(t)("reset")),1)]),_:1}),l(f,{type:"primary",onClick:Y},{default:o(()=>[c(i(a(t)("export")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",Ve,[le((m(),y(q,{data:n.data,size:"large"},{empty:o(()=>[u("span",null,i(n.loading?"":a(t)("emptyData")),1)]),default:o(()=>[l(p,{prop:"member_no",label:a(t)("memberNo"),"min-width":"120"},null,8,["label"]),l(p,{prop:"nickname","show-overflow-tooltip":!0,label:a(t)("memberInfo"),"min-width":"170"},{default:o(({row:e})=>[u("div",Me,[e.headimg?(m(),h("img",{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:a(ae)(e.headimg),alt:""},null,8,Ee)):(m(),h("img",$e)),u("div",Fe,[u("span",null,i(e.nickname||""),1)])])]),_:1},8,["label"]),l(p,{prop:"member_level_name",label:a(t)("memberLevel"),"min-width":"130","show-overflow-tooltip":!0},null,8,["label"]),l(p,{prop:"mobile",label:a(t)("mobile"),"min-width":"120"},null,8,["label"]),l(p,{prop:"point",label:a(t)("point"),"min-width":"80",align:"right"},{default:o(({row:e})=>[c(i(Number.parseInt(e.point)),1)]),_:1},8,["label"]),l(p,{prop:"balance",label:a(t)("balance"),"min-width":"130",align:"right"},null,8,["label"]),l(p,{prop:"member_label",label:a(t)("lable"),"min-width":"120",align:"center"},{default:o(({row:e})=>[u("div",Te,[(m(!0),h(k,null,w(e.member_label_array,(d,J)=>(m(),h("div",{class:"my-[3px]",key:J},[l(L,{type:"info"},{default:o(()=>[c(i(d.label_name),1)]),_:2},1024)]))),128))])]),_:1},8,["label"]),l(p,{prop:"register_channel_name",label:a(t)("registerChannel"),"min-width":"110",align:"center"},null,8,["label"]),l(p,{prop:"member_label",label:a(t)("status"),"min-width":"120",align:"center"},{default:o(({row:e})=>[e.status==1?(m(),y(L,{key:0,type:"success",onClick:d=>F(e,0),class:"cursor-pointer"},{default:o(()=>[c(i(a(t)("normal")),1)]),_:2},1032,["onClick"])):(m(),y(L,{key:1,type:"error",onClick:d=>F(e,1),class:"cursor-pointer"},{default:o(()=>[c(i(a(t)("lock")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),l(p,{label:a(t)("createTime"),"min-width":"150",align:"center"},{default:o(({row:e})=>[c(i(e.create_time||""),1)]),_:1},8,["label"]),l(p,{label:a(t)("lastVisitTime"),"min-width":"150",align:"center"},{default:o(({row:e})=>[c(i(e.last_visit_time||""),1)]),_:1},8,["label"]),l(p,{label:a(t)("operation"),align:"right",fixed:"right",width:"100"},{default:o(({row:e})=>[u("div",Se,[l(f,{type:"primary",link:"",onClick:d=>I(e)},{default:o(()=>[c(i(a(t)("detail")),1)]),_:2},1032,["onClick"]),l(f,{type:"primary",link:"",onClick:d=>z(e)},{default:o(()=>[c(i(a(t)("setLable")),1)]),_:2},1032,["onClick"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[W,n.loading]]),u("div",Be,[l(G,{"current-page":n.page,"onUpdate:current-page":r[7]||(r[7]=e=>n.page=e),"page-size":n.limit,"onUpdate:page-size":r[8]||(r[8]=e=>n.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:n.total,onSizeChange:r[9]||(r[9]=e=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])]),l(xe,{ref_key:"addMemberDialog",ref:x,onComplete:r[10]||(r[10]=e=>_())},null,512),l(Ce,{ref_key:"editMemberDialog",ref:C,onComplete:r[11]||(r[11]=e=>_())},null,512),l(K,{ref_key:"exportSureDialog",ref:N,show:P.value,type:"member",searchParam:n.searchParam,onClose:R},null,8,["show","searchParam"])]),_:1})])}}});export{Pl as default};
