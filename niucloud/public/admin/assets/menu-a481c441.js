import{d as U,O as q,f as H,r as m,h as o,c as u,a as e,t as y,u as f,e as c,w as j,N as d,y as b,F as x,G as k,A as S,a5 as V,z as B,i as J,a8 as K,a4 as Q,aD as X,aE as Y,$ as Z,E as ee,a0 as te,p as ae,g as se,_ as le}from"./index-4dcc0234.js";/* empty css                   *//* empty css                  *//* empty css                */import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-9285296e.js";/* empty css                    */import{b as oe,c as ue}from"./wechat-38ff6011.js";import{_ as z}from"./menu-form.vue_vue_type_script_setup_true_lang-7770a362.js";/* empty css                *//* empty css                *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                 */const T=g=>(ae("data-v-3a5e07e8"),g=g(),se(),g),ce={class:"main-container p-5"},re={class:"flex justify-between items-center mb-[20px]"},ie={class:"text-[20px]"},de={class:"flex"},ve={class:"preview-wrap w-[300px] h-[550px] mr-[16px] bg-overlay rounded-md flex flex-col justify-between border border-color"},_e=T(()=>e("div",{class:"head w-full h-[70px]"},null,-1)),pe={class:"menu-list h-[70px] flex border-t border-color"},me={class:"py-[15px]"},he={class:"flex h-full px-[10px] items-center justify-center border-r border-color"},fe={class:"flex-1 flex w-0"},be=["onClick"],xe={class:"menu-name px-[10px] border-r border-color w-full leading-[40px] text-base truncate text-center"},ge=T(()=>e("div",{class:"active-shade"},null,-1)),we={class:"sub-menu-wrap w-full bg-overlay border border-color rounded"},ye=["onClick"],ke={class:"menu-name w-full text-base truncate text-center"},Be=T(()=>e("div",{class:"active-shade"},null,-1)),Ce=["onClick"],Ee={class:"flex-1"},je={key:1,class:"py-[20px] leading"},Te={class:"fixed-footer-wrap"},Me={class:"fixed-footer"},$e=U({__name:"menu",setup(g){const D=q().meta.title,F=H(),_=m(!0),t=m([]),s=m(0),n=m(-1),v=m(null),C=m("/channel/wechat/menu"),I=a=>{F.push({path:C.value})};oe().then(a=>{t.value=a.data,_.value=!1});const P=()=>{t.value.push({name:"菜单名称",type:"view",url:"",appid:"",pagepath:"",sub_button:[]}),M(t.value.length-1)},R=a=>{!t.value[a].sub_button&&(t.value[a].sub_button=[]),t.value[a].sub_button.push({name:"子菜单名称",type:"view",url:"",appid:"",pagepath:""}),$(a,t.value[a].sub_button.length-1)},M=a=>{s.value=a,n.value=-1},$=(a,r)=>{s.value=a,n.value=r},N=()=>{K.confirm(d("deleteMemuTips"),d("warning"),{confirmButtonText:d("confirm"),cancelButtonText:d("cancel"),type:"warning"}).then(()=>{n.value!=-1?(t.value[s.value].sub_button.splice(n.value,1),n.value=t.value[s.value].sub_button.length-1,n.value==-1&&Object.assign(t.value[s.value],{type:"view",url:"",appid:"",pagepath:""})):(t.value.splice(s.value,1),t.value.length&&(s.value=t.value.length-1))})},A=async()=>{if(!v.value||!v.value){Q.error(d("menusEmptyTips"));return}for(let a=0;a<(v==null?void 0:v.value.length);a++){const r=v.value[a];if(!await r.validate()){s.value=r.index,n.value=r.subIndex;break}}_.value||(_.value=!0,ue({button:t.value}).then(()=>{_.value=!1}).catch(()=>{_.value=!1}))};return(a,r)=>{const w=X,L=Y,E=ne,O=Z,W=ee,G=te;return o(),u(x,null,[e("div",ce,[e("div",re,[e("span",ie,y(f(D)),1)]),c(L,{modelValue:C.value,"onUpdate:modelValue":r[0]||(r[0]=i=>C.value=i),class:"demo-tabs",onTabChange:I},{default:j(()=>[c(w,{label:f(d)("wechatAccessFlow"),name:"/channel/wechat"},null,8,["label"]),c(w,{label:f(d)("customMenu"),name:"/channel/wechat/menu"},null,8,["label"]),c(w,{label:f(d)("wechatTemplate"),name:"/channel/wechat/message"},null,8,["label"])]),_:1},8,["modelValue"]),b((o(),u("div",de,[e("div",ve,[_e,e("div",pe,[e("div",me,[e("div",he,[c(E,{name:"iconfont-iconjianpan",size:"20px",color:"#b1b2b3"})])]),e("div",fe,[(o(!0),u(x,null,k(t.value,(i,l)=>(o(),u("div",{class:S(["menu-item py-[15px] flex items-center justify-center cursor-pointer",{"size-1":t.value.length==1,"size-2-3":t.value.length>1,active:l==s.value,curr:l==s.value&&n.value==-1}]),key:l,onClick:h=>M(l)},[e("div",xe,y(i.name),1),ge,e("div",we,[(o(!0),u(x,null,k(i.sub_button,(h,p)=>(o(),u("div",{class:S(["menu-item h-[50px] p-[10px] border-b border-color flex items-center justify-center cursor-pointer",{curr:p==n.value}]),key:p,onClick:V(Se=>$(l,p),["stop"])},[e("div",ke,y(h.name),1),Be],10,ye))),128)),b(e("div",{class:"add-menu flex items-center justify-center flex-1 cursor-pointer menu-item h-[50px]",onClick:V(h=>R(l),["stop"])},[c(E,{name:"element-Plus"})],8,Ce),[[B,!i.sub_button||i.sub_button.length<5]])])],10,be))),128)),b(e("div",{class:"add-menu flex items-center justify-center flex-1 cursor-pointer menu-item",onClick:P},[c(E,{name:"element-Plus"})],512),[[B,t.value.length<3]])])])]),e("div",Ee,[c(O,{class:"box-card !border-none h-auto",shadow:"never"},{default:j(()=>[t.value.length?(o(!0),u(x,{key:0},k(t.value,(i,l)=>(o(),u("div",{key:l},[b(e("div",null,[c(z,{data:i,onDelete:N,index:l,ref_for:!0,ref_key:"formRef",ref:v},null,8,["data","index"])],512),[[B,l==s.value&&n.value==-1]]),(o(!0),u(x,null,k(i.sub_button,(h,p)=>(o(),u("div",{key:p},[b(e("div",null,[c(z,{data:h,onDelete:N,index:l,"sub-index":p,ref_for:!0,ref_key:"formRef",ref:v},null,8,["data","index","sub-index"])],512),[[B,l==s.value&&p==n.value]])]))),128))]))),128)):(o(),u("div",je,"尚未添加自定义菜单，点击左侧添加菜单为公众号创建菜单栏。"))]),_:1})])])),[[G,_.value]])]),e("div",Te,[e("div",Me,[c(W,{type:"primary",loading:_.value,onClick:r[1]||(r[1]=i=>A())},{default:j(()=>[J(y(f(d)("save")),1)]),_:1},8,["loading"])])])],64)}}});const qe=le($e,[["__scopeId","data-v-3a5e07e8"]]);export{qe as default};
