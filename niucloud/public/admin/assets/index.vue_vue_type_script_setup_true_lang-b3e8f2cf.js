import{d as y,r as k,l as C,f as V,h as b,s as v,w as l,a as u,e as d,i as f,t as p,u as a,q as r,bq as B,bR as E,bS as D,U as P,E as N,X as R}from"./index-39857e33.js";/* empty css                  *//* empty css                   *//* empty css                  */const S={class:"dialog-footer"},F=y({__name:"index",props:{show:{type:Boolean,default:!1},type:{type:String,default:""},searchParam:{type:Object,default:()=>({})}},emits:["update:show","close"],setup(m,{emit:o}){const e=m,n=k(!1),c=C({get(){return e.show},set(s){o("update:show",s)}}),h=V(),_=()=>{n.value=!0;const s=h.resolve({path:"/site/setting/export"});E(e.type,{page:1,limit:1,...e.searchParam}).then(t=>{t.data?D(e.type,e.searchParam).then(()=>{n.value=!1,o("close",!1),setTimeout(()=>{window.open(s.href)},100)}).catch(()=>{}):(o("close",!1),P.error(t.msg))}).catch(()=>{})},g=()=>{o("close",!1)};return(s,t)=>{const i=N,x=R;return b(),v(x,{modelValue:a(c),"onUpdate:modelValue":t[0]||(t[0]=w=>B(c)?c.value=w:null),title:a(r)("exportTip"),width:"300px","close-on-click-modal":!1,"close-on-press-escape":!1,"show-close":!1},{footer:l(()=>[u("span",S,[d(i,{onClick:g},{default:l(()=>[f(p(a(r)("cancel")),1)]),_:1}),d(i,{type:"primary",onClick:_,loading:n.value},{default:l(()=>[f(p(a(r)("exportConfirm")),1)]),_:1},8,["loading"])])]),default:l(()=>[u("span",null,p(a(r)("exportPlaceholder")),1)]),_:1},8,["modelValue","title"])}}});export{F as _};
