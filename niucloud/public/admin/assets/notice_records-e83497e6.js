import{d as S,O as G,n as D,N as t,r as V,h as i,c as d,e as l,w as n,a as b,t as s,u as o,F as N,G as T,I as y,i as k,y as H,B as w,W as K,X as M,ar as J,cO as W,aE as X,cJ as q,E as A,Y as Q,_ as Z,ag as ee,ai as te,as as ae,$ as le}from"./index-b19d04dd.js";/* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                *//* empty css                *//* empty css                  *//* empty css                       */import"./el-form-item-4ed993c7.js";import{c as F}from"./notice-7340abdf.js";import{_ as oe}from"./notice-records-info.vue_vue_type_script_setup_true_lang-83cd5541.js";/* empty css                   */const re={class:"main-container"},ne={class:"flex justify-between items-center"},ie={class:"text-[20px]"},se={class:"mt-[10px]"},ce={key:0},pe={key:1},me={key:2},de={class:"mt-[16px] flex justify-end"},Oe=S({__name:"notice_records",setup(ue){const L=G().meta.title,e=D({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{key:"",receiver:"",create_time:[]}}),f=D({buyer:{label:t("buyerNotice"),list:[]},seller:{label:t("sellerNotice"),list:[]}});(async()=>{await F().then(c=>{Object.keys(c.data).forEach(a=>{const h=c.data[a],p={value:a,name:h.name};h.receiver_type==0?f.buyer.list.push(p):f.seller.list.push(p)})}).catch(()=>{})})();const E=V(),u=(c=1)=>{e.loading=!0,e.page=c,F({page:e.page,limit:e.limit,...e.searchParam}).then(a=>{e.loading=!1,e.data=a.data.data,e.total=a.data.total}).catch(()=>{e.loading=!1})};u();const g=V(null),z=c=>{g.value.setFormData(c),g.value.showDialog=!0};return(c,a)=>{const h=K,p=M,x=J,B=W,$=X,O=q,v=A,U=Q,P=Z,m=ee,Y=te,j=ae,I=le;return i(),d("div",re,[l(P,{class:"box-card !border-none",shadow:"never"},{default:n(()=>[b("div",ne,[b("span",ie,s(o(L)),1)]),l(P,{class:"box-card !border-none my-[10px] table-search-wrap",shadow:"never"},{default:n(()=>[l(U,{inline:!0,model:e.searchParam,ref_key:"searchFormRef",ref:E},{default:n(()=>[l(p,{label:o(t)("searchReceiver"),prop:"receiver"},{default:n(()=>[l(h,{modelValue:e.searchParam.receiver,"onUpdate:modelValue":a[0]||(a[0]=r=>e.searchParam.receiver=r),placeholder:o(t)("receiverPlaceholder")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(p,{label:o(t)("noticeKey"),prop:"key"},{default:n(()=>[l($,{modelValue:e.searchParam.key,"onUpdate:modelValue":a[1]||(a[1]=r=>e.searchParam.key=r),clearable:"",placeholder:o(t)("groupIdPlaceholder"),class:"input-width"},{default:n(()=>[l(x,{label:o(t)("selectPlaceholder"),value:""},null,8,["label"]),(i(!0),d(N,null,T(f,(r,_)=>(i(),y(B,{key:_,label:r.label},{default:n(()=>[(i(!0),d(N,null,T(r.list,(C,R)=>(i(),y(x,{label:C.name,value:C.value,key:R},null,8,["label","value"]))),128))]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),l(p,{label:o(t)("createTime"),prop:"create_time"},{default:n(()=>[l(O,{modelValue:e.searchParam.create_time,"onUpdate:modelValue":a[2]||(a[2]=r=>e.searchParam.create_time=r),type:"datetimerange","value-format":"YYYY-MM-DD HH:mm:ss","start-placeholder":o(t)("startDate"),"end-placeholder":o(t)("endDate")},null,8,["modelValue","start-placeholder","end-placeholder"])]),_:1},8,["label"]),l(p,null,{default:n(()=>[l(v,{type:"primary",onClick:a[3]||(a[3]=r=>u())},{default:n(()=>[k(s(o(t)("search")),1)]),_:1}),l(v,{onClick:a[4]||(a[4]=r=>{var _;return(_=E.value)==null?void 0:_.resetFields()})},{default:n(()=>[k(s(o(t)("reset")),1)]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),b("div",se,[H((i(),y(Y,{data:e.data,size:"large"},{empty:n(()=>[b("span",null,s(e.loading?"":o(t)("emptyData")),1)]),default:n(()=>[l(m,{prop:"name",label:o(t)("noticeKey"),"min-width":"120"},null,8,["label"]),l(m,{prop:"notice_type",label:o(t)("noticeType"),"min-width":"120"},{default:n(({row:r})=>[r.notice_type=="sms"?(i(),d("div",ce,s(o(t)("sms")),1)):w("",!0),r.notice_type=="wechat"?(i(),d("div",pe,s(o(t)("wechat")),1)):w("",!0),r.notice_type=="weapp"?(i(),d("div",me,s(o(t)("weapp")),1)):w("",!0)]),_:1},8,["label"]),l(m,{prop:"nickname",label:o(t)("nickname"),"min-width":"120"},null,8,["label"]),l(m,{prop:"receiver",label:o(t)("receiver"),"min-width":"120"},null,8,["label"]),l(m,{prop:"create_time",label:o(t)("createTime"),"min-width":"140"},null,8,["label"]),l(m,{label:o(t)("operation"),align:"right",fixed:"right",width:"100"},{default:n(({row:r})=>[l(v,{type:"primary",link:"",onClick:_=>z(r)},{default:n(()=>[k(s(o(t)("info")),1)]),_:2},1032,["onClick"])]),_:1},8,["label"])]),_:1},8,["data"])),[[I,e.loading]]),b("div",de,[l(j,{"current-page":e.page,"onUpdate:current-page":a[5]||(a[5]=r=>e.page=r),"page-size":e.limit,"onUpdate:page-size":a[6]||(a[6]=r=>e.limit=r),layout:"total, sizes, prev, pager, next, jumper",total:e.total,onSizeChange:a[7]||(a[7]=r=>u()),onCurrentChange:u},null,8,["current-page","page-size","total"])])]),l(oe,{ref_key:"recordsDialog",ref:g,onComplete:u},null,512)]),_:1})])}}});export{Oe as default};
