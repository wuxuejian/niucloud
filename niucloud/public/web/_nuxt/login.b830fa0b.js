import{E as Xe,_ as Ge,t as tn,__tla as en}from"./test.c1f4a088.js";import{E as nn,__tla as rn}from"./el-input.7ceff0e1.js";import{E as on,a as an,__tla as sn}from"./el-overlay.610b9c1a.js";import{E as ln,__tla as un}from"./el-button.def647ec.js";import{_ as cn,__tla as fn}from"./nuxt-link.70d79512.js";import{f as hn,x as O,h as dn,a5 as gn,i as zt,a1 as pn,o as Q,k as $,l as I,m as N,t as k,y as Ht,Z as mn,$ as yn,u as b,w as T,S as Jt,W as Kt,p as ot,a6 as wn,a7 as vn,a8 as En,C as _n,q as B,s as bn,v as An,a9 as Cn,aa as Bn,e as Nn,__tla as xn}from"./entry.3da48a84.js";import{u as Yt,__tla as In}from"./useLogin.f3e4badf.js";import{_ as Pn}from"./_plugin-vue_export-helper.c27b6911.js";import{__tla as Tn}from"./throttle.be2572a8.js";import{__tla as Mn}from"./debounce.71056539.js";import{__tla as Rn}from"./use-form-item.7516d6a1.js";import{__tla as Ln}from"./index.263bc980.js";import{__tla as kn}from"./index.0d493052.js";import{__tla as Un}from"./vnode.cb20a050.js";let qt,Sn=Promise.all([(()=>{try{return en}catch{}})(),(()=>{try{return rn}catch{}})(),(()=>{try{return sn}catch{}})(),(()=>{try{return un}catch{}})(),(()=>{try{return fn}catch{}})(),(()=>{try{return xn}catch{}})(),(()=>{try{return In}catch{}})(),(()=>{try{return Tn}catch{}})(),(()=>{try{return Mn}catch{}})(),(()=>{try{return Rn}catch{}})(),(()=>{try{return Ln}catch{}})(),(()=>{try{return kn}catch{}})(),(()=>{try{return Un}catch{}})()]).then(async()=>{var H={},jt=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},_t={},P={};let at;const Ot=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];P.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17},P.getSymbolTotalCodewords=function(t){return Ot[t]},P.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},P.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');at=t},P.isKanjiModeEnabled=function(){return typeof at<"u"},P.toSJIS=function(t){return at(t)};var Z={};(function(t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2};function n(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw new Error("Unknown EC Level: "+o)}}t.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},t.from=function(o,e){if(t.isValid(o))return o;try{return n(o)}catch{return e}}})(Z);function bt(){this.buffer=[],this.length=0}bt.prototype={get:function(t){const n=Math.floor(t/8);return(this.buffer[n]>>>7-t%8&1)===1},put:function(t,n){for(let o=0;o<n;o++)this.putBit((t>>>n-o-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(t){const n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),t&&(this.buffer[n]|=128>>>this.length%8),this.length++}};var Qt=bt;function J(t){if(!t||t<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=t,this.data=new Uint8Array(t*t),this.reservedBit=new Uint8Array(t*t)}J.prototype.set=function(t,n,o,e){const r=t*this.size+n;this.data[r]=o,e&&(this.reservedBit[r]=!0)},J.prototype.get=function(t,n){return this.data[t*this.size+n]},J.prototype.xor=function(t,n,o){this.data[t*this.size+n]^=o},J.prototype.isReserved=function(t,n){return this.reservedBit[t*this.size+n]};var $t=J,At={};(function(t){const n=P.getSymbolSize;t.getRowColCoords=function(o){if(o===1)return[];const e=Math.floor(o/7)+2,r=n(o),a=r===145?26:Math.ceil((r-13)/(2*e-2))*2,i=[r-7];for(let s=1;s<e-1;s++)i[s]=i[s-1]-a;return i.push(6),i.reverse()},t.getPositions=function(o){const e=[],r=t.getRowColCoords(o),a=r.length;for(let i=0;i<a;i++)for(let s=0;s<a;s++)i===0&&s===0||i===0&&s===a-1||i===a-1&&s===0||e.push([r[i],r[s]]);return e}})(At);var Ct={};const Zt=P.getSymbolSize,Bt=7;Ct.getPositions=function(t){const n=Zt(t);return[[0,0],[n-Bt,0],[0,n-Bt]]};var Nt={};(function(t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return e!=null&&e!==""&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){const r=e.size;let a=0,i=0,s=0,l=null,c=null;for(let p=0;p<r;p++){i=s=0,l=c=null;for(let A=0;A<r;A++){let h=e.get(p,A);h===l?i++:(i>=5&&(a+=n.N1+(i-5)),l=h,i=1),h=e.get(A,p),h===c?s++:(s>=5&&(a+=n.N1+(s-5)),c=h,s=1)}i>=5&&(a+=n.N1+(i-5)),s>=5&&(a+=n.N1+(s-5))}return a},t.getPenaltyN2=function(e){const r=e.size;let a=0;for(let i=0;i<r-1;i++)for(let s=0;s<r-1;s++){const l=e.get(i,s)+e.get(i,s+1)+e.get(i+1,s)+e.get(i+1,s+1);(l===4||l===0)&&a++}return a*n.N2},t.getPenaltyN3=function(e){const r=e.size;let a=0,i=0,s=0;for(let l=0;l<r;l++){i=s=0;for(let c=0;c<r;c++)i=i<<1&2047|e.get(l,c),c>=10&&(i===1488||i===93)&&a++,s=s<<1&2047|e.get(c,l),c>=10&&(s===1488||s===93)&&a++}return a*n.N3},t.getPenaltyN4=function(e){let r=0;const a=e.data.length;for(let i=0;i<a;i++)r+=e.data[i];return Math.abs(Math.ceil(r*100/a/5)-10)*n.N4};function o(e,r,a){switch(e){case t.Patterns.PATTERN000:return(r+a)%2===0;case t.Patterns.PATTERN001:return r%2===0;case t.Patterns.PATTERN010:return a%3===0;case t.Patterns.PATTERN011:return(r+a)%3===0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(a/3))%2===0;case t.Patterns.PATTERN101:return r*a%2+r*a%3===0;case t.Patterns.PATTERN110:return(r*a%2+r*a%3)%2===0;case t.Patterns.PATTERN111:return(r*a%3+(r+a)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}t.applyMask=function(e,r){const a=r.size;for(let i=0;i<a;i++)for(let s=0;s<a;s++)r.isReserved(s,i)||r.xor(s,i,o(e,s,i))},t.getBestMask=function(e,r){const a=Object.keys(t.Patterns).length;let i=0,s=1/0;for(let l=0;l<a;l++){r(l),t.applyMask(l,e);const c=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(l,e),c<s&&(s=c,i=l)}return i}})(Nt);var W={};const U=Z,X=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],G=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];W.getBlocksCount=function(t,n){switch(n){case U.L:return X[(t-1)*4+0];case U.M:return X[(t-1)*4+1];case U.Q:return X[(t-1)*4+2];case U.H:return X[(t-1)*4+3];default:return}},W.getTotalCodewordsCount=function(t,n){switch(n){case U.L:return G[(t-1)*4+0];case U.M:return G[(t-1)*4+1];case U.Q:return G[(t-1)*4+2];case U.H:return G[(t-1)*4+3];default:return}};var xt={},tt={};const K=new Uint8Array(512),et=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)K[n]=t,et[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)K[n]=K[n-255]})(),tt.log=function(t){if(t<1)throw new Error("log("+t+")");return et[t]},tt.exp=function(t){return K[t]},tt.mul=function(t,n){return t===0||n===0?0:K[et[t]+et[n]]},function(t){const n=tt;t.mul=function(o,e){const r=new Uint8Array(o.length+e.length-1);for(let a=0;a<o.length;a++)for(let i=0;i<e.length;i++)r[a+i]^=n.mul(o[a],e[i]);return r},t.mod=function(o,e){let r=new Uint8Array(o);for(;r.length-e.length>=0;){const a=r[0];for(let s=0;s<e.length;s++)r[s]^=n.mul(e[s],a);let i=0;for(;i<r.length&&r[i]===0;)i++;r=r.slice(i)}return r},t.generateECPolynomial=function(o){let e=new Uint8Array([1]);for(let r=0;r<o;r++)e=t.mul(e,new Uint8Array([1,n.exp(r)]));return e}}(xt);const It=xt;function it(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}it.prototype.initialize=function(t){this.degree=t,this.genPoly=It.generateECPolynomial(this.degree)},it.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const o=It.mod(n,this.genPoly),e=this.degree-o.length;if(e>0){const r=new Uint8Array(this.degree);return r.set(o,e),r}return o};var Wt=it,Pt={},S={},st={};st.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var M={};const Tt="[0-9]+",Xt="[A-Z $%*+\\-./:]+";let Y="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Y=Y.replace(/u/g,"\\u");const Gt="(?:(?![A-Z0-9 $%*+\\-./:]|"+Y+`)(?:.|[\r
]))+`;M.KANJI=new RegExp(Y,"g"),M.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),M.BYTE=new RegExp(Gt,"g"),M.NUMERIC=new RegExp(Tt,"g"),M.ALPHANUMERIC=new RegExp(Xt,"g");const te=new RegExp("^"+Y+"$"),ee=new RegExp("^"+Tt+"$"),ne=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");M.testKanji=function(t){return te.test(t)},M.testNumeric=function(t){return ee.test(t)},M.testAlphanumeric=function(t){return ne.test(t)},function(t){const n=st,o=M;t.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!n.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},t.getBestModeForData=function(r){return o.testNumeric(r)?t.NUMERIC:o.testAlphanumeric(r)?t.ALPHANUMERIC:o.testKanji(r)?t.KANJI:t.BYTE},t.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},t.isValid=function(r){return r&&r.bit&&r.ccBits};function e(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw new Error("Unknown mode: "+r)}}t.from=function(r,a){if(t.isValid(r))return r;try{return e(r)}catch{return a}}}(S),function(t){const n=P,o=W,e=Z,r=S,a=st,i=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,s=n.getBCHDigit(i);function l(h,v,y){for(let u=1;u<=40;u++)if(v<=t.getCapacity(u,y,h))return u}function c(h,v){return r.getCharCountIndicator(h,v)+4}function p(h,v){let y=0;return h.forEach(function(u){const w=c(u.mode,v);y+=w+u.getBitsLength()}),y}function A(h,v){for(let y=1;y<=40;y++)if(p(h,y)<=t.getCapacity(y,v,r.MIXED))return y}t.from=function(h,v){return a.isValid(h)?parseInt(h,10):v},t.getCapacity=function(h,v,y){if(!a.isValid(h))throw new Error("Invalid QR Code version");typeof y>"u"&&(y=r.BYTE);const u=n.getSymbolTotalCodewords(h),w=o.getTotalCodewordsCount(h,v),f=(u-w)*8;if(y===r.MIXED)return f;const d=f-c(y,h);switch(y){case r.NUMERIC:return Math.floor(d/10*3);case r.ALPHANUMERIC:return Math.floor(d/11*2);case r.KANJI:return Math.floor(d/13);case r.BYTE:default:return Math.floor(d/8)}},t.getBestVersionForData=function(h,v){let y;const u=e.from(v,e.M);if(Array.isArray(h)){if(h.length>1)return A(h,u);if(h.length===0)return 1;y=h[0]}else y=h;return l(y.mode,y.getLength(),u)},t.getEncodedBits=function(h){if(!a.isValid(h)||h<7)throw new Error("Invalid QR Code version");let v=h<<12;for(;n.getBCHDigit(v)-s>=0;)v^=i<<n.getBCHDigit(v)-s;return h<<12|v}}(Pt);var Mt={};const lt=P,Rt=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,re=1<<14|1<<12|1<<10|1<<4|1<<1,Lt=lt.getBCHDigit(Rt);Mt.getEncodedBits=function(t,n){const o=t.bit<<3|n;let e=o<<10;for(;lt.getBCHDigit(e)-Lt>=0;)e^=Rt<<lt.getBCHDigit(e)-Lt;return(o<<10|e)^re};var kt={};const oe=S;function D(t){this.mode=oe.NUMERIC,this.data=t.toString()}D.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)},D.prototype.getLength=function(){return this.data.length},D.prototype.getBitsLength=function(){return D.getBitsLength(this.data.length)},D.prototype.write=function(t){let n,o,e;for(n=0;n+3<=this.data.length;n+=3)o=this.data.substr(n,3),e=parseInt(o,10),t.put(e,10);const r=this.data.length-n;r>0&&(o=this.data.substr(n),e=parseInt(o,10),t.put(e,r*3+1))};var ae=D;const ie=S,ut=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function V(t){this.mode=ie.ALPHANUMERIC,this.data=t}V.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)},V.prototype.getLength=function(){return this.data.length},V.prototype.getBitsLength=function(){return V.getBitsLength(this.data.length)},V.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let o=ut.indexOf(this.data[n])*45;o+=ut.indexOf(this.data[n+1]),t.put(o,11)}this.data.length%2&&t.put(ut.indexOf(this.data[n]),6)};var se=V,le=function(t){for(var n=[],o=t.length,e=0;e<o;e++){var r=t.charCodeAt(e);if(r>=55296&&r<=56319&&o>e+1){var a=t.charCodeAt(e+1);a>=56320&&a<=57343&&(r=(r-55296)*1024+a-56320+65536,e+=1)}if(r<128){n.push(r);continue}if(r<2048){n.push(r>>6|192),n.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){n.push(r>>12|224),n.push(r>>6&63|128),n.push(r&63|128);continue}if(r>=65536&&r<=1114111){n.push(r>>18|240),n.push(r>>12&63|128),n.push(r>>6&63|128),n.push(r&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const ue=le,ce=S;function F(t){this.mode=ce.BYTE,typeof t=="string"&&(t=ue(t)),this.data=new Uint8Array(t)}F.getBitsLength=function(t){return t*8},F.prototype.getLength=function(){return this.data.length},F.prototype.getBitsLength=function(){return F.getBitsLength(this.data.length)},F.prototype.write=function(t){for(let n=0,o=this.data.length;n<o;n++)t.put(this.data[n],8)};var fe=F;const he=S,de=P;function z(t){this.mode=he.KANJI,this.data=t}z.getBitsLength=function(t){return t*13},z.prototype.getLength=function(){return this.data.length},z.prototype.getBitsLength=function(){return z.getBitsLength(this.data.length)},z.prototype.write=function(t){let n;for(n=0;n<this.data.length;n++){let o=de.toSJIS(this.data[n]);if(o>=33088&&o<=40956)o-=33088;else if(o>=57408&&o<=60351)o-=49472;else throw new Error("Invalid SJIS character: "+this.data[n]+`
Make sure your charset is UTF-8`);o=(o>>>8&255)*192+(o&255),t.put(o,13)}};var ge=z,ct={},pe={get exports(){return ct},set exports(t){ct=t}};(function(t){var n={single_source_shortest_paths:function(o,e,r){var a={},i={};i[e]=0;var s=n.PriorityQueue.make();s.push(e,0);for(var l,c,p,A,h,v,y,u,w;!s.empty();){l=s.pop(),c=l.value,A=l.cost,h=o[c]||{};for(p in h)h.hasOwnProperty(p)&&(v=h[p],y=A+v,u=i[p],w=typeof i[p]>"u",(w||u>y)&&(i[p]=y,s.push(p,y),a[p]=c))}if(typeof r<"u"&&typeof i[r]>"u"){var f=["Could not find a path from ",e," to ",r,"."].join("");throw new Error(f)}return a},extract_shortest_path_from_predecessor_list:function(o,e){for(var r=[],a=e;a;)r.push(a),o[a],a=o[a];return r.reverse(),r},find_path:function(o,e,r){var a=n.single_source_shortest_paths(o,e,r);return n.extract_shortest_path_from_predecessor_list(a,r)},PriorityQueue:{make:function(o){var e=n.PriorityQueue,r={},a;o=o||{};for(a in e)e.hasOwnProperty(a)&&(r[a]=e[a]);return r.queue=[],r.sorter=o.sorter||e.default_sorter,r},default_sorter:function(o,e){return o.cost-e.cost},push:function(o,e){var r={value:o,cost:e};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};t.exports=n})(pe),function(t){const n=S,o=ae,e=se,r=fe,a=ge,i=M,s=P,l=ct;function c(f){return unescape(encodeURIComponent(f)).length}function p(f,d,g){const m=[];let _;for(;(_=f.exec(g))!==null;)m.push({data:_[0],index:_.index,mode:d,length:_[0].length});return m}function A(f){const d=p(i.NUMERIC,n.NUMERIC,f),g=p(i.ALPHANUMERIC,n.ALPHANUMERIC,f);let m,_;return s.isKanjiModeEnabled()?(m=p(i.BYTE,n.BYTE,f),_=p(i.KANJI,n.KANJI,f)):(m=p(i.BYTE_KANJI,n.BYTE,f),_=[]),d.concat(g,m,_).sort(function(E,x){return E.index-x.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function h(f,d){switch(d){case n.NUMERIC:return o.getBitsLength(f);case n.ALPHANUMERIC:return e.getBitsLength(f);case n.KANJI:return a.getBitsLength(f);case n.BYTE:return r.getBitsLength(f)}}function v(f){return f.reduce(function(d,g){const m=d.length-1>=0?d[d.length-1]:null;return m&&m.mode===g.mode?(d[d.length-1].data+=g.data,d):(d.push(g),d)},[])}function y(f){const d=[];for(let g=0;g<f.length;g++){const m=f[g];switch(m.mode){case n.NUMERIC:d.push([m,{data:m.data,mode:n.ALPHANUMERIC,length:m.length},{data:m.data,mode:n.BYTE,length:m.length}]);break;case n.ALPHANUMERIC:d.push([m,{data:m.data,mode:n.BYTE,length:m.length}]);break;case n.KANJI:d.push([m,{data:m.data,mode:n.BYTE,length:c(m.data)}]);break;case n.BYTE:d.push([{data:m.data,mode:n.BYTE,length:c(m.data)}])}}return d}function u(f,d){const g={},m={start:{}};let _=["start"];for(let E=0;E<f.length;E++){const x=f[E],C=[];for(let q=0;q<x.length;q++){const R=x[q],j=""+E+q;C.push(j),g[j]={node:R,lastCount:0},m[j]={};for(let Et=0;Et<_.length;Et++){const L=_[Et];g[L]&&g[L].node.mode===R.mode?(m[L][j]=h(g[L].lastCount+R.length,R.mode)-h(g[L].lastCount,R.mode),g[L].lastCount+=R.length):(g[L]&&(g[L].lastCount=R.length),m[L][j]=h(R.length,R.mode)+4+n.getCharCountIndicator(R.mode,d))}}_=C}for(let E=0;E<_.length;E++)m[_[E]].end=0;return{map:m,table:g}}function w(f,d){let g;const m=n.getBestModeForData(f);if(g=n.from(d,m),g!==n.BYTE&&g.bit<m.bit)throw new Error('"'+f+'" cannot be encoded with mode '+n.toString(g)+`.
 Suggested mode is: `+n.toString(m));switch(g===n.KANJI&&!s.isKanjiModeEnabled()&&(g=n.BYTE),g){case n.NUMERIC:return new o(f);case n.ALPHANUMERIC:return new e(f);case n.KANJI:return new a(f);case n.BYTE:return new r(f)}}t.fromArray=function(f){return f.reduce(function(d,g){return typeof g=="string"?d.push(w(g,null)):g.data&&d.push(w(g.data,g.mode)),d},[])},t.fromString=function(f,d){const g=A(f,s.isKanjiModeEnabled()),m=y(g),_=u(m,d),E=l.find_path(_.map,"start","end"),x=[];for(let C=1;C<E.length-1;C++)x.push(_.table[E[C]].node);return t.fromArray(v(x))},t.rawSplit=function(f){return t.fromArray(A(f,s.isKanjiModeEnabled()))}}(kt);const nt=P,ft=Z,me=Qt,ye=$t,we=At,ve=Ct,ht=Nt,dt=W,Ee=Wt,rt=Pt,_e=Mt,be=S,gt=kt;function Ae(t,n){const o=t.size,e=ve.getPositions(n);for(let r=0;r<e.length;r++){const a=e[r][0],i=e[r][1];for(let s=-1;s<=7;s++)if(!(a+s<=-1||o<=a+s))for(let l=-1;l<=7;l++)i+l<=-1||o<=i+l||(s>=0&&s<=6&&(l===0||l===6)||l>=0&&l<=6&&(s===0||s===6)||s>=2&&s<=4&&l>=2&&l<=4?t.set(a+s,i+l,!0,!0):t.set(a+s,i+l,!1,!0))}}function Ce(t){const n=t.size;for(let o=8;o<n-8;o++){const e=o%2===0;t.set(o,6,e,!0),t.set(6,o,e,!0)}}function Be(t,n){const o=we.getPositions(n);for(let e=0;e<o.length;e++){const r=o[e][0],a=o[e][1];for(let i=-2;i<=2;i++)for(let s=-2;s<=2;s++)i===-2||i===2||s===-2||s===2||i===0&&s===0?t.set(r+i,a+s,!0,!0):t.set(r+i,a+s,!1,!0)}}function Ne(t,n){const o=t.size,e=rt.getEncodedBits(n);let r,a,i;for(let s=0;s<18;s++)r=Math.floor(s/3),a=s%3+o-8-3,i=(e>>s&1)===1,t.set(r,a,i,!0),t.set(a,r,i,!0)}function pt(t,n,o){const e=t.size,r=_e.getEncodedBits(n,o);let a,i;for(a=0;a<15;a++)i=(r>>a&1)===1,a<6?t.set(a,8,i,!0):a<8?t.set(a+1,8,i,!0):t.set(e-15+a,8,i,!0),a<8?t.set(8,e-a-1,i,!0):a<9?t.set(8,15-a-1+1,i,!0):t.set(8,15-a-1,i,!0);t.set(e-8,8,1,!0)}function xe(t,n){const o=t.size;let e=-1,r=o-1,a=7,i=0;for(let s=o-1;s>0;s-=2)for(s===6&&s--;;){for(let l=0;l<2;l++)if(!t.isReserved(r,s-l)){let c=!1;i<n.length&&(c=(n[i]>>>a&1)===1),t.set(r,s-l,c),a--,a===-1&&(i++,a=7)}if(r+=e,r<0||o<=r){r-=e,e=-e;break}}}function Ie(t,n,o){const e=new me;o.forEach(function(l){e.put(l.mode.bit,4),e.put(l.getLength(),be.getCharCountIndicator(l.mode,t)),l.write(e)});const r=nt.getSymbolTotalCodewords(t),a=dt.getTotalCodewordsCount(t,n),i=(r-a)*8;for(e.getLengthInBits()+4<=i&&e.put(0,4);e.getLengthInBits()%8!==0;)e.putBit(0);const s=(i-e.getLengthInBits())/8;for(let l=0;l<s;l++)e.put(l%2?17:236,8);return Pe(e,t,n)}function Pe(t,n,o){const e=nt.getSymbolTotalCodewords(n),r=dt.getTotalCodewordsCount(n,o),a=e-r,i=dt.getBlocksCount(n,o),s=e%i,l=i-s,c=Math.floor(e/i),p=Math.floor(a/i),A=p+1,h=c-p,v=new Ee(h);let y=0;const u=new Array(i),w=new Array(i);let f=0;const d=new Uint8Array(t.buffer);for(let x=0;x<i;x++){const C=x<l?p:A;u[x]=d.slice(y,y+C),w[x]=v.encode(u[x]),y+=C,f=Math.max(f,C)}const g=new Uint8Array(e);let m=0,_,E;for(_=0;_<f;_++)for(E=0;E<i;E++)_<u[E].length&&(g[m++]=u[E][_]);for(_=0;_<h;_++)for(E=0;E<i;E++)g[m++]=w[E][_];return g}function Te(t,n,o,e){let r;if(Array.isArray(t))r=gt.fromArray(t);else if(typeof t=="string"){let c=n;if(!c){const p=gt.rawSplit(t);c=rt.getBestVersionForData(p,o)}r=gt.fromString(t,c||40)}else throw new Error("Invalid data");const a=rt.getBestVersionForData(r,o);if(!a)throw new Error("The amount of data is too big to be stored in a QR Code");if(!n)n=a;else if(n<a)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+a+`.
