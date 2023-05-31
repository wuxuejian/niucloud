import{aY as Q,aT as X,aZ as x,a_ as ee,b as V,u as D,_ as z,w as j,a as se,A as te,E as B,r as ne,aa as ae,q as le}from"./base-962c0c23.js";import{d as k,c,b as r,e as u,f as v,g as d,u as e,m as b,n as l,U as G,C as f,x as E,r as C,w as T,E as ie,D as oe,o as re,J as ce,M as ue,h as q,p as P,q as A,v as U,K as pe}from"./runtime-core.esm-bundler-dc7a07d7.js";import{C as H}from"./event-ff03ec12.js";const g={success:"icon-success",warning:"icon-warning",error:"icon-error",info:"icon-info"},W={[g.success]:Q,[g.warning]:X,[g.error]:x,[g.info]:ee},ve=V({title:{type:String,default:""},subTitle:{type:String,default:""},icon:{type:String,values:["success","warning","info","error"],default:"info"}}),de=k({name:"ElResult"}),fe=k({...de,props:ve,setup(m){const y=m,s=D("result"),o=c(()=>{const a=y.icon,i=a&&g[a]?g[a]:"icon-info",n=W[i]||W["icon-info"];return{class:i,component:n}});return(a,i)=>(r(),u("div",{class:l(e(s).b())},[v("div",{class:l(e(s).e("icon"))},[d(a.$slots,"icon",{},()=>[e(o).component?(r(),b(G(e(o).component),{key:0,class:l(e(o).class)},null,8,["class"])):f("v-if",!0)])],2),a.title||a.$slots.title?(r(),u("div",{key:0,class:l(e(s).e("title"))},[d(a.$slots,"title",{},()=>[v("p",null,E(a.title),1)])],2)):f("v-if",!0),a.subTitle||a.$slots["sub-title"]?(r(),u("div",{key:1,class:l(e(s).e("subtitle"))},[d(a.$slots,"sub-title",{},()=>[v("p",null,E(a.subTitle),1)])],2)):f("v-if",!0),a.$slots.extra?(r(),u("div",{key:2,class:l(e(s).e("extra"))},[d(a.$slots,"extra")],2)):f("v-if",!0)],2))}});var me=z(fe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/result/src/result.vue"]]);const Ne=j(me),ye=V({space:{type:[Number,String],default:""},active:{type:Number,default:0},direction:{type:String,default:"horizontal",values:["horizontal","vertical"]},alignCenter:{type:Boolean},simple:{type:Boolean},finishStatus:{type:String,values:["wait","process","finish","error","success"],default:"finish"},processStatus:{type:String,values:["wait","process","finish","error","success"],default:"process"}}),Se={[H]:(m,y)=>[m,y].every(se)},he=k({name:"ElSteps"}),_e=k({...he,props:ye,emits:Se,setup(m,{emit:y}){const s=m,o=D("steps"),a=C([]);return T(a,()=>{a.value.forEach((i,n)=>{i.setIndex(n)})}),ie("ElSteps",{props:s,steps:a}),T(()=>s.active,(i,n)=>{y(H,i,n)}),(i,n)=>(r(),u("div",{class:l([e(o).b(),e(o).m(i.simple?"simple":i.direction)])},[d(i.$slots,"default")],2))}});var ge=z(_e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);const ke=V({title:{type:String,default:""},icon:{type:te},description:{type:String,default:""},status:{type:String,values:["","wait","process","finish","error","success"],default:""}}),we=k({name:"ElStep"}),$e=k({...we,props:ke,setup(m){const y=m,s=D("step"),o=C(-1),a=C({}),i=C(""),n=oe("ElSteps"),h=pe();re(()=>{T([()=>n.props.active,()=>n.props.processStatus,()=>n.props.finishStatus],([t])=>{F(t)},{immediate:!0})}),ce(()=>{n.steps.value=n.steps.value.filter(t=>t.uid!==(h==null?void 0:h.uid))});const _=c(()=>y.status||i.value),K=c(()=>{const t=n.steps.value[o.value-1];return t?t.currentStatus:"wait"}),N=c(()=>n.props.alignCenter),M=c(()=>n.props.direction==="vertical"),S=c(()=>n.props.simple),I=c(()=>n.steps.value.length),R=c(()=>{var t;return((t=n.steps.value[I.value-1])==null?void 0:t.uid)===(h==null?void 0:h.uid)}),w=c(()=>S.value?"":n.props.space),L=c(()=>{const t={flexBasis:typeof w.value=="number"?`${w.value}px`:w.value?w.value:`${100/(I.value-(N.value?0:1))}%`};return M.value||R.value&&(t.maxWidth=`${100/I.value}%`),t}),Y=t=>{o.value=t},Z=t=>{let p=100;const $={};$.transitionDelay=`${150*o.value}ms`,t===n.props.processStatus?p=0:t==="wait"&&(p=0,$.transitionDelay=`${-150*o.value}ms`),$.borderWidth=p&&!S.value?"1px":0,$[n.props.direction==="vertical"?"height":"width"]=`${p}%`,a.value=$},F=t=>{t>o.value?i.value=n.props.finishStatus:t===o.value&&K.value!=="error"?i.value=n.props.processStatus:i.value="wait";const p=n.steps.value[o.value-1];p&&p.calcProgress(i.value)},O=ue({uid:c(()=>h==null?void 0:h.uid),currentStatus:_,setIndex:Y,calcProgress:Z});return n.steps.value=[...n.steps.value,O],(t,p)=>(r(),u("div",{style:q(e(L)),class:l([e(s).b(),e(s).is(e(S)?"simple":e(n).props.direction),e(s).is("flex",e(R)&&!e(w)&&!e(N)),e(s).is("center",e(N)&&!e(M)&&!e(S))])},[f(" icon & line "),v("div",{class:l([e(s).e("head"),e(s).is(e(_))])},[e(S)?f("v-if",!0):(r(),u("div",{key:0,class:l(e(s).e("line"))},[v("i",{class:l(e(s).e("line-inner")),style:q(a.value)},null,6)],2)),v("div",{class:l([e(s).e("icon"),e(s).is(t.icon||t.$slots.icon?"icon":"text")])},[d(t.$slots,"icon",{},()=>[t.icon?(r(),b(e(B),{key:0,class:l(e(s).e("icon-inner"))},{default:P(()=>[(r(),b(G(t.icon)))]),_:1},8,["class"])):e(_)==="success"?(r(),b(e(B),{key:1,class:l([e(s).e("icon-inner"),e(s).is("status")])},{default:P(()=>[A(e(ne))]),_:1},8,["class"])):e(_)==="error"?(r(),b(e(B),{key:2,class:l([e(s).e("icon-inner"),e(s).is("status")])},{default:P(()=>[A(e(ae))]),_:1},8,["class"])):e(S)?f("v-if",!0):(r(),u("div",{key:3,class:l(e(s).e("icon-inner"))},E(o.value+1),3))])],2)],2),f(" title & description "),v("div",{class:l(e(s).e("main"))},[v("div",{class:l([e(s).e("title"),e(s).is(e(_))])},[d(t.$slots,"title",{},()=>[U(E(t.title),1)])],2),e(S)?(r(),u("div",{key:0,class:l(e(s).e("arrow"))},null,2)):(r(),u("div",{key:1,class:l([e(s).e("description"),e(s).is(e(_))])},[d(t.$slots,"description",{},()=>[U(E(t.description),1)])],2))],2)],6))}});var J=z($e,[["__file","/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);const Ie=j(ge,{Step:J}),Be=le(J);export{Ne as E,Ie as a,Be as b};
