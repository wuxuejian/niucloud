import{d as G,r as g,n as K,h as t,c as a,a as i,b as O,e as o,w as r,i as B,t as m,u as _,q as E,R as W,F as z,T as D,s as H,A as M,B as L,a0 as U,$ as Q,v as Z,ao as ee,a_ as te,E as le,aL as ae,aM as se,J as oe,a9 as ne,V as ie,W as re,X as ce,Y as de}from"./index-39857e33.js";/* empty css                   *//* empty css                  *//* empty css                   *//* empty css                      *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                 */import{_ as ue}from"./index.vue_vue_type_script_setup_true_lang-2de84090.js";/* empty css                 *//* empty css                        *//* empty css               *//* empty css                  */import{_ as pe}from"./upload-media.vue_vue_type_script_setup_true_lang-e4675c40.js";import{a as fe,s as me}from"./wechat-3def80b6.js";const _e={class:"flex border-t border-b main-wrap border-color w-full h-[40vh]"},ve={class:"attachment-list-wrap flex flex-col p-[15px] flex-1 overflow-hidden"},he={key:0,class:"flex"},ge={key:1,class:"flex"},ye={class:"flex-1 my-[15px] h-0"},we={key:0},xe={key:0,class:"flex flex-wrap"},ke=["onClick"],be={class:"attachment-wrap w-full rounded cursor-pointer overflow-hidden relative flex items-center justify-center h-[120px]"},Ce=["src"],Ee={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60"},ze=["onClick"],Se={class:"relative"},$e={class:"w-full h-[130px] relative"},Ve={key:0,class:"absolute left-0 bottom-0 p-[10px] w-full truncate text-white leading-none"},Be={key:0},Le={class:"flex-1 w-0 truncate"},Ne={class:"w-[50px] h-[50px] ml-[10px]"},je={key:1,class:"px-[15px] py-[10px]"},Re={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60"},We={key:1,class:"flex items-center justify-center"},De={class:"flex h-full justify-end items-center"},Ie={class:"dialog-footer"},at=G({__name:"select-wechat-media",props:{type:{type:String,default:"image"}},emits:["success"],setup(y,{emit:A}){const v=y,S=g(!1),P=()=>{v.type=="news"&&j(),S.value=!0},s=K({loading:!0,page:1,total:0,limit:10,data:[]}),w=(b=1)=>{s.loading=!0,s.page=b,fe({page:s.page,limit:s.limit,type:v.type}).then(l=>{s.data=l.data.data,s.total=l.data.total,s.loading=!1,v.type=="news"&&j()}).catch(()=>{s.loading=!1})};w();const x=g({}),q=()=>{A("success",x.value)},h=g(!1),J=()=>{h.value||(h.value=!0,me().then(()=>{h.value=!1,w()}).catch(()=>{h.value=!1}))},N=document.createElement("meta");N.content="same-origin",N.name="referrer",document.getElementsByTagName("head")[0].appendChild(N);const I=g(null),T=g([]),k=g([]),j=ee(()=>{te(()=>{const b=I.value.clientWidth,l=parseInt(b/292),d=[],u=[];T.value.forEach((p,n)=>{if(n<l){const c={};c.top="0px",n%l==0?c.left=p.clientWidth*n+"px":c.left=p.clientWidth*n+n%l*10+"px",u[n]=c,d[n]=p.clientHeight+10}else{let c=Math.min(...d),$=d.findIndex(R=>R===c),C={};C.top=c+10+"px",C.left=u[$].left,u[n]=C,d[$]+=p.clientHeight+10}}),k.value=u})},800);return window.addEventListener("resize",()=>j()),(b,l)=>{const d=le,u=ae,p=se,n=oe,c=ue,$=ne,C=ie,R=re,X=ce,Y=de;return t(),a(z,null,[i("div",{onClick:P},[O(b.$slots,"default")]),o(X,{modelValue:S.value,"onUpdate:modelValue":l[5]||(l[5]=e=>S.value=e),title:_(E)("upload.select"+y.type),width:"60%",class:"attachment-dialog","destroy-on-close":!0},{footer:r(()=>[i("span",Ie,[o(d,{onClick:l[4]||(l[4]=e=>S.value=!1)},{default:r(()=>[B(m(_(E)("cancel")),1)]),_:1}),o(d,{type:"primary",onClick:q},{default:r(()=>[B(m(_(E)("confirm")),1)]),_:1})])]),default:r(()=>[i("div",_e,[i("div",ve,[o(p,{gutter:15,class:"h-[32px]"},{default:r(()=>[o(u,{span:10},{default:r(()=>[v.type!="news"?(t(),a("div",he,[o(pe,{type:v.type,onSuccess:l[0]||(l[0]=e=>w())},{default:r(()=>[o(d,{type:"primary"},{default:r(()=>[B(m(_(E)("upload.upload"+y.type)),1)]),_:1})]),_:1},8,["type"])])):(t(),a("div",ge,[o(d,{type:"primary",loading:h.value,onClick:J},{default:r(()=>[B(m(h.value?"同步中":"同步微信图文"),1)]),_:1},8,["loading"])]))]),_:1})]),_:1}),W((t(),a("div",ye,[o(C,null,{default:r(()=>[s.data.length?(t(),a("div",we,[v.type!="news"?(t(),a("div",xe,[(t(!0),a(z,null,D(s.data,(e,f)=>(t(),a("div",{class:"attachment-item mr-[10px] mb-[10px] w-[120px]",key:f,onClick:V=>x.value=e},[i("div",be,[y.type=="image"?(t(),H(n,{key:0,src:_(M)(e.value),fit:"contain","preview-src-list":e.image_list},null,8,["src","preview-src-list"])):y.type=="video"?(t(),a("video",{key:1,src:_(M)(e.value)},null,8,Ce)):L("",!0),W(i("div",Ee,[o(c,{name:"element Select",color:"#fff",size:"40px"})],512),[[U,x.value.id==e.id]])])],8,ke))),128))])):(t(),a("div",{key:1,class:"relative",ref_key:"waterfallContainerRef",ref:I},[(t(!0),a(z,null,D(s.data,(e,f)=>(t(),a("div",{ref_for:!0,ref_key:"waterfallItemRef",ref:T,class:"absolute attachment-item mr-[10px] mb-[10px] w-[280px] rounded-lg overflow-hidden border border-color",style:Q({left:k.value[f]?k.value[f].left:"",top:k.value[f]?k.value[f].top:""}),key:f,onClick:V=>x.value=e},[i("div",Se,[i("div",$e,[o(n,{src:e.value.news_item[0].thumb_url,class:"w-full h-full"},null,8,["src"]),e.value.news_item.length>1?(t(),a("div",Ve,m(e.value.news_item[0].title),1)):L("",!0)]),e.value.news_item.length>1?(t(),a("div",Be,[(t(!0),a(z,null,D(e.value.news_item,(V,F)=>(t(),a(z,null,[F>0?(t(),a("div",{key:0,class:Z(["px-[15px] py-[10px] flex",{"border-b border-color":F<e.value.news_item.length-1}])},[i("div",Le,m(V.title),1),i("div",Ne,[o(n,{src:V.thumb_url,class:"w-full h-full"},null,8,["src"])])],2)):L("",!0)],64))),256))])):(t(),a("div",je,m(e.value.news_item[0].title),1)),W(i("div",Re,[o(c,{name:"element Select",color:"#fff",size:"40px"})],512),[[U,x.value.id==e.id]])])],12,ze))),128))],512))])):(t(),a("div",We,[s.loading?L("",!0):(t(),H($,{key:0,description:_(E)("upload.mediaEmpty"),"image-size":100},null,8,["description"]))]))]),_:1})])),[[Y,s.loading]]),o(p,{gutter:20},{default:r(()=>[o(u,{span:"24"},{default:r(()=>[i("div",De,[o(R,{"current-page":s.page,"onUpdate:current-page":l[1]||(l[1]=e=>s.page=e),small:!0,"page-size":s.limit,"onUpdate:page-size":l[2]||(l[2]=e=>s.limit=e),"page-sizes":[10,20,30,40,60],layout:"total, sizes, prev, pager, next, jumper",total:s.total,onSizeChange:l[3]||(l[3]=e=>w()),onCurrentChange:w},null,8,["current-page","page-size","total"])])]),_:1})]),_:1})])])]),_:1},8,["modelValue","title"])],64)}}});export{at as _};
