import{X as e,aa as a,x as t,ab as i,ac as l,ad as r,ae as n,af as s}from"./index-e4516e00.js";import{w as o}from"./wechat.717f80c2.js";const p=()=>{var p={title:"",link:""},c={};const h=()=>{s()&&o.share(p)};return{setShare:async(r={})=>{let n=e();if(await(async()=>{s()&&await o.init()})(),r&&r.wechat&&r.weapp){let e=a().params;n.info&&(e.mid=n.info.member_id);let l=[];for(let a in e)l.push(a+"="+e[a]);let s=location.origin+location.pathname+(l.length>0?"?"+l.join("&"):"");p={title:r.wechat.title||"",link:r.wechat.link||s,desc:r.wechat.desc||"",imgUrl:r.wechat.url?t(r.wechat.url):""},h(),c={title:r.weapp.title||"",query:r.weapp.path||"/"+i()+(l.length>0?"?"+l.join("&"):""),imageUrl:r.weapp.url?t(r.weapp.url):""}}else l({route:"/"+i(),params:JSON.stringify(a().params)}).then((e=>{let a=e.data,i=a.wechat;if(i){let e=location.origin+location.pathname+(a.query?"?"+a.query:"");p={link:e,title:i.title,desc:i.desc,imgUrl:i.url?t(i.url):""}}h();let l=a.weapp;l&&(c={query:a.url,title:l.title,imageUrl:l.url?t(l.url):""})}))},onShareAppMessage:(e={})=>{r((()=>({...c,...e})))},onShareTimeline:(e={})=>{n((()=>({...c,...e})))}}};export{p as u};
