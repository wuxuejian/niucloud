import{d as w,x as y,r as b,a2 as f,R as S,u as t,h as i,c as d,s as k,w as n,a as l,t as _,q as a,e,B as C,ab as B,ac as E,a1 as z,a6 as D,Y as N}from"./index-34979a7f.js";/* empty css                   *//* empty css                *//* empty css                 *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                        *//* empty css               */import{w as V}from"./tools-0c519445.js";const I={class:"main-container min-h-[70vh]"},R={class:"panel-title !text-sm"},T={class:"text-[14px]"},j={class:"mt-[20px]"},q={class:"panel-title !text-sm"},L={class:"text-[14px]"},O={class:"mt-[20px]"},Y={class:"panel-title !text-sm"},A={class:"text-[14px]"},F={key:0},G={key:1},H={class:"mt-[20px]"},J={class:"panel-title !text-sm"},K={class:"text-[14px]"},M={key:0},P={key:1},re=w({__name:"detection",setup(Q){y().meta.title;const o=b({});let p=b(!0);return(()=>{V().then(u=>{o.value=u.data,p.value=!1})})(),(u,X)=>{const s=B,r=E,h=f("Select"),c=z,v=f("CloseBold"),g=D,x=N;return S((i(),d("div",I,[Object.keys(o.value).length?(i(),k(g,{key:0,class:"box-card !border-none",shadow:"never"},{default:n(()=>[l("div",null,[l("h3",R,_(t(a)("serverInformation")),1),l("div",T,[e(r,{data:o.value.server,size:"large"},{default:n(()=>[e(s,{prop:"name",label:t(a)("environment"),align:"left","min-width":"200"},null,8,["label"]),e(s,{prop:"server",label:t(a)("version"),align:"left","min-width":"140"},null,8,["label"])]),_:1},8,["data"])])]),l("div",j,[l("h3",q,_(t(a)("systemDemand")),1),l("div",L,[e(r,{data:o.value.server_version,size:"large"},{default:n(()=>[e(s,{prop:"name",label:t(a)("environment"),align:"left","min-width":"200"},null,8,["label"]),e(s,{prop:"demand",label:t(a)("demand"),align:"left","min-width":"140"},null,8,["label"]),e(s,{prop:"server",label:t(a)("version"),align:"left","min-width":"140"},null,8,["label"])]),_:1},8,["data"])])]),l("div",O,[l("h3",Y,_(t(a)("authorityStatus")),1),l("div",A,[e(r,{data:o.value.system_variables,size:"large"},{default:n(()=>[e(s,{prop:"name",label:t(a)("name"),align:"left","min-width":"200"},null,8,["label"]),e(s,{prop:"need",label:t(a)("demand"),align:"left","min-width":"140"},null,8,["label"]),e(s,{label:t(a)("status"),align:"left","min-width":"140"},{default:n(({row:m})=>[m.status?(i(),d("span",F,[e(c,{color:"green"},{default:n(()=>[e(h)]),_:1})])):(i(),d("span",G,[e(c,{color:"red"},{default:n(()=>[e(v)]),_:1})]))]),_:1},8,["label"])]),_:1},8,["data"])])]),l("div",H,[l("h3",J,_(t(a)("process")),1),l("div",K,[e(r,{data:o.value.process,size:"large"},{default:n(()=>[e(s,{prop:"name",label:t(a)("name"),align:"left","min-width":"200"},null,8,["label"]),e(s,{prop:"need",label:t(a)("demand"),align:"left","min-width":"140"},null,8,["label"]),e(s,{label:t(a)("status"),align:"left","min-width":"140"},{default:n(({row:m})=>[m.status?(i(),d("span",M,[e(c,{color:"green"},{default:n(()=>[e(h)]),_:1})])):(i(),d("span",P,[e(c,{color:"red"},{default:n(()=>[e(v)]),_:1})]))]),_:1},8,["label"])]),_:1},8,["data"])])])]),_:1})):C("",!0)])),[[x,t(p)]])}}});export{re as default};