`);const i=Ie(n,o,r),s=nt.getSymbolSize(n),l=new ye(s);return Ae(l,n),Ce(l),Be(l,n),pt(l,o,0),n>=7&&Ne(l,n),xe(l,i),isNaN(e)&&(e=ht.getBestMask(l,pt.bind(null,l,o))),ht.applyMask(e,l),pt(l,o,e),{modules:l,version:n,errorCorrectionLevel:o,maskPattern:e,segments:r}}_t.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let o=ft.M,e,r;return typeof n<"u"&&(o=ft.from(n.errorCorrectionLevel,ft.M),e=rt.from(n.version),r=ht.from(n.maskPattern),n.toSJISFunc&&nt.setToSJISFunction(n.toSJISFunc)),Te(t,e,o,r)};var Ut={},mt={};(function(t){function n(o){if(typeof o=="number"&&(o=o.toString()),typeof o!="string")throw new Error("Color should be defined as hex string");let e=o.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+o);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(a){return[a,a]}))),e.length===6&&e.push("F","F");const r=parseInt(e.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+e.slice(0,6).join("")}}t.getOptions=function(o){o||(o={}),o.color||(o.color={});const e=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,r=o.width&&o.width>=21?o.width:void 0,a=o.scale||4;return{width:r,scale:r?4:a,margin:e,color:{dark:n(o.color.dark||"#000000ff"),light:n(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},t.getScale=function(o,e){return e.width&&e.width>=o+e.margin*2?e.width/(o+e.margin*2):e.scale},t.getImageWidth=function(o,e){const r=t.getScale(o,e);return Math.floor((o+e.margin*2)*r)},t.qrToImageData=function(o,e,r){const a=e.modules.size,i=e.modules.data,s=t.getScale(a,r),l=Math.floor((a+r.margin*2)*s),c=r.margin*s,p=[r.color.light,r.color.dark];for(let A=0;A<l;A++)for(let h=0;h<l;h++){let v=(A*l+h)*4,y=r.color.light;if(A>=c&&h>=c&&A<l-c&&h<l-c){const u=Math.floor((A-c)/s),w=Math.floor((h-c)/s);y=p[i[u*a+w]?1:0]}o[v++]=y.r,o[v++]=y.g,o[v++]=y.b,o[v]=y.a}}})(mt),function(t){const n=mt;function o(r,a,i){r.clearRect(0,0,a.width,a.height),a.style||(a.style={}),a.height=i,a.width=i,a.style.height=i+"px",a.style.width=i+"px"}function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}t.render=function(r,a,i){let s=i,l=a;typeof s>"u"&&(!a||!a.getContext)&&(s=a,a=void 0),a||(l=e()),s=n.getOptions(s);const c=n.getImageWidth(r.modules.size,s),p=l.getContext("2d"),A=p.createImageData(c,c);return n.qrToImageData(A.data,r,s),o(p,l,c),p.putImageData(A,0,0),l},t.renderToDataURL=function(r,a,i){let s=i;typeof s>"u"&&(!a||!a.getContext)&&(s=a,a=void 0),s||(s={});const l=t.render(r,a,s),c=s.type||"image/png",p=s.rendererOpts||{};return l.toDataURL(c,p.quality)}}(Ut);var St={};const Me=mt;function Dt(t,n){const o=t.a/255,e=n+'="'+t.hex+'"';return o<1?e+" "+n+'-opacity="'+o.toFixed(2).slice(1)+'"':e}function yt(t,n,o){let e=t+n;return typeof o<"u"&&(e+=" "+o),e}function Re(t,n,o){let e="",r=0,a=!1,i=0;for(let s=0;s<t.length;s++){const l=Math.floor(s%n),c=Math.floor(s/n);!l&&!a&&(a=!0),t[s]?(i++,s>0&&l>0&&t[s-1]||(e+=a?yt("M",l+o,.5+c+o):yt("m",r,0),r=0,a=!1),l+1<n&&t[s+1]||(e+=yt("h",i),i=0)):r++}return e}St.render=function(t,n,o){const e=Me.getOptions(n),r=t.modules.size,a=t.modules.data,i=r+e.margin*2,s=e.color.light.a?"<path "+Dt(e.color.light,"fill")+' d="M0 0h'+i+"v"+i+'H0z"/>':"",l="<path "+Dt(e.color.dark,"stroke")+' d="'+Re(a,r,e.margin)+'"/>',c='viewBox="0 0 '+i+" "+i+'"',p='<svg xmlns="http://www.w3.org/2000/svg" '+(e.width?'width="'+e.width+'" height="'+e.width+'" ':"")+c+' shape-rendering="crispEdges">'+s+l+`</svg>
`;return typeof o=="function"&&o(null,p),p};const Le=jt,wt=_t,Vt=Ut,ke=St;function vt(t,n,o,e,r){const a=[].slice.call(arguments,1),i=a.length,s=typeof a[i-1]=="function";if(!s&&!Le())throw new Error("Callback required as last argument");if(s){if(i<2)throw new Error("Too few arguments provided");i===2?(r=o,o=n,n=e=void 0):i===3&&(n.getContext&&typeof r>"u"?(r=e,e=void 0):(r=e,e=o,o=n,n=void 0))}else{if(i<1)throw new Error("Too few arguments provided");return i===1?(o=n,n=e=void 0):i===2&&!n.getContext&&(e=o,o=n,n=void 0),new Promise(function(l,c){try{const p=wt.create(o,e);l(t(p,n,e))}catch(p){c(p)}})}try{const l=wt.create(o,e);r(null,t(l,n,e))}catch(l){r(l)}}H.create=wt.create,H.toCanvas=vt.bind(null,Vt.render),H.toDataURL=vt.bind(null,Vt.renderToDataURL),H.toString=vt.bind(null,function(t,n,o){return ke.render(t,o)});const Ft=t=>(bn("data-v-4ee52099"),t=t(),An(),t),Ue={class:"w-full h-full bg-page flex items-center justify-center"},Se={class:"flex bg-white"},De={class:"flex flex-col items-center w-[330px] py-[100px] border-r"},Ve=Ft(()=>I("div",{class:"title font-bold text-xl"},"\u6253\u5F00\u624B\u673A\u5FAE\u4FE1",-1)),Fe=Ft(()=>I("div",{class:"tips text-sm mt-[5px]"},"\u70B9\u51FB\u53F3\u4E0A\u89D2\u6253\u5F00\u626B\u4E00\u626B",-1)),ze={class:"qrcode p-[10px] mt-[30px] border h-[120px] leading-none box-content"},He={class:"relative"},Je={key:0,class:"flex flex-col justify-center items-center absolute inset-0 bg-gray-50"},Ke={class:"text-xs text-gray-600"},Ye={class:"bg-white w-[380px] p-[30px]"},qe={class:"flex items-end my-[30px]"},je=["onClick"],Oe={class:"flex justify-between leading-none"},Qe={key:0,class:"text-xs py-[50rpx] flex justify-center w-full"},$e={class:"text-primary"},Ze={class:"text-primary"},We=hn({__name:"login",setup(t){const n=u=>{Cn({key:u}).then(w=>{let f=w.data;switch(f.status){case"wait":setTimeout(()=>{n(o.value.key)},1e3);break;case"success":f.login_data.token?(r.setToken(f.login_data.token),Yt().handleLoginBack()):(Bn("openId").value=f.login_data.openid,Nn("/auth/bind"));break;case"fail":o.value.pastDueContent=f.fail_reason,o.value.pastDue=!0;break}}).catch(w=>{o.value.pastDue=!0,o.value.pastDueContent=w.msg})},o=O({url:"",key:"",pastDue:!1,pastDueContent:"\u4E8C\u7EF4\u7801\u751F\u6210\u5931\u8D25"}),e=async()=>{let u=await(await wn()).data;o.value.key=u.key,H.toDataURL(u.url,{errorCorrectionLevel:"L",margin:0,width:100}).then(w=>{o.value.url=w}),o.value.pastDue=!1,setTimeout(()=>{n(o.value.key)},1e3)};e();const r=dn(),a=gn();a.getLoginConfig();const i=zt(()=>{const u=[];return a.login.is_username&&u.push({type:"username",title:B("usernameLogin")}),a.login.is_mobile&&u.push({type:"mobile",title:B("mobileLogin")}),l.value=u[0]?u[0].type:"",u}),s=O(!1),l=O(""),c=pn({username:"",password:"",mobile:"",mobile_code:"",mobile_key:""}),p=O(),A=zt(()=>({username:{required:l.value=="username",message:B("usernamePlaceholder"),trigger:["blur","change"]},password:{required:l.value=="username",message:B("passwordPlaceholder"),trigger:["blur","change"]},mobile:[{required:l.value=="mobile",message:B("mobilePlaceholder"),trigger:["blur","change"]},{validator(u,w,f){return l.value!="mobile"?!0:tn.mobile(w)},message:B("mobileError"),trigger:["blur"]}],mobile_code:{required:l.value=="mobile",message:B("codePlaceholder"),trigger:["change"]}})),h=async()=>{var u;await((u=p.value)==null?void 0:u.validate(async(w,f)=>{if(w){if(s.value)return;s.value=!0,(l.value=="username"?vn:En)(c).then(async d=>{await r.setToken(d.data.token),Yt().handleLoginBack()}).catch(()=>{s.value=!1})}}))},v=O(null),y=async()=>{var u;await((u=p.value)==null?void 0:u.validateField("mobile",async(w,f)=>{var d;w&&((d=v.value)==null||d.send())}))};return(u,w)=>{const f=Xe,d=nn,g=on,m=Ge,_=ln,E=cn,x=an;return Q(),$("div",Ue,[I("div",Se,[I("div",De,[Ve,Fe,I("div",ze,[I("div",He,[N(f,{src:o.value.url,class:"w-[120px]"},null,8,["src"]),o.value.pastDue?(Q(),$("div",Je,[I("span",Ke,k(o.value.pastDueContent),1),I("span",{onClick:w[0]||(w[0]=C=>e()),class:"text-xs cursor-pointer text-color mt-2"},"\u70B9\u51FB\u5237\u65B0")])):Ht("",!0)])])]),I("div",Ye,[I("div",qe,[(Q(!0),$(mn,null,yn(b(i),C=>(Q(),$("div",{class:_n(["mr-[20px] text-base cursor-pointer leading-none",{"font-bold":l.value==C.type}]),onClick:q=>l.value=C.type},k(C.title),11,je))),256))]),N(x,{model:b(c),ref_key:"formRef",ref:p,rules:b(A),"validate-on-rule-change":!1},{default:T(()=>[Jt(I("div",null,[N(g,{prop:"username"},{default:T(()=>[N(d,{modelValue:b(c).username,"onUpdate:modelValue":w[1]||(w[1]=C=>b(c).username=C),placeholder:("t"in u?u.t:b(B))("usernamePlaceholder"),clearable:"","inline-message":!0},null,8,["modelValue","placeholder"])]),_:1}),N(g,{prop:"password"},{default:T(()=>[N(d,{modelValue:b(c).password,"onUpdate:modelValue":w[2]||(w[2]=C=>b(c).password=C),placeholder:("t"in u?u.t:b(B))("passwordPlaceholder"),type:"password",clearable:"","show-password":!0},null,8,["modelValue","placeholder"])]),_:1})],512),[[Kt,l.value=="username"]]),Jt(I("div",null,[N(g,{prop:"mobile"},{default:T(()=>[N(d,{modelValue:b(c).mobile,"onUpdate:modelValue":w[3]||(w[3]=C=>b(c).mobile=C),placeholder:("t"in u?u.t:b(B))("mobilePlaceholder"),clearable:""},null,8,["modelValue","placeholder"])]),_:1}),N(g,{prop:"mobile_code"},{default:T(()=>[N(d,{modelValue:b(c).mobile_code,"onUpdate:modelValue":w[5]||(w[5]=C=>b(c).mobile_code=C),placeholder:("t"in u?u.t:b(B))("codePlaceholder")},{suffix:T(()=>[N(m,{mobile:b(c).mobile,type:"login",modelValue:b(c).mobile_key,"onUpdate:modelValue":w[4]||(w[4]=C=>b(c).mobile_key=C),onClick:y,ref_key:"smsCodeRef",ref:v},null,8,["mobile","modelValue"])]),_:1},8,["modelValue","placeholder"])]),_:1})],512),[[Kt,l.value=="mobile"]]),I("div",Oe,[N(E,{to:"/auth/register"},{default:T(()=>[N(_,{type:"primary",link:""},{default:T(()=>[ot(k(("t"in u?u.t:b(B))("noAccount"))+"\uFF0C"+k(("t"in u?u.t:b(B))("toRegister")),1)]),_:1})]),_:1})]),N(g,null,{default:T(()=>[N(_,{type:"primary",class:"mt-[20px] w-full",size:"large",onClick:h,loading:s.value},{default:T(()=>[ot(k(s.value?("t"in u?u.t:b(B))("logining"):("t"in u?u.t:b(B))("login")),1)]),_:1},8,["loading"])]),_:1}),b(a).login.agreement_show?(Q(),$("div",Qe,[ot(k(("t"in u?u.t:b(B))("agreeTips"))+" ",1),N(E,{to:"/auth/agreement?key=service"},{default:T(()=>[I("span",$e,k(("t"in u?u.t:b(B))("userAgreement")),1)]),_:1}),ot(" "+k(("t"in u?u.t:b(B))("and"))+" ",1),N(E,{to:"/auth/agreement?key=privacy"},{default:T(()=>[I("span",Ze,k(("t"in u?u.t:b(B))("privacyAgreement")),1)]),_:1})])):Ht("",!0)]),_:1},8,["model","rules"])])])])}}});qt=Pn(We,[["__scopeId","data-v-4ee52099"]])});export{Sn as __tla,qt as default};
