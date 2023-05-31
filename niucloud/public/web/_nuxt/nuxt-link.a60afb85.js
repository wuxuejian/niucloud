import{cr as b,cd as P,a as q,s as x,cs as k,r as C,b as T,aI as R,bo as _,m as A,ct as w,cu as N,cv as B,cw as E,a6 as I}from"./entry.58b5d0b7.js";const p=globalThis.requestIdleCallback||(t=>{const a=Date.now(),s={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(s)},1)}),L=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),O=t=>{const a=b();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{p(t)}):p(t)};async function S(t,a=P()){const{path:s,matched:e}=a.resolve(t);if(!e.length||(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(s)))return;const l=a._preloadPromises=a._preloadPromises||[];if(l.length>4)return Promise.all(l).then(()=>S(t,a));a._routePreloaded.add(s);const i=e.map(n=>{var o;return(o=n.components)==null?void 0:o.default}).filter(n=>typeof n=="function");for(const n of i){const o=Promise.resolve(n()).catch(()=>{}).finally(()=>l.splice(l.indexOf(o)));l.push(o)}await Promise.all(l)}const D=(...t)=>t.find(a=>a!==void 0),U="noopener noreferrer";function V(t){const a=t.componentName||"NuxtLink",s=(e,l)=>{if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;const i=t.trailingSlash==="append"?B:E;if(typeof e=="string")return i(e,!0);const n="path"in e?e.path:l(e).path;return{...e,name:void 0,path:i(n,!0)}};return q({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:l}){const i=P(),n=x(()=>{const r=e.to||e.href||"";return s(r,i.resolve)}),o=x(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||k(n.value,{acceptRelative:!0})),v=C(!1),f=C(null),y=r=>{var d;f.value=e.custom?(d=r==null?void 0:r.$el)==null?void 0:d.nextElementSibling:r==null?void 0:r.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!M()){const d=b();let h,u=null;T(()=>{const g=j();O(()=>{h=p(()=>{var m;(m=f==null?void 0:f.value)!=null&&m.tagName&&(u=g.observe(f.value,async()=>{u==null||u(),u=null;const c=typeof n.value=="string"?n.value:i.resolve(n.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",c).catch(()=>{}),!o.value&&S(n.value,i).catch(()=>{})]),v.value=!0}))})})}),R(()=>{h&&L(h),u==null||u(),u=null})}return()=>{var g,m;if(!o.value){const c={ref:y,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(v.value&&(c.class=e.prefetchedClass||t.prefetchedClass),c.rel=e.rel),_(A("RouterLink"),c,l.default)}const r=typeof n.value=="object"?((g=i.resolve(n.value))==null?void 0:g.href)??null:n.value||null,d=e.target||null,h=e.noRel?null:D(e.rel,t.externalRelAttribute,r?U:"")||null,u=()=>I(r,{replace:e.replace});return e.custom?l.default?l.default({href:r,navigate:u,get route(){if(!r)return;const c=w(r);return{path:c.pathname,fullPath:c.pathname,get query(){return N(c.search)},hash:c.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:h,target:d,isExternal:o.value,isActive:!1,isExactActive:!1}):null:_("a",{ref:f,href:r,rel:h,target:d},(m=l.default)==null?void 0:m.call(l))}}})}const F=V({componentName:"NuxtLink"});function j(){const t=b();if(t._observer)return t._observer;let a=null;const s=new Map,e=(i,n)=>(a||(a=new IntersectionObserver(o=>{for(const v of o){const f=s.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&f&&f()}})),s.set(i,n),a.observe(i),()=>{s.delete(i),a.unobserve(i),s.size===0&&(a.disconnect(),a=null)});return t._observer={observe:e}}function M(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{F as _};
