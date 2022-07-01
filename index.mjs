// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function m(h){var p,j,f,a,g,u,c,v,b;if(!n(h))throw new TypeError(l("00k2a",h));if(a={iter:1e308,dir:1},arguments.length>1)if(i(arguments[1])){if(j=arguments[1],arguments.length>2){if(!r(c=arguments[2]))throw new TypeError(l("00k2n",c));p=arguments[3]}if(t(j,"iter")&&(a.iter=j.iter,!s(j.iter)))throw new TypeError(l("00k35","iter",j.iter));if(t(j,"dir")&&(a.dir=j.dir,1!==j.dir&&-1!==j.dir))throw new TypeError(l("00k37","dir",j.dir))}else{if(!r(c=arguments[1]))throw new TypeError(l("00k38",c));p=arguments[2]}return f=0,g={},c?1===a.dir?(b=-1,e(g,"next",x)):(b=h.length,e(g,"next",w)):1===a.dir?(b=-1,e(g,"next",y)):(b=h.length,e(g,"next",k)),e(g,"return",E),o&&e(g,o,T),v=d(h).getter,g;function x(){return b=(b+1)%h.length,f+=1,u||f>a.iter||0===h.length?{done:!0}:{value:c.call(p,v(h,b),b,f,h),done:!1}}function w(){return(b-=1)<0&&(b+=h.length),f+=1,u||f>a.iter||0===h.length?{done:!0}:{value:c.call(p,v(h,b),b,f,h),done:!1}}function y(){return b=(b+1)%h.length,f+=1,u||f>a.iter||0===h.length?{done:!0}:{value:v(h,b),done:!1}}function k(){return(b-=1)<0&&(b+=h.length),f+=1,u||f>a.iter||0===h.length?{done:!0}:{value:v(h,b),done:!1}}function E(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function T(){return c?m(h,a,c,p):m(h,a)}}export{m as default};
//# sourceMappingURL=index.mjs.map
