import{d as z,r as v,v as N,D as j,n as A,h as p,c as x,y as m,z as g,u as t,a,t as _,N as i,e as d,w as c,F as w,G as F,R as C,i as R,I as y,B as P,b as $,E as M,Y as O,V as G,ah as U,aj as W,aa as Y,a0 as q}from"./index-9d601459.js";/* empty css                   *//* empty css                   *//* empty css                        *//* empty css                    *//* empty css               */import"./el-tooltip-4ed993c7.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                        *//* empty css                *//* empty css                  */import{_ as H}from"./index.vue_vue_type_script_setup_true_lang-6df3a9a5.js";import{u as J}from"./diy-f8a7f13a.js";import{w as K}from"./sys-45a56363.js";import{S as Q}from"./sortable.esm-be94e56d.js";import{r as X}from"./range-3dd47815.js";const Z={class:"content-wrap"},ee={class:"edit-attr-item-wrap"},te={class:"mb-[10px]"},oe={class:"flex items-center pb-[10px]"},ae=["src"],le={class:"flex flex-col justify-center ml-[10px] leading-[1]"},ne={class:"text-[14px]"},se={class:"text-[12px] text-[#999] mt-[8px]"},ie=["onClick"],de={class:"style-wrap"},re=z({__name:"edit-addon-list",setup(ce,{expose:k}){const o=J();o.editComponent.ignore=[],o.editComponent.verify=s=>{var e={code:!0,message:""};return e};const u=v(!1),b=v();N(()=>{j(()=>{const s=Q.create(b.value,{group:"item-wrap",animation:200,onEnd:e=>{const r=o.editComponent.list[e.oldIndex];o.editComponent.list.splice(e.oldIndex,1),o.editComponent.list.splice(e.newIndex,0,r),s.sort(X(o.editComponent.list.length).map(h=>h.toString()))}})})});const l=A({page:1,limit:10,total:0,loading:!0,data:[],searchParam:{title:"",key:""}});((s=1)=>{l.loading=!0,l.page=s,K({...l.searchParam}).then(e=>{l.loading=!1,l.data=e.data,l.total=e.data.length}).catch(()=>{l.loading=!1})})();const S=s=>{let e={id:o.generateRandom(),key:"",title:"",url:"",icon:"",desc:""};for(let r in s)e[r]=s[r];o.editComponent.list.push(e),u.value=!1},T=()=>{u.value=!0};return k({}),(s,e)=>{const r=H,h=M,D=O,E=G,f=U,B=W,V=Y,I=q;return p(),x(w,null,[m(a("div",Z,[a("div",ee,[a("h3",te,_(t(i)("addonListSet")),1),d(D,{"label-width":"100px",class:"px-[10px]"},{default:c(()=>[a("div",{ref_key:"addonBoxRef",ref:b},[(p(!0),x(w,null,F(t(o).editComponent.list,(n,L)=>(p(),x("div",{key:n.id,class:"item-wrap !cursor-move p-[10px] pb-0 relative border border-dashed border-gray-300 mb-[16px]"},[m(a("div",oe,[a("img",{class:"w-[60px] h-[60px] rounded-md",src:t(C)(n.icon)},null,8,ae),a("div",le,[a("span",ne,_(n.title),1),a("span",se,_(n.desc),1)])],512),[[g,n.title]]),m(a("div",{class:"del absolute cursor-pointer z-[2] top-[-8px] right-[-8px]",onClick:me=>t(o).editComponent.list.splice(L,1)},[d(r,{name:"element-CircleCloseFilled",color:"#bbb",size:"20px"})],8,ie),[[g,t(o).editComponent.list.length>1]])]))),128))],512),d(h,{class:"w-full",onClick:T},{default:c(()=>[R(_(t(i)("addAddon")),1)]),_:1})]),_:1})]),d(V,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=n=>u.value=n),title:t(i)("addonListTips"),width:"600px","close-on-press-escape":!1,"close-on-click-modal":!1},{default:c(()=>[a("div",null,[m((p(),y(B,{data:l.data,size:"large",onCurrentChange:S,"highlight-current-row":"","max-height":"500px"},{empty:c(()=>[a("span",null,_(l.loading?"":t(i)("emptyData")),1)]),default:c(()=>[d(f,{label:t(i)("addonIcon"),width:"120",align:"center"},{default:c(({row:n})=>[n.icon?(p(),y(E,{key:0,class:"w-[50px] h-[50px]",src:t(C)(n.icon),fit:"contain"},null,8,["src"])):P("",!0)]),_:1},8,["label"]),d(f,{prop:"title","show-overflow-tooltip":!0,width:"120",label:t(i)("addonTitle")},null,8,["label"]),d(f,{prop:"desc","show-overflow-tooltip":!0,label:t(i)("addonDesc")},null,8,["label"])]),_:1},8,["data"])),[[I,l.loading]])])]),_:1},8,["modelValue","title"])],512),[[g,t(o).editTab=="content"]]),m(a("div",de,[$(s.$slots,"style")],512),[[g,t(o).editTab=="style"]])],64)}}}),Ie=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{Ie as _};
