import{d as O,x as Q,f as G,r as m,h as u,c,a as e,t as y,u as h,e as n,w as j,q as d,P as x,F as g,Q as k,v as $,V as D,a6 as B,i as H,_ as J,R as K,aD as X,aE as Y,a0 as Z,E as ee,U as te,p as ae,g as le}from"./index-ae2d9b78.js";/* empty css                   *//* empty css                  *//* empty css                */import{_ as se}from"./index.vue_vue_type_script_setup_true_lang-657c47c5.js";/* empty css                    */import{h as ne,i as oe}from"./wechat-7913b0c8.js";import{_ as N}from"./menu-form.vue_vue_type_script_setup_true_lang-d40d9536.js";import{_ as ue}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                *//* empty css                *//* empty css                       *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 */const T=w=>(ae("data-v-19bcc336"),w=w(),le(),w),ce={class:"main-container p-5 bg-[#fff] rounded-[4px]"},re={class:"flex justify-between items-center mb-[20px]"},ie={class:"text-page-title"},de={class:"flex"},ve={class:"preview-wrap w-[300px] h-[550px] mr-[16px] bg-overlay rounded-md flex flex-col justify-between border border-color"},pe=T(()=>e("div",{class:"head w-full h-[70px]"},null,-1)),_e={class:"menu-list h-[70px] flex border-t border-color"},me={class:"py-[15px]"},he={class:"flex h-full px-[10px] items-center justify-center border-r border-color"},fe={class:"flex-1 flex w-0"},be=["onClick"],xe={class:"menu-name px-[10px] border-r border-color w-full leading-[40px] text-base truncate text-center"},ge=T(()=>e("div",{class:"active-shade"},null,-1)),we={class:"sub-menu-wrap w-full bg-overlay border border-color rounded"},ye=["onClick"],ke={class:"menu-name w-full text-base truncate text-center"},Be=T(()=>e("div",{class:"active-shade"},null,-1)),Ce=["onClick"],Ee={class:"flex-1"},je={key:1,class:"py-[20px] leading"},Te={class:"fixed-footer-wrap"},Me={class:"fixed-footer"},Ve=O({__name:"menu",setup(w){const z=Q().meta.title,P=G(),p=m(!0),t=m([]),l=m(0),o=m(-1),v=m(null),C=m("/channel/wechat/menu"),R=a=>{P.push({path:C.value})};ne().then(a=>{t.value=a.data,p.value=!1});const F=()=>{t.value.push({name:"菜单名称",type:"view",url:"",appid:"",pagepath:"",sub_button:[]}),M(t.value.length-1)},I=a=>{!t.value[a].sub_button&&(t.value[a].sub_button=[]),t.value[a].sub_button.push({name:"子菜单名称",type:"view",url:"",appid:"",pagepath:""}),V(a,t.value[a].sub_button.length-1)},M=a=>{l.value=a,o.value=-1},V=(a,r)=>{l.value=a,o.value=r},S=()=>{J.confirm(d("deleteMemuTips"),d("warning"),{confirmButtonText:d("confirm"),cancelButtonText:d("cancel"),type:"warning"}).then(()=>{o.value!=-1?(t.value[l.value].sub_button.splice(o.value,1),o.value=t.value[l.value].sub_button.length-1,o.value==-1&&Object.assign(t.value[l.value],{type:"view",url:"",appid:"",pagepath:""})):(t.value.splice(l.value,1),t.value.length&&(l.value=t.value.length-1))})},L=async()=>{if(!v.value||!v.value){K.error(d("menusEmptyTips"));return}for(let a=0;a<(v==null?void 0:v.value.length);a++){const r=v.value[a];if(!await r.validate()){l.value=r.index,o.value=r.subIndex;break}}p.value||(p.value=!0,oe({button:t.value}).then(()=>{p.value=!1}).catch(()=>{p.value=!1}))};return(a,r)=>{const f=X,U=Y,E=se,W=Z,q=ee,A=te;return u(),c(g,null,[e("div",ce,[e("div",re,[e("span",ie,y(h(z)),1)]),n(U,{modelValue:C.value,"onUpdate:modelValue":r[0]||(r[0]=i=>C.value=i),class:"demo-tabs",onTabChange:R},{default:j(()=>[n(f,{label:h(d)("wechatAccessFlow"),name:"/channel/wechat"},null,8,["label"]),n(f,{label:h(d)("customMenu"),name:"/channel/wechat/menu"},null,8,["label"]),n(f,{label:h(d)("wechatTemplate"),name:"/channel/wechat/message"},null,8,["label"]),n(f,{label:h(d)("reply"),name:"/channel/wechat/reply"},null,8,["label"])]),_:1},8,["modelValue"]),x((u(),c("div",de,[e("div",ve,[pe,e("div",_e,[e("div",me,[e("div",he,[n(E,{name:"iconfont-iconjianpan",size:"20px",color:"#b1b2b3"})])]),e("div",fe,[(u(!0),c(g,null,k(t.value,(i,s)=>(u(),c("div",{class:$(["menu-item py-[15px] flex items-center justify-center cursor-pointer",{"size-1":t.value.length==1,"size-2-3":t.value.length>1,active:s==l.value,curr:s==l.value&&o.value==-1}]),key:s,onClick:b=>M(s)},[e("div",xe,y(i.name),1),ge,e("div",we,[(u(!0),c(g,null,k(i.sub_button,(b,_)=>(u(),c("div",{class:$(["menu-item h-[50px] p-[10px] border-b border-color flex items-center justify-center cursor-pointer",{curr:_==o.value}]),key:_,onClick:D($e=>V(s,_),["stop"])},[e("div",ke,y(b.name),1),Be],10,ye))),128)),x(e("div",{class:"add-menu flex items-center justify-center flex-1 cursor-pointer menu-item h-[50px]",onClick:D(b=>I(s),["stop"])},[n(E,{name:"element-Plus"})],8,Ce),[[B,!i.sub_button||i.sub_button.length<5]])])],10,be))),128)),x(e("div",{class:"add-menu flex items-center justify-center flex-1 cursor-pointer menu-item",onClick:F},[n(E,{name:"element-Plus"})],512),[[B,t.value.length<3]])])])]),e("div",Ee,[n(W,{class:"box-card !border-none h-auto",shadow:"never"},{default:j(()=>[t.value.length?(u(!0),c(g,{key:0},k(t.value,(i,s)=>(u(),c("div",{key:s},[x(e("div",null,[n(N,{data:i,onDelete:S,index:s,ref_for:!0,ref_key:"formRef",ref:v},null,8,["data","index"])],512),[[B,s==l.value&&o.value==-1]]),(u(!0),c(g,null,k(i.sub_button,(b,_)=>(u(),c("div",{key:_},[x(e("div",null,[n(N,{data:b,onDelete:S,index:s,"sub-index":_,ref_for:!0,ref_key:"formRef",ref:v},null,8,["data","index","sub-index"])],512),[[B,s==l.value&&_==o.value]])]))),128))]))),128)):(u(),c("div",je,"尚未添加自定义菜单，点击左侧添加菜单为公众号创建菜单栏。"))]),_:1})])])),[[A,p.value]])]),e("div",Te,[e("div",Me,[n(q,{type:"primary",loading:p.value,onClick:r[1]||(r[1]=i=>L())},{default:j(()=>[H(y(h(d)("save")),1)]),_:1},8,["loading"])])])],64)}}});const He=ue(Ve,[["__scopeId","data-v-19bcc336"]]);export{He as default};
