import{d as k,cM as x,O as N,f as D,r as c,h as u,c as I,y as B,I as p,w as t,a,t as l,u as s,N as o,e as i,B as C,X as F,_ as M,Y as R,$ as E}from"./index-b19d04dd.js";/* empty css                   *//* empty css                *//* empty css                */import"./el-form-item-4ed993c7.js";import{g as T}from"./order-14e522d7.js";const S={class:"main-container"},V={class:"panel-title"},$={class:"input-width"},O={class:"input-width"},q={class:"input-width"},L={class:"input-width"},X={class:""},Y={class:""},j={class:"input-width"},z={class:"input-width"},A={class:"input-width"},G={class:"input-width"},H={class:"input-width"},J={class:"input-width"},K={class:"input-width"},P={class:"input-width"},oe=k({__name:"detail",setup(Q){x();const f=N(),v=D(),m=parseInt(f.query.order_id),d=c(!0),e=c(null);m?(async(n=0)=>{d.value=!0,e.value=null,await T(n).then(({data:_})=>{e.value=_}).catch(()=>{}),d.value=!1})(m):d.value=!1;const b=c(),h=n=>{v.push(`/member/detail?id=${n}`)};return(n,_)=>{const r=F,w=M,y=R,g=E;return u(),I("div",S,[B((u(),p(y,{model:e.value,"label-width":"150px",ref_key:"formRef",ref:b,class:"page-form"},{default:t(()=>[e.value?(u(),p(w,{key:0,class:"box-card !border-none relative",shadow:"never"},{default:t(()=>[a("h3",V,l(s(o)("orderInfo")),1),i(r,{label:s(o)("orderNo")},{default:t(()=>[a("div",$,l(e.value.order_no),1)]),_:1},8,["label"]),i(r,{label:s(o)("orderMoney")},{default:t(()=>[a("div",O,l(e.value.order_money),1)]),_:1},8,["label"]),i(r,{label:s(o)("orderDiscountMoney")},{default:t(()=>[a("div",q,l(e.value.order_discount_money),1)]),_:1},8,["label"]),i(r,{label:s(o)("member")},{default:t(()=>[a("div",L,[a("div",{class:"flex flex flex-col cursor-pointer",onClick:_[0]||(_[0]=W=>h(e.value.member_id))},[a("span",X,l(e.value.member.nickname||""),1),a("span",Y,l(e.value.member.mobile||""),1)])])]),_:1},8,["label"]),i(r,{label:s(o)("ip")},{default:t(()=>[a("div",j,l(e.value.ip),1)]),_:1},8,["label"]),i(r,{label:s(o)("orderFromName")},{default:t(()=>[a("div",z,l(e.value.order_from_name),1)]),_:1},8,["label"]),i(r,{label:s(o)("orderStatus")},{default:t(()=>[a("div",A,l(e.value.order_status_info.name),1)]),_:1},8,["label"]),i(r,{label:s(o)("payTypeName")},{default:t(()=>[a("div",G,l(e.value.pay_type_name),1)]),_:1},8,["label"]),i(r,{label:s(o)("createTime")},{default:t(()=>[a("div",H,l(e.value.create_time||""),1)]),_:1},8,["label"]),i(r,{label:s(o)("payTime")},{default:t(()=>[a("div",J,l(e.value.pay_time||""),1)]),_:1},8,["label"]),i(r,{label:s(o)("remark")},{default:t(()=>[a("div",K,l(e.value.remark||""),1)]),_:1},8,["label"]),i(r,{label:s(o)("memberMessage")},{default:t(()=>[a("div",P,l(e.value.member_message||""),1)]),_:1},8,["label"])]),_:1})):C("",!0)]),_:1},8,["model"])),[[g,d.value]])])}}});export{oe as default};
