import{d as J,b_ as M,x as Q,f as Y,r as k,n as z,a2 as G,R as K,h as n,c as _,e,w as t,u as a,aP as U,a as o,t as i,i as v,q as d,s as f,A as E,F as h,T,B as $,E as W,aQ as X,a6 as Z,L as ee,J as te,aj as oe,a1 as se,M as ae,Y as le}from"./index-34979a7f.js";/* empty css                   *//* empty css                     *//* empty css               *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                       *//* empty css                  */import{_ as ie}from"./site_logo-5ed68b79.js";import{m as re}from"./site-ef31b576.js";import{_ as ne}from"./edit-site.vue_vue_type_script_setup_true_lang-8d78a616.js";/* empty css                  *//* empty css                   *//* empty css                       *//* empty css                 *//* empty css                     *//* empty css                  *//* empty css                  *//* empty css                  *//* empty css                  */import"./member_head-a897263d.js";import"./user-6b2d33a6.js";import"./addon-37fd48cc.js";const de={class:"main-container"},ce={class:"text-large font-600 mr-3"},_e={class:"input-width"},ue={key:1,class:"w-20 h-20",src:ie,alt:""},pe={class:"input-width"},me={class:"input-width"},fe={class:"input-width"},ve={class:"input-width"},he={class:"input-width"},be={class:"flex flex-wrap"},xe={key:0,class:"flex w-[300px] border border-[var(--el-color-info-light-7)] border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},ge={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},we={class:"image-error"},ye={class:"flex-1 w-0 flex flex-col justify-center leading-tight"},ke={class:"font-bold truncate"},Ee=["title"],De={class:"flex flex-wrap"},Ce={key:0,class:"flex w-[300px] border border-[var(--el-color-info-light-7)] border-solid p-[10px] !mr-[10px] !mb-[10px] rounded-md"},Se={class:"w-[60px] h-[60px] mr-[10px] rounded-md overflow-hidden"},Be={class:"image-error"},Fe={class:"flex-1 w-0 flex flex-col justify-center leading-tight"},Ne={class:"font-bold truncate"},Te=["title"],$e={class:"fixed-footer-wrap"},Ie={class:"fixed-footer"},lt=J({__name:"info",setup(je){const I=M(),b=Q(),j=Y(),R=b.meta.title,x=parseInt(b.query.id),g=k(!0),D={site_id:0,site_name:"",expire_time:0,group_id:0,keywords:"",business_hours:"",logo:"",desc:"",latitude:"",longitude:"",province_id:"",city_id:"",district_id:"",address:"",full_address:"",phone:"",group_name:"",status:0,create_time:0,site_addons:[],status_name:"",site_domain:""},l=z({...D}),C=async(p=0)=>{Object.assign(l,D);const r=await(await re(p)).data;Object.keys(l).forEach(u=>{r[u]!=null&&(l[u]=r[u])}),g.value=!1};x?C(x):g.value=!1;const L=()=>{C(x)},w=k(),y=k(null),V=p=>{y.value.setFormData(l),y.value.showDialog=!0},q=async p=>{S()},S=()=>{I.removeTab(b.path),j.push({path:"/admin/site/list"})};return(p,r)=>{const u=W,O=X,B=Z,c=ee,m=te,P=oe,F=G("icon-picture"),N=se,A=ae,H=le;return K((n(),_("div",de,[e(B,{class:"card !border-none",shadow:"never"},{default:t(()=>[e(O,{icon:a(U),onBack:r[1]||(r[1]=s=>p.$router.back())},{content:t(()=>[o("span",ce,i(a(R)),1)]),extra:t(()=>[e(u,{class:"w-[100px]",type:"primary",onClick:r[0]||(r[0]=s=>V(w.value))},{default:t(()=>[v(i(a(d)("edit")),1)]),_:1})]),_:1},8,["icon"])]),_:1}),e(A,{class:"page-form mt-[15px]",model:l,"label-width":"90px",ref_key:"formRef",ref:w},{default:t(()=>[e(B,{class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[e(c,{label:a(d)("siteName")},{default:t(()=>[o("div",_e,i(l.site_name),1)]),_:1},8,["label"]),e(c,{label:a(d)("siteLogo")},{default:t(()=>[l.logo?(n(),f(m,{key:0,class:"w-20 h-20",src:a(E)(l.logo),fit:"contain"},null,8,["src"])):(n(),_("img",ue))]),_:1},8,["label"]),e(c,{label:a(d)("siteDomain")},{default:t(()=>[o("div",pe,i(l.site_domain||""),1)]),_:1},8,["label"]),e(c,{label:a(d)("groupName")},{default:t(()=>[o("div",me,i(l.group_name||""),1)]),_:1},8,["label"]),e(c,{label:a(d)("keywords")},{default:t(()=>[o("div",fe,i(l.keywords||""),1)]),_:1},8,["label"]),e(c,{label:a(d)("status")},{default:t(({})=>[e(P,{class:"ml-2",type:l.status==1?"success":"error"},{default:t(()=>[v(i(l.status_name),1)]),_:1},8,["type"])]),_:1},8,["label"]),e(c,{label:a(d)("createTime")},{default:t(()=>[o("div",ve,i(l.create_time||""),1)]),_:1},8,["label"]),e(c,{label:a(d)("expireTime")},{default:t(()=>[o("div",he,i(l.expire_time||""),1)]),_:1},8,["label"]),e(c,{label:a(d)("app")},{default:t(()=>[o("div",be,[(n(!0),_(h,null,T(l.site_addons,s=>(n(),_(h,null,[s.type=="app"?(n(),_("div",xe,[o("div",ge,[s.icon?(n(),f(m,{key:0,src:a(E)(s.icon),class:"w-full h-full"},null,8,["src"])):(n(),f(m,{key:1,class:"w-full h-full"},{error:t(()=>[o("div",we,[e(N,null,{default:t(()=>[e(F)]),_:1})])]),_:1}))]),o("div",ye,[o("div",ke,i(s.title),1),o("div",{class:"text-gray-400 mt-[10px] truncate",title:s.desc},i(s.desc),9,Ee)])])):$("",!0)],64))),256))])]),_:1},8,["label"]),e(c,{label:a(d)("addon")},{default:t(()=>[o("div",De,[(n(!0),_(h,null,T(l.site_addons,s=>(n(),_(h,null,[s.type=="addon"?(n(),_("div",Ce,[o("div",Se,[s.icon?(n(),f(m,{key:0,src:a(E)(s.icon),class:"w-full h-full"},null,8,["src"])):(n(),f(m,{key:1,class:"w-full h-full"},{error:t(()=>[o("div",Be,[e(N,null,{default:t(()=>[e(F)]),_:1})])]),_:1}))]),o("div",Fe,[o("div",Ne,i(s.title),1),o("div",{class:"text-gray-400 mt-[10px] truncate",title:s.desc},i(s.desc),9,Te)])])):$("",!0)],64))),256))])]),_:1},8,["label"])]),_:1})]),_:1},8,["model"]),e(ne,{ref_key:"editSiteDialog",ref:y,onComplete:r[2]||(r[2]=s=>L())},null,512),o("div",$e,[o("div",Ie,[e(u,{type:"primary",onClick:r[3]||(r[3]=s=>q(w.value))},{default:t(()=>[v(i(a(d)("confirm")),1)]),_:1}),e(u,{onClick:r[4]||(r[4]=s=>S())},{default:t(()=>[v(i(a(d)("cancel")),1)]),_:1})])])])),[[H,g.value]])}}});export{lt as default};
