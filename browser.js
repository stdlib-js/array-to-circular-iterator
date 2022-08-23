// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).circarray2iterator=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||f.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,e,r.get),p&&u&&u.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=Object.prototype.hasOwnProperty;function p(t,e){return null!=t&&y.call(t,e)}var s=/./;function b(t){return"boolean"==typeof t}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return d&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var h="function"==typeof Symbol?Symbol.toStringTag:"";var m=v()?function(t){var e,r,n;if(null==t)return g.call(t);r=t[h],e=p(t,h);try{t[h]=void 0}catch(e){return g.call(t)}return n=g.call(t),e?t[h]=r:delete t[h],n}:function(t){return g.call(t)},j=Boolean.prototype.toString;var w=v();function _(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function O(t){return b(t)||_(t)}function S(){return new Function("return this;")()}a(O,"isPrimitive",b),a(O,"isObject",_);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof P?P:null;var A=function(t){if(arguments.length){if(!b(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(T)return T;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),x=A.document&&A.document.childNodes,N=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(k,"REGEXP",B);var F=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function V(t){return null!==t&&"object"==typeof t}function C(t){var e,r,n,o;if(("Object"===(r=m(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=B.exec(n.toString()))return e[1]}return V(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(V,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!F(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(V));var G="function"==typeof s||"object"==typeof N||"function"==typeof x?function(t){return C(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?C(t).toLowerCase():e};function L(t){return"function"===G(t)}var M=Math.floor;function R(t){return M(t)===t}function U(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&R(t.length)&&t.length>=0&&t.length<=9007199254740991}var Y,X=Object.getPrototypeOf;Y=L(Object.getPrototypeOf)?X:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var q=Y;var z=Object.prototype;function D(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!F(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),q(t))}(t),!e||!p(t,"constructor")&&p(e,"constructor")&&L(e.constructor)&&"[object Function]"===m(e.constructor)&&p(e,"isPrototypeOf")&&L(e.isPrototypeOf)&&(e===z||function(t){var e;for(e in t)if(!p(t,e))return!1;return!0}(t)))}function H(t){return"number"==typeof t}var J=Number,K=J.prototype.toString;var Q=v();function W(t){return"object"==typeof t&&(t instanceof J||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function Z(t){return H(t)||W(t)}a(Z,"isPrimitive",H),a(Z,"isObject",W);var $=Number.POSITIVE_INFINITY,tt=J.NEGATIVE_INFINITY;function et(t){return t<$&&t>tt&&R(t)}function rt(t){return H(t)&&et(t)}function nt(t){return W(t)&&et(t.valueOf())}function ot(t){return rt(t)||nt(t)}function it(t){return rt(t)&&t>=0}function ut(t){return nt(t)&&t.valueOf()>=0}function ct(t){return it(t)||ut(t)}a(ot,"isPrimitive",rt),a(ot,"isObject",nt),a(ct,"isPrimitive",it),a(ct,"isObject",ut);var ft="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function lt(t,e){return t[e]}function at(t,e){return t.get(e)}function yt(t,e,r){t[e]=r}function pt(t,e,r){t.set(r,e)}function st(t){var e=Boolean(t.get&&t.set);return{data:t,accessors:e,getter:e?at:lt,setter:e?pt:yt}}function bt(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}return function t(e){var r,n,o,i,u,c,f,l,y;if(!U(e))throw new TypeError(bt("00k2a",e));if(i={iter:1e308,dir:1},arguments.length>1)if(D(arguments[1])){if(n=arguments[1],arguments.length>2){if(!L(f=arguments[2]))throw new TypeError(bt("00k2n",f));r=arguments[3]}if(p(n,"iter")&&(i.iter=n.iter,!it(n.iter)))throw new TypeError(bt("00k35","iter",n.iter));if(p(n,"dir")&&(i.dir=n.dir,1!==n.dir&&-1!==n.dir))throw new TypeError(bt("00k37","dir",n.dir))}else{if(!L(f=arguments[1]))throw new TypeError(bt("00k38",f));r=arguments[2]}return o=0,u={},f?1===i.dir?(y=-1,a(u,"next",s)):(y=e.length,a(u,"next",b)):1===i.dir?(y=-1,a(u,"next",d)):(y=e.length,a(u,"next",v)),a(u,"return",g),ft&&a(u,ft,h),l=st(e).getter,u;function s(){return y=(y+1)%e.length,o+=1,c||o>i.iter||0===e.length?{done:!0}:{value:f.call(r,l(e,y),y,o,e),done:!1}}function b(){return(y-=1)<0&&(y+=e.length),o+=1,c||o>i.iter||0===e.length?{done:!0}:{value:f.call(r,l(e,y),y,o,e),done:!1}}function d(){return y=(y+1)%e.length,o+=1,c||o>i.iter||0===e.length?{done:!0}:{value:l(e,y),done:!1}}function v(){return(y-=1)<0&&(y+=e.length),o+=1,c||o>i.iter||0===e.length?{done:!0}:{value:l(e,y),done:!1}}function g(t){return c=!0,arguments.length?{value:t,done:!0}:{done:!0}}function h(){return f?t(e,i,f,r):t(e,i)}}}));
//# sourceMappingURL=browser.js.map