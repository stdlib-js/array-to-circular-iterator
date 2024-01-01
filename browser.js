// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(e){var r,n,u;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===e.specifier||10!==r)&&(u=4294967295+u+1),u<0?(n=(-u).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=u.toString(r),u||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(e){return"string"==typeof e}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,d=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":l(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=y.call(n,d,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),e.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===s.call(e.specifier)?s.call(n):c.call(n)}function E(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function A(e,r,t){var n=r-e.length;return n<0?e:e=t?e+E(n):E(n)+e}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,o,a,l,c,s,y;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(l="",c=1,s=0;s<e.length;s++)if(f(n=e[s]))l+=n;else{if(r=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function S(e){var r,t,n,i;for(t=[],i=0,n=k.exec(e);n;)(r=e.slice(i,k.lastIndex-n[0].length)).length&&t.push(r),t.push(L(n)),i=k.lastIndex,n=k.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function R(e){return"string"==typeof e}function B(e){var r,t,n;if(!R(e))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=S(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return V.apply(null,t)}var O,I=Object.prototype,C=I.toString,F=I.__defineGetter__,M=I.__defineSetter__,U=I.__lookupGetter__,P=I.__lookupSetter__;O=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(e,r)||P.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(e,r,t.get),a&&M&&M.call(e,r,t.set),e};var N=O;function Y(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=Object.prototype.hasOwnProperty;function $(e,r){return null!=e&&W.call(e,r)}var G=/./;function Z(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function J(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,q="function"==typeof Symbol?Symbol:void 0,D="function"==typeof q?q.toStringTag:"",H=J()?function(e){var r,t,n;if(null==e)return z.call(e);t=e[D],r=$(e,D);try{e[D]=void 0}catch(r){return z.call(e)}return n=z.call(e),r?e[D]=t:delete e[D],n}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString,ee=J();function re(e){return"object"==typeof e&&(e instanceof K||(ee?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===H(e)))}function te(e){return Z(e)||re(e)}function ne(){return new Function("return this;")()}Y(te,"isPrimitive",Z),Y(te,"isObject",re);var ie="object"==typeof self?self:null,oe="object"==typeof window?window:null,ae="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!Z(e))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ne()}if(ae)return ae;if(ie)return ie;if(oe)return oe;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=ue.document&&ue.document.childNodes,le=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;Y(ce,"REGEXP",se);var ye=Array.isArray?Array.isArray:function(e){return"[object Array]"===H(e)};function he(e){return null!==e&&"object"==typeof e}function pe(e){return he(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function ge(e){var r,t,n;if(("Object"===(t=H(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return pe(e)?"Buffer":t}Y(he,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ye(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(he));var me="function"==typeof G||"object"==typeof le||"function"==typeof fe?function(e){return ge(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ge(e).toLowerCase():r};function we(e){return"function"===me(e)}var be=Math.floor;function de(e){return be(e)===e}function ve(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&de(e.length)&&e.length>=0&&e.length<=9007199254740991}function Ee(e){return"object"==typeof e&&null!==e&&!ye(e)}var Ae,Te=Object,_e=Object.getPrototypeOf;Ae=we(Object.getPrototypeOf)?_e:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===H(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var xe=Ae,je=Object.prototype;function Ve(e){var r;return!!Ee(e)&&(r=function(e){return null==e?null:(e=Te(e),xe(e))}(e),!r||!$(e,"constructor")&&$(r,"constructor")&&we(r.constructor)&&"[object Function]"===H(r.constructor)&&$(r,"isPrototypeOf")&&we(r.isPrototypeOf)&&(r===je||function(e){var r;for(r in e)if(!$(e,r))return!1;return!0}(e)))}function ke(e){return"number"==typeof e}var Le=Number,Se=Le.prototype.toString,Re=J();function Be(e){return"object"==typeof e&&(e instanceof Le||(Re?function(e){try{return Se.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function Oe(e){return ke(e)||Be(e)}Y(Oe,"isPrimitive",ke),Y(Oe,"isObject",Be);var Ie=Number.POSITIVE_INFINITY,Ce=Le.NEGATIVE_INFINITY;function Fe(e){return e<Ie&&e>Ce&&de(e)}function Me(e){return ke(e)&&Fe(e)}function Ue(e){return Be(e)&&Fe(e.valueOf())}function Pe(e){return Me(e)||Ue(e)}function Ne(e){return Me(e)&&e>=0}function Ye(e){return Ue(e)&&e.valueOf()>=0}function We(e){return Ne(e)||Ye(e)}Y(Pe,"isPrimitive",Me),Y(Pe,"isObject",Ue),Y(We,"isPrimitive",Ne),Y(We,"isObject",Ye);var $e="function";function Ge(e){return typeof e.get===$e&&typeof e.set===$e}function Ze(){return"function"==typeof q&&"symbol"==typeof q("foo")&&$(q,"iterator")&&"symbol"==typeof q.iterator}var Xe=Ze()?Symbol.iterator:null,Je={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function ze(e){var r=Je[e];return"function"==typeof r?r:Je.default}var qe={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function De(e){var r=qe[e];return"function"==typeof r?r:qe.default}var He={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Ke="function"==typeof Float64Array,Qe="function"==typeof Float64Array?Float64Array:null,er="function"==typeof Float64Array?Float64Array:void 0,rr=function(){var e,r,t;if("function"!=typeof Qe)return!1;try{r=new Qe([1,3.14,-3.14,NaN]),t=r,e=(Ke&&t instanceof Float64Array||"[object Float64Array]"===H(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?er:function(){throw new Error("not implemented")},tr="function"==typeof Float32Array,nr="function"==typeof Float32Array?Float32Array:null,ir="function"==typeof Float32Array?Float32Array:void 0,or=function(){var e,r,t;if("function"!=typeof nr)return!1;try{r=new nr([1,3.14,-3.14,5e40]),t=r,e=(tr&&t instanceof Float32Array||"[object Float32Array]"===H(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===Ie}catch(r){e=!1}return e}()?ir:function(){throw new Error("not implemented")},ar="function"==typeof Uint32Array,ur="function"==typeof Uint32Array?Uint32Array:null,fr="function"==typeof Uint32Array?Uint32Array:void 0,lr=function(){var e,r,t;if("function"!=typeof ur)return!1;try{r=new ur(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ar&&t instanceof Uint32Array||"[object Uint32Array]"===H(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?fr:function(){throw new Error("not implemented")},cr="function"==typeof Int32Array,sr="function"==typeof Int32Array?Int32Array:null,yr="function"==typeof Int32Array?Int32Array:void 0,hr=function(){var e,r,t;if("function"!=typeof sr)return!1;try{r=new sr([1,3.14,-3.14,2147483648]),t=r,e=(cr&&t instanceof Int32Array||"[object Int32Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?yr:function(){throw new Error("not implemented")},pr="function"==typeof Uint16Array,gr="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0,wr=function(){var e,r,t;if("function"!=typeof gr)return!1;try{r=new gr(r=[1,3.14,-3.14,65536,65537]),t=r,e=(pr&&t instanceof Uint16Array||"[object Uint16Array]"===H(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?mr:function(){throw new Error("not implemented")},br="function"==typeof Int16Array,dr="function"==typeof Int16Array?Int16Array:null,vr="function"==typeof Int16Array?Int16Array:void 0,Er=function(){var e,r,t;if("function"!=typeof dr)return!1;try{r=new dr([1,3.14,-3.14,32768]),t=r,e=(br&&t instanceof Int16Array||"[object Int16Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?vr:function(){throw new Error("not implemented")},Ar="function"==typeof Uint8Array,Tr="function"==typeof Uint8Array?Uint8Array:null,_r="function"==typeof Uint8Array?Uint8Array:void 0,xr=function(){var e,r,t;if("function"!=typeof Tr)return!1;try{r=new Tr(r=[1,3.14,-3.14,256,257]),t=r,e=(Ar&&t instanceof Uint8Array||"[object Uint8Array]"===H(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?_r:function(){throw new Error("not implemented")},jr="function"==typeof Uint8ClampedArray,Vr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,kr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Lr=function(){var e,r,t;if("function"!=typeof Vr)return!1;try{r=new Vr([-1,0,1,3.14,4.99,255,256]),t=r,e=(jr&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===H(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?kr:function(){throw new Error("not implemented")},Sr="function"==typeof Int8Array,Rr="function"==typeof Int8Array?Int8Array:null,Br="function"==typeof Int8Array?Int8Array:void 0,Or=function(){var e,r,t;if("function"!=typeof Rr)return!1;try{r=new Rr([1,3.14,-3.14,128]),t=r,e=(Sr&&t instanceof Int8Array||"[object Int8Array]"===H(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Br:function(){throw new Error("not implemented")};function Ir(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&de(e.length)&&e.length>=0&&e.length<=4294967295}var Cr="function"==typeof ArrayBuffer;function Fr(e){return Cr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===H(e)}function Mr(e,r){if(!(this instanceof Mr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ke(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ke(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}Y(Mr,"BYTES_PER_ELEMENT",8),Y(Mr.prototype,"BYTES_PER_ELEMENT",8),Y(Mr.prototype,"byteLength",16),Y(Mr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Mr.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Ur="function"==typeof Math.fround?Math.fround:null,Pr=new or(1),Nr="function"==typeof Ur?Ur:function(e){return Pr[0]=e,Pr[0]};function Yr(e,r){if(!(this instanceof Yr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!ke(e))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",e));if(!ke(r))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return N(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Nr(e)}),N(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Nr(r)}),this}function Wr(e){return e instanceof Mr||e instanceof Yr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function $r(e){return de(e/2)}function Gr(e,r,t){N(e,r,{configurable:!1,enumerable:!1,get:t})}function Zr(e){return e.re}function Xr(e){return e.im}function Jr(e,r){return new or(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function zr(e,r){return new rr(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function qr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Ir(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Wr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(Zr(n),Xr(n))}return r}function Dr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Ir(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Wr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Zr(o),Xr(o))}return n}function Hr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Wr(n=r[i]))return null;e[o]=Zr(n),e[o+1]=Xr(n),o+=2}return e}Y(Yr,"BYTES_PER_ELEMENT",4),Y(Yr.prototype,"BYTES_PER_ELEMENT",4),Y(Yr.prototype,"byteLength",8),Y(Yr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),Y(Yr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Kr=2*or.BYTES_PER_ELEMENT,Qr=Ze();function et(e){return e instanceof it||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function rt(e){return e===it||"Complex128Array"===e.name}function tt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Kr}function nt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Kr}function it(){var e,r,t,n;if(r=arguments.length,!(this instanceof it))return 0===r?new it:1===r?new it(arguments[0]):2===r?new it(arguments[0],arguments[1]):new it(arguments[0],arguments[1],arguments[2]);if(0===r)t=new or(0);else if(1===r)if(Ne(arguments[0]))t=new or(2*arguments[0]);else if(ve(arguments[0]))if((n=(t=arguments[0]).length)&&ye(t)&&Wr(t[0])){if(null===(t=Hr(new or(2*n),t))){if(!$r(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new or(arguments[0])}}else{if(tt(t))t=Jr(t,0);else if(nt(t))t=zr(t,0);else if(!$r(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new or(t)}else if(Fr(arguments[0])){if(!de((t=arguments[0]).byteLength/Kr))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Kr,t.byteLength));t=new or(t)}else{if(!Ee(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===Qr)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!we(t[Xe]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!we((t=t[Xe]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=qr(t))instanceof Error)throw t;t=new or(t)}else{if(!Fr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Ne(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!de(e/Kr))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Kr,e));if(2===r){if(!de((n=t.byteLength-e)/Kr))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Kr,n));t=new or(t,e)}else{if(!Ne(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Kr>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Kr));t=new or(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function ot(e){return e.re}function at(e){return e.im}function ut(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Ir(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Wr(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(ot(n),at(n))}return r}function ft(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,Ir(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Wr(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ot(o),at(o))}return n}function lt(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Wr(n=r[i]))return null;e[o]=ot(n),e[o+1]=at(n),o+=2}return e}Y(it,"BYTES_PER_ELEMENT",Kr),Y(it,"name","Complex64Array"),Y(it,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!rt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!we(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(et(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Wr(c=n.call(r,e.get(s),s)))o[y]=Zr(c),o[y+1]=Xr(c);else{if(!(Ir(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ve(e)){if(n){for(f=e.length,u=e.get&&e.set?ze("default"):De("default"),s=0;s<f;s++)if(!Wr(u(e,s))){l=!0;break}if(l){if(!$r(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Wr(c=n.call(r,u(e,s),s)))o[y]=Zr(c),o[y+1]=Xr(c);else{if(!(Ir(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Ee(e)&&Qr&&we(e[Xe])){if(!we((o=e[Xe]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Dr(o,n,r):qr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(it,"of",(function(){var e,r;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!rt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Gr(it.prototype,"buffer",(function(){return this._buffer.buffer})),Gr(it.prototype,"byteLength",(function(){return this._buffer.byteLength})),Gr(it.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(it.prototype,"BYTES_PER_ELEMENT",it.BYTES_PER_ELEMENT),Y(it.prototype,"copyWithin",(function(e,r){if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(it.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Yr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Xe&&Y(t,Xe,(function(){return r.entries()})),t})),Y(it.prototype,"get",(function(e){var r;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ne(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Yr((r=this._buffer)[e*=2],r[e+1])})),Gr(it.prototype,"length",(function(){return this._length})),Y(it.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!et(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ne(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Wr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Zr(e),void(n[t+1]=Xr(e))}if(et(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Kr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new or(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ve(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Wr(e[f])){o=!0;break}if(o){if(!$r(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Kr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new or(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Zr(u),n[t+1]=Xr(u),t+=2}}));var ct=2*rr.BYTES_PER_ELEMENT,st=Ze();function yt(e){return e instanceof mt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function ht(e){return e===mt||"Complex64Array"===e.name}function pt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ct/2}function gt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===ct}function mt(){var e,r,t,n;if(r=arguments.length,!(this instanceof mt))return 0===r?new mt:1===r?new mt(arguments[0]):2===r?new mt(arguments[0],arguments[1]):new mt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new rr(0);else if(1===r)if(Ne(arguments[0]))t=new rr(2*arguments[0]);else if(ve(arguments[0]))if((n=(t=arguments[0]).length)&&ye(t)&&Wr(t[0])){if(null===(t=lt(new rr(2*n),t))){if(!$r(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new rr(arguments[0])}}else{if(pt(t))t=Jr(t,0);else if(gt(t))t=zr(t,0);else if(!$r(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new rr(t)}else if(Fr(arguments[0])){if(!de((t=arguments[0]).byteLength/ct))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ct,t.byteLength));t=new rr(t)}else{if(!Ee(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===st)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!we(t[Xe]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!we((t=t[Xe]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=ut(t))instanceof Error)throw t;t=new rr(t)}else{if(!Fr(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!Ne(e=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!de(e/ct))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ct,e));if(2===r){if(!de((n=t.byteLength-e)/ct))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ct,n));t=new rr(t,e)}else{if(!Ne(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ct>t.byteLength-e)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ct));t=new rr(t,e,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(mt,"BYTES_PER_ELEMENT",ct),Y(mt,"name","Complex128Array"),Y(mt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!we(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(yt(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Wr(c=n.call(r,e.get(s),s)))o[y]=ot(c),o[y+1]=at(c);else{if(!(Ir(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(ve(e)){if(n){for(f=e.length,u=e.get&&e.set?ze("default"):De("default"),s=0;s<f;s++)if(!Wr(u(e,s))){l=!0;break}if(l){if(!$r(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Wr(c=n.call(r,u(e,s),s)))o[y]=ot(c),o[y+1]=at(c);else{if(!(Ir(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Ee(e)&&st&&we(e[Xe])){if(!we((o=e[Xe]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?ft(o,n,r):ut(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),Y(mt,"of",(function(){var e,r;if(!we(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Gr(mt.prototype,"buffer",(function(){return this._buffer.buffer})),Gr(mt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Gr(mt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(mt.prototype,"BYTES_PER_ELEMENT",mt.BYTES_PER_ELEMENT),Y(mt.prototype,"copyWithin",(function(e,r){if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),Y(mt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Mr(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),Y(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Xe&&Y(t,Xe,(function(){return r.entries()})),t})),Y(mt.prototype,"get",(function(e){var r;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ne(e))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Mr((r=this._buffer)[e*=2],r[e+1])})),Gr(mt.prototype,"length",(function(){return this._length})),Y(mt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!yt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ne(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Wr(e)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ot(e),void(n[t+1]=at(e))}if(yt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*ct,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new rr(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!ve(e))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Wr(e[f])){o=!0;break}if(o){if(!$r(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*ct,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new rr(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ot(u),n[t+1]=at(u),t+=2}}));var wt=[rr,or,hr,lr,Er,wr,Or,xr,Lr,it,mt],bt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],dt=bt.length;function vt(e){var r;if(ye(e))return"generic";if(pe(e))return null;for(r=0;r<dt;r++)if(e instanceof wt[r])return bt[r];return He[ge(e)]||null}return function e(r){var t,n,i,o,a,u,f,l,c,s;if(!ve(r))throw new TypeError(B("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(o={iter:1e308,dir:1},arguments.length>1)if(Ve(arguments[1])){if(n=arguments[1],arguments.length>2){if(!we(f=arguments[2]))throw new TypeError(B("invalid argument. Callback argument must be a function. Value: `%s`.",f));t=arguments[3]}if($(n,"iter")&&(o.iter=n.iter,!Ne(n.iter)))throw new TypeError(B("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",n.iter));if($(n,"dir")&&(o.dir=n.dir,1!==n.dir&&-1!==n.dir))throw new TypeError(B("invalid option. `%s` option must be either `1` or `-1`. Option: `%s`.","dir",n.dir))}else{if(!we(f=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be either a function or an options object. Value: `%s`.",f));t=arguments[2]}return i=0,a={},f?1===o.dir?(s=-1,Y(a,"next",y)):(s=r.length,Y(a,"next",h)):1===o.dir?(s=-1,Y(a,"next",p)):(s=r.length,Y(a,"next",g)),Y(a,"return",m),Xe&&Y(a,Xe,w),c=vt(r),l=Ge(r)?ze(c):De(c),a;function y(){return s=(s+1)%r.length,i+=1,u||i>o.iter||0===r.length?{done:!0}:{value:f.call(t,l(r,s),s,i,r),done:!1}}function h(){return(s-=1)<0&&(s+=r.length),i+=1,u||i>o.iter||0===r.length?{done:!0}:{value:f.call(t,l(r,s),s,i,r),done:!1}}function p(){return s=(s+1)%r.length,i+=1,u||i>o.iter||0===r.length?{done:!0}:{value:l(r,s),done:!1}}function g(){return(s-=1)<0&&(s+=r.length),i+=1,u||i>o.iter||0===r.length?{done:!0}:{value:l(r,s),done:!1}}function m(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function w(){return f?e(r,o,f,t):e(r,o)}}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).circarray2iterator=r();
//# sourceMappingURL=browser.js.map
