import{Y as a,aa as e,ab as t,y as i,ac as l,ad as r,ae as n,af as s,ag as o}from"./index-7894c49c.js";import{w as p}from"./wechat.a211c5d9.js";const c=()=>{var c={title:"",link:""},h={};const m=()=>{o()&&p.share(c)},u=async(n={})=>{let s=a();if(e((()=>s.info),(()=>{u(n)})),await(async()=>{o()&&await p.init()})(),n&&n.wechat&&n.weapp){let a=t().params;s.info&&(a.mid=s.info.member_id);let e=[];for(let t in a)e.push(t+"="+a[t]);let r=location.origin+location.pathname+(e.length>0?"?"+e.join("&"):"");c={title:n.wechat.title||"",link:n.wechat.link||r,desc:n.wechat.desc||"",imgUrl:n.wechat.url?i(n.wechat.url):""},m(),h={title:n.weapp.title||"",query:n.weapp.path||"/"+l()+(e.length>0?"?"+e.join("&"):""),imageUrl:n.weapp.url?i(n.weapp.url):""}}else r({route:"/"+l(),params:JSON.stringify(t().params)}).then((a=>{let e=a.data,t=e.wechat;if(t){let a=location.origin+location.pathname+(e.query?"?"+e.query:"");c={link:a,title:t.title,desc:t.desc,imgUrl:t.url?i(t.url):""}}m();let l=e.weapp;l&&(h={query:e.url,title:l.title,imageUrl:l.url?i(l.url):""})}))};return{setShare:u,onShareAppMessage:(a={})=>{n((()=>({...h,...a})))},onShareTimeline:(a={})=>{s((()=>({...h,...a})))}}};export{c as u};
