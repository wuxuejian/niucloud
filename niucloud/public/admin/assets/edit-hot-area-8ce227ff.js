import{d as ee,q as ce,r as $,n as de,h as Y,c as L,a as h,b as te,u,i as E,t as V,N as v,e as k,w as W,x as q,R as oe,F,G,B as J,a5 as N,a3 as K,E as pe,X as le,Y as se,aa as ue,p as re,g as he,y as Q,z as Z}from"./index-efa627c5.js";/* empty css                     *//* empty css                   */import{_ as me}from"./index.vue_vue_type_script_setup_true_lang-4a091848.js";import{_ as _e}from"./index.vue_vue_type_style_index_0_lang-be73f389.js";/* empty css                  */import{_ as ge}from"./_plugin-vue_export-helper-c27b6911.js";import{_ as ve}from"./index-03d5f840.js";import{u as xe}from"./diy-aa2e57c5.js";const be=B=>(re("data-v-3f80bd2b"),B=B(),he(),B),ye={key:0,class:"cursor-pointer"},we={class:"text-primary p-[4px]"},ke={key:1,class:"cursor-pointer"},Te={class:"flex"},Me=["id","onMousedown"],He=be(()=>h("span",{class:"p-[4px]"},"|",-1)),Ce=["onMousedown"],Ve=["onMousedown"],Xe=["onMousedown"],Ye=["onMousedown"],Le={class:"mb-[10px] text-lg text-black"},We={class:"overflow-y-auto h-[300px]"},Se={key:0,class:"mb-[16px]"},Ae={class:"flex items-center"},$e={class:"dialog-footer"},Be=ee({__name:"index",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(B,{expose:z,emit:y}){const O=B,M=ce({get(){return O.modelValue},set(b){y("update:modelValue",b)}}),_=$(!1),r=$(400),x=$(400),p=de([]),U=$(1),R=$(.25),S=$(100),D=$(100),j=$(4),P=()=>{let b=p.length%j.value*S.value,i=Math.floor(p.length/j.value)*D.value,c=i+D.value/2;(i>=x.value||c>=x.value)&&(i=0,b=0),p.push({left:b,top:i,width:S.value,height:D.value,unit:"px",link:{name:""}})},ae=(b,i)=>{const c=document.getElementById("box_"+i),o=b.clientX-c.offsetLeft,X=b.clientY-c.offsetTop;document.onmousemove=function(g){c.style.left=g.clientX-o+"px",c.style.top=g.clientY-X+"px",g.clientX-o<0&&(c.style.left=0),g.clientX-o>r.value-c.offsetWidth&&(c.style.left=r.value-c.offsetWidth+"px"),g.clientY-X<0&&(c.style.top=0),g.clientY-X>x.value-c.offsetHeight&&(c.style.top=x.value-c.offsetHeight+"px"),p[i].left=c.offsetLeft,p[i].top=c.offsetTop,p[i].width=c.offsetWidth,p[i].height=c.offsetHeight,p[i].unit="px"},document.onmouseup=function(g){document.onmousemove=null}},I=(b,i)=>{const c=b;c.stopPropagation();const o=document.getElementById("box_"+i),X=b.target.className,g=o.offsetWidth,A=o.offsetHeight,T=c.clientX,d=c.clientY,f=o.offsetLeft,n=o.offsetTop,l=50,s=50;document.onmousemove=function(fe){const m=fe;if(X=="box1"){let e=g-(m.clientX-T);const H=r.value;let t=A-(m.clientY-d);const C=x.value-n;let a=f+(m.clientX-T),w=n+(m.clientY-d);e<l&&(e=l),e>H&&(e=H),t<s&&(t=s),t>C&&(t=C),f==0&&n==0?e==l&&t==s?(a=l,w=s):e==l&&t>s?a=l:e>l&&t==s&&(w=s):f==0&&n>0?e==l&&t==s||e==l&&t>s?(a=l,w=o.offsetTop):e>l&&t==s&&(w=o.offsetTop):f>0&&n==0?e==l&&t==s?(a=o.offsetLeft,w=o.offsetTop):e==l&&t>s?(a=o.offsetLeft,w=0):e>l&&t==s&&(w=o.offsetTop):f>0&&n>0&&(e==l&&t==s||e==l&&t>s?(a=o.offsetLeft,w=o.offsetTop):e>l&&t==s&&(w=o.offsetTop)),a<0&&(a=0,e=g-(m.clientX-T)+(f+(m.clientX-T))),w<0&&(w=0,t=n+(m.clientY-d)+(A-(m.clientY-d))),o.style.width=e+"px",o.style.height=t+"px",o.style.left=a+"px",o.style.top=w+"px"}else if(X=="box2"){let e=g+(m.clientX-T);const H=r.value-f;let t=A-(m.clientY-d);const C=x.value-n;let a=n+(m.clientY-d);e<l&&(e=l),e>H&&(e=H),t<s&&(t=s),t>C&&(t=C),f==0&&n==0?e==l&&t==s?a=s:e==l&&t>s||e>l&&t==s&&(a=s):f==0&&n>0?(e==l&&t==s||e==l&&t>s||e>l&&t==s)&&(a=o.offsetTop):f>0&&n==0?e==l&&t==s?a=o.offsetTop:e==l&&t>s?a=0:e>l&&t==s&&(a=o.offsetTop):f>0&&n>0&&(e==l&&t==s||e==l&&t>s||e>l&&t==s)&&(a=o.offsetTop),a<0&&(a=0,t=n+(m.clientY-d)+(A-(m.clientY-d))),o.style.width=e+"px",o.style.height=t+"px",o.style.top=a+"px"}else if(X=="box3"){let e=g-(m.clientX-T);const H=r.value;let t=A+(m.clientY-d);const C=x.value-n;let a=f+(m.clientX-T);e<l&&(e=l),e>H&&(e=H),t<s&&(t=s),t>C&&(t=C),f==0&&n==0||f==0&&n>0?(e==l&&t==s||e==l&&t>s)&&(a=l):f>0&&n==0?(e==l&&t==s||e==l&&t>s)&&(a=o.offsetLeft):f>0&&n>0&&(e==l&&t==s||e==l&&t>s)&&(a=o.offsetLeft),a<0&&(a=0,e=g-(m.clientX-T)+(f+(m.clientX-T))),o.style.width=e+"px",o.style.height=t+"px",o.style.left=a+"px"}else if(X=="box4"){let e=g+(m.clientX-T);const H=r.value-f;let t=A+(m.clientY-d);const C=x.value-n;e<l&&(e=l),e>H&&(e=H),t<s&&(t=s),t>C&&(t=C),o.style.width=e+"px",o.style.height=t+"px"}p[i].left=o.offsetLeft,p[i].top=o.offsetTop,p[i].width=o.offsetWidth,p[i].height=o.offsetHeight,p[i].unit="px"},document.onmouseup=function(){document.onmousemove=null,document.onmouseup=null}},ie=()=>{if(!M.value.imageUrl){K({type:"warning",message:`${v("imageUrlTip")}`});return}U.value=M.value.imgHeight/M.value.imgWidth,x.value=Math.floor(r.value*U.value),S.value=Math.floor(R.value*x.value),D.value=S.value,j.value=Math.floor(r.value/S.value),Object.keys(M.value.heatMapData).length?p.splice(0,p.length,...M.value.heatMapData):(p.splice(0,p.length),P()),_.value=!0},ne=()=>{let b=!0;for(let i=0;i<p.length;i++)if(!p[i].link.title){K({type:"warning",message:v("selectedHotArea")+(i+1)+v("hotAreaLink")}),b=!1;break}b&&(p.forEach((i,c)=>{const o=document.getElementById("box_"+c);i.width=parseFloat(o.offsetWidth/r.value*100).toFixed(2),i.height=parseFloat(o.offsetHeight/x.value*100).toFixed(2),i.left=parseFloat(o.offsetLeft/r.value*100).toFixed(2),i.top=parseFloat(o.offsetTop/x.value*100).toFixed(2),i.unit="%"}),M.value.heatMapData=p,_.value=!1)};return z({showDialog:_}),(b,i)=>{const c=pe,o=_e,X=me,g=le,A=se,T=ue;return Y(),L("div",null,[h("div",{onClick:ie},[te(b.$slots,"default",{},()=>[u(M).heatMapData.length?(Y(),L("div",ye,[E(V(u(v)("selected")),1),h("span",we,V(u(M).heatMapData.length),1),E(V(u(v)("selectedAfterHotArea")),1)])):(Y(),L("div",ke,V(u(v)("addHotArea")),1))],!0)]),k(T,{modelValue:_.value,"onUpdate:modelValue":i[1]||(i[1]=d=>_.value=d),title:u(v)("hotAreaSet"),width:"810px","close-on-press-escape":!1,"destroy-on-close":!0,"close-on-click-modal":!1},{footer:W(()=>[h("span",$e,[k(c,{onClick:i[0]||(i[0]=d=>_.value=!1)},{default:W(()=>[E(V(u(v)("cancel")),1)]),_:1}),k(c,{type:"primary",onClick:ne},{default:W(()=>[E(V(u(v)("confirm")),1)]),_:1})])]),default:W(()=>[h("div",Te,[h("div",{class:"hot-area-img-wrap content-box relative bg-gray-100 border border-dashed border-gray-500 bg-no-repeat",style:q({backgroundImage:"url("+u(oe)(u(M).imageUrl)+")",width:r.value+"px",height:x.value+"px"})},[(Y(!0),L(F,null,G(p,(d,f)=>(Y(),L("div",{id:"box_"+f,key:f,class:"area-box border border-solid border-[#ccc] w-[100px] h-[100px] absolute top-0 left-0 select-none p-[5px]",style:q({left:d.left+d.unit,top:d.top+d.unit,width:d.width+d.unit,height:d.height+d.unit}),onMousedown:n=>ae(n,f)},[h("span",null,V(f+1),1),d.link.title?(Y(),L(F,{key:0},[He,h("span",null,V(d.link.title),1)],64)):J("",!0),h("span",{class:"box1",onMousedown:N(n=>I(n,f),["stop"])},null,40,Ce),h("span",{class:"box2",onMousedown:N(n=>I(n,f),["stop"])},null,40,Ve),h("span",{class:"box3",onMousedown:N(n=>I(n,f),["stop"])},null,40,Xe),h("span",{class:"box4",onMousedown:N(n=>I(n,f),["stop"])},null,40,Ye)],44,Me))),128))],4),k(A,{"label-width":"80px",class:"pl-[20px]"},{default:W(()=>[h("h3",Le,V(u(v)("hotAreaManage")),1),k(c,{type:"primary",plain:"",size:"small",class:"mb-[10px]",onClick:P},{default:W(()=>[E(V(u(v)("addHotArea")),1)]),_:1}),h("div",We,[(Y(!0),L(F,null,G(p,(d,f)=>(Y(),L(F,{key:f},[d?(Y(),L("div",Se,[k(g,{label:u(v)("hotArea")+(f+1)},{default:W(()=>[h("div",Ae,[k(o,{modelValue:d.link,"onUpdate:modelValue":n=>d.link=n},null,8,["modelValue","onUpdate:modelValue"]),k(X,{class:"del cursor-pointer mx-[10px]",name:"element-CircleCloseFilled",color:"#bbb",size:"20px",onClick:n=>p.splice(f,1)},null,8,["onClick"])])]),_:2},1032,["label"])])):J("",!0)],64))),128))])]),_:1})])]),_:1},8,["modelValue","title"])])}}});const Ee=ge(Be,[["__scopeId","data-v-3f80bd2b"]]),Fe={class:"content-wrap"},Ue={class:"edit-attr-item-wrap"},De={class:"mb-[10px]"},Ie={ref:"imageBoxRef"},Ne={class:"item-wrap p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},ze={class:"style-wrap"},Oe=ee({__name:"edit-hot-area",setup(B,{expose:z}){const y=xe();y.editComponent.ignore=[],y.editComponent.verify=_=>{const r={code:!0,message:""};return y.value[_].imageUrl===""&&(r.code=!1,r.message=v("imageUrlTip")),r};const O=_=>{M()},M=()=>{const _=new Image;_.src=oe(y.editComponent.imageUrl),_.onload=async()=>{y.editComponent.imgWidth=_.width,y.editComponent.imgHeight=_.height}};return z({}),(_,r)=>{const x=ve,p=le,U=Ee,R=se;return Y(),L(F,null,[Q(h("div",Fe,[h("div",Ue,[h("h3",De,V(u(v)("hotAreaSet")),1),k(R,{"label-width":"80px",class:"px-[10px]"},{default:W(()=>[h("div",Ie,[h("div",Ne,[k(p,{label:u(v)("hotAreaBackground")},{default:W(()=>[k(x,{modelValue:u(y).editComponent.imageUrl,"onUpdate:modelValue":r[0]||(r[0]=S=>u(y).editComponent.imageUrl=S),limit:1,onChange:O},null,8,["modelValue"])]),_:1},8,["label"]),k(p,{label:u(v)("hotAreaSet")},{default:W(()=>[k(U,{modelValue:u(y).editComponent,"onUpdate:modelValue":r[1]||(r[1]=S=>u(y).editComponent=S)},null,8,["modelValue"])]),_:1},8,["label"])])],512)]),_:1})])],512),[[Z,u(y).editTab=="content"]]),Q(h("div",ze,[te(_.$slots,"style")],512),[[Z,u(y).editTab=="style"]])],64)}}}),et=Object.freeze(Object.defineProperty({__proto__:null,default:Oe},Symbol.toStringTag,{value:"Module"}));export{et as _};
