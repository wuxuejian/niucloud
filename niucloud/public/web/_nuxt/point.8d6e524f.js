import{_ as v,E as h,v as w}from"./el-loading.2ca47d0f.js";import{E as y,a as E}from"./el-table.d7238e48.js";import{E as C}from"./el-select.9cb5af30.js";import{a as z,D as P,o as m,e as _,a0 as T,f as o,w as d,j as p,t as j,u as n,V as l,bt as D}from"./entry.58b5d0b7.js";import"./el-tooltip.fbdd28c5.js";import"./el-popper.e159521b.js";import"./el-input.16174efa.js";import{_ as k}from"./_plugin-vue_export-helper.c27b6911.js";import"./index.fbbc8ba5.js";import"./_initCloneObject.a43daffc.js";import"./debounce.07c829e4.js";import"./use-form-item.a46d28b8.js";import"./index.9ac2b7ac.js";import"./vnode.59a8ea73.js";const B={class:"w-full h-full bg-page pt-6"},L={class:"main-container flex justify-between"},S={class:"card-header"},V={class:"px-6"},I={class:"mt-[16px] flex justify-end"},N=z({__name:"point",setup(O){const t=P({page:1,limit:10,total:0,loading:!0,data:[]}),r=(e=1)=>{t.loading=!0,t.page=e,D({page:t.page,limit:t.limit}).then(a=>{t.loading=!1,t.data=a.data.data,t.total=a.data.total}).catch(()=>{t.loading=!1})};return r(),(e,a)=>{const c=v,i=y,u=E,g=C,f=h,b=w;return m(),_("div",B,[T((m(),_("div",L,[o(c),o(f,{class:"box-card flex-1 ml-4",shadow:"never"},{header:d(()=>[p("div",S,[p("span",null,j(("t"in e?e.t:n(l))("myPoint")),1)])]),default:d(()=>[p("div",V,[o(u,{data:t.data,stripe:""},{default:d(()=>[o(i,{prop:"account_type_name",label:("t"in e?e.t:n(l))("accountType"),width:"180"},null,8,["label"]),o(i,{prop:"account_data",label:("t"in e?e.t:n(l))("changeInAmount"),width:"120"},null,8,["label"]),o(i,{prop:"from_type_name",label:("t"in e?e.t:n(l))("modeOfOccurrence"),width:"180"},null,8,["label"]),o(i,{prop:"memo",label:("t"in e?e.t:n(l))("remark"),width:"180"},null,8,["label"]),o(i,{prop:"create_time",label:("t"in e?e.t:n(l))("occurrenceTime")},null,8,["label"])]),_:1},8,["data"]),p("div",I,[o(g,{"current-page":t.page,"onUpdate:currentPage":a[0]||(a[0]=s=>t.page=s),"page-size":t.limit,"onUpdate:pageSize":a[1]||(a[1]=s=>t.limit=s),layout:"total, sizes, prev, pager, next, jumper",total:t.total,onSizeChange:a[2]||(a[2]=s=>r()),onCurrentChange:r},null,8,["current-page","page-size","total"])])])]),_:1})])),[[b,t.loading]])])}}});const X=k(N,[["__scopeId","data-v-79d87534"]]);export{X as default};
