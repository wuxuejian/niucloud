import{_ as S}from"./index.vue_vue_type_style_index_0_lang-645eb1b7.js";import{_ as V}from"./index.vue_vue_type_script_setup_true_lang-e10327f5.js";import{d as j,l as g,n as B,Q as N,h as l,c as s,$ as p,u as c,a as o,e as r,s as T,w,t as b,q as k,F as z,T as $,B as D,an as E}from"./index-34979a7f.js";import{_ as F}from"./_plugin-vue_export-helper-c27b6911.js";/* empty css                  *//* empty css                   *//* empty css                  */import"./attachment-0daaf0f6.js";/* empty css                   */import"./index.vue_vue_type_script_setup_true_lang-d47218dc.js";/* empty css                        *//* empty css                     *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                      *//* empty css                    */import"./el-tooltip-4ed993c7.js";/* empty css                 *//* empty css               *//* empty css                    *//* empty css                    */import"./el-dropdown-item-4ed993c7.js";import"./index.vue_vue_type_script_setup_true_lang-0998f18f.js";/* empty css                   */const I={class:"flex flex-wrap"},P={key:0,class:"w-full h-full relative"},q={class:"w-full h-full flex items-center justify-center"},L={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation"},Q={class:"w-full h-full flex items-center justify-center flex-col"},R={class:"leading-none text-xs mt-[10px] text-secondary"},A={class:"w-full h-full relative"},G={class:"w-full h-full flex items-center justify-center"},H={class:"absolute z-[1] flex items-center justify-center w-full h-full inset-0 bg-black bg-opacity-60 operation"},J={class:"w-full h-full flex items-center justify-center flex-col"},K={class:"leading-none text-xs mt-[10px] text-secondary"},M=j({__name:"index",props:{modelValue:{type:String,default:""},width:{type:String,default:"100px"},height:{type:String,default:"100px"},iconText:{type:String},limit:{type:Number,default:1}},emits:["update:modelValue","change"],setup(i,{emit:f}){const n=i,d=g({get(){return n.modelValue},set(t){f("update:modelValue",t)}}),e=B({data:[]}),m=()=>{d.value=E(e.data).toString()};N(()=>d.value,()=>{e.data=[...d.value.split(",").filter(t=>t)],m()},{immediate:!0});const u=g(()=>({width:n.width,height:n.height})),h=t=>{n.limit==1?(e.data.splice(0,1),t&&e.data.push(t.url)):t.forEach(x=>{e.data.length<n.limit&&e.data.push(x.url)}),m(),f("change",d.value)},_=(t=0)=>{e.data.splice(t,1),m()};return(t,x)=>{const a=V,v=S;return l(),s("div",I,[i.limit==1?(l(),s("div",{key:0,class:"rounded cursor-pointer overflow-hidden relative border border-dashed border-color icon-wrap mr-[10px]",style:p(c(u))},[e.data.length?(l(),s("div",P,[o("div",q,[r(a,{name:e.data[0],size:"40px"},null,8,["name"])]),o("div",L,[r(a,{name:"element Delete",color:"#fff",size:"18px",onClick:_})])])):(l(),T(v,{key:1,limit:i.limit,type:"icon",onConfirm:h},{default:w(()=>[o("div",Q,[r(a,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),o("div",R,b(i.iconText||c(k)("upload.selecticon")),1)])]),_:1},8,["limit"]))],4)):(l(),s(z,{key:1},[(l(!0),s(z,null,$(e.data,(C,y)=>(l(),s("div",{class:"rounded cursor-pointer overflow-hidden relative border border-dashed border-color icon-wrap mr-[10px]",style:p(c(u)),key:y},[o("div",A,[o("div",G,[r(a,{name:C,size:"40px"},null,8,["name"])]),o("div",H,[r(a,{name:"element Delete",color:"#fff",size:"18px",onClick:O=>_(y)},null,8,["onClick"])])])],4))),128)),e.data.length<i.limit?(l(),s("div",{key:0,class:"rounded cursor-pointer overflow-hidden relative border border-dashed border-color",style:p(c(u))},[r(v,{limit:i.limit,onConfirm:h},{default:w(()=>[o("div",J,[r(a,{name:"element Plus",size:"20px",color:"var(--el-text-color-secondary)"}),o("div",K,b(i.iconText||c(k)("upload.selecticon")),1)])]),_:1},8,["limit"])],4)):D("",!0)],64))])}}});const ke=F(M,[["__scopeId","data-v-ce79c7b9"]]);export{ke as default};
