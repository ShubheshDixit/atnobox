var e={exports:{}},t={},n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function s(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var o=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(e,t){for(var o,a,l=s(e),u=1;u<arguments.length;u++){for(var c in o=Object(arguments[u]))r.call(o,c)&&(l[c]=o[c]);if(n){a=n(o);for(var h=0;h<a.length;h++)i.call(o,a[h])&&(l[a[h]]=o[a[h]])}}return l},a=o,l=60103,u=60106;
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,h=60110,f=60112;t.Suspense=60113;var d=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var m=Symbol.for;l=m("react.element"),u=m("react.portal"),t.Fragment=m("react.fragment"),t.StrictMode=m("react.strict_mode"),t.Profiler=m("react.profiler"),c=m("react.provider"),h=m("react.context"),f=m("react.forward_ref"),t.Suspense=m("react.suspense"),d=m("react.memo"),p=m("react.lazy")}var g="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w={};function b(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||v}function _(){}function E(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||v}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var k=E.prototype=new _;k.constructor=E,a(k,b.prototype),k.isPureReactComponent=!0;var S={current:null},T=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,n){var r,i={},s=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(s=""+t.key),t)T.call(t,r)&&!I.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===i[r]&&(i[r]=a[r]);return{$$typeof:l,type:e,key:s,ref:o,props:i,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===l}var N=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var o=!1;if(null===e)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case l:case u:o=!0}}if(o)return i=i(o=e),e=""===r?"."+A(o,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),O(i,t,n,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:l,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=""===r?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){var c=r+A(s=e[a],a);o+=O(s,t,n,c,i)}else if("function"==typeof(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e)))for(e=c.call(e),a=0;!(s=e.next()).done;)o+=O(s=s.value,t,n,c=r+A(s,a++),i);else if("object"===s)throw t=""+e,Error(y(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return o}function R(e,t,n){if(null==e)return e;var r=[],i=0;return O(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function P(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var L={current:null};function D(){var e=L.current;if(null===e)throw Error(y(321));return e}var M={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(y(143));return e}},t.Component=b,t.PureComponent=E,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var r=a({},e.props),i=e.key,s=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,o=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(c in t)T.call(t,c)&&!I.hasOwnProperty(c)&&(r[c]=void 0===t[c]&&void 0!==u?u[c]:t[c])}var c=arguments.length-2;if(1===c)r.children=n;else if(1<c){u=Array(c);for(var h=0;h<c;h++)u[h]=arguments[h+2];r.children=u}return{$$typeof:l,type:e.type,key:i,ref:s,props:r,_owner:o}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:h,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return D().useCallback(e,t)},t.useContext=function(e,t){return D().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return D().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return D().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return D().useLayoutEffect(e,t)},t.useMemo=function(e,t){return D().useMemo(e,t)},t.useReducer=function(e,t,n){return D().useReducer(e,t,n)},t.useRef=function(e){return D().useRef(e)},t.useState=function(e){return D().useState(e)},t.version="17.0.2",e.exports=t;var U=e.exports,F={exports:{}},z={},V={exports:{}},j={};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){var t,n,r,i;if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var l=null,u=null,c=function(){if(null!==l)try{var t=e.unstable_now();l(!0,t),l=null}catch(n){throw setTimeout(c,0),n}};t=function(e){null!==l?setTimeout(t,0,e):(l=e,setTimeout(c,0))},n=function(e,t){u=setTimeout(e,t)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,f=window.clearTimeout;if("undefined"!=typeof console){var d=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof d&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var p=!1,m=null,g=-1,y=5,v=0;e.unstable_shouldYield=function(){return e.unstable_now()>=v},i=function(){},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<e?Math.floor(1e3/e):5};var w=new MessageChannel,b=w.port2;w.port1.onmessage=function(){if(null!==m){var t=e.unstable_now();v=t+y;try{m(!0,t)?b.postMessage(null):(p=!1,m=null)}catch(n){throw b.postMessage(null),n}}else p=!1},t=function(e){m=e,p||(p=!0,b.postMessage(null))},n=function(t,n){g=h((function(){t(e.unstable_now())}),n)},r=function(){f(g),g=-1}}function _(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,i=e[r];if(!(void 0!==i&&0<S(i,t)))break e;e[r]=t,e[n]=i,n=r}}function E(e){return void 0===(e=e[0])?null:e}function k(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length;r<i;){var s=2*(r+1)-1,o=e[s],a=s+1,l=e[a];if(void 0!==o&&0>S(o,n))void 0!==l&&0>S(l,o)?(e[r]=l,e[a]=n,r=a):(e[r]=o,e[s]=n,r=s);else{if(!(void 0!==l&&0>S(l,n)))break e;e[r]=l,e[a]=n,r=a}}}return t}return null}function S(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var T=[],I=[],C=1,x=null,N=3,A=!1,O=!1,R=!1;function P(e){for(var t=E(I);null!==t;){if(null===t.callback)k(I);else{if(!(t.startTime<=e))break;k(I),t.sortIndex=t.expirationTime,_(T,t)}t=E(I)}}function L(e){if(R=!1,P(e),!O)if(null!==E(T))O=!0,t(D);else{var r=E(I);null!==r&&n(L,r.startTime-e)}}function D(t,i){O=!1,R&&(R=!1,r()),A=!0;var s=N;try{for(P(i),x=E(T);null!==x&&(!(x.expirationTime>i)||t&&!e.unstable_shouldYield());){var o=x.callback;if("function"==typeof o){x.callback=null,N=x.priorityLevel;var a=o(x.expirationTime<=i);i=e.unstable_now(),"function"==typeof a?x.callback=a:x===E(T)&&k(T),P(i)}else k(T);x=E(T)}if(null!==x)var l=!0;else{var u=E(I);null!==u&&n(L,u.startTime-i),l=!1}return l}finally{x=null,N=s,A=!1}}var M=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){O||A||(O=!0,t(D))},e.unstable_getCurrentPriorityLevel=function(){return N},e.unstable_getFirstCallbackNode=function(){return E(T)},e.unstable_next=function(e){switch(N){case 1:case 2:case 3:var t=3;break;default:t=N}var n=N;N=t;try{return e()}finally{N=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=M,e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=N;N=e;try{return t()}finally{N=n}},e.unstable_scheduleCallback=function(i,s,o){var a=e.unstable_now();switch("object"==typeof o&&null!==o?o="number"==typeof(o=o.delay)&&0<o?a+o:a:o=a,i){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return i={id:C++,callback:s,priorityLevel:i,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>a?(i.sortIndex=o,_(I,i),null===E(T)&&i===E(I)&&(R?r():R=!0,n(L,o-a))):(i.sortIndex=l,_(T,i),O||A||(O=!0,t(D))),i},e.unstable_wrapCallback=function(e){var t=N;return function(){var n=N;N=t;try{return e.apply(this,arguments)}finally{N=n}}}}(j),V.exports=j;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B=e.exports,q=o,H=V.exports;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!B)throw Error($(227));var W=new Set,K={};function G(e,t){Q(e,t),Q(e+"Capture",t)}function Q(e,t){for(K[e]=t,e=0;e<t.length;e++)W.add(t[e])}var X=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J=Object.prototype.hasOwnProperty,Z={},ee={};function te(e,t,n,r,i,s,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){ne[e]=new te(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];ne[t]=new te(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){ne[e]=new te(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){ne[e]=new te(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){ne[e]=new te(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){ne[e]=new te(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){ne[e]=new te(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){ne[e]=new te(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){ne[e]=new te(e,5,!1,e.toLowerCase(),null,!1,!1)}));var re=/[\-:]([a-z])/g;function ie(e){return e[1].toUpperCase()}function se(e,t,n,r){var i=ne.hasOwnProperty(t)?ne[t]:null;(null!==i?0===i.type:!r&&(2<t.length&&("o"===t[0]||"O"===t[0])&&("n"===t[1]||"N"===t[1])))||(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!J.call(ee,e)||!J.call(Z,e)&&(Y.test(e)?ee[e]=!0:(Z[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(re,ie);ne[t]=new te(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(re,ie);ne[t]=new te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(re,ie);ne[t]=new te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){ne[e]=new te(e,1,!1,e.toLowerCase(),null,!1,!1)})),ne.xlinkHref=new te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){ne[e]=new te(e,1,!1,e.toLowerCase(),null,!0,!0)}));var oe=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ae=60103,le=60106,ue=60107,ce=60108,he=60114,fe=60109,de=60110,pe=60112,me=60113,ge=60120,ye=60115,ve=60116,we=60121,be=60128,_e=60129,Ee=60130,ke=60131;if("function"==typeof Symbol&&Symbol.for){var Se=Symbol.for;ae=Se("react.element"),le=Se("react.portal"),ue=Se("react.fragment"),ce=Se("react.strict_mode"),he=Se("react.profiler"),fe=Se("react.provider"),de=Se("react.context"),pe=Se("react.forward_ref"),me=Se("react.suspense"),ge=Se("react.suspense_list"),ye=Se("react.memo"),ve=Se("react.lazy"),we=Se("react.block"),Se("react.scope"),be=Se("react.opaque.id"),_e=Se("react.debug_trace_mode"),Ee=Se("react.offscreen"),ke=Se("react.legacy_hidden")}var Te,Ie="function"==typeof Symbol&&Symbol.iterator;function Ce(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Ie&&e[Ie]||e["@@iterator"])?e:null}function xe(e){if(void 0===Te)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Te=t&&t[1]||""}return"\n"+Te+e}var Ne=!1;function Ae(e,t){if(!e||Ne)return"";Ne=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&"string"==typeof l.stack){for(var i=l.stack.split("\n"),s=r.stack.split("\n"),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(1!==o||1!==a)do{if(o--,0>--a||i[o]!==s[a])return"\n"+i[o].replace(" at new "," at ")}while(1<=o&&0<=a);break}}}finally{Ne=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xe(e):""}function Oe(e){switch(e.tag){case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return xe("Suspense");case 19:return xe("SuspenseList");case 0:case 2:case 15:return e=Ae(e.type,!1);case 11:return e=Ae(e.type.render,!1);case 22:return e=Ae(e.type._render,!1);case 1:return e=Ae(e.type,!0);default:return""}}function Re(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case ue:return"Fragment";case le:return"Portal";case he:return"Profiler";case ce:return"StrictMode";case me:return"Suspense";case ge:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case de:return(e.displayName||"Context")+".Consumer";case fe:return(e._context.displayName||"Context")+".Provider";case pe:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case ye:return Re(e.type);case we:return Re(e._render);case ve:t=e._payload,e=e._init;try{return Re(e(t))}catch(n){}}return null}function Pe(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function Le(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function De(e){e._valueTracker||(e._valueTracker=function(e){var t=Le(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Me(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Le(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ue(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Fe(e,t){var n=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ze(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Pe(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Ve(e,t){null!=(t=t.checked)&&se(e,"checked",t,!1)}function je(e,t){Ve(e,t);var n=Pe(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?qe(e,t.type,n):t.hasOwnProperty("defaultValue")&&qe(e,t.type,Pe(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Be(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function qe(e,t,n){"number"===t&&Ue(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function He(e,t){return e=q({children:void 0},t),(t=function(e){var t="";return B.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(t.children))&&(e.children=t),e}function $e(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pe(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function We(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error($(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ke(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error($(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error($(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Pe(n)}}function Ge(e,t){var n=Pe(t.value),r=Pe(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function Qe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}var Xe="http://www.w3.org/1999/xhtml",Ye="http://www.w3.org/2000/svg";function Je(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ze(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?Je(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var et,tt,nt=(tt=function(e,t){if(e.namespaceURI!==Ye||"innerHTML"in e)e.innerHTML=t;else{for((et=et||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=et.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return tt(e,t)}))}:tt);function rt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var it={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];function ot(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||it.hasOwnProperty(e)&&it[e]?(""+t).trim():t+"px"}function at(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ot(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(it).forEach((function(e){st.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),it[t]=it[e]}))}));var lt=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ut(e,t){if(t){if(lt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error($(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error($(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error($(62))}}function ct(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ht(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ft=null,dt=null,pt=null;function mt(e){if(e=zi(e)){if("function"!=typeof ft)throw Error($(280));var t=e.stateNode;t&&(t=ji(t),ft(e.stateNode,e.type,t))}}function gt(e){dt?pt?pt.push(e):pt=[e]:dt=e}function yt(){if(dt){var e=dt,t=pt;if(pt=dt=null,mt(e),t)for(e=0;e<t.length;e++)mt(t[e])}}function vt(e,t){return e(t)}function wt(e,t,n,r,i){return e(t,n,r,i)}function bt(){}var _t=vt,Et=!1,kt=!1;function St(){null===dt&&null===pt||(bt(),yt())}function Tt(e,t){var n=e.stateNode;if(null===n)return null;var r=ji(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error($(231,t,typeof n));return n}var It=!1;if(X)try{var Ct={};Object.defineProperty(Ct,"passive",{get:function(){It=!0}}),window.addEventListener("test",Ct,Ct),window.removeEventListener("test",Ct,Ct)}catch(tt){It=!1}function xt(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Nt=!1,At=null,Ot=!1,Rt=null,Pt={onError:function(e){Nt=!0,At=e}};function Lt(e,t,n,r,i,s,o,a,l){Nt=!1,At=null,xt.apply(Pt,arguments)}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!=(1026&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Mt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ut(e){if(Dt(e)!==e)throw Error($(188))}function Ft(e){if(!(e=function(e){var t=e.alternate;if(!t){if(null===(t=Dt(e)))throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ut(i),e;if(s===r)return Ut(i),t;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(3!==n.tag)throw Error($(188));return n.stateNode.current===n?e:t}(e)))return null;for(var t=e;;){if(5===t.tag||6===t.tag)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function zt(e,t){for(var n=e.alternate;null!==t;){if(t===e||t===n)return!0;t=t.return}return!1}var Vt,jt,Bt,qt,Ht=!1,$t=[],Wt=null,Kt=null,Gt=null,Qt=new Map,Xt=new Map,Yt=[],Jt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zt(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:16|n,nativeEvent:i,targetContainers:[r]}}function en(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":Gt=null;break;case"pointerover":case"pointerout":Qt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xt.delete(t.pointerId)}}function tn(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e=Zt(t,n,r,i,s),null!==t&&(null!==(t=zi(t))&&jt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function nn(e){var t=Fi(e.target);if(null!==t){var n=Dt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Mt(n)))return e.blockedOn=t,void qt(e.lanePriority,(function(){H.unstable_runWithPriority(e.priority,(function(){Bt(n)}))}))}else if(3===t&&n.stateNode.hydrate)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function rn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=zn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=zi(n))&&jt(t),e.blockedOn=n,!1;t.shift()}return!0}function sn(e,t,n){rn(e)&&n.delete(t)}function on(){for(Ht=!1;0<$t.length;){var e=$t[0];if(null!==e.blockedOn){null!==(e=zi(e.blockedOn))&&Vt(e);break}for(var t=e.targetContainers;0<t.length;){var n=zn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n){e.blockedOn=n;break}t.shift()}null===e.blockedOn&&$t.shift()}null!==Wt&&rn(Wt)&&(Wt=null),null!==Kt&&rn(Kt)&&(Kt=null),null!==Gt&&rn(Gt)&&(Gt=null),Qt.forEach(sn),Xt.forEach(sn)}function an(e,t){e.blockedOn===t&&(e.blockedOn=null,Ht||(Ht=!0,H.unstable_scheduleCallback(H.unstable_NormalPriority,on)))}function ln(e){function t(t){return an(t,e)}if(0<$t.length){an($t[0],e);for(var n=1;n<$t.length;n++){var r=$t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Wt&&an(Wt,e),null!==Kt&&an(Kt,e),null!==Gt&&an(Gt,e),Qt.forEach(t),Xt.forEach(t),n=0;n<Yt.length;n++)(r=Yt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Yt.length&&null===(n=Yt[0]).blockedOn;)nn(n),null===n.blockedOn&&Yt.shift()}function un(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cn={animationend:un("Animation","AnimationEnd"),animationiteration:un("Animation","AnimationIteration"),animationstart:un("Animation","AnimationStart"),transitionend:un("Transition","TransitionEnd")},hn={},fn={};function dn(e){if(hn[e])return hn[e];if(!cn[e])return e;var t,n=cn[e];for(t in n)if(n.hasOwnProperty(t)&&t in fn)return hn[e]=n[t];return e}X&&(fn=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);var pn=dn("animationend"),mn=dn("animationiteration"),gn=dn("animationstart"),yn=dn("transitionend"),vn=new Map,wn=new Map,bn=["abort","abort",pn,"animationEnd",mn,"animationIteration",gn,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",yn,"transitionEnd","waiting","waiting"];function _n(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),wn.set(r,t),vn.set(r,i),G(i,[r])}}(0,H.unstable_now)();var En=8;function kn(e){if(0!=(1&e))return En=15,1;if(0!=(2&e))return En=14,2;if(0!=(4&e))return En=13,4;var t=24&e;return 0!==t?(En=12,t):0!=(32&e)?(En=11,32):0!==(t=192&e)?(En=10,t):0!=(256&e)?(En=9,256):0!==(t=3584&e)?(En=8,t):0!=(4096&e)?(En=7,4096):0!==(t=4186112&e)?(En=6,t):0!==(t=62914560&e)?(En=5,t):67108864&e?(En=4,67108864):0!=(134217728&e)?(En=3,134217728):0!==(t=805306368&e)?(En=2,t):0!=(1073741824&e)?(En=1,1073741824):(En=8,e)}function Sn(e,t){var n=e.pendingLanes;if(0===n)return En=0;var r=0,i=0,s=e.expiredLanes,o=e.suspendedLanes,a=e.pingedLanes;if(0!==s)r=s,i=En=15;else if(0!==(s=134217727&n)){var l=s&~o;0!==l?(r=kn(l),i=En):0!==(a&=s)&&(r=kn(a),i=En)}else 0!==(s=n&~o)?(r=kn(s),i=En):0!==a&&(r=kn(a),i=En);if(0===r)return 0;if(r=n&((0>(r=31-An(r))?0:1<<r)<<1)-1,0!==t&&t!==r&&0==(t&o)){if(kn(t),i<=En)return t;En=i}if(0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-An(t)),r|=e[n],t&=~i;return r}function Tn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function In(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return 0===(e=Cn(24&~t))?In(10,t):e;case 10:return 0===(e=Cn(192&~t))?In(8,t):e;case 8:return 0===(e=Cn(3584&~t))&&(0===(e=Cn(4186112&~t))&&(e=512)),e;case 2:return 0===(t=Cn(805306368&~t))&&(t=268435456),t}throw Error($(358,e))}function Cn(e){return e&-e}function xn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nn(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,(e=e.eventTimes)[t=31-An(t)]=n}var An=Math.clz32?Math.clz32:function(e){return 0===e?32:31-(On(e)/Rn|0)|0},On=Math.log,Rn=Math.LN2;var Pn=H.unstable_UserBlockingPriority,Ln=H.unstable_runWithPriority,Dn=!0;function Mn(e,t,n,r){Et||bt();var i=Fn,s=Et;Et=!0;try{wt(i,e,t,n,r)}finally{(Et=s)||St()}}function Un(e,t,n,r){Ln(Pn,Fn.bind(null,e,t,n,r))}function Fn(e,t,n,r){var i;if(Dn)if((i=0==(4&t))&&0<$t.length&&-1<Jt.indexOf(e))e=Zt(null,e,t,n,r),$t.push(e);else{var s=zn(e,t,n,r);if(null===s)i&&en(e,r);else{if(i){if(-1<Jt.indexOf(e))return e=Zt(s,e,t,n,r),void $t.push(e);if(function(e,t,n,r,i){switch(t){case"focusin":return Wt=tn(Wt,e,t,n,r,i),!0;case"dragenter":return Kt=tn(Kt,e,t,n,r,i),!0;case"mouseover":return Gt=tn(Gt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Qt.set(s,tn(Qt.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xt.set(s,tn(Xt.get(s)||null,e,t,n,r,i)),!0}return!1}(s,e,t,n,r))return;en(e,r)}yi(e,t,r,null,n)}}}function zn(e,t,n,r){var i=ht(r);if(null!==(i=Fi(i))){var s=Dt(i);if(null===s)i=null;else{var o=s.tag;if(13===o){if(null!==(i=Mt(s)))return i;i=null}else if(3===o){if(s.stateNode.hydrate)return 3===s.tag?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return yi(e,t,r,i,n),null}var Vn=null,jn=null,Bn=null;function qn(){if(Bn)return Bn;var e,t,n=jn,r=n.length,i="value"in Vn?Vn.value:Vn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[s-t];t++);return Bn=i.slice(e,1<t?1-t:void 0)}function Hn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function $n(){return!0}function Wn(){return!1}function Kn(e){function t(t,n,r,i,s){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?$n:Wn,this.isPropagationStopped=Wn,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),t}var Gn,Qn,Xn,Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jn=Kn(Yn),Zn=q({},Yn,{view:0,detail:0}),er=Kn(Zn),tr=q({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&"mousemove"===e.type?(Gn=e.screenX-Xn.screenX,Qn=e.screenY-Xn.screenY):Qn=Gn=0,Xn=e),Gn)},movementY:function(e){return"movementY"in e?e.movementY:Qn}}),nr=Kn(tr),rr=Kn(q({},tr,{dataTransfer:0})),ir=Kn(q({},Zn,{relatedTarget:0})),sr=Kn(q({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0})),or=Kn(q({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),ar=Kn(q({},Yn,{data:0})),lr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ur={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},cr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=cr[e])&&!!t[e]}function fr(){return hr}var dr=Kn(q({},Zn,{key:function(e){if(e.key){var t=lr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Hn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?ur[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fr,charCode:function(e){return"keypress"===e.type?Hn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Hn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),pr=Kn(q({},tr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),mr=Kn(q({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fr})),gr=Kn(q({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0})),yr=Kn(q({},tr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),vr=[9,13,27,32],wr=X&&"CompositionEvent"in window,br=null;X&&"documentMode"in document&&(br=document.documentMode);var _r=X&&"TextEvent"in window&&!br,Er=X&&(!wr||br&&8<br&&11>=br),kr=String.fromCharCode(32),Sr=!1;function Tr(e,t){switch(e){case"keyup":return-1!==vr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ir(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var Cr=!1;var xr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!xr[e.type]:"textarea"===t}function Ar(e,t,n,r){gt(r),0<(t=wi(t,"onChange")).length&&(n=new Jn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Or=null,Rr=null;function Pr(e){hi(e,0)}function Lr(e){if(Me(Vi(e)))return e}function Dr(e,t){if("change"===e)return t}var Mr=!1;if(X){var Ur;if(X){var Fr="oninput"in document;if(!Fr){var zr=document.createElement("div");zr.setAttribute("oninput","return;"),Fr="function"==typeof zr.oninput}Ur=Fr}else Ur=!1;Mr=Ur&&(!document.documentMode||9<document.documentMode)}function Vr(){Or&&(Or.detachEvent("onpropertychange",jr),Rr=Or=null)}function jr(e){if("value"===e.propertyName&&Lr(Rr)){var t=[];if(Ar(t,Rr,e,ht(e)),e=Pr,Et)e(t);else{Et=!0;try{vt(e,t)}finally{Et=!1,St()}}}}function Br(e,t,n){"focusin"===e?(Vr(),Rr=n,(Or=t).attachEvent("onpropertychange",jr)):"focusout"===e&&Vr()}function qr(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Lr(Rr)}function Hr(e,t){if("click"===e)return Lr(t)}function $r(e,t){if("input"===e||"change"===e)return Lr(t)}var Wr="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},Kr=Object.prototype.hasOwnProperty;function Gr(e,t){if(Wr(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Kr.call(t,n[r])||!Wr(e[n[r]],t[n[r]]))return!1;return!0}function Qr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xr(e,t){var n,r=Qr(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Qr(r)}}function Yr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Yr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function Jr(){for(var e=window,t=Ue();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ue((e=t.contentWindow).document)}return t}function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var ei=X&&"documentMode"in document&&11>=document.documentMode,ti=null,ni=null,ri=null,ii=!1;function si(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ii||null==ti||ti!==Ue(r)||("selectionStart"in(r=ti)&&Zr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ri&&Gr(ri,r)||(ri=r,0<(r=wi(ni,"onSelect")).length&&(t=new Jn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ti)))}_n("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0),_n("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1),_n(bn,2);for(var oi="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),ai=0;ai<oi.length;ai++)wn.set(oi[ai],0);Q("onMouseEnter",["mouseout","mouseover"]),Q("onMouseLeave",["mouseout","mouseover"]),Q("onPointerEnter",["pointerout","pointerover"]),Q("onPointerLeave",["pointerout","pointerover"]),G("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),G("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),G("onBeforeInput",["compositionend","keypress","textInput","paste"]),G("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),G("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ui=new Set("cancel close invalid load scroll toggle".split(" ").concat(li));function ci(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,o,a,l){if(Lt.apply(this,arguments),Nt){if(!Nt)throw Error($(198));var u=At;Nt=!1,At=null,Ot||(Ot=!0,Rt=u)}}(r,t,void 0,e),e.currentTarget=null}function hi(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ci(i,a,u),s=l}else for(o=0;o<r.length;o++){if(l=(a=r[o]).instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ci(i,a,u),s=l}}}if(Ot)throw e=Rt,Ot=!1,Rt=null,e}function fi(e,t){var n=Bi(t),r=e+"__bubble";n.has(r)||(gi(t,e,2,!1),n.add(r))}var di="_reactListening"+Math.random().toString(36).slice(2);function pi(e){e[di]||(e[di]=!0,W.forEach((function(t){ui.has(t)||mi(t,!1,e,null),mi(t,!0,e,null)})))}function mi(e,t,n,r){var i=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,s=n;if("selectionchange"===e&&9!==n.nodeType&&(s=n.ownerDocument),null!==r&&!t&&ui.has(e)){if("scroll"!==e)return;i|=2,s=r}var o=Bi(s),a=e+"__"+(t?"capture":"bubble");o.has(a)||(t&&(i|=4),gi(s,e,i,t),o.add(a))}function gi(e,t,n,r){var i=wn.get(t);switch(void 0===i?2:i){case 0:i=Mn;break;case 1:i=Un;break;default:i=Fn}n=i.bind(null,t,n,e),i=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function yi(e,t,n,r,i){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var a=r.stateNode.containerInfo;if(a===i||8===a.nodeType&&a.parentNode===i)break;if(4===o)for(o=r.return;null!==o;){var l=o.tag;if((3===l||4===l)&&((l=o.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;o=o.return}for(;null!==a;){if(null===(o=Fi(a)))return;if(5===(l=o.tag)||6===l){r=s=o;continue e}a=a.parentNode}}r=r.return}!function(e,t,n){if(kt)return e(t,n);kt=!0;try{_t(e,t,n)}finally{kt=!1,St()}}((function(){var r=s,i=ht(n),o=[];e:{var a=vn.get(e);if(void 0!==a){var l=Jn,u=e;switch(e){case"keypress":if(0===Hn(n))break e;case"keydown":case"keyup":l=dr;break;case"focusin":u="focus",l=ir;break;case"focusout":u="blur",l=ir;break;case"beforeblur":case"afterblur":l=ir;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=nr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=rr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=mr;break;case pn:case mn:case gn:l=sr;break;case yn:l=gr;break;case"scroll":l=er;break;case"wheel":l=yr;break;case"copy":case"cut":case"paste":l=or;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=pr}var c=0!=(4&t),h=!c&&"scroll"===e,f=c?null!==a?a+"Capture":null:a;c=[];for(var d,p=r;null!==p;){var m=(d=p).stateNode;if(5===d.tag&&null!==m&&(d=m,null!==f&&(null!=(m=Tt(p,f))&&c.push(vi(p,m,d)))),h)break;p=p.return}0<c.length&&(a=new l(a,u,null,n,i),o.push({event:a,listeners:c}))}}if(0==(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(a="mouseover"===e||"pointerover"===e)||0!=(16&t)||!(u=n.relatedTarget||n.fromElement)||!Fi(u)&&!u[Mi])&&(l||a)&&(a=i.window===i?i:(a=i.ownerDocument)?a.defaultView||a.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?Fi(u):null)&&(u!==(h=Dt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=nr,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=pr,m="onPointerLeave",f="onPointerEnter",p="pointer"),h=null==l?a:Vi(l),d=null==u?a:Vi(u),(a=new c(m,p+"leave",l,n,i)).target=h,a.relatedTarget=d,m=null,Fi(i)===r&&((c=new c(f,p+"enter",u,n,i)).target=d,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(f=u,p=0,d=c=l;d;d=bi(d))p++;for(d=0,m=f;m;m=bi(m))d++;for(;0<p-d;)c=bi(c),p--;for(;0<d-p;)f=bi(f),d--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=bi(c),f=bi(f)}c=null}else c=null;null!==l&&_i(o,a,l,c,!1),null!==u&&null!==h&&_i(o,h,u,c,!0)}if("select"===(l=(a=r?Vi(r):window).nodeName&&a.nodeName.toLowerCase())||"input"===l&&"file"===a.type)var g=Dr;else if(Nr(a))if(Mr)g=$r;else{g=qr;var y=Br}else(l=a.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===a.type||"radio"===a.type)&&(g=Hr);switch(g&&(g=g(e,r))?Ar(o,g,n,i):(y&&y(e,a,r),"focusout"===e&&(y=a._wrapperState)&&y.controlled&&"number"===a.type&&qe(a,"number",a.value)),y=r?Vi(r):window,e){case"focusin":(Nr(y)||"true"===y.contentEditable)&&(ti=y,ni=r,ri=null);break;case"focusout":ri=ni=ti=null;break;case"mousedown":ii=!0;break;case"contextmenu":case"mouseup":case"dragend":ii=!1,si(o,n,i);break;case"selectionchange":if(ei)break;case"keydown":case"keyup":si(o,n,i)}var v;if(wr)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else Cr?Tr(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Er&&"ko"!==n.locale&&(Cr||"onCompositionStart"!==w?"onCompositionEnd"===w&&Cr&&(v=qn()):(jn="value"in(Vn=i)?Vn.value:Vn.textContent,Cr=!0)),0<(y=wi(r,w)).length&&(w=new ar(w,e,null,n,i),o.push({event:w,listeners:y}),v?w.data=v:null!==(v=Ir(n))&&(w.data=v))),(v=_r?function(e,t){switch(e){case"compositionend":return Ir(t);case"keypress":return 32!==t.which?null:(Sr=!0,kr);case"textInput":return(e=t.data)===kr&&Sr?null:e;default:return null}}(e,n):function(e,t){if(Cr)return"compositionend"===e||!wr&&Tr(e,t)?(e=qn(),Bn=jn=Vn=null,Cr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Er&&"ko"!==t.locale?null:t.data;default:return null}}(e,n))&&(0<(r=wi(r,"onBeforeInput")).length&&(i=new ar("onBeforeInput","beforeinput",null,n,i),o.push({event:i,listeners:r}),i.data=v))}hi(o,t)}))}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=Tt(e,n))&&r.unshift(vi(e,s,i)),null!=(s=Tt(e,t))&&r.push(vi(e,s,i))),e=e.return}return r}function bi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function _i(e,t,n,r,i){for(var s=t._reactName,o=[];null!==n&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(null!==l&&l===r)break;5===a.tag&&null!==u&&(a=u,i?null!=(l=Tt(n,s))&&o.unshift(vi(n,l,a)):i||null!=(l=Tt(n,s))&&o.push(vi(n,l,a))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}function Ei(){}var ki=null,Si=null;function Ti(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Ii(e,t){return"textarea"===e||"option"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var Ci="function"==typeof setTimeout?setTimeout:void 0,xi="function"==typeof clearTimeout?clearTimeout:void 0;function Ni(e){1===e.nodeType?e.textContent="":9===e.nodeType&&(null!=(e=e.body)&&(e.textContent=""))}function Ai(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break}return e}function Oi(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var Ri=0;var Pi=Math.random().toString(36).slice(2),Li="__reactFiber$"+Pi,Di="__reactProps$"+Pi,Mi="__reactContainer$"+Pi,Ui="__reactEvents$"+Pi;function Fi(e){var t=e[Li];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Mi]||n[Li]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=Oi(e);null!==e;){if(n=e[Li])return n;e=Oi(e)}return t}n=(e=n).parentNode}return null}function zi(e){return!(e=e[Li]||e[Mi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Vi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error($(33))}function ji(e){return e[Di]||null}function Bi(e){var t=e[Ui];return void 0===t&&(t=e[Ui]=new Set),t}var qi=[],Hi=-1;function $i(e){return{current:e}}function Wi(e){0>Hi||(e.current=qi[Hi],qi[Hi]=null,Hi--)}function Ki(e,t){Hi++,qi[Hi]=e.current,e.current=t}var Gi={},Qi=$i(Gi),Xi=$i(!1),Yi=Gi;function Ji(e,t){var n=e.type.contextTypes;if(!n)return Gi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Zi(e){return null!=(e=e.childContextTypes)}function es(){Wi(Xi),Wi(Qi)}function ts(e,t,n){if(Qi.current!==Gi)throw Error($(168));Ki(Qi,t),Ki(Xi,n)}function ns(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in e))throw Error($(108,Re(t)||"Unknown",i));return q({},n,r)}function rs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gi,Yi=Qi.current,Ki(Qi,e),Ki(Xi,Xi.current),!0}function is(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=ns(e,t,Yi),r.__reactInternalMemoizedMergedChildContext=e,Wi(Xi),Wi(Qi),Ki(Qi,e)):Wi(Xi),Ki(Xi,n)}var ss=null,os=null,as=H.unstable_runWithPriority,ls=H.unstable_scheduleCallback,us=H.unstable_cancelCallback,cs=H.unstable_shouldYield,hs=H.unstable_requestPaint,fs=H.unstable_now,ds=H.unstable_getCurrentPriorityLevel,ps=H.unstable_ImmediatePriority,ms=H.unstable_UserBlockingPriority,gs=H.unstable_NormalPriority,ys=H.unstable_LowPriority,vs=H.unstable_IdlePriority,ws={},bs=void 0!==hs?hs:function(){},_s=null,Es=null,ks=!1,Ss=fs(),Ts=1e4>Ss?fs:function(){return fs()-Ss};function Is(){switch(ds()){case ps:return 99;case ms:return 98;case gs:return 97;case ys:return 96;case vs:return 95;default:throw Error($(332))}}function Cs(e){switch(e){case 99:return ps;case 98:return ms;case 97:return gs;case 96:return ys;case 95:return vs;default:throw Error($(332))}}function xs(e,t){return e=Cs(e),as(e,t)}function Ns(e,t,n){return e=Cs(e),ls(e,t,n)}function As(){if(null!==Es){var e=Es;Es=null,us(e)}Os()}function Os(){if(!ks&&null!==_s){ks=!0;var e=0;try{var t=_s;xs(99,(function(){for(;e<t.length;e++){var n=t[e];do{n=n(!0)}while(null!==n)}})),_s=null}catch(n){throw null!==_s&&(_s=_s.slice(e+1)),ls(ps,As),n}finally{ks=!1}}}var Rs=oe.ReactCurrentBatchConfig;function Ps(e,t){if(e&&e.defaultProps){for(var n in t=q({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}var Ls=$i(null),Ds=null,Ms=null,Us=null;function Fs(){Us=Ms=Ds=null}function zs(e){var t=Ls.current;Wi(Ls),e.type._context._currentValue=t}function Vs(e,t){for(;null!==e;){var n=e.alternate;if((e.childLanes&t)===t){if(null===n||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,null!==n&&(n.childLanes|=t);e=e.return}}function js(e,t){Ds=e,Us=Ms=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(wa=!0),e.firstContext=null)}function Bs(e,t){if(Us!==e&&!1!==t&&0!==t)if("number"==typeof t&&1073741823!==t||(Us=e,t=1073741823),t={context:e,observedBits:t,next:null},null===Ms){if(null===Ds)throw Error($(308));Ms=t,Ds.dependencies={lanes:0,firstContext:t,responders:null}}else Ms=Ms.next=t;return e._currentValue}var qs=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function $s(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ws(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ks(e,t){if(null!==(e=e.updateQueue)){var n=(e=e.shared).pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=o:s=s.next=o,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Qs(e,t,n,r){var i=e.updateQueue;qs=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(null!==a){i.shared.pending=null;var l=a,u=l.next;l.next=null,null===o?s=u:o.next=u,o=l;var c=e.alternate;if(null!==c){var h=(c=c.updateQueue).lastBaseUpdate;h!==o&&(null===h?c.firstBaseUpdate=u:h.next=u,c.lastBaseUpdate=l)}}if(null!==s){for(h=i.baseState,o=0,c=u=l=null;;){a=s.lane;var f=s.eventTime;if((r&a)===a){null!==c&&(c=c.next={eventTime:f,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var d=e,p=s;switch(a=t,f=n,p.tag){case 1:if("function"==typeof(d=p.payload)){h=d.call(f,h,a);break e}h=d;break e;case 3:d.flags=-4097&d.flags|64;case 0:if(null==(a="function"==typeof(d=p.payload)?d.call(f,h,a):d))break e;h=q({},h,a);break e;case 2:qs=!0}}null!==s.callback&&(e.flags|=32,null===(a=i.effects)?i.effects=[s]:a.push(s))}else f={eventTime:f,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,o|=a;if(null===(s=s.next)){if(null===(a=i.shared.pending))break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,kl|=o,e.lanes=o,e.memoizedState=h}}function Xs(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error($(191,i));i.call(r)}}}var Ys=(new B.Component).refs;function Js(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:q({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var Zs={isMounted:function(e){return!!(e=e._reactInternals)&&Dt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Gl(),i=Ql(e),s=Ws(r,i);s.payload=t,null!=n&&(s.callback=n),Ks(e,s),Xl(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Gl(),i=Ql(e),s=Ws(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),Ks(e,s),Xl(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Gl(),r=Ql(e),i=Ws(n,r);i.tag=2,null!=t&&(i.callback=t),Ks(e,i),Xl(e,r,n)}};function eo(e,t,n,r,i,s,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,o):!t.prototype||!t.prototype.isPureReactComponent||(!Gr(n,r)||!Gr(i,s))}function to(e,t,n){var r=!1,i=Gi,s=t.contextType;return"object"==typeof s&&null!==s?s=Bs(s):(i=Zi(t)?Yi:Qi.current,s=(r=null!=(r=t.contextTypes))?Ji(e,i):Gi),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=Zs,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function no(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zs.enqueueReplaceState(t,t.state,null)}function ro(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Ys,Hs(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=Bs(s):(s=Zi(t)?Yi:Qi.current,i.context=Ji(e,s)),Qs(e,n,i,r),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(Js(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&Zs.enqueueReplaceState(i,i.state,null),Qs(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4)}var io=Array.isArray;function so(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=r.refs;t===Ys&&(t=r.refs={}),null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function oo(e,t){if("textarea"!==e.type)throw Error($(31,"[object Object]"===Object.prototype.toString.call(t)?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function ao(e){function t(t,n){if(e){var r=t.lastEffect;null!==r?(r.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n,n.nextEffect=null,n.flags=8}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=xu(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags=2,n):r:(t.flags=2,n):n}function o(t){return e&&null===t.alternate&&(t.flags=2),t}function a(e,t,n,r){return null===t||6!==t.tag?((t=Ru(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){return null!==t&&t.elementType===n.type?((r=i(t,n.props)).ref=so(e,t,n),r.return=e,r):((r=Nu(n.type,n.key,n.props,null,e.mode,r)).ref=so(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Pu(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Au(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t||"number"==typeof t)return(t=Ru(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ae:return(n=Nu(t.type,t.key,t.props,null,e.mode,n)).ref=so(e,null,t),n.return=e,n;case le:return(t=Pu(t,e.mode,n)).return=e,t}if(io(t)||Ce(t))return(t=Au(t,e.mode,n,null)).return=e,t;oo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n||"number"==typeof n)return null!==i?null:a(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ae:return n.key===i?n.type===ue?c(e,t,n.props.children,r,i):l(e,t,n,r):null;case le:return n.key===i?u(e,t,n,r):null}if(io(n)||Ce(n))return null!==i?null:c(e,t,n,r,null);oo(e,n)}return null}function d(e,t,n,r,i){if("string"==typeof r||"number"==typeof r)return a(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ae:return e=e.get(null===r.key?n:r.key)||null,r.type===ue?c(t,e,r.props.children,i,r.key):l(t,e,r,i);case le:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i)}if(io(r)||Ce(r))return c(t,e=e.get(n)||null,r,i,null);oo(t,r)}return null}return function(a,l,u,c){var p="object"==typeof u&&null!==u&&u.type===ue&&null===u.key;p&&(u=u.props.children);var m="object"==typeof u&&null!==u;if(m)switch(u.$$typeof){case ae:e:{for(m=u.key,p=l;null!==p;){if(p.key===m){switch(p.tag){case 7:if(u.type===ue){n(a,p.sibling),(l=i(p,u.props.children)).return=a,a=l;break e}break;default:if(p.elementType===u.type){n(a,p.sibling),(l=i(p,u.props)).ref=so(a,p,u),l.return=a,a=l;break e}}n(a,p);break}t(a,p),p=p.sibling}u.type===ue?((l=Au(u.props.children,a.mode,c,u.key)).return=a,a=l):((c=Nu(u.type,u.key,u.props,null,a.mode,c)).ref=so(a,l,u),c.return=a,a=c)}return o(a);case le:e:{for(p=u.key;null!==l;){if(l.key===p){if(4===l.tag&&l.stateNode.containerInfo===u.containerInfo&&l.stateNode.implementation===u.implementation){n(a,l.sibling),(l=i(l,u.children||[])).return=a,a=l;break e}n(a,l);break}t(a,l),l=l.sibling}(l=Pu(u,a.mode,c)).return=a,a=l}return o(a)}if("string"==typeof u||"number"==typeof u)return u=""+u,null!==l&&6===l.tag?(n(a,l.sibling),(l=i(l,u)).return=a,a=l):(n(a,l),(l=Ru(u,a.mode,c)).return=a,a=l),o(a);if(io(u))return function(i,o,a,l){for(var u=null,c=null,p=o,m=o=0,g=null;null!==p&&m<a.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=f(i,p,a[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===a.length)return n(i,p),u;if(null===p){for(;m<a.length;m++)null!==(p=h(i,a[m],l))&&(o=s(p,o,m),null===c?u=p:c.sibling=p,c=p);return u}for(p=r(i,p);m<a.length;m++)null!==(g=d(p,i,m,a[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),o=s(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),u}(a,l,u,c);if(Ce(u))return function(i,o,a,l){var u=Ce(a);if("function"!=typeof u)throw Error($(150));if(null==(a=u.call(a)))throw Error($(151));for(var c=u=null,p=o,m=o=0,g=null,y=a.next();null!==p&&!y.done;m++,y=a.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=f(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),o=s(v,o,m),null===c?u=v:c.sibling=v,c=v,p=g}if(y.done)return n(i,p),u;if(null===p){for(;!y.done;m++,y=a.next())null!==(y=h(i,y.value,l))&&(o=s(y,o,m),null===c?u=y:c.sibling=y,c=y);return u}for(p=r(i,p);!y.done;m++,y=a.next())null!==(y=d(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),o=s(y,o,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),u}(a,l,u,c);if(m&&oo(a,u),void 0===u&&!p)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error($(152,Re(a.type)||"Component"))}return n(a,l)}}var lo=ao(!0),uo=ao(!1),co={},ho=$i(co),fo=$i(co),po=$i(co);function mo(e){if(e===co)throw Error($(174));return e}function go(e,t){switch(Ki(po,t),Ki(fo,e),Ki(ho,co),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ze(null,"");break;default:t=Ze(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Wi(ho),Ki(ho,t)}function yo(){Wi(ho),Wi(fo),Wi(po)}function vo(e){mo(po.current);var t=mo(ho.current),n=Ze(t,e.type);t!==n&&(Ki(fo,e),Ki(ho,n))}function wo(e){fo.current===e&&(Wi(ho),Wi(fo))}var bo=$i(0);function _o(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(64&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Eo=null,ko=null,So=!1;function To(e,t){var n=Iu(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,null!==e.lastEffect?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Io(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,!0);case 13:default:return!1}}function Co(e){if(So){var t=ko;if(t){var n=t;if(!Io(e,t)){if(!(t=Ai(n.nextSibling))||!Io(e,t))return e.flags=-1025&e.flags|2,So=!1,void(Eo=e);To(Eo,n)}Eo=e,ko=Ai(t.firstChild)}else e.flags=-1025&e.flags|2,So=!1,Eo=e}}function xo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;Eo=e}function No(e){if(e!==Eo)return!1;if(!So)return xo(e),So=!0,!1;var t=e.type;if(5!==e.tag||"head"!==t&&"body"!==t&&!Ii(t,e.memoizedProps))for(t=ko;t;)To(e,t),t=Ai(t.nextSibling);if(xo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ko=Ai(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ko=null}}else ko=Eo?Ai(e.stateNode.nextSibling):null;return!0}function Ao(){ko=Eo=null,So=!1}var Oo=[];function Ro(){for(var e=0;e<Oo.length;e++)Oo[e]._workInProgressVersionPrimary=null;Oo.length=0}var Po=oe.ReactCurrentDispatcher,Lo=oe.ReactCurrentBatchConfig,Do=0,Mo=null,Uo=null,Fo=null,zo=!1,Vo=!1;function jo(){throw Error($(321))}function Bo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wr(e[n],t[n]))return!1;return!0}function qo(e,t,n,r,i,s){if(Do=s,Mo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=null===e||null===e.memoizedState?ma:ga,e=n(r,i),Vo){s=0;do{if(Vo=!1,!(25>s))throw Error($(301));s+=1,Fo=Uo=null,t.updateQueue=null,Po.current=ya,e=n(r,i)}while(Vo)}if(Po.current=pa,t=null!==Uo&&null!==Uo.next,Do=0,Fo=Uo=Mo=null,zo=!1,t)throw Error($(300));return e}function Ho(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Fo?Mo.memoizedState=Fo=e:Fo=Fo.next=e,Fo}function $o(){if(null===Uo){var e=Mo.alternate;e=null!==e?e.memoizedState:null}else e=Uo.next;var t=null===Fo?Mo.memoizedState:Fo.next;if(null!==t)Fo=t,Uo=e;else{if(null===e)throw Error($(310));e={memoizedState:(Uo=e).memoizedState,baseState:Uo.baseState,baseQueue:Uo.baseQueue,queue:Uo.queue,next:null},null===Fo?Mo.memoizedState=Fo=e:Fo=Fo.next=e}return Fo}function Wo(e,t){return"function"==typeof t?t(e):t}function Ko(e){var t=$o(),n=t.queue;if(null===n)throw Error($(311));n.lastRenderedReducer=e;var r=Uo,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(null!==i){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.lane;if((Do&u)===u)null!==a&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var c={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};null===a?(o=a=c,s=r):a=a.next=c,Mo.lanes|=u,kl|=u}l=l.next}while(null!==l&&l!==i);null===a?s=r:a.next=o,Wr(r,t.memoizedState)||(wa=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Go(e){var t=$o(),n=t.queue;if(null===n)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var o=i=i.next;do{s=e(s,o.action),o=o.next}while(o!==i);Wr(s,t.memoizedState)||(wa=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Qo(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(null!==i?e=i===r:(e=e.mutableReadLanes,(e=(Do&e)===e)&&(t._workInProgressVersionPrimary=r,Oo.push(t))),e)return n(t._source);throw Oo.push(t),Error($(350))}function Xo(e,t,n,r){var i=ml;if(null===i)throw Error($(349));var s=t._getVersion,o=s(t._source),a=Po.current,l=a.useState((function(){return Qo(i,t,n)})),u=l[1],c=l[0];l=Fo;var h=e.memoizedState,f=h.refs,d=f.getSnapshot,p=h.source;h=h.subscribe;var m=Mo;return e.memoizedState={refs:f,source:t,subscribe:r},a.useEffect((function(){f.getSnapshot=n,f.setSnapshot=u;var e=s(t._source);if(!Wr(o,e)){e=n(t._source),Wr(c,e)||(u(e),e=Ql(m),i.mutableReadLanes|=e&i.pendingLanes),e=i.mutableReadLanes,i.entangledLanes|=e;for(var r=i.entanglements,a=e;0<a;){var l=31-An(a),h=1<<l;r[l]|=e,a&=~h}}}),[n,t,r]),a.useEffect((function(){return r(t._source,(function(){var e=f.getSnapshot,n=f.setSnapshot;try{n(e(t._source));var r=Ql(m);i.mutableReadLanes|=r&i.pendingLanes}catch(s){n((function(){throw s}))}}))}),[t,r]),Wr(d,n)&&Wr(p,t)&&Wr(h,r)||((e={pending:null,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:c}).dispatch=u=da.bind(null,Mo,e),l.queue=e,l.baseQueue=null,c=Qo(i,t,n),l.memoizedState=l.baseState=c),c}function Yo(e,t,n){return Xo($o(),e,t,n)}function Jo(e){var t=Ho();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e=(e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:e}).dispatch=da.bind(null,Mo,e),[t.memoizedState,e]}function Zo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=Mo.updateQueue)?(t={lastEffect:null},Mo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ea(e){return e={current:e},Ho().memoizedState=e}function ta(){return $o().memoizedState}function na(e,t,n,r){var i=Ho();Mo.flags|=e,i.memoizedState=Zo(1|t,n,void 0,void 0===r?null:r)}function ra(e,t,n,r){var i=$o();r=void 0===r?null:r;var s=void 0;if(null!==Uo){var o=Uo.memoizedState;if(s=o.destroy,null!==r&&Bo(r,o.deps))return void Zo(t,n,s,r)}Mo.flags|=e,i.memoizedState=Zo(1|t,n,s,r)}function ia(e,t){return na(516,4,e,t)}function sa(e,t){return ra(516,4,e,t)}function oa(e,t){return ra(4,2,e,t)}function aa(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function la(e,t,n){return n=null!=n?n.concat([e]):null,ra(4,2,aa.bind(null,t,e),n)}function ua(){}function ca(e,t){var n=$o();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ha(e,t){var n=$o();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&Bo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function fa(e,t){var n=Is();xs(98>n?98:n,(function(){e(!0)})),xs(97<n?97:n,(function(){var n=Lo.transition;Lo.transition=1;try{e(!1),t()}finally{Lo.transition=n}}))}function da(e,t,n){var r=Gl(),i=Ql(e),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=t.pending;if(null===o?s.next=s:(s.next=o.next,o.next=s),t.pending=s,o=e.alternate,e===Mo||null!==o&&o===Mo)Vo=zo=!0;else{if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,l=o(a,n);if(s.eagerReducer=o,s.eagerState=l,Wr(l,a))return}catch(u){}Xl(e,i,r)}}var pa={readContext:Bs,useCallback:jo,useContext:jo,useEffect:jo,useImperativeHandle:jo,useLayoutEffect:jo,useMemo:jo,useReducer:jo,useRef:jo,useState:jo,useDebugValue:jo,useDeferredValue:jo,useTransition:jo,useMutableSource:jo,useOpaqueIdentifier:jo,unstable_isNewReconciler:!1},ma={readContext:Bs,useCallback:function(e,t){return Ho().memoizedState=[e,void 0===t?null:t],e},useContext:Bs,useEffect:ia,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,na(4,2,aa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return na(4,2,e,t)},useMemo:function(e,t){var n=Ho();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ho();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e=(e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t}).dispatch=da.bind(null,Mo,e),[r.memoizedState,e]},useRef:ea,useState:Jo,useDebugValue:ua,useDeferredValue:function(e){var t=Jo(e),n=t[0],r=t[1];return ia((function(){var t=Lo.transition;Lo.transition=1;try{r(e)}finally{Lo.transition=t}}),[e]),n},useTransition:function(){var e=Jo(!1),t=e[0];return ea(e=fa.bind(null,e[1])),[e,t]},useMutableSource:function(e,t,n){var r=Ho();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Xo(r,e,t,n)},useOpaqueIdentifier:function(){if(So){var e=!1,t=function(e){return{$$typeof:be,toString:e,valueOf:e}}((function(){throw e||(e=!0,n("r:"+(Ri++).toString(36))),Error($(355))})),n=Jo(t)[1];return 0==(2&Mo.mode)&&(Mo.flags|=516,Zo(5,(function(){n("r:"+(Ri++).toString(36))}),void 0,null)),t}return Jo(t="r:"+(Ri++).toString(36)),t},unstable_isNewReconciler:!1},ga={readContext:Bs,useCallback:ca,useContext:Bs,useEffect:sa,useImperativeHandle:la,useLayoutEffect:oa,useMemo:ha,useReducer:Ko,useRef:ta,useState:function(){return Ko(Wo)},useDebugValue:ua,useDeferredValue:function(e){var t=Ko(Wo),n=t[0],r=t[1];return sa((function(){var t=Lo.transition;Lo.transition=1;try{r(e)}finally{Lo.transition=t}}),[e]),n},useTransition:function(){var e=Ko(Wo)[0];return[ta().current,e]},useMutableSource:Yo,useOpaqueIdentifier:function(){return Ko(Wo)[0]},unstable_isNewReconciler:!1},ya={readContext:Bs,useCallback:ca,useContext:Bs,useEffect:sa,useImperativeHandle:la,useLayoutEffect:oa,useMemo:ha,useReducer:Go,useRef:ta,useState:function(){return Go(Wo)},useDebugValue:ua,useDeferredValue:function(e){var t=Go(Wo),n=t[0],r=t[1];return sa((function(){var t=Lo.transition;Lo.transition=1;try{r(e)}finally{Lo.transition=t}}),[e]),n},useTransition:function(){var e=Go(Wo)[0];return[ta().current,e]},useMutableSource:Yo,useOpaqueIdentifier:function(){return Go(Wo)[0]},unstable_isNewReconciler:!1},va=oe.ReactCurrentOwner,wa=!1;function ba(e,t,n,r){t.child=null===e?uo(t,null,n,r):lo(t,e.child,n,r)}function _a(e,t,n,r,i){n=n.render;var s=t.ref;return js(t,i),r=qo(e,t,n,r,s,i),null===e||wa?(t.flags|=1,ba(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ja(e,t,i))}function Ea(e,t,n,r,i,s){if(null===e){var o=n.type;return"function"!=typeof o||Cu(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Nu(n.type,null,r,t,t.mode,s)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ka(e,t,o,r,i,s))}return o=e.child,0==(i&s)&&(i=o.memoizedProps,(n=null!==(n=n.compare)?n:Gr)(i,r)&&e.ref===t.ref)?ja(e,t,s):(t.flags|=1,(e=xu(o,r)).ref=t.ref,e.return=t,t.child=e)}function ka(e,t,n,r,i,s){if(null!==e&&Gr(e.memoizedProps,r)&&e.ref===t.ref){if(wa=!1,0==(s&i))return t.lanes=e.lanes,ja(e,t,s);0!=(16384&e.flags)&&(wa=!0)}return Ia(e,t,n,r,s)}function Sa(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode||"unstable-defer-without-hiding"===r.mode)if(0==(4&t.mode))t.memoizedState={baseLanes:0},iu(t,n);else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},iu(t,e),null;t.memoizedState={baseLanes:0},iu(t,null!==s?s.baseLanes:n)}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,iu(t,r);return ba(e,t,i,n),t.child}function Ta(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=128)}function Ia(e,t,n,r,i){var s=Zi(n)?Yi:Qi.current;return s=Ji(t,s),js(t,i),n=qo(e,t,n,r,s,i),null===e||wa?(t.flags|=1,ba(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ja(e,t,i))}function Ca(e,t,n,r,i){if(Zi(n)){var s=!0;rs(t)}else s=!1;if(js(t,i),null===t.stateNode)null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),to(t,n,r),ro(t,n,r,i),r=!0;else if(null===e){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;"object"==typeof u&&null!==u?u=Bs(u):u=Ji(t,u=Zi(n)?Yi:Qi.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;h||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==r||l!==u)&&no(t,o,r,u),qs=!1;var f=t.memoizedState;o.state=f,Qs(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Xi.current||qs?("function"==typeof c&&(Js(t,n,c,r),l=t.memoizedState),(a=qs||eo(t,n,a,r,f,l,u))?(h||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4)):("function"==typeof o.componentDidMount&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):("function"==typeof o.componentDidMount&&(t.flags|=4),r=!1)}else{o=t.stateNode,$s(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:Ps(t.type,a),o.props=u,h=t.pendingProps,f=o.context,"object"==typeof(l=n.contextType)&&null!==l?l=Bs(l):l=Ji(t,l=Zi(n)?Yi:Qi.current);var d=n.getDerivedStateFromProps;(c="function"==typeof d||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(a!==h||f!==l)&&no(t,o,r,l),qs=!1,f=t.memoizedState,o.state=f,Qs(t,r,o,i);var p=t.memoizedState;a!==h||f!==p||Xi.current||qs?("function"==typeof d&&(Js(t,n,d,r),p=t.memoizedState),(u=qs||eo(t,n,u,r,f,p,l))?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,p,l),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=256)):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=p),o.props=r,o.state=p,o.context=l,r=u):("function"!=typeof o.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=256),r=!1)}return xa(e,t,n,r,s,i)}function xa(e,t,n,r,i,s){Ta(e,t);var o=0!=(64&t.flags);if(!r&&!o)return i&&is(t,n,!1),ja(e,t,s);r=t.stateNode,va.current=t;var a=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=lo(t,e.child,null,s),t.child=lo(t,null,a,s)):ba(e,t,a,s),t.memoizedState=r.state,i&&is(t,n,!0),t.child}function Na(e){var t=e.stateNode;t.pendingContext?ts(0,t.pendingContext,t.pendingContext!==t.context):t.context&&ts(0,t.context,!1),go(e,t.containerInfo)}var Aa,Oa,Ra,Pa={dehydrated:null,retryLane:0};function La(e,t,n){var r,i=t.pendingProps,s=bo.current,o=!1;return(r=0!=(64&t.flags))||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(o=!0,t.flags&=-65):null!==e&&null===e.memoizedState||void 0===i.fallback||!0===i.unstable_avoidThisFallback||(s|=1),Ki(bo,1&s),null===e?(void 0!==i.fallback&&Co(t),e=i.children,s=i.fallback,o?(e=Da(t,e,s,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Pa,e):"number"==typeof i.unstable_expectedLoadTime?(e=Da(t,e,s,n),t.child.memoizedState={baseLanes:n},t.memoizedState=Pa,t.lanes=33554432,e):((n=Ou({mode:"visible",children:e},t.mode,n,null)).return=t,t.child=n)):(e.memoizedState,o?(i=Ua(e,t,i.children,i.fallback,n),o=t.child,s=e.child.memoizedState,o.memoizedState=null===s?{baseLanes:n}:{baseLanes:s.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=Pa,i):(n=Ma(e,t,i.children,n),t.memoizedState=null,n))}function Da(e,t,n,r){var i=e.mode,s=e.child;return t={mode:"hidden",children:t},0==(2&i)&&null!==s?(s.childLanes=0,s.pendingProps=t):s=Ou(t,i,0,null),n=Au(n,i,r,null),s.return=e,n.return=e,s.sibling=n,e.child=s,n}function Ma(e,t,n,r){var i=e.child;return e=i.sibling,n=xu(i,{mode:"visible",children:n}),0==(2&t.mode)&&(n.lanes=r),n.return=t,n.sibling=null,null!==e&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function Ua(e,t,n,r,i){var s=t.mode,o=e.child;e=o.sibling;var a={mode:"hidden",children:n};return 0==(2&s)&&t.child!==o?((n=t.child).childLanes=0,n.pendingProps=a,null!==(o=n.lastEffect)?(t.firstEffect=n.firstEffect,t.lastEffect=o,o.nextEffect=null):t.firstEffect=t.lastEffect=null):n=xu(o,a),null!==e?r=xu(e,r):(r=Au(r,s,i,null)).flags|=2,r.return=t,n.return=t,n.sibling=r,t.child=n,r}function Fa(e,t){e.lanes|=t;var n=e.alternate;null!==n&&(n.lanes|=t),Vs(e.return,t)}function za(e,t,n,r,i,s){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function Va(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ba(e,t,r.children,n),0!=(2&(r=bo.current)))r=1&r|2,t.flags|=64;else{if(null!==e&&0!=(64&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fa(e,n);else if(19===e.tag)Fa(e,n);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ki(bo,r),0==(2&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===_o(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),za(t,!1,i,n,s,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===_o(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}za(t,!0,n,null,s,t.lastEffect);break;case"together":za(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function ja(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),kl|=t.lanes,0!=(n&t.childLanes)){if(null!==e&&t.child!==e.child)throw Error($(153));if(null!==t.child){for(n=xu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=xu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}return null}function Ba(e,t){if(!So)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qa(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Zi(t.type)&&es(),null;case 3:return yo(),Wi(Xi),Wi(Qi),Ro(),(r=t.stateNode).pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(No(t)?t.flags|=4:r.hydrate||(t.flags|=256)),null;case 5:wo(t);var i=mo(po.current);if(n=t.type,null!==e&&null!=t.stateNode)Oa(e,t,n,r),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(null===t.stateNode)throw Error($(166));return null}if(e=mo(ho.current),No(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Li]=t,r[Di]=s,n){case"dialog":fi("cancel",r),fi("close",r);break;case"iframe":case"object":case"embed":fi("load",r);break;case"video":case"audio":for(e=0;e<li.length;e++)fi(li[e],r);break;case"source":fi("error",r);break;case"img":case"image":case"link":fi("error",r),fi("load",r);break;case"details":fi("toggle",r);break;case"input":ze(r,s),fi("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fi("invalid",r);break;case"textarea":Ke(r,s),fi("invalid",r)}for(var o in ut(n,s),e=null,s)s.hasOwnProperty(o)&&(i=s[o],"children"===o?"string"==typeof i?r.textContent!==i&&(e=["children",i]):"number"==typeof i&&r.textContent!==""+i&&(e=["children",""+i]):K.hasOwnProperty(o)&&null!=i&&"onScroll"===o&&fi("scroll",r));switch(n){case"input":De(r),Be(r,s,!0);break;case"textarea":De(r),Qe(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Ei)}r=e,t.updateQueue=r,null!==r&&(t.flags|=4)}else{switch(o=9===i.nodeType?i:i.ownerDocument,e===Xe&&(e=Je(n)),e===Xe?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Li]=t,e[Di]=r,Aa(e,t),t.stateNode=e,o=ct(n,r),n){case"dialog":fi("cancel",e),fi("close",e),i=r;break;case"iframe":case"object":case"embed":fi("load",e),i=r;break;case"video":case"audio":for(i=0;i<li.length;i++)fi(li[i],e);i=r;break;case"source":fi("error",e),i=r;break;case"img":case"image":case"link":fi("error",e),fi("load",e),i=r;break;case"details":fi("toggle",e),i=r;break;case"input":ze(e,r),i=Fe(e,r),fi("invalid",e);break;case"option":i=He(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=q({},r,{value:void 0}),fi("invalid",e);break;case"textarea":Ke(e,r),i=We(e,r),fi("invalid",e);break;default:i=r}ut(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];"style"===s?at(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&nt(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&rt(e,l):"number"==typeof l&&rt(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(K.hasOwnProperty(s)?null!=l&&"onScroll"===s&&fi("scroll",e):null!=l&&se(e,s,l,o))}switch(n){case"input":De(e),Be(e,r,!1);break;case"textarea":De(e),Qe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+Pe(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?$e(e,!!r.multiple,s,!1):null!=r.defaultValue&&$e(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Ei)}Ti(n,r)&&(t.flags|=4)}null!==t.ref&&(t.flags|=128)}return null;case 6:if(e&&null!=t.stateNode)Ra(0,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error($(166));n=mo(po.current),mo(ho.current),No(t)?(r=t.stateNode,n=t.memoizedProps,r[Li]=t,r.nodeValue!==n&&(t.flags|=4)):((r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[Li]=t,t.stateNode=r)}return null;case 13:return Wi(bo),r=t.memoizedState,0!=(64&t.flags)?(t.lanes=n,t):(r=null!==r,n=!1,null===e?void 0!==t.memoizedProps.fallback&&No(t):n=null!==e.memoizedState,r&&!n&&0!=(2&t.mode)&&(null===e&&!0!==t.memoizedProps.unstable_avoidThisFallback||0!=(1&bo.current)?0===bl&&(bl=3):(0!==bl&&3!==bl||(bl=4),null===ml||0==(134217727&kl)&&0==(134217727&Sl)||eu(ml,yl))),(r||n)&&(t.flags|=4),null);case 4:return yo(),null===e&&pi(t.stateNode.containerInfo),null;case 10:return zs(t),null;case 17:return Zi(t.type)&&es(),null;case 19:if(Wi(bo),null===(r=t.memoizedState))return null;if(s=0!=(64&t.flags),null===(o=r.rendering))if(s)Ba(r,!1);else{if(0!==bl||null!==e&&0!=(64&e.flags))for(e=t.child;null!==e;){if(null!==(o=_o(e))){for(t.flags|=64,Ba(r,!1),null!==(s=o.updateQueue)&&(t.updateQueue=s,t.flags|=4),null===r.lastEffect&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,null===(o=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ki(bo,1&bo.current|2),t.child}e=e.sibling}null!==r.tail&&Ts()>xl&&(t.flags|=64,s=!0,Ba(r,!1),t.lanes=33554432)}else{if(!s)if(null!==(e=_o(o))){if(t.flags|=64,s=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ba(r,!0),null===r.tail&&"hidden"===r.tailMode&&!o.alternate&&!So)return null!==(t=t.lastEffect=r.lastEffect)&&(t.nextEffect=null),null}else 2*Ts()-r.renderingStartTime>xl&&1073741824!==n&&(t.flags|=64,s=!0,Ba(r,!1),t.lanes=33554432);r.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=r.last)?n.sibling=o:t.child=o,r.last=o)}return null!==r.tail?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=Ts(),n.sibling=null,t=bo.current,Ki(bo,s?1&t|2:1&t),n):null;case 23:case 24:return su(),null!==e&&null!==e.memoizedState!=(null!==t.memoizedState)&&"unstable-defer-without-hiding"!==r.mode&&(t.flags|=4),null}throw Error($(156,t.tag))}function Ha(e){switch(e.tag){case 1:Zi(e.type)&&es();var t=e.flags;return 4096&t?(e.flags=-4097&t|64,e):null;case 3:if(yo(),Wi(Xi),Wi(Qi),Ro(),0!=(64&(t=e.flags)))throw Error($(285));return e.flags=-4097&t|64,e;case 5:return wo(e),null;case 13:return Wi(bo),4096&(t=e.flags)?(e.flags=-4097&t|64,e):null;case 19:return Wi(bo),null;case 4:return yo(),null;case 10:return zs(e),null;case 23:case 24:return su(),null;default:return null}}function $a(e,t){try{var n="",r=t;do{n+=Oe(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i}}function Wa(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}Aa=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Oa=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,mo(ho.current);var s,o=null;switch(n){case"input":i=Fe(e,i),r=Fe(e,r),o=[];break;case"option":i=He(e,i),r=He(e,r),o=[];break;case"select":i=q({},i,{value:void 0}),r=q({},r,{value:void 0}),o=[];break;case"textarea":i=We(e,i),r=We(e,r),o=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Ei)}for(u in ut(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(K.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(null!=l||null!=a))if("style"===u)if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,a=a?a.__html:void 0,null!=l&&a!==l&&(o=o||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(o=o||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(K.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&fi("scroll",e),o||a===l||(o=[])):"object"==typeof l&&null!==l&&l.$$typeof===be?l.toString():(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},Ra=function(e,t,n,r){n!==r&&(t.flags|=4)};var Ka="function"==typeof WeakMap?WeakMap:Map;function Ga(e,t,n){(n=Ws(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Rl||(Rl=!0,Pl=r),Wa(0,t)},n}function Qa(e,t,n){(n=Ws(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return Wa(0,t),r(i)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Ll?Ll=new Set([this]):Ll.add(this),Wa(0,t));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}var Xa="function"==typeof WeakSet?WeakSet:Set;function Ya(e){var t=e.ref;if(null!==t)if("function"==typeof t)try{t(null)}catch(n){Eu(e,n)}else t.current=null}function Ja(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(256&t.flags&&null!==e){var n=e.memoizedProps,r=e.memoizedState;t=(e=t.stateNode).getSnapshotBeforeUpdate(t.elementType===t.type?n:Ps(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:return void(256&t.flags&&Ni(t.stateNode.containerInfo));case 5:case 6:case 4:case 17:return}throw Error($(163))}function Za(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{if(3==(3&e.tag)){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(null!==(t=null!==(t=n.updateQueue)?t.lastEffect:null)){e=t=t.next;do{var i=e;r=i.next,0!=(4&(i=i.tag))&&0!=(1&i)&&(wu(n,e),vu(n,e)),e=r}while(e!==t)}return;case 1:return e=n.stateNode,4&n.flags&&(null===t?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:Ps(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),void(null!==(t=n.updateQueue)&&Xs(n,t,e));case 3:if(null!==(t=n.updateQueue)){if(e=null,null!==n.child)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}Xs(n,t,e)}return;case 5:return e=n.stateNode,void(null===t&&4&n.flags&&Ti(n.type,n.memoizedProps)&&e.focus());case 6:case 4:case 12:return;case 13:return void(null===n.memoizedState&&(n=n.alternate,null!==n&&(n=n.memoizedState,null!==n&&(n=n.dehydrated,null!==n&&ln(n)))));case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error($(163))}function el(e,t){for(var n=e;;){if(5===n.tag){var r=n.stateNode;if(t)"function"==typeof(r=r.style).setProperty?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=null!=i&&i.hasOwnProperty("display")?i.display:null,r.style.display=ot("display",i)}}else if(6===n.tag)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((23!==n.tag&&24!==n.tag||null===n.memoizedState||n===e)&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===e)break;for(;null===n.sibling;){if(null===n.return||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function tl(e,t){if(os&&"function"==typeof os.onCommitFiberUnmount)try{os.onCommitFiberUnmount(ss,t)}catch(s){}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(null!==(e=t.updateQueue)&&null!==(e=e.lastEffect)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,void 0!==i)if(0!=(4&r))wu(t,n);else{r=t;try{i()}catch(s){Eu(r,s)}}n=n.next}while(n!==e)}break;case 1:if(Ya(t),"function"==typeof(e=t.stateNode).componentWillUnmount)try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(s){Eu(t,s)}break;case 5:Ya(t);break;case 4:al(e,t)}}function nl(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function rl(e){return 5===e.tag||3===e.tag||4===e.tag}function il(e){e:{for(var t=e.return;null!==t;){if(rl(t))break e;t=t.return}throw Error($(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:case 4:t=t.containerInfo,r=!0;break;default:throw Error($(161))}16&n.flags&&(rt(t,""),n.flags&=-17);e:t:for(n=e;;){for(;null===n.sibling;){if(null===n.return||rl(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;5!==n.tag&&6!==n.tag&&18!==n.tag;){if(2&n.flags)continue t;if(null===n.child||4===n.tag)continue t;n.child.return=n,n=n.child}if(!(2&n.flags)){n=n.stateNode;break e}}r?sl(e,n,t):ol(e,n,t)}function sl(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Ei));else if(4!==r&&null!==(e=e.child))for(sl(e,t,n),e=e.sibling;null!==e;)sl(e,t,n),e=e.sibling}function ol(e,t,n){var r=e.tag,i=5===r||6===r;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ol(e,t,n),e=e.sibling;null!==e;)ol(e,t,n),e=e.sibling}function al(e,t){for(var n,r,i=t,s=!1;;){if(!s){s=i.return;e:for(;;){if(null===s)throw Error($(160));switch(n=s.stateNode,s.tag){case 5:r=!1;break e;case 3:case 4:n=n.containerInfo,r=!0;break e}s=s.return}s=!0}if(5===i.tag||6===i.tag){e:for(var o=e,a=i,l=a;;)if(tl(o,l),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else{if(l===a)break e;for(;null===l.sibling;){if(null===l.return||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}r?(o=n,a=i.stateNode,8===o.nodeType?o.parentNode.removeChild(a):o.removeChild(a)):n.removeChild(i.stateNode)}else if(4===i.tag){if(null!==i.child){n=i.stateNode.containerInfo,r=!0,i.child.return=i,i=i.child;continue}}else if(tl(e,i),null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break;for(;null===i.sibling;){if(null===i.return||i.return===t)return;4===(i=i.return).tag&&(s=!1)}i.sibling.return=i.return,i=i.sibling}}function ll(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(null!==(n=null!==n?n.lastEffect:null)){var r=n=n.next;do{3==(3&r.tag)&&(e=r.destroy,r.destroy=void 0,void 0!==e&&e()),r=r.next}while(r!==n)}return;case 1:return;case 5:if(null!=(n=t.stateNode)){r=t.memoizedProps;var i=null!==e?e.memoizedProps:r;e=t.type;var s=t.updateQueue;if(t.updateQueue=null,null!==s){for(n[Di]=r,"input"===e&&"radio"===r.type&&null!=r.name&&Ve(n,r),ct(e,i),t=ct(e,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];"style"===o?at(n,a):"dangerouslySetInnerHTML"===o?nt(n,a):"children"===o?rt(n,a):se(n,o,a,t)}switch(e){case"input":je(n,r);break;case"textarea":Ge(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,null!=(s=r.value)?$e(n,!!r.multiple,s,!1):e!==!!r.multiple&&(null!=r.defaultValue?$e(n,!!r.multiple,r.defaultValue,!0):$e(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(null===t.stateNode)throw Error($(162));return void(t.stateNode.nodeValue=t.memoizedProps);case 3:return void((n=t.stateNode).hydrate&&(n.hydrate=!1,ln(n.containerInfo)));case 12:return;case 13:return null!==t.memoizedState&&(Cl=Ts(),el(t.child,!0)),void ul(t);case 19:return void ul(t);case 17:return;case 23:case 24:return void el(t,null!==t.memoizedState)}throw Error($(163))}function ul(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xa),t.forEach((function(t){var r=Su.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function cl(e,t){return null!==e&&(null===(e=e.memoizedState)||null!==e.dehydrated)&&(null!==(t=t.memoizedState)&&null===t.dehydrated)}var hl=Math.ceil,fl=oe.ReactCurrentDispatcher,dl=oe.ReactCurrentOwner,pl=0,ml=null,gl=null,yl=0,vl=0,wl=$i(0),bl=0,_l=null,El=0,kl=0,Sl=0,Tl=0,Il=null,Cl=0,xl=1/0;function Nl(){xl=Ts()+500}var Al,Ol=null,Rl=!1,Pl=null,Ll=null,Dl=!1,Ml=null,Ul=90,Fl=[],zl=[],Vl=null,jl=0,Bl=null,ql=-1,Hl=0,$l=0,Wl=null,Kl=!1;function Gl(){return 0!=(48&pl)?Ts():-1!==ql?ql:ql=Ts()}function Ql(e){if(0==(2&(e=e.mode)))return 1;if(0==(4&e))return 99===Is()?1:2;if(0===Hl&&(Hl=El),0!==Rs.transition){0!==$l&&($l=null!==Il?Il.pendingLanes:0),e=Hl;var t=4186112&~$l;return 0===(t&=-t)&&(0===(t=(e=4186112&~e)&-e)&&(t=8192)),t}return e=Is(),0!=(4&pl)&&98===e?e=In(12,Hl):e=In(e=function(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}(e),Hl),e}function Xl(e,t,n){if(50<jl)throw jl=0,Bl=null,Error($(185));if(null===(e=Yl(e,t)))return null;Nn(e,t,n),e===ml&&(Sl|=t,4===bl&&eu(e,yl));var r=Is();1===t?0!=(8&pl)&&0==(48&pl)?tu(e):(Jl(e,n),0===pl&&(Nl(),As())):(0==(4&pl)||98!==r&&99!==r||(null===Vl?Vl=new Set([e]):Vl.add(e)),Jl(e,n)),Il=e}function Yl(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}function Jl(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-An(o),l=1<<a,u=s[a];if(-1===u){if(0==(l&r)||0!=(l&i)){u=t,kn(l);var c=En;s[a]=10<=c?u+250:6<=c?u+5e3:-1}}else u<=t&&(e.expiredLanes|=l);o&=~l}if(r=Sn(e,e===ml?yl:0),t=En,0===r)null!==n&&(n!==ws&&us(n),e.callbackNode=null,e.callbackPriority=0);else{if(null!==n){if(e.callbackPriority===t)return;n!==ws&&us(n)}15===t?(n=tu.bind(null,e),null===_s?(_s=[n],Es=ls(ps,Os)):_s.push(n),n=ws):14===t?n=Ns(99,tu.bind(null,e)):n=Ns(n=function(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error($(358,e))}}(t),Zl.bind(null,e)),e.callbackPriority=t,e.callbackNode=n}}function Zl(e){if(ql=-1,$l=Hl=0,0!=(48&pl))throw Error($(327));var t=e.callbackNode;if(yu()&&e.callbackNode!==t)return null;var n=Sn(e,e===ml?yl:0);if(0===n)return null;var r=n,i=pl;pl|=16;var s=lu();for(ml===e&&yl===r||(Nl(),ou(e,r));;)try{hu();break}catch(yx){au(e,yx)}if(Fs(),fl.current=s,pl=i,null!==gl?r=0:(ml=null,yl=0,r=bl),0!=(El&Sl))ou(e,0);else if(0!==r){if(2===r&&(pl|=64,e.hydrate&&(e.hydrate=!1,Ni(e.containerInfo)),0!==(n=Tn(e))&&(r=uu(e,n))),1===r)throw t=_l,ou(e,0),eu(e,n),Jl(e,Ts()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error($(345));case 2:pu(e);break;case 3:if(eu(e,n),(62914560&n)===n&&10<(r=Cl+500-Ts())){if(0!==Sn(e,0))break;if(((i=e.suspendedLanes)&n)!==n){Gl(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ci(pu.bind(null,e),r);break}pu(e);break;case 4:if(eu(e,n),(4186112&n)===n)break;for(r=e.eventTimes,i=-1;0<n;){var o=31-An(n);s=1<<o,(o=r[o])>i&&(i=o),n&=~s}if(n=i,10<(n=(120>(n=Ts()-n)?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*hl(n/1960))-n)){e.timeoutHandle=Ci(pu.bind(null,e),n);break}pu(e);break;case 5:pu(e);break;default:throw Error($(329))}}return Jl(e,Ts()),e.callbackNode===t?Zl.bind(null,e):null}function eu(e,t){for(t&=~Tl,t&=~Sl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-An(t),r=1<<n;e[n]=-1,t&=~r}}function tu(e){if(0!=(48&pl))throw Error($(327));if(yu(),e===ml&&0!=(e.expiredLanes&yl)){var t=yl,n=uu(e,t);0!=(El&Sl)&&(n=uu(e,t=Sn(e,t)))}else n=uu(e,t=Sn(e,0));if(0!==e.tag&&2===n&&(pl|=64,e.hydrate&&(e.hydrate=!1,Ni(e.containerInfo)),0!==(t=Tn(e))&&(n=uu(e,t))),1===n)throw n=_l,ou(e,0),eu(e,t),Jl(e,Ts()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,pu(e),Jl(e,Ts()),null}function nu(e,t){var n=pl;pl|=1;try{return e(t)}finally{0===(pl=n)&&(Nl(),As())}}function ru(e,t){var n=pl;pl&=-2,pl|=8;try{return e(t)}finally{0===(pl=n)&&(Nl(),As())}}function iu(e,t){Ki(wl,vl),vl|=t,El|=t}function su(){vl=wl.current,Wi(wl)}function ou(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,xi(n)),null!==gl)for(n=gl.return;null!==n;){var r=n;switch(r.tag){case 1:null!=(r=r.type.childContextTypes)&&es();break;case 3:yo(),Wi(Xi),Wi(Qi),Ro();break;case 5:wo(r);break;case 4:yo();break;case 13:case 19:Wi(bo);break;case 10:zs(r);break;case 23:case 24:su()}n=n.return}ml=e,gl=xu(e.current,null),yl=vl=El=t,bl=0,_l=null,Tl=Sl=kl=0}function au(e,t){for(;;){var n=gl;try{if(Fs(),Po.current=pa,zo){for(var r=Mo.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}zo=!1}if(Do=0,Fo=Uo=Mo=null,Vo=!1,dl.current=null,null===n||null===n.return){bl=1,_l=t,gl=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=yl,a.flags|=2048,a.firstEffect=a.lastEffect=null,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l;if(0==(2&a.mode)){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=0!=(1&bo.current),f=o;do{var d;if(d=13===f.tag){var p=f.memoizedState;if(null!==p)d=null!==p.dehydrated;else{var m=f.memoizedProps;d=void 0!==m.fallback&&(!0!==m.unstable_avoidThisFallback||!h)}}if(d){var g=f.updateQueue;if(null===g){var y=new Set;y.add(u),f.updateQueue=y}else g.add(u);if(0==(2&f.mode)){if(f.flags|=64,a.flags|=16384,a.flags&=-2981,1===a.tag)if(null===a.alternate)a.tag=17;else{var v=Ws(-1,1);v.tag=2,Ks(a,v)}a.lanes|=1;break e}l=void 0,a=t;var w=s.pingCache;if(null===w?(w=s.pingCache=new Ka,l=new Set,w.set(u,l)):void 0===(l=w.get(u))&&(l=new Set,w.set(u,l)),!l.has(a)){l.add(a);var b=ku.bind(null,s,u,a);u.then(b,b)}f.flags|=4096,f.lanes=t;break e}f=f.return}while(null!==f);l=Error((Re(a.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==bl&&(bl=2),l=$a(l,a),f=o;do{switch(f.tag){case 3:s=l,f.flags|=4096,t&=-t,f.lanes|=t,Gs(f,Ga(0,s,t));break e;case 1:s=l;var _=f.type,E=f.stateNode;if(0==(64&f.flags)&&("function"==typeof _.getDerivedStateFromError||null!==E&&"function"==typeof E.componentDidCatch&&(null===Ll||!Ll.has(E)))){f.flags|=4096,t&=-t,f.lanes|=t,Gs(f,Qa(f,s,t));break e}}f=f.return}while(null!==f)}du(n)}catch(hm){t=hm,gl===n&&null!==n&&(gl=n=n.return);continue}break}}function lu(){var e=fl.current;return fl.current=pa,null===e?pa:e}function uu(e,t){var n=pl;pl|=16;var r=lu();for(ml===e&&yl===t||ou(e,t);;)try{cu();break}catch(i){au(e,i)}if(Fs(),pl=n,fl.current=r,null!==gl)throw Error($(261));return ml=null,yl=0,bl}function cu(){for(;null!==gl;)fu(gl)}function hu(){for(;null!==gl&&!cs();)fu(gl)}function fu(e){var t=Al(e.alternate,e,vl);e.memoizedProps=e.pendingProps,null===t?du(e):gl=t,dl.current=null}function du(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(2048&t.flags)){if(null!==(n=qa(n,t,vl)))return void(gl=n);if(24!==(n=t).tag&&23!==n.tag||null===n.memoizedState||0!=(1073741824&vl)||0==(4&n.mode)){for(var r=0,i=n.child;null!==i;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}null!==e&&0==(2048&e.flags)&&(null===e.firstEffect&&(e.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==e.lastEffect&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(null!==e.lastEffect?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(null!==(n=Ha(t)))return n.flags&=2047,void(gl=n);null!==e&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(null!==(t=t.sibling))return void(gl=t);gl=t=e}while(null!==t);0===bl&&(bl=5)}function pu(e){var t=Is();return xs(99,mu.bind(null,e,t)),null}function mu(e,t){do{yu()}while(null!==Ml);if(0!=(48&pl))throw Error($(327));var n=e.finishedWork;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var o=e.eventTimes,a=e.expirationTimes;0<s;){var l=31-An(s),u=1<<l;i[l]=0,o[l]=-1,a[l]=-1,s&=~u}if(null!==Vl&&0==(24&r)&&Vl.has(e)&&Vl.delete(e),e===ml&&(gl=ml=null,yl=0),1<n.flags?null!==n.lastEffect?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,null!==r){if(i=pl,pl|=32,dl.current=null,ki=Dn,Zr(o=Jr())){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&0!==u.rangeCount){a=u.anchorNode,s=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch(hm){a=null;break e}var c=0,h=-1,f=-1,d=0,p=0,m=o,g=null;t:for(;;){for(var y;m!==a||0!==s&&3!==m.nodeType||(h=c+s),m!==l||0!==u&&3!==m.nodeType||(f=c+u),3===m.nodeType&&(c+=m.nodeValue.length),null!==(y=m.firstChild);)g=m,m=y;for(;;){if(m===o)break t;if(g===a&&++d===s&&(h=c),g===l&&++p===u&&(f=c),null!==(y=m.nextSibling))break;g=(m=g).parentNode}m=y}a=-1===h||-1===f?null:{start:h,end:f}}else a=null;a=a||{start:0,end:0}}else a=null;Si={focusedElem:o,selectionRange:a},Dn=!1,Wl=null,Kl=!1,Ol=r;do{try{gu()}catch(hm){if(null===Ol)throw Error($(330));Eu(Ol,hm),Ol=Ol.nextEffect}}while(null!==Ol);Wl=null,Ol=r;do{try{for(o=e;null!==Ol;){var v=Ol.flags;if(16&v&&rt(Ol.stateNode,""),128&v){var w=Ol.alternate;if(null!==w){var b=w.ref;null!==b&&("function"==typeof b?b(null):b.current=null)}}switch(1038&v){case 2:il(Ol),Ol.flags&=-3;break;case 6:il(Ol),Ol.flags&=-3,ll(Ol.alternate,Ol);break;case 1024:Ol.flags&=-1025;break;case 1028:Ol.flags&=-1025,ll(Ol.alternate,Ol);break;case 4:ll(Ol.alternate,Ol);break;case 8:al(o,a=Ol);var _=a.alternate;nl(a),null!==_&&nl(_)}Ol=Ol.nextEffect}}catch(hm){if(null===Ol)throw Error($(330));Eu(Ol,hm),Ol=Ol.nextEffect}}while(null!==Ol);if(b=Si,w=Jr(),v=b.focusedElem,o=b.selectionRange,w!==v&&v&&v.ownerDocument&&Yr(v.ownerDocument.documentElement,v)){null!==o&&Zr(v)&&(w=o.start,void 0===(b=o.end)&&(b=w),"selectionStart"in v?(v.selectionStart=w,v.selectionEnd=Math.min(b,v.value.length)):(b=(w=v.ownerDocument||document)&&w.defaultView||window).getSelection&&(b=b.getSelection(),a=v.textContent.length,_=Math.min(o.start,a),o=void 0===o.end?_:Math.min(o.end,a),!b.extend&&_>o&&(a=o,o=_,_=a),a=Xr(v,_),s=Xr(v,o),a&&s&&(1!==b.rangeCount||b.anchorNode!==a.node||b.anchorOffset!==a.offset||b.focusNode!==s.node||b.focusOffset!==s.offset)&&((w=w.createRange()).setStart(a.node,a.offset),b.removeAllRanges(),_>o?(b.addRange(w),b.extend(s.node,s.offset)):(w.setEnd(s.node,s.offset),b.addRange(w))))),w=[];for(b=v;b=b.parentNode;)1===b.nodeType&&w.push({element:b,left:b.scrollLeft,top:b.scrollTop});for("function"==typeof v.focus&&v.focus(),v=0;v<w.length;v++)(b=w[v]).element.scrollLeft=b.left,b.element.scrollTop=b.top}Dn=!!ki,Si=ki=null,e.current=n,Ol=r;do{try{for(v=e;null!==Ol;){var E=Ol.flags;if(36&E&&Za(v,Ol.alternate,Ol),128&E){w=void 0;var k=Ol.ref;if(null!==k){var S=Ol.stateNode;switch(Ol.tag){case 5:w=S;break;default:w=S}"function"==typeof k?k(w):k.current=w}}Ol=Ol.nextEffect}}catch(hm){if(null===Ol)throw Error($(330));Eu(Ol,hm),Ol=Ol.nextEffect}}while(null!==Ol);Ol=null,bs(),pl=i}else e.current=n;if(Dl)Dl=!1,Ml=e,Ul=t;else for(Ol=r;null!==Ol;)t=Ol.nextEffect,Ol.nextEffect=null,8&Ol.flags&&((E=Ol).sibling=null,E.stateNode=null),Ol=t;if(0===(r=e.pendingLanes)&&(Ll=null),1===r?e===Bl?jl++:(jl=0,Bl=e):jl=0,n=n.stateNode,os&&"function"==typeof os.onCommitFiberRoot)try{os.onCommitFiberRoot(ss,n,void 0,64==(64&n.current.flags))}catch(hm){}if(Jl(e,Ts()),Rl)throw Rl=!1,e=Pl,Pl=null,e;return 0!=(8&pl)||As(),null}function gu(){for(;null!==Ol;){var e=Ol.alternate;Kl||null===Wl||(0!=(8&Ol.flags)?zt(Ol,Wl)&&(Kl=!0):13===Ol.tag&&cl(e,Ol)&&zt(Ol,Wl)&&(Kl=!0));var t=Ol.flags;0!=(256&t)&&Ja(e,Ol),0==(512&t)||Dl||(Dl=!0,Ns(97,(function(){return yu(),null}))),Ol=Ol.nextEffect}}function yu(){if(90!==Ul){var e=97<Ul?97:Ul;return Ul=90,xs(e,bu)}return!1}function vu(e,t){Fl.push(t,e),Dl||(Dl=!0,Ns(97,(function(){return yu(),null})))}function wu(e,t){zl.push(t,e),Dl||(Dl=!0,Ns(97,(function(){return yu(),null})))}function bu(){if(null===Ml)return!1;var e=Ml;if(Ml=null,0!=(48&pl))throw Error($(331));var t=pl;pl|=32;var n=zl;zl=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,"function"==typeof o)try{o()}catch(l){if(null===s)throw Error($(330));Eu(s,l)}}for(n=Fl,Fl=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(null===s)throw Error($(330));Eu(s,l)}}for(a=e.current.firstEffect;null!==a;)e=a.nextEffect,a.nextEffect=null,8&a.flags&&(a.sibling=null,a.stateNode=null),a=e;return pl=t,As(),!0}function _u(e,t,n){Ks(e,t=Ga(0,t=$a(n,t),1)),t=Gl(),null!==(e=Yl(e,1))&&(Nn(e,1,t),Jl(e,t))}function Eu(e,t){if(3===e.tag)_u(e,e,t);else for(var n=e.return;null!==n;){if(3===n.tag){_u(n,e,t);break}if(1===n.tag){var r=n.stateNode;if("function"==typeof n.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Ll||!Ll.has(r))){var i=Qa(n,e=$a(t,e),1);if(Ks(n,i),i=Gl(),null!==(n=Yl(n,1)))Nn(n,1,i),Jl(n,i);else if("function"==typeof r.componentDidCatch&&(null===Ll||!Ll.has(r)))try{r.componentDidCatch(t,e)}catch(s){}break}}n=n.return}}function ku(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Gl(),e.pingedLanes|=e.suspendedLanes&n,ml===e&&(yl&n)===n&&(4===bl||3===bl&&(62914560&yl)===yl&&500>Ts()-Cl?ou(e,0):Tl|=n),Jl(e,t)}function Su(e,t){var n=e.stateNode;null!==n&&n.delete(t),0===(t=0)&&(0==(2&(t=e.mode))?t=1:0==(4&t)?t=99===Is()?1:2:(0===Hl&&(Hl=El),0===(t=Cn(62914560&~Hl))&&(t=4194304))),n=Gl(),null!==(e=Yl(e,t))&&(Nn(e,t,n),Jl(e,n))}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function Iu(e,t,n,r){return new Tu(e,t,n,r)}function Cu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function xu(e,t){var n=e.alternate;return null===n?((n=Iu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nu(e,t,n,r,i,s){var o=2;if(r=e,"function"==typeof e)Cu(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case ue:return Au(n.children,i,s,t);case _e:o=8,i|=16;break;case ce:o=8,i|=1;break;case he:return(e=Iu(12,n,t,8|i)).elementType=he,e.type=he,e.lanes=s,e;case me:return(e=Iu(13,n,t,i)).type=me,e.elementType=me,e.lanes=s,e;case ge:return(e=Iu(19,n,t,i)).elementType=ge,e.lanes=s,e;case Ee:return Ou(n,i,s,t);case ke:return(e=Iu(24,n,t,i)).elementType=ke,e.lanes=s,e;default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case fe:o=10;break e;case de:o=9;break e;case pe:o=11;break e;case ye:o=14;break e;case ve:o=16,r=null;break e;case we:o=22;break e}throw Error($(130,null==e?e:typeof e,""))}return(t=Iu(o,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Au(e,t,n,r){return(e=Iu(7,e,r,t)).lanes=n,e}function Ou(e,t,n,r){return(e=Iu(23,e,r,t)).elementType=Ee,e.lanes=n,e}function Ru(e,t,n){return(e=Iu(6,e,null,t)).lanes=n,e}function Pu(e,t,n){return(t=Iu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lu(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=xn(0),this.expirationTimes=xn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.mutableSourceEagerHydrationData=null}function Du(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:le,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}function Mu(e,t,n,r){var i=t.current,s=Gl(),o=Ql(i);e:if(n){t:{if(Dt(n=n._reactInternals)!==n||1!==n.tag)throw Error($(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Zi(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(null!==a);throw Error($(171))}if(1===n.tag){var l=n.type;if(Zi(l)){n=ns(n,l,a);break e}}n=a}else n=Gi;return null===t.context?t.context=n:t.pendingContext=n,(t=Ws(s,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),Ks(i,t),Xl(i,o,s),o}function Uu(e){if(!(e=e.current).child)return null;switch(e.child.tag){case 5:default:return e.child.stateNode}}function Fu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function zu(e,t){Fu(e,t),(e=e.alternate)&&Fu(e,t)}function Vu(e,t,n){var r=null!=n&&null!=n.hydrationOptions&&n.hydrationOptions.mutableSources||null;if(n=new Lu(e,t,null!=n&&!0===n.hydrate),t=Iu(3,null,null,2===t?7:1===t?3:0),n.current=t,t.stateNode=n,Hs(t),e[Mi]=n.current,pi(8===e.nodeType?e.parentNode:e),r)for(e=0;e<r.length;e++){var i=(t=r[e])._getVersion;i=i(t._source),null==n.mutableSourceEagerHydrationData?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}function ju(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Bu(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if("function"==typeof i){var a=i;i=function(){var e=Uu(o);a.call(e)}}Mu(t,o,e,i)}else{if(s=n._reactRootContainer=function(e,t){if(t||(t=!(!(t=e?9===e.nodeType?e.documentElement:e.firstChild:null)||1!==t.nodeType||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new Vu(e,0,t?{hydrate:!0}:void 0)}(n,r),o=s._internalRoot,"function"==typeof i){var l=i;i=function(){var e=Uu(o);l.call(e)}}ru((function(){Mu(t,o,e,i)}))}return Uu(o)}function qu(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ju(t))throw Error($(200));return Du(e,t,null,n)}Al=function(e,t,n){var r=t.lanes;if(null!==e)if(e.memoizedProps!==t.pendingProps||Xi.current)wa=!0;else{if(0==(n&r)){switch(wa=!1,t.tag){case 3:Na(t),Ao();break;case 5:vo(t);break;case 1:Zi(t.type)&&rs(t);break;case 4:go(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;Ki(Ls,i._currentValue),i._currentValue=r;break;case 13:if(null!==t.memoizedState)return 0!=(n&t.child.childLanes)?La(e,t,n):(Ki(bo,1&bo.current),null!==(t=ja(e,t,n))?t.sibling:null);Ki(bo,1&bo.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(64&e.flags)){if(r)return Va(e,t,n);t.flags|=64}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ki(bo,bo.current),r)break;return null;case 23:case 24:return t.lanes=0,Sa(e,t,n)}return ja(e,t,n)}wa=0!=(16384&e.flags)}else wa=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=Ji(t,Qi.current),js(t,n),i=qo(null,t,r,e,i,n),t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,Zi(r)){var s=!0;rs(t)}else s=!1;t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Hs(t);var o=r.getDerivedStateFromProps;"function"==typeof o&&Js(t,r,o,e),i.updater=Zs,t.stateNode=i,i._reactInternals=t,ro(t,r,e,n),t=xa(null,t,r,!0,s,n)}else t.tag=0,ba(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=(s=i._init)(i._payload),t.type=i,s=t.tag=function(e){if("function"==typeof e)return Cu(e)?1:0;if(null!=e){if((e=e.$$typeof)===pe)return 11;if(e===ye)return 14}return 2}(i),e=Ps(i,e),s){case 0:t=Ia(null,t,i,e,n);break e;case 1:t=Ca(null,t,i,e,n);break e;case 11:t=_a(null,t,i,e,n);break e;case 14:t=Ea(null,t,i,Ps(i.type,e),r,n);break e}throw Error($(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ia(e,t,r,i=t.elementType===r?i:Ps(r,i),n);case 1:return r=t.type,i=t.pendingProps,Ca(e,t,r,i=t.elementType===r?i:Ps(r,i),n);case 3:if(Na(t),r=t.updateQueue,null===e||null===r)throw Error($(282));if(r=t.pendingProps,i=null!==(i=t.memoizedState)?i.element:null,$s(e,t),Qs(t,r,null,n),(r=t.memoizedState.element)===i)Ao(),t=ja(e,t,n);else{if((s=(i=t.stateNode).hydrate)&&(ko=Ai(t.stateNode.containerInfo.firstChild),Eo=t,s=So=!0),s){if(null!=(e=i.mutableSourceEagerHydrationData))for(i=0;i<e.length;i+=2)(s=e[i])._workInProgressVersionPrimary=e[i+1],Oo.push(s);for(n=uo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|1024,n=n.sibling}else ba(e,t,r,n),Ao();t=t.child}return t;case 5:return vo(t),null===e&&Co(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,o=i.children,Ii(r,i)?o=null:null!==s&&Ii(r,s)&&(t.flags|=16),Ta(e,t),ba(e,t,o,n),t.child;case 6:return null===e&&Co(t),null;case 13:return La(e,t,n);case 4:return go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=lo(t,null,r,n):ba(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,_a(e,t,r,i=t.elementType===r?i:Ps(r,i),n);case 7:return ba(e,t,t.pendingProps,n),t.child;case 8:case 12:return ba(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value;var a=t.type._context;if(Ki(Ls,a._currentValue),a._currentValue=s,null!==o)if(a=o.value,0===(s=Wr(a,s)?0:0|("function"==typeof r._calculateChangedBits?r._calculateChangedBits(a,s):1073741823))){if(o.children===i.children&&!Xi.current){t=ja(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){o=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r&&0!=(u.observedBits&s)){1===a.tag&&((u=Ws(-1,n&-n)).tag=2,Ks(a,u)),a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),Vs(a.return,n),l.lanes|=n;break}u=u.next}}else o=10===a.tag&&a.type===t.type?null:a.child;if(null!==o)o.return=a;else for(o=a;null!==o;){if(o===t){o=null;break}if(null!==(a=o.sibling)){a.return=o.return,o=a;break}o=o.return}a=o}ba(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=(s=t.pendingProps).children,js(t,n),r=r(i=Bs(i,s.unstable_observedBits)),t.flags|=1,ba(e,t,r,n),t.child;case 14:return s=Ps(i=t.type,t.pendingProps),Ea(e,t,i,s=Ps(i.type,s),r,n);case 15:return ka(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ps(r,i),null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,Zi(r)?(e=!0,rs(t)):e=!1,js(t,n),to(t,r,i),ro(t,r,i,n),xa(null,t,r,!0,e,n);case 19:return Va(e,t,n);case 23:case 24:return Sa(e,t,n)}throw Error($(156,t.tag))},Vu.prototype.render=function(e){Mu(e,this._internalRoot,null,null)},Vu.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;Mu(null,e,null,(function(){t[Mi]=null}))},Vt=function(e){13===e.tag&&(Xl(e,4,Gl()),zu(e,4))},jt=function(e){13===e.tag&&(Xl(e,67108864,Gl()),zu(e,67108864))},Bt=function(e){if(13===e.tag){var t=Gl(),n=Ql(e);Xl(e,n,t),zu(e,n)}},qt=function(e,t){return t()},ft=function(e,t,n){switch(t){case"input":if(je(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ji(r);if(!i)throw Error($(90));Me(r),je(r,i)}}}break;case"textarea":Ge(e,n);break;case"select":null!=(t=n.value)&&$e(e,!!n.multiple,t,!1)}},vt=nu,wt=function(e,t,n,r,i){var s=pl;pl|=4;try{return xs(98,e.bind(null,t,n,r,i))}finally{0===(pl=s)&&(Nl(),As())}},bt=function(){0==(49&pl)&&(function(){if(null!==Vl){var e=Vl;Vl=null,e.forEach((function(e){e.expiredLanes|=24&e.pendingLanes,Jl(e,Ts())}))}As()}(),yu())},_t=function(e,t){var n=pl;pl|=2;try{return e(t)}finally{0===(pl=n)&&(Nl(),As())}};var Hu={Events:[zi,Vi,ji,gt,yt,yu,{current:!1}]},$u={findFiberByHostInstance:Fi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Wu={bundleType:$u.bundleType,version:$u.version,rendererPackageName:$u.rendererPackageName,rendererConfig:$u.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:oe.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ft(e))?null:e.stateNode},findFiberByHostInstance:$u.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{ss=Ku.inject(Wu),os=Ku}catch(tt){}}z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hu,z.createPortal=qu,z.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error($(188));throw Error($(268,Object.keys(e)))}return e=null===(e=Ft(t))?null:e.stateNode},z.flushSync=function(e,t){var n=pl;if(0!=(48&n))return e(t);pl|=1;try{if(e)return xs(99,e.bind(null,t))}finally{pl=n,As()}},z.hydrate=function(e,t,n){if(!ju(t))throw Error($(200));return Bu(null,e,t,!0,n)},z.render=function(e,t,n){if(!ju(t))throw Error($(200));return Bu(null,e,t,!1,n)},z.unmountComponentAtNode=function(e){if(!ju(e))throw Error($(40));return!!e._reactRootContainer&&(ru((function(){Bu(null,null,e,!1,(function(){e._reactRootContainer=null,e[Mi]=null}))})),!0)},z.unstable_batchedUpdates=nu,z.unstable_createPortal=function(e,t){return qu(e,t,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)},z.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ju(n))throw Error($(200));if(null==e||void 0===e._reactInternals)throw Error($(38));return Bu(e,t,n,!1,r)},z.version="17.0.2",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),F.exports=z;var Gu=F.exports;function Qu(e,t){return(Qu=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Xu(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Qu(e,t)}var Yu={exports:{}};function Ju(){}function Zu(){}Zu.resetWarningCache=Ju;Yu.exports=function(){function e(e,t,n,r,i,s){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==s){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Zu,resetWarningCache:Ju};return n.PropTypes=n,n}();var ec=Yu.exports;function tc(){return(tc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function nc(e){return"/"===e.charAt(0)}function rc(e,t){for(var n=t,r=n+1,i=e.length;r<i;n+=1,r+=1)e[n]=e[r];e.pop()}function ic(e,t){if(!e)throw new Error("Invariant failed")}function sc(e){return"/"===e.charAt(0)?e:"/"+e}function oc(e,t){return function(e,t){return 0===e.toLowerCase().indexOf(t.toLowerCase())&&-1!=="/?#".indexOf(e.charAt(t.length))}(e,t)?e.substr(t.length):e}function ac(e){return"/"===e.charAt(e.length-1)?e.slice(0,-1):e}function lc(e){var t=e.pathname,n=e.search,r=e.hash,i=t||"/";return n&&"?"!==n&&(i+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(i+="#"===r.charAt(0)?r:"#"+r),i}function uc(e,t,n,r){var i;"string"==typeof e?(i=function(e){var t=e||"/",n="",r="",i=t.indexOf("#");-1!==i&&(r=t.substr(i),t=t.substr(0,i));var s=t.indexOf("?");return-1!==s&&(n=t.substr(s),t=t.substr(0,s)),{pathname:t,search:"?"===n?"":n,hash:"#"===r?"":r}}(e)).state=t:(void 0===(i=tc({},e)).pathname&&(i.pathname=""),i.search?"?"!==i.search.charAt(0)&&(i.search="?"+i.search):i.search="",i.hash?"#"!==i.hash.charAt(0)&&(i.hash="#"+i.hash):i.hash="",void 0!==t&&void 0===i.state&&(i.state=t));try{i.pathname=decodeURI(i.pathname)}catch(s){throw s instanceof URIError?new URIError('Pathname "'+i.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):s}return n&&(i.key=n),r?i.pathname?"/"!==i.pathname.charAt(0)&&(i.pathname=function(e,t){void 0===t&&(t="");var n,r=e&&e.split("/")||[],i=t&&t.split("/")||[],s=e&&nc(e),o=t&&nc(t),a=s||o;if(e&&nc(e)?i=r:r.length&&(i.pop(),i=i.concat(r)),!i.length)return"/";if(i.length){var l=i[i.length-1];n="."===l||".."===l||""===l}else n=!1;for(var u=0,c=i.length;c>=0;c--){var h=i[c];"."===h?rc(i,c):".."===h?(rc(i,c),u++):u&&(rc(i,c),u--)}if(!a)for(;u--;u)i.unshift("..");!a||""===i[0]||i[0]&&nc(i[0])||i.unshift("");var f=i.join("/");return n&&"/"!==f.substr(-1)&&(f+="/"),f}(i.pathname,r.pathname)):i.pathname=r.pathname:i.pathname||(i.pathname="/"),i}function cc(){var e=null;var t=[];return{setPrompt:function(t){return e=t,function(){e===t&&(e=null)}},confirmTransitionTo:function(t,n,r,i){if(null!=e){var s="function"==typeof e?e(t,n):e;"string"==typeof s?"function"==typeof r?r(s,i):i(!0):i(!1!==s)}else i(!0)},appendListener:function(e){var n=!0;function r(){n&&e.apply(void 0,arguments)}return t.push(r),function(){n=!1,t=t.filter((function(e){return e!==r}))}},notifyListeners:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t.forEach((function(e){return e.apply(void 0,n)}))}}}var hc=!("undefined"==typeof window||!window.document||!window.document.createElement);function fc(e,t){t(window.confirm(e))}function dc(){try{return window.history.state||{}}catch(e){return{}}}function pc(e){void 0===e&&(e={}),hc||ic(!1);var t,n=window.history,r=(-1===(t=window.navigator.userAgent).indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,i=!(-1===window.navigator.userAgent.indexOf("Trident")),s=e,o=s.forceRefresh,a=void 0!==o&&o,l=s.getUserConfirmation,u=void 0===l?fc:l,c=s.keyLength,h=void 0===c?6:c,f=e.basename?ac(sc(e.basename)):"";function d(e){var t=e||{},n=t.key,r=t.state,i=window.location,s=i.pathname+i.search+i.hash;return f&&(s=oc(s,f)),uc(s,r,n)}function p(){return Math.random().toString(36).substr(2,h)}var m=cc();function g(e){tc(x,e),x.length=n.length,m.notifyListeners(x.location,x.action)}function y(e){(function(e){return void 0===e.state&&-1===navigator.userAgent.indexOf("CriOS")})(e)||b(d(e.state))}function v(){b(d(dc()))}var w=!1;function b(e){if(w)w=!1,g();else{m.confirmTransitionTo(e,"POP",u,(function(t){t?g({action:"POP",location:e}):function(e){var t=x.location,n=E.indexOf(t.key);-1===n&&(n=0);var r=E.indexOf(e.key);-1===r&&(r=0);var i=n-r;i&&(w=!0,S(i))}(e)}))}}var _=d(dc()),E=[_.key];function k(e){return f+lc(e)}function S(e){n.go(e)}var T=0;function I(e){1===(T+=e)&&1===e?(window.addEventListener("popstate",y),i&&window.addEventListener("hashchange",v)):0===T&&(window.removeEventListener("popstate",y),i&&window.removeEventListener("hashchange",v))}var C=!1;var x={length:n.length,action:"POP",location:_,createHref:k,push:function(e,t){var i="PUSH",s=uc(e,t,p(),x.location);m.confirmTransitionTo(s,i,u,(function(e){if(e){var t=k(s),o=s.key,l=s.state;if(r)if(n.pushState({key:o,state:l},null,t),a)window.location.href=t;else{var u=E.indexOf(x.location.key),c=E.slice(0,u+1);c.push(s.key),E=c,g({action:i,location:s})}else window.location.href=t}}))},replace:function(e,t){var i="REPLACE",s=uc(e,t,p(),x.location);m.confirmTransitionTo(s,i,u,(function(e){if(e){var t=k(s),o=s.key,l=s.state;if(r)if(n.replaceState({key:o,state:l},null,t),a)window.location.replace(t);else{var u=E.indexOf(x.location.key);-1!==u&&(E[u]=s.key),g({action:i,location:s})}else window.location.replace(t)}}))},go:S,goBack:function(){S(-1)},goForward:function(){S(1)},block:function(e){void 0===e&&(e=!1);var t=m.setPrompt(e);return C||(I(1),C=!0),function(){return C&&(C=!1,I(-1)),t()}},listen:function(e){var t=m.appendListener(e);return I(1),function(){I(-1),t()}}};return x}var mc="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function gc(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,r){e=n,t.forEach((function(t){return t(e,r)}))}}}var yc=U.createContext||function(t,n){var r,i,s,o="__create-react-context-"+((mc[s="__global_unique_id__"]=(mc[s]||0)+1)+"__"),a=function(e){function t(){var t;return(t=e.apply(this,arguments)||this).emitter=gc(t.props.value),t}Xu(t,e);var r=t.prototype;return r.getChildContext=function(){var e;return(e={})[o]=this.emitter,e},r.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var t,r=this.props.value,i=e.value;((s=r)===(o=i)?0!==s||1/s==1/o:s!=s&&o!=o)?t=0:(t="function"==typeof n?n(r,i):1073741823,0!==(t|=0)&&this.emitter.set(e.value,t))}var s,o},r.render=function(){return this.props.children},t}(e.exports.Component);a.childContextTypes=((r={})[o]=ec.object.isRequired,r);var l=function(e){function n(){var t;return(t=e.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(e,n){0!=((0|t.observedBits)&n)&&t.setState({value:t.getValue()})},t}Xu(n,e);var r=n.prototype;return r.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?1073741823:t},r.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?1073741823:e},r.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},r.getValue=function(){return this.context[o]?this.context[o].get():t},r.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(e.exports.Component);return l.contextTypes=((i={})[o]=ec.object,i),{Provider:a,Consumer:l}},vc={exports:{}},wc=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)};vc.exports=Nc,vc.exports.parse=_c,vc.exports.compile=function(e,t){return kc(_c(e,t),t)},vc.exports.tokensToFunction=kc,vc.exports.tokensToRegExp=xc;var bc=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function _c(e,t){for(var n,r=[],i=0,s=0,o="",a=t&&t.delimiter||"/";null!=(n=bc.exec(e));){var l=n[0],u=n[1],c=n.index;if(o+=e.slice(s,c),s=c+l.length,u)o+=u[1];else{var h=e[s],f=n[2],d=n[3],p=n[4],m=n[5],g=n[6],y=n[7];o&&(r.push(o),o="");var v=null!=f&&null!=h&&h!==f,w="+"===g||"*"===g,b="?"===g||"*"===g,_=n[2]||a,E=p||m;r.push({name:d||i++,prefix:f||"",delimiter:_,optional:b,repeat:w,partial:v,asterisk:!!y,pattern:E?Tc(E):y?".*":"[^"+Sc(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&r.push(o),r}function Ec(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function kc(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",Cc(t)));return function(t,r){for(var i="",s=t||{},o=(r||{}).pretty?Ec:encodeURIComponent,a=0;a<e.length;a++){var l=e[a];if("string"!=typeof l){var u,c=s[l.name];if(null==c){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(wc(c)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(c)+"`");if(0===c.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<c.length;h++){if(u=o(c[h]),!n[a].test(u))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(u)+"`");i+=(0===h?l.prefix:l.delimiter)+u}}else{if(u=l.asterisk?encodeURI(c).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})):o(c),!n[a].test(u))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+u+'"');i+=l.prefix+u}}else i+=l}return i}}function Sc(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Tc(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function Ic(e,t){return e.keys=t,e}function Cc(e){return e&&e.sensitive?"":"i"}function xc(e,t,n){wc(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,i=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"==typeof a)s+=Sc(a);else{var l=Sc(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+l+u+")*"),s+=u=a.optional?a.partial?l+"("+u+")?":"(?:"+l+"("+u+"))?":l+"("+u+")"}}var c=Sc(n.delimiter||"/"),h=s.slice(-c.length)===c;return r||(s=(h?s.slice(0,-c.length):s)+"(?:"+c+"(?=$))?"),s+=i?"$":r&&h?"":"(?="+c+"|$)",Ic(new RegExp("^"+s,Cc(n)),t)}function Nc(e,t,n){return wc(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return Ic(e,t)}(e,t):wc(e)?function(e,t,n){for(var r=[],i=0;i<e.length;i++)r.push(Nc(e[i],t,n).source);return Ic(new RegExp("(?:"+r.join("|")+")",Cc(n)),t)}(e,t,n):function(e,t,n){return xc(_c(e,n),t,n)}(e,t,n)}var Ac=vc.exports,Oc={exports:{}},Rc={},Pc="function"==typeof Symbol&&Symbol.for,Lc=Pc?Symbol.for("react.element"):60103,Dc=Pc?Symbol.for("react.portal"):60106,Mc=Pc?Symbol.for("react.fragment"):60107,Uc=Pc?Symbol.for("react.strict_mode"):60108,Fc=Pc?Symbol.for("react.profiler"):60114,zc=Pc?Symbol.for("react.provider"):60109,Vc=Pc?Symbol.for("react.context"):60110,jc=Pc?Symbol.for("react.async_mode"):60111,Bc=Pc?Symbol.for("react.concurrent_mode"):60111,qc=Pc?Symbol.for("react.forward_ref"):60112,Hc=Pc?Symbol.for("react.suspense"):60113,$c=Pc?Symbol.for("react.suspense_list"):60120,Wc=Pc?Symbol.for("react.memo"):60115,Kc=Pc?Symbol.for("react.lazy"):60116,Gc=Pc?Symbol.for("react.block"):60121,Qc=Pc?Symbol.for("react.fundamental"):60117,Xc=Pc?Symbol.for("react.responder"):60118,Yc=Pc?Symbol.for("react.scope"):60119;function Jc(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case Lc:switch(e=e.type){case jc:case Bc:case Mc:case Fc:case Uc:case Hc:return e;default:switch(e=e&&e.$$typeof){case Vc:case qc:case Kc:case Wc:case zc:return e;default:return t}}case Dc:return t}}}function Zc(e){return Jc(e)===Bc}function eh(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}Rc.AsyncMode=jc,Rc.ConcurrentMode=Bc,Rc.ContextConsumer=Vc,Rc.ContextProvider=zc,Rc.Element=Lc,Rc.ForwardRef=qc,Rc.Fragment=Mc,Rc.Lazy=Kc,Rc.Memo=Wc,Rc.Portal=Dc,Rc.Profiler=Fc,Rc.StrictMode=Uc,Rc.Suspense=Hc,Rc.isAsyncMode=function(e){return Zc(e)||Jc(e)===jc},Rc.isConcurrentMode=Zc,Rc.isContextConsumer=function(e){return Jc(e)===Vc},Rc.isContextProvider=function(e){return Jc(e)===zc},Rc.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===Lc},Rc.isForwardRef=function(e){return Jc(e)===qc},Rc.isFragment=function(e){return Jc(e)===Mc},Rc.isLazy=function(e){return Jc(e)===Kc},Rc.isMemo=function(e){return Jc(e)===Wc},Rc.isPortal=function(e){return Jc(e)===Dc},Rc.isProfiler=function(e){return Jc(e)===Fc},Rc.isStrictMode=function(e){return Jc(e)===Uc},Rc.isSuspense=function(e){return Jc(e)===Hc},Rc.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===Mc||e===Bc||e===Fc||e===Uc||e===Hc||e===$c||"object"==typeof e&&null!==e&&(e.$$typeof===Kc||e.$$typeof===Wc||e.$$typeof===zc||e.$$typeof===Vc||e.$$typeof===qc||e.$$typeof===Qc||e.$$typeof===Xc||e.$$typeof===Yc||e.$$typeof===Gc)},Rc.typeOf=Jc,Oc.exports=Rc;var th=Oc.exports,nh={};nh[th.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nh[th.Memo]={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0};var rh=function(e){var t=yc();return t.displayName=e,t},ih=rh("Router-History"),sh=rh("Router"),oh=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={location:t.history.location},n._isMounted=!1,n._pendingLocation=null,t.staticContext||(n.unlisten=t.history.listen((function(e){n._isMounted?n.setState({location:e}):n._pendingLocation=e}))),n}Xu(t,e),t.computeRootMatch=function(e){return{path:"/",url:"/",params:{},isExact:"/"===e}};var n=t.prototype;return n.componentDidMount=function(){this._isMounted=!0,this._pendingLocation&&this.setState({location:this._pendingLocation})},n.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},n.render=function(){return U.createElement(sh.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},U.createElement(ih.Provider,{children:this.props.children||null,value:this.props.history}))},t}(U.Component);U.Component,U.Component;var ah={},lh=0;function uh(e,t){void 0===t&&(t={}),("string"==typeof t||Array.isArray(t))&&(t={path:t});var n=t,r=n.path,i=n.exact,s=void 0!==i&&i,o=n.strict,a=void 0!==o&&o,l=n.sensitive,u=void 0!==l&&l;return[].concat(r).reduce((function(t,n){if(!n&&""!==n)return null;if(t)return t;var r=function(e,t){var n=""+t.end+t.strict+t.sensitive,r=ah[n]||(ah[n]={});if(r[e])return r[e];var i=[],s={regexp:Ac(e,i,t),keys:i};return lh<1e4&&(r[e]=s,lh++),s}(n,{end:s,strict:a,sensitive:u}),i=r.regexp,o=r.keys,l=i.exec(e);if(!l)return null;var c=l[0],h=l.slice(1),f=e===c;return s&&!f?null:{path:n,url:"/"===n&&""===c?"/":c,isExact:f,params:o.reduce((function(e,t,n){return e[t.name]=h[n],e}),{})}}),null)}var ch=function(e){function t(){return e.apply(this,arguments)||this}return Xu(t,e),t.prototype.render=function(){var e=this;return U.createElement(sh.Consumer,null,(function(t){t||ic(!1);var n=e.props.location||t.location,r=tc({},t,{location:n,match:e.props.computedMatch?e.props.computedMatch:e.props.path?uh(n.pathname,e.props):t.match}),i=e.props,s=i.children,o=i.component,a=i.render;return Array.isArray(s)&&function(e){return 0===U.Children.count(e)}(s)&&(s=null),U.createElement(sh.Provider,{value:r},r.match?s?"function"==typeof s?s(r):s:o?U.createElement(o,r):a?a(r):null:"function"==typeof s?s(r):null)}))},t}(U.Component);U.Component;var hh=function(e){function t(){return e.apply(this,arguments)||this}return Xu(t,e),t.prototype.render=function(){var e=this;return U.createElement(sh.Consumer,null,(function(t){t||ic(!1);var n,r,i=e.props.location||t.location;return U.Children.forEach(e.props.children,(function(e){if(null==r&&U.isValidElement(e)){n=e;var s=e.props.path||e.props.from;r=s?uh(i.pathname,tc({},e.props,{path:s})):t.match}})),r?U.cloneElement(n,{location:i,computedMatch:r}):null}))},t}(U.Component),fh=U.useContext;function dh(){return fh(ih)}function ph(){var e=fh(sh).match;return e?e.params:{}}var mh=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).history=pc(t.props),t}return Xu(t,e),t.prototype.render=function(){return U.createElement(oh,{history:this.history,children:this.props.children})},t}(U.Component);U.Component;var gh=function(e,t){return"function"==typeof e?e(t):e},yh=function(e,t){return"string"==typeof e?uc(e,null,null,t):e},vh=function(e){return e},wh=U.forwardRef;void 0===wh&&(wh=vh);var bh=wh((function(e,t){var n=e.innerRef,r=e.navigate,i=e.onClick,s=eh(e,["innerRef","navigate","onClick"]),o=s.target,a=tc({},s,{onClick:function(e){try{i&&i(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||o&&"_self"!==o||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return a.ref=vh!==wh&&t||n,U.createElement("a",a)})),_h=wh((function(e,t){var n=e.component,r=void 0===n?bh:n,i=e.replace,s=e.to,o=e.innerRef,a=eh(e,["component","replace","to","innerRef"]);return U.createElement(sh.Consumer,null,(function(e){e||ic(!1);var n=e.history,l=yh(gh(s,e.location),e.location),u=l?n.createHref(l):"",c=tc({},a,{href:u,navigate:function(){var t=gh(s,e.location),r=lc(e.location)===lc(yh(t));(i||r?n.replace:n.push)(t)}});return vh!==wh?c.ref=t||o:c.innerRef=o,U.createElement(r,c)}))})),Eh=function(e){return e},kh=U.forwardRef;void 0===kh&&(kh=Eh),kh((function(e,t){var n=e["aria-current"],r=void 0===n?"page":n,i=e.activeClassName,s=void 0===i?"active":i,o=e.activeStyle,a=e.className,l=e.exact,u=e.isActive,c=e.location,h=e.sensitive,f=e.strict,d=e.style,p=e.to,m=e.innerRef,g=eh(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return U.createElement(sh.Consumer,null,(function(e){e||ic(!1);var n=c||e.location,i=yh(gh(p,n),n),y=i.pathname,v=y&&y.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),w=v?uh(n.pathname,{path:v,exact:l,sensitive:h,strict:f}):null,b=!!(u?u(w,n):w),_="function"==typeof a?a(b):a,E="function"==typeof d?d(b):d;b&&(_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(_,s),E=tc({},E,o));var k=tc({"aria-current":b&&r||null,className:_,style:E,to:i},g);return Eh!==kh?k.ref=t||m:k.innerRef=m,U.createElement(_h,k)}))}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Sh=function(e,t){return(Sh=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Th(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Ih(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(t){s(t)}}function a(e){try{l(r.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function Ch(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function xh(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Nh(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Ah(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,h=(3&s)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;l||(d=64,o||(f=64)),r.push(n[c],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==l)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var c=o<<4&240|a>>2;if(r.push(c),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Rh=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ph(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Lh(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ph())}function Dh(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Mh(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Uh(){var e=Ph();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Fh=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,zh.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Sh(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),zh=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?Vh(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",l=new Fh(i,a,r);return l},e}();function Vh(e,t){return e.replace(jh,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var jh=/\{\$([^}]+)}/g;function Bh(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=e[o],l=t[o];if(qh(a)&&qh(l)){if(!Bh(a,l))return!1}else if(a!==l)return!1}for(var u=0,c=r;u<c.length;u++){o=c[u];if(!n.includes(o))return!1}return!0}function qh(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}var $h=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=Wh),void 0===r.error&&(r.error=Wh),void 0===r.complete&&(r.complete=Wh);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function Wh(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(e){return e&&e._delegate?e._delegate:e}var Gh=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Qh=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Rh;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(c){}try{for(var r=xh(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Nh(i.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var u=this.getOrInitializeService({instanceIdentifier:l});a.resolve(u)}catch(c){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Ih(this,void 0,void 0,(function(){var e;return Ch(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Ah(Ah([],Nh(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Nh(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=xh(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var u=Nh(l.value,2),c=u[0],h=u[1];s===this.normalizeInstanceIdentifier(c)&&h.resolve(o)}}catch(f){t={error:f}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=xh(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(l){}}}catch(u){n={error:u}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xh,Yh,Jh,Zh=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Qh(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function ef(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Jh=Yh||(Yh={}))[Jh.DEBUG=0]="DEBUG",Jh[Jh.VERBOSE=1]="VERBOSE",Jh[Jh.INFO=2]="INFO",Jh[Jh.WARN=3]="WARN",Jh[Jh.ERROR=4]="ERROR",Jh[Jh.SILENT=5]="SILENT";var tf={debug:Yh.DEBUG,verbose:Yh.VERBOSE,info:Yh.INFO,warn:Yh.WARN,error:Yh.ERROR,silent:Yh.SILENT},nf=Yh.INFO,rf=((Xh={})[Yh.DEBUG]="log",Xh[Yh.VERBOSE]="log",Xh[Yh.INFO]="info",Xh[Yh.WARN]="warn",Xh[Yh.ERROR]="error",Xh),sf=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=rf[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,ef(["["+i+"]  "+e.name+":"],n))}},of=function(){function e(e){this.name=e,this._logLevel=nf,this._logHandler=sf,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Yh))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?tf[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ef([this,Yh.DEBUG],e)),this._logHandler.apply(this,ef([this,Yh.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ef([this,Yh.VERBOSE],e)),this._logHandler.apply(this,ef([this,Yh.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ef([this,Yh.INFO],e)),this._logHandler.apply(this,ef([this,Yh.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ef([this,Yh.WARN],e)),this._logHandler.apply(this,ef([this,Yh.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,ef([this,Yh.ERROR],e)),this._logHandler.apply(this,ef([this,Yh.ERROR],e))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class af{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const lf=new of("@firebase/app"),uf={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},cf=new Map,hf=new Map;function ff(e,t){try{e.container.addComponent(t)}catch(n){lf.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function df(e){const t=e.name;if(hf.has(t))return lf.debug(`There were multiple attempts to register component ${t}.`),!1;hf.set(t,e);for(const n of cf.values())ff(n,e);return!0}function pf(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=new zh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gf{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Gh("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mf.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw mf.create("bad-app-name",{appName:String(r)});const i=cf.get(r);if(i){if(Bh(e,i.options)&&Bh(n,i.config))return i;throw mf.create("duplicate-app",{appName:r})}const s=new Zh(r);for(const a of hf.values())s.addComponent(a);const o=new gf(e,n,s);return cf.set(r,o),o}function vf(e="[DEFAULT]"){const t=cf.get(e);if(!t)throw mf.create("no-app",{appName:e});return t}function wf(e,t,n){var r;let i=null!==(r=uf[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void lf.warn(e.join(" "))}df(new Gh(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var bf;function _f(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}df(new Gh("platform-logger",(e=>new af(e)),"PRIVATE")),wf("@firebase/app","0.7.0",bf),wf("fire-js","");const Ef=_f,kf=new zh("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Sf=new of("@firebase/auth");function Tf(e,...t){Sf.logLevel<=Yh.ERROR&&Sf.error(`Auth (9.0.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(e,...t){throw Nf(e,...t)}function Cf(e,...t){return Nf(e,...t)}function xf(e,t,n){const r=Object.assign(Object.assign({},Ef()),{[t]:n});return new zh("auth","Firebase",r).create(t,{appName:e.name})}function Nf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return kf.create(e,...t)}function Af(e,t,...n){if(!e)throw Nf(t,...n)}function Of(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Tf(t),new Error(t)}function Rf(e,t){e||Of(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=new Map;function Lf(e){Rf(e instanceof Function,"Expected a class definition");let t=Pf.get(e);return t?(Rf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Pf.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Df(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Mf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Mf()&&"https:"!==Mf()&&!Dh()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ff{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rf(t>e,"Short delay should be less than long delay!"),this.isMobile=Lh()||Mh()}get(){return Uf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(e,t){Rf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Of("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Of("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Of("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Bf=new Ff(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(e,t,n,r,i={}){return Hf(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Hh(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Vf.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Vf.fetch()($f(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Hf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},jf),t);try{const t=new Wf(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Kf(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Kf(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Kf(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw xf(e,a,o);If(e,a)}}catch(i){if(i instanceof Fh)throw i;If(e,"network-request-failed")}}function $f(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?zf(e.config,i):`${e.config.apiScheme}://${i}`}class Wf{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Cf(this.auth,"timeout"))),Bf.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kf(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Cf(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gf(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Qf(e){return 1e3*Number(e)}function Xf(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Tf("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Oh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(Tf("Failed to decode base64 JWT payload"),null)}catch(i){return Tf("Caught error parsing JWT payload as JSON",i),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Yf(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Fh&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Jf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gf(this.lastLoginAt),this.creationTime=Gf(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ed(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Yf(e,async function(e,t){return qf(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Af(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Th(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,u=o,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),f=!!c&&h,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Zf(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(e,d)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class td{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Af(e.idToken,"internal-error"),Af(void 0!==e.idToken,"internal-error"),Af(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Xf(e);return Af(t,"internal-error"),Af(void 0!==t.exp,"internal-error"),Af(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Af(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Hf(e,{},(()=>{const n=Hh({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=$f(e,r,"/v1/token",`key=${i}`);return Vf.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new td;return n&&(Af("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Af("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Af("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new td,this.toJSON())}_performRefresh(){return Of("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(e,t){Af("string"==typeof e||void 0===e,"internal-error",{appName:t})}class rd{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Jf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Zf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Yf(this,this.stsTokenManager.getToken(this.auth,e));return Af(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Kh(e),r=await n.getIdToken(t),i=Xf(r);Af(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Gf(Qf(i.auth_time)),issuedAtTime:Gf(Qf(i.iat)),expirationTime:Gf(Qf(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Kh(e);await ed(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Af(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new rd(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Af(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ed(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yf(this,async function(e,t){return qf(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,f=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;Af(v&&E,e,"internal-error");const k=td.fromJSON(this.name,E);Af("string"==typeof v,e,"internal-error"),nd(c,e.name),nd(h,e.name),Af("boolean"==typeof w,e,"internal-error"),Af("boolean"==typeof b,e,"internal-error"),nd(f,e.name),nd(d,e.name),nd(p,e.name),nd(m,e.name),nd(g,e.name),nd(y,e.name);const S=new rd({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:k,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new td;r.updateFromServerResponse(t);const i=new rd({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ed(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}id.type="NONE";const sd=id;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(e,t,n){return`firebase:${e}:${t}:${n}`}class ad{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=od(this.userKey,r.apiKey,i),this.fullPersistenceKey=od("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rd._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ad(Lf(sd),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Lf(sd);const s=od(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=rd._fromJSON(e,t);u!==i&&(o=n),i=u;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new ad(i,e,n)):new ad(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ld(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(fd(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ud(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(pd(t))return"Blackberry";if(md(t))return"Webos";if(cd(t))return"Safari";if((t.includes("chrome/")||hd(t))&&!t.includes("edge/"))return"Chrome";if(dd(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ud(e=Ph()){return/firefox\//i.test(e)}function cd(e=Ph()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hd(e=Ph()){return/crios\//i.test(e)}function fd(e=Ph()){return/iemobile/i.test(e)}function dd(e=Ph()){return/android/i.test(e)}function pd(e=Ph()){return/blackberry/i.test(e)}function md(e=Ph()){return/webos/i.test(e)}function gd(e=Ph()){return/iphone|ipad|ipod/i.test(e)}function yd(e=Ph()){return gd(e)||dd(e)||md(e)||pd(e)||/windows phone/i.test(e)||fd(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vd(e,t=[]){let n;switch(e){case"Browser":n=ld(Ph());break;case"Worker":n=`${ld(Ph())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _d(this),this.idTokenSubscription=new _d(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kf,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lf(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await ad.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Af(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ed(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Kh(e):null;return t&&Af(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Af(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Lf(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zh("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lf(e)||this._popupRedirectResolver;Af(t,this,"argument-error"),this.redirectPersistenceManager=await ad.create(this,[Lf(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Af(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Af(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function bd(e){return Kh(e)}class _d{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new $h((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return Af(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Of("not implemented")}_getIdTokenResponse(e){return Of("not implemented")}_linkToIdToken(e,t){return Of("not implemented")}_getReauthenticationResolver(e){return Of("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kd(e,t){return async function(e,t,n,r,i={}){const s=await qf(e,t,n,r,i);return"mfaPendingCredential"in s&&If(e,"multi-factor-auth-required",{serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd extends Ed{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Sd(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):If("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Th(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Sd(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return kd(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,kd(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kd(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Hh(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends Td{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends Id{constructor(){super("facebook.com")}static credential(e){return Sd._fromParams({providerId:Cd.PROVIDER_ID,signInMethod:Cd.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cd.credentialFromTaggedObject(e)}static credentialFromError(e){return Cd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Cd.credential(e.oauthAccessToken)}catch(t){return null}}}Cd.FACEBOOK_SIGN_IN_METHOD="facebook.com",Cd.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xd extends Id{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Sd._fromParams({providerId:xd.PROVIDER_ID,signInMethod:xd.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xd.credentialFromTaggedObject(e)}static credentialFromError(e){return xd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return xd.credential(t,n)}catch(r){return null}}}xd.GOOGLE_SIGN_IN_METHOD="google.com",xd.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nd extends Id{constructor(){super("github.com")}static credential(e){return Sd._fromParams({providerId:Nd.PROVIDER_ID,signInMethod:Nd.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nd.credentialFromTaggedObject(e)}static credentialFromError(e){return Nd.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Nd.credential(e.oauthAccessToken)}catch(t){return null}}}Nd.GITHUB_SIGN_IN_METHOD="github.com",Nd.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ad extends Id{constructor(){super("twitter.com")}static credential(e,t){return Sd._fromParams({providerId:Ad.PROVIDER_ID,signInMethod:Ad.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ad.credentialFromTaggedObject(e)}static credentialFromError(e){return Ad.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ad.credential(t,n)}catch(r){return null}}}Ad.TWITTER_SIGN_IN_METHOD="twitter.com",Ad.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Od{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await rd._fromIdTokenResponse(e,n,r),s=Rd(n);return new Od({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Rd(n);return new Od({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Rd(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends Fh{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Pd.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Pd(e,t,n,r)}}function Ld(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Pd._fromErrorAndOperation(e,n,t,r);throw n}))}function Dd(e){return Kh(e).signOut()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Md{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends Md{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ph();return cd(e)||gd(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=yd(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Uh()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ud.type="LOCAL";const Fd=Ud;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd extends Md{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zd.type="SESSION";const Vd=zd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new jd(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jd.receivers=[];class qd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Bd("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $d(){return void 0!==Hd().WorkerGlobalScope&&"function"==typeof Hd().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wd="firebaseLocalStorageDb";class Kd{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Gd(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Qd(){const e=indexedDB.open(Wd,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Wd);return new Kd(e).toPromise()}(),t(await Qd()))}))}))}async function Xd(e,t,n){const r=Gd(e,!0).put({fbase_key:t,value:n});return new Kd(r).toPromise()}function Yd(e,t){const n=Gd(e,!0).delete(t);return new Kd(n).toPromise()}class Jd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Qd()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $d()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jd._getInstance($d()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new qd(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qd();return await Xd(e,"__sak","1"),await Yd(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Xd(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Gd(e,!1).get(t),r=await new Kd(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Yd(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Gd(e,!1).getAll();return new Kd(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Jd.type="LOCAL";const Zd=Jd;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Cf("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tp(e,t){return t?Lf(t):(Af(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ff(3e4,6e4);class np extends Ed{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kd(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kd(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kd(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rp(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,n=!1){const r="signIn",i=await Ld(e,r,t),s=await Od._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new np(e),e.bypassAuthState)}function ip(e){const{auth:t,user:n}=e;return Af(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Yf(e,Ld(r,i,t,e),n);Af(s.idToken,r,"internal-error");const o=Xf(s.idToken);Af(o,r,"internal-error");const{sub:a}=o;return Af(e.uid===a,r,"user-mismatch"),Od._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&If(r,"user-mismatch"),s}}(n,new np(e),e.bypassAuthState)}async function sp(e){const{auth:t,user:n}=e;return Af(n,t,"internal-error"),async function(e,t,n=!1){const r=await Yf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Od._forOperation(e,"link",r)}(n,new np(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rp;case"linkViaPopup":case"linkViaRedirect":return sp;case"reauthViaPopup":case"reauthViaRedirect":return ip;default:If(this.auth,"internal-error")}}resolve(e){Rf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap=new Ff(2e3,1e4);async function lp(e,t,n){const r=bd(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&If(e,"argument-error"),xf(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,Td);const i=tp(r,n);return new up(r,"signInViaPopup",t,i).executeNotNull()}class up extends op{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,up.currentPopupAction&&up.currentPopupAction.cancel(),up.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Af(e,this.auth,"internal-error"),e}async onExecution(){Rf(1===this.filter.length,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Cf(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Cf(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,up.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Cf(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ap.get())};e()}}up.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cp=new Map;class hp extends op{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=cp.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return od("pendingRedirect",e.config.apiKey,e.name)}(t),r="true"===await fp(e)._get(n);return await fp(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}cp.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function fp(e){return Lf(e._redirectPersistence)}async function dp(e,t,n=!1){const r=bd(e),i=tp(r,t),s=new hp(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gp(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!gp(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Cf(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(mp(e))}saveEventToCache(e){this.cachedEventUids.add(mp(e)),this.lastProcessedEventTime=Date.now()}}function mp(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function gp({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vp=/^https?/;async function wp(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return qf(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(bp(r))return}catch(n){}If(e,"unauthorized-domain")}function bp(e){const t=Df(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!vp.test(n))return!1;if(yp.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new Ff(3e4,6e4);function Ep(){const e=Hd().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function kp(e){return new Promise(((t,n)=>{var r,i,s;function o(){Ep(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ep(),n(Cf(e,"network-request-failed"))},timeout:_p.get()})}if(null===(i=null===(r=Hd().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Hd().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Hd()[t]=()=>{gapi.load?o():n(Cf(e,"network-request-failed"))},ep(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw Sp=null,e}))}let Sp=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tp=new Ff(5e3,15e3),Ip={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Cp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xp(e){const t=e.config;Af(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zf(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0"},i=Cp.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Hh(r).slice(1)}`}async function Np(e){const t=await function(e){return Sp=Sp||kp(e),Sp}(e),n=Hd().gapi;return Af(n,e,"internal-error"),t.open({where:document.body,url:xp(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ip,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Cf(e,"network-request-failed"),s=Hd().setTimeout((()=>{r(i)}),Tp.get());function o(){Hd().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Op{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Rp(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ap),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ph().toLowerCase();n&&(a=hd(u)?"_blank":n),ud(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ph()){var t;return gd(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new Op(null);const h=window.open(t||"",a,c);Af(h,e,"popup-blocked");try{h.focus()}catch(f){}return new Op(h)}function Pp(e,t,n,r,i,s){Af(e.config.authDomain,e,"auth-domain-config-required"),Af(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0",eventId:i};if(t instanceof Td){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof Id){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return zf(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Hh(a).slice(1)}`}const Lp=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vd,this._completeRedirectFn=dp}async _openPopup(e,t,n,r){var i;Rf(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Rp(e,Pp(e,t,n,Df(),r),Bd())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Pp(e,t,n,Df(),r),Hd().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Rf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Np(e),n=new pp(e);return t.register("authEvent",(t=>{Af(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),If(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wp(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return yd()||cd()||gd()}};var Dp;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Af(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Up(e=vf()){const t=pf(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=pf(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Bh(n.getOptions(),null!=t?t:{}))return e;If(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Lp,persistence:[Zd,Fd,Vd]})}Dp="Browser",df(new Gh("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Af(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Af(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Dp,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vd(Dp)},s=new wd(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lf);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),df(new Gh("auth-internal",(e=>{const t=bd(e.getProvider("auth").getImmediate());return new Mp(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),wf("@firebase/auth","0.17.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Dp));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Fp=function(e,t){return(Fp=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function zp(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}var Vp,jp="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Bp=Bp||{},qp=jp||self;function Hp(){}function $p(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Wp(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Kp="closure_uid_"+(1e9*Math.random()>>>0),Gp=0;function Qp(e,t,n){return e.call.apply(e.bind,arguments)}function Xp(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Yp(e,t,n){return(Yp=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qp:Xp).apply(null,arguments)}function Jp(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Zp(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function em(){this.s=this.s,this.o=this.o}var tm={};em.prototype.s=!1,em.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Kp)&&e[Kp]||(e[Kp]=++Gp)}(this);delete tm[e]}},em.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var nm=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},rm=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function im(e){return Array.prototype.concat.apply([],arguments)}function sm(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function om(e){return/^[\s\xa0]*$/.test(e)}var am,lm=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function um(e,t){return-1!=e.indexOf(t)}function cm(e,t){return e<t?-1:e>t?1:0}e:{var hm=qp.navigator;if(hm){var fm=hm.userAgent;if(fm){am=fm;break e}}am=""}function dm(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function pm(e){var t={};for(var n in e)t[n]=e[n];return t}var mm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function gm(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var s=0;s<mm.length;s++)n=mm[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ym(e){return ym[" "](e),e}ym[" "]=Hp;var vm,wm=um(am,"Opera"),bm=um(am,"Trident")||um(am,"MSIE"),_m=um(am,"Edge"),Em=_m||bm,km=um(am,"Gecko")&&!(um(am.toLowerCase(),"webkit")&&!um(am,"Edge"))&&!(um(am,"Trident")||um(am,"MSIE"))&&!um(am,"Edge"),Sm=um(am.toLowerCase(),"webkit")&&!um(am,"Edge");function Tm(){var e=qp.document;return e?e.documentMode:void 0}e:{var Im="",Cm=function(){var e=am;return km?/rv:([^\);]+)(\)|;)/.exec(e):_m?/Edge\/([\d\.]+)/.exec(e):bm?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Sm?/WebKit\/(\S+)/.exec(e):wm?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Cm&&(Im=Cm?Cm[1]:""),bm){var xm=Tm();if(null!=xm&&xm>parseFloat(Im)){vm=String(xm);break e}}vm=Im}var Nm,Am={};function Om(){return function(e){var t=Am;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=lm(String(vm)).split("."),n=lm("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var s=t[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;e=cm(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||cm(0==s[2].length,0==o[2].length)||cm(s[2],o[2]),s=s[3],o=o[3]}while(0==e)}return 0<=e}))}if(qp.document&&bm){var Rm=Tm();Nm=Rm||(parseInt(vm,10)||void 0)}else Nm=void 0;var Pm=Nm,Lm=function(){if(!qp.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{qp.addEventListener("test",Hp,t),qp.removeEventListener("test",Hp,t)}catch(n){}return e}();function Dm(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Mm(e,t){if(Dm.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(km){e:{try{ym(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Um[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Mm.Z.h.call(this)}}Dm.prototype.h=function(){this.defaultPrevented=!0},Zp(Mm,Dm);var Um={2:"touch",3:"pen",4:"mouse"};Mm.prototype.h=function(){Mm.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Fm="closure_listenable_"+(1e6*Math.random()|0),zm=0;function Vm(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++zm,this.ca=this.fa=!1}function jm(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Bm(e){this.src=e,this.g={},this.h=0}function qm(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=nm(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(jm(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Hm(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}Bm.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var o=Hm(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Vm(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var $m="closure_lm_"+(1e6*Math.random()|0),Wm={};function Km(e,t,n,r,i){if(r&&r.once)return Qm(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)Km(e,t[s],n,r,i);return null}return n=ng(n),e&&e[Fm]?e.N(t,n,Wp(r)?!!r.capture:!!r,i):Gm(e,t,n,!1,r,i)}function Gm(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Wp(i)?!!i.capture:!!i,a=eg(e);if(a||(e[$m]=a=new Bm(e)),(n=a.add(t,n,r,o,s)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Zm;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Lm||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Jm(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Qm(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Qm(e,t[s],n,r,i);return null}return n=ng(n),e&&e[Fm]?e.O(t,n,Wp(r)?!!r.capture:!!r,i):Gm(e,t,n,!0,r,i)}function Xm(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Xm(e,t[s],n,r,i);else r=Wp(r)?!!r.capture:!!r,n=ng(n),e&&e[Fm]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Hm(s=e.g[t],n,r,i))&&(jm(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=eg(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Hm(t,n,r,i)),(n=-1<e?t[e]:null)&&Ym(n))}function Ym(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Fm])qm(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Jm(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=eg(t))?(qm(n,e),0==n.h&&(n.src=null,t[$m]=null)):jm(e)}}}function Jm(e){return e in Wm?Wm[e]:Wm[e]="on"+e}function Zm(e,t){if(e.ca)e=!0;else{t=new Mm(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Ym(e),e=n.call(r,t)}return e}function eg(e){return(e=e[$m])instanceof Bm?e:null}var tg="__closure_events_fn_"+(1e9*Math.random()>>>0);function ng(e){return"function"==typeof e?e:(e[tg]||(e[tg]=function(t){return e.handleEvent(t)}),e[tg])}function rg(){em.call(this),this.i=new Bm(this),this.P=this,this.I=null}function ig(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Dm(t,e);else if(t instanceof Dm)t.target=t.target||e;else{var i=t;gm(t=new Dm(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=sg(o,r,!0,t)&&i}if(i=sg(o=t.g=e,r,!0,t)&&i,i=sg(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=sg(o=t.g=n[s],r,!1,t)&&i}function sg(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&qm(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}Zp(rg,em),rg.prototype[Fm]=!0,rg.prototype.removeEventListener=function(e,t,n,r){Xm(this,e,t,n,r)},rg.prototype.M=function(){if(rg.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)jm(n[r]);delete t.g[e],t.h--}}this.I=null},rg.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},rg.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var og=qp.JSON.stringify;function ag(){var e=mg,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var lg,ug=function(){function e(){this.h=this.g=null}return e.prototype.add=function(e,t){var n=cg.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n},e}(),cg=new(function(){function e(e,t){this.i=e,this.j=t,this.h=0,this.g=null}return e.prototype.get=function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e},e}())((function(){return new hg}),(function(e){return e.reset()})),hg=function(){function e(){this.next=this.g=this.h=null}return e.prototype.set=function(e,t){this.h=e,this.g=t,this.next=null},e.prototype.reset=function(){this.next=this.g=this.h=null},e}();function fg(e){qp.setTimeout((function(){throw e}),0)}function dg(e,t){lg||function(){var e=qp.Promise.resolve(void 0);lg=function(){e.then(gg)}}(),pg||(lg(),pg=!0),mg.add(e,t)}var pg=!1,mg=new ug;function gg(){for(var e;e=ag();){try{e.h.call(e.g)}catch(n){fg(n)}var t=cg;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}pg=!1}function yg(e,t){rg.call(this),this.h=e||1,this.g=t||qp,this.j=Yp(this.kb,this),this.l=Date.now()}function vg(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function wg(e,t,n){if("function"==typeof e)n&&(e=Yp(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Yp(e.handleEvent,e)}return 2147483647<Number(t)?-1:qp.setTimeout(e,t||0)}function bg(e){e.g=wg((function(){e.g=null,e.i&&(e.i=!1,bg(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}Zp(yg,rg),(Vp=yg.prototype).da=!1,Vp.S=null,Vp.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ig(this,"tick"),this.da&&(vg(this),this.start()))}},Vp.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Vp.M=function(){yg.Z.M.call(this),vg(this),delete this.g};var _g=function(e){function t(t,n){var r=e.call(this)||this;return r.m=t,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Fp(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.l=function(e){this.h=arguments,this.g?this.i=!0:bg(this)},t.prototype.M=function(){e.prototype.M.call(this),this.g&&(qp.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},t}(em);function Eg(e){em.call(this),this.h=e,this.g={}}Zp(Eg,em);var kg=[];function Sg(e,t,n,r){Array.isArray(n)||(n&&(kg[0]=n.toString()),n=kg);for(var i=0;i<n.length;i++){var s=Km(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Tg(e){dm(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ym(e)}),e),e.g={}}function Ig(){this.g=!0}function Cg(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return og(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}Eg.prototype.M=function(){Eg.Z.M.call(this),Tg(this)},Eg.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ig.prototype.Aa=function(){this.g=!1},Ig.prototype.info=function(){};var xg={},Ng=null;function Ag(){return Ng=Ng||new rg}function Og(e){Dm.call(this,xg.Ma,e)}function Rg(e){var t=Ag();ig(t,new Og(t,e))}function Pg(e,t){Dm.call(this,xg.STAT_EVENT,e),this.stat=t}function Lg(e){var t=Ag();ig(t,new Pg(t,e))}function Dg(e,t){Dm.call(this,xg.Na,e),this.size=t}function Mg(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return qp.setTimeout((function(){e()}),t)}xg.Ma="serverreachability",Zp(Og,Dm),xg.STAT_EVENT="statevent",Zp(Pg,Dm),xg.Na="timingevent",Zp(Dg,Dm);var Ug={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Fg={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function zg(){}function Vg(e){return e.h||(e.h=e.i())}function jg(){}zg.prototype.h=null;var Bg,qg={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Hg(){Dm.call(this,"d")}function $g(){Dm.call(this,"c")}function Wg(){}function Kg(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Eg(this),this.P=Qg,e=Em?125:void 0,this.W=new yg(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Gg}function Gg(){this.i=null,this.g="",this.h=!1}Zp(Hg,Dm),Zp($g,Dm),Zp(Wg,zg),Wg.prototype.g=function(){return new XMLHttpRequest},Wg.prototype.i=function(){return{}},Bg=new Wg;var Qg=45e3,Xg={},Yg={};function Jg(e,t,n){e.K=1,e.v=_y(my(t)),e.s=n,e.U=!0,Zg(e,null)}function Zg(e,t){e.F=Date.now(),ry(e),e.A=my(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Ly(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Gg,e.g=Dv(e.l,n?t:null,!e.s),0<e.O&&(e.L=new _g(Yp(e.Ia,e,e.g),e.O)),Sg(e.V,e.g,"readystatechange",e.gb),t=e.H?pm(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Rg(1),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function ey(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function ty(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=ny(e,n))==Yg){4==t&&(e.o=4,Lg(14),i=!1),Cg(e.j,e.m,null,"[Incomplete Response]");break}if(r==Xg){e.o=4,Lg(15),Cg(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Cg(e.j,e.m,r,null),ly(e,r)}ey(e)&&r!=Yg&&r!=Xg&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Lg(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cv(t),t.L=!0,Lg(11))):(Cg(e.j,e.m,n,"[Invalid Chunked Response]"),ay(e),oy(e))}function ny(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Yg:(n=Number(t.substring(n,r)),isNaN(n)?Xg:(r+=1)+n>t.length?Yg:(t=t.substr(r,n),e.C=r+n,t))}function ry(e){e.Y=Date.now()+e.P,iy(e,e.P)}function iy(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Mg(Yp(e.eb,e),t)}function sy(e){e.B&&(qp.clearTimeout(e.B),e.B=null)}function oy(e){0==e.l.G||e.I||Av(e.l,e)}function ay(e){sy(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,vg(e.W),Tg(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ly(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||jy(n.i,e)))if(n.I=e.N,!e.J&&jy(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(g){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Nv(n),vv(n)}Iv(n),Lg(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Mg(Yp(n.ab,n),6e3));if(1>=Vy(n.i)&&n.ka){try{n.ka()}catch(g){}n.ka=void 0}}else Rv(n,11)}else if((e.J||n.g==e)&&Nv(n),!om(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var s=i[t];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var l=s[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=e.g;if(u){var c=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(c){var h=r.i;!h.g&&(um(c,"spdy")||um(c,"quic")||um(c,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(By(h,h.h),h.h=null))}if(r.D){var f=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,by(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var d=e;if((r=n).oa=Lv(r,r.H?r.la:null,r.W),d.J){qy(r.i,d);var p=d,m=r.K;m&&p.setTimeout(m),p.B&&(sy(p),ry(p)),r.g=d}else Tv(r);0<n.l.length&&_v(n)}else"stop"!=s[0]&&"close"!=s[0]||Rv(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Rv(n,7):yv(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Rg(4)}catch(g){}}function uy(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if($p(e)||"string"==typeof e)rm(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if($p(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;i=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if($p(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function cy(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof cy)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function hy(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];fy(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)fy(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function fy(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Vp=Kg.prototype).setTimeout=function(e){this.P=e},Vp.gb=function(e){e=e.target;var t=this.L;t&&3==fv(e)?t.l():this.Ia(e)},Vp.Ia=function(e){try{if(e==this.g)e:{var t=fv(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||Em||this.g&&(this.h.h||this.g.ga()||dv(this.g)))){this.I||4!=t||7==n||Rg(8==n||0>=r?3:2),sy(this);var i=this.g.ba();this.N=i;t:if(ey(this)){var s=dv(this.g);e="";var o=s.length,a=4==fv(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ay(this),oy(this);var l="";break t}this.h.i=new qp.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,e+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=e,this.C=0,l=this.h.g}else l=this.g.ga();if(this.i=200==i,function(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!om(u)){var h=u;break t}}h=null}if(!(i=h)){this.i=!1,this.o=3,Lg(12),ay(this),oy(this);break e}Cg(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ly(this,i)}this.U?(ty(this,t,l),Em&&this.i&&3==t&&(Sg(this.V,this.W,"tick",this.fb),this.W.start())):(Cg(this.j,this.m,l,null),ly(this,l)),4==t&&ay(this),this.i&&!this.I&&(4==t?Av(this.l,this):(this.i=!1,ry(this)))}else 400==i&&0<l.indexOf("Unknown SID")?(this.o=3,Lg(12)):(this.o=0,Lg(13)),ay(this),oy(this)}}}catch(f){}},Vp.fb=function(){if(this.g){var e=fv(this.g),t=this.g.ga();this.C<t.length&&(sy(this),ty(this,e,t),this.i&&4!=e&&ry(this))}},Vp.cancel=function(){this.I=!0,ay(this)},Vp.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Rg(3),Lg(17)),ay(this),this.o=2,oy(this)):iy(this,this.Y-e)},(Vp=cy.prototype).R=function(){hy(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Vp.T=function(){return hy(this),this.g.concat()},Vp.get=function(e,t){return fy(this.h,e)?this.h[e]:t},Vp.set=function(e,t){fy(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Vp.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var dy=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function py(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof py){this.g=void 0!==t?t:e.g,gy(this,e.j),this.s=e.s,yy(this,e.i),vy(this,e.m),this.l=e.l,t=e.h;var n=new Ay;n.i=t.i,t.g&&(n.g=new cy(t.g),n.h=t.h),wy(this,n),this.o=e.o}else e&&(n=String(e).match(dy))?(this.g=!!t,gy(this,n[1]||"",!0),this.s=Ey(n[2]||""),yy(this,n[3]||"",!0),vy(this,n[4]),this.l=Ey(n[5]||"",!0),wy(this,n[6]||"",!0),this.o=Ey(n[7]||"")):(this.g=!!t,this.h=new Ay(null,this.g))}function my(e){return new py(e)}function gy(e,t,n){e.j=n?Ey(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function yy(e,t,n){e.i=n?Ey(t,!0):t}function vy(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function wy(e,t,n){t instanceof Ay?(e.h=t,function(e,t){t&&!e.j&&(Oy(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Ry(this,t),Ly(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=ky(t,xy)),e.h=new Ay(t,e.g))}function by(e,t,n){e.h.set(t,n)}function _y(e){return by(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ey(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ky(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Sy),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Sy(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}py.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ky(t,Ty,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ky(t,Ty,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(ky(n,"/"==n.charAt(0)?Cy:Iy,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ky(n,Ny)),e.join("")};var Ty=/[#\/\?@]/g,Iy=/[#\?:]/g,Cy=/[#\?]/g,xy=/[#\?@]/g,Ny=/#/g;function Ay(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Oy(e){e.g||(e.g=new cy,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Ry(e,t){Oy(e),t=Dy(e,t),fy(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,fy((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&hy(e)))}function Py(e,t){return Oy(e),t=Dy(e,t),fy(e.g.h,t)}function Ly(e,t,n){Ry(e,t),0<n.length&&(e.i=null,e.g.set(Dy(e,t),sm(n)),e.h+=n.length)}function Dy(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Vp=Ay.prototype).add=function(e,t){Oy(this),this.i=null,e=Dy(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Vp.forEach=function(e,t){Oy(this),this.g.forEach((function(n,r){rm(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Vp.T=function(){Oy(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},Vp.R=function(e){Oy(this);var t=[];if("string"==typeof e)Py(this,e)&&(t=im(t,this.g.get(Dy(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=im(t,e[n])}return t},Vp.set=function(e,t){return Oy(this),this.i=null,Py(this,e=Dy(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Vp.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Vp.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var My=function(e,t){this.h=e,this.g=t};function Uy(e){this.l=e||Fy,qp.PerformanceNavigationTiming?e=0<(e=qp.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(qp.g&&qp.g.Ea&&qp.g.Ea()&&qp.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Fy=10;function zy(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Vy(e){return e.h?1:e.g?e.g.size:0}function jy(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function By(e,t){e.g?e.g.add(t):e.h=t}function qy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Hy(e){var t,n;if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var r=e.i;try{for(var i=zp(e.g.values()),s=i.next();!s.done;s=i.next()){var o=s.value;r=r.concat(o.D)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return r}return sm(e.i)}function $y(){}function Wy(){this.g=new $y}function Ky(e,t,n){var r=n||"";try{uy(e,(function(e,n){var i=e;Wp(e)&&(i=og(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Gy(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Qy(e){this.l=e.$b||null,this.j=e.ib||!1}function Xy(e,t){rg.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Yy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Uy.prototype.cancel=function(){var e,t;if(this.i=Hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=zp(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(i){e={error:i}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.g.clear()}},$y.prototype.stringify=function(e){return qp.JSON.stringify(e,void 0)},$y.prototype.parse=function(e){return qp.JSON.parse(e,void 0)},Zp(Qy,zg),Qy.prototype.g=function(){return new Xy(this.l,this.j)},Qy.prototype.i=function(e){return function(){return e}}({}),Zp(Xy,rg);var Yy=0;function Jy(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Zy(e){e.readyState=4,e.l=null,e.j=null,e.A=null,ev(e)}function ev(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Vp=Xy.prototype).open=function(e,t){if(this.readyState!=Yy)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,ev(this)},Vp.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||qp).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Vp.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Zy(this)),this.readyState=Yy},Vp.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,ev(this)),this.g&&(this.readyState=3,ev(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==qp.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Jy(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Vp.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Zy(this):ev(this),3==this.readyState&&Jy(this)}},Vp.Ua=function(e){this.g&&(this.response=this.responseText=e,Zy(this))},Vp.Ta=function(e){this.g&&(this.response=e,Zy(this))},Vp.ha=function(){this.g&&Zy(this)},Vp.setRequestHeader=function(e,t){this.v.append(e,t)},Vp.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Vp.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Xy.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var tv=qp.JSON.parse;function nv(e){rg.call(this),this.headers=new cy,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=rv,this.K=this.L=!1}Zp(nv,rg);var rv="",iv=/^https?$/i,sv=["POST","PUT"];function ov(e){return"content-type"==e.toLowerCase()}function av(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,lv(e),cv(e)}function lv(e){e.D||(e.D=!0,ig(e,"complete"),ig(e,"error"))}function uv(e){if(e.h&&void 0!==Bp&&(!e.C[1]||4!=fv(e)||2!=e.ba()))if(e.v&&4==fv(e))wg(e.Fa,0,e);else if(ig(e,"readystatechange"),4==fv(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var s=String(e.H).match(dy)[1]||null;if(!s&&qp.self&&qp.self.location){var o=qp.self.location.protocol;s=o.substr(0,o.length-1)}i=!iv.test(s?s.toLowerCase():"")}t=i}if(t)ig(e,"complete"),ig(e,"success");else{e.m=6;try{var a=2<fv(e)?e.g.statusText:""}catch(l){a=""}e.j=a+" ["+e.ba()+"]",lv(e)}}finally{cv(e)}}}function cv(e,t){if(e.g){hv(e);var n=e.g,r=e.C[0]?Hp:null;e.g=null,e.C=null,t||ig(e,"ready");try{n.onreadystatechange=r}catch(i){}}}function hv(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(qp.clearTimeout(e.A),e.A=null)}function fv(e){return e.g?e.g.readyState:0}function dv(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case rv:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function pv(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return dm(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):by(e,t,n))}function mv(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function gv(e){this.za=0,this.l=[],this.h=new Ig,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=mv("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=mv("baseRetryDelayMs",5e3,e),this.$a=mv("retryDelaySeedMs",1e4,e),this.Ya=mv("forwardChannelMaxRetries",2,e),this.ra=mv("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Uy(e&&e.concurrentRequestLimit),this.Ca=new Wy,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function yv(e){if(wv(e),3==e.G){var t=e.V++,n=my(e.F);by(n,"SID",e.J),by(n,"RID",t),by(n,"TYPE","terminate"),kv(e,n),(t=new Kg(e,e.h,t,void 0)).K=2,t.v=_y(my(n)),n=!1,qp.navigator&&qp.navigator.sendBeacon&&(n=qp.navigator.sendBeacon(t.v.toString(),"")),!n&&qp.Image&&((new Image).src=t.v,n=!0),n||(t.g=Dv(t.l,null),t.g.ea(t.v)),t.F=Date.now(),ry(t)}Pv(e)}function vv(e){e.g&&(Cv(e),e.g.cancel(),e.g=null)}function wv(e){vv(e),e.u&&(qp.clearTimeout(e.u),e.u=null),Nv(e),e.i.cancel(),e.m&&("number"==typeof e.m&&qp.clearTimeout(e.m),e.m=null)}function bv(e,t){e.l.push(new My(e.Za++,t)),3==e.G&&_v(e)}function _v(e){zy(e.i)||e.m||(e.m=!0,dg(e.Ha,e),e.C=0)}function Ev(e,t){var n;n=t?t.m:e.V++;var r=my(e.F);by(r,"SID",e.J),by(r,"RID",n),by(r,"AID",e.U),kv(e,r),e.o&&e.s&&pv(r,e.o,e.s),n=new Kg(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Sv(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),By(e.i,n),Jg(n,r,t)}function kv(e,t){e.j&&uy({},(function(e,n){by(t,n,e)}))}function Sv(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Yp(e.j.Oa,e.j,e):null;e:for(var i=e.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,l=0;l<n;l++){var u=i[l].h,c=i[l].g;if(0>(u-=s))s=Math.max(0,i[l].h-100),a=!1;else try{Ky(c,o,"req"+u+"_")}catch(h){r&&r(c)}}if(a){r=o.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function Tv(e){e.g||e.u||(e.Y=1,dg(e.Ga,e),e.A=0)}function Iv(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Mg(Yp(e.Ga,e),Ov(e,e.A)),e.A++,!0)}function Cv(e){null!=e.B&&(qp.clearTimeout(e.B),e.B=null)}function xv(e){e.g=new Kg(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=my(e.oa);by(t,"RID","rpc"),by(t,"SID",e.J),by(t,"CI",e.N?"0":"1"),by(t,"AID",e.U),kv(e,t),by(t,"TYPE","xmlhttp"),e.o&&e.s&&pv(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=_y(my(t)),n.s=null,n.U=!0,Zg(n,e)}function Nv(e){null!=e.v&&(qp.clearTimeout(e.v),e.v=null)}function Av(e,t){var n=null;if(e.g==t){Nv(e),Cv(e),e.g=null;var r=2}else{if(!jy(e.i,t))return;n=t.D,qy(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;ig(r=Ag(),new Dg(r,n,t,i)),_v(e)}else Tv(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(Vy(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Mg(Yp(e.Ha,e,t),Ov(e,e.C)),e.C++,0)))}(e,t)||2==r&&Iv(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Rv(e,5);break;case 4:Rv(e,10);break;case 3:Rv(e,6);break;default:Rv(e,2)}}function Ov(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Rv(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Yp(e.jb,e);n||(n=new py("//www.google.com/images/cleardot.gif"),qp.location&&"http"==qp.location.protocol||gy(n,"https"),_y(n)),function(e,t){var n=new Ig;if(qp.Image){var r=new Image;r.onload=Jp(Gy,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Jp(Gy,n,r,"TestLoadImage: error",!1,t),r.onabort=Jp(Gy,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Jp(Gy,n,r,"TestLoadImage: timeout",!1,t),qp.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Lg(2);e.G=0,e.j&&e.j.va(t),Pv(e),wv(e)}function Pv(e){e.G=0,e.I=-1,e.j&&(0==Hy(e.i).length&&0==e.l.length||(e.i.i.length=0,sm(e.l),e.l.length=0),e.j.ua())}function Lv(e,t,n){var r=function(e){return e instanceof py?my(e):new py(e,void 0)}(n);if(""!=r.i)t&&yy(r,t+"."+r.i),vy(r,r.m);else{var i=qp.location;r=function(e,t,n,r){var i=new py(null,void 0);return e&&gy(i,e),t&&yy(i,t),n&&vy(i,n),r&&(i.l=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&dm(e.aa,(function(e,t){by(r,t,e)})),t=e.D,n=e.sa,t&&n&&by(r,t,n),by(r,"VER",e.ma),kv(e,r),r}function Dv(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new nv(new Qy({ib:!0})):new nv(e.qa)).L=e.H,t}function Mv(){}function Uv(){if(bm&&!(10<=Number(Pm)))throw Error("Environmental error: no available transport.")}function Fv(e,t){rg.call(this),this.g=new gv(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!om(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!om(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new jv(this)}function zv(e){Hg.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Vv(){$g.call(this),this.status=1}function jv(e){this.g=e}(Vp=nv.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Bg.g(),this.C=this.u?Vg(this.u):Vg(Bg),this.g.onreadystatechange=Yp(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void av(this,s)}e=n||"";var i=new cy(this.headers);r&&uy(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=ov,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=qp.FormData&&e instanceof qp.FormData,!(0<=nm(sv,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hv(this),0<this.B&&((this.K=function(e){return bm&&Om()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Yp(this.pa,this)):this.A=wg(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){av(this,s)}},Vp.pa=function(){void 0!==Bp&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ig(this,"timeout"),this.abort(8))},Vp.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ig(this,"complete"),ig(this,"abort"),cv(this))},Vp.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cv(this,!0)),nv.Z.M.call(this)},Vp.Fa=function(){this.s||(this.F||this.v||this.l?uv(this):this.cb())},Vp.cb=function(){uv(this)},Vp.ba=function(){try{return 2<fv(this)?this.g.status:-1}catch(tt){return-1}},Vp.ga=function(){try{return this.g?this.g.responseText:""}catch(tt){return""}},Vp.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),tv(t)}},Vp.Da=function(){return this.m},Vp.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Vp=gv.prototype).ma=8,Vp.G=1,Vp.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},Vp.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new Kg(this,this.h,e,void 0),n=this.s;if(this.P&&(n?gm(n=pm(n),this.P):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Sv(this,t,r),by(i=my(this.F),"RID",e),by(i,"CVER",22),this.D&&by(i,"X-HTTP-Session-Id",this.D),kv(this,i),this.o&&n&&pv(i,this.o,n),By(this.i,t),this.Ra&&by(i,"TYPE","init"),this.ja?(by(i,"$req",r),by(i,"SID","null"),t.$=!0,Jg(t,i,null)):Jg(t,i,r),this.G=2}}else 3==this.G&&(e?Ev(this,e):0==this.l.length||zy(this.i)||Ev(this))},Vp.Ga=function(){if(this.u=null,xv(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Mg(Yp(this.bb,this),e)}},Vp.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Lg(10),vv(this),xv(this))},Vp.ab=function(){null!=this.v&&(this.v=null,vv(this),Iv(this),Lg(19))},Vp.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Lg(2)):(this.h.info("Failed to ping google.com"),Lg(1))},(Vp=Mv.prototype).xa=function(){},Vp.wa=function(){},Vp.va=function(){},Vp.ua=function(){},Vp.Oa=function(){},Uv.prototype.g=function(e,t){return new Fv(e,t)},Zp(Fv,rg),Fv.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),dg(Yp(e.hb,e,t))),Lg(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Lv(e,null,e.W),_v(e)},Fv.prototype.close=function(){yv(this.g)},Fv.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,bv(this.g,t)}else this.v?((t={}).__data__=og(e),bv(this.g,t)):bv(this.g,e)},Fv.prototype.M=function(){this.g.j=null,delete this.j,yv(this.g),delete this.g,Fv.Z.M.call(this)},Zp(zv,Hg),Zp(Vv,$g),Zp(jv,Mv),jv.prototype.xa=function(){ig(this.g,"a")},jv.prototype.wa=function(e){ig(this.g,new zv(e))},jv.prototype.va=function(e){ig(this.g,new Vv(e))},jv.prototype.ua=function(){ig(this.g,"b")},Uv.prototype.createWebChannel=Uv.prototype.g,Fv.prototype.send=Fv.prototype.u,Fv.prototype.open=Fv.prototype.m,Fv.prototype.close=Fv.prototype.close,Ug.NO_ERROR=0,Ug.TIMEOUT=8,Ug.HTTP_ERROR=6,Fg.COMPLETE="complete",jg.EventType=qg,qg.OPEN="a",qg.CLOSE="b",qg.ERROR="c",qg.MESSAGE="d",rg.prototype.listen=rg.prototype.N,nv.prototype.listenOnce=nv.prototype.O,nv.prototype.getLastError=nv.prototype.La,nv.prototype.getLastErrorCode=nv.prototype.Da,nv.prototype.getStatus=nv.prototype.ba,nv.prototype.getResponseJson=nv.prototype.Qa,nv.prototype.getResponseText=nv.prototype.ga,nv.prototype.send=nv.prototype.ea;var Bv=Ug,qv=Fg,Hv=xg,$v=10,Wv=11,Kv=Qy,Gv=jg,Qv=nv;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xv{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xv.UNAUTHENTICATED=new Xv(null),Xv.GOOGLE_CREDENTIALS=new Xv("google-credentials-uid"),Xv.FIRST_PARTY=new Xv("first-party-uid"),Xv.MOCK_USER=new Xv("mock-user");
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
let Yv="9.0.2";
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const Jv=new of("@firebase/firestore");function Zv(){return Jv.logLevel}function ew(e,...t){if(Jv.logLevel<=Yh.DEBUG){const n=t.map(rw);Jv.debug(`Firestore (${Yv}): ${e}`,...n)}}function tw(e,...t){if(Jv.logLevel<=Yh.ERROR){const n=t.map(rw);Jv.error(`Firestore (${Yv}): ${e}`,...n)}}function nw(e,...t){if(Jv.logLevel<=Yh.WARN){const n=t.map(rw);Jv.warn(`Firestore (${Yv}): ${e}`,...n)}}function rw(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var t}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function iw(e="Unexpected state"){const t=`FIRESTORE (${Yv}) INTERNAL ASSERTION FAILED: `+e;throw tw(t),new Error(t)}function sw(e,t){e||iw()}function ow(e,t){return e}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const aw={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lw extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class uw{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class cw{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization=`Bearer ${e}`}}class hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Xv.UNAUTHENTICATED)))}shutdown(){}}class fw{constructor(e){this.t=e,this.currentUser=Xv.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new uw;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new uw,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{ew("FirebaseCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ew("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new uw)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ew("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(sw("string"==typeof t.accessToken),new cw(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return sw(null===e||"string"==typeof e),new Xv(e)}}class dw{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Xv.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.l},t=this.h.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.m&&(e["X-Goog-Iam-Authorization-Token"]=this.m),e}}class pw{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new dw(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Xv.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class mw{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.g(e),this.p=e=>t.writeSequenceNumber(e))}g(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.p&&this.p(e),e}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function gw(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/mw.T=-1;class yw{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=gw(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function vw(e,t){return e<t?-1:e>t?1:0}function ww(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}class bw{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new lw(aw.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new lw(aw.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new lw(aw.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new lw(aw.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return bw.fromMillis(Date.now())}static fromDate(e){return bw.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new bw(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?vw(this.nanoseconds,e.nanoseconds):vw(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _w{constructor(e){this.timestamp=e}static fromTimestamp(e){return new _w(e)}static min(){return new _w(new bw(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Ew(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function kw(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Sw(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Tw{constructor(e,t,n){void 0===t?t=0:t>e.length&&iw(),void 0===n?n=e.length-t:n>e.length-t&&iw(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Tw.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Tw?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Iw extends Tw{construct(e,t,n){return new Iw(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new lw(aw.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Iw(t)}static emptyPath(){return new Iw([])}}const Cw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xw extends Tw{construct(e,t,n){return new xw(e,t,n)}static isValidIdentifier(e){return Cw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xw.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new xw(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new lw(aw.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new lw(aw.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new lw(aw.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new lw(aw.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xw(t)}static emptyPath(){return new xw([])}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Nw{constructor(e){this.fields=e,e.sort(xw.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ww(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Aw{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Aw(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Aw(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return vw(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Aw.EMPTY_BYTE_STRING=new Aw("");const Ow=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rw(e){if(sw(!!e),"string"==typeof e){let t=0;const n=Ow.exec(e);if(sw(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pw(e.seconds),nanos:Pw(e.nanos)}}function Pw(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Lw(e){return"string"==typeof e?Aw.fromBase64String(e):Aw.fromUint8Array(e)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Dw(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Mw(e){const t=e.mapValue.fields.__previous_value__;return Dw(t)?Mw(t):t}function Uw(e){const t=Rw(e.mapValue.fields.__local_write_time__.timestampValue);return new bw(t.seconds,t.nanos)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function Fw(e){return null==e}function zw(e){return 0===e&&1/e==-1/0}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class Vw{constructor(e){this.path=e}static fromPath(e){return new Vw(Iw.fromString(e))}static fromName(e){return new Vw(Iw.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Iw.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Iw.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Vw(new Iw(e.slice()))}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function jw(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Dw(e)?4:10:iw()}function Bw(e,t){const n=jw(e);if(n!==jw(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Uw(e).isEqual(Uw(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Rw(e.timestampValue),r=Rw(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Lw(e.bytesValue).isEqual(Lw(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Pw(e.geoPointValue.latitude)===Pw(t.geoPointValue.latitude)&&Pw(e.geoPointValue.longitude)===Pw(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Pw(e.integerValue)===Pw(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Pw(e.doubleValue),r=Pw(t.doubleValue);return n===r?zw(n)===zw(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ww(e.arrayValue.values||[],t.arrayValue.values||[],Bw);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ew(n)!==Ew(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Bw(n[i],r[i])))return!1;return!0}(e,t);default:return iw()}var r}function qw(e,t){return void 0!==(e.values||[]).find((e=>Bw(e,t)))}function Hw(e,t){const n=jw(e),r=jw(t);if(n!==r)return vw(n,r);switch(n){case 0:return 0;case 1:return vw(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Pw(e.integerValue||e.doubleValue),r=Pw(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return $w(e.timestampValue,t.timestampValue);case 4:return $w(Uw(e),Uw(t));case 5:return vw(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Lw(e),r=Lw(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=vw(n[i],r[i]);if(0!==e)return e}return vw(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=vw(Pw(e.latitude),Pw(t.latitude));return 0!==n?n:vw(Pw(e.longitude),Pw(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Hw(n[i],r[i]);if(e)return e}return vw(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=vw(r[o],s[o]);if(0!==e)return e;const t=Hw(n[r[o]],i[s[o]]);if(0!==t)return t}return vw(r.length,s.length)}(e.mapValue,t.mapValue);default:throw iw()}}function $w(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return vw(e,t);const n=Rw(e),r=Rw(t),i=vw(n.seconds,r.seconds);return 0!==i?i:vw(n.nanos,r.nanos)}function Ww(e){return Kw(e)}function Kw(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Rw(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Lw(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Vw.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Kw(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Kw(e.fields[i])}`;return n+"}"}(e.mapValue):iw();var t,n}function Gw(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Qw(e){return!!e&&"integerValue"in e}function Xw(e){return!!e&&"arrayValue"in e}function Yw(e){return!!e&&"nullValue"in e}function Jw(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Zw(e){return!!e&&"mapValue"in e}function eb(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return kw(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=eb(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eb(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class tb{constructor(e){this.value=e}static empty(){return new tb({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Zw(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eb(t)}setAll(e){let t=xw.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eb(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Zw(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Bw(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Zw(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){kw(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new tb(eb(this.value))}}function nb(e){const t=[];return kw(e.fields,((e,n)=>{const r=new xw([e]);if(Zw(n)){const e=nb(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Nw(t)
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/}class rb{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new rb(e,0,_w.min(),tb.empty(),0)}static newFoundDocument(e,t,n){return new rb(e,1,t,n,0)}static newNoDocument(e,t){return new rb(e,2,t,tb.empty(),0)}static newUnknownDocument(e,t){return new rb(e,3,t,tb.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tb.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tb.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof rb&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new rb(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ib{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function sb(e,t=null,n=[],r=[],i=null,s=null,o=null){return new ib(e,t,n,r,i,s,o)}function ob(e){const t=ow(e);if(null===t.A){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>function(e){return e.field.canonicalString()+e.op.toString()+Ww(e.value)}(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Fw(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=wb(t.startAt)),t.endAt&&(e+="|ub:",e+=wb(t.endAt)),t.A=e}return t.A}function ab(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!_b(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Bw(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!kb(e.startAt,t.startAt)&&kb(e.endAt,t.endAt)}function lb(e){return Vw.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class ub extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.R(e,t,n):new cb(e,t,n):"array-contains"===t?new pb(e,n):"in"===t?new mb(e,n):"not-in"===t?new gb(e,n):"array-contains-any"===t?new yb(e,n):new ub(e,t,n)}static R(e,t,n){return"in"===t?new hb(e,n):new fb(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.P(Hw(t,this.value)):null!==t&&jw(this.value)===jw(t)&&this.P(Hw(t,this.value))}P(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return iw()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cb extends ub{constructor(e,t,n){super(e,t,n),this.key=Vw.fromName(n.referenceValue)}matches(e){const t=Vw.comparator(e.key,this.key);return this.P(t)}}class hb extends ub{constructor(e,t){super(e,"in",t),this.keys=db("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class fb extends ub{constructor(e,t){super(e,"not-in",t),this.keys=db("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function db(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Vw.fromName(e.referenceValue)))}class pb extends ub{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Xw(t)&&qw(t.arrayValue,this.value)}}class mb extends ub{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&qw(this.value.arrayValue,t)}}class gb extends ub{constructor(e,t){super(e,"not-in",t)}matches(e){if(qw(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!qw(this.value.arrayValue,t)}}class yb extends ub{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Xw(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>qw(this.value.arrayValue,e)))}}class vb{constructor(e,t){this.position=e,this.before=t}}function wb(e){return`${e.before?"b":"a"}:${e.position.map((e=>Ww(e))).join(",")}`}class bb{constructor(e,t="asc"){this.field=e,this.dir=t}}function _b(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Eb(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Vw.comparator(Vw.fromName(o.referenceValue),n.key):Hw(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function kb(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Bw(e.position[n],t.position[n]))return!1;return!0}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Sb{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Tb(e){return new Sb(e)}function Ib(e){return!Fw(e.limit)&&"F"===e.limitType}function Cb(e){return!Fw(e.limit)&&"L"===e.limitType}function xb(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Nb(e){for(const t of e.filters)if(t.v())return t.field;return null}function Ab(e){return null!==e.collectionGroup}function Ob(e){const t=ow(e);if(null===t.V){t.V=[];const e=Nb(t),n=xb(t);if(null!==e&&null===n)e.isKeyField()||t.V.push(new bb(e)),t.V.push(new bb(xw.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.V.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.V.push(new bb(xw.keyField(),e))}}}return t.V}function Rb(e){const t=ow(e);if(!t.S)if("F"===t.limitType)t.S=sb(t.path,t.collectionGroup,Ob(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ob(t)){const t="desc"===i.dir?"asc":"desc";e.push(new bb(i.field,t))}const n=t.endAt?new vb(t.endAt.position,!t.endAt.before):null,r=t.startAt?new vb(t.startAt.position,!t.startAt.before):null;t.S=sb(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.S}function Pb(e,t){return ab(Rb(e),Rb(t))&&e.limitType===t.limitType}function Lb(e){return`${ob(Rb(e))}|lt:${e.limitType}`}function Db(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Ww(t.value)}`;var t})).join(", ")}]`),Fw(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: "+wb(e.startAt)),e.endAt&&(t+=", endAt: "+wb(e.endAt)),`Target(${t})`}(Rb(e))}; limitType=${e.limitType})`}function Mb(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Vw.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!Eb(n.startAt,Ob(n),r)||n.endAt&&Eb(n.endAt,Ob(n),r)));var n,r}function Ub(e){return(t,n)=>{let r=!1;for(const i of Ob(e)){const e=Fb(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Fb(e,t,n){const r=e.field.isKeyField()?Vw.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Hw(r,i):iw()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return iw()}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function zb(e,t){if(e.D){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zw(t)?"-0":t}}function Vb(e){return{integerValue:""+e}}function jb(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!zw(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Vb(t):zb(e,t)}
/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bb{constructor(){this._=void 0}}function qb(e,t,n){return e instanceof Wb?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Kb?Gb(e,t):e instanceof Qb?Xb(e,t):function(e,t){const n=$b(e,t),r=Jb(n)+Jb(e.C);return Qw(n)&&Qw(e.C)?Vb(r):zb(e.N,r)}(e,t)}function Hb(e,t,n){return e instanceof Kb?Gb(e,t):e instanceof Qb?Xb(e,t):n}function $b(e,t){return e instanceof Yb?Qw(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class Wb extends Bb{}class Kb extends Bb{constructor(e){super(),this.elements=e}}function Gb(e,t){const n=Zb(t);for(const r of e.elements)n.some((e=>Bw(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Qb extends Bb{constructor(e){super(),this.elements=e}}function Xb(e,t){let n=Zb(t);for(const r of e.elements)n=n.filter((e=>!Bw(e,r)));return{arrayValue:{values:n}}}class Yb extends Bb{constructor(e,t){super(),this.N=e,this.C=t}}function Jb(e){return Pw(e.integerValue||e.doubleValue)}function Zb(e){return Xw(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class e_{constructor(e,t){this.field=e,this.transform=t}}class t_{constructor(e,t){this.version=e,this.transformResults=t}}class n_{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new n_}static exists(e){return new n_(void 0,e)}static updateTime(e){return new n_(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function r_(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class i_{}function s_(e,t,n){var r;e instanceof c_?function(e,t,n){const r=e.value.clone(),i=d_(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof h_?function(e,t,n){if(!r_(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=d_(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(f_(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function o_(e,t,n){var r;e instanceof c_?function(e,t,n){if(!r_(e.precondition,t))return;const r=e.value.clone(),i=p_(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(u_(t),r).setHasLocalMutations()}(e,t,n):e instanceof h_?function(e,t,n){if(!r_(e.precondition,t))return;const r=p_(e.fieldTransforms,n,t),i=t.data;i.setAll(f_(e)),i.setAll(r),t.convertToFoundDocument(u_(t),i).setHasLocalMutations()}(e,t,n):(r=t,r_(e.precondition,r)&&r.convertToNoDocument(_w.min()))}function a_(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=$b(r.transform,e||null);null!=i&&(null==n&&(n=tb.empty()),n.set(r.field,i))}return n||null}function l_(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&ww(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Kb&&r instanceof Kb||n instanceof Qb&&r instanceof Qb?ww(n.elements,r.elements,Bw):n instanceof Yb&&r instanceof Yb?Bw(n.C,r.C):n instanceof Wb&&r instanceof Wb);var n,r}(e,t)))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}function u_(e){return e.isFoundDocument()?e.version:_w.min()}class c_ extends i_{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class h_ extends i_{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function f_(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function d_(e,t,n){const r=new Map;sw(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Hb(o,a,n[i]))}return r}function p_(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,qb(e,s,t))}return r}class m_ extends i_{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class g_ extends i_{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class y_{constructor(e){this.count=e}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var v_,w_;function b_(e){if(void 0===e)return tw("GRPC error has no .code"),aw.UNKNOWN;switch(e){case v_.OK:return aw.OK;case v_.CANCELLED:return aw.CANCELLED;case v_.UNKNOWN:return aw.UNKNOWN;case v_.DEADLINE_EXCEEDED:return aw.DEADLINE_EXCEEDED;case v_.RESOURCE_EXHAUSTED:return aw.RESOURCE_EXHAUSTED;case v_.INTERNAL:return aw.INTERNAL;case v_.UNAVAILABLE:return aw.UNAVAILABLE;case v_.UNAUTHENTICATED:return aw.UNAUTHENTICATED;case v_.INVALID_ARGUMENT:return aw.INVALID_ARGUMENT;case v_.NOT_FOUND:return aw.NOT_FOUND;case v_.ALREADY_EXISTS:return aw.ALREADY_EXISTS;case v_.PERMISSION_DENIED:return aw.PERMISSION_DENIED;case v_.FAILED_PRECONDITION:return aw.FAILED_PRECONDITION;case v_.ABORTED:return aw.ABORTED;case v_.OUT_OF_RANGE:return aw.OUT_OF_RANGE;case v_.UNIMPLEMENTED:return aw.UNIMPLEMENTED;case v_.DATA_LOSS:return aw.DATA_LOSS;default:return iw()}}(w_=v_||(v_={}))[w_.OK=0]="OK",w_[w_.CANCELLED=1]="CANCELLED",w_[w_.UNKNOWN=2]="UNKNOWN",w_[w_.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",w_[w_.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",w_[w_.NOT_FOUND=5]="NOT_FOUND",w_[w_.ALREADY_EXISTS=6]="ALREADY_EXISTS",w_[w_.PERMISSION_DENIED=7]="PERMISSION_DENIED",w_[w_.UNAUTHENTICATED=16]="UNAUTHENTICATED",w_[w_.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",w_[w_.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",w_[w_.ABORTED=10]="ABORTED",w_[w_.OUT_OF_RANGE=11]="OUT_OF_RANGE",w_[w_.UNIMPLEMENTED=12]="UNIMPLEMENTED",w_[w_.INTERNAL=13]="INTERNAL",w_[w_.UNAVAILABLE=14]="UNAVAILABLE",w_[w_.DATA_LOSS=15]="DATA_LOSS";
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class __{constructor(e,t){this.comparator=e,this.root=t||k_.EMPTY}insert(e,t){return new __(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,k_.BLACK,null,null))}remove(e){return new __(this.comparator,this.root.remove(e,this.comparator).copy(null,null,k_.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new E_(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new E_(this.root,e,this.comparator,!1)}getReverseIterator(){return new E_(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new E_(this.root,e,this.comparator,!0)}}class E_{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class k_{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:k_.RED,this.left=null!=r?r:k_.EMPTY,this.right=null!=i?i:k_.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new k_(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return k_.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return k_.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,k_.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,k_.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw iw();if(this.right.isRed())throw iw();const e=this.left.check();if(e!==this.right.check())throw iw();return e+(this.isRed()?0:1)}}k_.EMPTY=null,k_.RED=!0,k_.BLACK=!1,k_.EMPTY=new class{constructor(){this.size=0}get key(){throw iw()}get value(){throw iw()}get color(){throw iw()}get left(){throw iw()}get right(){throw iw()}copy(e,t,n,r,i){return this}insert(e,t,n){return new k_(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class S_{constructor(e){this.comparator=e,this.data=new __(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new T_(this.data.getIterator())}getIteratorFrom(e){return new T_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof S_))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new S_(this.comparator);return t.data=e,t}}class T_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const I_=new __(Vw.comparator);function C_(){return I_}const x_=new __(Vw.comparator);function N_(){return x_}const A_=new __(Vw.comparator);const O_=new S_(Vw.comparator);function R_(...e){let t=O_;for(const n of e)t=t.add(n);return t}const P_=new S_(vw);function L_(){return P_}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class D_{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,M_.createSynthesizedTargetChangeForCurrentChange(e,t)),new D_(_w.min(),n,L_(),C_(),R_())}}class M_{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new M_(Aw.EMPTY_BYTE_STRING,t,R_(),R_(),R_())}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class U_{constructor(e,t,n,r){this.k=e,this.removedTargetIds=t,this.key=n,this.$=r}}class F_{constructor(e,t){this.targetId=e,this.O=t}}class z_{constructor(e,t,n=Aw.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class V_{constructor(){this.F=0,this.M=q_(),this.L=Aw.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}W(){let e=R_(),t=R_(),n=R_();return this.M.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:iw()}})),new M_(this.L,this.B,e,t,n)}G(){this.U=!1,this.M=q_()}H(e,t){this.U=!0,this.M=this.M.insert(e,t)}J(e){this.U=!0,this.M=this.M.remove(e)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class j_{constructor(e){this.tt=e,this.et=new Map,this.nt=C_(),this.st=B_(),this.it=new S_(vw)}rt(e){for(const t of e.k)e.$&&e.$.isFoundDocument()?this.ot(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ct(e){this.forEachTarget(e,(t=>{const n=this.ut(t);switch(e.state){case 0:this.ht(t)&&n.j(e.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(e.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(t);break;case 3:this.ht(t)&&(n.Z(),n.j(e.resumeToken));break;case 4:this.ht(t)&&(this.lt(t),n.j(e.resumeToken));break;default:iw()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.et.forEach(((e,n)=>{this.ht(n)&&t(n)}))}ft(e){const t=e.targetId,n=e.O.count,r=this.dt(t);if(r){const e=r.target;if(lb(e))if(0===n){const n=new Vw(e.path);this.at(t,n,rb.newNoDocument(n,_w.min()))}else sw(1===n);else this.wt(t)!==n&&(this.lt(t),this.it=this.it.add(t))}}_t(e){const t=new Map;this.et.forEach(((n,r)=>{const i=this.dt(r);if(i){if(n.current&&lb(i.target)){const t=new Vw(i.target.path);null!==this.nt.get(t)||this.gt(r,t)||this.at(r,t,rb.newNoDocument(t,e))}n.K&&(t.set(r,n.W()),n.G())}}));let n=R_();this.st.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.dt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new D_(e,t,this.it,this.nt,n);return this.nt=C_(),this.st=B_(),this.it=new S_(vw),r}ot(e,t){if(!this.ht(e))return;const n=this.gt(e,t.key)?2:0;this.ut(e).H(t.key,n),this.nt=this.nt.insert(t.key,t),this.st=this.st.insert(t.key,this.yt(t.key).add(e))}at(e,t,n){if(!this.ht(e))return;const r=this.ut(e);this.gt(e,t)?r.H(t,1):r.J(t),this.st=this.st.insert(t,this.yt(t).delete(e)),n&&(this.nt=this.nt.insert(t,n))}removeTarget(e){this.et.delete(e)}wt(e){const t=this.ut(e).W();return this.tt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Y(e){this.ut(e).Y()}ut(e){let t=this.et.get(e);return t||(t=new V_,this.et.set(e,t)),t}yt(e){let t=this.st.get(e);return t||(t=new S_(vw),this.st=this.st.insert(e,t)),t}ht(e){const t=null!==this.dt(e);return t||ew("WatchChangeAggregator","Detected inactive target",e),t}dt(e){const t=this.et.get(e);return t&&t.q?null:this.tt.Et(e)}lt(e){this.et.set(e,new V_),this.tt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}gt(e,t){return this.tt.getRemoteKeysForTarget(e).has(t)}}function B_(){return new __(Vw.comparator)}function q_(){return new __(Vw.comparator)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const H_={asc:"ASCENDING",desc:"DESCENDING"},$_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class W_{constructor(e,t){this.databaseId=e,this.D=t}}function K_(e,t){return e.D?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function G_(e,t){return e.D?t.toBase64():t.toUint8Array()}function Q_(e,t){return K_(e,t.toTimestamp())}function X_(e){return sw(!!e),_w.fromTimestamp(function(e){const t=Rw(e);return new bw(t.seconds,t.nanos)}(e))}function Y_(e,t){return(n=e,new Iw(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function J_(e){const t=Iw.fromString(e);return sw(vE(t)),t}function Z_(e,t){return Y_(e.databaseId,t.path)}function eE(e,t){const n=J_(t);if(n.get(1)!==e.databaseId.projectId)throw new lw(aw.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new lw(aw.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Vw(rE(n))}function tE(e,t){return Y_(e.databaseId,t)}function nE(e){return new Iw(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function rE(e){return sw(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function iE(e,t,n){return{name:Z_(e,t),fields:n.value.mapValue.fields}}function sE(e,t){return{documents:[tE(e,t.path)]}}function oE(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=tE(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=tE(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Jw(e.value))return{unaryFilter:{field:dE(e.field),op:"IS_NAN"}};if(Yw(e.value))return{unaryFilter:{field:dE(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Jw(e.value))return{unaryFilter:{field:dE(e.field),op:"IS_NOT_NAN"}};if(Yw(e.value))return{unaryFilter:{field:dE(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:dE(e.field),op:fE(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:dE((t=e).field),direction:hE(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=e,l=t.limit,a.D||Fw(l)?l:{value:l});var a,l;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=uE(t.startAt)),t.endAt&&(n.structuredQuery.endAt=uE(t.endAt)),n}function aE(e){let t=function(e){const t=J_(e);return 4===t.length?Iw.emptyPath():rE(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){sw(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=lE(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new bb(pE((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Fw(t)?null:t}(n.limit));let l=null;n.startAt&&(l=cE(n.startAt));let u=null;return n.endAt&&(u=cE(n.endAt)),function(e,t,n,r,i,s,o,a){return new Sb(e,t,n,r,i,s,o,a)}(t,i,o,s,a,"F",l,u)}function lE(e){return e?void 0!==e.unaryFilter?[gE(e)]:void 0!==e.fieldFilter?[mE(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>lE(e))).reduce(((e,t)=>e.concat(t))):iw():[]}function uE(e){return{before:e.before,values:e.position}}function cE(e){const t=!!e.before,n=e.values||[];return new vb(n,t)}function hE(e){return H_[e]}function fE(e){return $_[e]}function dE(e){return{fieldPath:e.canonicalString()}}function pE(e){return xw.fromServerFormat(e.fieldPath)}function mE(e){return ub.create(pE(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return iw()}}(e.fieldFilter.op),e.fieldFilter.value)}function gE(e){switch(e.unaryFilter.op){case"IS_NAN":const t=pE(e.unaryFilter.field);return ub.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=pE(e.unaryFilter.field);return ub.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=pE(e.unaryFilter.field);return ub.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=pE(e.unaryFilter.field);return ub.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return iw()}}function yE(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function vE(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class wE{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&iw(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new wE(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof wE?t:wE.resolve(t)}catch(t){return wE.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):wE.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):wE.reject(t)}static resolve(e){return new wE(((t,n)=>{t(e)}))}static reject(e){return new wE(((t,n)=>{n(e)}))}static waitFor(e){return new wE(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=wE.resolve(!1);for(const n of e)t=t.next((e=>e?wE.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function bE(e){return"IndexedDbTransactionError"===e.name}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class _E{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&s_(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&o_(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&o_(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(_w.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),R_())}isEqual(e){return this.batchId===e.batchId&&ww(this.mutations,e.mutations,((e,t)=>l_(e,t)))&&ww(this.baseMutations,e.baseMutations,((e,t)=>l_(e,t)))}}class EE{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){sw(e.mutations.length===n.length);let r=A_;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new EE(e,t,n,r)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class kE{constructor(e,t,n,r,i=_w.min(),s=_w.min(),o=Aw.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new kE(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new kE(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new kE(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class SE{constructor(e){this.Wt=e}}function TE(e){const t=aE({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new Sb(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class IE{constructor(){this.Gt=new CE}addToCollectionParentIndex(e,t){return this.Gt.add(t),wE.resolve()}getCollectionParents(e,t){return wE.resolve(this.Gt.getEntries(t))}}class CE{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new S_(Iw.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new S_(Iw.comparator)).toArray()}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class xE{constructor(e){this.ne=e}next(){return this.ne+=2,this.ne}static se(){return new xE(0)}static ie(){return new xE(-1)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/async function NE(e){if(e.code!==aw.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;ew("LocalStore","Unexpectedly lost primary lease")}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class AE{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){kw(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Sw(this.inner)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
class OE{constructor(e,t,n){this.He=e,this.In=t,this.Ht=n}An(e,t){return this.In.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Rn(e,t,n)))}Rn(e,t,n){return this.He.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Pn(e,t){return this.He.getEntries(e,t).next((t=>this.vn(e,t).next((()=>t))))}vn(e,t){return this.In.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return r=t,Vw.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Vn(e,t.path):Ab(t)?this.Sn(e,t,n):this.Dn(e,t,n);var r}Vn(e,t){return this.An(e,new Vw(t)).next((e=>{let t=N_();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Sn(e,t,n){const r=t.collectionGroup;let i=N_();return this.Ht.getCollectionParents(e,r).next((s=>wE.forEach(s,(s=>{const o=(a=t,l=s.child(r),new Sb(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.Dn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Dn(e,t,n){let r,i;return this.He.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Cn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=rb.newInvalidDocument(n),r=r.insert(n,i)),o_(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Mb(t,n)||(r=r.remove(e))})),r)))}Cn(e,t,n){let r=R_();for(const s of t)for(const e of s.mutations)e instanceof h_&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class RE{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Nn=n,this.xn=r}static kn(e,t){let n=R_(),r=R_();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new RE(e,t.fromCache,n,r)}}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class PE{$n(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return 0===(i=t).filters.length&&null===i.limit&&null==i.startAt&&null==i.endAt&&(0===i.explicitOrderBy.length||1===i.explicitOrderBy.length&&i.explicitOrderBy[0].field.isKeyField())||n.isEqual(_w.min())?this.Fn(e,t):this.On.Pn(e,r).next((i=>{const s=this.Mn(t,i);return(Ib(t)||Cb(t))&&this.Ln(t.limitType,s,r,n)?this.Fn(e,t):(Zv()<=Yh.DEBUG&&ew("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Db(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var i}Mn(e,t){let n=new S_(Ub(e));return t.forEach(((t,r)=>{Mb(e,r)&&(n=n.add(r))})),n}Ln(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(e,t){return Zv()<=Yh.DEBUG&&ew("QueryEngine","Using full collection scan to execute query:",Db(t)),this.On.getDocumentsMatchingQuery(e,t,_w.min())}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class LE{constructor(e,t,n,r){this.persistence=e,this.Bn=t,this.N=r,this.Un=new __(vw),this.qn=new AE((e=>ob(e)),ab),this.Kn=_w.min(),this.In=e.getMutationQueue(n),this.jn=e.getRemoteDocumentCache(),this.ze=e.getTargetCache(),this.Qn=new OE(this.jn,this.In,this.persistence.getIndexManager()),this.Je=e.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Un)))}}async function DE(e,t){const n=ow(e);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.In.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new OE(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=R_();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.Pn(e,o).next((e=>({Wn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function ME(e){const t=ow(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.ze.getLastRemoteSnapshotVersion(e)))}function UE(e,t){const n=ow(e),r=t.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.ze.addMatchingKeys(e,t.addedDocuments,s))));const l=t.resumeToken;if(l.approximateByteSize()>0){const f=a.withResumeToken(l,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,f),u=a,h=t,sw((c=f).resumeToken.approximateByteSize()>0),(0===u.resumeToken.approximateByteSize()||c.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||h.addedDocuments.size+h.modifiedDocuments.size+h.removedDocuments.size>0)&&o.push(n.ze.updateTargetData(e,f))}var u,c,h}));let a=C_();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n,r,i){let s=R_();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=C_();return n.forEach(((n,o)=>{const a=e.get(n),l=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(_w.min())?(t.removeEntry(n,l),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,l),s=s.insert(n,o)):ew("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(_w.min())){const t=n.ze.getLastRemoteSnapshotVersion(e).next((t=>n.ze.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return wE.waitFor(o).next((()=>s.apply(e))).next((()=>n.Qn.vn(e,a))).next((()=>a))})).then((e=>(n.Un=i,e)))}function FE(e,t){const n=ow(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.In.getNextMutationBatchAfterBatchId(e,t))))}async function zE(e,t,n){const r=ow(e),i=r.Un.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(o){if(!bE(o))throw o;ew("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Un=r.Un.remove(t),r.qn.delete(i.target)}function VE(e,t,n){const r=ow(e);let i=_w.min(),s=R_();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=ow(e),i=r.qn.get(n);return void 0!==i?wE.resolve(r.Un.get(i)):r.ze.getTargetData(t,n)}(r,e,Rb(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Bn.getDocumentsMatchingQuery(e,t,n?i:_w.min(),n?s:R_()))).next((e=>({documents:e,Gn:s})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(e){this.N=e,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return wE.resolve(this.Yn.get(t))}saveBundleMetadata(e,t){var n;return this.Yn.set(t.id,{id:(n=t).id,version:n.version,createTime:X_(n.createTime)}),wE.resolve()}getNamedQuery(e,t){return wE.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,{name:(n=t).name,query:TE(n.bundledQuery),readTime:X_(n.readTime)}),wE.resolve();var n}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class BE{constructor(){this.Zn=new S_(qE.ts),this.es=new S_(qE.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new qE(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new qE(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}cs(e){const t=new Vw(new Iw([])),n=new qE(t,e),r=new qE(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}us(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new Vw(new Iw([])),n=new qE(t,e),r=new qE(t,e+1);let i=R_();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new qE(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class qE{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return Vw.comparator(e.key,t.key)||vw(e.ls,t.ls)}static ns(e,t){return vw(e.ls,t.ls)||Vw.comparator(e.key,t.key)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class HE{constructor(e,t){this.Ht=e,this.referenceDelegate=t,this.In=[],this.fs=1,this.ds=new S_(qE.ts)}checkEmpty(e){return wE.resolve(0===this.In.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new _E(i,t,n,r);this.In.push(s);for(const o of r)this.ds=this.ds.add(new qE(o.key,i)),this.Ht.addToCollectionParentIndex(e,o.key.path.popLast());return wE.resolve(s)}lookupMutationBatch(e,t){return wE.resolve(this.ws(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this._s(n),i=r<0?0:r;return wE.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return wE.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(e){return wE.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new qE(t,0),r=new qE(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this.ws(e.ls);i.push(t)})),wE.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new S_(vw);return t.forEach((e=>{const t=new qE(e,0),r=new qE(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),wE.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Vw.isDocumentKey(i)||(i=i.child(""));const s=new qE(new Vw(i),0);let o=new S_(vw);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),s),wE.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this.ws(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){sw(0===this.ys(t.batchId,"removed")),this.In.shift();let n=this.ds;return wE.forEach(t.mutations,(r=>{const i=new qE(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}te(e){}containsKey(e,t){const n=new qE(t,0),r=this.ds.firstAfterOrEqual(n);return wE.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.In.length,wE.resolve()}ys(e,t){return this._s(e)}_s(e){return 0===this.In.length?0:e-this.In[0].batchId}ws(e){const t=this._s(e);return t<0||t>=this.In.length?null:this.In[t]}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class $E{constructor(e,t){this.Ht=e,this.ps=t,this.docs=new __(Vw.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return wE.resolve(n?n.document.clone():rb.newInvalidDocument(t))}getEntries(e,t){let n=C_();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():rb.newInvalidDocument(e))})),wE.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=C_();const i=new Vw(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Mb(t,i)&&(r=r.insert(i.key,i.clone()))}return wE.resolve(r)}Es(e,t){return wE.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new WE(this)}getSize(e){return wE.resolve(this.size)}}class WE extends class{constructor(){this.changes=new AE((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:_w.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:rb.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?wE.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.Se=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.Se.addEntry(e,r.document,this.getReadTime(n))):this.Se.removeEntry(n)})),wE.waitFor(t)}getFromCache(e,t){return this.Se.getEntry(e,t)}getAllFromCache(e,t){return this.Se.getEntries(e,t)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class KE{constructor(e){this.persistence=e,this.Ts=new AE((e=>ob(e)),ab),this.lastRemoteSnapshotVersion=_w.min(),this.highestTargetId=0,this.Is=0,this.As=new BE,this.targetCount=0,this.Rs=xE.se()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),wE.resolve()}getLastRemoteSnapshotVersion(e){return wE.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return wE.resolve(this.Is)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),wE.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Is&&(this.Is=t),wE.resolve()}ae(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new xE(t),this.highestTargetId=t),e.sequenceNumber>this.Is&&(this.Is=e.sequenceNumber)}addTargetData(e,t){return this.ae(t),this.targetCount+=1,wE.resolve()}updateTargetData(e,t){return this.ae(t),wE.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.cs(t.targetId),this.targetCount-=1,wE.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),wE.waitFor(i).next((()=>r))}getTargetCount(e){return wE.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return wE.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),wE.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),wE.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.cs(t),wE.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return wE.resolve(n)}containsKey(e,t){return wE.resolve(this.As.containsKey(t))}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class GE{constructor(e,t){var n;this.bs={},this.Le=new mw(0),this.Be=!1,this.Be=!0,this.referenceDelegate=e(this),this.ze=new KE(this),this.Ht=new IE,this.He=(n=this.Ht,new $E(n,(e=>this.referenceDelegate.Ps(e)))),this.N=new SE(t),this.Je=new jE(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new HE(this.Ht,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(e,t,n){ew("MemoryPersistence","Starting transaction:",e);const r=new QE(this.Le.next());return this.referenceDelegate.vs(),n(r).next((e=>this.referenceDelegate.Vs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ss(e,t){return wE.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class QE extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class XE{constructor(e){this.persistence=e,this.Ds=new BE,this.Cs=null}static Ns(e){return new XE(e)}get xs(){if(this.Cs)return this.Cs;throw iw()}addReference(e,t,n){return this.Ds.addReference(n,t),this.xs.delete(n.toString()),wE.resolve()}removeReference(e,t,n){return this.Ds.removeReference(n,t),this.xs.add(n.toString()),wE.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),wE.resolve()}removeTarget(e,t){this.Ds.cs(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}vs(){this.Cs=new Set}Vs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return wE.forEach(this.xs,(n=>{const r=Vw.fromPath(n);return this.ks(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Cs=null,t.apply(e))))}updateLimboDocument(e,t){return this.ks(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}Ps(e){return 0}ks(e,t){return wE.or([()=>wE.resolve(this.Ds.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ss(e,t)])}}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class YE{constructor(){this.activeTargetIds=L_()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ms(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JE{constructor(){this.yi=new YE,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.yi.Fs(e),this.pi[e]||"not-current"}updateQueryState(e,t,n){this.pi[e]=t}removeLocalQueryTarget(e){this.yi.Ms(e)}isLocalQueryTarget(e){return this.yi.activeTargetIds.has(e)}clearQueryState(e){delete this.pi[e]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(e){return this.yi.activeTargetIds.has(e)}start(){return this.yi=new YE,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ZE{Ei(e){}shutdown(){}}
/**
* @license
* Copyright 2019 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ek{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){ew("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Ri(){ew("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const tk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class nk{constructor(e){this.vi=e.vi,this.Vi=e.Vi}Si(e){this.Di=e}Ci(e){this.Ni=e}onMessage(e){this.xi=e}close(){this.Vi()}send(e){this.vi(e)}ki(){this.Di()}$i(e){this.Ni(e)}Oi(e){this.xi(e)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class rk extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Fi=t+"://"+e.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(e,t,n,r){const i=this.Bi(e,t);ew("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(e,i,s,n).then((e=>(ew("RestConnection","Received: ",e),e)),(t=>{throw nw("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Ki(e,t,n,r){return this.Li(e,t,n,r)}Ui(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+Yv,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}Bi(e,t){const n=tk[e];return`${this.Fi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}qi(e,t,n,r){return new Promise(((i,s)=>{const o=new Qv;o.listenOnce(qv.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Bv.NO_ERROR:const t=o.getResponseJson();ew("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Bv.TIMEOUT:ew("Connection",'RPC "'+e+'" timed out'),s(new lw(aw.DEADLINE_EXCEEDED,"Request time out"));break;case Bv.HTTP_ERROR:const n=o.getStatus();if(ew("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(aw).indexOf(t)>=0?t:aw.UNKNOWN}(e.status);s(new lw(t,e.message))}else s(new lw(aw.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new lw(aw.UNAVAILABLE,"Connection failed."));break;default:iw()}}finally{ew("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ji(e,t){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new Uv,i=Ag(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new Kv({})),this.Ui(s.initMessageHeaders,t),Lh()||Mh()||Ph().indexOf("Electron/")>=0||Uh()||Ph().indexOf("MSAppHost/")>=0||Dh()||(s.httpHeadersOverwriteParam="$httpHeaders");const o=n.join("");ew("Connection","Creating WebChannel: "+o,s);const a=r.createWebChannel(o,s);let l=!1,u=!1;const c=new nk({vi:e=>{u?ew("Connection","Not sending because WebChannel is closed:",e):(l||(ew("Connection","Opening WebChannel transport."),a.open(),l=!0),ew("Connection","WebChannel sending:",e),a.send(e))},Vi:()=>a.close()}),h=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return h(a,Gv.EventType.OPEN,(()=>{u||ew("Connection","WebChannel transport opened.")})),h(a,Gv.EventType.CLOSE,(()=>{u||(u=!0,ew("Connection","WebChannel transport closed"),c.$i())})),h(a,Gv.EventType.ERROR,(e=>{u||(u=!0,nw("Connection","WebChannel transport errored:",e),c.$i(new lw(aw.UNAVAILABLE,"The operation could not be completed")))})),h(a,Gv.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];sw(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){ew("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=v_[e];if(void 0!==t)return b_(t)}(e),n=i.message;void 0===t&&(t=aw.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),u=!0,c.$i(new lw(t,n)),a.close()}else ew("Connection","WebChannel received:",n),c.Oi(n)}})),h(i,Hv.STAT_EVENT,(e=>{e.stat===$v?ew("Connection","Detected buffering proxy"):e.stat===Wv&&ew("Connection","Detected no buffering proxy")})),setTimeout((()=>{c.ki()}),0),c}}function ik(){return"undefined"!=typeof document?document:null}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function sk(e){return new W_(e,!0)}class ok{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(e){this.cancel();const t=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,t-n);r>0&&ew("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Ji=Date.now(),e()))),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ak{constructor(e,t,n,r,i,s){this.Oe=e,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new ok(e,t)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,(()=>this.dr())))}wr(e){this._r(),this.stream.send(e)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(e,t){this._r(),this.rr.cancel(),this.sr++,3!==e?this.rr.reset():t&&t.code===aw.RESOURCE_EXHAUSTED?(tw(t.toString()),tw("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):t&&t.code===aw.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ci(t)}mr(){}auth(){this.state=1;const e=this.gr(this.sr),t=this.sr;this.credentialsProvider.getToken().then((e=>{this.sr===t&&this.yr(e)}),(t=>{e((()=>{const e=new lw(aw.UNKNOWN,"Fetching auth token failed: "+t.message);return this.pr(e)}))}))}yr(e){const t=this.gr(this.sr);this.stream=this.Er(e),this.stream.Si((()=>{t((()=>(this.state=2,this.listener.Si())))})),this.stream.Ci((e=>{t((()=>this.pr(e)))})),this.stream.onMessage((e=>{t((()=>this.onMessage(e)))}))}ur(){this.state=4,this.rr.Xi((async()=>{this.state=0,this.start()}))}pr(e){return ew("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(3,e)}gr(e){return t=>{this.Oe.enqueueAndForget((()=>this.sr===e?t():(ew("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class lk extends ak{constructor(e,t,n,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle",t,n,i),this.N=r}Er(e){return this.nr.ji("Listen",e)}onMessage(e){this.rr.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:iw(),s=t.targetChange.targetIds||[],o=function(e,t){return e.D?(sw(void 0===t||"string"==typeof t),Aw.fromBase64String(t||"")):(sw(void 0===t||t instanceof Uint8Array),Aw.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,l=a&&function(e){const t=void 0===e.code?aw.UNKNOWN:b_(e.code);return new lw(t,e.message||"")}(a);n=new z_(i,s,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=eE(e,r.document.name),s=X_(r.document.updateTime),o=new tb({mapValue:{fields:r.document.fields}}),a=rb.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new U_(l,u,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=eE(e,r.document),s=r.readTime?X_(r.readTime):_w.min(),o=rb.newNoDocument(i,s),a=r.removedTargetIds||[];n=new U_([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=eE(e,r.document),s=r.removedTargetIds||[];n=new U_([],s,i,null)}else{if(!("filter"in t))return iw();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new y_(r),s=e.targetId;n=new F_(s,i)}}var r;return n}(this.N,e),n=function(e){if(!("targetChange"in e))return _w.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?_w.min():t.readTime?X_(t.readTime):_w.min()}(e);return this.listener.Tr(t,n)}Ir(e){const t={};t.database=nE(this.N),t.addTarget=function(e,t){let n;const r=t.target;return n=lb(r)?{documents:sE(e,r)}:{query:oE(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=G_(e,t.resumeToken):t.snapshotVersion.compareTo(_w.min())>0&&(n.readTime=K_(e,t.snapshotVersion.toTimestamp())),n}(this.N,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return iw()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,e);n&&(t.labels=n),this.wr(t)}Ar(e){const t={};t.database=nE(this.N),t.removeTarget=e,this.wr(t)}}class uk extends ak{constructor(e,t,n,r,i){super(e,"write_stream_connection_backoff","write_stream_idle",t,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(e){return this.nr.ji("Write",e)}onMessage(e){if(sw(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Rr){this.rr.reset();const t=function(e,t){return e&&e.length>0?(sw(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?X_(e.updateTime):X_(t);return n.isEqual(_w.min())&&(n=X_(t)),new t_(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=X_(e.commitTime);return this.listener.vr(n,t)}return sw(!e.writeResults||0===e.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const e={};e.database=nE(this.N),this.wr(e)}Pr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof c_)n={update:iE(e,t.key,t.value)};else if(t instanceof m_)n={delete:Z_(e,t.key)};else if(t instanceof h_)n={update:iE(e,t.key,t.data),updateMask:yE(t.fieldMask)};else{if(!(t instanceof g_))return iw();n={verify:Z_(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Wb)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Kb)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Qb)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Yb)return{fieldPath:t.field.canonicalString(),increment:n.C};throw iw()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Q_(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:iw())),n;var r,i}(this.N,e)))};this.wr(t)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class ck extends class{}{constructor(e,t,n){super(),this.credentials=e,this.nr=t,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new lw(aw.FAILED_PRECONDITION,"The client has already been terminated.")}Li(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Li(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===aw.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new lw(aw.UNKNOWN,e.toString())}))}Ki(e,t,n){return this.Cr(),this.credentials.getToken().then((r=>this.nr.Ki(e,t,n,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===aw.UNAUTHENTICATED&&this.credentials.invalidateToken(),e):new lw(aw.UNKNOWN,e.toString())}))}terminate(){this.Dr=!0}}class hk{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve()))))}Lr(e){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Fr("Offline")))}set(e){this.Br(),this.Nr=0,"Online"===e&&(this.$r=!1),this.Fr(e)}Fr(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Mr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(tw(t),this.$r=!1):ew("OnlineStateTracker",t)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class fk{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei((e=>{n.enqueueAndForget((async()=>{_k(this)&&(ew("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ow(e);t.Kr.add(4),await pk(t),t.Wr.set("Unknown"),t.Kr.delete(4),await dk(t)}(this))}))})),this.Wr=new hk(n,r)}}async function dk(e){if(_k(e))for(const t of e.jr)await t(!0)}async function pk(e){for(const t of e.jr)await t(!1)}function mk(e,t){const n=ow(e);n.qr.has(t.targetId)||(n.qr.set(t.targetId,t),bk(n)?wk(n):Uk(n).cr()&&yk(n,t))}function gk(e,t){const n=ow(e),r=Uk(n);n.qr.delete(t),r.cr()&&vk(n,t),0===n.qr.size&&(r.cr()?r.lr():_k(n)&&n.Wr.set("Unknown"))}function yk(e,t){e.Gr.Y(t.targetId),Uk(e).Ir(t)}function vk(e,t){e.Gr.Y(t),Uk(e).Ar(t)}function wk(e){e.Gr=new j_({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.qr.get(t)||null}),Uk(e).start(),e.Wr.Or()}function bk(e){return _k(e)&&!Uk(e).ar()&&e.qr.size>0}function _k(e){return 0===ow(e).Kr.size}function Ek(e){e.Gr=void 0}async function kk(e){e.qr.forEach(((t,n)=>{yk(e,t)}))}async function Sk(e,t){Ek(e),bk(e)?(e.Wr.Lr(t),wk(e)):e.Wr.set("Unknown")}async function Tk(e,t,n){if(e.Wr.set("Online"),t instanceof z_&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qr.delete(r),e.Gr.removeTarget(r))}(e,t)}catch(r){ew("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ik(e,r)}else if(t instanceof U_?e.Gr.rt(t):t instanceof F_?e.Gr.ft(t):e.Gr.ct(t),!n.isEqual(_w.min()))try{const t=await ME(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Gr._t(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.qr.get(r);i&&e.qr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qr.get(t);if(!n)return;e.qr.set(t,n.withResumeToken(Aw.EMPTY_BYTE_STRING,n.snapshotVersion)),vk(e,t);const r=new kE(n.target,t,1,n.sequenceNumber);yk(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){ew("RemoteStore","Failed to raise snapshot:",i),await Ik(e,i)}}async function Ik(e,t,n){if(!bE(t))throw t;e.Kr.add(1),await pk(e),e.Wr.set("Offline"),n||(n=()=>ME(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ew("RemoteStore","Retrying IndexedDB access"),await n(),e.Kr.delete(1),await dk(e)}))}function Ck(e,t){return t().catch((n=>Ik(e,n,t)))}async function xk(e){const t=ow(e),n=Fk(t);let r=t.Ur.length>0?t.Ur[t.Ur.length-1].batchId:-1;for(;Nk(t);)try{const e=await FE(t.localStore,r);if(null===e){0===t.Ur.length&&n.lr();break}r=e.batchId,Ak(t,e)}catch(i){await Ik(t,i)}Ok(t)&&Rk(t)}function Nk(e){return _k(e)&&e.Ur.length<10}function Ak(e,t){e.Ur.push(t);const n=Fk(e);n.cr()&&n.br&&n.Pr(t.mutations)}function Ok(e){return _k(e)&&!Fk(e).ar()&&e.Ur.length>0}function Rk(e){Fk(e).start()}async function Pk(e){Fk(e).Sr()}async function Lk(e){const t=Fk(e);for(const n of e.Ur)t.Pr(n.mutations)}async function Dk(e,t,n){const r=e.Ur.shift(),i=EE.from(r,t,n);await Ck(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await xk(e)}async function Mk(e,t){t&&Fk(e).br&&await async function(e,t){if(function(e){switch(e){case aw.OK:return iw();case aw.CANCELLED:case aw.UNKNOWN:case aw.DEADLINE_EXCEEDED:case aw.RESOURCE_EXHAUSTED:case aw.INTERNAL:case aw.UNAVAILABLE:case aw.UNAUTHENTICATED:return!1;case aw.INVALID_ARGUMENT:case aw.NOT_FOUND:case aw.ALREADY_EXISTS:case aw.PERMISSION_DENIED:case aw.FAILED_PRECONDITION:case aw.ABORTED:case aw.OUT_OF_RANGE:case aw.UNIMPLEMENTED:case aw.DATA_LOSS:return!0;default:return iw()}}(n=t.code)&&n!==aw.ABORTED){const n=e.Ur.shift();Fk(e).hr(),await Ck(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await xk(e)}var n}(e,t),Ok(e)&&Rk(e)}function Uk(e){return e.zr||(e.zr=function(e,t,n){const r=ow(e);return r.Cr(),new lk(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:kk.bind(null,e),Ci:Sk.bind(null,e),Tr:Tk.bind(null,e)}),e.jr.push((async t=>{t?(e.zr.hr(),bk(e)?wk(e):e.Wr.set("Unknown")):(await e.zr.stop(),Ek(e))}))),e.zr}function Fk(e){return e.Hr||(e.Hr=function(e,t,n){const r=ow(e);return r.Cr(),new uk(t,r.nr,r.credentials,r.N,n)}(e.datastore,e.asyncQueue,{Si:Pk.bind(null,e),Ci:Mk.bind(null,e),Vr:Lk.bind(null,e),vr:Dk.bind(null,e)}),e.jr.push((async t=>{t?(e.Hr.hr(),await xk(e)):(await e.Hr.stop(),e.Ur.length>0&&(ew("RemoteStore",`Stopping write stream with ${e.Ur.length} pending writes`),e.Ur=[]))}))),e.Hr
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/}class zk{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new uw,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new zk(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new lw(aw.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vk(e,t){if(tw("AsyncQueue",`${t}: ${e}`),bE(e))return new lw(aw.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class jk{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Vw.comparator(t.key,n.key):(e,t)=>Vw.comparator(e.key,t.key),this.keyedMap=N_(),this.sortedSet=new __(this.comparator)}static emptySet(e){return new jk(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof jk))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new jk;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Bk{constructor(){this.Jr=new __(Vw.comparator)}track(e){const t=e.doc.key,n=this.Jr.get(t);n?0!==e.type&&3===n.type?this.Jr=this.Jr.insert(t,e):3===e.type&&1!==n.type?this.Jr=this.Jr.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jr=this.Jr.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jr=this.Jr.remove(t):1===e.type&&2===n.type?this.Jr=this.Jr.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jr=this.Jr.insert(t,{type:2,doc:e.doc}):iw():this.Jr=this.Jr.insert(t,e)}Yr(){const e=[];return this.Jr.inorderTraversal(((t,n)=>{e.push(n)})),e}}class qk{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new qk(e,t,jk.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pb(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Hk{constructor(){this.Xr=void 0,this.listeners=[]}}class $k{constructor(){this.queries=new AE((e=>Lb(e)),Pb),this.onlineState="Unknown",this.Zr=new Set}}async function Wk(e,t){const n=ow(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Hk),i)try{s.Xr=await n.onListen(r)}catch(o){const e=Vk(o,`Initialization of query '${Db(t.query)}' failed`);return void t.onError(e)}n.queries.set(r,s),s.listeners.push(t),t.eo(n.onlineState),s.Xr&&t.no(s.Xr)&&Xk(n)}async function Kk(e,t){const n=ow(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Gk(e,t){const n=ow(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.no(i)&&(r=!0);t.Xr=i}}r&&Xk(n)}function Qk(e,t,n){const r=ow(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Xk(e){e.Zr.forEach((e=>{e.next()}))}class Yk{constructor(e,t,n){this.query=e,this.so=t,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new qk(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.io?this.oo(e)&&(this.so.next(e),t=!0):this.ao(e,this.onlineState)&&(this.co(e),t=!0),this.ro=e,t}onError(e){this.so.error(e)}eo(e){this.onlineState=e;let t=!1;return this.ro&&!this.io&&this.ao(this.ro,e)&&(this.co(this.ro),t=!0),t}ao(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.uo&&n||e.docs.isEmpty()&&"Offline"!==t)}oo(e){if(e.docChanges.length>0)return!0;const t=this.ro&&this.ro.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}co(e){e=qk.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.io=!0,this.so.next(e)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class Jk{constructor(e){this.key=e}}class Zk{constructor(e){this.key=e}}class eS{constructor(e,t){this.query=e,this._o=t,this.mo=null,this.current=!1,this.yo=R_(),this.mutatedKeys=R_(),this.po=Ub(e),this.Eo=new jk(this.po)}get To(){return this._o}Io(e,t){const n=t?t.Ao:new Bk,r=t?t.Eo:this.Eo;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Ib(this.query)&&r.size===this.query.limit?r.last():null,l=Cb(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Mb(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let d=!1;u&&c?u.data.isEqual(c.data)?h!==f&&(n.track({type:3,doc:c}),d=!0):this.Ro(u,c)||(n.track({type:2,doc:c}),d=!0,(a&&this.po(c,a)>0||l&&this.po(c,l)<0)&&(o=!0)):!u&&c?(n.track({type:0,doc:c}),d=!0):u&&!c&&(n.track({type:1,doc:u}),d=!0,(a||l)&&(o=!0)),d&&(c?(s=s.add(c),i=f?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),Ib(this.query)||Cb(this.query))for(;s.size>this.query.limit;){const e=Ib(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Eo;this.Eo=e.Eo,this.mutatedKeys=e.mutatedKeys;const i=e.Ao.Yr();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return iw()}};return n(e)-n(t)}(e.type,t.type)||this.po(e.doc,t.doc))),this.bo(n);const s=t?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new qk(this.query,e.Eo,r,i,e.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Bk,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(e){return!this._o.has(e)&&!!this.Eo.has(e)&&!this.Eo.get(e).hasLocalMutations}bo(e){e&&(e.addedDocuments.forEach((e=>this._o=this._o.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this._o=this._o.delete(e))),this.current=e.current)}Po(){if(!this.current)return[];const e=this.yo;this.yo=R_(),this.Eo.forEach((e=>{this.Vo(e.key)&&(this.yo=this.yo.add(e.key))}));const t=[];return e.forEach((e=>{this.yo.has(e)||t.push(new Zk(e))})),this.yo.forEach((n=>{e.has(n)||t.push(new Jk(n))})),t}So(e){this._o=e.Gn,this.yo=R_();const t=this.Io(e.documents);return this.applyChanges(t,!0)}Do(){return qk.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class tS{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class nS{constructor(e){this.key=e,this.Co=!1}}class rS{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new AE((e=>Lb(e)),Pb),this.ko=new Map,this.$o=new Set,this.Oo=new __(Vw.comparator),this.Fo=new Map,this.Mo=new BE,this.Lo={},this.Bo=new Map,this.Uo=xE.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function iS(e,t){const n=function(e){const t=ow(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=aS.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=_S.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=uS.bind(null,t),t.No.Tr=Gk.bind(null,t.eventManager),t.No.jo=Qk.bind(null,t.eventManager),t}(e);let r,i;const s=n.xo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const e=await function(e,t){const n=ow(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.ze.getTargetData(e,t).next((i=>i?(r=i,wE.resolve(r)):n.ze.allocateTargetId(e).next((i=>(r=new kE(t,i,0,e.currentSequenceNumber),n.ze.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Un.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(e.targetId,e),n.qn.set(t,e.targetId)),e}))}(n.localStore,Rb(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await async function(e,t,n,r){e.Ko=(t,n,r)=>async function(e,t,n,r){let i=t.view.Io(n);i.Ln&&(i=await VE(e.localStore,t.query,!1).then((({documents:e})=>t.view.Io(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return gS(e,t.targetId,o.vo),o.snapshot}(e,t,n,r);const i=await VE(e.localStore,t,!0),s=new eS(t,i.Gn),o=s.Io(i.documents),a=M_.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=s.applyChanges(o,e.isPrimaryClient,a);gS(e,n,l.vo);const u=new tS(t,n,s);return e.xo.set(t,u),e.ko.has(n)?e.ko.get(n).push(t):e.ko.set(n,[t]),l.snapshot}(n,t,r,"current"===s),n.isPrimaryClient&&mk(n.remoteStore,e)}return i}async function sS(e,t){const n=ow(e),r=n.xo.get(t),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter((e=>!Pb(e,t)))),void n.xo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await zE(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),gk(n.remoteStore,r.targetId),pS(n,r.targetId)})).catch(NE)):(pS(n,r.targetId),await zE(n.localStore,r.targetId,!0))}async function oS(e,t,n){const r=function(e){const t=ow(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=cS.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=hS.bind(null,t),t}(e);try{const e=await function(e,t){const n=ow(e),r=bw.now(),i=t.reduce(((e,t)=>e.add(t.key)),R_());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Qn.Pn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=a_(e,s.get(e.key));null!=t&&o.push(new h_(e.key,t,nb(t.value.mapValue),n_.exists(!0)))}return n.In.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Lo[e.currentUser.toKey()];r||(r=new __(vw)),r=r.insert(t,n),e.Lo[e.currentUser.toKey()]=r}(r,e.batchId,n),await wS(r,e.changes),await xk(r.remoteStore)}catch(i){const e=Vk(i,"Failed to persist write");n.reject(e)}}async function aS(e,t){const n=ow(e);try{const e=await UE(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Fo.get(t);r&&(sw(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Co=!0:e.modifiedDocuments.size>0?sw(r.Co):e.removedDocuments.size>0&&(sw(r.Co),r.Co=!1))})),await wS(n,e,t)}catch(r){await NE(r)}}function lS(e,t,n){const r=ow(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.xo.forEach(((n,r)=>{const i=r.view.eo(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ow(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.eo(t)&&(r=!0)})),r&&Xk(n)}(r.eventManager,t),e.length&&r.No.Tr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function uS(e,t,n){const r=ow(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Fo.get(t),s=i&&i.key;if(s){let e=new __(Vw.comparator);e=e.insert(s,rb.newNoDocument(s,_w.min()));const n=R_().add(s),i=new D_(_w.min(),new Map,new S_(vw),e,n);await aS(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(t),vS(r)}else await zE(r.localStore,t,!1).then((()=>pS(r,t,n))).catch(NE)}async function cS(e,t){const n=ow(e),r=t.batch.batchId;try{const e=await function(e,t){const n=ow(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=wE.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);sw(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.In.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(n.localStore,t);dS(n,r,null),fS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wS(n,e)}catch(i){await NE(i)}}async function hS(e,t,n){const r=ow(e);try{const e=await function(e,t){const n=ow(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.In.lookupMutationBatch(e,t).next((t=>(sw(null!==t),r=t.keys(),n.In.removeMutationBatch(e,t)))).next((()=>n.In.performConsistencyCheck(e))).next((()=>n.Qn.Pn(e,r)))}))}(r.localStore,t);dS(r,t,n),fS(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await wS(r,e)}catch(i){await NE(i)}}function fS(e,t){(e.Bo.get(t)||[]).forEach((e=>{e.resolve()})),e.Bo.delete(t)}function dS(e,t,n){const r=ow(e);let i=r.Lo[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Lo[r.currentUser.toKey()]=i}}function pS(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ko.get(t))e.xo.delete(r),n&&e.No.jo(r,n);e.ko.delete(t),e.isPrimaryClient&&e.Mo.cs(t).forEach((t=>{e.Mo.containsKey(t)||mS(e,t)}))}function mS(e,t){e.$o.delete(t.path.canonicalString());const n=e.Oo.get(t);null!==n&&(gk(e.remoteStore,n),e.Oo=e.Oo.remove(t),e.Fo.delete(n),vS(e))}function gS(e,t,n){for(const r of n)r instanceof Jk?(e.Mo.addReference(r.key,t),yS(e,r)):r instanceof Zk?(ew("SyncEngine","Document no longer in limbo: "+r.key),e.Mo.removeReference(r.key,t),e.Mo.containsKey(r.key)||mS(e,r.key)):iw()}function yS(e,t){const n=t.key,r=n.path.canonicalString();e.Oo.get(n)||e.$o.has(r)||(ew("SyncEngine","New document in limbo: "+n),e.$o.add(r),vS(e))}function vS(e){for(;e.$o.size>0&&e.Oo.size<e.maxConcurrentLimboResolutions;){const t=e.$o.values().next().value;e.$o.delete(t);const n=new Vw(Iw.fromString(t)),r=e.Uo.next();e.Fo.set(r,new nS(n)),e.Oo=e.Oo.insert(n,r),mk(e.remoteStore,new kE(Rb(Tb(n.path)),r,2,mw.T))}}async function wS(e,t,n){const r=ow(e),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach(((e,a)=>{o.push(r.Ko(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=RE.kn(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.No.Tr(i),await async function(e,t){const n=ow(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>wE.forEach(t,(t=>wE.forEach(t.Nn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>wE.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!bE(r))throw r;ew("LocalStore","Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function bS(e,t){const n=ow(e);if(!n.currentUser.isEqual(t)){ew("SyncEngine","User change. New user:",t.toKey());const e=await DE(n.localStore,t);n.currentUser=t,(r=n).Bo.forEach((e=>{e.forEach((e=>{e.reject(new lw(aw.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Bo.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await wS(n,e.Wn)}var r}function _S(e,t){const n=ow(e),r=n.Fo.get(t);if(r&&r.Co)return R_().add(r.key);{let e=R_();const r=n.ko.get(t);if(!r)return e;for(const t of r){const r=n.xo.get(t);e=e.unionWith(r.view.To)}return e}}class ES{constructor(){this.synchronizeTabs=!1}async initialize(e){this.N=sk(e.databaseInfo.databaseId),this.sharedClientState=this.Wo(e),this.persistence=this.Go(e),await this.persistence.start(),this.gcScheduler=this.zo(e),this.localStore=this.Ho(e)}zo(e){return null}Ho(e){return function(e,t,n,r){return new LE(e,t,n,r)}(this.persistence,new PE,e.initialUser,this.N)}Go(e){return new GE(XE.Ns,this.N)}Wo(e){return new JE}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kS{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>lS(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=bS.bind(null,this.syncEngine),await async function(e,t){const n=ow(e);t?(n.Kr.delete(2),await dk(n)):t||(n.Kr.add(2),await pk(n),n.Wr.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $k}createDatastore(e){const t=sk(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new rk(r));var r,i;return i=e.credentials,new ck(i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>lS(this.syncEngine,e,0),s=ek.bt()?new ek:new ZE,new fk(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new rS(e,t,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ow(e);ew("RemoteStore","RemoteStore shutting down."),t.Kr.add(5),await pk(t),t.Qr.shutdown(),t.Wr.set("Unknown")}(this.remoteStore)}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class SS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Yo(this.observer.next,e)}error(e){this.observer.error?this.Yo(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Xo(){this.muted=!0}Yo(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class TS{constructor(e,t,n){this.credentials=e,this.asyncQueue=t,this.databaseInfo=n,this.user=Xv.UNAUTHENTICATED,this.clientId=yw.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(t,(async e=>{ew("FirestoreClient","Received user=",e.uid),await this.credentialListener(e),this.user=e}))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.credentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new lw(aw.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new uw;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),e.resolve()}catch(t){const n=Vk(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function IS(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(ew("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),ew("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await DE(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new ES)),e.offlineComponents}(e);ew("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=ow(e);n.asyncQueue.verifyOperationInProgress(),ew("RemoteStore","RemoteStore received new credentials");const r=_k(n);n.Kr.add(3),await pk(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Kr.delete(3),await dk(n)}(t.remoteStore,e))),e.onlineComponents=t}async function CS(e){return e.onlineComponents||(ew("FirestoreClient","Using default OnlineComponentProvider"),await IS(e,new kS)),e.onlineComponents}async function xS(e){const t=await CS(e),n=t.eventManager;return n.onListen=iS.bind(null,t.syncEngine),n.onUnlisten=sS.bind(null,t.syncEngine),n}class NS{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class AS{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof AS&&e.projectId===this.projectId&&e.database===this.database}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const OS=new Map;
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/function RS(e,t,n){if(!n)throw new lw(aw.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function PS(e){if(!Vw.isDocumentKey(e))throw new lw(aw.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function LS(e){if(Vw.isDocumentKey(e))throw new lw(aw.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function DS(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){if(e.constructor){const t=/function\s+([^\s(]+)\s*\(/.exec(e.constructor.toString());if(t&&t.length>1)return t[1]}return null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":iw()}function MS(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new lw(aw.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=DS(e);throw new lw(aw.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}class US{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new lw(aw.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new lw(aw.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new lw(aw.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class FS{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new US({}),this._settingsFrozen=!1,e instanceof AS?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new lw(aw.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new AS(e.options.projectId)}(e))}get app(){if(!this._app)throw new lw(aw.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new lw(aw.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new US(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new hw;switch(e.type){case"gapi":const t=e.client;return sw(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new pw(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new lw(aw.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=OS.get(e);t&&(ew("ComponentProvider","Removing Datastore"),OS.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class zS{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new jS(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new zS(this.firestore,e,this._key)}}class VS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new VS(this.firestore,e,this._query)}}class jS extends VS{constructor(e,t,n){super(e,t,Tb(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new zS(this.firestore,null,new Vw(e))}withConverter(e){return new jS(this.firestore,e,this._path)}}function BS(e,t,...n){if(e=Kh(e),RS("collection","path",t),e instanceof FS){const r=Iw.fromString(t,...n);return LS(r),new jS(e,null,r)}{if(!(e instanceof zS||e instanceof jS))throw new lw(aw.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Iw.fromString(t,...n));return LS(r),new jS(e.firestore,null,r)}}function qS(e,t,...n){if(e=Kh(e),1===arguments.length&&(t=yw.I()),RS("doc","path",t),e instanceof FS){const r=Iw.fromString(t,...n);return PS(r),new zS(e,null,new Vw(r))}{if(!(e instanceof zS||e instanceof jS))throw new lw(aw.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Iw.fromString(t,...n));return PS(r),new zS(e.firestore,e instanceof jS?e.converter:null,new Vw(r))}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class HS{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new ok(this,"async_queue_retry"),this.Ea=()=>{const e=ik();e&&ew("AsyncQueue","Visibility state changed to "+e.visibilityState),this.rr.tr()};const e=ik();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Ta(),this.Ia(e)}enterRestrictedMode(e){if(!this.wa){this.wa=!0,this.ya=e||!1;const t=ik();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ea)}}enqueue(e){if(this.Ta(),this.wa)return new Promise((()=>{}));const t=new uw;return this.Ia((()=>this.wa&&this.ya?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.da.push(e),this.Aa())))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(e){if(!bE(e))throw e;ew("AsyncQueue","Operation failed with retryable error: "+e)}this.da.length>0&&this.rr.Xi((()=>this.Aa()))}}Ia(e){const t=this.fa.then((()=>(this.ga=!0,e().catch((e=>{throw this.ma=e,this.ga=!1,tw("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.ga=!1,e))))));return this.fa=t,t}enqueueAfterDelay(e,t,n){this.Ta(),this.pa.indexOf(e)>-1&&(t=0);const r=zk.createAndSchedule(this,e,t,n,(e=>this.Ra(e)));return this._a.push(r),r}Ta(){this.ma&&iw()}verifyOperationInProgress(){}async ba(){let e;do{e=this.fa,await e}while(e!==this.fa)}Pa(e){for(const t of this._a)if(t.timerId===e)return!0;return!1}va(e){return this.ba().then((()=>{this._a.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this._a)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ba()}))}Va(e){this.pa.push(e)}Ra(e){const t=this._a.indexOf(e);this._a.splice(t,1)}}class $S extends FS{constructor(e,t){super(e,t),this.type="firestore",this._queue=new HS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||GS(this),this._firestoreClient.terminate()}}function WS(e=vf()){return pf(e,"firestore").getImmediate()}function KS(e){return e._firestoreClient||GS(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function GS(e){var t;const n=e._freezeSettings(),r=(i=e._databaseId,s=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new NS(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;e._firestoreClient=new TS(e._credentials,e._queue,r)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class QS{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new lw(aw.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xw(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class XS{constructor(e){this._byteString=e}static fromBase64String(e){try{return new XS(Aw.fromBase64String(e))}catch(t){throw new lw(aw.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new XS(Aw.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class YS{constructor(e){this._methodName=e}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class JS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new lw(aw.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new lw(aw.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return vw(this._lat,e._lat)||vw(this._long,e._long)}}
/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const ZS=/^__.*__$/;class eT{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new h_(e,this.data,this.fieldMask,t,this.fieldTransforms):new c_(e,this.data,t,this.fieldTransforms)}}function tT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw iw()}}class nT{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.N=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Sa(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Da(){return this.settings.Da}Ca(e){return new nT(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.N,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.ka(e),r}$a(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Ca({path:n,xa:!1});return r.Sa(),r}Oa(e){return this.Ca({path:void 0,xa:!0})}Fa(e){return pT(e,this.settings.methodName,this.settings.Ma||!1,this.path,this.settings.La)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Sa(){if(this.path)for(let e=0;e<this.path.length;e++)this.ka(this.path.get(e))}ka(e){if(0===e.length)throw this.Fa("Document fields must not be empty");if(tT(this.Da)&&ZS.test(e))throw this.Fa('Document fields cannot begin and end with "__"')}}class rT{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.N=n||sk(e)}Ba(e,t,n,r=!1){return new nT({Da:e,methodName:t,La:n,path:xw.emptyPath(),xa:!1,Ma:r},this.databaseId,this.N,this.ignoreUndefinedProperties)}}function iT(e){const t=e._freezeSettings(),n=sk(e._databaseId);return new rT(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sT(e,t,n,r,i,s={}){const o=e.Ba(s.merge||s.mergeFields?2:0,t,n,i);cT("Data must be an object, but it was:",o,r);const a=lT(r,o);let l,u;if(s.merge)l=new Nw(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=hT(t,r,n);if(!o.contains(i))throw new lw(aw.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);mT(e,i)||e.push(i)}l=new Nw(e),u=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=o.fieldTransforms;return new eT(new tb(a),l,u)}class oT extends YS{_toFieldTransform(e){return new e_(e.path,new Wb)}isEqual(e){return e instanceof oT}}function aT(e,t){if(uT(e=Kh(e)))return cT("Unsupported field value:",t,e),lT(e,t);if(e instanceof YS)return function(e,t){if(!tT(t.Da))throw t.Fa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Fa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.xa&&4!==t.Da)throw t.Fa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=aT(i,t.Oa(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Kh(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return jb(t.N,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=bw.fromDate(e);return{timestampValue:K_(t.N,n)}}if(e instanceof bw){const n=new bw(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:K_(t.N,n)}}if(e instanceof JS)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof XS)return{bytesValue:G_(t.N,e._byteString)};if(e instanceof zS){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Y_(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Fa(`Unsupported field value: ${DS(e)}`)}(e,t)}function lT(e,t){const n={};return Sw(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):kw(e,((e,r)=>{const i=aT(r,t.Na(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function uT(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof bw||e instanceof JS||e instanceof XS||e instanceof zS||e instanceof YS)}function cT(e,t,n){if(!uT(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=DS(n);throw"an object"===r?t.Fa(e+" a custom object"):t.Fa(e+" "+r)}var r}function hT(e,t,n){if((t=Kh(t))instanceof QS)return t._internalPath;if("string"==typeof t)return dT(e,t);throw pT("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const fT=new RegExp("[~\\*/\\[\\]]");function dT(e,t,n){if(t.search(fT)>=0)throw pT(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new QS(...t.split("."))._internalPath}catch(r){throw pT(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pT(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new lw(aw.INVALID_ARGUMENT,a+e+l)}function mT(e,t){return e.some((e=>e.isEqual(t)))}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class gT{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new zS(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new yT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(vT("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class yT extends gT{data(){return super.data()}}function vT(e,t){return"string"==typeof t?dT(e,t):t instanceof QS?t._internalPath:t._delegate._internalPath}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/class wT{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class bT extends gT{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _T(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(vT("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class _T extends bT{data(e={}){return super.data(e)}}class ET{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new wT(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new _T(this._firestore,this._userDataWriter,n.key,n,new wT(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new lw(aw.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new _T(e._firestore,e._userDataWriter,n.doc.key,n.doc,new wT(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new _T(e._firestore,e._userDataWriter,t.doc.key,t.doc,new wT(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:kT(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function kT(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return iw()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(e,...t){for(const n of t)e=n._apply(e);return e}class TT extends class{}{constructor(e,t,n){super(),this.Ka=e,this.ja=t,this.Qa=n,this.type="where"}_apply(e){const t=iT(e.firestore),n=function(e,t,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new lw(aw.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){xT(o,s);const t=[];for(const n of o)t.push(CT(r,e,n));a={arrayValue:{values:t}}}else a=CT(r,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||xT(o,s),a=function(e,t,n,r=!1){return aT(n,e.Ba(r?4:3,t))}(n,"where",o,"in"===s||"not-in"===s);const l=ub.create(i,s,a);return function(e,t){if(t.v()){const n=Nb(e);if(null!==n&&!n.isEqual(t.field))throw new lw(aw.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=xb(e);null!==r&&function(e,t,n){if(!n.isEqual(t))throw new lw(aw.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/(0,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new lw(aw.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new lw(aw.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,0,t,e.firestore._databaseId,this.Ka,this.ja,this.Qa);return new VS(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Sb(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function IT(e,t,n){const r=t,i=vT("where",e);return new TT(i,r,n)}function CT(e,t,n){if("string"==typeof(n=Kh(n))){if(""===n)throw new lw(aw.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ab(t)&&-1!==n.indexOf("/"))throw new lw(aw.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Iw.fromString(n));if(!Vw.isDocumentKey(r))throw new lw(aw.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Gw(e,new Vw(r))}if(n instanceof zS)return Gw(e,n._key);throw new lw(aw.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${DS(n)}.`)}function xT(e,t){if(!Array.isArray(e)||0===e.length)throw new lw(aw.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new lw(aw.INVALID_ARGUMENT,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
function NT(e){e=MS(e,zS);const t=MS(e.firestore,$S);return function(e,t,n={}){const r=new uw;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new SS({next:s=>{t.enqueueAndForget((()=>Kk(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new lw(aw.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new lw(aw.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Yk(Tb(n.path),s,{includeMetadataChanges:!0,uo:!0});return Wk(e,o)}(await xS(e),e.asyncQueue,t,n,r))),r.promise}(KS(t),e._key).then((n=>function(e,t,n){const r=n.docs.get(t._key),i=new AT(e);return new bT(e,i,t._key,r,new wT(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class AT extends class{convertValue(e,t="none"){switch(jw(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pw(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lw(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw iw()}}convertObject(e,t){const n={};return kw(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new JS(Pw(e.latitude),Pw(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Mw(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Uw(e));default:return null}}convertTimestamp(e){const t=Rw(e);return new bw(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Iw.fromString(e);sw(vE(n));const r=new AS(n.get(1),n.get(3)),i=new Vw(n.popFirst(5));return r.isEqual(t)||tw(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/{constructor(e){super(),this.firestore=e}convertBytes(e){return new XS(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new zS(this.firestore,null,t)}}function OT(e){e=MS(e,VS);const t=MS(e.firestore,$S),n=KS(t),r=new AT(t);return function(e){if(Cb(e)&&0===e.explicitOrderBy.length)throw new lw(aw.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const r=new uw;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new SS({next:n=>{t.enqueueAndForget((()=>Kk(e,o))),n.fromCache&&"server"===r.source?i.reject(new lw(aw.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Yk(n,s,{includeMetadataChanges:!0,uo:!0});return Wk(e,o)}(await xS(e),e.asyncQueue,t,n,r))),r.promise}(n,e._query).then((n=>new ET(t,r,e,n)))}function RT(e,t,n){e=MS(e,zS);const r=MS(e.firestore,$S),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return LT(r,[sT(iT(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,n_.none())])}function PT(e){return LT(MS(e.firestore,$S),[new m_(e._key,n_.none())])}function LT(e,t){return function(e,t){const n=new uw;return e.asyncQueue.enqueueAndForget((async()=>oS(await function(e){return CS(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(KS(e),t)}function DT(){return new oT("serverTimestamp")}Yv="9.0.0",df(new Gh("firestore",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new $S(n,new fw(e.getProvider("auth-internal")));return t=Object.assign({useFetchStreams:!0},t),r._setSettings(t),r}),"PUBLIC")),wf("@firebase/firestore","3.0.2",undefined);
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */
var MT={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]};
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function UT(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function FT(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function zT(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){FT(e,t,n[t])}))}return e}function VT(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(r=(o=a.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(l){i=!0,s=l}finally{try{r||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var jT=function(){},BT={},qT={},HT={mark:jT,measure:jT};try{"undefined"!=typeof window&&(BT=window),"undefined"!=typeof document&&(qT=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&(HT=performance)}catch(mN){}var $T=(BT.navigator||{}).userAgent,WT=void 0===$T?"":$T,KT=BT,GT=qT,QT=HT;KT.document;var XT=!!GT.documentElement&&!!GT.head&&"function"==typeof GT.addEventListener&&"function"==typeof GT.createElement;~WT.indexOf("MSIE")||WT.indexOf("Trident/");!function(){try{}catch(mN){return!1}}();var YT="group",JT="primary",ZT="secondary",eI=KT.FontAwesomeConfig||{};if(GT&&"function"==typeof GT.querySelector){[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(e){var t=VT(e,2),n=t[0],r=t[1],i=function(e){return""===e||"false"!==e&&("true"===e||e)}(function(e){var t=GT.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}(n));null!=i&&(eI[r]=i)}))}var tI=zT({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},eI);tI.autoReplaceSvg||(tI.observeMutations=!1);var nI=zT({},tI);KT.FontAwesomeConfig=nI;var rI=KT||{};rI.___FONT_AWESOME___||(rI.___FONT_AWESOME___={}),rI.___FONT_AWESOME___.styles||(rI.___FONT_AWESOME___.styles={}),rI.___FONT_AWESOME___.hooks||(rI.___FONT_AWESOME___.hooks={}),rI.___FONT_AWESOME___.shims||(rI.___FONT_AWESOME___.shims=[]);var iI=rI.___FONT_AWESOME___,sI=[];XT&&((GT.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(GT.readyState)||GT.addEventListener("DOMContentLoaded",(function e(){GT.removeEventListener("DOMContentLoaded",e),1,sI.map((function(e){return e()}))}))),"undefined"!=typeof global&&void 0!==global.process&&global.process.emit,"undefined"==typeof setImmediate?setTimeout:setImmediate;var oI={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aI(){for(var e=12,t="";e-- >0;)t+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return t}function lI(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uI(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,": ").concat(e[n],";")}),"")}function cI(e){return e.size!==oI.size||e.x!==oI.x||e.y!==oI.y||e.rotate!==oI.rotate||e.flipX||e.flipY}function hI(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(32*t.x,", ").concat(32*t.y,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)");return{outer:i,inner:{transform:"".concat(s," ").concat(o," ").concat(a)},path:{transform:"translate(".concat(r/2*-1," -256)")}}}var fI={x:0,y:0,width:"100%",height:"100%"};function dI(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function pI(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,h=e.extra,f=e.watchable,d=void 0!==f&&f,p=r.found?r:n,m=p.width,g=p.height,y="fak"===i,v=y?"":"fa-w-".concat(Math.ceil(m/g*16)),w=[nI.replacementClass,s?"".concat(nI.familyPrefix,"-").concat(s):"",v].filter((function(e){return-1===h.classes.indexOf(e)})).filter((function(e){return""!==e||!!e})).concat(h.classes).join(" "),b={children:[],attributes:zT({},h.attributes,{"data-prefix":i,"data-icon":s,class:w,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)})},_=y&&!~h.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(b.attributes["data-fa-i2svg"]=""),l&&b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(c||aI())},children:[l]});var E=zT({},b,{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:zT({},_,h.styles)}),k=r.found&&n.found?function(e){var t,n=e.children,r=e.attributes,i=e.main,s=e.mask,o=e.maskId,a=e.transform,l=i.width,u=i.icon,c=s.width,h=s.icon,f=hI({transform:a,containerWidth:c,iconWidth:l}),d={tag:"rect",attributes:zT({},fI,{fill:"white"})},p=u.children?{children:u.children.map(dI)}:{},m={tag:"g",attributes:zT({},f.inner),children:[dI(zT({tag:u.tag,attributes:zT({},u.attributes,f.path)},p))]},g={tag:"g",attributes:zT({},f.outer),children:[m]},y="mask-".concat(o||aI()),v="clip-".concat(o||aI()),w={tag:"mask",attributes:zT({},fI,{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,g]},b={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:(t=h,"g"===t.tag?t.children:[t])},w]};return n.push(b,{tag:"rect",attributes:zT({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(y,")")},fI)}),{children:n,attributes:r}}(E):function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,s=uI(e.styles);if(s.length>0&&(n.style=s),cI(i)){var o=hI({transform:i,containerWidth:r.width,iconWidth:r.width});t.push({tag:"g",attributes:zT({},o.outer),children:[{tag:"g",attributes:zT({},o.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:zT({},r.icon.attributes,o.path)}]}]})}else t.push(r.icon);return{children:t,attributes:n}}(E),S=k.children,T=k.attributes;return E.children=S,E.attributes=T,a?function(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:zT({},i,{id:!0===s?"".concat(t,"-").concat(nI.familyPrefix,"-").concat(n):s}),children:r}]}]}(E):function(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(cI(o)&&n.found&&!r.found){var a={x:n.width/n.height/2,y:.5};i.style=uI(zT({},s,{"transform-origin":"".concat(a.x+o.x/16,"em ").concat(a.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}(E)}nI.measurePerformance&&QT&&QT.mark&&QT.measure;var mI=function(e,t,n,r){var i,s,o,a=Object.keys(e),l=a.length,u=void 0!==r?function(e,t){return function(n,r,i,s){return e.call(t,n,r,i,s)}}(t,r):t;for(void 0===n?(i=1,o=e[a[0]]):(i=0,o=n);i<l;i++)o=u(o,e[s=a[i]],s,e);return o};function gI(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.skipHooks,i=void 0!==r&&r,s=Object.keys(t).reduce((function(e,n){var r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e}),{});"function"!=typeof iI.hooks.addPack||i?iI.styles[e]=zT({},iI.styles[e]||{},s):iI.hooks.addPack(e,s),"fas"===e&&gI("fa",t)}var yI=iI.styles,vI=iI.shims,wI=function(){var e=function(e){return mI(yI,(function(t,n,r){return t[r]=mI(n,e,{}),t}),{})};e((function(e,t,n){return t[3]&&(e[t[3]]=n),e})),e((function(e,t,n){var r=t[2];return e[n]=n,r.forEach((function(t){e[t]=n})),e}));var t="far"in yI;mI(vI,(function(e,n){var r=n[0],i=n[1],s=n[2];return"far"!==i||t||(i="fas"),e[r]={prefix:i,iconName:s},e}),{})};function bI(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}function _I(e){var t=e.tag,n=e.attributes,r=void 0===n?{}:n,i=e.children,s=void 0===i?[]:i;return"string"==typeof e?lI(e):"<".concat(t," ").concat(function(e){return Object.keys(e||{}).reduce((function(t,n){return t+"".concat(n,'="').concat(lI(e[n]),'" ')}),"").trim()}(r),">").concat(s.map(_I).join(""),"</").concat(t,">")}wI(),iI.styles;function EI(e){this.name="MissingIcon",this.message=e||"Icon unavailable",this.stack=(new Error).stack}EI.prototype=Object.create(Error.prototype),EI.prototype.constructor=EI;var kI={fill:"currentColor"},SI={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};zT({},kI,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var TI=zT({},SI,{attributeName:"opacity"});function II(e){var t=e[0],n=e[1],r=VT(e.slice(4),1)[0];return{found:!0,width:t,height:n,icon:Array.isArray(r)?{tag:"g",attributes:{class:"".concat(nI.familyPrefix,"-").concat(YT)},children:[{tag:"path",attributes:{class:"".concat(nI.familyPrefix,"-").concat(ZT),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(nI.familyPrefix,"-").concat(JT),fill:"currentColor",d:r[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:r}}}}zT({},kI,{cx:"256",cy:"364",r:"28"}),zT({},SI,{attributeName:"r",values:"28;14;28;28;14;28;"}),zT({},TI,{values:"1;0;1;1;0;1;"}),zT({},kI,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),zT({},TI,{values:"1;0;0;0;0;1;"}),zT({},kI,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),zT({},TI,{values:"0;0;1;1;0;0;"}),iI.styles,iI.styles;function CI(){nI.autoAddCss&&!RI&&(!function(e){if(e&&XT){var t=GT.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=GT.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}GT.head.insertBefore(t,r)}}(function(){var e="fa",t="svg-inline--fa",n=nI.familyPrefix,r=nI.replacementClass,i='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}()),RI=!0)}function xI(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map((function(e){return _I(e)}))}}),Object.defineProperty(e,"node",{get:function(){if(XT){var t=GT.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function NI(e){var t=e.prefix,n=void 0===t?"fa":t,r=e.iconName;if(r)return bI(OI.definitions,n,r)||bI(iI.styles,n,r)}var AI,OI=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.definitions={}}var t,n,r;return t=e,(n=[{key:"add",value:function(){for(var e=this,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(t){e.definitions[t]=zT({},e.definitions[t]||{},i[t]),gI(t,i[t]),wI()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map((function(t){var r=n[t],i=r.prefix,s=r.iconName,o=r.icon;e[i]||(e[i]={}),e[i][s]=o})),e}}])&&UT(t.prototype,n),r&&UT(t,r),e}()),RI=!1,PI=function(e){return function(e){var t={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce((function(e,t){var n=t.toLowerCase().split("-"),r=n[0],i=n.slice(1).join("-");if(r&&"h"===i)return e.flipX=!0,e;if(r&&"v"===i)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case"grow":e.size=e.size+i;break;case"shrink":e.size=e.size-i;break;case"left":e.x=e.x-i;break;case"right":e.x=e.x+i;break;case"up":e.y=e.y-i;break;case"down":e.y=e.y+i;break;case"rotate":e.rotate=e.rotate+i}return e}),t):t}(e)},LI=(AI=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.transform,r=void 0===n?oI:n,i=t.symbol,s=void 0!==i&&i,o=t.mask,a=void 0===o?null:o,l=t.maskId,u=void 0===l?null:l,c=t.title,h=void 0===c?null:c,f=t.titleId,d=void 0===f?null:f,p=t.classes,m=void 0===p?[]:p,g=t.attributes,y=void 0===g?{}:g,v=t.styles,w=void 0===v?{}:v;if(e){var b=e.prefix,_=e.iconName,E=e.icon;return xI(zT({type:"icon"},e),(function(){return CI(),nI.autoA11y&&(h?y["aria-labelledby"]="".concat(nI.replacementClass,"-title-").concat(d||aI()):(y["aria-hidden"]="true",y.focusable="false")),pI({icons:{main:II(E),mask:a?II(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:_,transform:zT({},oI,r),symbol:s,title:h,maskId:u,titleId:d,extra:{attributes:y,styles:w,classes:m}})}))}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(e||{}).icon?e:NI(e||{}),r=t.mask;return r&&(r=(r||{}).icon?r:NI(r||{})),AI(n,zT({},t,{mask:r}))});function DI(e){return(DI="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function MI(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function UI(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function FI(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?UI(Object(n),!0).forEach((function(t){MI(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):UI(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function zI(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function VI(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function jI(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function BI(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var n,r=t.indexOf(":"),i=jI(t.slice(0,r)),s=t.slice(r+1).trim();return i.startsWith("webkit")?e[(n=i,n.charAt(0).toUpperCase()+n.slice(1))]=s:e[i]=s,e}),{})}var qI=!1;try{qI=!0}catch(mN){}function HI(e){return e&&"object"===DI(e)&&e.prefix&&e.iconName&&e.icon?e:null===e?null:e&&"object"===DI(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function $I(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?MI({},e,t):{}}function WI(e){var t=e.forwardedRef,n=zI(e,["forwardedRef"]),r=n.icon,i=n.mask,s=n.symbol,o=n.className,a=n.title,l=n.titleId,u=HI(r),c=$I("classes",[].concat(VI(function(e){var t,n=e.spin,r=e.pulse,i=e.fixedWidth,s=e.inverse,o=e.border,a=e.listItem,l=e.flip,u=e.size,c=e.rotation,h=e.pull,f=(MI(t={"fa-spin":n,"fa-pulse":r,"fa-fw":i,"fa-inverse":s,"fa-border":o,"fa-li":a,"fa-flip-horizontal":"horizontal"===l||"both"===l,"fa-flip-vertical":"vertical"===l||"both"===l},"fa-".concat(u),null!=u),MI(t,"fa-rotate-".concat(c),null!=c&&0!==c),MI(t,"fa-pull-".concat(h),null!=h),MI(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(f).map((function(e){return f[e]?e:null})).filter((function(e){return e}))}(n)),VI(o.split(" ")))),h=$I("transform","string"==typeof n.transform?PI(n.transform):n.transform),f=$I("mask",HI(i)),d=LI(u,FI({},c,{},h,{},f,{symbol:s,title:a,titleId:l}));if(!d)return function(){var e;!qI&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",u),null;var p=d.abstract,m={ref:t};return Object.keys(n).forEach((function(e){WI.defaultProps.hasOwnProperty(e)||(m[e]=n[e])})),QI(p[0],m)}WI.displayName="FontAwesomeIcon",WI.propTypes={border:ec.bool,className:ec.string,mask:ec.oneOfType([ec.object,ec.array,ec.string]),fixedWidth:ec.bool,inverse:ec.bool,flip:ec.oneOf(["horizontal","vertical","both"]),icon:ec.oneOfType([ec.object,ec.array,ec.string]),listItem:ec.bool,pull:ec.oneOf(["right","left"]),pulse:ec.bool,rotation:ec.oneOf([0,90,180,270]),size:ec.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ec.bool,symbol:ec.oneOfType([ec.bool,ec.string]),title:ec.string,transform:ec.oneOfType([ec.string,ec.object]),swapOpacity:ec.bool},WI.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var KI,GI,QI=function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof n)return n;var i=(n.children||[]).map((function(n){return e(t,n)})),s=Object.keys(n.attributes||{}).reduce((function(e,t){var r=n.attributes[t];switch(t){case"class":e.attrs.className=r,delete n.attributes.class;break;case"style":e.attrs.style=BI(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[jI(t)]=r}return e}),{attrs:{}}),o=r.style,a=void 0===o?{}:o,l=zI(r,["style"]);return s.attrs.style=FI({},s.attrs.style,{},a),t.apply(void 0,[n.tag,FI({},s.attrs,{},l)].concat(VI(i)))}.bind(null,U.createElement);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
wf("firebase","9.0.2","app"),(GI=KI||(KI={}))[GI.NO_ERROR=0]="NO_ERROR",GI[GI.NETWORK_ERROR=1]="NETWORK_ERROR",GI[GI.ABORT=2]="ABORT";class XI extends Fh{constructor(e,t){super(YI(e),`Firebase Storage: ${t} (${YI(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,XI.prototype)}_codeEquals(e){return YI(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function YI(e){return"storage/"+e}function JI(){return new XI("unknown","An unknown error occurred, please check the error payload for server response.")}function ZI(){return new XI("canceled","User canceled the upload/download.")}function eC(){return new XI("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function tC(e){return new XI("invalid-argument",e)}function nC(){return new XI("app-deleted","The Firebase app was deleted.")}function rC(e,t){return new XI("invalid-format","String does not match format '"+e+"': "+t)}function iC(e){throw new XI("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=KI.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=KI.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=KI.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,r){if(this.sent_)throw iC("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw iC("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw iC("cannot .getStatus() before sending");try{return this.xhr_.status}catch(mN){return-1}}getResponseText(){if(!this.sent_)throw iC("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oC{createConnection(){return new sC}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=aC.makeFromUrl(e,t)}catch(mN){return new aC(e,"")}if(""===n.path)return n;throw new XI("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const i=new RegExp("^gs://"+r+"(/(.*))?$","i");function s(e){e.path_=decodeURIComponent(e.path)}const o=t.replace(/[.]/g,"\\."),a=[{regex:i,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:s},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===t?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:s}];for(let l=0;l<a.length;l++){const t=a[l],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new aC(e,i),t.postModify(n);break}}if(null==n)throw function(e){return new XI("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class lC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(e){return"string"==typeof e||e instanceof String}function cC(e){return hC()&&e instanceof Blob}function hC(){return"undefined"!=typeof Blob}function fC(e,t,n,r){if(r<t)throw tC(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw tC(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function pC(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,t,n,r,i,s,o,a,l,u,c){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=l,this.pool_=c,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=this;function t(t,n){const r=e.resolve_,i=e.reject_,s=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(s,s.getResponseText());void 0!==t?r(t):r()}catch(mN){i(mN)}else if(null!==s){const t=JI();t.serverResponse=s.getResponseText(),e.errorCallback_?i(e.errorCallback_(s,t)):i(t)}else if(n.canceled){i(e.appDelete_?nC():ZI())}else{i(new XI("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?t(0,new gC(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,i=null,s=!1,o=0;function a(){return 2===o}let l=!1;function u(...e){l||(l=!0,t.apply(null,e))}function c(t){i=setTimeout((()=>{i=null,e(h,a())}),t)}function h(e,...t){if(l)return;if(e)return void u.call(null,e,...t);if(a()||s)return void u.call(null,e,...t);let n;r<64&&(r*=2),1===o?(o=2,n=0):n=1e3*(r+Math.random()),c(n)}let f=!1;function d(e){f||(f=!0,l||(null!==i?(e||(o=2),clearTimeout(i),c(0)):e||(o=1)))}return c(0),setTimeout((()=>{s=!0,d(!0)}),n),d}((function(t,n){if(n)return void t(!1,new gC(!1,null,!0));const r=e.pool_.createConnection();function i(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=r,null!==e.progressCallback_&&r.addUploadProgressListener(i),r.send(e.url_,e.method_,e.body_,e.headers_).then((()=>{null!==e.progressCallback_&&r.removeUploadProgressListener(i),e.pendingConnection_=null;const n=r.getErrorCode()===KI.NO_ERROR,s=r.getStatus();if(!n||e.isRetryStatusCode_(s)){const e=r.getErrorCode()===KI.ABORT;return void t(!1,new gC(!1,null,e))}const o=-1!==e.successCodes_.indexOf(s);t(!0,new gC(o,r))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class gC{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function yC(...e){const t="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(hC())return new Blob(e);throw new XI("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vC="raw",wC="base64",bC="base64url",_C="data_url";class EC{constructor(e,t){this.data=e,this.contentType=t||null}}function kC(e,t){switch(e){case vC:return new EC(SC(t));case wC:case bC:return new EC(TC(e,t));case _C:return new EC(function(e){const t=new IC(e);return t.base64?TC(wC,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(mN){throw rC(_C,"Malformed data URL.")}return SC(t)}(t.rest)}(t),new IC(t).contentType)}throw JI()}function SC(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<e.length-1&&56320==(64512&e.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&e.charCodeAt(++n),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320==(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function TC(e,t){switch(e){case wC:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw rC(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case bC:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw rC(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(mN){throw rC(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class IC{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw rC(_C,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(e,t){if(!(e.length>=t.length))return!1;return e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class CC{constructor(e,t){let n=0,r="";cC(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(cC(this.data_)){const s=this.data_,o=(r=e,i=t,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new CC(o)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new CC(n,!0)}var n,r,i;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...e){if(hC()){const t=e.map((e=>e instanceof CC?e.data_:e));return new CC(yC.apply(null,t))}{const t=e.map((e=>uC(e)?kC(vC,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let i=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]})),new CC(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(e){let t;try{t=JSON.parse(e)}catch(mN){return null}return"object"!=typeof(n=t)||Array.isArray(n)?null:t;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(e,t){return t}class OC{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||AC}}let RC=null;function PC(){if(RC)return RC;const e=[];e.push(new OC("bucket")),e.push(new OC("generation")),e.push(new OC("metageneration")),e.push(new OC("name","fullPath",!0));const t=new OC("name");t.xform=function(e,t){return function(e){return!uC(e)||e.length<2?e:NC(e)}(t)},e.push(t);const n=new OC("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new OC("timeCreated")),e.push(new OC("updated")),e.push(new OC("md5Hash",null,!0)),e.push(new OC("cacheControl",null,!0)),e.push(new OC("contentDisposition",null,!0)),e.push(new OC("contentEncoding",null,!0)),e.push(new OC("contentLanguage",null,!0)),e.push(new OC("contentType",null,!0)),e.push(new OC("metadata","customMetadata",!0)),RC=e,RC}function LC(e,t,n){const r={type:"file"},i=n.length;for(let s=0;s<i;s++){const e=n[s];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,r=e.fullPath,i=new aC(n,r);return t._makeStorageReference(i)}})}(r,e),r}function DC(e,t,n){const r=xC(t);if(null===r)return null;return LC(e,r,n)}function MC(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}class UC{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(e){if(!e)throw JI()}function zC(e,t){return function(n,r){const i=DC(e,r,t);return FC(null!==i),i}}function VC(e,t){return function(n,r){const i=DC(e,r,t);return FC(null!==i),function(e,t,n,r){const i=xC(t);if(null===i)return null;if(!uC(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map((t=>{const i=e.bucket,s=e.fullPath;return dC("/b/"+o(i)+"/o/"+o(s),n,r)+pC({alt:"media",token:t})}))[0]}(i,r,e.host,e._protocol)}}function jC(e){return function(t,n){let r;var i,s;return 401===t.getStatus()?r=t.getResponseText().includes("Firebase App Check token is invalid")?new XI("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new XI("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(s=e.bucket,r=new XI("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(i=e.path,r=new XI("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function BC(e){const t=jC(e);return function(n,r){let i=t(n,r);var s;return 404===n.getStatus()&&(s=e.path,i=new XI("object-not-found","Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function qC(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}class HC{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function $C(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(mN){FC(!1)}return FC(!!n&&-1!==(t||["active"]).indexOf(n)),n}function WC(e,t,n,r,i,s,o,a){const l=new HC(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw new XI("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,f=h+c,d={"X-Goog-Upload-Command":c===u?"upload, finalize":"upload","X-Goog-Upload-Offset":`${l.current}`},p=r.slice(h,f);if(null===p)throw eC();const m=t.maxUploadRetryTime,g=new UC(n,"POST",(function(e,n){const i=$C(e,["active","final"]),o=l.current+c,a=r.size();let u;return u="final"===i?zC(t,s)(e,n):null,new HC(o,a,"final"===i,u)}),m);return g.headers=d,g.body=p.uploadData(),g.progressCallback=a||null,g.errorHandler=jC(e),g}const KC="running",GC="paused",QC="success",XC="canceled",YC="error";function JC(e){switch(e){case"running":case"pausing":case"canceling":return KC;case"paused":return GC;case"success":return QC;case"canceled":return XC;case"error":default:return YC}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=PC(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o=qC(t,r,i),a={name:o.fullPath},l=dC(s,e.host,e._protocol),u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},c=MC(o,n),h=e.maxUploadRetryTime,f=new UC(l,"POST",(function(e){let t;$C(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(mN){FC(!1)}return FC(uC(t)),t}),h);return f.urlParams=a,f.headers=u,f.body=c,f.errorHandler=jC(t),f}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const i=e.maxUploadRetryTime,s=new UC(n,"POST",(function(e){const t=$C(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(mN){FC(!1)}n||FC(!1);const i=Number(n);return FC(!isNaN(i)),new HC(i,r.size(),"final"===t)}),i);return s.headers={"X-Goog-Upload-Command":"query"},s.errorHandler=jC(t),s}(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,t,n);this._request=i,i.getPromise().then((e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=262144*this._chunkMultiplier,t=new HC(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,i)=>{let s;try{s=WC(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(mN){return this._error=mN,void this._transition("error")}const o=this._ref.storage._makeRequest(s,r,i);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){262144*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=function(e,t,n){const r=dC(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new UC(r,"GET",zC(e,n),i);return s.errorHandler=BC(t),s}(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"},a=function(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}();o["Content-Type"]="multipart/related; boundary="+a;const l=qC(t,r,i),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+MC(l,n)+"\r\n--"+a+"\r\nContent-Type: "+l.contentType+"\r\n\r\n",c="\r\n--"+a+"--",h=CC.getBlob(u,r,c);if(null===h)throw eC();const f={name:l.fullPath},d=dC(s,e.host,e._protocol),p=e.maxUploadRetryTime,m=new UC(d,"POST",zC(e,n),p);return m.urlParams=f,m.headers=o,m.body=h.uploadData(),m.errorHandler=jC(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=ZI(),this._state=e,this._notifyObservers();break;case"error":case"success":this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=JC(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new ZC(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(JC(this._state)){case QC:ex(this._resolve.bind(null,this.snapshot))();break;case XC:case YC:ex(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(JC(this._state)){case KC:case GC:e.next&&ex(e.next.bind(e,this.snapshot))();break;case QC:e.complete&&ex(e.complete.bind(e))();break;case XC:case YC:e.error&&ex(e.error.bind(e,this._error))();break;default:e.error&&ex(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{constructor(e,t){this._service=e,this._location=t instanceof aC?t:aC.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new nx(e,t)}get root(){const e=new aC(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return NC(this._location.path)}get storage(){return this._service}get parent(){const e=function(e){if(0===e.length)return null;const t=e.lastIndexOf("/");return-1===t?"":e.slice(0,t)}(this._location.path);if(null===e)return null;const t=new aC(this._location.bucket,e);return new nx(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw function(e){return new XI("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(e)}}async function rx(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=dC(t.fullServerUrl(),e.host,e._protocol),i=e.maxOperationRetryTime,s=new UC(r,"GET",VC(e,n),i);return s.errorHandler=BC(t),s}(e.storage,e._location,PC());return(await e.storage.makeRequestWithTokens(t)).getPromise().then((e=>{if(null===e)throw new XI("no-download-url","The given file does not have any download URLs.");return e}))}function ix(e,t){if(e instanceof ax){const n=e;if(null==n._bucket)throw new XI("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new nx(n,n._bucket);return null!=t?ix(r,t):r}return void 0!==t?function(e,t){const n=function(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}(e._location.path,t),r=new aC(e._location.bucket,n);return new nx(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t):e}function sx(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof ax)return new nx(e,t);throw tC("To use ref(service, url), the first argument must be a Storage instance.")}return ix(e,t)}function ox(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:aC.makeFromBucketSpec(n,e)}class ax{constructor(e,t,n,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?aC.makeFromBucketSpec(i,this._host):ox(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=aC.makeFromBucketSpec(this._url,e):this._bucket=ox(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fC("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fC("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new nx(this,e)}_makeRequest(e,t,n){if(this._deleted)return new lC(nC());{const r=function(e,t,n,r,i,s){const o=pC(e.urlParams),a=e.url+o,l=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(l,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(l,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(l,s),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(l,r),new mC(a,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}function lx(e,t,n){return function(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new tx(e,new CC(t),n)}(e=Kh(e),t,n)}function ux(e){return rx(e=Kh(e))}function cx(e,t){return sx(e=Kh(e),t)}function hx(e=vf(),t){return pf(e=Kh(e),"storage").getImmediate({identifier:t})}function fx(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ax(n,r,i,new oC,t,"9.0.0")}df(new Gh("storage",fx,"PUBLIC").setMultipleInstances(!0)),wf("@firebase/storage","0.8.2");var dx={exports:{}},px={},mx=e.exports,gx=60103;if(px.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var yx=Symbol.for;gx=yx("react.element"),px.Fragment=yx("react.fragment")}var vx=mx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wx=Object.prototype.hasOwnProperty,bx={key:!0,ref:!0,__self:!0,__source:!0};function _x(e,t,n){var r,i={},s=null,o=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(o=t.ref),t)wx.call(t,r)&&!bx.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:gx,type:e,key:s,ref:o,props:i,_owner:vx.current}}px.jsx=_x,px.jsxs=_x,dx.exports=px;var Ex,kx={prefix:"fas",iconName:"arrow-left",icon:[448,512,[],"f060","M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"]},Sx={prefix:"fas",iconName:"chevron-down",icon:[448,512,[],"f078","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"]},Tx={prefix:"fas",iconName:"chevron-up",icon:[448,512,[],"f077","M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"]},Ix={prefix:"fas",iconName:"download",icon:[512,512,[],"f019","M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"]},Cx={prefix:"fas",iconName:"file-alt",icon:[384,512,[],"f15c","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"]},xx={prefix:"fas",iconName:"file-upload",icon:[384,512,[],"f574","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm65.18 216.01H224v80c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-80H94.82c-14.28 0-21.41-17.29-11.27-27.36l96.42-95.7c6.65-6.61 17.39-6.61 24.04 0l96.42 95.7c10.15 10.07 3.03 27.36-11.25 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"]},Nx={prefix:"fas",iconName:"share",icon:[512,512,[],"f064","M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"]},Ax={prefix:"fas",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"]},Ox={prefix:"fas",iconName:"trash-alt",icon:[448,512,[],"f2ed","M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"]},Rx={prefix:"fas",iconName:"upload",icon:[512,512,[],"f093","M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"]},Px=new Uint8Array(16);function Lx(){if(!Ex&&!(Ex="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ex(Px)}var Dx=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Mx(e){return"string"==typeof e&&Dx.test(e)}for(var Ux=[],Fx=0;Fx<256;++Fx)Ux.push((Fx+256).toString(16).substr(1));function zx(e,t,n){var r=(e=e||{}).random||(e.rng||Lx)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=r[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(Ux[e[t+0]]+Ux[e[t+1]]+Ux[e[t+2]]+Ux[e[t+3]]+"-"+Ux[e[t+4]]+Ux[e[t+5]]+"-"+Ux[e[t+6]]+Ux[e[t+7]]+"-"+Ux[e[t+8]]+Ux[e[t+9]]+"-"+Ux[e[t+10]]+Ux[e[t+11]]+Ux[e[t+12]]+Ux[e[t+13]]+Ux[e[t+14]]+Ux[e[t+15]]).toLowerCase();if(!Mx(n))throw TypeError("Stringified UUID is invalid");return n}(r)}var Vx=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function jx(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=Vx.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var Bx=[".DS_Store","Thumbs.db"];function qx(e){return(null!==e.target&&e.target.files?Wx(e.target.files):[]).map((function(e){return jx(e)}))}function Hx(e,t){return Ih(this,void 0,void 0,(function(){var n;return Ch(this,(function(r){switch(r.label){case 0:return e.items?(n=Wx(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(Kx))]):[3,2];case 1:return[2,$x(Gx(r.sent()))];case 2:return[2,$x(Wx(e.files).map((function(e){return jx(e)})))]}}))}))}function $x(e){return e.filter((function(e){return-1===Bx.indexOf(e.name)}))}function Wx(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function Kx(e){if("function"!=typeof e.webkitGetAsEntry)return Qx(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?Yx(t):Qx(e)}function Gx(e){return e.reduce((function(e,t){return function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Nh(arguments[t]));return e}(e,Array.isArray(t)?Gx(t):[t])}),[])}function Qx(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=jx(t);return Promise.resolve(n)}function Xx(e){return Ih(this,void 0,void 0,(function(){return Ch(this,(function(t){return[2,e.isDirectory?Yx(e):Jx(e)]}))}))}function Yx(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function i(){var s=this;t.readEntries((function(t){return Ih(s,void 0,void 0,(function(){var s,o,a;return Ch(this,(function(l){switch(l.label){case 0:if(t.length)return[3,5];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return s=l.sent(),e(s),[3,4];case 3:return o=l.sent(),n(o),[3,4];case 4:return[3,6];case 5:a=Promise.all(t.map(Xx)),r.push(a),i(),l.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function Jx(e){return Ih(this,void 0,void 0,(function(){return Ch(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=jx(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}function Zx(e,t,n,r,i,s,o){try{var a=e[s](o),l=a.value}catch(u){return void n(u)}a.done?t(l):Promise.resolve(l).then(r,i)}function eN(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){Zx(s,r,i,o,a,"next",e)}function a(e){Zx(s,r,i,o,a,"throw",e)}o(void 0)}))}}function tN(){return(tN=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function nN(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function rN(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function iN(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return rN(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?rN(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var sN,oN=(function(e){var t=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(O){l=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,s=Object.create(i.prototype),o=new x(r||[]);return s._invoke=function(e,t,n){var r=h;return function(i,s){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return A()}for(n.method=i,n.arg=s;;){var o=n.delegate;if(o){var a=T(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var l=c(e,t,n);if("normal"===l.type){if(r=n.done?p:f,l.arg===m)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=p,n.method="throw",n.arg=l.arg)}}}(e,n,o),s}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(O){return{type:"throw",arg:O}}}e.wrap=u;var h="suspendedStart",f="suspendedYield",d="executing",p="completed",m={};function g(){}function y(){}function v(){}var w={};w[s]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(N([])));_&&_!==n&&r.call(_,s)&&(w=_);var E=v.prototype=g.prototype=Object.create(w);function k(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,s,o,a){var l=c(e[i],e,s);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,a)}),(function(e){n("throw",e,o,a)})):t.resolve(h).then((function(e){u.value=e,o(u)}),(function(e){return n("throw",e,o,a)}))}a(l.arg)}var i;this._invoke=function(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=c(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function N(e){if(e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return y.prototype=E.constructor=v,v.constructor=y,y.displayName=l(v,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,a,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},k(S.prototype),S.prototype[o]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var o=new S(u(t,n,r,i),s);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},k(E),l(E,a,"Generator"),E[s]=function(){return this},E.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(l&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=e,o.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=t}catch(n){Function("r","regeneratorRuntime = r")(t)}}(sN={exports:{}},sN.exports),sN.exports),aN=function(){function e(){}var t=e.prototype;return t.validateBeforeParsing=function(e,t){for(var n,r=e.minFileSize,i=e.maxFileSize,s=iN(t);!(n=s()).done;){var o=n.value;if(r||i)return lN({minFileSize:r,maxFileSize:i,fileSize:o.size})}return Promise.resolve()},t.validateAfterParsing=function(){var e=eN(oN.mark((function e(t,n){return oN.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve());case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),e}(),lN=function(e){var t=e.fileSize,n=e.maxFileSize,r=e.minFileSize;return new Promise((function(e,i){r&&(t<1e6*r&&i({fileSizeTooSmall:!0}));n&&(t>1e6*n&&i({fileSizeToolarge:!0}));e()}))},uN=function(){function e(){}var t=e.prototype;return t.validateBeforeParsing=function(e,t){var n=e.limitFilesConfig;if(n){if(n.max&&t.length>n.max)return Promise.reject({maxLimitExceeded:!0});if(n.min&&t.length<n.min)return Promise.reject({minLimitNotReached:!0})}return Promise.resolve()},t.validateAfterParsing=function(){return Promise.resolve()},e}();var cN=function(){function e(){}var t=e.prototype;return t.validateBeforeParsing=function(){return Promise.resolve()},t.validateAfterParsing=function(e,t,n){var r=e.readAs,i=e.imageSizeRestrictions;return"DataURL"===r&&i&&hN(t.type)?fN(n.result,i):Promise.resolve()},e}(),hN=function(e){return e.startsWith("image")},fN=function(e,t){return new Promise((function(n,r){var i=new Image;i.onload=function(){var e=t.maxHeight,i=t.maxWidth,s=t.minHeight,o=t.minWidth,a=this.width,l=this.height,u={};e&&e<l&&(u=tN({},u,{imageHeightTooBig:!0})),s&&s>l&&(u=tN({},u,{imageHeightTooSmall:!0})),i&&i<a&&(u=tN({},u,{imageWidthTooBig:!0})),o&&o>a&&(u=tN({},u,{imageWidthTooSmall:!0})),Object.keys(u).length?r(u):n()},i.onerror=function(){r({imageNotLoaded:!0})},i.src=e}))},dN=[new aN,new uN,new cN];function pN(t){var n=t.accept,r=void 0===n?"*":n,i=t.multiple,s=void 0===i||i,o=t.readAs,a=void 0===o?"Text":o,l=t.minFileSize,u=t.maxFileSize,c=t.imageSizeRestrictions,h=t.limitFilesConfig,f=t.readFilesContent,d=void 0===f||f,p=t.validators,m=void 0===p?[]:p,g=e.exports.useState([]),y=g[0],v=g[1],w=e.exports.useState([]),b=w[0],_=w[1],E=e.exports.useState([]),k=E[0],S=E[1],T=e.exports.useState(!1),I=T[0],C=T[1],x=e.exports.useState([]),N=x[0],A=x[1],O=e.exports.useRef([]),R=function(){A([]),v([]),_([]),S([])};return e.exports.useEffect((function(){if(0!==y.length){C(!0);var e=y.map((function(e){return new Promise(function(){var t=eN(oN.mark((function t(n,i){var o,f;return oN.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o=new FileReader,o["readAs"+a].call(o,e),f=function(t){var n=t.name,r=void 0===n?e.name:n,s=nN(t,["name"]);i(tN({name:r,fileSizeToolarge:!1,fileSizeTooSmall:!1},s))},o.onload=eN(oN.mark((function t(){var i;return oN.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=dN.concat(m).map((function(t){return t.validateAfterParsing({accept:r,multiple:s,readAs:a,minFileSize:l,maxFileSize:u,imageSizeRestrictions:c,limitFilesConfig:h,readFilesContent:d},e,o).catch((function(e){return Promise.reject(f(e))}))})),Promise.all(i).then((function(){return n({content:o.result,name:e.name,lastModified:e.lastModified})}));case 2:case"end":return t.stop()}}),t)}))),o.onerror=function(){f({readerError:o.error})};case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}));Promise.all(e).then((function(e){_(e),A(O.current),S([])})).catch((function(e){S((function(t){return[e].concat(t)}))})).finally((function(){return C(!1)}))}else _([])}),[y]),[function(){!function(e,t,n){var r=document.createElement("input");r.type="file",r.accept=e,r.multiple=t,r.addEventListener("change",n),r.addEventListener("blur",n),r.dispatchEvent(new MouseEvent("click"))}(r instanceof Array?r.join(","):r,s,(function(e){R();var t=e.target;O.current=t.files?Array.from(t.files):[];var n=dN.concat(m).map((function(e){return e.validateBeforeParsing({accept:r,multiple:s,readAs:a,minFileSize:l,maxFileSize:u,imageSizeRestrictions:c,limitFilesConfig:h,readFilesContent:d},O.current).catch((function(e){return Promise.reject(S((function(t){return[tN({},e,t)]})))}))}));Promise.all(n).then((function(){d?function(e){return Ih(this,void 0,void 0,(function(){return Ch(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?Hx(e.dataTransfer,e.type):qx(e))];var n}))}))}(e).then((function(e){v(e)})):A(O.current)}))}))},{filesContent:b,errors:k,loading:I,plainFiles:N,clear:R}]}export{BS as A,Ax as B,lx as C,cx as D,ux as E,WI as F,xd as G,Ix as H,Nx as I,mh as J,ch as K,_h as L,IT as M,Gu as N,ST as O,U as R,hh as S,hx as a,qS as b,MT as c,Ox as d,DT as e,RT as f,Up as g,dh as h,yf as i,dx as j,WS as k,e as l,Dd as m,Tx as n,Sx as o,ph as p,kx as q,NT as r,lp as s,pN as t,OT as u,zx as v,PT as w,Rx as x,Cx as y,xx as z};
