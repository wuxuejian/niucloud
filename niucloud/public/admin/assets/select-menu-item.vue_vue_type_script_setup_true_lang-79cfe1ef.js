import{d as p,q as i,a1 as d,h as m,c as a,e as v,w as f,a as h,u as k,F as l,G as y,I as B,B as u,aC as C}from"./index-9d601459.js";/* empty css                  */const b=["innerHTML"],x=p({__name:"select-menu-item",props:{menu:Object,level:{type:Number,default:0}},setup(o){const e=o,r=i(()=>{let t="";for(let n=0;n<e.level;n++)t+=n==0?"&emsp;|--":"--";return t});return(t,n)=>{const s=C,c=d("select-menu-item",!0);return e.menu.menu_type!=2?(m(),a(l,{key:0},[v(s,{label:`${e.menu.menu_name}`,value:e.menu.menu_key},{default:f(()=>[h("span",{innerHTML:`${k(r)}${e.menu.menu_name}`},null,8,b)]),_:1},8,["label","value"]),e.menu.children?(m(!0),a(l,{key:0},y(e.menu.children,_=>(m(),B(c,{menu:_,level:e.level+1},null,8,["menu","level"]))),256)):u("",!0)],64)):u("",!0)}}});export{x as _};
