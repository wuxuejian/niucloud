import{E as y,__tla as f}from"./el-empty.ed8ce84e.js";import{f as p,x as d,aK as h,aL as k,aM as x,o as l,k as n,u as e,Z as v,l as o,t as g,c as L,y as M,q,__tla as C}from"./entry.60adbc61.js";import{__tla as E}from"./index.59e0a5b1.js";let _,H=Promise.all([(()=>{try{return f}catch{}})(),(()=>{try{return C}catch{}})(),(()=>{try{return E}catch{}})()]).then(async()=>{let r,s,c,i;r={class:"w-full pt-6 min-h-[100%] flex flex-col justify-center"},s={key:0,class:"main-container"},c={class:"text-center"},i=["innerHTML"],_=p({__name:"agreement",setup(N){const t=d(null),u=h();return k(u.query.key).then(({data:a})=>{t.value=a,x({title:a.title})}).catch(a=>{}),(a,T)=>{const m=y;return l(),n("div",r,[e(t)?(l(),n(v,{key:0},[e(t).title&&e(t).content?(l(),n("div",s,[o("h2",c,g(e(t).title),1),o("div",{innerHTML:e(t).content},null,8,i)])):(l(),L(m,{key:1,description:("t"in a?a.t:e(q))("protocolNotConfigured")},null,8,["description"]))],64)):M("",!0)])}}})});export{H as __tla,_ as default};
