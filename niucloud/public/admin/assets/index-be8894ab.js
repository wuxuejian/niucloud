import{d as M,r as E,cK as N,cU as he,cV as xe,q as D,h as i,c as w,e as t,w as o,a as n,t as $,u as e,N as h,aR as Q,aL as ve,cz as ge,ap as O,cW as le,cX as ee,K as X,n as te,cS as we,i as F,af as ye,aI as be,aT as ke,aU as $e,aV as Se,W as Ve,X as Ee,Y as Ce,E as re,aa as ce,p as Ie,g as De,f as A,U as P,cY as Re,cM as ie,v as Te,I as k,G as z,F as I,B as W,y as oe,co as se,A as j,cZ as Ue,c_ as Pe,an as Me,ao as Be,Q as Y,O as Z,c$ as We,ai as je,d0 as de,ae as ne,s as ue,R as Le,d1 as qe,cH as pe,V as Fe,d2 as Ne,Z as _e,cT as ze,cN as Ae,a_ as He,J as Ke,a0 as Oe}from"./index-efa627c5.js";/* empty css                     *//* empty css                   *//* empty css                  *//* empty css               */import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-4a091848.js";/* empty css                  *//* empty css                        *//* empty css                 *//* empty css                  */import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                     *//* empty css                         *//* empty css                  *//* empty css                  */import{s as Xe}from"./personal-d08d08c6.js";/* empty css                        */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css                        */import{_ as Ye}from"./icon-addon-339e16d0.js";/* empty css                */const Ze={class:"flex"},Ge={class:"setting-item flex items-center justify-between mb-[10px]"},Je={class:"title text-base text-tx-secondary"},Qe={class:"setting-item flex items-center justify-between mb-[10px]"},et={class:"title text-base text-tx-secondary"},tt=M({__name:"layout-setting",setup(d){const x=E(!1),f=N(),p=he(),v=xe(p),s=D({get(){return f.dark},set(l){f.setTheme("dark",l),v(l),ee(f.theme,f.dark?"dark":"light")}}),b=D({get(){return f.theme},set(l){f.setTheme("theme",l),ee(f.theme,f.dark?"dark":"light")}});return(l,r)=>{const g=H,m=ve,c=ge,a=O,u=le;return i(),w("div",Ze,[t(g,{name:"element-Setting",onClick:r[0]||(r[0]=y=>x.value=!0)}),t(u,{modelValue:x.value,"onUpdate:modelValue":r[3]||(r[3]=y=>x.value=y),title:e(h)("layout.layoutSetting"),size:"300px"},{default:o(()=>[t(a,null,{default:o(()=>[n("div",Ge,[n("div",Je,$(e(h)("layout.darkMode")),1),n("div",null,[t(m,{modelValue:e(s),"onUpdate:modelValue":r[1]||(r[1]=y=>Q(s)?s.value=y:null),"active-value":!0,"inactive-value":!1},null,8,["modelValue"])])]),n("div",Qe,[n("div",et,$(e(h)("layout.themeColor")),1),n("div",null,[t(c,{modelValue:e(b),"onUpdate:modelValue":r[2]||(r[2]=y=>Q(b)?b.value=y:null)},null,8,["modelValue"])])])]),_:1})]),_:1},8,["modelValue","title"])])}}});const ot=G(tt,[["__scopeId","data-v-7ae8ee2f"]]),K=d=>(Ie("data-v-b07cf2e9"),d=d(),De(),d),st={class:"userinfo flex h-full items-center"},nt={class:"user-name pl-[8px]"},at=K(()=>n("div",{class:"flex items-center leading-[1] py-[5px]"},[n("span",{class:"iconfont iconqiehuan ml-[4px] !text-[14px] mr-[10px]"}),n("span",{class:"text-[14px]"},"切换站点")],-1)),lt=K(()=>n("div",{class:"flex items-center leading-[1] py-[5px]"},[n("span",{class:"iconfont iconshezhi1 ml-[4px] !text-[14px] mr-[10px]"}),n("span",{class:"text-[14px]"},"账号设置")],-1)),rt=K(()=>n("div",{class:"flex items-center leading-[1] py-[5px]"},[n("span",{class:"iconfont iconxiugai ml-[4px] !text-[14px] mr-[10px]"}),n("span",{class:"text-[14px]"},"修改密码")],-1)),ct=K(()=>n("div",{class:"flex items-center leading-[1] py-[2px]"},[n("span",{class:"iconfont icontuichudenglu !text-[21px] mr-[8px]"}),n("span",{class:"text-[14px]"},"退出登录")],-1)),it={class:"form-tip"},dt={class:"dialog-footer"},ut=M({__name:"user-info",setup(d){const x=X(),f=A(),p=m=>{switch(m){case"logout":x.logout();break}},v=m=>{f.push(m)},s=E(!1),b=E(),l=te({original_password:"",password:"",password_copy:""}),r=te({original_password:[{required:!0,message:h("originalPasswordPlaceholder"),trigger:"blur"}],password:[{required:!0,message:h("passwordPlaceholder"),trigger:"blur"}],password_copy:[{required:!0,message:h("passwordPlaceholder"),trigger:"blur"}]}),g=m=>{m&&m.validate(c=>{if(c){let a="";if(l.password&&!l.original_password&&(a=h("originalPasswordHint")),l.password&&l.original_password&&!l.password_copy&&(a=h("newPasswordHint")),l.password&&l.original_password&&l.password_copy&&l.password!=l.password_copy&&(a=h("doubleCipherHint")),a){ye({type:"error",message:a});return}Xe(l).then(u=>{s.value=!1})}else return!1})};return(m,c)=>{const a=be,u=H,y=ke,S=$e,V=Se,R=Ve,C=Ee,B=Ce,T=re,L=ce;return i(),w("div",null,[t(V,{onCommand:p,tabindex:1},{dropdown:o(()=>[t(S,null,{default:o(()=>[t(y,{onClick:c[0]||(c[0]=_=>v("/home/index"))},{default:o(()=>[at]),_:1}),t(y,{onClick:c[1]||(c[1]=_=>v("/user/center"))},{default:o(()=>[lt]),_:1}),t(y,{onClick:c[2]||(c[2]=_=>s.value=!0)},{default:o(()=>[rt]),_:1}),t(y,{command:"logout"},{default:o(()=>[ct]),_:1})]),_:1})]),default:o(()=>[n("div",st,[t(a,{size:25,icon:e(we)},null,8,["icon"]),n("div",nt,$(e(x).userInfo.username),1),t(u,{name:"element-ArrowDown",class:"ml-[5px]"})])]),_:1}),t(L,{modelValue:s.value,"onUpdate:modelValue":c[8]||(c[8]=_=>s.value=_),width:"450px",title:"修改密码","before-close":m.handleClose},{footer:o(()=>[n("span",dt,[t(T,{onClick:c[6]||(c[6]=_=>s.value=!1)},{default:o(()=>[F($(e(h)("cancel")),1)]),_:1}),t(T,{type:"primary",onClick:c[7]||(c[7]=_=>g(b.value))},{default:o(()=>[F($(e(h)("save")),1)]),_:1})])]),default:o(()=>[n("div",null,[t(B,{model:l,"label-width":"90px",ref_key:"formRef",ref:b,rules:r,class:"page-form"},{default:o(()=>[t(C,{label:e(h)("originalPassword"),prop:"original_password"},{default:o(()=>[t(R,{modelValue:l.original_password,"onUpdate:modelValue":c[3]||(c[3]=_=>l.original_password=_),type:"password",placeholder:e(h)("originalPasswordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(C,{label:e(h)("newPassword"),prop:"password"},{default:o(()=>[t(R,{modelValue:l.password,"onUpdate:modelValue":c[4]||(c[4]=_=>l.password=_),type:"password",placeholder:e(h)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"]),n("div",it,$(e(h)("passwordTip")),1)]),_:1},8,["label"]),t(C,{label:e(h)("passwordCopy"),prop:"password_copy"},{default:o(()=>[t(R,{modelValue:l.password_copy,"onUpdate:modelValue":c[5]||(c[5]=_=>l.password_copy=_),type:"password",placeholder:e(h)("passwordPlaceholder"),clearable:"",class:"input-width"},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model","rules"])])]),_:1},8,["modelValue","before-close"])])}}});const pt=G(ut,[["__scopeId","data-v-b07cf2e9"]]),_t={class:"left-panel h-full flex items-center"},mt={class:"flex items-center h-full pl-[10px] hidden-xs-only"},ft={class:"right-panel h-full flex items-center justify-end"},ht=["title"],xt=["title"],vt={class:"navbar-item flex items-center h-full cursor-pointer"},gt={class:"navbar-item flex items-center h-full cursor-pointer"},wt={class:"dialog-footer"},yt=M({__name:"index",setup(d){const x=P.get("app_type");Re();const f=N(),p=ie(),v=Z(),s=A(),b=E(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth),l=D(()=>f.dark),r=E(!1),g=E(""),m=E("");P.get("comparisonTokenStorage")&&(g.value=P.get("comparisonTokenStorage")),P.get("comparisonSiteIdStorage")&&(m.value=P.get("comparisonSiteIdStorage")),document.addEventListener("visibilitychange",S=>{document.visibilityState==="visible"&&(m.value!=P.get("siteId")||g.value!=P.get("token"))&&(r.value=!0)});const c=()=>{r.value=!1,location.href=`${location.origin}/site/`};Te(()=>{window.onresize=()=>(()=>{b.value=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth})()});const a=()=>{p.routeRefreshTag&&p.refreshRouterView()},u=D(()=>{const S=v.matched.filter(V=>V.meta.title);return S[0]&&S[0].path=="/"&&S.splice(0,1),S}),y=()=>{const S=s.resolve({path:"/preview/wap",query:{page:"/"}});window.open(S.href)};return(S,V)=>{const R=H,C=Ue,B=Pe,T=Me,L=Be,_=re,q=ce,J=Y;return i(),k(J,{class:j(["h-full px-[10px]",{"layout-header border-b border-color":!e(l)}])},{default:o(()=>[t(L,{class:"w-100 h-full w-full"},{default:o(()=>[t(T,{span:12},{default:o(()=>[n("div",_t,[n("div",{class:"navbar-item flex items-center h-full cursor-pointer",onClick:a},[t(R,{name:"element-Refresh"})]),n("div",mt,[t(B,{separator:"/"},{default:o(()=>[(i(!0),w(I,null,z(e(u),(U,fe)=>(i(),k(C,{key:fe},{default:o(()=>[F($(U.meta.title),1)]),_:2},1024))),128))]),_:1})])])]),_:1}),t(T,{span:12},{default:o(()=>[n("div",ft,[n("i",{class:"iconfont iconicon_huojian1 cursor-pointer px-[8px]",title:e(h)("visitWap"),onClick:y},null,8,ht),e(x)=="site"?(i(),w("i",{key:0,class:"iconfont iconlingdang-xianxing cursor-pointer px-[8px]",title:e(h)("newInfo")},null,8,xt)):W("",!0),n("div",vt,[t(ot)]),n("div",gt,[t(pt)])])]),_:1})]),_:1}),oe(n("input",{type:"hidden","onUpdate:modelValue":V[0]||(V[0]=U=>g.value=U)},null,512),[[se,g.value]]),oe(n("input",{type:"hidden","onUpdate:modelValue":V[1]||(V[1]=U=>m.value=U)},null,512),[[se,m.value]]),t(q,{modelValue:r.value,"onUpdate:modelValue":V[2]||(V[2]=U=>r.value=U),title:e(h)("layout.detectionLoginTip"),width:"30%","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:o(()=>[n("span",wt,[t(_,{onClick:c},{default:o(()=>[F($(e(h)("layout.detectionLoginOperation")),1)]),_:1})])]),default:o(()=>[n("span",null,$(e(h)("layout.detectionLoginContent")),1)]),_:1},8,["modelValue","title"])]),_:1},8,["class"])}}});const bt=G(yt,[["__scopeId","data-v-8ad74e12"]]);const kt={class:j(["ml-[10px]"])},$t={key:2,class:"!border-0 !border-t-[1px] border-solid mx-[25px] bg-[#f7f7f7] my-[5px]"},me=M({__name:"menu-item",props:{routes:{type:Object,required:!0}},setup(d){const x=d,f=A(),v=X().siteInfo,s=D(()=>x.routes.meta),b=D(()=>{const l={};return v==null||v.apps.forEach(r=>{l[r.key]=r}),v==null||v.site_addons.forEach(r=>{l[r.key]=r}),l});return(l,r)=>{const g=We,m=je,c=de;return e(s).show?(i(),w(I,{key:0},[d.routes.children?(i(),k(g,{key:0,index:String(d.routes.name)},{title:o(()=>[n("span",kt,$(e(s).title),1)]),default:o(()=>[(i(!0),w(I,null,z(d.routes.children,(a,u)=>(i(),k(me,{routes:a,key:u},null,8,["routes"]))),128))]),_:1},8,["index"])):(i(),w(I,{key:1},[e(s).addon&&e(s).parent_route&&e(s).parent_route.addon==""?(i(),k(c,{key:0,index:String(d.routes.name),onClick:r[0]||(r[0]=a=>e(f).push({name:d.routes.name}))},{title:o(()=>[t(m,{placement:"right",effect:"light"},{content:o(()=>[F(" 该功能仅限"+$(e(b)[e(s).addon].title)+"使用 ",1)]),default:o(()=>[n("span",{class:j([{"text-[15px]":d.routes.meta.class==1},{"text-[14px]":d.routes.meta.class!=1},{"ml-[10px]":d.routes.meta.class==2,"ml-[15px]":d.routes.meta.class==3}])},$(e(s).title),3)]),_:1})]),_:1},8,["index"])):(i(),k(c,{key:1,index:String(d.routes.name),onClick:r[1]||(r[1]=a=>e(f).push({name:d.routes.name}))},{title:o(()=>[n("span",{class:j([{"text-[15px]":d.routes.meta.class==1},{"text-[14px]":d.routes.meta.class!=1},{"ml-[10px]":d.routes.meta.class==2,"ml-[15px]":d.routes.meta.class==3}])},$(e(s).title),3)]),_:1},8,["index"]))],64)),d.routes.is_border?(i(),w("div",$t)):W("",!0)],64)):W("",!0)}}});const St={class:"w-[124px] px-[8px] bg-[#282c34] h-screen one-menu"},Vt={key:0,class:"logo flex items-center m-auto h-[64px]"},Et=["src"],Ct={key:1,class:"max-h-[40px] max-w-[40px] rounded-full",src:Ye,alt:""},It={key:1,class:"logo flex items-center justify-center h-[64px]"},Dt=n("i",{class:"text-3xl iconfont iconyunkongjian"},null,-1),Rt=[Dt],Tt={key:0,class:"w-[16px] h-[16px] relative flex justify-center"},Ut={key:1,class:"w-[16px] h-[16px]"},Pt={class:"relative flex-1 w-0"},Mt={class:"ml-[10px] w-full truncate"},Bt=n("div",{class:"h-[48px]"},null,-1),Wt={class:"w-[140px] h-[64px] flex items-center justify-center text-[16px] border-0 border-b-[1px] border-solid border-[#eee]"},jt=n("div",{class:"h-[48px]"},null,-1),ae=M({__name:"side",setup(d){const x=N(),f=X(),p=Z(),v=A(),s=f.siteInfo,b=f.routers,l=f.addonIndexRoute,r=E([]),g=E([]),m={};if(b.forEach(a=>{a.original_name=a.name,a.meta.addon==""?(a.children&&a.children.length&&(a.name=ne(a.children)),r.value.push(a)):a.meta.addon!=""&&(s==null?void 0:s.apps.length)<=1&&(s==null?void 0:s.apps[0].key)==a.meta.addon?a.children?(a.children.forEach(u=>{u.original_name=u.name,u.children&&u.children.length&&(u.name=ne(u.children))}),r.value.unshift(...a.children)):r.value.unshift(a):m[a.meta.addon]=a}),(s==null?void 0:s.apps.length)>1){const a=[];s==null||s.apps.forEach(u=>{var y;a.push({path:m[u.key]?m[u.key].path:"",meta:{icon:((y=m[u.key])==null?void 0:y.meta.icon)||"element-Setting",addon:u.key,title:u.title,app:u.app,show:!0},original_name:u.key,name:l[u.key]})}),r.value.unshift(...a)}const c=E(p.matched[1].name);return ue(p,()=>{(s==null?void 0:s.apps.length)>1?(g.value=p.matched[1].children,c.value=p.matched[1].name):p.meta.addon==""?(c.value=p.matched[1].name,g.value=p.matched[1].children??[]):p.meta.addon&&p.meta.addon!=(s==null?void 0:s.apps[0].key)?(c.value="/site/app",g.value=p.matched[1].children??[]):(c.value=p.matched[2].name,g.value=p.matched[2].children??[])},{immediate:!0}),(a,u)=>{const y=pe,S=Fe,V=H,R=de,C=Ne,B=O,T=_e,L=Y;return i(),k(L,{class:"w-100 h-screen"},{default:o(()=>[t(T,{class:"p-0 flex"},{default:o(()=>[n("div",St,[t(y,{class:"logo-wrap"},{default:o(()=>[e(x).menuIsCollapse?(i(),w("div",It,Rt)):(i(),w("div",Vt,[e(s).logo?(i(),w("img",{key:0,class:"max-h-[40px] max-w-[40px] rounded-full",src:e(Le)(e(s).logo),alt:""},null,8,Et)):(i(),w("img",Ct))]))]),_:1}),t(B,{class:"h-[calc( 100vh - 64px )]"},{default:o(()=>[t(C,{"default-active":c.value,router:!0,class:"aside-menu","unique-opened":"true",collapse:e(x).menuIsCollapse},{default:o(()=>[(i(!0),w(I,null,z(r.value,(_,q)=>(i(),w(I,{key:q},[_.meta.show?(i(),k(R,{key:0,index:_.original_name,onClick:J=>e(v).push({name:_.name})},{title:o(()=>[n("div",Pt,[n("span",Mt,$(_.meta.short_title||_.meta.title),1)])]),default:o(()=>[_.meta.icon?(i(),w("div",Tt,[e(qe)(_.meta.icon)?(i(),k(S,{key:0,class:"w-[16px] h-[16px] rounded-[50%] overflow-hidden",src:_.meta.icon,fit:"fill"},null,8,["src"])):(i(),k(V,{key:1,name:_.meta.icon,class:"absolute top-[50%] -translate-y-[50%]"},null,8,["name"]))])):(i(),w("div",Ut))]),_:2},1032,["index","onClick"])):W("",!0)],64))),128))]),_:1},8,["default-active","collapse"]),Bt]),_:1})]),g.value.length?(i(),k(B,{key:0,class:"two-menu w-[140px]"},{default:o(()=>[n("div",Wt,$(e(p).matched[1].meta.title),1),t(C,{"default-active":e(p).name,router:!0,class:"aside-menu",collapse:e(x).menuIsCollapse},{default:o(()=>[(i(!0),w(I,null,z(g.value,(_,q)=>(i(),k(me,{routes:_,key:q},null,8,["routes"]))),128))]),_:1},8,["default-active","collapse"]),jt]),_:1})):W("",!0)]),_:1})]),_:1})}}});const Lt=M({__name:"index",setup(d){const x=N(),f=D(()=>x.dark),p=Z();return ue(p,()=>{x.$patch(v=>{v.menuDrawer=!1})}),(v,s)=>{const b=ze,l=le;return i(),w(I,null,[t(b,{class:j(["h-screen layout-aside w-auto",{bright:!e(f)}])},{default:o(()=>[t(ae,{class:"hidden-xs-only"})]),_:1},8,["class"]),t(l,{modelValue:e(x).menuDrawer,"onUpdate:modelValue":s[0]||(s[0]=r=>e(x).menuDrawer=r),direction:"ltr","with-header":!1,"custom-class":"aside-drawer",size:"210px"},{default:o(()=>[t(ae)]),_:1},8,["modelValue"])],64)}}});const qt={class:"common-layout min-w-[1200px]"},Ft={class:"p-[10px]"},uo=M({__name:"index",setup(d){const x=ie(),f=Ae(),p=N(),v=D(()=>p.dark);return(s,b)=>{const l=pe,r=Oe("router-view"),g=O,m=_e,c=Y;return i(),w("div",qt,[t(c,{class:"w-100 h-screen"},{default:o(()=>[t(Lt),t(c,null,{default:o(()=>[t(l,null,{default:o(()=>[t(bt)]),_:1}),t(m,{class:j(["main-wrap h-full p-0",{"bg-page":e(v)}])},{default:o(()=>[t(g,null,{default:o(()=>[n("div",Ft,[e(x).routeRefreshTag?(i(),k(r,{key:0},{default:o(({Component:a,route:u})=>[(i(),k(He,{include:e(f).tabNames},[(i(),k(Ke(a),{key:u.fullPath}))],1032,["include"]))]),_:1})):W("",!0)])]),_:1})]),_:1},8,["class"])]),_:1})]),_:1})])}}});export{uo as default};
