import{p as _,L as E,a as l,q as g,r as y,v as P,b as $,o as s,e as p,x as k,y as n,u as r,B,M as w,N as A,O as S,P as x,j as N,c as f,w as j,A as q,E as D,t as K,C as L,Q as M,R as i}from"./entry.58b5d0b7.js";const v=Symbol("breadcrumbKey"),O=_({separator:{type:String,default:"/"},separatorIcon:{type:E}}),R=l({name:"ElBreadcrumb"}),T=l({...R,props:O,setup(t){const a=t,o=g("breadcrumb"),c=y();return P(v,a),$(()=>{const e=c.value.querySelectorAll(`.${o.e("item")}`);e.length&&e[e.length-1].setAttribute("aria-current","page")}),(e,m)=>(s(),p("div",{ref_key:"breadcrumb",ref:c,class:n(r(o).b()),"aria-label":"Breadcrumb",role:"navigation"},[k(e.$slots,"default")],2))}});var z=B(T,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);const Q=_({to:{type:w([String,Object]),default:""},replace:{type:Boolean,default:!1}}),V=l({name:"ElBreadcrumbItem"}),F=l({...V,props:Q,setup(t){const a=t,o=A(),c=S(v,void 0),e=g("breadcrumb"),{separator:m,separatorIcon:b}=x(c),u=o.appContext.config.globalProperties.$router,h=y(),C=()=>{!a.to||!u||(a.replace?u.replace(a.to):u.push(a.to))};return(d,G)=>(s(),p("span",{class:n(r(e).e("item"))},[N("span",{ref_key:"link",ref:h,class:n([r(e).e("inner"),r(e).is("link",!!d.to)]),role:"link",onClick:C},[k(d.$slots,"default")],2),r(b)?(s(),f(r(D),{key:0,class:n(r(e).e("separator"))},{default:j(()=>[(s(),f(q(r(b))))]),_:1},8,["class"])):(s(),p("span",{key:1,class:n(r(e).e("separator")),role:"presentation"},K(r(m)),3))],2))}});var I=B(F,[["__file","/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);const J=L(z,{BreadcrumbItem:I}),U=M(I);function W(t){return i.get("article/article",t)}function X(t){return i.get(`article/article/${t}`)}function Y(){return i.get("article/category")}export{U as E,J as a,W as b,Y as c,X as g};
