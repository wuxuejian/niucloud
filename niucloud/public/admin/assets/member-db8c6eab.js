import{d as G,O as J,n as W,r as g,f as X,h as m,c as f,e as a,w as n,a as u,t as i,u as t,i as p,N as l,F as C,G as D,I as v,y as q,R as K,a7 as Q,E as Z,W as ee,X as le,ar as ae,aE as te,cJ as re,Y as ne,_ as oe,ag as ie,av as se,ai as me,as as pe,$ as de}from"./index-b19d04dd.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                *//* empty css                *//* empty css                       *//* empty css                  */import"./el-form-item-4ed993c7.js";import{_ as ce}from"./default_headimg-a897263d.js";import{B as ue,v as _e,p as be,C as fe,D as ge}from"./member-358d18c9.js";import{_ as he}from"./add-member.vue_vue_type_script_setup_true_lang-96ffda8c.js";import{_ as ve}from"./edit-member.vue_vue_type_script_setup_true_lang-f3abf816.js";/* empty css                   */import"./index-34e6dc3a.js";/* empty css                        */import"./index.vue_vue_type_style_index_0_lang-4806f3ef.js";import"./attachment-b6d6fc85.js";/* empty css                 *//* empty css                 *//* empty css               *//* empty css                    *//* empty css                         *//* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-6089139d.js";/* empty css                */import"./sys-dbdff24e.js";import"./_plugin-vue_export-helper-c27b6911.js";const ye={class:"main-container"},ke={class:"flex justify-between items-center"},xe={class:"text-[20px]"},we={class:"mt-[10px]"},Ce={class:"flex items-center"},De=["src"],Ee={key:1,class:"w-[50px] h-[50px] mr-[10px]",src:ce,alt:""},Pe={class:"flex flex flex-col"},Me={class:"flex flex-col items-start"},Ve={class:"flex items-center"},Le={class:"mt-[16px] flex justify-end"},gl=G({__name:"member",setup($e){const T=J().meta.title,o=W({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{keyword:"",register_type:"",member_label:"",register_channel:"",create_time:[]}}),E=g(),P=g([]);(async()=>{P.value=await(await ue({})).data})();const M=g([]);(async()=>{M.value=await(await _e()).data})();const F=s=>{s&&(s.resetFields(),_())},_=(s=1)=>{o.loading=!0,o.page=s,be({page:o.page,limit:o.limit,...o.searchParam}).then(r=>{o.loading=!1,o.data=r.data.data,o.total=r.data.total}).catch(()=>{o.loading=!1})};_();const B=X(),k=g(null),x=g(null);function N(s){const r=g({type:"member_label",id:s.member_id,title:l("setLable"),data:s});x.value.setDialogType(r.value),x.value.showDialog=!0}function z(s){Q.confirm(l("memberDeleteTips"),l("warning"),{confirmButtonText:l("confirm"),cancelButtonText:l("cancel"),type:"warning"}).then(()=>{fe(s.member_id).then(()=>{_()}).catch(()=>{})})}const I=()=>{k.value.setFormData(),k.value.showDialog=!0},R=s=>{B.push(`/member/detail?id=${s.member_id}`)},V=(s,r)=>{ge({status:r,member_ids:[s.member_id]}).then(b=>{b.code>=0&&_()})};return(s,r)=>{const b=Z,U=ee,h=le,y=ae,L=te,S=re,Y=ne,$=oe,d=ie,w=se,j=me,A=pe,H=de;return m(),f("div",ye,[a($,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[u("div",ke,[u("span",xe,i(t(T)),1),a(b,{type:"primary",onClick:I},{default:n(()=>[p(i(t(l)("addMember")),1)]),_:1})]),a($,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[a(Y,{inline:!0,model:o.searchParam,ref_key:"searchFormRef",ref:E},{default:n(()=>[a(h,{label:t(l)("memberInfo"),prop:"keyword"},{default:n(()=>[a(U,{modelValue:o.searchParam.keyword,"onUpdate:modelValue":r[0]||(r[0]=e=>o.searchParam.keyword=e),class:"w-[240px]",placeholder:t(l)("memberInfoPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,{label:t(l)("registerChannel"),prop:"register_channel"},{default:n(()=>[a(L,{modelValue:o.searchParam.register_channel,"onUpdate:modelValue":r[1]||(r[1]=e=>o.searchParam.register_channel=e),clearable:"",placeholder:t(l)("channelPlaceholder"),class:"input-width"},{default:n(()=>[a(y,{label:t(l)("selectPlaceholder"),value:""},null,8,["label"]),(m(!0),f(C,null,D(P.value,(e,c)=>(m(),v(y,{label:e,value:c,key:c},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,{label:t(l)("memberLabel"),prop:"member_label"},{default:n(()=>[a(L,{modelValue:o.searchParam.member_label,"onUpdate:modelValue":r[2]||(r[2]=e=>o.searchParam.member_label=e),"collapse-tags":"",clearable:"",placeholder:t(l)("memberLabelPlaceholder"),class:"input-width"},{default:n(()=>[a(y,{label:t(l)("selectPlaceholder"),value:""},null,8,["label"]),(m(!0),f(C,null,D(M.value,(e,c)=>(m(),v(y,{label:e.label_name,value:e.label_id,key:c},null,8,["label","value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(h,{label:t(l)("createTime"),prop:"create_time"},{default:n(()=>[a(S,{modelValue:o.searchParam.create_time,"onUpdate:modelValue":r[3]||(r[3]=e=>o.searchParam.create_time=e),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":t(l)("startDate"),"end-placeholder":t(l)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),a(h,null,{default:n(()=>[a(b,{type:"primary",onClick:r[4]||(r[4]=e=>_())},{default:n(()=>[p(i(t(l)("search")),1)]),_:1}),a(b,{onClick:r[5]||(r[5]=e=>F(E.value))},{default:n(()=>[p(i(t(l)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u("div",we,[q((m(),v(j,{data:o.data,size:"large"},{empty:n(()=>[u("span",null,i(o.loading?"":t(l)("emptyData")),1)]),default:n(()=>[a(d,{prop:"member_no",label:t(l)("memberNo"),"min-width":"120"},null,8,["label"]),a(d,{prop:"nickname","show-overflow-tooltip":!0,label:t(l)("nickname"),"min-width":"170"},{default:n(({row:e})=>[u("div",Ce,[e.headimg?(m(),f("img",{key:0,class:"w-[50px] h-[50px] mr-[10px]",src:t(K)(e.headimg),alt:""},null,8,De)):(m(),f("img",Ee)),u("div",Pe,[u("span",null,i(e.nickname||""),1)])])]),_:1},8,["label"]),a(d,{prop:"mobile",label:t(l)("mobile"),"min-width":"120"},null,8,["label"]),a(d,{prop:"point",label:t(l)("point"),"min-width":"80",align:"right"},{default:n(({row:e})=>[p(i(Number.parseInt(e.point)),1)]),_:1},8,["label"]),a(d,{prop:"balance",label:t(l)("balance"),"min-width":"130",align:"right"},null,8,["label"]),a(d,{prop:"member_label",label:t(l)("lable"),"min-width":"120",align:"center"},{default:n(({row:e})=>[u("div",Me,[(m(!0),f(C,null,D(e.member_label_array,(c,O)=>(m(),f("div",{class:"my-[3px]",key:O},[a(w,{class:"ml-[13px]",type:"info"},{default:n(()=>[p(i(c.label_name),1)]),_:2},1024)]))),128))])]),_:1},8,["label"]),a(d,{prop:"register_channel_name",label:t(l)("registerChannel"),"min-width":"110",align:"center"},null,8,["label"]),a(d,{prop:"member_label",label:t(l)("status"),"min-width":"120",align:"center"},{default:n(({row:e})=>[e.status==1?(m(),v(w,{key:0,type:"success",onClick:c=>V(e,0),class:"cursor-pointer"},{default:n(()=>[p(i(t(l)("normal")),1)]),_:2},1032,["onClick"])):(m(),v(w,{key:1,type:"error",onClick:c=>V(e,1),class:"cursor-pointer"},{default:n(()=>[p(i(t(l)("lock")),1)]),_:2},1032,["onClick"]))]),_:1},8,["label"]),a(d,{label:t(l)("createTime"),"min-width":"150",align:"center"},{default:n(({row:e})=>[p(i(e.create_time||""),1)]),_:1},8,["label"]),a(d,{label:t(l)("lastVisitTime"),"min-width":"150",align:"center"},{default:n(({row:e})=>[p(i(e.last_visit_time||""),1)]),_:1},8,["label"]),a(d,{label:t(l)("operation"),align:"right",fixed:"right",width:"180"},{default:n(({row:e})=>[u("div",Ve,[a(b,{type:"primary",link:"",onClick:c=>R(e)},{default:n(()=>[p(i(t(l)("detail")),1)]),_:2},1032,["onClick"]),a(b,{type:"primary",link:"",onClick:c=>N(e)},{default:n(()=>[p(i(t(l)("setLable")),1)]),_:2},1032,["onClick"]),a(b,{type:"primary",link:"",onClick:c=>z(e)},{default:n(()=>[p(i(t(l)("memberDelete")),1)]),_:2},1032,["onClick"])])]),_:1},8,["label"])]),_:1},8,["data"])),[[H,o.loading]]),u("div",Le,[a(A,{"current-page":o.page,"onUpdate:current-page":r[6]||(r[6]=e=>o.page=e),"page-size":o.limit,"onUpdate:page-size":r[7]||(r[7]=e=>o.limit=e),layout:"total, sizes, prev, pager, next, jumper",total:o.total,onSizeChange:r[8]||(r[8]=e=>_()),onCurrentChange:_},null,8,["current-page","page-size","total"])])]),a(he,{ref_key:"addMemberDialog",ref:k,onComplete:r[9]||(r[9]=e=>_())},null,512),a(ve,{ref_key:"editMemberDialog",ref:x,onComplete:r[10]||(r[10]=e=>_())},null,512)]),_:1})])}}});export{gl as default};
