import{aL as p,bD as O,ba as y,b$ as x}from"./entry.539d3b49.js";import{t as v,j as w,v as m,w as P,p as u}from"./el-input.60ea0dae.js";var i=Object.create,b=function(){function e(){}return function(n){if(!p(n))return{};if(i)return i(n);e.prototype=n;var r=new e;return e.prototype=void 0,r}}();const A=b;function M(e,n){var r=-1,t=e.length;for(n||(n=Array(t));++r<t;)n[r]=e[r];return n}function N(e,n,r,t){var g=!r;r||(r={});for(var a=-1,h=n.length;++a<h;){var o=n[a],s=t?t(r[o],e[o],o,r,e):void 0;s===void 0&&(s=e[o]),g?O(r,o,s):y(r,o,s)}return r}function C(e){var n=[];if(e!=null)for(var r in Object(e))n.push(r);return n}var L=Object.prototype,I=L.hasOwnProperty;function K(e){if(!p(e))return C(e);var n=v(e),r=[];for(var t in e)t=="constructor"&&(n||!I.call(e,t))||r.push(t);return r}function q(e){return w(e)?m(e,!0):K(e)}var T=P(Object.getPrototypeOf,Object);const U=T;var d=typeof exports=="object"&&exports&&!exports.nodeType&&exports,f=d&&typeof module=="object"&&module&&!module.nodeType&&module,$=f&&f.exports===d,l=$?x.Buffer:void 0,c=l?l.allocUnsafe:void 0;function F(e,n){if(n)return e.slice();var r=e.length,t=c?c(r):new e.constructor(r);return e.copy(t),t}function B(e){var n=new e.constructor(e.byteLength);return new u(n).set(new u(e)),n}function G(e,n){var r=n?B(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}function H(e){return typeof e.constructor=="function"&&!v(e)?A(U(e)):{}}export{B as a,G as b,N as c,M as d,F as e,U as g,H as i,q as k};
