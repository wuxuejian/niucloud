import{d as K,K as se,r as h,n as te,N as f,h as l,c as _,e as i,w as c,bE as O,a as o,u as t,cR as me,t as M,i as G,af as fe,aJ as xe,a1 as le,aT as he,aU as ve,aV as ge,W as ye,X as we,Y as be,E as ae,aa as re,p as ie,g as ce,_ as Y,U as j,cS as ke,cL as Z,cM as pe,q,v as Ee,I,F as V,B as y,y as ne,cp as oe,G as W,A as B,Q as de,f as ue,O as _e,s as Ce,aD as $e,aE as Se,cT as Ve,cN as Te,x as Ie,a_ as Me,J as Fe,cG as Pe,ap as De,Z as He}from"./index-4dcc0234.js";/* empty css                     *//* empty css                   *//* empty css                  */import{_ as ee}from"./index.vue_vue_type_script_setup_true_lang-9285296e.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                         *//* empty css                  *//* empty css                  */import{s as Ne}from"./personal-f9857d63.js";/* empty css                        */import{ab as Re,ac as Ue,ad as Le}from"./sys-8ead7f22.js";/* empty css                    */import{u as Ae}from"./style-14127e4f.js";/* empty css                */const Q=F=>(ie("data-v-827cff93"),F=F(),ce(),F),ze={class:"userinfo flex h-full items-center"},je={class:"user-name pl-[8px]"},Be=Q(()=>o("div",{class:"flex items-center leading-[1] py-[5px]"},[o("span",{class:"iconfont iconshezhi1 ml-[4px] !text-[14px] mr-[10px]"}),o("span",{class:"text-[14px]"},"账号设置")],-1)),We=Q(()=>o("div",{class:"flex items-center leading-[1] py-[5px]"},[o("span",{class:"iconfont iconshouquanxinxi2 ml-[4px] !text-[14px] mr-[10px]"}),o("span",{class:"text-[14px]"},"授权信息")],-1)),qe=Q(()=>o("div",{class:"flex items-center leading-[1] py-[5px]"},[o("span",{class:"iconfont iconxiugai ml-[4px] !text-[14px] mr-[10px]"}),o("span",{class:"text-[14px]"},"修改密码")],-1)),Oe=Q(()=>o("div",{class:"flex items-center leading-[1] py-[5px]"},[o("span",{class:"iconfont icontuichudenglu ml-[4px] !text-[14px] mr-[10px]"}),o("span",{class:"text-[14px]"},"退出登录")],-1)),Je={class:"form-tip"},Ge={class:"dialog-footer"},Ke=K({__name:"user-info",setup(F){const D=se(),U=m=>{switch(m){case"logout":D.logout();break}},P=()=>{D.logout()};let x=h(!1);const H=h();let u=te({original_password:"",password:"",password_copy:""});const T=te({original_password:[{required:!0,message:f("originalPasswordPlaceholder"),trigger:"blur"}],password:[{required:!0,message:f("passwordPlaceholder"),trigger:"blur"}],password_copy:[{required:!0,message:f("passwordPlaceholder"),trigger:"blur"}]}),C=m=>{m&&m.validate(s=>{if(s){let v="";if(u.password&&!u.original_password&&(v=f("originalPasswordHint")),u.password&&u.original_password&&!u.password_copy&&(v=f("newPasswordHint")),u.password&&u.original_password&&u.password_copy&&u.password!=u.password_copy&&(v=f("doubleCipherHint")),v){fe({type:"error",message:v});return}Ne(u).then($=>{x.value=!1})}else return!1})};return(m,s)=>{const v=xe,$=ee,L=le("router-link"),g=he,k=ve,N=ge,E=ye,A=we,z=be,w=ae,p=re;return l(),_("div",null,[i(N,{onCommand:U,tabindex:1},{dropdown:c(()=>[i(k,null,{default:c(()=>[i(g,null,{default:c(()=>[i(L,{to:"/user/center"},{default:c(()=>[Be]),_:1})]),_:1}),i(g,null,{default:c(()=>[i(L,{to:"/tools/authorize"},{default:c(()=>[We]),_:1})]),_:1}),i(g,{onClick:s[0]||(s[0]=e=>O(x)?x.value=!0:x=!0)},{default:c(()=>[qe]),_:1}),i(g,{onClick:P},{default:c(()=>[Oe]),_:1})]),_:1})]),default:c(()=>[o("div",ze,[i(v,{size:25,icon:t(me)},null,8,["icon"]),o("div",je,M(t(D).userInfo.username),1),i($,{name:"element-ArrowDown",class:"ml-[5px]"})])]),_:1}),i(p,{modelValue:t(x),"onUpdate:modelValue":s[6]||(s[6]=e=>O(x)?x.value=e:x=e),width:"450px",title:"修改密码","before-close":m.handleClose},{footer:c(()=>[o("span",Ge,[i(w,{onClick:s[4]||(s[4]=e=>O(x)?x.value=!1:x=!1)},{default:c(()=>[G(M(t(f)("cancel")),1)]),_:1}),i(w,{type:"primary",onClick:s[5]||(s[5]=e=>C(H.value))},{default:c(()=>[G(M(t(f)("save")),1)]),_:1})])]),default:c(()=>[o("div",null,[i(z,{model:t(u),"label-width":"90px",ref_key:"formRef",ref:H,rules:T,class:"page-form"},{default:c(()=>[i(A,{label:t(f)("originalPassword"),prop:"original_password"},{default:c(()=>[i(E,{modelValue:t(u).original_password,"onUpdate:modelValue":s[1]||(s[1]=e=>t(u).original_password=e),type:"password",placeholder:t(f)("originalPasswordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),i(A,{label:t(f)("newPassword"),prop:"password"},{default:c(()=>[i(E,{modelValue:t(u).password,"onUpdate:modelValue":s[2]||(s[2]=e=>t(u).password=e),type:"password",placeholder:t(f)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"]),o("div",Je,M(t(f)("passwordTip")),1)]),_:1},8,["label"]),i(A,{label:t(f)("passwordCopy"),prop:"password_copy"},{default:c(()=>[i(E,{modelValue:t(u).password_copy,"onUpdate:modelValue":s[3]||(s[3]=e=>t(u).password_copy=e),type:"password",placeholder:t(f)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])])]),_:1},8,["modelValue","before-close"])])}}});const Qe=Y(Ke,[["__scopeId","data-v-827cff93"]]),X=F=>(ie("data-v-30c7d2d5"),F=F(),ce(),F),Xe={class:"flex items-center text-[14px] leading-[1]"},Ye=X(()=>o("span",{class:"mx-2 text-[#4F5563] mx-[15px]"},"|",-1)),Ze=X(()=>o("span",{class:"mx-2 text-[#4F5563] mx-[15px]"},"|",-1)),et=X(()=>o("span",{class:"mx-2 text-[#4F5563] mx-[15px]"},"|",-1)),tt=X(()=>o("span",{class:"mx-2 text-[#4F5563] mx-[15px]"},"|",-1)),nt={class:"right-panel h-full flex items-center justify-end"},ot=["title"],st={class:"navbar-item flex items-center h-full cursor-pointer"},lt={class:"dialog-footer"},at={class:"flex flex-wrap"},rt=["onClick"],it=["onClick"],ct={class:"dialog-footer"},pt=K({__name:"index",setup(F){const D=ue(),U=j.get("app_type");ke();const P=Z(),x=pe(),H=_e(),u=h(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);q(()=>P.dark);let T=h(!0);(()=>{Re().then(w=>{}).catch(()=>{})})();const m=h(!1),s=h(""),v=h("");j.get("comparisonTokenStorage")&&(s.value=j.get("comparisonTokenStorage")),j.get("comparisonSiteIdStorage")&&(v.value=j.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",w=>{document.visibilityState==="visible"&&(v.value!=j.get("siteId")||s.value!=j.get("token"))&&(m.value=!0)});const $=()=>{m.value=!1,location.reload()};Ee(()=>{window.onresize=()=>(()=>{u.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()});const L=()=>{x.routeRefreshTag&&x.refreshRouterView()};q(()=>{const w=H.matched.filter(p=>p.meta.title);return w[0]&&w[0].path=="/"&&w.splice(0,1),w});const g=h(),k=h(!1),N=()=>{Ue().then(w=>{k.value=!0,g.value=w.data;for(let p=0;p<g.value.length;p++)g.value[p].is_use==1&&(E.value=g.value[p].view_path)})},E=h(""),A=()=>{Le({view_path:E.value}).then(()=>{k.value=!1,D.go(0)})};j.set({key:"currHeadMenuName",data:""});const z=(w,p)=>{D.push(w)};return(w,p)=>{const e=ee,r=ae,d=re,b=de;return l(),I(b,{class:"h-[60px] bg-[#2B303B] layout-admin flex items-center justify-between px-[15px] text-white"},{default:c(()=>[o("div",Xe,[o("span",{class:"iconfont icontuodong !text-[25px] cursor-pointer mr-[6px]",onClick:p[0]||(p[0]=a=>z("/admin/index"))}),Ye,o("span",{class:"cursor-pointer",onClick:p[1]||(p[1]=a=>z("/admin/setting/website/system","setting_manage"))},"控制台"),Ze,o("span",{class:"cursor-pointer",onClick:p[2]||(p[2]=a=>z("/admin/site/list","site_manage"))},"站点"),t(T)?(l(),_(V,{key:0},[et,o("span",{class:"cursor-pointer",onClick:p[3]||(p[3]=a=>z("/admin/app_manage/app_store",""))},"应用"),tt,o("span",{class:"cursor-pointer",onClick:p[4]||(p[4]=a=>z("/admin/app_manage/tools","tool"))},"开发")],64)):y("",!0)]),o("div",nt,[o("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:L},[i(e,{name:"element-Refresh"})]),t(U)=="site"?(l(),_("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:t(f)("newInfo")},null,8,ot)):y("",!0),t(U)=="site"?(l(),_("div",{key:1,class:"navbar-item flex items-center h-full cursor-pointer",onClick:N},[i(e,{name:"iconfont-iconqiehuan",title:t(f)("indexSwitch")},null,8,["title"])])):y("",!0),o("div",st,[i(Qe)])]),ne(o("input",{type:"hidden","onUpdate:modelValue":p[5]||(p[5]=a=>s.value=a)},null,512),[[oe,s.value]]),ne(o("input",{type:"hidden","onUpdate:modelValue":p[6]||(p[6]=a=>v.value=a)},null,512),[[oe,v.value]]),i(d,{modelValue:m.value,"onUpdate:modelValue":p[7]||(p[7]=a=>m.value=a),title:t(f)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:c(()=>[o("span",lt,[i(r,{onClick:$},{default:c(()=>[G(M(t(f)("layout.detectionLoginOperation")),1)]),_:1})])]),default:c(()=>[o("span",null,M(t(f)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"]),i(d,{modelValue:k.value,"onUpdate:modelValue":p[8]||(p[8]=a=>k.value=a),title:t(f)("indexTemplate"),width:"550px","destroy-on-close":!0},{footer:c(()=>[o("span",ct,[i(r,{type:"primary",onClick:A},{default:c(()=>[G(M(t(f)("confirm")),1)]),_:1})])]),default:c(()=>[o("div",at,[E.value==""?(l(!0),_(V,{key:0},W(g.value,(a,S)=>(l(),_("div",{key:S},[o("div",{onClick:n=>E.value=a.view_path,class:B(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",a.is_use==1?"bg-primary text-[#fff]":""])},[o("span",null,M(a.name),1)],10,rt)]))),128)):(l(!0),_(V,{key:1},W(g.value,(a,S)=>(l(),_("div",{key:S},[o("div",{onClick:n=>E.value=a.view_path,class:B(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",E.value==a.view_path?"bg-primary text-[#fff]":""])},[o("span",null,M(a.name),1)],10,it)]))),128))])]),_:1},8,["modelValue","title"])]),_:1})}}});const dt=Y(pt,[["__scopeId","data-v-30c7d2d5"]]),ut={key:0,class:"pt-[20px] pl-[80px] pr-[70px]"},_t={class:"flex flex-wrap items-center"},mt=["onClick"],ft={class:"text-[14px]"},xt={key:1,class:"flex flex-wrap items-center pt-[20px] pl-[80px] pr-[70px]"},ht=["onClick"],vt={class:"text-[14px]"},gt={key:2,class:"pt-[20px] pl-[80px] pr-[70px]"},yt={class:"flex flex-wrap items-center"},wt=["onClick"],bt={class:"text-[14px]"},kt=K({__name:"index",emits:["complete"],setup(F,{emit:D}){const U=se(),P=Z(),x=q(()=>P.dark),H=q(()=>P.currHeadMenuName);let u=JSON.parse(JSON.stringify(U.routers));const T=_e(),C=ue(),m=q(()=>String(T.name)),s=h("");Ce(T,()=>{P.$patch(d=>{d.menuDrawer=!1}),p();let e="";u.forEach((d,b)=>{d.name==T.name?e=d.name:d.children&&d.children.length&&d.children.forEach((a,S)=>{a.name==T.name?e=d.name:a.children&&a.children.length&&a.children.forEach((n,R)=>{n.name==T.name&&(e=d.name,e=="setting_manage"&&!s.value&&(s.value=a.name,$.value=a.children),e=="tool"&&!s.value&&(s.value=a.name,k.value=a.children))})})}),D("complete");let r={setting_manage:"setting_manage",site_manage:"site_manage",tool:"tool",app_auth:"tool"};if(Object.keys(r).indexOf(e)!=-1)return P.setHeadMenu(r[e]),!1;P.setHeadMenu("")});let v=h([]),$=h([]),L=h([]),g=h([]),k=h([]);U.routers.forEach((e,r)=>{e.meta.class=1,e.children&&e.children.forEach((d,b)=>{d.meta.class=2,d.children&&d.children.forEach((a,S)=>{a.meta.class=3})}),e.name=="setting_manage"&&(v.value=e.children),e.name=="site_manage"&&(L.value=e.children),e.name=="tool"&&(g.value=e.children)});const N=e=>{let r="/setting/";s.value="",$.value=[],e.children?(s.value=e.name,$.value=e.children,r=r+e.path+"/"+e.children[0].path,C.push(r)):(r=r+e.path,C.push(r))},E=(e,r)=>{let d="/setting/";v.value.forEach((b,a)=>{b.children&&b.children.length&&b.children.forEach((S,n)=>{S.name==e.props.name&&(d=d+b.path+"/"+S.path,C.push(d))})})},A=e=>{let r="/admin/site/";s.value="",e.children?(s.value=e.name,r=r+e.path+"/"+e.children[0].path,C.push(r)):(r=r+e.path,C.push(r))},z=e=>{let r="/admin/tools/";s.value="",k.value=[],e.children?(s.value=e.name,k.value=e.children,r=r+e.path+"/"+e.children[0].path,C.push(r)):(r=r+e.path,C.push(r))},w=(e,r)=>{let d="/tools/";g.value.forEach((b,a)=>{b.children&&b.children.length&&b.children.forEach((S,n)=>{S.name==e.props.name&&(d=d+b.path+"/"+S.path,C.push(d))})})},p=()=>{s.value="",$.value=[]};return(e,r)=>{const d=ee,b=$e,a=Se,S=Ve;return l(),I(S,{class:B(["layout-aside w-full ease-in duration-200",{bright:!t(x)}])},{default:c(()=>[t(H)=="setting_manage"?(l(),_("div",ut,[o("div",_t,[(l(!0),_(V,null,W(t(v),(n,R)=>(l(),_(V,{key:R},[n.meta.show?(l(),_("div",{key:0,onClick:J=>N(n),class:B(["flex items-center h-[32px] border-[1px] border-solid my-[3px] border-[#E0E0E0] rounded-full px-[10px] mr-[24px] cursor-pointer bg-[#f8f8f8] hover:bg-[#fff]",{"text-[#fff] !bg-[#000] border-[#000]":t(m)==n.name||s.value&&s.value==n.name}])},[n.meta.icon?(l(),I(d,{key:0,name:n.meta.icon,class:"!w-auto mr-[4px] !leading-[14px]",size:"14px",title:n.meta.title},null,8,["name","title"])):y("",!0),o("span",ft,M(n.meta.title),1)],10,mt)):y("",!0)],64))),128))]),t($).length?(l(),I(a,{key:0,modelValue:t(m),"onUpdate:modelValue":r[0]||(r[0]=n=>O(m)?m.value=n:null),class:"mt-[20px]",onTabClick:E},{default:c(()=>[(l(!0),_(V,null,W(t($),(n,R)=>(l(),_(V,{key:R},[n.meta.show?(l(),I(b,{key:0,label:n.meta.title,name:n.name,path:n.path,onClick:J=>N(n)},null,8,["label","name","path","onClick"])):y("",!0)],64))),128))]),_:1},8,["modelValue"])):y("",!0)])):y("",!0),t(H)=="site_manage"?(l(),_("div",xt,[(l(!0),_(V,null,W(t(L),(n,R)=>(l(),_(V,{key:R},[n.meta.show?(l(),_("div",{key:0,onClick:J=>A(n),class:B(["flex items-center h-[32px] border-[1px] border-solid my-[3px] border-[#E0E0E0] rounded-full px-[10px] mr-[24px] cursor-pointer bg-[#f8f8f8] hover:bg-[#fff]",{"text-[#fff] !bg-[#000] border-[#000]":t(m)==n.name||s.value&&s.value==n.name}])},[n.meta.icon?(l(),I(d,{key:0,name:n.meta.icon,class:"!w-auto mr-[4px] !leading-[14px]",size:"14px",title:n.meta.title},null,8,["name","title"])):y("",!0),o("span",vt,M(n.meta.title),1)],10,ht)):y("",!0)],64))),128))])):y("",!0),t(H)=="tool"?(l(),_("div",gt,[o("div",yt,[(l(!0),_(V,null,W(t(g),(n,R)=>(l(),_(V,{key:R},[n.meta.show?(l(),_("div",{key:0,onClick:J=>z(n),class:B(["flex items-center h-[32px] border-[1px] border-solid my-[3px] border-[#E0E0E0] rounded-full px-[10px] mr-[24px] cursor-pointer bg-[#f8f8f8] hover:bg-[#fff]",{"text-[#fff] !bg-[#000] border-[#000]":t(m)==n.name||s.value&&s.value==n.name}])},[n.meta.icon?(l(),I(d,{key:0,name:n.meta.icon,class:"!w-auto mr-[4px] !leading-[14px]",size:"14px",title:n.meta.title},null,8,["name","title"])):y("",!0),o("span",bt,M(n.meta.title),1)],10,wt)):y("",!0)],64))),128))]),t(k).length?(l(),I(a,{key:0,modelValue:t(m),"onUpdate:modelValue":r[1]||(r[1]=n=>O(m)?m.value=n:null),class:"mt-[20px]",onTabClick:w},{default:c(()=>[(l(!0),_(V,null,W(t(k),(n,R)=>(l(),_(V,{key:R},[n.meta.show?(l(),I(b,{key:0,label:n.meta.title,name:n.name,path:n.path,onClick:J=>N(n)},null,8,["label","name","path","onClick"])):y("",!0)],64))),128))]),_:1},8,["modelValue"])):y("",!0)])):y("",!0)]),_:1},8,["class"])}}});const Et={class:"common-layout min-w-[1200px]"},Ct=K({__name:"index",setup(F){const D=pe(),U=Te(),P=Z(),x=h(),H=Ae();let u=h("");const T=()=>{setTimeout(()=>{u.value=`calc(100vh - ${x.value.clientHeight+60}px)`},600)};T();const C=q(()=>P.dark),m=q(()=>H.flag);return(s,v)=>{const $=Pe,L=le("router-view"),g=De,k=He,N=de;return l(),_("div",Et,[i(N,{class:"w-100 h-screen"},{default:c(()=>[i($,{class:"h-[60px]"},{default:c(()=>[i(dt)]),_:1}),i(N,{class:"flex flex-col"},{default:c(()=>[o("div",{ref_key:"layoutAsideRef",ref:x},[i(kt,{onComplete:T})],512),i(k,{class:B(["main-wrap h-full p-0",{"bg-page":t(C)}])},{default:c(()=>[i(g,{class:B(["layout-content-height",{"px-[64px]":t(m)}]),style:Ie({height:t(u)})},{default:c(()=>[t(D).routeRefreshTag?(l(),I(L,{key:0},{default:c(({Component:E,route:A})=>[(l(),I(Me,{include:t(U).tabNames},[(l(),I(Fe(E),{key:A.fullPath}))],1032,["include"]))]),_:1})):y("",!0)]),_:1},8,["class","style"])]),_:1},8,["class"])]),_:1})]),_:1})])}}});const Bt=Y(Ct,[["__scopeId","data-v-b3e5f194"]]);export{Bt as default};
