import{cA as g,cB as m}from"./index-9d601459.js";var u=1/0,I=17976931348623157e292;function o(n){if(!n)return n===0?n:0;if(n=g(n),n===u||n===-u){var r=n<0?-1:1;return r*I}return n===n?n:0}var h=Math.ceil,x=Math.max;function M(n,r,i,e){for(var a=-1,f=x(h((r-n)/(i||1)),0),c=Array(f);f--;)c[e?f:++a]=n,n+=i;return c}function N(n){return function(r,i,e){return e&&typeof e!="number"&&m(r,i,e)&&(i=e=void 0),r=o(r),i===void 0?(i=r,r=0):i=o(i),e=e===void 0?r<i?1:-1:o(e),M(r,i,e,n)}}var b=N();const R=b;export{R as r};
