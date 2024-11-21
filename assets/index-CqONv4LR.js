function Uy(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wl(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Hy(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var H1={exports:{}},jl={},K1={exports:{}},J={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua=Symbol.for("react.element"),Ky=Symbol.for("react.portal"),Gy=Symbol.for("react.fragment"),Wy=Symbol.for("react.strict_mode"),qy=Symbol.for("react.profiler"),Jy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),Xy=Symbol.for("react.forward_ref"),Qy=Symbol.for("react.suspense"),Zy=Symbol.for("react.memo"),eb=Symbol.for("react.lazy"),gp=Symbol.iterator;function tb(e){return e===null||typeof e!="object"?null:(e=gp&&e[gp]||e["@@iterator"],typeof e=="function"?e:null)}var G1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W1=Object.assign,q1={};function wi(e,t,n){this.props=e,this.context=t,this.refs=q1,this.updater=n||G1}wi.prototype.isReactComponent={};wi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function J1(){}J1.prototype=wi.prototype;function Rh(e,t,n){this.props=e,this.context=t,this.refs=q1,this.updater=n||G1}var Oh=Rh.prototype=new J1;Oh.constructor=Rh;W1(Oh,wi.prototype);Oh.isPureReactComponent=!0;var xp=Array.isArray,Y1=Object.prototype.hasOwnProperty,Dh={current:null},X1={key:!0,ref:!0,__self:!0,__source:!0};function Q1(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Y1.call(t,r)&&!X1.hasOwnProperty(r)&&(i[r]=t[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:Ua,type:e,key:s,ref:o,props:i,_owner:Dh.current}}function nb(e,t){return{$$typeof:Ua,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bh(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ua}function rb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vp=/\/+/g;function hc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?rb(""+e.key):t.toString(36)}function xo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ua:case Ky:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+hc(o,0):r,xp(i)?(n="",e!=null&&(n=e.replace(vp,"$&/")+"/"),xo(i,t,n,"",function(u){return u})):i!=null&&(Bh(i)&&(i=nb(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(vp,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",xp(e))for(var c=0;c<e.length;c++){s=e[c];var l=r+hc(s,c);o+=xo(s,t,n,l,i)}else if(l=tb(e),typeof l=="function")for(e=l.call(e),c=0;!(s=e.next()).done;)s=s.value,l=r+hc(s,c++),o+=xo(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function is(e,t,n){if(e==null)return e;var r=[],i=0;return xo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ib(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ne={current:null},vo={transition:null},ab={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:vo,ReactCurrentOwner:Dh};function Z1(){throw Error("act(...) is not supported in production builds of React.")}J.Children={map:is,forEach:function(e,t,n){is(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return is(e,function(){t++}),t},toArray:function(e){return is(e,function(t){return t})||[]},only:function(e){if(!Bh(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};J.Component=wi;J.Fragment=Gy;J.Profiler=qy;J.PureComponent=Rh;J.StrictMode=Wy;J.Suspense=Qy;J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ab;J.act=Z1;J.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=W1({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Dh.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)Y1.call(t,l)&&!X1.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&c!==void 0?c[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}return{$$typeof:Ua,type:e.type,key:i,ref:s,props:r,_owner:o}};J.createContext=function(e){return e={$$typeof:Yy,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Jy,_context:e},e.Consumer=e};J.createElement=Q1;J.createFactory=function(e){var t=Q1.bind(null,e);return t.type=e,t};J.createRef=function(){return{current:null}};J.forwardRef=function(e){return{$$typeof:Xy,render:e}};J.isValidElement=Bh;J.lazy=function(e){return{$$typeof:eb,_payload:{_status:-1,_result:e},_init:ib}};J.memo=function(e,t){return{$$typeof:Zy,type:e,compare:t===void 0?null:t}};J.startTransition=function(e){var t=vo.transition;vo.transition={};try{e()}finally{vo.transition=t}};J.unstable_act=Z1;J.useCallback=function(e,t){return Ne.current.useCallback(e,t)};J.useContext=function(e){return Ne.current.useContext(e)};J.useDebugValue=function(){};J.useDeferredValue=function(e){return Ne.current.useDeferredValue(e)};J.useEffect=function(e,t){return Ne.current.useEffect(e,t)};J.useId=function(){return Ne.current.useId()};J.useImperativeHandle=function(e,t,n){return Ne.current.useImperativeHandle(e,t,n)};J.useInsertionEffect=function(e,t){return Ne.current.useInsertionEffect(e,t)};J.useLayoutEffect=function(e,t){return Ne.current.useLayoutEffect(e,t)};J.useMemo=function(e,t){return Ne.current.useMemo(e,t)};J.useReducer=function(e,t,n){return Ne.current.useReducer(e,t,n)};J.useRef=function(e){return Ne.current.useRef(e)};J.useState=function(e){return Ne.current.useState(e)};J.useSyncExternalStore=function(e,t,n){return Ne.current.useSyncExternalStore(e,t,n)};J.useTransition=function(){return Ne.current.useTransition()};J.version="18.3.1";K1.exports=J;var k=K1.exports;const Ge=wl(k),rd=Uy({__proto__:null,default:Ge},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sb=k,ob=Symbol.for("react.element"),lb=Symbol.for("react.fragment"),cb=Object.prototype.hasOwnProperty,ub=sb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,db={key:!0,ref:!0,__self:!0,__source:!0};function e2(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)cb.call(t,r)&&!db.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:ob,type:e,key:s,ref:o,props:i,_owner:ub.current}}jl.Fragment=lb;jl.jsx=e2;jl.jsxs=e2;H1.exports=jl;var a=H1.exports,id={},t2={exports:{}},ot={},n2={exports:{}},r2={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,R){var U=M.length;M.push(R);e:for(;0<U;){var K=U-1>>>1,le=M[K];if(0<i(le,R))M[K]=R,M[U]=le,U=K;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var R=M[0],U=M.pop();if(U!==R){M[0]=U;e:for(var K=0,le=M.length,Qn=le>>>1;K<Qn;){var $t=2*(K+1)-1,$r=M[$t],Ze=$t+1,Zn=M[Ze];if(0>i($r,U))Ze<le&&0>i(Zn,$r)?(M[K]=Zn,M[Ze]=U,K=Ze):(M[K]=$r,M[$t]=U,K=$t);else if(Ze<le&&0>i(Zn,U))M[K]=Zn,M[Ze]=U,K=Ze;else break e}}return R}function i(M,R){var U=M.sortIndex-R.sortIndex;return U!==0?U:M.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var l=[],u=[],h=1,f=null,p=3,m=!1,x=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(M){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=M)r(u),R.sortIndex=R.expirationTime,t(l,R);else break;R=n(u)}}function S(M){if(b=!1,v(M),!x)if(n(l)!==null)x=!0,N(P);else{var R=n(u);R!==null&&oe(S,R.startTime-M)}}function P(M,R){x=!1,b&&(b=!1,y(C),C=-1),m=!0;var U=p;try{for(v(R),f=n(l);f!==null&&(!(f.expirationTime>R)||M&&!L());){var K=f.callback;if(typeof K=="function"){f.callback=null,p=f.priorityLevel;var le=K(f.expirationTime<=R);R=e.unstable_now(),typeof le=="function"?f.callback=le:f===n(l)&&r(l),v(R)}else r(l);f=n(l)}if(f!==null)var Qn=!0;else{var $t=n(u);$t!==null&&oe(S,$t.startTime-R),Qn=!1}return Qn}finally{f=null,p=U,m=!1}}var T=!1,w=null,C=-1,_=5,A=-1;function L(){return!(e.unstable_now()-A<_)}function B(){if(w!==null){var M=e.unstable_now();A=M;var R=!0;try{R=w(!0,M)}finally{R?z():(T=!1,w=null)}}else T=!1}var z;if(typeof g=="function")z=function(){g(B)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,q=F.port2;F.port1.onmessage=B,z=function(){q.postMessage(null)}}else z=function(){j(B,0)};function N(M){w=M,T||(T=!0,z())}function oe(M,R){C=j(function(){M(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){x||m||(x=!0,N(P))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var R=3;break;default:R=p}var U=p;p=R;try{return M()}finally{p=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,R){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var U=p;p=M;try{return R()}finally{p=U}},e.unstable_scheduleCallback=function(M,R,U){var K=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?K+U:K):U=K,M){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=U+le,M={id:h++,callback:R,priorityLevel:M,startTime:U,expirationTime:le,sortIndex:-1},U>K?(M.sortIndex=U,t(u,M),n(l)===null&&M===n(u)&&(b?(y(C),C=-1):b=!0,oe(S,U-K))):(M.sortIndex=le,t(l,M),x||m||(x=!0,N(P))),M},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(M){var R=p;return function(){var U=p;p=R;try{return M.apply(this,arguments)}finally{p=U}}}})(r2);n2.exports=r2;var hb=n2.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fb=k,at=hb;function $(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i2=new Set,da={};function Sr(e,t){li(e,t),li(e+"Capture",t)}function li(e,t){for(da[e]=t,e=0;e<t.length;e++)i2.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,pb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},bp={};function mb(e){return ad.call(bp,e)?!0:ad.call(yp,e)?!1:pb.test(e)?bp[e]=!0:(yp[e]=!0,!1)}function gb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xb(e,t,n,r){if(t===null||typeof t>"u"||gb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ae[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ae[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ae[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ae[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ae[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ae[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ae[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ae[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ae[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Nh=/[\-:]([a-z])/g;function Fh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Nh,Fh);Ae[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Nh,Fh);Ae[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Nh,Fh);Ae[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ae[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ae[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vh(e,t,n,r){var i=Ae.hasOwnProperty(t)?Ae[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(xb(t,n,i,r)&&(n=null),r||i===null?mb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var sn=fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,as=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Br=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),sd=Symbol.for("react.profiler"),a2=Symbol.for("react.provider"),s2=Symbol.for("react.context"),Hh=Symbol.for("react.forward_ref"),od=Symbol.for("react.suspense"),ld=Symbol.for("react.suspense_list"),Kh=Symbol.for("react.memo"),yn=Symbol.for("react.lazy"),o2=Symbol.for("react.offscreen"),kp=Symbol.iterator;function Ai(e){return e===null||typeof e!="object"?null:(e=kp&&e[kp]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,fc;function Hi(e){if(fc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);fc=t&&t[1]||""}return`
`+fc+e}var pc=!1;function mc(e,t){if(!e||pc)return"";pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,c=s.length-1;1<=o&&0<=c&&i[o]!==s[c];)c--;for(;1<=o&&0<=c;o--,c--)if(i[o]!==s[c]){if(o!==1||c!==1)do if(o--,c--,0>c||i[o]!==s[c]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=c);break}}}finally{pc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hi(e):""}function vb(e){switch(e.tag){case 5:return Hi(e.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return e=mc(e.type,!1),e;case 11:return e=mc(e.type.render,!1),e;case 1:return e=mc(e.type,!0),e;default:return""}}function cd(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Br:return"Fragment";case Dr:return"Portal";case sd:return"Profiler";case Uh:return"StrictMode";case od:return"Suspense";case ld:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case s2:return(e.displayName||"Context")+".Consumer";case a2:return(e._context.displayName||"Context")+".Provider";case Hh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kh:return t=e.displayName||null,t!==null?t:cd(e.type)||"Memo";case yn:t=e._payload,e=e._init;try{return cd(e(t))}catch{}}return null}function yb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cd(t);case 8:return t===Uh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function l2(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function bb(e){var t=l2(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ss(e){e._valueTracker||(e._valueTracker=bb(e))}function c2(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=l2(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Io(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ud(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function u2(e,t){t=t.checked,t!=null&&Vh(e,"checked",t,!1)}function dd(e,t){u2(e,t);var n=Nn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hd(e,t.type,n):t.hasOwnProperty("defaultValue")&&hd(e,t.type,Nn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function jp(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hd(e,t,n){(t!=="number"||Io(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ki=Array.isArray;function ei(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function fd(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error($(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sp(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error($(92));if(Ki(n)){if(1<n.length)throw Error($(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nn(n)}}function d2(e,t){var n=Nn(t.value),r=Nn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Pp(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function h2(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pd(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?h2(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var os,f2=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(os=os||document.createElement("div"),os.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=os.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kb=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){kb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function p2(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function m2(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=p2(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var wb=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function md(e,t){if(t){if(wb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error($(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error($(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error($(61))}if(t.style!=null&&typeof t.style!="object")throw Error($(62))}}function gd(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function Gh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vd=null,ti=null,ni=null;function Cp(e){if(e=Ga(e)){if(typeof vd!="function")throw Error($(280));var t=e.stateNode;t&&(t=Tl(t),vd(e.stateNode,e.type,t))}}function g2(e){ti?ni?ni.push(e):ni=[e]:ti=e}function x2(){if(ti){var e=ti,t=ni;if(ni=ti=null,Cp(e),t)for(e=0;e<t.length;e++)Cp(t[e])}}function v2(e,t){return e(t)}function y2(){}var gc=!1;function b2(e,t,n){if(gc)return e(t,n);gc=!0;try{return v2(e,t,n)}finally{gc=!1,(ti!==null||ni!==null)&&(y2(),x2())}}function fa(e,t){var n=e.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error($(231,t,typeof n));return n}var yd=!1;if(en)try{var $i={};Object.defineProperty($i,"passive",{get:function(){yd=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{yd=!1}function jb(e,t,n,r,i,s,o,c,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Xi=!1,Ro=null,Oo=!1,bd=null,Sb={onError:function(e){Xi=!0,Ro=e}};function Pb(e,t,n,r,i,s,o,c,l){Xi=!1,Ro=null,jb.apply(Sb,arguments)}function Cb(e,t,n,r,i,s,o,c,l){if(Pb.apply(this,arguments),Xi){if(Xi){var u=Ro;Xi=!1,Ro=null}else throw Error($(198));Oo||(Oo=!0,bd=u)}}function Pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function k2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _p(e){if(Pr(e)!==e)throw Error($(188))}function _b(e){var t=e.alternate;if(!t){if(t=Pr(e),t===null)throw Error($(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return _p(i),e;if(s===r)return _p(i),t;s=s.sibling}throw Error($(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=s;break}if(c===r){o=!0,r=i,n=s;break}c=c.sibling}if(!o){for(c=s.child;c;){if(c===n){o=!0,n=s,r=i;break}if(c===r){o=!0,r=s,n=i;break}c=c.sibling}if(!o)throw Error($(189))}}if(n.alternate!==r)throw Error($(190))}if(n.tag!==3)throw Error($(188));return n.stateNode.current===n?e:t}function w2(e){return e=_b(e),e!==null?j2(e):null}function j2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=j2(e);if(t!==null)return t;e=e.sibling}return null}var S2=at.unstable_scheduleCallback,Tp=at.unstable_cancelCallback,Tb=at.unstable_shouldYield,Eb=at.unstable_requestPaint,ge=at.unstable_now,Ab=at.unstable_getCurrentPriorityLevel,Wh=at.unstable_ImmediatePriority,P2=at.unstable_UserBlockingPriority,Do=at.unstable_NormalPriority,$b=at.unstable_LowPriority,C2=at.unstable_IdlePriority,Sl=null,Ft=null;function zb(e){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Ib,Lb=Math.log,Mb=Math.LN2;function Ib(e){return e>>>=0,e===0?32:31-(Lb(e)/Mb|0)|0}var ls=64,cs=4194304;function Gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Bo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~i;c!==0?r=Gi(c):(s&=o,s!==0&&(r=Gi(s)))}else o=n&~i,o!==0?r=Gi(o):s!==0&&(r=Gi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),i=1<<n,r|=e[n],t&=~i;return r}function Rb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ob(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Ct(s),c=1<<o,l=i[o];l===-1?(!(c&n)||c&r)&&(i[o]=Rb(c,t)):l<=t&&(e.expiredLanes|=c),s&=~c}}function kd(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _2(){var e=ls;return ls<<=1,!(ls&4194240)&&(ls=64),e}function xc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ha(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function Db(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function qh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function T2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var E2,Jh,A2,$2,z2,wd=!1,us=[],En=null,An=null,$n=null,pa=new Map,ma=new Map,jn=[],Bb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ep(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":$n=null;break;case"pointerover":case"pointerout":pa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(t.pointerId)}}function zi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Ga(t),t!==null&&Jh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nb(e,t,n,r,i){switch(t){case"focusin":return En=zi(En,e,t,n,r,i),!0;case"dragenter":return An=zi(An,e,t,n,r,i),!0;case"mouseover":return $n=zi($n,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return pa.set(s,zi(pa.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ma.set(s,zi(ma.get(s)||null,e,t,n,r,i)),!0}return!1}function L2(e){var t=hr(e.target);if(t!==null){var n=Pr(t);if(n!==null){if(t=n.tag,t===13){if(t=k2(n),t!==null){e.blockedOn=t,z2(e.priority,function(){A2(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=jd(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xd=r,n.target.dispatchEvent(r),xd=null}else return t=Ga(n),t!==null&&Jh(t),e.blockedOn=n,!1;t.shift()}return!0}function Ap(e,t,n){yo(e)&&n.delete(t)}function Fb(){wd=!1,En!==null&&yo(En)&&(En=null),An!==null&&yo(An)&&(An=null),$n!==null&&yo($n)&&($n=null),pa.forEach(Ap),ma.forEach(Ap)}function Li(e,t){e.blockedOn===t&&(e.blockedOn=null,wd||(wd=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,Fb)))}function ga(e){function t(i){return Li(i,e)}if(0<us.length){Li(us[0],e);for(var n=1;n<us.length;n++){var r=us[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&Li(En,e),An!==null&&Li(An,e),$n!==null&&Li($n,e),pa.forEach(t),ma.forEach(t),n=0;n<jn.length;n++)r=jn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)L2(n),n.blockedOn===null&&jn.shift()}var ri=sn.ReactCurrentBatchConfig,No=!0;function Vb(e,t,n,r){var i=ee,s=ri.transition;ri.transition=null;try{ee=1,Yh(e,t,n,r)}finally{ee=i,ri.transition=s}}function Ub(e,t,n,r){var i=ee,s=ri.transition;ri.transition=null;try{ee=4,Yh(e,t,n,r)}finally{ee=i,ri.transition=s}}function Yh(e,t,n,r){if(No){var i=jd(e,t,n,r);if(i===null)_c(e,t,r,Fo,n),Ep(e,r);else if(Nb(i,e,t,n,r))r.stopPropagation();else if(Ep(e,r),t&4&&-1<Bb.indexOf(e)){for(;i!==null;){var s=Ga(i);if(s!==null&&E2(s),s=jd(e,t,n,r),s===null&&_c(e,t,r,Fo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _c(e,t,r,null,n)}}var Fo=null;function jd(e,t,n,r){if(Fo=null,e=Gh(r),e=hr(e),e!==null)if(t=Pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=k2(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fo=e,null}function M2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ab()){case Wh:return 1;case P2:return 4;case Do:case $b:return 16;case C2:return 536870912;default:return 16}default:return 16}}var Cn=null,Xh=null,bo=null;function I2(){if(bo)return bo;var e,t=Xh,n=t.length,r,i="value"in Cn?Cn.value:Cn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return bo=i.slice(e,1<r?1-r:void 0)}function ko(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ds(){return!0}function $p(){return!1}function lt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ds:$p,this.isPropagationStopped=$p,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ds)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ds)},persist:function(){},isPersistent:ds}),t}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qh=lt(ji),Ka=fe({},ji,{view:0,detail:0}),Hb=lt(Ka),vc,yc,Mi,Pl=fe({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mi&&(Mi&&e.type==="mousemove"?(vc=e.screenX-Mi.screenX,yc=e.screenY-Mi.screenY):yc=vc=0,Mi=e),vc)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),zp=lt(Pl),Kb=fe({},Pl,{dataTransfer:0}),Gb=lt(Kb),Wb=fe({},Ka,{relatedTarget:0}),bc=lt(Wb),qb=fe({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),Jb=lt(qb),Yb=fe({},ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xb=lt(Yb),Qb=fe({},ji,{data:0}),Lp=lt(Qb),Zb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ek={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nk(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=tk[e])?!!t[e]:!1}function Zh(){return nk}var rk=fe({},Ka,{key:function(e){if(e.key){var t=Zb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ek[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zh,charCode:function(e){return e.type==="keypress"?ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ik=lt(rk),ak=fe({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mp=lt(ak),sk=fe({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zh}),ok=lt(sk),lk=fe({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),ck=lt(lk),uk=fe({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dk=lt(uk),hk=[9,13,27,32],ef=en&&"CompositionEvent"in window,Qi=null;en&&"documentMode"in document&&(Qi=document.documentMode);var fk=en&&"TextEvent"in window&&!Qi,R2=en&&(!ef||Qi&&8<Qi&&11>=Qi),Ip=" ",Rp=!1;function O2(e,t){switch(e){case"keyup":return hk.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function pk(e,t){switch(e){case"compositionend":return D2(t);case"keypress":return t.which!==32?null:(Rp=!0,Ip);case"textInput":return e=t.data,e===Ip&&Rp?null:e;default:return null}}function mk(e,t){if(Nr)return e==="compositionend"||!ef&&O2(e,t)?(e=I2(),bo=Xh=Cn=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return R2&&t.locale!=="ko"?null:t.data;default:return null}}var gk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!gk[e.type]:t==="textarea"}function B2(e,t,n,r){g2(r),t=Vo(t,"onChange"),0<t.length&&(n=new Qh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zi=null,xa=null;function xk(e){Y2(e,0)}function Cl(e){var t=Ur(e);if(c2(t))return e}function vk(e,t){if(e==="change")return t}var N2=!1;if(en){var kc;if(en){var wc="oninput"in document;if(!wc){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),wc=typeof Dp.oninput=="function"}kc=wc}else kc=!1;N2=kc&&(!document.documentMode||9<document.documentMode)}function Bp(){Zi&&(Zi.detachEvent("onpropertychange",F2),xa=Zi=null)}function F2(e){if(e.propertyName==="value"&&Cl(xa)){var t=[];B2(t,xa,e,Gh(e)),b2(xk,t)}}function yk(e,t,n){e==="focusin"?(Bp(),Zi=t,xa=n,Zi.attachEvent("onpropertychange",F2)):e==="focusout"&&Bp()}function bk(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(xa)}function kk(e,t){if(e==="click")return Cl(t)}function wk(e,t){if(e==="input"||e==="change")return Cl(t)}function jk(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Tt=typeof Object.is=="function"?Object.is:jk;function va(e,t){if(Tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ad.call(t,i)||!Tt(e[i],t[i]))return!1}return!0}function Np(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,t){var n=Np(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Np(n)}}function V2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?V2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function U2(){for(var e=window,t=Io();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Io(e.document)}return t}function tf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sk(e){var t=U2(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&V2(n.ownerDocument.documentElement,n)){if(r!==null&&tf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Fp(n,s);var o=Fp(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pk=en&&"documentMode"in document&&11>=document.documentMode,Fr=null,Sd=null,ea=null,Pd=!1;function Vp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||Fr==null||Fr!==Io(r)||(r=Fr,"selectionStart"in r&&tf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ea&&va(ea,r)||(ea=r,r=Vo(Sd,"onSelect"),0<r.length&&(t=new Qh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Fr)))}function hs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vr={animationend:hs("Animation","AnimationEnd"),animationiteration:hs("Animation","AnimationIteration"),animationstart:hs("Animation","AnimationStart"),transitionend:hs("Transition","TransitionEnd")},jc={},H2={};en&&(H2=document.createElement("div").style,"AnimationEvent"in window||(delete Vr.animationend.animation,delete Vr.animationiteration.animation,delete Vr.animationstart.animation),"TransitionEvent"in window||delete Vr.transitionend.transition);function _l(e){if(jc[e])return jc[e];if(!Vr[e])return e;var t=Vr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in H2)return jc[e]=t[n];return e}var K2=_l("animationend"),G2=_l("animationiteration"),W2=_l("animationstart"),q2=_l("transitionend"),J2=new Map,Up="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(e,t){J2.set(e,t),Sr(t,[e])}for(var Sc=0;Sc<Up.length;Sc++){var Pc=Up[Sc],Ck=Pc.toLowerCase(),_k=Pc[0].toUpperCase()+Pc.slice(1);Hn(Ck,"on"+_k)}Hn(K2,"onAnimationEnd");Hn(G2,"onAnimationIteration");Hn(W2,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(q2,"onTransitionEnd");li("onMouseEnter",["mouseout","mouseover"]);li("onMouseLeave",["mouseout","mouseover"]);li("onPointerEnter",["pointerout","pointerover"]);li("onPointerLeave",["pointerout","pointerover"]);Sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wi));function Hp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cb(r,t,void 0,e),e.currentTarget=null}function Y2(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],l=c.instance,u=c.currentTarget;if(c=c.listener,l!==s&&i.isPropagationStopped())break e;Hp(i,c,u),s=l}else for(o=0;o<r.length;o++){if(c=r[o],l=c.instance,u=c.currentTarget,c=c.listener,l!==s&&i.isPropagationStopped())break e;Hp(i,c,u),s=l}}}if(Oo)throw e=bd,Oo=!1,bd=null,e}function ae(e,t){var n=t[Ad];n===void 0&&(n=t[Ad]=new Set);var r=e+"__bubble";n.has(r)||(X2(t,e,2,!1),n.add(r))}function Cc(e,t,n){var r=0;t&&(r|=4),X2(n,e,r,t)}var fs="_reactListening"+Math.random().toString(36).slice(2);function ya(e){if(!e[fs]){e[fs]=!0,i2.forEach(function(n){n!=="selectionchange"&&(Tk.has(n)||Cc(n,!1,e),Cc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fs]||(t[fs]=!0,Cc("selectionchange",!1,t))}}function X2(e,t,n,r){switch(M2(t)){case 1:var i=Vb;break;case 4:i=Ub;break;default:i=Yh}n=i.bind(null,t,n,e),i=void 0,!yd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function _c(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;c!==null;){if(o=hr(c),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}c=c.parentNode}}r=r.return}b2(function(){var u=s,h=Gh(n),f=[];e:{var p=J2.get(e);if(p!==void 0){var m=Qh,x=e;switch(e){case"keypress":if(ko(n)===0)break e;case"keydown":case"keyup":m=ik;break;case"focusin":x="focus",m=bc;break;case"focusout":x="blur",m=bc;break;case"beforeblur":case"afterblur":m=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Gb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ok;break;case K2:case G2:case W2:m=Jb;break;case q2:m=ck;break;case"scroll":m=Hb;break;case"wheel":m=dk;break;case"copy":case"cut":case"paste":m=Xb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mp}var b=(t&4)!==0,j=!b&&e==="scroll",y=b?p!==null?p+"Capture":null:p;b=[];for(var g=u,v;g!==null;){v=g;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,y!==null&&(S=fa(g,y),S!=null&&b.push(ba(g,S,v)))),j)break;g=g.return}0<b.length&&(p=new m(p,x,null,n,h),f.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==xd&&(x=n.relatedTarget||n.fromElement)&&(hr(x)||x[tn]))break e;if((m||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?hr(x):null,x!==null&&(j=Pr(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(b=zp,S="onMouseLeave",y="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=Mp,S="onPointerLeave",y="onPointerEnter",g="pointer"),j=m==null?p:Ur(m),v=x==null?p:Ur(x),p=new b(S,g+"leave",m,n,h),p.target=j,p.relatedTarget=v,S=null,hr(h)===u&&(b=new b(y,g+"enter",x,n,h),b.target=v,b.relatedTarget=j,S=b),j=S,m&&x)t:{for(b=m,y=x,g=0,v=b;v;v=zr(v))g++;for(v=0,S=y;S;S=zr(S))v++;for(;0<g-v;)b=zr(b),g--;for(;0<v-g;)y=zr(y),v--;for(;g--;){if(b===y||y!==null&&b===y.alternate)break t;b=zr(b),y=zr(y)}b=null}else b=null;m!==null&&Kp(f,p,m,b,!1),x!==null&&j!==null&&Kp(f,j,x,b,!0)}}e:{if(p=u?Ur(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var P=vk;else if(Op(p))if(N2)P=wk;else{P=bk;var T=yk}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(P=kk);if(P&&(P=P(e,u))){B2(f,P,n,h);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&hd(p,"number",p.value)}switch(T=u?Ur(u):window,e){case"focusin":(Op(T)||T.contentEditable==="true")&&(Fr=T,Sd=u,ea=null);break;case"focusout":ea=Sd=Fr=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Vp(f,n,h);break;case"selectionchange":if(Pk)break;case"keydown":case"keyup":Vp(f,n,h)}var w;if(ef)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Nr?O2(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(R2&&n.locale!=="ko"&&(Nr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Nr&&(w=I2()):(Cn=h,Xh="value"in Cn?Cn.value:Cn.textContent,Nr=!0)),T=Vo(u,C),0<T.length&&(C=new Lp(C,e,null,n,h),f.push({event:C,listeners:T}),w?C.data=w:(w=D2(n),w!==null&&(C.data=w)))),(w=fk?pk(e,n):mk(e,n))&&(u=Vo(u,"onBeforeInput"),0<u.length&&(h=new Lp("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=w))}Y2(f,t)})}function ba(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fa(e,n),s!=null&&r.unshift(ba(e,s,i)),s=fa(e,t),s!=null&&r.push(ba(e,s,i))),e=e.return}return r}function zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kp(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var c=n,l=c.alternate,u=c.stateNode;if(l!==null&&l===r)break;c.tag===5&&u!==null&&(c=u,i?(l=fa(n,s),l!=null&&o.unshift(ba(n,l,c))):i||(l=fa(n,s),l!=null&&o.push(ba(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ek=/\r\n?/g,Ak=/\u0000|\uFFFD/g;function Gp(e){return(typeof e=="string"?e:""+e).replace(Ek,`
`).replace(Ak,"")}function ps(e,t,n){if(t=Gp(t),Gp(e)!==t&&n)throw Error($(425))}function Uo(){}var Cd=null,_d=null;function Td(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ed=typeof setTimeout=="function"?setTimeout:void 0,$k=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,zk=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(e){return Wp.resolve(null).then(e).catch(Lk)}:Ed;function Lk(e){setTimeout(function(){throw e})}function Tc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ga(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ga(t)}function zn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Si=Math.random().toString(36).slice(2),Nt="__reactFiber$"+Si,ka="__reactProps$"+Si,tn="__reactContainer$"+Si,Ad="__reactEvents$"+Si,Mk="__reactListeners$"+Si,Ik="__reactHandles$"+Si;function hr(e){var t=e[Nt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[Nt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qp(e);e!==null;){if(n=e[Nt])return n;e=qp(e)}return t}e=n,n=e.parentNode}return null}function Ga(e){return e=e[Nt]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error($(33))}function Tl(e){return e[ka]||null}var $d=[],Hr=-1;function Kn(e){return{current:e}}function se(e){0>Hr||(e.current=$d[Hr],$d[Hr]=null,Hr--)}function re(e,t){Hr++,$d[Hr]=e.current,e.current=t}var Fn={},Re=Kn(Fn),We=Kn(!1),yr=Fn;function ci(e,t){var n=e.type.contextTypes;if(!n)return Fn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Ho(){se(We),se(Re)}function Jp(e,t,n){if(Re.current!==Fn)throw Error($(168));re(Re,t),re(We,n)}function Q2(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error($(108,yb(e)||"Unknown",i));return fe({},n,r)}function Ko(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Fn,yr=Re.current,re(Re,e),re(We,We.current),!0}function Yp(e,t,n){var r=e.stateNode;if(!r)throw Error($(169));n?(e=Q2(e,t,yr),r.__reactInternalMemoizedMergedChildContext=e,se(We),se(Re),re(Re,e)):se(We),re(We,n)}var Wt=null,El=!1,Ec=!1;function Z2(e){Wt===null?Wt=[e]:Wt.push(e)}function Rk(e){El=!0,Z2(e)}function Gn(){if(!Ec&&Wt!==null){Ec=!0;var e=0,t=ee;try{var n=Wt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Wt=null,El=!1}catch(i){throw Wt!==null&&(Wt=Wt.slice(e+1)),S2(Wh,Gn),i}finally{ee=t,Ec=!1}}return null}var Kr=[],Gr=0,Go=null,Wo=0,ft=[],pt=0,br=null,qt=1,Jt="";function ar(e,t){Kr[Gr++]=Wo,Kr[Gr++]=Go,Go=e,Wo=t}function ex(e,t,n){ft[pt++]=qt,ft[pt++]=Jt,ft[pt++]=br,br=e;var r=qt;e=Jt;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,qt=1<<32-Ct(t)+i|n<<i|r,Jt=s+e}else qt=1<<s|n<<i|r,Jt=e}function nf(e){e.return!==null&&(ar(e,1),ex(e,1,0))}function rf(e){for(;e===Go;)Go=Kr[--Gr],Kr[Gr]=null,Wo=Kr[--Gr],Kr[Gr]=null;for(;e===br;)br=ft[--pt],ft[pt]=null,Jt=ft[--pt],ft[pt]=null,qt=ft[--pt],ft[pt]=null}var rt=null,nt=null,ce=!1,Pt=null;function tx(e,t){var n=mt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Xp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,rt=e,nt=zn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,rt=e,nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=br!==null?{id:qt,overflow:Jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=mt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,rt=e,nt=null,!0):!1;default:return!1}}function zd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ld(e){if(ce){var t=nt;if(t){var n=t;if(!Xp(e,t)){if(zd(e))throw Error($(418));t=zn(n.nextSibling);var r=rt;t&&Xp(e,t)?tx(r,n):(e.flags=e.flags&-4097|2,ce=!1,rt=e)}}else{if(zd(e))throw Error($(418));e.flags=e.flags&-4097|2,ce=!1,rt=e}}}function Qp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;rt=e}function ms(e){if(e!==rt)return!1;if(!ce)return Qp(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Td(e.type,e.memoizedProps)),t&&(t=nt)){if(zd(e))throw nx(),Error($(418));for(;t;)tx(e,t),t=zn(t.nextSibling)}if(Qp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error($(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){nt=zn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}nt=null}}else nt=rt?zn(e.stateNode.nextSibling):null;return!0}function nx(){for(var e=nt;e;)e=zn(e.nextSibling)}function ui(){nt=rt=null,ce=!1}function af(e){Pt===null?Pt=[e]:Pt.push(e)}var Ok=sn.ReactCurrentBatchConfig;function Ii(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error($(309));var r=n.stateNode}if(!r)throw Error($(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var c=i.refs;o===null?delete c[s]:c[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error($(284));if(!n._owner)throw Error($(290,e))}return e}function gs(e,t){throw e=Object.prototype.toString.call(t),Error($(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zp(e){var t=e._init;return t(e._payload)}function rx(e){function t(y,g){if(e){var v=y.deletions;v===null?(y.deletions=[g],y.flags|=16):v.push(g)}}function n(y,g){if(!e)return null;for(;g!==null;)t(y,g),g=g.sibling;return null}function r(y,g){for(y=new Map;g!==null;)g.key!==null?y.set(g.key,g):y.set(g.index,g),g=g.sibling;return y}function i(y,g){return y=Rn(y,g),y.index=0,y.sibling=null,y}function s(y,g,v){return y.index=v,e?(v=y.alternate,v!==null?(v=v.index,v<g?(y.flags|=2,g):v):(y.flags|=2,g)):(y.flags|=1048576,g)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function c(y,g,v,S){return g===null||g.tag!==6?(g=Rc(v,y.mode,S),g.return=y,g):(g=i(g,v),g.return=y,g)}function l(y,g,v,S){var P=v.type;return P===Br?h(y,g,v.props.children,S,v.key):g!==null&&(g.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===yn&&Zp(P)===g.type)?(S=i(g,v.props),S.ref=Ii(y,g,v),S.return=y,S):(S=To(v.type,v.key,v.props,null,y.mode,S),S.ref=Ii(y,g,v),S.return=y,S)}function u(y,g,v,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Oc(v,y.mode,S),g.return=y,g):(g=i(g,v.children||[]),g.return=y,g)}function h(y,g,v,S,P){return g===null||g.tag!==7?(g=xr(v,y.mode,S,P),g.return=y,g):(g=i(g,v),g.return=y,g)}function f(y,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Rc(""+g,y.mode,v),g.return=y,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case as:return v=To(g.type,g.key,g.props,null,y.mode,v),v.ref=Ii(y,null,g),v.return=y,v;case Dr:return g=Oc(g,y.mode,v),g.return=y,g;case yn:var S=g._init;return f(y,S(g._payload),v)}if(Ki(g)||Ai(g))return g=xr(g,y.mode,v,null),g.return=y,g;gs(y,g)}return null}function p(y,g,v,S){var P=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return P!==null?null:c(y,g,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case as:return v.key===P?l(y,g,v,S):null;case Dr:return v.key===P?u(y,g,v,S):null;case yn:return P=v._init,p(y,g,P(v._payload),S)}if(Ki(v)||Ai(v))return P!==null?null:h(y,g,v,S,null);gs(y,v)}return null}function m(y,g,v,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return y=y.get(v)||null,c(g,y,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case as:return y=y.get(S.key===null?v:S.key)||null,l(g,y,S,P);case Dr:return y=y.get(S.key===null?v:S.key)||null,u(g,y,S,P);case yn:var T=S._init;return m(y,g,v,T(S._payload),P)}if(Ki(S)||Ai(S))return y=y.get(v)||null,h(g,y,S,P,null);gs(g,S)}return null}function x(y,g,v,S){for(var P=null,T=null,w=g,C=g=0,_=null;w!==null&&C<v.length;C++){w.index>C?(_=w,w=null):_=w.sibling;var A=p(y,w,v[C],S);if(A===null){w===null&&(w=_);break}e&&w&&A.alternate===null&&t(y,w),g=s(A,g,C),T===null?P=A:T.sibling=A,T=A,w=_}if(C===v.length)return n(y,w),ce&&ar(y,C),P;if(w===null){for(;C<v.length;C++)w=f(y,v[C],S),w!==null&&(g=s(w,g,C),T===null?P=w:T.sibling=w,T=w);return ce&&ar(y,C),P}for(w=r(y,w);C<v.length;C++)_=m(w,y,C,v[C],S),_!==null&&(e&&_.alternate!==null&&w.delete(_.key===null?C:_.key),g=s(_,g,C),T===null?P=_:T.sibling=_,T=_);return e&&w.forEach(function(L){return t(y,L)}),ce&&ar(y,C),P}function b(y,g,v,S){var P=Ai(v);if(typeof P!="function")throw Error($(150));if(v=P.call(v),v==null)throw Error($(151));for(var T=P=null,w=g,C=g=0,_=null,A=v.next();w!==null&&!A.done;C++,A=v.next()){w.index>C?(_=w,w=null):_=w.sibling;var L=p(y,w,A.value,S);if(L===null){w===null&&(w=_);break}e&&w&&L.alternate===null&&t(y,w),g=s(L,g,C),T===null?P=L:T.sibling=L,T=L,w=_}if(A.done)return n(y,w),ce&&ar(y,C),P;if(w===null){for(;!A.done;C++,A=v.next())A=f(y,A.value,S),A!==null&&(g=s(A,g,C),T===null?P=A:T.sibling=A,T=A);return ce&&ar(y,C),P}for(w=r(y,w);!A.done;C++,A=v.next())A=m(w,y,C,A.value,S),A!==null&&(e&&A.alternate!==null&&w.delete(A.key===null?C:A.key),g=s(A,g,C),T===null?P=A:T.sibling=A,T=A);return e&&w.forEach(function(B){return t(y,B)}),ce&&ar(y,C),P}function j(y,g,v,S){if(typeof v=="object"&&v!==null&&v.type===Br&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case as:e:{for(var P=v.key,T=g;T!==null;){if(T.key===P){if(P=v.type,P===Br){if(T.tag===7){n(y,T.sibling),g=i(T,v.props.children),g.return=y,y=g;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===yn&&Zp(P)===T.type){n(y,T.sibling),g=i(T,v.props),g.ref=Ii(y,T,v),g.return=y,y=g;break e}n(y,T);break}else t(y,T);T=T.sibling}v.type===Br?(g=xr(v.props.children,y.mode,S,v.key),g.return=y,y=g):(S=To(v.type,v.key,v.props,null,y.mode,S),S.ref=Ii(y,g,v),S.return=y,y=S)}return o(y);case Dr:e:{for(T=v.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(y,g.sibling),g=i(g,v.children||[]),g.return=y,y=g;break e}else{n(y,g);break}else t(y,g);g=g.sibling}g=Oc(v,y.mode,S),g.return=y,y=g}return o(y);case yn:return T=v._init,j(y,g,T(v._payload),S)}if(Ki(v))return x(y,g,v,S);if(Ai(v))return b(y,g,v,S);gs(y,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(y,g.sibling),g=i(g,v),g.return=y,y=g):(n(y,g),g=Rc(v,y.mode,S),g.return=y,y=g),o(y)):n(y,g)}return j}var di=rx(!0),ix=rx(!1),qo=Kn(null),Jo=null,Wr=null,sf=null;function of(){sf=Wr=Jo=null}function lf(e){var t=qo.current;se(qo),e._currentValue=t}function Md(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ii(e,t){Jo=e,sf=Wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ke=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(sf!==e)if(e={context:e,memoizedValue:t,next:null},Wr===null){if(Jo===null)throw Error($(308));Wr=e,Jo.dependencies={lanes:0,firstContext:e}}else Wr=Wr.next=e;return t}var fr=null;function cf(e){fr===null?fr=[e]:fr.push(e)}function ax(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cf(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bn=!1;function uf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function sx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ln(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,cf(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function wo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qh(e,n)}}function em(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yo(e,t,n,r){var i=e.updateQueue;bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==o&&(c===null?h.firstBaseUpdate=u:c.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=u=l=null,c=s;do{var p=c.lane,m=c.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:m,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,b=c;switch(p=t,m=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){f=x.call(m,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,p=typeof x=="function"?x.call(m,f,p):x,p==null)break e;f=fe({},f,p);break e;case 2:bn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else m={eventTime:m,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(u=h=m,l=f):h=h.next=m,o|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);wr|=o,e.lanes=o,e.memoizedState=f}}function tm(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error($(191,i));i.call(r)}}}var Wa={},Vt=Kn(Wa),wa=Kn(Wa),ja=Kn(Wa);function pr(e){if(e===Wa)throw Error($(174));return e}function df(e,t){switch(re(ja,t),re(wa,e),re(Vt,Wa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pd(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pd(t,e)}se(Vt),re(Vt,t)}function hi(){se(Vt),se(wa),se(ja)}function ox(e){pr(ja.current);var t=pr(Vt.current),n=pd(t,e.type);t!==n&&(re(wa,e),re(Vt,n))}function hf(e){wa.current===e&&(se(Vt),se(wa))}var ue=Kn(0);function Xo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ac=[];function ff(){for(var e=0;e<Ac.length;e++)Ac[e]._workInProgressVersionPrimary=null;Ac.length=0}var jo=sn.ReactCurrentDispatcher,$c=sn.ReactCurrentBatchConfig,kr=0,he=null,ke=null,Se=null,Qo=!1,ta=!1,Sa=0,Dk=0;function $e(){throw Error($(321))}function pf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Tt(e[n],t[n]))return!1;return!0}function mf(e,t,n,r,i,s){if(kr=s,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,jo.current=e===null||e.memoizedState===null?Vk:Uk,e=n(r,i),ta){s=0;do{if(ta=!1,Sa=0,25<=s)throw Error($(301));s+=1,Se=ke=null,t.updateQueue=null,jo.current=Hk,e=n(r,i)}while(ta)}if(jo.current=Zo,t=ke!==null&&ke.next!==null,kr=0,Se=ke=he=null,Qo=!1,t)throw Error($(300));return e}function gf(){var e=Sa!==0;return Sa=0,e}function Ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?he.memoizedState=Se=e:Se=Se.next=e,Se}function yt(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=Se===null?he.memoizedState:Se.next;if(t!==null)Se=t,ke=e;else{if(e===null)throw Error($(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},Se===null?he.memoizedState=Se=e:Se=Se.next=e}return Se}function Pa(e,t){return typeof t=="function"?t(e):t}function zc(e){var t=yt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=ke,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=o=null,l=null,u=s;do{var h=u.lane;if((kr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,o=r):l=l.next=f,he.lanes|=h,wr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=c,Tt(r,t.memoizedState)||(Ke=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,he.lanes|=s,wr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Lc(e){var t=yt(),n=t.queue;if(n===null)throw Error($(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Tt(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function lx(){}function cx(e,t){var n=he,r=yt(),i=t(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ke=!0),r=r.queue,xf(hx.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Ca(9,dx.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error($(349));kr&30||ux(n,t,i)}return i}function ux(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function dx(e,t,n,r){t.value=n,t.getSnapshot=r,fx(t)&&px(e)}function hx(e,t,n){return n(function(){fx(t)&&px(e)})}function fx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Tt(e,n)}catch{return!0}}function px(e){var t=nn(e,1);t!==null&&_t(t,e,1,-1)}function nm(e){var t=Ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t.queue=e,e=e.dispatch=Fk.bind(null,he,e),[t.memoizedState,e]}function Ca(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mx(){return yt().memoizedState}function So(e,t,n,r){var i=Ot();he.flags|=e,i.memoizedState=Ca(1|t,n,void 0,r===void 0?null:r)}function Al(e,t,n,r){var i=yt();r=r===void 0?null:r;var s=void 0;if(ke!==null){var o=ke.memoizedState;if(s=o.destroy,r!==null&&pf(r,o.deps)){i.memoizedState=Ca(t,n,s,r);return}}he.flags|=e,i.memoizedState=Ca(1|t,n,s,r)}function rm(e,t){return So(8390656,8,e,t)}function xf(e,t){return Al(2048,8,e,t)}function gx(e,t){return Al(4,2,e,t)}function xx(e,t){return Al(4,4,e,t)}function vx(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function yx(e,t,n){return n=n!=null?n.concat([e]):null,Al(4,4,vx.bind(null,t,e),n)}function vf(){}function bx(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kx(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&pf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wx(e,t,n){return kr&21?(Tt(n,t)||(n=_2(),he.lanes|=n,wr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=n)}function Bk(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=$c.transition;$c.transition={};try{e(!1),t()}finally{ee=n,$c.transition=r}}function jx(){return yt().memoizedState}function Nk(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sx(e))Px(t,n);else if(n=ax(e,t,n,r),n!==null){var i=Be();_t(n,e,r,i),Cx(n,t,r)}}function Fk(e,t,n){var r=In(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sx(e))Px(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,c=s(o,n);if(i.hasEagerState=!0,i.eagerState=c,Tt(c,o)){var l=t.interleaved;l===null?(i.next=i,cf(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=ax(e,t,i,r),n!==null&&(i=Be(),_t(n,e,r,i),Cx(n,t,r))}}function Sx(e){var t=e.alternate;return e===he||t!==null&&t===he}function Px(e,t){ta=Qo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cx(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,qh(e,n)}}var Zo={readContext:vt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Vk={readContext:vt,useCallback:function(e,t){return Ot().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:rm,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,So(4194308,4,vx.bind(null,t,e),n)},useLayoutEffect:function(e,t){return So(4194308,4,e,t)},useInsertionEffect:function(e,t){return So(4,2,e,t)},useMemo:function(e,t){var n=Ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nk.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Ot();return e={current:e},t.memoizedState=e},useState:nm,useDebugValue:vf,useDeferredValue:function(e){return Ot().memoizedState=e},useTransition:function(){var e=nm(!1),t=e[0];return e=Bk.bind(null,e[1]),Ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,i=Ot();if(ce){if(n===void 0)throw Error($(407));n=n()}else{if(n=t(),Pe===null)throw Error($(349));kr&30||ux(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,rm(hx.bind(null,r,s,e),[e]),r.flags|=2048,Ca(9,dx.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Ot(),t=Pe.identifierPrefix;if(ce){var n=Jt,r=qt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Sa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dk++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uk={readContext:vt,useCallback:bx,useContext:vt,useEffect:xf,useImperativeHandle:yx,useInsertionEffect:gx,useLayoutEffect:xx,useMemo:kx,useReducer:zc,useRef:mx,useState:function(){return zc(Pa)},useDebugValue:vf,useDeferredValue:function(e){var t=yt();return wx(t,ke.memoizedState,e)},useTransition:function(){var e=zc(Pa)[0],t=yt().memoizedState;return[e,t]},useMutableSource:lx,useSyncExternalStore:cx,useId:jx,unstable_isNewReconciler:!1},Hk={readContext:vt,useCallback:bx,useContext:vt,useEffect:xf,useImperativeHandle:yx,useInsertionEffect:gx,useLayoutEffect:xx,useMemo:kx,useReducer:Lc,useRef:mx,useState:function(){return Lc(Pa)},useDebugValue:vf,useDeferredValue:function(e){var t=yt();return ke===null?t.memoizedState=e:wx(t,ke.memoizedState,e)},useTransition:function(){var e=Lc(Pa)[0],t=yt().memoizedState;return[e,t]},useMutableSource:lx,useSyncExternalStore:cx,useId:jx,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Id(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var $l={isMounted:function(e){return(e=e._reactInternals)?Pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),i=In(e),s=Xt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ln(e,s,i),t!==null&&(_t(t,e,i,r),wo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),i=In(e),s=Xt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ln(e,s,i),t!==null&&(_t(t,e,i,r),wo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=In(e),i=Xt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ln(e,i,r),t!==null&&(_t(t,e,r,n),wo(t,e,r))}};function im(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!va(n,r)||!va(i,s):!0}function _x(e,t,n){var r=!1,i=Fn,s=t.contextType;return typeof s=="object"&&s!==null?s=vt(s):(i=qe(t)?yr:Re.current,r=t.contextTypes,s=(r=r!=null)?ci(e,i):Fn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=$l,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function am(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&$l.enqueueReplaceState(t,t.state,null)}function Rd(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},uf(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=vt(s):(s=qe(t)?yr:Re.current,i.context=ci(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Id(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&$l.enqueueReplaceState(i,i.state,null),Yo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function fi(e,t){try{var n="",r=t;do n+=vb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Mc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Od(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kk=typeof WeakMap=="function"?WeakMap:Map;function Tx(e,t,n){n=Xt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Wd=r),Od(e,t)},n}function Ex(e,t,n){n=Xt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Od(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Od(e,t),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function sm(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=aw.bind(null,e,t,n),t.then(e,e))}function om(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lm(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xt(-1,1),t.tag=2,Ln(n,t,1))),n.lanes|=1),e)}var Gk=sn.ReactCurrentOwner,Ke=!1;function De(e,t,n,r){t.child=e===null?ix(t,null,n,r):di(t,e.child,n,r)}function cm(e,t,n,r,i){n=n.render;var s=t.ref;return ii(t,i),r=mf(e,t,n,r,s,i),n=gf(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(ce&&n&&nf(t),t.flags|=1,De(e,t,r,i),t.child)}function um(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Cf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Ax(e,t,s,r,i)):(e=To(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(o,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=Rn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Ax(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(va(s,r)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ke=!0);else return t.lanes=e.lanes,rn(e,t,i)}return Dd(e,t,n,r,i)}function $x(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Jr,tt),tt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,re(Jr,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(Jr,tt),tt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,re(Jr,tt),tt|=r;return De(e,t,i,n),t.child}function zx(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dd(e,t,n,r,i){var s=qe(n)?yr:Re.current;return s=ci(t,s),ii(t,i),n=mf(e,t,n,r,s,i),r=gf(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(ce&&r&&nf(t),t.flags|=1,De(e,t,n,i),t.child)}function dm(e,t,n,r,i){if(qe(n)){var s=!0;Ko(t)}else s=!1;if(ii(t,i),t.stateNode===null)Po(e,t),_x(t,n,r),Rd(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=qe(n)?yr:Re.current,u=ci(t,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||l!==u)&&am(t,o,r,u),bn=!1;var p=t.memoizedState;o.state=p,Yo(t,r,o,i),l=t.memoizedState,c!==r||p!==l||We.current||bn?(typeof h=="function"&&(Id(t,n,h,r),l=t.memoizedState),(c=bn||im(t,n,c,r,p,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,sx(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:wt(t.type,c),o.props=u,f=t.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=vt(l):(l=qe(n)?yr:Re.current,l=ci(t,l));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==f||p!==l)&&am(t,o,r,l),bn=!1,p=t.memoizedState,o.state=p,Yo(t,r,o,i);var x=t.memoizedState;c!==f||p!==x||We.current||bn?(typeof m=="function"&&(Id(t,n,m,r),x=t.memoizedState),(u=bn||im(t,n,u,r,p,x,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Bd(e,t,n,r,s,i)}function Bd(e,t,n,r,i,s){zx(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Yp(t,n,!1),rn(e,t,s);r=t.stateNode,Gk.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=di(t,e.child,null,s),t.child=di(t,null,c,s)):De(e,t,c,s),t.memoizedState=r.state,i&&Yp(t,n,!0),t.child}function Lx(e){var t=e.stateNode;t.pendingContext?Jp(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jp(e,t.context,!1),df(e,t.containerInfo)}function hm(e,t,n,r,i){return ui(),af(i),t.flags|=256,De(e,t,n,r),t.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Fd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Mx(e,t,n){var r=t.pendingProps,i=ue.current,s=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),re(ue,i&1),e===null)return Ld(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ml(o,r,0,null),e=xr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Fd(n),t.memoizedState=Nd,e):yf(t,o));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Wk(e,t,o,r,c,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Rn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=Rn(c,s):(s=xr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Fd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Nd,r}return s=e.child,e=s.sibling,r=Rn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yf(e,t){return t=Ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xs(e,t,n,r){return r!==null&&af(r),di(t,e.child,null,n),e=yf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wk(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Mc(Error($(422))),xs(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ml({mode:"visible",children:r.children},i,0,null),s=xr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&di(t,e.child,null,o),t.child.memoizedState=Fd(o),t.memoizedState=Nd,s);if(!(t.mode&1))return xs(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error($(419)),r=Mc(s,r,void 0),xs(e,t,o,r)}if(c=(o&e.childLanes)!==0,Ke||c){if(r=Pe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(e,i),_t(r,e,i,-1))}return Pf(),r=Mc(Error($(421))),xs(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=sw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,nt=zn(i.nextSibling),rt=t,ce=!0,Pt=null,e!==null&&(ft[pt++]=qt,ft[pt++]=Jt,ft[pt++]=br,qt=e.id,Jt=e.overflow,br=t),t=yf(t,r.children),t.flags|=4096,t)}function fm(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Md(e.return,t,n)}function Ic(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ix(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(De(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fm(e,n,t);else if(e.tag===19)fm(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(re(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ic(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ic(t,!0,n,null,s);break;case"together":Ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error($(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qk(e,t,n){switch(t.tag){case 3:Lx(t),ui();break;case 5:ox(t);break;case 1:qe(t.type)&&Ko(t);break;case 4:df(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;re(qo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(re(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?Mx(e,t,n):(re(ue,ue.current&1),e=rn(e,t,n),e!==null?e.sibling:null);re(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ix(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,$x(e,t,n)}return rn(e,t,n)}var Rx,Vd,Ox,Dx;Rx=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vd=function(){};Ox=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,pr(Vt.current);var s=null;switch(n){case"input":i=ud(e,i),r=ud(e,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=fd(e,i),r=fd(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Uo)}md(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var c=i[u];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(c=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u==="style")if(c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(da.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ae("scroll",e),s||c===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Dx=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ri(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Jk(e,t,n){var r=t.pendingProps;switch(rf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return qe(t.type)&&Ho(),ze(t),null;case 3:return r=t.stateNode,hi(),se(We),se(Re),ff(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ms(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(Yd(Pt),Pt=null))),Vd(e,t),ze(t),null;case 5:hf(t);var i=pr(ja.current);if(n=t.type,e!==null&&t.stateNode!=null)Ox(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error($(166));return ze(t),null}if(e=pr(Vt.current),ms(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Nt]=t,r[ka]=s,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<Wi.length;i++)ae(Wi[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":wp(r,s),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ae("invalid",r);break;case"textarea":Sp(r,s),ae("invalid",r)}md(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&ps(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&ps(r.textContent,c,e),i=["children",""+c]):da.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&ae("scroll",r)}switch(n){case"input":ss(r),jp(r,s,!0);break;case"textarea":ss(r),Pp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Uo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=h2(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Nt]=t,e[ka]=r,Rx(e,t,!1,!1),t.stateNode=e;e:{switch(o=gd(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<Wi.length;i++)ae(Wi[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":wp(e,r),i=ud(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":Sp(e,r),i=fd(e,r),ae("invalid",e);break;default:i=r}md(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var l=c[s];s==="style"?m2(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&f2(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ha(e,l):typeof l=="number"&&ha(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ae("scroll",e):l!=null&&Vh(e,s,l,o))}switch(n){case"input":ss(e),jp(e,r,!1);break;case"textarea":ss(e),Pp(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ei(e,!!r.multiple,s,!1):r.defaultValue!=null&&ei(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Uo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Dx(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error($(166));if(n=pr(ja.current),pr(Vt.current),ms(t)){if(r=t.stateNode,n=t.memoizedProps,r[Nt]=t,(s=r.nodeValue!==n)&&(e=rt,e!==null))switch(e.tag){case 3:ps(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ps(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nt]=t,t.stateNode=r}return ze(t),null;case 13:if(se(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&nt!==null&&t.mode&1&&!(t.flags&128))nx(),ui(),t.flags|=98560,s=!1;else if(s=ms(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error($(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error($(317));s[Nt]=t}else ui(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),s=!1}else Pt!==null&&(Yd(Pt),Pt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?we===0&&(we=3):Pf())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return hi(),Vd(e,t),e===null&&ya(t.stateNode.containerInfo),ze(t),null;case 10:return lf(t.type._context),ze(t),null;case 17:return qe(t.type)&&Ho(),ze(t),null;case 19:if(se(ue),s=t.memoizedState,s===null)return ze(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Ri(s,!1);else{if(we!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Xo(e),o!==null){for(t.flags|=128,Ri(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return re(ue,ue.current&1|2),t.child}e=e.sibling}s.tail!==null&&ge()>pi&&(t.flags|=128,r=!0,Ri(s,!1),t.lanes=4194304)}else{if(!r)if(e=Xo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ri(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return ze(t),null}else 2*ge()-s.renderingStartTime>pi&&n!==1073741824&&(t.flags|=128,r=!0,Ri(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ge(),t.sibling=null,n=ue.current,re(ue,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return Sf(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error($(156,t.tag))}function Yk(e,t){switch(rf(t),t.tag){case 1:return qe(t.type)&&Ho(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return hi(),se(We),se(Re),ff(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hf(t),null;case 13:if(se(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error($(340));ui()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ue),null;case 4:return hi(),null;case 10:return lf(t.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var vs=!1,Ie=!1,Xk=typeof WeakSet=="function"?WeakSet:Set,D=null;function qr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Ud(e,t,n){try{n()}catch(r){pe(e,t,r)}}var pm=!1;function Qk(e,t){if(Cd=No,e=U2(),tf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,c=-1,l=-1,u=0,h=0,f=e,p=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break t;if(p===n&&++u===i&&(c=o),p===s&&++h===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_d={focusedElem:e,selectionRange:n},No=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,j=x.memoizedState,y=t.stateNode,g=y.getSnapshotBeforeUpdate(t.elementType===t.type?b:wt(t.type,b),j);y.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error($(163))}}catch(S){pe(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return x=pm,pm=!1,x}function na(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ud(t,n,s)}i=i.next}while(i!==r)}}function zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bx(e){var t=e.alternate;t!==null&&(e.alternate=null,Bx(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Nt],delete t[ka],delete t[Ad],delete t[Mk],delete t[Ik])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nx(e){return e.tag===5||e.tag===3||e.tag===4}function mm(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nx(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Uo));else if(r!==4&&(e=e.child,e!==null))for(Kd(e,t,n),e=e.sibling;e!==null;)Kd(e,t,n),e=e.sibling}function Gd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Gd(e,t,n),e=e.sibling;e!==null;)Gd(e,t,n),e=e.sibling}var _e=null,jt=!1;function ln(e,t,n){for(n=n.child;n!==null;)Fx(e,t,n),n=n.sibling}function Fx(e,t,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:Ie||qr(n,t);case 6:var r=_e,i=jt;_e=null,ln(e,t,n),_e=r,jt=i,_e!==null&&(jt?(e=_e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(jt?(e=_e,n=n.stateNode,e.nodeType===8?Tc(e.parentNode,n):e.nodeType===1&&Tc(e,n),ga(e)):Tc(_e,n.stateNode));break;case 4:r=_e,i=jt,_e=n.stateNode.containerInfo,jt=!0,ln(e,t,n),_e=r,jt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ud(n,t,o),i=i.next}while(i!==r)}ln(e,t,n);break;case 1:if(!Ie&&(qr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){pe(n,t,c)}ln(e,t,n);break;case 21:ln(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,ln(e,t,n),Ie=r):ln(e,t,n);break;default:ln(e,t,n)}}function gm(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Xk),t.forEach(function(r){var i=ow.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function bt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:_e=c.stateNode,jt=!1;break e;case 3:_e=c.stateNode.containerInfo,jt=!0;break e;case 4:_e=c.stateNode.containerInfo,jt=!0;break e}c=c.return}if(_e===null)throw Error($(160));Fx(s,o,i),_e=null,jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vx(t,e),t=t.sibling}function Vx(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(bt(t,e),zt(e),r&4){try{na(3,e,e.return),zl(3,e)}catch(b){pe(e,e.return,b)}try{na(5,e,e.return)}catch(b){pe(e,e.return,b)}}break;case 1:bt(t,e),zt(e),r&512&&n!==null&&qr(n,n.return);break;case 5:if(bt(t,e),zt(e),r&512&&n!==null&&qr(n,n.return),e.flags&32){var i=e.stateNode;try{ha(i,"")}catch(b){pe(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&u2(i,s),gd(c,o);var u=gd(c,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?m2(i,f):h==="dangerouslySetInnerHTML"?f2(i,f):h==="children"?ha(i,f):Vh(i,h,f,u)}switch(c){case"input":dd(i,s);break;case"textarea":d2(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ei(i,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?ei(i,!!s.multiple,s.defaultValue,!0):ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[ka]=s}catch(b){pe(e,e.return,b)}}break;case 6:if(bt(t,e),zt(e),r&4){if(e.stateNode===null)throw Error($(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(b){pe(e,e.return,b)}}break;case 3:if(bt(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(t.containerInfo)}catch(b){pe(e,e.return,b)}break;case 4:bt(t,e),zt(e);break;case 13:bt(t,e),zt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wf=ge())),r&4&&gm(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||h,bt(t,e),Ie=u):bt(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(D=e,h=e.child;h!==null;){for(f=D=h;D!==null;){switch(p=D,m=p.child,p.tag){case 0:case 11:case 14:case 15:na(4,p,p.return);break;case 1:qr(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){pe(r,n,b)}}break;case 5:qr(p,p.return);break;case 22:if(p.memoizedState!==null){vm(f);continue}}m!==null?(m.return=p,D=m):vm(f)}h=h.sibling}e:for(h=null,f=e;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=p2("display",o))}catch(b){pe(e,e.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(b){pe(e,e.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:bt(t,e),zt(e),r&4&&gm(e);break;case 21:break;default:bt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nx(n)){var r=n;break e}n=n.return}throw Error($(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ha(i,""),r.flags&=-33);var s=mm(e);Gd(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,c=mm(e);Kd(e,c,o);break;default:throw Error($(161))}}catch(l){pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zk(e,t,n){D=e,Ux(e)}function Ux(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||vs;if(!o){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Ie;c=vs;var u=Ie;if(vs=o,(Ie=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?ym(i):l!==null?(l.return=o,D=l):ym(i);for(;s!==null;)D=s,Ux(s),s=s.sibling;D=i,vs=c,Ie=u}xm(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):xm(e)}}function xm(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&tm(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}tm(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error($(163))}Ie||t.flags&512&&Hd(t)}catch(p){pe(t,t.return,p)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function vm(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function ym(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zl(4,t)}catch(l){pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){pe(t,i,l)}}var s=t.return;try{Hd(t)}catch(l){pe(t,s,l)}break;case 5:var o=t.return;try{Hd(t)}catch(l){pe(t,o,l)}}}catch(l){pe(t,t.return,l)}if(t===e){D=null;break}var c=t.sibling;if(c!==null){c.return=t.return,D=c;break}D=t.return}}var ew=Math.ceil,el=sn.ReactCurrentDispatcher,bf=sn.ReactCurrentOwner,gt=sn.ReactCurrentBatchConfig,X=0,Pe=null,be=null,Ee=0,tt=0,Jr=Kn(0),we=0,_a=null,wr=0,Ll=0,kf=0,ra=null,Ue=null,wf=0,pi=1/0,Gt=null,tl=!1,Wd=null,Mn=null,ys=!1,_n=null,nl=0,ia=0,qd=null,Co=-1,_o=0;function Be(){return X&6?ge():Co!==-1?Co:Co=ge()}function In(e){return e.mode&1?X&2&&Ee!==0?Ee&-Ee:Ok.transition!==null?(_o===0&&(_o=_2()),_o):(e=ee,e!==0||(e=window.event,e=e===void 0?16:M2(e.type)),e):1}function _t(e,t,n,r){if(50<ia)throw ia=0,qd=null,Error($(185));Ha(e,n,r),(!(X&2)||e!==Pe)&&(e===Pe&&(!(X&2)&&(Ll|=n),we===4&&Sn(e,Ee)),Je(e,r),n===1&&X===0&&!(t.mode&1)&&(pi=ge()+500,El&&Gn()))}function Je(e,t){var n=e.callbackNode;Ob(e,t);var r=Bo(e,e===Pe?Ee:0);if(r===0)n!==null&&Tp(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Tp(n),t===1)e.tag===0?Rk(bm.bind(null,e)):Z2(bm.bind(null,e)),zk(function(){!(X&6)&&Gn()}),n=null;else{switch(T2(r)){case 1:n=Wh;break;case 4:n=P2;break;case 16:n=Do;break;case 536870912:n=C2;break;default:n=Do}n=Xx(n,Hx.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hx(e,t){if(Co=-1,_o=0,X&6)throw Error($(327));var n=e.callbackNode;if(ai()&&e.callbackNode!==n)return null;var r=Bo(e,e===Pe?Ee:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var i=X;X|=2;var s=Gx();(Pe!==e||Ee!==t)&&(Gt=null,pi=ge()+500,gr(e,t));do try{rw();break}catch(c){Kx(e,c)}while(!0);of(),el.current=s,X=i,be!==null?t=0:(Pe=null,Ee=0,t=we)}if(t!==0){if(t===2&&(i=kd(e),i!==0&&(r=i,t=Jd(e,i))),t===1)throw n=_a,gr(e,0),Sn(e,r),Je(e,ge()),n;if(t===6)Sn(e,r);else{if(i=e.current.alternate,!(r&30)&&!tw(i)&&(t=rl(e,r),t===2&&(s=kd(e),s!==0&&(r=s,t=Jd(e,s))),t===1))throw n=_a,gr(e,0),Sn(e,r),Je(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error($(345));case 2:sr(e,Ue,Gt);break;case 3:if(Sn(e,r),(r&130023424)===r&&(t=wf+500-ge(),10<t)){if(Bo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ed(sr.bind(null,e,Ue,Gt),t);break}sr(e,Ue,Gt);break;case 4:if(Sn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ew(r/1960))-r,10<r){e.timeoutHandle=Ed(sr.bind(null,e,Ue,Gt),r);break}sr(e,Ue,Gt);break;case 5:sr(e,Ue,Gt);break;default:throw Error($(329))}}}return Je(e,ge()),e.callbackNode===n?Hx.bind(null,e):null}function Jd(e,t){var n=ra;return e.current.memoizedState.isDehydrated&&(gr(e,t).flags|=256),e=rl(e,t),e!==2&&(t=Ue,Ue=n,t!==null&&Yd(t)),e}function Yd(e){Ue===null?Ue=e:Ue.push.apply(Ue,e)}function tw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sn(e,t){for(t&=~kf,t&=~Ll,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function bm(e){if(X&6)throw Error($(327));ai();var t=Bo(e,0);if(!(t&1))return Je(e,ge()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=kd(e);r!==0&&(t=r,n=Jd(e,r))}if(n===1)throw n=_a,gr(e,0),Sn(e,t),Je(e,ge()),n;if(n===6)throw Error($(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sr(e,Ue,Gt),Je(e,ge()),null}function jf(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(pi=ge()+500,El&&Gn())}}function jr(e){_n!==null&&_n.tag===0&&!(X&6)&&ai();var t=X;X|=1;var n=gt.transition,r=ee;try{if(gt.transition=null,ee=1,e)return e()}finally{ee=r,gt.transition=n,X=t,!(X&6)&&Gn()}}function Sf(){tt=Jr.current,se(Jr)}function gr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$k(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(rf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ho();break;case 3:hi(),se(We),se(Re),ff();break;case 5:hf(r);break;case 4:hi();break;case 13:se(ue);break;case 19:se(ue);break;case 10:lf(r.type._context);break;case 22:case 23:Sf()}n=n.return}if(Pe=e,be=e=Rn(e.current,null),Ee=tt=t,we=0,_a=null,kf=Ll=wr=0,Ue=ra=null,fr!==null){for(t=0;t<fr.length;t++)if(n=fr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}fr=null}return e}function Kx(e,t){do{var n=be;try{if(of(),jo.current=Zo,Qo){for(var r=he.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qo=!1}if(kr=0,Se=ke=he=null,ta=!1,Sa=0,bf.current=null,n===null||n.return===null){we=1,_a=t,be=null;break}e:{var s=e,o=n.return,c=n,l=t;if(t=Ee,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=c,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=om(o);if(m!==null){m.flags&=-257,lm(m,o,c,s,t),m.mode&1&&sm(s,u,t),t=m,l=u;var x=t.updateQueue;if(x===null){var b=new Set;b.add(l),t.updateQueue=b}else x.add(l);break e}else{if(!(t&1)){sm(s,u,t),Pf();break e}l=Error($(426))}}else if(ce&&c.mode&1){var j=om(o);if(j!==null){!(j.flags&65536)&&(j.flags|=256),lm(j,o,c,s,t),af(fi(l,c));break e}}s=l=fi(l,c),we!==4&&(we=2),ra===null?ra=[s]:ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=Tx(s,l,t);em(s,y);break e;case 1:c=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mn===null||!Mn.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t;var S=Ex(s,c,t);em(s,S);break e}}s=s.return}while(s!==null)}qx(n)}catch(P){t=P,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Gx(){var e=el.current;return el.current=Zo,e===null?Zo:e}function Pf(){(we===0||we===3||we===2)&&(we=4),Pe===null||!(wr&268435455)&&!(Ll&268435455)||Sn(Pe,Ee)}function rl(e,t){var n=X;X|=2;var r=Gx();(Pe!==e||Ee!==t)&&(Gt=null,gr(e,t));do try{nw();break}catch(i){Kx(e,i)}while(!0);if(of(),X=n,el.current=r,be!==null)throw Error($(261));return Pe=null,Ee=0,we}function nw(){for(;be!==null;)Wx(be)}function rw(){for(;be!==null&&!Tb();)Wx(be)}function Wx(e){var t=Yx(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?qx(e):be=t,bf.current=null}function qx(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Yk(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{we=6,be=null;return}}else if(n=Jk(n,t,tt),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);we===0&&(we=5)}function sr(e,t,n){var r=ee,i=gt.transition;try{gt.transition=null,ee=1,iw(e,t,n,r)}finally{gt.transition=i,ee=r}return null}function iw(e,t,n,r){do ai();while(_n!==null);if(X&6)throw Error($(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error($(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Db(e,s),e===Pe&&(be=Pe=null,Ee=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ys||(ys=!0,Xx(Do,function(){return ai(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=gt.transition,gt.transition=null;var o=ee;ee=1;var c=X;X|=4,bf.current=null,Qk(e,n),Vx(n,e),Sk(_d),No=!!Cd,_d=Cd=null,e.current=n,Zk(n),Eb(),X=c,ee=o,gt.transition=s}else e.current=n;if(ys&&(ys=!1,_n=e,nl=i),s=e.pendingLanes,s===0&&(Mn=null),zb(n.stateNode),Je(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(tl)throw tl=!1,e=Wd,Wd=null,e;return nl&1&&e.tag!==0&&ai(),s=e.pendingLanes,s&1?e===qd?ia++:(ia=0,qd=e):ia=0,Gn(),null}function ai(){if(_n!==null){var e=T2(nl),t=gt.transition,n=ee;try{if(gt.transition=null,ee=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,nl=0,X&6)throw Error($(331));var i=X;for(X|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var c=s.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(D=u;D!==null;){var h=D;switch(h.tag){case 0:case 11:case 15:na(8,h,s)}var f=h.child;if(f!==null)f.return=h,D=f;else for(;D!==null;){h=D;var p=h.sibling,m=h.return;if(Bx(h),h===u){D=null;break}if(p!==null){p.return=m,D=p;break}D=m}}}var x=s.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var j=b.sibling;b.sibling=null,b=j}while(b!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:na(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,D=y;break e}D=s.return}}var g=e.current;for(D=g;D!==null;){o=D;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,D=v;else e:for(o=g;D!==null;){if(c=D,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:zl(9,c)}}catch(P){pe(c,c.return,P)}if(c===o){D=null;break e}var S=c.sibling;if(S!==null){S.return=c.return,D=S;break e}D=c.return}}if(X=i,Gn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Sl,e)}catch{}r=!0}return r}finally{ee=n,gt.transition=t}}return!1}function km(e,t,n){t=fi(n,t),t=Tx(e,t,1),e=Ln(e,t,1),t=Be(),e!==null&&(Ha(e,1,t),Je(e,t))}function pe(e,t,n){if(e.tag===3)km(e,e,n);else for(;t!==null;){if(t.tag===3){km(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mn===null||!Mn.has(r))){e=fi(n,e),e=Ex(t,e,1),t=Ln(t,e,1),e=Be(),t!==null&&(Ha(t,1,e),Je(t,e));break}}t=t.return}}function aw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ee&n)===n&&(we===4||we===3&&(Ee&130023424)===Ee&&500>ge()-wf?gr(e,0):kf|=n),Je(e,t)}function Jx(e,t){t===0&&(e.mode&1?(t=cs,cs<<=1,!(cs&130023424)&&(cs=4194304)):t=1);var n=Be();e=nn(e,t),e!==null&&(Ha(e,t,n),Je(e,n))}function sw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Jx(e,n)}function ow(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error($(314))}r!==null&&r.delete(t),Jx(e,n)}var Yx;Yx=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||We.current)Ke=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ke=!1,qk(e,t,n);Ke=!!(e.flags&131072)}else Ke=!1,ce&&t.flags&1048576&&ex(t,Wo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Po(e,t),e=t.pendingProps;var i=ci(t,Re.current);ii(t,n),i=mf(null,t,r,e,i,n);var s=gf();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(r)?(s=!0,Ko(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,uf(t),i.updater=$l,t.stateNode=i,i._reactInternals=t,Rd(t,r,e,n),t=Bd(null,t,r,!0,s,n)):(t.tag=0,ce&&s&&nf(t),De(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=cw(r),e=wt(r,e),i){case 0:t=Dd(null,t,r,e,n);break e;case 1:t=dm(null,t,r,e,n);break e;case 11:t=cm(null,t,r,e,n);break e;case 14:t=um(null,t,r,wt(r.type,e),n);break e}throw Error($(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Dd(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),dm(e,t,r,i,n);case 3:e:{if(Lx(t),e===null)throw Error($(387));r=t.pendingProps,s=t.memoizedState,i=s.element,sx(e,t),Yo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=fi(Error($(423)),t),t=hm(e,t,r,n,i);break e}else if(r!==i){i=fi(Error($(424)),t),t=hm(e,t,r,n,i);break e}else for(nt=zn(t.stateNode.containerInfo.firstChild),rt=t,ce=!0,Pt=null,n=ix(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ui(),r===i){t=rn(e,t,n);break e}De(e,t,r,n)}t=t.child}return t;case 5:return ox(t),e===null&&Ld(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Td(r,i)?o=null:s!==null&&Td(r,s)&&(t.flags|=32),zx(e,t),De(e,t,o,n),t.child;case 6:return e===null&&Ld(t),null;case 13:return Mx(e,t,n);case 4:return df(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=di(t,null,r,n):De(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),cm(e,t,r,i,n);case 7:return De(e,t,t.pendingProps,n),t.child;case 8:return De(e,t,t.pendingProps.children,n),t.child;case 12:return De(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,re(qo,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!We.current){t=rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){o=s.child;for(var l=c.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Xt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Md(s.return,n,t),c.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error($(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Md(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}De(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ii(t,n),i=vt(i),r=r(i),t.flags|=1,De(e,t,r,n),t.child;case 14:return r=t.type,i=wt(r,t.pendingProps),i=wt(r.type,i),um(e,t,r,i,n);case 15:return Ax(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:wt(r,i),Po(e,t),t.tag=1,qe(r)?(e=!0,Ko(t)):e=!1,ii(t,n),_x(t,r,i),Rd(t,r,i,n),Bd(null,t,r,!0,e,n);case 19:return Ix(e,t,n);case 22:return $x(e,t,n)}throw Error($(156,t.tag))};function Xx(e,t){return S2(e,t)}function lw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mt(e,t,n,r){return new lw(e,t,n,r)}function Cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cw(e){if(typeof e=="function")return Cf(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hh)return 11;if(e===Kh)return 14}return 2}function Rn(e,t){var n=e.alternate;return n===null?(n=mt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function To(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Cf(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Br:return xr(n.children,i,s,t);case Uh:o=8,i|=8;break;case sd:return e=mt(12,n,t,i|2),e.elementType=sd,e.lanes=s,e;case od:return e=mt(13,n,t,i),e.elementType=od,e.lanes=s,e;case ld:return e=mt(19,n,t,i),e.elementType=ld,e.lanes=s,e;case o2:return Ml(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case a2:o=10;break e;case s2:o=9;break e;case Hh:o=11;break e;case Kh:o=14;break e;case yn:o=16,r=null;break e}throw Error($(130,e==null?e:typeof e,""))}return t=mt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function xr(e,t,n,r){return e=mt(7,e,r,t),e.lanes=n,e}function Ml(e,t,n,r){return e=mt(22,e,r,t),e.elementType=o2,e.lanes=n,e.stateNode={isHidden:!1},e}function Rc(e,t,n){return e=mt(6,e,null,t),e.lanes=n,e}function Oc(e,t,n){return t=mt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function uw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xc(0),this.expirationTimes=xc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function _f(e,t,n,r,i,s,o,c,l){return e=new uw(e,t,n,c,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=mt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},uf(s),e}function dw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qx(e){if(!e)return Fn;e=e._reactInternals;e:{if(Pr(e)!==e||e.tag!==1)throw Error($(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error($(171))}if(e.tag===1){var n=e.type;if(qe(n))return Q2(e,n,t)}return t}function Zx(e,t,n,r,i,s,o,c,l){return e=_f(n,r,!0,e,i,s,o,c,l),e.context=Qx(null),n=e.current,r=Be(),i=In(n),s=Xt(r,i),s.callback=t??null,Ln(n,s,i),e.current.lanes=i,Ha(e,i,r),Je(e,r),e}function Il(e,t,n,r){var i=t.current,s=Be(),o=In(i);return n=Qx(n),t.context===null?t.context=n:t.pendingContext=n,t=Xt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ln(i,t,o),e!==null&&(_t(e,i,o,s),wo(e,i,o)),o}function il(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Tf(e,t){wm(e,t),(e=e.alternate)&&wm(e,t)}function hw(){return null}var ev=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ef(e){this._internalRoot=e}Rl.prototype.render=Ef.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error($(409));Il(e,t,null,null)};Rl.prototype.unmount=Ef.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){Il(null,e,null,null)}),t[tn]=null}};function Rl(e){this._internalRoot=e}Rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=$2();e={blockedOn:null,target:e,priority:t};for(var n=0;n<jn.length&&t!==0&&t<jn[n].priority;n++);jn.splice(n,0,e),n===0&&L2(e)}};function Af(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jm(){}function fw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=il(o);s.call(u)}}var o=Zx(t,r,e,0,null,!1,!1,"",jm);return e._reactRootContainer=o,e[tn]=o.current,ya(e.nodeType===8?e.parentNode:e),jr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var u=il(l);c.call(u)}}var l=_f(e,0,!1,null,null,!1,!1,"",jm);return e._reactRootContainer=l,e[tn]=l.current,ya(e.nodeType===8?e.parentNode:e),jr(function(){Il(t,l,n,r)}),l}function Dl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var c=i;i=function(){var l=il(o);c.call(l)}}Il(t,o,e,i)}else o=fw(n,t,e,i,r);return il(o)}E2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gi(t.pendingLanes);n!==0&&(qh(t,n|1),Je(t,ge()),!(X&6)&&(pi=ge()+500,Gn()))}break;case 13:jr(function(){var r=nn(e,1);if(r!==null){var i=Be();_t(r,e,1,i)}}),Tf(e,1)}};Jh=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=Be();_t(t,e,134217728,n)}Tf(e,134217728)}};A2=function(e){if(e.tag===13){var t=In(e),n=nn(e,t);if(n!==null){var r=Be();_t(n,e,t,r)}Tf(e,t)}};$2=function(){return ee};z2=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};vd=function(e,t,n){switch(t){case"input":if(dd(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Tl(r);if(!i)throw Error($(90));c2(r),dd(r,i)}}}break;case"textarea":d2(e,n);break;case"select":t=n.value,t!=null&&ei(e,!!n.multiple,t,!1)}};v2=jf;y2=jr;var pw={usingClientEntryPoint:!1,Events:[Ga,Ur,Tl,g2,x2,jf]},Oi={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mw={bundleType:Oi.bundleType,version:Oi.version,rendererPackageName:Oi.rendererPackageName,rendererConfig:Oi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=w2(e),e===null?null:e.stateNode},findFiberByHostInstance:Oi.findFiberByHostInstance||hw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{Sl=bs.inject(mw),Ft=bs}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pw;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Af(t))throw Error($(200));return dw(e,t,null,n)};ot.createRoot=function(e,t){if(!Af(e))throw Error($(299));var n=!1,r="",i=ev;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=_f(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,ya(e.nodeType===8?e.parentNode:e),new Ef(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error($(188)):(e=Object.keys(e).join(","),Error($(268,e)));return e=w2(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return jr(e)};ot.hydrate=function(e,t,n){if(!Ol(t))throw Error($(200));return Dl(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!Af(e))throw Error($(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ev;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Zx(t,null,e,1,n??null,i,!1,s,o),e[tn]=t.current,ya(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Rl(t)};ot.render=function(e,t,n){if(!Ol(t))throw Error($(200));return Dl(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!Ol(e))throw Error($(40));return e._reactRootContainer?(jr(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};ot.unstable_batchedUpdates=jf;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ol(n))throw Error($(200));if(e==null||e._reactInternals===void 0)throw Error($(38));return Dl(e,t,n,!1,r)};ot.version="18.3.1-next-f1338f8080-20240426";function tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tv)}catch(e){console.error(e)}}tv(),t2.exports=ot;var gw=t2.exports,Sm=gw;id.createRoot=Sm.createRoot,id.hydrateRoot=Sm.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ta.apply(this,arguments)}var Tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tn||(Tn={}));const Pm="popstate";function xw(e){e===void 0&&(e={});function t(i,s){let{pathname:o="/",search:c="",hash:l=""}=Cr(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Xd("",{pathname:o,search:c,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),c="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");c=u===-1?l:l.slice(0,u)}return c+"#"+(typeof s=="string"?s:al(s))}function r(i,s){$f(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return yw(t,n,r,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function $f(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function vw(){return Math.random().toString(36).substr(2,8)}function Cm(e,t){return{usr:e.state,key:e.key,idx:t}}function Xd(e,t,n,r){return n===void 0&&(n=null),Ta({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Cr(t):t,{state:n,key:t&&t.key||r||vw()})}function al(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Cr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function yw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,c=Tn.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(Ta({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function f(){c=Tn.Pop;let j=h(),y=j==null?null:j-u;u=j,l&&l({action:c,location:b.location,delta:y})}function p(j,y){c=Tn.Push;let g=Xd(b.location,j,y);n&&n(g,j),u=h()+1;let v=Cm(g,u),S=b.createHref(g);try{o.pushState(v,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;i.location.assign(S)}s&&l&&l({action:c,location:b.location,delta:1})}function m(j,y){c=Tn.Replace;let g=Xd(b.location,j,y);n&&n(g,j),u=h();let v=Cm(g,u),S=b.createHref(g);o.replaceState(v,"",S),s&&l&&l({action:c,location:b.location,delta:0})}function x(j){let y=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof j=="string"?j:al(j);return g=g.replace(/ $/,"%20"),me(y,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,y)}let b={get action(){return c},get location(){return e(i,o)},listen(j){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pm,f),l=j,()=>{i.removeEventListener(Pm,f),l=null}},createHref(j){return t(i,j)},createURL:x,encodeLocation(j){let y=x(j);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:p,replace:m,go(j){return o.go(j)}};return b}var _m;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(_m||(_m={}));function bw(e,t,n){return n===void 0&&(n="/"),kw(e,t,n,!1)}function kw(e,t,n,r){let i=typeof t=="string"?Cr(t):t,s=mi(i.pathname||"/",n);if(s==null)return null;let o=nv(e);ww(o);let c=null;for(let l=0;c==null&&l<o.length;++l){let u=Lw(s);c=$w(o[l],u,r)}return c}function nv(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,c)=>{let l={relativePath:c===void 0?s.path||"":c,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=On([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(me(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nv(s.children,t,h,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Ew(u,s.index),routesMeta:h})};return e.forEach((s,o)=>{var c;if(s.path===""||!((c=s.path)!=null&&c.includes("?")))i(s,o);else for(let l of rv(s.path))i(s,o,l)}),t}function rv(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rv(r.join("/")),c=[];return c.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&c.push(...o),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function ww(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Aw(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jw=/^:[\w-]+$/,Sw=3,Pw=2,Cw=1,_w=10,Tw=-2,Tm=e=>e==="*";function Ew(e,t){let n=e.split("/"),r=n.length;return n.some(Tm)&&(r+=Tw),t&&(r+=Pw),n.filter(i=>!Tm(i)).reduce((i,s)=>i+(jw.test(s)?Sw:s===""?Cw:_w),r)}function Aw(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function $w(e,t,n){let{routesMeta:r}=e,i={},s="/",o=[];for(let c=0;c<r.length;++c){let l=r[c],u=c===r.length-1,h=s==="/"?t:t.slice(s.length)||"/",f=sl({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),p=l.route;if(!f&&u&&n&&!r[r.length-1].route.index&&(f=sl({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:On([s,f.pathname]),pathnameBase:Ow(On([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=On([s,f.pathnameBase]))}return o}function sl(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=zw(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((u,h,f)=>{let{paramName:p,isOptional:m}=h;if(p==="*"){let b=c[f]||"";o=s.slice(0,s.length-b.length).replace(/(.)\/+$/,"$1")}const x=c[f];return m&&!x?u[p]=void 0:u[p]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:e}}function zw(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),$f(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Lw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return $f(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function mi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Mw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Cr(e):e;return{pathname:n?n.startsWith("/")?n:Iw(n,t):t,search:Dw(r),hash:Bw(i)}}function Iw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Dc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Rw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function iv(e,t){let n=Rw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function av(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Cr(e):(i=Ta({},e),me(!i.pathname||!i.pathname.includes("?"),Dc("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),Dc("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),Dc("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,c;if(o==null)c=n;else{let f=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}c=f>=0?t[f]:"/"}let l=Mw(i,c),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const On=e=>e.join("/").replace(/\/\/+/g,"/"),Ow=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Dw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Nw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sv=["post","put","patch","delete"];new Set(sv);const Fw=["get",...sv];new Set(Fw);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ea(){return Ea=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ea.apply(this,arguments)}const Bl=k.createContext(null),ov=k.createContext(null),Wn=k.createContext(null),Nl=k.createContext(null),on=k.createContext({outlet:null,matches:[],isDataRoute:!1}),lv=k.createContext(null);function Vw(e,t){let{relative:n}=t===void 0?{}:t;qa()||me(!1);let{basename:r,navigator:i}=k.useContext(Wn),{hash:s,pathname:o,search:c}=Fl(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:On([r,o])),i.createHref({pathname:l,search:c,hash:s})}function qa(){return k.useContext(Nl)!=null}function Pi(){return qa()||me(!1),k.useContext(Nl).location}function cv(e){k.useContext(Wn).static||k.useLayoutEffect(e)}function G(){let{isDataRoute:e}=k.useContext(on);return e?i4():Uw()}function Uw(){qa()||me(!1);let e=k.useContext(Bl),{basename:t,future:n,navigator:r}=k.useContext(Wn),{matches:i}=k.useContext(on),{pathname:s}=Pi(),o=JSON.stringify(iv(i,n.v7_relativeSplatPath)),c=k.useRef(!1);return cv(()=>{c.current=!0}),k.useCallback(function(u,h){if(h===void 0&&(h={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let f=av(u,JSON.parse(o),s,h.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:On([t,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[t,r,o,s,e])}const Hw=k.createContext(null);function Kw(e){let t=k.useContext(on).outlet;return t&&k.createElement(Hw.Provider,{value:e},t)}function Gw(){let{matches:e}=k.useContext(on),t=e[e.length-1];return t?t.params:{}}function Fl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Wn),{matches:i}=k.useContext(on),{pathname:s}=Pi(),o=JSON.stringify(iv(i,r.v7_relativeSplatPath));return k.useMemo(()=>av(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function Ww(e,t){return qw(e,t)}function qw(e,t,n,r){qa()||me(!1);let{navigator:i}=k.useContext(Wn),{matches:s}=k.useContext(on),o=s[s.length-1],c=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Pi(),h;if(t){var f;let j=typeof t=="string"?Cr(t):t;l==="/"||(f=j.pathname)!=null&&f.startsWith(l)||me(!1),h=j}else h=u;let p=h.pathname||"/",m=p;if(l!=="/"){let j=l.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(j.length).join("/")}let x=bw(e,{pathname:m}),b=Zw(x&&x.map(j=>Object.assign({},j,{params:Object.assign({},c,j.params),pathname:On([l,i.encodeLocation?i.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?l:On([l,i.encodeLocation?i.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),s,n,r);return t&&b?k.createElement(Nl.Provider,{value:{location:Ea({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Tn.Pop}},b):b}function Jw(){let e=r4(),t=Nw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const Yw=k.createElement(Jw,null);class Xw extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(on.Provider,{value:this.props.routeContext},k.createElement(lv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qw(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext(Bl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(on.Provider,{value:t},r)}function Zw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let h=o.findIndex(f=>f.route.id&&(c==null?void 0:c[f.route.id])!==void 0);h>=0||me(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=h),f.route.id){let{loaderData:p,errors:m}=n,x=f.route.loader&&p[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||x){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((h,f,p)=>{let m,x=!1,b=null,j=null;n&&(m=c&&f.route.id?c[f.route.id]:void 0,b=f.route.errorElement||Yw,l&&(u<0&&p===0?(x=!0,j=null):u===p&&(x=!0,j=f.route.hydrateFallbackElement||null)));let y=t.concat(o.slice(0,p+1)),g=()=>{let v;return m?v=b:x?v=j:f.route.Component?v=k.createElement(f.route.Component,null):f.route.element?v=f.route.element:v=h,k.createElement(Qw,{match:f,routeContext:{outlet:h,matches:y,isDataRoute:n!=null},children:v})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?k.createElement(Xw,{location:n.location,revalidation:n.revalidation,component:b,error:m,children:g(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):g()},null)}var uv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(uv||{}),ol=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ol||{});function e4(e){let t=k.useContext(Bl);return t||me(!1),t}function t4(e){let t=k.useContext(ov);return t||me(!1),t}function n4(e){let t=k.useContext(on);return t||me(!1),t}function dv(e){let t=n4(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function r4(){var e;let t=k.useContext(lv),n=t4(ol.UseRouteError),r=dv(ol.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function i4(){let{router:e}=e4(uv.UseNavigateStable),t=dv(ol.UseNavigateStable),n=k.useRef(!1);return cv(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ea({fromRouteId:t},s)))},[e,t])}const Em={};function a4(e,t){Em[t]||(Em[t]=!0,console.warn(t))}const Am=(e,t,n)=>a4(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function s4(e,t){e!=null&&e.v7_startTransition||Am("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&!t&&Am("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function zf(e){return Kw(e.context)}function H(e){me(!1)}function o4(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Tn.Pop,navigator:s,static:o=!1,future:c}=e;qa()&&me(!1);let l=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:l,navigator:s,static:o,future:Ea({v7_relativeSplatPath:!1},c)}),[l,c,s,o]);typeof r=="string"&&(r=Cr(r));let{pathname:h="/",search:f="",hash:p="",state:m=null,key:x="default"}=r,b=k.useMemo(()=>{let j=mi(h,l);return j==null?null:{location:{pathname:j,search:f,hash:p,state:m,key:x},navigationType:i}},[l,h,f,p,m,x,i]);return b==null?null:k.createElement(Wn.Provider,{value:u},k.createElement(Nl.Provider,{children:n,value:b}))}function l4(e){let{children:t,location:n}=e;return Ww(Qd(t),n)}new Promise(()=>{});function Qd(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let s=[...t,i];if(r.type===k.Fragment){n.push.apply(n,Qd(r.props.children,s));return}r.type!==H&&me(!1),!r.props.index||!r.props.children||me(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ll(){return ll=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ll.apply(this,arguments)}function hv(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function c4(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function u4(e,t){return e.button===0&&(!t||t==="_self")&&!c4(e)}const d4=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],h4=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],f4="6";try{window.__reactRouterVersion=f4}catch{}const p4=k.createContext({isTransitioning:!1}),m4="startTransition",$m=rd[m4];function g4(e){let{basename:t,children:n,future:r,window:i}=e,s=k.useRef();s.current==null&&(s.current=xw({window:i,v5Compat:!0}));let o=s.current,[c,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},h=k.useCallback(f=>{u&&$m?$m(()=>l(f)):l(f)},[l,u]);return k.useLayoutEffect(()=>o.listen(h),[o,h]),k.useEffect(()=>s4(r),[r]),k.createElement(o4,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:o,future:r})}const x4=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",v4=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ci=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:c,target:l,to:u,preventScrollReset:h,viewTransition:f}=t,p=hv(t,d4),{basename:m}=k.useContext(Wn),x,b=!1;if(typeof u=="string"&&v4.test(u)&&(x=u,x4))try{let v=new URL(window.location.href),S=u.startsWith("//")?new URL(v.protocol+u):new URL(u),P=mi(S.pathname,m);S.origin===v.origin&&P!=null?u=P+S.search+S.hash:b=!0}catch{}let j=Vw(u,{relative:i}),y=k4(u,{replace:o,state:c,target:l,preventScrollReset:h,relative:i,viewTransition:f});function g(v){r&&r(v),v.defaultPrevented||y(v)}return k.createElement("a",ll({},p,{href:x||j,onClick:b||s?r:g,ref:n,target:l}))}),y4=k.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:c,to:l,viewTransition:u,children:h}=t,f=hv(t,h4),p=Fl(l,{relative:f.relative}),m=Pi(),x=k.useContext(ov),{navigator:b,basename:j}=k.useContext(Wn),y=x!=null&&w4(p)&&u===!0,g=b.encodeLocation?b.encodeLocation(p).pathname:p.pathname,v=m.pathname,S=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(v=v.toLowerCase(),S=S?S.toLowerCase():null,g=g.toLowerCase()),S&&j&&(S=mi(S,j)||S);const P=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let T=v===g||!o&&v.startsWith(g)&&v.charAt(P)==="/",w=S!=null&&(S===g||!o&&S.startsWith(g)&&S.charAt(g.length)==="/"),C={isActive:T,isPending:w,isTransitioning:y},_=T?r:void 0,A;typeof s=="function"?A=s(C):A=[s,T?"active":null,w?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let L=typeof c=="function"?c(C):c;return k.createElement(Ci,ll({},f,{"aria-current":_,className:A,ref:n,style:L,to:l,viewTransition:u}),typeof h=="function"?h(C):h)});var Zd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Zd||(Zd={}));var zm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zm||(zm={}));function b4(e){let t=k.useContext(Bl);return t||me(!1),t}function k4(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:c}=t===void 0?{}:t,l=G(),u=Pi(),h=Fl(e,{relative:o});return k.useCallback(f=>{if(u4(f,n)){f.preventDefault();let p=r!==void 0?r:al(u)===al(h);l(e,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:c})}},[u,l,h,r,i,n,e,s,o,c])}function w4(e,t){t===void 0&&(t={});let n=k.useContext(p4);n==null&&me(!1);let{basename:r}=b4(Zd.useViewTransitionState),i=Fl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=mi(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=mi(n.nextLocation.pathname,r)||n.nextLocation.pathname;return sl(i.pathname,o)!=null||sl(i.pathname,s)!=null}function eh(){return eh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},eh.apply(null,arguments)}function fv(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var j4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,S4=fv(function(e){return j4.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),P4=!1;function C4(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function _4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var T4=function(){function e(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!P4:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(_4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=C4(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var i;return(i=r.parentNode)==null?void 0:i.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Le="-ms-",cl="-moz-",Q="-webkit-",pv="comm",Lf="rule",Mf="decl",E4="@import",mv="@keyframes",A4="@layer",$4=Math.abs,Vl=String.fromCharCode,z4=Object.assign;function L4(e,t){return Te(e,0)^45?(((t<<2^Te(e,0))<<2^Te(e,1))<<2^Te(e,2))<<2^Te(e,3):0}function gv(e){return e.trim()}function M4(e,t){return(e=t.exec(e))?e[0]:e}function Z(e,t,n){return e.replace(t,n)}function th(e,t){return e.indexOf(t)}function Te(e,t){return e.charCodeAt(t)|0}function Aa(e,t,n){return e.slice(t,n)}function Dt(e){return e.length}function If(e){return e.length}function ks(e,t){return t.push(e),e}function I4(e,t){return e.map(t).join("")}var Ul=1,gi=1,xv=0,Ye=0,ye=0,_i="";function Hl(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ul,column:gi,length:o,return:""}}function Di(e,t){return z4(Hl("",null,null,"",null,null,0),e,{length:-e.length},t)}function R4(){return ye}function O4(){return ye=Ye>0?Te(_i,--Ye):0,gi--,ye===10&&(gi=1,Ul--),ye}function it(){return ye=Ye<xv?Te(_i,Ye++):0,gi++,ye===10&&(gi=1,Ul++),ye}function Ut(){return Te(_i,Ye)}function Eo(){return Ye}function Ja(e,t){return Aa(_i,e,t)}function $a(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function vv(e){return Ul=gi=1,xv=Dt(_i=e),Ye=0,[]}function yv(e){return _i="",e}function Ao(e){return gv(Ja(Ye-1,nh(e===91?e+2:e===40?e+1:e)))}function D4(e){for(;(ye=Ut())&&ye<33;)it();return $a(e)>2||$a(ye)>3?"":" "}function B4(e,t){for(;--t&&it()&&!(ye<48||ye>102||ye>57&&ye<65||ye>70&&ye<97););return Ja(e,Eo()+(t<6&&Ut()==32&&it()==32))}function nh(e){for(;it();)switch(ye){case e:return Ye;case 34:case 39:e!==34&&e!==39&&nh(ye);break;case 40:e===41&&nh(e);break;case 92:it();break}return Ye}function N4(e,t){for(;it()&&e+ye!==57;)if(e+ye===84&&Ut()===47)break;return"/*"+Ja(t,Ye-1)+"*"+Vl(e===47?e:it())}function F4(e){for(;!$a(Ut());)it();return Ja(e,Ye)}function V4(e){return yv($o("",null,null,null,[""],e=vv(e),0,[0],e))}function $o(e,t,n,r,i,s,o,c,l){for(var u=0,h=0,f=o,p=0,m=0,x=0,b=1,j=1,y=1,g=0,v="",S=i,P=s,T=r,w=v;j;)switch(x=g,g=it()){case 40:if(x!=108&&Te(w,f-1)==58){th(w+=Z(Ao(g),"&","&\f"),"&\f")!=-1&&(y=-1);break}case 34:case 39:case 91:w+=Ao(g);break;case 9:case 10:case 13:case 32:w+=D4(x);break;case 92:w+=B4(Eo()-1,7);continue;case 47:switch(Ut()){case 42:case 47:ks(U4(N4(it(),Eo()),t,n),l);break;default:w+="/"}break;case 123*b:c[u++]=Dt(w)*y;case 125*b:case 59:case 0:switch(g){case 0:case 125:j=0;case 59+h:y==-1&&(w=Z(w,/\f/g,"")),m>0&&Dt(w)-f&&ks(m>32?Mm(w+";",r,n,f-1):Mm(Z(w," ","")+";",r,n,f-2),l);break;case 59:w+=";";default:if(ks(T=Lm(w,t,n,u,h,i,c,v,S=[],P=[],f),s),g===123)if(h===0)$o(w,t,T,T,S,s,f,c,P);else switch(p===99&&Te(w,3)===110?100:p){case 100:case 108:case 109:case 115:$o(e,T,T,r&&ks(Lm(e,T,T,0,0,i,c,v,i,S=[],f),P),i,P,f,c,r?S:P);break;default:$o(w,T,T,T,[""],P,0,c,P)}}u=h=m=0,b=y=1,v=w="",f=o;break;case 58:f=1+Dt(w),m=x;default:if(b<1){if(g==123)--b;else if(g==125&&b++==0&&O4()==125)continue}switch(w+=Vl(g),g*b){case 38:y=h>0?1:(w+="\f",-1);break;case 44:c[u++]=(Dt(w)-1)*y,y=1;break;case 64:Ut()===45&&(w+=Ao(it())),p=Ut(),h=f=Dt(v=w+=F4(Eo())),g++;break;case 45:x===45&&Dt(w)==2&&(b=0)}}return s}function Lm(e,t,n,r,i,s,o,c,l,u,h){for(var f=i-1,p=i===0?s:[""],m=If(p),x=0,b=0,j=0;x<r;++x)for(var y=0,g=Aa(e,f+1,f=$4(b=o[x])),v=e;y<m;++y)(v=gv(b>0?p[y]+" "+g:Z(g,/&\f/g,p[y])))&&(l[j++]=v);return Hl(e,t,n,i===0?Lf:c,l,u,h)}function U4(e,t,n){return Hl(e,t,n,pv,Vl(R4()),Aa(e,2,-2),0)}function Mm(e,t,n,r){return Hl(e,t,n,Mf,Aa(e,0,r),Aa(e,r+1,-1),r)}function si(e,t){for(var n="",r=If(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function H4(e,t,n,r){switch(e.type){case A4:if(e.children.length)break;case E4:case Mf:return e.return=e.return||e.value;case pv:return"";case mv:return e.return=e.value+"{"+si(e.children,r)+"}";case Lf:e.value=e.props.join(",")}return Dt(n=si(e.children,r))?e.return=e.value+"{"+n+"}":""}function K4(e){var t=If(e);return function(n,r,i,s){for(var o="",c=0;c<t;c++)o+=e[c](n,r,i,s)||"";return o}}function G4(e){return function(t){t.root||(t=t.return)&&e(t)}}var W4=function(t,n,r){for(var i=0,s=0;i=s,s=Ut(),i===38&&s===12&&(n[r]=1),!$a(s);)it();return Ja(t,Ye)},q4=function(t,n){var r=-1,i=44;do switch($a(i)){case 0:i===38&&Ut()===12&&(n[r]=1),t[r]+=W4(Ye-1,n,r);break;case 2:t[r]+=Ao(i);break;case 4:if(i===44){t[++r]=Ut()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=Vl(i)}while(i=it());return t},J4=function(t,n){return yv(q4(vv(t),n))},Im=new WeakMap,Y4=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Im.get(r))&&!i){Im.set(t,!0);for(var s=[],o=J4(n,s),c=r.props,l=0,u=0;l<o.length;l++)for(var h=0;h<c.length;h++,u++)t.props[u]=s[l]?o[l].replace(/&\f/g,c[h]):c[h]+" "+o[l]}}},X4=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function bv(e,t){switch(L4(e,t)){case 5103:return Q+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Q+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Q+e+cl+e+Le+e+e;case 6828:case 4268:return Q+e+Le+e+e;case 6165:return Q+e+Le+"flex-"+e+e;case 5187:return Q+e+Z(e,/(\w+).+(:[^]+)/,Q+"box-$1$2"+Le+"flex-$1$2")+e;case 5443:return Q+e+Le+"flex-item-"+Z(e,/flex-|-self/,"")+e;case 4675:return Q+e+Le+"flex-line-pack"+Z(e,/align-content|flex-|-self/,"")+e;case 5548:return Q+e+Le+Z(e,"shrink","negative")+e;case 5292:return Q+e+Le+Z(e,"basis","preferred-size")+e;case 6060:return Q+"box-"+Z(e,"-grow","")+Q+e+Le+Z(e,"grow","positive")+e;case 4554:return Q+Z(e,/([^-])(transform)/g,"$1"+Q+"$2")+e;case 6187:return Z(Z(Z(e,/(zoom-|grab)/,Q+"$1"),/(image-set)/,Q+"$1"),e,"")+e;case 5495:case 3959:return Z(e,/(image-set\([^]*)/,Q+"$1$`$1");case 4968:return Z(Z(e,/(.+:)(flex-)?(.*)/,Q+"box-pack:$3"+Le+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Q+e+e;case 4095:case 3583:case 4068:case 2532:return Z(e,/(.+)-inline(.+)/,Q+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dt(e)-1-t>6)switch(Te(e,t+1)){case 109:if(Te(e,t+4)!==45)break;case 102:return Z(e,/(.+:)(.+)-([^]+)/,"$1"+Q+"$2-$3$1"+cl+(Te(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~th(e,"stretch")?bv(Z(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(Te(e,t+1)!==115)break;case 6444:switch(Te(e,Dt(e)-3-(~th(e,"!important")&&10))){case 107:return Z(e,":",":"+Q)+e;case 101:return Z(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Q+(Te(e,14)===45?"inline-":"")+"box$3$1"+Q+"$2$3$1"+Le+"$2box$3")+e}break;case 5936:switch(Te(e,t+11)){case 114:return Q+e+Le+Z(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Q+e+Le+Z(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Q+e+Le+Z(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Q+e+Le+e+e}return e}var Q4=function(t,n,r,i){if(t.length>-1&&!t.return)switch(t.type){case Mf:t.return=bv(t.value,t.length);break;case mv:return si([Di(t,{value:Z(t.value,"@","@"+Q)})],i);case Lf:if(t.length)return I4(t.props,function(s){switch(M4(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return si([Di(t,{props:[Z(s,/:(read-\w+)/,":"+cl+"$1")]})],i);case"::placeholder":return si([Di(t,{props:[Z(s,/:(plac\w+)/,":"+Q+"input-$1")]}),Di(t,{props:[Z(s,/:(plac\w+)/,":"+cl+"$1")]}),Di(t,{props:[Z(s,/:(plac\w+)/,Le+"input-$1")]})],i)}return""})}},Z4=[Q4],ej=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(b){var j=b.getAttribute("data-emotion");j.indexOf(" ")!==-1&&(document.head.appendChild(b),b.setAttribute("data-s",""))})}var i=t.stylisPlugins||Z4,s={},o,c=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(b){for(var j=b.getAttribute("data-emotion").split(" "),y=1;y<j.length;y++)s[j[y]]=!0;c.push(b)});var l,u=[Y4,X4];{var h,f=[H4,G4(function(b){h.insert(b)})],p=K4(u.concat(i,f)),m=function(j){return si(V4(j),p)};l=function(j,y,g,v){h=g,m(j?j+"{"+y.styles+"}":y.styles),v&&(x.inserted[y.name]=!0)}}var x={key:n,sheet:new T4({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:l};return x.sheet.hydrate(c),x},tj=!0;function nj(e,t,n){var r="";return n.split(" ").forEach(function(i){e[i]!==void 0?t.push(e[i]+";"):i&&(r+=i+" ")}),r}var kv=function(t,n,r){var i=t.key+"-"+n.name;(r===!1||tj===!1)&&t.registered[i]===void 0&&(t.registered[i]=n.styles)},rj=function(t,n,r){kv(t,n,r);var i=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var s=n;do t.insert(n===s?"."+i:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function ij(e){for(var t=0,n,r=0,i=e.length;i>=4;++r,i-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(i){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var aj={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},sj=!1,oj=/[A-Z]|^ms/g,lj=/_EMO_([^_]+?)_([^]*?)_EMO_/g,wv=function(t){return t.charCodeAt(1)===45},Rm=function(t){return t!=null&&typeof t!="boolean"},Bc=fv(function(e){return wv(e)?e:e.replace(oj,"-$&").toLowerCase()}),Om=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(lj,function(r,i,s){return Bt={name:i,styles:s,next:Bt},i})}return aj[t]!==1&&!wv(t)&&typeof n=="number"&&n!==0?n+"px":n},cj="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function za(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var i=n;if(i.anim===1)return Bt={name:i.name,styles:i.styles,next:Bt},i.name;var s=n;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)Bt={name:o.name,styles:o.styles,next:Bt},o=o.next;var c=s.styles+";";return c}return uj(e,t,n)}case"function":{if(e!==void 0){var l=Bt,u=n(e);return Bt=l,za(e,t,u)}break}}var h=n;if(t==null)return h;var f=t[h];return f!==void 0?f:h}function uj(e,t,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=za(e,t,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object"){var c=o;t!=null&&t[c]!==void 0?r+=s+"{"+t[c]+"}":Rm(c)&&(r+=Bc(s)+":"+Om(s,c)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&sj)throw new Error(cj);if(Array.isArray(o)&&typeof o[0]=="string"&&(t==null||t[o[0]]===void 0))for(var l=0;l<o.length;l++)Rm(o[l])&&(r+=Bc(s)+":"+Om(s,o[l])+";");else{var u=za(e,t,o);switch(s){case"animation":case"animationName":{r+=Bc(s)+":"+u+";";break}default:r+=s+"{"+u+"}"}}}}return r}var Dm=/label:\s*([^\s;{]+)\s*(;|$)/g,Bt;function dj(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,i="";Bt=void 0;var s=e[0];if(s==null||s.raw===void 0)r=!1,i+=za(n,t,s);else{var o=s;i+=o[0]}for(var c=1;c<e.length;c++)if(i+=za(n,t,e[c]),r){var l=s;i+=l[c]}Dm.lastIndex=0;for(var u="",h;(h=Dm.exec(i))!==null;)u+="-"+h[1];var f=ij(i)+u;return{name:f,styles:i,next:Bt}}var hj=function(t){return t()},fj=rd.useInsertionEffect?rd.useInsertionEffect:!1,pj=fj||hj,jv=k.createContext(typeof HTMLElement<"u"?ej({key:"css"}):null);jv.Provider;var mj=function(t){return k.forwardRef(function(n,r){var i=k.useContext(jv);return t(n,i,r)})},gj=k.createContext({}),xj=S4,vj=function(t){return t!=="theme"},Bm=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?xj:vj},Nm=function(t,n,r){var i;if(n){var s=n.shouldForwardProp;i=t.__emotion_forwardProp&&s?function(o){return t.__emotion_forwardProp(o)&&s(o)}:s}return typeof i!="function"&&r&&(i=t.__emotion_forwardProp),i},yj=!1,bj=function(t){var n=t.cache,r=t.serialized,i=t.isStringTag;return kv(n,r,i),pj(function(){return rj(n,r,i)}),null},kj=function e(t,n){var r=t.__emotion_real===t,i=r&&t.__emotion_base||t,s,o;n!==void 0&&(s=n.label,o=n.target);var c=Nm(t,n,r),l=c||Bm(i),u=!l("as");return function(){var h=arguments,f=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(s!==void 0&&f.push("label:"+s+";"),h[0]==null||h[0].raw===void 0)f.push.apply(f,h);else{f.push(h[0][0]);for(var p=h.length,m=1;m<p;m++)f.push(h[m],h[0][m])}var x=mj(function(b,j,y){var g=u&&b.as||i,v="",S=[],P=b;if(b.theme==null){P={};for(var T in b)P[T]=b[T];P.theme=k.useContext(gj)}typeof b.className=="string"?v=nj(j.registered,S,b.className):b.className!=null&&(v=b.className+" ");var w=dj(f.concat(S),j.registered,P);v+=j.key+"-"+w.name,o!==void 0&&(v+=" "+o);var C=u&&c===void 0?Bm(g):l,_={};for(var A in b)u&&A==="as"||C(A)&&(_[A]=b[A]);return _.className=v,y&&(_.ref=y),k.createElement(k.Fragment,null,k.createElement(bj,{cache:j,serialized:w,isStringTag:typeof g=="string"}),k.createElement(g,_))});return x.displayName=s!==void 0?s:"Styled("+(typeof i=="string"?i:i.displayName||i.name||"Component")+")",x.defaultProps=t.defaultProps,x.__emotion_real=x,x.__emotion_base=i,x.__emotion_styles=f,x.__emotion_forwardProp=c,Object.defineProperty(x,"toString",{value:function(){return o===void 0&&yj?"NO_COMPONENT_SELECTOR":"."+o}}),x.withComponent=function(b,j){return e(b,eh({},n,j,{shouldForwardProp:Nm(x,j,!0)})).apply(void 0,f)},x}},wj=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],d=kj.bind();wj.forEach(function(e){d[e]=d(e)});const Sv=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Kl=k.createContext({}),Gl=k.createContext(null),Wl=typeof document<"u",Rf=Wl?k.useLayoutEffect:k.useEffect,Pv=k.createContext({strict:!1}),Of=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),jj="framerAppearId",Cv="data-"+Of(jj);function Sj(e,t,n,r){const{visualElement:i}=k.useContext(Kl),s=k.useContext(Pv),o=k.useContext(Gl),c=k.useContext(Sv).reducedMotion,l=k.useRef();r=r||s.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:i,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:c}));const u=l.current;k.useInsertionEffect(()=>{u&&u.update(n,o)});const h=k.useRef(!!(n[Cv]&&!window.HandoffComplete));return Rf(()=>{u&&(u.render(),h.current&&u.animationState&&u.animationState.animateChanges())}),k.useEffect(()=>{u&&(u.updateFeatures(),!h.current&&u.animationState&&u.animationState.animateChanges(),h.current&&(h.current=!1,window.HandoffComplete=!0))}),u}function Yr(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Pj(e,t,n){return k.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):Yr(n)&&(n.current=r))},[t])}function La(e){return typeof e=="string"||Array.isArray(e)}function ql(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Df=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Bf=["initial",...Df];function Jl(e){return ql(e.animate)||Bf.some(t=>La(e[t]))}function _v(e){return!!(Jl(e)||e.variants)}function Cj(e,t){if(Jl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||La(n)?n:void 0,animate:La(r)?r:void 0}}return e.inherit!==!1?t:{}}function _j(e){const{initial:t,animate:n}=Cj(e,k.useContext(Kl));return k.useMemo(()=>({initial:t,animate:n}),[Fm(t),Fm(n)])}function Fm(e){return Array.isArray(e)?e.join(" "):e}const Vm={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ma={};for(const e in Vm)Ma[e]={isEnabled:t=>Vm[e].some(n=>!!t[n])};function Tj(e){for(const t in e)Ma[t]={...Ma[t],...e[t]}}const Nf=k.createContext({}),Tv=k.createContext({}),Ej=Symbol.for("motionComponentSymbol");function Aj({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){e&&Tj(e);function s(c,l){let u;const h={...k.useContext(Sv),...c,layoutId:$j(c)},{isStatic:f}=h,p=_j(c),m=r(c,f);if(!f&&Wl){p.visualElement=Sj(i,m,h,t);const x=k.useContext(Tv),b=k.useContext(Pv).strict;p.visualElement&&(u=p.visualElement.loadFeatures(h,b,e,x))}return k.createElement(Kl.Provider,{value:p},u&&p.visualElement?k.createElement(u,{visualElement:p.visualElement,...h}):null,n(i,c,Pj(m,p.visualElement,l),m,f,p.visualElement))}const o=k.forwardRef(s);return o[Ej]=i,o}function $j({layoutId:e}){const t=k.useContext(Nf).id;return t&&e!==void 0?t+"-"+e:e}function zj(e){function t(r,i={}){return Aj(e(r,i))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,i)=>(n.has(i)||n.set(i,t(i)),n.get(i))})}const Lj=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Ff(e){return typeof e!="string"||e.includes("-")?!1:!!(Lj.indexOf(e)>-1||/[A-Z]/.test(e))}const ul={};function Mj(e){Object.assign(ul,e)}const Ya=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_r=new Set(Ya);function Ev(e,{layout:t,layoutId:n}){return _r.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!ul[e]||e==="opacity")}const Xe=e=>!!(e&&e.getVelocity),Ij={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Rj=Ya.length;function Oj(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},r,i){let s="";for(let o=0;o<Rj;o++){const c=Ya[o];if(e[c]!==void 0){const l=Ij[c]||c;s+=`${l}(${e[c]}) `}}return t&&!e.z&&(s+="translateZ(0)"),s=s.trim(),i?s=i(e,r?"":s):n&&r&&(s="none"),s}const Av=e=>t=>typeof t=="string"&&t.startsWith(e),$v=Av("--"),rh=Av("var(--"),Dj=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Bj=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Vn=(e,t,n)=>Math.min(Math.max(n,e),t),Tr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},aa={...Tr,transform:e=>Vn(0,1,e)},ws={...Tr,default:1},sa=e=>Math.round(e*1e5)/1e5,Yl=/(-)?([\d]*\.?[\d])+/g,zv=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Nj=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Xa(e){return typeof e=="string"}const Qa=e=>({test:t=>Xa(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),gn=Qa("deg"),Ht=Qa("%"),V=Qa("px"),Fj=Qa("vh"),Vj=Qa("vw"),Um={...Ht,parse:e=>Ht.parse(e)/100,transform:e=>Ht.transform(e*100)},Hm={...Tr,transform:Math.round},Lv={borderWidth:V,borderTopWidth:V,borderRightWidth:V,borderBottomWidth:V,borderLeftWidth:V,borderRadius:V,radius:V,borderTopLeftRadius:V,borderTopRightRadius:V,borderBottomRightRadius:V,borderBottomLeftRadius:V,width:V,maxWidth:V,height:V,maxHeight:V,size:V,top:V,right:V,bottom:V,left:V,padding:V,paddingTop:V,paddingRight:V,paddingBottom:V,paddingLeft:V,margin:V,marginTop:V,marginRight:V,marginBottom:V,marginLeft:V,rotate:gn,rotateX:gn,rotateY:gn,rotateZ:gn,scale:ws,scaleX:ws,scaleY:ws,scaleZ:ws,skew:gn,skewX:gn,skewY:gn,distance:V,translateX:V,translateY:V,translateZ:V,x:V,y:V,z:V,perspective:V,transformPerspective:V,opacity:aa,originX:Um,originY:Um,originZ:V,zIndex:Hm,fillOpacity:aa,strokeOpacity:aa,numOctaves:Hm};function Vf(e,t,n,r){const{style:i,vars:s,transform:o,transformOrigin:c}=e;let l=!1,u=!1,h=!0;for(const f in t){const p=t[f];if($v(f)){s[f]=p;continue}const m=Lv[f],x=Bj(p,m);if(_r.has(f)){if(l=!0,o[f]=x,!h)continue;p!==(m.default||0)&&(h=!1)}else f.startsWith("origin")?(u=!0,c[f]=x):i[f]=x}if(t.transform||(l||r?i.transform=Oj(e.transform,n,h,r):i.transform&&(i.transform="none")),u){const{originX:f="50%",originY:p="50%",originZ:m=0}=c;i.transformOrigin=`${f} ${p} ${m}`}}const Uf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Mv(e,t,n){for(const r in t)!Xe(t[r])&&!Ev(r,n)&&(e[r]=t[r])}function Uj({transformTemplate:e},t,n){return k.useMemo(()=>{const r=Uf();return Vf(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function Hj(e,t,n){const r=e.style||{},i={};return Mv(i,r,e),Object.assign(i,Uj(e,t,n)),e.transformValues?e.transformValues(i):i}function Kj(e,t,n){const r={},i=Hj(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const Gj=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function dl(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Gj.has(e)}let Iv=e=>!dl(e);function Wj(e){e&&(Iv=t=>t.startsWith("on")?!dl(t):e(t))}try{Wj(require("@emotion/is-prop-valid").default)}catch{}function qj(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(Iv(i)||n===!0&&dl(i)||!t&&!dl(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function Km(e,t,n){return typeof e=="string"?e:V.transform(t+n*e)}function Jj(e,t,n){const r=Km(t,e.x,e.width),i=Km(n,e.y,e.height);return`${r} ${i}`}const Yj={offset:"stroke-dashoffset",array:"stroke-dasharray"},Xj={offset:"strokeDashoffset",array:"strokeDasharray"};function Qj(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?Yj:Xj;e[s.offset]=V.transform(-r);const o=V.transform(t),c=V.transform(n);e[s.array]=`${o} ${c}`}function Hf(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:c=1,pathOffset:l=0,...u},h,f,p){if(Vf(e,u,h,p),f){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:m,style:x,dimensions:b}=e;m.transform&&(b&&(x.transform=m.transform),delete m.transform),b&&(i!==void 0||s!==void 0||x.transform)&&(x.transformOrigin=Jj(b,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(m.x=t),n!==void 0&&(m.y=n),r!==void 0&&(m.scale=r),o!==void 0&&Qj(m,o,c,l,!1)}const Rv=()=>({...Uf(),attrs:{}}),Kf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Zj(e,t,n,r){const i=k.useMemo(()=>{const s=Rv();return Hf(s,t,{enableHardwareAcceleration:!1},Kf(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};Mv(s,e.style,e),i.style={...s,...i.style}}return i}function e3(e=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Ff(n)?Zj:Kj)(r,s,o,n),h={...qj(r,typeof n=="string",e),...l,ref:i},{children:f}=r,p=k.useMemo(()=>Xe(f)?f.get():f,[f]);return k.createElement(n,{...h,children:p})}}function Ov(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const Dv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Bv(e,t,n,r){Ov(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Dv.has(i)?i:Of(i),t.attrs[i])}function Gf(e,t){const{style:n}=e,r={};for(const i in n)(Xe(n[i])||t.style&&Xe(t.style[i])||Ev(i,e))&&(r[i]=n[i]);return r}function Nv(e,t){const n=Gf(e,t);for(const r in e)if(Xe(e[r])||Xe(t[r])){const i=Ya.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;n[i]=e[r]}return n}function Wf(e,t,n,r={},i={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,i)),t}function Fv(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const hl=e=>Array.isArray(e),t3=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),n3=e=>hl(e)?e[e.length-1]||0:e;function zo(e){const t=Xe(e)?e.get():e;return t3(t)?t.toValue():t}function r3({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,i,s){const o={latestValues:i3(r,i,s,e),renderState:t()};return n&&(o.mount=c=>n(r,c,o)),o}const Vv=e=>(t,n)=>{const r=k.useContext(Kl),i=k.useContext(Gl),s=()=>r3(e,t,r,i);return n?s():Fv(s)};function i3(e,t,n,r){const i={},s=r(e,{});for(const p in s)i[p]=zo(s[p]);let{initial:o,animate:c}=e;const l=Jl(e),u=_v(e);t&&u&&!l&&e.inherit!==!1&&(o===void 0&&(o=t.initial),c===void 0&&(c=t.animate));let h=n?n.initial===!1:!1;h=h||o===!1;const f=h?c:o;return f&&typeof f!="boolean"&&!ql(f)&&(Array.isArray(f)?f:[f]).forEach(m=>{const x=Wf(e,m);if(!x)return;const{transitionEnd:b,transition:j,...y}=x;for(const g in y){let v=y[g];if(Array.isArray(v)){const S=h?v.length-1:0;v=v[S]}v!==null&&(i[g]=v)}for(const g in b)i[g]=b[g]}),i}const xe=e=>e;class Gm{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function a3(e){let t=new Gm,n=new Gm,r=0,i=!1,s=!1;const o=new WeakSet,c={schedule:(l,u=!1,h=!1)=>{const f=h&&i,p=f?t:n;return u&&o.add(l),p.add(l)&&f&&i&&(r=t.order.length),l},cancel:l=>{n.remove(l),o.delete(l)},process:l=>{if(i){s=!0;return}if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let u=0;u<r;u++){const h=t.order[u];h(l),o.has(h)&&(c.schedule(h),e())}i=!1,s&&(s=!1,c.process(l))}};return c}const js=["prepare","read","update","preRender","render","postRender"],s3=40;function o3(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=js.reduce((f,p)=>(f[p]=a3(()=>n=!0),f),{}),o=f=>s[f].process(i),c=()=>{const f=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(f-i.timestamp,s3),1),i.timestamp=f,i.isProcessing=!0,js.forEach(o),i.isProcessing=!1,n&&t&&(r=!1,e(c))},l=()=>{n=!0,r=!0,i.isProcessing||e(c)};return{schedule:js.reduce((f,p)=>{const m=s[p];return f[p]=(x,b=!1,j=!1)=>(n||l(),m.schedule(x,b,j)),f},{}),cancel:f=>js.forEach(p=>s[p].cancel(f)),state:i,steps:s}}const{schedule:ie,cancel:an,state:Me,steps:Nc}=o3(typeof requestAnimationFrame<"u"?requestAnimationFrame:xe,!0),l3={useVisualState:Vv({scrapeMotionValuesFromProps:Nv,createRenderState:Rv,onMount:(e,t,{renderState:n,latestValues:r})=>{ie.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ie.render(()=>{Hf(n,r,{enableHardwareAcceleration:!1},Kf(t.tagName),e.transformTemplate),Bv(t,n)})}})},c3={useVisualState:Vv({scrapeMotionValuesFromProps:Gf,createRenderState:Uf})};function u3(e,{forwardMotionProps:t=!1},n,r){return{...Ff(e)?l3:c3,preloadedFeatures:n,useRender:e3(t),createVisualElement:r,Component:e}}function Yt(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Uv=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Xl(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const d3=e=>t=>Uv(t)&&e(t,Xl(t));function Qt(e,t,n,r){return Yt(e,t,d3(n),r)}const h3=(e,t)=>n=>t(e(n)),Dn=(...e)=>e.reduce(h3);function Hv(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Wm=Hv("dragHorizontal"),qm=Hv("dragVertical");function Kv(e){let t=!1;if(e==="y")t=qm();else if(e==="x")t=Wm();else{const n=Wm(),r=qm();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function Gv(){const e=Kv(!0);return e?(e(),!1):!0}class qn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Jm(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End"),i=(s,o)=>{if(s.pointerType==="touch"||Gv())return;const c=e.getProps();e.animationState&&c.whileHover&&e.animationState.setActive("whileHover",t),c[r]&&ie.update(()=>c[r](s,o))};return Qt(e.current,n,i,{passive:!e.getProps()[r]})}class f3 extends qn{mount(){this.unmount=Dn(Jm(this.node,!0),Jm(this.node,!1))}unmount(){}}class p3 extends qn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Dn(Yt(this.node.current,"focus",()=>this.onFocus()),Yt(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const Wv=(e,t)=>t?e===t?!0:Wv(e,t.parentElement):!1;function Fc(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Xl(n))}class m3 extends qn{constructor(){super(...arguments),this.removeStartListeners=xe,this.removeEndListeners=xe,this.removeAccessibleListeners=xe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=Qt(window,"pointerup",(c,l)=>{if(!this.checkPressEnd())return;const{onTap:u,onTapCancel:h,globalTapTarget:f}=this.node.getProps();ie.update(()=>{!f&&!Wv(this.node.current,c.target)?h&&h(c,l):u&&u(c,l)})},{passive:!(r.onTap||r.onPointerUp)}),o=Qt(window,"pointercancel",(c,l)=>this.cancelPress(c,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Dn(s,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=c=>{c.key!=="Enter"||!this.checkPressEnd()||Fc("up",(l,u)=>{const{onTap:h}=this.node.getProps();h&&ie.update(()=>h(l,u))})};this.removeEndListeners(),this.removeEndListeners=Yt(this.node.current,"keyup",o),Fc("down",(c,l)=>{this.startPress(c,l)})},n=Yt(this.node.current,"keydown",t),r=()=>{this.isPressing&&Fc("cancel",(s,o)=>this.cancelPress(s,o))},i=Yt(this.node.current,"blur",r);this.removeAccessibleListeners=Dn(n,i)}}startPress(t,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&ie.update(()=>r(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Gv()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&ie.update(()=>r(t,n))}mount(){const t=this.node.getProps(),n=Qt(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=Yt(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Dn(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const ih=new WeakMap,Vc=new WeakMap,g3=e=>{const t=ih.get(e.target);t&&t(e)},x3=e=>{e.forEach(g3)};function v3({root:e,...t}){const n=e||document;Vc.has(n)||Vc.set(n,{});const r=Vc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(x3,{root:e,...t})),r[i]}function y3(e,t,n){const r=v3(t);return ih.set(e,n),r.observe(e),()=>{ih.delete(e),r.unobserve(e)}}const b3={some:0,all:1};class k3 extends qn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:b3[i]},c=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:h,onViewportLeave:f}=this.node.getProps(),p=u?h:f;p&&p(l)};return y3(this.node.current,o,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(w3(t,n))&&this.startObserver()}unmount(){}}function w3({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const j3={inView:{Feature:k3},tap:{Feature:m3},focus:{Feature:p3},hover:{Feature:f3}};function qv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function S3(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function P3(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function Ql(e,t,n){const r=e.getProps();return Wf(r,t,n!==void 0?n:r.custom,S3(e),P3(e))}let fl=xe;const vr=e=>e*1e3,Zt=e=>e/1e3,C3={current:!1},Jv=e=>Array.isArray(e)&&typeof e[0]=="number";function Yv(e){return!!(!e||typeof e=="string"&&Xv[e]||Jv(e)||Array.isArray(e)&&e.every(Yv))}const qi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Xv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:qi([0,.65,.55,1]),circOut:qi([.55,0,1,.45]),backIn:qi([.31,.01,.66,-.59]),backOut:qi([.33,1.53,.69,.99])};function Qv(e){if(e)return Jv(e)?qi(e):Array.isArray(e)?e.map(Qv):Xv[e]}function _3(e,t,n,{delay:r=0,duration:i,repeat:s=0,repeatType:o="loop",ease:c,times:l}={}){const u={[t]:n};l&&(u.offset=l);const h=Qv(c);return Array.isArray(h)&&(u.easing=h),e.animate(u,{delay:r,duration:i,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function T3(e,{repeat:t,repeatType:n="loop"}){const r=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[r]}const Zv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,E3=1e-7,A3=12;function $3(e,t,n,r,i){let s,o,c=0;do o=t+(n-t)/2,s=Zv(o,r,i)-e,s>0?n=o:t=o;while(Math.abs(s)>E3&&++c<A3);return o}function Za(e,t,n,r){if(e===t&&n===r)return xe;const i=s=>$3(s,0,1,e,n);return s=>s===0||s===1?s:Zv(i(s),t,r)}const z3=Za(.42,0,1,1),L3=Za(0,0,.58,1),e5=Za(.42,0,.58,1),M3=e=>Array.isArray(e)&&typeof e[0]!="number",t5=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,n5=e=>t=>1-e(1-t),qf=e=>1-Math.sin(Math.acos(e)),r5=n5(qf),I3=t5(qf),i5=Za(.33,1.53,.69,.99),Jf=n5(i5),R3=t5(Jf),O3=e=>(e*=2)<1?.5*Jf(e):.5*(2-Math.pow(2,-10*(e-1))),Ym={linear:xe,easeIn:z3,easeInOut:e5,easeOut:L3,circIn:qf,circInOut:I3,circOut:r5,backIn:Jf,backInOut:R3,backOut:i5,anticipate:O3},Xm=e=>{if(Array.isArray(e)){fl(e.length===4);const[t,n,r,i]=e;return Za(t,n,r,i)}else if(typeof e=="string")return fl(Ym[e]!==void 0),Ym[e];return e},Yf=(e,t)=>n=>!!(Xa(n)&&Nj.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),a5=(e,t,n)=>r=>{if(!Xa(r))return r;const[i,s,o,c]=r.match(Yl);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(o),alpha:c!==void 0?parseFloat(c):1}},D3=e=>Vn(0,255,e),Uc={...Tr,transform:e=>Math.round(D3(e))},mr={test:Yf("rgb","red"),parse:a5("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Uc.transform(e)+", "+Uc.transform(t)+", "+Uc.transform(n)+", "+sa(aa.transform(r))+")"};function B3(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const ah={test:Yf("#"),parse:B3,transform:mr.transform},Xr={test:Yf("hsl","hue"),parse:a5("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+Ht.transform(sa(t))+", "+Ht.transform(sa(n))+", "+sa(aa.transform(r))+")"},Oe={test:e=>mr.test(e)||ah.test(e)||Xr.test(e),parse:e=>mr.test(e)?mr.parse(e):Xr.test(e)?Xr.parse(e):ah.parse(e),transform:e=>Xa(e)?e:e.hasOwnProperty("red")?mr.transform(e):Xr.transform(e)},de=(e,t,n)=>-n*e+n*t+e;function Hc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function N3({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,o=0;if(!t)i=s=o=n;else{const c=n<.5?n*(1+t):n+t-n*t,l=2*n-c;i=Hc(l,c,e+1/3),s=Hc(l,c,e),o=Hc(l,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}const Kc=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},F3=[ah,mr,Xr],V3=e=>F3.find(t=>t.test(e));function Qm(e){const t=V3(e);let n=t.parse(e);return t===Xr&&(n=N3(n)),n}const s5=(e,t)=>{const n=Qm(e),r=Qm(t),i={...n};return s=>(i.red=Kc(n.red,r.red,s),i.green=Kc(n.green,r.green,s),i.blue=Kc(n.blue,r.blue,s),i.alpha=de(n.alpha,r.alpha,s),mr.transform(i))};function U3(e){var t,n;return isNaN(e)&&Xa(e)&&(((t=e.match(Yl))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(zv))===null||n===void 0?void 0:n.length)||0)>0}const o5={regex:Dj,countKey:"Vars",token:"${v}",parse:xe},l5={regex:zv,countKey:"Colors",token:"${c}",parse:Oe.parse},c5={regex:Yl,countKey:"Numbers",token:"${n}",parse:Tr.parse};function Gc(e,{regex:t,countKey:n,token:r,parse:i}){const s=e.tokenised.match(t);s&&(e["num"+n]=s.length,e.tokenised=e.tokenised.replace(t,r),e.values.push(...s.map(i)))}function pl(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Gc(n,o5),Gc(n,l5),Gc(n,c5),n}function u5(e){return pl(e).values}function d5(e){const{values:t,numColors:n,numVars:r,tokenised:i}=pl(e),s=t.length;return o=>{let c=i;for(let l=0;l<s;l++)l<r?c=c.replace(o5.token,o[l]):l<r+n?c=c.replace(l5.token,Oe.transform(o[l])):c=c.replace(c5.token,sa(o[l]));return c}}const H3=e=>typeof e=="number"?0:e;function K3(e){const t=u5(e);return d5(e)(t.map(H3))}const Un={test:U3,parse:u5,createTransformer:d5,getAnimatableNone:K3},h5=(e,t)=>n=>`${n>0?t:e}`;function f5(e,t){return typeof e=="number"?n=>de(e,t,n):Oe.test(e)?s5(e,t):e.startsWith("var(")?h5(e,t):m5(e,t)}const p5=(e,t)=>{const n=[...e],r=n.length,i=e.map((s,o)=>f5(s,t[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}},G3=(e,t)=>{const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=f5(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}},m5=(e,t)=>{const n=Un.createTransformer(t),r=pl(e),i=pl(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Dn(p5(r.values,i.values),n):h5(e,t)},Ia=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Zm=(e,t)=>n=>de(e,t,n);function W3(e){return typeof e=="number"?Zm:typeof e=="string"?Oe.test(e)?s5:m5:Array.isArray(e)?p5:typeof e=="object"?G3:Zm}function q3(e,t,n){const r=[],i=n||W3(e[0]),s=e.length-1;for(let o=0;o<s;o++){let c=i(e[o],e[o+1]);if(t){const l=Array.isArray(t)?t[o]||xe:t;c=Dn(l,c)}r.push(c)}return r}function g5(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(fl(s===t.length),s===1)return()=>t[0];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=q3(t,r,i),c=o.length,l=u=>{let h=0;if(c>1)for(;h<e.length-2&&!(u<e[h+1]);h++);const f=Ia(e[h],e[h+1],u);return o[h](f)};return n?u=>l(Vn(e[0],e[s-1],u)):l}function J3(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ia(0,t,r);e.push(de(n,1,i))}}function Y3(e){const t=[0];return J3(t,e.length-1),t}function X3(e,t){return e.map(n=>n*t)}function Q3(e,t){return e.map(()=>t||e5).splice(0,e.length-1)}function ml({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=M3(r)?r.map(Xm):Xm(r),s={done:!1,value:t[0]},o=X3(n&&n.length===t.length?n:Y3(t),e),c=g5(o,t,{ease:Array.isArray(i)?i:Q3(t,i)});return{calculatedDuration:e,next:l=>(s.value=c(l),s.done=l>=e,s)}}function x5(e,t){return t?e*(1e3/t):0}const Z3=5;function v5(e,t,n){const r=Math.max(t-Z3,0);return x5(n-e(r),t-r)}const Wc=.001,e6=.01,t6=10,n6=.05,r6=1;function i6({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let i,s,o=1-t;o=Vn(n6,r6,o),e=Vn(e6,t6,Zt(e)),o<1?(i=u=>{const h=u*o,f=h*e,p=h-n,m=sh(u,o),x=Math.exp(-f);return Wc-p/m*x},s=u=>{const f=u*o*e,p=f*n+n,m=Math.pow(o,2)*Math.pow(u,2)*e,x=Math.exp(-f),b=sh(Math.pow(u,2),o);return(-i(u)+Wc>0?-1:1)*((p-m)*x)/b}):(i=u=>{const h=Math.exp(-u*e),f=(u-n)*e+1;return-Wc+h*f},s=u=>{const h=Math.exp(-u*e),f=(n-u)*(e*e);return h*f});const c=5/e,l=s6(i,s,c);if(e=vr(e),isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:o*2*Math.sqrt(r*u),duration:e}}}const a6=12;function s6(e,t,n){let r=n;for(let i=1;i<a6;i++)r=r-e(r)/t(r);return r}function sh(e,t){return e*Math.sqrt(1-t*t)}const o6=["duration","bounce"],l6=["stiffness","damping","mass"];function eg(e,t){return t.some(n=>e[n]!==void 0)}function c6(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!eg(e,l6)&&eg(e,o6)){const n=i6(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function y5({keyframes:e,restDelta:t,restSpeed:n,...r}){const i=e[0],s=e[e.length-1],o={done:!1,value:i},{stiffness:c,damping:l,mass:u,duration:h,velocity:f,isResolvedFromDuration:p}=c6({...r,velocity:-Zt(r.velocity||0)}),m=f||0,x=l/(2*Math.sqrt(c*u)),b=s-i,j=Zt(Math.sqrt(c/u)),y=Math.abs(b)<5;n||(n=y?.01:2),t||(t=y?.005:.5);let g;if(x<1){const v=sh(j,x);g=S=>{const P=Math.exp(-x*j*S);return s-P*((m+x*j*b)/v*Math.sin(v*S)+b*Math.cos(v*S))}}else if(x===1)g=v=>s-Math.exp(-j*v)*(b+(m+j*b)*v);else{const v=j*Math.sqrt(x*x-1);g=S=>{const P=Math.exp(-x*j*S),T=Math.min(v*S,300);return s-P*((m+x*j*b)*Math.sinh(T)+v*b*Math.cosh(T))/v}}return{calculatedDuration:p&&h||null,next:v=>{const S=g(v);if(p)o.done=v>=h;else{let P=m;v!==0&&(x<1?P=v5(g,v,S):P=0);const T=Math.abs(P)<=n,w=Math.abs(s-S)<=t;o.done=T&&w}return o.value=o.done?s:S,o}}}function tg({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:c,max:l,restDelta:u=.5,restSpeed:h}){const f=e[0],p={done:!1,value:f},m=C=>c!==void 0&&C<c||l!==void 0&&C>l,x=C=>c===void 0?l:l===void 0||Math.abs(c-C)<Math.abs(l-C)?c:l;let b=n*t;const j=f+b,y=o===void 0?j:o(j);y!==j&&(b=y-f);const g=C=>-b*Math.exp(-C/r),v=C=>y+g(C),S=C=>{const _=g(C),A=v(C);p.done=Math.abs(_)<=u,p.value=p.done?y:A};let P,T;const w=C=>{m(p.value)&&(P=C,T=y5({keyframes:[p.value,x(p.value)],velocity:v5(v,C,p.value),damping:i,stiffness:s,restDelta:u,restSpeed:h}))};return w(0),{calculatedDuration:null,next:C=>{let _=!1;return!T&&P===void 0&&(_=!0,S(C),w(C)),P!==void 0&&C>P?T.next(C-P):(!_&&S(C),p)}}}const u6=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ie.update(t,!0),stop:()=>an(t),now:()=>Me.isProcessing?Me.timestamp:performance.now()}},ng=2e4;function rg(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ng;)t+=n,r=e.next(t);return t>=ng?1/0:t}const d6={decay:tg,inertia:tg,tween:ml,keyframes:ml,spring:y5};function gl({autoplay:e=!0,delay:t=0,driver:n=u6,keyframes:r,type:i="keyframes",repeat:s=0,repeatDelay:o=0,repeatType:c="loop",onPlay:l,onStop:u,onComplete:h,onUpdate:f,...p}){let m=1,x=!1,b,j;const y=()=>{j=new Promise(K=>{b=K})};y();let g;const v=d6[i]||ml;let S;v!==ml&&typeof r[0]!="number"&&(S=g5([0,100],r,{clamp:!1}),r=[0,100]);const P=v({...p,keyframes:r});let T;c==="mirror"&&(T=v({...p,keyframes:[...r].reverse(),velocity:-(p.velocity||0)}));let w="idle",C=null,_=null,A=null;P.calculatedDuration===null&&s&&(P.calculatedDuration=rg(P));const{calculatedDuration:L}=P;let B=1/0,z=1/0;L!==null&&(B=L+o,z=B*(s+1)-o);let F=0;const q=K=>{if(_===null)return;m>0&&(_=Math.min(_,K)),m<0&&(_=Math.min(K-z/m,_)),C!==null?F=C:F=Math.round(K-_)*m;const le=F-t*(m>=0?1:-1),Qn=m>=0?le<0:le>z;F=Math.max(le,0),w==="finished"&&C===null&&(F=z);let $t=F,$r=P;if(s){const dc=Math.min(F,z)/B;let rs=Math.floor(dc),er=dc%1;!er&&dc>=1&&(er=1),er===1&&rs--,rs=Math.min(rs,s+1),!!(rs%2)&&(c==="reverse"?(er=1-er,o&&(er-=o/B)):c==="mirror"&&($r=T)),$t=Vn(0,1,er)*B}const Ze=Qn?{done:!1,value:r[0]}:$r.next($t);S&&(Ze.value=S(Ze.value));let{done:Zn}=Ze;!Qn&&L!==null&&(Zn=m>=0?F>=z:F<=0);const Vy=C===null&&(w==="finished"||w==="running"&&Zn);return f&&f(Ze.value),Vy&&M(),Ze},N=()=>{g&&g.stop(),g=void 0},oe=()=>{w="idle",N(),b(),y(),_=A=null},M=()=>{w="finished",h&&h(),N(),b()},R=()=>{if(x)return;g||(g=n(q));const K=g.now();l&&l(),C!==null?_=K-C:(!_||w==="finished")&&(_=K),w==="finished"&&y(),A=_,C=null,w="running",g.start()};e&&R();const U={then(K,le){return j.then(K,le)},get time(){return Zt(F)},set time(K){K=vr(K),F=K,C!==null||!g||m===0?C=K:_=g.now()-K/m},get duration(){const K=P.calculatedDuration===null?rg(P):P.calculatedDuration;return Zt(K)},get speed(){return m},set speed(K){K===m||!g||(m=K,U.time=Zt(F))},get state(){return w},play:R,pause:()=>{w="paused",C=F},stop:()=>{x=!0,w!=="idle"&&(w="idle",u&&u(),oe())},cancel:()=>{A!==null&&q(A),oe()},complete:()=>{w="finished"},sample:K=>(_=0,q(K))};return U}function h6(e){let t;return()=>(t===void 0&&(t=e()),t)}const f6=h6(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),p6=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),Ss=10,m6=2e4,g6=(e,t)=>t.type==="spring"||e==="backgroundColor"||!Yv(t.ease);function x6(e,t,{onUpdate:n,onComplete:r,...i}){if(!(f6()&&p6.has(t)&&!i.repeatDelay&&i.repeatType!=="mirror"&&i.damping!==0&&i.type!=="inertia"))return!1;let o=!1,c,l,u=!1;const h=()=>{l=new Promise(v=>{c=v})};h();let{keyframes:f,duration:p=300,ease:m,times:x}=i;if(g6(t,i)){const v=gl({...i,repeat:0,delay:0});let S={done:!1,value:f[0]};const P=[];let T=0;for(;!S.done&&T<m6;)S=v.sample(T),P.push(S.value),T+=Ss;x=void 0,f=P,p=T-Ss,m="linear"}const b=_3(e.owner.current,t,f,{...i,duration:p,ease:m,times:x}),j=()=>{u=!1,b.cancel()},y=()=>{u=!0,ie.update(j),c(),h()};return b.onfinish=()=>{u||(e.set(T3(f,i)),r&&r(),y())},{then(v,S){return l.then(v,S)},attachTimeline(v){return b.timeline=v,b.onfinish=null,xe},get time(){return Zt(b.currentTime||0)},set time(v){b.currentTime=vr(v)},get speed(){return b.playbackRate},set speed(v){b.playbackRate=v},get duration(){return Zt(p)},play:()=>{o||(b.play(),an(j))},pause:()=>b.pause(),stop:()=>{if(o=!0,b.playState==="idle")return;const{currentTime:v}=b;if(v){const S=gl({...i,autoplay:!1});e.setWithVelocity(S.sample(v-Ss).value,S.sample(v).value,Ss)}y()},complete:()=>{u||b.finish()},cancel:y}}function v6({keyframes:e,delay:t,onUpdate:n,onComplete:r}){const i=()=>(n&&n(e[e.length-1]),r&&r(),{time:0,speed:1,duration:0,play:xe,pause:xe,stop:xe,then:s=>(s(),Promise.resolve()),cancel:xe,complete:xe});return t?gl({keyframes:[0,1],duration:0,delay:t,onComplete:i}):i()}const y6={type:"spring",stiffness:500,damping:25,restSpeed:10},b6=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),k6={type:"keyframes",duration:.8},w6={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},j6=(e,{keyframes:t})=>t.length>2?k6:_r.has(e)?e.startsWith("scale")?b6(t[1]):y6:w6,oh=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Un.test(t)||t==="0")&&!t.startsWith("url(")),S6=new Set(["brightness","contrast","saturate","opacity"]);function P6(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Yl)||[];if(!r)return e;const i=n.replace(r,"");let s=S6.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const C6=/([a-z-]*)\(.*?\)/g,lh={...Un,getAnimatableNone:e=>{const t=e.match(C6);return t?t.map(P6).join(" "):e}},_6={...Lv,color:Oe,backgroundColor:Oe,outlineColor:Oe,fill:Oe,stroke:Oe,borderColor:Oe,borderTopColor:Oe,borderRightColor:Oe,borderBottomColor:Oe,borderLeftColor:Oe,filter:lh,WebkitFilter:lh},Xf=e=>_6[e];function b5(e,t){let n=Xf(e);return n!==lh&&(n=Un),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const k5=e=>/^0[^.\s]+$/.test(e);function T6(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||k5(e)}function E6(e,t,n,r){const i=oh(t,n);let s;Array.isArray(n)?s=[...n]:s=[null,n];const o=r.from!==void 0?r.from:e.get();let c;const l=[];for(let u=0;u<s.length;u++)s[u]===null&&(s[u]=u===0?o:s[u-1]),T6(s[u])&&l.push(u),typeof s[u]=="string"&&s[u]!=="none"&&s[u]!=="0"&&(c=s[u]);if(i&&l.length&&c)for(let u=0;u<l.length;u++){const h=l[u];s[h]=b5(t,c)}return s}function A6({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:c,from:l,elapsed:u,...h}){return!!Object.keys(h).length}function Qf(e,t){return e[t]||e.default||e}const $6={skipAnimations:!1},Zf=(e,t,n,r={})=>i=>{const s=Qf(r,e)||{},o=s.delay||r.delay||0;let{elapsed:c=0}=r;c=c-vr(o);const l=E6(t,e,n,s),u=l[0],h=l[l.length-1],f=oh(e,u),p=oh(e,h);let m={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...s,delay:-c,onUpdate:x=>{t.set(x),s.onUpdate&&s.onUpdate(x)},onComplete:()=>{i(),s.onComplete&&s.onComplete()}};if(A6(s)||(m={...m,...j6(e,m)}),m.duration&&(m.duration=vr(m.duration)),m.repeatDelay&&(m.repeatDelay=vr(m.repeatDelay)),!f||!p||C3.current||s.type===!1||$6.skipAnimations)return v6(m);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const x=x6(t,e,m);if(x)return x}return gl(m)};function xl(e){return!!(Xe(e)&&e.add)}const w5=e=>/^\-?\d*\.?\d+$/.test(e);function ep(e,t){e.indexOf(t)===-1&&e.push(t)}function tp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class np{constructor(){this.subscriptions=[]}add(t){return ep(this.subscriptions,t),()=>tp(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const z6=e=>!isNaN(parseFloat(e));class L6{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(r,i=!0)=>{this.prev=this.current,this.current=r;const{delta:s,timestamp:o}=Me;this.lastUpdated!==o&&(this.timeDelta=s,this.lastUpdated=o,ie.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ie.postRender(this.velocityCheck),this.velocityCheck=({timestamp:r})=>{r!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=z6(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new np);const r=this.events[t].add(n);return t==="change"?()=>{r(),ie.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=t,this.timeDelta=r}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?x5(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function xi(e,t){return new L6(e,t)}const j5=e=>t=>t.test(e),M6={test:e=>e==="auto",parse:e=>e},S5=[Tr,V,Ht,gn,Vj,Fj,M6],Bi=e=>S5.find(j5(e)),I6=[...S5,Oe,Un],R6=e=>I6.find(j5(e));function O6(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,xi(n))}function D6(e,t){const n=Ql(e,t);let{transitionEnd:r={},transition:i={},...s}=n?e.makeTargetAnimatable(n,!1):{};s={...s,...r};for(const o in s){const c=n3(s[o]);O6(e,o,c)}}function B6(e,t,n){var r,i;const s=Object.keys(t).filter(c=>!e.hasValue(c)),o=s.length;if(o)for(let c=0;c<o;c++){const l=s[c],u=t[l];let h=null;Array.isArray(u)&&(h=u[0]),h===null&&(h=(i=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&i!==void 0?i:t[l]),h!=null&&(typeof h=="string"&&(w5(h)||k5(h))?h=parseFloat(h):!R6(h)&&Un.test(u)&&(h=b5(l,u)),e.addValue(l,xi(h,{owner:e})),n[l]===void 0&&(n[l]=h),h!==null&&e.setBaseTarget(l,h))}}function N6(e,t){return t?(t[e]||t.default||t).from:void 0}function F6(e,t,n){const r={};for(const i in e){const s=N6(i,t);if(s!==void 0)r[i]=s;else{const o=n.getValue(i);o&&(r[i]=o.get())}}return r}function V6({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function U6(e,t){const n=e.get();if(Array.isArray(t)){for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}else return n!==t}function P5(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s=e.getDefaultTransition(),transitionEnd:o,...c}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(s=r);const u=[],h=i&&e.animationState&&e.animationState.getState()[i];for(const f in c){const p=e.getValue(f),m=c[f];if(!p||m===void 0||h&&V6(h,f))continue;const x={delay:n,elapsed:0,...Qf(s||{},f)};if(window.HandoffAppearAnimations){const y=e.getProps()[Cv];if(y){const g=window.HandoffAppearAnimations(y,f,p,ie);g!==null&&(x.elapsed=g,x.isHandoff=!0)}}let b=!x.isHandoff&&!U6(p,m);if(x.type==="spring"&&(p.getVelocity()||x.velocity)&&(b=!1),p.animation&&(b=!1),b)continue;p.start(Zf(f,p,m,e.shouldReduceMotion&&_r.has(f)?{type:!1}:x));const j=p.animation;xl(l)&&(l.add(f),j.then(()=>l.remove(f))),u.push(j)}return o&&Promise.all(u).then(()=>{o&&D6(e,o)}),u}function ch(e,t,n={}){const r=Ql(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(P5(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(l=0)=>{const{delayChildren:u=0,staggerChildren:h,staggerDirection:f}=i;return H6(e,t,u+l,h,f,n)}:()=>Promise.resolve(),{when:c}=i;if(c){const[l,u]=c==="beforeChildren"?[s,o]:[o,s];return l().then(()=>u())}else return Promise.all([s(),o(n.delay)])}function H6(e,t,n=0,r=0,i=1,s){const o=[],c=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>c-u*r;return Array.from(e.variantChildren).sort(K6).forEach((u,h)=>{u.notify("AnimationStart",t),o.push(ch(u,t,{...s,delay:n+l(h)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(o)}function K6(e,t){return e.sortNodePosition(t)}function G6(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>ch(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=ch(e,t,n);else{const i=typeof t=="function"?Ql(e,t,n.custom):t;r=Promise.all(P5(e,i,n))}return r.then(()=>e.notify("AnimationComplete",t))}const W6=[...Df].reverse(),q6=Df.length;function J6(e){return t=>Promise.all(t.map(({animation:n,options:r})=>G6(e,n,r)))}function Y6(e){let t=J6(e);const n=Q6();let r=!0;const i=(l,u)=>{const h=Ql(e,u);if(h){const{transition:f,transitionEnd:p,...m}=h;l={...l,...m,...p}}return l};function s(l){t=l(e)}function o(l,u){const h=e.getProps(),f=e.getVariantContext(!0)||{},p=[],m=new Set;let x={},b=1/0;for(let y=0;y<q6;y++){const g=W6[y],v=n[g],S=h[g]!==void 0?h[g]:f[g],P=La(S),T=g===u?v.isActive:null;T===!1&&(b=y);let w=S===f[g]&&S!==h[g]&&P;if(w&&r&&e.manuallyAnimateOnMount&&(w=!1),v.protectedKeys={...x},!v.isActive&&T===null||!S&&!v.prevProp||ql(S)||typeof S=="boolean")continue;let _=X6(v.prevProp,S)||g===u&&v.isActive&&!w&&P||y>b&&P,A=!1;const L=Array.isArray(S)?S:[S];let B=L.reduce(i,{});T===!1&&(B={});const{prevResolvedValues:z={}}=v,F={...z,...B},q=N=>{_=!0,m.has(N)&&(A=!0,m.delete(N)),v.needsAnimating[N]=!0};for(const N in F){const oe=B[N],M=z[N];if(x.hasOwnProperty(N))continue;let R=!1;hl(oe)&&hl(M)?R=!qv(oe,M):R=oe!==M,R?oe!==void 0?q(N):m.add(N):oe!==void 0&&m.has(N)?q(N):v.protectedKeys[N]=!0}v.prevProp=S,v.prevResolvedValues=B,v.isActive&&(x={...x,...B}),r&&e.blockInitialAnimation&&(_=!1),_&&(!w||A)&&p.push(...L.map(N=>({animation:N,options:{type:g,...l}})))}if(m.size){const y={};m.forEach(g=>{const v=e.getBaseTarget(g);v!==void 0&&(y[g]=v)}),p.push({animation:y})}let j=!!p.length;return r&&(h.initial===!1||h.initial===h.animate)&&!e.manuallyAnimateOnMount&&(j=!1),r=!1,j?t(p):Promise.resolve()}function c(l,u,h){var f;if(n[l].isActive===u)return Promise.resolve();(f=e.variantChildren)===null||f===void 0||f.forEach(m=>{var x;return(x=m.animationState)===null||x===void 0?void 0:x.setActive(l,u)}),n[l].isActive=u;const p=o(h,l);for(const m in n)n[m].protectedKeys={};return p}return{animateChanges:o,setActive:c,setAnimateFunction:s,getState:()=>n}}function X6(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!qv(t,e):!1}function tr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Q6(){return{animate:tr(!0),whileInView:tr(),whileHover:tr(),whileTap:tr(),whileDrag:tr(),whileFocus:tr(),exit:tr()}}class Z6 extends qn{constructor(t){super(t),t.animationState||(t.animationState=Y6(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),ql(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let e8=0;class t8 extends qn{constructor(){super(...arguments),this.id=e8++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const s=this.node.animationState.setActive("exit",!t,{custom:r??this.node.getProps().custom});n&&!t&&s.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const n8={animation:{Feature:Z6},exit:{Feature:t8}},ig=(e,t)=>Math.abs(e-t);function r8(e,t){const n=ig(e.x,t.x),r=ig(e.y,t.y);return Math.sqrt(n**2+r**2)}class C5{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Jc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,m=r8(f.offset,{x:0,y:0})>=3;if(!p&&!m)return;const{point:x}=f,{timestamp:b}=Me;this.history.push({...x,timestamp:b});const{onStart:j,onMove:y}=this.handlers;p||(j&&j(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=qc(p,this.transformPagePoint),ie.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:m,onSessionEnd:x,resumeAnimation:b}=this.handlers;if(this.dragSnapToOrigin&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const j=Jc(f.type==="pointercancel"?this.lastMoveEventInfo:qc(p,this.transformPagePoint),this.history);this.startEvent&&m&&m(f,j),x&&x(f,j)},!Uv(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Xl(t),c=qc(o,this.transformPagePoint),{point:l}=c,{timestamp:u}=Me;this.history=[{...l,timestamp:u}];const{onSessionStart:h}=n;h&&h(t,Jc(c,this.history)),this.removeListeners=Dn(Qt(this.contextWindow,"pointermove",this.handlePointerMove),Qt(this.contextWindow,"pointerup",this.handlePointerUp),Qt(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),an(this.updatePoint)}}function qc(e,t){return t?{point:t(e.point)}:e}function ag(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Jc({point:e},t){return{point:e,delta:ag(e,_5(t)),offset:ag(e,i8(t)),velocity:a8(t,.1)}}function i8(e){return e[0]}function _5(e){return e[e.length-1]}function a8(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=_5(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>vr(t)));)n--;if(!r)return{x:0,y:0};const s=Zt(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function st(e){return e.max-e.min}function uh(e,t=0,n=.01){return Math.abs(e-t)<=n}function sg(e,t,n,r=.5){e.origin=r,e.originPoint=de(t.min,t.max,e.origin),e.scale=st(n)/st(t),(uh(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=de(n.min,n.max,e.origin)-e.originPoint,(uh(e.translate)||isNaN(e.translate))&&(e.translate=0)}function oa(e,t,n,r){sg(e.x,t.x,n.x,r?r.originX:void 0),sg(e.y,t.y,n.y,r?r.originY:void 0)}function og(e,t,n){e.min=n.min+t.min,e.max=e.min+st(t)}function s8(e,t,n){og(e.x,t.x,n.x),og(e.y,t.y,n.y)}function lg(e,t,n){e.min=t.min-n.min,e.max=e.min+st(t)}function la(e,t,n){lg(e.x,t.x,n.x),lg(e.y,t.y,n.y)}function o8(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?de(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?de(n,e,r.max):Math.min(e,n)),e}function cg(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function l8(e,{top:t,left:n,bottom:r,right:i}){return{x:cg(e.x,n,i),y:cg(e.y,t,r)}}function ug(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function c8(e,t){return{x:ug(e.x,t.x),y:ug(e.y,t.y)}}function u8(e,t){let n=.5;const r=st(e),i=st(t);return i>r?n=Ia(t.min,t.max-r,e.min):r>i&&(n=Ia(e.min,e.max-i,t.min)),Vn(0,1,n)}function d8(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const dh=.35;function h8(e=dh){return e===!1?e=0:e===!0&&(e=dh),{x:dg(e,"left","right"),y:dg(e,"top","bottom")}}function dg(e,t,n){return{min:hg(e,t),max:hg(e,n)}}function hg(e,t){return typeof e=="number"?e:e[t]||0}const fg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Qr=()=>({x:fg(),y:fg()}),pg=()=>({min:0,max:0}),ve=()=>({x:pg(),y:pg()});function ht(e){return[e("x"),e("y")]}function T5({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function f8({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function p8(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Yc(e){return e===void 0||e===1}function hh({scale:e,scaleX:t,scaleY:n}){return!Yc(e)||!Yc(t)||!Yc(n)}function or(e){return hh(e)||E5(e)||e.z||e.rotate||e.rotateX||e.rotateY}function E5(e){return mg(e.x)||mg(e.y)}function mg(e){return e&&e!=="0%"}function vl(e,t,n){const r=e-n,i=t*r;return n+i}function gg(e,t,n,r,i){return i!==void 0&&(e=vl(e,i,r)),vl(e,n,r)+t}function fh(e,t=0,n=1,r,i){e.min=gg(e.min,t,n,r,i),e.max=gg(e.max,t,n,r,i)}function A5(e,{x:t,y:n}){fh(e.x,t.translate,t.scale,t.originPoint),fh(e.y,n.translate,n.scale,n.originPoint)}function m8(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,o;for(let c=0;c<i;c++){s=n[c],o=s.projectionDelta;const l=s.instance;l&&l.style&&l.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Zr(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,A5(e,o)),r&&or(s.latestValues)&&Zr(e,s.latestValues))}t.x=xg(t.x),t.y=xg(t.y)}function xg(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function kn(e,t){e.min=e.min+t,e.max=e.max+t}function vg(e,t,[n,r,i]){const s=t[i]!==void 0?t[i]:.5,o=de(e.min,e.max,s);fh(e,t[n],t[r],o,t.scale)}const g8=["x","scaleX","originX"],x8=["y","scaleY","originY"];function Zr(e,t){vg(e.x,t,g8),vg(e.y,t,x8)}function $5(e,t){return T5(p8(e.getBoundingClientRect(),t))}function v8(e,t,n){const r=$5(e,n),{scroll:i}=t;return i&&(kn(r.x,i.offset.x),kn(r.y,i.offset.y)),r}const z5=({current:e})=>e?e.ownerDocument.defaultView:null,y8=new WeakMap;class b8{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ve(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=h=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Xl(h,"page").point)},s=(h,f)=>{const{drag:p,dragPropagation:m,onDragStart:x}=this.getProps();if(p&&!m&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Kv(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ht(j=>{let y=this.getAxisMotionValue(j).get()||0;if(Ht.test(y)){const{projection:g}=this.visualElement;if(g&&g.layout){const v=g.layout.layoutBox[j];v&&(y=st(v)*(parseFloat(y)/100))}}this.originPoint[j]=y}),x&&ie.update(()=>x(h,f),!1,!0);const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},o=(h,f)=>{const{dragPropagation:p,dragDirectionLock:m,onDirectionLock:x,onDrag:b}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:j}=f;if(m&&this.currentDirection===null){this.currentDirection=k8(j),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",f.point,j),this.updateAxis("y",f.point,j),this.visualElement.render(),b&&b(h,f)},c=(h,f)=>this.stop(h,f),l=()=>ht(h=>{var f;return this.getAnimationState(h)==="paused"&&((f=this.getAxisMotionValue(h).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new C5(t,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:c,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:z5(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&ie.update(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Ps(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=o8(o,this.constraints[t],this.elastic[t])),s.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&Yr(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=l8(i.layoutBox,n):this.constraints=!1,this.elastic=h8(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&ht(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=d8(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Yr(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=v8(r,i.root,this.visualElement.getTransformPagePoint());let o=c8(i.layout.layoutBox,s);if(n){const c=n(f8(o));this.hasMutatedConstraints=!!c,c&&(o=T5(c))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:c}=this.getProps(),l=this.constraints||{},u=ht(h=>{if(!Ps(h,n,this.currentDirection))return;let f=l&&l[h]||{};o&&(f={min:0,max:0});const p=i?200:1e6,m=i?40:1e7,x={type:"inertia",velocity:r?t[h]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(h,x)});return Promise.all(u).then(c)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return r.start(Zf(t,r,0,n))}stopAnimation(){ht(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){ht(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){ht(n=>{const{drag:r}=this.getProps();if(!Ps(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:c}=i.layout.layoutBox[n];s.set(t[n]-de(o,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Yr(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ht(o=>{const c=this.getAxisMotionValue(o);if(c){const l=c.get();i[o]=u8({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ht(o=>{if(!Ps(o,t,null))return;const c=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];c.set(de(l,u,i[o]))})}addListeners(){if(!this.visualElement.current)return;y8.set(this.visualElement,this);const t=this.visualElement.current,n=Qt(t,"pointerdown",l=>{const{drag:u,dragListener:h=!0}=this.getProps();u&&h&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();Yr(l)&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),r();const o=Yt(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(ht(h=>{const f=this.getAxisMotionValue(h);f&&(this.originPoint[h]+=l[h].translate,f.set(f.get()+l[h].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),c&&c()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=dh,dragMomentum:c=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:c}}}function Ps(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function k8(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class w8 extends qn{constructor(t){super(t),this.removeGroupControls=xe,this.removeListeners=xe,this.controls=new b8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xe}unmount(){this.removeGroupControls(),this.removeListeners()}}const yg=e=>(t,n)=>{e&&ie.update(()=>e(t,n))};class j8 extends qn{constructor(){super(...arguments),this.removePointerDownListener=xe}onPointerDown(t){this.session=new C5(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:z5(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:yg(t),onStart:yg(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&ie.update(()=>i(s,o))}}}mount(){this.removePointerDownListener=Qt(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function S8(){const e=k.useContext(Gl);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,i=k.useId();return k.useEffect(()=>r(i),[]),!t&&n?[!1,()=>n&&n(i)]:[!0]}const Lo={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function bg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ni={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(V.test(e))e=parseFloat(e);else return e;const n=bg(e,t.target.x),r=bg(e,t.target.y);return`${n}% ${r}%`}},P8={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=Un.parse(e);if(i.length>5)return r;const s=Un.createTransformer(e),o=typeof i[0]!="number"?1:0,c=n.x.scale*t.x,l=n.y.scale*t.y;i[0+o]/=c,i[1+o]/=l;const u=de(c,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=u),typeof i[3+o]=="number"&&(i[3+o]/=u),s(i)}};class C8 extends Ge.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;Mj(_8),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Lo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?o.promote():o.relegate()||ie.postRender(()=>{const c=o.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function L5(e){const[t,n]=S8(),r=k.useContext(Nf);return Ge.createElement(C8,{...e,layoutGroup:r,switchLayoutGroup:k.useContext(Tv),isPresent:t,safeToRemove:n})}const _8={borderRadius:{...Ni,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ni,borderTopRightRadius:Ni,borderBottomLeftRadius:Ni,borderBottomRightRadius:Ni,boxShadow:P8},M5=["TopLeft","TopRight","BottomLeft","BottomRight"],T8=M5.length,kg=e=>typeof e=="string"?parseFloat(e):e,wg=e=>typeof e=="number"||V.test(e);function E8(e,t,n,r,i,s){i?(e.opacity=de(0,n.opacity!==void 0?n.opacity:1,A8(r)),e.opacityExit=de(t.opacity!==void 0?t.opacity:1,0,$8(r))):s&&(e.opacity=de(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<T8;o++){const c=`border${M5[o]}Radius`;let l=jg(t,c),u=jg(n,c);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||wg(l)===wg(u)?(e[c]=Math.max(de(kg(l),kg(u),r),0),(Ht.test(u)||Ht.test(l))&&(e[c]+="%")):e[c]=u}(t.rotate||n.rotate)&&(e.rotate=de(t.rotate||0,n.rotate||0,r))}function jg(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const A8=I5(0,.5,r5),$8=I5(.5,.95,xe);function I5(e,t,n){return r=>r<e?0:r>t?1:n(Ia(e,t,r))}function Sg(e,t){e.min=t.min,e.max=t.max}function ct(e,t){Sg(e.x,t.x),Sg(e.y,t.y)}function Pg(e,t,n,r,i){return e-=t,e=vl(e,1/n,r),i!==void 0&&(e=vl(e,1/i,r)),e}function z8(e,t=0,n=1,r=.5,i,s=e,o=e){if(Ht.test(t)&&(t=parseFloat(t),t=de(o.min,o.max,t/100)-o.min),typeof t!="number")return;let c=de(s.min,s.max,r);e===s&&(c-=t),e.min=Pg(e.min,t,n,c,i),e.max=Pg(e.max,t,n,c,i)}function Cg(e,t,[n,r,i],s,o){z8(e,t[n],t[r],t[i],t.scale,s,o)}const L8=["x","scaleX","originX"],M8=["y","scaleY","originY"];function _g(e,t,n,r){Cg(e.x,t,L8,n?n.x:void 0,r?r.x:void 0),Cg(e.y,t,M8,n?n.y:void 0,r?r.y:void 0)}function Tg(e){return e.translate===0&&e.scale===1}function R5(e){return Tg(e.x)&&Tg(e.y)}function I8(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function O5(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Eg(e){return st(e.x)/st(e.y)}class R8{constructor(){this.members=[]}add(t){ep(this.members,t),t.scheduleRender()}remove(t){if(tp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ag(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y;if((i||s)&&(r=`translate3d(${i}px, ${s}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:h}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),h&&(r+=`rotateY(${h}deg) `)}const o=e.x.scale*t.x,c=e.y.scale*t.y;return(o!==1||c!==1)&&(r+=`scale(${o}, ${c})`),r||"none"}const O8=(e,t)=>e.depth-t.depth;class D8{constructor(){this.children=[],this.isDirty=!1}add(t){ep(this.children,t),this.isDirty=!0}remove(t){tp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(O8),this.isDirty=!1,this.children.forEach(t)}}function B8(e,t){const n=performance.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(an(r),e(s-t))};return ie.read(r,!0),()=>an(r)}function N8(e){window.MotionDebug&&window.MotionDebug.record(e)}function F8(e){return e instanceof SVGElement&&e.tagName!=="svg"}function V8(e,t,n){const r=Xe(e)?e:xi(e);return r.start(Zf("",r,t,n)),r.animation}const $g=["","X","Y","Z"],U8={visibility:"hidden"},zg=1e3;let H8=0;const lr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function D5({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},c=t==null?void 0:t()){this.id=H8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,lr.totalNodes=lr.resolvedTargetDeltas=lr.recalculatedProjection=0,this.nodes.forEach(W8),this.nodes.forEach(Q8),this.nodes.forEach(Z8),this.nodes.forEach(q8),N8(lr)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new D8)}addEventListener(o,c){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new np),this.eventHandlers.get(o).add(c)}notifyListeners(o,...c){const l=this.eventHandlers.get(o);l&&l.notify(...c)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=F8(o),this.instance=o;const{layoutId:l,layout:u,visualElement:h}=this.options;if(h&&!h.current&&h.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=B8(p,250),Lo.hasAnimatedSinceResize&&(Lo.hasAnimatedSinceResize=!1,this.nodes.forEach(Mg))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&h&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:m,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const b=this.options.transition||h.getDefaultTransition()||i7,{onLayoutAnimationStart:j,onLayoutAnimationComplete:y}=h.getProps(),g=!this.targetLayout||!O5(this.targetLayout,x)||m,v=!p&&m;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||v||p&&(g||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,v);const S={...Qf(b,"layout"),onPlay:j,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(S.delay=0,S.type=!1),this.startAnimation(S)}else p||Mg(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,an(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(e7),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let h=0;h<this.path.length;h++){const f=this.path[h];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:c,layout:l}=this.options;if(c===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Lg);return}this.isUpdating||this.nodes.forEach(Y8),this.isUpdating=!1,this.nodes.forEach(X8),this.nodes.forEach(K8),this.nodes.forEach(G8),this.clearAllSnapshots();const c=performance.now();Me.delta=Vn(0,1e3/60,c-Me.timestamp),Me.timestamp=c,Me.isProcessing=!0,Nc.update.process(Me),Nc.preRender.process(Me),Nc.render.process(Me),Me.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(J8),this.sharedNodes.forEach(t7)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ie.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=ve(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let c=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(c=!1),c&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform,c=this.projectionDelta&&!R5(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,h=u!==this.prevTransformTemplateValue;o&&(c||or(this.latestValues)||h)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const c=this.measurePageBox();let l=this.removeElementScroll(c);return o&&(l=this.removeTransform(l)),a7(l),{animationId:this.root.animationId,measuredBox:c,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return ve();const c=o.measureViewportBox(),{scroll:l}=this.root;return l&&(kn(c.x,l.offset.x),kn(c.y,l.offset.y)),c}removeElementScroll(o){const c=ve();ct(c,o);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:h,options:f}=u;if(u!==this.root&&h&&f.layoutScroll){if(h.isRoot){ct(c,o);const{scroll:p}=this.root;p&&(kn(c.x,-p.offset.x),kn(c.y,-p.offset.y))}kn(c.x,h.offset.x),kn(c.y,h.offset.y)}}return c}applyTransform(o,c=!1){const l=ve();ct(l,o);for(let u=0;u<this.path.length;u++){const h=this.path[u];!c&&h.options.layoutScroll&&h.scroll&&h!==h.root&&Zr(l,{x:-h.scroll.offset.x,y:-h.scroll.offset.y}),or(h.latestValues)&&Zr(l,h.latestValues)}return or(this.latestValues)&&Zr(l,this.latestValues),l}removeTransform(o){const c=ve();ct(c,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!or(u.latestValues))continue;hh(u.latestValues)&&u.updateSnapshot();const h=ve(),f=u.measurePageBox();ct(h,f),_g(c,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,h)}return or(this.latestValues)&&_g(c,this.latestValues),c}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Me.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var c;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=Me.timestamp,!this.targetDelta&&!this.relativeTarget){const m=this.getClosestProjectingParent();m&&m.layout&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ve(),this.relativeTargetOrigin=ve(),la(this.relativeTargetOrigin,this.layout.layoutBox,m.layout.layoutBox),ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=ve(),this.targetWithTransforms=ve()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),s8(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):ct(this.target,this.layout.layoutBox),A5(this.target,this.targetDelta)):ct(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const m=this.getClosestProjectingParent();m&&!!m.resumingFrom==!!this.resumingFrom&&!m.options.layoutScroll&&m.target&&this.animationProgress!==1?(this.relativeParent=m,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ve(),this.relativeTargetOrigin=ve(),la(this.relativeTargetOrigin,this.target,m.target),ct(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}lr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||hh(this.parent.latestValues)||E5(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const c=this.getLead(),l=!!this.resumingFrom||this!==c;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Me.timestamp&&(u=!1),u)return;const{layout:h,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||f))return;ct(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,m=this.treeScale.y;m8(this.layoutCorrected,this.treeScale,this.path,l),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox);const{target:x}=c;if(!x){this.projectionTransform&&(this.projectionDelta=Qr(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Qr(),this.projectionDeltaWithTransform=Qr());const b=this.projectionTransform;oa(this.projectionDelta,this.layoutCorrected,x,this.latestValues),this.projectionTransform=Ag(this.projectionDelta,this.treeScale),(this.projectionTransform!==b||this.treeScale.x!==p||this.treeScale.y!==m)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),lr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,c=!1){const l=this.snapshot,u=l?l.latestValues:{},h={...this.latestValues},f=Qr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const p=ve(),m=l?l.source:void 0,x=this.layout?this.layout.source:void 0,b=m!==x,j=this.getStack(),y=!j||j.members.length<=1,g=!!(b&&!y&&this.options.crossfade===!0&&!this.path.some(r7));this.animationProgress=0;let v;this.mixTargetDelta=S=>{const P=S/1e3;Ig(f.x,o.x,P),Ig(f.y,o.y,P),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(la(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),n7(this.relativeTarget,this.relativeTargetOrigin,p,P),v&&I8(this.relativeTarget,v)&&(this.isProjectionDirty=!1),v||(v=ve()),ct(v,this.relativeTarget)),b&&(this.animationValues=h,E8(h,u,this.latestValues,P,g,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=P},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(an(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ie.update(()=>{Lo.hasAnimatedSinceResize=!0,this.currentAnimation=V8(0,zg,{...o,onUpdate:c=>{this.mixTargetDelta(c),o.onUpdate&&o.onUpdate(c)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(zg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:c,target:l,layout:u,latestValues:h}=o;if(!(!c||!l||!u)){if(this!==o&&this.layout&&u&&B5(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||ve();const f=st(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=st(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}ct(c,l),Zr(c,h),oa(this.projectionDeltaWithTransform,this.layoutCorrected,c,h)}}registerSharedNode(o,c){this.sharedNodes.has(o)||this.sharedNodes.set(o,new R8),this.sharedNodes.get(o).add(c);const u=c.options.initialPromotionConfig;c.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(c):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:c}=this.options;return c?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:c}=this.options;return c?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:c,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let c=!1;const{latestValues:l}=o;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(c=!0),!c)return;const u={};for(let h=0;h<$g.length;h++){const f="rotate"+$g[h];l[f]&&(u[f]=l[f],o.setStaticValue(f,0))}o.render();for(const h in u)o.setStaticValue(h,u[h]);o.scheduleRender()}getProjectionStyles(o){var c,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return U8;const u={visibility:""},h=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=zo(o==null?void 0:o.pointerEvents)||"",u.transform=h?h(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=zo(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!or(this.latestValues)&&(b.transform=h?h({},""):"none",this.hasProjected=!1),b}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=Ag(this.projectionDeltaWithTransform,this.treeScale,p),h&&(u.transform=h(p,u.transform));const{x:m,y:x}=this.projectionDelta;u.transformOrigin=`${m.origin*100}% ${x.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(c=p.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:u.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const b in ul){if(p[b]===void 0)continue;const{correct:j,applyTo:y}=ul[b],g=u.transform==="none"?p[b]:j(p[b],f);if(y){const v=y.length;for(let S=0;S<v;S++)u[y[S]]=g}else u[b]=g}return this.options.layoutId&&(u.pointerEvents=f===this?zo(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var c;return(c=o.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(Lg),this.root.sharedNodes.clear()}}}function K8(e){e.updateLayout()}function G8(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,o=n.source!==e.layout.source;s==="size"?ht(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],m=st(p);p.min=r[f].min,p.max=p.min+m}):B5(s,n.layoutBox,r)&&ht(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],m=st(r[f]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+m)});const c=Qr();oa(c,r,n.layoutBox);const l=Qr();o?oa(l,e.applyTransform(i,!0),n.measuredBox):oa(l,r,n.layoutBox);const u=!R5(c);let h=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:m}=f;if(p&&m){const x=ve();la(x,n.layoutBox,p.layoutBox);const b=ve();la(b,r,m.layoutBox),O5(x,b)||(h=!0),f.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=x,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:c,hasLayoutChanged:u,hasRelativeTargetChanged:h})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function W8(e){lr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function q8(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function J8(e){e.clearSnapshot()}function Lg(e){e.clearMeasurements()}function Y8(e){e.isLayoutDirty=!1}function X8(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Mg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Q8(e){e.resolveTargetDelta()}function Z8(e){e.calcProjection()}function e7(e){e.resetRotation()}function t7(e){e.removeLeadSnapshot()}function Ig(e,t,n){e.translate=de(t.translate,0,n),e.scale=de(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Rg(e,t,n,r){e.min=de(t.min,n.min,r),e.max=de(t.max,n.max,r)}function n7(e,t,n,r){Rg(e.x,t.x,n.x,r),Rg(e.y,t.y,n.y,r)}function r7(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const i7={duration:.45,ease:[.4,0,.1,1]},Og=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),Dg=Og("applewebkit/")&&!Og("chrome/")?Math.round:xe;function Bg(e){e.min=Dg(e.min),e.max=Dg(e.max)}function a7(e){Bg(e.x),Bg(e.y)}function B5(e,t,n){return e==="position"||e==="preserve-aspect"&&!uh(Eg(t),Eg(n),.2)}const s7=D5({attachResizeListener:(e,t)=>Yt(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Xc={current:void 0},N5=D5({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Xc.current){const e=new s7({});e.mount(window),e.setOptions({layoutScroll:!0}),Xc.current=e}return Xc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),o7={pan:{Feature:j8},drag:{Feature:w8,ProjectionNode:N5,MeasureLayout:L5}},l7=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function c7(e){const t=l7.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function ph(e,t,n=1){const[r,i]=c7(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const o=s.trim();return w5(o)?parseFloat(o):o}else return rh(i)?ph(i,t,n+1):i}function u7(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(i=>{const s=i.get();if(!rh(s))return;const o=ph(s,r);o&&i.set(o)});for(const i in t){const s=t[i];if(!rh(s))continue;const o=ph(s,r);o&&(t[i]=o,n||(n={}),n[i]===void 0&&(n[i]=s))}return{target:t,transitionEnd:n}}const d7=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),F5=e=>d7.has(e),h7=e=>Object.keys(e).some(F5),Ng=e=>e===Tr||e===V,Fg=(e,t)=>parseFloat(e.split(", ")[t]),Vg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/);if(i)return Fg(i[1],t);{const s=r.match(/^matrix\((.+)\)$/);return s?Fg(s[1],e):0}},f7=new Set(["x","y","z"]),p7=Ya.filter(e=>!f7.has(e));function m7(e){const t=[];return p7.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const vi={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Vg(4,13),y:Vg(5,14)};vi.translateX=vi.x;vi.translateY=vi.y;const g7=(e,t,n)=>{const r=t.measureViewportBox(),i=t.current,s=getComputedStyle(i),{display:o}=s,c={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{c[u]=vi[u](r,s)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const h=t.getValue(u);h&&h.jump(c[u]),e[u]=vi[u](l,s)}),e},x7=(e,t,n={},r={})=>{t={...t},r={...r};const i=Object.keys(t).filter(F5);let s=[],o=!1;const c=[];if(i.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let h=n[l],f=Bi(h);const p=t[l];let m;if(hl(p)){const x=p.length,b=p[0]===null?1:0;h=p[b],f=Bi(h);for(let j=b;j<x&&p[j]!==null;j++)m?fl(Bi(p[j])===m):m=Bi(p[j])}else m=Bi(p);if(f!==m)if(Ng(f)&&Ng(m)){const x=u.get();typeof x=="string"&&u.set(parseFloat(x)),typeof p=="string"?t[l]=parseFloat(p):Array.isArray(p)&&m===V&&(t[l]=p.map(parseFloat))}else f!=null&&f.transform&&(m!=null&&m.transform)&&(h===0||p===0)?h===0?u.set(m.transform(h)):t[l]=f.transform(p):(o||(s=m7(e),o=!0),c.push(l),r[l]=r[l]!==void 0?r[l]:t[l],u.jump(p))}),c.length){const l=c.indexOf("height")>=0?window.pageYOffset:null,u=g7(t,e,c);return s.length&&s.forEach(([h,f])=>{e.getValue(h).set(f)}),e.render(),Wl&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function v7(e,t,n,r){return h7(t)?x7(e,t,n,r):{target:t,transitionEnd:r}}const y7=(e,t,n,r)=>{const i=u7(e,t,r);return t=i.target,r=i.transitionEnd,v7(e,t,n,r)},mh={current:null},V5={current:!1};function b7(){if(V5.current=!0,!!Wl)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>mh.current=e.matches;e.addListener(t),t()}else mh.current=!1}function k7(e,t,n){const{willChange:r}=t;for(const i in t){const s=t[i],o=n[i];if(Xe(s))e.addValue(i,s),xl(r)&&r.add(i);else if(Xe(o))e.addValue(i,xi(s,{owner:e})),xl(r)&&r.remove(i);else if(o!==s)if(e.hasValue(i)){const c=e.getValue(i);!c.hasAnimated&&c.set(s)}else{const c=e.getStaticValue(i);e.addValue(i,xi(c!==void 0?c:s,{owner:e}))}}for(const i in n)t[i]===void 0&&e.removeValue(i);return t}const Ug=new WeakMap,U5=Object.keys(Ma),w7=U5.length,Hg=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],j7=Bf.length;class S7{constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:s},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ie.render(this.render,!1,!0);const{latestValues:c,renderState:l}=s;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.isControllingVariants=Jl(n),this.isVariantNode=_v(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(n,{});for(const f in h){const p=h[f];c[f]!==void 0&&Xe(p)&&(p.set(c[f],!1),xl(u)&&u.add(f))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Ug.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),V5.current||b7(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:mh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Ug.delete(this.current),this.projection&&this.projection.unmount(),an(this.notifyUpdate),an(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const r=_r.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&ie.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},r,i,s){let o,c;for(let l=0;l<w7;l++){const u=U5[l],{isEnabled:h,Feature:f,ProjectionNode:p,MeasureLayout:m}=Ma[u];p&&(o=p),h(n)&&(!this.features[u]&&f&&(this.features[u]=new f(this)),m&&(c=m))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:h,dragConstraints:f,layoutScroll:p,layoutRoot:m}=n;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!h||f&&Yr(f),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:p,layoutRoot:m})}return c}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ve()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Hg.length;r++){const i=Hg[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s=t["on"+i];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=k7(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const r=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(r.initial=this.props.initial),r}const n={};for(let r=0;r<j7;r++){const i=Bf[r],s=this.props[i];(La(s)||s===!1)&&(n[i]=s)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=xi(n,{owner:this}),this.addValue(t,r)),r}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,i=typeof r=="string"||typeof r=="object"?(n=Wf(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Xe(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new np),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class H5 extends S7{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:i},s){let o=F6(r,t||{},this);if(i&&(n&&(n=i(n)),r&&(r=i(r)),o&&(o=i(o))),s){B6(this,r,o);const c=y7(this,r,o,n);n=c.transitionEnd,r=c.target}return{transition:t,transitionEnd:n,...r}}}function P7(e){return window.getComputedStyle(e)}class C7 extends H5{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(_r.has(n)){const r=Xf(n);return r&&r.default||0}else{const r=P7(t),i=($v(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return $5(t,n)}build(t,n,r,i){Vf(t,n,r,i.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Gf(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Xe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,r,i){Ov(t,n,r,i)}}class _7 extends H5{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(_r.has(n)){const r=Xf(n);return r&&r.default||0}return n=Dv.has(n)?n:Of(n),t.getAttribute(n)}measureInstanceViewportBox(){return ve()}scrapeMotionValuesFromProps(t,n){return Nv(t,n)}build(t,n,r,i){Hf(t,n,r,this.isSVGTag,i.transformTemplate)}renderInstance(t,n,r,i){Bv(t,n,r,i)}mount(t){this.isSVGTag=Kf(t.tagName),super.mount(t)}}const T7=(e,t)=>Ff(e)?new _7(t,{enableHardwareAcceleration:!1}):new C7(t,{enableHardwareAcceleration:!0}),E7={layout:{ProjectionNode:N5,MeasureLayout:L5}},A7={...n8,...j3,...o7,...E7},E=zj((e,t)=>u3(e,t,A7,T7));function K5(){const e=k.useRef(!1);return Rf(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function $7(){const e=K5(),[t,n]=k.useState(0),r=k.useCallback(()=>{e.current&&n(t+1)},[t]);return[k.useCallback(()=>ie.postRender(r),[r]),t]}class z7 extends k.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function L7({children:e,isPresent:t}){const n=k.useId(),r=k.useRef(null),i=k.useRef({width:0,height:0,top:0,left:0});return k.useInsertionEffect(()=>{const{width:s,height:o,top:c,left:l}=i.current;if(t||!r.current||!s||!o)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${c}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),k.createElement(z7,{isPresent:t,childRef:r,sizeRef:i},k.cloneElement(e,{ref:r}))}const Qc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const c=Fv(M7),l=k.useId(),u=k.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:h=>{c.set(h,!0);for(const f of c.values())if(!f)return;r&&r()},register:h=>(c.set(h,!1),()=>c.delete(h))}),s?void 0:[n]);return k.useMemo(()=>{c.forEach((h,f)=>c.set(f,!1))},[n]),k.useEffect(()=>{!n&&!c.size&&r&&r()},[n]),o==="popLayout"&&(e=k.createElement(L7,{isPresent:n},e)),k.createElement(Gl.Provider,{value:u},e)};function M7(){return new Map}function I7(e){return k.useEffect(()=>()=>e(),[])}const cr=e=>e.key||"";function R7(e,t){e.forEach(n=>{const r=cr(n);t.set(r,n)})}function O7(e){const t=[];return k.Children.forEach(e,n=>{k.isValidElement(n)&&t.push(n)}),t}const D7=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const c=k.useContext(Nf).forceRender||$7()[0],l=K5(),u=O7(e);let h=u;const f=k.useRef(new Map).current,p=k.useRef(h),m=k.useRef(new Map).current,x=k.useRef(!0);if(Rf(()=>{x.current=!1,R7(u,m),p.current=h}),I7(()=>{x.current=!0,m.clear(),f.clear()}),x.current)return k.createElement(k.Fragment,null,h.map(g=>k.createElement(Qc,{key:cr(g),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:s,mode:o},g)));h=[...h];const b=p.current.map(cr),j=u.map(cr),y=b.length;for(let g=0;g<y;g++){const v=b[g];j.indexOf(v)===-1&&!f.has(v)&&f.set(v,void 0)}return o==="wait"&&f.size&&(h=[]),f.forEach((g,v)=>{if(j.indexOf(v)!==-1)return;const S=m.get(v);if(!S)return;const P=b.indexOf(v);let T=g;if(!T){const w=()=>{f.delete(v);const C=Array.from(m.keys()).filter(_=>!j.includes(_));if(C.forEach(_=>m.delete(_)),p.current=u.filter(_=>{const A=cr(_);return A===v||C.includes(A)}),!f.size){if(l.current===!1)return;c(),r&&r()}};T=k.createElement(Qc,{key:cr(S),isPresent:!1,onExitComplete:w,custom:t,presenceAffectsLayout:s,mode:o},S),f.set(v,T)}h.splice(P,0,T)}),h=h.map(g=>{const v=g.key;return f.has(v)?g:k.createElement(Qc,{key:cr(g),isPresent:!0,presenceAffectsLayout:s,mode:o},g)}),k.createElement(k.Fragment,null,f.size?h:h.map(g=>k.cloneElement(g)))},B7="modulepreload",N7=function(e){return"/smkn1bulan.sch.id/"+e},Kg={},yi=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=N7(l),l in Kg)return;Kg[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":B7,u||(f.as="script"),f.crossOrigin="",f.href=l,c&&f.setAttribute("nonce",c),document.head.appendChild(f),u)return new Promise((p,m)=>{f.addEventListener("load",p),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return i.then(o=>{for(const c of o||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},F7=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>yi(async()=>{const{default:r}=await Promise.resolve().then(()=>Ti);return{default:r}},void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)};class rp extends Error{constructor(t,n="FunctionsError",r){super(t),this.name=n,this.context=r}}class V7 extends rp{constructor(t){super("Failed to send a request to the Edge Function","FunctionsFetchError",t)}}class U7 extends rp{constructor(t){super("Relay Error invoking the Edge Function","FunctionsRelayError",t)}}class H7 extends rp{constructor(t){super("Edge Function returned a non-2xx status code","FunctionsHttpError",t)}}var gh;(function(e){e.Any="any",e.ApNortheast1="ap-northeast-1",e.ApNortheast2="ap-northeast-2",e.ApSouth1="ap-south-1",e.ApSoutheast1="ap-southeast-1",e.ApSoutheast2="ap-southeast-2",e.CaCentral1="ca-central-1",e.EuCentral1="eu-central-1",e.EuWest1="eu-west-1",e.EuWest2="eu-west-2",e.EuWest3="eu-west-3",e.SaEast1="sa-east-1",e.UsEast1="us-east-1",e.UsWest1="us-west-1",e.UsWest2="us-west-2"})(gh||(gh={}));var K7=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function c(h){try{u(r.next(h))}catch(f){o(f)}}function l(h){try{u(r.throw(h))}catch(f){o(f)}}function u(h){h.done?s(h.value):i(h.value).then(c,l)}u((r=r.apply(e,t||[])).next())})};class G7{constructor(t,{headers:n={},customFetch:r,region:i=gh.Any}={}){this.url=t,this.headers=n,this.region=i,this.fetch=F7(r)}setAuth(t){this.headers.Authorization=`Bearer ${t}`}invoke(t,n={}){var r;return K7(this,void 0,void 0,function*(){try{const{headers:i,method:s,body:o}=n;let c={},{region:l}=n;l||(l=this.region),l&&l!=="any"&&(c["x-region"]=l);let u;o&&(i&&!Object.prototype.hasOwnProperty.call(i,"Content-Type")||!i)&&(typeof Blob<"u"&&o instanceof Blob||o instanceof ArrayBuffer?(c["Content-Type"]="application/octet-stream",u=o):typeof o=="string"?(c["Content-Type"]="text/plain",u=o):typeof FormData<"u"&&o instanceof FormData?u=o:(c["Content-Type"]="application/json",u=JSON.stringify(o)));const h=yield this.fetch(`${this.url}/${t}`,{method:s||"POST",headers:Object.assign(Object.assign(Object.assign({},c),this.headers),i),body:u}).catch(x=>{throw new V7(x)}),f=h.headers.get("x-relay-error");if(f&&f==="true")throw new U7(h);if(!h.ok)throw new H7(h);let p=((r=h.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),m;return p==="application/json"?m=yield h.json():p==="application/octet-stream"?m=yield h.blob():p==="text/event-stream"?m=h:p==="multipart/form-data"?m=yield h.formData():m=yield h.text(),{data:m,error:null}}catch(i){return{data:null,error:i}}})}}var He={},ip={},Zl={},es={},ec={},tc={},W7=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},bi=W7();const q7=bi.fetch,G5=bi.fetch.bind(bi),W5=bi.Headers,J7=bi.Request,Y7=bi.Response,Ti=Object.freeze(Object.defineProperty({__proto__:null,Headers:W5,Request:J7,Response:Y7,default:G5,fetch:q7},Symbol.toStringTag,{value:"Module"})),X7=Hy(Ti);var nc={};Object.defineProperty(nc,"__esModule",{value:!0});class Q7 extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}}nc.default=Q7;var q5=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(tc,"__esModule",{value:!0});const Z7=q5(X7),eS=q5(nc);let tS=class{constructor(t){this.shouldThrowOnError=!1,this.method=t.method,this.url=t.url,this.headers=t.headers,this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=t.shouldThrowOnError,this.signal=t.signal,this.isMaybeSingle=t.isMaybeSingle,t.fetch?this.fetch=t.fetch:typeof fetch>"u"?this.fetch=Z7.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,n){return this.headers=Object.assign({},this.headers),this.headers[t]=n,this}then(t,n){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers["Accept-Profile"]=this.schema:this.headers["Content-Profile"]=this.schema),this.method!=="GET"&&this.method!=="HEAD"&&(this.headers["Content-Type"]="application/json");const r=this.fetch;let i=r(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async s=>{var o,c,l;let u=null,h=null,f=null,p=s.status,m=s.statusText;if(s.ok){if(this.method!=="HEAD"){const y=await s.text();y===""||(this.headers.Accept==="text/csv"||this.headers.Accept&&this.headers.Accept.includes("application/vnd.pgrst.plan+text")?h=y:h=JSON.parse(y))}const b=(o=this.headers.Prefer)===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),j=(c=s.headers.get("content-range"))===null||c===void 0?void 0:c.split("/");b&&j&&j.length>1&&(f=parseInt(j[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(h)&&(h.length>1?(u={code:"PGRST116",details:`Results contain ${h.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},h=null,f=null,p=406,m="Not Acceptable"):h.length===1?h=h[0]:h=null)}else{const b=await s.text();try{u=JSON.parse(b),Array.isArray(u)&&s.status===404&&(h=[],u=null,p=200,m="OK")}catch{s.status===404&&b===""?(p=204,m="No Content"):u={message:b}}if(u&&this.isMaybeSingle&&(!((l=u==null?void 0:u.details)===null||l===void 0)&&l.includes("0 rows"))&&(u=null,p=200,m="OK"),u&&this.shouldThrowOnError)throw new eS.default(u)}return{error:u,data:h,count:f,status:p,statusText:m}});return this.shouldThrowOnError||(i=i.catch(s=>{var o,c,l;return{error:{message:`${(o=s==null?void 0:s.name)!==null&&o!==void 0?o:"FetchError"}: ${s==null?void 0:s.message}`,details:`${(c=s==null?void 0:s.stack)!==null&&c!==void 0?c:""}`,hint:"",code:`${(l=s==null?void 0:s.code)!==null&&l!==void 0?l:""}`},data:null,count:null,status:0,statusText:""}})),i.then(t,n)}};tc.default=tS;var nS=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ec,"__esModule",{value:!0});const rS=nS(tc);let iS=class extends rS.default{select(t){let n=!1;const r=(t??"*").split("").map(i=>/\s/.test(i)&&!n?"":(i==='"'&&(n=!n),i)).join("");return this.url.searchParams.set("select",r),this.headers.Prefer&&(this.headers.Prefer+=","),this.headers.Prefer+="return=representation",this}order(t,{ascending:n=!0,nullsFirst:r,foreignTable:i,referencedTable:s=i}={}){const o=s?`${s}.order`:"order",c=this.url.searchParams.get(o);return this.url.searchParams.set(o,`${c?`${c},`:""}${t}.${n?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:n,referencedTable:r=n}={}){const i=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(i,`${t}`),this}range(t,n,{foreignTable:r,referencedTable:i=r}={}){const s=typeof i>"u"?"offset":`${i}.offset`,o=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(s,`${t}`),this.url.searchParams.set(o,`${n-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.Accept="application/vnd.pgrst.object+json",this}maybeSingle(){return this.method==="GET"?this.headers.Accept="application/json":this.headers.Accept="application/vnd.pgrst.object+json",this.isMaybeSingle=!0,this}csv(){return this.headers.Accept="text/csv",this}geojson(){return this.headers.Accept="application/geo+json",this}explain({analyze:t=!1,verbose:n=!1,settings:r=!1,buffers:i=!1,wal:s=!1,format:o="text"}={}){var c;const l=[t?"analyze":null,n?"verbose":null,r?"settings":null,i?"buffers":null,s?"wal":null].filter(Boolean).join("|"),u=(c=this.headers.Accept)!==null&&c!==void 0?c:"application/json";return this.headers.Accept=`application/vnd.pgrst.plan+${o}; for="${u}"; options=${l};`,o==="json"?this:this}rollback(){var t;return((t=this.headers.Prefer)!==null&&t!==void 0?t:"").trim().length>0?this.headers.Prefer+=",tx=rollback":this.headers.Prefer="tx=rollback",this}returns(){return this}};ec.default=iS;var aS=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(es,"__esModule",{value:!0});const sS=aS(ec);let oS=class extends sS.default{eq(t,n){return this.url.searchParams.append(t,`eq.${n}`),this}neq(t,n){return this.url.searchParams.append(t,`neq.${n}`),this}gt(t,n){return this.url.searchParams.append(t,`gt.${n}`),this}gte(t,n){return this.url.searchParams.append(t,`gte.${n}`),this}lt(t,n){return this.url.searchParams.append(t,`lt.${n}`),this}lte(t,n){return this.url.searchParams.append(t,`lte.${n}`),this}like(t,n){return this.url.searchParams.append(t,`like.${n}`),this}likeAllOf(t,n){return this.url.searchParams.append(t,`like(all).{${n.join(",")}}`),this}likeAnyOf(t,n){return this.url.searchParams.append(t,`like(any).{${n.join(",")}}`),this}ilike(t,n){return this.url.searchParams.append(t,`ilike.${n}`),this}ilikeAllOf(t,n){return this.url.searchParams.append(t,`ilike(all).{${n.join(",")}}`),this}ilikeAnyOf(t,n){return this.url.searchParams.append(t,`ilike(any).{${n.join(",")}}`),this}is(t,n){return this.url.searchParams.append(t,`is.${n}`),this}in(t,n){const r=Array.from(new Set(n)).map(i=>typeof i=="string"&&new RegExp("[,()]").test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`in.(${r})`),this}contains(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cs.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cs.{${n.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(n)}`),this}containedBy(t,n){return typeof n=="string"?this.url.searchParams.append(t,`cd.${n}`):Array.isArray(n)?this.url.searchParams.append(t,`cd.{${n.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(n)}`),this}rangeGt(t,n){return this.url.searchParams.append(t,`sr.${n}`),this}rangeGte(t,n){return this.url.searchParams.append(t,`nxl.${n}`),this}rangeLt(t,n){return this.url.searchParams.append(t,`sl.${n}`),this}rangeLte(t,n){return this.url.searchParams.append(t,`nxr.${n}`),this}rangeAdjacent(t,n){return this.url.searchParams.append(t,`adj.${n}`),this}overlaps(t,n){return typeof n=="string"?this.url.searchParams.append(t,`ov.${n}`):this.url.searchParams.append(t,`ov.{${n.join(",")}}`),this}textSearch(t,n,{config:r,type:i}={}){let s="";i==="plain"?s="pl":i==="phrase"?s="ph":i==="websearch"&&(s="w");const o=r===void 0?"":`(${r})`;return this.url.searchParams.append(t,`${s}fts${o}.${n}`),this}match(t){return Object.entries(t).forEach(([n,r])=>{this.url.searchParams.append(n,`eq.${r}`)}),this}not(t,n,r){return this.url.searchParams.append(t,`not.${n}.${r}`),this}or(t,{foreignTable:n,referencedTable:r=n}={}){const i=r?`${r}.or`:"or";return this.url.searchParams.append(i,`(${t})`),this}filter(t,n,r){return this.url.searchParams.append(t,`${n}.${r}`),this}};es.default=oS;var lS=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Zl,"__esModule",{value:!0});const Fi=lS(es);let cS=class{constructor(t,{headers:n={},schema:r,fetch:i}){this.url=t,this.headers=n,this.schema=r,this.fetch=i}select(t,{head:n=!1,count:r}={}){const i=n?"HEAD":"GET";let s=!1;const o=(t??"*").split("").map(c=>/\s/.test(c)&&!s?"":(c==='"'&&(s=!s),c)).join("");return this.url.searchParams.set("select",o),r&&(this.headers.Prefer=`count=${r}`),new Fi.default({method:i,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}insert(t,{count:n,defaultToNull:r=!0}={}){const i="POST",s=[];if(this.headers.Prefer&&s.push(this.headers.Prefer),n&&s.push(`count=${n}`),r||s.push("missing=default"),this.headers.Prefer=s.join(","),Array.isArray(t)){const o=t.reduce((c,l)=>c.concat(Object.keys(l)),[]);if(o.length>0){const c=[...new Set(o)].map(l=>`"${l}"`);this.url.searchParams.set("columns",c.join(","))}}return new Fi.default({method:i,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}upsert(t,{onConflict:n,ignoreDuplicates:r=!1,count:i,defaultToNull:s=!0}={}){const o="POST",c=[`resolution=${r?"ignore":"merge"}-duplicates`];if(n!==void 0&&this.url.searchParams.set("on_conflict",n),this.headers.Prefer&&c.push(this.headers.Prefer),i&&c.push(`count=${i}`),s||c.push("missing=default"),this.headers.Prefer=c.join(","),Array.isArray(t)){const l=t.reduce((u,h)=>u.concat(Object.keys(h)),[]);if(l.length>0){const u=[...new Set(l)].map(h=>`"${h}"`);this.url.searchParams.set("columns",u.join(","))}}return new Fi.default({method:o,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}update(t,{count:n}={}){const r="PATCH",i=[];return this.headers.Prefer&&i.push(this.headers.Prefer),n&&i.push(`count=${n}`),this.headers.Prefer=i.join(","),new Fi.default({method:r,url:this.url,headers:this.headers,schema:this.schema,body:t,fetch:this.fetch,allowEmpty:!1})}delete({count:t}={}){const n="DELETE",r=[];return t&&r.push(`count=${t}`),this.headers.Prefer&&r.unshift(this.headers.Prefer),this.headers.Prefer=r.join(","),new Fi.default({method:n,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch,allowEmpty:!1})}};Zl.default=cS;var rc={},ic={};Object.defineProperty(ic,"__esModule",{value:!0});ic.version=void 0;ic.version="0.0.0-automated";Object.defineProperty(rc,"__esModule",{value:!0});rc.DEFAULT_HEADERS=void 0;const uS=ic;rc.DEFAULT_HEADERS={"X-Client-Info":`postgrest-js/${uS.version}`};var J5=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ip,"__esModule",{value:!0});const dS=J5(Zl),hS=J5(es),fS=rc;let pS=class Y5{constructor(t,{headers:n={},schema:r,fetch:i}={}){this.url=t,this.headers=Object.assign(Object.assign({},fS.DEFAULT_HEADERS),n),this.schemaName=r,this.fetch=i}from(t){const n=new URL(`${this.url}/${t}`);return new dS.default(n,{headers:Object.assign({},this.headers),schema:this.schemaName,fetch:this.fetch})}schema(t){return new Y5(this.url,{headers:this.headers,schema:t,fetch:this.fetch})}rpc(t,n={},{head:r=!1,get:i=!1,count:s}={}){let o;const c=new URL(`${this.url}/rpc/${t}`);let l;r||i?(o=r?"HEAD":"GET",Object.entries(n).filter(([h,f])=>f!==void 0).map(([h,f])=>[h,Array.isArray(f)?`{${f.join(",")}}`:`${f}`]).forEach(([h,f])=>{c.searchParams.append(h,f)})):(o="POST",l=n);const u=Object.assign({},this.headers);return s&&(u.Prefer=`count=${s}`),new hS.default({method:o,url:c,headers:u,schema:this.schemaName,body:l,fetch:this.fetch,allowEmpty:!1})}};ip.default=pS;var Ei=xt&&xt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(He,"__esModule",{value:!0});He.PostgrestError=He.PostgrestBuilder=He.PostgrestTransformBuilder=He.PostgrestFilterBuilder=He.PostgrestQueryBuilder=He.PostgrestClient=void 0;const X5=Ei(ip);He.PostgrestClient=X5.default;const Q5=Ei(Zl);He.PostgrestQueryBuilder=Q5.default;const Z5=Ei(es);He.PostgrestFilterBuilder=Z5.default;const ey=Ei(ec);He.PostgrestTransformBuilder=ey.default;const ty=Ei(tc);He.PostgrestBuilder=ty.default;const ny=Ei(nc);He.PostgrestError=ny.default;var mS=He.default={PostgrestClient:X5.default,PostgrestQueryBuilder:Q5.default,PostgrestFilterBuilder:Z5.default,PostgrestTransformBuilder:ey.default,PostgrestBuilder:ty.default,PostgrestError:ny.default};const{PostgrestClient:gS,PostgrestQueryBuilder:NR,PostgrestFilterBuilder:FR,PostgrestTransformBuilder:VR,PostgrestBuilder:UR}=mS,xS="2.10.7",vS={"X-Client-Info":`realtime-js/${xS}`},yS="1.0.0",ry=1e4,bS=1e3;var oi;(function(e){e[e.connecting=0]="connecting",e[e.open=1]="open",e[e.closing=2]="closing",e[e.closed=3]="closed"})(oi||(oi={}));var et;(function(e){e.closed="closed",e.errored="errored",e.joined="joined",e.joining="joining",e.leaving="leaving"})(et||(et={}));var St;(function(e){e.close="phx_close",e.error="phx_error",e.join="phx_join",e.reply="phx_reply",e.leave="phx_leave",e.access_token="access_token"})(St||(St={}));var xh;(function(e){e.websocket="websocket"})(xh||(xh={}));var dr;(function(e){e.Connecting="connecting",e.Open="open",e.Closing="closing",e.Closed="closed"})(dr||(dr={}));class kS{constructor(){this.HEADER_LENGTH=1}decode(t,n){return t.constructor===ArrayBuffer?n(this._binaryDecode(t)):n(typeof t=="string"?JSON.parse(t):{})}_binaryDecode(t){const n=new DataView(t),r=new TextDecoder;return this._decodeBroadcast(t,n,r)}_decodeBroadcast(t,n,r){const i=n.getUint8(1),s=n.getUint8(2);let o=this.HEADER_LENGTH+2;const c=r.decode(t.slice(o,o+i));o=o+i;const l=r.decode(t.slice(o,o+s));o=o+s;const u=JSON.parse(r.decode(t.slice(o,t.byteLength)));return{ref:null,topic:c,event:l,payload:u}}}class iy{constructor(t,n){this.callback=t,this.timerCalc=n,this.timer=void 0,this.tries=0,this.callback=t,this.timerCalc=n}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var ne;(function(e){e.abstime="abstime",e.bool="bool",e.date="date",e.daterange="daterange",e.float4="float4",e.float8="float8",e.int2="int2",e.int4="int4",e.int4range="int4range",e.int8="int8",e.int8range="int8range",e.json="json",e.jsonb="jsonb",e.money="money",e.numeric="numeric",e.oid="oid",e.reltime="reltime",e.text="text",e.time="time",e.timestamp="timestamp",e.timestamptz="timestamptz",e.timetz="timetz",e.tsrange="tsrange",e.tstzrange="tstzrange"})(ne||(ne={}));const Gg=(e,t,n={})=>{var r;const i=(r=n.skipTypes)!==null&&r!==void 0?r:[];return Object.keys(t).reduce((s,o)=>(s[o]=wS(o,e,t,i),s),{})},wS=(e,t,n,r)=>{const i=t.find(c=>c.name===e),s=i==null?void 0:i.type,o=n[e];return s&&!r.includes(s)?ay(s,o):vh(o)},ay=(e,t)=>{if(e.charAt(0)==="_"){const n=e.slice(1,e.length);return CS(t,n)}switch(e){case ne.bool:return jS(t);case ne.float4:case ne.float8:case ne.int2:case ne.int4:case ne.int8:case ne.numeric:case ne.oid:return SS(t);case ne.json:case ne.jsonb:return PS(t);case ne.timestamp:return _S(t);case ne.abstime:case ne.date:case ne.daterange:case ne.int4range:case ne.int8range:case ne.money:case ne.reltime:case ne.text:case ne.time:case ne.timestamptz:case ne.timetz:case ne.tsrange:case ne.tstzrange:return vh(t);default:return vh(t)}},vh=e=>e,jS=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},SS=e=>{if(typeof e=="string"){const t=parseFloat(e);if(!Number.isNaN(t))return t}return e},PS=e=>{if(typeof e=="string")try{return JSON.parse(e)}catch(t){return console.log(`JSON parse error: ${t}`),e}return e},CS=(e,t)=>{if(typeof e!="string")return e;const n=e.length-1,r=e[n];if(e[0]==="{"&&r==="}"){let s;const o=e.slice(1,n);try{s=JSON.parse("["+o+"]")}catch{s=o?o.split(","):[]}return s.map(c=>ay(t,c))}return e},_S=e=>typeof e=="string"?e.replace(" ","T"):e,sy=e=>{let t=e;return t=t.replace(/^ws/i,"http"),t=t.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),t.replace(/\/+$/,"")};class Zc{constructor(t,n,r={},i=ry){this.channel=t,this.event=n,this.payload=r,this.timeout=i,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(t){this.timeout=t,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(t){this.payload=Object.assign(Object.assign({},this.payload),t)}receive(t,n){var r;return this._hasReceived(t)&&n((r=this.receivedResp)===null||r===void 0?void 0:r.response),this.recHooks.push({status:t,callback:n}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const t=n=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=n,this._matchReceive(n)};this.channel._on(this.refEvent,{},t),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(t,n){this.refEvent&&this.channel._trigger(this.refEvent,{status:t,response:n})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:t,response:n}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(n))}_hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}}var Wg;(function(e){e.SYNC="sync",e.JOIN="join",e.LEAVE="leave"})(Wg||(Wg={}));class ca{constructor(t,n){this.channel=t,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const r=(n==null?void 0:n.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(r.state,{},i=>{const{onJoin:s,onLeave:o,onSync:c}=this.caller;this.joinRef=this.channel._joinRef(),this.state=ca.syncState(this.state,i,s,o),this.pendingDiffs.forEach(l=>{this.state=ca.syncDiff(this.state,l,s,o)}),this.pendingDiffs=[],c()}),this.channel._on(r.diff,{},i=>{const{onJoin:s,onLeave:o,onSync:c}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(i):(this.state=ca.syncDiff(this.state,i,s,o),c())}),this.onJoin((i,s,o)=>{this.channel._trigger("presence",{event:"join",key:i,currentPresences:s,newPresences:o})}),this.onLeave((i,s,o)=>{this.channel._trigger("presence",{event:"leave",key:i,currentPresences:s,leftPresences:o})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(t,n,r,i){const s=this.cloneDeep(t),o=this.transformState(n),c={},l={};return this.map(s,(u,h)=>{o[u]||(l[u]=h)}),this.map(o,(u,h)=>{const f=s[u];if(f){const p=h.map(j=>j.presence_ref),m=f.map(j=>j.presence_ref),x=h.filter(j=>m.indexOf(j.presence_ref)<0),b=f.filter(j=>p.indexOf(j.presence_ref)<0);x.length>0&&(c[u]=x),b.length>0&&(l[u]=b)}else c[u]=h}),this.syncDiff(s,{joins:c,leaves:l},r,i)}static syncDiff(t,n,r,i){const{joins:s,leaves:o}={joins:this.transformState(n.joins),leaves:this.transformState(n.leaves)};return r||(r=()=>{}),i||(i=()=>{}),this.map(s,(c,l)=>{var u;const h=(u=t[c])!==null&&u!==void 0?u:[];if(t[c]=this.cloneDeep(l),h.length>0){const f=t[c].map(m=>m.presence_ref),p=h.filter(m=>f.indexOf(m.presence_ref)<0);t[c].unshift(...p)}r(c,h,l)}),this.map(o,(c,l)=>{let u=t[c];if(!u)return;const h=l.map(f=>f.presence_ref);u=u.filter(f=>h.indexOf(f.presence_ref)<0),t[c]=u,i(c,u,l),u.length===0&&delete t[c]}),t}static map(t,n){return Object.getOwnPropertyNames(t).map(r=>n(r,t[r]))}static transformState(t){return t=this.cloneDeep(t),Object.getOwnPropertyNames(t).reduce((n,r)=>{const i=t[r];return"metas"in i?n[r]=i.metas.map(s=>(s.presence_ref=s.phx_ref,delete s.phx_ref,delete s.phx_ref_prev,s)):n[r]=i,n},{})}static cloneDeep(t){return JSON.parse(JSON.stringify(t))}onJoin(t){this.caller.onJoin=t}onLeave(t){this.caller.onLeave=t}onSync(t){this.caller.onSync=t}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var qg;(function(e){e.ALL="*",e.INSERT="INSERT",e.UPDATE="UPDATE",e.DELETE="DELETE"})(qg||(qg={}));var Jg;(function(e){e.BROADCAST="broadcast",e.PRESENCE="presence",e.POSTGRES_CHANGES="postgres_changes",e.SYSTEM="system"})(Jg||(Jg={}));var Yg;(function(e){e.SUBSCRIBED="SUBSCRIBED",e.TIMED_OUT="TIMED_OUT",e.CLOSED="CLOSED",e.CHANNEL_ERROR="CHANNEL_ERROR"})(Yg||(Yg={}));class ap{constructor(t,n={config:{}},r){this.topic=t,this.params=n,this.socket=r,this.bindings={},this.state=et.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=t.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},n.config),this.timeout=this.socket.timeout,this.joinPush=new Zc(this,St.join,this.params,this.timeout),this.rejoinTimer=new iy(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=et.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=et.closed,this.socket._remove(this)}),this._onError(i=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,i),this.state=et.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=et.errored,this.rejoinTimer.scheduleTimeout())}),this._on(St.reply,{},(i,s)=>{this._trigger(this._replyEventName(s),i)}),this.presence=new ca(this),this.broadcastEndpointURL=sy(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(t,n=this.timeout){var r,i;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{const{config:{broadcast:s,presence:o,private:c}}=this.params;this._onError(h=>t&&t("CHANNEL_ERROR",h)),this._onClose(()=>t&&t("CLOSED"));const l={},u={broadcast:s,presence:o,postgres_changes:(i=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(h=>h.filter))!==null&&i!==void 0?i:[],private:c};this.socket.accessToken&&(l.access_token=this.socket.accessToken),this.updateJoinPayload(Object.assign({config:u},l)),this.joinedOnce=!0,this._rejoin(n),this.joinPush.receive("ok",({postgres_changes:h})=>{var f;if(this.socket.accessToken&&this.socket.setAuth(this.socket.accessToken),h===void 0){t&&t("SUBSCRIBED");return}else{const p=this.bindings.postgres_changes,m=(f=p==null?void 0:p.length)!==null&&f!==void 0?f:0,x=[];for(let b=0;b<m;b++){const j=p[b],{filter:{event:y,schema:g,table:v,filter:S}}=j,P=h&&h[b];if(P&&P.event===y&&P.schema===g&&P.table===v&&P.filter===S)x.push(Object.assign(Object.assign({},j),{id:P.id}));else{this.unsubscribe(),t&&t("CHANNEL_ERROR",new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=x,t&&t("SUBSCRIBED");return}}).receive("error",h=>{t&&t("CHANNEL_ERROR",new Error(JSON.stringify(Object.values(h).join(", ")||"error")))}).receive("timeout",()=>{t&&t("TIMED_OUT")})}return this}presenceState(){return this.presence.state}async track(t,n={}){return await this.send({type:"presence",event:"track",payload:t},n.timeout||this.timeout)}async untrack(t={}){return await this.send({type:"presence",event:"untrack"},t)}on(t,n,r){return this._on(t,n,r)}async send(t,n={}){var r,i;if(!this._canPush()&&t.type==="broadcast"){const{event:s,payload:o}=t,c={method:"POST",headers:{Authorization:this.socket.accessToken?`Bearer ${this.socket.accessToken}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:o,private:this.private}]})};try{const l=await this._fetchWithTimeout(this.broadcastEndpointURL,c,(r=n.timeout)!==null&&r!==void 0?r:this.timeout);return await((i=l.body)===null||i===void 0?void 0:i.cancel()),l.ok?"ok":"error"}catch(l){return l.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var o,c,l;const u=this._push(t.type,t,n.timeout||this.timeout);t.type==="broadcast"&&!(!((l=(c=(o=this.params)===null||o===void 0?void 0:o.config)===null||c===void 0?void 0:c.broadcast)===null||l===void 0)&&l.ack)&&s("ok"),u.receive("ok",()=>s("ok")),u.receive("error",()=>s("error")),u.receive("timeout",()=>s("timed out"))})}updateJoinPayload(t){this.joinPush.updatePayload(t)}unsubscribe(t=this.timeout){this.state=et.leaving;const n=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(St.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(r=>{const i=new Zc(this,St.leave,{},t);i.receive("ok",()=>{n(),r("ok")}).receive("timeout",()=>{n(),r("timed out")}).receive("error",()=>{r("error")}),i.send(),this._canPush()||i.trigger("ok",{})})}async _fetchWithTimeout(t,n,r){const i=new AbortController,s=setTimeout(()=>i.abort(),r),o=await this.socket.fetch(t,Object.assign(Object.assign({},n),{signal:i.signal}));return clearTimeout(s),o}_push(t,n,r=this.timeout){if(!this.joinedOnce)throw`tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let i=new Zc(this,t,n,r);return this._canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}_onMessage(t,n,r){return n}_isMember(t){return this.topic===t}_joinRef(){return this.joinPush.ref}_trigger(t,n,r){var i,s;const o=t.toLocaleLowerCase(),{close:c,error:l,leave:u,join:h}=St;if(r&&[c,l,u,h].indexOf(o)>=0&&r!==this._joinRef())return;let p=this._onMessage(o,n,r);if(n&&!p)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?(i=this.bindings.postgres_changes)===null||i===void 0||i.filter(m=>{var x,b,j;return((x=m.filter)===null||x===void 0?void 0:x.event)==="*"||((j=(b=m.filter)===null||b===void 0?void 0:b.event)===null||j===void 0?void 0:j.toLocaleLowerCase())===o}).map(m=>m.callback(p,r)):(s=this.bindings[o])===null||s===void 0||s.filter(m=>{var x,b,j,y,g,v;if(["broadcast","presence","postgres_changes"].includes(o))if("id"in m){const S=m.id,P=(x=m.filter)===null||x===void 0?void 0:x.event;return S&&((b=n.ids)===null||b===void 0?void 0:b.includes(S))&&(P==="*"||(P==null?void 0:P.toLocaleLowerCase())===((j=n.data)===null||j===void 0?void 0:j.type.toLocaleLowerCase()))}else{const S=(g=(y=m==null?void 0:m.filter)===null||y===void 0?void 0:y.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return S==="*"||S===((v=n==null?void 0:n.event)===null||v===void 0?void 0:v.toLocaleLowerCase())}else return m.type.toLocaleLowerCase()===o}).map(m=>{if(typeof p=="object"&&"ids"in p){const x=p.data,{schema:b,table:j,commit_timestamp:y,type:g,errors:v}=x;p=Object.assign(Object.assign({},{schema:b,table:j,commit_timestamp:y,eventType:g,new:{},old:{},errors:v}),this._getPayloadRecords(x))}m.callback(p,r)})}_isClosed(){return this.state===et.closed}_isJoined(){return this.state===et.joined}_isJoining(){return this.state===et.joining}_isLeaving(){return this.state===et.leaving}_replyEventName(t){return`chan_reply_${t}`}_on(t,n,r){const i=t.toLocaleLowerCase(),s={type:i,filter:n,callback:r};return this.bindings[i]?this.bindings[i].push(s):this.bindings[i]=[s],this}_off(t,n){const r=t.toLocaleLowerCase();return this.bindings[r]=this.bindings[r].filter(i=>{var s;return!(((s=i.type)===null||s===void 0?void 0:s.toLocaleLowerCase())===r&&ap.isEqual(i.filter,n))}),this}static isEqual(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const r in t)if(t[r]!==n[r])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(t){this._on(St.close,{},t)}_onError(t){this._on(St.error,{},n=>t(n))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(t=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=et.joining,this.joinPush.resend(t))}_getPayloadRecords(t){const n={new:{},old:{}};return(t.type==="INSERT"||t.type==="UPDATE")&&(n.new=Gg(t.columns,t.record)),(t.type==="UPDATE"||t.type==="DELETE")&&(n.old=Gg(t.columns,t.old_record)),n}}const TS=()=>{},ES=typeof WebSocket<"u",AS=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class $S{constructor(t,n){var r;this.accessToken=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=vS,this.params={},this.timeout=ry,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=TS,this.conn=null,this.sendBuffer=[],this.serializer=new kS,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this._resolveFetch=s=>{let o;return s?o=s:typeof fetch>"u"?o=(...c)=>yi(async()=>{const{default:l}=await Promise.resolve().then(()=>Ti);return{default:l}},void 0).then(({default:l})=>l(...c)):o=fetch,(...c)=>o(...c)},this.endPoint=`${t}/${xh.websocket}`,this.httpEndpoint=sy(t),n!=null&&n.transport?this.transport=n.transport:this.transport=null,n!=null&&n.params&&(this.params=n.params),n!=null&&n.headers&&(this.headers=Object.assign(Object.assign({},this.headers),n.headers)),n!=null&&n.timeout&&(this.timeout=n.timeout),n!=null&&n.logger&&(this.logger=n.logger),n!=null&&n.heartbeatIntervalMs&&(this.heartbeatIntervalMs=n.heartbeatIntervalMs);const i=(r=n==null?void 0:n.params)===null||r===void 0?void 0:r.apikey;if(i&&(this.accessToken=i,this.apiKey=i),this.reconnectAfterMs=n!=null&&n.reconnectAfterMs?n.reconnectAfterMs:s=>[1e3,2e3,5e3,1e4][s-1]||1e4,this.encode=n!=null&&n.encode?n.encode:(s,o)=>o(JSON.stringify(s)),this.decode=n!=null&&n.decode?n.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new iy(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(n==null?void 0:n.fetch),n!=null&&n.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.worker=(n==null?void 0:n.worker)||!1,this.workerUrl=n==null?void 0:n.workerUrl}}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this._endPointURL(),void 0,{headers:this.headers});return}if(ES){this.conn=new WebSocket(this._endPointURL()),this.setupConnection();return}this.conn=new zS(this._endPointURL(),void 0,{close:()=>{this.conn=null}}),yi(async()=>{const{default:t}=await import("./browser-QGYuEDlM.js").then(n=>n.b);return{default:t}},[]).then(({default:t})=>{this.conn=new t(this._endPointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}disconnect(t,n){this.conn&&(this.conn.onclose=function(){},t?this.conn.close(t,n??""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(t){const n=await t.unsubscribe();return this.channels.length===0&&this.disconnect(),n}async removeAllChannels(){const t=await Promise.all(this.channels.map(n=>n.unsubscribe()));return this.disconnect(),t}log(t,n,r){this.logger(t,n,r)}connectionState(){switch(this.conn&&this.conn.readyState){case oi.connecting:return dr.Connecting;case oi.open:return dr.Open;case oi.closing:return dr.Closing;default:return dr.Closed}}isConnected(){return this.connectionState()===dr.Open}channel(t,n={config:{}}){const r=new ap(`realtime:${t}`,n,this);return this.channels.push(r),r}push(t){const{topic:n,event:r,payload:i,ref:s}=t,o=()=>{this.encode(t,c=>{var l;(l=this.conn)===null||l===void 0||l.send(c)})};this.log("push",`${n} ${r} (${s})`,i),this.isConnected()?o():this.sendBuffer.push(o)}setAuth(t){this.accessToken=t,this.channels.forEach(n=>{t&&n.updateJoinPayload({access_token:t}),n.joinedOnce&&n._isJoined()&&n._push(St.access_token,{access_token:t})})}_makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}_leaveOpenTopic(t){let n=this.channels.find(r=>r.topic===t&&(r._isJoined()||r._isJoining()));n&&(this.log("transport",`leaving duplicate topic "${t}"`),n.unsubscribe())}_remove(t){this.channels=this.channels.filter(n=>n._joinRef()!==t._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=t=>this._onConnError(t),this.conn.onmessage=t=>this._onConnMessage(t),this.conn.onclose=t=>this._onConnClose(t))}_endPointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:yS}))}_onConnMessage(t){this.decode(t.data,n=>{let{topic:r,event:i,payload:s,ref:o}=n;(o&&o===this.pendingHeartbeatRef||i===(s==null?void 0:s.type))&&(this.pendingHeartbeatRef=null),this.log("receive",`${s.status||""} ${r} ${i} ${o&&"("+o+")"||""}`,s),this.channels.filter(c=>c._isMember(r)).forEach(c=>c._trigger(i,s,o)),this.stateChangeCallbacks.message.forEach(c=>c(n))})}async _onConnOpen(){if(this.log("transport",`connected to ${this._endPointURL()}`),this._flushSendBuffer(),this.reconnectTimer.reset(),!this.worker)this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this._sendHeartbeat(),this.heartbeatIntervalMs);else{this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const t=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(t),this.workerRef.onerror=n=>{this.log("worker","worker error",n.message),this.workerRef.terminate()},this.workerRef.onmessage=n=>{n.data.event==="keepAlive"&&this._sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}this.stateChangeCallbacks.open.forEach(t=>t())}_onConnClose(t){this.log("transport","close",t),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(n=>n(t))}_onConnError(t){this.log("transport",t.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(n=>n(t))}_triggerChanError(){this.channels.forEach(t=>t._trigger(St.error))}_appendParams(t,n){if(Object.keys(n).length===0)return t;const r=t.match(/\?/)?"&":"?",i=new URLSearchParams(n);return`${t}${r}${i}`}_flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}_sendHeartbeat(){var t;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),(t=this.conn)===null||t===void 0||t.close(bS,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth(this.accessToken)}}_workerObjectUrl(t){let n;if(t)n=t;else{const r=new Blob([AS],{type:"application/javascript"});n=URL.createObjectURL(r)}return n}}class zS{constructor(t,n,r){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=oi.connecting,this.send=()=>{},this.url=null,this.url=t,this.close=r.close}}class sp extends Error{constructor(t){super(t),this.__isStorageError=!0,this.name="StorageError"}}function je(e){return typeof e=="object"&&e!==null&&"__isStorageError"in e}class LS extends sp{constructor(t,n){super(t),this.name="StorageApiError",this.status=n}toJSON(){return{name:this.name,message:this.message,status:this.status}}}class yh extends sp{constructor(t,n){super(t),this.name="StorageUnknownError",this.originalError=n}}var MS=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function c(h){try{u(r.next(h))}catch(f){o(f)}}function l(h){try{u(r.throw(h))}catch(f){o(f)}}function u(h){h.done?s(h.value):i(h.value).then(c,l)}u((r=r.apply(e,t||[])).next())})};const oy=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>yi(async()=>{const{default:r}=await Promise.resolve().then(()=>Ti);return{default:r}},void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},IS=()=>MS(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield yi(()=>Promise.resolve().then(()=>Ti),void 0)).Response:Response}),bh=e=>{if(Array.isArray(e))return e.map(n=>bh(n));if(typeof e=="function"||e!==Object(e))return e;const t={};return Object.entries(e).forEach(([n,r])=>{const i=n.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));t[i]=bh(r)}),t};var Er=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function c(h){try{u(r.next(h))}catch(f){o(f)}}function l(h){try{u(r.throw(h))}catch(f){o(f)}}function u(h){h.done?s(h.value):i(h.value).then(c,l)}u((r=r.apply(e,t||[])).next())})};const eu=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),RS=(e,t,n)=>Er(void 0,void 0,void 0,function*(){const r=yield IS();e instanceof r&&!(n!=null&&n.noResolveJson)?e.json().then(i=>{t(new LS(eu(i),e.status||500))}).catch(i=>{t(new yh(eu(i),i))}):t(new yh(eu(e),e))}),OS=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json"},t==null?void 0:t.headers),r&&(i.body=JSON.stringify(r)),Object.assign(Object.assign({},i),n))};function ts(e,t,n,r,i,s){return Er(this,void 0,void 0,function*(){return new Promise((o,c)=>{e(n,OS(t,r,i,s)).then(l=>{if(!l.ok)throw l;return r!=null&&r.noResolveJson?l:l.json()}).then(l=>o(l)).catch(l=>RS(l,c,r))})})}function yl(e,t,n,r){return Er(this,void 0,void 0,function*(){return ts(e,"GET",t,n,r)})}function wn(e,t,n,r,i){return Er(this,void 0,void 0,function*(){return ts(e,"POST",t,r,i,n)})}function DS(e,t,n,r,i){return Er(this,void 0,void 0,function*(){return ts(e,"PUT",t,r,i,n)})}function BS(e,t,n,r){return Er(this,void 0,void 0,function*(){return ts(e,"HEAD",t,Object.assign(Object.assign({},n),{noResolveJson:!0}),r)})}function ly(e,t,n,r,i){return Er(this,void 0,void 0,function*(){return ts(e,"DELETE",t,r,i,n)})}var Ve=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function c(h){try{u(r.next(h))}catch(f){o(f)}}function l(h){try{u(r.throw(h))}catch(f){o(f)}}function u(h){h.done?s(h.value):i(h.value).then(c,l)}u((r=r.apply(e,t||[])).next())})};const NS={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Xg={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class FS{constructor(t,n={},r,i){this.url=t,this.headers=n,this.bucketId=r,this.fetch=oy(i)}uploadOrUpdate(t,n,r,i){return Ve(this,void 0,void 0,function*(){try{let s;const o=Object.assign(Object.assign({},Xg),i);let c=Object.assign(Object.assign({},this.headers),t==="POST"&&{"x-upsert":String(o.upsert)});const l=o.metadata;typeof Blob<"u"&&r instanceof Blob?(s=new FormData,s.append("cacheControl",o.cacheControl),l&&s.append("metadata",this.encodeMetadata(l)),s.append("",r)):typeof FormData<"u"&&r instanceof FormData?(s=r,s.append("cacheControl",o.cacheControl),l&&s.append("metadata",this.encodeMetadata(l))):(s=r,c["cache-control"]=`max-age=${o.cacheControl}`,c["content-type"]=o.contentType,l&&(c["x-metadata"]=this.toBase64(this.encodeMetadata(l)))),i!=null&&i.headers&&(c=Object.assign(Object.assign({},c),i.headers));const u=this._removeEmptyFolders(n),h=this._getFinalPath(u),f=yield this.fetch(`${this.url}/object/${h}`,Object.assign({method:t,body:s,headers:c},o!=null&&o.duplex?{duplex:o.duplex}:{})),p=yield f.json();return f.ok?{data:{path:u,id:p.Id,fullPath:p.Key},error:null}:{data:null,error:p}}catch(s){if(je(s))return{data:null,error:s};throw s}})}upload(t,n,r){return Ve(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",t,n,r)})}uploadToSignedUrl(t,n,r,i){return Ve(this,void 0,void 0,function*(){const s=this._removeEmptyFolders(t),o=this._getFinalPath(s),c=new URL(this.url+`/object/upload/sign/${o}`);c.searchParams.set("token",n);try{let l;const u=Object.assign({upsert:Xg.upsert},i),h=Object.assign(Object.assign({},this.headers),{"x-upsert":String(u.upsert)});typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",u.cacheControl),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.append("cacheControl",u.cacheControl)):(l=r,h["cache-control"]=`max-age=${u.cacheControl}`,h["content-type"]=u.contentType);const f=yield this.fetch(c.toString(),{method:"PUT",body:l,headers:h}),p=yield f.json();return f.ok?{data:{path:s,fullPath:p.Key},error:null}:{data:null,error:p}}catch(l){if(je(l))return{data:null,error:l};throw l}})}createSignedUploadUrl(t,n){return Ve(this,void 0,void 0,function*(){try{let r=this._getFinalPath(t);const i=Object.assign({},this.headers);n!=null&&n.upsert&&(i["x-upsert"]="true");const s=yield wn(this.fetch,`${this.url}/object/upload/sign/${r}`,{},{headers:i}),o=new URL(this.url+s.url),c=o.searchParams.get("token");if(!c)throw new sp("No token returned by API");return{data:{signedUrl:o.toString(),path:t,token:c},error:null}}catch(r){if(je(r))return{data:null,error:r};throw r}})}update(t,n,r){return Ve(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",t,n,r)})}move(t,n,r){return Ve(this,void 0,void 0,function*(){try{return{data:yield wn(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers}),error:null}}catch(i){if(je(i))return{data:null,error:i};throw i}})}copy(t,n,r){return Ve(this,void 0,void 0,function*(){try{return{data:{path:(yield wn(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:t,destinationKey:n,destinationBucket:r==null?void 0:r.destinationBucket},{headers:this.headers})).Key},error:null}}catch(i){if(je(i))return{data:null,error:i};throw i}})}createSignedUrl(t,n,r){return Ve(this,void 0,void 0,function*(){try{let i=this._getFinalPath(t),s=yield wn(this.fetch,`${this.url}/object/sign/${i}`,Object.assign({expiresIn:n},r!=null&&r.transform?{transform:r.transform}:{}),{headers:this.headers});const o=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return s={signedUrl:encodeURI(`${this.url}${s.signedURL}${o}`)},{data:s,error:null}}catch(i){if(je(i))return{data:null,error:i};throw i}})}createSignedUrls(t,n,r){return Ve(this,void 0,void 0,function*(){try{const i=yield wn(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:n,paths:t},{headers:this.headers}),s=r!=null&&r.download?`&download=${r.download===!0?"":r.download}`:"";return{data:i.map(o=>Object.assign(Object.assign({},o),{signedUrl:o.signedURL?encodeURI(`${this.url}${o.signedURL}${s}`):null})),error:null}}catch(i){if(je(i))return{data:null,error:i};throw i}})}download(t,n){return Ve(this,void 0,void 0,function*(){const i=typeof(n==null?void 0:n.transform)<"u"?"render/image/authenticated":"object",s=this.transformOptsToQueryString((n==null?void 0:n.transform)||{}),o=s?`?${s}`:"";try{const c=this._getFinalPath(t);return{data:yield(yield yl(this.fetch,`${this.url}/${i}/${c}${o}`,{headers:this.headers,noResolveJson:!0})).blob(),error:null}}catch(c){if(je(c))return{data:null,error:c};throw c}})}info(t){return Ve(this,void 0,void 0,function*(){const n=this._getFinalPath(t);try{const r=yield yl(this.fetch,`${this.url}/object/info/${n}`,{headers:this.headers});return{data:bh(r),error:null}}catch(r){if(je(r))return{data:null,error:r};throw r}})}exists(t){return Ve(this,void 0,void 0,function*(){const n=this._getFinalPath(t);try{return yield BS(this.fetch,`${this.url}/object/${n}`,{headers:this.headers}),{data:!0,error:null}}catch(r){if(je(r)&&r instanceof yh){const i=r.originalError;if([400,404].includes(i==null?void 0:i.status))return{data:!1,error:r}}throw r}})}getPublicUrl(t,n){const r=this._getFinalPath(t),i=[],s=n!=null&&n.download?`download=${n.download===!0?"":n.download}`:"";s!==""&&i.push(s);const c=typeof(n==null?void 0:n.transform)<"u"?"render/image":"object",l=this.transformOptsToQueryString((n==null?void 0:n.transform)||{});l!==""&&i.push(l);let u=i.join("&");return u!==""&&(u=`?${u}`),{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${r}${u}`)}}}remove(t){return Ve(this,void 0,void 0,function*(){try{return{data:yield ly(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:t},{headers:this.headers}),error:null}}catch(n){if(je(n))return{data:null,error:n};throw n}})}list(t,n,r){return Ve(this,void 0,void 0,function*(){try{const i=Object.assign(Object.assign(Object.assign({},NS),n),{prefix:t||""});return{data:yield wn(this.fetch,`${this.url}/object/list/${this.bucketId}`,i,{headers:this.headers},r),error:null}}catch(i){if(je(i))return{data:null,error:i};throw i}})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(t){const n=[];return t.width&&n.push(`width=${t.width}`),t.height&&n.push(`height=${t.height}`),t.resize&&n.push(`resize=${t.resize}`),t.format&&n.push(`format=${t.format}`),t.quality&&n.push(`quality=${t.quality}`),n.join("&")}}const VS="2.7.1",US={"X-Client-Info":`storage-js/${VS}`};var Lr=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function c(h){try{u(r.next(h))}catch(f){o(f)}}function l(h){try{u(r.throw(h))}catch(f){o(f)}}function u(h){h.done?s(h.value):i(h.value).then(c,l)}u((r=r.apply(e,t||[])).next())})};class HS{constructor(t,n={},r){this.url=t,this.headers=Object.assign(Object.assign({},US),n),this.fetch=oy(r)}listBuckets(){return Lr(this,void 0,void 0,function*(){try{return{data:yield yl(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(t){if(je(t))return{data:null,error:t};throw t}})}getBucket(t){return Lr(this,void 0,void 0,function*(){try{return{data:yield yl(this.fetch,`${this.url}/bucket/${t}`,{headers:this.headers}),error:null}}catch(n){if(je(n))return{data:null,error:n};throw n}})}createBucket(t,n={public:!1}){return Lr(this,void 0,void 0,function*(){try{return{data:yield wn(this.fetch,`${this.url}/bucket`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(je(r))return{data:null,error:r};throw r}})}updateBucket(t,n){return Lr(this,void 0,void 0,function*(){try{return{data:yield DS(this.fetch,`${this.url}/bucket/${t}`,{id:t,name:t,public:n.public,file_size_limit:n.fileSizeLimit,allowed_mime_types:n.allowedMimeTypes},{headers:this.headers}),error:null}}catch(r){if(je(r))return{data:null,error:r};throw r}})}emptyBucket(t){return Lr(this,void 0,void 0,function*(){try{return{data:yield wn(this.fetch,`${this.url}/bucket/${t}/empty`,{},{headers:this.headers}),error:null}}catch(n){if(je(n))return{data:null,error:n};throw n}})}deleteBucket(t){return Lr(this,void 0,void 0,function*(){try{return{data:yield ly(this.fetch,`${this.url}/bucket/${t}`,{},{headers:this.headers}),error:null}}catch(n){if(je(n))return{data:null,error:n};throw n}})}}class KS extends HS{constructor(t,n={},r){super(t,n,r)}from(t){return new FS(this.url,this.headers,t,this.fetch)}}const GS="2.46.1";let Ji="";typeof Deno<"u"?Ji="deno":typeof document<"u"?Ji="web":typeof navigator<"u"&&navigator.product==="ReactNative"?Ji="react-native":Ji="node";const WS={"X-Client-Info":`supabase-js-${Ji}/${GS}`},qS={headers:WS},JS={schema:"public"},YS={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},XS={};var QS=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function c(h){try{u(r.next(h))}catch(f){o(f)}}function l(h){try{u(r.throw(h))}catch(f){o(f)}}function u(h){h.done?s(h.value):i(h.value).then(c,l)}u((r=r.apply(e,t||[])).next())})};const ZS=e=>{let t;return e?t=e:typeof fetch>"u"?t=G5:t=fetch,(...n)=>t(...n)},eP=()=>typeof Headers>"u"?W5:Headers,tP=(e,t,n)=>{const r=ZS(n),i=eP();return(s,o)=>QS(void 0,void 0,void 0,function*(){var c;const l=(c=yield t())!==null&&c!==void 0?c:e;let u=new i(o==null?void 0:o.headers);return u.has("apikey")||u.set("apikey",e),u.has("Authorization")||u.set("Authorization",`Bearer ${l}`),r(s,Object.assign(Object.assign({},o),{headers:u}))})};var nP=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function c(h){try{u(r.next(h))}catch(f){o(f)}}function l(h){try{u(r.throw(h))}catch(f){o(f)}}function u(h){h.done?s(h.value):i(h.value).then(c,l)}u((r=r.apply(e,t||[])).next())})};function rP(e){return e.replace(/\/$/,"")}function iP(e,t){const{db:n,auth:r,realtime:i,global:s}=e,{db:o,auth:c,realtime:l,global:u}=t,h={db:Object.assign(Object.assign({},o),n),auth:Object.assign(Object.assign({},c),r),realtime:Object.assign(Object.assign({},l),i),global:Object.assign(Object.assign({},u),s),accessToken:()=>nP(this,void 0,void 0,function*(){return""})};return e.accessToken?h.accessToken=e.accessToken:delete h.accessToken,h}const cy="2.65.1",aP="http://localhost:9999",sP="supabase.auth.token",oP={"X-Client-Info":`gotrue-js/${cy}`},Qg=10,kh="X-Supabase-Api-Version",uy={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}};function lP(e){return Math.round(Date.now()/1e3)+e}function cP(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){const t=Math.random()*16|0;return(e=="x"?t:t&3|8).toString(16)})}const kt=()=>typeof document<"u",nr={tested:!1,writable:!1},ua=()=>{if(!kt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(nr.tested)return nr.writable;const e=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(e,e),globalThis.localStorage.removeItem(e),nr.tested=!0,nr.writable=!0}catch{nr.tested=!0,nr.writable=!1}return nr.writable};function tu(e){const t={},n=new URL(e);if(n.hash&&n.hash[0]==="#")try{new URLSearchParams(n.hash.substring(1)).forEach((i,s)=>{t[s]=i})}catch{}return n.searchParams.forEach((r,i)=>{t[i]=r}),t}const dy=e=>{let t;return e?t=e:typeof fetch>"u"?t=(...n)=>yi(async()=>{const{default:r}=await Promise.resolve().then(()=>Ti);return{default:r}},void 0).then(({default:r})=>r(...n)):t=fetch,(...n)=>t(...n)},uP=e=>typeof e=="object"&&e!==null&&"status"in e&&"ok"in e&&"json"in e&&typeof e.json=="function",hy=async(e,t,n)=>{await e.setItem(t,JSON.stringify(n))},Cs=async(e,t)=>{const n=await e.getItem(t);if(!n)return null;try{return JSON.parse(n)}catch{return n}},_s=async(e,t)=>{await e.removeItem(t)};function dP(e){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let n="",r,i,s,o,c,l,u,h=0;for(e=e.replace("-","+").replace("_","/");h<e.length;)o=t.indexOf(e.charAt(h++)),c=t.indexOf(e.charAt(h++)),l=t.indexOf(e.charAt(h++)),u=t.indexOf(e.charAt(h++)),r=o<<2|c>>4,i=(c&15)<<4|l>>2,s=(l&3)<<6|u,n=n+String.fromCharCode(r),l!=64&&i!=0&&(n=n+String.fromCharCode(i)),u!=64&&s!=0&&(n=n+String.fromCharCode(s));return n}class ac{constructor(){this.promise=new ac.promiseConstructor((t,n)=>{this.resolve=t,this.reject=n})}}ac.promiseConstructor=Promise;function Zg(e){const t=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,n=e.split(".");if(n.length!==3)throw new Error("JWT is not valid: not a JWT structure");if(!t.test(n[1]))throw new Error("JWT is not valid: payload is not in base64url format");const r=n[1];return JSON.parse(dP(r))}async function hP(e){return await new Promise(t=>{setTimeout(()=>t(null),e)})}function fP(e,t){return new Promise((r,i)=>{(async()=>{for(let s=0;s<1/0;s++)try{const o=await e(s);if(!t(s,null,o)){r(o);return}}catch(o){if(!t(s,o)){i(o);return}}})()})}function pP(e){return("0"+e.toString(16)).substr(-2)}function mP(){const t=new Uint32Array(56);if(typeof crypto>"u"){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=n.length;let i="";for(let s=0;s<56;s++)i+=n.charAt(Math.floor(Math.random()*r));return i}return crypto.getRandomValues(t),Array.from(t,pP).join("")}async function gP(e){const n=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",n),i=new Uint8Array(r);return Array.from(i).map(s=>String.fromCharCode(s)).join("")}function xP(e){return btoa(e).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function vP(e){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),e;const n=await gP(e);return xP(n)}async function Mr(e,t,n=!1){const r=mP();let i=r;n&&(i+="/PASSWORD_RECOVERY"),await hy(e,`${t}-code-verifier`,i);const s=await vP(r);return[s,r===s?"plain":"s256"]}const yP=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function bP(e){const t=e.headers.get(kh);if(!t||!t.match(yP))return null;try{return new Date(`${t}T00:00:00.0Z`)}catch{return null}}class op extends Error{constructor(t,n,r){super(t),this.__isAuthError=!0,this.name="AuthError",this.status=n,this.code=r}}function W(e){return typeof e=="object"&&e!==null&&"__isAuthError"in e}class kP extends op{constructor(t,n,r){super(t,n,r),this.name="AuthApiError",this.status=n,this.code=r}}function wP(e){return W(e)&&e.name==="AuthApiError"}class fy extends op{constructor(t,n){super(t),this.name="AuthUnknownError",this.originalError=n}}class Ar extends op{constructor(t,n,r,i){super(t,r,i),this.name=n,this.status=r}}class xn extends Ar{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function jP(e){return W(e)&&e.name==="AuthSessionMissingError"}class nu extends Ar{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Ts extends Ar{constructor(t){super(t,"AuthInvalidCredentialsError",400,void 0)}}class Es extends Ar{constructor(t,n=null){super(t,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class e0 extends Ar{constructor(t,n=null){super(t,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=n}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class wh extends Ar{constructor(t,n){super(t,"AuthRetryableFetchError",n,void 0)}}function ru(e){return W(e)&&e.name==="AuthRetryableFetchError"}class t0 extends Ar{constructor(t,n,r){super(t,"AuthWeakPasswordError",n,"weak_password"),this.reasons=r}}var SP=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};const ur=e=>e.msg||e.message||e.error_description||e.error||JSON.stringify(e),PP=[502,503,504];async function n0(e){var t;if(!uP(e))throw new wh(ur(e),0);if(PP.includes(e.status))throw new wh(ur(e),e.status);let n;try{n=await e.json()}catch(s){throw new fy(ur(s),s)}let r;const i=bP(e);if(i&&i.getTime()>=uy["2024-01-01"].timestamp&&typeof n=="object"&&n&&typeof n.code=="string"?r=n.code:typeof n=="object"&&n&&typeof n.error_code=="string"&&(r=n.error_code),r){if(r==="weak_password")throw new t0(ur(n),e.status,((t=n.weak_password)===null||t===void 0?void 0:t.reasons)||[]);if(r==="session_not_found")throw new xn}else if(typeof n=="object"&&n&&typeof n.weak_password=="object"&&n.weak_password&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.reasons.reduce((s,o)=>s&&typeof o=="string",!0))throw new t0(ur(n),e.status,n.weak_password.reasons);throw new kP(ur(n),e.status||500,r)}const CP=(e,t,n,r)=>{const i={method:e,headers:(t==null?void 0:t.headers)||{}};return e==="GET"?i:(i.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},t==null?void 0:t.headers),i.body=JSON.stringify(r),Object.assign(Object.assign({},i),n))};async function Y(e,t,n,r){var i;const s=Object.assign({},r==null?void 0:r.headers);s[kh]||(s[kh]=uy["2024-01-01"].name),r!=null&&r.jwt&&(s.Authorization=`Bearer ${r.jwt}`);const o=(i=r==null?void 0:r.query)!==null&&i!==void 0?i:{};r!=null&&r.redirectTo&&(o.redirect_to=r.redirectTo);const c=Object.keys(o).length?"?"+new URLSearchParams(o).toString():"",l=await _P(e,t,n+c,{headers:s,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(l):{data:Object.assign({},l),error:null}}async function _P(e,t,n,r,i,s){const o=CP(t,r,i,s);let c;try{c=await e(n,Object.assign({},o))}catch(l){throw console.error(l),new wh(ur(l),0)}if(c.ok||await n0(c),r!=null&&r.noResolveJson)return c;try{return await c.json()}catch(l){await n0(l)}}function vn(e){var t;let n=null;$P(e)&&(n=Object.assign({},e),e.expires_at||(n.expires_at=lP(e.expires_in)));const r=(t=e.user)!==null&&t!==void 0?t:e;return{data:{session:n,user:r},error:null}}function r0(e){const t=vn(e);return!t.error&&e.weak_password&&typeof e.weak_password=="object"&&Array.isArray(e.weak_password.reasons)&&e.weak_password.reasons.length&&e.weak_password.message&&typeof e.weak_password.message=="string"&&e.weak_password.reasons.reduce((n,r)=>n&&typeof r=="string",!0)&&(t.data.weak_password=e.weak_password),t}function Pn(e){var t;return{data:{user:(t=e.user)!==null&&t!==void 0?t:e},error:null}}function TP(e){return{data:e,error:null}}function EP(e){const{action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:s}=e,o=SP(e,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),c={action_link:t,email_otp:n,hashed_token:r,redirect_to:i,verification_type:s},l=Object.assign({},o);return{data:{properties:c,user:l},error:null}}function AP(e){return e}function $P(e){return e.access_token&&e.refresh_token&&e.expires_in}var zP=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};class LP{constructor({url:t="",headers:n={},fetch:r}){this.url=t,this.headers=n,this.fetch=dy(r),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(t,n="global"){try{return await Y(this.fetch,"POST",`${this.url}/logout?scope=${n}`,{headers:this.headers,jwt:t,noResolveJson:!0}),{data:null,error:null}}catch(r){if(W(r))return{data:null,error:r};throw r}}async inviteUserByEmail(t,n={}){try{return await Y(this.fetch,"POST",`${this.url}/invite`,{body:{email:t,data:n.data},headers:this.headers,redirectTo:n.redirectTo,xform:Pn})}catch(r){if(W(r))return{data:{user:null},error:r};throw r}}async generateLink(t){try{const{options:n}=t,r=zP(t,["options"]),i=Object.assign(Object.assign({},r),n);return"newEmail"in r&&(i.new_email=r==null?void 0:r.newEmail,delete i.newEmail),await Y(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:i,headers:this.headers,xform:EP,redirectTo:n==null?void 0:n.redirectTo})}catch(n){if(W(n))return{data:{properties:null,user:null},error:n};throw n}}async createUser(t){try{return await Y(this.fetch,"POST",`${this.url}/admin/users`,{body:t,headers:this.headers,xform:Pn})}catch(n){if(W(n))return{data:{user:null},error:n};throw n}}async listUsers(t){var n,r,i,s,o,c,l;try{const u={nextPage:null,lastPage:0,total:0},h=await Y(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(n=t==null?void 0:t.page)===null||n===void 0?void 0:n.toString())!==null&&r!==void 0?r:"",per_page:(s=(i=t==null?void 0:t.perPage)===null||i===void 0?void 0:i.toString())!==null&&s!==void 0?s:""},xform:AP});if(h.error)throw h.error;const f=await h.json(),p=(o=h.headers.get("x-total-count"))!==null&&o!==void 0?o:0,m=(l=(c=h.headers.get("link"))===null||c===void 0?void 0:c.split(","))!==null&&l!==void 0?l:[];return m.length>0&&(m.forEach(x=>{const b=parseInt(x.split(";")[0].split("=")[1].substring(0,1)),j=JSON.parse(x.split(";")[1].split("=")[1]);u[`${j}Page`]=b}),u.total=parseInt(p)),{data:Object.assign(Object.assign({},f),u),error:null}}catch(u){if(W(u))return{data:{users:[]},error:u};throw u}}async getUserById(t){try{return await Y(this.fetch,"GET",`${this.url}/admin/users/${t}`,{headers:this.headers,xform:Pn})}catch(n){if(W(n))return{data:{user:null},error:n};throw n}}async updateUserById(t,n){try{return await Y(this.fetch,"PUT",`${this.url}/admin/users/${t}`,{body:n,headers:this.headers,xform:Pn})}catch(r){if(W(r))return{data:{user:null},error:r};throw r}}async deleteUser(t,n=!1){try{return await Y(this.fetch,"DELETE",`${this.url}/admin/users/${t}`,{headers:this.headers,body:{should_soft_delete:n},xform:Pn})}catch(r){if(W(r))return{data:{user:null},error:r};throw r}}async _listFactors(t){try{const{data:n,error:r}=await Y(this.fetch,"GET",`${this.url}/admin/users/${t.userId}/factors`,{headers:this.headers,xform:i=>({data:{factors:i},error:null})});return{data:n,error:r}}catch(n){if(W(n))return{data:null,error:n};throw n}}async _deleteFactor(t){try{return{data:await Y(this.fetch,"DELETE",`${this.url}/admin/users/${t.userId}/factors/${t.id}`,{headers:this.headers}),error:null}}catch(n){if(W(n))return{data:null,error:n};throw n}}}const MP={getItem:e=>ua()?globalThis.localStorage.getItem(e):null,setItem:(e,t)=>{ua()&&globalThis.localStorage.setItem(e,t)},removeItem:e=>{ua()&&globalThis.localStorage.removeItem(e)}};function i0(e={}){return{getItem:t=>e[t]||null,setItem:(t,n)=>{e[t]=n},removeItem:t=>{delete e[t]}}}function IP(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const Ir={debug:!!(globalThis&&ua()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class py extends Error{constructor(t){super(t),this.isAcquireTimeout=!0}}class RP extends py{}async function OP(e,t,n){Ir.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",e,t);const r=new globalThis.AbortController;return t>0&&setTimeout(()=>{r.abort(),Ir.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",e)},t),await globalThis.navigator.locks.request(e,t===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:r.signal},async i=>{if(i){Ir.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",e,i.name);try{return await n()}finally{Ir.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",e,i.name)}}else{if(t===0)throw Ir.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",e),new RP(`Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`);if(Ir.debug)try{const s=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(s,null,"  "))}catch(s){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",s)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await n()}})}IP();const DP={url:aP,storageKey:sP,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:oP,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1},Vi=30*1e3,a0=3;async function s0(e,t,n){return await n()}class Ra{constructor(t){var n,r;this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=Ra.nextInstanceID,Ra.nextInstanceID+=1,this.instanceID>0&&kt()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const i=Object.assign(Object.assign({},DP),t);if(this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.persistSession=i.persistSession,this.storageKey=i.storageKey,this.autoRefreshToken=i.autoRefreshToken,this.admin=new LP({url:i.url,headers:i.headers,fetch:i.fetch}),this.url=i.url,this.headers=i.headers,this.fetch=dy(i.fetch),this.lock=i.lock||s0,this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,i.lock?this.lock=i.lock:kt()&&(!((n=globalThis==null?void 0:globalThis.navigator)===null||n===void 0)&&n.locks)?this.lock=OP:this.lock=s0,this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?i.storage?this.storage=i.storage:ua()?this.storage=MP:(this.memoryStorage={},this.storage=i0(this.memoryStorage)):(this.memoryStorage={},this.storage=i0(this.memoryStorage)),kt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(s){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",s)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async s=>{this._debug("received broadcast notification from other tab or client",s),await this._notifyAllSubscribers(s.data.event,s.data.session,!1)})}this.initialize()}_debug(...t){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${cy}) ${new Date().toISOString()}`,...t),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){try{const t=kt()?await this._isPKCEFlow():!1;if(this._debug("#_initialize()","begin","is PKCE flow",t),t||this.detectSessionInUrl&&this._isImplicitGrantFlow()){const{data:n,error:r}=await this._getSessionFromURL(t);if(r)return this._debug("#_initialize()","error detecting session from URL",r),(r==null?void 0:r.code)==="identity_already_exists"?{error:r}:(await this._removeSession(),{error:r});const{session:i,redirectType:s}=n;return this._debug("#_initialize()","detected session in URL",i,"redirect type",s),await this._saveSession(i),setTimeout(async()=>{s==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",i):await this._notifyAllSubscribers("SIGNED_IN",i)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return W(t)?{error:t}:{error:new fy("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(t){var n,r,i;try{const s=await Y(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(n=t==null?void 0:t.options)===null||n===void 0?void 0:n.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(i=t==null?void 0:t.options)===null||i===void 0?void 0:i.captchaToken}},xform:vn}),{data:o,error:c}=s;if(c||!o)return{data:{user:null,session:null},error:c};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(W(s))return{data:{user:null,session:null},error:s};throw s}}async signUp(t){var n,r,i;try{let s;if("email"in t){const{email:h,password:f,options:p}=t;let m=null,x=null;this.flowType==="pkce"&&([m,x]=await Mr(this.storage,this.storageKey)),s=await Y(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:p==null?void 0:p.emailRedirectTo,body:{email:h,password:f,data:(n=p==null?void 0:p.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:m,code_challenge_method:x},xform:vn})}else if("phone"in t){const{phone:h,password:f,options:p}=t;s=await Y(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:f,data:(r=p==null?void 0:p.data)!==null&&r!==void 0?r:{},channel:(i=p==null?void 0:p.channel)!==null&&i!==void 0?i:"sms",gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken}},xform:vn})}else throw new Ts("You must provide either an email or phone number and a password");const{data:o,error:c}=s;if(c||!o)return{data:{user:null,session:null},error:c};const l=o.session,u=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(s){if(W(s))return{data:{user:null,session:null},error:s};throw s}}async signInWithPassword(t){try{let n;if("email"in t){const{email:s,password:o,options:c}=t;n=await Y(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:r0})}else if("phone"in t){const{phone:s,password:o,options:c}=t;n=await Y(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}},xform:r0})}else throw new Ts("You must provide either an email or phone number and a password");const{data:r,error:i}=n;return i?{data:{user:null,session:null},error:i}:!r||!r.session||!r.user?{data:{user:null,session:null},error:new nu}:(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),{data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:i})}catch(n){if(W(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOAuth(t){var n,r,i,s;return await this._handleProviderSignIn(t.provider,{redirectTo:(n=t.options)===null||n===void 0?void 0:n.redirectTo,scopes:(r=t.options)===null||r===void 0?void 0:r.scopes,queryParams:(i=t.options)===null||i===void 0?void 0:i.queryParams,skipBrowserRedirect:(s=t.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(t){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(t))}async _exchangeCodeForSession(t){const n=await Cs(this.storage,`${this.storageKey}-code-verifier`),[r,i]=(n??"").split("/");try{const{data:s,error:o}=await Y(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:t,code_verifier:r},xform:vn});if(await _s(this.storage,`${this.storageKey}-code-verifier`),o)throw o;return!s||!s.session||!s.user?{data:{user:null,session:null,redirectType:null},error:new nu}:(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),{data:Object.assign(Object.assign({},s),{redirectType:i??null}),error:o})}catch(s){if(W(s))return{data:{user:null,session:null,redirectType:null},error:s};throw s}}async signInWithIdToken(t){try{const{options:n,provider:r,token:i,access_token:s,nonce:o}=t,c=await Y(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:i,access_token:s,nonce:o,gotrue_meta_security:{captcha_token:n==null?void 0:n.captchaToken}},xform:vn}),{data:l,error:u}=c;return u?{data:{user:null,session:null},error:u}:!l||!l.session||!l.user?{data:{user:null,session:null},error:new nu}:(l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),{data:l,error:u})}catch(n){if(W(n))return{data:{user:null,session:null},error:n};throw n}}async signInWithOtp(t){var n,r,i,s,o;try{if("email"in t){const{email:c,options:l}=t;let u=null,h=null;this.flowType==="pkce"&&([u,h]=await Mr(this.storage,this.storageKey));const{error:f}=await Y(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:c,data:(n=l==null?void 0:l.data)!==null&&n!==void 0?n:{},create_user:(r=l==null?void 0:l.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},code_challenge:u,code_challenge_method:h},redirectTo:l==null?void 0:l.emailRedirectTo});return{data:{user:null,session:null},error:f}}if("phone"in t){const{phone:c,options:l}=t,{data:u,error:h}=await Y(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:c,data:(i=l==null?void 0:l.data)!==null&&i!==void 0?i:{},create_user:(s=l==null?void 0:l.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:l==null?void 0:l.captchaToken},channel:(o=l==null?void 0:l.channel)!==null&&o!==void 0?o:"sms"}});return{data:{user:null,session:null,messageId:u==null?void 0:u.message_id},error:h}}throw new Ts("You must provide either an email or phone number.")}catch(c){if(W(c))return{data:{user:null,session:null},error:c};throw c}}async verifyOtp(t){var n,r;try{let i,s;"options"in t&&(i=(n=t.options)===null||n===void 0?void 0:n.redirectTo,s=(r=t.options)===null||r===void 0?void 0:r.captchaToken);const{data:o,error:c}=await Y(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},t),{gotrue_meta_security:{captcha_token:s}}),redirectTo:i,xform:vn});if(c)throw c;if(!o)throw new Error("An error occurred on token verification.");const l=o.session,u=o.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(t.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),{data:{user:u,session:l},error:null}}catch(i){if(W(i))return{data:{user:null,session:null},error:i};throw i}}async signInWithSSO(t){var n,r,i;try{let s=null,o=null;return this.flowType==="pkce"&&([s,o]=await Mr(this.storage,this.storageKey)),await Y(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in t?{provider_id:t.providerId}:null),"domain"in t?{domain:t.domain}:null),{redirect_to:(r=(n=t.options)===null||n===void 0?void 0:n.redirectTo)!==null&&r!==void 0?r:void 0}),!((i=t==null?void 0:t.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:t.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:s,code_challenge_method:o}),headers:this.headers,xform:TP})}catch(s){if(W(s))return{data:null,error:s};throw s}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async t=>{const{data:{session:n},error:r}=t;if(r)throw r;if(!n)throw new xn;const{error:i}=await Y(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:n.access_token});return{data:{user:null,session:null},error:i}})}catch(t){if(W(t))return{data:{user:null,session:null},error:t};throw t}}async resend(t){try{const n=`${this.url}/resend`;if("email"in t){const{email:r,type:i,options:s}=t,{error:o}=await Y(this.fetch,"POST",n,{headers:this.headers,body:{email:r,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},redirectTo:s==null?void 0:s.emailRedirectTo});return{data:{user:null,session:null},error:o}}else if("phone"in t){const{phone:r,type:i,options:s}=t,{data:o,error:c}=await Y(this.fetch,"POST",n,{headers:this.headers,body:{phone:r,type:i,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}}});return{data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:c}}throw new Ts("You must provide either an email or phone number and a type")}catch(n){if(W(n))return{data:{user:null,session:null},error:n};throw n}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async n=>n))}async _acquireLock(t,n){this._debug("#_acquireLock","begin",t);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),i=(async()=>(await r,await n()))();return this.pendingInLock.push((async()=>{try{await i}catch{}})()),i}return await this.lock(`lock:${this.storageKey}`,t,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=n();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const i=[...this.pendingInLock];await Promise.all(i),this.pendingInLock.splice(0,i.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(t){this._debug("#_useSession","begin");try{const n=await this.__loadSession();return await t(n)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let t=null;const n=await Cs(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",n),n!==null&&(this._isValidSession(n)?t=n:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!t)return{data:{session:null},error:null};const r=t.expires_at?t.expires_at<=Date.now()/1e3:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",t.expires_at),!r){if(this.storage.isServer){let o=this.suppressGetSessionWarning;t=new Proxy(t,{get:(l,u,h)=>(!o&&u==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and many not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),o=!0,this.suppressGetSessionWarning=!0),Reflect.get(l,u,h))})}return{data:{session:t},error:null}}const{session:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{session:null},error:s}:{data:{session:i},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(t){return t?await this._getUser(t):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(t){try{return t?await Y(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:t,xform:Pn}):await this._useSession(async n=>{var r,i,s;const{data:o,error:c}=n;if(c)throw c;return!(!((r=o.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new xn}:await Y(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(i=o.session)===null||i===void 0?void 0:i.access_token)!==null&&s!==void 0?s:void 0,xform:Pn})})}catch(n){if(W(n))return jP(n)&&(await this._removeSession(),await _s(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:n};throw n}}async updateUser(t,n={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(t,n))}async _updateUser(t,n={}){try{return await this._useSession(async r=>{const{data:i,error:s}=r;if(s)throw s;if(!i.session)throw new xn;const o=i.session;let c=null,l=null;this.flowType==="pkce"&&t.email!=null&&([c,l]=await Mr(this.storage,this.storageKey));const{data:u,error:h}=await Y(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:n==null?void 0:n.emailRedirectTo,body:Object.assign(Object.assign({},t),{code_challenge:c,code_challenge_method:l}),jwt:o.access_token,xform:Pn});if(h)throw h;return o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),{data:{user:o.user},error:null}})}catch(r){if(W(r))return{data:{user:null},error:r};throw r}}_decodeJWT(t){return Zg(t)}async setSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(t))}async _setSession(t){try{if(!t.access_token||!t.refresh_token)throw new xn;const n=Date.now()/1e3;let r=n,i=!0,s=null;const o=Zg(t.access_token);if(o.exp&&(r=o.exp,i=r<=n),i){const{session:c,error:l}=await this._callRefreshToken(t.refresh_token);if(l)return{data:{user:null,session:null},error:l};if(!c)return{data:{user:null,session:null},error:null};s=c}else{const{data:c,error:l}=await this._getUser(t.access_token);if(l)throw l;s={access_token:t.access_token,refresh_token:t.refresh_token,user:c.user,token_type:"bearer",expires_in:r-n,expires_at:r},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return{data:{user:s.user,session:s},error:null}}catch(n){if(W(n))return{data:{session:null,user:null},error:n};throw n}}async refreshSession(t){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(t))}async _refreshSession(t){try{return await this._useSession(async n=>{var r;if(!t){const{data:o,error:c}=n;if(c)throw c;t=(r=o.session)!==null&&r!==void 0?r:void 0}if(!(t!=null&&t.refresh_token))throw new xn;const{session:i,error:s}=await this._callRefreshToken(t.refresh_token);return s?{data:{user:null,session:null},error:s}:i?{data:{user:i.user,session:i},error:null}:{data:{user:null,session:null},error:null}})}catch(n){if(W(n))return{data:{user:null,session:null},error:n};throw n}}async _getSessionFromURL(t){try{if(!kt())throw new Es("No browser detected.");if(this.flowType==="implicit"&&!this._isImplicitGrantFlow())throw new Es("Not a valid implicit grant flow url.");if(this.flowType=="pkce"&&!t)throw new e0("Not a valid PKCE flow url.");const n=tu(window.location.href);if(t){if(!n.code)throw new e0("No code detected.");const{data:g,error:v}=await this._exchangeCodeForSession(n.code);if(v)throw v;const S=new URL(window.location.href);return S.searchParams.delete("code"),window.history.replaceState(window.history.state,"",S.toString()),{data:{session:g.session,redirectType:null},error:null}}if(n.error||n.error_description||n.error_code)throw new Es(n.error_description||"Error in URL with unspecified error_description",{error:n.error||"unspecified_error",code:n.error_code||"unspecified_code"});const{provider_token:r,provider_refresh_token:i,access_token:s,refresh_token:o,expires_in:c,expires_at:l,token_type:u}=n;if(!s||!c||!o||!u)throw new Es("No session defined in URL");const h=Math.round(Date.now()/1e3),f=parseInt(c);let p=h+f;l&&(p=parseInt(l));const m=p-h;m*1e3<=Vi&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${f}s`);const x=p-f;h-x>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",x,p,h):h-x<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",x,p,h);const{data:b,error:j}=await this._getUser(s);if(j)throw j;const y={provider_token:r,provider_refresh_token:i,access_token:s,expires_in:f,expires_at:p,refresh_token:o,token_type:u,user:b.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:y,redirectType:n.type},error:null}}catch(n){if(W(n))return{data:{session:null,redirectType:null},error:n};throw n}}_isImplicitGrantFlow(){const t=tu(window.location.href);return!!(kt()&&(t.access_token||t.error_description))}async _isPKCEFlow(){const t=tu(window.location.href),n=await Cs(this.storage,`${this.storageKey}-code-verifier`);return!!(t.code&&n)}async signOut(t={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(t))}async _signOut({scope:t}={scope:"global"}){return await this._useSession(async n=>{var r;const{data:i,error:s}=n;if(s)return{error:s};const o=(r=i.session)===null||r===void 0?void 0:r.access_token;if(o){const{error:c}=await this.admin.signOut(o,t);if(c&&!(wP(c)&&(c.status===404||c.status===401||c.status===403)))return{error:c}}return t!=="others"&&(await this._removeSession(),await _s(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(t){const n=cP(),r={id:n,callback:t,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",n),this.stateChangeEmitters.delete(n)}};return this._debug("#onAuthStateChange()","registered callback with id",n),this.stateChangeEmitters.set(n,r),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(n)})))(),{data:{subscription:r}}}async _emitInitialSession(t){return await this._useSession(async n=>{var r,i;try{const{data:{session:s},error:o}=n;if(o)throw o;await((r=this.stateChangeEmitters.get(t))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",t,"session",s)}catch(s){await((i=this.stateChangeEmitters.get(t))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",t,"error",s),console.error(s)}})}async resetPasswordForEmail(t,n={}){let r=null,i=null;this.flowType==="pkce"&&([r,i]=await Mr(this.storage,this.storageKey,!0));try{return await Y(this.fetch,"POST",`${this.url}/recover`,{body:{email:t,code_challenge:r,code_challenge_method:i,gotrue_meta_security:{captcha_token:n.captchaToken}},headers:this.headers,redirectTo:n.redirectTo})}catch(s){if(W(s))return{data:null,error:s};throw s}}async getUserIdentities(){var t;try{const{data:n,error:r}=await this.getUser();if(r)throw r;return{data:{identities:(t=n.user.identities)!==null&&t!==void 0?t:[]},error:null}}catch(n){if(W(n))return{data:null,error:n};throw n}}async linkIdentity(t){var n;try{const{data:r,error:i}=await this._useSession(async s=>{var o,c,l,u,h;const{data:f,error:p}=s;if(p)throw p;const m=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,t.provider,{redirectTo:(o=t.options)===null||o===void 0?void 0:o.redirectTo,scopes:(c=t.options)===null||c===void 0?void 0:c.scopes,queryParams:(l=t.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await Y(this.fetch,"GET",m,{headers:this.headers,jwt:(h=(u=f.session)===null||u===void 0?void 0:u.access_token)!==null&&h!==void 0?h:void 0})});if(i)throw i;return kt()&&!(!((n=t.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),{data:{provider:t.provider,url:r==null?void 0:r.url},error:null}}catch(r){if(W(r))return{data:{provider:t.provider,url:null},error:r};throw r}}async unlinkIdentity(t){try{return await this._useSession(async n=>{var r,i;const{data:s,error:o}=n;if(o)throw o;return await Y(this.fetch,"DELETE",`${this.url}/user/identities/${t.identity_id}`,{headers:this.headers,jwt:(i=(r=s.session)===null||r===void 0?void 0:r.access_token)!==null&&i!==void 0?i:void 0})})}catch(n){if(W(n))return{data:null,error:n};throw n}}async _refreshAccessToken(t){const n=`#_refreshAccessToken(${t.substring(0,5)}...)`;this._debug(n,"begin");try{const r=Date.now();return await fP(async i=>(i>0&&await hP(200*Math.pow(2,i-1)),this._debug(n,"refreshing attempt",i),await Y(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:t},headers:this.headers,xform:vn})),(i,s)=>{const o=200*Math.pow(2,i);return s&&ru(s)&&Date.now()+o-r<Vi})}catch(r){if(this._debug(n,"error",r),W(r))return{data:{session:null,user:null},error:r};throw r}finally{this._debug(n,"end")}}_isValidSession(t){return typeof t=="object"&&t!==null&&"access_token"in t&&"refresh_token"in t&&"expires_at"in t}async _handleProviderSignIn(t,n){const r=await this._getUrlForProvider(`${this.url}/authorize`,t,{redirectTo:n.redirectTo,scopes:n.scopes,queryParams:n.queryParams});return this._debug("#_handleProviderSignIn()","provider",t,"options",n,"url",r),kt()&&!n.skipBrowserRedirect&&window.location.assign(r),{data:{provider:t,url:r},error:null}}async _recoverAndRefresh(){var t;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const r=await Cs(this.storage,this.storageKey);if(this._debug(n,"session from storage",r),!this._isValidSession(r)){this._debug(n,"session is not valid"),r!==null&&await this._removeSession();return}const i=Math.round(Date.now()/1e3),s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)<i+Qg;if(this._debug(n,`session has${s?"":" not"} expired with margin of ${Qg}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:o}=await this._callRefreshToken(r.refresh_token);o&&(console.error(o),ru(o)||(this._debug(n,"refresh failed with a non-retryable error, removing the session",o),await this._removeSession()))}}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(n,"error",r),console.error(r);return}finally{this._debug(n,"end")}}async _callRefreshToken(t){var n,r;if(!t)throw new xn;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const i=`#_callRefreshToken(${t.substring(0,5)}...)`;this._debug(i,"begin");try{this.refreshingDeferred=new ac;const{data:s,error:o}=await this._refreshAccessToken(t);if(o)throw o;if(!s.session)throw new xn;await this._saveSession(s.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",s.session);const c={session:s.session,error:null};return this.refreshingDeferred.resolve(c),c}catch(s){if(this._debug(i,"error",s),W(s)){const o={session:null,error:s};return ru(s)||await this._removeSession(),(n=this.refreshingDeferred)===null||n===void 0||n.resolve(o),o}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(s),s}finally{this.refreshingDeferred=null,this._debug(i,"end")}}async _notifyAllSubscribers(t,n,r=!0){const i=`#_notifyAllSubscribers(${t})`;this._debug(i,"begin",n,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:t,session:n});const s=[],o=Array.from(this.stateChangeEmitters.values()).map(async c=>{try{await c.callback(t,n)}catch(l){s.push(l)}});if(await Promise.all(o),s.length>0){for(let c=0;c<s.length;c+=1)console.error(s[c]);throw s[0]}}finally{this._debug(i,"end")}}async _saveSession(t){this._debug("#_saveSession()",t),this.suppressGetSessionWarning=!0,await hy(this.storage,this.storageKey,t)}async _removeSession(){this._debug("#_removeSession()"),await _s(this.storage,this.storageKey),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const t=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{t&&kt()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",t)}catch(n){console.error("removing visibilitychange callback failed",n)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const t=setInterval(()=>this._autoRefreshTokenTick(),Vi);this.autoRefreshTicker=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const t=this.autoRefreshTicker;this.autoRefreshTicker=null,t&&clearInterval(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const t=Date.now();try{return await this._useSession(async n=>{const{data:{session:r}}=n;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const i=Math.floor((r.expires_at*1e3-t)/Vi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${i} ticks, a tick lasts ${Vi}ms, refresh threshold is ${a0} ticks`),i<=a0&&await this._callRefreshToken(r.refresh_token)})}catch(n){console.error("Auto refresh tick failed with error. This is likely a transient error.",n)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(t){if(t.isAcquireTimeout||t instanceof py)this._debug("auto refresh token tick lock not available");else throw t}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!kt()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(t){console.error("_handleVisibilityChange",t)}}async _onVisibilityChanged(t){const n=`#_onVisibilityChanged(${t})`;this._debug(n,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),t||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(n,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(t,n,r){const i=[`provider=${encodeURIComponent(n)}`];if(r!=null&&r.redirectTo&&i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&i.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[s,o]=await Mr(this.storage,this.storageKey),c=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(o)}`});i.push(c.toString())}if(r!=null&&r.queryParams){const s=new URLSearchParams(r.queryParams);i.push(s.toString())}return r!=null&&r.skipBrowserRedirect&&i.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${t}?${i.join("&")}`}async _unenroll(t){try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;return s?{data:null,error:s}:await Y(this.fetch,"DELETE",`${this.url}/factors/${t.factorId}`,{headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(W(n))return{data:null,error:n};throw n}}async _enroll(t){try{return await this._useSession(async n=>{var r,i;const{data:s,error:o}=n;if(o)return{data:null,error:o};const c=Object.assign({friendly_name:t.friendlyName,factor_type:t.factorType},t.factorType==="phone"?{phone:t.phone}:{issuer:t.issuer}),{data:l,error:u}=await Y(this.fetch,"POST",`${this.url}/factors`,{body:c,headers:this.headers,jwt:(r=s==null?void 0:s.session)===null||r===void 0?void 0:r.access_token});return u?{data:null,error:u}:(t.factorType==="totp"&&(!((i=l==null?void 0:l.totp)===null||i===void 0)&&i.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),{data:l,error:null})})}catch(n){if(W(n))return{data:null,error:n};throw n}}async _verify(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;if(s)return{data:null,error:s};const{data:o,error:c}=await Y(this.fetch,"POST",`${this.url}/factors/${t.factorId}/verify`,{body:{code:t.code,challenge_id:t.challengeId},headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token});return c?{data:null,error:c}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+o.expires_in},o)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",o),{data:o,error:c})})}catch(n){if(W(n))return{data:null,error:n};throw n}})}async _challenge(t){return this._acquireLock(-1,async()=>{try{return await this._useSession(async n=>{var r;const{data:i,error:s}=n;return s?{data:null,error:s}:await Y(this.fetch,"POST",`${this.url}/factors/${t.factorId}/challenge`,{body:{channel:t.channel},headers:this.headers,jwt:(r=i==null?void 0:i.session)===null||r===void 0?void 0:r.access_token})})}catch(n){if(W(n))return{data:null,error:n};throw n}})}async _challengeAndVerify(t){const{data:n,error:r}=await this._challenge({factorId:t.factorId});return r?{data:null,error:r}:await this._verify({factorId:t.factorId,challengeId:n.id,code:t.code})}async _listFactors(){const{data:{user:t},error:n}=await this.getUser();if(n)return{data:null,error:n};const r=(t==null?void 0:t.factors)||[],i=r.filter(o=>o.factor_type==="totp"&&o.status==="verified"),s=r.filter(o=>o.factor_type==="phone"&&o.status==="verified");return{data:{all:r,totp:i,phone:s},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async t=>{var n,r;const{data:{session:i},error:s}=t;if(s)return{data:null,error:s};if(!i)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const o=this._decodeJWT(i.access_token);let c=null;o.aal&&(c=o.aal);let l=c;((r=(n=i.user.factors)===null||n===void 0?void 0:n.filter(f=>f.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(l="aal2");const h=o.amr||[];return{data:{currentLevel:c,nextLevel:l,currentAuthenticationMethods:h},error:null}}))}}Ra.nextInstanceID=0;const BP=Ra;class NP extends BP{constructor(t){super(t)}}var FP=function(e,t,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function c(h){try{u(r.next(h))}catch(f){o(f)}}function l(h){try{u(r.throw(h))}catch(f){o(f)}}function u(h){h.done?s(h.value):i(h.value).then(c,l)}u((r=r.apply(e,t||[])).next())})};class VP{constructor(t,n,r){var i,s,o;if(this.supabaseUrl=t,this.supabaseKey=n,!t)throw new Error("supabaseUrl is required.");if(!n)throw new Error("supabaseKey is required.");const c=rP(t);this.realtimeUrl=`${c}/realtime/v1`.replace(/^http/i,"ws"),this.authUrl=`${c}/auth/v1`,this.storageUrl=`${c}/storage/v1`,this.functionsUrl=`${c}/functions/v1`;const l=`sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,u={db:JS,realtime:XS,auth:Object.assign(Object.assign({},YS),{storageKey:l}),global:qS},h=iP(r??{},u);this.storageKey=(i=h.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(s=h.global.headers)!==null&&s!==void 0?s:{},h.accessToken?(this.accessToken=h.accessToken,this.auth=new Proxy({},{get:(f,p)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((o=h.auth)!==null&&o!==void 0?o:{},this.headers,h.global.fetch),this.fetch=tP(n,this._getAccessToken.bind(this),h.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers},h.realtime)),this.rest=new gS(`${c}/rest/v1`,{headers:this.headers,schema:h.db.schema,fetch:this.fetch}),h.accessToken||this._listenForAuthEvents()}get functions(){return new G7(this.functionsUrl,{headers:this.headers,customFetch:this.fetch})}get storage(){return new KS(this.storageUrl,this.headers,this.fetch)}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,n={},r={}){return this.rest.rpc(t,n,r)}channel(t,n={config:{}}){return this.realtime.channel(t,n)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var t,n;return FP(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:r}=yield this.auth.getSession();return(n=(t=r.session)===null||t===void 0?void 0:t.access_token)!==null&&n!==void 0?n:null})}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,storageKey:s,flowType:o,lock:c,debug:l},u,h){var f;const p={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new NP({url:this.authUrl,headers:Object.assign(Object.assign({},p),u),storageKey:s,autoRefreshToken:t,persistSession:n,detectSessionInUrl:r,storage:i,flowType:o,lock:c,debug:l,fetch:h,hasCustomAuthorizationHeader:(f="Authorization"in this.headers)!==null&&f!==void 0?f:!1})}_initRealtimeClient(t){return new $S(this.realtimeUrl,Object.assign(Object.assign({},t),{params:Object.assign({apikey:this.supabaseKey},t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,r)=>{this._handleTokenChanged(n,"CLIENT",r==null?void 0:r.access_token)})}_handleTokenChanged(t,n,r){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==r?(this.realtime.setAuth(r??null),this.changedAccessToken=r):t==="SIGNED_OUT"&&(this.realtime.setAuth(this.supabaseKey),n=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const UP=(e,t,n)=>new VP(e,t,n),HP="https://nrxloisjnqevtjnswsja.supabase.co",KP="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yeGxvaXNqbnFldnRqbnN3c2phIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjgwODcsImV4cCI6MjA0NzUwNDA4N30.g1QePzTw2W43Pm88J-XBaTkHbQGut64XqePRRxQb9DM",I=UP(HP,KP),my=k.createContext();function GP({children:e}){const[t,n]=k.useState(!1),[r,i]=k.useState(!1),[s,o]=k.useState(null),[c,l]=k.useState(!1),u=G();k.useEffect(()=>{const m=localStorage.getItem("user");if(m){const x=JSON.parse(m);o(x),n(!0)}},[]);const p={isLoggedIn:t,setIsLoggedIn:n,showLogin:r,setShowLogin:i,user:s,setUser:o,loading:c,handleLogin:async(m,x)=>{try{l(!0),console.log("Login attempt with:",{username:m,password:x});const{data:b,error:j}=await I.from("akun").select("*").eq("usernameAkun",m).eq("passwordAkun",x);if(console.log("Query result:",b),j)return console.error("Query error:",j),{success:!1,error:"Terjadi kesalahan saat login"};if(b&&b.length>0){const y={id:b[0].id,username:b[0].usernameAkun,role:b[0].jenisAkun};return console.log("Setting user info:",y),localStorage.setItem("user",JSON.stringify(y)),o(y),n(!0),i(!1),b[0].jenisAkun==="admin"?u("/admin"):b[0].jenisAkun==="moderator"?u("/moderator/dashboard"):u("/user"),{success:!0}}return{success:!1,error:"Username atau password salah"}}catch(b){return console.error("Login error:",b),{success:!1,error:"Terjadi kesalahan saat login"}}finally{l(!1)}},handleLogout:()=>{localStorage.removeItem("user"),o(null),n(!1),u("/")}};return a.jsx(my.Provider,{value:p,children:e})}function At(){return k.useContext(my)}const WP=d.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  transition: background-color 0.3s ease;
  background-color: ${e=>e.scrolled?"rgba(26, 26, 46, 0.8)":"transparent"};
  backdrop-filter: ${e=>e.scrolled?"blur(15px)":"none"};
`,qP=d.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`,JP=d(Ci)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 1rem;
`,YP=d.img`
  height: 50px;
  width: auto;
`,XP=d.div`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`,QP=d.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,o0=d.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`,Lt=d(Ci)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background: linear-gradient(to right, #00ff87, #60efff);
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,l0=d(E.button)`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 30px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 255, 135, 0.4);
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
    width: 200px;
  }
`,ZP=d.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`,eC=d.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${e=>e.isOpen?"flex":"none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(26, 26, 46, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
`;d(E.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1rem;
`;function tC(){const[e,t]=k.useState(!1),[n,r]=k.useState(!1),{isLoggedIn:i,handleLogout:s,setShowLogin:o}=At();k.useEffect(()=>{const l=()=>{t(window.scrollY>50)};return window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)},[]);const c=l=>{const u=document.getElementById(l);if(u){const p=u.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:p,behavior:"smooth"})}};return a.jsx(WP,{scrolled:e,children:a.jsxs(qP,{children:[a.jsxs(JP,{to:"/",onClick:()=>c("beranda"),children:[a.jsx(YP,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"SMKN 1 Bulan Logo"}),a.jsx(XP,{children:"SMKN 1 Bulan"})]}),a.jsx(ZP,{onClick:()=>r(!n),children:n?"✕":"☰"}),a.jsxs(QP,{children:[a.jsxs(o0,{children:[a.jsx(Lt,{to:"/",onClick:()=>c("beranda"),children:"Beranda"}),a.jsx(Lt,{to:"/",onClick:()=>c("profil"),children:"Profil"}),a.jsx(Lt,{to:"/",onClick:()=>c("berita"),children:"Berita"}),a.jsx(Lt,{to:"/",onClick:()=>c("jurusan"),children:"Program"}),a.jsx(Lt,{to:"/",onClick:()=>c("fasilitas"),children:"Fasilitas"})]}),a.jsx(l0,{onClick:()=>{i?s():o(!0),r(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:i?"Logout":"Login"})]}),a.jsxs(eC,{isOpen:n,children:[a.jsxs(o0,{children:[a.jsx(Lt,{to:"/",onClick:()=>{c("beranda"),r(!1)},children:"Beranda"}),a.jsx(Lt,{to:"/",onClick:()=>{c("profil"),r(!1)},children:"Profil"}),a.jsx(Lt,{to:"/",onClick:()=>{c("berita"),r(!1)},children:"Berita"}),a.jsx(Lt,{to:"/",onClick:()=>{c("jurusan"),r(!1)},children:"Program"}),a.jsx(Lt,{to:"/",onClick:()=>{c("fasilitas"),r(!1)},children:"Fasilitas"})]}),a.jsx(l0,{onClick:()=>{i?s():o(!0),r(!1)},whileHover:{scale:1.05},whileTap:{scale:.95},children:i?"Logout":"Login"})]})]})})}var gy={exports:{}},nC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",rC=nC,iC=rC;function xy(){}function vy(){}vy.resetWarningCache=xy;var aC=function(){function e(r,i,s,o,c,l){if(l!==iC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:vy,resetWarningCache:xy};return n.PropTypes=n,n};gy.exports=aC();var sC=gy.exports;const Ce=wl(sC);var oC=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,i,s;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(i=r;i--!==0;)if(!e(t[i],n[i]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(s=Object.keys(t),r=s.length,r!==Object.keys(n).length)return!1;for(i=r;i--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[i]))return!1;for(i=r;i--!==0;){var o=s[i];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n};const lC=wl(oC);var jh={exports:{}},yy;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/yy=function(){var e={},t={};return e.on=function(n,r){var i={name:n,handler:r};return t[n]=t[n]||[],t[n].unshift(i),i},e.off=function(n){var r=t[n.name].indexOf(n);r!==-1&&t[n.name].splice(r,1)},e.trigger=function(n,r){var i=t[n],s;if(i)for(s=i.length;s--;)i[s].handler(r)},e};var cC=yy,Sh={exports:{}},uC=function(t,n,r){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof n=="function"&&(r=n,n={}),n=n||{},r=r||function(){},s.type=n.type||"text/javascript",s.charset=n.charset||"utf8",s.async="async"in n?!!n.async:!0,s.src=t,n.attrs&&dC(s,n.attrs),n.text&&(s.text=""+n.text);var o="onload"in s?c0:hC;o(s,r),s.onload||c0(s,r),i.appendChild(s)};function dC(e,t){for(var n in t)e.setAttribute(n,t[n])}function c0(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function hC(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=uC,r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}t.default=function(s){var o=new Promise(function(c){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){c(window.YT);return}else{var l=window.location.protocol==="http:"?"http:":"https:";(0,r.default)(l+"//www.youtube.com/iframe_api",function(h){h&&s.trigger("error",h)})}var u=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){u&&u(),c(window.YT)}});return o},e.exports=t.default})(Sh,Sh.exports);var fC=Sh.exports,Ph={exports:{}},Ch={exports:{}},_h={exports:{}},Oa=1e3,Da=Oa*60,Ba=Da*60,Na=Ba*24,pC=Na*365.25,mC=function(e,t){t=t||{};var n=typeof e;if(n==="string"&&e.length>0)return gC(e);if(n==="number"&&isNaN(e)===!1)return t.long?vC(e):xC(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))};function gC(e){if(e=String(e),!(e.length>100)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var n=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return n*pC;case"days":case"day":case"d":return n*Na;case"hours":case"hour":case"hrs":case"hr":case"h":return n*Ba;case"minutes":case"minute":case"mins":case"min":case"m":return n*Da;case"seconds":case"second":case"secs":case"sec":case"s":return n*Oa;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function xC(e){return e>=Na?Math.round(e/Na)+"d":e>=Ba?Math.round(e/Ba)+"h":e>=Da?Math.round(e/Da)+"m":e>=Oa?Math.round(e/Oa)+"s":e+"ms"}function vC(e){return As(e,Na,"day")||As(e,Ba,"hour")||As(e,Da,"minute")||As(e,Oa,"second")||e+" ms"}function As(e,t,n){if(!(e<t))return e<t*1.5?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}(function(e,t){t=e.exports=i.debug=i.default=i,t.coerce=l,t.disable=o,t.enable=s,t.enabled=c,t.humanize=mC,t.names=[],t.skips=[],t.formatters={};var n;function r(u){var h=0,f;for(f in u)h=(h<<5)-h+u.charCodeAt(f),h|=0;return t.colors[Math.abs(h)%t.colors.length]}function i(u){function h(){if(h.enabled){var f=h,p=+new Date,m=p-(n||p);f.diff=m,f.prev=n,f.curr=p,n=p;for(var x=new Array(arguments.length),b=0;b<x.length;b++)x[b]=arguments[b];x[0]=t.coerce(x[0]),typeof x[0]!="string"&&x.unshift("%O");var j=0;x[0]=x[0].replace(/%([a-zA-Z%])/g,function(g,v){if(g==="%%")return g;j++;var S=t.formatters[v];if(typeof S=="function"){var P=x[j];g=S.call(f,P),x.splice(j,1),j--}return g}),t.formatArgs.call(f,x);var y=h.log||t.log||console.log.bind(console);y.apply(f,x)}}return h.namespace=u,h.enabled=t.enabled(u),h.useColors=t.useColors(),h.color=r(u),typeof t.init=="function"&&t.init(h),h}function s(u){t.save(u),t.names=[],t.skips=[];for(var h=(typeof u=="string"?u:"").split(/[\s,]+/),f=h.length,p=0;p<f;p++)h[p]&&(u=h[p].replace(/\*/g,".*?"),u[0]==="-"?t.skips.push(new RegExp("^"+u.substr(1)+"$")):t.names.push(new RegExp("^"+u+"$")))}function o(){t.enable("")}function c(u){var h,f;for(h=0,f=t.skips.length;h<f;h++)if(t.skips[h].test(u))return!1;for(h=0,f=t.names.length;h<f;h++)if(t.names[h].test(u))return!0;return!1}function l(u){return u instanceof Error?u.stack||u.message:u}})(_h,_h.exports);var yC=_h.exports;(function(e,t){var n={};t=e.exports=yC,t.log=s,t.formatArgs=i,t.save=o,t.load=c,t.useColors=r,t.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:l(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function r(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(u){try{return JSON.stringify(u)}catch(h){return"[UnexpectedJSONParseError]: "+h.message}};function i(u){var h=this.useColors;if(u[0]=(h?"%c":"")+this.namespace+(h?" %c":" ")+u[0]+(h?"%c ":" ")+"+"+t.humanize(this.diff),!!h){var f="color: "+this.color;u.splice(1,0,f,"color: inherit");var p=0,m=0;u[0].replace(/%[a-zA-Z%]/g,function(x){x!=="%%"&&(p++,x==="%c"&&(m=p))}),u.splice(m,0,f)}}function s(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(u){try{u==null?t.storage.removeItem("debug"):t.storage.debug=u}catch{}}function c(){var u;try{u=t.storage.debug}catch{}return!u&&typeof process<"u"&&"env"in process&&(u=n.DEBUG),u}t.enable(c());function l(){try{return window.localStorage}catch{}}})(Ch,Ch.exports);var bC=Ch.exports,Th={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default})(Th,Th.exports);var kC=Th.exports,Eh={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default})(Eh,Eh.exports);var wC=Eh.exports,Ah={exports:{}},$h={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default})($h,$h.exports);var jC=$h.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=jC,r=i(n);function i(s){return s&&s.__esModule?s:{default:s}}t.default={pauseVideo:{acceptableStates:[r.default.ENDED,r.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[r.default.ENDED,r.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[r.default.ENDED,r.default.PLAYING,r.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default})(Ah,Ah.exports);var SC=Ah.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=bC,r=h(n),i=kC,s=h(i),o=wC,c=h(o),l=SC,u=h(l);function h(m){return m&&m.__esModule?m:{default:m}}var f=(0,r.default)("youtube-player"),p={};p.proxyEvents=function(m){var x={},b=function(w){var C="on"+w.slice(0,1).toUpperCase()+w.slice(1);x[C]=function(_){f('event "%s"',C,_),m.trigger(w,_)}},j=!0,y=!1,g=void 0;try{for(var v=c.default[Symbol.iterator](),S;!(j=(S=v.next()).done);j=!0){var P=S.value;b(P)}}catch(T){y=!0,g=T}finally{try{!j&&v.return&&v.return()}finally{if(y)throw g}}return x},p.promisifyPlayer=function(m){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,b={},j=function(C){x&&u.default[C]?b[C]=function(){for(var _=arguments.length,A=Array(_),L=0;L<_;L++)A[L]=arguments[L];return m.then(function(B){var z=u.default[C],F=B.getPlayerState(),q=B[C].apply(B,A);return z.stateChangeRequired||Array.isArray(z.acceptableStates)&&z.acceptableStates.indexOf(F)===-1?new Promise(function(N){var oe=function M(){var R=B.getPlayerState(),U=void 0;typeof z.timeout=="number"&&(U=setTimeout(function(){B.removeEventListener("onStateChange",M),N()},z.timeout)),Array.isArray(z.acceptableStates)&&z.acceptableStates.indexOf(R)!==-1&&(B.removeEventListener("onStateChange",M),clearTimeout(U),N())};B.addEventListener("onStateChange",oe)}).then(function(){return q}):q})}:b[C]=function(){for(var _=arguments.length,A=Array(_),L=0;L<_;L++)A[L]=arguments[L];return m.then(function(B){return B[C].apply(B,A)})}},y=!0,g=!1,v=void 0;try{for(var S=s.default[Symbol.iterator](),P;!(y=(P=S.next()).done);y=!0){var T=P.value;j(T)}}catch(w){g=!0,v=w}finally{try{!y&&S.return&&S.return()}finally{if(g)throw v}}return b},t.default=p,e.exports=t.default})(Ph,Ph.exports);var PC=Ph.exports;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(f){return typeof f}:function(f){return f&&typeof Symbol=="function"&&f.constructor===Symbol&&f!==Symbol.prototype?"symbol":typeof f},r=cC,i=u(r),s=fC,o=u(s),c=PC,l=u(c);function u(f){return f&&f.__esModule?f:{default:f}}var h=void 0;t.default=function(f){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,x=(0,i.default)();if(h||(h=(0,o.default)(x)),p.events)throw new Error("Event handlers cannot be overwritten.");if(typeof f=="string"&&!document.getElementById(f))throw new Error('Element "'+f+'" does not exist.');p.events=l.default.proxyEvents(x);var b=new Promise(function(y){if((typeof f>"u"?"undefined":n(f))==="object"&&f.playVideo instanceof Function){var g=f;y(g)}else h.then(function(v){var S=new v.Player(f,p);return x.on("ready",function(){y(S)}),null})}),j=l.default.promisifyPlayer(b,m);return j.on=x.on,j.off=x.off,j},e.exports=t.default})(jh,jh.exports);var CC=jh.exports;const _C=wl(CC);var TC=Object.defineProperty,EC=Object.defineProperties,AC=Object.getOwnPropertyDescriptors,u0=Object.getOwnPropertySymbols,$C=Object.prototype.hasOwnProperty,zC=Object.prototype.propertyIsEnumerable,d0=(e,t,n)=>t in e?TC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,zh=(e,t)=>{for(var n in t||(t={}))$C.call(t,n)&&d0(e,n,t[n]);if(u0)for(var n of u0(t))zC.call(t,n)&&d0(e,n,t[n]);return e},Lh=(e,t)=>EC(e,AC(t)),LC=(e,t,n)=>new Promise((r,i)=>{var s=l=>{try{c(n.next(l))}catch(u){i(u)}},o=l=>{try{c(n.throw(l))}catch(u){i(u)}},c=l=>l.done?r(l.value):Promise.resolve(l.value).then(s,o);c((n=n.apply(e,t)).next())});function MC(e,t){var n,r;if(e.videoId!==t.videoId)return!0;const i=((n=e.opts)==null?void 0:n.playerVars)||{},s=((r=t.opts)==null?void 0:r.playerVars)||{};return i.start!==s.start||i.end!==s.end}function h0(e={}){return Lh(zh({},e),{height:0,width:0,playerVars:Lh(zh({},e.playerVars),{autoplay:0,start:0,end:0})})}function IC(e,t){return e.videoId!==t.videoId||!lC(h0(e.opts),h0(t.opts))}function RC(e,t){var n,r,i,s;return e.id!==t.id||e.className!==t.className||((n=e.opts)==null?void 0:n.width)!==((r=t.opts)==null?void 0:r.width)||((i=e.opts)==null?void 0:i.height)!==((s=t.opts)==null?void 0:s.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title}var OC={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},DC={videoId:Ce.string,id:Ce.string,className:Ce.string,iframeClassName:Ce.string,style:Ce.object,title:Ce.string,loading:Ce.oneOf(["lazy","eager"]),opts:Ce.objectOf(Ce.any),onReady:Ce.func,onError:Ce.func,onPlay:Ce.func,onPause:Ce.func,onEnd:Ce.func,onStateChange:Ce.func,onPlaybackRateChange:Ce.func,onPlaybackQualityChange:Ce.func},Mo=class extends Ge.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=t=>{var n,r;return(r=(n=this.props).onReady)==null?void 0:r.call(n,t)},this.onPlayerError=t=>{var n,r;return(r=(n=this.props).onError)==null?void 0:r.call(n,t)},this.onPlayerStateChange=t=>{var n,r,i,s,o,c,l,u;switch((r=(n=this.props).onStateChange)==null||r.call(n,t),t.data){case Mo.PlayerState.ENDED:(s=(i=this.props).onEnd)==null||s.call(i,t);break;case Mo.PlayerState.PLAYING:(c=(o=this.props).onPlay)==null||c.call(o,t);break;case Mo.PlayerState.PAUSED:(u=(l=this.props).onPause)==null||u.call(l,t);break}},this.onPlayerPlaybackRateChange=t=>{var n,r;return(r=(n=this.props).onPlaybackRateChange)==null?void 0:r.call(n,t)},this.onPlayerPlaybackQualityChange=t=>{var n,r;return(r=(n=this.props).onPlaybackQualityChange)==null?void 0:r.call(n,t)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const t=Lh(zh({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=_C(this.container,t),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(n=>{this.props.title&&n.setAttribute("title",this.props.title),this.props.loading&&n.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var t;(t=this.internalPlayer)==null||t.getIframe().then(n=>{this.props.id?n.setAttribute("id",this.props.id):n.removeAttribute("id"),this.props.iframeClassName?n.setAttribute("class",this.props.iframeClassName):n.removeAttribute("class"),this.props.opts&&this.props.opts.width?n.setAttribute("width",this.props.opts.width.toString()):n.removeAttribute("width"),this.props.opts&&this.props.opts.height?n.setAttribute("height",this.props.opts.height.toString()):n.removeAttribute("height"),this.props.title?n.setAttribute("title",this.props.title):n.setAttribute("title","YouTube video player"),this.props.loading?n.setAttribute("loading",this.props.loading):n.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var t,n,r,i;if(typeof this.props.videoId>"u"||this.props.videoId===null){(t=this.internalPlayer)==null||t.stopVideo();return}let s=!1;const o={videoId:this.props.videoId};if((n=this.props.opts)!=null&&n.playerVars&&(s=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(o.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(o.endSeconds=this.props.opts.playerVars.end)),s){(r=this.internalPlayer)==null||r.loadVideoById(o);return}(i=this.internalPlayer)==null||i.cueVideoById(o)},this.refContainer=t=>{this.container=t},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){return LC(this,null,function*(){RC(e,this.props)&&this.updatePlayer(),IC(e,this.props)&&(yield this.resetPlayer()),MC(e,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return Ge.createElement("div",{className:this.props.className,style:this.props.style},Ge.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},sc=Mo;sc.propTypes=DC;sc.defaultProps=OC;sc.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var BC=sc;const NC=d.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  position: relative;

  @media (max-width: 768px) {
    min-height: 90vh;
  }
`,FC=d.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(15, 32, 39, 0.7) 0%,
      rgba(15, 32, 39, 0.7) 80%,
      rgba(15, 32, 39, 0.9) 97%,
      rgba(15, 32, 39, 1) 100%
    );
    z-index: 2;
  }

  iframe {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    pointer-events: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.5);
  }

  @media (max-width: 768px) {
    iframe {
      transform: translate(-50%, -50%) scale(2);
    }
  }
`,VC=d(E.div)`
  z-index: 3;
  text-align: center;
  padding: 2rem;
  max-width: 1200px;
  margin-top: 150px;
  position: relative;
  padding-bottom: 250px;

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(to right, #00ff87, #60efff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.5rem;
    color: rgba(255, 255, 255, 0.8);
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 1rem;
    padding-bottom: 150px;

    h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      padding: 0 1rem;
    }
  }
`;function UC(){const e={height:"100%",width:"100%",playerVars:{autoplay:1,mute:1,controls:0,showinfo:0,rel:0,enablejsapi:1,loop:1,playlist:"Grq4rhiO_Ko",playsinline:1,modestbranding:1}},t=r=>{r.target.playVideo(),document.addEventListener("click",()=>{r.target.unMute()},{once:!0})},n=r=>{r.data===0&&r.target.playVideo()};return a.jsxs(NC,{id:"beranda",children:[a.jsx(FC,{children:a.jsx(BC,{videoId:"Grq4rhiO_Ko",opts:e,onReady:t,onStateChange:n,className:"youtube-player"})}),a.jsxs(VC,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1},children:[a.jsx(E.h1,{animate:{scale:[1,1.02,1]},transition:{duration:2,repeat:1/0},children:"Selamat Datang di SMKN 1 Bulan"}),a.jsx(E.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:"Membentuk Generasi Digital yang Inovatif dan Berkarakter"})]})]})}var by={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f0=Ge.createContext&&Ge.createContext(by),HC=["attr","size","title"];function KC(e,t){if(e==null)return{};var n=GC(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function GC(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bl.apply(this,arguments)}function p0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function kl(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?p0(Object(n),!0).forEach(function(r){WC(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function WC(e,t,n){return t=qC(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qC(e){var t=JC(e,"string");return typeof t=="symbol"?t:t+""}function JC(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ky(e){return e&&e.map((t,n)=>Ge.createElement(t.tag,kl({key:n},t.attr),ky(t.child)))}function O(e){return t=>Ge.createElement(YC,bl({attr:kl({},e.attr)},t),ky(e.child))}function YC(e){var t=n=>{var{attr:r,size:i,title:s}=e,o=KC(e,HC),c=i||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),Ge.createElement("svg",bl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:l,style:kl(kl({color:e.color||n.color},n.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),s&&Ge.createElement("title",null,s),e.children)};return f0!==void 0?Ge.createElement(f0.Consumer,null,n=>t(n)):t(by)}function XC(e){return O({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(e)}function lp(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function cp(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"},child:[]}]})(e)}function QC(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function ZC(e){return O({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(e)}function te(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function m0(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function wy(e){return O({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"},child:[]}]})(e)}function e_(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(e)}function t_(e){return O({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M212.3 10.3c-43.8 6.3-86.2 24.1-122.2 53.8l77.4 77.4c27.8-35.8 43.3-81.2 44.8-131.2zM248 222L405.9 64.1c-42.4-35-93.6-53.5-145.5-56.1-1.2 63.9-21.5 122.3-58.7 167.7L248 222zM56.1 98.1c-29.7 36-47.5 78.4-53.8 122.2 50-1.5 95.5-17 131.2-44.8L56.1 98.1zm272.2 204.2c45.3-37.1 103.7-57.4 167.7-58.7-2.6-51.9-21.1-103.1-56.1-145.5L282 256l46.3 46.3zM248 290L90.1 447.9c42.4 34.9 93.6 53.5 145.5 56.1 1.3-64 21.6-122.4 58.7-167.7L248 290zm191.9 123.9c29.7-36 47.5-78.4 53.8-122.2-50.1 1.6-95.5 17.1-131.2 44.8l77.4 77.4zM167.7 209.7C122.3 246.9 63.9 267.3 0 268.4c2.6 51.9 21.1 103.1 56.1 145.5L214 256l-46.3-46.3zm116 292c43.8-6.3 86.2-24.1 122.2-53.8l-77.4-77.4c-27.7 35.7-43.2 81.2-44.8 131.2z"},child:[]}]})(e)}function n_(e){return O({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"},child:[]}]})(e)}function r_(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"},child:[]}]})(e)}function i_(e){return O({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"},child:[]}]})(e)}function a_(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"},child:[]}]})(e)}function s_(e){return O({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"},child:[]}]})(e)}function o_(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(e)}function l_(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm257.3 160l48.1-48.1c4.7-4.7 4.7-12.3 0-17l-28.3-28.3c-4.7-4.7-12.3-4.7-17 0L224 306.7l-48.1-48.1c-4.7-4.7-12.3-4.7-17 0l-28.3 28.3c-4.7 4.7-4.7 12.3 0 17l48.1 48.1-48.1 48.1c-4.7 4.7-4.7 12.3 0 17l28.3 28.3c4.7 4.7 12.3 4.7 17 0l48.1-48.1 48.1 48.1c4.7 4.7 12.3 4.7 17 0l28.3-28.3c4.7-4.7 4.7-12.3 0-17L269.3 352z"},child:[]}]})(e)}function Jn(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function c_(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"},child:[]}]})(e)}function u_(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M208 352c-2.39 0-4.78.35-7.06 1.09C187.98 357.3 174.35 360 160 360c-14.35 0-27.98-2.7-40.95-6.91-2.28-.74-4.66-1.09-7.05-1.09C49.94 352-.33 402.48 0 464.62.14 490.88 21.73 512 48 512h224c26.27 0 47.86-21.12 48-47.38.33-62.14-49.94-112.62-112-112.62zm-48-32c53.02 0 96-42.98 96-96s-42.98-96-96-96-96 42.98-96 96 42.98 96 96 96zM592 0H208c-26.47 0-48 22.25-48 49.59V96c23.42 0 45.1 6.78 64 17.8V64h352v288h-64v-64H384v64h-76.24c19.1 16.69 33.12 38.73 39.69 64H592c26.47 0 48-22.25 48-49.59V49.59C640 22.25 618.47 0 592 0z"},child:[]}]})(e)}function d_(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(e)}function Fa(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"},child:[]}]})(e)}function up(e){return O({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(e)}function Va(e){return O({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(e)}function jy(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zm-48 0l-.003-.282-26.064 22.741-62.679-58.5 16.454-84.355 34.303 3.072c-24.889-34.216-60.004-60.089-100.709-73.141l13.651 31.939L256 139l-74.953-41.525 13.651-31.939c-40.631 13.028-75.78 38.87-100.709 73.141l34.565-3.073 16.192 84.355-62.678 58.5-26.064-22.741-.003.282c0 43.015 13.497 83.952 38.472 117.991l7.704-33.897 85.138 10.447 36.301 77.826-29.902 17.786c40.202 13.122 84.29 13.148 124.572 0l-29.902-17.786 36.301-77.826 85.138-10.447 7.704 33.897C442.503 339.952 456 299.015 456 256zm-248.102 69.571l-29.894-91.312L256 177.732l77.996 56.527-29.622 91.312h-96.476z"},child:[]}]})(e)}function Sy(e){return O({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"},child:[]}]})(e)}function oc(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"},child:[]}]})(e)}function h_(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"},child:[]}]})(e)}function Py(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M434.7 64h-85.9c-8 0-15.7 3-21.6 8.4l-98.3 90c-.1.1-.2.3-.3.4-16.6 15.6-16.3 40.5-2.1 56 12.7 13.9 39.4 17.6 56.1 2.7.1-.1.3-.1.4-.2l79.9-73.2c6.5-5.9 16.7-5.5 22.6 1 6 6.5 5.5 16.6-1 22.6l-26.1 23.9L504 313.8c2.9 2.4 5.5 5 7.9 7.7V128l-54.6-54.6c-5.9-6-14.1-9.4-22.6-9.4zM544 128.2v223.9c0 17.7 14.3 32 32 32h64V128.2h-96zm48 223.9c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zM0 384h64c17.7 0 32-14.3 32-32V128.2H0V384zm48-63.9c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16c0-8.9 7.2-16 16-16zm435.9 18.6L334.6 217.5l-30 27.5c-29.7 27.1-75.2 24.5-101.7-4.4-26.9-29.4-24.8-74.9 4.4-101.7L289.1 64h-83.8c-8.5 0-16.6 3.4-22.6 9.4L128 128v223.9h18.3l90.5 81.9c27.4 22.3 67.7 18.1 90-9.3l.2-.2 17.9 15.5c15.9 13 39.4 10.5 52.3-5.4l31.4-38.6 5.4 4.4c13.7 11.1 33.9 9.1 45-4.7l9.5-11.7c11.2-13.8 9.1-33.9-4.6-45.1z"},child:[]}]})(e)}function ki(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},child:[]}]})(e)}function Cy(e){return O({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"},child:[]}]})(e)}function dp(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z"},child:[]}]})(e)}function f_(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(e)}function _y(e){return O({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M546.2 9.7c-5.6-12.5-21.6-13-28.3-1.2C486.9 62.4 431.4 96 368 96h-80C182 96 96 182 96 288c0 7 .8 13.7 1.5 20.5C161.3 262.8 253.4 224 384 224c8.8 0 16 7.2 16 16s-7.2 16-16 16C132.6 256 26 410.1 2.4 468c-6.6 16.3 1.2 34.9 17.5 41.6 16.4 6.8 35-1.1 41.8-17.3 1.5-3.6 20.9-47.9 71.9-90.6 32.4 43.9 94 85.8 174.9 77.2C465.5 467.5 576 326.7 576 154.3c0-50.2-10.8-102.2-29.8-144.6z"},child:[]}]})(e)}function p_(e){return O({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(e)}function m_(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(e)}function Yn(e){return O({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(e)}function g_(e){return O({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z"},child:[]}]})(e)}function Ty(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M470.38 1.51L150.41 96A32 32 0 0 0 128 126.51v261.41A139 139 0 0 0 96 384c-53 0-96 28.66-96 64s43 64 96 64 96-28.66 96-64V214.32l256-75v184.61a138.4 138.4 0 0 0-32-3.93c-53 0-96 28.66-96 64s43 64 96 64 96-28.65 96-64V32a32 32 0 0 0-41.62-30.49z"},child:[]}]})(e)}function Ey(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(e)}function hp(e){return O({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z"},child:[]}]})(e)}function fp(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},child:[]}]})(e)}function x_(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"},child:[]}]})(e)}function v_(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"},child:[]}]})(e)}function Bn(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(e)}function y_(e){return O({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-30.63 169.75c14.06 16.72 39 19.09 55.97 5.22l88-72.02c17.09-13.98 19.59-39.19 5.62-56.28-13.97-17.11-39.19-19.59-56.31-5.62l-57.44 47-38.91-46.31c-15.44-18.39-39.22-27.92-64-25.33-24.19 2.48-45.25 16.27-56.37 36.92l-49.37 92.03c-23.4 43.64-8.69 96.37 34.19 123.75L131.56 432H40c-22.09 0-40 17.91-40 40s17.91 40 40 40h208c34.08 0 53.77-42.79 28.28-68.28L166.42 333.86l34.8-64.87 24.15 28.76z"},child:[]}]})(e)}function b_(e){return O({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48 21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09 3.19 1 6.41 1.48 9.58 1.48 13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14 31.31-78.28 20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z"},child:[]}]})(e)}function k_(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(e)}function lc(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(e)}function w_(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(e)}function Ay(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(e)}function $y(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(e)}function zy(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 32h192c13.255 0 24 10.745 24 24v160c0 13.255-10.745 24-24 24H296c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24zm-80 0H24C10.745 32 0 42.745 0 56v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24zM0 296v160c0 13.255 10.745 24 24 24h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm296 184h192c13.255 0 24-10.745 24-24V296c0-13.255-10.745-24-24-24H296c-13.255 0-24 10.745-24 24v160c0 13.255 10.745 24 24 24z"},child:[]}]})(e)}function Et(e){return O({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(e)}function Ly(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"},child:[]}]})(e)}function cc(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"},child:[]}]})(e)}function j_(e){return O({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M378.31 378.49L298.42 288h30.63c9.01 0 16.98-5 20.78-13.06 3.8-8.04 2.55-17.26-3.28-24.05L268.42 160h28.89c9.1 0 17.3-5.35 20.86-13.61 3.52-8.13 1.86-17.59-4.24-24.08L203.66 4.83c-6.03-6.45-17.28-6.45-23.32 0L70.06 122.31c-6.1 6.49-7.75 15.95-4.24 24.08C69.38 154.65 77.59 160 86.69 160h28.89l-78.14 90.91c-5.81 6.78-7.06 15.99-3.27 24.04C37.97 283 45.93 288 54.95 288h30.63L5.69 378.49c-6 6.79-7.36 16.09-3.56 24.26 3.75 8.05 12 13.25 21.01 13.25H160v24.45l-30.29 48.4c-5.32 10.64 2.42 23.16 14.31 23.16h95.96c11.89 0 19.63-12.52 14.31-23.16L224 440.45V416h136.86c9.01 0 17.26-5.2 21.01-13.25 3.8-8.17 2.44-17.47-3.56-24.26z"},child:[]}]})(e)}function Xn(e){return O({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z"},child:[]}]})(e)}function S_(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(e)}function P_(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"},child:[]}]})(e)}function My(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.3 271.1l-115.2-45c-4.1-1.6-12.6-3.7-22.2 0l-115.2 45c-10.7 4.2-17.7 14-17.7 24.9 0 111.6 68.7 188.8 132.9 213.9 9.6 3.7 18 1.6 22.2 0C558.4 489.9 640 420.5 640 296c0-10.9-7-20.7-17.7-24.9zM496 462.4V273.3l95.5 37.3c-5.6 87.1-60.9 135.4-95.5 151.8zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm96 40c0-2.5.8-4.8 1.1-7.2-2.5-.1-4.9-.8-7.5-.8h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c6.8 0 13.3-1.5 19.2-4-54-42.9-99.2-116.7-99.2-212z"},child:[]}]})(e)}function Iy(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"},child:[]}]})(e)}function ns(e){return O({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(e)}function Qe(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"},child:[]}]})(e)}function C_(e){return O({tag:"svg",attr:{viewBox:"0 0 416 512"},child:[{tag:"path",attr:{d:"M207.9 15.2c.8 4.7 16.1 94.5 16.1 128.8 0 52.3-27.8 89.6-68.9 104.6L168 486.7c.7 13.7-10.2 25.3-24 25.3H80c-13.7 0-24.7-11.5-24-25.3l12.9-238.1C27.7 233.6 0 196.2 0 144 0 109.6 15.3 19.9 16.1 15.2 19.3-5.1 61.4-5.4 64 16.3v141.2c1.3 3.4 15.1 3.2 16 0 1.4-25.3 7.9-139.2 8-141.8 3.3-20.8 44.7-20.8 47.9 0 .2 2.7 6.6 116.5 8 141.8.9 3.2 14.8 3.4 16 0V16.3c2.6-21.6 44.8-21.4 48-1.1zm119.2 285.7l-15 185.1c-1.2 14 9.9 26 23.9 26h56c13.3 0 24-10.7 24-24V24c0-13.2-10.7-24-24-24-82.5 0-221.4 178.5-64.9 300.9z"},child:[]}]})(e)}function __(e){return O({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"},child:[]}]})(e)}function T_(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z"},child:[]}]})(e)}function pp(e){return O({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM320 352c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"},child:[]}]})(e)}function mp(e){return O({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"},child:[]}]})(e)}const E_=d.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -300px;
    left: 0;
    right: 0;
    height: 300px;
    background: linear-gradient(
      to bottom,
      rgba(26, 26, 46, 0),
      rgba(26, 26, 46, 0.8) 40%,
      rgba(26, 26, 46, 1) 70%
    );
    pointer-events: none;
    z-index: 2;
  }
`,A_=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,$s=d.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,$_=d.div`
  padding: 4rem 0;
  margin-top: 0;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  width: 100vw;
  position: relative;
  background: linear-gradient(
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.8)
  ), url('https://raw.githubusercontent.com/hfzt07/dbweb/main/jurusan.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 6rem 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 150px;
    pointer-events: none;
  }

  &::before {
    top: 0;
    background: linear-gradient(
      to bottom,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }

  &::after {
    bottom: 0;
    background: linear-gradient(
      to top,
      #1a1a2e,
      rgba(26, 26, 46, 0)
    );
  }
`,z_=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,L_=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`,M_=d(E.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    position: relative;
    z-index: 2;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    position: relative;
    z-index: 2;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(0, 255, 135, 0.2);
  }
`;d.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;const I_=d.div`
  padding: 20px;
`,R_=d.h3`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 10px;
`,O_=d.p`
  color: #8e8e8e;
  font-size: 0.9rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,D_=d.section`
  padding: 40px 0;
`,B_=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,N_=d.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,F_=d.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  aspect-ratio: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.1);
  }
`,V_=d.div`
  width: 100%;
  height: 60%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,U_=d.div`
  padding: 25px;
  height: 40%;
  display: flex;
  flex-direction: column;
`,H_=d.h3`
  color: white;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 15px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,K_=d.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
`,G_=d.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: calc((100% - 60px) / 5);

  &:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.05);
  }
`,W_=d.div`
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,q_=d.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`,J_=d.h3`
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 4px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,g0=d.div`
  color: #00ff87;
  font-size: 0.75rem;
  margin-bottom: 4px;
  font-weight: 500;
`,x0=d.p`
  color: #8e8e8e;
  font-size: 0.8rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;d(E.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.85rem;
`;const Y_=d.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin: 0 auto 5rem;
  max-width: 1100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,X_=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .content {
    flex: 1;
  }

  .image-container {
    width: 200px;
    height: 200px;
    border-radius: 15px;
    overflow: hidden;
    border: 2px solid rgba(0, 255, 135, 0.3);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.1);
    }
  }

  h3 {
    color: #00ff87;
    margin-bottom: 1.8rem;
    font-size: 2rem;
    font-weight: 600;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.8;
    font-size: 1.15rem;
    letter-spacing: 0.3px;
    text-align: justify;
    text-justify: inter-word;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
    .image-container {
      width: 150px;
      height: 150px;
    }
  }
`,Q_=d.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`,v0=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2.8rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  gap: 2.5rem;
  align-items: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 32px rgba(0, 255, 135, 0.1);
  }

  .content {
    flex: 1;

    h3 {
      color: #00ff87;
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.8;
      font-size: 1.1rem;
      letter-spacing: 0.3px;
      text-align: justify;
      text-justify: inter-word;
    }
  }

  .image-container {
    width: 180px;
    height: 180px;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    border: none;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 3px;
      border-radius: 15px;
      background: linear-gradient(
        45deg,
        #00ff87,
        #60efff,
        #00ff87
      );
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: borderRotate 4s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 255, 135, 0.1) 100%
      );
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      filter: contrast(1.1) brightness(1.1);
    }

    &:hover img {
      transform: scale(1.15);
    }
  }

  @keyframes borderRotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1024px) {
    padding: 2.5rem;
    gap: 2rem;
    
    .image-container {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    
    .content p {
      text-align: justify;
    }
    
    .image-container {
      width: 140px;
      height: 140px;
    }
  }
`;d.h3`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 1.8rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #60efff;
    text-shadow: 0 0 10px rgba(0, 255, 135, 0.5);
  }
`;const Z_=d.section`
  padding: 40px 0;
`,e9=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,t9=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,n9=d.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.1);
  }
`,r9=d.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,i9=d.div`
  padding: 20px;
`,a9=d.h3`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 10px;
`,s9=d.div`
  color: #00ff87;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,o9=d.p`
  color: #8e8e8e;
  font-size: 0.9rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,y0=d(Ci)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #00ff87;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 40px;
  transition: all 0.3s ease;
  font-weight: 500;

  &:hover {
    transform: translateX(5px);
    color: #60efff;
  }

  svg {
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(3px);
  }
`;d.section`
  padding: 40px 0;
`;d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 1rem;
`;d.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.1);
  }
`;d.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;d.div`
  padding: 20px;
`;d.h3`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 10px;
`;function l9(){const e=G(),[t,n]=k.useState([]),[r,i]=k.useState([]);k.useEffect(()=>{(async()=>{try{const{data:u,error:h}=await I.from("agenda").select("*").order("created_at",{ascending:!1}).limit(3);if(h)throw h;n(u||[])}catch(u){console.error("Error fetching agendas:",u)}})()},[]),k.useEffect(()=>{(async()=>{try{const{data:u,error:h}=await I.from("berita").select("*").order("created_at",{ascending:!1}).limit(6);if(h)throw h;i(u||[])}catch(u){console.error("Error fetching berita:",u)}})()},[]);const s=r[0],o=r.slice(1,6),c=[{id:1,title:"Multimedia",description:"Program keahlian yang mempelajari tentang desain grafis, animasi, video editing, dan web design.",path:"/keahlian/mm"},{id:2,title:"Teknik Komputer Jaringan",description:"Program keahlian yang mempelajari tentang jaringan komputer, hardware, dan sistem operasi.",path:"/keahlian/tkj"},{id:3,title:"Rekayasa Perangkat Lunak",description:"Program keahlian yang mempelajari tentang pemrograman, database, dan pengembangan aplikasi.",path:"/keahlian/rpl"},{id:4,title:"Bisnis Digital",description:"Program keahlian yang mempelajari tentang digital marketing, e-commerce, dan manajemen bisnis online.",path:"/keahlian/bd"}];return a.jsx(E_,{id:"profil",children:a.jsxs(A_,{children:[a.jsx($s,{children:"Profil Sekolah"}),a.jsxs(Y_,{children:[a.jsx(X_,{initial:{opacity:0,x:-50},whileInView:{opacity:1,x:0},transition:{duration:.8},whileHover:{scale:1.02},onClick:()=>e("/school-detail"),style:{cursor:"pointer"},children:a.jsxs("div",{className:"content",children:[a.jsx("h3",{children:"SMKN 1 Bulan"}),a.jsx("p",{children:"Adalah lembaga pendidikan kejuruan unggulan yang berdiri sejak tahun 2005. Dengan fokus pada bidang teknologi informasi dan komunikasi, kami telah menghasilkan ribuan lulusan berkualitas yang kini berkarya di berbagai perusahaan teknologi terkemuka."})]})}),a.jsxs(Q_,{children:[a.jsxs(v0,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8},whileHover:{scale:1.02},onClick:()=>e("/kepsek-detail"),style:{cursor:"pointer"},children:[a.jsx("div",{className:"image-container",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg",alt:"Kepala Sekolah"})}),a.jsxs("div",{className:"content",children:[a.jsx("h3",{children:"Sambutan Kepala Sekolah"}),a.jsx("p",{children:'"Pengembangan karakter serta etika merupakan komitmen kami untuk menghasilkan lulusan yang berkualitas dan berakhlak mulia."'})]})]}),a.jsx(v0,{initial:{opacity:0,x:50},whileInView:{opacity:1,x:0},transition:{duration:.8,delay:.2},whileHover:{scale:1.02},onClick:()=>e("/visi-misi"),style:{cursor:"pointer"},children:a.jsxs("div",{className:"content",children:[a.jsx("h3",{children:"Visi & Misi"}),a.jsx("p",{children:"Menjadi lembaga pendidikan teknologi terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia untuk membangun masa depan Indonesia yang lebih baik."})]})})]})]}),a.jsx(D_,{id:"berita",children:a.jsxs(B_,{children:[a.jsx($s,{children:"Berita Sekolah"}),r.length>0&&a.jsxs(N_,{children:[a.jsxs(F_,{children:[a.jsx(V_,{children:a.jsx("img",{src:s.gambarBerita,alt:s.judulBerita,onError:l=>{l.target.src="https://via.placeholder.com/800x400?text=Gambar+Tidak+Tersedia"}})}),a.jsxs(U_,{children:[a.jsx(H_,{children:s.judulBerita}),a.jsx(g0,{children:s.tanggalBerita}),a.jsx(x0,{children:s.deskripsiBerita})]})]}),a.jsx(K_,{children:o.map(l=>a.jsxs(G_,{children:[a.jsx(W_,{children:a.jsx("img",{src:l.gambarBerita,alt:l.judulBerita,onError:u=>{u.target.src="https://via.placeholder.com/200x200?text=Gambar+Tidak+Tersedia"}})}),a.jsxs(q_,{children:[a.jsx(J_,{children:l.judulBerita}),a.jsx(g0,{children:l.tanggalBerita}),a.jsx(x0,{children:l.deskripsiBerita})]})]},l.id))})]}),a.jsxs(y0,{to:"/berita",children:["Baca Selengkapnya ",a.jsx(m0,{})]})]})}),a.jsx(Z_,{children:a.jsxs(e9,{children:[a.jsx($s,{children:"Agenda Sekolah"}),a.jsx(t9,{children:t.map(l=>a.jsxs(n9,{children:[a.jsx(r9,{children:a.jsx("img",{src:l.gambarAgenda,alt:l.judulAgenda})}),a.jsxs(i9,{children:[a.jsx(a9,{children:l.judulAgenda}),a.jsx(s9,{children:l.jadwalAgenda}),a.jsx(o9,{children:l.deskripsiAgenda})]})]},l.id))}),a.jsxs(y0,{to:"/agenda",children:["Baca Selengkapnya ",a.jsx(m0,{})]})]})}),a.jsx($_,{id:"jurusan",children:a.jsxs(z_,{children:[a.jsx($s,{children:"Program Keahlian"}),a.jsx(L_,{children:c.map(l=>a.jsx(M_,{onClick:()=>e(l.path),children:a.jsxs(I_,{children:[a.jsx(R_,{children:l.title}),a.jsx(O_,{children:l.description})]})},l.id))})]})})]})})}const c9=d.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,u9=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,d9=d.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);
`,h9=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`,f9=d(E.div)`
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${e=>`url(${e.bgImage})`};
    background-size: cover;
    background-position: center;
    opacity: 0.3;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    opacity: 0.5;
  }

  h3 {
    color: #00ff87;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    position: relative;
    z-index: 2;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    position: relative;
    z-index: 2;
    max-width: 90%;
    margin: 0 auto;
  }
`;function p9(){const e=G(),t=[{nama:"Pramuka",deskripsi:"Kegiatan kepanduan yang mengembangkan karakter dan keterampilan",path:"pramuka",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pramuka.jpg"},{nama:"Futsal",deskripsi:"Olahraga tim yang mengembangkan kerjasama dan kebugaran",path:"futsal",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/futsal.jpg"},{nama:"PMR",deskripsi:"Palang Merah Remaja untuk pembelajaran pertolongan pertama",path:"pmr",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pmr.jpg"},{nama:"Paskibra",deskripsi:"Pasukan pengibar bendera untuk meningkatkan kedisiplinan",path:"paskibra",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/paskibra.jpg"},{nama:"OSIS",deskripsi:"Organisasi siswa intra sekolah untuk pengembangan kepemimpinan",path:"osis",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/osis.jpg"},{nama:"English Club",deskripsi:"Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa",path:"english-club",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/english.jpg"}];return a.jsx(c9,{id:"ekskul",children:a.jsxs(u9,{children:[a.jsx(d9,{children:"Ekstrakurikuler"}),a.jsx(h9,{children:t.map((n,r)=>a.jsxs(f9,{bgImage:n.image,initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:r*.1},whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(0, 255, 135, 0.2)"},onClick:()=>e(n.path),children:[a.jsx("h3",{children:n.nama}),a.jsx("p",{children:n.deskripsi})]},r))})]})})}const m9=d.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,g9=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,x9=d.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,v9=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  margin-bottom: 4rem;
`,iu=d(E.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  h3 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;function y9(){const e=G();return a.jsx(m9,{id:"program",children:a.jsxs(g9,{children:[a.jsx(x9,{children:"Program Unggulan"}),a.jsxs(v9,{children:[a.jsxs(iu,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.1},whileHover:{scale:1.05},onClick:()=>e("/akademik-detail"),style:{cursor:"pointer"},children:[a.jsx("h3",{children:"Program Akademik"}),a.jsx("p",{children:"Program pembelajaran berbasis industri dengan pendekatan teaching factory"})]}),a.jsxs(iu,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.2},whileHover:{scale:1.05},onClick:()=>e("/karakter-detail"),style:{cursor:"pointer"},children:[a.jsx("h3",{children:"Penguatan Karakter"}),a.jsx("p",{children:"Pembentukan karakter dan etika melalui berbagai program pembinaan"})]}),a.jsxs(iu,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:.3},whileHover:{scale:1.05},onClick:()=>e("/ekstrakurikuler-detail"),style:{cursor:"pointer"},children:[a.jsx("h3",{children:"Ekstrakurikuler"}),a.jsx("p",{children:"Pengembangan minat dan bakat melalui berbagai kegiatan ekstrakurikuler"})]})]}),a.jsx(p9,{})]})})}const b9=d.section`
  padding: 4rem 2rem;
  background: #1a1a2e;
`,k9=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,w9=d.h2`
  text-align: center;
  font-size: 2.8rem;
  margin-bottom: 4rem;
  color: #00ff87;
  font-weight: 800;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 255, 135, 0.2);

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 3rem;
  }
`,j9=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`,S9=d(E.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  .image-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .content {
    padding: 1.5rem;
    
    h3 {
      color: #00ff87;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      line-height: 1.6;
      font-size: 0.9rem;
    }
  }

  &:hover {
    .image-container img {
      transform: scale(1.1);
    }
  }
`;function P9(){const e=G(),t=[{nama:"Perpustakaan Digital",deskripsi:"Perpustakaan dengan koleksi buku digital dan area belajar yang nyaman",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpustakaan.jpg",path:"/perpus-detail"},{nama:"Laboratorium Komputer",deskripsi:"Lab komputer modern dengan perangkat terbaru untuk praktik pemrograman dan desain",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab-komputer.jpg",path:"/lab-komputer-detail"},{nama:"Studio Multimedia",deskripsi:"Studio produksi dengan peralatan profesional untuk praktik multimedia",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio.jpg",path:"/studio-detail"},{nama:"Ruang Praktik Jaringan",deskripsi:"Ruang praktik dengan peralatan jaringan lengkap untuk pembelajaran TKJ",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab-jaringan.jpg",path:"/jaringan-detail"},{nama:"Aula Serbaguna",deskripsi:"Ruang serba guna untuk berbagai kegiatan sekolah dan event",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula.jpg",path:"/aula-detail"},{nama:"Lapangan Olahraga",deskripsi:"Fasilitas olahraga lengkap untuk kegiatan fisik dan ekstrakurikuler",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan.jpg",path:"/lapangan-detail"},{nama:"Kantin Sehat",deskripsi:"Area makan yang bersih dan nyaman dengan menu sehat dan bergizi",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin.jpg",path:"/kantin-detail"},{nama:"Taman Sosial",deskripsi:"Ruang terbuka hijau untuk interaksi sosial dan kegiatan outdoor",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman.jpg",path:"/taman-detail"},{nama:"Titik Internet",deskripsi:"Akses internet berkecepatan tinggi yang tersebar di seluruh area sekolah",image:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi.jpg",path:"/internet-detail"}];return a.jsx(b9,{id:"fasilitas",children:a.jsxs(k9,{children:[a.jsx(w9,{children:"Fasilitas Sekolah"}),a.jsx(j9,{children:t.map((n,r)=>a.jsxs(S9,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},transition:{delay:r*.1},whileHover:{y:-10},onClick:()=>n.path&&e(n.path),style:{cursor:n.path?"pointer":"default"},children:[a.jsx("div",{className:"image-container",children:a.jsx("img",{src:n.image,alt:n.nama})}),a.jsxs("div",{className:"content",children:[a.jsx("h3",{children:n.nama}),a.jsx("p",{children:n.deskripsi})]})]},r))})]})})}const C9=d.footer`
  background: #0f2027;
  color: white;
  padding: 4rem 2rem 2rem 2rem;
`,_9=d.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,zs=d.div`
  h3 {
    color: #00ff87;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }

  p, a {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.8rem;
    line-height: 1.6;
    display: block;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff87;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.8rem;
  }
`,T9=d.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1rem;

  a {
    color: white;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.8rem;
    border-radius: 50%;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;

    &:hover {
      background: #00ff87;
      transform: translateY(-3px);
    }

    &.facebook:hover {
      background: #1877f2;
    }

    &.instagram:hover {
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
    }

    &.youtube:hover {
      background: #ff0000;
    }

    &.tiktok:hover {
      background: #000000;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`,E9=d.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
  }
`,au=d(E.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    justify-content: center;
  }
`,A9=d.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  margin: 3rem auto 0;
  
  .maps-title {
    color: #00ff87;
    text-align: center;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 600;
  }

  .maps-wrapper {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    aspect-ratio: 21/9;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
    
    .maps-wrapper {
      aspect-ratio: 16/9;
    }
  }
`;function $9(){const e=new Date().getFullYear();return a.jsxs(C9,{id:"kontak",children:[a.jsxs(_9,{children:[a.jsxs(zs,{children:[a.jsx("h3",{children:"SMKN 1 Bulan"}),a.jsx("p",{children:"Membentuk generasi digital yang inovatif dan berkarakter untuk masa depan Indonesia."}),a.jsxs(T9,{children:[a.jsx("a",{href:"https://www.facebook.com/grizelleana/",target:"_blank",rel:"noopener noreferrer",className:"facebook",children:a.jsx(XC,{})}),a.jsx("a",{href:"https://www.instagram.com/bernadyaribka/",target:"_blank",rel:"noopener noreferrer",className:"instagram",children:a.jsx(lp,{})}),a.jsx("a",{href:"https://www.youtube.com/channel/UCY1bGdpom5tXC9M8-Ahu8dQ",target:"_blank",rel:"noopener noreferrer",className:"youtube",children:a.jsx(ZC,{})}),a.jsx("a",{href:"https://www.tiktok.com/@bearnotber?",target:"_blank",rel:"noopener noreferrer",className:"tiktok",children:a.jsx(cp,{})})]})]}),a.jsxs(zs,{children:[a.jsx("h3",{children:"Program Keahlian"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#jurusan",children:"Rekayasa Perangkat Lunak"})}),a.jsx("li",{children:a.jsx("a",{href:"#jurusan",children:"Teknik Komputer dan Jaringan"})}),a.jsx("li",{children:a.jsx("a",{href:"#jurusan",children:"Multimedia"})}),a.jsx("li",{children:a.jsx("a",{href:"#jurusan",children:"Bisnis Digital"})})]})]}),a.jsxs(zs,{children:[a.jsx("h3",{children:"Menu"}),a.jsxs("ul",{children:[a.jsx("li",{children:a.jsx("a",{href:"#beranda",children:"Beranda"})}),a.jsx("li",{children:a.jsx("a",{href:"#profil",children:"Profil"})}),a.jsx("li",{children:a.jsx("a",{href:"#berita",children:"Berita"})}),a.jsx("li",{children:a.jsx("a",{href:"#jurusan",children:"Program"})}),a.jsx("li",{children:a.jsx("a",{href:"#fasilitas",children:"Fasilitas"})})]})]}),a.jsxs(zs,{children:[a.jsx("h3",{children:"Kontak Kami"}),a.jsxs(au,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.1},children:[a.jsx("span",{children:"📍"}),a.jsx("p",{children:"Jl. Contoh No. 123, Kota Bulan"})]}),a.jsxs(au,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.2},children:[a.jsx("span",{children:"📞"}),a.jsx("p",{children:"+62 123 4567 8900"})]}),a.jsxs(au,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},transition:{delay:.3},children:[a.jsx("span",{children:"✉️"}),a.jsx("p",{children:"info@smkn1bulan.sch.id"})]})]})]}),a.jsxs(A9,{children:[a.jsx("h3",{className:"maps-title",children:"TEMUKAN KAMI"}),a.jsx("div",{className:"maps-wrapper",children:a.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666667!2d106.82638889999999!3d-6.175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzAuMCJTIDEwNsKwNDknMzUuMCJF!5e0!3m2!1sid!2sid!4v1234567890",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),a.jsx("br",{}),a.jsx("br",{})]}),a.jsx(E9,{children:a.jsxs("p",{children:["© ",e," SMKN 1 Bulan. Hak Cipta Dilindungi."]})})]})}const z9=d(E.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,L9=d(E.div)`
  background: rgba(26, 26, 46, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 20px;
  width: 90%;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`;d.h2`
  color: #00ff87;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
`;const M9=d.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,b0=d.input`
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #00ff87;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`,I9=d(E.button)`
  padding: 1rem;
  border-radius: 10px;
  border: none;
  background: linear-gradient(to right, #00ff87, #60efff);
  color: #1a1a2e;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,R9=d(E.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
`,O9=d.p`
  color: #ff4444;
  text-align: center;
  margin-top: 1rem;
`,D9=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -1rem;

  img {
    width: 80px;
    height: auto;
    margin-bottom: -1rem;
  }

  h2 {
    color: #00ff87;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  }
`;function B9(){const{showLogin:e,setShowLogin:t,handleLogin:n,loading:r}=At(),[i,s]=k.useState(""),[o,c]=k.useState(""),[l,u]=k.useState(""),h=async f=>{f.preventDefault(),u("");try{const p=await n(i,o);p.success?(t(!1),s(""),c("")):u(p.error)}catch{u("Terjadi kesalahan. Silakan coba lagi.")}};return a.jsx(D7,{children:e&&a.jsx(z9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>t(!1),children:a.jsxs(L9,{initial:{scale:.9,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.9,opacity:0},onClick:f=>f.stopPropagation(),children:[a.jsx(R9,{onClick:()=>t(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(Et,{})}),a.jsxs(D9,{children:[a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo"}),a.jsx("h2",{children:"SMKN 1 Bulan"})]}),a.jsxs(M9,{onSubmit:h,children:[a.jsx(b0,{type:"text",placeholder:"Username",value:i,onChange:f=>s(f.target.value),required:!0}),a.jsx(b0,{type:"password",placeholder:"Password",value:o,onChange:f=>c(f.target.value),required:!0}),l&&a.jsx(O9,{children:l}),a.jsx(I9,{type:"submit",disabled:r,whileHover:{scale:1.02},whileTap:{scale:.98},children:r?"Loading...":"Login"})]})]})})})}const N9=d.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
  position: relative;
`,F9=d.div`
  width: 250px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`,V9=d.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  margin-left: 250px;
`,U9=d.div`
  color: #00ff87;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`,Ls=d(Ci)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: linear-gradient(to right, #00ff87, #60efff);
    color: #1a1a2e;
  }
`,H9=d(E.button)`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 59, 48, 0.1);
  border: none;
  border-radius: 8px;
  color: #ff3b30;
  cursor: pointer;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 59, 48, 0.2);
  }
`;function K9(){const e=G(),t=()=>{e("/")};return a.jsxs(N9,{children:[a.jsxs(F9,{children:[a.jsx(U9,{children:"Admin Panel"}),a.jsxs(Ls,{to:"/admin",children:[a.jsx(Cy,{})," Dashboard"]}),a.jsxs(Ls,{to:"/admin/akun",children:[a.jsx(Qe,{})," Akun"]}),a.jsxs(Ls,{to:"/admin/news",children:[a.jsx(hp,{})," Berita"]}),a.jsxs(Ls,{to:"/admin/agenda",children:[a.jsx(l_,{})," Agenda"]}),a.jsx(H9,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:t,children:"Logout"})]}),a.jsx(V9,{children:a.jsx(zf,{})})]})}const G9=d.div`
  margin-bottom: 2rem;
`,W9=d.h1`
  font-size: 2rem;
  color: #00ff87;
  margin-bottom: 0.5rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,q9=d.p`
  color: #8e8e8e;
  font-size: 1rem;
`;function uc({title:e,description:t}){return a.jsxs(G9,{children:[a.jsx(W9,{children:e}),t&&a.jsx(q9,{children:t})]})}const k0=d.div`
  padding: 20px;
`,J9=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`,su=d.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.1);
  }
`,ou=d.div`
  font-size: 2.5rem;
  color: #00ff87;
`,lu=d.div`
  flex: 1;
`,cu=d.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
`,uu=d.div`
  color: #8e8e8e;
  font-size: 0.9rem;
`,w0=d.h2`
  color: #00ff87;
  font-size: 1.5rem;
  margin: 30px 0 20px;
`,Y9=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
`,Ry=d.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
`,Oy=d.div`
  width: 100%;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,Dy=d.div`
  padding: 15px;
`,By=d.h3`
  color: white;
  font-size: 1rem;
  margin-bottom: 8px;
`,Ny=d.div`
  color: #00ff87;
  font-size: 0.9rem;
  margin-bottom: 8px;
`,X9=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`,Q9=d(Ry)``,Z9=d(Oy)``,eT=d(Dy)``,tT=d(By)``,nT=d(Ny)``;function rT(){const[e,t]=k.useState({admin:0,moderator:0,user:0}),[n,r]=k.useState([]),[i,s]=k.useState([]),[o,c]=k.useState(!0);k.useEffect(()=>{l()},[]);const l=async()=>{try{const{data:u}=await I.from("akun").select("jenisAkun"),h=u.reduce((m,x)=>(m[x.jenisAkun]=(m[x.jenisAkun]||0)+1,m),{});t({admin:h.admin||0,moderator:h.moderator||0,user:h.user||0});const{data:f}=await I.from("agenda").select("*").order("created_at",{ascending:!1}).limit(3);r(f||[]);const{data:p}=await I.from("berita").select("*").order("created_at",{ascending:!1}).limit(6);s(p||[])}catch(u){console.error("Error:",u)}finally{c(!1)}};return o?a.jsx(k0,{children:"Loading..."}):a.jsxs(k0,{children:[a.jsx(uc,{title:"Dashboard Admin",description:"Ringkasan dan statistik sistem"}),a.jsxs(J9,{children:[a.jsxs(su,{children:[a.jsx(ou,{children:a.jsx(My,{})}),a.jsxs(lu,{children:[a.jsx(cu,{children:e.admin}),a.jsx(uu,{children:"Admin"})]})]}),a.jsxs(su,{children:[a.jsx(ou,{children:a.jsx(Iy,{})}),a.jsxs(lu,{children:[a.jsx(cu,{children:e.moderator}),a.jsx(uu,{children:"Moderator"})]})]}),a.jsxs(su,{children:[a.jsx(ou,{children:a.jsx(ns,{})}),a.jsxs(lu,{children:[a.jsx(cu,{children:e.user}),a.jsx(uu,{children:"User"})]})]})]}),a.jsxs(w0,{children:[a.jsx(Jn,{style:{marginRight:"10px"}}),"Agenda Terbaru"]}),a.jsx(Y9,{children:n.map(u=>a.jsxs(Ry,{children:[a.jsx(Oy,{children:a.jsx("img",{src:u.gambarAgenda,alt:u.judulAgenda})}),a.jsxs(Dy,{children:[a.jsx(By,{children:u.judulAgenda}),a.jsx(Ny,{children:u.jadwalAgenda})]})]},u.id))}),a.jsxs(w0,{children:[a.jsx(hp,{style:{marginRight:"10px"}}),"Berita Sekolah Terbaru"]}),a.jsx(X9,{children:i.map(u=>a.jsxs(Q9,{children:[a.jsx(Z9,{children:a.jsx("img",{src:u.gambarBerita,alt:u.judulBerita})}),a.jsxs(eT,{children:[a.jsx(tT,{children:u.judulBerita}),a.jsx(nT,{children:new Date(u.created_at).toLocaleDateString("id-ID")})]})]},u.id))})]})}const iT=d.div`
  padding: 20px;
`,aT=d.div`
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
  align-items: center;
`,sT=d.label`
  color: #fff;
  font-size: 14px;
`,oT=d.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  padding: 8px 12px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  outline: none;

  &:focus {
    border-color: #00ff87;
  }

  option {
    background: #1a1a2e;
  }
`,lT=d.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  overflow: hidden;
`,rr=d.th`
  padding: 12px;
  text-align: left;
  background: rgba(0, 255, 135, 0.1);
  color: #00ff87;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,ir=d.td`
  padding: 12px;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,cT=d.tr`
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,j0=d.div`
  color: #8e8e8e;
  text-align: center;
  padding: 20px;
`,uT=d.div`
  display: flex;
  gap: 8px;
`,S0=d.button`
  background: none;
  border: none;
  color: ${e=>e.delete?"#ff4d4d":"#00ff87"};
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.delete?"rgba(255, 77, 77, 0.1)":"rgba(0, 255, 135, 0.1)"};
    transform: translateY(-2px);
  }
`,P0=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,C0=d.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
`,_0=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`,T0=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin: 0;
`,E0=d.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #ff4d4d;
    transform: rotate(90deg);
  }
`,A0=d.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Mt=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,It=d.label`
  color: white;
  font-size: 14px;
`,cn=d.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  color: white;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #00ff87;
  }
`,$0=d.select`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  color: white;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #00ff87;
  }

  option {
    background: #1a1a2e;
  }
`,z0=d.button`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 255, 135, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,dT=d.button`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 255, 135, 0.2);
  }
`,hT=d.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`,du=d.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.1);
  }
`,hu=d.div`
  font-size: 2rem;
  color: #00ff87;
`,fu=d.div`
  display: flex;
  flex-direction: column;
`,pu=d.div`
  font-size: 1.5rem;
  font-weight: 600;
`,mu=d.div`
  font-size: 0.9rem;
  color: #8e8e8e;
`;function fT(){const[e,t]=k.useState([]),[n,r]=k.useState(!0),[i,s]=k.useState("all"),[o,c]=k.useState(null),[l,u]=k.useState({namaLengkap:"",usernameAkun:"",kelasAkun:"",jenisAkun:""}),[h,f]=k.useState(!1),[p,m]=k.useState({namaLengkap:"",usernameAkun:"",passwordAkun:"",kelasAkun:"",jenisAkun:""}),[x,b]=k.useState({admin:0,moderator:0,user:0});k.useEffect(()=>{j()},[i]);const j=async()=>{try{let P=I.from("akun").select("*");i!=="all"&&(P=P.eq("jenisAkun",i));const{data:T,error:w}=await P;if(w)throw w;t(T||[]);const C=T.filter(L=>L.jenisAkun==="admin").length,_=T.filter(L=>L.jenisAkun==="moderator").length,A=T.filter(L=>L.jenisAkun==="user").length;b({admin:C,moderator:_,user:A})}catch(P){console.error("Error:",P),alert("Error mengambil data pengguna")}finally{r(!1)}},y=async P=>{if(window.confirm("Apakah Anda yakin ingin menghapus akun ini?"))try{const{error:T}=await I.from("akun").delete().eq("id",P);if(T)throw T;j(),alert("Akun berhasil dihapus")}catch(T){console.error("Error:",T),alert("Gagal menghapus akun")}},g=P=>{c(P),u({namaLengkap:P.namaLengkap||"",usernameAkun:P.usernameAkun||"",passwordAkun:P.passwordAkun||"",kelasAkun:P.kelasAkun||"",jenisAkun:P.jenisAkun||""})},v=async P=>{P.preventDefault();try{const{error:T}=await I.from("akun").update({namaLengkap:l.namaLengkap,usernameAkun:l.usernameAkun,passwordAkun:l.passwordAkun,kelasAkun:l.kelasAkun,jenisAkun:l.jenisAkun}).eq("id",o.id);if(T)throw T;j(),c(null),alert("Data berhasil diperbarui")}catch(T){console.error("Error:",T),alert("Gagal memperbarui data")}},S=async P=>{P.preventDefault();try{const{error:T}=await I.from("akun").insert([{namaLengkap:p.namaLengkap,usernameAkun:p.usernameAkun,passwordAkun:p.passwordAkun,kelasAkun:p.kelasAkun,jenisAkun:p.jenisAkun}]);if(T)throw T;j(),f(!1),m({namaLengkap:"",usernameAkun:"",passwordAkun:"",kelasAkun:"",jenisAkun:""}),alert("Akun berhasil ditambahkan")}catch(T){console.error("Error:",T),alert("Gagal menambahkan akun")}};return a.jsxs(iT,{children:[a.jsx(uc,{title:"Manajemen Pengguna",description:"Kelola semua akun pengguna sistem"}),a.jsxs(hT,{children:[a.jsxs(du,{children:[a.jsx(hu,{children:a.jsx(My,{})}),a.jsxs(fu,{children:[a.jsx(pu,{children:x.admin}),a.jsx(mu,{children:"Admin"})]})]}),a.jsxs(du,{children:[a.jsx(hu,{children:a.jsx(Iy,{})}),a.jsxs(fu,{children:[a.jsx(pu,{children:x.moderator}),a.jsx(mu,{children:"Moderator"})]})]}),a.jsxs(du,{children:[a.jsx(hu,{children:a.jsx(ns,{})}),a.jsxs(fu,{children:[a.jsx(pu,{children:x.user}),a.jsx(mu,{children:"User"})]})]})]}),a.jsxs(dT,{onClick:()=>f(!0),children:[a.jsx(Bn,{})," Tambahkan Akun"]}),a.jsxs(aT,{children:[a.jsx(sT,{children:"Filter Jenis Akun:"}),a.jsxs(oT,{value:i,onChange:P=>s(P.target.value),children:[a.jsx("option",{value:"all",children:"Semua"}),a.jsx("option",{value:"admin",children:"Admin"}),a.jsx("option",{value:"moderator",children:"Moderator"}),a.jsx("option",{value:"user",children:"User"})]})]}),n?a.jsx(j0,{children:"Loading..."}):e.length===0?a.jsx(j0,{children:"Tidak ada data pengguna"}):a.jsxs(lT,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(rr,{children:"No"}),a.jsx(rr,{children:"Nama Lengkap"}),a.jsx(rr,{children:"Username"}),a.jsx(rr,{children:"Password"}),a.jsx(rr,{children:"Kelas (Jika Siswa)"}),a.jsx(rr,{children:"Jenis Akun"}),a.jsx(rr,{children:"Aksi"})]})}),a.jsx("tbody",{children:e.map((P,T)=>a.jsxs(cT,{children:[a.jsx(ir,{children:T+1}),a.jsx(ir,{children:P.namaLengkap||"-"}),a.jsx(ir,{children:P.usernameAkun||"-"}),a.jsx(ir,{children:P.passwordAkun||"-"}),a.jsx(ir,{children:P.kelasAkun||"-"}),a.jsx(ir,{children:P.jenisAkun||"-"}),a.jsx(ir,{children:a.jsxs(uT,{children:[a.jsx(S0,{onClick:()=>g(P),children:a.jsx(Va,{})}),a.jsx(S0,{delete:!0,onClick:()=>y(P.id),children:a.jsx(cc,{})})]})})]},P.id))})]}),h&&a.jsx(P0,{onClick:()=>f(!1),children:a.jsxs(C0,{onClick:P=>P.stopPropagation(),children:[a.jsxs(_0,{children:[a.jsx(T0,{children:"Tambah Akun Baru"}),a.jsx(E0,{onClick:()=>f(!1),children:a.jsx(Et,{})})]}),a.jsxs(A0,{onSubmit:S,children:[a.jsxs(Mt,{children:[a.jsx(It,{children:"Nama Lengkap"}),a.jsx(cn,{type:"text",value:p.namaLengkap,onChange:P=>m({...p,namaLengkap:P.target.value}),required:!0,placeholder:"Masukkan nama lengkap"})]}),a.jsxs(Mt,{children:[a.jsx(It,{children:"Username"}),a.jsx(cn,{type:"text",value:p.usernameAkun,onChange:P=>m({...p,usernameAkun:P.target.value}),required:!0,placeholder:"Masukkan username"})]}),a.jsxs(Mt,{children:[a.jsx(It,{children:"Password *"}),a.jsx(cn,{type:"password",value:p.passwordAkun,onChange:P=>m({...p,passwordAkun:P.target.value}),required:!0,placeholder:"Masukkan password"})]}),a.jsxs(Mt,{children:[a.jsx(It,{children:"Kelas (Jika Siswa)"}),a.jsx(cn,{type:"text",value:p.kelasAkun,onChange:P=>m({...p,kelasAkun:P.target.value}),placeholder:"Masukkan kelas"})]}),a.jsxs(Mt,{children:[a.jsx(It,{children:"Jenis Akun *"}),a.jsxs($0,{value:p.jenisAkun,onChange:P=>m({...p,jenisAkun:P.target.value}),required:!0,placeholder:"Pilih Jenis Akun",children:[a.jsx("option",{value:"",disabled:!0,children:"Pilih Jenis Akun"}),a.jsx("option",{value:"admin",children:"Admin"}),a.jsx("option",{value:"moderator",children:"Moderator"}),a.jsx("option",{value:"user",children:"User"})]})]}),a.jsx(z0,{type:"submit",children:"Tambah Akun"})]})]})}),o&&a.jsx(P0,{onClick:()=>c(null),children:a.jsxs(C0,{onClick:P=>P.stopPropagation(),children:[a.jsxs(_0,{children:[a.jsx(T0,{children:"Edit Akun"}),a.jsx(E0,{onClick:()=>c(null),children:a.jsx(Et,{})})]}),a.jsxs(A0,{onSubmit:v,children:[a.jsxs(Mt,{children:[a.jsx(It,{children:"Nama Lengkap"}),a.jsx(cn,{type:"text",value:l.namaLengkap,onChange:P=>u({...l,namaLengkap:P.target.value}),required:!0})]}),a.jsxs(Mt,{children:[a.jsx(It,{children:"Username"}),a.jsx(cn,{type:"text",value:l.usernameAkun,onChange:P=>u({...l,usernameAkun:P.target.value}),required:!0})]}),a.jsxs(Mt,{children:[a.jsx(It,{children:"Password"}),a.jsx(cn,{type:"password",value:l.passwordAkun,onChange:P=>u({...l,passwordAkun:P.target.value}),required:!0})]}),a.jsxs(Mt,{children:[a.jsx(It,{children:"Kelas (Jika Siswa)"}),a.jsx(cn,{type:"text",value:l.kelasAkun,onChange:P=>u({...l,kelasAkun:P.target.value})})]}),a.jsxs(Mt,{children:[a.jsx(It,{children:"Jenis Akun *"}),a.jsxs($0,{value:l.jenisAkun,onChange:P=>u({...l,jenisAkun:P.target.value}),required:!0,children:[a.jsx("option",{value:"",disabled:!0,children:"Pilih Jenis Akun"}),a.jsx("option",{value:"admin",children:"Admin"}),a.jsx("option",{value:"moderator",children:"Moderator"}),a.jsx("option",{value:"user",children:"User"})]})]}),a.jsx(z0,{type:"submit",children:"Simpan Perubahan"})]})]})})]})}const pT=d.div`
  padding: 20px;
`,mT=d.button`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 255, 135, 0.2);
  }
`,L0=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,M0=d.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
`,I0=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`,R0=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin: 0;
`,O0=d.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #ff4d4d;
    transform: rotate(90deg);
  }
`,D0=d.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,un=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,dn=d.label`
  color: white;
  font-size: 14px;
`,Mh=d.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  color: white;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #00ff87;
  }
`,B0=d.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  color: white;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: #00ff87;
  }
`,N0=d.button`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 255, 135, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,gT=d.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  overflow: hidden;
`,Rr=d.th`
  padding: 12px;
  text-align: left;
  background: rgba(0, 255, 135, 0.1);
  color: #00ff87;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;d.td`
  padding: 12px;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;d.tr`
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;const F0=d(Mh)`
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }
`,V0=d.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px 0;
  border: 2px dashed ${e=>e.isDragging?"#00ff87":"rgba(255, 255, 255, 0.1)"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,U0=d.input`
  display: none;
`,H0=d.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,xT=d.div`
  display: flex;
  gap: 8px;
`,K0=d.button`
  background: none;
  border: none;
  color: ${e=>e.delete?"#ff4d4d":"#00ff87"};
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.delete?"rgba(255, 77, 77, 0.1)":"rgba(0, 255, 135, 0.1)"};
    transform: translateY(-2px);
  }
`,vT=d.tr`
  td {
    padding: 12px;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;function yT(){const[e,t]=k.useState([]),[n,r]=k.useState(!1),[i,s]=k.useState(null),[o,c]=k.useState(!1),[l,u]=k.useState({judulBerita:"",tanggalBerita:"",deskripsiBerita:""}),[h,f]=k.useState(null),[p,m]=k.useState(null),[x,b]=k.useState(null);k.useEffect(()=>{j()},[]);const j=async()=>{try{const{data:w,error:C}=await I.from("berita").select("*").order("created_at",{ascending:!1});if(C)throw C;t(w||[])}catch(w){console.error("Error:",w),alert("Error mengambil data berita")}},y=async w=>{try{const C=w.target.files[0];if(!C)return;if(C.size>2*1024*1024){alert("Ukuran file terlalu besar. Maksimal 2MB");return}if(!C.type.startsWith("image/")){alert("File harus berupa gambar");return}s(C);const _=new FileReader;_.onloadend=()=>{f(_.result)},_.readAsDataURL(C)}catch(C){console.error("Error:",C),alert("Error saat memilih gambar")}},g=async w=>{if(w.preventDefault(),!i){alert("Mohon pilih gambar");return}c(!0);try{const C=i.name.split(".").pop(),L=`berita/${`berita_${Date.now()}.${C}`}`,{error:B}=await I.storage.from("galery").upload(L,i);if(B)throw B;const{data:{publicUrl:z}}=I.storage.from("galery").getPublicUrl(L),{error:F}=await I.from("berita").insert([{judulBerita:l.judulBerita,tanggalBerita:l.tanggalBerita,deskripsiBerita:l.deskripsiBerita,gambarBerita:z}]);if(F)throw F;j(),r(!1),u({judulBerita:"",tanggalBerita:"",deskripsiBerita:""}),s(null),f(null),alert("Berita berhasil ditambahkan")}catch(C){console.error("Error:",C),alert("Gagal menambahkan berita")}finally{c(!1)}},v=w=>{m(w),u({judulBerita:w.judulBerita,tanggalBerita:w.tanggalBerita,deskripsiBerita:w.deskripsiBerita}),b(w.gambarBerita)},S=async w=>{try{const C=w.target.files[0];if(!C)return;if(C.size>2*1024*1024){alert("Ukuran file terlalu besar. Maksimal 2MB");return}if(!C.type.startsWith("image/")){alert("File harus berupa gambar");return}s(C);const _=new FileReader;_.onloadend=()=>{b(_.result)},_.readAsDataURL(C)}catch(C){console.error("Error:",C),alert("Error saat memilih gambar")}},P=async w=>{w.preventDefault(),c(!0);try{let C=p.gambarBerita;if(i){const A=p.gambarBerita.split("/").pop();A&&await I.storage.from("galery").remove([`berita/${A}`]);const L=i.name.split(".").pop(),F=`berita/${`berita_${Date.now()}.${L}`}`,{error:q}=await I.storage.from("galery").upload(F,i);if(q)throw q;const{data:{publicUrl:N}}=I.storage.from("galery").getPublicUrl(F);C=N}const{error:_}=await I.from("berita").update({judulBerita:l.judulBerita,tanggalBerita:l.tanggalBerita,deskripsiBerita:l.deskripsiBerita,gambarBerita:C}).eq("id",p.id);if(_)throw _;j(),m(null),s(null),b(null),alert("Berita berhasil diperbarui")}catch(C){console.error("Error:",C),alert("Gagal memperbarui berita")}finally{c(!1)}},T=async(w,C)=>{if(window.confirm("Apakah Anda yakin ingin menghapus berita ini?"))try{const _=C.split("/").pop();_&&await I.storage.from("galery").remove([`berita/${_}`]);const{error:A}=await I.from("berita").delete().eq("id",w);if(A)throw A;j(),alert("Berita berhasil dihapus")}catch(_){console.error("Error:",_),alert("Gagal menghapus berita")}};return a.jsxs(pT,{children:[a.jsx(uc,{title:"Manajemen Berita",description:"Kelola semua berita"}),a.jsxs(mT,{onClick:()=>r(!0),children:[a.jsx(Bn,{})," Tambahkan Berita"]}),a.jsxs(gT,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(Rr,{children:"No"}),a.jsx(Rr,{children:"Gambar"}),a.jsx(Rr,{children:"Judul"}),a.jsx(Rr,{children:"Tanggal"}),a.jsx(Rr,{children:"Deskripsi"}),a.jsx(Rr,{children:"Aksi"})]})}),a.jsx("tbody",{children:e.map((w,C)=>a.jsxs(vT,{children:[a.jsx("td",{children:C+1}),a.jsx("td",{children:a.jsx("img",{src:w.gambarBerita,alt:w.judulBerita,style:{width:"50px",height:"50px",objectFit:"cover",borderRadius:"4px"}})}),a.jsx("td",{children:w.judulBerita}),a.jsx("td",{children:w.tanggalBerita}),a.jsx("td",{children:w.deskripsiBerita}),a.jsx("td",{children:a.jsxs(xT,{children:[a.jsx(K0,{onClick:()=>v(w),title:"Edit",children:a.jsx(Va,{size:16})}),a.jsx(K0,{delete:!0,onClick:()=>T(w.id,w.gambarBerita),title:"Hapus",children:a.jsx(cc,{size:16})})]})})]},w.id))})]}),n&&a.jsx(L0,{onClick:()=>r(!1),children:a.jsxs(M0,{onClick:w=>w.stopPropagation(),children:[a.jsxs(I0,{children:[a.jsx(R0,{children:"Tambah Berita Baru"}),a.jsx(O0,{onClick:()=>r(!1),children:a.jsx(Et,{})})]}),a.jsxs(D0,{onSubmit:g,children:[a.jsxs(un,{children:[a.jsx(dn,{children:"Gambar Berita"}),a.jsxs(H0,{children:[a.jsx(V0,{children:h?a.jsx("img",{src:h,alt:"Preview"}):a.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#8e8e8e",textAlign:"center",padding:"10px"},children:"Klik untuk memilih gambar"})}),a.jsx(U0,{type:"file",accept:"image/*",onChange:y,required:!0,id:"berita-image"})]})]}),a.jsxs(un,{children:[a.jsx(dn,{children:"Judul Berita"}),a.jsx(Mh,{type:"text",value:l.judulBerita,onChange:w=>u({...l,judulBerita:w.target.value}),required:!0,placeholder:"Masukkan judul berita"})]}),a.jsxs(un,{children:[a.jsx(dn,{children:"Tanggal Berita"}),a.jsx(F0,{type:"text",value:l.tanggalBerita,onChange:w=>u({...l,tanggalBerita:w.target.value}),required:!0,placeholder:"Masukkan tanggal berita (18 Januari 2025)"})]}),a.jsxs(un,{children:[a.jsx(dn,{children:"Deskripsi Berita"}),a.jsx(B0,{value:l.deskripsiBerita,onChange:w=>u({...l,deskripsiBerita:w.target.value}),required:!0,placeholder:"Masukkan deskripsi berita"})]}),a.jsx(N0,{type:"submit",disabled:o,children:o?"Mengunggah...":"Tambah Berita"})]})]})}),p&&a.jsx(L0,{onClick:()=>m(null),children:a.jsxs(M0,{onClick:w=>w.stopPropagation(),children:[a.jsxs(I0,{children:[a.jsx(R0,{children:"Edit Berita"}),a.jsx(O0,{onClick:()=>m(null),children:a.jsx(Et,{})})]}),a.jsxs(D0,{onSubmit:P,children:[a.jsxs(un,{children:[a.jsx(dn,{children:"Gambar Berita"}),a.jsxs(H0,{children:[a.jsx(V0,{children:x?a.jsx("img",{src:x,alt:"Preview"}):a.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#8e8e8e",textAlign:"center",padding:"10px"},children:"Klik untuk memilih gambar"})}),a.jsx(U0,{type:"file",accept:"image/*",onChange:S,id:"edit-berita-image"})]})]}),a.jsxs(un,{children:[a.jsx(dn,{children:"Judul Berita"}),a.jsx(Mh,{type:"text",value:l.judulBerita,onChange:w=>u({...l,judulBerita:w.target.value}),required:!0})]}),a.jsxs(un,{children:[a.jsx(dn,{children:"Tanggal Berita"}),a.jsx(F0,{type:"text",value:l.tanggalBerita,onChange:w=>u({...l,tanggalBerita:w.target.value}),required:!0,placeholder:"Masukkan tanggal berita (18 Januari 2025)"})]}),a.jsxs(un,{children:[a.jsx(dn,{children:"Deskripsi Berita"}),a.jsx(B0,{value:l.deskripsiBerita,onChange:w=>u({...l,deskripsiBerita:w.target.value}),required:!0})]}),a.jsx(N0,{type:"submit",disabled:o,children:o?"Menyimpan...":"Simpan Perubahan"})]})]})})]})}const bT=d.div`
  padding: 20px;
`,kT=d.button`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 255, 135, 0.2);
  }
`,G0=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,W0=d.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  width: 100%;
  max-width: 400px;
`,q0=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`,J0=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin: 0;
`,Y0=d.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #ff4d4d;
    transform: rotate(90deg);
  }
`,X0=d.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,hn=d.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,fn=d.label`
  color: white;
  font-size: 14px;
`,Ih=d.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  color: white;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #00ff87;
  }
`,Q0=d.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 10px;
  color: white;
  font-size: 14px;
  outline: none;
  resize: vertical;
  min-height: 100px;

  &:focus {
    border-color: #00ff87;
  }
`,Z0=d.button`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 12px;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 255, 135, 0.2);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,wT=d.table`
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  overflow: hidden;
`,Or=d.th`
  padding: 12px;
  text-align: left;
  background: rgba(0, 255, 135, 0.1);
  color: #00ff87;
  font-weight: 600;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;d.td`
  padding: 12px;
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;d.tr`
  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;const e1=d(Ih)`
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }
`,t1=d.div`
  width: 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px 0;
  border: 2px dashed ${e=>e.isDragging?"#00ff87":"rgba(255, 255, 255, 0.1)"};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,n1=d.input`
  display: none;
`,r1=d.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`,jT=d.div`
  display: flex;
  gap: 8px;
`,i1=d.button`
  background: none;
  border: none;
  color: ${e=>e.delete?"#ff4d4d":"#00ff87"};
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.delete?"rgba(255, 77, 77, 0.1)":"rgba(0, 255, 135, 0.1)"};
    transform: translateY(-2px);
  }
`,ST=d.tr`
  td {
    padding: 12px;
    color: white;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;function PT(){const[e,t]=k.useState([]),[n,r]=k.useState(!1),[i,s]=k.useState(null),[o,c]=k.useState(!1),[l,u]=k.useState({judulAgenda:"",jadwalAgenda:"",deskripsiAgenda:""}),[h,f]=k.useState(null),[p,m]=k.useState(null),[x,b]=k.useState(null);k.useEffect(()=>{j()},[]);const j=async()=>{try{const{data:w,error:C}=await I.from("agenda").select("*").order("created_at",{ascending:!1});if(C)throw C;t(w||[])}catch(w){console.error("Error:",w),alert("Error mengambil data agenda")}},y=async w=>{try{const C=w.target.files[0];if(!C)return;if(C.size>2*1024*1024){alert("Ukuran file terlalu besar. Maksimal 2MB");return}if(!C.type.startsWith("image/")){alert("File harus berupa gambar");return}s(C);const _=new FileReader;_.onloadend=()=>{f(_.result)},_.readAsDataURL(C)}catch(C){console.error("Error:",C),alert("Error saat memilih gambar")}},g=async w=>{if(w.preventDefault(),!i){alert("Mohon pilih gambar");return}c(!0);try{const C=i.name.split(".").pop(),L=`agenda/${`agenda_${Date.now()}.${C}`}`,{error:B}=await I.storage.from("galery").upload(L,i);if(B)throw B;const{data:{publicUrl:z}}=I.storage.from("galery").getPublicUrl(L),{error:F}=await I.from("agenda").insert([{judulAgenda:l.judulAgenda,jadwalAgenda:l.jadwalAgenda,deskripsiAgenda:l.deskripsiAgenda,gambarAgenda:z}]);if(F)throw F;j(),r(!1),u({judulAgenda:"",jadwalAgenda:"",deskripsiAgenda:""}),s(null),f(null),alert("Agenda berhasil ditambahkan")}catch(C){console.error("Error:",C),alert("Gagal menambahkan agenda")}finally{c(!1)}},v=w=>{m(w),u({judulAgenda:w.judulAgenda,jadwalAgenda:w.jadwalAgenda,deskripsiAgenda:w.deskripsiAgenda}),b(w.gambarAgenda)},S=async w=>{try{const C=w.target.files[0];if(!C)return;if(C.size>2*1024*1024){alert("Ukuran file terlalu besar. Maksimal 2MB");return}if(!C.type.startsWith("image/")){alert("File harus berupa gambar");return}s(C);const _=new FileReader;_.onloadend=()=>{b(_.result)},_.readAsDataURL(C)}catch(C){console.error("Error:",C),alert("Error saat memilih gambar")}},P=async w=>{w.preventDefault(),c(!0);try{let C=p.gambarAgenda;if(i){const A=p.gambarAgenda.split("/").pop();A&&await I.storage.from("galery").remove([`agenda/${A}`]);const L=i.name.split(".").pop(),F=`agenda/${`agenda_${Date.now()}.${L}`}`,{error:q}=await I.storage.from("galery").upload(F,i);if(q)throw q;const{data:{publicUrl:N}}=I.storage.from("galery").getPublicUrl(F);C=N}const{error:_}=await I.from("agenda").update({judulAgenda:l.judulAgenda,jadwalAgenda:l.jadwalAgenda,deskripsiAgenda:l.deskripsiAgenda,gambarAgenda:C}).eq("id",p.id);if(_)throw _;j(),m(null),s(null),b(null),alert("Agenda berhasil diperbarui")}catch(C){console.error("Error:",C),alert("Gagal memperbarui agenda")}finally{c(!1)}},T=async(w,C)=>{if(window.confirm("Apakah Anda yakin ingin menghapus agenda ini?"))try{const _=C.split("/").pop();_&&await I.storage.from("galery").remove([`agenda/${_}`]);const{error:A}=await I.from("agenda").delete().eq("id",w);if(A)throw A;j(),alert("Agenda berhasil dihapus")}catch(_){console.error("Error:",_),alert("Gagal menghapus agenda")}};return a.jsxs(bT,{children:[a.jsx(uc,{title:"Manajemen Agenda",description:"Kelola semua agenda dan kegiatan"}),a.jsxs(kT,{onClick:()=>r(!0),children:[a.jsx(Bn,{})," Tambahkan Agenda"]}),a.jsxs(wT,{children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx(Or,{children:"No"}),a.jsx(Or,{children:"Gambar"}),a.jsx(Or,{children:"Judul"}),a.jsx(Or,{children:"Jadwal"}),a.jsx(Or,{children:"Deskripsi"}),a.jsx(Or,{children:"Aksi"})]})}),a.jsx("tbody",{children:e.map((w,C)=>a.jsxs(ST,{children:[a.jsx("td",{children:C+1}),a.jsx("td",{children:a.jsx("img",{src:w.gambarAgenda,alt:w.judulAgenda,style:{width:"50px",height:"50px",objectFit:"cover",borderRadius:"4px"}})}),a.jsx("td",{children:w.judulAgenda}),a.jsx("td",{children:w.jadwalAgenda}),a.jsx("td",{children:w.deskripsiAgenda}),a.jsx("td",{children:a.jsxs(jT,{children:[a.jsx(i1,{onClick:()=>v(w),title:"Edit",children:a.jsx(Va,{size:16})}),a.jsx(i1,{delete:!0,onClick:()=>T(w.id,w.gambarAgenda),title:"Hapus",children:a.jsx(cc,{size:16})})]})})]},w.id))})]}),n&&a.jsx(G0,{onClick:()=>r(!1),children:a.jsxs(W0,{onClick:w=>w.stopPropagation(),children:[a.jsxs(q0,{children:[a.jsx(J0,{children:"Tambah Agenda Baru"}),a.jsx(Y0,{onClick:()=>r(!1),children:a.jsx(Et,{})})]}),a.jsxs(X0,{onSubmit:g,children:[a.jsxs(hn,{children:[a.jsx(fn,{children:"Gambar Agenda"}),a.jsxs(r1,{children:[a.jsx(t1,{children:h?a.jsx("img",{src:h,alt:"Preview"}):a.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#8e8e8e",textAlign:"center",padding:"10px"},children:"Klik untuk memilih gambar"})}),a.jsx(n1,{type:"file",accept:"image/*",onChange:y,required:!0,id:"agenda-image"})]})]}),a.jsxs(hn,{children:[a.jsx(fn,{children:"Judul Agenda"}),a.jsx(Ih,{type:"text",value:l.judulAgenda,onChange:w=>u({...l,judulAgenda:w.target.value}),required:!0,placeholder:"Masukkan judul agenda"})]}),a.jsxs(hn,{children:[a.jsx(fn,{children:"Jadwal Agenda"}),a.jsx(e1,{type:"text",value:l.jadwalAgenda,onChange:w=>u({...l,jadwalAgenda:w.target.value}),required:!0,placeholder:"Masukkan jadwal agenda (18 Januari 2025)"})]}),a.jsxs(hn,{children:[a.jsx(fn,{children:"Deskripsi Agenda"}),a.jsx(Q0,{value:l.deskripsiAgenda,onChange:w=>u({...l,deskripsiAgenda:w.target.value}),required:!0,placeholder:"Masukkan deskripsi agenda"})]}),a.jsx(Z0,{type:"submit",disabled:o,children:o?"Mengunggah...":"Tambah Agenda"})]})]})}),p&&a.jsx(G0,{onClick:()=>m(null),children:a.jsxs(W0,{onClick:w=>w.stopPropagation(),children:[a.jsxs(q0,{children:[a.jsx(J0,{children:"Edit Agenda"}),a.jsx(Y0,{onClick:()=>m(null),children:a.jsx(Et,{})})]}),a.jsxs(X0,{onSubmit:P,children:[a.jsxs(hn,{children:[a.jsx(fn,{children:"Gambar Agenda"}),a.jsxs(r1,{children:[a.jsx(t1,{children:x?a.jsx("img",{src:x,alt:"Preview"}):a.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#8e8e8e",textAlign:"center",padding:"10px"},children:"Klik untuk memilih gambar"})}),a.jsx(n1,{type:"file",accept:"image/*",onChange:S,id:"edit-agenda-image"})]})]}),a.jsxs(hn,{children:[a.jsx(fn,{children:"Judul Agenda"}),a.jsx(Ih,{type:"text",value:l.judulAgenda,onChange:w=>u({...l,judulAgenda:w.target.value}),required:!0})]}),a.jsxs(hn,{children:[a.jsx(fn,{children:"Jadwal Agenda"}),a.jsx(e1,{type:"text",value:l.jadwalAgenda,onChange:w=>u({...l,jadwalAgenda:w.target.value}),required:!0,placeholder:"Masukkan jadwal agenda (18 Januari 2025)"})]}),a.jsxs(hn,{children:[a.jsx(fn,{children:"Deskripsi Agenda"}),a.jsx(Q0,{value:l.deskripsiAgenda,onChange:w=>u({...l,deskripsiAgenda:w.target.value}),required:!0})]}),a.jsx(Z0,{type:"submit",disabled:o,children:o?"Menyimpan...":"Simpan Perubahan"})]})]})})]})}const CT=d.div`
  width: 250px;
  background: rgba(0, 0, 0, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  position: fixed;
  top: 0;
  left: ${e=>e.isOpen?"0":"-250px"};
  bottom: 0;
  transition: left 0.3s ease;
  z-index: 1001;
  overflow-y: auto;

  @media (max-width: 768px) {
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
  }
`,_T=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,TT=d.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1rem;
  border: 2px solid rgba(0, 255, 135, 0.3);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,ET=d.div`
  text-align: center;
  color: white;
`,AT=d.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`,$T=d.p`
  color: #8e8e8e;
  font-size: 0.9rem;
`,zT=d.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Ui=d(Ci)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${e=>e.active?"#00ff87":"white"};
  text-decoration: none;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: ${e=>e.active?"rgba(0, 255, 135, 0.1)":"transparent"};

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }
`,LT=d.button`
  display: none;
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #00ff87;
  cursor: pointer;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`,MT=d.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${e=>e.isOpen?"block":"none"};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
`,IT=d.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  color: #ff4d4d;
  background: transparent;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: auto;
  border: 1px solid rgba(255, 77, 77, 0.2);

  &:hover {
    background: rgba(255, 77, 77, 0.1);
    transform: translateY(-2px);
  }
`,RT=d.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 200px); // Sesuaikan dengan tinggi ProfileSection
`;function OT({isOpen:e,onClose:t}){G();const n=Pi(),{user:r,handleLogout:i}=At(),[s,o]=k.useState(null);return k.useEffect(()=>{(async()=>{if(r!=null&&r.id)try{const{data:l,error:u}=await I.from("akun").select("*").eq("id",r.id).single();if(u)throw u;o(l)}catch(l){console.error("Error:",l)}})()},[r]),a.jsxs(a.Fragment,{children:[a.jsx(MT,{isOpen:e,onClick:t}),a.jsxs(CT,{isOpen:e,children:[a.jsx(LT,{onClick:t,children:a.jsx(Et,{})}),a.jsxs(_T,{children:[a.jsx(TT,{children:a.jsx("img",{src:(s==null?void 0:s.profileImage)||"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Profile"})}),a.jsxs(ET,{children:[a.jsx(AT,{children:(s==null?void 0:s.namaLengkap)||"User"}),a.jsx($T,{children:(s==null?void 0:s.kelasAkun)||"-"})]})]}),a.jsxs(RT,{children:[a.jsxs(zT,{children:[a.jsxs(Ui,{to:"/user/dashboard",active:n.pathname==="/user/dashboard",children:[a.jsx(Cy,{})," Dashboard"]}),a.jsxs(Ui,{to:"/user/search",active:n.pathname==="/user/search",children:[a.jsx(lc,{})," Cari Profil"]}),a.jsxs(Ui,{to:"/user/posting",active:n.pathname==="/user/posting",children:[a.jsx(Bn,{})," Posting Foto"]}),a.jsxs(Ui,{to:"/user/gallery",active:n.pathname==="/user/gallery",children:[a.jsx(dp,{})," Gallery"]}),a.jsxs(Ui,{to:"/user/profile",active:n.pathname==="/user/profile",children:[a.jsx(ns,{})," Profile"]})]}),a.jsxs(IT,{onClick:()=>{i(),t()},children:[a.jsx($y,{})," Logout"]})]})]})]})}const DT=d.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
  position: relative;
`,BT=d.main`
  flex: 1;
  margin-left: ${e=>e.isSidebarOpen?"250px":"0"};
  padding: 2rem;
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`,NT=d.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: rgba(0, 255, 135, 0.1);
  border: 1px solid rgba(0, 255, 135, 0.2);
  color: #00ff87;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;function FT(){const[e,t]=k.useState(!0),n=()=>{t(!e)};return a.jsxs(DT,{children:[a.jsx(OT,{isOpen:e,onClose:()=>t(!1)}),a.jsx(NT,{onClick:n,children:a.jsx(e_,{size:20})}),a.jsx(BT,{isSidebarOpen:e,children:a.jsx(zf,{})})]})}const a1=d.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`,VT=d.div`
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 98;
  background: #1a1a2e;
  padding: 10px 0;
`,UT=d.div`
  position: relative;
  width: 100%;
`,HT=d.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #8e8e8e;
  display: flex;
  align-items: center;
  pointer-events: none;
`,KT=d.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #8e8e8e;
  }

  &:focus {
    border-color: #00ff87;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 2px rgba(0, 255, 135, 0.2);
  }
`,GT=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
  overflow: hidden;
`,WT=d.div`
  display: flex;
  align-items: center;
  padding: 12px;
  gap: 12px;
`,qT=d.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,JT=d.div`
  flex: 1;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover .name {
    color: #00ff87;
  }

  .name {
    color: white;
    font-weight: 600;
    font-size: 14px;
    &:hover {
      color: #00ff87;
    }
  }

  .class {
    color: #8e8e8e;
    font-size: 12px;
  }
`,YT=d.div`
  width: 100%;
  aspect-ratio: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,XT=d.div`
  padding: 12px;
  color: white;

  .title {
    font-weight: 600;
    margin-bottom: 4px;
  }

  .caption {
    color: #8e8e8e;
    font-size: 14px;
    margin-bottom: 8px;
  }

  .time {
    color: #8e8e8e;
    font-size: 12px;
  }
`,QT=d.div`
  padding: 12px;
  display: flex;
  gap: 16px;
`,s1=d.button`
  background: none;
  border: none;
  color: ${e=>e.isLiked?"#ff4d4d":"white"};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;

  span {
    font-size: 14px;
  }

  &:hover {
    transform: scale(1.1);
  }
`,ZT=d.div`
  padding: 0 12px 12px;
`,eE=d.div`
  margin-bottom: 12px;
  max-height: 150px;
  overflow-y: auto;
`,tE=d.div`
  margin-bottom: 8px;
  font-size: 14px;

  .username {
    color: #00ff87;
    font-weight: 600;
    margin-right: 8px;
  }

  .text {
    color: white;
  }
`,nE=d.form`
  display: flex;
  gap: 8px;
`,rE=d.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #00ff87;
  }
`,iE=d.button`
  background: none;
  border: none;
  color: #00ff87;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    transform: scale(1.1);
  }

  &:disabled {
    color: #8e8e8e;
    cursor: not-allowed;
  }
`;function o1(){const e=G(),{user:t}=At(),[n,r]=k.useState([]),[i,s]=k.useState(!0),[o,c]=k.useState({}),[l,u]=k.useState(""),[h,f]=k.useState([]),[p,m]=k.useState({}),[x,b]=k.useState({}),[j,y]=k.useState({}),[g,v]=k.useState(!1);k.useEffect(()=>{(async()=>{try{const{data:C,error:_}=await I.from("posts").select("*").eq("category","public").order("created_at",{ascending:!1});if(_)throw _;const A=[...new Set(C.map(R=>R.user_id))],{data:L,error:B}=await I.from("akun").select("id, namaLengkap, kelasAkun, profileImage").in("id",A);if(B)throw B;const z=L.reduce((R,U)=>(R[U.id]=U,R),{}),{data:F}=await I.from("likes").select("*").in("post_id",C.map(R=>R.id)),q={};F==null||F.forEach(R=>{q[R.post_id]||(q[R.post_id]=[]),q[R.post_id].push(R)});const{data:N}=await I.from("comments").select("*, akun(namaLengkap)").in("post_id",C.map(R=>R.id)).order("created_at",{ascending:!0}),oe={};N==null||N.forEach(R=>{oe[R.post_id]||(oe[R.post_id]=[]),oe[R.post_id].push(R)}),c(z),r(C),f(C),y(q),m(oe);const M={};C.forEach(R=>{M[R.id]=""}),b(M)}catch(C){console.error("Error:",C)}finally{s(!1)}})()},[]),k.useEffect(()=>{if(!l.trim()){f(n);return}const w=n.filter(C=>{var L,B;const _=o[C.user_id];if(!_)return!1;const A=l.toLowerCase();return((L=_.namaLengkap)==null?void 0:L.toLowerCase().includes(A))||((B=_.kelasAkun)==null?void 0:B.toLowerCase().includes(A))});f(w)},[l,n,o]);const S=async w=>{if(t!=null&&t.id)try{if((j[w]||[]).some(A=>A.user_id===t.id))await I.from("likes").delete().eq("post_id",w).eq("user_id",t.id),y(A=>({...A,[w]:A[w].filter(L=>L.user_id!==t.id)}));else{const{data:A}=await I.from("likes").insert({post_id:w,user_id:t.id}).select().single();y(L=>({...L,[w]:[...L[w]||[],A]}))}}catch(C){console.error("Error toggling like:",C)}},P=async(w,C)=>{var _;if(w.preventDefault(),!(!(t!=null&&t.id)||!((_=x[C])!=null&&_.trim()))){v(!0);try{const{data:A,error:L}=await I.from("comments").insert({post_id:C,user_id:t.id,content:x[C].trim()}).select("*, akun(namaLengkap)").single();if(L)throw L;m(B=>({...B,[C]:[...B[C]||[],A]})),b(B=>({...B,[C]:""}))}catch(A){console.error("Error adding comment:",A)}finally{v(!1)}}},T=w=>{e(`/user/profile/${w}`)};return i?a.jsx(a1,{children:a.jsx("div",{style:{color:"white",textAlign:"center"},children:"Loading..."})}):a.jsxs(a1,{children:[a.jsx(VT,{children:a.jsxs(UT,{children:[a.jsx(HT,{children:a.jsx(lc,{})}),a.jsx(KT,{type:"text",placeholder:"Cari berdasarkan nama atau kelas...",value:l,onChange:w=>u(w.target.value)})]})}),h.length===0?a.jsx("div",{style:{color:"white",textAlign:"center",marginTop:"20px"},children:l?"Tidak ada hasil pencarian":"Belum ada postingan"}):h.map(w=>{var B;const C=o[w.user_id]||{},_=j[w.id]||[],A=p[w.id]||[],L=_.some(z=>z.user_id===(t==null?void 0:t.id));return a.jsxs(GT,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},children:[a.jsxs(WT,{children:[a.jsx(qT,{onClick:()=>T(w.user_id),children:a.jsx("img",{src:C.profileImage||"/default-avatar.jpg",alt:C.namaLengkap})}),a.jsxs(JT,{onClick:()=>T(w.user_id),children:[a.jsx("div",{className:"name",children:C.namaLengkap}),a.jsx("div",{className:"class",children:C.kelasAkun})]})]}),a.jsx(YT,{children:a.jsx("img",{src:w.image_url,alt:w.title||"Post"})}),a.jsxs(QT,{children:[a.jsxs(s1,{onClick:()=>S(w.id),isLiked:L,children:[L?a.jsx(ki,{}):a.jsx(mp,{}),a.jsx("span",{children:_.length})]}),a.jsxs(s1,{children:[a.jsx(Fa,{}),a.jsx("span",{children:A.length})]})]}),a.jsxs(XT,{children:[w.title&&a.jsx("div",{className:"title",children:w.title}),w.caption&&a.jsx("div",{className:"caption",children:w.caption}),a.jsx("div",{className:"time",children:new Date(w.created_at).toLocaleDateString("id-ID")})]}),a.jsxs(ZT,{children:[a.jsx(eE,{children:A.map(z=>a.jsxs(tE,{children:[a.jsx("span",{className:"username",children:z.akun.namaLengkap}),a.jsx("span",{className:"text",children:z.content})]},z.id))}),a.jsxs(nE,{onSubmit:z=>P(z,w.id),children:[a.jsx(rE,{type:"text",placeholder:"Tambahkan komentar...",value:x[w.id]||"",onChange:z=>b(F=>({...F,[w.id]:z.target.value}))}),a.jsx(iE,{type:"submit",disabled:g||!((B=x[w.id])!=null&&B.trim()),children:a.jsx(fp,{})})]})]})]},w.id)})]})}const l1=d.div`
  max-width: 935px;
  margin: 0 auto;
  padding: 0 20px;
`,aE=d.header`
  display: flex;
  padding: 30px 0;
  margin-bottom: 44px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`,sE=d.div`
  margin-right: 100px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    margin: 0 0 30px 0;
  }
`,oE=d.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,lE=d.section`
  flex: 1;
`,cE=d.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`,uE=d.h2`
  font-size: 28px;
  font-weight: 600;
  color: #fff;
`,dE=d.button`
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`,hE=d.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
  margin-bottom: 20px;
`,gu=d.li`
  color: #fff;
  font-size: 16px;
  
  span {
    font-weight: 600;
    margin-right: 5px;
  }
`,fE=d.div`
  color: #fff;
  
  .kelas {
    font-weight: 600;
    margin-bottom: 12px;
  }
  
  .bio-text {
    margin-bottom: 12px;
    color: #8e8e8e;
  }
`,pE=d.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`,c1=d.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #8e8e8e;
  font-size: 14px;

  svg {
    font-size: 16px;
  }

  span {
    color: #fff;
  }
`,u1=d.a`
  color: #8e8e8e;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  transition: color 0.2s ease;

  &:hover {
    color: #fff;
  }

  svg {
    font-size: 16px;
  }
`,xu=d.span`
  color: #8e8e8e;
  margin: 0 4px;
`,mE=d.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,gE=d.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`,d1=d.button`
  background: none;
  border: none;
  color: ${e=>e.active?"#fff":"#8e8e8e"};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 15px 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${e=>e.active?"#fff":"transparent"};
  }

  svg {
    font-size: 12px;
  }
`,xE=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 28px;
  
  @media (max-width: 768px) {
    gap: 3px;
  }
`,vE=d.div`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 1;
  }
`,yE=d.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  opacity: 0;
  transition: opacity 0.2s ease;
`,bE=d.div`
  display: flex;
  gap: 30px;
  color: white;
  font-weight: 600;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;d.button`
  background: #ff4d4d;
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: #ff3333;
  }
`;const kE=d.div`
  padding: 12px;
  display: flex;
  gap: 16px;
`,h1=d.button`
  background: none;
  border: none;
  color: ${e=>e.isLiked?"#ff4d4d":"white"};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.3s ease;

  span {
    font-size: 14px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;d.div`
  padding: 0 12px 12px;
`;d.div`
  margin-bottom: 12px;
  max-height: 150px;
  overflow-y: auto;
`;const wE=d.div`
  margin-bottom: 8px;
  font-size: 14px;

  .username {
    color: #00ff87;
    font-weight: 600;
    margin-right: 8px;
  }

  .text {
    color: white;
  }
`,jE=d.form`
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 8px;
`,SE=d.input`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 8px 16px;
  color: white;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #00ff87;
  }
`,PE=d.button`
  background: none;
  border: none;
  color: #00ff87;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    transform: scale(1.1);
  }

  &:disabled {
    color: #8e8e8e;
    cursor: not-allowed;
  }
`,CE=d(E.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  color: #1a1a2e;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 255, 135, 0.3);
  z-index: 100;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 255, 135, 0.4);
  }
`,_E=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,TE=d(E.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`,EE=d.div`
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`,AE=d.h3`
  color: #00ff87;
  font-size: 1.2rem;
  margin: 0;
`,$E=d.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #ff4d4d;
    transform: rotate(90deg);
  }
`,zE=d.div`
  width: 100%;
  aspect-ratio: 1;
  background: black;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,LE=d.div`
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);

  .title {
    color: #00ff87;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .caption {
    color: white;
    margin-bottom: 16px;
  }

  .time {
    color: #8e8e8e;
    font-size: 12px;
    margin-bottom: 16px;
  }
`,ME=d.div`
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  max-height: 200px;
  overflow-y: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;function IE(){const e=G(),{user:t}=At(),[n,r]=k.useState(null),[i,s]=k.useState([]),[o,c]=k.useState(!0),[l,u]=k.useState(null),[h,f]=k.useState({}),[p,m]=k.useState(""),[x,b]=k.useState({}),[j,y]=k.useState(!1),[g,v]=k.useState("posts"),[S,P]=k.useState(0),[T,w]=k.useState(0);k.useEffect(()=>{(async()=>{if(t!=null&&t.id)try{const{data:A,error:L}=await I.from("akun").select("*").eq("id",t.id).single();if(L)throw L;const{data:B,error:z}=await I.from("posts").select("*").eq("user_id",t.id).eq("category","public").order("created_at",{ascending:!1});if(z)throw z;r(A),s(B||[])}catch(A){console.error("Error:",A)}finally{c(!1)}})()},[t]),k.useEffect(()=>{(async()=>{if(t!=null&&t.id)try{const{data:A,error:L}=await I.from("posts").select("*").eq("user_id",t.id).eq("category","public").order("created_at",{ascending:!1});if(L)throw L;const{data:B}=await I.from("likes").select("*").in("post_id",A.map(N=>N.id)),{data:z}=await I.from("comments").select("*, akun(namaLengkap)").in("post_id",A.map(N=>N.id)).order("created_at",{ascending:!0}),F={};B==null||B.forEach(N=>{F[N.post_id]||(F[N.post_id]=[]),F[N.post_id].push(N)});const q={};z==null||z.forEach(N=>{q[N.post_id]||(q[N.post_id]=[]),q[N.post_id].push(N)}),s(A),b(F),f(q)}catch(A){console.error("Error:",A)}finally{c(!1)}})()},[t]),k.useEffect(()=>{(async()=>{if(l)try{const{data:A,error:L}=await I.from("comments").select("*, akun(namaLengkap)").eq("post_id",l.id).order("created_at",{ascending:!0});if(L)throw L;f(B=>({...B,[l.id]:A||[]}))}catch(A){console.error("Error fetching comments:",A)}})()},[l]),k.useEffect(()=>{(async()=>{if(t!=null&&t.id)try{const{count:A}=await I.from("follows").select("*",{count:"exact"}).eq("following_id",t.id);P(A||0);const{count:L}=await I.from("follows").select("*",{count:"exact"}).eq("follower_id",t.id);w(L||0)}catch(A){console.error("Error:",A)}})()},[t]);const C=async _=>{if(_.preventDefault(),!(!(t!=null&&t.id)||!l||!p.trim())){y(!0);try{const{data:A,error:L}=await I.from("comments").insert({post_id:l.id,user_id:t.id,content:p.trim()}).select("*, akun(namaLengkap)").single();if(L)throw L;f(B=>({...B,[l.id]:[...B[l.id]||[],A]})),m("")}catch(A){console.error("Error adding comment:",A),alert("Gagal menambahkan komentar")}finally{y(!1)}}};return o?a.jsx(l1,{children:"Loading..."}):a.jsxs(l1,{children:[a.jsxs(aE,{children:[a.jsx(sE,{children:a.jsx(oE,{children:a.jsx("img",{src:(n==null?void 0:n.profileImage)||"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Profile"})})}),a.jsxs(lE,{children:[a.jsxs(cE,{children:[a.jsx(uE,{children:n==null?void 0:n.namaLengkap}),a.jsx(dE,{onClick:()=>e("/user/settings"),children:"Edit Profile"})]}),a.jsxs(hE,{children:[a.jsxs(gu,{children:[a.jsx("span",{children:i.length})," posts"]}),a.jsxs(gu,{children:[a.jsx("span",{children:S})," followers"]}),a.jsxs(gu,{children:[a.jsx("span",{children:T})," following"]})]}),a.jsxs(fE,{children:[a.jsx("div",{className:"kelas",children:n==null?void 0:n.kelasAkun}),(n==null?void 0:n.bioAkun)&&a.jsx("div",{className:"bio-text",children:n.bioAkun}),a.jsxs(pE,{children:[(n==null?void 0:n.noTelpAkun)&&a.jsxs(a.Fragment,{children:[a.jsxs(c1,{children:[a.jsx(v_,{}),a.jsx("span",{children:n.noTelpAkun})]}),a.jsx(xu,{children:"•"})]}),(n==null?void 0:n.alamatAkun)&&a.jsxs(a.Fragment,{children:[a.jsxs(c1,{children:[a.jsx(Yn,{}),a.jsx("span",{children:n.alamatAkun})]}),a.jsx(xu,{children:"•"})]}),(n==null?void 0:n.instagramAkun)&&a.jsxs(a.Fragment,{children:[a.jsxs(u1,{href:`https://instagram.com/${n.instagramAkun}`,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(lp,{})," @",n.instagramAkun]}),a.jsx(xu,{children:"•"})]}),(n==null?void 0:n.tiktokAkun)&&a.jsxs(u1,{href:`https://tiktok.com/@${n.tiktokAkun}`,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(cp,{})," @",n.tiktokAkun]})]})]})]})]}),a.jsxs(mE,{children:[a.jsxs(gE,{children:[a.jsxs(d1,{active:g==="posts",onClick:()=>v("posts"),children:[a.jsx(zy,{})," POSTS"]}),a.jsxs(d1,{active:g==="saved",onClick:()=>v("saved"),children:[a.jsx(i_,{})," SAVED"]})]}),g==="posts"&&a.jsx(xE,{children:i.map(_=>a.jsxs(vE,{onClick:()=>u(_),children:[a.jsx("img",{src:_.image_url,alt:_.title||"Post"}),a.jsx(yE,{className:"overlay",children:a.jsxs(bE,{children:[a.jsxs("span",{children:[a.jsx(ki,{})," ",(x[_.id]||[]).length]}),a.jsxs("span",{children:[a.jsx(Fa,{})," ",(h[_.id]||[]).length]})]})})]},_.id))})]}),l&&a.jsx(_E,{onClick:()=>u(null),children:a.jsxs(TE,{onClick:_=>_.stopPropagation(),initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},children:[a.jsxs(EE,{children:[a.jsx(AE,{children:l.title||"Untitled Post"}),a.jsx($E,{onClick:()=>u(null),children:a.jsx(Et,{})})]}),a.jsx(zE,{children:a.jsx("img",{src:l.image_url,alt:l.title||"Post"})}),a.jsxs(LE,{children:[l.caption&&a.jsx("div",{className:"caption",children:l.caption}),a.jsx("div",{className:"time",children:new Date(l.created_at).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}),a.jsxs(kE,{children:[a.jsxs(h1,{onClick:()=>handleLike(l.id),isLiked:(x[l.id]||[]).some(_=>_.user_id===(t==null?void 0:t.id)),children:[(x[l.id]||[]).some(_=>_.user_id===(t==null?void 0:t.id))?a.jsx(ki,{}):a.jsx(mp,{}),a.jsx("span",{children:(x[l.id]||[]).length})]}),a.jsxs(h1,{children:[a.jsx(Fa,{}),a.jsx("span",{children:(h[l.id]||[]).length})]})]})]}),a.jsx(ME,{children:(h[l.id]||[]).map(_=>a.jsxs(wE,{children:[a.jsx("span",{className:"username",children:_.akun.namaLengkap}),a.jsx("span",{className:"text",children:_.content})]},_.id))}),a.jsxs(jE,{onSubmit:C,children:[a.jsx(SE,{type:"text",placeholder:"Tambahkan komentar...",value:p,onChange:_=>m(_.target.value),disabled:j}),a.jsx(PE,{type:"submit",disabled:j||!p.trim(),children:a.jsx(fp,{})})]})]})}),a.jsx(CE,{onClick:()=>e("/user/posting"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(Bn,{})})]})}const RE=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
`,OE=d.h1`
  font-size: 2rem;
  color: #00ff87;
  margin-bottom: 30px;
  text-align: center;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,DE=d.div`
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #1a1a2e;
  padding: 10px 0;
`,BE=d.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`,NE=d.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #8e8e8e;
  display: flex;
  align-items: center;
  pointer-events: none;
`,FE=d.input`
  width: 100%;
  padding: 12px 16px 12px 44px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &::placeholder {
    color: #8e8e8e;
  }

  &:focus {
    border-color: #00ff87;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 2px rgba(0, 255, 135, 0.2);
  }
`,VE=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`,UE=d.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.1);
  }
`,HE=d.div`
  width: 100%;
  height: 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,KE=d.div`
  padding: 15px;
`,GE=d.h3`
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
`,WE=d.p`
  color: #8e8e8e;
  font-size: 0.9rem;
`,f1=d.div`
  color: #8e8e8e;
  text-align: center;
  padding: 40px;
  font-size: 1.1rem;
`;function qE(){const e=G(),[t,n]=k.useState([]),[r,i]=k.useState([]),[s,o]=k.useState(""),[c,l]=k.useState(!0);k.useEffect(()=>{(async()=>{try{const{data:f,error:p}=await I.from("akun").select("*").order("namaLengkap",{ascending:!0});if(p)throw p;n(f||[]),i(f||[])}catch(f){console.error("Error:",f)}finally{l(!1)}})()},[]);const u=h=>{const f=h.target.value.toLowerCase();if(o(f),f.trim()==="")i(t);else{const p=t.filter(m=>{var x,b;return((x=m.namaLengkap)==null?void 0:x.toLowerCase().includes(f))||((b=m.kelasAkun)==null?void 0:b.toLowerCase().includes(f))});i(p)}};return a.jsxs(RE,{children:[a.jsx(OE,{children:"Cari Profil"}),a.jsx(DE,{children:a.jsxs(BE,{children:[a.jsx(NE,{children:a.jsx(lc,{})}),a.jsx(FE,{type:"text",placeholder:"Cari berdasarkan nama atau kelas...",value:s,onChange:u,autoFocus:!0})]})}),c?a.jsx(f1,{children:"Loading..."}):r.length===0?a.jsx(f1,{children:s?"Tidak ada hasil pencarian":"Belum ada profil"}):a.jsx(VE,{children:r.map(h=>a.jsxs(UE,{onClick:()=>e(`/user/profile/${h.id}`),children:[a.jsx(HE,{children:a.jsx("img",{src:h.profileImage||"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:h.namaLengkap,onError:f=>{f.target.src="https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg"}})}),a.jsxs(KE,{children:[a.jsx(GE,{children:h.namaLengkap||"Nama tidak tersedia"}),a.jsx(WE,{children:h.kelasAkun||"Kelas tidak tersedia"})]})]},h.id))})]})}const JE=d.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,YE=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,XE=d.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`,QE=d.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,Kt=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Rt=d.label`
  color: #00ff87;
  font-size: 0.9rem;
`,pn=d.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,ZE=d.textarea`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem;
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,eA=d(E.button)`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 1rem;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,mn=d.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  margin-left: 0.5rem;
`,tA=d.div`
  text-align: center;
  margin-bottom: 2rem;
`,nA=d.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  border: 3px solid #00ff87;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 1;
  }
`,rA=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
`,iA=d.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;function aA(){const e=G(),{user:t}=At(),[n,r]=k.useState(!1),[i,s]=k.useState(null),[o,c]=k.useState("/default-avatar.jpg"),[l,u]=k.useState({namaLengkap:"",kelasAkun:"",bioAkun:"",emailAkun:"",noTelpAkun:"",alamatAkun:"",instagramAkun:"",tiktokAkun:"",twitterAkun:""});k.useEffect(()=>{(async()=>{if(t!=null&&t.id)try{const{data:m,error:x}=await I.from("akun").select("*").eq("id",t.id).single();if(x)throw x;m&&(u({namaLengkap:m.namaLengkap||"",kelasAkun:m.kelasAkun||"",bioAkun:m.bioAkun||"",emailAkun:m.emailAkun||"",noTelpAkun:m.noTelpAkun||"",alamatAkun:m.alamatAkun||"",instagramAkun:m.instagramAkun||"",tiktokAkun:m.tiktokAkun||"",twitterAkun:m.twitterAkun||""}),m.profileImage&&c(m.profileImage))}catch(m){console.error("Error:",m)}})()},[t]);const h=p=>{const m=p.target.files[0];if(m){s(m);const x=new FileReader;x.onloadend=()=>{c(x.result)},x.readAsDataURL(m)}},f=async p=>{p.preventDefault(),r(!0);try{let m=o;if(i){const b=i.name.split(".").pop(),y=`profiles/${`${t.id}/profile.${b}`}`;try{const{data:S}=await I.storage.from("galery").list(`profiles/${t.id}`);(S==null?void 0:S.length)>0&&await I.storage.from("galery").remove(S.map(P=>`profiles/${t.id}/${P.name}`))}catch{console.log("No existing profile picture")}const{error:g}=await I.storage.from("galery").upload(y,i,{cacheControl:"3600",upsert:!0});if(g)throw g;const{data:v}=I.storage.from("galery").getPublicUrl(y);m=v.publicUrl}const{error:x}=await I.from("akun").update({namaLengkap:l.namaLengkap,kelasAkun:l.kelasAkun,bioAkun:l.bioAkun,emailAkun:l.emailAkun,noTelpAkun:l.noTelpAkun,alamatAkun:l.alamatAkun,profileImage:m,instagramAkun:l.instagramAkun,tiktokAkun:l.tiktokAkun,twitterAkun:l.twitterAkun}).eq("id",t.id);if(x)throw console.error("Update error:",x),x;alert("Profil berhasil disimpan!"),e("/user/profile")}catch(m){console.error("Error:",m),alert("Terjadi kesalahan saat menyimpan profil")}finally{r(!1)}};return a.jsx(JE,{children:a.jsxs(YE,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:[a.jsx(XE,{children:"Edit Profil"}),a.jsxs(QE,{onSubmit:f,children:[a.jsxs(tA,{children:[a.jsxs(Rt,{children:["Foto Profil ",a.jsx(mn,{children:"(opsional)"})]}),a.jsxs(nA,{onClick:()=>document.getElementById("profileImage").click(),children:[a.jsx("img",{src:o,alt:"Profile"}),a.jsxs(rA,{className:"overlay",children:[a.jsx(ns,{})," Ubah Foto"]})]}),a.jsx("input",{id:"profileImage",type:"file",accept:"image/*",onChange:h,style:{display:"none"}})]}),a.jsxs(Kt,{children:[a.jsx(Rt,{children:"Nama Lengkap"}),a.jsx(pn,{type:"text",value:l.namaLengkap,onChange:p=>u({...l,namaLengkap:p.target.value}),placeholder:"Masukkan nama lengkap",required:!0})]}),a.jsxs(Kt,{children:[a.jsx(Rt,{children:"Kelas"}),a.jsx(pn,{type:"text",value:l.kelasAkun,onChange:p=>u({...l,kelasAkun:p.target.value}),placeholder:"Contoh: XII RPL 1",required:!0})]}),a.jsxs(Kt,{children:[a.jsxs(Rt,{children:["Bio ",a.jsx(mn,{children:"(opsional)"})]}),a.jsx(ZE,{value:l.bioAkun,onChange:p=>u({...l,bioAkun:p.target.value}),placeholder:"Ceritakan tentang dirimu..."})]}),a.jsxs(Kt,{children:[a.jsxs(Rt,{children:["Email ",a.jsx(mn,{children:"(opsional)"})]}),a.jsx(pn,{type:"email",value:l.emailAkun,onChange:p=>u({...l,emailAkun:p.target.value}),placeholder:"Masukkan email"})]}),a.jsxs(Kt,{children:[a.jsxs(Rt,{children:["Nomor Telepon ",a.jsx(mn,{children:"(opsional)"})]}),a.jsx(pn,{type:"tel",value:l.noTelpAkun,onChange:p=>u({...l,noTelpAkun:p.target.value}),placeholder:"Masukkan nomor telepon"})]}),a.jsxs(Kt,{children:[a.jsxs(Rt,{children:["Alamat ",a.jsx(mn,{children:"(opsional)"})]}),a.jsx(pn,{type:"text",value:l.alamatAkun,onChange:p=>u({...l,alamatAkun:p.target.value}),placeholder:"Masukkan alamat"})]}),a.jsxs(iA,{children:[a.jsxs(Kt,{children:[a.jsxs(Rt,{children:[a.jsx(lp,{})," Instagram ",a.jsx(mn,{children:"(opsional)"})]}),a.jsx(pn,{type:"text",value:l.instagramAkun,onChange:p=>u({...l,instagramAkun:p.target.value}),placeholder:"Username Instagram (tanpa @)"})]}),a.jsxs(Kt,{children:[a.jsxs(Rt,{children:[a.jsx(cp,{})," TikTok ",a.jsx(mn,{children:"(opsional)"})]}),a.jsx(pn,{type:"text",value:l.tiktokAkun,onChange:p=>u({...l,tiktokAkun:p.target.value}),placeholder:"Username TikTok (tanpa @)"})]}),a.jsxs(Kt,{children:[a.jsxs(Rt,{children:[a.jsx(QC,{})," Twitter ",a.jsx(mn,{children:"(opsional)"})]}),a.jsx(pn,{type:"text",value:l.twitterAkun,onChange:p=>u({...l,twitterAkun:p.target.value}),placeholder:"Username Twitter (tanpa @)"})]})]}),a.jsxs(eA,{type:"submit",disabled:n,whileHover:{scale:n?1:1.02},whileTap:{scale:n?1:.98},children:[a.jsx(k_,{}),n?"Menyimpan...":"Simpan Profil"]})]})]})})}const sA=d.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,oA=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 2rem;
  backdrop-filter: blur(10px);
`,lA=d.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`,cA=d.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`,uA=d.div`
  border: 2px dashed rgba(0, 255, 135, 0.3);
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #00ff87;
    background: rgba(0, 255, 135, 0.05);
  }

  input {
    display: none;
  }
`,dA=d.div`
  max-width: 300px;
  margin: 1rem auto;
  
  img {
    width: 100%;
    border-radius: 8px;
  }
`,vu=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,yu=d.label`
  color: #00ff87;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.8rem;
  }
`,p1=d.input`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.8rem;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,hA=d.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`,m1=d.button`
  flex: 1;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: ${e=>e.selected?"rgba(0, 255, 135, 0.2)":"transparent"};
  color: ${e=>e.selected?"#00ff87":"white"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
  }
`,fA=d(E.button)`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 1rem;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,pA=d.div`
  width: 100%;
  height: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  margin: 1rem 0;
  position: relative;
  overflow: hidden;
`,mA=d.div`
  height: 100%;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border-radius: 10px;
  transition: width 0.3s ease;
`,gA=d.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
`;function xA(){const e=G(),{user:t}=At(),[n,r]=k.useState(null),[i,s]=k.useState(null),[o,c]=k.useState(""),[l,u]=k.useState(""),[h,f]=k.useState("private"),[p,m]=k.useState(!1),[x,b]=k.useState(0),j=g=>{const v=g.target.files[0];if(v){r(v);const S=new FileReader;S.onloadend=()=>{s(S.result)},S.readAsDataURL(v)}},y=async g=>{if(g.preventDefault(),!(!n||!(t!=null&&t.id))){m(!0);try{const v=new Date().getTime(),S=n.name.split(".").pop(),P=`${v}_${Math.random()}.${S}`,w=`${h==="private"?"gallery":"post"}/${t.id}/${P}`,{error:C}=await I.storage.from("galery").upload(w,n,{cacheControl:"3600",upsert:!1});if(C)throw C;const{data:_}=I.storage.from("galery").getPublicUrl(w),{error:A}=await I.from("posts").insert({user_id:t.id,image_path:w,image_url:_.publicUrl,title:o||null,caption:l||null,category:h,created_at:new Date().toISOString()});if(A)throw A;alert("Foto berhasil diupload!"),e(h==="private"?"/user/gallery":"/user/profile")}catch(v){console.error("Error:",v),alert("Terjadi kesalahan saat upload foto")}finally{m(!1)}}};return a.jsx(sA,{children:a.jsxs(oA,{children:[a.jsx(lA,{children:"Upload Foto"}),a.jsxs(cA,{onSubmit:y,children:[a.jsxs(uA,{onClick:()=>document.getElementById("fileInput").click(),children:[i?a.jsx(dA,{children:a.jsx("img",{src:i,alt:"Preview"})}):a.jsxs("div",{children:[a.jsx(dp,{size:40,color:"#00ff87"}),a.jsx("p",{style:{color:"white",marginTop:"1rem"},children:"Klik untuk pilih foto"})]}),a.jsx("input",{id:"fileInput",type:"file",accept:"image/*",onChange:j})]}),a.jsxs(vu,{children:[a.jsxs(yu,{children:["Judul Foto ",a.jsx("span",{children:"(opsional)"})]}),a.jsx(p1,{type:"text",value:o,onChange:g=>c(g.target.value),placeholder:"Masukkan judul foto..."})]}),a.jsxs(vu,{children:[a.jsxs(yu,{children:["Caption ",a.jsx("span",{children:"(opsional)"})]}),a.jsx(p1,{type:"text",value:l,onChange:g=>u(g.target.value),placeholder:"Tulis caption untuk foto ini..."})]}),a.jsxs(vu,{children:[a.jsx(yu,{children:"Kategori"}),a.jsxs(hA,{children:[a.jsxs(m1,{type:"button",selected:h==="private",onClick:()=>f("private"),children:[a.jsx(m_,{})," Private Gallery"]}),a.jsxs(m1,{type:"button",selected:h==="public",onClick:()=>f("public"),children:[a.jsx(Sy,{})," Public Post"]})]})]}),p&&a.jsxs(pA,{children:[a.jsx(mA,{style:{width:`${x}%`}}),a.jsxs(gA,{children:[Math.round(x),"%"]})]}),a.jsxs(fA,{type:"submit",disabled:p||!n,whileHover:{scale:p?1:1.02},whileTap:{scale:p?1:.98},children:[a.jsx(S_,{}),p?"Uploading...":"Upload Foto"]})]})]})})}const vA=d.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 250px;
  background: rgba(26, 26, 46, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 100;
`,yA=d.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;
  margin-bottom: 3rem;

  img {
    width: 40px;
    height: auto;
  }

  h1 {
    color: #00ff87;
    font-size: 1.2rem;
  }
`,bA=d.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 1rem;
  height: calc(100% - 120px);
`,g1=d(y4)`
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
  }

  &.active {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
    font-weight: 600;
  }
`,kA=d.button`
  background-color: #ff4444;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: calc(100% - 2rem);
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;function wA(){const{handleLogout:e}=At();return a.jsxs(vA,{children:[a.jsxs(yA,{children:[a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo"}),a.jsx("h1",{children:"SMKN 1 Bulan"})]}),a.jsxs(bA,{children:[a.jsxs(g1,{to:"/moderator/profile",children:[a.jsx(ns,{})," Profil"]}),a.jsxs(g1,{to:"/moderator/posting-berita",children:[a.jsx(hp,{})," Posting Berita"]}),a.jsxs(kA,{onClick:e,children:[a.jsx($y,{})," Logout"]})]})]})}const jA=d.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`,SA=d.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
`;function PA(){return a.jsxs(jA,{children:[a.jsx(wA,{}),a.jsx(SA,{children:a.jsx(zf,{})})]})}const CA=d.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,_A=d(E.h2)`
  color: #00ff87;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,TA=d(E.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`,EA=d.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
`,Ms=d.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }

  p {
    font-size: 1.1rem;
    color: #00ff87;
  }
`,AA=d.span`
  background: rgba(0, 255, 135, 0.1);
  color: #00ff87;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;function $A(){const{user:e}=At();return a.jsxs(CA,{children:[a.jsx(_A,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Profil Moderator"}),a.jsx(TA,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.5},children:a.jsxs(EA,{children:[a.jsxs(Ms,{children:[a.jsx("label",{children:"Username"}),a.jsx("p",{children:(e==null?void 0:e.username)||"Tidak tersedia"})]}),a.jsxs(Ms,{children:[a.jsx("label",{children:"Role"}),a.jsx(AA,{children:(e==null?void 0:e.role)||"Moderator"})]}),a.jsxs(Ms,{children:[a.jsx("label",{children:"Status"}),a.jsx("p",{children:"Aktif"})]}),a.jsxs(Ms,{children:[a.jsx("label",{children:"Bergabung Sejak"}),a.jsx("p",{children:"Januari 2024"})]})]})})]})}const bu=d.div`
  max-width: 935px;
  margin: 0 auto;
  padding: 30px 20px;
`,ku=d.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,zA=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  
  @media (max-width: 768px) {
    gap: 3px;
  }
`,LA=d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,MA=d.div`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`,IA=d.div`
  padding: 12px;
  color: white;

  .title {
    font-weight: 600;
    margin-bottom: 4px;
    color: #00ff87;
  }

  .caption {
    color: #8e8e8e;
    font-size: 14px;
    margin-bottom: 12px;
  }

  .time {
    color: #8e8e8e;
    font-size: 12px;
    margin-top: 12px;
  }
`,RA=d.div`
  display: flex;
  gap: 8px;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Fy=d.button`
  flex: 1;
  background: transparent;
  padding: 8px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`,OA=d(Fy)`
  border: 1px solid #00ff87;
  color: #00ff87;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
  }
`,DA=d(Fy)`
  border: 1px solid #ff4d4d;
  color: #ff4d4d;

  &:hover {
    background: rgba(255, 77, 77, 0.1);
  }
`,BA=d.div`
  text-align: center;
  padding: 3rem;
  color: rgba(255, 255, 255, 0.7);

  h3 {
    margin-bottom: 1rem;
    color: #00ff87;
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`,NA=d(E.button)`
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  box-shadow: 0 4px 15px rgba(0, 255, 135, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 255, 135, 0.3);
  }
`,x1=d(E.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  color: #1a1a2e;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 255, 135, 0.3);
  z-index: 100;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 255, 135, 0.4);
  }
`,FA=d.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,VA=d(E.div)`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  position: relative;
  backdrop-filter: blur(10px);
`,UA=d.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,HA=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
`,KA=d.button`
  background: transparent;
  border: none;
  color: #8e8e8e;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: white;
    transform: rotate(90deg);
  }
`,v1=d.div`
  margin-bottom: 20px;
`,y1=d.label`
  display: block;
  color: #00ff87;
  margin-bottom: 8px;
  font-size: 14px;
`,GA=d.input`
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #00ff87;
    box-shadow: 0 0 0 2px rgba(0, 255, 135, 0.2);
  }
`,WA=d.textarea`
  width: 100%;
  padding: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  min-height: 100px;
  outline: none;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    border-color: #00ff87;
    box-shadow: 0 0 0 2px rgba(0, 255, 135, 0.2);
  }
`,qA=d(E.button)`
  width: 100%;
  padding: 12px;
  background: linear-gradient(45deg, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;function JA(){const e=G(),{user:t}=At(),[n,r]=k.useState([]),[i,s]=k.useState(!0),[o,c]=k.useState(null),[l,u]=k.useState(!1),h=async()=>{if(t!=null&&t.id)try{const{data:x,error:b}=await I.from("posts").select("*").eq("user_id",t.id).eq("category","private").order("created_at",{ascending:!1});if(b)throw b;r(x||[])}catch(x){console.error("Error:",x)}finally{s(!1)}};k.useEffect(()=>{h()},[t]);const f=async(x,b)=>{if(window.confirm("Apakah Anda yakin ingin menghapus foto ini?"))try{const{error:j}=await I.storage.from("galery").remove([b]);if(j)throw j;const{error:y}=await I.from("posts").delete().eq("id",x);if(y)throw y;r(n.filter(g=>g.id!==x)),alert("Foto berhasil dihapus!")}catch(j){console.error("Error:",j),alert("Terjadi kesalahan saat menghapus foto")}},p=x=>{c({id:x.id,title:x.title||"",caption:x.caption||""})},m=async x=>{x.preventDefault(),u(!0);try{const{error:b}=await I.from("posts").update({title:o.title,caption:o.caption}).eq("id",o.id);if(b)throw b;r(n.map(j=>j.id===o.id?{...j,title:o.title,caption:o.caption}:j)),c(null),alert("Post berhasil diperbarui!")}catch(b){console.error("Error:",b),alert("Terjadi kesalahan saat menyimpan perubahan")}finally{u(!1)}};return i?a.jsxs(bu,{children:[a.jsx(ku,{children:"Galeri Foto"}),a.jsx("div",{style:{color:"white",textAlign:"center"},children:"Loading..."})]}):n.length===0?a.jsxs(bu,{children:[a.jsx(ku,{children:"Galeri Foto"}),a.jsxs(BA,{children:[a.jsx("h3",{children:"Belum ada foto"}),a.jsx("p",{children:"Mulai posting foto pertama Anda"}),a.jsxs(NA,{onClick:()=>e("/user/posting"),whileHover:{scale:1.05},whileTap:{scale:.95},children:[a.jsx(Bn,{})," Posting Foto"]})]}),a.jsx(x1,{onClick:()=>e("/user/posting"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(Bn,{})})]}):a.jsxs(bu,{children:[a.jsx(ku,{children:"Galeri Foto"}),a.jsx(zA,{children:n.map(x=>a.jsxs(LA,{children:[a.jsx(MA,{children:a.jsx("img",{src:x.image_url,alt:x.title||"Gallery Image"})}),a.jsxs(IA,{children:[x.title&&a.jsx("div",{className:"title",children:x.title}),x.caption&&a.jsx("div",{className:"caption",children:x.caption}),a.jsxs(RA,{children:[a.jsxs(OA,{onClick:()=>p(x),children:[a.jsx(Va,{})," Edit"]}),a.jsxs(DA,{onClick:()=>f(x.id,x.image_path),children:[a.jsx(cc,{})," Hapus"]})]}),a.jsx("div",{className:"time",children:new Date(x.created_at).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})})]})]},x.id))}),a.jsx(x1,{onClick:()=>e("/user/posting"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(Bn,{})}),o&&a.jsx(FA,{children:a.jsxs(VA,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},children:[a.jsxs(UA,{children:[a.jsx(HA,{children:"Edit Post"}),a.jsx(KA,{onClick:()=>c(null),children:a.jsx(Et,{})})]}),a.jsxs("form",{onSubmit:m,children:[a.jsxs(v1,{children:[a.jsx(y1,{children:"Judul"}),a.jsx(GA,{type:"text",value:o.title,onChange:x=>c({...o,title:x.target.value}),placeholder:"Masukkan judul foto..."})]}),a.jsxs(v1,{children:[a.jsx(y1,{children:"Caption"}),a.jsx(WA,{value:o.caption,onChange:x=>c({...o,caption:x.target.value}),placeholder:"Tulis caption untuk foto ini..."})]}),a.jsxs(qA,{type:"submit",disabled:l,whileHover:{scale:l?1:1.02},whileTap:{scale:l?1:.98},children:[a.jsx(Va,{}),l?"Menyimpan...":"Simpan Perubahan"]})]})]})})]})}const YA=d.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`,XA=d(E.h2)`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
`,QA=d.form`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,wu=d.div`
  margin-bottom: 1.5rem;
`,ju=d.label`
  display: block;
  color: white;
  margin-bottom: 0.5rem;
`,ZA=d.input`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,e$=d.textarea`
  width: 100%;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  min-height: 200px;
  resize: vertical;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`,t$=d.div`
  border: 2px dashed rgba(0, 255, 135, 0.3);
  padding: 2rem;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
    border-color: #00ff87;
    background: rgba(0, 255, 135, 0.05);
  }
`,n$=d.img`
  max-width: 100%;
  max-height: 300px;
  border-radius: 8px;
  margin-top: 1rem;
`,r$=d(E.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;function i$(){const[e,t]=k.useState(""),[n,r]=k.useState(""),[i,s]=k.useState(null),[o,c]=k.useState(null),[l,u]=k.useState(!1),h=p=>{const m=p.target.files[0];if(m){if(m.size>5*1024*1024){alert("File terlalu besar! Maksimal 5MB");return}s(m);const x=new FileReader;x.onloadend=()=>{c(x.result)},x.readAsDataURL(m)}},f=async p=>{p.preventDefault(),u(!0);try{await new Promise(m=>setTimeout(m,1500)),console.log("Berita Data:",{title:e,content:n,image:i}),t(""),r(""),s(null),c(null),alert("Berita berhasil diposting! (simulasi)")}catch(m){console.error("Error:",m),alert("Gagal memposting berita. Silakan coba lagi.")}finally{u(!1)}};return a.jsxs(YA,{children:[a.jsx(XA,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Posting Berita"}),a.jsxs(QA,{onSubmit:f,children:[a.jsxs(wu,{children:[a.jsx(ju,{children:"Judul Berita"}),a.jsx(ZA,{type:"text",value:e,onChange:p=>t(p.target.value),required:!0,placeholder:"Masukkan judul berita..."})]}),a.jsxs(wu,{children:[a.jsx(ju,{children:"Gambar Berita"}),a.jsxs(t$,{onClick:()=>document.getElementById("imageInput").click(),children:[a.jsx("input",{type:"file",id:"imageInput",accept:"image/*",onChange:h,style:{display:"none"}}),o?a.jsx(n$,{src:o,alt:"Preview"}):a.jsxs(a.Fragment,{children:[a.jsx(dp,{style:{fontSize:"2rem",color:"#00ff87",marginBottom:"1rem"}}),a.jsx("p",{style:{color:"white"},children:"Klik untuk upload gambar"})]})]})]}),a.jsxs(wu,{children:[a.jsx(ju,{children:"Isi Berita"}),a.jsx(e$,{value:n,onChange:p=>r(p.target.value),required:!0,placeholder:"Tulis isi berita..."})]}),a.jsx(r$,{type:"submit",disabled:l||!e||!n,whileHover:{scale:1.02},whileTap:{scale:.98},children:l?"Memposting...":"Posting Berita"})]})]})}const a$=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,s$=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,o$=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,l$=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,c$=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,u$=d.h2`
  color: #00ff87;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`,Is=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
`,d$=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Rs=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,h$=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,f$=d.img`
  width: 150px;
  height: 150px;
  margin: 2rem auto;
  display: block;
  border-radius: 20px;
`;function p$(){const e=G();return a.jsxs(a$,{children:[a.jsx(h$,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(s$,{children:[a.jsxs(o$,{children:[a.jsx(l$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"SMKN 1 Bulan"}),a.jsx(f$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/logo.png",alt:"Logo SMKN 1 Bulan"})]}),a.jsxs(d$,{children:[a.jsxs(Rs,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(oc,{}),a.jsx("h3",{children:"1000+"}),a.jsx("p",{children:"Lulusan"})]}),a.jsxs(Rs,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(Qe,{}),a.jsx("h3",{children:"50+"}),a.jsx("p",{children:"Guru & Staff"})]}),a.jsxs(Rs,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(Xn,{}),a.jsx("h3",{children:"100+"}),a.jsx("p",{children:"Prestasi"})]}),a.jsxs(Rs,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(Py,{}),a.jsx("h3",{children:"25+"}),a.jsx("p",{children:"Mitra Industri"})]})]}),a.jsxs(c$,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2},children:[a.jsx(u$,{children:"Sejarah"}),a.jsx(Is,{children:"SMKN 1 Bulan didirikan pada tahun 2005 sebagai respons terhadap kebutuhan akan tenaga kerja terampil di bidang teknologi informasi dan komunikasi. Berawal dari visi untuk menciptakan generasi yang kompeten dan berakhlak mulia, sekolah ini dibangun di atas lahan seluas 2 hektar yang sebelumnya merupakan area perkebunan. Dengan dukungan penuh dari pemerintah daerah dan masyarakat sekitar, pembangunan fasilitas pendidikan dimulai dengan tiga program keahlian utama: Rekayasa Perangkat Lunak, Teknik Komputer dan Jaringan, serta Multimedia."}),a.jsx(Is,{children:"Dalam perjalanannya selama lima tahun pertama, SMKN 1 Bulan terus mengembangkan infrastruktur dan kualitas pendidikannya. Laboratorium komputer dilengkapi dengan perangkat terkini, perpustakaan digital dibangun untuk mendukung pembelajaran, dan kerjasama dengan berbagai perusahaan teknologi mulai dijalin. Prestasi demi prestasi mulai diraih oleh para siswa dalam berbagai kompetisi tingkat kabupaten, provinsi, hingga nasional. Hal ini semakin memantapkan posisi SMKN 1 Bulan sebagai salah satu sekolah kejuruan unggulan di bidang teknologi informasi."}),a.jsx(Is,{children:"Memasuki dekade kedua, SMKN 1 Bulan mengembangkan sayapnya dengan membuka program keahlian baru yaitu Bisnis Digital, merespons perkembangan era digital dan e-commerce. Inovasi pembelajaran terus dilakukan dengan mengadopsi teknologi terbaru dan metode pengajaran yang lebih interaktif. Program magang dan sertifikasi kompetensi diperkuat melalui kerjasama dengan lebih dari 25 mitra industri, memberikan kesempatan bagi siswa untuk mendapatkan pengalaman kerja nyata dan meningkatkan prospek karir mereka setelah lulus."}),a.jsx(Is,{children:"Hingga saat ini, SMKN 1 Bulan telah menghasilkan lebih dari 1000 lulusan yang tersebar di berbagai perusahaan teknologi terkemuka, baik di dalam maupun luar negeri. Beberapa alumni bahkan telah sukses mendirikan startup teknologi mereka sendiri. Dengan dukungan lebih dari 50 tenaga pendidik dan staff yang berkualitas, SMKN 1 Bulan terus berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan siap menghadapi tantangan di era digital."})]})]})]})}const m$=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,g$=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,x$=d.div`
  text-align: center;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`,v$=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,y$=d.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem 0;
  border: 3px solid #00ff87;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.3);
`,b$=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Os=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,k$=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Su=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,w$=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function j$(){const e=G();return a.jsxs(m$,{children:[a.jsx(w$,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(g$,{children:[a.jsxs(x$,{children:[a.jsx(v$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Kepala Sekolah"}),a.jsx(y$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg",alt:"Kepala Sekolah"}),a.jsx("h2",{style:{color:"#00ff87",marginTop:"1rem"},children:"Dr. Ahmad Sulaiman, M.Pd"})]}),a.jsxs(k$,{children:[a.jsxs(Su,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(oc,{}),a.jsx("h3",{children:"25+"}),a.jsx("p",{children:"Tahun Pengalaman"})]}),a.jsxs(Su,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(wy,{}),a.jsx("h3",{children:"15+"}),a.jsx("p",{children:"Penghargaan"})]}),a.jsxs(Su,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(a_,{}),a.jsx("h3",{children:"10+"}),a.jsx("p",{children:"Program Inovasi"})]})]}),a.jsxs(b$,{children:[a.jsx(Os,{children:"Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan kehadirat Allah SWT yang telah melimpahkan rahmat dan karunia-Nya kepada kita semua. Sebagai Kepala SMKN 1 Bulan, saya menyambut baik dan merasa bangga atas kepercayaan yang diberikan untuk memimpin lembaga pendidikan yang fokus pada pengembangan teknologi dan keterampilan digital ini."}),a.jsx(Os,{children:"SMKN 1 Bulan hadir sebagai solusi atas kebutuhan tenaga kerja terampil di bidang teknologi informasi dan komunikasi. Kami berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan berakhlak mulia. Melalui berbagai program inovatif dan kerjasama dengan industri, kami terus berupaya meningkatkan kualitas pembelajaran dan pengembangan siswa."}),a.jsx(Os,{children:"Kepada seluruh siswa, saya mengajak untuk terus semangat dalam menuntut ilmu dan mengembangkan diri. Jadikan masa sekolah ini sebagai kesempatan emas untuk mempersiapkan diri menghadapi tantangan di era digital. Kepada para guru dan staff, mari kita bersama-sama menciptakan lingkungan belajar yang kondusif dan inspiratif bagi seluruh warga sekolah."}),a.jsx(Os,{children:"Akhir kata, saya mengucapkan terima kasih atas dukungan semua pihak dalam memajukan SMKN 1 Bulan. Mari kita bersama-sama mewujudkan visi sekolah untuk menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Wassalamu'alaikum Warahmatullahi Wabarakatuh."})]})]})]})}const S$=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,P$=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,C$=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,_$=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,T$=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Ds=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,E$=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Pu=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,A$=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function $$(){const e=G();return a.jsxs(S$,{children:[a.jsx(A$,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(P$,{children:[a.jsx(C$,{children:a.jsx(_$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Visi & Misi"})}),a.jsxs(E$,{children:[a.jsxs(Pu,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(p_,{}),a.jsx("h3",{children:"Visi"}),a.jsx("p",{children:"Terdepan dalam Inovasi"})]}),a.jsxs(Pu,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(s_,{}),a.jsx("h3",{children:"Misi"}),a.jsx("p",{children:"Pengembangan Berkelanjutan"})]}),a.jsxs(Pu,{whileHover:{scale:1.05},transition:{type:"spring",stiffness:300},children:[a.jsx(Py,{}),a.jsx("h3",{children:"Nilai"}),a.jsx("p",{children:"Integritas & Profesional"})]})]}),a.jsxs(T$,{children:[a.jsx(Ds,{children:"Visi SMKN 1 Bulan adalah menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Kami berkomitmen untuk menciptakan lingkungan pembelajaran yang mendukung pengembangan potensi setiap siswa, baik dalam aspek akademik maupun karakter."}),a.jsx(Ds,{children:"Dalam mewujudkan visi tersebut, kami menjalankan misi untuk menyelenggarakan pendidikan berkualitas berbasis teknologi yang relevan dengan kebutuhan industri. Kami juga fokus pada pengembangan karakter dan kepribadian siswa melalui berbagai program pembinaan dan kegiatan ekstrakurikuler yang terarah."}),a.jsx(Ds,{children:"Misi kami juga mencakup upaya membangun kerjasama yang kuat dengan industri dan masyarakat. Hal ini penting untuk memastikan bahwa kurikulum dan program pembelajaran kami selalu sejalan dengan perkembangan teknologi dan kebutuhan dunia kerja. Selain itu, kami terus meningkatkan kompetensi guru dan staff melalui berbagai program pengembangan profesional."}),a.jsx(Ds,{children:"Dengan visi dan misi yang jelas ini, SMKN 1 Bulan berkomitmen untuk terus berkembang dan berinovasi dalam menghadapi tantangan pendidikan di era digital. Kami percaya bahwa dengan fondasi yang kuat dalam nilai-nilai integritas, profesionalisme, dan inovasi, kami dapat menghasilkan lulusan yang siap berkontribusi positif bagi masyarakat dan industri."})]})]})]})}const z$=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,L$=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,M$=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,I$=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,R$=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,O$=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Bs=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,D$=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Ns=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,B$=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function N$(){const e=G();return a.jsxs(z$,{children:[a.jsx(B$,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(L$,{children:[a.jsxs(M$,{children:[a.jsx(I$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Akademik"}),a.jsx(R$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/akademik.jpg",alt:"Program Akademik"})]}),a.jsxs(D$,{children:[a.jsxs(Ns,{children:[a.jsx(f_,{}),a.jsx("h3",{children:"Praktik Industri"}),a.jsx("p",{children:"Pengalaman Kerja Nyata"})]}),a.jsxs(Ns,{children:[a.jsx(u_,{}),a.jsx("h3",{children:"Teaching Factory"}),a.jsx("p",{children:"Pembelajaran Berbasis Produk"})]}),a.jsxs(Ns,{children:[a.jsx(oc,{}),a.jsx("h3",{children:"Sertifikasi"}),a.jsx("p",{children:"Kompetensi Terstandar"})]}),a.jsxs(Ns,{children:[a.jsx(wy,{}),a.jsx("h3",{children:"Kompetisi"}),a.jsx("p",{children:"Prestasi Nasional"})]})]}),a.jsxs(O$,{children:[a.jsx(Bs,{children:"Program akademik di SMKN 1 Bulan dirancang untuk mempersiapkan siswa menghadapi tantangan industri digital. Melalui kurikulum yang terintegrasi dengan kebutuhan industri, siswa tidak hanya belajar teori tetapi juga praktik langsung menggunakan teknologi terkini."}),a.jsx(Bs,{children:"Teaching Factory menjadi salah satu program unggulan dimana siswa belajar dalam lingkungan yang menyerupai industri sesungguhnya. Mereka mengerjakan proyek nyata dari klien dan belajar mengelola proyek dari awal hingga akhir."}),a.jsx(Bs,{children:"Program sertifikasi kompetensi memastikan lulusan memiliki kualifikasi yang diakui industri. Kami bekerjasama dengan berbagai lembaga sertifikasi untuk memberikan kesempatan siswa mendapatkan sertifikat kompetensi di bidangnya."}),a.jsx(Bs,{children:"Siswa juga didorong untuk aktif mengikuti berbagai kompetisi tingkat daerah hingga nasional. Hal ini membantu mengasah kemampuan teknis dan soft skill mereka, serta membuka peluang networking dengan industri."})]})]})]})}const F$=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,V$=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,U$=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,H$=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,K$=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,G$=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Fs=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,W$=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Vs=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,q$=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function J$(){const e=G();return a.jsxs(F$,{children:[a.jsx(q$,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(V$,{children:[a.jsxs(U$,{children:[a.jsx(H$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Penguatan Karakter"}),a.jsx(K$,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/karakter.jpg",alt:"Penguatan Karakter"})]}),a.jsxs(W$,{children:[a.jsxs(Vs,{children:[a.jsx(y_,{}),a.jsx("h3",{children:"Religius"}),a.jsx("p",{children:"Penguatan Nilai Agama"})]}),a.jsxs(Vs,{children:[a.jsx(ki,{}),a.jsx("h3",{children:"Integritas"}),a.jsx("p",{children:"Pembentukan Karakter"})]}),a.jsxs(Vs,{children:[a.jsx(h_,{}),a.jsx("h3",{children:"Gotong Royong"}),a.jsx("p",{children:"Kerjasama Tim"})]}),a.jsxs(Vs,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"Sosial"}),a.jsx("p",{children:"Kepedulian Masyarakat"})]})]}),a.jsxs(G$,{children:[a.jsx(Fs,{children:"Program penguatan karakter di SMKN 1 Bulan berfokus pada pembentukan kepribadian siswa yang berakhlak mulia. Melalui berbagai kegiatan keagamaan, siswa diajak untuk mendalami dan mengamalkan nilai-nilai spiritual dalam kehidupan sehari-hari."}),a.jsx(Fs,{children:"Pembentukan integritas menjadi fokus utama melalui program-program seperti leadership camp, outbound training, dan mentoring karakter. Siswa dilatih untuk menjadi pribadi yang jujur, bertanggung jawab, dan memiliki etika yang baik."}),a.jsx(Fs,{children:"Nilai gotong royong dan kerjasama tim ditanamkan melalui berbagai kegiatan kelompok dan proyek sosial. Siswa belajar untuk bekerja dalam tim, menghargai perbedaan, dan berkontribusi untuk kepentingan bersama."}),a.jsx(Fs,{children:"Kepedulian sosial dikembangkan melalui program bakti sosial, kunjungan ke panti asuhan, dan berbagai kegiatan kemasyarakatan lainnya. Hal ini membantu siswa memahami pentingnya empati dan kontribusi positif kepada masyarakat."})]})]})]})}const Y$=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,X$=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Q$=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,Z$=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,ez=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,tz=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Us=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,nz=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Hs=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,rz=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function iz(){const e=G();return a.jsxs(Y$,{children:[a.jsx(rz,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(X$,{children:[a.jsxs(Q$,{children:[a.jsx(Z$,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Program Ekstrakurikuler"}),a.jsx(ez,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/program-ekstrakurikuler.jpg",alt:"Program Ekstrakurikuler"})]}),a.jsxs(nz,{children:[a.jsxs(Hs,{children:[a.jsx(jy,{}),a.jsx("h3",{children:"Olahraga"}),a.jsx("p",{children:"Pengembangan Fisik"})]}),a.jsxs(Hs,{children:[a.jsx(Ty,{}),a.jsx("h3",{children:"Seni"}),a.jsx("p",{children:"Kreativitas & Budaya"})]}),a.jsxs(Hs,{children:[a.jsx(x_,{}),a.jsx("h3",{children:"Jurnalistik"}),a.jsx("p",{children:"Media & Komunikasi"})]}),a.jsxs(Hs,{children:[a.jsx(d_,{}),a.jsx("h3",{children:"Coding Club"}),a.jsx("p",{children:"Pemrograman"})]})]}),a.jsxs(tz,{children:[a.jsx(Us,{children:"Program ekstrakurikuler di SMKN 1 Bulan dirancang untuk mengembangkan bakat dan minat siswa di luar jam pelajaran. Melalui berbagai kegiatan ekstrakurikuler, siswa dapat mengeksplorasi dan mengembangkan potensi diri dalam bidang yang mereka minati."}),a.jsx(Us,{children:"Dalam bidang olahraga, kami memiliki berbagai cabang seperti futsal, basket, dan bulu tangkis. Kegiatan ini tidak hanya melatih fisik tetapi juga mengajarkan nilai-nilai sportivitas, kerjasama tim, dan disiplin."}),a.jsx(Us,{children:"Bidang seni dan budaya diwadahi melalui ekstrakurikuler musik, tari, dan teater. Siswa dapat mengekspresikan kreativitas mereka sekaligus melestarikan budaya lokal melalui berbagai pertunjukan dan festival seni."}),a.jsx(Us,{children:"Untuk mengembangkan kemampuan di bidang teknologi, Coding Club menjadi wadah bagi siswa yang tertarik dengan pemrograman dan pengembangan software. Mereka dapat berkolaborasi dalam berbagai proyek dan mengikuti kompetisi programming."})]})]})]})}const az=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,sz=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,oz=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,lz=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,cz=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,uz=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Ks=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,dz=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Gs=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,hz=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Cu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,fz=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function pz(){const e=G();return a.jsxs(az,{children:[a.jsx(fz,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(sz,{children:[a.jsxs(oz,{children:[a.jsx(lz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Perpustakaan Digital"}),a.jsx(cz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus1.jpg",alt:"Perpustakaan Digital"})]}),a.jsxs(dz,{children:[a.jsxs(Gs,{children:[a.jsx(r_,{}),a.jsx("h3",{children:"10.000+"}),a.jsx("p",{children:"Koleksi Digital"})]}),a.jsxs(Gs,{children:[a.jsx(up,{}),a.jsx("h3",{children:"24/7"}),a.jsx("p",{children:"Akses Online"})]}),a.jsxs(Gs,{children:[a.jsx(lc,{}),a.jsx("h3",{children:"Mudah"}),a.jsx("p",{children:"Pencarian Cepat"})]}),a.jsxs(Gs,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"1000+"}),a.jsx("p",{children:"Pengguna Aktif"})]})]}),a.jsxs(uz,{children:[a.jsx(Ks,{children:"Perpustakaan Digital SMKN 1 Bulan merupakan inovasi dalam penyediaan sumber belajar yang dapat diakses kapan saja dan dimana saja. Dengan koleksi digital yang komprehensif, siswa dapat dengan mudah mengakses berbagai referensi untuk mendukung pembelajaran mereka."}),a.jsx(Ks,{children:"Sistem perpustakaan digital kami dilengkapi dengan fitur pencarian canggih yang memudahkan siswa menemukan materi yang mereka butuhkan. Koleksi digital mencakup buku teks, jurnal, majalah, dan berbagai sumber belajar digital lainnya yang relevan dengan kurikulum."}),a.jsx(Ks,{children:"Selain itu, perpustakaan digital juga terintegrasi dengan sistem pembelajaran online sekolah, memungkinkan guru untuk membuat referensi digital dan membagikannya kepada siswa. Hal ini mendukung proses pembelajaran yang lebih efektif dan interaktif."}),a.jsx(Ks,{children:"Kami terus mengembangkan koleksi dan layanan perpustakaan digital untuk memastikan siswa memiliki akses ke sumber belajar terkini yang mendukung pengembangan kompetensi mereka di era digital."}),a.jsxs(hz,{children:[a.jsx(Cu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus2.jpg",alt:"Area Baca"}),a.jsx(Cu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus3.jpg",alt:"Ruang Komputer"}),a.jsx(Cu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/perpus4.jpg",alt:"Koleksi Digital"})]})]})]})]})}const mz=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,gz=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,xz=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,vz=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,yz=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,bz=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Ws=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,kz=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,qs=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,wz=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,_u=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,jz=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function Sz(){const e=G();return a.jsxs(mz,{children:[a.jsx(jz,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(gz,{children:[a.jsxs(xz,{children:[a.jsx(vz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Laboratorium Komputer"}),a.jsx(yz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab1.jpg",alt:"Lab Komputer"})]}),a.jsxs(kz,{children:[a.jsxs(qs,{children:[a.jsx(up,{}),a.jsx("h3",{children:"100+"}),a.jsx("p",{children:"Unit Komputer"})]}),a.jsxs(qs,{children:[a.jsx(Ey,{}),a.jsx("h3",{children:"1 Gbps"}),a.jsx("p",{children:"Koneksi Internet"})]}),a.jsxs(qs,{children:[a.jsx(Ly,{}),a.jsx("h3",{children:"Modern"}),a.jsx("p",{children:"Perangkat Terkini"})]}),a.jsxs(qs,{children:[a.jsx(P_,{}),a.jsx("h3",{children:"40"}),a.jsx("p",{children:"Kapasitas/Lab"})]})]}),a.jsxs(bz,{children:[a.jsx(Ws,{children:"Laboratorium Komputer SMKN 1 Bulan dilengkapi dengan perangkat keras dan lunak terkini untuk mendukung pembelajaran praktik siswa. Setiap komputer dilengkapi dengan spesifikasi yang memadai untuk menjalankan berbagai software pengembangan dan desain."}),a.jsx(Ws,{children:"Fasilitas ini terdiri dari tiga ruang laboratorium yang masing-masing memiliki kapasitas 40 siswa. Setiap lab dilengkapi dengan proyektor, AC, dan jaringan internet berkecepatan tinggi untuk mendukung pembelajaran online dan praktik pemrograman."}),a.jsx(Ws,{children:"Software yang tersedia mencakup berbagai IDE untuk pemrograman, tools desain grafis, aplikasi office, dan software khusus sesuai kebutuhan jurusan. Semua komputer terhubung dalam jaringan lokal yang memungkinkan sharing resource dan praktik jaringan."}),a.jsx(Ws,{children:"Laboratorium juga dilengkapi dengan sistem monitoring yang memungkinkan guru untuk memantau dan mengendalikan aktivitas siswa selama pembelajaran praktik. Hal ini memastikan efektivitas pembelajaran dan penggunaan fasilitas yang optimal."}),a.jsxs(wz,{children:[a.jsx(_u,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab2.jpg",alt:"Ruang Praktik"}),a.jsx(_u,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab3.jpg",alt:"Area Diskusi"}),a.jsx(_u,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lab4.jpg",alt:"Peralatan Lab"})]})]})]})]})}const Pz=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,Cz=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,_z=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,Tz=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Ez=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Az=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Js=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,$z=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Ys=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,zz=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Tu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Lz=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function Mz(){const e=G();return a.jsxs(Pz,{children:[a.jsx(Lz,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(Cz,{children:[a.jsxs(_z,{children:[a.jsx(Tz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Studio Multimedia"}),a.jsx(Ez,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio1.jpg",alt:"Studio Multimedia"})]}),a.jsxs($z,{children:[a.jsxs(Ys,{children:[a.jsx(c_,{}),a.jsx("h3",{children:"Pro"}),a.jsx("p",{children:"Peralatan Fotografi"})]}),a.jsxs(Ys,{children:[a.jsx(__,{}),a.jsx("h3",{children:"4K"}),a.jsx("p",{children:"Kualitas Video"})]}),a.jsxs(Ys,{children:[a.jsx(g_,{}),a.jsx("h3",{children:"Studio"}),a.jsx("p",{children:"Recording Audio"})]}),a.jsxs(Ys,{children:[a.jsx(up,{}),a.jsx("h3",{children:"Editing"}),a.jsx("p",{children:"Workstation"})]})]}),a.jsxs(Az,{children:[a.jsx(Js,{children:"Studio Multimedia SMKN 1 Bulan dilengkapi dengan peralatan profesional untuk mendukung pembelajaran praktik siswa jurusan Multimedia. Studio ini dirancang untuk memberikan pengalaman produksi konten digital yang setara dengan standar industri kreatif."}),a.jsx(Js,{children:"Area fotografi dilengkapi dengan berbagai peralatan lighting, backdrop, dan kamera DSLR profesional. Siswa dapat belajar teknik fotografi studio, product photography, dan portrait photography dalam lingkungan yang ideal untuk menghasilkan karya berkualitas tinggi."}),a.jsx(Js,{children:"Studio video production kami memiliki green screen, lighting setup profesional, dan peralatan videografi 4K. Ruang recording audio yang kedap suara memungkinkan siswa untuk memproduksi konten audio berkualitas, mulai dari voice over hingga podcast."}),a.jsx(Js,{children:"Untuk post-production, tersedia workstation editing yang dilengkapi dengan software industri terkini seperti Adobe Creative Suite, DaVinci Resolve, dan berbagai tools profesional lainnya. Siswa dapat mengedit foto, video, dan audio dalam lingkungan yang optimal."}),a.jsxs(zz,{children:[a.jsx(Tu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio2.jpg",alt:"Area Fotografi"}),a.jsx(Tu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio3.jpg",alt:"Video Production"}),a.jsx(Tu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/studio4.jpg",alt:"Editing Room"})]})]})]})]})}const Iz=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,Rz=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Oz=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,Dz=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Bz=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Nz=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Xs=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,Fz=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,Qs=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,Vz=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Eu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Uz=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function Hz(){const e=G();return a.jsxs(Iz,{children:[a.jsx(Uz,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(Rz,{children:[a.jsxs(Oz,{children:[a.jsx(Dz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Ruang Praktik Jaringan"}),a.jsx(Bz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan1.jpg",alt:"Ruang Praktik Jaringan"})]}),a.jsxs(Fz,{children:[a.jsxs(Qs,{children:[a.jsx(Ey,{}),a.jsx("h3",{children:"50+"}),a.jsx("p",{children:"Unit Perangkat"})]}),a.jsxs(Qs,{children:[a.jsx(w_,{}),a.jsx("h3",{children:"10+"}),a.jsx("p",{children:"Server Praktik"})]}),a.jsxs(Qs,{children:[a.jsx(pp,{}),a.jsx("h3",{children:"Gigabit"}),a.jsx("p",{children:"Koneksi Jaringan"})]}),a.jsxs(Qs,{children:[a.jsx(Ly,{}),a.jsx("h3",{children:"Lengkap"}),a.jsx("p",{children:"Tools Jaringan"})]})]}),a.jsxs(Nz,{children:[a.jsx(Xs,{children:"Ruang Praktik Jaringan SMKN 1 Bulan dilengkapi dengan berbagai perangkat jaringan modern untuk mendukung pembelajaran praktis siswa jurusan Teknik Komputer dan Jaringan. Fasilitas ini dirancang untuk memberikan pengalaman hands-on dalam mengelola dan mengkonfigurasi infrastruktur jaringan."}),a.jsx(Xs,{children:"Lab ini dilengkapi dengan berbagai perangkat jaringan seperti router, switch, access point, dan server yang memungkinkan siswa untuk mempelajari dan mempraktikkan konfigurasi jaringan secara langsung. Setiap workstation dilengkapi dengan tools dan software jaringan terkini untuk simulasi dan monitoring jaringan."}),a.jsx(Xs,{children:"Siswa dapat melakukan praktik instalasi dan konfigurasi berbagai jenis jaringan, mulai dari LAN, WLAN, hingga WAN. Mereka juga belajar tentang keamanan jaringan, manajemen server, dan troubleshooting melalui proyek-proyek praktis yang mensimulasikan skenario dunia nyata."}),a.jsx(Xs,{children:"Dengan fasilitas yang lengkap ini, siswa dapat mengembangkan keterampilan teknis yang dibutuhkan industri, seperti administrasi jaringan, cloud computing, dan cybersecurity. Pengalaman praktis ini sangat berharga untuk mempersiapkan mereka memasuki dunia kerja di bidang IT."}),a.jsxs(Vz,{children:[a.jsx(Eu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan2.jpg",alt:"Area Server"}),a.jsx(Eu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan3.jpg",alt:"Workstation"}),a.jsx(Eu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan4.jpg",alt:"Peralatan Jaringan"})]})]})]})]})}const Kz=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,Gz=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,Wz=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,qz=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,Jz=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,Yz=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Zs=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,Xz=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,eo=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,Qz=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Au=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,Zz=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function eL(){const e=G();return a.jsxs(Kz,{children:[a.jsx(Zz,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(Gz,{children:[a.jsxs(Wz,{children:[a.jsx(qz,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Aula Serbaguna"}),a.jsx(Jz,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula1.jpg",alt:"Aula Serbaguna"})]}),a.jsxs(Xz,{children:[a.jsxs(eo,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"1000+"}),a.jsx("p",{children:"Kapasitas"})]}),a.jsxs(eo,{children:[a.jsx(Ty,{}),a.jsx("h3",{children:"Modern"}),a.jsx("p",{children:"Sound System"})]}),a.jsxs(eo,{children:[a.jsx(oc,{}),a.jsx("h3",{children:"Multi"}),a.jsx("p",{children:"Fungsi"})]}),a.jsxs(eo,{children:[a.jsx(o_,{}),a.jsx("h3",{children:"100+"}),a.jsx("p",{children:"Event per Tahun"})]})]}),a.jsxs(Yz,{children:[a.jsx(Zs,{children:"Aula Serbaguna SMKN 1 Bulan merupakan fasilitas modern yang dirancang untuk mendukung berbagai kegiatan sekolah dan event berskala besar. Dengan kapasitas lebih dari 1000 orang, aula ini dilengkapi dengan sistem tata suara dan pencahayaan profesional untuk mendukung berbagai jenis acara."}),a.jsx(Zs,{children:"Ruangan ini dilengkapi dengan panggung permanen yang luas, layar proyeksi berukuran besar, dan sistem audio visual terkini. Area backstage dan ruang persiapan yang nyaman memastikan kelancaran setiap acara yang diselenggarakan, mulai dari upacara hingga pertunjukan seni."}),a.jsx(Zs,{children:"Sistem pendingin udara yang optimal dan tata akustik yang dirancang khusus menciptakan kenyamanan maksimal bagi peserta acara. Aula ini juga dilengkapi dengan area lobby yang luas untuk registrasi dan area pameran temporer, serta toilet yang memadai untuk mendukung acara berskala besar."}),a.jsx(Zs,{children:"Setiap tahun, aula ini menjadi tempat penyelenggaraan berbagai event penting seperti wisuda, seminar, workshop, pentas seni, dan berbagai kompetisi tingkat sekolah hingga nasional. Fleksibilitas ruangan memungkinkan konfigurasi yang berbeda-beda sesuai kebutuhan acara."}),a.jsxs(Qz,{children:[a.jsx(Au,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula2.jpg",alt:"Panggung Utama"}),a.jsx(Au,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula3.jpg",alt:"Area Duduk"}),a.jsx(Au,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/aula4.jpg",alt:"Lobby Aula"})]})]})]})]})}const tL=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,nL=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,rL=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,iL=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,aL=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,sL=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,to=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,oL=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,no=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,lL=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,$u=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,cL=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function uL(){const e=G();return a.jsxs(tL,{children:[a.jsx(cL,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(nL,{children:[a.jsxs(rL,{children:[a.jsx(iL,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Lapangan Olahraga"}),a.jsx(aL,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan1.jpg",alt:"Lapangan Olahraga"})]}),a.jsxs(oL,{children:[a.jsxs(no,{children:[a.jsx(jy,{}),a.jsx("h3",{children:"Futsal"}),a.jsx("p",{children:"Lapangan Indoor"})]}),a.jsxs(no,{children:[a.jsx(T_,{}),a.jsx("h3",{children:"Voli"}),a.jsx("p",{children:"Standar Nasional"})]}),a.jsxs(no,{children:[a.jsx(t_,{}),a.jsx("h3",{children:"Basket"}),a.jsx("p",{children:"Full Court"})]}),a.jsxs(no,{children:[a.jsx(b_,{}),a.jsx("h3",{children:"Atletik"}),a.jsx("p",{children:"Lintasan Lari"})]})]}),a.jsxs(sL,{children:[a.jsx(to,{children:"Fasilitas olahraga SMKN 1 Bulan dirancang untuk mendukung pengembangan fisik dan bakat olahraga siswa. Dengan area yang luas dan peralatan standar nasional, siswa dapat berlatih dan berkompetisi dalam berbagai cabang olahraga dengan optimal."}),a.jsx(to,{children:"Lapangan indoor multifungsi dapat digunakan untuk berbagai aktivitas seperti futsal, badminton, dan kegiatan indoor lainnya. Dilengkapi dengan sistem pencahayaan dan ventilasi yang baik, lapangan ini dapat digunakan dalam berbagai kondisi cuaca."}),a.jsx(to,{children:"Area outdoor terdiri dari lapangan basket full-court dan lapangan voli yang memenuhi standar kompetisi. Lintasan atletik yang mengelilingi lapangan utama memungkinkan siswa untuk berlatih berbagai nomor atletik seperti lari jarak pendek, menengah, dan jauh."}),a.jsx(to,{children:"Seluruh fasilitas olahraga dilengkapi dengan ruang ganti, toilet, dan area penyimpanan peralatan yang memadai. Perawatan rutin dilakukan untuk memastikan keamanan dan kenyamanan pengguna, serta menjaga kualitas fasilitas tetap optimal."}),a.jsxs(lL,{children:[a.jsx($u,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan2.jpg",alt:"Lapangan Basket"}),a.jsx($u,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan3.jpg",alt:"Lapangan Voli"}),a.jsx($u,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan4.jpg",alt:"Lintasan Atletik"})]})]})]})]})}const dL=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,hL=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,fL=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,pL=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,mL=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,gL=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ro=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,xL=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,io=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,vL=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,zu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,yL=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function bL(){const e=G();return a.jsxs(dL,{children:[a.jsx(yL,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(hL,{children:[a.jsxs(fL,{children:[a.jsx(pL,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Kantin Sehat"}),a.jsx(mL,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin1.jpg",alt:"Kantin Sehat"})]}),a.jsxs(xL,{children:[a.jsxs(io,{children:[a.jsx(C_,{}),a.jsx("h3",{children:"Bersih"}),a.jsx("p",{children:"Standar Higenis"})]}),a.jsxs(io,{children:[a.jsx(_y,{}),a.jsx("h3",{children:"Sehat"}),a.jsx("p",{children:"Menu Bergizi"})]}),a.jsxs(io,{children:[a.jsx(Ay,{}),a.jsx("h3",{children:"Aman"}),a.jsx("p",{children:"Terjamin Mutunya"})]}),a.jsxs(io,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"200+"}),a.jsx("p",{children:"Kapasitas"})]})]}),a.jsxs(gL,{children:[a.jsx(ro,{children:"Kantin Sehat SMKN 1 Bulan merupakan fasilitas yang dirancang untuk menyediakan makanan dan minuman yang sehat, bersih, dan bergizi bagi seluruh warga sekolah. Dengan menerapkan standar kebersihan yang ketat, kami memastikan setiap makanan yang disajikan aman untuk dikonsumsi."}),a.jsx(ro,{children:"Area makan yang nyaman dan bersih dilengkapi dengan ventilasi yang baik dan pencahayaan yang memadai. Meja dan kursi ditata dengan rapi untuk menciptakan suasana yang kondusif bagi siswa dan guru untuk menikmati makanan mereka."}),a.jsx(ro,{children:"Menu yang disediakan bervariasi dan memenuhi standar gizi seimbang. Setiap penjual di kantin harus mengikuti pelatihan penanganan makanan dan mendapatkan sertifikasi dari Dinas Kesehatan. Hal ini untuk memastikan kualitas dan keamanan makanan yang dijual."}),a.jsx(ro,{children:"Kantin juga dilengkapi dengan fasilitas cuci tangan dan tempat sampah yang memadai untuk mendukung kebersihan lingkungan. Pemantauan rutin dilakukan untuk memastikan standar kebersihan dan kualitas makanan tetap terjaga."}),a.jsxs(vL,{children:[a.jsx(zu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin2.jpg",alt:"Area Makan"}),a.jsx(zu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin3.jpg",alt:"Counter Makanan"}),a.jsx(zu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin4.jpg",alt:"Menu Sehat"})]})]})]})]})}const kL=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,wL=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,jL=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,SL=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,PL=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,CL=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ao=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,_L=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,so=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,TL=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Lu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,EL=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function AL(){const e=G();return a.jsxs(kL,{children:[a.jsx(EL,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(wL,{children:[a.jsxs(jL,{children:[a.jsx(SL,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Taman Sosial"}),a.jsx(PL,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman1.jpg",alt:"Taman Sosial"})]}),a.jsxs(_L,{children:[a.jsxs(so,{children:[a.jsx(j_,{}),a.jsx("h3",{children:"Hijau"}),a.jsx("p",{children:"Area Terbuka"})]}),a.jsxs(so,{children:[a.jsx(pp,{}),a.jsx("h3",{children:"Free"}),a.jsx("p",{children:"Wifi Area"})]}),a.jsxs(so,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"Nyaman"}),a.jsx("p",{children:"Area Diskusi"})]}),a.jsxs(so,{children:[a.jsx(_y,{}),a.jsx("h3",{children:"Asri"}),a.jsx("p",{children:"Taman Edukasi"})]})]}),a.jsxs(CL,{children:[a.jsx(ao,{children:"Taman Sosial SMKN 1 Bulan merupakan ruang terbuka hijau yang dirancang sebagai area interaksi dan pembelajaran outdoor bagi seluruh warga sekolah. Dengan konsep eco-friendly, taman ini dilengkapi dengan berbagai fasilitas yang mendukung kegiatan belajar dan bersosialisasi."}),a.jsx(ao,{children:"Area ini dilengkapi dengan gazebo dan bangku taman yang nyaman untuk kegiatan diskusi kelompok atau sekedar bersantai di waktu istirahat. Koneksi wifi yang tersedia memungkinkan siswa untuk mengakses materi pembelajaran digital sambil menikmati suasana alam yang asri."}),a.jsx(ao,{children:"Taman ini juga berfungsi sebagai laboratorium alam, dengan berbagai jenis tanaman yang diberi label nama ilmiah untuk pembelajaran biologi. Desain taman yang artistik menjadikannya lokasi favorit untuk kegiatan fotografi dan pembuatan konten kreatif siswa."}),a.jsx(ao,{children:"Sebagai bagian dari program sekolah adiwiyata, taman ini juga menjadi contoh penerapan konsep sekolah hijau dan pelestarian lingkungan. Siswa terlibat aktif dalam pemeliharaan taman melalui program piket dan kegiatan ekstrakurikuler pecinta alam."}),a.jsxs(TL,{children:[a.jsx(Lu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman2.jpg",alt:"Area Gazebo"}),a.jsx(Lu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman3.jpg",alt:"Taman Edukasi"}),a.jsx(Lu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/taman4.jpg",alt:"Area Diskusi"})]})]})]})]})}const $L=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,zL=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,LL=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,ML=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,IL=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,RL=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,oo=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,OL=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,lo=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,DL=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Mu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,BL=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;function NL(){const e=G();return a.jsxs($L,{children:[a.jsx(BL,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(zL,{children:[a.jsxs(LL,{children:[a.jsx(ML,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Titik Internet"}),a.jsx(IL,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi1.jpg",alt:"Titik Internet"})]}),a.jsxs(OL,{children:[a.jsxs(lo,{children:[a.jsx(pp,{}),a.jsx("h3",{children:"100+"}),a.jsx("p",{children:"Titik Akses"})]}),a.jsxs(lo,{children:[a.jsx(n_,{}),a.jsx("h3",{children:"1 Gbps"}),a.jsx("p",{children:"Kecepatan"})]}),a.jsxs(lo,{children:[a.jsx(Sy,{}),a.jsx("h3",{children:"24/7"}),a.jsx("p",{children:"Akses Internet"})]}),a.jsxs(lo,{children:[a.jsx(Ay,{}),a.jsx("h3",{children:"Aman"}),a.jsx("p",{children:"Koneksi Terlindungi"})]})]}),a.jsxs(RL,{children:[a.jsx(oo,{children:"Fasilitas internet di SMKN 1 Bulan dirancang untuk memberikan akses internet berkecepatan tinggi yang dapat diandalkan di seluruh area sekolah. Dengan lebih dari 100 titik akses yang strategis, siswa dan guru dapat terhubung ke internet kapan saja dan di mana saja dalam lingkungan sekolah."}),a.jsx(oo,{children:"Setiap titik akses dilengkapi dengan teknologi terkini yang mendukung koneksi gigabit, memastikan kecepatan dan stabilitas yang optimal untuk berbagai kebutuhan pembelajaran digital. Sistem load balancing memastikan distribusi bandwidth yang merata ke seluruh pengguna."}),a.jsx(oo,{children:"Keamanan jaringan menjadi prioritas utama dengan implementasi sistem autentikasi terpusat dan enkripsi data. Setiap pengguna memiliki akun pribadi dengan kuota yang dapat dipantau, serta akses ke layanan dan konten yang sesuai dengan kebijakan sekolah."}),a.jsx(oo,{children:"Infrastruktur internet ini mendukung berbagai kegiatan pembelajaran digital, mulai dari akses ke perpustakaan digital, pembelajaran online, hingga praktik pemrograman dan pengembangan aplikasi. Tim IT support kami siap memberikan bantuan teknis untuk memastikan konektivitas yang lancar."}),a.jsxs(DL,{children:[a.jsx(Mu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi2.jpg",alt:"Area Hotspot"}),a.jsx(Mu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi3.jpg",alt:"Ruang Server"}),a.jsx(Mu,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi4.jpg",alt:"Monitoring System"})]})]})]})]})}const FL=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,VL=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,UL=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,HL=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,KL=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,GL=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,WL=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,co=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,qL=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Iu=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,JL=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ru=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,b1=d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,k1=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,YL=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Ou=d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,XL=d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function QL(){const e=G();return a.jsxs(FL,{children:[a.jsx(UL,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(VL,{children:[a.jsxs(HL,{children:[a.jsx(KL,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"PRAMUKA"}),a.jsx(GL,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pramuka.jpg",alt:"Pramuka"})]}),a.jsxs(b1,{children:[a.jsx(k1,{children:"Informasi Pengurus"}),a.jsxs(YL,{children:[a.jsxs(Ou,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Pembina English Club"})}),a.jsx("h4",{children:"Pembina"}),a.jsx("p",{children:"Mrs. Sarah Johnson"}),a.jsx("p",{children:"Guru Bahasa Inggris"})]}),a.jsxs(Ou,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Ketua English Club"})}),a.jsx("h4",{children:"Ketua"}),a.jsx("p",{children:"John Doe"}),a.jsx("p",{children:"XII RPL 1"})]}),a.jsxs(Ou,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Wakil Ketua English Club"})}),a.jsx("h4",{children:"Wakil Ketua"}),a.jsx("p",{children:"Jane Smith"}),a.jsx("p",{children:"XI RPL 2"})]})]})]}),a.jsxs(b1,{children:[a.jsx(k1,{children:"Jadwal Latihan"}),a.jsx(XL,{children:a.jsx("p",{children:"Selasa dan Jumat"})})]}),a.jsxs(WL,{children:[a.jsxs(co,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"40+"}),a.jsx("p",{children:"Active Members"})]}),a.jsxs(co,{children:[a.jsx(Jn,{}),a.jsx("h3",{children:"2x"}),a.jsx("p",{children:"Weekly Meeting"})]}),a.jsxs(co,{children:[a.jsx(Xn,{}),a.jsx("h3",{children:"15+"}),a.jsx("p",{children:"Achievements"})]}),a.jsxs(co,{children:[a.jsx(Yn,{}),a.jsx("h3",{children:"Lab"}),a.jsx("p",{children:"Meeting Point"})]})]}),a.jsxs(qL,{children:[a.jsx(Iu,{children:"Pramuka, singkatan dari Praja Muda Karana, merupakan organisasi kepanduan yang bertujuan untuk membentuk generasi muda yang mandiri, disiplin, dan bertanggung jawab. Melalui berbagai kegiatan, Pramuka mengajarkan nilai-nilai kebersamaan, kepemimpinan, dan kecintaan terhadap alam. Anggota Pramuka diajarkan untuk mengembangkan keterampilan hidup yang berguna dalam menghadapi tantangan di masa depan."}),a.jsx(Iu,{children:"Kegiatan dalam Pramuka meliputi pelatihan keterampilan, penjelajahan alam, dan proyek sosial. Selain itu, Pramuka juga sering mengadakan kegiatan berkemah, di mana anggotanya belajar untuk bekerja sama dalam tim dan hidup mandiri di lingkungan alam. Melalui kegiatan-kegiatan ini, Pramuka tidak hanya menjadi tempat belajar, tetapi juga tempat mengasah kreativitas dan memperluas wawasan."}),a.jsx(Iu,{children:'Pramuka memiliki peran besar dalam memberikan kontribusi kepada masyarakat, terutama melalui aksi-aksi sosial seperti bantuan bencana, penghijauan, dan kampanye lingkungan. Dengan semboyan "Setiap Pramuka adalah Pandu Indonesia," organisasi ini berkomitmen untuk melahirkan generasi muda yang tidak hanya peduli terhadap diri sendiri, tetapi juga terhadap bangsa dan negara. Pramuka menjadi pilar penting dalam membentuk masyarakat yang lebih baik.'}),a.jsxs(JL,{children:[a.jsx(Ru,{src:"/images/ekskul/english/activity1.jpg"}),a.jsx(Ru,{src:"/images/ekskul/english/activity2.jpg"}),a.jsx(Ru,{src:"/images/ekskul/english/activity3.jpg",a:!0})]})]})]})]})}const ZL=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,eM=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,tM=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,nM=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,rM=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,iM=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,aM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,uo=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,sM=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Du=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,oM=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Bu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,w1=d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,j1=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,lM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Nu=d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,cM=d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function uM(){const e=G();return a.jsxs(ZL,{children:[a.jsx(tM,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(eM,{children:[a.jsxs(nM,{children:[a.jsx(rM,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"Futsal"}),a.jsx(iM,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/futsal.jpg",alt:"Futsal"})]}),a.jsxs(w1,{children:[a.jsx(j1,{children:"Informasi Pengurus"}),a.jsxs(lM,{children:[a.jsxs(Nu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Pembina Futsal"})}),a.jsx("h4",{children:"Pembina"}),a.jsx("p",{children:"Mrs. Sarah Johnson"}),a.jsx("p",{children:"Guru Bahasa Inggris"})]}),a.jsxs(Nu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Ketua Futsal"})}),a.jsx("h4",{children:"Ketua"}),a.jsx("p",{children:"John Doe"}),a.jsx("p",{children:"XII RPL 1"})]}),a.jsxs(Nu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Wakil Ketua Futsal"})}),a.jsx("h4",{children:"Wakil Ketua"}),a.jsx("p",{children:"Jane Smith"}),a.jsx("p",{children:"XI RPL 2"})]})]})]}),a.jsxs(w1,{children:[a.jsx(j1,{children:"Jadwal Latihan"}),a.jsx(cM,{children:a.jsx("p",{children:"Selasa dan Jumat"})})]}),a.jsxs(aM,{children:[a.jsxs(uo,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"40+"}),a.jsx("p",{children:"Active Members"})]}),a.jsxs(uo,{children:[a.jsx(Jn,{}),a.jsx("h3",{children:"2x"}),a.jsx("p",{children:"Weekly Meeting"})]}),a.jsxs(uo,{children:[a.jsx(Xn,{}),a.jsx("h3",{children:"15+"}),a.jsx("p",{children:"Achievements"})]}),a.jsxs(uo,{children:[a.jsx(Yn,{}),a.jsx("h3",{children:"Lab"}),a.jsx("p",{children:"Meeting Point"})]})]}),a.jsxs(sM,{children:[a.jsx(Du,{children:"Futsal adalah olahraga yang dimainkan di lapangan kecil dengan lima pemain dalam setiap tim, termasuk penjaga gawang. Berbeda dengan sepak bola, futsal menonjolkan kecepatan, keterampilan individu, dan koordinasi tim. Dengan bola yang lebih kecil dan berat, permainan ini menuntut teknik kontrol bola yang presisi, kreativitas, dan kemampuan mengambil keputusan dengan cepat. Hal ini membuat futsal menjadi olahraga yang dinamis dan seru untuk dimainkan maupun ditonton."}),a.jsx(Du,{children:"Selain menyenangkan, futsal memiliki banyak manfaat bagi pemainnya. Olahraga ini membantu meningkatkan kebugaran fisik, melatih daya tahan, dan memperbaiki koordinasi tubuh. Dalam segi mental, futsal mengajarkan kerja sama tim, strategi, dan kemampuan menghadapi tekanan. Pemain juga dilatih untuk berpikir cepat dalam situasi yang terus berubah, sebuah keterampilan yang sangat berguna dalam kehidupan sehari-hari."}),a.jsx(Du,{children:"Futsal semakin populer, terutama di kalangan pelajar. Turnamen futsal sering menjadi ajang kompetisi yang menarik dan mempererat hubungan antar siswa. Selain itu, olahraga ini dapat dimainkan di berbagai kondisi cuaca karena lapangannya biasanya berada di dalam ruangan. Dengan segala kelebihannya, futsal tidak hanya menjadi pilihan olahraga, tetapi juga sarana untuk membangun solidaritas dan semangat kompetitif yang positif di kalangan generasi muda."}),a.jsxs(oM,{children:[a.jsx(Bu,{src:"/images/ekskul/english/activity1.jpg"}),a.jsx(Bu,{src:"/images/ekskul/english/activity2.jpg"}),a.jsx(Bu,{src:"/images/ekskul/english/activity3.jpg"})]})]})]})]})}const dM=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,hM=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,fM=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,pM=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,mM=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,gM=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,xM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,ho=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,vM=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Fu=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,yM=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Vu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,S1=d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,P1=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,bM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Uu=d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,kM=d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function wM(){const e=G();return a.jsxs(dM,{children:[a.jsx(fM,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(hM,{children:[a.jsxs(pM,{children:[a.jsx(mM,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"PMR"}),a.jsx(gM,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pmr.jpg",alt:""})]}),a.jsxs(S1,{children:[a.jsx(P1,{children:"Informasi Pengurus"}),a.jsxs(bM,{children:[a.jsxs(Uu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:""})}),a.jsx("h4",{children:"Pembina"}),a.jsx("p",{children:"Mrs. Sarah Johnson"}),a.jsx("p",{children:"Guru Bahasa Inggris"})]}),a.jsxs(Uu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:""})}),a.jsx("h4",{children:"Ketua"}),a.jsx("p",{children:"John Doe"}),a.jsx("p",{children:"XII RPL 1"})]}),a.jsxs(Uu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:""})}),a.jsx("h4",{children:"Wakil Ketua"}),a.jsx("p",{children:"Jane Smith"}),a.jsx("p",{children:"XI RPL 2"})]})]})]}),a.jsxs(S1,{children:[a.jsx(P1,{children:"Jadwal Latihan"}),a.jsx(kM,{children:a.jsx("p",{children:"Selasa dan Jumat"})})]}),a.jsxs(xM,{children:[a.jsxs(ho,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"40+"}),a.jsx("p",{children:"Active Members"})]}),a.jsxs(ho,{children:[a.jsx(Jn,{}),a.jsx("h3",{children:"2x"}),a.jsx("p",{children:"Weekly Meeting"})]}),a.jsxs(ho,{children:[a.jsx(Xn,{}),a.jsx("h3",{children:"15+"}),a.jsx("p",{children:"Achievements"})]}),a.jsxs(ho,{children:[a.jsx(Yn,{}),a.jsx("h3",{children:"Lab"}),a.jsx("p",{children:"Meeting Point"})]})]}),a.jsxs(vM,{children:[a.jsx(Fu,{children:"Palang Merah Remaja (PMR) adalah organisasi di bawah naungan Palang Merah Indonesia (PMI) yang berfokus pada pendidikan kesehatan, kepedulian sosial, dan kemanusiaan. PMR menjadi tempat bagi generasi muda untuk belajar tentang pertolongan pertama, menjaga kesehatan diri, serta memahami pentingnya solidaritas dan empati terhadap sesama. Melalui PMR, anggota dibekali pengetahuan dasar kesehatan yang bermanfaat untuk kehidupan sehari-hari."}),a.jsx(Fu,{children:"Beragam kegiatan dilakukan oleh PMR, seperti pelatihan pertolongan pertama, donor darah, simulasi bencana, dan penyuluhan kesehatan. Selain itu, PMR juga aktif dalam kampanye kesehatan dan lingkungan di masyarakat. Kegiatan ini tidak hanya meningkatkan kemampuan anggota dalam bidang kesehatan, tetapi juga melatih kepemimpinan, kerja sama, dan kemampuan berkomunikasi."}),a.jsx(Fu,{children:'Sebagai organisasi kemanusiaan, PMR berperan besar dalam memberikan bantuan kepada masyarakat, khususnya dalam situasi darurat. Anggota PMR sering terlibat dalam membantu korban bencana alam, memberikan penyuluhan kesehatan, dan mendukung program donor darah. Dengan semangat "Muda, Peduli, dan Bersahabat," PMR berkomitmen untuk melahirkan generasi muda yang peka terhadap kebutuhan orang lain dan mampu memberikan kontribusi nyata untuk kemanusiaan.'}),a.jsxs(yM,{children:[a.jsx(Vu,{src:"/images/ekskul/english/activity1.jpg"}),a.jsx(Vu,{src:"/images/ekskul/english/activity2.jpg"}),a.jsx(Vu,{src:"/images/ekskul/english/activity3.jpg"})]})]})]})]})}const jM=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,SM=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,PM=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,CM=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,_M=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,TM=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,EM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,fo=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,AM=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Hu=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,$M=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Ku=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,C1=d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,_1=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,zM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Gu=d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,LM=d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function MM(){const e=G();return a.jsxs(jM,{children:[a.jsx(PM,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(SM,{children:[a.jsxs(CM,{children:[a.jsx(_M,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"PASKIBRA"}),a.jsx(TM,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/paskibra.jpg",alt:"Paskibra"})]}),a.jsxs(C1,{children:[a.jsx(_1,{children:"Informasi Pengurus"}),a.jsxs(zM,{children:[a.jsxs(Gu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Pembina Paskibra"})}),a.jsx("h4",{children:"Pembina"}),a.jsx("p",{children:"Mrs. Sarah Johnson"}),a.jsx("p",{children:"Guru Bahasa Inggris"})]}),a.jsxs(Gu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Ketua Paskibra"})}),a.jsx("h4",{children:"Ketua"}),a.jsx("p",{children:"John Doe"}),a.jsx("p",{children:"XII RPL 1"})]}),a.jsxs(Gu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Wakil Ketua Paskibra"})}),a.jsx("h4",{children:"Wakil Ketua"}),a.jsx("p",{children:"Jane Smith"}),a.jsx("p",{children:"XI RPL 2"})]})]})]}),a.jsxs(C1,{children:[a.jsx(_1,{children:"Jadwal Latihan"}),a.jsx(LM,{children:a.jsx("p",{children:"Selasa dan Jumat"})})]}),a.jsxs(EM,{children:[a.jsxs(fo,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"40+"}),a.jsx("p",{children:"Active Members"})]}),a.jsxs(fo,{children:[a.jsx(Jn,{}),a.jsx("h3",{children:"2x"}),a.jsx("p",{children:"Weekly Meeting"})]}),a.jsxs(fo,{children:[a.jsx(Xn,{}),a.jsx("h3",{children:"15+"}),a.jsx("p",{children:"Achievements"})]}),a.jsxs(fo,{children:[a.jsx(Yn,{}),a.jsx("h3",{children:"Lab"}),a.jsx("p",{children:"Meeting Point"})]})]}),a.jsxs(AM,{children:[a.jsx(Hu,{children:"Pasukan Pengibar Bendera (Paskibra) adalah organisasi yang bertugas mengibarkan dan menurunkan bendera merah putih dalam upacara resmi, terutama pada Hari Kemerdekaan. Keberadaan Paskibra mencerminkan semangat kebangsaan, kedisiplinan, dan tanggung jawab. Para anggota Paskibra dipilih melalui seleksi ketat dan menjalani pelatihan intensif untuk memastikan setiap gerakan dan prosesi dilakukan dengan sempurna."}),a.jsx(Hu,{children:"Anggota Paskibra tidak hanya dilatih untuk memiliki fisik yang kuat dan gerakan yang presisi, tetapi juga untuk mengembangkan sikap mental yang tangguh. Melalui latihan baris-berbaris, kekompakan tim, dan pembinaan nilai-nilai kepemimpinan, Paskibra membentuk generasi muda yang memiliki rasa percaya diri, disiplin tinggi, dan tanggung jawab terhadap tugas yang diberikan."}),a.jsx(Hu,{children:"Sebagai simbol kehormatan, Paskibra menjadi inspirasi bagi generasi muda untuk mencintai tanah air dan berkontribusi dalam menjaga semangat kebangsaan. Upaya dan dedikasi mereka dalam mengibarkan bendera merah putih mengajarkan nilai patriotisme yang mendalam. Dengan semangat ini, Paskibra tidak hanya menjadi pelaksana tugas upacara, tetapi juga agen perubahan yang menanamkan rasa cinta tanah air dan persatuan di kalangan pemuda."}),a.jsxs($M,{children:[a.jsx(Ku,{src:"/images/ekskul/english/activity1.jpg"}),a.jsx(Ku,{src:"/images/ekskul/english/activity2.jpg"}),a.jsx(Ku,{src:"/images/ekskul/english/activity3.jpg"})]})]})]})]})}const IM=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,RM=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,OM=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,DM=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,BM=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,NM=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,FM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,po=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,VM=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Wu=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,UM=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,qu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,T1=d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,E1=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,HM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Ju=d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,KM=d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function GM(){const e=G();return a.jsxs(IM,{children:[a.jsx(OM,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(RM,{children:[a.jsxs(DM,{children:[a.jsx(BM,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"OSIS"}),a.jsx(NM,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/osis.jpg",alt:"OSIS"})]}),a.jsxs(T1,{children:[a.jsx(E1,{children:"Informasi Pengurus"}),a.jsxs(HM,{children:[a.jsxs(Ju,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Pembina OSIS"})}),a.jsx("h4",{children:"Pembina"}),a.jsx("p",{children:"Mrs. Sarah Johnson"}),a.jsx("p",{children:"Guru Bahasa Inggris"})]}),a.jsxs(Ju,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Ketua OSIS"})}),a.jsx("h4",{children:"Ketua"}),a.jsx("p",{children:"John Doe"}),a.jsx("p",{children:"XII RPL 1"})]}),a.jsxs(Ju,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Wakil Ketua OSIS"})}),a.jsx("h4",{children:"Wakil Ketua"}),a.jsx("p",{children:"Jane Smith"}),a.jsx("p",{children:"XI RPL 2"})]})]})]}),a.jsxs(T1,{children:[a.jsx(E1,{children:"Jadwal Latihan"}),a.jsx(KM,{children:a.jsx("p",{children:"Selasa dan Jumat"})})]}),a.jsxs(FM,{children:[a.jsxs(po,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"40+"}),a.jsx("p",{children:"Active Members"})]}),a.jsxs(po,{children:[a.jsx(Jn,{}),a.jsx("h3",{children:"2x"}),a.jsx("p",{children:"Weekly Meeting"})]}),a.jsxs(po,{children:[a.jsx(Xn,{}),a.jsx("h3",{children:"15+"}),a.jsx("p",{children:"Achievements"})]}),a.jsxs(po,{children:[a.jsx(Yn,{}),a.jsx("h3",{children:"Lab"}),a.jsx("p",{children:"Meeting Point"})]})]}),a.jsxs(VM,{children:[a.jsx(Wu,{children:"Organisasi Siswa Intra Sekolah (OSIS) adalah organisasi resmi di lingkungan sekolah yang menjadi wadah bagi siswa untuk belajar berorganisasi, mengembangkan kepemimpinan, dan berkontribusi dalam memajukan sekolah. OSIS bertujuan untuk menampung aspirasi siswa, mengadakan kegiatan yang bermanfaat, serta menciptakan lingkungan sekolah yang aktif dan harmonis. Dengan bergabung dalam OSIS, siswa dapat mengasah kemampuan komunikasi, kerja sama, dan pengambilan keputusan."}),a.jsx(Wu,{children:"OSIS memiliki berbagai program kerja yang mencakup kegiatan akademik, seni, olahraga, hingga kegiatan sosial. Beberapa di antaranya meliputi perlombaan antar kelas, peringatan hari besar nasional, bakti sosial, dan seminar motivasi. Ragam kegiatan ini tidak hanya membantu siswa menemukan minat dan bakat mereka, tetapi juga mempererat hubungan antar siswa, guru, dan seluruh komunitas sekolah."}),a.jsx(Wu,{children:"Sebagai motor penggerak kegiatan siswa, OSIS berperan penting dalam menciptakan suasana sekolah yang dinamis dan inspiratif. Program-program yang dirancang oleh OSIS tidak hanya memberi manfaat bagi siswa, tetapi juga memberikan dampak positif bagi lingkungan sekolah secara keseluruhan. Dengan semangat kolaborasi dan inovasi, OSIS menjadi pilar penting dalam membangun karakter siswa yang kreatif, bertanggung jawab, dan siap menghadapi tantangan di masa depan."}),a.jsxs(UM,{children:[a.jsx(qu,{src:"/images/ekskul/english/activity1.jpg"}),a.jsx(qu,{src:"/images/ekskul/english/activity2.jpg"}),a.jsx(qu,{src:"/images/ekskul/english/activity3.jpg"})]})]})]})]})}const WM=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,qM=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,JM=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,YM=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,XM=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,QM=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,ZM=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,mo=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,eI=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,Yu=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,tI=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Xu=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,A1=d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,$1=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,nI=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,Qu=d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,rI=d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function iI(){const e=G();return a.jsxs(WM,{children:[a.jsx(JM,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(qM,{children:[a.jsxs(YM,{children:[a.jsx(XM,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"English Club"}),a.jsx(QM,{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/english.jpg",alt:"English Club"})]}),a.jsxs(A1,{children:[a.jsx($1,{children:"Informasi Pengurus"}),a.jsxs(nI,{children:[a.jsxs(Qu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Pembina English Club"})}),a.jsx("h4",{children:"Pembina"}),a.jsx("p",{children:"Mrs. Sarah Johnson"}),a.jsx("p",{children:"Guru Bahasa Inggris"})]}),a.jsxs(Qu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Ketua English Club"})}),a.jsx("h4",{children:"Ketua"}),a.jsx("p",{children:"John Doe"}),a.jsx("p",{children:"XII RPL 1"})]}),a.jsxs(Qu,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Wakil Ketua English Club"})}),a.jsx("h4",{children:"Wakil Ketua"}),a.jsx("p",{children:"Jane Smith"}),a.jsx("p",{children:"XI RPL 2"})]})]})]}),a.jsxs(A1,{children:[a.jsx($1,{children:"Jadwal Latihan"}),a.jsx(rI,{children:a.jsx("p",{children:"Selasa dan Jumat"})})]}),a.jsxs(ZM,{children:[a.jsxs(mo,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"40+"}),a.jsx("p",{children:"Active Members"})]}),a.jsxs(mo,{children:[a.jsx(Jn,{}),a.jsx("h3",{children:"2x"}),a.jsx("p",{children:"Weekly Meeting"})]}),a.jsxs(mo,{children:[a.jsx(Xn,{}),a.jsx("h3",{children:"15+"}),a.jsx("p",{children:"Achievements"})]}),a.jsxs(mo,{children:[a.jsx(Yn,{}),a.jsx("h3",{children:"Lab"}),a.jsx("p",{children:"Meeting Point"})]})]}),a.jsxs(eI,{children:[a.jsx(Yu,{children:"English Club SMKN 1 Bulan adalah wadah bagi siswa yang ingin mengembangkan kemampuan berbahasa Inggris mereka. Dengan metode pembelajaran yang interaktif dan menyenangkan, anggota klub dilatih untuk mahir dalam speaking, listening, reading, dan writing."}),a.jsx(Yu,{children:"Program kegiatan meliputi English conversation, debate, storytelling, dan drama performance. Klub ini juga secara rutin mengadakan English Day, di mana anggota diwajibkan berkomunikasi dalam bahasa Inggris sepanjang hari."}),a.jsx(Yu,{children:"Prestasi English Club mencakup berbagai kejuaraan seperti lomba pidato bahasa Inggris, debat, dan story telling di tingkat kota hingga provinsi. Beberapa anggota juga telah berhasil meraih beasiswa untuk program pertukaran pelajar internasional."}),a.jsxs(tI,{children:[a.jsx(Xu,{src:"/images/ekskul/english/activity1.jpg",alt:"English Debate"}),a.jsx(Xu,{src:"/images/ekskul/english/activity2.jpg",alt:"Speaking Practice"}),a.jsx(Xu,{src:"/images/ekskul/english/activity3.jpg",alt:"Drama Performance"})]})]})]})]})}const aI=d.div`
  max-width: 935px;
  margin: 0 auto;
  padding: 30px 20px;
`,sI=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 18rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,oI=d.header`
  display: flex;
  gap: 80px;
  margin-bottom: 44px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`,lI=d.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,cI=d.div`
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`,uI=d.h2`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 24px;
    justify-content: center;
  }
`,dI=d.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 40px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`,Zu=d.li`
  color: white;
  font-size: 16px;
  
  span {
    font-weight: 600;
    margin-right: 5px;
  }
`,hI=d.div`
  color: white;
  
  .kelas {
    font-weight: 600;
    margin-bottom: 4px;
    font-size: 16px;
  }
  
  .bio-text {
    color: #8e8e8e;
    margin-bottom: 12px;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`,fI=d.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,pI=d.div`
  display: flex;
  justify-content: center;
  gap: 60px;
`,mI=d.button`
  background: none;
  border: none;
  color: ${e=>e.active?"#fff":"#8e8e8e"};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 15px 0;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;

  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background: ${e=>e.active?"#fff":"transparent"};
  }

  svg {
    font-size: 12px;
  }
`,gI=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  margin-top: 28px;
  
  @media (max-width: 768px) {
    gap: 3px;
  }
`,xI=d.div`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 1;
  }
`,vI=d.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
`,yI=d.div`
  display: flex;
  gap: 30px;
  color: white;
  font-weight: 600;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,bI=d.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,kI=d(E.div)`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 600px;
`,wI=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,jI=d.h2`
  font-size: 20px;
  font-weight: 600;
`,SI=d.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: #007bff;
`,PI=d.div`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
`,CI=d.div`
  margin-bottom: 20px;
`,_I=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,z1=d.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${({isLiked:e})=>e?"#ff0000":"#8e8e8e"};
  font-size: 16px;
  margin-right: 10px;

  &:hover {
    color: ${({isLiked:e})=>e?"#ff0000":"#007bff"};
  }
`,TI=d.div`
  margin-bottom: 20px;
`,EI=d.div`
  margin-bottom: 10px;
`,AI=d.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`,$I=d.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background: #007bff;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;d.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;d.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;d.div`
  margin: 0 10px;
`;d.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;d.button`
  background: ${e=>e.isFollowing?"rgba(255, 255, 255, 0.1)":"#00ff87"};
  color: ${e=>e.isFollowing?"#fff":"#1a1a2e"};
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 20px;

  &:hover {
    transform: translateY(-2px);
    background: ${e=>e.isFollowing?"rgba(255, 77, 77, 0.2)":"#00ff87"};
  }
`;function zI(){const{id:e}=Gw(),t=G(),{user:n}=At(),[r,i]=k.useState(null),[s,o]=k.useState([]),[c,l]=k.useState(!0),[u,h]=k.useState(null),[f,p]=k.useState({}),[m,x]=k.useState(""),[b,j]=k.useState({}),[y,g]=k.useState(!1),[v,S]=k.useState("posts"),[P,T]=k.useState(!1),[w,C]=k.useState(0),[_,A]=k.useState(0);k.useEffect(()=>{(async()=>{try{if((n==null?void 0:n.id)===parseInt(e)){t("/user/profile");return}const{data:F,error:q}=await I.from("akun").select("*").eq("id",e).single();if(q)throw q;const{data:N,error:oe}=await I.from("posts").select("*").eq("user_id",e).eq("category","public").order("created_at",{ascending:!1});if(oe)throw oe;i(F),o(N||[])}catch(F){console.error("Error:",F),t("/user/dashboard")}finally{l(!1)}})()},[e,n]),k.useEffect(()=>{(async()=>{if(!(!(n!=null&&n.id)||!e))try{const{data:F}=await I.from("follows").select("*").eq("follower_id",n.id).eq("following_id",e).single();T(!!F);const{count:q}=await I.from("follows").select("*",{count:"exact"}).eq("following_id",e);C(q||0);const{count:N}=await I.from("follows").select("*",{count:"exact"}).eq("follower_id",e);A(N||0)}catch(F){console.error("Error:",F)}})()},[n,e]);const L=async z=>{if(n!=null&&n.id)try{const{data:F,error:q}=await I.from("likes").select("*").eq("post_id",z).eq("user_id",n==null?void 0:n.id);if(q)throw q;if(F.length>0){const{error:N}=await I.from("likes").delete().eq("id",F[0].id);if(N)throw N}else{const{error:N}=await I.from("likes").insert([{post_id:z,user_id:n==null?void 0:n.id}]);if(N)throw N}j(N=>({...N,[z]:N[z]?N[z].filter(oe=>oe.user_id!==(n==null?void 0:n.id)):[]}))}catch(F){console.error("Error:",F)}},B=async z=>{if(z.preventDefault(),!(!(n!=null&&n.id)||!u||!m.trim())){g(!0);try{const{data:F,error:q}=await I.from("comments").insert([{post_id:u.id,user_id:n==null?void 0:n.id,content:m}]);if(q)throw q;p(N=>({...N,[u.id]:[...N[u.id]||[],F[0]]})),x("")}catch(F){console.error("Error:",F)}finally{g(!1)}}};return c?a.jsx("div",{style:{color:"white",textAlign:"center"},children:"Loading..."}):a.jsxs(aI,{children:[a.jsx(sI,{onClick:()=>t("/user/dashboard"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(oI,{children:[a.jsx(lI,{children:a.jsx("img",{src:(r==null?void 0:r.profileImage)||"https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg",alt:"Profile",onError:z=>{z.target.src="https://raw.githubusercontent.com/hfzt07/dbweb/main/pp.jpg"}})}),a.jsxs(cI,{children:[a.jsx(uI,{children:r==null?void 0:r.namaLengkap}),a.jsxs(dI,{children:[a.jsxs(Zu,{children:[a.jsx("span",{children:s.length})," posts"]}),a.jsxs(Zu,{children:[a.jsx("span",{children:w})," followers"]}),a.jsxs(Zu,{children:[a.jsx("span",{children:_})," following"]})]}),a.jsxs(hI,{children:[a.jsx("div",{className:"kelas",children:r==null?void 0:r.kelasAkun}),(r==null?void 0:r.bioAkun)&&a.jsx("div",{className:"bio-text",children:r.bioAkun})]})]})]}),a.jsxs(fI,{children:[a.jsx(pI,{children:a.jsxs(mI,{active:v==="posts",onClick:()=>S("posts"),children:[a.jsx(zy,{})," POSTS"]})}),v==="posts"&&a.jsx(gI,{children:s.map(z=>a.jsxs(xI,{onClick:()=>h(z),children:[a.jsx("img",{src:z.image_url,alt:z.title||"Post"}),a.jsx(vI,{className:"overlay",children:a.jsxs(yI,{children:[a.jsxs("span",{children:[a.jsx(ki,{})," ",(b[z.id]||[]).length]}),a.jsxs("span",{children:[a.jsx(Fa,{})," ",(f[z.id]||[]).length]})]})})]},z.id))})]}),u&&a.jsx(bI,{onClick:()=>h(null),children:a.jsxs(kI,{onClick:z=>z.stopPropagation(),initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},children:[a.jsxs(wI,{children:[a.jsx(jI,{children:u.title||"Untitled Post"}),a.jsx(SI,{onClick:()=>h(null),children:a.jsx(Et,{})})]}),a.jsx(PI,{children:a.jsx("img",{src:u.image_url,alt:u.title||"Post"})}),a.jsxs(CI,{children:[u.caption&&a.jsx("div",{className:"caption",children:u.caption}),a.jsx("div",{className:"time",children:new Date(u.created_at).toLocaleDateString("id-ID",{day:"numeric",month:"long",year:"numeric"})}),a.jsxs(_I,{children:[a.jsxs(z1,{onClick:()=>L(u.id),isLiked:(b[u.id]||[]).some(z=>z.user_id===(n==null?void 0:n.id)),children:[(b[u.id]||[]).some(z=>z.user_id===(n==null?void 0:n.id))?a.jsx(ki,{}):a.jsx(mp,{}),a.jsx("span",{children:(b[u.id]||[]).length})]}),a.jsxs(z1,{children:[a.jsx(Fa,{}),a.jsx("span",{children:(f[u.id]||[]).length})]})]})]}),a.jsx(TI,{children:(f[u.id]||[]).map(z=>a.jsxs(EI,{children:[a.jsx("span",{className:"username",children:z.akun.namaLengkap}),a.jsx("span",{className:"text",children:z.content})]},z.id))}),a.jsxs(CommentForm,{onSubmit:B,children:[a.jsx(AI,{type:"text",placeholder:"Tambahkan komentar...",value:m,onChange:z=>x(z.target.value),disabled:y}),a.jsx($I,{type:"submit",disabled:y||!m.trim(),children:a.jsx(fp,{})})]})]})})]})}const L1=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`,LI=d.div`
  margin-bottom: 40px;
`,MI=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,II=d.h1`
  font-size: 2rem;
  color: #00ff87;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 20px;
`,RI=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`,OI=d.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.1);
  }
`,DI=d.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,BI=d.div`
  padding: 20px;
`,NI=d.h3`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 10px;
`,FI=d.div`
  color: #00ff87;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,VI=d.p`
  color: #8e8e8e;
  font-size: 0.9rem;
  line-height: 1.6;
`;function UI(){const e=G(),[t,n]=k.useState([]),[r,i]=k.useState(!0);return k.useEffect(()=>{(async()=>{try{const{data:o,error:c}=await I.from("agenda").select("*").order("created_at",{ascending:!1});if(c)throw c;n(o||[])}catch(o){console.error("Error:",o)}finally{i(!1)}})()},[]),r?a.jsx(L1,{children:a.jsx("div",{style:{color:"white",textAlign:"center"},children:"Loading..."})}):a.jsxs(L1,{children:[a.jsx(MI,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsx(LI,{children:a.jsx(II,{children:"Agenda Sekolah"})}),a.jsx(RI,{children:t.map(s=>a.jsxs(OI,{children:[a.jsx(DI,{children:a.jsx("img",{src:s.gambarAgenda,alt:s.judulAgenda})}),a.jsxs(BI,{children:[a.jsx(NI,{children:s.judulAgenda}),a.jsx(FI,{children:s.jadwalAgenda}),a.jsx(VI,{children:s.deskripsiAgenda})]})]},s.id))})]})}const M1=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`,HI=d.div`
  margin-bottom: 40px;
`,KI=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,GI=d.h1`
  font-size: 2rem;
  color: #00ff87;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 20px;
`,WI=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`,qI=d.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.1);
  }
`,JI=d.div`
  width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,YI=d.div`
  padding: 20px;
`,XI=d.h3`
  color: white;
  font-size: 1.1rem;
  margin-bottom: 10px;
`,QI=d.div`
  color: #00ff87;
  font-size: 0.9rem;
  margin-bottom: 10px;
`,ZI=d.p`
  color: #8e8e8e;
  font-size: 0.9rem;
  line-height: 1.6;
`;function eR(){const e=G(),[t,n]=k.useState([]),[r,i]=k.useState(!0);return k.useEffect(()=>{(async()=>{try{const{data:o,error:c}=await I.from("berita").select("*").order("created_at",{ascending:!1});if(c)throw c;n(o||[])}catch(o){console.error("Error:",o)}finally{i(!1)}})()},[]),r?a.jsx(M1,{children:a.jsx("div",{style:{color:"white",textAlign:"center"},children:"Loading..."})}):a.jsxs(M1,{children:[a.jsx(KI,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsx(HI,{children:a.jsx(GI,{children:"Berita Sekolah"})}),a.jsx(WI,{children:t.map(s=>a.jsxs(qI,{children:[a.jsx(JI,{children:a.jsx("img",{src:s.gambarBerita,alt:s.judulBerita})}),a.jsxs(YI,{children:[a.jsx(XI,{children:s.judulBerita}),a.jsx(QI,{children:s.tanggalBerita}),a.jsx(ZI,{children:s.deskripsiBerita})]})]},s.id))})]})}const tR=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,nR=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,rR=d.button`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,iR=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,aR=d.h1`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`;d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;d.div`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;const I1=d.section`
  padding: 2rem;
  margin-bottom: 2rem;
`;d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`;d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;const sR=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,R1=d.h2`
  color: #00ff87;
  font-size: 2rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,O1=d.ul`
  list-style-type: disc;
  padding-left: 20px;
`,ut=d.li`
  color: white;
  line-height: 1.8;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;function oR(){const e=G();return a.jsxs(tR,{children:[a.jsxs(iR,{children:[a.jsxs(rR,{onClick:()=>e("/"),children:[a.jsx(te,{})," Kembali"]}),a.jsx(aR,{children:"Multimedia"})]}),a.jsxs(nR,{children:[a.jsx(sR,{children:"Program keahlian Multimedia adalah program yang membekali siswa dengan keterampilan, pengetahuan dan sikap agar kompeten dalam bidang desain grafis, fotografi, videografi, dan animasi."}),a.jsxs(I1,{children:[a.jsx(R1,{children:"Kompetensi Keahlian"}),a.jsxs(O1,{children:[a.jsx(ut,{children:"Desain Grafis"}),a.jsx(ut,{children:"Fotografi"}),a.jsx(ut,{children:"Videografi"}),a.jsx(ut,{children:"Animasi 2D dan 3D"}),a.jsx(ut,{children:"Web Design"}),a.jsx(ut,{children:"Audio Editing"})]})]}),a.jsxs(I1,{children:[a.jsx(R1,{children:"Prospek Karir"}),a.jsxs(O1,{children:[a.jsx(ut,{children:"Graphic Designer"}),a.jsx(ut,{children:"Video Editor"}),a.jsx(ut,{children:"Photographer"}),a.jsx(ut,{children:"Animator"}),a.jsx(ut,{children:"Web Designer"}),a.jsx(ut,{children:"Content Creator"})]})]})]})]})}const lR=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,cR=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,uR=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,dR=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,hR=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,fR=d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`,pR=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`,go=d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`,mR=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`,ed=d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`,gR=d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,td=d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`,D1=d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,B1=d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,xR=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,nd=d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`,vR=d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function yR(){const e=G();return a.jsxs(lR,{children:[a.jsx(uR,{onClick:()=>e("/"),whileHover:{scale:1.1},whileTap:{scale:.9},children:a.jsx(te,{})}),a.jsxs(cR,{children:[a.jsxs(dR,{children:[a.jsx(hR,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:"English Club"}),a.jsx(fR,{src:"/images/ekskul/english/main.jpg",alt:"English Club"})]}),a.jsxs(D1,{children:[a.jsx(B1,{children:"Informasi Pengurus"}),a.jsxs(xR,{children:[a.jsxs(nd,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"/images/ekskul/english/pembina.jpg",alt:"Pembina English Club"})}),a.jsx("h4",{children:"Pembina"}),a.jsx("p",{children:"Mrs. Sarah Johnson"}),a.jsx("p",{children:"Guru Bahasa Inggris"})]}),a.jsxs(nd,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"/images/ekskul/english/ketua.jpg",alt:"Ketua English Club"})}),a.jsx("h4",{children:"Ketua"}),a.jsx("p",{children:"John Doe"}),a.jsx("p",{children:"XII RPL 1"})]}),a.jsxs(nd,{children:[a.jsx("div",{className:"profile-image",children:a.jsx("img",{src:"/images/ekskul/english/wakil.jpg",alt:"Wakil Ketua English Club"})}),a.jsx("h4",{children:"Wakil Ketua"}),a.jsx("p",{children:"Jane Smith"}),a.jsx("p",{children:"XI RPL 2"})]})]})]}),a.jsxs(D1,{children:[a.jsx(B1,{children:"Jadwal Latihan"}),a.jsx(vR,{children:a.jsx("p",{children:"Selasa dan Jumat"})})]}),a.jsxs(pR,{children:[a.jsxs(go,{children:[a.jsx(Qe,{}),a.jsx("h3",{children:"40+"}),a.jsx("p",{children:"Active Members"})]}),a.jsxs(go,{children:[a.jsx(Jn,{}),a.jsx("h3",{children:"2x"}),a.jsx("p",{children:"Weekly Meeting"})]}),a.jsxs(go,{children:[a.jsx(Xn,{}),a.jsx("h3",{children:"15+"}),a.jsx("p",{children:"Achievements"})]}),a.jsxs(go,{children:[a.jsx(Yn,{}),a.jsx("h3",{children:"Lab"}),a.jsx("p",{children:"Meeting Point"})]})]}),a.jsxs(mR,{children:[a.jsx(ed,{children:"English Club SMKN 1 Bulan adalah wadah bagi siswa yang ingin mengembangkan kemampuan berbahasa Inggris mereka. Dengan metode pembelajaran yang interaktif dan menyenangkan, anggota klub dilatih untuk mahir dalam speaking, listening, reading, dan writing."}),a.jsx(ed,{children:"Program kegiatan meliputi English conversation, debate, storytelling, dan drama performance. Klub ini juga secara rutin mengadakan English Day, di mana anggota diwajibkan berkomunikasi dalam bahasa Inggris sepanjang hari."}),a.jsx(ed,{children:"Prestasi English Club mencakup berbagai kejuaraan seperti lomba pidato bahasa Inggris, debat, dan story telling di tingkat kota hingga provinsi. Beberapa anggota juga telah berhasil meraih beasiswa untuk program pertukaran pelajar internasional."}),a.jsxs(gR,{children:[a.jsx(td,{src:"/images/ekskul/english/activity1.jpg",alt:"English Debate"}),a.jsx(td,{src:"/images/ekskul/english/activity2.jpg",alt:"Speaking Practice"}),a.jsx(td,{src:"/images/ekskul/english/activity3.jpg",alt:"Drama Performance"})]})]})]})]})}const bR=d.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`,kR=d.div`
  max-width: 1200px;
  margin: 0 auto;
`,wR=d(E.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`,jR=d.div`
  text-align: center;
  margin-bottom: 4rem;
`,SR=d(E.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;d.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`;d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;d(E.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;const N1=d(E.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`;d.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`;d.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;d.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;d.div`
  background: rgba(255, 255, 255, 0.02);
  border-radius: 15px;
  padding: 2rem;
  margin: 2rem 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;d.h3`
  color: #00ff87;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;d.div`
  text-align: center;
  
  .profile-image {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 0 auto 1rem;
    overflow: hidden;
    border: 3px solid #00ff87;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    color: white;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
`;d.div`
  text-align: center;
  color: white;
  
  p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;function PR(){const e=G();return a.jsxs(bR,{children:[a.jsxs(jR,{children:[a.jsxs(wR,{onClick:()=>e("/"),children:[a.jsx(te,{})," Kembali"]}),a.jsx(SR,{children:"Rekayasa Perangkat Lunak"})]}),a.jsxs(kR,{children:[a.jsx(Description,{children:"Program keahlian Rekayasa Perangkat Lunak adalah program yang membekali siswa dengan keterampilan, pengetahuan dan sikap agar kompeten dalam pengembangan aplikasi, pemrograman, dan manajemen basis data."}),a.jsxs(N1,{children:[a.jsx(SubTitle,{children:"Kompetensi Keahlian"}),a.jsxs(List,{children:[a.jsx(ListItem,{children:"Pemrograman Web"}),a.jsx(ListItem,{children:"Pemrograman Mobile"}),a.jsx(ListItem,{children:"Basis Data"}),a.jsx(ListItem,{children:"Algoritma & Pemrograman"}),a.jsx(ListItem,{children:"Object Oriented Programming"}),a.jsx(ListItem,{children:"Software Development"})]})]}),a.jsxs(N1,{children:[a.jsx(SubTitle,{children:"Prospek Karir"}),a.jsxs(List,{children:[a.jsx(ListItem,{children:"Software Developer"}),a.jsx(ListItem,{children:"Web Developer"}),a.jsx(ListItem,{children:"Mobile Developer"}),a.jsx(ListItem,{children:"Database Administrator"}),a.jsx(ListItem,{children:"System Analyst"}),a.jsx(ListItem,{children:"Quality Assurance"})]})]})]})]})}const CR=d.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`,_R=d.div`
  margin-bottom: 40px;
`,TR=d.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 8px 16px;
  border-radius: 8px;
  color: #00ff87;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
    transform: translateX(-5px);
  }
`,ER=d.h1`
  font-size: 2rem;
  color: #00ff87;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`,AR=d.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
`,$R=d.p`
  color: #8e8e8e;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
`,F1=d.div`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
`,V1=d.h2`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 20px;
`,U1=d.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
`,dt=d.li`
  color: white;
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: rgba(0, 255, 135, 0.05);
    border-color: rgba(0, 255, 135, 0.2);
  }
`;function zR(){const e=G();return a.jsxs(CR,{children:[a.jsxs(_R,{children:[a.jsxs(TR,{onClick:()=>e("/"),children:[a.jsx(te,{})," Kembali"]}),a.jsx(ER,{children:"Bisnis Digital"})]}),a.jsxs(AR,{children:[a.jsx($R,{children:"Program keahlian Bisnis Digital adalah program yang membekali siswa dengan keterampilan, pengetahuan dan sikap agar kompeten dalam digital marketing, e-commerce, dan manajemen bisnis online."}),a.jsxs(F1,{children:[a.jsx(V1,{children:"Kompetensi Keahlian"}),a.jsxs(U1,{children:[a.jsx(dt,{children:"Digital Marketing"}),a.jsx(dt,{children:"E-commerce Management"}),a.jsx(dt,{children:"Social Media Marketing"}),a.jsx(dt,{children:"Content Marketing"}),a.jsx(dt,{children:"Business Analytics"}),a.jsx(dt,{children:"Digital Branding"})]})]}),a.jsxs(F1,{children:[a.jsx(V1,{children:"Prospek Karir"}),a.jsxs(U1,{children:[a.jsx(dt,{children:"Digital Marketing Specialist"}),a.jsx(dt,{children:"E-commerce Manager"}),a.jsx(dt,{children:"Social Media Manager"}),a.jsx(dt,{children:"Content Strategist"}),a.jsx(dt,{children:"Business Analyst"}),a.jsx(dt,{children:"Digital Brand Manager"})]})]})]})]})}function LR(){return a.jsx(GP,{children:a.jsxs("div",{className:"App",style:{background:"#1a1a2e"},children:[a.jsxs(l4,{children:[a.jsx(H,{path:"/",element:a.jsxs(a.Fragment,{children:[a.jsx(tC,{}),a.jsx(UC,{}),a.jsx(l9,{}),a.jsx(y9,{}),a.jsx(P9,{}),a.jsx($9,{})]})}),a.jsxs(H,{path:"/admin/*",element:a.jsx(K9,{}),children:[a.jsx(H,{index:!0,element:a.jsx(rT,{})}),a.jsx(H,{path:"akun",element:a.jsx(fT,{})}),a.jsx(H,{path:"news",element:a.jsx(yT,{})}),a.jsx(H,{path:"agenda",element:a.jsx(PT,{})})]}),a.jsxs(H,{path:"/user/*",element:a.jsx(FT,{}),children:[a.jsx(H,{index:!0,element:a.jsx(o1,{})}),a.jsx(H,{path:"dashboard",element:a.jsx(o1,{})}),a.jsx(H,{path:"profile",element:a.jsx(IE,{})}),a.jsx(H,{path:"search",element:a.jsx(qE,{})}),a.jsx(H,{path:"profile/:id",element:a.jsx(zI,{})}),a.jsx(H,{path:"settings",element:a.jsx(aA,{})}),a.jsx(H,{path:"gallery",element:a.jsx(JA,{})}),a.jsx(H,{path:"posting",element:a.jsx(xA,{})})]}),a.jsxs(H,{path:"/moderator/*",element:a.jsx(PA,{}),children:[a.jsx(H,{path:"profile",element:a.jsx($A,{})}),a.jsx(H,{path:"posting-berita",element:a.jsx(i$,{})})]}),a.jsx(H,{path:"/school-detail",element:a.jsx(p$,{})}),a.jsx(H,{path:"/kepsek-detail",element:a.jsx(j$,{})}),a.jsx(H,{path:"/visi-misi",element:a.jsx($$,{})}),a.jsx(H,{path:"/akademik-detail",element:a.jsx(N$,{})}),a.jsx(H,{path:"/karakter-detail",element:a.jsx(J$,{})}),a.jsx(H,{path:"/ekstrakurikuler-detail",element:a.jsx(iz,{})}),a.jsx(H,{path:"/perpus-detail",element:a.jsx(pz,{})}),a.jsx(H,{path:"/lab-komputer-detail",element:a.jsx(Sz,{})}),a.jsx(H,{path:"/studio-detail",element:a.jsx(Mz,{})}),a.jsx(H,{path:"/jaringan-detail",element:a.jsx(Hz,{})}),a.jsx(H,{path:"/aula-detail",element:a.jsx(eL,{})}),a.jsx(H,{path:"/lapangan-detail",element:a.jsx(uL,{})}),a.jsx(H,{path:"/kantin-detail",element:a.jsx(bL,{})}),a.jsx(H,{path:"/taman-detail",element:a.jsx(AL,{})}),a.jsx(H,{path:"/internet-detail",element:a.jsx(NL,{})}),a.jsx(H,{path:"/pramuka",element:a.jsx(QL,{})}),a.jsx(H,{path:"/futsal",element:a.jsx(uM,{})}),a.jsx(H,{path:"/pmr",element:a.jsx(wM,{})}),a.jsx(H,{path:"/paskibra",element:a.jsx(MM,{})}),a.jsx(H,{path:"/osis",element:a.jsx(GM,{})}),a.jsx(H,{path:"/english-club",element:a.jsx(iI,{})}),a.jsx(H,{path:"/agenda",element:a.jsx(UI,{})}),a.jsx(H,{path:"/berita",element:a.jsx(eR,{})}),a.jsx(H,{path:"/keahlian/mm",element:a.jsx(oR,{})}),a.jsx(H,{path:"/keahlian/tkj",element:a.jsx(yR,{})}),a.jsx(H,{path:"/keahlian/rpl",element:a.jsx(PR,{})}),a.jsx(H,{path:"/keahlian/bd",element:a.jsx(zR,{})})]}),a.jsx(B9,{})]})})}id.createRoot(document.getElementById("root")).render(a.jsx(Ge.StrictMode,{children:a.jsx(g4,{children:a.jsx(LR,{})})}));export{wl as g};
