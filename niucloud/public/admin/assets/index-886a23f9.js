import{b as k,G as z,a as v,s as _,d as b,e as w,E as C}from"./index-57446bef.js";import{d,b as B,r as P,c as l,m as A,w as N,e as n,f as u,j as m,u as o,v as f,x as j,Z as I,h as L,n as T,_ as q,l as D}from"./base-9962c822.js";const F=k({size:{type:[Number,String],values:z,default:"",validator:e=>v(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:_},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:b(String),default:"cover"}}),G={error:e=>e instanceof Event},U=["src","alt","srcset"],V=d({name:"ElAvatar"}),Z=d({...V,props:F,emits:G,setup(e,{emit:y}){const t=e,a=B("avatar"),c=P(!1),S=l(()=>{const{size:s,icon:i,shape:p}=t,r=[a.b()];return A(s)&&r.push(a.m(s)),i&&r.push(a.m("icon")),p&&r.push(a.m(p)),r}),h=l(()=>{const{size:s}=t;return v(s)?a.cssVarBlock({size:w(s)||""}):void 0}),E=l(()=>({objectFit:t.fit}));N(()=>t.src,()=>c.value=!1);function g(s){c.value=!0,y("error",s)}return(s,i)=>(n(),u("span",{class:T(o(S)),style:m(o(h))},[(s.src||s.srcSet)&&!c.value?(n(),u("img",{key:0,src:s.src,alt:s.alt,srcset:s.srcSet,style:m(o(E)),onError:g},null,44,U)):s.icon?(n(),f(o(C),{key:1},{default:j(()=>[(n(),f(I(s.icon)))]),_:1})):L(s.$slots,"default",{key:2})],6))}});var $=q(Z,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const K=D($);export{K as E};
