import{d as G,K as se,r as h,n as te,N as f,h as l,c as _,e as i,w as c,aH as O,a as o,u as t,cR as me,t as M,i as K,af as fe,aG as xe,a1 as le,aT as he,aU as ve,aV as ge,W as ye,X as we,Y as be,E as ae,aa as re,p as ie,g as ce,_ as Y,U as j,cS as ke,cK as Z,cL as pe,q,v as Ce,I,F as T,B as w,y as ne,co as oe,G as W,A as B,Q as de,f as ue,O as _e,s as Ee,aJ as $e,aK as Se,cT as Ve,cM as Te,x as Ie,a_ as Me,J as Fe,cF as He,ap as Pe,Z as Re}from"./index-9d601459.js";/* empty css                     *//* empty css                   *//* empty css                  */import{_ as ee}from"./index.vue_vue_type_script_setup_true_lang-6df3a9a5.js";/* empty css                */import"./el-form-item-4ed993c7.js";/* empty css                 *//* empty css                         *//* empty css                  *//* empty css                  */import{s as Ue}from"./personal-b81263a5.js";/* empty css                        */import{a7 as De,a8 as Le,a9 as Ne}from"./sys-45a56363.js";/* empty css                    */import{u as Ae}from"./style-440c29ef.js";/* empty css                */const Q=F=>(ie("data-v-827cff93"),F=F(),ce(),F),ze={class:"userinfo flex h-full items-center"},je={class:"user-name pl-[8px]"},Be=Q(()=>o("div",{class:"flex items-center leading-[1] py-[5px]"},[o("span",{class:"iconfont iconshezhi1 ml-[4px] !text-[14px] mr-[10px]"}),o("span",{class:"text-[14px]"},"账号设置")],-1)),We=Q(()=>o("div",{class:"flex items-center leading-[1] py-[5px]"},[o("span",{class:"iconfont iconshouquanxinxi2 ml-[4px] !text-[14px] mr-[10px]"}),o("span",{class:"text-[14px]"},"授权信息")],-1)),qe=Q(()=>o("div",{class:"flex items-center leading-[1] py-[5px]"},[o("span",{class:"iconfont iconxiugai ml-[4px] !text-[14px] mr-[10px]"}),o("span",{class:"text-[14px]"},"修改密码")],-1)),Oe=Q(()=>o("div",{class:"flex items-center leading-[1] py-[5px]"},[o("span",{class:"iconfont icontuichudenglu ml-[4px] !text-[14px] mr-[10px]"}),o("span",{class:"text-[14px]"},"退出登录")],-1)),Je={class:"form-tip"},Ke={class:"dialog-footer"},Ge=G({__name:"user-info",setup(F){const P=se(),L=m=>{switch(m){case"logout":P.logout();break}},H=()=>{P.logout()};let x=h(!1);const R=h();let u=te({original_password:"",password:"",password_copy:""});const E=te({original_password:[{required:!0,message:f("originalPasswordPlaceholder"),trigger:"blur"}],password:[{required:!0,message:f("passwordPlaceholder"),trigger:"blur"}],password_copy:[{required:!0,message:f("passwordPlaceholder"),trigger:"blur"}]}),$=m=>{m&&m.validate(s=>{if(s){let v="";if(u.password&&!u.original_password&&(v=f("originalPasswordHint")),u.password&&u.original_password&&!u.password_copy&&(v=f("newPasswordHint")),u.password&&u.original_password&&u.password_copy&&u.password!=u.password_copy&&(v=f("doubleCipherHint")),v){fe({type:"error",message:v});return}Ue(u).then(S=>{x.value=!1})}else return!1})};return(m,s)=>{const v=xe,S=ee,N=le("router-link"),g=he,k=ve,U=ge,C=ye,A=we,z=be,y=ae,p=re;return l(),_("div",null,[i(U,{onCommand:L,tabindex:1},{dropdown:c(()=>[i(k,null,{default:c(()=>[i(g,null,{default:c(()=>[i(N,{to:"/user/center"},{default:c(()=>[Be]),_:1})]),_:1}),i(g,null,{default:c(()=>[i(N,{to:"/tools/authorize"},{default:c(()=>[We]),_:1})]),_:1}),i(g,{onClick:s[0]||(s[0]=e=>O(x)?x.value=!0:x=!0)},{default:c(()=>[qe]),_:1}),i(g,{onClick:H},{default:c(()=>[Oe]),_:1})]),_:1})]),default:c(()=>[o("div",ze,[i(v,{size:25,icon:t(me)},null,8,["icon"]),o("div",je,M(t(P).userInfo.username),1),i(S,{name:"element-ArrowDown",class:"ml-[5px]"})])]),_:1}),i(p,{modelValue:t(x),"onUpdate:modelValue":s[6]||(s[6]=e=>O(x)?x.value=e:x=e),width:"450px",title:"修改密码","before-close":m.handleClose},{footer:c(()=>[o("span",Ke,[i(y,{onClick:s[4]||(s[4]=e=>O(x)?x.value=!1:x=!1)},{default:c(()=>[K(M(t(f)("cancel")),1)]),_:1}),i(y,{type:"primary",onClick:s[5]||(s[5]=e=>$(R.value))},{default:c(()=>[K(M(t(f)("save")),1)]),_:1})])]),default:c(()=>[o("div",null,[i(z,{model:t(u),"label-width":"90px",ref_key:"formRef",ref:R,rules:E,class:"page-form"},{default:c(()=>[i(A,{label:t(f)("originalPassword"),prop:"original_password"},{default:c(()=>[i(C,{modelValue:t(u).original_password,"onUpdate:modelValue":s[1]||(s[1]=e=>t(u).original_password=e),type:"password",placeholder:t(f)("originalPasswordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),i(A,{label:t(f)("newPassword"),prop:"password"},{default:c(()=>[i(C,{modelValue:t(u).password,"onUpdate:modelValue":s[2]||(s[2]=e=>t(u).password=e),type:"password",placeholder:t(f)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"]),o("div",Je,M(t(f)("passwordTip")),1)]),_:1},8,["label"]),i(A,{label:t(f)("passwordCopy"),prop:"password_copy"},{default:c(()=>[i(C,{modelValue:t(u).password_copy,"onUpdate:modelValue":s[3]||(s[3]=e=>t(u).password_copy=e),type:"password",placeholder:t(f)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])])]),_:1},8,["modelValue","before-close"])])}}});const Qe=Y(Ge,[["__scopeId","data-v-827cff93"]]),X=F=>(ie("data-v-be7684f7"),F=F(),ce(),F),Xe={class:"flex items-center text-[14px] leading-[1]"},Ye=X(()=>o("span",{class:"mx-2 text-[#4F5563] mx-[15px]"},"|",-1)),Ze=X(()=>o("span",{class:"mx-2 text-[#4F5563] mx-[15px]"},"|",-1)),et=X(()=>o("span",{class:"mx-2 text-[#4F5563] mx-[15px]"},"|",-1)),tt=X(()=>o("span",{class:"mx-2 text-[#4F5563] mx-[15px]"},"|",-1)),nt={class:"right-panel h-full flex items-center justify-end"},ot=["title"],st={class:"navbar-item flex items-center h-full cursor-pointer"},lt={class:"dialog-footer"},at={class:"flex flex-wrap"},rt=["onClick"],it=["onClick"],ct={class:"dialog-footer"},pt=G({__name:"index",setup(F){const P=ue(),L=j.get("app_type");ke();const H=Z(),x=pe(),R=_e(),u=h(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth);q(()=>H.dark);let E=h(!0);(()=>{De().then(y=>{E.value=y.data.app_debug}).catch(()=>{})})();const m=h(!1),s=h(""),v=h("");j.get("comparisonTokenStorage")&&(s.value=j.get("comparisonTokenStorage")),j.get("comparisonSiteIdStorage")&&(v.value=j.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",y=>{document.visibilityState==="visible"&&(v.value!=j.get("siteId")||s.value!=j.get("token"))&&(m.value=!0)});const S=()=>{m.value=!1,location.reload()};Ce(()=>{window.onresize=()=>(()=>{u.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()});const N=()=>{x.routeRefreshTag&&x.refreshRouterView()};q(()=>{const y=R.matched.filter(p=>p.meta.title);return y[0]&&y[0].path=="/"&&y.splice(0,1),y});const g=h(),k=h(!1),U=()=>{Le().then(y=>{k.value=!0,g.value=y.data;for(let p=0;p<g.value.length;p++)g.value[p].is_use==1&&(C.value=g.value[p].view_path)})},C=h(""),A=()=>{Ne({view_path:C.value}).then(()=>{k.value=!1,P.go(0)})};j.set({key:"currHeadMenuName",data:""});const z=(y,p)=>{P.push(y)};return(y,p)=>{const e=ee,r=ae,d=re,b=de;return l(),I(b,{class:"h-[60px] bg-[#2B303B] layout-admin flex items-center justify-between px-[15px] text-white"},{default:c(()=>[o("div",Xe,[o("span",{class:"iconfont icontuodong !text-[25px] cursor-pointer mr-[6px]",onClick:p[0]||(p[0]=a=>z("/admin/index"))}),Ye,o("span",{class:"cursor-pointer",onClick:p[1]||(p[1]=a=>z("/admin/setting/website/system","setting_manage"))},"控制台"),Ze,o("span",{class:"cursor-pointer",onClick:p[2]||(p[2]=a=>z("/admin/site/list","site_manage"))},"站点"),t(E)?(l(),_(T,{key:0},[et,o("span",{class:"cursor-pointer",onClick:p[3]||(p[3]=a=>z("/admin/app_manage/app_store",""))},"应用"),tt,o("span",{class:"cursor-pointer",onClick:p[4]||(p[4]=a=>z("/admin/app_manage/tools","tool"))},"开发")],64)):w("",!0)]),o("div",nt,[o("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:N},[i(e,{name:"element-Refresh"})]),t(L)=="site"?(l(),_("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:t(f)("newInfo")},null,8,ot)):w("",!0),t(L)=="site"?(l(),_("div",{key:1,class:"navbar-item flex items-center h-full cursor-pointer",onClick:U},[i(e,{name:"iconfont-iconqiehuan",title:t(f)("indexSwitch")},null,8,["title"])])):w("",!0),o("div",st,[i(Qe)])]),ne(o("input",{type:"hidden","onUpdate:modelValue":p[5]||(p[5]=a=>s.value=a)},null,512),[[oe,s.value]]),ne(o("input",{type:"hidden","onUpdate:modelValue":p[6]||(p[6]=a=>v.value=a)},null,512),[[oe,v.value]]),i(d,{modelValue:m.value,"onUpdate:modelValue":p[7]||(p[7]=a=>m.value=a),title:t(f)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:c(()=>[o("span",lt,[i(r,{onClick:S},{default:c(()=>[K(M(t(f)("layout.detectionLoginOperation")),1)]),_:1})])]),default:c(()=>[o("span",null,M(t(f)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"]),i(d,{modelValue:k.value,"onUpdate:modelValue":p[8]||(p[8]=a=>k.value=a),title:t(f)("indexTemplate"),width:"550px","destroy-on-close":!0},{footer:c(()=>[o("span",ct,[i(r,{type:"primary",onClick:A},{default:c(()=>[K(M(t(f)("confirm")),1)]),_:1})])]),default:c(()=>[o("div",at,[C.value==""?(l(!0),_(T,{key:0},W(g.value,(a,V)=>(l(),_("div",{key:V},[o("div",{onClick:n=>C.value=a.view_path,class:B(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",a.is_use==1?"bg-primary text-[#fff]":""])},[o("span",null,M(a.name),1)],10,rt)]))),128)):(l(!0),_(T,{key:1},W(g.value,(a,V)=>(l(),_("div",{key:V},[o("div",{onClick:n=>C.value=a.view_path,class:B(["index-item py-[5px] px-[10px] mr-[10px] rounded-[3px] cursor-pointer",C.value==a.view_path?"bg-primary text-[#fff]":""])},[o("span",null,M(a.name),1)],10,it)]))),128))])]),_:1},8,["modelValue","title"])]),_:1})}}});const dt=Y(pt,[["__scopeId","data-v-be7684f7"]]),ut={key:0,class:"pt-[20px] pl-[80px] pr-[70px]"},_t={class:"flex flex-wrap items-center"},mt=["onClick"],ft={class:"text-[14px]"},xt={key:1,class:"flex flex-wrap items-center pt-[20px] pl-[80px] pr-[70px]"},ht=["onClick"],vt={class:"text-[14px]"},gt={key:2,class:"pt-[20px] pl-[80px] pr-[70px]"},yt={class:"flex flex-wrap items-center"},wt=["onClick"],bt={class:"text-[14px]"},kt=G({__name:"index",emits:["complete"],setup(F,{emit:P}){const L=se(),H=Z(),x=q(()=>H.dark),R=q(()=>H.currHeadMenuName);let u=JSON.parse(JSON.stringify(L.routers));const E=_e(),$=ue(),m=q(()=>String(E.name)),s=h("");Ee(E,()=>{H.$patch(d=>{d.menuDrawer=!1}),p();let e="";u.forEach((d,b)=>{d.name==E.name?e=d.name:d.children&&d.children.length&&d.children.forEach((a,V)=>{a.name==E.name?e=d.name:a.children&&a.children.length&&a.children.forEach((n,D)=>{n.name==E.name&&(e=d.name,e=="setting_manage"&&!s.value&&(s.value=a.name,S.value=a.children),e=="tool"&&!s.value&&(s.value=a.name,k.value=a.children))})})}),P("complete");let r={setting_manage:"setting_manage",site_manage:"site_manage",tool:"tool",app_auth:"tool"};if(Object.keys(r).indexOf(e)!=-1)return H.setHeadMenu(r[e]),!1;H.setHeadMenu("")});let v=h([]),S=h([]),N=h([]),g=h([]),k=h([]);L.routers.forEach((e,r)=>{e.meta.class=1,e.children&&e.children.forEach((d,b)=>{d.meta.class=2,d.children&&d.children.forEach((a,V)=>{a.meta.class=3})}),e.name=="setting_manage"&&(v.value=e.children),e.name=="site_manage"&&(N.value=e.children),e.name=="tool"&&(g.value=e.children)});const U=e=>{let r="/setting/";s.value="",S.value=[],e.children?(s.value=e.name,S.value=e.children,r=r+e.path+"/"+e.children[0].path,$.push(r)):(r=r+e.path,$.push(r))},C=(e,r)=>{let d="/setting/";v.value.forEach((b,a)=>{b.children&&b.children.length&&b.children.forEach((V,n)=>{V.name==e.props.name&&(d=d+b.path+"/"+V.path,$.push(d))})})},A=e=>{let r="/admin/site/";s.value="",e.children?(s.value=e.name,r=r+e.path+"/"+e.children[0].path,$.push(r)):(r=r+e.path,$.push(r))},z=e=>{let r="/admin/tools/";s.value="",k.value=[],e.children?(s.value=e.name,k.value=e.children,r=r+e.path+"/"+e.children[0].path,$.push(r)):(r=r+e.path,$.push(r))},y=(e,r)=>{let d="/tools/";g.value.forEach((b,a)=>{b.children&&b.children.length&&b.children.forEach((V,n)=>{V.name==e.props.name&&(d=d+b.path+"/"+V.path,$.push(d))})})},p=()=>{s.value="",S.value=[]};return(e,r)=>{const d=ee,b=$e,a=Se,V=Ve;return l(),I(V,{class:B(["layout-aside w-full ease-in duration-200",{bright:!t(x)}])},{default:c(()=>[t(R)=="setting_manage"?(l(),_("div",ut,[o("div",_t,[(l(!0),_(T,null,W(t(v),(n,D)=>(l(),_(T,{key:D},[n.meta.show?(l(),_("div",{key:0,onClick:J=>U(n),class:B(["flex items-center h-[32px] border-[1px] border-solid my-[3px] border-[#E0E0E0] rounded-full px-[10px] mr-[24px] cursor-pointer bg-[#f8f8f8] hover:bg-[#fff]",{"text-[#fff] !bg-[#000] border-[#000]":t(m)==n.name||s.value&&s.value==n.name}])},[n.meta.icon?(l(),I(d,{key:0,name:n.meta.icon,class:"!w-auto mr-[4px] !leading-[14px]",size:"14px",title:n.meta.title},null,8,["name","title"])):w("",!0),o("span",ft,M(n.meta.title),1)],10,mt)):w("",!0)],64))),128))]),t(S).length?(l(),I(a,{key:0,modelValue:t(m),"onUpdate:modelValue":r[0]||(r[0]=n=>O(m)?m.value=n:null),class:"mt-[20px]",onTabClick:C},{default:c(()=>[(l(!0),_(T,null,W(t(S),(n,D)=>(l(),_(T,{key:D},[n.meta.show?(l(),I(b,{key:0,label:n.meta.title,name:n.name,path:n.path,onClick:J=>U(n)},null,8,["label","name","path","onClick"])):w("",!0)],64))),128))]),_:1},8,["modelValue"])):w("",!0)])):w("",!0),t(R)=="site_manage"?(l(),_("div",xt,[(l(!0),_(T,null,W(t(N),(n,D)=>(l(),_(T,{key:D},[n.meta.show?(l(),_("div",{key:0,onClick:J=>A(n),class:B(["flex items-center h-[32px] border-[1px] border-solid my-[3px] border-[#E0E0E0] rounded-full px-[10px] mr-[24px] cursor-pointer bg-[#f8f8f8] hover:bg-[#fff]",{"text-[#fff] !bg-[#000] border-[#000]":t(m)==n.name||s.value&&s.value==n.name}])},[n.meta.icon?(l(),I(d,{key:0,name:n.meta.icon,class:"!w-auto mr-[4px] !leading-[14px]",size:"14px",title:n.meta.title},null,8,["name","title"])):w("",!0),o("span",vt,M(n.meta.title),1)],10,ht)):w("",!0)],64))),128))])):w("",!0),t(R)=="tool"?(l(),_("div",gt,[o("div",yt,[(l(!0),_(T,null,W(t(g),(n,D)=>(l(),_(T,{key:D},[n.meta.show?(l(),_("div",{key:0,onClick:J=>z(n),class:B(["flex items-center h-[32px] border-[1px] border-solid my-[3px] border-[#E0E0E0] rounded-full px-[10px] mr-[24px] cursor-pointer bg-[#f8f8f8] hover:bg-[#fff]",{"text-[#fff] !bg-[#000] border-[#000]":t(m)==n.name||s.value&&s.value==n.name}])},[n.meta.icon?(l(),I(d,{key:0,name:n.meta.icon,class:"!w-auto mr-[4px] !leading-[14px]",size:"14px",title:n.meta.title},null,8,["name","title"])):w("",!0),o("span",bt,M(n.meta.title),1)],10,wt)):w("",!0)],64))),128))]),t(k).length?(l(),I(a,{key:0,modelValue:t(m),"onUpdate:modelValue":r[1]||(r[1]=n=>O(m)?m.value=n:null),class:"mt-[20px]",onTabClick:y},{default:c(()=>[(l(!0),_(T,null,W(t(k),(n,D)=>(l(),_(T,{key:D},[n.meta.show?(l(),I(b,{key:0,label:n.meta.title,name:n.name,path:n.path,onClick:J=>U(n)},null,8,["label","name","path","onClick"])):w("",!0)],64))),128))]),_:1},8,["modelValue"])):w("",!0)])):w("",!0)]),_:1},8,["class"])}}});const Ct={class:"common-layout min-w-[1200px]"},Et=G({__name:"index",setup(F){const P=pe(),L=Te(),H=Z(),x=h(),R=Ae();let u=h("");const E=()=>{setTimeout(()=>{u.value=`calc(100vh - ${x.value.clientHeight+60}px)`},600)};E();const $=q(()=>H.dark),m=q(()=>R.flag);return(s,v)=>{const S=He,N=le("router-view"),g=Pe,k=Re,U=de;return l(),_("div",Ct,[i(U,{class:"w-100 h-screen"},{default:c(()=>[i(S,{class:"h-[60px]"},{default:c(()=>[i(dt)]),_:1}),i(U,{class:"flex flex-col"},{default:c(()=>[o("div",{ref_key:"layoutAsideRef",ref:x},[i(kt,{onComplete:E})],512),i(k,{class:B(["main-wrap h-full p-0",{"bg-page":t($)}])},{default:c(()=>[i(g,{class:B(["layout-content-height",{"px-[64px]":t(m)}]),style:Ie({height:t(u)})},{default:c(()=>[t(P).routeRefreshTag?(l(),I(N,{key:0},{default:c(({Component:C,route:A})=>[(l(),I(Me,{include:t(L).tabNames},[(l(),I(Fe(C),{key:A.fullPath}))],1032,["include"]))]),_:1})):w("",!0)]),_:1},8,["class","style"])]),_:1},8,["class"])]),_:1})]),_:1})])}}});const Bt=Y(Et,[["__scopeId","data-v-b3e5f194"]]);export{Bt as default};
