var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t,t.exports),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{(function(){function t(){if(b=!1,ie){var t=e.unstable_now();se=t;var n=!0;try{a:{y=!1,ee&&(ee=!1,ne(ae),ae=-1),v=!0;var a=_;try{b:{for(o(t),g=r(p);g!==null&&!(g.expirationTime>t&&c());){var u=g.callback;if(typeof u==`function`){g.callback=null,_=g.priorityLevel;var d=u(g.expirationTime<=t);if(t=e.unstable_now(),typeof d==`function`){g.callback=d,o(t),n=!0;break b}g===r(p)&&i(p),o(t)}else i(p);g=r(p)}if(g!==null)n=!0;else{var f=r(m);f!==null&&l(s,f.startTime-t),n=!1}}break a}finally{g=null,_=a,v=!1}n=void 0}}finally{n?ce():ie=!1}}}function n(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,i=e[r];if(0<a(i,t))e[r]=t,e[n]=i,n=r;else break a}}function r(e){return e.length===0?null:e[0]}function i(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>a(c,n))l<i&&0>a(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<i&&0>a(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}function o(e){for(var t=r(m);t!==null;){if(t.callback===null)i(m);else if(t.startTime<=e)i(m),t.sortIndex=t.expirationTime,n(p,t);else break;t=r(m)}}function s(e){if(ee=!1,o(e),!y){if(r(p)!==null)y=!0,ie||(ie=!0,ce());else{var t=r(m);t!==null&&l(s,t.startTime-e)}}}function c(){return b?!0:!(e.unstable_now()-se<oe)}function l(t,n){ae=te(function(){t(e.unstable_now())},n)}if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()),e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();e.unstable_now=function(){return d.now()-f}}var p=[],m=[],h=1,g=null,_=3,v=!1,y=!1,ee=!1,b=!1,te=typeof setTimeout==`function`?setTimeout:null,ne=typeof clearTimeout==`function`?clearTimeout:null,re=typeof setImmediate<`u`?setImmediate:null,ie=!1,ae=-1,oe=5,se=-1;if(typeof re==`function`)var ce=function(){re(t)};else if(typeof MessageChannel<`u`){var le=new MessageChannel,ue=le.port2;le.port1.onmessage=t,ce=function(){ue.postMessage(null)}}else ce=function(){te(t,0)};e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):oe=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return _},e.unstable_next=function(e){switch(_){case 1:case 2:case 3:var t=3;break;default:t=_}var n=_;_=t;try{return e()}finally{_=n}},e.unstable_requestPaint=function(){b=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=_;_=e;try{return t()}finally{_=n}},e.unstable_scheduleCallback=function(t,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,t){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=a+c,t={id:h++,callback:i,priorityLevel:t,startTime:a,expirationTime:c,sortIndex:-1},a>o?(t.sortIndex=a,n(m,t),r(p)===null&&t===r(m)&&(ee?(ne(ae),ae=-1):ee=!0,l(s,a-o))):(t.sortIndex=c,n(p,t),y||v||(y=!0,ie||(ie=!0,ce()))),t},e.unstable_shouldYield=c,e.unstable_wrapCallback=function(e){var t=_;return function(){var n=_;_=t;try{return e.apply(this,arguments)}finally{_=n}}},typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),u=o(((e,t)=>{t.exports=l()})),d=o(((e,t)=>{(function(){function n(e,t){Object.defineProperty(a.prototype,e,{get:function(){console.warn(`%s(...) is deprecated in plain JavaScript React classes. %s`,t[0],t[1])}})}function r(e){return typeof e!=`object`||!e?null:(e=Oe&&e[Oe]||e[`@@iterator`],typeof e==`function`?e:null)}function i(e,t){e=(e=e.constructor)&&(e.displayName||e.name)||`ReactClass`;var n=e+`.`+t;ke[n]||(console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,e),ke[n]=!0)}function a(e,t,n){this.props=e,this.context=t,this.refs=Me,this.updater=n||Ae}function o(){}function s(e,t,n){this.props=e,this.context=t,this.refs=Me,this.updater=n||Ae}function c(){}function l(e){return``+e}function u(e){try{l(e);var t=!1}catch{t=!0}if(t){t=console;var n=t.error,r=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;return n.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,r),l(e)}}function d(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Fe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case _e:return`Fragment`;case S:return`Profiler`;case ve:return`StrictMode`;case Se:return`Suspense`;case Ce:return`SuspenseList`;case Ee:return`Activity`;case De:return`ViewTransition`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case ge:return`Portal`;case be:return e.displayName||`Context`;case ye:return(e._context.displayName||`Context`)+`.Consumer`;case xe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case we:return t=e.displayName||null,t===null?d(e.type)||`Memo`:t;case Te:t=e._payload,e=e._init;try{return d(e(t))}catch{}}return null}function f(e){if(e===_e)return`<>`;if(typeof e==`object`&&e&&e.$$typeof===Te)return`<...>`;try{var t=d(e);return t?`<`+t+`>`:`<...>`}catch{return`<...>`}}function p(){var e=C.A;return e===null?null:e.getOwner()}function m(){return Error(`react-stack-top-frame`)}function h(e){if(Ie.call(e,`key`)){var t=Object.getOwnPropertyDescriptor(e,`key`).get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function g(e,t){function n(){w||(w=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function _(){var e=d(this.type);return ze[e]||(ze[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e}function v(e,t,n,r,i,a){var o=n.ref;return e={$$typeof:he,type:e,key:t,props:n,_owner:r},(o===void 0?null:o)===null?Object.defineProperty(e,"ref",{enumerable:!1,value:null}):Object.defineProperty(e,"ref",{enumerable:!1,get:_}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:a}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function y(e,t){return t=v(e.type,t,e.props,e._owner,e._debugStack,e._debugTask),e._store&&(t._store.validated=e._store.validated),t}function ee(e){b(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===Te&&(e._payload.status===`fulfilled`?b(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function b(e){return typeof e==`object`&&!!e&&e.$$typeof===he}function te(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}function ne(e,t){return typeof e==`object`&&e&&e.key!=null?(u(e.key),te(``+e.key)):t.toString(36)}function re(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(c,c):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ie(e,t,n,i,a){var o=typeof e;(o===`undefined`||o===`boolean`)&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case`bigint`:case`string`:case`number`:s=!0;break;case`object`:switch(e.$$typeof){case he:case ge:s=!0;break;case Te:return s=e._init,ie(s(e._payload),t,n,i,a)}}if(s){s=e,a=a(s);var c=i===``?`.`+ne(s,0):i;return Pe(a)?(n=``,c!=null&&(n=c.replace(Ue,`$&/`)+`/`),ie(a,t,n,``,function(e){return e})):a!=null&&(b(a)&&(a.key!=null&&(s&&s.key===a.key||u(a.key)),n=y(a,n+(a.key==null||s&&s.key===a.key?``:(``+a.key).replace(Ue,`$&/`)+`/`)+c),i!==``&&s!=null&&b(s)&&s.key==null&&s._store&&!s._store.validated&&(n._store.validated=2),a=n),t.push(a)),1}if(s=0,c=i===``?`.`:i+`:`,Pe(e))for(var l=0;l<e.length;l++)i=e[l],o=c+ne(i,l),s+=ie(i,t,n,o,a);else if(l=r(e),typeof l==`function`)for(l===e.entries&&(He||console.warn(`Using Maps as children is not supported. Use an array of keyed ReactElements instead.`),He=!0),e=l.call(e),l=0;!(i=e.next()).done;)i=i.value,o=c+ne(i,l++),s+=ie(i,t,n,o,a);else if(o===`object`){if(typeof e.then==`function`)return ie(re(e),t,n,i,a);throw t=String(e),Error(`Objects are not valid as a React child (found: `+(t===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:t)+`). If you meant to render a collection of children, use an array instead.`)}return s}function ae(e,t,n){if(e==null)return e;var r=[],i=0;return ie(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function oe(e){if(e._status===-1){var t=null,n=null,r=e._ioInfo;r!=null&&(r.start=r.end=performance.now(),r.value=new Promise(function(e,r){t=e,n=r})),r=e._result;var i=r();if(i.then(function(n){if(e._status===0||e._status===-1){e._status=1,e._result=n;var r=e._ioInfo;if(r!=null){r.end=performance.now();var a=n?.default;t(a),r.value.status=`fulfilled`,r.value.value=a}i.status===void 0&&(i.status=`fulfilled`,i.value=n)}},function(t){if(e._status===0||e._status===-1){e._status=2,e._result=t;var r=e._ioInfo;r!=null&&(r.end=performance.now(),r.value.then(c,c),n(t),r.value.status=`rejected`,r.value.reason=t),i.status===void 0&&(i.status=`rejected`,i.reason=t)}}),r=e._ioInfo,r!=null){var a=i.displayName;typeof a==`string`&&(r.name=a)}e._status===-1&&(e._status=0,e._result=i)}if(e._status===1)return r=e._result,r===void 0&&console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,r),`default`in r||console.error(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,r),r.default;throw e._result}function se(){var e=C.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}function ce(){C.asyncTransitions--}function le(e){var t=C.T,n={};n.types=t===null?null:t.types,n._updatedFibers=new Set,C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&(C.asyncTransitions++,r.then(ce,ce),r.then(c,We))}catch(e){We(e)}finally{t===null&&n._updatedFibers&&(e=n._updatedFibers.size,n._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`)),t!==null&&n.types!==null&&(t.types!==null&&t.types!==n.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),t.types=n.types),C.T=t}}function ue(e){var t=C.T;if(t!==null){var n=t.types;n===null?t.types=[e]:n.indexOf(e)===-1&&n.push(e)}else C.asyncTransitions===0&&console.error("addTransitionType can only be called inside a `startTransition()` callback. It must be associated with a specific Transition."),le(ue.bind(null,e))}function de(e){if(Ke===null)try{var n=(`require`+Math.random()).slice(0,7);Ke=(t&&t[n]).call(t,`timers`).setImmediate}catch{Ke=function(e){!1===Ge&&(Ge=!0,typeof MessageChannel>`u`&&console.error(`This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.`));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}return Ke(e)}function fe(e){return 1<e.length&&typeof AggregateError==`function`?AggregateError(e):e[0]}function pe(e,t){t!==qe-1&&console.error(`You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. `),qe=t}function x(e,t,n){var r=C.actQueue;if(r!==null){if(r.length!==0)try{me(r),de(function(){return x(e,t,n)});return}catch(e){C.thrownErrors.push(e)}else C.actQueue=null}0<C.thrownErrors.length?(r=fe(C.thrownErrors),C.thrownErrors.length=0,n(r)):t(e)}function me(e){if(!Ye){Ye=!0;var t=0;try{for(;t<e.length;t++){var n=e[t];do{C.didUsePromise=!1;var r=n(!1);if(r!==null){if(C.didUsePromise){e[t]=n,e.splice(0,t);return}n=r}else break}while(1)}e.length=0}catch(n){e.splice(0,t+1),C.thrownErrors.push(n)}finally{Ye=!1}}}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var he=Symbol.for(`react.transitional.element`),ge=Symbol.for(`react.portal`),_e=Symbol.for(`react.fragment`),ve=Symbol.for(`react.strict_mode`),S=Symbol.for(`react.profiler`),ye=Symbol.for(`react.consumer`),be=Symbol.for(`react.context`),xe=Symbol.for(`react.forward_ref`),Se=Symbol.for(`react.suspense`),Ce=Symbol.for(`react.suspense_list`),we=Symbol.for(`react.memo`),Te=Symbol.for(`react.lazy`),Ee=Symbol.for(`react.activity`),De=Symbol.for(`react.view_transition`),Oe=Symbol.iterator,ke={},Ae={isMounted:function(){return!1},enqueueForceUpdate:function(e){i(e,`forceUpdate`)},enqueueReplaceState:function(e){i(e,`replaceState`)},enqueueSetState:function(e){i(e,`setState`)}},je=Object.assign,Me={};Object.freeze(Me),a.prototype.isReactComponent={},a.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},a.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};var Ne={isMounted:[`isMounted`,`Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.`],replaceState:[`replaceState`,`Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).`]};for(Ze in Ne)Ne.hasOwnProperty(Ze)&&n(Ze,Ne[Ze]);o.prototype=a.prototype,Ne=s.prototype=new o,Ne.constructor=s,je(Ne,a.prototype),Ne.isPureReactComponent=!0;var Pe=Array.isArray,Fe=Symbol.for(`react.client.reference`),C={H:null,A:null,T:null,S:null,actQueue:null,asyncTransitions:0,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1,didUsePromise:!1,thrownErrors:[],getCurrentStack:null,recentlyCreatedOwnerStacks:0},Ie=Object.prototype.hasOwnProperty,Le=console.createTask?console.createTask:function(){return null};Ne={react_stack_bottom_frame:function(e){return e()}};var w,Re,ze={},Be=Ne.react_stack_bottom_frame.bind(Ne,m)(),Ve=Le(f(m)),He=!1,Ue=/\/+/g,We=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Ge=!1,Ke=null,qe=0,Je=!1,Ye=!1,Xe=typeof queueMicrotask==`function`?function(e){queueMicrotask(function(){return queueMicrotask(e)})}:de;Ne=Object.freeze({__proto__:null,c:function(e){return se().useMemoCache(e)}});var Ze={map:ae,forEach:function(e,t,n){ae(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ae(e,function(){t++}),t},toArray:function(e){return ae(e,function(e){return e})||[]},only:function(e){if(!b(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=Ee,e.Children=Ze,e.Component=a,e.Fragment=_e,e.Profiler=S,e.PureComponent=s,e.StrictMode=ve,e.Suspense=Se,e.ViewTransition=De,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME=Ne,e.act=function(e){var t=C.actQueue,n=qe;qe++;var r=C.actQueue=t===null?[]:t,i=!1;try{var a=e()}catch(e){C.thrownErrors.push(e)}if(0<C.thrownErrors.length)throw pe(t,n),e=fe(C.thrownErrors),C.thrownErrors.length=0,e;if(typeof a==`object`&&a&&typeof a.then==`function`){var o=a;return Xe(function(){i||Je||(Je=!0,console.error(`You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);`))}),{then:function(e,a){i=!0,o.then(function(i){if(pe(t,n),n===0){try{me(r),de(function(){return x(i,e,a)})}catch(e){C.thrownErrors.push(e)}if(0<C.thrownErrors.length){var o=fe(C.thrownErrors);C.thrownErrors.length=0,a(o)}}else e(i)},function(e){pe(t,n),0<C.thrownErrors.length&&(e=fe(C.thrownErrors),C.thrownErrors.length=0),a(e)})}}}var s=a;if(pe(t,n),n===0&&(me(r),r.length!==0&&Xe(function(){i||Je||(Je=!0,console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"))}),C.actQueue=null),0<C.thrownErrors.length)throw e=fe(C.thrownErrors),C.thrownErrors.length=0,e;return{then:function(e,t){i=!0,n===0?(C.actQueue=r,de(function(){return x(s,e,t)})):e(s)}}},e.addTransitionType=ue,e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.captureOwnerStack=function(){var e=C.getCurrentStack;return e===null?null:e()},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=je({},e.props),i=e.key,a=e._owner;if(t!=null){var o;a:{if(Ie.call(t,`ref`)&&(o=Object.getOwnPropertyDescriptor(t,`ref`).get)&&o.isReactWarning){o=!1;break a}o=t.ref!==void 0}for(s in o&&(a=p()),h(t)&&(u(t.key),i=``+t.key),t)!Ie.call(t,s)||s===`key`||s===`__self`||s===`__source`||s===`ref`&&t.ref===void 0||(r[s]=t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){o=Array(s);for(var c=0;c<s;c++)o[c]=arguments[c+2];r.children=o}for(r=v(e.type,i,r,a,e._debugStack,e._debugTask),i=2;i<arguments.length;i++)ee(arguments[i]);return r},e.createContext=function(e){return e={$$typeof:be,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:ye,_context:e},e._currentRenderer=null,e._currentRenderer2=null,e},e.createElement=function(e,t,n){for(var r=2;r<arguments.length;r++)ee(arguments[r]);var i;r={};var a=null;if(t!=null)for(i in Re||!(`__self`in t)||`key`in t||(Re=!0,console.warn(`Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform`)),h(t)&&(u(t.key),a=``+t.key),t)Ie.call(t,i)&&i!==`key`&&i!==`__self`&&i!==`__source`&&(r[i]=t[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];Object.freeze&&Object.freeze(s),r.children=s}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return a&&g(r,typeof e==`function`?e.displayName||e.name||`Unknown`:e),(i=1e4>C.recentlyCreatedOwnerStacks++)?(s=Error.stackTraceLimit,Error.stackTraceLimit=10,o=Error(`react-stack-top-frame`),Error.stackTraceLimit=s):o=Be,v(e,a,r,p(),o,i?Le(f(e)):Ve)},e.createRef=function(){var e={current:null};return Object.seal(e),e},e.forwardRef=function(e){e!=null&&e.$$typeof===we?console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):typeof e==`function`?e.length!==0&&e.length!==2&&console.error(`forwardRef render functions accept exactly two parameters: props and ref. %s`,e.length===1?`Did you forget to use the ref parameter?`:`Any additional parameter will be undefined.`):console.error(`forwardRef requires a render function but was given %s.`,e===null?`null`:typeof e),e!=null&&e.defaultProps!=null&&console.error(`forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?`);var t={$$typeof:xe,render:e},n;return Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t,e.name||e.displayName||(Object.defineProperty(e,"name",{value:t}),e.displayName=t)}}),t},e.isValidElement=b,e.lazy=function(e){e={_status:-1,_result:e};var t={$$typeof:Te,_payload:e,_init:oe},n={name:`lazy`,start:-1,end:-1,value:null,owner:null,debugStack:Error(`react-stack-top-frame`),debugTask:console.createTask?console.createTask(`lazy()`):null};return e._ioInfo=n,t._debugInfo=[{awaited:n}],t},e.memo=function(e,t){e??console.error(`memo: The first argument must be a component. Instead received: %s`,e===null?`null`:typeof e),t={$$typeof:we,type:e,compare:t===void 0?null:t};var n;return Object.defineProperty(t,"displayName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(t){n=t,e.name||e.displayName||(Object.defineProperty(e,"name",{value:t}),e.displayName=t)}}),t},e.startTransition=le,e.unstable_useCacheRefresh=function(){return se().useCacheRefresh()},e.use=function(e){return se().use(e)},e.useActionState=function(e,t,n){return se().useActionState(e,t,n)},e.useCallback=function(e,t){return se().useCallback(e,t)},e.useContext=function(e){var t=se();return e.$$typeof===ye&&console.error(`Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?`),t.useContext(e)},e.useDebugValue=function(e,t){return se().useDebugValue(e,t)},e.useDeferredValue=function(e,t){return se().useDeferredValue(e,t)},e.useEffect=function(e,t){return e??console.warn(`React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?`),se().useEffect(e,t)},e.useEffectEvent=function(e){return se().useEffectEvent(e)},e.useId=function(){return se().useId()},e.useImperativeHandle=function(e,t,n){return se().useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return e??console.warn(`React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?`),se().useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return e??console.warn(`React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?`),se().useLayoutEffect(e,t)},e.useMemo=function(e,t){return se().useMemo(e,t)},e.useOptimistic=function(e,t){return se().useOptimistic(e,t)},e.useReducer=function(e,t,n){return se().useReducer(e,t,n)},e.useRef=function(e){return se().useRef(e)},e.useState=function(e){return se().useState(e)},e.useSyncExternalStore=function(e,t,n){return se().useSyncExternalStore(e,t,n)},e.useTransition=function(){return se().useTransition()},e.version=`19.3.1`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{(function(){function t(){}function n(e){return``+e}function r(e,t,r){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;if(i==null)i=null;else if(i===p)i=p;else{try{n(i);var a=!1}catch{a=!0}a&&(console.error(`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,typeof Symbol==`function`&&Symbol.toStringTag&&i[Symbol.toStringTag]||i.constructor.name||`Object`),n(i)),i=``+i}return{$$typeof:u,key:i,children:e,containerInfo:t,implementation:r}}function i(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}function a(e){return e===null?"`null`":e===void 0?"`undefined`":e===``?`an empty string`:`something with type "`+typeof e+`"`}function o(e){return e===null?"`null`":e===void 0?"`undefined`":e===``?`an empty string`:typeof e==`string`?JSON.stringify(e):typeof e==`number`?"`"+e+"`":`something with type "`+typeof e+`"`}function s(){var e=m.H;return e===null&&console.error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`),e}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var c=f(),l={d:{f:t,r:function(){throw Error(`Invalid form element. requestFormReset must be passed a form that was rendered by React.`)},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},u=Symbol.for(`react.portal`),d=Symbol.for(`react.recoverable`),p=Symbol.for(`react.optimistic_key`),m=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;typeof Map==`function`&&Map.prototype!=null&&typeof Map.prototype.forEach==`function`&&typeof Set==`function`&&Set.prototype!=null&&typeof Set.prototype.clear==`function`&&typeof Set.prototype.forEach==`function`||console.error(`React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills`),e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,e.browser=function(e){return{$$typeof:d,_reason:e}},e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(`Target container is not a DOM element.`);return r(e,t,null,n)},e.flushSync=function(e){var t=m.T,n=l.p;try{if(m.T=null,l.p=2,e)return e()}finally{m.T=t,l.p=n,l.d.f()&&console.error(`flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task.`)}},e.preconnect=function(e,t){typeof e==`string`&&e?t!=null&&typeof t!=`object`?console.error("ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",o(t)):t!=null&&typeof t.crossOrigin!=`string`&&console.error("ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",a(t.crossOrigin)):console.error("ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e)),typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,l.d.C(e,t))},e.prefetchDNS=function(e){if(typeof e!=`string`||!e)console.error("ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e));else if(1<arguments.length){var t=arguments[1];typeof t==`object`&&t.hasOwnProperty(`crossOrigin`)?console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",o(t)):console.error("ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",o(t))}typeof e==`string`&&l.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&e?typeof t!=`object`||!t?console.error("ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",o(t)):t.as!==`style`&&t.as!==`script`&&console.error('ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',o(t.as)):console.error("ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",a(e)),typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=i(n,t.crossOrigin),s=typeof t.integrity==`string`?t.integrity:void 0,c=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?l.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:s,fetchPriority:c}):n===`script`&&l.d.X(e,{crossOrigin:r,integrity:s,fetchPriority:c,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){var n=``;if(typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),t!==void 0&&typeof t!=`object`?n+=" The `options` argument encountered was "+a(t)+`.`:t&&`as`in t&&t.as!==`script`&&(n+=" The `as` option encountered was "+o(t.as)+`.`),n)console.error("ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",n);else switch(n=t&&typeof t.as==`string`?t.as:`script`,n){case`script`:break;default:n=o(n),console.error('ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',n,e)}typeof e==`string`&&(typeof t==`object`&&t?(t.as==null||t.as===`script`)&&(n=i(t.as,t.crossOrigin),l.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})):t??l.d.M(e))},e.preload=function(e,t){var n=``;if(typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),typeof t!=`object`||!t?n+=" The `options` argument encountered was "+a(t)+`.`:typeof t.as==`string`&&t.as||(n+=" The `as` option encountered was "+a(t.as)+`.`),n&&console.error('ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',n),typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){n=t.as;var r=i(n,t.crossOrigin);l.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){var n=``;typeof e==`string`&&e||(n+=" The `href` argument encountered was "+a(e)+`.`),t!==void 0&&typeof t!=`object`?n+=" The `options` argument encountered was "+a(t)+`.`:t&&`as`in t&&typeof t.as!=`string`&&(n+=" The `as` option encountered was "+a(t.as)+`.`),n&&console.error('ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',n),typeof e==`string`&&(t?(n=i(t.as,t.crossOrigin),l.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0})):l.d.m(e))},e.requestFormReset=function(e){l.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s().useFormState(e,t,n)},e.useFormStatus=function(){return s().useHostTransitionStatus()},e.version=`19.3.1`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),m=o(((e,t)=>{t.exports=p()})),h=o((e=>{(function(){function t(e,t){for(e=e.memoizedState;e!==null&&0<t;)e=e.next,t--;return e}function n(e,t,r,i){if(r>=t.length)return i;var a=t[r],o=Hm(e)?e.slice():U({},e);return o[a]=n(e[a],t,r+1,i),o}function r(e,t,n){if(t.length!==n.length)console.warn(`copyWithRename() expects paths of the same length`);else{for(var r=0;r<n.length-1;r++)if(t[r]!==n[r]){console.warn(`copyWithRename() expects paths to be the same except for the deepest key`);return}return i(e,t,n,0)}}function i(e,t,n,r){var a=t[r],o=Hm(e)?e.slice():U({},e);return r+1===t.length?(o[n[r]]=o[a],Hm(o)?o.splice(a,1):delete o[a]):o[a]=i(e[a],t,n,r+1),o}function a(e,t,n){var r=t[n],i=Hm(e)?e.slice():U({},e);return n+1===t.length?(Hm(i)?i.splice(r,1):delete i[r],i):(i[r]=a(e[r],t,n+1),i)}function o(){return!1}function s(){return null}function c(){console.error(`Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks`)}function l(){console.error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`)}function d(){}function p(){}function h(e){var t=[];return e.forEach(function(e){t.push(e)}),t.sort().join(`, `)}function g(e,t,n,r){return new Dr(e,t,n,r)}function _(e,t){e.context===Iv&&(Gp(e.current,2,t,e,null,null),tu())}function v(e,t){if(Lv!==null){var n=t.staleFamilies;t=t.updatedFamilies,Mu(),Er(e.current,t,n),tu()}}function y(e){Lv=e}function ee(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function b(e){for(var t=e,n=t;n&&!n.alternate;)t=n,t.flags&4098&&(e=t.return),n=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function te(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ne(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function re(e){if(b(e)!==e)throw Error(`Unable to find node on an unmounted component.`)}function ie(e){var t=e.alternate;if(!t){if(t=b(e),t===null)throw Error(`Unable to find node on an unmounted component.`);return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return re(i),e;if(a===r)return re(i),t;a=a.sibling}throw Error(`Unable to find node on an unmounted component.`)}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o)throw Error(`Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.`)}}if(n.alternate!==r)throw Error(`Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.`)}if(n.tag!==3)throw Error(`Unable to find node on an unmounted component.`);return n.stateNode.current===n?e:t}function ae(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ae(e),t!==null)return t;e=e.sibling}return null}function oe(e,t,n,r,i){se(e.child,!1,t,n,r,i)}function se(e,t,n,r,i,a){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&n(e,r,i,a)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&se(e.child,t,n,r,i,a))return!0;e=e.sibling}return!1}function ce(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function le(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),e.tag!==3&&e.tag!==5&&e.tag!==27);)e=e.return;return t}function ue(e){var t=[null,null],n=ce(e);return n===null||de(t,e,n.child,{foundSelf:!1}),t}function de(e,t,n,r){for(;n!==null;){if(n===t)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return e[1]=n,!0;e[0]=n}else if((n.tag!==22||n.memoizedState===null)&&de(e,t,n.child,r))return!0;n=n.sibling}return!1}function fe(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(`Expected to find a host node. This is a bug in React.`)}}function pe(e,t,n){return e===n||e===t&&(bm=e,!0)}function x(e,t,n){return e===n?(xm=e,!1):e===t&&(xm!==null&&(bm=e),!0)}function me(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function he(e,t,n){for(var r=0,i=e;i;i=n(i))r++;i=0;for(var a=t;a;a=n(a))i++;for(;0<r-i;)e=n(e),r--;for(;0<i-r;)t=n(t),i--;for(;r--;){if(e===t||t!==null&&e===t.alternate)return e;e=n(e),t=n(t)}return null}function ge(e){return typeof e!=`object`||!e?null:(e=Bm&&e[Bm]||e[`@@iterator`],typeof e==`function`?e:null)}function _e(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===Vm?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case Tm:return`Fragment`;case Dm:return`Profiler`;case Em:return`StrictMode`;case jm:return`Suspense`;case Mm:return`SuspenseList`;case Fm:return`Activity`;case Rm:return`ViewTransition`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case wm:return`Portal`;case km:return e.displayName||`Context`;case Om:return(e._context.displayName||`Context`)+`.Consumer`;case Am:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case Nm:return t=e.displayName||null,t===null?_e(e.type)||`Memo`:t;case Pm:t=e._payload,e=e._init;try{return _e(e(t))}catch{}}return null}function ve(e){return typeof e.tag==`number`?S(e):typeof e.name==`string`?e.name:null}function S(e){var t=e.type;switch(e.tag){case 31:return`Activity`;case 24:return`Cache`;case 9:return(t._context.displayName||`Context`)+`.Consumer`;case 10:return t.displayName||`Context`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 26:case 27:case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return _e(t);case 8:return t===Em?`StrictMode`:`Mode`;case 22:if(e.return!==null)return S(e.return);break;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 30:return`ViewTransition`;case 1:case 0:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t;break;case 29:if(t=e._debugInfo,t!=null){for(var n=t.length-1;0<=n;n--)if(typeof t[n].name==`string`)return t[n].name}if(e.return!==null)return S(e.return)}return null}function ye(e){return{current:e}}function be(e,t){0>qm?console.error(`Unexpected pop.`):(t!==Km[qm]&&console.error(`Unexpected Fiber popped.`),e.current=Gm[qm],Gm[qm]=null,Km[qm]=null,qm--)}function xe(e,t,n){qm++,Gm[qm]=e.current,Km[qm]=n,e.current=t}function Se(e){return e===null&&console.error(`Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.`),e}function Ce(e,t){xe(Xm,t,e),xe(Ym,e,e),xe(Jm,null,e);var n=t.nodeType;switch(n){case 9:case 11:n=n===9?`#document`:`#fragment`,t=(t=t.documentElement)&&(t=t.namespaceURI)?Ud(t):_T;break;default:if(n=t.tagName,t=t.namespaceURI)t=Ud(t),t=Wd(t,n);else switch(n){case`svg`:t=vT;break;case`math`:t=yT;break;default:t=_T}}n=n.toLowerCase(),n=Kt(null,n),n={context:t,ancestorInfo:n},be(Jm,e),xe(Jm,n,e)}function we(e){be(Jm,e),be(Ym,e),be(Xm,e)}function Te(){return Se(Jm.current)}function Ee(e){var t=e.memoizedState;t!==null&&($T._currentValue=t.memoizedState,xe(Zm,e,e)),t=Se(Jm.current);var n=e.type,r=Wd(t.context,n);n=Kt(t.ancestorInfo,n),r={context:r,ancestorInfo:n},t!==r&&(xe(Ym,e,e),xe(Jm,r,e))}function De(e){Ym.current===e&&(be(Jm,e),be(Ym,e)),Zm.current===e&&(be(Zm,e),$T._currentValue=QT)}function Oe(){}function ke(){if(Qm===0){$m=console.log,eh=console.info,th=console.warn,nh=console.error,rh=console.group,ih=console.groupCollapsed,ah=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Oe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Qm++}function Ae(){if(Qm--,Qm===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:U({},e,{value:$m}),info:U({},e,{value:eh}),warn:U({},e,{value:th}),error:U({},e,{value:nh}),group:U({},e,{value:rh}),groupCollapsed:U({},e,{value:ih}),groupEnd:U({},e,{value:ah})})}0>Qm&&console.error(`disabledDepth fell below zero. This is a bug in React. Please file an issue.`)}function je(e){var t=Error.prepareStackTrace;if(Error.prepareStackTrace=void 0,e=e.stack,Error.prepareStackTrace=t,e.startsWith(`Error: react-stack-top-frame
`)&&(e=e.slice(29)),t=e.indexOf(`
`),t!==-1&&(e=e.slice(t+1)),t=e.indexOf(`react_stack_bottom_frame`),t!==-1&&(t=e.lastIndexOf(`
`,t)),t!==-1)e=e.slice(0,t);else return``;return e}function Me(e){if(oh===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);oh=t&&t[1]||``,sh=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+oh+e+sh}function Ne(e,t){if(!e||ch)return``;var n=lh.get(e);if(n!==void 0)return n;ch=!0,n=Error.prepareStackTrace,Error.prepareStackTrace=void 0;var r=null;r=W.H,W.H=null,ke();try{var i={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}n=!1;try{var i=Object.getOwnPropertyDescriptor(e.prototype,`props`);Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),n=!0,new e}finally{n&&(i===void 0?delete e.prototype.props:Object.defineProperty(e.prototype,"props",i))}}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var a=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,`name`);a&&a.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var o=i.DetermineComponentFrameRoot(),s=o[0],c=o[1];if(s&&c){var l=s.split(`
`),u=c.split(`
`);for(o=a=0;a<l.length&&!l[a].includes(`DetermineComponentFrameRoot`);)a++;for(;o<u.length&&!u[o].includes(`DetermineComponentFrameRoot`);)o++;if(a===l.length||o===u.length)for(a=l.length-1,o=u.length-1;1<=a&&0<=o&&l[a]!==u[o];)o--;for(;1<=a&&0<=o;a--,o--)if(l[a]!==u[o]){if(a!==1||o!==1)do if(a--,o--,0>o||l[a]!==u[o]){var d=`
`+l[a].replace(` at new `,` at `);return e.displayName&&d.includes(`<anonymous>`)&&(d=d.replace(`<anonymous>`,e.displayName)),typeof e==`function`&&lh.set(e,d),d}while(1<=a&&0<=o);break}}}finally{ch=!1,W.H=r,Ae(),Error.prepareStackTrace=n}return l=(l=e?e.displayName||e.name:``)?Me(l):``,typeof e==`function`&&lh.set(e,l),l}function Pe(e,t){switch(e.tag){case 26:case 27:case 5:return Me(e.type);case 16:return Me(`Lazy`);case 13:return e.child!==t&&t!==null?Me(`Suspense Fallback`):Me(`Suspense`);case 19:return Me(`SuspenseList`);case 0:case 15:return Ne(e.type,!1);case 11:return Ne(e.type.render,!1);case 1:return Ne(e.type,!0);case 31:return Me(`Activity`);case 30:return Me(`ViewTransition`);default:return``}}function Fe(e){try{var t=``,n=null;do{t+=Pe(e,n);var r=e._debugInfo;if(r)for(var i=r.length-1;0<=i;i--){var a=r[i];if(typeof a.name==`string`){var o=t;a:{var s=a.name,c=a.env,l=a.debugLocation;if(l!=null){var u=je(l),d=u.lastIndexOf(`
`),f=d===-1?u:u.slice(d+1);if(f.indexOf(s)!==-1){var p=`
`+f;break a}}p=Me(s+(c?` [`+c+`]`:``))}t=o+p}}n=e,e=e.return}while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function C(e){return(e=e?e.displayName||e.name:``)?Me(e):``}function Ie(){if(uh===null)return null;var e=uh._debugOwner;return e==null?null:ve(e)}function Le(){if(uh===null)return``;var e=uh;try{var t=``;switch(e.tag===6&&(e=e.return),e.tag){case 26:case 27:case 5:t+=Me(e.type);break;case 13:t+=Me(`Suspense`);break;case 19:t+=Me(`SuspenseList`);break;case 31:t+=Me(`Activity`);break;case 30:t+=Me(`ViewTransition`);break;case 0:case 15:case 1:e._debugOwner||t!==``||(t+=C(e.type));break;case 11:e._debugOwner||t!==``||(t+=C(e.type.render))}for(;e;)if(typeof e.tag==`number`){var n=e;e=n._debugOwner;var r=n._debugStack;if(e&&r){var i=je(r);i!==``&&(t+=`
`+i)}}else if(e.debugStack!=null){var a=e.debugStack;(e=e.owner)&&a&&(t+=`
`+je(a))}else break;var o=t}catch(e){o=`
Error generating stack: `+e.message+`
`+e.stack}return o}function w(e,t,n,r,i,a,o){var s=uh;Re(e);try{return e!==null&&e._debugTask?e._debugTask.run(t.bind(null,n,r,i,a,o)):t(n,r,i,a,o)}finally{Re(s)}throw Error(`runWithFiberInDEV should never be called in production. This is a bug in React.`)}function Re(e){W.getCurrentStack=e===null?null:Le,dh=!1,uh=e}function ze(e){return typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`}function Be(e){try{return Ve(e),!1}catch{return!0}}function Ve(e){return``+e}function He(e,t){if(Be(e))return console.error("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",t,ze(e)),Ve(e)}function Ue(e,t){if(Be(e))return console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",t,ze(e)),Ve(e)}function We(e){if(Be(e))return console.error(`Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.`,ze(e)),Ve(e)}function Ge(e){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`)return!1;var t=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(t.isDisabled)return!0;if(!t.supportsFiber)return console.error(`The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools`),!0;try{Eh=t.inject(e),Dh=t}catch(e){console.error(`React instrumentation encountered an error: %o.`,e)}return!!t.checkDCE}function Ke(e){if(typeof wh==`function`&&Th(e),Dh&&typeof Dh.setStrictMode==`function`)try{Dh.setStrictMode(Eh,e)}catch(e){Oh||(Oh=!0,console.error(`React instrumentation encountered an error: %o`,e))}}function qe(e){return e>>>=0,e===0?32:31-(jh(e)/Mh|0)|0}function Je(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return console.error(`Should have found matching lanes. This is a bug in React.`),e}}function Ye(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Je(n))):i=Je(o):i=Je(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Je(n))):i=Je(o)):i=Je(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Xe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ze(e,t){t&8&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var r=31-Ah(n),i=1<<r;t|=e[r],n&=~i}return t}function Qe(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return console.error(`Should have found matching lanes. This is a bug in React.`),-1}}function $e(){var e=Fh;return Fh<<=1,!(Fh&62914560)&&(Fh=4194304),e}function et(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function nt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ah(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&rt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function rt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ah(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function T(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ah(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function it(e,t){var n=t&-t;return n=n&42?1:E(n),(n&(e.suspendedLanes|t))===0?n:0}function E(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function at(e,t,n){if(kh)for(e=e.pendingUpdatersLaneMap;0<n;){var r=31-Ah(n),i=1<<r;e[r].add(t),n&=~i}}function D(e,t){if(kh)for(var n=e.pendingUpdatersLaneMap,r=e.memoizedUpdaters;0<t;){var i=31-Ah(t);e=1<<i,i=n[i],0<i.size&&(i.forEach(function(e){var t=e.alternate;t!==null&&r.has(t)||r.add(e)}),i.clear()),t&=~e}}function ot(e){return e&=-e,Ih!==0&&Ih<e?Lh!==0&&Lh<e?e&134217727?Rh:zh:Lh:Ih}function O(){var e=Um.p;return e===0?(e=window.event,e===void 0?Rh:nm(e.type)):e}function st(e,t){var n=Um.p;try{return Um.p=e,t()}finally{Um.p=n}}function k(e){delete e[Vh],delete e[Hh],delete e[Gh],delete e[Kh]}function ct(e){var t;if(t=e[Vh])return t;for(var n=e.parentNode;n;){if(t=n[Uh]||n[Vh]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ip(e);e!==null;){if(n=e[Vh])return n;e=ip(e)}return t}e=n,n=e.parentNode}return null}function lt(e){if(e=e[Vh]||e[Uh]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ut(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(`getNodeFromInstance: Invalid argument.`)}function dt(e){var t=e[qh];return t||=e[qh]={hoistableStyles:new Map,hoistableScripts:new Map},t}function A(e){e[Jh]=!0}function ft(e){e[Yh]=void 0}function pt(e,t){mt(e,t),mt(e+`Capture`,t)}function mt(e,t){Zh[e]&&console.error("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",e),Zh[e]=t;var n=e.toLowerCase();for(Qh[n]=e,e===`onDoubleClick`&&(Qh.ondblclick=e),e=0;e<t.length;e++)Xh.add(t[e])}function ht(e,t){$h[t.type]||t.onChange||t.onInput||t.readOnly||t.disabled||t.value==null||console.error(e===`select`?"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.":"You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."),t.onChange||t.readOnly||t.disabled||t.checked==null||console.error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")}function gt(e){return fh.call(ng,e)?!0:fh.call(tg,e)?!1:eg.test(e)?ng[e]=!0:(tg[e]=!0,console.error("Invalid attribute name: `%s`",e),!1)}function j(){var e=rg;return rg=!1,e}function _t(e,t,n){if(gt(t)){if(!e.hasAttribute(t)){switch(typeof n){case`symbol`:case`object`:return n;case`function`:return n;case`boolean`:if(!1===n)return n}return n===void 0?void 0:null}return e=t.toLowerCase()===`nonce`?e.nonce:e.getAttribute(t),e===``&&!0===n||(He(n,t),e===``+n?n:e)}}function M(e,t,n){if(gt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}He(n,t),e.setAttribute(t,n)}}}function vt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}He(n,t),e.setAttribute(t,n)}}function N(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}He(r,n),e.setAttributeNS(t,n,r)}}function yt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return We(e),e;default:return``}}function P(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){We(e),n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){We(e),n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function F(e){if(!e._valueTracker){var t=P(e)?`checked`:`value`;e._valueTracker=bt(e,t,``+e[t])}}function xt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=P(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function I(e){return e.replace(ig,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function St(e,t){t.checked===void 0||t.defaultChecked===void 0||og||(console.error(`%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components`,Ie()||`A component`,t.type),og=!0),t.value===void 0||t.defaultValue===void 0||ag||(console.error(`%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components`,Ie()||`A component`,t.type),ag=!0)}function L(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?(He(o,`type`),e.type=o):e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+yt(t)):e.value!==``+yt(t)&&(e.value=``+yt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):wt(e,yt(n)):o===`number`&&e.value==t?wt(e,yt(e.value)):wt(e,yt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?(He(s,`name`),e.name=``+yt(s)):e.removeAttribute(`name`)}function Ct(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(He(a,`type`),e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){F(e);return}n=n==null?``:``+yt(n),t=t==null?n:``+yt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(He(o,`name`),e.name=o),F(e)}function wt(e,t){e.defaultValue!==``+t&&(e.defaultValue=``+t)}function R(e,t){t.value??(typeof t.children==`object`&&t.children!==null?vm.Children.forEach(t.children,function(e){e==null||typeof e==`string`||typeof e==`number`||typeof e==`bigint`||cg||(cg=!0,console.error("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))}):t.dangerouslySetInnerHTML==null||lg||(lg=!0,console.error("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."))),t.selected==null||sg||(console.error("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."),sg=!0)}function Tt(){var e=Ie();return e?`

Check the render method of \``+e+"`.":``}function z(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+yt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Et(e,t){for(e=0;e<dg.length;e++){var n=dg[e];if(t[n]!=null){var r=Hm(t[n]);t.multiple&&!r?console.error("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",n,Tt()):!t.multiple&&r&&console.error("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",n,Tt())}}t.value===void 0||t.defaultValue===void 0||ug||(console.error(`Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components`),ug=!0)}function B(e,t){t.value===void 0||t.defaultValue===void 0||fg||(console.error(`%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components`,Ie()||`A component`),fg=!0),t.children!=null&&t.value==null&&console.error("Use the `defaultValue` or `value` props instead of setting children on <textarea>.")}function Dt(e,t,n){t!=null&&(t=``+yt(t),t!==e.value&&(e.value=t),n==null)?e.defaultValue!==t&&(e.defaultValue=t):e.defaultValue=n==null?``:``+yt(n)}function Ot(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");if(Hm(r)){if(1<r.length)throw Error(`<textarea> can only have at most one child.`);r=r[0]}n=r}n??=``,t=n}n=yt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),F(e)}function kt(e,t){return e.serverProps===void 0&&e.serverTail.length===0&&e.children.length===1&&3<e.distanceFromLeaf&&e.distanceFromLeaf>15-t?kt(e.children[0],t):e}function At(e){return`  `+`  `.repeat(e)}function jt(e){return`+ `+`  `.repeat(e)}function Mt(e){return`- `+`  `.repeat(e)}function Nt(e){switch(e.tag){case 26:case 27:case 5:return e.type;case 16:return`Lazy`;case 31:return`Activity`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 0:case 15:return e=e.type,e.displayName||e.name||null;case 11:return e=e.type.render,e.displayName||e.name||null;case 1:return e=e.type,e.displayName||e.name||null;default:return null}}function Pt(e,t){return pg.test(e)?(e=JSON.stringify(e),e.length>t-2?8>t?`{"..."}`:`{`+e.slice(0,t-7)+`..."}`:`{`+e+`}`):e.length>t?5>t?`{"..."}`:e.slice(0,t-3)+`...`:e}function Ft(e,t,n){var r=120-2*n;if(t===null)return jt(n)+Pt(e,r)+`
`;if(typeof t==`string`){for(var i=0;i<t.length&&i<e.length&&t.charCodeAt(i)===e.charCodeAt(i);i++);return i>r-8&&10<i&&(e=`...`+e.slice(i-8),t=`...`+t.slice(i-8)),jt(n)+Pt(e,r)+`
`+Mt(n)+Pt(t,r)+`
`}return At(n)+Pt(e,r)+`
`}function It(e){return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/,function(e,t){return t})}function Lt(e,t){switch(typeof e){case`string`:return e=JSON.stringify(e),e.length>t?5>t?`"..."`:e.slice(0,t-4)+`..."`:e;case`object`:if(e===null)return`null`;if(Hm(e))return`[...]`;if(e.$$typeof===Cm)return(t=_e(e.type))?`<`+t+`>`:`<...>`;var n=It(e);if(n===`Object`){for(var r in n=``,t-=2,e)if(e.hasOwnProperty(r)){var i=JSON.stringify(r);if(i!==`"`+r+`"`&&(r=i),t-=r.length-2,i=Lt(e[r],15>t?t:15),t-=i.length,0>t){n+=n===``?`...`:`, ...`;break}n+=(n===``?``:`,`)+r+`:`+i}return`{`+n+`}`}return n;case`function`:return(t=e.displayName||e.name)?`function `+t:`function`;default:return String(e)}}function Rt(e,t){return typeof e!=`string`||pg.test(e)?`{`+Lt(e,t-2)+`}`:e.length>t-2?5>t?`"..."`:`"`+e.slice(0,t-5)+`..."`:`"`+e+`"`}function zt(e,t,n){var r=120-n.length-e.length,i=[],a;for(a in t)if(t.hasOwnProperty(a)&&a!==`children`){var o=Rt(t[a],120-n.length-a.length-1);r-=a.length+o.length+2,i.push(a+`=`+o)}return i.length===0?n+`<`+e+`>
`:0<r?n+`<`+e+` `+i.join(` `)+`>
`:n+`<`+e+`
`+n+`  `+i.join(`
`+n+`  `)+`
`+n+`>
`}function Bt(e,t,n){var r=``,i=U({},t),a;for(a in e)if(e.hasOwnProperty(a)){delete i[a];var o=120-2*n-a.length-2,s=Lt(e[a],o);t.hasOwnProperty(a)?(o=Lt(t[a],o),r+=jt(n)+a+`: `+s+`
`,r+=Mt(n)+a+`: `+o+`
`):r+=jt(n)+a+`: `+s+`
`}for(var c in i)i.hasOwnProperty(c)&&(e=Lt(i[c],120-2*n-c.length-2),r+=Mt(n)+c+`: `+e+`
`);return r}function Vt(e,t,n,r){var i=``,a=new Map;for(l in n)n.hasOwnProperty(l)&&a.set(l.toLowerCase(),l);if(a.size===1&&a.has(`children`))i+=zt(e,t,At(r));else{for(var o in t)if(t.hasOwnProperty(o)&&o!==`children`){var s=120-2*(r+1)-o.length-1,c=a.get(o.toLowerCase());if(c!==void 0){a.delete(o.toLowerCase());var l=t[o];c=n[c];var u=Rt(l,s);s=Rt(c,s),typeof l==`object`&&l&&typeof c==`object`&&c&&It(l)===`Object`&&It(c)===`Object`&&(2<Object.keys(l).length||2<Object.keys(c).length||-1<u.indexOf(`...`)||-1<s.indexOf(`...`))?i+=At(r+1)+o+`={{
`+Bt(l,c,r+2)+At(r+1)+`}}
`:(i+=jt(r+1)+o+`=`+u+`
`,i+=Mt(r+1)+o+`=`+s+`
`)}else i+=At(r+1)+o+`=`+Rt(t[o],s)+`
`}a.forEach(function(e){if(e!==`children`){var t=120-2*(r+1)-e.length-1;i+=Mt(r+1)+e+`=`+Rt(n[e],t)+`
`}}),i=i===``?At(r)+`<`+e+`>
`:At(r)+`<`+e+`
`+i+At(r)+`>
`}return e=n.children,t=t.children,typeof e==`string`||typeof e==`number`||typeof e==`bigint`?(a=``,(typeof t==`string`||typeof t==`number`||typeof t==`bigint`)&&(a=``+t),i+=Ft(a,``+e,r+1)):(typeof t==`string`||typeof t==`number`||typeof t==`bigint`)&&(i=e==null?i+Ft(``+t,null,r+1):i+Ft(``+t,void 0,r+1)),i}function Ht(e,t){var n=Nt(e);if(n===null){for(n=``,e=e.child;e;)n+=Ht(e,t),e=e.sibling;return n}return At(t)+`<`+n+`>
`}function Ut(e,t){var n=kt(e,t);if(n!==e&&(e.children.length!==1||e.children[0]!==n))return At(t)+`...
`+Ut(n,t+1);n=``;var r=e.fiber._debugInfo;if(r)for(var i=0;i<r.length;i++){var a=r[i].name;typeof a==`string`&&(n+=At(t)+`<`+a+`>
`,t++)}if(r=``,i=e.fiber.pendingProps,e.fiber.tag===6)r=Ft(i,e.serverProps,t),t++;else if(a=Nt(e.fiber),a!==null){if(e.serverProps===void 0){r=t;var o=120-2*r-a.length-2,s=``;for(l in i)if(i.hasOwnProperty(l)&&l!==`children`){var c=Rt(i[l],15);if(o-=l.length+c.length+2,0>o){s+=` ...`;break}s+=` `+l+`=`+c}r=At(r)+`<`+a+s+`>
`,t++}else e.serverProps===null?(r=zt(a,i,jt(t)),t++):typeof e.serverProps==`string`?console.error(`Should not have matched a non HostText fiber to a Text node. This is a bug in React.`):(r=Vt(a,i,e.serverProps,t),t++)}var l=``;for(i=e.fiber.child,a=0;i&&a<e.children.length;)o=e.children[a],o.fiber===i?(l+=Ut(o,t),a++):l+=Ht(i,t),i=i.sibling;for(i&&0<e.children.length&&(l+=At(t)+`...
`),i=e.serverTail,e.serverProps===null&&t--,e=0;e<i.length;e++)a=i[e],l=typeof a==`string`?l+(Mt(t)+Pt(a,120-2*t)+`
`):l+zt(a.type,a.props,Mt(t));return n+r+l}function Wt(e){try{return`

`+Ut(e,0)}catch{return``}}function Gt(e,t,n){for(var r=t,i=null,a=0;r;)r===e&&(a=0),i={fiber:r,children:i===null?[]:[i],serverProps:r===t?n:r===e?null:void 0,serverTail:[],distanceFromLeaf:a},a++,r=r.return;return i===null?``:Wt(i).replaceAll(/^[+-]/gm,`>`)}function Kt(e,t){var n=U({},e||vg),r={tag:t};return hg.indexOf(t)!==-1&&(n.aTagInScope=null,n.buttonTagInScope=null,n.nobrTagInScope=null),gg.indexOf(t)!==-1&&(n.pTagInButtonScope=null),mg.indexOf(t)!==-1&&t!==`address`&&t!==`div`&&t!==`p`&&(n.listItemTagAutoclosing=null,n.dlItemTagAutoclosing=null),n.current=r,t===`form`&&(n.formTag=r),t===`a`&&(n.aTagInScope=r),t===`button`&&(n.buttonTagInScope=r),t===`nobr`&&(n.nobrTagInScope=r),t===`p`&&(n.pTagInButtonScope=r),t===`li`&&(n.listItemTagAutoclosing=r),(t===`dd`||t===`dt`)&&(n.dlItemTagAutoclosing=r),t===`#document`||t===`html`?n.containerTagInScope=null:n.containerTagInScope||=r,e!==null||t!==`#document`&&t!==`html`&&t!==`body`?!0===n.implicitRootScope&&(n.implicitRootScope=!1):n.implicitRootScope=!0,n}function qt(e,t,n){switch(t){case`tr`:return e===`th`||e===`td`||e===`style`||e===`script`||e===`template`;case`tbody`:case`thead`:case`tfoot`:return e===`tr`||e===`style`||e===`script`||e===`template`;case`colgroup`:return e===`col`||e===`template`;case`table`:return e===`caption`||e===`colgroup`||e===`tbody`||e===`tfoot`||e===`thead`||e===`style`||e===`script`||e===`template`;case`head`:return e===`base`||e===`basefont`||e===`bgsound`||e===`link`||e===`meta`||e===`title`||e===`noscript`||e===`noframes`||e===`style`||e===`script`||e===`template`;case`html`:if(n)break;return e===`head`||e===`body`||e===`frameset`;case`frameset`:return e===`frame`;case`#document`:if(!n)return e===`html`}switch(e){case`h1`:case`h2`:case`h3`:case`h4`:case`h5`:case`h6`:return t!==`h1`&&t!==`h2`&&t!==`h3`&&t!==`h4`&&t!==`h5`&&t!==`h6`;case`rp`:case`rt`:return _g.indexOf(t)===-1;case`caption`:case`col`:case`colgroup`:case`input`:return t!==`select`;case`frameset`:case`frame`:case`tbody`:case`td`:case`tfoot`:case`th`:case`thead`:case`tr`:return t==null;case`head`:return n||t===null;case`html`:return n&&t===`#document`||t===null;case`body`:return n&&(t===`#document`||t===`html`)||t===null}return!0}function Jt(e,t){switch(e){case`address`:case`article`:case`aside`:case`blockquote`:case`center`:case`details`:case`dialog`:case`dir`:case`div`:case`dl`:case`fieldset`:case`figcaption`:case`figure`:case`footer`:case`header`:case`hgroup`:case`main`:case`menu`:case`nav`:case`ol`:case`p`:case`section`:case`summary`:case`ul`:case`pre`:case`listing`:case`table`:case`hr`:case`xmp`:case`h1`:case`h2`:case`h3`:case`h4`:case`h5`:case`h6`:return t.pTagInButtonScope;case`form`:return t.formTag||t.pTagInButtonScope;case`li`:return t.listItemTagAutoclosing;case`dd`:case`dt`:return t.dlItemTagAutoclosing;case`button`:return t.buttonTagInScope;case`a`:return t.aTagInScope;case`nobr`:return t.nobrTagInScope}return null}function Yt(e,t){for(;e;){switch(e.tag){case 5:case 26:case 27:if(e.type===t)return e}e=e.return}return null}function Xt(e,t){t||=vg;var n=t.current;if(t=(n=qt(e,n&&n.tag,t.implicitRootScope)?null:n)?null:Jt(e,t),t=n||t,!t)return!0;var r=t.tag;if(t=String(!!n)+`|`+e+`|`+r,yg[t])return!1;yg[t]=!0;var i=(t=uh)?Yt(t.return,r):null,a=t!==null&&i!==null?Gt(i,t,null):``,o=`<`+e+`>`;return n?(n=``,r===`table`&&e===`tr`&&(n+=` Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser.`),console.error(`In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,o,r,n,a)):console.error(`In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,o,r,a),t&&(e=t.return,i===null||e===null||i===e&&e._debugOwner===t._debugOwner||w(i,function(){console.error(`<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,r,o)})),!1}function Zt(e,t,n){if(n||qt(`#text`,t,!1))return!0;if(n=`#text|`+t,yg[n])return!1;yg[n]=!0;var r=(n=uh)?Yt(n,t):null;return n=n!==null&&r!==null?Gt(r,n,n.tag===6?null:{children:null}):``,/\S/.test(e)?console.error(`In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,t,n):console.error(`In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,t,n),!1}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}function $t(e){return e.replace(Tg,function(e,t){return t.toUpperCase()})}function en(e,t,n){var r=t.indexOf(`--`)===0;r||(-1<t.indexOf(`-`)?Dg.hasOwnProperty(t)&&Dg[t]||(Dg[t]=!0,console.error(`Unsupported style property %s. Did you mean %s?`,t,$t(t.replace(wg,`ms-`)))):Cg.test(t)?Dg.hasOwnProperty(t)&&Dg[t]||(Dg[t]=!0,console.error(`Unsupported vendor-prefixed style property %s. Did you mean %s?`,t,t.charAt(0).toUpperCase()+t.slice(1))):!Eg.test(n)||Og.hasOwnProperty(n)&&Og[n]||(Og[n]=!0,console.error(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,t,n.replace(Eg,``))),typeof n==`number`&&(isNaN(n)?kg||(kg=!0,console.error("`NaN` is an invalid value for the `%s` css style property.",t)):isFinite(n)||Ag||(Ag=!0,console.error("`Infinity` is an invalid value for the `%s` css style property.",t)))),n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||jg.has(t)?t===`float`?e.cssFloat=n:(Ue(n,t),e[t]=(``+n).trim()):e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");if(t&&Object.freeze(t),e=e.style,n!=null){if(t){var r={};if(n){for(var i in n)if(n.hasOwnProperty(i)&&!t.hasOwnProperty(i))for(var a=bg[i]||[i],o=0;o<a.length;o++)r[a[o]]=i}for(var s in t)if(t.hasOwnProperty(s)&&(!n||n[s]!==t[s]))for(i=bg[s]||[s],a=0;a<i.length;a++)r[i[a]]=s;for(var c in s={},t)for(i=bg[c]||[c],a=0;a<i.length;a++)s[i[a]]=c;for(var l in c={},r)if(i=r[l],(a=s[l])&&i!==a&&(o=i+`,`+a,!c[o])){c[o]=!0,o=console;var u=t[i];o.error.call(o,`%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.`,u==null||typeof u==`boolean`||u===``?`Removing`:`Updating`,i,a)}}for(var d in n)!n.hasOwnProperty(d)||t!=null&&t.hasOwnProperty(d)||(d.indexOf(`--`)===0?e.setProperty(d,``):d===`float`?e.cssFloat=``:e[d]=``,rg=!0);for(var f in t)l=t[f],t.hasOwnProperty(f)&&n[f]!==l&&(en(e,f,l),rg=!0)}else for(r in t)t.hasOwnProperty(r)&&en(e,r,t[r])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}function rn(e){return Pg.get(e)||e}function an(e,t){if(fh.call(Lg,t)&&Lg[t])return!0;if(zg.test(t)){if(e=`aria-`+t.slice(4).toLowerCase(),e=Ig.hasOwnProperty(e)?e:null,e==null)return console.error("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",t),Lg[t]=!0;if(t!==e)return console.error("Invalid ARIA attribute `%s`. Did you mean `%s`?",t,e),Lg[t]=!0}if(Rg.test(t)){if(e=t.toLowerCase(),e=Ig.hasOwnProperty(e)?e:null,e==null)return Lg[t]=!0,!1;t!==e&&(console.error("Unknown ARIA attribute `%s`. Did you mean `%s`?",t,e),Lg[t]=!0)}return!0}function on(e,t){var n=[],r;for(r in t)an(e,r)||n.push(r);t=n.map(function(e){return"`"+e+"`"}).join(`, `),n.length===1?console.error(`Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props`,t,e):1<n.length&&console.error(`Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props`,t,e)}function sn(e,t,n,r){if(fh.call(Vg,t)&&Vg[t])return!0;var i=t.toLowerCase();if(i===`onfocusin`||i===`onfocusout`)return console.error(`React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.`),Vg[t]=!0;if(typeof n==`function`&&(e===`form`&&t===`action`||e===`input`&&t===`formAction`||e===`button`&&t===`formAction`))return!0;if(r!=null){if(e=r.possibleRegistrationNames,r.registrationNameDependencies.hasOwnProperty(t))return!0;if(r=e.hasOwnProperty(i)?e[i]:null,r!=null)return console.error("Invalid event handler property `%s`. Did you mean `%s`?",t,r),Vg[t]=!0;if(Hg.test(t))return console.error("Unknown event handler property `%s`. It will be ignored.",t),Vg[t]=!0}else if(Hg.test(t))return Ug.test(t)&&console.error("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",t),Vg[t]=!0;if(Wg.test(t)||Gg.test(t))return!0;if(i===`innerhtml`)return console.error("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),Vg[t]=!0;if(i===`aria`)return console.error("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."),Vg[t]=!0;if(i===`is`&&n!=null&&typeof n!=`string`)return console.error("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",typeof n),Vg[t]=!0;if(typeof n==`number`&&isNaN(n))return console.error("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",t),Vg[t]=!0;if(Fg.hasOwnProperty(i)){if(i=Fg[i],i!==t)return console.error("Invalid DOM property `%s`. Did you mean `%s`?",t,i),Vg[t]=!0}else if(t!==i)return console.error("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",t,i),Vg[t]=!0;switch(t){case`dangerouslySetInnerHTML`:case`children`:case`style`:case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:return!0;case`innerText`:case`textContent`:return!0}switch(typeof n){case`boolean`:switch(t){case`autoFocus`:case`checked`:case`multiple`:case`muted`:case`selected`:case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:case`capture`:case`download`:case`inert`:return!0;default:return i=t.toLowerCase().slice(0,5),i===`data-`||i===`aria-`||(n?console.error('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',n,t,t,n,t):console.error(`Received \`%s\` for a non-boolean attribute \`%s\`.

If you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.

If you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.`,n,t,t,n,t,t,t),Vg[t]=!0)}case`function`:case`symbol`:return Vg[t]=!0,!1;case`string`:if(n===`false`||n===`true`){switch(t){case`checked`:case`selected`:case`multiple`:case`muted`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:case`inert`:break;default:return!0}console.error("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",n,t,n===`false`?`The browser will interpret it as a truthy value.`:`Although this works, it will not work as expected if you pass the string "false".`,t,n),Vg[t]=!0}}return!0}function cn(e,t,n){var r=[],i;for(i in t)sn(e,i,t[i],n)||r.push(i);t=r.map(function(e){return"`"+e+"`"}).join(`, `),r.length===1?console.error(`Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior `,t,e):1<r.length&&console.error(`Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior `,t,e)}function ln(e){return Kg.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}function dn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}function fn(e){var t=lt(e);if(t&&(e=t.stateNode)){var n=e[Hh]||null;a:switch(e=t.stateNode,t.type){case`input`:if(L(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(He(t,`name`),n=n.querySelectorAll(`input[name="`+I(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Hh]||null;if(!i)throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");L(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&xt(r)}break a;case`textarea`:Dt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&z(e,!!n.multiple,t,!1)}}}function pn(e,t,n){if(Xg)return e(t,n);Xg=!0;try{return e(t)}finally{if(Xg=!1,(Jg!==null||Yg!==null)&&(tu(),Jg&&(t=Jg,e=Yg,Yg=Jg=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Hh]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error("Expected `"+t+"` listener to be a function, instead got a value of `"+typeof n+"` type.");return n}function hn(){if(n_)return n_;var e,t=t_,n=t.length,r,i=`value`in e_?e_.value:e_.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return n_=i.slice(e,1<r?1-r:void 0)}function gn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _n(){return!0}function vn(){return!1}function yn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?_n:vn,this.isPropagationStopped=vn,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=_n)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=_n)},persist:function(){},isPersistent:_n}),t}function bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=b_[e])?!!t[e]:!1}function xn(){return bn}function Sn(e,t){switch(e){case`keyup`:return O_.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==k_;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Cn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}function wn(e,t){switch(e){case`compositionend`:return Cn(t);case`keypress`:return t.which===P_?(I_=!0,F_):null;case`textInput`:return e=t.data,e===F_&&I_?null:e;default:return null}}function Tn(e,t){if(L_)return e===`compositionend`||!A_&&Sn(e,t)?(e=hn(),n_=t_=e_=null,L_=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return N_&&t.locale!==`ko`?null:t.data;default:return null}}function En(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!R_[e.type]:t===`textarea`}function Dn(e){if(!Zg)return!1;e=`on`+e;var t=e in document;return t||=(t=document.createElement(`div`),t.setAttribute(e,`return;`),typeof t[e]==`function`),t}function On(e,t,n,r){Jg?Yg?Yg.push(r):Yg=[r]:Jg=r,t=md(t,`onChange`),0<t.length&&(n=new i_(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}function kn(e){sd(e,0)}function An(e){if(xt(ut(e)))return e}function jn(e,t){if(e===`change`)return t}function Mn(){z_&&(z_.detachEvent(`onpropertychange`,Nn),B_=z_=null)}function Nn(e){if(e.propertyName===`value`&&An(B_)){var t=[];On(t,B_,e,dn(e)),pn(kn,t)}}function Pn(e,t,n){e===`focusin`?(Mn(),z_=t,B_=n,z_.attachEvent(`onpropertychange`,Nn)):e===`focusout`&&Mn()}function Fn(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return An(B_)}function In(e,t){if(e===`click`)return An(t)}function Ln(e,t){if(e===`input`||e===`change`)return An(t)}function Rn(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}function zn(e,t){if(H_(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fh.call(t,i)||!H_(e[i],t[i]))return!1}return!0}function Bn(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Vn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hn(e,t){var n=Vn(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Vn(n)}}function Un(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Un(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Bn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bn(e.document)}return t}function Gn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Kn(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;q_||W_==null||W_!==Bn(r)||(r=W_,`selectionStart`in r&&Gn(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),K_&&zn(K_,r)||(K_=r,r=md(G_,`onSelect`),0<r.length&&(t=new i_(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=W_)))}function qn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}function Jn(e){if(Y_[e])return Y_[e];if(!J_[e])return e;var t=J_[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in X_)return Y_[e]=t[n];return e}function Yn(e,t){iv.set(e,t),pt(t,[e])}function Xn(e,t){if(e.name!=null&&e.name!==`auto`)return e.name;if(t.autoName!==null)return t.autoName;e=iw.identifierPrefix;var n=ov++;return e=`_`+e+`t_`+n.toString(32)+`_`,t.autoName=e}function Zn(e){if(e==null||typeof e==`string`)return e;var t=null,n=pw;if(n!==null)for(var r=0;r<n.length;r++){var i=e[n[r]];if(i!=null){if(i===`none`)return`none`;t=t==null?i:t+(` `+i)}}return t??e.default}function Qn(e,t){return e=Zn(e),t=Zn(t),t==null?e===`auto`?null:e:t===`auto`?null:t}function $n(e){for(var t=pv,n=0;n<e.length&&n<_v;n++){var r=e[n];if(typeof r==`object`&&r){if(Hm(r)&&r.length===2&&typeof r[0]==`string`){if(t!==pv&&t!==gv)return mv;t=gv}else return mv}else{if(typeof r==`function`||typeof r==`string`&&50<r.length||t!==pv&&t!==hv||typeof r==`bigint`)return mv;t=hv}}return t}function er(e,t,n,r){if(!ArrayBuffer.isView(e)){var i=0,a;for(a in e)if(fh.call(e,a)&&a[0]!==`_`&&(i++,nr(a,e[a],t,n,r),i>=_v)){t.push([r+`\xA0\xA0`.repeat(n)+`Only `+_v+` properties are shown. React will not log more properties of this object.`,``]);break}}}function tr(e){return`$$typeof`in e&&fh.call(e,`$$typeof`)?e.$$typeof:void 0}function nr(e,t,n,r,i){switch(typeof t){case`object`:if(t===null){t=`null`;break}if(tr(t)===Cm){var a=_e(t.type)||`…`,o=t.key;t=t.props;var s=Object.keys(t),c=s.length;if(o==null&&c===0){t=`<`+a+` />`;break}if(3>r||c===1&&s[0]===`children`&&o==null){t=`<`+a+` … />`;break}for(var l in n.push([i+`\xA0\xA0`.repeat(r)+e,`<`+a]),o!==null&&nr(`key`,o,n,r+1,i),e=!1,o=0,t)if(o++,l===`children`?t.children!=null&&(!Hm(t.children)||0<t.children.length)&&(e=!0):fh.call(t,l)&&l[0]!==`_`&&nr(l,t[l],n,r+1,i),o>=_v)break;n.push([``,e?`>…</`+a+`>`:`/>`]);return}if(a=Object.prototype.toString.call(t),a=a.slice(8,a.length-1),ArrayBuffer.isView(t)){t=t.length,t=typeof t==`number`?a+`(`+t+`)`:a;break}if(a===`Array`){if(l=t.length>_v,o=$n(t),o===hv||o===pv){t=JSON.stringify(l?t.slice(0,_v).concat(`…`):t);break}if(o===gv){for(n.push([i+`\xA0\xA0`.repeat(r)+e,``]),e=0;e<t.length&&e<_v;e++)a=t[e],nr(a[0],a[1],n,r+1,i);l&&nr(_v.toString(),`…`,n,r+1,i);return}}if(a===`Promise`){if(t.status===`fulfilled`){if(a=n.length,nr(e,t.value,n,r,i),n.length>a){n=n[a],n[1]=`Promise<`+(n[1]||`Object`)+`>`;return}}else if(t.status===`rejected`&&(a=n.length,nr(e,t.reason,n,r,i),n.length>a)){n=n[a],n[1]=`Rejected Promise<`+n[1]+`>`;return}n.push([`\xA0\xA0`.repeat(r)+e,`Promise`]);return}a===`Object`&&(l=Object.getPrototypeOf(t))&&typeof l.constructor==`function`&&(a=l.constructor.name),n.push([i+`\xA0\xA0`.repeat(r)+e,a===`Object`?3>r?``:`…`:a]),3>r&&er(t,n,r+1,i);return;case`function`:t=t.name,t=t===``||typeof t!=`string`?`() => {}`:t+`() {}`;break;case`string`:t=t===fv?`…`:JSON.stringify(1024<=t.length?t.slice(0,1023)+`…`:t);break;case`undefined`:t=`undefined`;break;case`boolean`:t=t?`true`:`false`;break;default:t=String(t)}n.push([i+`\xA0\xA0`.repeat(r)+e,t])}function rr(e,t,n,r){var i=!0,a=0;for(s in e){if(a>_v){n.push([`Previous object has more than `+_v+` properties. React will not attempt to diff objects with too many properties.`,``]),i=!1;break}s in t||(n.push([vv+`\xA0\xA0`.repeat(r)+s,`…`]),i=!1),a++}for(var o in a=0,t){if(a>_v){n.push([`Next object has more than `+_v+` properties. React will not attempt to diff objects with too many properties.`,``]),i=!1;break}if(o in e){var s=e[o],c=t[o];if(s!==c){if(r===0&&o===`children`){i=`\xA0\xA0`.repeat(r)+o,n.push([vv+i,`…`],[yv+i,`…`]),i=!1;continue}if(!(3<=r)){if(typeof s==`object`&&typeof c==`object`&&s!==null&&c!==null&&tr(s)===tr(c)){if(tr(c)===Cm){if(s.type===c.type&&s.key===c.key){s=_e(c.type)||`…`,i=`\xA0\xA0`.repeat(r)+o,s=`<`+s+` … />`,n.push([vv+i,s],[yv+i,s]),i=!1;continue}}else{var l=Object.prototype.toString.call(s),u=Object.prototype.toString.call(c);if(l===u&&(u===`[object Object]`||u===`[object Array]`)){l=[bv+`\xA0\xA0`.repeat(r)+o,u===`[object Array]`?`Array`:``],n.push(l),u=n.length,rr(s,c,n,r+1)?u===n.length&&(l[1]=`Referentially unequal but deeply equal objects. Consider memoization.`):i=!1;continue}}}else if(typeof s==`function`&&typeof c==`function`&&s.name===c.name&&s.length===c.length&&(l=Function.prototype.toString.call(s),u=Function.prototype.toString.call(c),l===u)){s=c.name===``?`() => {}`:c.name+`() {}`,n.push([bv+`\xA0\xA0`.repeat(r)+o,s+` Referentially unequal function closure. Consider memoization.`]);continue}}nr(o,s,n,r,vv),nr(o,c,n,r,yv),i=!1}}else n.push([yv+`\xA0\xA0`.repeat(r)+o,`…`]),i=!1;a++}return i}function ir(e){wv=e&63?`Blocking`:e&64?`Gesture`:e&4194176?`Transition`:e&62914560?`Suspense`:e&2080374784?`Idle`:`Other`}function ar(e,t,n,r){xv&&(Dv.start=t,Dv.end=n,Ev.color=`warning`,Ev.tooltipText=r,Ev.properties=null,(e=e._debugTask)?e.run(performance.measure.bind(performance,r,Dv)):performance.measure(r,Dv),performance.clearMeasures(r))}function or(e,t,n){ar(e,t,n,`Reconnect`)}function sr(e,t,n,r,i){var a=S(e);if(a!==null&&xv){var o=e.alternate,s=e.actualDuration;if(o===null||o.child!==e.child)for(var c=e.child;c!==null;c=c.sibling)s-=c.actualDuration;s=.5>s?r?`tertiary-light`:`primary-light`:10>s?r?`tertiary`:`primary`:100>s?r?`tertiary-dark`:`primary-dark`:`error`;var l=e.memoizedProps;r=e._debugTask,l!==null&&o!==null&&o.memoizedProps!==l?(c=[Ov],l=rr(o.memoizedProps,l,c,0),1<c.length?(l&&!Tv&&(o.lanes&i)===0&&100<e.actualDuration?(Tv=!0,c[0]=Av,Ev.color=`warning`,Ev.tooltipText=kv):(Ev.color=s,Ev.tooltipText=a),Ev.properties=c,Dv.start=t,Dv.end=n,e=`​`+a,r==null?performance.measure(e,Dv):r.run(performance.measure.bind(performance,e,Dv)),performance.clearMeasures(e)):r==null?console.timeStamp(a,t,n,Sv,void 0,s):r.run(console.timeStamp.bind(console,a,t,n,Sv,void 0,s))):r==null?console.timeStamp(a,t,n,Sv,void 0,s):r.run(console.timeStamp.bind(console,a,t,n,Sv,void 0,s))}}function cr(e,t,n,r){if(xv){var i=S(e);if(i!==null){for(var a=null,o=[],s=0;s<r.length;s++){var c=r[s];a==null&&c.source!==null&&(a=c.source._debugTask),c=c.value,o.push([`Error`,typeof c==`object`&&c&&typeof c.message==`string`?String(c.message):String(c)])}e.key!==null&&nr(`key`,e.key,o,0,``),e.memoizedProps!==null&&er(e.memoizedProps,o,0,``),a??=e._debugTask,e={start:t,end:n,detail:{devtools:{color:`error`,track:Sv,tooltipText:e.tag===13?`Hydration failed`:`Error boundary caught an error`,properties:o}}},i=`​`+i,a?a.run(performance.measure.bind(performance,i,e)):performance.measure(i,e),performance.clearMeasures(i)}}}function lr(e,t,n,r,i){if(i!==null){if(xv){var a=S(e);if(a!==null){r=[];for(var o=0;o<i.length;o++){var s=i[o].value;r.push([`Error`,typeof s==`object`&&s&&typeof s.message==`string`?String(s.message):String(s)])}e.key!==null&&nr(`key`,e.key,r,0,``),e.memoizedProps!==null&&er(e.memoizedProps,r,0,``),t={start:t,end:n,detail:{devtools:{color:`error`,track:Sv,tooltipText:`A lifecycle or effect errored`,properties:r}}},e=e._debugTask,n=`​`+a,e?e.run(performance.measure.bind(performance,n,t)):performance.measure(n,t),performance.clearMeasures(n)}}}else a=S(e),a!==null&&xv&&(i=1>r?`secondary-light`:100>r?`secondary`:500>r?`secondary-dark`:`error`,(e=e._debugTask)?e.run(console.timeStamp.bind(console,a,t,n,Sv,void 0,i)):console.timeStamp(a,t,n,Sv,void 0,i))}function ur(e,t,n,r){!xv||t<=e||(n=(n&738197653)===n?`tertiary-dark`:`primary-dark`,r?r.run(console.timeStamp.bind(console,`Prewarm`,e,t,wv,Cv,n)):console.timeStamp(`Prewarm`,e,t,wv,Cv,n))}function dr(e,t,n,r){!xv||t<=e||(n=(n&738197653)===n?`tertiary-dark`:`primary-dark`,r?r.run(console.timeStamp.bind(console,`Suspended`,e,t,wv,Cv,n)):console.timeStamp(`Suspended`,e,t,wv,Cv,n))}function fr(e,t,n,r){!xv||t<=e||(r?r.run(console.timeStamp.bind(console,`Errored`,e,t,wv,Cv,`error`)):console.timeStamp(`Errored`,e,t,wv,Cv,`error`))}function pr(e,t,n,r){!xv||t<=e||(r?r.run(console.timeStamp.bind(console,n,e,t,wv,Cv,`secondary-light`)):console.timeStamp(n,e,t,wv,Cv,`secondary-light`))}function mr(e,t,n,r,i){if(xv&&!(t<=e)){for(var a=[],o=0;o<n.length;o++){var s=n[o].value;a.push([`Error`,typeof s==`object`&&s&&typeof s.message==`string`?String(s.message):String(s)])}e={start:e,end:t,detail:{devtools:{color:`error`,track:wv,trackGroup:Cv,tooltipText:r?`Remaining Effects Errored`:`Commit Errored`,properties:a}}},i?i.run(performance.measure.bind(performance,`Errored`,e)):performance.measure(`Errored`,e),performance.clearMeasures(`Errored`)}}function hr(e,t,n,r,i){n===null?!xv||t<=e||(i?i.run(console.timeStamp.bind(console,r?`Commit Interrupted View Transition`:`Commit`,e,t,wv,Cv,r?`error`:`secondary-dark`)):console.timeStamp(r?`Commit Interrupted View Transition`:`Commit`,e,t,wv,Cv,r?`error`:`secondary-dark`)):mr(e,t,n,!1,i)}function gr(e,t,n){!xv||t<=e||(n?n.run(console.timeStamp.bind(console,`Animating`,e,t,wv,Cv,`secondary-dark`)):console.timeStamp(`Animating`,e,t,wv,Cv,`secondary-dark`))}function _r(){for(var e=Pv,t=Fv=Pv=0;t<e;){var n=Nv[t];Nv[t++]=null;var r=Nv[t];Nv[t++]=null;var i=Nv[t];Nv[t++]=null;var a=Nv[t];if(Nv[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&xr(n,i,a)}}function vr(e,t,n,r){Nv[Pv++]=e,Nv[Pv++]=t,Nv[Pv++]=n,Nv[Pv++]=r,Fv|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function yr(e,t,n,r){return vr(e,t,n,r),Sr(e)}function br(e,t){return vr(e,null,null,t),Sr(e)}function xr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&jv||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ah(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Sr(e){if(vw>_w)throw Cw=vw=0,ww=yw=null,Error(`Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.`);Cw>Sw&&(Cw=0,ww=null,console.error(`Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.`)),e.alternate===null&&e.flags&4098&&Wu(e);for(var t=e,n=t.return;n!==null;)t.alternate===null&&t.flags&4098&&Wu(e),t=n,n=t.return;return t.tag===3?t.stateNode:null}function Cr(e){if(Lv===null)return e;var t=Lv(e);return t===void 0?e:t.current}function wr(e,t){if(Lv===null)return!1;var n=Lv,r=e.elementType;t=t.type;var i=!1,a=typeof t==`object`&&t?t.$$typeof:null;switch(e.tag){case 1:typeof t==`function`&&(i=!0);break;case 0:(typeof t==`function`||a===Pm)&&(i=!0);break;case 11:(a===Am||a===Pm)&&(i=!0);break;case 14:case 15:(a===Nm||a===Pm)&&(i=!0);break;default:return!1}return!!(i&&(e=n(r),e!==void 0&&e===n(t)))}function Tr(e){Lv!==null&&typeof WeakSet==`function`&&(Rv===null&&(Rv=new WeakSet),Rv.add(e))}function Er(e,t,n){do{var r=e,i=r.alternate,a=r.child,o=r.sibling,s=r.tag,c=r.type,l=r.elementType,u=null;switch(r=null,s){case 0:case 1:u=c;break;case 15:u=c,r=l;break;case 14:r=l;break;case 11:u=c.render,r=l}if(Lv===null)throw Error(`Expected resolveFamily to be set during hot reload.`);var d=Lv;if(c=l=!1,u!==null&&(u=d(u),u!==void 0&&(n.has(u)?c=!0:t.has(u)&&(s===1?c=!0:l=!0))),c||r===null||(s=d(r),s!==void 0&&n.has(s)?c=!0:typeof r==`object`&&r.$$typeof===Pm&&(s=r._payload,s._status===1&&(s=d(s._result.default),s!==void 0&&n.has(s)&&(c=!0)))),Rv!==null&&(Rv.has(e)||i!==null&&Rv.has(i))&&(c=!0),c&&(e._debugNeedsRemount=!0),(c||l)&&(i=br(e,2),i!==null&&Xl(i,e,2)),a===null||c||Er(a,t,n),o===null)break;e=o}while(1)}function Dr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null,this.actualDuration=-0,this.actualStartTime=-1.1,this.treeBaseDuration=this.selfBaseDuration=-0,this._debugTask=this._debugStack=this._debugOwner=this._debugInfo=null,this._debugNeedsRemount=!1,this._debugHookTypes=null,Uv||typeof Object.preventExtensions!=`function`||Object.preventExtensions(this)}function Or(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kr(e,t){var n=e.alternate;switch(n===null?(n=g(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n._debugOwner=e._debugOwner,n._debugStack=e._debugStack,n._debugTask=e._debugTask,n._debugHookTypes=e._debugHookTypes,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null,n.actualDuration=-0,n.actualStartTime=-1.1),n.flags=e.flags&1206910976,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n.selfBaseDuration=e.selfBaseDuration,n.treeBaseDuration=e.treeBaseDuration,n._debugInfo=e._debugInfo,n._debugNeedsRemount=e._debugNeedsRemount,n.tag){case 0:case 15:case 14:case 1:case 11:n.type=Cr(e.type)}return n}function Ar(e,t){e.flags&=1206910978;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null,e.selfBaseDuration=0,e.treeBaseDuration=0):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext,_debugThenableState:t._debugThenableState},e.selfBaseDuration=n.selfBaseDuration,e.treeBaseDuration=n.treeBaseDuration),e}function jr(e,t,n,r,i,a){var o=0,s=Cr(e);if(typeof s==`function`)Or(s)&&(o=1);else if(typeof s==`string`)o=Te(),o=Ap(e,n,o)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(s){case Fm:return t=g(31,n,t,i),t.elementType=Fm,t.lanes=a,t;case Tm:return Nr(n.children,i,a,t);case Em:o=8,i|=Bv,i|=Vv;break;case Dm:return e=n,r=i,typeof e.id!=`string`&&console.error('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',typeof e.id),t=g(12,e,t,r|K),t.elementType=Dm,t.lanes=a,t.stateNode={effectDuration:0,passiveEffectDuration:0},t;case jm:return t=g(13,n,t,i),t.elementType=jm,t.lanes=a,t;case Mm:return t=g(19,n,t,i),t.elementType=Mm,t.lanes=a,t;case Im:case Rm:return e=i|Hv,t=g(30,n,t,e),t.elementType=Rm,t.lanes=a,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s==`object`&&s)switch(s.$$typeof){case km:o=10;break a;case Om:o=9;break a;case Am:o=11;break a;case Nm:o=14;break a;case Pm:o=16,s=null;break a}n=``,(e===void 0||typeof e==`object`&&e&&Object.keys(e).length===0)&&(n+=` You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.`),e===null?s=`null`:Hm(e)?s=`array`:e!==void 0&&e.$$typeof===Cm?(s=`<`+(_e(e.type)||`Unknown`)+` />`,n=` Did you accidentally export a JSX literal instead of a component?`):s=typeof e,(o=r?ve(r):null)&&(n+=`

Check the render method of \``+o+"`."),o=29,n=Error(`Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: `+(s+`.`+n)),s=null}return t=g(o,n,t,i),t.elementType=e,t.type=s,t.lanes=a,t._debugOwner=r,t}function Mr(e,t,n){return t=jr(e.type,e.key,e.props,e._owner,t,n),t._debugOwner=e._owner,t._debugStack=e._debugStack,t._debugTask=e._debugTask,t}function Nr(e,t,n,r){return e=g(7,e,r,t),e.lanes=n,e}function Pr(e,t,n){return e=g(6,e,null,t),e.lanes=n,e}function Fr(e){var t=g(18,null,null,G);return t.stateNode=e,t}function Ir(e,t,n){return t=g(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Lr(e,t){if(typeof e==`object`&&e){var n=Wv.get(e);return n===void 0?(t={value:e,source:t,stack:Fe(t)},Wv.set(e,t),t):n}return{value:e,source:t,stack:Fe(t)}}function Rr(e,t){Wr(),Gv[Kv++]=Jv,Gv[Kv++]=qv,qv=e,Jv=t}function zr(e,t,n){Wr(),Yv[Xv++]=Qv,Yv[Xv++]=$v,Yv[Xv++]=Zv,Zv=e;var r=Qv;e=$v;var i=32-Ah(r)-1;r&=~(1<<i),n+=1;var a=32-Ah(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Qv=1<<32-Ah(t)+i|n<<i|r,$v=a+e}else Qv=1<<a|n<<i|r,$v=e}function Br(e){Wr(),e.return!==null&&(Rr(e,1),zr(e,1,0))}function Vr(e){for(;e===qv;)qv=Gv[--Kv],Gv[Kv]=null,Jv=Gv[--Kv],Gv[Kv]=null;for(;e===Zv;)Zv=Yv[--Xv],Yv[Xv]=null,$v=Yv[--Xv],Yv[Xv]=null,Qv=Yv[--Xv],Yv[Xv]=null}function Hr(){return Wr(),Zv===null?null:{id:Qv,overflow:$v}}function Ur(e,t){Wr(),Yv[Xv++]=Qv,Yv[Xv++]=$v,Yv[Xv++]=Zv,Qv=t.id,$v=t.overflow,Zv=e}function Wr(){q||console.error(`Expected to be hydrating. This is a bug in React. Please file an issue.`)}function Gr(e,t){if(e.return===null){if(ry===null)ry={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t};else{if(ry.fiber!==e)throw Error(`Saw multiple hydration diff roots in a pass. This is a bug in React.`);ry.distanceFromLeaf>t&&(ry.distanceFromLeaf=t)}return ry}var n=Gr(e.return,t+1).children;return 0<n.length&&n[n.length-1].fiber===e?(n=n[n.length-1],n.distanceFromLeaf>t&&(n.distanceFromLeaf=t),n):(t={fiber:e,children:[],serverProps:void 0,serverTail:[],distanceFromLeaf:t},n.push(t),t)}function Kr(){q&&console.error(`We should not be hydrating here. This is a bug in React. Please file a bug.`)}function qr(e,t){ny||(e=Gr(e,0),e.serverProps=null,t!==null&&(t=tp(t),e.serverTail.push(t)))}function Jr(e){var t=1<arguments.length&&arguments[1]!==void 0&&arguments[1],n=``,r=ry;throw r!==null&&(ry=null,n=Wt(r)),ei(Lr(Error(`Hydration failed because the server rendered `+(t?`text`:`HTML`)+` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch`+n),e)),oy}function Yr(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Vh]=e,t[Hh]=r,_d(n,r),n){case`dialog`:cd(`cancel`,t),cd(`close`,t);break;case`iframe`:case`object`:case`embed`:cd(`load`,t);break;case`video`:case`audio`:for(n=0;n<zw.length;n++)cd(zw[n],t);break;case`source`:cd(`error`,t);break;case`img`:case`image`:case`link`:cd(`error`,t),cd(`load`,t);break;case`details`:cd(`toggle`,t);break;case`input`:ht(`input`,r),cd(`invalid`,t),St(t,r),Ct(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`option`:R(t,r);break;case`select`:ht(`select`,r),cd(`invalid`,t),Et(t,r);break;case`textarea`:ht(`textarea`,r),cd(`invalid`,t),B(t,r),Ot(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Td(t.textContent,n)?(r.popover!=null&&(cd(`beforetoggle`,t),cd(`toggle`,t)),r.onScroll!=null&&cd(`scroll`,t),r.onScrollEnd!=null&&cd(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Jr(e,!0)}function Xr(e){for(ey=e.return;ey;)switch(ey.tag){case 5:case 31:case 13:ay=!1;return;case 27:case 3:ay=!0;return;default:ey=ey.return}}function Zr(e){if(e!==ey)return!1;if(!q)return Xr(e),q=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||qd(e.type,e.memoizedProps)),n=!n),n&&ty){for(n=ty;n;){var r=Gr(e,0),i=tp(n);r.serverTail.push(i),n=i.type===`Suspense`?rp(n):ep(n.nextSibling)}Jr(e)}if(Xr(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);ty=rp(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);ty=rp(e)}else t===27?(t=ty,af(e.type)?(e=FT,FT=null,ty=e):ty=t):ty=ey?ep(e.stateNode.nextSibling):null;return!0}function Qr(){ty=ey=null,ny=q=!1}function $r(){var e=iy;return e!==null&&(LC===null?LC=e:LC.push.apply(LC,e),iy=null),e}function ei(e){iy===null?iy=[e]:iy.push(e)}function ti(){var e=ry;if(e!==null){ry=null;for(var t=Wt(e);0<e.children.length;)e=e.children[0];w(e.fiber,function(){console.error(`A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,`https://react.dev/link/hydration-mismatch`,t)})}}function ni(){dy=uy=null,fy=!1}function ri(e,t,n){xe(sy,t._currentValue,e),t._currentValue=n,xe(cy,t._currentRenderer,e),t._currentRenderer!==void 0&&t._currentRenderer!==null&&t._currentRenderer!==ly&&console.error(`Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported.`),t._currentRenderer=ly}function ii(e,t){e._currentValue=sy.current;var n=cy.current;be(cy,t),e._currentRenderer=n,be(sy,t)}function ai(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}e!==n&&console.error(`Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.`)}function oi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var s=a;a=i;for(var c=0;c<t.length;c++)if(s.context===t[c]){a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),ai(a.return,n,e),r||(o=null);break a}a=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(`We just came from a parent so we must have had a parent. This is a bug in React.`);o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ai(o,n,e),o=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),ai(i.return,n,e),o=i.child,o=o===null?null:o.sibling):o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function si(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(`Should have a current fiber. This is a bug in React.`);if(o=o.memoizedProps,o!==null){var s=i.type;H_(i.pendingProps.value,o.value)||(e===null?e=[s]:e.push(s))}}else if(i===Zm.current){if(o=i.alternate,o===null)throw Error(`Should have a current fiber. This is a bug in React.`);o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[$T]:e.push($T))}i=i.return}return e!==null&&oi(t,e,n,r),t.flags|=262144,e!==null}function ci(e){for(e=e.firstContext;e!==null;){if(!H_(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function li(e){uy=e,dy=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ui(e){return fy&&console.error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`),fi(uy,e)}function di(e,t){return uy===null&&li(e),fi(e,t)}function fi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},dy===null){if(e===null)throw Error(`Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().`);dy=t,e.dependencies={lanes:0,firstContext:t,_debugThenableState:null},e.flags|=524288}else dy=dy.next=t;return n}function pi(){return{controller:new py,data:new Map,refCount:0}}function mi(e){e.controller.signal.aborted&&console.warn(`A cache instance was retained after it was already freed. This likely indicates a bug in React.`),e.refCount++}function hi(e){e.refCount--,0>e.refCount&&console.warn(`A cache instance was released after it was already freed. This likely indicates a bug in React.`),e.refCount===0&&my(hy,function(){e.controller.abort()})}function gi(e,t){if(e.pendingLanes&4194048){var n=e.transitionTypes;for(n===null&&(n=e.transitionTypes=[]),e=0;e<t.length;e++){var r=t[e];n.indexOf(r)===-1&&n.push(r)}}}function _i(e){var t=e.transitionTypes;return e.transitionTypes=null,t}function vi(e,t,n){e&127?0>My&&(My=vy(),Ny=yy(t),Fy=t,n!=null&&(Iy=S(n)),(fC&(rC|iC))!==nC&&(Ay=!0,Py=by),e=Xd(),t=Yd(),e!==zy||t!==Ry?zy=-1.1:t!==null&&(Py=by),Ly=e,Ry=t):e&4194048&&0>Uy&&(Uy=vy(),Gy=yy(t),Ky=t,n!=null&&(qy=S(n)),0>Hy)&&(e=Xd(),t=Yd(),(e!==Xy||t!==Yy)&&(Xy=-1.1),Jy=e,Yy=t)}function yi(e){if(0>My){My=vy(),Ny=e._debugTask==null?null:e._debugTask,(fC&(rC|iC))!==nC&&(Py=by);var t=Xd(),n=Yd();t!==zy||n!==Ry?zy=-1.1:n!==null&&(Py=by),Ly=t,Ry=n}0>Uy&&(Uy=vy(),Gy=e._debugTask==null?null:e._debugTask,0>Hy)&&(e=Xd(),t=Yd(),(e!==Xy||t!==Yy)&&(Xy=-1.1),Jy=e,Yy=t)}function bi(){var e=Dy;return Dy=0,e}function xi(e){var t=Dy;return Dy=e,t}function Si(e){var t=Dy;return Dy+=e,t}function Ci(){Y=J=-1.1}function wi(){var e=J;return J=-1.1,e}function Ti(e){0<=e&&(J=e)}function Ei(){var e=Oy;return Oy=-0,e}function Di(e){0<=e&&(Oy=e)}function Oi(){var e=ky;return ky=null,e}function ki(){var e=Ay;return Ay=!1,e}function Ai(e){Ey=vy(),0>e.actualStartTime&&(e.actualStartTime=Ey)}function ji(e){if(0<=Ey){var t=vy()-Ey;e.actualDuration+=t,e.selfBaseDuration=t,Ey=-1}}function Mi(e){if(0<=Ey){var t=vy()-Ey;e.actualDuration+=t,Ey=-1}}function Ni(){if(0<=Ey){var e=vy(),t=e-Ey;Ey=-1,Dy+=t,Oy+=t,Y=e}}function Pi(e){ky===null&&(ky=[]),ky.push(e),Ty===null&&(Ty=[]),Ty.push(e)}function Fi(){Ey=vy(),0>J&&(J=Ey)}function Ii(e){for(var t=e.child;t;)e.actualDuration+=t.actualDuration,t=t.sibling}function Li(e,t){if(ob===null){var n=ob=[];sb=0,cb=rd(),lb={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sb++,t.then(Ri,Ri),t}function Ri(){if(--sb===0&&(-1<Uy||(Hy=-1.1),_y=null,ob!==null)){lb!==null&&(lb.status=`fulfilled`);var e=ob;ob=null,cb=0,lb=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function zi(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}function Bi(){var e=db.current;return e===null?pC.pooledCache:e}function Vi(e,t){t===null?xe(db,db.current,e):xe(db,t.pool,e)}function Hi(){var e=Bi();return e===null?null:{parent:gy._currentValue,pool:e}}function Ui(){return{didWarnAboutUncachedPromise:!1,thenables:[]}}function Wi(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Gi(e,t,n,r){W.actQueue!==null&&(W.didUsePromise=!0);var i=e.thenables;if(n=i[n],n===void 0?i.push(t):n!==t&&(e.didWarnAboutUncachedPromise||(e.didWarnAboutUncachedPromise=!0,console.error(`A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework.`)),t.then(un,un),t=n),t._debugInfo===void 0){e=performance.now(),i=t.displayName;var a={name:typeof i==`string`?i:`Promise`,start:e,end:e,value:t};t._debugInfo=[{awaited:a}],t.status!==`fulfilled`&&t.status!==`rejected`&&(e=function(){a.end=performance.now()},t.then(e,e))}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw r=t.reason,Ji(r),r===void 0&&!(`reason`in t)?Error("A rejected Promise was passed to React without a `reason` property. React threw a generic error from where the Promise was used to assist in identifying the problematic Promise. Make sure that instrumented Promises correctly set the `reason` property when setting `status` to `'rejected'`."):r;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=pC,e!==null&&100<e.shellSuspendCounter)throw Error("An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.");e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw r=t.reason,Ji(r),r}throw Jb=t,Yb=!0,qb||r===null||r.alternate!==null||(Gb=r,Kb=Error(`This library called use() to suspend in a previous render but did not call use() when it finished. This indicates an incorrect use of use(). Learn more: https://react.dev/warnings/conditional-use-of-use`)),Vb}}function Ki(e){try{return Bb(e)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Jb=e,Yb=!0,Vb):e}}function qi(){if(Jb===null)throw Error(`Expected a suspended thenable. This is a bug in React. Please file an issue.`);var e=Jb;return Jb=null,Yb=!1,e}function Ji(e){if(e===Vb||e===Ub)throw Error("Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.")}function Yi(e,t){return e===t?!0:e.tag!==t.tag||e.type!==t.type||e.key!==t.key||e.index!==t.index||e.tag===3&&e.stateNode!==t.stateNode||e.return===null||t.return===null?!1:Yi(e.return,t.return)}function Xi(e){var t=Qb;return e!=null&&(Qb=t===null?e:t.concat(e)),t}function Zi(){var e=Qb;if(e!=null){for(var t=e.length-1;0<=t;t--)if(e[t].name!=null){var n=e[t].debugTask;if(n!=null)return n}}return null}function Qi(e,t,n){for(var r=Object.keys(e.props),i=0;i<r.length;i++){var a=r[i];if(a!==`children`&&a!==`key`&&a!==`ref`){t===null&&(t=Mr(e,n.mode,0),t._debugInfo=Qb,t.return=n),w(t,function(e){console.error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key`, `ref`, and `children` props.",e)},a);break}}}function $i(e){var t=Zb;return Zb+=1,Xb===null&&(Xb=Ui()),Gi(Xb,e,t,null)}function ea(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function ta(e,t){throw t.$$typeof===Sm?Error(`A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`):(e=Object.prototype.toString.call(t),Error(`Objects are not valid as a React child (found: `+(e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)+`). If you meant to render a collection of children, use an array instead.`))}function na(e,t){var n=Zi();n===null?ta(e,t):n.run(ta.bind(null,e,t))}function ra(e,t){var n=S(e)||`Component`;nx[n]||(nx[n]=!0,t=t.displayName||t.name||`Component`,e.tag===3?console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,t,t,t):console.error(`Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,t,t,n,t,n))}function ia(e,t){var n=Zi();n===null?ra(e,t):n.run(ra.bind(null,e,t))}function aa(e,t){var n=S(e)||`Component`;rx[n]||(rx[n]=!0,t=String(t),e.tag===3?console.error(`Symbols are not valid as a React child.
  root.render(%s)`,t):console.error(`Symbols are not valid as a React child.
  <%s>%s</%s>`,n,t,n))}function oa(e,t){var n=Zi();n===null?aa(e,t):n.run(aa.bind(null,e,t))}function sa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=kr(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=134217730,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=134217730),t}function s(e,t,n,r){return t===null||t.tag!==6?(t=Pr(n,e.mode,r),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Qb,t):(t=i(t,n),t.return=e,t._debugInfo=Qb,t)}function c(e,t,n,r){var a=n.type;return a===Tm?(t=u(e,t,n.props.children,r,n.key),ea(t,n),Qi(n,t,e),t):t!==null&&(t.elementType===a||wr(t,n)||typeof a==`object`&&a&&a.$$typeof===Pm&&Ki(a)===t.type)?(t=i(t,n.props),ea(t,n),t.return=e,t._debugOwner=n._owner,t._debugInfo=Qb,t):(t=Mr(n,e.mode,r),ea(t,n),t.return=e,t._debugInfo=Qb,t)}function l(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ir(n,e.mode,r),t.return=e,t._debugInfo=Qb,t):(t=i(t,n.children||[]),t.return=e,t._debugInfo=Qb,t)}function u(e,t,n,r,a){return t===null||t.tag!==7?(t=Nr(n,e.mode,r,a),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Qb,t):(t=i(t,n),t.return=e,t._debugInfo=Qb,t)}function d(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Pr(``+t,e.mode,n),t.return=e,t._debugOwner=e,t._debugTask=e._debugTask,t._debugInfo=Qb,t;if(typeof t==`object`&&t){switch(t.$$typeof){case Cm:return n=Mr(t,e.mode,n),ea(n,t),n.return=e,e=Xi(t._debugInfo),n._debugInfo=Qb,Qb=e,n;case wm:return t=Ir(t,e.mode,n),t.return=e,t._debugInfo=Qb,t;case Pm:var r=Xi(t._debugInfo);return t=Ki(t),e=d(e,t,n),Qb=r,e}if(Hm(t)||ge(t))return n=Nr(t,e.mode,n,null),n.return=e,n._debugOwner=e,n._debugTask=e._debugTask,e=Xi(t._debugInfo),n._debugInfo=Qb,Qb=e,n;if(typeof t.then==`function`)return r=Xi(t._debugInfo),e=d(e,$i(t),n),Qb=r,e;if(t.$$typeof===km)return d(e,di(e,t),n);na(e,t)}return typeof t==`function`&&ia(e,t),typeof t==`symbol`&&oa(e,t),null}function f(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?s(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case Cm:return n.key===i?(i=Xi(n._debugInfo),e=c(e,t,n,r),Qb=i,e):null;case wm:return n.key===i?l(e,t,n,r):null;case Pm:return i=Xi(n._debugInfo),n=Ki(n),e=f(e,t,n,r),Qb=i,e}if(Hm(n)||ge(n))return i===null?(i=Xi(n._debugInfo),e=u(e,t,n,r,null),Qb=i,e):null;if(typeof n.then==`function`)return i=Xi(n._debugInfo),e=f(e,t,$i(n),r),Qb=i,e;if(n.$$typeof===km)return f(e,t,di(e,n),r);na(e,n)}return typeof n==`function`&&ia(e,n),typeof n==`symbol`&&oa(e,n),null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,s(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case Cm:return n=e.get(r.key===null?n:r.key)||null,e=Xi(r._debugInfo),t=c(t,n,r,i),Qb=e,t;case wm:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case Pm:var a=Xi(r._debugInfo);return r=Ki(r),t=m(e,t,n,r,i),Qb=a,t}if(Hm(r)||ge(r))return n=e.get(n)||null,e=Xi(r._debugInfo),t=u(t,n,r,i,null),Qb=e,t;if(typeof r.then==`function`)return a=Xi(r._debugInfo),t=m(e,t,n,$i(r),i),Qb=a,t;if(r.$$typeof===km)return m(e,t,n,di(t,r),i);na(t,r)}return typeof r==`function`&&ia(t,r),typeof r==`symbol`&&oa(t,r),null}function h(e,t,n,r){if(typeof n!=`object`||!n)return r;switch(n.$$typeof){case Cm:case wm:p(e,t,n);var i=n.key;if(typeof i!=`string`)break;if(r===null){r=new Set,r.add(i);break}if(!r.has(i)){r.add(i);break}w(t,function(){console.error("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",i)});break;case Pm:n=Ki(n),h(e,t,n,r)}return r}function _(i,o,s,c){for(var l=null,u=null,p=null,g=o,_=o=0,v=null;g!==null&&_<s.length;_++){g.index>_?(v=g,g=null):v=g.sibling;var y=f(i,g,s[_],c);if(y===null){g===null&&(g=v);break}l=h(i,y,s[_],l),e&&g&&y.alternate===null&&t(i,g),o=a(y,o,_),p===null?u=y:p.sibling=y,p=y,g=v}if(_===s.length)return n(i,g),q&&Rr(i,_),u;if(g===null){for(;_<s.length;_++)g=d(i,s[_],c),g!==null&&(l=h(i,g,s[_],l),o=a(g,o,_),p===null?u=g:p.sibling=g,p=g);return q&&Rr(i,_),u}for(g=r(g);_<s.length;_++)v=m(g,i,_,s[_],c),v!==null&&(l=h(i,v,s[_],l),e&&(y=v.alternate,y!==null&&g.delete(y.key===null?_:y.key)),o=a(v,o,_),p===null?u=v:p.sibling=v,p=v);return e&&g.forEach(function(e){return t(i,e)}),q&&Rr(i,_),u}function v(i,o,s,c){if(s==null)throw Error(`An iterable object provided no iterator.`);for(var l=null,u=null,p=o,g=o=0,_=null,v=null,y=s.next();p!==null&&!y.done;g++,y=s.next()){p.index>g?(_=p,p=null):_=p.sibling;var ee=f(i,p,y.value,c);if(ee===null){p===null&&(p=_);break}v=h(i,ee,y.value,v),e&&p&&ee.alternate===null&&t(i,p),o=a(ee,o,g),u===null?l=ee:u.sibling=ee,u=ee,p=_}if(y.done)return n(i,p),q&&Rr(i,g),l;if(p===null){for(;!y.done;g++,y=s.next())p=d(i,y.value,c),p!==null&&(v=h(i,p,y.value,v),o=a(p,o,g),u===null?l=p:u.sibling=p,u=p);return q&&Rr(i,g),l}for(p=r(p);!y.done;g++,y=s.next())_=m(p,i,g,y.value,c),_!==null&&(v=h(i,_,y.value,v),e&&(y=_.alternate,y!==null&&p.delete(y.key===null?g:y.key)),o=a(_,o,g),u===null?l=_:u.sibling=_,u=_);return e&&p.forEach(function(e){return t(i,e)}),q&&Rr(i,g),l}function y(e,r,a,s){if(typeof a==`object`&&a&&a.type===Tm&&a.key===null&&a.props.ref===void 0&&(Qi(a,null,e),a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case Cm:var c=Xi(a._debugInfo);a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===Tm){if(r.tag===7){n(e,r.sibling),s=i(r,a.props.children),ea(s,a),s.return=e,s._debugOwner=a._owner,s._debugInfo=Qb,Qi(a,s,e),e=s;break a}}else if(r.elementType===l||wr(r,a)||typeof l==`object`&&l&&l.$$typeof===Pm&&Ki(l)===r.type){n(e,r.sibling),s=i(r,a.props),ea(s,a),s.return=e,s._debugOwner=a._owner,s._debugInfo=Qb,e=s;break a}n(e,r);break}t(e,r),r=r.sibling}a.type===Tm?(s=Nr(a.props.children,e.mode,s,a.key),ea(s,a),s.return=e,s._debugOwner=e,s._debugTask=e._debugTask,s._debugInfo=Qb,Qi(a,s,e),e=s):(s=Mr(a,e.mode,s),ea(s,a),s.return=e,s._debugInfo=Qb,e=s)}return e=o(e),Qb=c,e;case wm:a:{for(c=a,a=c.key;r!==null;){if(r.key===a){if(r.tag===4&&r.stateNode.containerInfo===c.containerInfo&&r.stateNode.implementation===c.implementation){n(e,r.sibling),s=i(r,c.children||[]),s.return=e,e=s;break a}n(e,r);break}t(e,r),r=r.sibling}s=Ir(c,e.mode,s),s.return=e,e=s}return o(e);case Pm:return c=Xi(a._debugInfo),a=Ki(a),e=y(e,r,a,s),Qb=c,e}if(Hm(a))return _(e,r,a,s);if(ge(a)){if(c=a,a=ge(c),typeof a!=`function`)throw Error(`An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.`);return l=a.call(c),l===c?(e.tag!==0||Object.prototype.toString.call(e.type)!==`[object GeneratorFunction]`||Object.prototype.toString.call(l)!==`[object Generator]`)&&(ex||console.error("Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."),ex=!0):c.entries!==a||$b||(console.error(`Using Maps as children is not supported. Use an array of keyed ReactElements instead.`),$b=!0),v(e,r,l,s)}if(typeof a.then==`function`)return c=Xi(a._debugInfo),e=y(e,r,$i(a),s),Qb=c,e;if(a.$$typeof===km)return y(e,r,di(e,a),s);na(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(c=``+a,r!==null&&r.tag===6?(n(e,r.sibling),s=i(r,c),s.return=e,e=s):(n(e,r),s=Pr(c,e.mode,s),s.return=e,s._debugOwner=e,s._debugTask=e._debugTask,s._debugInfo=Qb,e=s),o(e)):(typeof a==`function`&&ia(e,a),typeof a==`symbol`&&oa(e,a),n(e,r))}return function(e,t,n,r){var i=Qb;Qb=null;try{Zb=0;var a=y(e,t,n,r);return Xb=null,a}catch(t){if(t===Vb||t===Ub)throw t;var o=g(29,t,null,e.mode);o.lanes=r,o.return=e;var s=o._debugInfo=Qb;if(o._debugOwner=e._debugOwner,o._debugTask=e._debugTask,s!=null){for(var c=s.length-1;0<=c;c--)if(typeof s[c].stack==`string`){o._debugOwner=s[c],o._debugTask=s[c].debugTask;break}}return o}finally{Qb=i}}}function ca(e,t){var n=Hm(e);return e=!n&&typeof ge(e)==`function`,n||e?(n=n?`array`:`iterable`,console.error(`A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>`,n,t,n),!1):!0}function la(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function da(e){return{lane:e,tag:ox,payload:null,callback:null,next:null}}function fa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,fx===r&&!dx){var i=S(e);console.error(`An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,i),dx=!0}return(fC&rC)===nC?(vr(e,r,t,n),Sr(e)):(i=r.pending,i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Sr(e),xr(e,null,n),t)}function pa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,T(e,n)}}function ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n}else e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ha(){if(px){var e=lb;if(e!==null)throw e}}function ga(e,t,n,r){px=!1;var i=e.updateQueue;ux=!1,fx=i.shared;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?($&f)===f:(r&f)===f){f!==0&&f===cb&&(px=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{f=e;var m=s,h=t,g=n;switch(m.tag){case sx:if(m=m.payload,typeof m==`function`){fy=!0;var _=m.call(g,d,h);if(f.mode&Bv){Ke(!0);try{m.call(g,d,h)}finally{Ke(!1)}}fy=!1,d=_;break a}d=m;break a;case lx:f.flags=f.flags&-65537|128;case ox:if(_=m.payload,typeof _==`function`){if(fy=!0,m=_.call(g,d,h),f.mode&Bv){Ke(!0);try{_.call(g,d,h)}finally{Ke(!1)}}fy=!1}else m=_;if(m==null)break a;d=U({},d,m);break a;case cx:ux=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),jC|=o,e.lanes=o,e.memoizedState=d}fx=null}function _a(e,t){if(typeof e!=`function`)throw Error(`Invalid argument passed as callback. Expected a function. Instead received: `+e);e.call(t)}function va(e,t){var n=e.shared.hiddenCallbacks;if(n!==null)for(e.shared.hiddenCallbacks=null,e=0;e<n.length;e++)_a(n[e],t)}function ya(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)_a(n[e],t)}function ba(e,t){var n=kC;xe(hx,n,e),xe(mx,t,e),kC=n|t.baseLanes}function xa(e){xe(hx,kC,e),xe(mx,mx.current,e)}function Sa(e){kC=hx.current,be(mx,e),be(hx,e)}function Ca(e){var t=e.alternate;xe(bx,bx.current&vx,e),xe(gx,e,e),_x===null&&(t===null||mx.current!==null||t.memoizedState!==null)&&(_x=e)}function wa(e){xe(bx,bx.current,e),xe(gx,e,e),_x===null&&(_x=e)}function Ta(e){e.tag===22?(xe(bx,bx.current,e),xe(gx,e,e),_x===null&&(_x=e)):Ea(e)}function Ea(e){xe(bx,bx.current,e),xe(gx,gx.current,e)}function Da(e){be(gx,e),_x===e&&(_x=null),be(bx,e)}function Oa(e,t){xe(gx,gx.current,e),xe(bx,t,e)}function ka(e){be(bx,e),be(gx,e),_x===e&&(_x=null)}function Aa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Zf(n)||Qf(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==`independent`){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function V(){var e=Z;Hx===null?Hx=[e]:Hx.push(e)}function H(){var e=Z;if(Hx!==null&&(Ux++,Hx[Ux]!==e)){var t=S(X);if(!Dx.has(t)&&(Dx.add(t),Hx!==null)){for(var n=``,r=0;r<=Ux;r++){var i=Hx[r],a=r===Ux?e:i;for(i=r+1+`. `+i;30>i.length;)i+=` `;i+=a+`
`,n+=i}console.error(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,t,n)}}}function ja(e){e==null||Hm(e)||console.error("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",Z,typeof e)}function Ma(){var e=S(X);Ax.has(e)||(Ax.add(e),console.error(`ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.`,e))}function Na(){throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`)}function Pa(e,t){if(Wx)return!1;if(t===null)return console.error(`%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.`,Z),!1;e.length!==t.length&&console.error(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,Z,`[`+t.join(`, `)+`]`,`[`+e.join(`, `)+`]`);for(var n=0;n<t.length&&n<e.length;n++)if(!H_(e[n],t[n]))return!1;return!0}function Fa(e,t,n,r,i,a){jx=a,X=t,Hx=e===null?null:e._debugHookTypes,Ux=-1,Wx=e!==null&&e.type!==t.type,(Object.prototype.toString.call(n)===`[object AsyncFunction]`||Object.prototype.toString.call(n)===`[object AsyncGeneratorFunction]`)&&(a=S(X),kx.has(a)||(kx.add(a),console.error("%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",a===null?`An unknown Component`:`<`+a+`>`))),t.memoizedState=null,t.updateQueue=null,t.lanes=0,W.H=e!==null&&e.memoizedState!==null?Jx:Hx===null?Kx:qx,Ix=a=(t.mode&Bv)!==G;var o=wb(n,r,i);if(Ix=!1,Fx&&(o=La(t,n,r,i)),a){Ke(!0);try{o=La(t,n,r,i)}finally{Ke(!1)}}return Ia(e,t),o}function Ia(e,t){t._debugHookTypes=Hx,t.dependencies===null?zx!==null&&(t.dependencies={lanes:0,firstContext:null,_debugThenableState:zx}):t.dependencies._debugThenableState=zx;var n=zx;if(Gb!==null&&Yi(Gb,t)&&(n!==null||Kb===null||qb||(qb=!0,console.error(Kb)),Kb=Gb=null),W.H=Gx,n=Mx!==null&&Mx.next!==null,jx=0,Hx=Z=Nx=Mx=X=null,Ux=-1,e!==null&&(e.flags&1206910976)!=(t.flags&1206910976)&&console.error(`Internal React error: Expected static flag was missing. Please notify the React team.`),Px=!1,Rx=0,zx=null,n)throw Error(`Rendered fewer hooks than expected. This may be caused by an accidental early return statement.`);e===null||mS||(e=e.dependencies,e!==null&&ci(e)&&(mS=!0)),Yb?(Yb=!1,e=!0):e=!1,e&&(t=S(t)||`Unknown`,Ox.has(t)||kx.has(t)||(Ox.add(t),console.error("`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary.")))}function La(e,t,n,r){X=e;var i=0;do{if(Fx&&(zx=null),Rx=0,Fx=!1,i>=Vx)throw Error(`Too many re-renders. React limits the number of renders to prevent an infinite loop.`);if(i+=1,Wx=!1,Nx=Mx=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}Ux=-1,W.H=Yx,a=wb(t,n,r)}while(Fx);return a}function Ra(){var e=W.H,t=e.useState()[0];return t=typeof t.then==`function`?Ga(t):t,e=e.useState()[0],(Mx===null?null:Mx.memoizedState)!==e&&(X.flags|=1024),t}function za(){var e=Lx!==0;return Lx=0,e}function Ba(e,t,n){t.updateQueue=e.updateQueue,t.flags=(t.mode&Vv)===G?t.flags&-2053:t.flags&-805308421,e.lanes&=~n}function Va(e){if(Px){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Px=!1}jx=0,Hx=Nx=Mx=X=null,Ux=-1,Z=null,Fx=!1,Rx=Lx=0,zx=null}function Ha(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nx===null?X.memoizedState=Nx=e:Nx=Nx.next=e,Nx}function Ua(){if(Mx===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=Mx.next;var t=Nx===null?X.memoizedState:Nx.next;if(t!==null)Nx=t,Mx=e;else{if(e===null)throw X.alternate===null?Error(`Update hook called on initial render. This is likely a bug in React. Please file an issue.`):Error(`Rendered more hooks than during the previous render.`);Mx=e,e={memoizedState:Mx.memoizedState,baseState:Mx.baseState,baseQueue:Mx.baseQueue,queue:Mx.queue,next:null},Nx===null?X.memoizedState=Nx=e:Nx=Nx.next=e}return Nx}function Wa(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ga(e){var t=Rx;return Rx+=1,zx===null&&(zx=Ui()),e=Gi(zx,e,t,X),t=X,(Nx===null?t.memoizedState:Nx.next)===null&&(t=t.alternate,W.H=t!==null&&t.memoizedState!==null?Jx:Kx),e}function Ka(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Ga(e);if(e.$$typeof===zm)return;if(e.$$typeof===km)return ui(e)}throw Error(`An unsupported type was passed to use(): `+String(e))}function qa(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Wa(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0||Wx)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=Lm;else n.length!==e&&console.error(`Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.`,n.length,e);return t.index++,n}function Ja(e,t){return typeof t==`function`?t(e):t}function Ya(e,t,n){var r=Ha();if(n!==void 0){var i=n(t);if(Ix){Ke(!0);try{n(t)}finally{Ke(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=is.bind(null,X,e),[r.memoizedState,e]}function Xa(e){return Za(Ua(),Mx,e)}function Za(e,t,n){var r=e.queue;if(r===null)throw Error(`Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)`);r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue!==i&&console.error(`Internal error: Expected work-in-progress queue to be a clone. This is a bug in React.`),t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var s=o=null,c=null,l=t,u=!1;do{var d=l.lane&-536870913;if(d===l.lane?(jx&d)===d:($&d)===d){var f=l.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d===cb&&(u=!0);else if((jx&f)===f){l=l.next,f===cb&&(u=!0);continue}else d={lane:0,revertLane:l.revertLane,gesture:null,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null},c===null?(s=c=d,o=a):c=c.next=d,X.lanes|=f,jC|=f;d=l.action,Ix&&n(a,d),a=l.hasEagerState?l.eagerState:n(a,d)}else f={lane:d,revertLane:l.revertLane,gesture:l.gesture,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null},c===null?(s=c=f,o=a):c=c.next=f,X.lanes|=d,jC|=d;l=l.next}while(l!==null&&l!==t);if(c===null?o=a:c.next=s,!H_(a,e.memoizedState)&&(mS=!0,u&&(n=lb,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=c,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Qa(e){var t=Ua(),n=t.queue;if(n===null)throw Error(`Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)`);n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);H_(a,t.memoizedState)||(mS=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function $a(e,t,n){var r=X,i=Ha();if(q){if(n===void 0)throw Error(`Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.`);var a=n();Ex||a===n()||(console.error(`The result of getServerSnapshot should be cached to avoid an infinite loop`),Ex=!0)}else{if(a=t(),Ex||(n=t(),H_(a,n)||(console.error(`The result of getSnapshot should be cached to avoid an infinite loop`),Ex=!0)),pC===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);$&127||to(r,t,a)}return i.memoizedState=a,n={value:a,getSnapshot:t},i.queue=n,ko(ro.bind(null,r,n,e),[e]),r.flags|=2048,To(Sx|Tx,{destroy:void 0},no.bind(null,r,n,a,t),null),a}function eo(e,t,n){var r=X,i=Ua(),a=q;if(a){if(n===void 0)throw Error(`Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.`);n=n()}else if(n=t(),!Ex){var o=t();H_(n,o)||(console.error(`The result of getSnapshot should be cached to avoid an infinite loop`),Ex=!0)}if((o=!H_((Mx||i).memoizedState,n))&&(i.memoizedState=n,mS=!0),i=i.queue,Oo(2048,Tx,ro.bind(null,r,i,e),[e]),e=i.getSnapshot!==t||o||Nx!==null&&(Nx.memoizedState.tag&Sx)!==xx,To(e?Sx|Tx:Tx,{destroy:void 0},no.bind(null,r,i,n,t),null),e){if(r.flags|=2048,pC===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);a||jx&127||to(r,t,n)}return n}function to(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=Wa(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function no(e,t,n,r){t.value=n,t.getSnapshot=r,io(t)&&ao(e)}function ro(e,t,n){return n(function(){io(t)&&(vi(2,`updateSyncExternalStore()`,e),ao(e))})}function io(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!H_(e,n)}catch{return!0}}function ao(e){var t=br(e,2);t!==null&&Xl(t,e,2)}function oo(e){var t=Ha();if(typeof e==`function`){var n=e;if(e=n(),Ix){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:e},t}function so(e){e=oo(e);var t=e.queue,n=as.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]}function co(e){var t=Ha();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ss.bind(null,X,!0,n),n.dispatch=t,[e,t]}function lo(e,t){return uo(Ua(),Mx,e,t)}function uo(e,t,n,r){return e.baseState=n,Za(e,Mx,typeof r==`function`?r:Ja)}function fo(e,t){var n=Ua();return Mx===null?(n.baseState=e,[e,n.queue.dispatch]):uo(n,Mx,e,t)}function po(e,t,n,r,i){if(cs(e))throw Error(`Cannot update action state while rendering.`);if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};W.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,mo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function mo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=W.T,o={};o.types=a===null?null:a.types,o._updatedFibers=new Set,W.T=o;try{var s=n(i,r),c=W.S;c!==null&&c(o,s),ho(e,t,s)}catch(n){_o(e,t,n)}finally{a!==null&&o.types!==null&&(a.types!==null&&a.types!==o.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),a.types=o.types),W.T=a,a===null&&o._updatedFibers&&(e=o._updatedFibers.size,o._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`))}}else try{o=n(i,r),ho(e,t,o)}catch(n){_o(e,t,n)}}function ho(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?(W.asyncTransitions++,n.then(Ko,Ko),n.then(function(n){go(e,t,n)},function(n){return _o(e,t,n)}),t.isTransition||console.error("An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop.")):go(e,t,n)}function go(e,t,n){t.status=`fulfilled`,t.value=n,vo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,mo(e,n)))}function _o(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,vo(t),t=t.next;while(t!==r)}e.action=null}function vo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function yo(e,t){return t}function bo(e,t){if(q){var n=pC.formState;if(n!==null){a:{var r=X;if(q){if(ty){b:{for(var i=ty,a=ay;i.nodeType!==8;)if(!a||(i=ep(i.nextSibling),i===null)){i=null;break b}a=i.data,i=a===pT||a===mT?i:null}if(i){ty=ep(i.nextSibling),r=i.data===pT;break a}}Jr(r)}r=!1}r&&(t=n[0])}}return n=Ha(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:t},n.queue=r,n=as.bind(null,X,r),r.dispatch=n,r=oo(!1),a=ss.bind(null,X,!1,r.queue),r=Ha(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=po.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function xo(e){return So(Ua(),Mx,e)}function So(e,t,n){if(t=Za(e,t,yo)[0],e=Xa(Ja)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Ga(t)}catch(e){throw e===Vb?Ub:e}else r=t;t=Ua();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,To(Sx|Tx,{destroy:void 0},Co.bind(null,i,n),null)),[r,a,e]}function Co(e,t){e.action=t}function wo(e){var t=Ua(),n=Mx;if(n!==null)return So(t,n,e);Ua(),t=t.memoizedState,n=Ua();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function To(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=Wa(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Eo(e){var t=Ha();return e={current:e},t.memoizedState=e}function Do(e,t,n,r){var i=Ha();X.flags|=e,i.memoizedState=To(Sx|t,{destroy:void 0},n,r===void 0?null:r)}function Oo(e,t,n,r){var i=Ua();r=r===void 0?null:r;var a=i.memoizedState.inst;Mx!==null&&r!==null&&Pa(r,Mx.memoizedState.deps)?i.memoizedState=To(t,a,n,r):(X.flags|=e,i.memoizedState=To(Sx|t,a,n,r))}function ko(e,t){(X.mode&Vv)===G?Do(8390656,Tx,e,t):Do(545261568,Tx,e,t)}function Ao(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=Wa(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function jo(e){var t=Ha(),n={impl:e};return t.memoizedState=n,function(){if((fC&rC)!==nC)throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);return n.impl.apply(void 0,arguments)}}function Mo(e){var t=Ua().memoizedState;return Ao({ref:t,nextImpl:e}),function(){if((fC&rC)!==nC)throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`);return t.impl.apply(void 0,arguments)}}function No(e,t){var n=4194308;return(X.mode&Vv)!==G&&(n|=268435456),Do(n,wx,e,t)}function Po(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return t.hasOwnProperty(`current`)||console.error(`Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.`,`an object with keys {`+Object.keys(t).join(`, `)+`}`),e=e(),t.current=e,function(){t.current=null}}function Fo(e,t,n){typeof t!=`function`&&console.error(`Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.`,t===null?`null`:typeof t),n=n==null?null:n.concat([e]);var r=4194308;(X.mode&Vv)!==G&&(r|=268435456),Do(r,wx,Po.bind(null,t,e),n)}function Io(e,t,n){typeof t!=`function`&&console.error(`Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.`,t===null?`null`:typeof t),n=n==null?null:n.concat([e]),Oo(4,wx,Po.bind(null,t,e),n)}function Lo(e,t){return Ha().memoizedState=[e,t===void 0?null:t],e}function Ro(e,t){var n=Ua();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Pa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zo(e,t){var n=Ha();t=t===void 0?null:t;var r=e();if(Ix){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Bo(e,t){var n=Ua();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Pa(t,r[1]))return r[0];if(r=e(),Ix){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function Vo(e,t){return Wo(Ha(),e,t)}function Ho(e,t){return Go(Ua(),Mx.memoizedState,e,t)}function Uo(e,t){var n=Ua();return Mx===null?Wo(n,e,t):Go(n,Mx.memoizedState,e,t)}function Wo(e,t,n){return n===void 0||jx&1073741824&&!($&261930)?e.memoizedState=t:(e.memoizedState=n,e=Jl(),X.lanes|=e,jC|=e,n)}function Go(e,t,n,r){return H_(n,t)?n:mx.current===null?!(jx&106)||jx&1073741824&&!($&261930)?(mS=!0,e.memoizedState=n):(e=Jl(),X.lanes|=e,jC|=e,t):(e=Wo(e,n,r),H_(e,t)||(mS=!0),e)}function Ko(){W.asyncTransitions--}function qo(e,t,n,r,i){var a=Um.p;Um.p=a!==0&&a<Lh?a:Lh;var o=W.T,s={};s.types=o===null?null:o.types,s._updatedFibers=new Set,W.T=s,ss(e,!1,t,n);try{var c=i(),l=W.S;if(l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`){W.asyncTransitions++,c.then(Ko,Ko);var u=zi(c,r);os(e,t,u,ql(e))}else os(e,t,r,ql(e))}catch(n){os(e,t,{then:function(){},status:`rejected`,reason:n},ql(e))}finally{Um.p=a,o!==null&&s.types!==null&&(o.types!==null&&o.types!==s.types&&console.error(`We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React.`),o.types=s.types),W.T=o,o===null&&s._updatedFibers&&(e=s._updatedFibers.size,s._updatedFibers.clear(),10<e&&console.warn(`Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.`))}}function Jo(e,t,n,r){if(e.tag!==5)throw Error(`Expected the form instance to be a HostComponent. This is a bug in React.`);var i=Yo(e).queue;yi(e),qo(e,i,t,QT,n===null?d:function(){return Xo(e),n(r)})}function Yo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:QT,baseState:QT,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:QT},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xo(e){W.T===null&&console.error(`requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition.`);var t=Yo(e);t.next===null&&(t=e.alternate.memoizedState),os(e,t.next.queue,{},ql(e))}function Zo(){var e=oo(!1);return e=qo.bind(null,X,e.queue,!0,!1),Ha().memoizedState=e,[!1,e]}function Qo(){var e=Xa(Ja)[0],t=Ua().memoizedState;return[typeof e==`boolean`?e:Ga(e),t]}function $o(){var e=Qa(Ja)[0],t=Ua().memoizedState;return[typeof e==`boolean`?e:Ga(e),t]}function es(){return ui($T)}function ts(){var e=Ha(),t=pC.identifierPrefix;if(q){var n=$v,r=Qv;n=(r&~(1<<32-Ah(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Lx++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Bx++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t}function ns(){return Ha().memoizedState=rs.bind(null,X)}function rs(e,t){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var r=ql(n),i=da(r),a=fa(n,i,r);a!==null&&(vi(r,`refresh()`,e),Xl(a,n,r),pa(a,n,r)),e=pi(),t!=null&&a!==null&&console.error(`The seed argument is not enabled outside experimental channels.`),i.payload={cache:e};return}n=n.return}}function is(e,t,n){var r=arguments;typeof r[3]==`function`&&console.error(`State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().`),r=ql(e);var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};cs(e)?ls(t,i):(i=yr(e,t,i,r),i!==null&&(vi(r,`dispatch()`,e),Xl(i,e,r),us(i,t,r)))}function as(e,t,n){var r=arguments;typeof r[3]==`function`&&console.error(`State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().`),r=ql(e),os(e,t,n,r)&&vi(r,`setState()`,e)}function os(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(cs(e))ls(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null)){var o=W.H;W.H=Zx;try{var s=t.lastRenderedState,c=a(s,n);if(i.hasEagerState=!0,i.eagerState=c,H_(c,s))return vr(e,t,i,0),pC===null&&_r(),!1}catch{}finally{W.H=o}}if(n=yr(e,t,i,r),n!==null)return Xl(n,e,r),us(n,t,r),!0}return!1}function ss(e,t,n,r){if(W.T===null&&cb===0&&console.error(`An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition.`),r={lane:2,revertLane:rd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},cs(e)){if(t)throw Error(`Cannot update optimistic state while rendering.`);console.error(`Cannot call startTransition while rendering.`)}else t=yr(e,n,r,2),t!==null&&(vi(2,`setOptimistic()`,e),Xl(t,e,2))}function cs(e){var t=e.alternate;return e===X||t!==null&&t===X}function ls(e,t){Fx=Px=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function us(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,T(e,n)}}function ds(e){if(e!==null&&typeof e!=`function`){var t=String(e);lS.has(t)||(lS.add(t),console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",e))}}function fs(e,t,n,r){var i=e.memoizedState,a=n(r,i);if(e.mode&Bv){Ke(!0);try{a=n(r,i)}finally{Ke(!1)}}a===void 0&&(t=_e(t)||`Component`,aS.has(t)||(aS.add(t),console.error(`%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.`,t))),i=a==null?i:U({},i,a),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}function ps(e,t,n,r,i,a,o){var s=e.stateNode;if(typeof s.shouldComponentUpdate==`function`){if(n=s.shouldComponentUpdate(r,a,o),e.mode&Bv){Ke(!0);try{n=s.shouldComponentUpdate(r,a,o)}finally{Ke(!1)}}return n===void 0&&console.error(`%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.`,_e(t)||`Component`),n}return t.prototype&&t.prototype.isPureReactComponent?!zn(n,r)||!zn(i,a):!0}function ms(e,t,n,r){var i=t.state;typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==i&&(e=S(e)||`Component`,eS.has(e)||(eS.add(e),console.error(`%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.`,e)),uS.enqueueReplaceState(t,t.state,null))}function hs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=U({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function gs(e){dv(e),console.warn(`%s

%s
`,dS?`An error occurred in the <`+dS+`> component.`:`An error occurred in one of your React components.`,`Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`)}function _s(e){var t=dS?`The above error occurred in the <`+dS+`> component.`:`The above error occurred in one of your React components.`,n=`React will try to recreate this component tree from scratch using the error boundary you provided, `+((fS||`Anonymous`)+`.`);if(typeof e==`object`&&e&&typeof e.environmentName==`string`){var r=e.environmentName;e=[`%o

%s

%s
`,e,t,n].slice(0),typeof e[0]==`string`?e.splice(0,1,eE+` `+e[0],tE,rE+r+rE,nE):e.splice(0,0,eE,tE,rE+r+rE,nE),e.unshift(console),r=iE.apply(console.error,e),r()}else console.error(`%o

%s

%s
`,e,t,n)}function vs(e){dv(e)}function ys(e,t){try{dS=t.source?S(t.source):null,fS=null;var n=t.value;if(W.actQueue!==null)W.thrownErrors.push(n);else{var r=e.onUncaughtError;r(n,{componentStack:t.stack})}}catch(e){setTimeout(function(){throw e})}}function bs(e,t,n){try{dS=n.source?S(n.source):null,fS=S(t);var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function xs(e,t,n){return n=da(n),n.tag=lx,n.payload={element:null},n.callback=function(){w(t.source,ys,e,t)},n}function Ss(e){return e=da(e),e.tag=lx,e}function Cs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Tr(n),w(r.source,bs,t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Tr(n),w(r.source,bs,t,n,r),typeof i!=`function`&&(KC===null?KC=new Set([this]):KC.add(this)),Mb(this,r),typeof i==`function`||!(n.lanes&2)&&console.error(`%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.`,S(n)||`Unknown`)})}function ws(e,t,n,r,i){if(n.flags|=32768,kh&&Gu(e,i),typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&si(t,n,i,!0),q&&(ny=!0),n=gx.current,n!==null){switch(n.tag){case 31:case 13:case 19:return _x===null?uu():n.alternate===null&&AC===aC&&(AC=cC),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Wb?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Iu(e,r,i)),!1;case 22:return n.flags|=65536,r===Wb?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Iu(e,r,i)),!1}throw Error(`Unexpected Suspense handler tag (`+n.tag+`). This is a bug in React.`)}return Iu(e,r,i),uu(),!1}if(q)return ny=!0,t=gx.current,t===null?(r!==oy&&ei(Lr(Error(`There was an error while hydrating but React was able to recover by instead client rendering the entire root.`,{cause:r}),n)),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Lr(r,n),i=xs(e.stateNode,r,i),ma(e,i),AC!==lC&&(AC=sC)):(t.tag===19&&console.error(`SuspenseList should never catch while hydrating. This is a bug in React.`),!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==oy&&ei(Lr(Error(`There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.`,{cause:r}),n))),!1;var a=Lr(Error(`There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.`,{cause:r}),n);if(IC===null?IC=[a]:IC.push(a),AC!==lC&&(AC=sC),t===null)return!0;r=Lr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=xs(n.stateNode,r,e),ma(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(KC===null||!KC.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ss(i),Cs(i,e,n,r),ma(n,i),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}function Ts(e,t,n,r){t.child=e===null?ax(t,null,n,r):ix(t,e.child,n,r)}function Es(e,t,n,r,i){n=n.render;var a=Cr(n);if(a!==n&&(n=a,e!==null&&(mS=!0)),a=t.ref,`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return li(t),r=Fa(e,t,n,o,a,i),s=za(),e!==null&&!mS?(Ba(e,t,i),ec(e,t,i)):(q&&s&&Br(t),t.flags|=1,Ts(e,t,r,i),t.child)}function Ds(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Or(a)&&a.defaultProps===void 0&&n.compare===null?(n=Cr(a),t.tag=15,t.type=n,Bs(t,a),Os(e,t,n,r,i)):(e=jr(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!tc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?zn:n,n(o,r)&&e.ref===t.ref)return ec(e,t,i)}return t.flags|=1,e=kr(a,r),e.ref=t.ref,e.return=t,t.child=e}function Os(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(zn(a,r)&&e.ref===t.ref&&t.type===e.type){if(mS=!1,t.pendingProps=r=a,tc(e,i))e.flags&131072&&(mS=!0);else return t.lanes=e.lanes,ec(e,t,i)}}return Is(e,t,n,r,i)}function ks(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:jv,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return js(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vi(t,a===null?null:a.cachePool),a===null?xa(t):ba(t,a),Ta(t);else return r=t.lanes=536870912,js(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Vi(t,null),xa(t),Ea(t)):(Vi(t,a.cachePool),ba(t,a),Ea(t),t.memoizedState=null);return Ts(e,t,i,n),t.child}function As(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:jv,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function js(e,t,n,r,i){var a=Bi();return a=a===null?null:{parent:gy._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Vi(t,null),xa(t),Ta(t),e!==null&&si(e,t,r,!0),t.childLanes=i,null}function Ms(e,t){var n=t.hidden;return n!==void 0&&console.error(`<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,!0===n?`hidden`:!1===n?`hidden={false}`:`hidden={...}`,n?`mode="hidden"`:`mode="visible"`),t=Gs({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ns(e,t,n){return ix(t,e.child,null,n),e=Ms(t,t.pendingProps),e.flags|=2,Da(t),t.memoizedState=null,e}function Ps(e,t,n){var r=t.pendingProps,i=!!(t.flags&128);if(t.flags&=-129,e===null){if(q){if(r.mode===`hidden`)return e=Ms(t,r),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},As(null,e);if(wa(t),(e=ty)?(n=Xf(e,ay),n=n!==null&&n.data===rT?n:null,n!==null&&(r={dehydrated:n,treeContext:Hr(),retryLane:536870912,hydrationErrors:null},t.memoizedState=r,r=Fr(n),r.return=t,t.child=r,ey=t,ty=null)):n=null,n===null)throw qr(t,e),Jr(t);return t.lanes=536870912,null}return Ms(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(wa(t),i){if(t.flags&256)t.flags&=-257,t=Ns(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(`Client rendering an Activity suspended it again. This is a bug in React.`)}else if(Kr(),n&536870912&&lu(t),mS||si(e,t,n,!1),i=(n&e.childLanes)!==0,mS||i){if(mx.current===null){if(r=pC,r!==null&&(o=it(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,br(e,o),Xl(r,e,o),pS;uu()}t=Ns(e,t,n)}else e=a.treeContext,ty=ep(o.nextSibling),ey=t,q=!0,iy=null,ny=!1,ry=null,ay=!1,e!==null&&Ur(t,e),t=Ms(t,r),t.flags|=134221824;return t}return a=e.child,r={mode:r.mode,children:r.children},n&536870912&&(n&e.lanes)!==0&&lu(t),e=kr(a,r),e.ref=t.ref,t.child=e,e.return=t,e}function Fs(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(`Expected ref to be a function, an object returned by React.createRef(), or undefined/null.`);(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Is(e,t,n,r,i){if(n.prototype&&typeof n.prototype.render==`function`){var a=_e(n)||`Unknown`;hS[a]||(console.error(`The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.`,a,a),hS[a]=!0)}return t.mode&Bv&&fb.recordLegacyContextWarning(t,null),e===null&&(Bs(t,t.type),n.contextTypes&&(a=_e(n)||`Unknown`,_S[a]||(_S[a]=!0,console.error(`%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)`,a)))),li(t),n=Fa(e,t,n,r,void 0,i),r=za(),e!==null&&!mS?(Ba(e,t,i),ec(e,t,i)):(q&&r&&Br(t),t.flags|=1,Ts(e,t,n,i),t.child)}function Ls(e,t,n,r,i,a){return li(t),Ux=-1,Wx=e!==null&&e.type!==t.type,t.updateQueue=null,n=La(t,r,n,i),Ia(e,t),r=za(),e!==null&&!mS?(Ba(e,t,a),ec(e,t,a)):(q&&r&&Br(t),t.flags|=1,Ts(e,t,n,a),t.child)}function Rs(e,t,n,r,i){switch(s(t)){case!1:var a=t.stateNode,o=new t.type(t.memoizedProps,a.context).state;a.updater.enqueueSetState(a,o,null);break;case!0:t.flags|=128,t.flags|=65536,a=Error(`Simulated error coming from DevTools`);var c=i&-i;if(t.lanes|=c,o=pC,o===null)throw Error(`Expected a work-in-progress root. This is a bug in React. Please file an issue.`);c=Ss(c),Cs(c,o,t,Lr(a,t)),ma(t,c)}if(li(t),t.stateNode===null){if(o=Iv,a=n.contextType,`contextType`in n&&a!==null&&(a===void 0||a.$$typeof!==km)&&!cS.has(n)&&(cS.add(n),c=a===void 0?` However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file.`:typeof a==`object`?a.$$typeof===Om?` Did you accidentally pass the Context.Consumer instead?`:` However, it is set to an object with keys {`+Object.keys(a).join(`, `)+`}.`:` However, it is set to a `+typeof a+`.`,console.error(`%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s`,_e(n)||`Component`,c)),typeof a==`object`&&a&&(o=ui(a)),a=new n(r,o),t.mode&Bv){Ke(!0);try{a=new n(r,o)}finally{Ke(!1)}}if(o=t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=uS,t.stateNode=a,a._reactInternals=t,a._reactInternalInstance=$x,typeof n.getDerivedStateFromProps==`function`&&o===null&&(o=_e(n)||`Component`,tS.has(o)||(tS.add(o),console.error("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",o,a.state===null?`null`:`undefined`,o))),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`){var l=c=o=null;if(typeof a.componentWillMount==`function`&&!0!==a.componentWillMount.__suppressDeprecationWarning?o=`componentWillMount`:typeof a.UNSAFE_componentWillMount==`function`&&(o=`UNSAFE_componentWillMount`),typeof a.componentWillReceiveProps==`function`&&!0!==a.componentWillReceiveProps.__suppressDeprecationWarning?c=`componentWillReceiveProps`:typeof a.UNSAFE_componentWillReceiveProps==`function`&&(c=`UNSAFE_componentWillReceiveProps`),typeof a.componentWillUpdate==`function`&&!0!==a.componentWillUpdate.__suppressDeprecationWarning?l=`componentWillUpdate`:typeof a.UNSAFE_componentWillUpdate==`function`&&(l=`UNSAFE_componentWillUpdate`),o!==null||c!==null||l!==null){a=_e(n)||`Component`;var u=typeof n.getDerivedStateFromProps==`function`?`getDerivedStateFromProps()`:`getSnapshotBeforeUpdate()`;rS.has(a)||(rS.add(a),console.error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,a,u,o===null?``:`
  `+o,c===null?``:`
  `+c,l===null?``:`
  `+l))}}a=t.stateNode,o=_e(n)||`Component`,a.render||(n.prototype&&typeof n.prototype.render==`function`?console.error("No `render` method found on the %s instance: did you accidentally return an object from the constructor?",o):console.error("No `render` method found on the %s instance: you may have forgotten to define `render`.",o)),!a.getInitialState||a.getInitialState.isReactClassApproved||a.state||console.error(`getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?`,o),a.getDefaultProps&&!a.getDefaultProps.isReactClassApproved&&console.error(`getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.`,o),a.contextType&&console.error(`contextType was defined as an instance property on %s. Use a static property to define contextType instead.`,o),n.childContextTypes&&!sS.has(n)&&(sS.add(n),console.error(`%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)`,o)),n.contextTypes&&!oS.has(n)&&(oS.add(n),console.error(`%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)`,o)),typeof a.componentShouldUpdate==`function`&&console.error(`%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.`,o),n.prototype&&n.prototype.isPureReactComponent&&a.shouldComponentUpdate!==void 0&&console.error(`%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.`,_e(n)||`A pure component`),typeof a.componentDidUnmount==`function`&&console.error(`%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?`,o),typeof a.componentDidReceiveProps==`function`&&console.error(`%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().`,o),typeof a.componentWillRecieveProps==`function`&&console.error(`%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?`,o),typeof a.UNSAFE_componentWillRecieveProps==`function`&&console.error(`%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?`,o),c=a.props!==r,a.props!==void 0&&c&&console.error("When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",o),a.defaultProps&&console.error(`Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.`,o,o),typeof a.getSnapshotBeforeUpdate!=`function`||typeof a.componentDidUpdate==`function`||nS.has(n)||(nS.add(n),console.error(`%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.`,_e(n))),typeof a.getDerivedStateFromProps==`function`&&console.error(`%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.`,o),typeof a.getDerivedStateFromError==`function`&&console.error(`%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.`,o),typeof n.getSnapshotBeforeUpdate==`function`&&console.error(`%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.`,o),(c=a.state)&&(typeof c!=`object`||Hm(c))&&console.error(`%s.state: must be set to an object or null`,o),typeof a.getChildContext==`function`&&typeof n.childContextTypes!=`object`&&console.error(`%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().`,o),a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},la(t),o=n.contextType,a.context=typeof o==`object`&&o?ui(o):Iv,a.state===r&&(o=_e(n)||`Component`,iS.has(o)||(iS.add(o),console.error(`%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.`,o))),t.mode&Bv&&fb.recordLegacyContextWarning(t,a),fb.recordUnsafeLifecycleWarnings(t,a),a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(fs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&(console.error(`%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.`,S(t)||`Component`),uS.enqueueReplaceState(a,a.state,null)),ga(t,r,a,i),ha(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Vv)!==G&&(t.flags|=268435456),a=!0}else if(e===null){a=t.stateNode;var d=t.memoizedProps;c=hs(n,d),a.props=c;var f=a.context;l=n.contextType,o=Iv,typeof l==`object`&&l&&(o=ui(l)),u=n.getDerivedStateFromProps,l=typeof u==`function`||typeof a.getSnapshotBeforeUpdate==`function`,d=t.pendingProps!==d,l||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(d||f!==o)&&ms(t,a,r,o),ux=!1;var p=t.memoizedState;a.state=p,ga(t,r,a,i),ha(),f=t.memoizedState,d||p!==f||ux?(typeof u==`function`&&(fs(t,n,u,r),f=t.memoizedState),(c=ux||ps(t,n,c,r,p,f,o))?(l||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Vv)!==G&&(t.flags|=268435456)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Vv)!==G&&(t.flags|=268435456),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=o,a=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),(t.mode&Vv)!==G&&(t.flags|=268435456),a=!1)}else{a=t.stateNode,ua(e,t),o=t.memoizedProps,l=hs(n,o),a.props=l,u=t.pendingProps,p=a.context,f=n.contextType,c=Iv,typeof f==`object`&&f&&(c=ui(f)),d=n.getDerivedStateFromProps,(f=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==u||p!==c)&&ms(t,a,r,c),ux=!1,p=t.memoizedState,a.state=p,ga(t,r,a,i),ha();var m=t.memoizedState;o!==u||p!==m||ux||e!==null&&e.dependencies!==null&&ci(e.dependencies)?(typeof d==`function`&&(fs(t,n,d,r),m=t.memoizedState),(l=ux||ps(t,n,l,r,p,m,c)||e!==null&&e.dependencies!==null&&ci(e.dependencies))?(f||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,m,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,m,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=c,a=l):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),a=!1)}if(c=a,Fs(e,t),o=!!(t.flags&128),c||o){if(c=t.stateNode,Re(t),o&&typeof n.getDerivedStateFromError!=`function`)n=null,Ey=-1;else if(n=Eb(c),t.mode&Bv){Ke(!0);try{Eb(c)}finally{Ke(!1)}}t.flags|=1,e!==null&&o?(t.child=ix(t,e.child,null,i),t.child=ix(t,null,n,i)):Ts(e,t,n,i),t.memoizedState=c.state,e=t.child}else e=ec(e,t,i);return i=t.stateNode,a&&i.props!==r&&(yS||console.error("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",S(t)||`a component`),yS=!0),e}function zs(e,t,n,r){return Qr(),t.flags|=256,Ts(e,t,n,r),t.child}function Bs(e,t){t&&t.childContextTypes&&console.error(`childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,t.displayName||t.name||`Component`),typeof t.getDerivedStateFromProps==`function`&&(e=_e(t)||`Unknown`,vS[e]||(console.error(`%s: Function components do not support getDerivedStateFromProps.`,e),vS[e]=!0)),typeof t.contextType==`object`&&t.contextType!==null&&(t=_e(t)||`Unknown`,gS[t]||(console.error(`%s: Function components do not support contextType.`,t),gS[t]=!0))}function Vs(e){return{baseLanes:e,cachePool:Hi()}}function Hs(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=PC),e}function Us(e,t,n){var r=t.pendingProps;o(t)&&(t.flags|=128);var i=!1,a=!!(t.flags&128),s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(bx.current&yx)!==0),s&&(i=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(q){if(i?Ca(t):Ea(t),(e=ty)?(n=Xf(e,ay),n=n!==null&&n.data!==rT?n:null,n!==null&&(s={dehydrated:n,treeContext:Hr(),retryLane:536870912,hydrationErrors:null},t.memoizedState=s,s=Fr(n),s.return=t,t.child=s,ey=t,ty=null)):n=null,n===null)throw qr(t,e),Jr(t);return t.lanes=Qf(n)?32:536870912,null}return a=r.children,r=r.fallback,i?(Ea(t),i=t.mode,a=Gs({mode:`hidden`,children:a},i),r=Nr(r,i,n,null),a.return=t,r.return=t,a.sibling=r,t.child=a,r=t.child,r.memoizedState=Vs(n),r.childLanes=Hs(e,s,n),t.memoizedState=CS,As(null,r)):(Ca(t),Ws(t,a))}var c=e.memoizedState;if(c!==null){var l=c.dehydrated;if(l!==null)return qs(e,t,a,s,r,l,c,n)}return i?(Ea(t),i=r.fallback,a=t.mode,c=e.child,l=c.sibling,r=kr(c,{mode:`hidden`,children:r.children}),r.subtreeFlags=c.subtreeFlags&1206910976,l===null?(i=Nr(i,a,n,null),i.flags|=2):i=kr(l,i),i.return=t,r.return=t,r.sibling=i,t.child=r,As(null,r),r=t.child,i=e.child.memoizedState,i===null?i=Vs(n):(a=i.cachePool,a===null?a=Hi():(c=gy._currentValue,a=a.parent===c?a:{parent:c,pool:c}),i={baseLanes:i.baseLanes|n,cachePool:a}),r.memoizedState=i,r.childLanes=Hs(e,s,n),t.memoizedState=CS,As(e.child,r)):(c!==null&&(n&62914560)===n&&(n&e.lanes)!==0&&lu(t),Ca(t),n=e.child,e=n.sibling,n=kr(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ws(e,t){return t=Gs({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Gs(e,t){return e=g(22,e,null,t),e.lanes=0,e}function Ks(e,t,n){return ix(t,e.child,null,n),e=Ws(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qs(e,t,n,r,i,a,o,s){if(n){if(t.flags&256)return Ca(t),t.flags&=-257,Ks(e,t,s);if(t.memoizedState!==null)return Ea(t),t.child=e.child,t.flags|=128,null;Ea(t);var c=i.fallback,l=t.mode,u=Gs({mode:`visible`,children:i.children},l);return c=Nr(c,l,s,null),c.flags|=2,u.return=t,c.return=t,u.sibling=c,t.child=u,ix(t,e.child,null,s),c=t.child,c.memoizedState=Vs(s),c.childLanes=Hs(e,r,s),t.memoizedState=CS,As(null,c)}if(Ca(t),Kr(),s&536870912&&lu(t),Qf(a)){if(r=a.nextSibling&&a.nextSibling.dataset,r){c=r.dgst;var d=r.msg;l=r.stck,u=r.cstck}return a=d,o=c,i=l,r=u,c=o,l=a,u=i,i=r,c!==Sb&&(r=Error(l||`The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.`),r.stack=u||``,r.digest=c,c=i===void 0?null:i,l={value:r,source:null,stack:c},typeof c==`string`&&Wv.set(r,l),ei(l)),Ks(e,t,s)}if(mS||si(e,t,s,!1),r=(s&e.childLanes)!==0,mS||r){if(mx.current!==null)return Ks(e,t,s);if(r=pC,r!==null&&(c=it(r,s),c!==0&&c!==o.retryLane))throw o.retryLane=c,br(e,c),Xl(r,e,c),pS;return Zf(a)||uu(),Ks(e,t,s)}return Zf(a)?(t.flags|=192,t.child=e.child,null):(e=o.treeContext,ty=ep(a.nextSibling),ey=t,q=!0,iy=null,ny=!1,ry=null,ay=!1,e!==null&&Ur(t,e),t=Ws(t,i.children),t.flags|=134221824,t)}function Js(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ai(e.return,t,n)}function Ys(e){for(var t=null;e!==null;){var n=e.alternate;n!==null&&Aa(n)===null&&(t=e),e=e.sibling}return t}function Xs(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Zs(e){var t=e.child;for(e.child=null;t!==null;){var n=t.sibling;t.sibling=e.child,e.child=t,t=n}}function Qs(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail,o=r.children,s=bx.current;if(t.flags&128)return Oa(t,s),null;if((r=(s&yx)!==0)?(s=s&vx|yx,t.flags|=128):s&=vx,Oa(t,s),s=i??`null`,i!=null&&i!==`forwards`&&i!==`backwards`&&i!==`unstable_legacy-backwards`&&i!==`together`&&i!==`independent`&&!bS[s]){if(bS[s]=!0,typeof i==`string`)switch(i.toLowerCase()){case`together`:case`forwards`:case`backwards`:case`independent`:console.error(`"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.`,i,i.toLowerCase());break;case`forward`:case`backward`:console.error(`"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.`,i,i.toLowerCase());break;default:console.error(`"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?`,i)}else console.error(`%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?`,i)}s=a??`null`,xS[s]||a==null||(a!==`visible`&&a!==`collapsed`&&a!==`hidden`?(xS[s]=!0,console.error(`"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?`,a)):i!=null&&i!==`forwards`&&i!==`backwards`&&i!==`unstable_legacy-backwards`&&(xS[s]=!0,console.error(`<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" (default) or "backwards". Did you mean to specify revealOrder="forwards"?`,a)));a:if((i==null||i===`forwards`||i===`backwards`||i===`unstable_legacy-backwards`)&&o!=null&&!1!==o){if(Hm(o)){for(s=0;s<o.length;s++)if(!ca(o[s],s))break a}else if(s=ge(o),typeof s==`function`){if(s=s.call(o))for(var c=s.next(),l=0;!c.done;c=s.next()){if(!ca(c.value,l))break a;l++}}else console.error(`A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?`,i)}if(i===`backwards`&&e!==null?(Zs(e),Ts(e,t,o,n),Zs(e)):Ts(e,t,o,n),q?(Wr(),o=Jv):o=0,!r&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Js(e,n,t);else if(e.tag===19)Js(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`backwards`:n=Ys(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null,Zs(t)),Xs(t,!0,i,null,a,o);break;case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Aa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Xs(t,!0,n,null,a,o);break;case`together`:Xs(t,!1,null,null,void 0,o);break;case`independent`:t.memoizedState=null;break;default:n=Ys(t.child),n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Xs(t,!1,i,n,a,o)}return t.child}function $s(e,t,n){var r=t.type,i=t.pendingProps,a=i.value;return`value`in i||wS||(wS=!0,console.error("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?")),ri(t,r,a),Ts(e,t,i.children,n),t.child}function ec(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ey=-1,jC|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(si(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(`Resuming work not yet implemented.`);if(t.child!==null){for(e=t.child,n=kr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=kr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function tc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&ci(e)))}function nc(e,t,n){switch(t.tag){case 3:Ce(t,t.stateNode.containerInfo),ri(t,gy,e.memoizedState.cache),Qr();break;case 27:case 5:Ee(t);break;case 4:Ce(t,t.stateNode.containerInfo);break;case 10:ri(t,t.type,t.memoizedProps.value);break;case 12:(n&t.childLanes)!==0&&(t.flags|=4),t.flags|=2048;var r=t.stateNode;r.effectDuration=-0,r.passiveEffectDuration=-0;break;case 31:if(t.memoizedState!==null)return t.flags|=128,wa(t),null;break;case 13:if(r=t.memoizedState,r!==null){if(r.dehydrated!==null)return Ca(t),t.flags|=128,null;r=si(e,t,n,!1);var i=t.child.childLanes;return r||(n&i)!==0?Us(e,t,n):(Ca(t),e=ec(e,t,n),e===null?null:e.sibling)}Ca(t);break;case 19:if(t.flags&128)return Qs(e,t,n);if(i=!!(e.flags&128),r=(n&t.childLanes)!==0,r||=(si(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Qs(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Oa(t,bx.current),r)break;return null;case 22:return t.lanes=0,ks(e,t,n,t.pendingProps);case 24:ri(t,gy,e.memoizedState.cache)}return ec(e,t,n)}function rc(e,t,n){if(t._debugNeedsRemount&&e!==null){n=jr(Cr(t.elementType),t.key,t.pendingProps,t._debugOwner||null,t.mode,t.lanes),n._debugStack=t._debugStack,n._debugTask=t._debugTask;var r=t.return;if(r===null)throw Error(`Cannot swap the root fiber.`);if(e.alternate=null,t.alternate=null,n.index=t.index,n.sibling=t.sibling,n.return=t.return,n.ref=t.ref,n._debugInfo=t._debugInfo,t===r.child)r.child=n;else{var i=r.child;if(i===null)throw Error(`Expected parent to have a child.`);for(;i.sibling!==t;)if(i=i.sibling,i===null)throw Error(`Expected to find the previous sibling.`);i.sibling=n}return t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e),n.flags|=134217730,n}if(e!==null){if(e.memoizedProps!==t.pendingProps||t.type!==e.type)mS=!0;else{if(!tc(e,n)&&!(t.flags&128))return mS=!1,nc(e,t,n);mS=!!(e.flags&131072)}}else mS=!1,(r=q)&&(Wr(),r=!!(t.flags&1048576)),r&&(r=t.index,Wr(),zr(t,Jv,r));switch(t.lanes=0,t.tag){case 16:a:if(r=t.pendingProps,e=Ki(t.elementType),e=Cr(e),t.type=e,typeof e==`function`)Or(e)?(r=hs(e,r),t.tag=1,t=Rs(null,t,e,r,n)):(t.tag=0,Bs(t,e),t=Is(null,t,e,r,n));else{if(e!=null){if(i=e.$$typeof,i===Am){t.tag=11,t=Es(null,t,e,r,n);break a}if(i===Nm){t.tag=14,t=Ds(null,t,e,r,n);break a}if(i===km){t.tag=10,t.type=e,t=$s(null,t,n);break a}}throw t=``,typeof e==`object`&&e&&e.$$typeof===Pm&&(t=` Did you wrap a component in React.lazy() more than once?`),n=_e(e)||e,Error(`Element type is invalid. Received a promise that resolves to: `+n+`. Lazy element type must resolve to a class or function.`+t)}return t;case 0:return Is(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=hs(r,t.pendingProps),Rs(e,t,r,i,n);case 3:a:{if(Ce(t,t.stateNode.containerInfo),e===null)throw Error(`Should have a current fiber. This is a bug in React.`);r=t.pendingProps;var a=t.memoizedState;i=a.element,ua(e,t),ga(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ri(t,gy,r),r!==a.cache&&oi(t,[gy],n,!0),ha(),r=o.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=zs(e,t,r,n);break a}if(r!==i){i=Lr(Error(`This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.`),t),ei(i),t=zs(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(ty=ep(e.firstChild),ey=t,q=!0,iy=null,ny=!1,ry=null,ay=!0,n=ax(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Qr(),r===i){t=ec(e,t,n);break a}Ts(e,t,r,n)}t=t.child}return t;case 26:return Fs(e,t),e===null?(n=gp(t.type,null,t.pendingProps,null))?t.memoizedState=n:q||(t.stateNode=Gd(t.type,t.pendingProps,Se(Xm.current),t)):t.memoizedState=gp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ee(t),e===null&&q&&(r=Se(Xm.current),i=Te(),r=t.stateNode=up(t.type,t.pendingProps,r,i,!1),ny||(i=Rd(r,t.type,t.pendingProps,i),i!==null&&(Gr(t,0).serverProps=i)),ey=t,ay=!0,i=ty,af(t.type)?(FT=i,ty=ep(r.firstChild)):ty=i),Ts(e,t,t.pendingProps.children,n),Fs(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&q&&(a=Te(),r=Xt(t.type,a.ancestorInfo),i=ty,(o=!i)||(o=Jf(i,t.type,t.pendingProps,ay),o===null?a=!1:(t.stateNode=o,ny||(a=Rd(o,t.type,t.pendingProps,a),a!==null&&(Gr(t,0).serverProps=a)),ey=t,ty=ep(o.firstChild),ay=!1,a=!0),o=!a),o&&(r&&qr(t,i),Jr(t))),Ee(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,qd(i,a)?r=null:o!==null&&qd(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Fa(e,t,Ra,null,null,n),$T._currentValue=i),Fs(e,t),Ts(e,t,r,n),t.child;case 6:return e===null&&q&&(n=t.pendingProps,e=Te(),r=e.ancestorInfo.current,n=r==null||Zt(n,r.tag,e.ancestorInfo.implicitRootScope),e=ty,(r=!e)||(r=Yf(e,t.pendingProps,ay),r===null?r=!1:(t.stateNode=r,ey=t,ty=null,r=!0),r=!r),r&&(n&&qr(t,e),Jr(t))),null;case 13:return Us(e,t,n);case 4:return Ce(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ix(t,null,r,n):Ts(e,t,r,n),t.child;case 11:return Es(e,t,t.type,t.pendingProps,n);case 7:return r=t.pendingProps,Fs(e,t),Ts(e,t,r,n),t.child;case 8:return Ts(e,t,t.pendingProps.children,n),t.child;case 12:return t.flags|=4,t.flags|=2048,r=t.stateNode,r.effectDuration=-0,r.passiveEffectDuration=-0,Ts(e,t,t.pendingProps.children,n),t.child;case 10:return $s(e,t,n);case 9:return i=t.type._context,r=t.pendingProps.children,typeof r!=`function`&&console.error(`A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it.`),li(t),i=ui(i),r=wb(r,i,void 0),t.flags|=1,Ts(e,t,r,n),t.child;case 14:return Ds(e,t,t.type,t.pendingProps,n);case 15:return Os(e,t,t.type,t.pendingProps,n);case 19:return Qs(e,t,n);case 31:return Ps(e,t,n);case 22:return ks(e,t,n,t.pendingProps);case 24:return li(t),r=ui(gy),e===null?(i=Bi(),i===null&&(i=pC,a=pi(),i.pooledCache=a,mi(a),a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},la(t),ri(t,gy,i)):((e.lanes&n)!==0&&(ua(e,t),ga(t,null,null,n),ha()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ri(t,gy,r),r!==i.cache&&oi(t,[gy],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ri(t,gy,r))),Ts(e,t,t.pendingProps.children,n),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=t.pendingProps,r.name!=null&&r.name!==`auto`?t.flags|=e===null?18882560:18874368:q&&Br(t),r.className!==void 0&&(i=typeof r.className==`string`?JSON.stringify(r.className):`{...}`,SS[i]||(SS[i]=!0,console.error(`<ViewTransition> doesn't accept a "className" prop. It has been renamed to "default".
-   <ViewTransition className=%s>
+   <ViewTransition default=%s>`,i,i))),e!==null&&e.memoizedProps.name!==r.name?t.flags|=4194816:Fs(e,t),Ts(e,t,r.children,n),t.child;case 29:throw t.pendingProps}throw Error(`Unknown unit of work tag (`+t.tag+`). This error is likely caused by a bug in React. Please file an issue.`)}function ic(e){e.flags|=4}function ac(e,t,n,r,i){var a;if((a=(e.mode&Hv)!==G)&&(a=n===null?jp(t,r):jp(t,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),a){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(ou())e.flags|=8192;else throw Jb=Wb,Hb}}else e.flags&=-16777217}function oc(e,t){if(t.type!==`stylesheet`||(t.state.loading&BT)!==IT)e.flags&=-16777217;else if(e.flags|=16777216,!Mp(t)){if(ou())e.flags|=8192;else throw Jb=Wb,Hb}}function sc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:$e(),e.lanes|=t,FC|=t)}function cc(e,t){if(!q)switch(e.tailMode){case`visible`:break;case`collapsed`:for(var n=e.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(t=e.tail,n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null}}function lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t){if((e.mode&K)!==G){for(var i=e.selfBaseDuration,a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&1206910976,r|=a.flags&1206910976,i+=a.treeBaseDuration,a=a.sibling;e.treeBaseDuration=i}else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&1206910976,r|=i.flags&1206910976,i.return=e,i=i.sibling}else if((e.mode&K)!==G){i=e.actualDuration,a=e.selfBaseDuration;for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,i+=o.actualDuration,a+=o.treeBaseDuration,o=o.sibling;e.actualDuration=i,e.treeBaseDuration=a}else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uc(e,t,n){var r=t.pendingProps;switch(Vr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lc(t),null;case 1:return lc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ii(gy,t),we(t),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zr(t)?(ti(),ic(t)):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,$r())),lc(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(ic(t),a===null?(lc(t),ac(t,i,null,r,n)):(lc(t),oc(t,a))):a?a===e.memoizedState?(lc(t),t.flags&=-16777217):(ic(t),lc(t),oc(t,a)):(e=e.memoizedProps,e!==r&&ic(t),lc(t),ac(t,i,e,r,n)),null;case 27:if(De(t),n=Se(Xm.current),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ic(t);else{if(!r){if(t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);return lc(t),t.subtreeFlags&=-33554433,null}e=Te(),Zr(t)?Yr(t,e):(e=up(i,r,n,e,!0),t.stateNode=e,ic(t))}return lc(t),t.subtreeFlags&=-33554433,null;case 5:if(De(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&ic(t);else{if(!r){if(t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);return lc(t),t.subtreeFlags&=-33554433,null}var o=Te();if(Zr(t))Yr(t,o);else{switch(a=Se(Xm.current),Xt(i,o.ancestorInfo),o=o.context,a=Hd(a),o){case vT:a=a.createElementNS(Ng,i);break;case yT:a=a.createElementNS(Mg,i);break;default:switch(i){case`svg`:a=a.createElementNS(Ng,i);break;case`math`:a=a.createElementNS(Mg,i);break;case`script`:a=a.createElement(`div`),ST||Kd(r)||(console.error(`Encountered a script tag while rendering React component. Scripts inside React components are never executed when rendering on the client. Consider using template tag instead (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template).`),ST=!0),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?a.createElement(`select`,{is:r.is}):a.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?a.createElement(i,{is:r.is}):a.createElement(i),i.indexOf(`-`)===-1&&(i!==i.toLowerCase()&&console.error(`<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.`,i),Object.prototype.toString.call(a)!==`[object HTMLUnknownElement]`||fh.call(CT,i)||(CT[i]=!0,console.error(`The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.`,i)))}}a[Vh]=t,a[Hh]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Od(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&ic(t)}}return lc(t),t.subtreeFlags&=-33554433,ac(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(`We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.`);if(e=Se(Xm.current),n=Te(),Zr(t)){if(e=t.stateNode,n=t.memoizedProps,i=!ny,r=null,a=ey,a!==null)switch(a.tag){case 3:i&&(i=np(e,n,r),i!==null&&(Gr(t,0).serverProps=i));break;case 27:case 5:r=a.memoizedProps,i&&(i=np(e,n,r),i!==null&&(Gr(t,0).serverProps=i))}e[Vh]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Td(e.nodeValue,n)),e||Jr(t,!0)}else i=n.ancestorInfo.current,i!=null&&Zt(r,i.tag,n.ancestorInfo.implicitRootScope),e=Hd(e).createTextNode(r),e[Vh]=t,t.stateNode=e}return lc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Zr(t),n!==null){if(e===null){if(!r)throw Error(`A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.`);if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(`Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue.`);e[Vh]=t,lc(t),(t.mode&K)!==G&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration))}else ti(),Qr(),!(t.flags&128)&&(n=t.memoizedState=null),t.flags|=4,lc(t),(t.mode&K)!==G&&n!==null&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration));e=!1}else n=$r(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Da(t),t):(Da(t),null);if(t.flags&128)throw Error(`Client rendering an Activity suspended it again. This is a bug in React.`)}return lc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=r,a=Zr(t),i!==null&&i.dehydrated!==null){if(e===null){if(!a)throw Error(`A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.`);if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(`Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.`);a[Vh]=t,lc(t),(t.mode&K)!==G&&i!==null&&(i=t.child,i!==null&&(t.treeBaseDuration-=i.treeBaseDuration))}else ti(),Qr(),!(t.flags&128)&&(i=t.memoizedState=null),t.flags|=4,lc(t),(t.mode&K)!==G&&i!==null&&(i=t.child,i!==null&&(t.treeBaseDuration-=i.treeBaseDuration));i=!1}else i=$r(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Da(t),t):(Da(t),null)}return Da(t),t.flags&128?(t.lanes=n,(t.mode&K)!==G&&Ii(t),t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),sc(t,t.updateQueue),lc(t),(t.mode&K)!==G&&n&&(e=t.child,e!==null&&(t.treeBaseDuration-=e.treeBaseDuration)),null);case 4:return we(t),e===null&&ud(t.stateNode.containerInfo),t.flags|=67108864,lc(t),null;case 10:return ii(t.type,t),lc(t),null;case 19:if(ka(t),r=t.memoizedState,r===null)return lc(t),null;if(i=!!(t.flags&128),a=r.rendering,a===null){if(i)cc(r,!1);else{if(AC!==aC||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Aa(e),a!==null){for(t.flags|=128,cc(r,!1),e=a.updateQueue,t.updateQueue=e,sc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ar(n,e),n=n.sibling;return Oa(t,bx.current&vx|yx),q&&Rr(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&_h()>HC&&(t.flags|=128,i=!0,cc(r,!1),t.lanes=4194304)}}else{if(!i){if(e=Aa(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,sc(t,e),cc(r,!0),r.tail===null&&r.tailMode!==`collapsed`&&r.tailMode!==`visible`&&!a.alternate&&!q)return lc(t),null}else 2*_h()-r.renderingStartTime>HC&&n!==536870912&&(t.flags|=128,i=!0,cc(r,!1),t.lanes=4194304)}r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}if(r.tail!==null){e=r.tail;a:{for(n=e;n!==null;){if(n.alternate!==null){n=!1;break a}n=n.sibling}n=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=_h(),e.sibling=null,a=bx.current,a=i?a&vx|yx:a&vx,r.tailMode===`visible`||r.tailMode===`collapsed`||!n||q?Oa(t,a):(n=a,xe(gx,t,t),xe(bx,n,t),_x===null&&(_x=t)),q&&Rr(t,r.treeForkCount),e}return lc(t),null;case 22:case 23:return Da(t),Sa(t),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(lc(t),t.subtreeFlags&6&&(t.flags|=8192)):lc(t),n=t.updateQueue,n!==null&&sc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&be(db,t),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ii(gy,t),lc(t),null;case 25:return null;case 30:return t.flags|=33554432,lc(t),null}throw Error(`Unknown unit of work tag (`+t.tag+`). This error is likely caused by a bug in React. Please file an issue.`)}function dc(e,t){switch(Vr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&K)!==G&&Ii(t),t):null;case 3:return ii(gy,t),we(t),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return De(t),null;case 31:if(t.memoizedState!==null){if(Da(t),t.alternate===null)throw Error(`Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.`);Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&K)!==G&&Ii(t),t):null;case 13:if(Da(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(`Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.`);Qr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&K)!==G&&Ii(t),t):null;case 19:return ka(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return we(t),null;case 10:return ii(t.type,t),null;case 22:case 23:return Da(t),Sa(t),e!==null&&be(db,t),e=t.flags,e&65536?(t.flags=e&-65537|128,(t.mode&K)!==G&&Ii(t),t):null;case 24:return ii(gy,t),null;case 25:return null;default:return null}}function fc(e,t){switch(Vr(t),t.tag){case 3:ii(gy,t),we(t);break;case 26:case 27:case 5:De(t);break;case 4:we(t);break;case 31:t.memoizedState!==null&&Da(t);break;case 13:Da(t);break;case 19:ka(t);break;case 10:ii(t.type,t);break;case 22:case 23:Da(t),Sa(t),e!==null&&be(db,t);break;case 24:ii(gy,t)}}function pc(e){return(e.mode&K)!==G}function mc(e,t){pc(e)?(Fi(),gc(t,e),Ni()):gc(t,e)}function hc(e,t,n){pc(e)?(Fi(),_c(n,e,t),Ni()):_c(n,e,t)}function gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e&&(r=void 0,(e&Cx)!==xx&&(Tw=!0),r=w(t,Ib,n),(e&Cx)!==xx&&(Tw=!1),r!==void 0&&typeof r!=`function`)){var a=void 0;a=(n.tag&wx)===0?(n.tag&Cx)===0?`useEffect`:`useInsertionEffect`:`useLayoutEffect`;var o=void 0;o=r===null?` You returned null. If your effect does not require clean up, return undefined (or nothing).`:typeof r.then==`function`?`

It looks like you wrote `+a+`(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

`+a+`(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching`:` You returned: `+r,w(t,function(e,t){console.error(`%s must not return anything besides a function, which is used for clean-up.%s`,e,t)},a,o)}n=n.next}while(n!==i)}}catch(e){Fu(t,t.return,e)}}function _c(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;s!==void 0&&(o.destroy=void 0,(e&Cx)!==xx&&(Tw=!0),i=t,w(i,Rb,i,n,s),(e&Cx)!==xx&&(Tw=!1))}r=r.next}while(r!==a)}}catch(e){Fu(t,t.return,e)}}function vc(e,t){pc(e)?(Fi(),gc(t,e),Ni()):gc(t,e)}function yc(e,t,n){pc(e)?(Fi(),_c(n,e,t),Ni()):_c(n,e,t)}function bc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;e.type.defaultProps||`ref`in e.memoizedProps||yS||(n.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",S(e)||`instance`),n.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",S(e)||`instance`));try{w(e,ya,t,n)}catch(t){Fu(e,e.return,t)}}}function xc(e,t,n){return e.getSnapshotBeforeUpdate(t,n)}function Sc(e,t){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e.type.defaultProps||`ref`in e.memoizedProps||yS||(t.props!==e.memoizedProps&&console.error("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",S(e)||`instance`),t.state!==e.memoizedState&&console.error("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",S(e)||`instance`));try{var i=hs(e.type,n),a=w(e,xc,t,i,r);n=TS,a!==void 0||n.has(e.type)||(n.add(e.type),w(e,function(){console.error(`%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.`,S(e))})),t.__reactInternalSnapshotBeforeUpdate=a}catch(t){Fu(e,e.return,t)}}function Cc(e,t,n){n.props=hs(e.type,e.memoizedProps),n.state=e.memoizedState,pc(e)?(Fi(),w(e,Pb,e,t,n),Ni()):w(e,Pb,e,t,n)}function wc(e){var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;var r=Xn(e.memoizedProps,n);(n.ref===null||n.ref.name!==r)&&(n.ref=Df(r)),n=n.ref;break;case 7:e.stateNode===null&&(n=new Of(e),oe(e,Uf,n),e.stateNode=n),n=e.stateNode;break;default:n=e.stateNode}if(typeof t==`function`){if(pc(e))try{Fi(),e.refCleanup=t(n)}finally{Ni()}else e.refCleanup=t(n)}else typeof t==`string`?console.error(`String refs are no longer supported.`):t.hasOwnProperty(`current`)||console.error(`Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().`,S(e)),t.current=n}}function Tc(e,t){try{w(e,wc,e)}catch(n){Fu(e,t,n)}}function Ec(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{if(pc(e))try{Fi(),w(e,r)}finally{Ni(e)}else w(e,r)}catch(n){Fu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{if(pc(e))try{Fi(),w(e,n,null)}finally{Ni(e)}else w(e,n,null)}catch(n){Fu(e,t,n)}else n.current=null}}function Dc(e,t,n,r){var i=e.memoizedProps,a=i.id,o=i.onCommit;i=i.onRender,t=t===null?`mount`:`update`,ib&&(t=`nested-update`),typeof i==`function`&&i(a,t,e.actualDuration,e.treeBaseDuration,e.actualStartTime,n),typeof o==`function`&&o(a,t,r,n)}function Oc(e,t,n,r){var i=e.memoizedProps;e=i.id,i=i.onPostCommit,t=t===null?`mount`:`update`,ib&&(t=`nested-update`),typeof i==`function`&&i(e,t,r,n)}function kc(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var n=0;n<t.length;n++)Gf(e.stateNode,t[n])}function Ac(e){for(var t=e.return;t!==null&&(Nc(t)&&Gf(e.stateNode,t.stateNode),!Mc(t));)t=t.return}function jc(e){for(var t=e.return;t!==null&&(Nc(t)&&Kf(e.stateNode,t.stateNode),!Mc(t));)t=t.return}function Mc(e){return e.tag===5||e.tag===3||e.tag===27}function Nc(e){return e&&e.tag===7&&e.stateNode!==null}function Pc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{w(e,Qd,r,t,n,e)}catch(t){Fu(e,e.return,t)}}function Fc(e,t,n){try{w(e,ef,e.stateNode,e.type,n,t,e)}catch(t){Fu(e,e.return,t)}}function Ic(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&af(e.type)||e.tag===4}function Lc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Ic(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&af(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rc(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(rf(n),(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(i,t)):(rf(n),t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(i),i=n._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=un)),kc(e,r),rg=!0;else if(i!==4&&(i===27&&(kc(e,r),r=null,af(e.type)&&(n=e.stateNode,t=null)),e=e.child,e!==null))for(Rc(e,t,n,r),e=e.sibling;e!==null;)Rc(e,t,n,r),e=e.sibling}function zc(e,t,n,r){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?n.insertBefore(i,t):n.appendChild(i),kc(e,r),rg=!0;else if(i!==4&&(i===27&&(kc(e,r),r=null,af(e.type)&&(n=e.stateNode)),e=e.child,e!==null))for(zc(e,t,n,r),e=e.sibling;e!==null;)zc(e,t,n,r),e=e.sibling}function Bc(e){for(var t,n=e.return;n!==null;){if(Ic(n)){t=n;break}n=n.return}n=null;for(var r=e.return;r!==null;){if(Nc(r)){var i=r.stateNode;n===null?n=[i]:n.push(i)}if(Mc(r))break;r=r.return}if(t==null)throw Error(`Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.`);switch(t.tag){case 27:t=t.stateNode,r=Lc(e),zc(e,r,t,n);break;case 5:r=t.stateNode,t.flags&32&&(tf(r),t.flags&=-33),t=Lc(e),zc(e,t,r,n);break;case 3:case 4:t=t.stateNode.containerInfo,r=Lc(e),Rc(e,r,t,n);break;default:throw Error(`Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.`)}}function Vc(e){var t=e.stateNode,n=e.memoizedProps;try{w(e,dp,e.type,n,t,e)}catch(t){Fu(e,e.return,t)}}function Hc(e){(e.tag===30||e.subtreeFlags&33554432)&&(ES=!0)}function Uc(){var e=OS;return OS=null,e}function Wc(e,t,n,r,i){return kS=0,(t=Gc(e.child,t,n,r,i))&&e._debugTask!=null&&tb===null&&(tb=e._debugTask),t}function Gc(e,t,n,r,i){for(var a=!1;e!==null;){if(e.tag===5){var o=e.stateNode;if(r!==null){var s=bf(o);r.push(s),s.view&&(a=!0)}else a||bf(o).view&&(a=!0);ES=!0,_f(o,kS===0?t:t+`_`+kS,n),kS++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||Gc(e.child,t,n,r,i)&&(a=!0));e=e.sibling}return a}function Kc(e,t){for(;e!==null;)e.tag===5?vf(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||Kc(e.child,t)),e=e.sibling}function qc(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(qc(e),e.tag===30&&e.flags&18874368&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name===`auto`)throw Error(`Found a pair with an auto name. This is a bug in React.`);var n=t.name;t=Qn(t.default,t.share),t!==`none`&&(Wc(e,n,t,null,!1)||Kc(e.child,!1))}e=e.sibling}}function Jc(e,t){if(e.tag===30){var n=e.stateNode,r=e.memoizedProps,i=Xn(r,n),a=Qn(r.default,n.paired?r.share:r.enter);a===`none`?qc(e):Wc(e,i,a,null,!1)?(qc(e),n.paired||t||Yl(e,r.onEnter)):Kc(e.child,!1)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Jc(e,t),e=e.sibling;else qc(e)}function Yc(e){if(DS!==null&&DS.size!==0){var t=DS;if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var n=e.memoizedProps,r=n.name;if(r!=null&&r!==`auto`){var i=t.get(r);if(i!==void 0){var a=Qn(n.default,n.share);if(a!==`none`&&(Wc(e,r,a,null,!1)?(a=e.stateNode,i.paired=a,a.paired=i,Yl(e,n.onShare)):Kc(e.child,!1)),t.delete(r),t.size===0)break}}}Yc(e)}e=e.sibling}}}function Xc(e){if(e.tag===30){var t=e.memoizedProps,n=Xn(t,e.stateNode),r=DS===null?void 0:DS.get(n),i=Qn(t.default,r===void 0?t.exit:t.share);i!==`none`&&(Wc(e,n,i,null,!1)?r===void 0?Yl(e,t.onExit):(i=e.stateNode,r.paired=i,i.paired=r,DS.delete(n),Yl(e,t.onShare)):Kc(e.child,!1)),DS!==null&&Yc(e)}else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)Xc(e),e=e.sibling;else DS!==null&&Yc(e)}function Zc(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,n=Xn(t,e.stateNode);t=Qn(t.default,t.update),e.flags&=-5,t!==`none`&&Wc(e,n,t,e.memoizedState=[],!1)}else e.subtreeFlags&33554432&&Zc(e);e=e.sibling}}function Qc(e){if(e.subtreeFlags&18874368)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&e.flags&18874368){var t=e.stateNode;t.paired!==null&&(t.paired=null,Kc(e.child,!1))}Qc(e)}e=e.sibling}}function $c(e){if(e.tag===30)e.stateNode.paired=null,Kc(e.child,!1),Qc(e);else if(e.subtreeFlags&33554432)for(e=e.child;e!==null;)$c(e),e=e.sibling;else Qc(e)}function el(e){for(e=e.child;e!==null;)e.tag===30?Kc(e.child,!1):e.subtreeFlags&33554432&&el(e),e=e.sibling}function tl(e,t,n,r,i,a,o){for(var s=!1;t!==null;){if(t.tag===5){var c=t.stateNode;if(a!==null&&kS<a.length){var l=a[kS],u=bf(c);(l.view||u.view)&&(s=!0);var d;if(d=!(e.flags&4)){if(u.clip)d=!0;else{d=l.rect;var f=u.rect;d=d.y!==f.y||d.x!==f.x||d.height!==f.height||d.width!==f.width}}d&&(e.flags|=4),u.abs?u=!l.abs:(l=l.rect,u=u.rect,u=l.height!==u.height||l.width!==u.width),u&&(e.flags|=32)}else e.flags|=32;e.flags&4&&_f(c,kS===0?n:n+`_`+kS,i),s&&e.flags&4||(OS===null&&(OS=[]),OS.push(c,kS===0?r:r+`_`+kS,t.memoizedProps)),kS++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&o?e.flags|=t.flags&32:tl(e,t.child,n,r,i,a,o)&&(s=!0));t=t.sibling}return s}function nl(e,t){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,r=e.stateNode,i=Xn(n,r),a=Qn(n.default,n.update);if(t){r=r.clones;var o=r===null?null:r.map(xf)}else o=e.memoizedState,e.memoizedState=null;r=e;var s=e.child,c=i;kS=0,a=tl(r,s,c,i,a,o,!1),e.flags&4&&a&&(t||Yl(e,n.onUpdate))}else e.subtreeFlags&33554432&&nl(e,t);e=e.sibling}}function rl(e){var t=e.memoizedProps.name;if(t!=null&&t!==`auto`){var n=AS.get(t);if(n!==void 0){if(n!==e&&n!==e.alternate&&!jS[t]){jS[t]=!0;var r=JSON.stringify(t);w(e,function(){console.error(`There are two <ViewTransition name=%s> components with the same name mounted at the same time. This is not supported and will cause View Transitions to error. Try to use a more unique name e.g. by using a namespace prefix and adding the id of an item to the name.`,r)}),w(n,function(){console.error(`The existing <ViewTransition name=%s> duplicate has this stack trace.`,r)})}}else AS.set(t,e)}}function il(e){var t=e.memoizedProps.name;if(t!=null&&t!==`auto`){var n=AS.get(t);n===void 0||n!==e&&n!==e.alternate||AS.delete(t)}}function al(e,t){return t.tag===31?(t=t.memoizedState,e.memoizedState!==null&&t===null):t.tag===13?(e=e.memoizedState,t=t.memoizedState,e!==null&&e.dehydrated!==null&&(t===null||t.dehydrated===null)):t.tag===3&&e.memoizedState.isDehydrated&&!(t.flags&256)}function ol(e,t,n){if(e=e.containerInfo,bT=gE,e=Wn(e),Gn(e)){if(`selectionStart`in e)var r={start:e.selectionStart,end:e.selectionEnd};else a:{r=(r=e.ownerDocument)&&r.defaultView||window;var i=r.getSelection&&r.getSelection();if(i&&i.rangeCount!==0){r=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==r||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===r&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}r=c===-1||l===-1?null:{start:c,end:l}}else r=null}r||={start:0,end:0}}else r=null;for(xT={focusedElem:e,selectionRange:r},gE=!1,n=(n&335544064)===n,BS=t,t=n?9270:1024;BS!==null;){if(e=BS,n&&(r=e.deletions,r!==null))for(a=0;a<r.length;a++)n&&Xc(r[a]);if(e.alternate===null&&e.flags&2)n&&Hc(e),sl(n);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&Xc(r),sl(n);continue}if(r!==null&&r.memoizedState!==null){n&&Hc(e),sl(n);continue}}r=e.child,(e.subtreeFlags&t)!==0&&r!==null?(r.return=e,BS=r):(n&&Zc(e),sl(n))}}DS=null}function sl(e){for(;BS!==null;){var t=BS,n=t,r=e,i=n.alternate,a=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:a&1024&&i!==null&&Sc(n,i);break;case 3:if(a&1024){if(r=n.stateNode.containerInfo,n=r.nodeType,n===9)qf(r);else if(n===1)switch(r.nodeName){case`HEAD`:case`HTML`:case`BODY`:qf(r);break;default:r.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:r&&i!==null&&(r=i,i=n,n=Xn(r.memoizedProps,r.stateNode),i=i.memoizedProps,i=Qn(i.default,i.update),i!==`none`&&Wc(r,n,i,r.memoizedState=[],!0));break;default:if(a&1024)throw Error(`This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.`)}if(r=t.sibling,r!==null){r.return=t.return,BS=r;break}BS=t.return}}function cl(e,t,n){var r=wi(),i=Ei(),a=Oi(),o=ki(),s=n.flags;switch(n.tag){case 0:case 11:case 15:Tl(e,n),s&4&&mc(n,wx|Sx);break;case 1:if(Tl(e,n),s&4){if(e=n.stateNode,t===null)n.type.defaultProps||`ref`in n.memoizedProps||yS||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",S(n)||`instance`),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",S(n)||`instance`)),pc(n)?(Fi(),w(n,Ob,n,e),Ni()):w(n,Ob,n,e);else{var c=hs(n.type,t.memoizedProps);t=t.memoizedState,n.type.defaultProps||`ref`in n.memoizedProps||yS||(e.props!==n.memoizedProps&&console.error("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",S(n)||`instance`),e.state!==n.memoizedState&&console.error("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",S(n)||`instance`)),pc(n)?(Fi(),w(n,Ab,n,e,c,t,e.__reactInternalSnapshotBeforeUpdate),Ni()):w(n,Ab,n,e,c,t,e.__reactInternalSnapshotBeforeUpdate)}}s&64&&bc(n),s&512&&Tc(n,n.return);break;case 3:if(t=bi(),Tl(e,n),s&64&&(s=n.updateQueue,s!==null)){if(c=null,n.child!==null)switch(n.child.tag){case 27:case 5:c=n.child.stateNode;break;case 1:c=n.child.stateNode}try{w(n,ya,s,c)}catch(e){Fu(n,n.return,e)}}e.effectDuration+=xi(t);break;case 27:t===null&&s&4&&Vc(n);case 26:case 5:if(Tl(e,n),t===null){if(s&4)Pc(n);else if(s&64){e=n.type,t=n.memoizedProps,c=n.stateNode;try{w(n,$d,c,e,t,n)}catch(e){Fu(n,n.return,e)}}}s&512&&Tc(n,n.return);break;case 12:if(s&4){s=bi(),Tl(e,n),e=n.stateNode,e.effectDuration+=Si(s);try{w(n,Dc,n,t,Cy,e.effectDuration)}catch(e){Fu(n,n.return,e)}}else Tl(e,n);break;case 31:Tl(e,n),s&4&&hl(e,n);break;case 13:Tl(e,n),s&4&&gl(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=zu.bind(null,n),$f(e,s))));break;case 22:if(s=n.memoizedState!==null||FS,!s){var l=t!==null&&t.memoizedState!==null||IS;t=FS,c=IS,FS=s,(IS=l)&&!c?(s=PS,n.subtreeFlags&8772&&(s|=NS),kl(e,n,s),(n.mode&K)!==G&&0<=J&&0<=Y&&.05<Y-J&&or(n,J,Y)):Tl(e,n),FS=t,IS=c}break;case 30:s&18874368&&rl(n),Tl(e,n),s&512&&Tc(n,n.return);break;case 7:s&512&&Tc(n,n.return);default:Tl(e,n)}(n.mode&K)!==G&&0<=J&&0<=Y&&((Ay||.05<Oy)&&lr(n,J,Y,Oy,ky),n.alternate===null&&n.return!==null&&n.return.alternate!==null&&.05<Y-J&&(al(n.return.alternate,n.return)||ar(n,J,Y,`Mount`))),Ti(r),Di(i),ky=a,Ay=o}function ll(e,t){for(e=e.child;e!==null;)ul(e,t),e=e.sibling}function ul(e,t){switch(e.tag){case 5:case 26:try{var n=e.stateNode;t?w(e,df,n):w(e,mf,e.stateNode,e.memoizedProps)}catch(t){Fu(e,e.return,t)}dl(e,t);break;case 6:try{var r=e.stateNode;t?w(e,ff,r):w(e,hf,r,e.memoizedProps),rg=!0}catch(t){Fu(e,e.return,t)}break;case 18:try{var i=e.stateNode;t?w(e,uf,i):w(e,pf,e.stateNode)}catch(t){Fu(e,e.return,t)}break;case 22:case 23:e.memoizedState===null&&ll(e,t);break;default:ll(e,t)}}function dl(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){a:{var n=e,r=t;switch(n.tag){case 4:ul(n,r);break a;case 22:n.memoizedState===null&&dl(n,r);break a;default:dl(n,r)}}e=e.sibling}}function fl(e){var t=e.alternate;t!==null&&(e.alternate=null,fl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&k(t)),e.stateNode=null,e._debugOwner=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function pl(e,t,n){for(n=n.child;n!==null;)ml(e,t,n),n=n.sibling}function ml(e,t,n){if(Dh&&typeof Dh.onCommitFiberUnmount==`function`)try{Dh.onCommitFiberUnmount(Eh,n)}catch(e){Oh||(Oh=!0,console.error(`React instrumentation encountered an error: %o`,e))}var r=wi(),i=Ei(),a=Oi(),o=ki();switch(n.tag){case 26:IS||Ec(n,t),pl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!IS&&(e=n.stateNode,e.parentNode.removeChild(e));break;case 27:IS||Ec(n,t),jc(n);var s=qS,c=JS;af(n.type)&&(qS=n.stateNode,JS=!1),pl(e,t,n),w(n,fp,n.stateNode,n.type,n.memoizedProps),qS=s,JS=c;break;case 5:IS||Ec(n,t),jc(n);case 6:if(n.tag===6&&jc(n),s=qS,c=JS,qS=null,pl(e,t,n),qS=s,JS=c,qS!==null){if(JS)try{w(n,sf,qS,n.stateNode),rg=!0}catch(e){Fu(n,t,e)}else try{w(n,of,qS,n.stateNode),rg=!0}catch(e){Fu(n,t,e)}}break;case 18:qS!==null&&(JS?(e=qS,cf(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),fm(e)):cf(qS,n.stateNode));break;case 4:s=qS,c=JS,qS=n.stateNode.containerInfo,JS=!0,pl(e,t,n),qS=s,JS=c;break;case 0:case 11:case 14:case 15:_c(Cx,n,t),IS||hc(n,t,wx),pl(e,t,n);break;case 1:IS||(Ec(n,t),s=n.stateNode,typeof s.componentWillUnmount==`function`&&Cc(n,t,s)),pl(e,t,n);break;case 21:pl(e,t,n);break;case 22:IS=(s=IS)||n.memoizedState!==null,pl(e,t,n),IS=s;break;case 30:n.flags&18874368&&il(n),Ec(n,t),pl(e,t,n);break;case 7:IS||Ec(n,t),pl(e,t,n);break;default:pl(e,t,n)}(n.mode&K)!==G&&0<=J&&0<=Y&&(Ay||.05<Oy)&&lr(n,J,Y,Oy,ky),Ti(r),Di(i),ky=a,Ay=o}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{w(t,op,e)}catch(e){Fu(t,t.return,e)}}}function gl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{w(t,sp,e)}catch(e){Fu(t,t.return,e)}}function _l(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new zS),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new zS),t;default:throw Error(`Unexpected Suspense handler tag (`+e.tag+`). This is a bug in React.`)}}function vl(e,t){var n=_l(e);t.forEach(function(t){if(!n.has(t)){if(n.add(t),kh){if(VS!==null&&HS!==null)Gu(HS,VS);else throw Error(`Expected finished root and lanes to be set. This is a bug in React.`)}var r=Bu.bind(null,e,t);t.then(r,r)}})}function yl(e,t,n){var r=t.deletions;if(r!==null)for(var i=0;i<r.length;i++){var a=e,o=t,s=r[i],c=wi(),l=o;a:for(;l!==null;){switch(l.tag){case 27:if(af(l.type)){qS=l.stateNode,JS=!1;break a}break;case 5:qS=l.stateNode,JS=!1;break a;case 3:case 4:qS=l.stateNode.containerInfo,JS=!0;break a}l=l.return}if(qS===null)throw Error(`Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.`);ml(a,o,s),qS=null,JS=!1,(s.mode&K)!==G&&0<=J&&0<=Y&&.05<Y-J&&ar(s,J,Y,`Unmount`),Ti(c),a=s,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)bl(t,e,n),t=t.sibling}function bl(e,t,n){var r=wi(),i=Ei(),a=Oi(),o=ki(),s=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=e.updateQueue,s=s===null?null:s.events,s!==null))for(var l=0;l<s.length;l++){var u=s[l];u.ref.impl=u.nextImpl}yl(t,e,n),xl(e),c&4&&(_c(Cx|Sx,e,e.return),gc(Cx|Sx,e),hc(e,e.return,wx|Sx));break;case 1:yl(t,e,n),xl(e),c&512&&(IS||s===null||Ec(s,s.return)),c&64&&FS&&(t=e.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(c=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=c===null?n:c.concat(n))));break;case 26:if(l=YS,yl(t,e,n),xl(e),c&512&&(IS||s===null||Ec(s,s.return)),c&4){if(c=s===null?null:s.memoizedState,n=e.memoizedState,s===null){if(n===null){if(e.stateNode===null){if(FS)e.stateNode=Gd(e.type,e.memoizedProps,t.containerInfo,e);else{a:{t=e.type,n=e.memoizedProps,c=l.ownerDocument||l;b:switch(t){case`title`:s=c.getElementsByTagName(`title`)[0],(!s||s[Jh]||s[Vh]||s.namespaceURI===Ng||s.hasAttribute(`itemprop`))&&(s=c.createElement(t),c.head.insertBefore(s,c.querySelector(`head > title`))),Od(s,t,n),s[Vh]=e,A(s),t=s;break a;case`link`:if(l=Op(`link`,`href`,c).get(t+(n.href||``))){for(u=0;u<l.length;u++)if(s=l[u],s.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&s.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&s.getAttribute(`title`)===(n.title==null?null:n.title)&&s.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){l.splice(u,1);break b}}s=c.createElement(t),Od(s,t,n),c.head.appendChild(s);break;case`meta`:if(l=Op(`meta`,`content`,c).get(t+(n.content||``))){for(u=0;u<l.length;u++)if(s=l[u],He(n.content,`content`),s.getAttribute(`content`)===(n.content==null?null:``+n.content)&&s.getAttribute(`name`)===(n.name==null?null:n.name)&&s.getAttribute(`property`)===(n.property==null?null:n.property)&&s.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){l.splice(u,1);break b}}s=c.createElement(t),Od(s,t,n),c.head.appendChild(s);break;default:throw Error(`getNodesForType encountered a type it did not expect: "`+t+`". This is a bug in React.`)}s[Vh]=e,A(s),t=s}e.stateNode=t}}else FS||kp(l,e.type,e.stateNode)}else e.stateNode=wp(l,n,e.memoizedProps)}else c===n?n===null&&e.stateNode!==null&&Fc(e,e.memoizedProps,s.memoizedProps):(c===null?(t=s.stateNode,t===null||IS||t.parentNode.removeChild(t)):c.count--,n===null?FS||kp(l,e.type,e.stateNode):wp(l,n,e.memoizedProps))}break;case 27:yl(t,e,n),xl(e),c&512&&(IS||s===null||Ec(s,s.return)),s!==null&&c&4&&Fc(e,e.memoizedProps,s.memoizedProps);break;case 5:if(l=LS,LS=!1,yl(t,e,n),LS=l,xl(e),c&512&&(IS||s===null||Ec(s,s.return)),e.flags&32){t=e.stateNode;try{w(e,tf,t),rg=!0}catch(t){Fu(e,e.return,t)}}c&4&&e.stateNode!=null&&(t=e.memoizedProps,Fc(e,t,s===null?t:s.memoizedProps)),c&1024&&(RS=!0,e.type!==`form`&&console.error(`Unexpected host component type. Expected a form. This is a bug in React.`));break;case 6:if(yl(t,e,n),xl(e),c&4){if(e.stateNode===null)throw Error(`This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.`);t=e.memoizedProps,n=s===null?t:s.memoizedProps,c=e.stateNode;try{w(e,nf,c,n,t),rg=!0}catch(t){Fu(e,e.return,t)}}break;case 3:if(l=bi(),rg=!1,GT=null,u=YS,YS=mp(t.containerInfo),yl(t,e,n),YS=u,xl(e),c&4&&s!==null&&s.memoizedState.isDehydrated)try{w(e,ap,t.containerInfo)}catch(t){Fu(e,e.return,t)}RS&&(RS=!1,Sl(e)),t.effectDuration+=xi(l),rg=!1;break;case 4:c=LS,LS=FS,s=j(),l=YS,YS=mp(e.stateNode.containerInfo),yl(t,e,n),xl(e),YS=l,rg&&WS&&(GS=!0),rg=s,LS=c;break;case 12:c=bi(),yl(t,e,n),xl(e),e.stateNode.effectDuration+=Si(c);break;case 31:yl(t,e,n),xl(e),c&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,vl(e,t)));break;case 13:yl(t,e,n),xl(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(zC=_h()),c&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,vl(e,t)));break;case 22:l=e.memoizedState!==null,u=s!==null&&s.memoizedState!==null;var d=FS,f=IS,p=LS;FS=d||l,LS=p||l,IS=f||u,yl(t,e,n),IS=f,LS=p,FS=d,u&&!l&&!d&&!f&&(e.mode&K)!==G&&0<=J&&0<=Y&&.05<Y-J&&or(e,J,Y),xl(e),c&8192&&(t=e.stateNode,t._visibility=l?t._visibility&~jv:t._visibility|jv,!l||s===null||u||FS||IS||(t=PS,n=u||IS,s=FS,u=IS,FS=l||FS,IS=n,Dl(e,t),(e.mode&K)!==G&&0<=J&&0<=Y&&.05<Y-J&&ar(e,J,Y,`Disconnect`),FS=s,IS=u),!l&&LS||ll(e,l)),c&4&&(t=e.updateQueue,t!==null&&(n=t.retryQueue,n!==null&&(t.retryQueue=null,vl(e,n))));break;case 19:yl(t,e,n),xl(e),c&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,vl(e,t)));break;case 30:c&512&&(IS||s===null||Ec(s,s.return)),c=j(),l=WS,u=(n&335544064)===n,d=e.memoizedProps,WS=u&&Qn(d.default,d.update)!==`none`,yl(t,e,n),xl(e),u&&s!==null&&rg&&(e.flags|=4),WS=l,rg=c;break;case 21:break;case 7:c&512&&(IS||s===null||Ec(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:yl(t,e,n),xl(e)}(e.mode&K)!==G&&0<=J&&0<=Y&&((Ay||.05<Oy)&&lr(e,J,Y,Oy,ky),e.alternate===null&&e.return!==null&&e.return.alternate!==null&&.05<Y-J&&(al(e.return.alternate,e.return)||ar(e,J,Y,`Mount`))),Ti(r),Di(i),ky=a,Ay=o}function xl(e){var t=e.flags;if(t&2){try{w(e,Bc,e)}catch(t){Fu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sl(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,gE=!0,t.reset(),gE=!1),e=e.sibling}}function Cl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)wl(t,e),t=t.sibling;else nl(t,!1)}function wl(e,t){var n=e.alternate;if(n===null)Jc(e,!1);else switch(e.tag){case 3:if(KS=US=!1,Uc(),Cl(t,e),!US&&!GS){if(e=OS,e!==null)for(var r=0;r<e.length;r+=3){n=e[r];var i=e[r+1];vf(n,e[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(`+i+`)`})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===``&&(e.style.viewTransitionName=`none`,e.animate({opacity:[0,0],pointerEvents:[`none`,`none`]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition-group(root)`}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:`forwards`,pseudoElement:`::view-transition`})),KS=!0}OS=null;break;case 5:Cl(t,e);break;case 4:r=US,US=!1,Cl(t,e),US&&(GS=!0),US=r;break;case 22:e.memoizedState===null&&(n.memoizedState===null?Cl(t,e):Jc(e,!1));break;case 30:r=US,i=Uc(),US=!1,Cl(t,e),US&&(e.flags|=4);var a=e.memoizedProps,o=e.stateNode;t=Xn(a,o),o=Xn(n.memoizedProps,o);var s=Qn(a.default,a.update);s===`none`?t=!1:(a=n.memoizedState,n.memoizedState=null,n=e.child,kS=0,t=tl(e,n,t,o,s,a,!0),kS!==(a===null?0:a.length)&&(e.flags|=32)),e.flags&4&&t?(Yl(e,e.memoizedProps.onUpdate),OS=i):i!==null&&(i.push.apply(i,OS),OS=i),US=e.flags&32?!0:r;break;default:Cl(t,e)}}function Tl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function El(e,t){var n=wi(),r=Ei(),i=Oi(),a=ki();switch(e.tag){case 0:case 11:case 14:case 15:hc(e,e.return,wx),Dl(e,t);break;case 1:Ec(e,e.return);var o=e.stateNode;typeof o.componentWillUnmount==`function`&&Cc(e,e.return,o),Dl(e,t);break;case 27:(t&PS)!==MS&&w(e,fp,e.stateNode,e.type,e.memoizedProps);case 5:Ec(e,e.return),e.tag!==5&&e.tag!==27||jc(e),Dl(e,t);break;case 6:jc(e);break;case 26:Ec(e,e.return),o=e.stateNode,e.memoizedState!==null||o===null||IS||o.parentNode.removeChild(o),Dl(e,t);break;case 22:e.memoizedState===null&&Dl(e,t);break;case 30:e.flags&18874368&&il(e),Ec(e,e.return),Dl(e,t);break;case 7:Ec(e,e.return);default:Dl(e,t)}(e.mode&K)!==G&&0<=J&&0<=Y&&(Ay||.05<Oy)&&lr(e,J,Y,Oy,ky),Ti(n),Di(r),ky=i,Ay=a}function Dl(e,t){for(e=e.child;e!==null;)El(e,t),e=e.sibling}function Ol(e,t,n,r){var i=wi(),a=Ei(),o=Oi(),s=ki(),c=n.flags,l=(r&NS)!==MS;switch(n.tag){case 0:case 11:case 15:kl(e,n,r),mc(n,wx);break;case 1:if(kl(e,n,r),t=n.stateNode,typeof t.componentDidMount==`function`&&w(n,Ob,n,t),t=n.updateQueue,t!==null){e=n.stateNode;try{w(n,va,t,e)}catch(e){Fu(n,n.return,e)}}l&&c&64&&bc(n),Tc(n,n.return);break;case 27:(r&PS)!==MS&&Vc(n);case 5:n.tag!==5&&n.tag!==27||Ac(n),kl(e,n,r),l&&t===null&&c&4&&Pc(n),Tc(n,n.return);break;case 6:Ac(n);break;case 26:var u=n.stateNode;n.memoizedState!==null||u===null||FS||kp(mp(u.ownerDocument),n.type,u),kl(e,n,r),l&&t===null&&c&4&&Pc(n),Tc(n,n.return);break;case 12:if(l&&c&4){c=bi(),kl(e,n,r),l=n.stateNode,l.effectDuration+=Si(c);try{w(n,Dc,n,t,Cy,l.effectDuration)}catch(e){Fu(n,n.return,e)}}else kl(e,n,r);break;case 31:kl(e,n,r),l&&c&4&&hl(e,n);break;case 13:kl(e,n,r),l&&c&4&&gl(e,n);break;case 22:n.memoizedState===null&&kl(e,n,r),Tc(n,n.return);break;case 30:kl(e,n,r),c&18874368&&rl(n),Tc(n,n.return);break;case 7:Tc(n,n.return);default:kl(e,n,r)}(n.mode&K)!==G&&0<=J&&0<=Y&&(Ay||.05<Oy)&&lr(n,J,Y,Oy,ky),Ti(i),Di(a),ky=o,Ay=s}function kl(e,t,n){for(n=t.subtreeFlags&8772?n:n&~NS,t=t.child;t!==null;)Ol(e,t.alternate,t,n),t=t.sibling}function Al(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&mi(e),n!=null&&hi(n))}function jl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(mi(t),e!=null&&hi(e))}function Ml(e,t,n,r,i){var a=(n&335544064)===n;if(t.subtreeFlags&(a?10262:10256)||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(t=t.child;t!==null;)a=t.sibling,Nl(e,t,n,r,a===null?i:a.actualStartTime),t=a;else a&&el(t)}function Nl(e,t,n,r,i){var a=wi(),o=Ei(),s=Oi(),c=ki(),l=Tv,u=(n&335544064)===n;u&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&$c(t);var d=t.flags;switch(t.tag){case 0:case 11:case 15:(t.mode&K)!==G&&0<t.actualStartTime&&t.flags&1&&sr(t,t.actualStartTime,i,XS,n),Ml(e,t,n,r,i),d&2048&&vc(t,Tx|Sx);break;case 1:(t.mode&K)!==G&&0<t.actualStartTime&&(t.flags&128?cr(t,t.actualStartTime,i,[]):t.flags&1&&sr(t,t.actualStartTime,i,XS,n)),Ml(e,t,n,r,i);break;case 3:var f=bi(),p=XS;XS=t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&!(t.flags&256),Ml(e,t,n,r,i),XS=p,u&&KS&&(n=e.containerInfo,n=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,n.style.viewTransitionName===`root`&&(n.style.viewTransitionName=``),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===`none`&&(n.style.viewTransitionName=``)),d&2048&&(n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),r=t.memoizedState.cache,r!==n&&(mi(r),n!=null&&hi(n))),e.passiveEffectDuration+=xi(f);break;case 12:if(d&2048){d=bi(),Ml(e,t,n,r,i),e=t.stateNode,e.passiveEffectDuration+=Si(d);try{w(t,Oc,t,t.alternate,Cy,e.passiveEffectDuration)}catch(e){Fu(t,t.return,e)}}else Ml(e,t,n,r,i);break;case 31:d=XS,f=t.alternate===null?null:t.alternate.memoizedState,u=t.memoizedState,f!==null&&u===null?(u=t.deletions,u!==null&&0<u.length&&u[0].tag===18?(XS=!1,f=f.hydrationErrors,f!==null&&cr(t,t.actualStartTime,i,f)):XS=!0):XS=!1,Ml(e,t,n,r,i),XS=d;break;case 13:d=XS,f=t.alternate===null?null:t.alternate.memoizedState,u=t.memoizedState,f===null||f.dehydrated===null||u!==null&&u.dehydrated!==null?XS=!1:(u=t.deletions,u!==null&&0<u.length&&u[0].tag===18?(XS=!1,f=f.hydrationErrors,f!==null&&cr(t,t.actualStartTime,i,f)):XS=!0),Ml(e,t,n,r,i),XS=d;break;case 23:break;case 22:p=t.stateNode,f=t.alternate,t.memoizedState===null?(u&&f!==null&&f.memoizedState!==null&&$c(t),p._visibility&Mv?Ml(e,t,n,r,i):(p._visibility|=Mv,Pl(e,t,n,r,!!(t.subtreeFlags&10256)||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child),i),(t.mode&K)===G||XS||(e=t.actualStartTime,0<=e&&.05<i-e&&or(t,e,i),0<=J&&0<=Y&&.05<Y-J&&or(t,J,Y)))):(u&&f!==null&&f.memoizedState===null&&$c(f),p._visibility&Mv?Ml(e,t,n,r,i):Il(e,t,n,r,i)),d&2048&&Al(f,t);break;case 24:Ml(e,t,n,r,i),d&2048&&jl(t.alternate,t);break;case 30:u&&(d=t.alternate,d!==null&&(Kc(d.child,!0),Kc(t.child,!0))),Ml(e,t,n,r,i);break;default:Ml(e,t,n,r,i)}(t.mode&K)!==G&&((e=!XS&&t.alternate===null&&t.return!==null&&t.return.alternate!==null)&&(n=t.actualStartTime,0<=n&&.05<i-n&&ar(t,n,i,`Mount`)),0<=J&&0<=Y&&((Ay||.05<Oy)&&lr(t,J,Y,Oy,ky),e&&.05<Y-J&&ar(t,J,Y,`Mount`))),Ti(a),Di(o),ky=s,Ay=c,Tv=l}function Pl(e,t,n,r,i,a){for(i&&=!!(t.subtreeFlags&10256)||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child),t=t.child;t!==null;){var o=t.sibling;Fl(e,t,n,r,i,o===null?a:o.actualStartTime),t=o}}function Fl(e,t,n,r,i,a){var o=wi(),s=Ei(),c=Oi(),l=ki(),u=Tv;i&&(t.mode&K)!==G&&0<t.actualStartTime&&t.flags&1&&sr(t,t.actualStartTime,a,XS,n);var d=t.flags;switch(t.tag){case 0:case 11:case 15:Pl(e,t,n,r,i,a),vc(t,Tx);break;case 23:break;case 22:var f=t.stateNode;t.memoizedState===null?(f._visibility|=Mv,Pl(e,t,n,r,i,a)):f._visibility&Mv?Pl(e,t,n,r,i,a):Il(e,t,n,r,a),i&&d&2048&&Al(t.alternate,t);break;case 24:Pl(e,t,n,r,i,a),i&&d&2048&&jl(t.alternate,t);break;default:Pl(e,t,n,r,i,a)}(t.mode&K)!==G&&0<=J&&0<=Y&&(Ay||.05<Oy)&&lr(t,J,Y,Oy,ky),Ti(o),Di(s),ky=c,Ay=l,Tv=u}function Il(e,t,n,r,i){if(t.subtreeFlags&10256||t.actualDuration!==0&&(t.alternate===null||t.alternate.child!==t.child))for(var a=t.child;a!==null;){t=a.sibling;var o=e,s=n,c=r,l=t===null?i:t.actualStartTime,u=Tv;(a.mode&K)!==G&&0<a.actualStartTime&&a.flags&1&&sr(a,a.actualStartTime,l,XS,s);var d=a.flags;switch(a.tag){case 22:Il(o,a,s,c,l),d&2048&&Al(a.alternate,a);break;case 24:Il(o,a,s,c,l),d&2048&&jl(a.alternate,a);break;default:Il(o,a,s,c,l)}Tv=u,a=t}}function Ll(e,t,n){if(e.subtreeFlags&ZS)for(e=e.child;e!==null;)Rl(e,t,n),e=e.sibling}function Rl(e,t,n){switch(e.tag){case 26:Ll(e,t,n),e.flags&ZS&&(e.memoizedState===null?(e=e.stateNode,(t&335544128)===t&&Pp(n,e)):Fp(n,YS,e.memoizedState,e.memoizedProps));break;case 5:Ll(e,t,n),e.flags&ZS&&(e=e.stateNode,(t&335544128)===t&&Pp(n,e));break;case 3:case 4:var r=YS;YS=mp(e.stateNode.containerInfo),Ll(e,t,n),YS=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ZS,ZS=16777216,Ll(e,t,n),ZS=r):Ll(e,t,n));break;case 30:if((e.flags&ZS)!==0&&(r=e.memoizedProps.name,r!=null&&r!==`auto`)){var i=e.stateNode;i.paired=null,DS===null&&(DS=new Map),DS.set(r,i)}Ll(e,t,n);break;default:Ll(e,t,n)}}function zl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Bl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n],i=wi();BS=r,Wl(r,e),(r.mode&K)!==G&&0<=J&&0<=Y&&.05<Y-J&&ar(r,J,Y,`Unmount`),Ti(i)}zl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Vl(e),e=e.sibling}function Vl(e){var t=wi(),n=Ei(),r=Oi(),i=ki();switch(e.tag){case 0:case 11:case 15:Bl(e),e.flags&2048&&yc(e,e.return,Tx|Sx);break;case 3:var a=bi();Bl(e),e.stateNode.passiveEffectDuration+=xi(a);break;case 12:a=bi(),Bl(e),e.stateNode.passiveEffectDuration+=Si(a);break;case 22:a=e.stateNode,e.memoizedState!==null&&a._visibility&Mv&&(e.return===null||e.return.tag!==13)?(a._visibility&=~Mv,Hl(e),(e.mode&K)!==G&&0<=J&&0<=Y&&.05<Y-J&&ar(e,J,Y,`Disconnect`)):Bl(e);break;default:Bl(e)}(e.mode&K)!==G&&0<=J&&0<=Y&&(Ay||.05<Oy)&&lr(e,J,Y,Oy,ky),Ti(t),Di(n),Ay=i,ky=r}function Hl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n],i=wi();BS=r,Wl(r,e),(r.mode&K)!==G&&0<=J&&0<=Y&&.05<Y-J&&ar(r,J,Y,`Unmount`),Ti(i)}zl(e)}for(e=e.child;e!==null;)Ul(e),e=e.sibling}function Ul(e){var t=wi(),n=Ei(),r=Oi(),i=ki();switch(e.tag){case 0:case 11:case 15:yc(e,e.return,Tx),Hl(e);break;case 22:var a=e.stateNode;a._visibility&Mv&&(a._visibility&=~Mv,Hl(e));break;default:Hl(e)}(e.mode&K)!==G&&0<=J&&0<=Y&&(Ay||.05<Oy)&&lr(e,J,Y,Oy,ky),Ti(t),Di(n),Ay=i,ky=r}function Wl(e,t){for(;BS!==null;){var n=BS,r=n,i=t,a=wi(),o=Ei(),s=Oi(),c=ki();switch(r.tag){case 0:case 11:case 15:yc(r,i,Tx);break;case 23:case 22:r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool,i!=null&&mi(i));break;case 24:hi(r.memoizedState.cache)}if((r.mode&K)!==G&&0<=J&&0<=Y&&(Ay||.05<Oy)&&lr(r,J,Y,Oy,ky),Ti(a),Di(o),Ay=c,ky=s,r=n.child,r!==null)r.return=n,BS=r;else a:for(n=e;BS!==null;){if(r=BS,a=r.sibling,o=r.return,fl(r),r===n){BS=null;break a}if(a!==null){a.return=o,BS=a;break a}BS=o}}}function Gl(){eC.forEach(function(e){return e()})}function Kl(){var e=typeof IS_REACT_ACT_ENVIRONMENT<`u`?IS_REACT_ACT_ENVIRONMENT:void 0;return e||W.actQueue===null||console.error(`The current testing environment is not configured to support act(...)`),e}function ql(e){if((fC&rC)!==nC&&$!==0)return $&-$;var t=W.T;return t===null?(e=O(),e===Ih&&(Gb=null),e):(t._updatedFibers||=new Set,t._updatedFibers.add(e),Gb!==null&&O()===Ih&&(Gb=null),rd())}function Jl(){if(PC===0){if(!($&536870912)||q){var e=Ph;Ph<<=1,!(Ph&3932160)&&(Ph=262144),PC=e}else PC=536870912}return e=gx.current,e!==null&&(e.flags|=32),PC}function Yl(e,t){if(t!=null){var n=e.stateNode,r=n.ref;r===null&&(r=n.ref=Df(Xn(e.memoizedProps,n))),fw===null&&(fw=[]),fw.push(t.bind(null,r))}}function Xl(e,t,n){if(Tw&&console.error(`useInsertionEffect must not schedule updates.`),bw&&(xw=!0),(e===pC&&(wC===gC||wC===CC)||e.cancelPendingCommit!==null)&&(iu(e,0),eu(e,$,PC,!1)),tt(e,n),(fC&rC)!==nC&&e===pC){if(dh)switch(t.tag){case 0:case 11:case 15:e=Q&&S(Q)||`Unknown`,kw.has(e)||(kw.add(e),t=S(t)||`Unknown`,console.error("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",t,e,e));break;case 1:Ow||=(console.error("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."),!0)}}else kh&&at(e,t,n),qu(t),e===pC&&((fC&rC)===nC&&(MC|=n),AC===lC&&eu(e,$,PC,!1)),Ju(e)}function Zl(e,t,n){if((fC&(rC|iC))!==nC)throw Error(`Should not already be working.`);if($!==0&&Q!==null){var r=Q,i=_h();switch(nb){case _C:case gC:var a=rb;xv&&((r=r._debugTask)?r.run(console.timeStamp.bind(console,`Suspended`,a,i,Sv,void 0,`primary-light`)):console.timeStamp(`Suspended`,a,i,Sv,void 0,`primary-light`));break;case CC:a=rb,xv&&((r=r._debugTask)?r.run(console.timeStamp.bind(console,`Action`,a,i,Sv,void 0,`primary-light`)):console.timeStamp(`Action`,a,i,Sv,void 0,`primary-light`));break;default:xv&&(r=i-rb,3>r||console.timeStamp(`Blocked`,rb,i,Sv,void 0,5>r?`primary-light`:10>r?`primary`:100>r?`primary-dark`:`error`))}}a=(n=!n&&!(t&127)&&(t&e.expiredLanes)===0||Xe(e,t))?pu(e,t):du(e,t,!0);var o=n;do{if(a===aC){DC&&!n&&eu(e,t,0,!1),t=wC,rb=vy(),nb=t;break}if(r=_h(),i=e.current.alternate,o&&!$l(i))ir(t),i=Sy,a=r,!xv||a<=i||(GC?GC.run(console.timeStamp.bind(console,`Teared Render`,i,a,wv,Cv,`error`)):console.timeStamp(`Teared Render`,i,a,wv,Cv,`error`)),ru(t,r),a=du(e,t,!1),o=!1;else{if(a===sC){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){ir(t),fr(Sy,r,t,GC),ru(t,r),t=s;a:{r=e,a=o,o=IC;var c=r.current.memoizedState.isDehydrated;if(c&&(iu(r,s).flags|=256),s=du(r,s,!1),s!==sC&&s!==uC){if(OC&&!c){r.errorRecoveryDisabledLanes|=a,MC|=a,a=lC;break a}r=LC,LC=o,r!==null&&(LC===null?LC=r:LC.push.apply(LC,r))}a=s}if(o=!1,a!==sC)continue;r=_h()}}if(a===oC){ir(t),fr(Sy,r,t,GC),ru(t,r),iu(e,0),eu(e,t,0,!0);break}a:{switch(n=e,a){case aC:case oC:throw Error(`Root did not complete. This is a bug in React.`);case lC:if((t&4194048)!==t&&(t&62914560)!==t)break;case uC:ir(t),ur(Sy,r,t,GC),ru(t,r),i=t,i&127?By=r:i&4194048&&(Zy=r),eu(n,t,PC,!EC);break a;case sC:LC=null;break;case cC:case dC:break;default:throw Error(`Unknown root exit status.`)}if(W.actQueue!==null)xu(n,i,t,LC,WC,RC,PC,MC,FC,EC,a,null,null,Sy,r);else{if((t&62914560)===t&&(o=zC+VC-_h(),10<o)){if(eu(n,t,PC,!EC),Ye(n,0,!0)!==0)break a;ow=t,n.timeoutHandle=ET(Ql.bind(null,n,i,LC,WC,RC,t,PC,MC,FC,EC,a,`Throttled`,Sy,r),o);break a}Ql(n,i,LC,WC,RC,t,PC,MC,FC,EC,a,null,Sy,r)}}break}}while(1);Ju(e)}function Ql(e,t,n,r,i,a,o,s,c,l,u,d,f,p){e.timeoutHandle=OT;var m=t.subtreeFlags,h=(a&335544064)===a,g=null;(h||m&8192||(m&16785408)==16785408)&&(g={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},DS=null,Rl(t,a,g),h&&(m=g,h=e.containerInfo,h=(h.nodeType===9?h:h.ownerDocument).__reactViewTransition,h!=null&&(m.count++,m.waitingForViewTransition=!0,m=Rp.bind(m),h.finished.then(m,m))),m=(a&62914560)===a?zC-_h():(a&4194048)===a?BC-_h():0,m=Ip(g,m),m!==null)?(ow=a,e.cancelPendingCommit=m(xu.bind(null,e,t,a,n,r,i,o,s,c,l,u,g,g.waitingForViewTransition?`Waiting for the previous Animation`:0<g.count?0<g.imgCount?`Suspended on CSS and Images`:`Suspended on CSS`:g.imgCount===1?`Suspended on an Image`:0<g.imgCount?`Suspended on Images`:null,f,p)),eu(e,a,o,!l)):xu(e,t,a,n,r,i,o,s,c,l,u,g,d,f,p)}function $l(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!H_(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function eu(e,t,n,r){t=Ze(e,t),t&=~NC,t&=~MC,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ah(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&rt(e,n,t)}function tu(){return(fC&(rC|iC))!==nC||(Yu(0,!1),!1)}function nu(){if(Q!==null){if(wC===mC)var e=Q.return;else e=Q,ni(),Va(e),Xb=null,Zb=0,e=Q;for(;e!==null;)fc(e.alternate,e),e=e.return;Q=null}}function ru(e,t){e&127&&(jy=t),e&4194048&&(Vy=t),e&62914560&&(Qy=t),e&2080374784&&($y=t)}function iu(e,t){xv&&(console.timeStamp(`Blocking Track`,.003,.003,`Blocking`,Cv,`primary-light`),console.timeStamp(`Transition Track`,.003,.003,`Transition`,Cv,`primary-light`),console.timeStamp(`Suspense Track`,.003,.003,`Suspense`,Cv,`primary-light`),console.timeStamp(`Idle Track`,.003,.003,`Idle`,Cv,`primary-light`));var n=Sy;if(Sy=vy(),$!==0&&0<n){if(ir($),AC===cC||AC===lC)ur(n,Sy,t,GC);else{var r=Sy,i=GC;if(xv&&!(r<=n)){var a=(t&738197653)===t?`tertiary-dark`:`primary-dark`,o=(t&536870912)===t?`Prewarm`:(t&201326741)===t?`Interrupted Hydration`:`Interrupted Render`;i?i.run(console.timeStamp.bind(console,o,n,r,wv,Cv,a)):console.timeStamp(o,n,r,wv,Cv,a)}}ru($,Sy)}if(n=GC,GC=null,t&127){GC=Ny,i=0<=My&&My<jy?jy:My,r=0<=Ly&&Ly<jy?jy:Ly,a=0<=r?r:0<=i?i:Sy,0<=By?(ir(2),dr(By,a,t,n)):eb&127&&(ir(2),gr(jy,a,tb)),n=i;var s=r,c=Ry,l=0<zy,u=Py===by,d=Py===xy;if(i=Sy,r=Ny,a=Fy,o=Iy,xv){if(wv=`Blocking`,0<n?n>i&&(n=i):n=i,0<s?s>n&&(s=n):s=n,c!==null&&n>s){var f=l?`secondary-light`:`warning`;r?r.run(console.timeStamp.bind(console,l?`Consecutive`:`Event: `+c,s,n,wv,Cv,f)):console.timeStamp(l?`Consecutive`:`Event: `+c,s,n,wv,Cv,f)}i>n&&(s=u?`error`:(t&738197653)===t?`tertiary-light`:`primary-light`,u=d?`Promise Resolved`:u?`Cascading Update`:5<i-n?`Update Blocked`:`Update`,d=[],o!=null&&d.push([`Component name`,o]),a!=null&&d.push([`Method name`,a]),n={start:n,end:i,detail:{devtools:{properties:d,track:wv,trackGroup:Cv,color:s}}},r?r.run(performance.measure.bind(performance,u,n)):performance.measure(u,n),performance.clearMeasures(u))}My=-1.1,Py=0,Iy=Fy=null,By=-1.1,zy=Ly,Ly=-1.1,jy=vy()}return t&4194048&&(GC=Gy,i=0<=Hy&&Hy<Vy?Vy:Hy,n=0<=Uy&&Uy<Vy?Vy:Uy,r=0<=Jy&&Jy<Vy?Vy:Jy,a=0<=r?r:0<=n?n:Sy,0<=Zy?(ir(256),dr(Zy,a,t,GC)):eb&4194048&&(ir(256),gr(Vy,a,tb)),d=r,s=Yy,c=0<Xy,l=Wy===xy,a=Sy,r=Gy,o=Ky,u=qy,xv&&(wv=`Transition`,0<n?n>a&&(n=a):n=a,0<i?i>n&&(i=n):i=n,0<d?d>i&&(d=i):d=i,i>d&&s!==null&&(f=c?`secondary-light`:`warning`,r?r.run(console.timeStamp.bind(console,c?`Consecutive`:`Event: `+s,d,i,wv,Cv,f)):console.timeStamp(c?`Consecutive`:`Event: `+s,d,i,wv,Cv,f)),n>i&&(r?r.run(console.timeStamp.bind(console,`Action`,i,n,wv,Cv,`primary-dark`)):console.timeStamp(`Action`,i,n,wv,Cv,`primary-dark`)),a>n&&(i=l?`Promise Resolved`:5<a-n?`Update Blocked`:`Update`,d=[],u!=null&&d.push([`Component name`,u]),o!=null&&d.push([`Method name`,o]),n={start:n,end:a,detail:{devtools:{properties:d,track:wv,trackGroup:Cv,color:`primary-light`}}},r?r.run(performance.measure.bind(performance,i,n)):performance.measure(i,n),performance.clearMeasures(i))),Uy=Hy=-1.1,Wy=0,Zy=-1.1,Xy=Jy,Jy=-1.1,Vy=vy()),t&62914560&&eb&62914560&&(ir(4194304),gr(Qy,Sy,tb)),t&2080374784&&eb&2080374784&&(ir(268435456),gr($y,Sy,tb)),n=e.timeoutHandle,n!==OT&&(e.timeoutHandle=OT,DT(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ow=0,nu(),pC=e,Q=n=kr(e.current,null),$=t,wC=mC,TC=null,EC=!1,DC=Xe(e,t),OC=!1,AC=aC,FC=PC=NC=MC=jC=0,LC=IC=null,RC=!1,kC=Ze(e,t),_r(),e=lv(),1e3<e-sv&&(W.recentlyCreatedOwnerStacks=0,sv=e),fb.discardPendingWarnings(),n}function au(e,t){X=null,W.H=Gx,W.getCurrentStack=null,dh=!1,uh=null,t===Vb||t===Ub?(t=qi(),wC=_C):t===Hb?(t=qi(),wC=vC):wC=t===pS?SC:typeof t==`object`&&t&&typeof t.then==`function`?bC:hC,TC=t;var n=Q;n===null?(AC=oC,ys(e,Lr(t,e.current))):n.mode&K&&ji(n)}function ou(){var e=gx.current;return e===null?!0:($&4194048)===$?_x===null:($&62914560)===$||$&536870912?e===_x:!1}function su(){var e=W.H;return W.H=Gx,e===null?Gx:e}function cu(){var e=W.A;return W.A=QS,e}function lu(e){GC===null&&(GC=e._debugTask==null?null:e._debugTask)}function uu(){AC=lC,EC||($&4194048)!==$&&gx.current!==null||(DC=!0),!(jC&134217727)&&!(MC&134217727)||pC===null||eu(pC,$,PC,!1)}function du(e,t,n){var r=fC;fC|=rC;var i=su(),a=cu();if(pC!==e||$!==t){if(kh){var o=e.memoizedUpdaters;0<o.size&&(Gu(e,$),o.clear()),D(e,t)}WC=null,iu(e,t)}t=!1,o=AC;a:do try{if(wC!==mC&&Q!==null){var s=Q,c=TC;switch(wC){case SC:nu(),o=uC;break a;case _C:case gC:case CC:case bC:gx.current===null&&(t=!0);var l=wC;if(wC=mC,TC=null,vu(e,s,c,l),n&&DC){o=aC;break a}break;default:l=wC,wC=mC,TC=null,vu(e,s,c,l)}}fu(),o=AC;break}catch(t){au(e,t)}while(1);return t&&e.shellSuspendCounter++,ni(),fC=r,W.H=i,W.A=a,Q===null&&(pC=null,$=0,_r()),o}function fu(){for(;Q!==null;)hu(Q)}function pu(e,t){var n=fC;fC|=rC;var r=su(),i=cu();if(pC!==e||$!==t){if(kh){var a=e.memoizedUpdaters;0<a.size&&(Gu(e,$),a.clear()),D(e,t)}WC=null,HC=_h()+UC,iu(e,t)}else DC=Xe(e,t);a:do try{if(wC!==mC&&Q!==null)b:switch(t=Q,a=TC,wC){case hC:wC=mC,TC=null,vu(e,t,a,hC);break;case gC:case CC:if(Wi(a)){wC=mC,TC=null,gu(t);break}t=function(){wC!==gC&&wC!==CC||pC!==e||(wC=xC),Ju(e)},a.then(t,t);break a;case _C:wC=xC;break a;case vC:wC=yC;break a;case xC:Wi(a)?(wC=mC,TC=null,gu(t)):(wC=mC,TC=null,vu(e,t,a,xC));break;case yC:var o=null;switch(Q.tag){case 26:o=Q.memoizedState;case 5:case 27:var s=Q;if(o?Mp(o):s.stateNode.complete){wC=mC,TC=null;var c=s.sibling;if(c!==null)Q=c;else{var l=s.return;l===null?Q=null:(Q=l,yu(l))}break b}break;default:console.error(`Unexpected type of fiber triggered a suspensey commit. This is a bug in React.`)}wC=mC,TC=null,vu(e,t,a,yC);break;case bC:wC=mC,TC=null,vu(e,t,a,bC);break;case SC:nu(),AC=uC;break a;default:throw Error(`Unexpected SuspendedReason. This is a bug in React.`)}W.actQueue===null?mu():fu();break}catch(t){au(e,t)}while(1);return ni(),W.H=r,W.A=i,fC=n,Q===null?(pC=null,$=0,_r(),AC):aC}function mu(){for(;Q!==null&&!hh();)hu(Q)}function hu(e){var t=e.alternate;(e.mode&K)===G?t=w(e,rc,t,e,kC):(Ai(e),t=w(e,rc,t,e,kC),ji(e)),e.memoizedProps=e.pendingProps,t===null?yu(e):Q=t}function gu(e){var t=w(e,_u,e);e.memoizedProps=e.pendingProps,t===null?yu(e):Q=t}function _u(e){var t=e.alternate,n=(e.mode&K)!==G;switch(n&&Ai(e),e.tag){case 15:case 0:t=Ls(t,e,e.pendingProps,e.type,void 0,$);break;case 11:t=Ls(t,e,e.pendingProps,e.type.render,e.ref,$);break;case 5:Va(e);var r=e;r===ey&&(q?(Xr(r),r.tag===5&&r.stateNode!=null&&(ty=r.stateNode)):(Xr(r),q=!0));default:fc(t,e),e=Q=Ar(e,kC),t=rc(t,e,kC)}return n&&ji(e),t}function vu(e,t,n,r){ni(),Va(t),Xb=null,Zb=0;var i=t.return;try{if(ws(e,i,t,n,$)){AC=oC,ys(e,Lr(n,e.current)),Q=null;return}}catch(t){if(i!==null)throw Q=i,t;AC=oC,ys(e,Lr(n,e.current)),Q=null;return}t.flags&32768?(q||r===hC?e=!0:DC||$&536870912?e=!1:(EC=e=!0,(r===gC||r===CC||r===_C||r===bC)&&(r=gx.current,r!==null&&r.tag===13&&(r.flags|=16384))),bu(t,e)):yu(t)}function yu(e){var t=e;do{if(t.flags&32768){bu(t,EC);return}var n=t.alternate;if(e=t.return,Ai(t),n=w(t,uc,n,t,kC),(t.mode&K)!==G&&Mi(t),n!==null){Q=n;return}if(t=t.sibling,t!==null){Q=t;return}Q=t=e}while(t!==null);AC===aC&&(AC=dC)}function bu(e,t){do{var n=dc(e.alternate,e);if(n!==null){n.flags&=32767,Q=n;return}if((e.mode&K)!==G){Mi(e),n=e.actualDuration;for(var r=e.child;r!==null;)n+=r.actualDuration,r=r.sibling;e.actualDuration=n}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Q=e;return}Q=e=n}while(e!==null);AC=uC,Q=null}function xu(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m){e.cancelPendingCommit=null;do Mu();while(rw!==ZC);if(fb.flushLegacyContextWarning(),fb.flushPendingUnsafeLifecycleWarnings(),(fC&(rC|iC))!==nC)throw Error(`Should not already be working.`);if(ir(n),u===sC)fr(p,m,n,GC);else if(r!==null){if(l=t!==null&&t.alternate!==null&&t.alternate.memoizedState.isDehydrated&&!!(t.flags&256),a=GC,xv&&!(m<=p)){u=[];for(var h=0;h<r.length;h++){var g=r[h].value;u.push([`Recoverable Error`,typeof g==`object`&&g&&typeof g.message==`string`?String(g.message):String(g)])}p={start:p,end:m,detail:{devtools:{color:`primary-dark`,track:wv,trackGroup:Cv,tooltipText:l?`Hydration Failed`:`Recovered after Error`,properties:u}}},a?a.run(performance.measure.bind(performance,`Recovered`,p)):performance.measure(`Recovered`,p),performance.clearMeasures(`Recovered`)}}else a=GC,!xv||m<=p||(l=(n&738197653)===n?`tertiary-dark`:`primary-dark`,u=(n&536870912)===n?`Prepared`:(n&201326741)===n?`Hydrated`:`Render`,a?a.run(console.timeStamp.bind(console,u,p,m,wv,Cv,l)):console.timeStamp(u,p,m,wv,Cv,l));if(t!==null){if(n===0&&console.error(`finishedLanes should not be empty during a commit. This is a bug in React.`),t===e.current)throw Error(`Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.`);e===pC&&(Q=pC=null,$=0),aw=t,iw=e,ow=n,lw=i,uw=r,cw=m,mw=f,hw=qC,gw=null,Su(e,t,n,o,s,c,d,f,m)}}function Su(e,t,n,r,i,a,o,s,c){var l=t.lanes|t.childLanes;if(sw=l,l|=Fv,nt(e,n,l,r,i,a),fw=null,(n&335544064)===n?(pw=_i(e),r=10262):(pw=null,r=10256),t.actualDuration!==0||(t.subtreeFlags&r)!==0||(t.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,Ku(xh,function(){return TT=window.event,hw===qC&&(hw=YC),Nu(),null})):(e.callbackNode=null,e.callbackPriority=0),Ty=null,Cy=vy(),s!==null&&pr(c,Cy,s,GC),ES=!1,s=!!(t.flags&13878),t.subtreeFlags&13878||s){s=W.T,W.T=null,c=Um.p,Um.p=Ih,r=fC,fC|=iC;try{ol(e,t,n)}finally{fC=r,Um.p=c,W.T=s}}rw=QC,ES?(eb|=n,tb=null,dw=Tf(o,e.containerInfo,pw,Du,Ou,Eu,ku,Nu,Cu,wu,Tu.bind(null,n))):(Du(),Ou(),ku())}function Cu(e){if(rw!==ZC){var t=iw.onRecoverableError;t(e,Au(null))}}function wu(e){wy=vy(),hr(mw===null?cw:Cy,wy,Ty,hw===JC,GC),mw=gw=e}function Tu(e){if((eb&e)!==0){var t=tb;eb&=~e,tb=null,e&4194048&&!($&4194048)&&!(ow&4194048)&&(ir(256),gr(Vy,_h(),t)),e&62914560&&!($&62914560)&&!(ow&62914560)&&(ir(4194304),gr(Qy,_h(),t)),e&2080374784&&!($&2080374784)&&!(ow&2080374784)&&(ir(268435456),gr($y,_h(),t))}}function Eu(){rw===ew&&(rw=ZC,wl(aw,iw),rw=tw)}function Du(){if(rw===QC){rw=ZC;var e=iw,t=aw,n=ow,r=!!(t.flags&13878);if(t.subtreeFlags&13878||r){r=W.T,W.T=null;var i=Um.p;Um.p=Ih;var a=fC;fC|=iC;try{VS=n,HS=e,WS=GS=!1,Ci(),bl(t,e,n),HS=VS=null,n=xT;var o=Wn(e.containerInfo),s=n.focusedElem,c=n.selectionRange;if(o!==s&&s&&s.ownerDocument&&Un(s.ownerDocument.documentElement,s)){if(c!==null&&Gn(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Hn(s,h),v=Hn(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var ee=d[s];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}gE=!!bT,xT=bT=null}finally{fC=a,Um.p=i,W.T=r}}e.current=t,rw=$C}}function Ou(){if(rw===$C){rw=ZC;var e=gw;if(e!==null){Cy=vy();var t=wy,n=Cy;!xv||n<=t||(tb?tb.run(console.timeStamp.bind(console,e,t,n,wv,Cv,`secondary-light`)):console.timeStamp(e,t,n,wv,Cv,`secondary-light`))}e=iw,t=aw,n=ow;var r=!!(t.flags&8772);if(t.subtreeFlags&8772||r){r=W.T,W.T=null;var i=Um.p;Um.p=Ih;var a=fC;fC|=iC;try{VS=n,HS=e,Ci(),cl(e,t.alternate,t),HS=VS=null}finally{fC=a,Um.p=i,W.T=r}}e=cw,t=mw,wy=vy(),hr(t===null?e:Cy,wy,Ty,hw===JC,GC),rw=ew}}function ku(){if(rw===tw||rw===ew){if(rw===tw){var e=wy;wy=vy();var t=wy,n=hw===JC;!xv||t<=e||(tb?tb.run(console.timeStamp.bind(console,n?`Interrupted View Transition`:`Starting Animation`,e,t,wv,Cv,n?`error`:`secondary-light`)):console.timeStamp(n?`Interrupted View Transition`:`Starting Animation`,e,t,wv,Cv,n?` error`:`secondary-light`)),hw!==JC&&(hw=XC)}rw=ZC,e=dw,dw=null,gh(),t=iw;var r=aw;n=ow;var i=uw,a=(n&335544064)===n?10262:10256;(a=r.actualDuration!==0||(r.subtreeFlags&a)!==0||(r.flags&a)!==0)?rw=nw:(rw=ZC,aw=iw=null,ju(t,t.pendingLanes),Cw=0,ww=null);var o=t.pendingLanes;if(o===0&&(KC=null),a||Uu(t),o=ot(n),r=r.stateNode,Dh&&typeof Dh.onCommitFiberRoot==`function`)try{var s=(r.current.flags&128)==128;switch(o){case Ih:var c=yh;break;case Lh:c=bh;break;case Rh:c=xh;break;case zh:c=Ch;break;default:c=xh}Dh.onCommitFiberRoot(Eh,r,c,s)}catch(e){Oh||(Oh=!0,console.error(`React instrumentation encountered an error: %o`,e))}if(kh&&t.memoizedUpdaters.clear(),Gl(),i!==null){s=W.T,c=Um.p,Um.p=Ih,W.T=null;try{var l=t.onRecoverableError;for(r=0;r<i.length;r++){var u=i[r],d=Au(u.stack);w(u.source,l,u.value,d)}}finally{W.T=s,Um.p=c}}if(l=fw,u=pw,pw=null,l!==null&&(fw=null,u===null&&(u=[]),e!==null))for(d=0;d<l.length;d++)i=(0,l[d])(u),i!==void 0&&e.finished.finally(i);ow&3&&Mu(),Ju(t),o=t.pendingLanes,n&261930&&o&42?(ab=!0,t===yw?vw++:(vw=0,yw=t)):(vw=0,yw=null),a||ru(n,wy),Yu(0,!1)}}function Au(e){return e={componentStack:e},Object.defineProperty(e,"digest",{get:function(){console.error(`You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.`)}}),e}function ju(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,hi(t)))}function Mu(){return dw!==null&&(dw.skipTransition(),Ew||(Ew=!0,console.warn(`A flushSync update cancelled a View Transition because it was called while the View Transition was still preparing. To preserve the synchronous semantics, React had to skip the View Transition. If you can, try to avoid flushSync() in a scenario that's likely to interfere.`)),dw=null,hw=JC),Du(),Ou(),ku(),Nu()}function Nu(){if(rw!==nw)return!1;var e=iw,t=sw;sw=0;var n=ot(ow),r=Rh===0||Rh>n?Rh:n;n=W.T;var i=Um.p;try{Um.p=r,W.T=null;var a=lw;lw=null,r=iw;var o=ow;if(rw=ZC,aw=iw=null,ow=0,(fC&(rC|iC))!==nC)throw Error(`Cannot flush passive effects while already rendering.`);ir(o),bw=!0,xw=!1;var s=0;if(Ty=null,s=_h(),hw===XC)gr(wy,s,tb);else{var c=wy,l=s,u=hw===YC;!xv||l<=c||(GC?GC.run(console.timeStamp.bind(console,u?`Waiting for Paint`:`Waiting`,c,l,wv,Cv,`secondary-light`)):console.timeStamp(u?`Waiting for Paint`:`Waiting`,c,l,wv,Cv,`secondary-light`))}c=fC,fC|=iC;var d=r.current;Ci(),Vl(d);var f=r.current;d=cw,Ci(),Nl(r,f,o,a,d),Uu(r),fC=c;var p=_h();if(f=s,d=GC,Ty===null?!xv||p<=f||(d?d.run(console.timeStamp.bind(console,`Remaining Effects`,f,p,wv,Cv,`secondary-dark`)):console.timeStamp(`Remaining Effects`,f,p,wv,Cv,`secondary-dark`)):mr(f,p,Ty,!0,d),ru(o,p),Yu(0,!1),xw?r===ww?Cw++:(Cw=0,ww=r):Cw=0,xw=bw=!1,Dh&&typeof Dh.onPostCommitFiberRoot==`function`)try{Dh.onPostCommitFiberRoot(Eh,r)}catch(e){Oh||(Oh=!0,console.error(`React instrumentation encountered an error: %o`,e))}var m=r.current.stateNode;return m.effectDuration=0,m.passiveEffectDuration=0,!0}finally{Um.p=i,W.T=n,ju(e,t)}}function Pu(e,t,n){t=Lr(n,t),Pi(t),t=xs(e.stateNode,t,2),e=fa(e,t,2),e!==null&&(tt(e,2),Ju(e))}function Fu(e,t,n){if(Tw=!1,e.tag===3)Pu(e,e,n);else{for(;t!==null;){if(t.tag===3){Pu(t,e,n);return}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(KC===null||!KC.has(r))){e=Lr(n,e),Pi(e),n=Ss(2),r=fa(t,n,2),r!==null&&(Cs(n,r,t,e),tt(r,2),Ju(r));return}}t=t.return}console.error(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,n)}}function Iu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(OC=!0,i.add(n),r=Lu.bind(null,e,t,n),kh&&Gu(e,n),t.then(r,r))}function Lu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,n&127?0>My&&(jy=My=vy(),Ny=yy(`Promise Resolved`),Py=xy):n&4194048&&0>Uy&&(Vy=Uy=vy(),Gy=yy(`Promise Resolved`),Wy=xy),Kl()&&W.actQueue===null&&console.error(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`),pC===e&&($&n)===n&&((AC===lC||AC===cC&&($&62914560)===$&&_h()-zC<VC)&&(fC&rC)===nC?iu(e,0):NC|=n,FC===$&&(FC=0)),Ju(e)}function Ru(e,t){t===0&&(t=$e()),e=br(e,t),e!==null&&(tt(e,t),Ju(e))}function zu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ru(e,n)}function Bu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(`Pinged unknown suspense boundary type. This is probably a bug in React.`)}r!==null&&r.delete(t),Ru(e,n)}function Vu(e,t,n){if(t.subtreeFlags&134225920)for(t=t.child;t!==null;){var r=e,i=t,a=i.type===Em;a=n||a,i.tag===22?i.memoizedState===null&&(a&&i.flags&134225920?w(i,Hu,r,i):i.subtreeFlags&134217728&&w(i,Vu,r,i,a)):i.flags&134217728?a&&w(i,Hu,r,i):Vu(r,i,a),t=t.sibling}}function Hu(e,t){Ke(!0);try{El(t,MS),Ul(t),Ol(e,t.alternate,t,MS),Fl(e,t,0,null,!1,0)}finally{Ke(!1)}}function Uu(e){var t=!0;e.current.mode&(Bv|Vv)||(t=!1),Vu(e,e.current,t)}function Wu(e){if((fC&rC)===nC){var t=e.tag;if(t===3||t===1||t===0||t===11||t===14||t===15){if(t=S(e)||`ReactComponent`,Dw!==null){if(Dw.has(t))return;Dw.add(t)}else Dw=new Set([t]);w(e,function(){console.error(`Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead.`)})}}}function Gu(e,t){kh&&e.memoizedUpdaters.forEach(function(n){at(e,n,t)})}function Ku(e,t){var n=W.actQueue;return n===null?ph(e,t):(n.push(t),Aw)}function qu(e){Kl()&&W.actQueue===null&&w(e,function(){console.error(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,S(e))})}function Ju(e){e!==Mw&&e.next===null&&(Mw===null?jw=Mw=e:Mw=Mw.next=e),Fw=!0,W.actQueue===null?Nw||(Nw=!0,nd()):Pw||(Pw=!0,nd())}function Yu(e,t){if(!Iw&&Fw){Iw=!0;do for(var n=!1,r=jw;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ah(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ed(r,a))}else a=$,a=Ye(r,r===pC?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==OT),!(a&3)||Xe(r,a)||(n=!0,ed(r,a))}r=r.next}while(n);Iw=!1}}function Xu(){TT=window.event,Zu()}function Zu(){Fw=Pw=Nw=!1;var e=0;Lw!==0&&Jd()&&(e=Lw);for(var t=_h(),n=null,r=jw;r!==null;){var i=r.next,a=Qu(r,t);a===0?(r.next=null,n===null?jw=i:n.next=i,i===null&&(Mw=n)):(n=r,(e!==0||a&3)&&(Fw=!0)),r=i}rw!==ZC&&rw!==nw||Yu(e,!1),Lw!==0&&(Lw=0)}function Qu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ah(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Qe(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=pC,n=$,n=Ye(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==OT),r=e.callbackNode,n===0||e===t&&(wC===gC||wC===CC)||e.cancelPendingCommit!==null)return r!==null&&td(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Xe(e,n)){if(t=n&-n,t!==e.callbackPriority||W.actQueue!==null&&r!==Rw)td(r);else return t;switch(ot(n)){case Ih:case Lh:n=bh;break;case Rh:n=xh;break;case zh:n=Ch;break;default:n=xh}return r=$u.bind(null,e),W.actQueue===null?n=ph(n,r):(W.actQueue.push(r),n=Rw),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&td(r),e.callbackPriority=2,e.callbackNode=null,2}function $u(e,t){if(ab=ib=!1,TT=window.event,rw!==ZC&&rw!==nw)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(hw===qC&&(hw=YC),Mu()&&e.callbackNode!==n)return null;var r=$;return r=Ye(e,e===pC?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==OT),r===0?null:(Zl(e,r,t),Qu(e,_h()),e.callbackNode!=null&&e.callbackNode===n?$u.bind(null,e):null)}function ed(e,t){if(Mu())return null;ib=ab,ab=!1,Zl(e,t,!0)}function td(e){e!==Rw&&e!==null&&mh(e)}function nd(){W.actQueue!==null&&W.actQueue.push(function(){return Zu(),null}),jT(function(){(fC&(rC|iC))===nC?Zu():ph(yh,Xu)})}function rd(){if(Lw===0){var e=cb;e===0&&(e=Nh,Nh<<=1,!(Nh&261888)&&(Nh=256)),Lw=e}return Lw}function id(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:(He(e,`action`),ln(e))}function ad(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=id((i[Hh]||null).action),o=r.submitter;o&&(t=(t=o[Hh]||null)?id(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new i_(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Lw!==0){var e=new FormData(i,o),t={pending:!0,data:e,method:i.method,action:a};Object.freeze(t),Jo(n,t,null,e)}}else typeof a==`function`&&(s.preventDefault(),e=new FormData(i,o),t={pending:!0,data:e,method:i.method,action:a},Object.freeze(t),Jo(n,t,a,e))},currentTarget:i}]})}}function od(e,t,n){e.currentTarget=n;try{t(e)}catch(e){dv(e)}e.currentTarget=null}function sd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n];a:{var i=void 0,a=r.event;if(r=r.listeners,t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==i&&a.isPropagationStopped())break a;c===null?od(a,s,l):w(c,od,a,s,l),i=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==i&&a.isPropagationStopped())break a;c===null?od(a,s,l):w(c,od,a,s,l),i=c}}}}function cd(e,t){Bw.has(e)||console.error(`Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.`,e);var n=t[Wh];n===void 0&&(n=t[Wh]=new Set);var r=e+`__bubble`;n.has(r)||(dd(t,e,2,!1),n.add(r))}function ld(e,t,n){Bw.has(e)&&!t&&console.error(`Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.`,e);var r=0;t&&(r|=4),dd(n,e,r,t)}function ud(e){if(!e[Vw]){e[Vw]=!0,Xh.forEach(function(t){t!==`selectionchange`&&(Bw.has(t)||ld(t,!1,e),ld(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Vw]||(t[Vw]=!0,ld(`selectionchange`,!1,t))}}function dd(e,t,n,r){switch(nm(t)){case Ih:var i=Zp;break;case Lh:i=Qp;break;default:i=$p}n=i.bind(null,t,n,e),i=void 0,!Qg||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function fd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=ct(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}pn(function(){var r=a,i=dn(n),o=[];a:{var s=iv.get(e);if(s!==void 0){var c=i_,l=e;switch(e){case`keypress`:if(gn(n)===0)break a;case`keydown`:case`keyup`:c=x_;break;case`focusin`:l=`focus`,c=p_;break;case`focusout`:l=`blur`,c=p_;break;case`beforeblur`:case`afterblur`:c=p_;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=d_;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=f_;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=w_;break;case Z_:case Q_:case $_:c=m_;break;case rv:c=T_;break;case`scroll`:case`scrollend`:c=o_;break;case`wheel`:c=E_;break;case`copy`:case`cut`:case`paste`:c=h_;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=S_;break;case`submit`:c=C_;break;case`toggle`:case`beforetoggle`:c=D_}var u=!!(t&4),d=!u&&(e===`scroll`||e===`scrollend`),f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){var h=p;if(m=h.stateNode,h=h.tag,h!==5&&h!==26&&h!==27||m===null||f===null||(h=mn(p,f),h!=null&&u.push(pd(p,h,m))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,s=e===`mouseout`||e===`pointerout`,c&&n!==qg&&(l=n.relatedTarget||n.fromElement)&&(ct(l)||l[Uh]))break a;(s||c)&&(l=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,s?(c=n.relatedTarget||n.toElement,s=r,c=c?ct(c):null,c!==null&&(d=b(c),u=c.tag,c!==d||u!==5&&u!==27&&u!==6)&&(c=null)):(s=null,c=r),s!==c&&(u=d_,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=S_,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=s==null?l:ut(s),m=c==null?l:ut(c),l=new u(h,p+`leave`,s,n,i),l.target=d,l.relatedTarget=m,h=null,ct(i)===r&&(u=new u(f,p+`enter`,c,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,u=s&&c?he(s,c,hd):null,s!==null&&gd(o,l,s,u,!1),c!==null&&d!==null&&gd(o,d,c,u,!0)))}a:{if(s=r?ut(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=jn;else if(En(s)){if(V_)g=Ln;else{g=Fn;var _=Pn}}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&nn(r.elementType)&&(g=jn):g=In;if(g&&=g(e,r)){On(o,g,n,i);break a}_&&_(e,s,r)}switch(_=r?ut(r):window,e){case`focusin`:(En(_)||_.contentEditable===`true`)&&(W_=_,G_=r,K_=null);break;case`focusout`:K_=G_=W_=null;break;case`mousedown`:q_=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:q_=!1,Kn(o,n,i);break;case`selectionchange`:if(U_)break;case`keydown`:case`keyup`:Kn(o,n,i)}var v;if(A_)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else L_?Sn(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===k_&&(y=`onCompositionStart`);y&&(N_&&n.locale!==`ko`&&(L_||y!==`onCompositionStart`?y===`onCompositionEnd`&&L_&&(v=hn()):(e_=i,t_=`value`in e_?e_.value:e_.textContent,L_=!0)),_=md(r,y),0<_.length&&(y=new g_(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=Cn(n),v!==null&&(y.data=v)))),(v=M_?wn(e,n):Tn(e,n))&&(y=md(r,`onBeforeInput`),0<y.length&&(_=new __(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:_,listeners:y}),_.data=v)),ad(o,e,r,n,i)}sd(o,t)})}function pd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function md(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(pd(e,i,a)),i=mn(e,t),i!=null&&r.push(pd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function hd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function gd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(pd(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(pd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}function _d(e,t){on(e,t),e!==`input`&&e!==`textarea`&&e!==`select`||t==null||t.value!==null||Bg||(Bg=!0,e===`select`&&t.multiple?console.error("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",e):console.error("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",e));var n={registrationNameDependencies:Zh,possibleRegistrationNames:Qh};nn(e)||typeof t.is==`string`||cn(e,t,n),t.contentEditable&&!t.suppressContentEditableWarning&&t.children!=null&&console.error("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.")}function vd(e,t,n,r){t!==n&&(n=wd(n),wd(t)!==n&&(r[e]=t))}function yd(e){return!!(e.getAttribute(`vt-share`)||e.getAttribute(`vt-exit`)||e.getAttribute(`vt-enter`)||e.getAttribute(`vt-update`))}function bd(e){if(!yd(e))return!1;var t=e.getAttribute(`vt-name`);return e=e.style[`view-transition-name`],t?t===e:e.startsWith(`_T_`)}function xd(e,t,n){t.forEach(function(t){t===`style`?e.getAttribute(t)!==``&&(t=e.style,(t.length===1&&t[0]===`view-transition-name`||t.length===2&&t[0]===`view-transition-class`&&t[1]===`view-transition-name`)&&bd(e)||(n.style=jd(e))):n[Ad(t)]=e.getAttribute(t)})}function Sd(e,t){!1===t?console.error("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",e,e,e):console.error("Expected `%s` listener to be a function, instead got a value of `%s` type.",e,typeof t)}function Cd(e,t){return e=e.namespaceURI===Mg||e.namespaceURI===Ng?e.ownerDocument.createElementNS(e.namespaceURI,e.tagName):e.ownerDocument.createElement(e.tagName),e.innerHTML=t,e.innerHTML}function wd(e){return Be(e)&&(console.error(`The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.`,ze(e)),Ve(e)),(typeof e==`string`?e:``+e).replace(Xw,`
`).replace(Zw,``)}function Td(e,t){return t=wd(t),wd(e)===t}function Ed(e,t,n,r,i,a){switch(n){case`children`:if(typeof r==`string`)Zt(r,t,!1),t===`body`||t===`textarea`&&r===``||Qt(e,r);else if(typeof r==`number`||typeof r==`bigint`)Zt(``+r,t,!1),t!==`body`&&Qt(e,``+r);else return;break;case`className`:vt(e,`class`,r);break;case`tabIndex`:vt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:vt(e,n,r);break;case`style`:tn(e,r,a);return;case`data`:if(t!==`object`){vt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){console.error(n===`src`?`An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`:`An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`,n,n),e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}He(r,n),r=ln(r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(r!=null&&(t===`form`?n===`formAction`?console.error(`You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>.`):typeof r==`function`&&(i.encType==null&&i.method==null||qw||(qw=!0,console.error(`Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden.`)),i.target==null||Kw||(Kw=!0,console.error(`Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window.`))):t===`input`||t===`button`?n===`action`?console.error(`You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>.`):t!==`input`||i.type===`submit`||i.type===`image`||Ww?t!==`button`||i.type==null||i.type===`submit`||Ww?typeof r==`function`&&(i.name==null||Gw||(Gw=!0,console.error(`Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.`)),i.formEncType==null&&i.formMethod==null||qw||(qw=!0,console.error(`Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden.`)),i.formTarget==null||Kw||(Kw=!0,console.error(`Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window.`))):(Ww=!0,console.error(`A button can only specify a formAction along with type="submit" or no type.`)):(Ww=!0,console.error(`An input can only specify a formAction along with type="submit" or type="image".`)):console.error(n===`action`?`You can only pass the action prop to <form>.`:`You can only pass the formAction prop to <input> or <button>.`)),typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof a==`function`&&(n===`formAction`?(t!==`input`&&Ed(e,t,`name`,i.name,i,null),Ed(e,t,`formEncType`,i.formEncType,i,null),Ed(e,t,`formMethod`,i.formMethod,i,null),Ed(e,t,`formTarget`,i.formTarget,i,null)):(Ed(e,t,`encType`,i.encType,i,null),Ed(e,t,`method`,i.method,i,null),Ed(e,t,`target`,i.target,i,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}He(r,n),r=ln(r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(typeof r!=`function`&&Sd(n,r),e.onclick=un);return;case`onScroll`:r!=null&&(typeof r!=`function`&&Sd(n,r),cd(`scroll`,e));return;case`onScrollEnd`:r!=null&&(typeof r!=`function`&&Sd(n,r),cd(`scrollend`,e));return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=r.__html,n!=null){if(i.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");a?.__html!==n&&(e.innerHTML=n)}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}He(r,n),n=ln(r),e.setAttributeNS(Qw,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?(He(r,n),e.setAttribute(n,r)):e.removeAttribute(n);break;case`inert`:r!==``||Yw[n]||(Yw[n]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",n));case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?(He(r,n),e.setAttribute(n,r)):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?(He(r,n),e.setAttribute(n,r)):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):(He(r,n),e.setAttribute(n,r));break;case`popover`:cd(`beforetoggle`,e),cd(`toggle`,e),M(e,`popover`,r);break;case`xlinkActuate`:N(e,Qw,`xlink:actuate`,r);break;case`xlinkArcrole`:N(e,Qw,`xlink:arcrole`,r);break;case`xlinkRole`:N(e,Qw,`xlink:role`,r);break;case`xlinkShow`:N(e,Qw,`xlink:show`,r);break;case`xlinkTitle`:N(e,Qw,`xlink:title`,r);break;case`xlinkType`:N(e,Qw,`xlink:type`,r);break;case`xmlBase`:N(e,$w,`xml:base`,r);break;case`xmlLang`:N(e,$w,`xml:lang`,r);break;case`xmlSpace`:N(e,$w,`xml:space`,r);break;case`is`:a!=null&&console.error(`Cannot update the "is" prop after it has been initialized.`),M(e,`is`,r);break;case`innerText`:case`textContent`:return;case`popoverTarget`:Jw||typeof r!=`object`||!r||(Jw=!0,console.error("The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",r));default:if(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)n=rn(n),M(e,n,r);else{Zh.hasOwnProperty(n)&&r!=null&&typeof r!=`function`&&Sd(n,r);return}}rg=!0}function Dd(e,t,n,r,i,a){switch(n){case`style`:tn(e,r,a);return;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information.");if(n=r.__html,n!=null){if(i.children!=null)throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");a?.__html!==n&&(e.innerHTML=n)}}break;case`children`:if(typeof r==`string`)Qt(e,r);else if(typeof r==`number`||typeof r==`bigint`)Qt(e,``+r);else return;break;case`onScroll`:r!=null&&(typeof r!=`function`&&Sd(n,r),cd(`scroll`,e));return;case`onScrollEnd`:r!=null&&(typeof r!=`function`&&Sd(n,r),cd(`scrollend`,e));return;case`onClick`:r!=null&&(typeof r!=`function`&&Sd(n,r),e.onclick=un);return;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:return;case`innerText`:case`textContent`:return;default:if(Zh.hasOwnProperty(n))r!=null&&typeof r!=`function`&&Sd(n,r);else a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),a=n.slice(2,i?n.length-7:void 0),t=e[Hh]||null,t=t==null?null:t[n],typeof t==`function`&&e.removeEventListener(a,t,i),typeof r==`function`)){typeof t!=`function`&&t!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,r,i);break a}rg=!0,n in e?e[n]=r:!0===r?e.setAttribute(n,``):M(e,n,r)}return}rg=!0}function Od(e,t,n){switch(_d(t,n),t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:cd(`error`,e),cd(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ed(e,t,a,o,n,null)}}i&&Ed(e,t,`srcSet`,n.srcSet,n,null),r&&Ed(e,t,`src`,n.src,n,null);return;case`input`:ht(`input`,n),cd(`invalid`,e);var s=a=o=i=null,c=null,l=null;for(r in n)if(n.hasOwnProperty(r)){var u=n[r];if(u!=null)switch(r){case`name`:i=u;break;case`type`:o=u;break;case`checked`:c=u;break;case`defaultChecked`:l=u;break;case`value`:a=u;break;case`defaultValue`:s=u;break;case`children`:case`dangerouslySetInnerHTML`:if(u!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ed(e,t,r,u,n,null)}}St(e,n),Ct(e,a,s,c,l,o,i,!1);return;case`select`:for(i in ht(`select`,n),cd(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(s=n[i],s!=null))switch(i){case`value`:a=s;break;case`defaultValue`:o=s;break;case`multiple`:r=s;default:Ed(e,t,i,s,n,null)}Et(e,n),t=a,n=o,e.multiple=!!r,t==null?n!=null&&z(e,!!r,n,!0):z(e,!!r,t,!1);return;case`textarea`:for(o in ht(`textarea`,n),cd(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(s=n[o],s!=null))switch(o){case`value`:r=s;break;case`defaultValue`:i=s;break;case`children`:a=s;break;case`dangerouslySetInnerHTML`:if(s!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:Ed(e,t,o,s,n,null)}B(e,n),Ot(e,r,i,a);return;case`option`:for(c in R(e,n),n)if(n.hasOwnProperty(c)&&(r=n[c],r!=null))switch(c){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Ed(e,t,c,r,n,null)}return;case`dialog`:cd(`beforetoggle`,e),cd(`toggle`,e),cd(`cancel`,e),cd(`close`,e);break;case`iframe`:case`object`:cd(`load`,e);break;case`video`:case`audio`:for(r=0;r<zw.length;r++)cd(zw[r],e);break;case`image`:cd(`error`,e),cd(`load`,e);break;case`details`:cd(`toggle`,e);break;case`embed`:case`source`:case`link`:cd(`error`,e),cd(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`children`:case`dangerouslySetInnerHTML`:throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");default:Ed(e,t,l,r,n,null)}return;default:if(nn(t)){for(u in n)n.hasOwnProperty(u)&&(r=n[u],r!==void 0&&Dd(e,t,u,r,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(r=n[s],r!=null&&Ed(e,t,s,r,n,null))}function kd(e,t,n,r){switch(_d(t,r),t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,s=null,c=null,l=null,u=null;for(p in n){var d=n[p];if(n.hasOwnProperty(p)&&d!=null)switch(p){case`checked`:break;case`value`:break;case`defaultValue`:c=d;default:r.hasOwnProperty(p)||Ed(e,t,p,null,r,d)}}for(var f in r){var p=r[f];if(d=n[f],r.hasOwnProperty(f)&&(p!=null||d!=null))switch(f){case`type`:p!==d&&(rg=!0),a=p;break;case`name`:p!==d&&(rg=!0),i=p;break;case`checked`:p!==d&&(rg=!0),l=p;break;case`defaultChecked`:p!==d&&(rg=!0),u=p;break;case`value`:p!==d&&(rg=!0),o=p;break;case`defaultValue`:p!==d&&(rg=!0),s=p;break;case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:p!==d&&Ed(e,t,f,p,r,d)}}t=n.type===`checkbox`||n.type===`radio`?n.checked!=null:n.value!=null,r=r.type===`checkbox`||r.type===`radio`?r.checked!=null:r.value!=null,t||!r||Uw||(console.error(`A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components`),Uw=!0),!t||r||Hw||(console.error(`A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components`),Hw=!0),L(e,o,s,c,l,u,a,i);return;case`select`:for(a in p=o=s=f=null,n)if(c=n[a],n.hasOwnProperty(a)&&c!=null)switch(a){case`value`:break;case`multiple`:p=c;default:r.hasOwnProperty(a)||Ed(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(a!=null||c!=null))switch(i){case`value`:a!==c&&(rg=!0),f=a;break;case`defaultValue`:a!==c&&(rg=!0),s=a;break;case`multiple`:a!==c&&(rg=!0),o=a;default:a!==c&&Ed(e,t,i,a,r,c)}r=s,t=o,n=p,f==null?!!n!=!!t&&(r==null?z(e,!!t,t?[]:``,!1):z(e,!!t,r,!0)):z(e,!!t,f,!1);return;case`textarea`:for(s in p=f=null,n)if(i=n[s],n.hasOwnProperty(s)&&i!=null&&!r.hasOwnProperty(s))switch(s){case`value`:break;case`children`:break;default:Ed(e,t,s,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:i!==a&&(rg=!0),f=i;break;case`defaultValue`:i!==a&&(rg=!0),p=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");break;default:i!==a&&Ed(e,t,o,i,r,a)}Dt(e,f,p);return;case`option`:for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&f!=null&&!r.hasOwnProperty(m))switch(m){case`selected`:e.selected=!1;break;default:Ed(e,t,m,null,r,f)}for(c in r)if(f=r[c],p=n[c],r.hasOwnProperty(c)&&f!==p&&(f!=null||p!=null))switch(c){case`selected`:f!==p&&(rg=!0),e.selected=f&&typeof f!=`function`&&typeof f!=`symbol`;break;default:Ed(e,t,c,f,r,p)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var h in n)f=n[h],n.hasOwnProperty(h)&&f!=null&&!r.hasOwnProperty(h)&&Ed(e,t,h,null,r,f);for(l in r)if(f=r[l],p=n[l],r.hasOwnProperty(l)&&f!==p&&(f!=null||p!=null))switch(l){case`children`:case`dangerouslySetInnerHTML`:if(f!=null)throw Error(t+" is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");break;default:Ed(e,t,l,f,r,p)}return;default:if(nn(t)){for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!==void 0&&!r.hasOwnProperty(g)&&Dd(e,t,g,void 0,r,f);for(u in r)f=r[u],p=n[u],!r.hasOwnProperty(u)||f===p||f===void 0&&p===void 0||Dd(e,t,u,f,r,p);return}}for(var _ in n)f=n[_],n.hasOwnProperty(_)&&f!=null&&!r.hasOwnProperty(_)&&Ed(e,t,_,null,r,f);for(d in r)f=r[d],p=n[d],!r.hasOwnProperty(d)||f===p||f==null&&p==null||Ed(e,t,d,f,r,p)}function Ad(e){switch(e){case`class`:return`className`;case`for`:return`htmlFor`;default:return e}}function jd(e){for(var t={},n=e.style,r=0;r<n.length;r++){var i=n[r];i===`view-transition-name`&&bd(e)||(t[i]=n.getPropertyValue(i))}return t}function Md(e,t,n){if(t!=null&&typeof t!=`object`)console.error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");else{var r,i=r=``,a;for(a in t)if(t.hasOwnProperty(a)){var o=t[a];o!=null&&typeof o!=`boolean`&&o!==``&&(a.indexOf(`--`)===0?(Ue(o,a),r+=i+a+`:`+(``+o).trim()):typeof o!=`number`||o===0||jg.has(a)?(Ue(o,a),r+=i+a.replace(xg,`-$1`).toLowerCase().replace(Sg,`-ms-`)+`:`+(``+o).trim()):r+=i+a.replace(xg,`-$1`).toLowerCase().replace(Sg,`-ms-`)+`:`+o+`px`,i=`;`)}r||=null,t=e.getAttribute(`style`),t!==r&&(r=wd(r),t=wd(t),t===r||t[t.length-1]===`;`&&yd(e)||(n.style=jd(e)))}}function Nd(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(He(r,t),e===``+r)return}vd(t,e,r,a)}function Pd(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null){switch(typeof r){case`function`:case`symbol`:return}if(!r)return}else switch(typeof r){case`function`:case`symbol`:break;default:if(r)return}vd(t,e,r,a)}function Fd(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:break;default:if(He(r,n),e===``+r)return}vd(t,e,r,a)}function Id(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return;default:if(isNaN(r))return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(!isNaN(r)&&(He(r,t),e===``+r))return}vd(t,e,r,a)}function Ld(e,t,n,r,i,a){if(i.delete(n),e=e.getAttribute(n),e===null)switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:return}else if(r!=null)switch(typeof r){case`function`:case`symbol`:case`boolean`:break;default:if(He(r,t),n=ln(``+r),e===n)return}vd(t,e,r,a)}function Rd(e,t,n,r){for(var i={},a=new Set,o=e.attributes,s=0;s<o.length;s++)switch(o[s].name.toLowerCase()){case`value`:break;case`checked`:break;case`selected`:break;case`vt-name`:case`vt-update`:case`vt-enter`:case`vt-exit`:case`vt-share`:case`vt-parent-enter`:case`vt-parent-exit`:break;default:a.add(o[s].name)}if(nn(t)){for(var c in n)if(n.hasOwnProperty(c)){var l=n[c];if(l!=null){if(Zh.hasOwnProperty(c))typeof l!=`function`&&Sd(c,l);else if(!0!==n.suppressHydrationWarning)switch(c){case`children`:typeof l!=`string`&&typeof l!=`number`||vd(`children`,e.textContent,l,i);continue;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:continue;case`dangerouslySetInnerHTML`:o=e.innerHTML,l=l?l.__html:void 0,l!=null&&(l=Cd(e,l),vd(c,o,l,i));continue;case`style`:a.delete(c),Md(e,l,i);continue;case`offsetParent`:case`offsetTop`:case`offsetLeft`:case`offsetWidth`:case`offsetHeight`:case`isContentEditable`:case`outerText`:case`outerHTML`:a.delete(c.toLowerCase()),console.error("Assignment to read-only property will result in a no-op: `%s`",c);continue;case`className`:a.delete(`class`),o=_t(e,`class`,l),vd(`className`,o,l,i);continue;default:r.context===_T&&t!==`svg`&&t!==`math`?a.delete(c.toLowerCase()):a.delete(c),o=_t(e,c,l),vd(c,o,l,i)}}}}else for(l in n)if(n.hasOwnProperty(l)&&(c=n[l],c!=null)){if(Zh.hasOwnProperty(l))typeof c!=`function`&&Sd(l,c);else if(!0!==n.suppressHydrationWarning)switch(l){case`children`:typeof c!=`string`&&typeof c!=`number`||vd(`children`,e.textContent,c,i);continue;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`value`:case`checked`:case`selected`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:continue;case`dangerouslySetInnerHTML`:o=e.innerHTML,c=c?c.__html:void 0,c!=null&&(c=Cd(e,c),o!==c&&(i[l]={__html:o}));continue;case`className`:Nd(e,l,`class`,c,a,i);continue;case`tabIndex`:Nd(e,l,`tabindex`,c,a,i);continue;case`style`:a.delete(l),Md(e,c,i);continue;case`multiple`:a.delete(l),vd(l,e.multiple,c,i);continue;case`muted`:a.delete(l),vd(l,e.muted,c,i);continue;case`autoFocus`:a.delete(`autofocus`),vd(l,e.autofocus,c,i);continue;case`data`:if(t!==`object`){a.delete(l),o=e.getAttribute(`data`),vd(l,o,c,i);continue}case`src`:case`href`:if(!(c!==``||t===`a`&&l===`href`||t===`object`&&l===`data`)){console.error(l===`src`?`An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`:`An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.`,l,l);continue}Ld(e,l,l,c,a,i);continue;case`action`:case`formAction`:if(o=e.getAttribute(l),typeof c==`function`){a.delete(l.toLowerCase()),l===`formAction`?(a.delete(`name`),a.delete(`formenctype`),a.delete(`formmethod`),a.delete(`formtarget`)):(a.delete(`enctype`),a.delete(`method`),a.delete(`target`));continue}if(o===tT){a.delete(l.toLowerCase()),vd(l,`function`,c,i);continue}Ld(e,l,l.toLowerCase(),c,a,i);continue;case`xlinkHref`:Ld(e,l,`xlink:href`,c,a,i);continue;case`contentEditable`:Fd(e,l,`contenteditable`,c,a,i);continue;case`spellCheck`:Fd(e,l,`spellcheck`,c,a,i);continue;case`draggable`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:Fd(e,l,l,c,a,i);continue;case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`credentialless`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:Pd(e,l,l.toLowerCase(),c,a,i);continue;case`capture`:case`download`:a:{s=e;var u=o=l,d=i;if(a.delete(u),s=s.getAttribute(u),s===null)switch(typeof c){case`undefined`:case`function`:case`symbol`:break a;default:if(!1===c)break a}else if(c!=null)switch(typeof c){case`function`:case`symbol`:break;case`boolean`:if(!0===c&&s===``)break a;break;default:if(He(c,o),s===``+c)break a}vd(o,s,c,d)}continue;case`cols`:case`rows`:case`size`:case`span`:a:{if(s=e,u=o=l,d=i,a.delete(u),s=s.getAttribute(u),s===null)switch(typeof c){case`undefined`:case`function`:case`symbol`:case`boolean`:break a;default:if(isNaN(c)||1>c)break a}else if(c!=null)switch(typeof c){case`function`:case`symbol`:case`boolean`:break;default:if(!(isNaN(c)||1>c)&&(He(c,o),s===``+c))break a}vd(o,s,c,d)}continue;case`rowSpan`:Id(e,l,`rowspan`,c,a,i);continue;case`start`:Id(e,l,l,c,a,i);continue;case`xHeight`:Nd(e,l,`x-height`,c,a,i);continue;case`xlinkActuate`:Nd(e,l,`xlink:actuate`,c,a,i);continue;case`xlinkArcrole`:Nd(e,l,`xlink:arcrole`,c,a,i);continue;case`xlinkRole`:Nd(e,l,`xlink:role`,c,a,i);continue;case`xlinkShow`:Nd(e,l,`xlink:show`,c,a,i);continue;case`xlinkTitle`:Nd(e,l,`xlink:title`,c,a,i);continue;case`xlinkType`:Nd(e,l,`xlink:type`,c,a,i);continue;case`xmlBase`:Nd(e,l,`xml:base`,c,a,i);continue;case`xmlLang`:Nd(e,l,`xml:lang`,c,a,i);continue;case`xmlSpace`:Nd(e,l,`xml:space`,c,a,i);continue;case`inert`:c!==``||Yw[l]||(Yw[l]=!0,console.error("Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",l)),Pd(e,l,l,c,a,i);continue;default:if(!(2<l.length)||l[0]!==`o`&&l[0]!==`O`||l[1]!==`n`&&l[1]!==`N`){s=rn(l),o=!1,r.context===_T&&t!==`svg`&&t!==`math`?a.delete(s.toLowerCase()):(u=l.toLowerCase(),u=Fg.hasOwnProperty(u)&&Fg[u]||null,u!==null&&u!==l&&(o=!0,a.delete(u)),a.delete(s));a:if(u=e,d=s,s=c,gt(d)){if(u.hasAttribute(d))u=d.toLowerCase()===`nonce`?u.nonce:u.getAttribute(d),He(s,d),s=u===``+s?s:u;else{switch(typeof s){case`function`:case`symbol`:break a;case`boolean`:if(u=d.toLowerCase().slice(0,5),u!==`data-`&&u!==`aria-`)break a}s=s===void 0?void 0:null}}else s=void 0;o||vd(l,s,c,i)}}}return 0<a.size&&!0!==n.suppressHydrationWarning&&xd(e,a,i),Object.keys(i).length===0?null:i}function zd(e,t){switch(e.length){case 0:return``;case 1:return e[0];case 2:return e[0]+` `+t+` `+e[1];default:return e.slice(0,-1).join(`, `)+`, `+t+` `+e[e.length-1]}}function Bd(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Vd(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Bd(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Bd(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}function Hd(e){return e.nodeType===9?e:e.ownerDocument}function Ud(e){switch(e){case Ng:return vT;case Mg:return yT;default:return _T}}function Wd(e,t){if(e===_T)switch(t){case`svg`:return vT;case`math`:return yT;default:return _T}return e===vT&&t===`foreignObject`?_T:e}function Gd(e,t,n,r){return n=Hd(n).createElement(e),n[Vh]=r,n[Hh]=t,Od(n,e,t),A(n),n}function Kd(e){if(e=e.type,typeof e!=`string`||e===``||(e=e.toLowerCase(),e===`module`||e===`importmap`||e===`speculationrules`))return!1;switch(e){case`application/ecmascript`:case`application/javascript`:case`application/x-ecmascript`:case`application/x-javascript`:case`text/ecmascript`:case`text/javascript`:case`text/javascript1.0`:case`text/javascript1.1`:case`text/javascript1.2`:case`text/javascript1.3`:case`text/javascript1.4`:case`text/javascript1.5`:case`text/jscript`:case`text/livescript`:case`text/x-ecmascript`:case`text/x-javascript`:return!1}return!0}function qd(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}function Jd(){var e=window.event;return e&&e.type===`popstate`?e!==wT&&(wT=e,!0):(wT=null,!1)}function Yd(){var e=window.event;return e&&e!==TT?e.type:null}function Xd(){var e=window.event;return e&&e!==TT?e.timeStamp:-1.1}function Zd(e){setTimeout(function(){throw e})}function Qd(e,t,n){switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&e.focus();break;case`img`:n.src?e.src=n.src:n.srcSet&&(e.srcset=n.srcSet)}}function $d(){}function ef(e,t,n,r){kd(e,t,n,r),e[Hh]=r}function tf(e){Qt(e,``)}function nf(e,t,n){e.nodeValue=n}function rf(e){if(!e.__reactWarnedAboutChildrenConflict){var t=e[Hh]||null;if(t!==null){var n=lt(e);n!==null&&(typeof t.children==`string`||typeof t.children==`number`?(e.__reactWarnedAboutChildrenConflict=!0,w(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})):t.dangerouslySetInnerHTML!=null&&(e.__reactWarnedAboutChildrenConflict=!0,w(n,function(){console.error('Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.')})))}}}function af(e){return e===`head`}function of(e,t){e.removeChild(t)}function sf(e,t){(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e).removeChild(t)}function cf(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===oT||n===iT){if(r===0){e.removeChild(i),fm(t);return}r--}else if(n===aT||n===sT||n===cT||n===lT||n===rT)r++;else if(n===uT)pp(e.ownerDocument.documentElement);else if(n===fT){n=e.ownerDocument.head,pp(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[Jh]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===dT&&pp(e.ownerDocument.body)}n=i}while(n);fm(t)}function lf(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===oT){if(e===0)break;e--}else n!==aT&&n!==sT&&n!==cT&&n!==lT||e++}n=r}while(n)}function uf(e){lf(e,!0)}function df(e){e=e.style,typeof e.setProperty==`function`?e.setProperty(`display`,`none`,`important`):e.display=`none`}function ff(e){e.nodeValue=``}function pf(e){lf(e,!1)}function mf(e,t){t=t[gT],t=t!=null&&t.hasOwnProperty(`display`)?t.display:null,e.style.display=t==null||typeof t==`boolean`?``:(``+t).trim()}function hf(e,t){e.nodeValue=t}function gf(e){for(var t=e.firstChild;t!=null;){if(t.nodeType===1&&getComputedStyle(t).display===`block`){w(lt(t)||lt(e),function(e,t){console.error(`You're about to start a <ViewTransition> around a display: inline element <%s>, which itself has a display: block element <%s> inside it. This might trigger a bug in Safari which causes the View Transition to be skipped with a duplicate name error.
https://bugs.webkit.org/show_bug.cgi?id=290923`,e.toLocaleLowerCase(),t.toLocaleLowerCase())},e.tagName,t.tagName);break}if(t.firstChild!=null)t=t.firstChild;else{if(t===e)break;for(;t.nextSibling==null&&t.parentNode!=null&&t.parentNode!==e;)t=t.parentNode;t=t.nextSibling}}}function _f(e,t,n){if(t=CSS.escape(t)===t?t:`r-`+btoa(t).replace(/=/g,``),e.style.viewTransitionName=t,n!=null&&(e.style.viewTransitionClass=n),n=getComputedStyle(e),n.display===`inline`){if(t=e.getClientRects(),t.length===1)var r=1;else for(var i=r=0;i<t.length;i++){var a=t[i];0<a.width&&0<a.height&&r++}r===1?(e=e.style,e.display=t.length===1?`inline-block`:`block`,e.marginTop=`-`+n.paddingTop,e.marginBottom=`-`+n.paddingBottom):gf(e)}}function vf(e,t){e=e.style,t=t[gT];var n=t==null?null:t.hasOwnProperty(`viewTransitionName`)?t.viewTransitionName:t.hasOwnProperty(`view-transition-name`)?t[`view-transition-name`]:null;e.viewTransitionName=n==null||typeof n==`boolean`?``:(``+n).trim(),n=t==null?null:t.hasOwnProperty(`viewTransitionClass`)?t.viewTransitionClass:t.hasOwnProperty(`view-transition-class`)?t[`view-transition-class`]:null,e.viewTransitionClass=n==null||typeof n==`boolean`?``:(``+n).trim(),e.display===`inline-block`&&(t==null?e.display=e.margin=``:(n=t.display,e.display=n==null||typeof n==`boolean`?``:n,n=t.margin,n==null?(n=t.hasOwnProperty(`marginTop`)?t.marginTop:t[`margin-top`],e.marginTop=n==null||typeof n==`boolean`?``:n,t=t.hasOwnProperty(`marginBottom`)?t.marginBottom:t[`margin-bottom`],e.marginBottom=t==null||typeof t==`boolean`?``:t):e.margin=n))}function yf(e,t,n){return n=n.ownerDocument.defaultView,{rect:e,abs:t.position===`absolute`||t.position===`fixed`,clip:t.clipPath!==`none`||t.overflow!==`visible`||t.filter!==`none`||t.mask!==`none`||t.mask!==`none`||t.borderRadius!==`0px`,view:0<=e.bottom&&0<=e.right&&e.top<=n.innerHeight&&e.left<=n.innerWidth}}function bf(e){return yf(e.getBoundingClientRect(),getComputedStyle(e),e)}function xf(e){var t=e.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var n=getComputedStyle(e);return yf(t,n,e)}function Sf(e,t){if(typeof e==`object`&&e)switch(e.name){case`TimeoutError`:return Error(`A ViewTransition timed out because a Navigation stalled. This can happen if a Navigation is blocked on React itself. Such as if it's resolved inside useEffect. This can be solved by moving the resolution to useLayoutEffect.`,{cause:e});case`AbortError`:return t?null:Error(`A ViewTransition was aborted early. This might be because you have other View Transition libraries on the page and only one can run at a time. To avoid this, use only React's built-in <ViewTransition> to coordinate.`,{cause:e});case`InvalidStateError`:if(e.message===`View transition was skipped because document visibility state is hidden.`||e.message===`Skipping view transition because document visibility state has become hidden.`||e.message===`Skipping view transition because viewport size changed.`||e.message===`Transition was aborted because of invalid state`)return null}return e}function Cf(e){return e.documentElement.clientHeight}function wf(e){this.addEventListener(`load`,e),this.addEventListener(`error`,e)}function Tf(e,t,n,r,i,a,o,s,c,l,u){var d=t.nodeType===9?t:t.ownerDocument;try{var f=d.startViewTransition({update:function(){var t=d.defaultView,n=t.navigation&&t.navigation.transition,o=d.fonts.status;r();var s=[];if(o===`loaded`&&(Cf(d),d.fonts.status===`loading`&&s.push(d.fonts.ready)),o=s.length,e!==null)for(var c=e.suspenseyImages,u=0,f=0;f<c.length;f++){var p=c[f];if(!p.complete){var m=p.getBoundingClientRect();if(0<m.bottom&&0<m.right&&m.top<t.innerHeight&&m.left<t.innerWidth){if(u+=Np(p),u>YT){s.length=o;break}p=new Promise(wf.bind(p)),s.push(p)}}}if(0<s.length)return l(0<o?s.length>o?`Waiting on Fonts and Images`:`Waiting on Fonts`:`Waiting on Images`),t=Promise.race([Promise.all(s),new Promise(function(e){return setTimeout(e,MT)})]).then(i,i),(n?Promise.allSettled([n.finished,t]):t).then(a,a);if(i(),n)return n.finished.then(a,a);a()},types:n});d.__reactViewTransition=f;var p=[];return f.ready.then(function(){for(var e=d.documentElement.getAnimations({subtree:!0}),t=0;t<e.length;t++){var n=e[t],r=n.effect,i=r.pseudoElement;if(i!=null&&i.startsWith(`::view-transition`)){p.push(n),n=r.getKeyframes();for(var a=i=void 0,s=!0,c=0;c<n.length;c++){var l=n[c],u=l.width;if(i===void 0)i=u;else if(i!==u){s=!1;break}if(u=l.height,a===void 0)a=u;else if(a!==u){s=!1;break}delete l.width,delete l.height,l.transform===`none`&&delete l.transform}s&&i!==void 0&&a!==void 0&&(r.setKeyframes(n),s=getComputedStyle(r.target,r.pseudoElement),s.width!==i||s.height!==a)&&(s=n[0],s.width=i,s.height=a,s=n[n.length-1],s.width=i,s.height=a,r.setKeyframes(n))}}o()},function(e){d.__reactViewTransition===f&&(d.__reactViewTransition=null);try{e=Sf(e,!1),e!==null&&c(e)}finally{r(),i(),o(),u()}}),f.finished.finally(function(){for(var e=0;e<p.length;e++)p[e].cancel();d.__reactViewTransition===f&&(d.__reactViewTransition=null),u(),s()}),f}catch{return r(),i(),u(),o(),null}}function Ef(e,t){this._scope=document.documentElement,this._selector=`::view-transition-`+e+`(`+t+`)`}function Df(e){return{name:e,group:new Ef(`group`,e),imagePair:new Ef(`image-pair`,e),old:new Ef(`old`,e),new:new Ef(`new`,e)}}function Of(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}function kf(e,t,n,r){return fe(e).addEventListener(t,n,r),!1}function Af(e,t,n,r){return fe(e).removeEventListener(t,n,r),!1}function jf(e){return e!=null&&typeof e!=`boolean`&&(!0===e.once||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Mf(e){return e==null?`c=0`:typeof e==`boolean`?`c=`+(e?`1`:`0`):`c=`+(e.capture?`1`:`0`)}function Nf(e,t,n,r){if(e.length===0)return-1;r=Mf(r);for(var i=0;i<e.length;i++){var a=e[i];if(a.type===t&&a.listener===n&&Mf(a.optionsOrUseCapture)===r)return i}return-1}function Pf(e,t){return e.tag!==6&&(e=fe(e),cp(e,t))}function Ff(e,t){return t.push(e),!1}function If(e,t){return e.tag!==6&&(e=fe(e),e===t||e.contains(t)?(t.blur(),!0):!1)}function Lf(e,t){return e.tag===6||(e=fe(e),t.observe(e)),!1}function Rf(e,t){return e.tag===6||(e=fe(e),t.unobserve(e)),!1}function zf(e,t,n){NT.push({fragmentInstance:e,observer:t,instance:n}),PT||(PT=!0,lp(function(){PT=!1;var e=NT;NT=[];for(var t=0;t<e.length;t++){var n=e[t];n.observer.unobserve(n.instance)}}))}function Bf(e,t){if(e.tag===6){e=e.stateNode;var n=e.ownerDocument.createRange();n.selectNodeContents(e),t.push.apply(t,n.getClientRects())}else e=fe(e),t.push.apply(t,e.getClientRects());return!1}function Vf(e,t,n,r,i){var a=ct(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!a)a:{for(;a!==null;){if(a.tag===7&&(a===t||a.alternate===t)){n=!0;break a}a=a.return}n=!1}return n}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(a===null)return a=i.ownerDocument,i===a||i===a.documentElement||i===a.body;a:{for(a=t,t=ce(t);a!==null;){if(!(a.tag!==5&&a.tag!==3&&a.tag!==27||a!==t&&a.alternate!==t)){a=!0;break a}a=a.return}a=!1}return a}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!a)&&!(t=a===n)&&(t=he(n,a,me),t===null?t=!1:(se(t,!0,pe,a,n),a=bm,bm=null,t=a!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!a)&&!(t=a===r)&&(t=he(r,a,me),t===null?t=!1:(se(t,!0,x,a,r),a=bm,xm=bm=null,t=a!==null)),t):!1}function Hf(e,t){var n=e.ownerDocument.createRange();n.selectNodeContents(e),e=n.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}function Uf(e,t){return e=fe(e),Wf(e,t),!1}function Wf(e,t){e.reactFragments??=new Set,e.reactFragments.add(t)}function Gf(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.addEventListener(i.type,i.attachedListener,jf(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){for(var r=0,i=0;i<NT.length;i++){var a=NT[i];(a.fragmentInstance!==t||a.observer!==n||a.instance!==e)&&(NT[r++]=a)}NT.length=r,n.observe(e)}),Wf(e,t))}function Kf(e,t){var n=t._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];e.removeEventListener(i.type,i.attachedListener,jf(i.optionsOrUseCapture))}e.nodeType!==3&&(n=t._observers,n!==null&&n.forEach(function(n){typeof n.rootMargin==`string`?zf(t,n,e):n.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function qf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:qf(n),k(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function Jf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){He(i.name,`name`);var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[Jh])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=ep(e.nextSibling),e===null)break}return null}function Yf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=ep(e.nextSibling),e===null))return null;return e}function Xf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=ep(e.nextSibling),e===null))return null;return e}function Zf(e){return e.data===sT||e.data===cT}function Qf(e){return e.data===lT||e.data===sT&&e.ownerDocument.readyState!==hT}function $f(e,t){var n=e.ownerDocument;if(e.data===cT)e._reactRetry=t;else if(e.data!==sT||n.readyState!==hT)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function ep(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===aT||t===lT||t===sT||t===cT||t===rT||t===pT||t===mT)break;if(t===oT||t===iT)return null}}return e}function tp(e){if(e.nodeType===1){for(var t=e.nodeName.toLowerCase(),n={},r=e.attributes,i=0;i<r.length;i++){var a=r[i];n[Ad(a.name)]=a.name.toLowerCase()===`style`?jd(e):a.value}return{type:t,props:n}}return e.nodeType===8?e.data===rT?{type:`Activity`,props:{}}:{type:`Suspense`,props:{}}:e.nodeValue}function np(e,t,n){return n===null||!0!==n[nT]?(e.nodeValue===t?e=null:(t=wd(t),e=wd(e.nodeValue)===t?null:e.nodeValue),e):null}function rp(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===oT||n===iT){if(t===0)return ep(e.nextSibling);t--}else n!==aT&&n!==lT&&n!==sT&&n!==cT&&n!==rT||t++}e=e.nextSibling}return null}function ip(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===aT||n===lT||n===sT||n===cT||n===rT){if(t===0)return e;t--}else n!==oT&&n!==iT||t++}e=e.previousSibling}return null}function ap(e){fm(e)}function op(e){fm(e)}function sp(e){fm(e)}function cp(e,t){function n(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener(`focus`,n,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener(`focus`,n,!0)}return r}function lp(e){AT(function(){AT(function(t){return e(t)})})}function up(e,t,n,r,i){switch(i&&Xt(e,r.ancestorInfo),t=Hd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(`React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page.`);return e;case`head`:if(e=t.head,!e)throw Error(`React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page.`);return e;case`body`:if(e=t.body,!e)throw Error(`React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page.`);return e;default:throw Error(`resolveSingletonInstance was called with an element type that is not supported. This is a bug in React.`)}}function dp(e,t,n,r){if(!n[Uh]&&lt(n)){var i=n.tagName.toLowerCase();console.error(`You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.`,i,i,i)}switch(e){case`html`:case`head`:case`body`:break;default:console.error(`acquireSingletonInstance was called with an element type that is not supported. This is a bug in React.`)}for(i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Od(n,e,t),n[Vh]=r,n[Hh]=t}function fp(e,t,n){for(var r in n){var i=n[r];n.hasOwnProperty(r)&&i!=null&&Ed(e,t,r,null,eT,i)}n.dangerouslySetInnerHTML!=null&&(e.textContent=``),e.onclick===un&&(e.onclick=null),k(e)}function pp(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);k(e)}function mp(e){if(typeof e.getRootNode==`function`){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}function hp(e,t,n){var r=WT;if(r&&typeof t==`string`&&t){var i=I(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),HT.has(i)||(HT.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Od(t,`link`,e),A(t),r.head.appendChild(t)))}}function gp(e,t,n,r){var i=(i=Xm.current)?mp(i):null;if(!i)throw Error(`"resourceRoot" was expected to exist. This is a bug in React.`);switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(n=vp(n.href),t=dt(i).hoistableStyles,r=t.get(n),r||(r={type:`style`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=vp(n.href);var a=dt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:IT,preload:null}},a.set(e,o),(a=i.querySelector(yp(e)))?a._p||(o.instance=a,o.state.loading=LT|BT):(a=VT.get(e),a||(a={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},VT.set(e,a)),xp(i,e,a,o.state))),t&&r===null)throw n=`

  - `+_p(t)+`
  + `+_p(n),Error("Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return o}if(t&&r!==null)throw n=`

  - `+_p(t)+`
  + `+_p(n),Error("Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key."+n);return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(n=Sp(n),t=dt(i).hoistableScripts,r=t.get(n),r||(r={type:`script`,instance:null,count:0,state:null},t.set(n,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(`getResource encountered a type it did not expect: "`+e+`". this is a bug in React.`)}}function _p(e){var t=0,n=`<link`;return typeof e.rel==`string`?(t++,n+=` rel="`+e.rel+`"`):fh.call(e,`rel`)&&(t++,n+=` rel="`+(e.rel===null?`null`:`invalid type `+typeof e.rel)+`"`),typeof e.href==`string`?(t++,n+=` href="`+e.href+`"`):fh.call(e,`href`)&&(t++,n+=` href="`+(e.href===null?`null`:`invalid type `+typeof e.href)+`"`),typeof e.precedence==`string`?(t++,n+=` precedence="`+e.precedence+`"`):fh.call(e,`precedence`)&&(t++,n+=` precedence={`+(e.precedence===null?`null`:`invalid type `+typeof e.precedence)+`}`),Object.getOwnPropertyNames(e).length>t&&(n+=` ...`),n+` />`}function vp(e){return`href="`+I(e)+`"`}function yp(e){return`link[rel="stylesheet"][`+e+`]`}function bp(e){return U({},e,{"data-precedence":e.precedence,precedence:null})}function xp(e,t,n,r){if(t=e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)){if(!0!==t[Yh]){r.loading=LT;return}}else t=e.createElement(`link`),t[Yh]=!0,t.onload=t.onerror=ft.bind(null,t),Od(t,`link`,n),A(t),e.head.appendChild(t);r.preload=t,t.addEventListener(`load`,function(){return r.loading|=LT}),t.addEventListener(`error`,function(){return r.loading|=RT})}function Sp(e){return`[src="`+I(e)+`"]`}function Cp(e){return`script[async]`+e}function wp(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+I(n.href)+`"]`);if(r)return t.instance=r,A(r),r;var i=U({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),A(r),Od(r,`style`,i),Tp(r,n.precedence,e),t.instance=r;case`stylesheet`:i=vp(n.href);var a=e.querySelector(yp(i));if(a)return t.state.loading|=BT,t.instance=a,A(a),a;r=bp(n),(i=VT.get(i))&&Ep(r,i),a=(e.ownerDocument||e).createElement(`link`),A(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Od(a,`link`,r),t.state.loading|=BT,Tp(a,n.precedence,e),t.instance=a;case`script`:return a=Sp(n.src),(i=e.querySelector(Cp(a)))?(t.instance=i,A(i),i):(r=n,(i=VT.get(a))&&(r=U({},n),Dp(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),A(i),Od(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(`acquireResource encountered a resource type it did not expect: "`+t.type+`". this is a bug in React.`)}else t.type===`stylesheet`&&(t.state.loading&BT)===IT&&(r=t.instance,t.state.loading|=BT,Tp(r,n.precedence,e));return t.instance}function Tp(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Ep(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function Dp(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}function Op(e,t,n){if(GT===null){var r=new Map,i=GT=new Map;i.set(n,r)}else i=GT,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Jh]||a[Vh]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==Ng){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function kp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Ap(e,t,n){var r=!n.ancestorInfo.containerTagInScope;if(n.context===vT||t.itemProp!=null)return!r||t.itemProp==null||e!==`meta`&&e!==`title`&&e!==`style`&&e!==`link`&&e!==`script`||console.error("Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",e,e),!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``){r&&console.error('Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.');break}return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError){if(t.rel===`stylesheet`&&typeof t.precedence==`string`){e=t.href;var i=t.onError,a=t.disabled;n=[],t.onLoad&&n.push("`onLoad`"),i&&n.push("`onError`"),a!=null&&n.push("`disabled`"),i=zd(n,`and`),i+=n.length===1?` prop`:` props`,a=n.length===1?`an `+i:`the `+i,n.length&&console.error('React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',e,a,i)}r&&(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``?console.error("Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"):(t.onError||t.onLoad)&&console.error(`Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.`));break}switch(t.rel){case`stylesheet`:return e=t.precedence,t=t.disabled,typeof e!=`string`&&r&&console.error(`Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.`),typeof e==`string`&&t==null;default:return!0}case`script`:if(e=t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`,!e||t.onLoad||t.onError||!t.src||typeof t.src!=`string`){r&&(e?t.onLoad||t.onError?console.error(`Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>.`):console.error("Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."):console.error(`Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.`));break}return!0;case`noscript`:case`template`:r&&console.error(`Cannot render <%s> outside the main document. Try moving it into the root <head> tag.`,e)}return!1}function jp(e,t){return e===`img`&&t.src!=null&&t.src!==``&&t.onLoad==null&&t.loading!==`lazy`}function Mp(e){return e.type!==`stylesheet`||(e.state.loading&zT)!==IT}function Np(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio==`number`?devicePixelRatio:1)*.25}function Pp(e,t){typeof t.decode==`function`&&(e.imgCount++,t.complete||(e.imgBytes+=Np(t),e.suspenseyImages.push(t)),e=zp.bind(e),t.decode().then(e,e))}function Fp(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&(n.state.loading&BT)===IT){if(n.instance===null){var i=vp(r.href),a=t.querySelector(yp(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Rp.bind(e),t.then(e,e)),n.state.loading|=BT,n.instance=a,A(a);return}a=t.ownerDocument||t,r=bp(r),(i=VT.get(i))&&Ep(r,i),a=a.createElement(`link`),A(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Od(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&zT)===IT&&(e.count++,n=Rp.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}function Ip(e,t){return e.stylesheets&&e.count===0&&Bp(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Bp(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},KT+t);0<e.imgBytes&&YT===0&&(YT=125*Vd()*JT);var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Bp(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>YT?50:qT)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Lp(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Bp(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Rp(){this.count--,Lp(this)}function zp(){this.imgCount--,Lp(this)}function Bp(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ZT=new Map,t.forEach(Vp,e),ZT=null,Rp.call(e))}function Vp(e,t){if(!(t.state.loading&BT)){var n=ZT.get(e);if(n)var r=n.get(XT);else{n=new Map,ZT.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(XT,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(XT,i),n.set(o,i),this.count++,r=Rp.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=BT}}function Hp(e,t,n,r,i,a,o,s,c){for(this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=OT,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=et(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=et(0),this.hiddenUpdates=et(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.transitionTypes=null,this.incompleteTransitions=new Map,this.passiveEffectDuration=this.effectDuration=-0,this.memoizedUpdaters=new Set,e=this.pendingUpdatersLaneMap=[],t=0;31>t;t++)e.push(new Set);this._debugRootType=n?`hydrateRoot()`:`createRoot()`}function Up(e,t,n,r,i,a,o,s,c,l,u,d){return e=new Hp(e,t,n,o,c,l,u,d,s),t=zv,!0===a&&(t|=Bv|Vv),t|=K,a=g(3,null,null,t),e.current=a,a.stateNode=e,t=pi(),mi(t),e.pooledCache=t,mi(t),a.memoizedState={element:r,isDehydrated:n,cache:t},la(a),e}function Wp(e){return e?(e=Iv,e):Iv}function Gp(e,t,n,r,i,a){if(Dh&&typeof Dh.onScheduleFiberRoot==`function`)try{Dh.onScheduleFiberRoot(Eh,r,n)}catch(e){Oh||(Oh=!0,console.error(`React instrumentation encountered an error: %o`,e))}i=Wp(i),r.context===null?r.context=i:r.pendingContext=i,dh&&uh!==null&&!aE&&(aE=!0,console.error(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,S(uh)||`Unknown`)),r=da(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(typeof a!=`function`&&console.error("Expected the last optional `callback` argument to be a function. Instead received: %s.",a),r.callback=a),n=fa(e,r,t),n!==null&&(vi(t,`root.render()`,null),Xl(n,e,t),pa(n,e,t))}function Kp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qp(e,t){Kp(e,t),(e=e.alternate)&&Kp(e,t)}function Jp(e){if(e.tag===13||e.tag===31){var t=br(e,67108864);t!==null&&Xl(t,e,67108864),qp(e,67108864)}}function Yp(e){if(e.tag===13||e.tag===31){var t=ql(e);t=E(t);var n=br(e,t);n!==null&&Xl(n,e,t),qp(e,t)}}function Xp(){return uh}function Zp(e,t,n,r){var i=W.T;W.T=null;var a=Um.p;try{Um.p=Ih,$p(e,t,n,r)}finally{Um.p=a,W.T=i}}function Qp(e,t,n,r){var i=W.T;W.T=null;var a=Um.p;try{Um.p=Lh,$p(e,t,n,r)}finally{Um.p=a,W.T=i}}function $p(e,t,n,r){if(gE){var i=em(r);if(i===null)fd(e,t,r,_E,n),rm(e,r);else if(am(i,e,t,n,r))r.stopPropagation();else if(rm(e,r),t&4&&-1<TE.indexOf(e)){for(;i!==null;){var a=lt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Je(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ah(o);s.entanglements[1]|=c,o&=~c}Ju(a),(fC&(rC|iC))===nC&&(HC=_h()+UC,Yu(0,!1))}}break;case 31:case 13:s=br(a,2),s!==null&&Xl(s,a,2),tu(),qp(a,2)}if(a=em(r),a===null&&fd(e,t,r,_E,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else fd(e,t,r,null,n)}}function em(e){return e=dn(e),tm(e)}function tm(e){if(_E=null,e=ct(e),e!==null){var t=b(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=te(t),e!==null)return e;e=null}else if(n===31){if(e=ne(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _E=e,null}function nm(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`fullscreenerror`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return Ih;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`resize`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return Lh;case`message`:switch(vh()){case yh:return Ih;case bh:return Lh;case xh:case Sh:return Rh;case Ch:return zh;default:return Rh}default:return Rh}}function rm(e,t){switch(e){case`focusin`:case`focusout`:yE=null;break;case`dragenter`:case`dragleave`:bE=null;break;case`mouseover`:case`mouseout`:xE=null;break;case`pointerover`:case`pointerout`:SE.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:CE.delete(t.pointerId)}}function im(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=lt(t),t!==null&&Jp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function am(e,t,n,r,i){switch(t){case`focusin`:return yE=im(yE,e,t,n,r,i),!0;case`dragenter`:return bE=im(bE,e,t,n,r,i),!0;case`mouseover`:return xE=im(xE,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return SE.set(a,im(SE.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,CE.set(a,im(CE.get(a)||null,e,t,n,r,i)),!0}return!1}function om(e){var t=ct(e.target);if(t!==null){var n=b(t);if(n!==null){if(t=n.tag,t===13){if(t=te(n),t!==null){e.blockedOn=t,st(e.priority,function(){Yp(n)});return}}else if(t===31){if(t=ne(n),t!==null){e.blockedOn=t,st(e.priority,function(){Yp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sm(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=em(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n),i=r;qg!==null&&console.error(`Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue.`),qg=i,n.target.dispatchEvent(r),qg===null&&console.error(`Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue.`),qg=null}else return t=lt(n),t!==null&&Jp(t),e.blockedOn=n,!1;t.shift()}return!0}function cm(e,t,n){sm(e)&&n.delete(t)}function lm(){vE=!1,yE!==null&&sm(yE)&&(yE=null),bE!==null&&sm(bE)&&(bE=null),xE!==null&&sm(xE)&&(xE=null),SE.forEach(cm),CE.forEach(cm)}function um(e,t){e.blockedOn===t&&(e.blockedOn=null,vE||(vE=!0,_m.unstable_scheduleCallback(_m.unstable_NormalPriority,lm)))}function dm(e){EE!==e&&(EE=e,_m.unstable_scheduleCallback(_m.unstable_NormalPriority,function(){EE===e&&(EE=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(tm(r||n)===null)continue;break}var a=lt(n);a!==null&&(e.splice(t,3),t-=3,n={pending:!0,data:i,method:n.method,action:r},Object.freeze(n),Jo(a,n,r,i))}}))}function fm(e){function t(t){return um(t,e)}yE!==null&&um(yE,e),bE!==null&&um(bE,e),xE!==null&&um(xE,e),SE.forEach(t),CE.forEach(t);for(var n=0;n<wE.length;n++){var r=wE[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<wE.length&&(n=wE[0],n.blockedOn===null);)om(n),n.blockedOn===null&&wE.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Hh]||null;if(typeof a==`function`)o||dm(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[Hh]||null)s=o.formAction;else if(tm(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),dm(n)}}}function pm(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function mm(e){this._internalRoot=e}function hm(e){this._internalRoot=e}function gm(e){e[Uh]&&(e._reactRootContainer?console.error(`You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.`):console.error(`You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.`))}typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());var _m=u(),vm=f(),ym=m(),bm=null,xm=null,U=Object.assign,Sm=Symbol.for(`react.element`),Cm=Symbol.for(`react.transitional.element`),wm=Symbol.for(`react.portal`),Tm=Symbol.for(`react.fragment`),Em=Symbol.for(`react.strict_mode`),Dm=Symbol.for(`react.profiler`),Om=Symbol.for(`react.consumer`),km=Symbol.for(`react.context`),Am=Symbol.for(`react.forward_ref`),jm=Symbol.for(`react.suspense`),Mm=Symbol.for(`react.suspense_list`),Nm=Symbol.for(`react.memo`),Pm=Symbol.for(`react.lazy`),Fm=Symbol.for(`react.activity`),Im=Symbol.for(`react.legacy_hidden`),Lm=Symbol.for(`react.memo_cache_sentinel`),Rm=Symbol.for(`react.view_transition`),zm=Symbol.for(`react.recoverable`),Bm=Symbol.iterator,Vm=Symbol.for(`react.client.reference`),Hm=Array.isArray,W=vm.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Um=ym.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Wm=Object.freeze({pending:!1,data:null,method:null,action:null}),Gm=[],Km=[],qm=-1,Jm=ye(null),Ym=ye(null),Xm=ye(null),Zm=ye(null),Qm=0,$m,eh,th,nh,rh,ih,ah;Oe.__reactDisabledLog=!0;var oh,sh,ch=!1,lh=new(typeof WeakMap==`function`?WeakMap:Map),uh=null,dh=!1,fh=Object.prototype.hasOwnProperty,ph=_m.unstable_scheduleCallback,mh=_m.unstable_cancelCallback,hh=_m.unstable_shouldYield,gh=_m.unstable_requestPaint,_h=_m.unstable_now,vh=_m.unstable_getCurrentPriorityLevel,yh=_m.unstable_ImmediatePriority,bh=_m.unstable_UserBlockingPriority,xh=_m.unstable_NormalPriority,Sh=_m.unstable_LowPriority,Ch=_m.unstable_IdlePriority,wh=_m.log,Th=_m.unstable_setDisableYieldValue,Eh=null,Dh=null,Oh=!1,kh=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`,Ah=Math.clz32?Math.clz32:qe,jh=Math.log,Mh=Math.LN2,Nh=256,Ph=262144,Fh=4194304,Ih=2,Lh=8,Rh=32,zh=268435456,Bh=Math.random().toString(36).slice(2),Vh=`__reactFiber$`+Bh,Hh=`__reactProps$`+Bh,Uh=`__reactContainer$`+Bh,Wh=`__reactEvents$`+Bh,Gh=`__reactListeners$`+Bh,Kh=`__reactHandles$`+Bh,qh=`__reactResources$`+Bh,Jh=`__reactMarker$`+Bh,Yh=`__reactLoad$`+Bh,Xh=new Set,Zh={},Qh={},$h={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},eg=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),tg={},ng={},rg=!1,ig=/[\n"\\]/g,ag=!1,og=!1,sg=!1,cg=!1,lg=!1,ug=!1,dg=[`value`,`defaultValue`],fg=!1,pg=/["'&<>\n\t]|^\s|\s$/,mg=`address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp`.split(` `),hg=`applet caption html table td th marquee object select template foreignObject desc title`.split(` `),gg=hg.concat([`button`]),_g=`dd dt li option optgroup p rp rt`.split(` `),vg={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null,containerTagInScope:null,implicitRootScope:!1},yg={},bg={animation:`animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction`.split(` `),background:`backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize`.split(` `),backgroundPosition:[`backgroundPositionX`,`backgroundPositionY`],border:`borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth`.split(` `),borderBlock:`borderBlockEndColor borderBlockEndStyle borderBlockEndWidth borderBlockStartColor borderBlockStartStyle borderBlockStartWidth`.split(` `),borderBlockColor:[`borderBlockEndColor`,`borderBlockStartColor`],borderBlockEnd:[`borderBlockEndColor`,`borderBlockEndStyle`,`borderBlockEndWidth`],borderBlockStart:[`borderBlockStartColor`,`borderBlockStartStyle`,`borderBlockStartWidth`],borderBlockStyle:[`borderBlockEndStyle`,`borderBlockStartStyle`],borderBlockWidth:[`borderBlockEndWidth`,`borderBlockStartWidth`],borderBottom:[`borderBottomColor`,`borderBottomStyle`,`borderBottomWidth`],borderColor:[`borderBottomColor`,`borderLeftColor`,`borderRightColor`,`borderTopColor`],borderImage:[`borderImageOutset`,`borderImageRepeat`,`borderImageSlice`,`borderImageSource`,`borderImageWidth`],borderInline:`borderInlineEndColor borderInlineEndStyle borderInlineEndWidth borderInlineStartColor borderInlineStartStyle borderInlineStartWidth`.split(` `),borderInlineColor:[`borderInlineEndColor`,`borderInlineStartColor`],borderInlineEnd:[`borderInlineEndColor`,`borderInlineEndStyle`,`borderInlineEndWidth`],borderInlineStart:[`borderInlineStartColor`,`borderInlineStartStyle`,`borderInlineStartWidth`],borderInlineStyle:[`borderInlineEndStyle`,`borderInlineStartStyle`],borderInlineWidth:[`borderInlineEndWidth`,`borderInlineStartWidth`],borderLeft:[`borderLeftColor`,`borderLeftStyle`,`borderLeftWidth`],borderRadius:[`borderBottomLeftRadius`,`borderBottomRightRadius`,`borderTopLeftRadius`,`borderTopRightRadius`],borderRight:[`borderRightColor`,`borderRightStyle`,`borderRightWidth`],borderStyle:[`borderBottomStyle`,`borderLeftStyle`,`borderRightStyle`,`borderTopStyle`],borderTop:[`borderTopColor`,`borderTopStyle`,`borderTopWidth`],borderWidth:[`borderBottomWidth`,`borderLeftWidth`,`borderRightWidth`,`borderTopWidth`],colorAdjust:[`printColorAdjust`],columnRule:[`columnRuleColor`,`columnRuleStyle`,`columnRuleWidth`],columns:[`columnCount`,`columnWidth`],containIntrinsicSize:[`containIntrinsicHeight`,`containIntrinsicWidth`],container:[`containerName`,`containerType`],flex:[`flexBasis`,`flexGrow`,`flexShrink`],flexFlow:[`flexDirection`,`flexWrap`],font:`fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight`.split(` `),fontSynthesis:[`fontSynthesisPosition`,`fontSynthesisSmallCaps`,`fontSynthesisStyle`,`fontSynthesisWeight`],fontVariant:`fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition`.split(` `),gap:[`columnGap`,`rowGap`],grid:`gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows`.split(` `),gridArea:[`gridColumnEnd`,`gridColumnStart`,`gridRowEnd`,`gridRowStart`],gridColumn:[`gridColumnEnd`,`gridColumnStart`],gridColumnGap:[`columnGap`],gridGap:[`columnGap`,`rowGap`],gridRow:[`gridRowEnd`,`gridRowStart`],gridRowGap:[`rowGap`],gridTemplate:[`gridTemplateAreas`,`gridTemplateColumns`,`gridTemplateRows`],inset:[`bottom`,`left`,`right`,`top`],insetBlock:[`insetBlockEnd`,`insetBlockStart`],insetInline:[`insetInlineEnd`,`insetInlineStart`],listStyle:[`listStyleImage`,`listStylePosition`,`listStyleType`],margin:[`marginBottom`,`marginLeft`,`marginRight`,`marginTop`],marginBlock:[`marginBlockEnd`,`marginBlockStart`],marginInline:[`marginInlineEnd`,`marginInlineStart`],marker:[`markerEnd`,`markerMid`,`markerStart`],mask:`maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize`.split(` `),maskPosition:[`maskPositionX`,`maskPositionY`],offset:[`offsetAnchor`,`offsetDistance`,`offsetPath`,`offsetPosition`,`offsetRotate`],outline:[`outlineColor`,`outlineStyle`,`outlineWidth`],overflow:[`overflowX`,`overflowY`],overscrollBehavior:[`overscrollBehaviorX`,`overscrollBehaviorY`],padding:[`paddingBottom`,`paddingLeft`,`paddingRight`,`paddingTop`],paddingBlock:[`paddingBlockEnd`,`paddingBlockStart`],paddingInline:[`paddingInlineEnd`,`paddingInlineStart`],pageBreakAfter:[`breakAfter`],pageBreakBefore:[`breakBefore`],pageBreakInside:[`breakInside`],placeContent:[`alignContent`,`justifyContent`],placeItems:[`alignItems`,`justifyItems`],placeSelf:[`alignSelf`,`justifySelf`],scrollMargin:[`scrollMarginBottom`,`scrollMarginLeft`,`scrollMarginRight`,`scrollMarginTop`],scrollMarginBlock:[`scrollMarginBlockEnd`,`scrollMarginBlockStart`],scrollMarginInline:[`scrollMarginInlineEnd`,`scrollMarginInlineStart`],scrollPadding:[`scrollPaddingBottom`,`scrollPaddingLeft`,`scrollPaddingRight`,`scrollPaddingTop`],scrollPaddingBlock:[`scrollPaddingBlockEnd`,`scrollPaddingBlockStart`],scrollPaddingInline:[`scrollPaddingInlineEnd`,`scrollPaddingInlineStart`],textDecoration:[`textDecorationColor`,`textDecorationLine`,`textDecorationStyle`,`textDecorationThickness`],textEmphasis:[`textEmphasisColor`,`textEmphasisStyle`],textWrap:[`textWrapMode`,`textWrapStyle`],transition:[`transitionBehavior`,`transitionDelay`,`transitionDuration`,`transitionProperty`,`transitionTimingFunction`],verticalAlign:[`alignmentBaseline`,`baselineShift`,`baselineSource`],whiteSpace:[`textWrapMode`,`whiteSpaceCollapse`],wordWrap:[`overflowWrap`]},xg=/([A-Z])/g,Sg=/^ms-/,Cg=/^(?:webkit|moz|o)[A-Z]/,wg=/^-ms-/,Tg=/-(.)/g,Eg=/;\s*$/,Dg={},Og={},kg=!1,Ag=!1,jg=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `)),Mg=`http://www.w3.org/1998/Math/MathML`,Ng=`http://www.w3.org/2000/svg`,Pg=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`maskType`,`mask-type`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Fg={accept:`accept`,acceptcharset:`acceptCharset`,"accept-charset":`acceptCharset`,accesskey:`accessKey`,action:`action`,allowfullscreen:`allowFullScreen`,alt:`alt`,as:`as`,async:`async`,autocapitalize:`autoCapitalize`,autocomplete:`autoComplete`,autocorrect:`autoCorrect`,autofocus:`autoFocus`,autoplay:`autoPlay`,autosave:`autoSave`,capture:`capture`,cellpadding:`cellPadding`,cellspacing:`cellSpacing`,challenge:`challenge`,charset:`charSet`,checked:`checked`,children:`children`,cite:`cite`,class:`className`,classid:`classID`,classname:`className`,cols:`cols`,colspan:`colSpan`,content:`content`,contenteditable:`contentEditable`,contextmenu:`contextMenu`,controls:`controls`,controlslist:`controlsList`,coords:`coords`,credentialless:`credentialless`,crossorigin:`crossOrigin`,dangerouslysetinnerhtml:`dangerouslySetInnerHTML`,data:`data`,datetime:`dateTime`,default:`default`,defaultchecked:`defaultChecked`,defaultvalue:`defaultValue`,defer:`defer`,dir:`dir`,disabled:`disabled`,disablepictureinpicture:`disablePictureInPicture`,disableremoteplayback:`disableRemotePlayback`,download:`download`,draggable:`draggable`,enctype:`encType`,enterkeyhint:`enterKeyHint`,fetchpriority:`fetchPriority`,for:`htmlFor`,form:`form`,formmethod:`formMethod`,formaction:`formAction`,formenctype:`formEncType`,formnovalidate:`formNoValidate`,formtarget:`formTarget`,frameborder:`frameBorder`,headers:`headers`,height:`height`,hidden:`hidden`,high:`high`,href:`href`,hreflang:`hrefLang`,htmlfor:`htmlFor`,httpequiv:`httpEquiv`,"http-equiv":`httpEquiv`,icon:`icon`,id:`id`,imagesizes:`imageSizes`,imagesrcset:`imageSrcSet`,inert:`inert`,innerhtml:`innerHTML`,inputmode:`inputMode`,integrity:`integrity`,is:`is`,itemid:`itemID`,itemprop:`itemProp`,itemref:`itemRef`,itemscope:`itemScope`,itemtype:`itemType`,keyparams:`keyParams`,keytype:`keyType`,kind:`kind`,label:`label`,lang:`lang`,list:`list`,loop:`loop`,low:`low`,manifest:`manifest`,marginwidth:`marginWidth`,marginheight:`marginHeight`,max:`max`,maxlength:`maxLength`,media:`media`,mediagroup:`mediaGroup`,method:`method`,min:`min`,minlength:`minLength`,multiple:`multiple`,muted:`muted`,name:`name`,nomodule:`noModule`,nonce:`nonce`,novalidate:`noValidate`,open:`open`,optimum:`optimum`,pattern:`pattern`,placeholder:`placeholder`,playsinline:`playsInline`,poster:`poster`,preload:`preload`,profile:`profile`,radiogroup:`radioGroup`,readonly:`readOnly`,referrerpolicy:`referrerPolicy`,rel:`rel`,required:`required`,reversed:`reversed`,role:`role`,rows:`rows`,rowspan:`rowSpan`,sandbox:`sandbox`,scope:`scope`,scoped:`scoped`,scrolling:`scrolling`,seamless:`seamless`,selected:`selected`,shape:`shape`,size:`size`,sizes:`sizes`,span:`span`,spellcheck:`spellCheck`,src:`src`,srcdoc:`srcDoc`,srclang:`srcLang`,srcset:`srcSet`,start:`start`,step:`step`,style:`style`,summary:`summary`,tabindex:`tabIndex`,target:`target`,title:`title`,type:`type`,usemap:`useMap`,value:`value`,width:`width`,wmode:`wmode`,wrap:`wrap`,about:`about`,accentheight:`accentHeight`,"accent-height":`accentHeight`,accumulate:`accumulate`,additive:`additive`,alignmentbaseline:`alignmentBaseline`,"alignment-baseline":`alignmentBaseline`,allowreorder:`allowReorder`,alphabetic:`alphabetic`,amplitude:`amplitude`,arabicform:`arabicForm`,"arabic-form":`arabicForm`,ascent:`ascent`,attributename:`attributeName`,attributetype:`attributeType`,autoreverse:`autoReverse`,azimuth:`azimuth`,basefrequency:`baseFrequency`,baselineshift:`baselineShift`,"baseline-shift":`baselineShift`,baseprofile:`baseProfile`,bbox:`bbox`,begin:`begin`,bias:`bias`,by:`by`,calcmode:`calcMode`,capheight:`capHeight`,"cap-height":`capHeight`,clip:`clip`,clippath:`clipPath`,"clip-path":`clipPath`,clippathunits:`clipPathUnits`,cliprule:`clipRule`,"clip-rule":`clipRule`,color:`color`,colorinterpolation:`colorInterpolation`,"color-interpolation":`colorInterpolation`,colorinterpolationfilters:`colorInterpolationFilters`,"color-interpolation-filters":`colorInterpolationFilters`,colorprofile:`colorProfile`,"color-profile":`colorProfile`,colorrendering:`colorRendering`,"color-rendering":`colorRendering`,contentscripttype:`contentScriptType`,contentstyletype:`contentStyleType`,cursor:`cursor`,cx:`cx`,cy:`cy`,d:`d`,datatype:`datatype`,decelerate:`decelerate`,descent:`descent`,diffuseconstant:`diffuseConstant`,direction:`direction`,display:`display`,divisor:`divisor`,dominantbaseline:`dominantBaseline`,"dominant-baseline":`dominantBaseline`,dur:`dur`,dx:`dx`,dy:`dy`,edgemode:`edgeMode`,elevation:`elevation`,enablebackground:`enableBackground`,"enable-background":`enableBackground`,end:`end`,exponent:`exponent`,externalresourcesrequired:`externalResourcesRequired`,fill:`fill`,fillopacity:`fillOpacity`,"fill-opacity":`fillOpacity`,fillrule:`fillRule`,"fill-rule":`fillRule`,filter:`filter`,filterres:`filterRes`,filterunits:`filterUnits`,floodopacity:`floodOpacity`,"flood-opacity":`floodOpacity`,floodcolor:`floodColor`,"flood-color":`floodColor`,focusable:`focusable`,fontfamily:`fontFamily`,"font-family":`fontFamily`,fontsize:`fontSize`,"font-size":`fontSize`,fontsizeadjust:`fontSizeAdjust`,"font-size-adjust":`fontSizeAdjust`,fontstretch:`fontStretch`,"font-stretch":`fontStretch`,fontstyle:`fontStyle`,"font-style":`fontStyle`,fontvariant:`fontVariant`,"font-variant":`fontVariant`,fontweight:`fontWeight`,"font-weight":`fontWeight`,format:`format`,from:`from`,fx:`fx`,fy:`fy`,g1:`g1`,g2:`g2`,glyphname:`glyphName`,"glyph-name":`glyphName`,glyphorientationhorizontal:`glyphOrientationHorizontal`,"glyph-orientation-horizontal":`glyphOrientationHorizontal`,glyphorientationvertical:`glyphOrientationVertical`,"glyph-orientation-vertical":`glyphOrientationVertical`,glyphref:`glyphRef`,gradienttransform:`gradientTransform`,gradientunits:`gradientUnits`,hanging:`hanging`,horizadvx:`horizAdvX`,"horiz-adv-x":`horizAdvX`,horizoriginx:`horizOriginX`,"horiz-origin-x":`horizOriginX`,ideographic:`ideographic`,imagerendering:`imageRendering`,"image-rendering":`imageRendering`,in2:`in2`,in:`in`,inlist:`inlist`,intercept:`intercept`,k1:`k1`,k2:`k2`,k3:`k3`,k4:`k4`,k:`k`,kernelmatrix:`kernelMatrix`,kernelunitlength:`kernelUnitLength`,kerning:`kerning`,keypoints:`keyPoints`,keysplines:`keySplines`,keytimes:`keyTimes`,lengthadjust:`lengthAdjust`,letterspacing:`letterSpacing`,"letter-spacing":`letterSpacing`,lightingcolor:`lightingColor`,"lighting-color":`lightingColor`,limitingconeangle:`limitingConeAngle`,local:`local`,markerend:`markerEnd`,"marker-end":`markerEnd`,markerheight:`markerHeight`,markermid:`markerMid`,"marker-mid":`markerMid`,markerstart:`markerStart`,"marker-start":`markerStart`,markerunits:`markerUnits`,markerwidth:`markerWidth`,mask:`mask`,maskcontentunits:`maskContentUnits`,masktype:`maskType`,maskunits:`maskUnits`,mathematical:`mathematical`,mode:`mode`,numoctaves:`numOctaves`,offset:`offset`,opacity:`opacity`,operator:`operator`,order:`order`,orient:`orient`,orientation:`orientation`,origin:`origin`,overflow:`overflow`,overlineposition:`overlinePosition`,"overline-position":`overlinePosition`,overlinethickness:`overlineThickness`,"overline-thickness":`overlineThickness`,paintorder:`paintOrder`,"paint-order":`paintOrder`,panose1:`panose1`,"panose-1":`panose1`,pathlength:`pathLength`,patterncontentunits:`patternContentUnits`,patterntransform:`patternTransform`,patternunits:`patternUnits`,pointerevents:`pointerEvents`,"pointer-events":`pointerEvents`,points:`points`,pointsatx:`pointsAtX`,pointsaty:`pointsAtY`,pointsatz:`pointsAtZ`,popover:`popover`,popovertarget:`popoverTarget`,popovertargetaction:`popoverTargetAction`,prefix:`prefix`,preservealpha:`preserveAlpha`,preserveaspectratio:`preserveAspectRatio`,primitiveunits:`primitiveUnits`,property:`property`,r:`r`,radius:`radius`,refx:`refX`,refy:`refY`,renderingintent:`renderingIntent`,"rendering-intent":`renderingIntent`,repeatcount:`repeatCount`,repeatdur:`repeatDur`,requiredextensions:`requiredExtensions`,requiredfeatures:`requiredFeatures`,resource:`resource`,restart:`restart`,result:`result`,results:`results`,rotate:`rotate`,rx:`rx`,ry:`ry`,scale:`scale`,security:`security`,seed:`seed`,shaperendering:`shapeRendering`,"shape-rendering":`shapeRendering`,slope:`slope`,spacing:`spacing`,specularconstant:`specularConstant`,specularexponent:`specularExponent`,speed:`speed`,spreadmethod:`spreadMethod`,startoffset:`startOffset`,stddeviation:`stdDeviation`,stemh:`stemh`,stemv:`stemv`,stitchtiles:`stitchTiles`,stopcolor:`stopColor`,"stop-color":`stopColor`,stopopacity:`stopOpacity`,"stop-opacity":`stopOpacity`,strikethroughposition:`strikethroughPosition`,"strikethrough-position":`strikethroughPosition`,strikethroughthickness:`strikethroughThickness`,"strikethrough-thickness":`strikethroughThickness`,string:`string`,stroke:`stroke`,strokedasharray:`strokeDasharray`,"stroke-dasharray":`strokeDasharray`,strokedashoffset:`strokeDashoffset`,"stroke-dashoffset":`strokeDashoffset`,strokelinecap:`strokeLinecap`,"stroke-linecap":`strokeLinecap`,strokelinejoin:`strokeLinejoin`,"stroke-linejoin":`strokeLinejoin`,strokemiterlimit:`strokeMiterlimit`,"stroke-miterlimit":`strokeMiterlimit`,strokewidth:`strokeWidth`,"stroke-width":`strokeWidth`,strokeopacity:`strokeOpacity`,"stroke-opacity":`strokeOpacity`,suppresscontenteditablewarning:`suppressContentEditableWarning`,suppresshydrationwarning:`suppressHydrationWarning`,surfacescale:`surfaceScale`,systemlanguage:`systemLanguage`,tablevalues:`tableValues`,targetx:`targetX`,targety:`targetY`,textanchor:`textAnchor`,"text-anchor":`textAnchor`,textdecoration:`textDecoration`,"text-decoration":`textDecoration`,textlength:`textLength`,textrendering:`textRendering`,"text-rendering":`textRendering`,to:`to`,transform:`transform`,transformorigin:`transformOrigin`,"transform-origin":`transformOrigin`,typeof:`typeof`,u1:`u1`,u2:`u2`,underlineposition:`underlinePosition`,"underline-position":`underlinePosition`,underlinethickness:`underlineThickness`,"underline-thickness":`underlineThickness`,unicode:`unicode`,unicodebidi:`unicodeBidi`,"unicode-bidi":`unicodeBidi`,unicoderange:`unicodeRange`,"unicode-range":`unicodeRange`,unitsperem:`unitsPerEm`,"units-per-em":`unitsPerEm`,unselectable:`unselectable`,valphabetic:`vAlphabetic`,"v-alphabetic":`vAlphabetic`,values:`values`,vectoreffect:`vectorEffect`,"vector-effect":`vectorEffect`,version:`version`,vertadvy:`vertAdvY`,"vert-adv-y":`vertAdvY`,vertoriginx:`vertOriginX`,"vert-origin-x":`vertOriginX`,vertoriginy:`vertOriginY`,"vert-origin-y":`vertOriginY`,vhanging:`vHanging`,"v-hanging":`vHanging`,videographic:`vIdeographic`,"v-ideographic":`vIdeographic`,viewbox:`viewBox`,viewtarget:`viewTarget`,visibility:`visibility`,vmathematical:`vMathematical`,"v-mathematical":`vMathematical`,vocab:`vocab`,widths:`widths`,wordspacing:`wordSpacing`,"word-spacing":`wordSpacing`,writingmode:`writingMode`,"writing-mode":`writingMode`,x1:`x1`,x2:`x2`,x:`x`,xchannelselector:`xChannelSelector`,xheight:`xHeight`,"x-height":`xHeight`,xlinkactuate:`xlinkActuate`,"xlink:actuate":`xlinkActuate`,xlinkarcrole:`xlinkArcrole`,"xlink:arcrole":`xlinkArcrole`,xlinkhref:`xlinkHref`,"xlink:href":`xlinkHref`,xlinkrole:`xlinkRole`,"xlink:role":`xlinkRole`,xlinkshow:`xlinkShow`,"xlink:show":`xlinkShow`,xlinktitle:`xlinkTitle`,"xlink:title":`xlinkTitle`,xlinktype:`xlinkType`,"xlink:type":`xlinkType`,xmlbase:`xmlBase`,"xml:base":`xmlBase`,xmllang:`xmlLang`,"xml:lang":`xmlLang`,xmlns:`xmlns`,"xml:space":`xmlSpace`,xmlnsxlink:`xmlnsXlink`,"xmlns:xlink":`xmlnsXlink`,xmlspace:`xmlSpace`,y1:`y1`,y2:`y2`,y:`y`,ychannelselector:`yChannelSelector`,z:`z`,zoomandpan:`zoomAndPan`},Ig={"aria-current":0,"aria-description":0,"aria-details":0,"aria-disabled":0,"aria-hidden":0,"aria-invalid":0,"aria-keyshortcuts":0,"aria-label":0,"aria-roledescription":0,"aria-autocomplete":0,"aria-checked":0,"aria-expanded":0,"aria-haspopup":0,"aria-level":0,"aria-modal":0,"aria-multiline":0,"aria-multiselectable":0,"aria-orientation":0,"aria-placeholder":0,"aria-pressed":0,"aria-readonly":0,"aria-required":0,"aria-selected":0,"aria-sort":0,"aria-valuemax":0,"aria-valuemin":0,"aria-valuenow":0,"aria-valuetext":0,"aria-atomic":0,"aria-busy":0,"aria-live":0,"aria-relevant":0,"aria-dropeffect":0,"aria-grabbed":0,"aria-activedescendant":0,"aria-colcount":0,"aria-colindex":0,"aria-colspan":0,"aria-controls":0,"aria-describedby":0,"aria-errormessage":0,"aria-flowto":0,"aria-labelledby":0,"aria-owns":0,"aria-posinset":0,"aria-rowcount":0,"aria-rowindex":0,"aria-rowspan":0,"aria-setsize":0,"aria-braillelabel":0,"aria-brailleroledescription":0,"aria-colindextext":0,"aria-rowindextext":0},Lg={},Rg=RegExp(`^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),zg=RegExp(`^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Bg=!1,Vg={},Hg=/^on./,Ug=/^on[^A-Z]/,Wg=RegExp(`^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Gg=RegExp(`^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Kg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i,qg=null,Jg=null,Yg=null,Xg=!1,Zg=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Qg=!1;if(Zg)try{var $g={};Object.defineProperty($g,"passive",{get:function(){Qg=!0}}),window.addEventListener(`test`,$g,$g),window.removeEventListener(`test`,$g,$g)}catch{Qg=!1}var e_=null,t_=null,n_=null,r_={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},i_=yn(r_),a_=U({},r_,{view:0,detail:0}),o_=yn(a_),s_,c_,l_,u_=U({},a_,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==l_&&(l_&&e.type===`mousemove`?(s_=e.screenX-l_.screenX,c_=e.screenY-l_.screenY):c_=s_=0,l_=e),s_)},movementY:function(e){return`movementY`in e?e.movementY:c_}}),d_=yn(u_),f_=yn(U({},u_,{dataTransfer:0})),p_=yn(U({},a_,{relatedTarget:0})),m_=yn(U({},r_,{animationName:0,elapsedTime:0,pseudoElement:0})),h_=yn(U({},r_,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),g_=yn(U({},r_,{data:0})),__=g_,v_={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},y_={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},b_={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`},x_=yn(U({},a_,{key:function(e){if(e.key){var t=v_[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=gn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?y_[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xn,charCode:function(e){return e.type===`keypress`?gn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?gn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),S_=yn(U({},u_,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),C_=yn(U({},r_,{submitter:0})),w_=yn(U({},a_,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xn})),T_=yn(U({},r_,{propertyName:0,elapsedTime:0,pseudoElement:0})),E_=yn(U({},u_,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),D_=yn(U({},r_,{newState:0,oldState:0,source:0})),O_=[9,13,27,32],k_=229,A_=Zg&&`CompositionEvent`in window,j_=null;Zg&&`documentMode`in document&&(j_=document.documentMode);var M_=Zg&&`TextEvent`in window&&!j_,N_=Zg&&(!A_||j_&&8<j_&&11>=j_),P_=32,F_=String.fromCharCode(P_),I_=!1,L_=!1,R_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},z_=null,B_=null,V_=!1;Zg&&(V_=Dn(`input`)&&(!document.documentMode||9<document.documentMode));var H_=typeof Object.is==`function`?Object.is:Rn,U_=Zg&&`documentMode`in document&&11>=document.documentMode,W_=null,G_=null,K_=null,q_=!1,J_={animationend:qn(`Animation`,`AnimationEnd`),animationiteration:qn(`Animation`,`AnimationIteration`),animationstart:qn(`Animation`,`AnimationStart`),transitionrun:qn(`Transition`,`TransitionRun`),transitionstart:qn(`Transition`,`TransitionStart`),transitioncancel:qn(`Transition`,`TransitionCancel`),transitionend:qn(`Transition`,`TransitionEnd`)},Y_={},X_={};Zg&&(X_=document.createElement(`div`).style,`AnimationEvent`in window||(delete J_.animationend.animation,delete J_.animationiteration.animation,delete J_.animationstart.animation),`TransitionEvent`in window||delete J_.transitionend.transition);var Z_=Jn(`animationend`),Q_=Jn(`animationiteration`),$_=Jn(`animationstart`),ev=Jn(`transitionrun`),tv=Jn(`transitionstart`),nv=Jn(`transitioncancel`),rv=Jn(`transitionend`),iv=new Map,av=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);av.push(`scrollEnd`);var ov=0,sv=0;if(typeof performance==`object`&&typeof performance.now==`function`)var cv=performance,lv=function(){return cv.now()};else{var uv=Date;lv=function(){return uv.now()}}var dv=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},fv=`This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.`,pv=0,mv=1,hv=2,gv=3,_v=100,vv=`-\xA0`,yv=`+\xA0`,bv=` \xA0`,xv=typeof console<`u`&&typeof console.timeStamp==`function`&&typeof performance<`u`&&typeof performance.measure==`function`,Sv=`Components ⚛`,Cv=`Scheduler ⚛`,wv=`Blocking`,Tv=!1,Ev={color:`primary`,properties:null,tooltipText:``,track:Sv},Dv={start:-0,end:-0,detail:{devtools:Ev}},Ov=[`Changed Props`,``],kv=`This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.`,Av=[`Changed Props`,kv],jv=1,Mv=2,Nv=[],Pv=0,Fv=0,Iv={};Object.freeze(Iv);var Lv=null,Rv=null,G=0,zv=1,K=2,Bv=8,Vv=16,Hv=32,Uv=!1;try{Object.preventExtensions({})}catch{Uv=!0}var Wv=new WeakMap,Gv=[],Kv=0,qv=null,Jv=0,Yv=[],Xv=0,Zv=null,Qv=1,$v=``,ey=null,ty=null,q=!1,ny=!1,ry=null,iy=null,ay=!1,oy=Error(`Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.`),sy=ye(null),cy=ye(null),ly={},uy=null,dy=null,fy=!1,py=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},my=_m.unstable_scheduleCallback,hy=_m.unstable_NormalPriority,gy={$$typeof:km,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0,_currentRenderer:null,_currentRenderer2:null},_y=null,vy=_m.unstable_now,yy=console.createTask?console.createTask:function(){return null},by=1,xy=2,Sy=-0,Cy=-0,wy=-0,Ty=null,Ey=-1.1,Dy=-0,Oy=-0,J=-1.1,Y=-1.1,ky=null,Ay=!1,jy=-0,My=-1.1,Ny=null,Py=0,Fy=null,Iy=null,Ly=-1.1,Ry=null,zy=-1.1,By=-1.1,Vy=-0,Hy=-1.1,Uy=-1.1,Wy=0,Gy=null,Ky=null,qy=null,Jy=-1.1,Yy=null,Xy=-1.1,Zy=-1.1,Qy=-0,$y=-0,eb=0,tb=null,nb=0,rb=-1.1,ib=!1,ab=!1,ob=null,sb=0,cb=0,lb=null,ub=W.S;W.S=function(e,t){if(BC=_h(),typeof t==`object`&&t&&typeof t.then==`function`){if(0>Hy&&0>Uy){Hy=vy();var n=Xd(),r=Yd();(n!==Xy||r!==Yy)&&(Xy=-1.1),Jy=n,Yy=r}Li(e,t)}if(_y!==null)for(n=jw;n!==null;)gi(n,_y),n=n.next;if(n=e.types,n!==null){for(r=jw;r!==null;)gi(r,n),r=r.next;if(cb!==0){r=_y,r===null&&(r=_y=[]);for(var i=0;i<n.length;i++){var a=n[i];r.indexOf(a)===-1&&r.push(a)}}}ub!==null&&ub(e,t)};var db=ye(null),fb={recordUnsafeLifecycleWarnings:function(){},flushPendingUnsafeLifecycleWarnings:function(){},recordLegacyContextWarning:function(){},flushLegacyContextWarning:function(){},discardPendingWarnings:function(){}},pb=[],mb=[],hb=[],gb=[],_b=[],vb=[],yb=new Set;fb.recordUnsafeLifecycleWarnings=function(e,t){yb.has(e.type)||(typeof t.componentWillMount==`function`&&!0!==t.componentWillMount.__suppressDeprecationWarning&&pb.push(e),e.mode&Bv&&typeof t.UNSAFE_componentWillMount==`function`&&mb.push(e),typeof t.componentWillReceiveProps==`function`&&!0!==t.componentWillReceiveProps.__suppressDeprecationWarning&&hb.push(e),e.mode&Bv&&typeof t.UNSAFE_componentWillReceiveProps==`function`&&gb.push(e),typeof t.componentWillUpdate==`function`&&!0!==t.componentWillUpdate.__suppressDeprecationWarning&&_b.push(e),e.mode&Bv&&typeof t.UNSAFE_componentWillUpdate==`function`&&vb.push(e))},fb.flushPendingUnsafeLifecycleWarnings=function(){var e=new Set;0<pb.length&&(pb.forEach(function(t){e.add(S(t)||`Component`),yb.add(t.type)}),pb=[]);var t=new Set;0<mb.length&&(mb.forEach(function(e){t.add(S(e)||`Component`),yb.add(e.type)}),mb=[]);var n=new Set;0<hb.length&&(hb.forEach(function(e){n.add(S(e)||`Component`),yb.add(e.type)}),hb=[]);var r=new Set;0<gb.length&&(gb.forEach(function(e){r.add(S(e)||`Component`),yb.add(e.type)}),gb=[]);var i=new Set;0<_b.length&&(_b.forEach(function(e){i.add(S(e)||`Component`),yb.add(e.type)}),_b=[]);var a=new Set;if(0<vb.length&&(vb.forEach(function(e){a.add(S(e)||`Component`),yb.add(e.type)}),vb=[]),0<t.size){var o=h(t);console.error(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,o)}0<r.size&&(o=h(r),console.error(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,o)),0<a.size&&(o=h(a),console.error(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,o)),0<e.size&&(o=h(e),console.warn(`componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o)),0<n.size&&(o=h(n),console.warn(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o)),0<i.size&&(o=h(i),console.warn(`componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,o))};var bb=new Map,xb=new Set;fb.recordLegacyContextWarning=function(e,t){for(var n=null,r=e;r!==null;)r.mode&Bv&&(n=r),r=r.return;n===null?console.error(`Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.`):!xb.has(e.type)&&(r=bb.get(n),e.type.contextTypes!=null||e.type.childContextTypes!=null||t!==null&&typeof t.getChildContext==`function`)&&(r===void 0&&(r=[],bb.set(n,r)),r.push(e))},fb.flushLegacyContextWarning=function(){bb.forEach(function(e){if(e.length!==0){var t=e[0],n=new Set;e.forEach(function(e){n.add(S(e)||`Component`),xb.add(e.type)});var r=h(n);w(t,function(){console.error(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,r)})}})},fb.discardPendingWarnings=function(){pb=[],mb=[],hb=[],gb=[],_b=[],vb=[],bb=new Map};var Sb=``,Cb={react_stack_bottom_frame:function(e,t,n){var r=dh;dh=!0;try{return e(t,n)}finally{dh=r}}},wb=Cb.react_stack_bottom_frame.bind(Cb),Tb={react_stack_bottom_frame:function(e){var t=dh;dh=!0;try{return e.render()}finally{dh=t}}},Eb=Tb.react_stack_bottom_frame.bind(Tb),Db={react_stack_bottom_frame:function(e,t){try{t.componentDidMount()}catch(t){Fu(e,e.return,t)}}},Ob=Db.react_stack_bottom_frame.bind(Db),kb={react_stack_bottom_frame:function(e,t,n,r,i){try{t.componentDidUpdate(n,r,i)}catch(t){Fu(e,e.return,t)}}},Ab=kb.react_stack_bottom_frame.bind(kb),jb={react_stack_bottom_frame:function(e,t){var n=t.stack;e.componentDidCatch(t.value,{componentStack:n===null?``:n})}},Mb=jb.react_stack_bottom_frame.bind(jb),Nb={react_stack_bottom_frame:function(e,t,n){try{n.componentWillUnmount()}catch(n){Fu(e,t,n)}}},Pb=Nb.react_stack_bottom_frame.bind(Nb),Fb={react_stack_bottom_frame:function(e){var t=e.create;return e=e.inst,t=t(),e.destroy=t}},Ib=Fb.react_stack_bottom_frame.bind(Fb),Lb={react_stack_bottom_frame:function(e,t,n){try{n()}catch(n){Fu(e,t,n)}}},Rb=Lb.react_stack_bottom_frame.bind(Lb),zb={react_stack_bottom_frame:function(e){var t=e._init;return t(e._payload)}},Bb=zb.react_stack_bottom_frame.bind(zb),Vb=Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."),Hb=Error(`Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React.`),Ub=Error("Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."),Wb={then:function(){console.error(`Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.`)}},Gb=null,Kb=null,qb=!1,Jb=null,Yb=!1,Xb=null,Zb=0,Qb=null,$b,ex=$b=!1,tx={},nx={},rx={};p=function(e,t,n){if(typeof n==`object`&&n&&n._store&&(!n._store.validated&&n.key==null||n._store.validated===2)){if(typeof n._store!=`object`)throw Error(`React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.`);n._store.validated=1;var r=S(e),i=r||`null`;if(!tx[i]){tx[i]=!0,n=n._owner,e=e._debugOwner;var a=``;e&&typeof e.tag==`number`&&(i=S(e))&&(a=`

Check the render method of \``+i+"`."),a||r&&(a=`

Check the top-level render call using <`+r+`>.`);var o=``;n!=null&&e!==n&&(r=null,typeof n.tag==`number`?r=S(n):typeof n.name==`string`&&(r=n.name),r&&(o=` It was passed a child from `+r+`.`)),w(t,function(){console.error(`Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.`,a,o)})}}};var ix=sa(!0),ax=sa(!1),ox=0,sx=1,cx=2,lx=3,ux=!1,dx=!1,fx=null,px=!1,mx=ye(null),hx=ye(0),gx=ye(null),_x=null,vx=1,yx=2,bx=ye(0),xx=0,Sx=1,Cx=2,wx=4,Tx=8,Ex,Dx=new Set,Ox=new Set,kx=new Set,Ax=new Set,jx=0,X=null,Mx=null,Nx=null,Px=!1,Fx=!1,Ix=!1,Lx=0,Rx=0,zx=null,Bx=0,Vx=25,Z=null,Hx=null,Ux=-1,Wx=!1,Gx={readContext:ui,use:Ka,useCallback:Na,useContext:Na,useEffect:Na,useImperativeHandle:Na,useLayoutEffect:Na,useInsertionEffect:Na,useMemo:Na,useReducer:Na,useRef:Na,useState:Na,useDebugValue:Na,useDeferredValue:Na,useTransition:Na,useSyncExternalStore:Na,useId:Na,useHostTransitionStatus:Na,useFormState:Na,useActionState:Na,useOptimistic:Na,useMemoCache:Na,useCacheRefresh:Na,useEffectEvent:Na},Kx=null,qx=null,Jx=null,Yx=null,Xx=null,Zx=null,Qx=null;Kx={readContext:function(e){return ui(e)},use:Ka,useCallback:function(e,t){return Z=`useCallback`,V(),ja(t),Lo(e,t)},useContext:function(e){return Z=`useContext`,V(),ui(e)},useEffect:function(e,t){return Z=`useEffect`,V(),ja(t),ko(e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,V(),ja(n),Fo(e,t,n)},useInsertionEffect:function(e,t){Z=`useInsertionEffect`,V(),ja(t),Do(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,V(),ja(t),No(e,t)},useMemo:function(e,t){Z=`useMemo`,V(),ja(t);var n=W.H;W.H=Xx;try{return zo(e,t)}finally{W.H=n}},useReducer:function(e,t,n){Z=`useReducer`,V();var r=W.H;W.H=Xx;try{return Ya(e,t,n)}finally{W.H=r}},useRef:function(e){return Z=`useRef`,V(),Eo(e)},useState:function(e){Z=`useState`,V();var t=W.H;W.H=Xx;try{return so(e)}finally{W.H=t}},useDebugValue:function(){Z=`useDebugValue`,V()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,V(),Vo(e,t)},useTransition:function(){return Z=`useTransition`,V(),Zo()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,V(),$a(e,t,n)},useId:function(){return Z=`useId`,V(),ts()},useFormState:function(e,t){return Z=`useFormState`,V(),Ma(),bo(e,t)},useActionState:function(e,t){return Z=`useActionState`,V(),bo(e,t)},useOptimistic:function(e){return Z=`useOptimistic`,V(),co(e)},useHostTransitionStatus:es,useMemoCache:qa,useCacheRefresh:function(){return Z=`useCacheRefresh`,V(),ns()},useEffectEvent:function(e){return Z=`useEffectEvent`,V(),jo(e)}},qx={readContext:function(e){return ui(e)},use:Ka,useCallback:function(e,t){return Z=`useCallback`,H(),Lo(e,t)},useContext:function(e){return Z=`useContext`,H(),ui(e)},useEffect:function(e,t){return Z=`useEffect`,H(),ko(e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,H(),Fo(e,t,n)},useInsertionEffect:function(e,t){Z=`useInsertionEffect`,H(),Do(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,H(),No(e,t)},useMemo:function(e,t){Z=`useMemo`,H();var n=W.H;W.H=Xx;try{return zo(e,t)}finally{W.H=n}},useReducer:function(e,t,n){Z=`useReducer`,H();var r=W.H;W.H=Xx;try{return Ya(e,t,n)}finally{W.H=r}},useRef:function(e){return Z=`useRef`,H(),Eo(e)},useState:function(e){Z=`useState`,H();var t=W.H;W.H=Xx;try{return so(e)}finally{W.H=t}},useDebugValue:function(){Z=`useDebugValue`,H()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,H(),Vo(e,t)},useTransition:function(){return Z=`useTransition`,H(),Zo()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,H(),$a(e,t,n)},useId:function(){return Z=`useId`,H(),ts()},useActionState:function(e,t){return Z=`useActionState`,H(),bo(e,t)},useFormState:function(e,t){return Z=`useFormState`,H(),Ma(),bo(e,t)},useOptimistic:function(e){return Z=`useOptimistic`,H(),co(e)},useHostTransitionStatus:es,useMemoCache:qa,useCacheRefresh:function(){return Z=`useCacheRefresh`,H(),ns()},useEffectEvent:function(e){return Z=`useEffectEvent`,H(),jo(e)}},Jx={readContext:function(e){return ui(e)},use:Ka,useCallback:function(e,t){return Z=`useCallback`,H(),Ro(e,t)},useContext:function(e){return Z=`useContext`,H(),ui(e)},useEffect:function(e,t){Z=`useEffect`,H(),Oo(2048,Tx,e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,H(),Io(e,t,n)},useInsertionEffect:function(e,t){return Z=`useInsertionEffect`,H(),Oo(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,H(),Oo(4,wx,e,t)},useMemo:function(e,t){Z=`useMemo`,H();var n=W.H;W.H=Zx;try{return Bo(e,t)}finally{W.H=n}},useReducer:function(e,t,n){Z=`useReducer`,H();var r=W.H;W.H=Zx;try{return Xa(e,t,n)}finally{W.H=r}},useRef:function(){return Z=`useRef`,H(),Ua().memoizedState},useState:function(){Z=`useState`,H();var e=W.H;W.H=Zx;try{return Xa(Ja)}finally{W.H=e}},useDebugValue:function(){Z=`useDebugValue`,H()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,H(),Ho(e,t)},useTransition:function(){return Z=`useTransition`,H(),Qo()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,H(),eo(e,t,n)},useId:function(){return Z=`useId`,H(),Ua().memoizedState},useFormState:function(e){return Z=`useFormState`,H(),Ma(),xo(e)},useActionState:function(e){return Z=`useActionState`,H(),xo(e)},useOptimistic:function(e,t){return Z=`useOptimistic`,H(),lo(e,t)},useHostTransitionStatus:es,useMemoCache:qa,useCacheRefresh:function(){return Z=`useCacheRefresh`,H(),Ua().memoizedState},useEffectEvent:function(e){return Z=`useEffectEvent`,H(),Mo(e)}},Yx={readContext:function(e){return ui(e)},use:Ka,useCallback:function(e,t){return Z=`useCallback`,H(),Ro(e,t)},useContext:function(e){return Z=`useContext`,H(),ui(e)},useEffect:function(e,t){Z=`useEffect`,H(),Oo(2048,Tx,e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,H(),Io(e,t,n)},useInsertionEffect:function(e,t){return Z=`useInsertionEffect`,H(),Oo(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,H(),Oo(4,wx,e,t)},useMemo:function(e,t){Z=`useMemo`,H();var n=W.H;W.H=Qx;try{return Bo(e,t)}finally{W.H=n}},useReducer:function(e,t,n){Z=`useReducer`,H();var r=W.H;W.H=Qx;try{return Qa(e,t,n)}finally{W.H=r}},useRef:function(){return Z=`useRef`,H(),Ua().memoizedState},useState:function(){Z=`useState`,H();var e=W.H;W.H=Qx;try{return Qa(Ja)}finally{W.H=e}},useDebugValue:function(){Z=`useDebugValue`,H()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,H(),Uo(e,t)},useTransition:function(){return Z=`useTransition`,H(),$o()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,H(),eo(e,t,n)},useId:function(){return Z=`useId`,H(),Ua().memoizedState},useFormState:function(e){return Z=`useFormState`,H(),Ma(),wo(e)},useActionState:function(e){return Z=`useActionState`,H(),wo(e)},useOptimistic:function(e,t){return Z=`useOptimistic`,H(),fo(e,t)},useHostTransitionStatus:es,useMemoCache:qa,useCacheRefresh:function(){return Z=`useCacheRefresh`,H(),Ua().memoizedState},useEffectEvent:function(e){return Z=`useEffectEvent`,H(),Mo(e)}},Xx={readContext:function(e){return l(),ui(e)},use:function(e){return c(),Ka(e)},useCallback:function(e,t){return Z=`useCallback`,c(),V(),Lo(e,t)},useContext:function(e){return Z=`useContext`,c(),V(),ui(e)},useEffect:function(e,t){return Z=`useEffect`,c(),V(),ko(e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,c(),V(),Fo(e,t,n)},useInsertionEffect:function(e,t){Z=`useInsertionEffect`,c(),V(),Do(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,c(),V(),No(e,t)},useMemo:function(e,t){Z=`useMemo`,c(),V();var n=W.H;W.H=Xx;try{return zo(e,t)}finally{W.H=n}},useReducer:function(e,t,n){Z=`useReducer`,c(),V();var r=W.H;W.H=Xx;try{return Ya(e,t,n)}finally{W.H=r}},useRef:function(e){return Z=`useRef`,c(),V(),Eo(e)},useState:function(e){Z=`useState`,c(),V();var t=W.H;W.H=Xx;try{return so(e)}finally{W.H=t}},useDebugValue:function(){Z=`useDebugValue`,c(),V()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,c(),V(),Vo(e,t)},useTransition:function(){return Z=`useTransition`,c(),V(),Zo()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,c(),V(),$a(e,t,n)},useId:function(){return Z=`useId`,c(),V(),ts()},useFormState:function(e,t){return Z=`useFormState`,c(),V(),bo(e,t)},useActionState:function(e,t){return Z=`useActionState`,c(),V(),bo(e,t)},useOptimistic:function(e){return Z=`useOptimistic`,c(),V(),co(e)},useMemoCache:function(e){return c(),qa(e)},useHostTransitionStatus:es,useCacheRefresh:function(){return Z=`useCacheRefresh`,V(),ns()},useEffectEvent:function(e){return Z=`useEffectEvent`,c(),V(),jo(e)}},Zx={readContext:function(e){return l(),ui(e)},use:function(e){return c(),Ka(e)},useCallback:function(e,t){return Z=`useCallback`,c(),H(),Ro(e,t)},useContext:function(e){return Z=`useContext`,c(),H(),ui(e)},useEffect:function(e,t){Z=`useEffect`,c(),H(),Oo(2048,Tx,e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,c(),H(),Io(e,t,n)},useInsertionEffect:function(e,t){return Z=`useInsertionEffect`,c(),H(),Oo(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,c(),H(),Oo(4,wx,e,t)},useMemo:function(e,t){Z=`useMemo`,c(),H();var n=W.H;W.H=Zx;try{return Bo(e,t)}finally{W.H=n}},useReducer:function(e,t,n){Z=`useReducer`,c(),H();var r=W.H;W.H=Zx;try{return Xa(e,t,n)}finally{W.H=r}},useRef:function(){return Z=`useRef`,c(),H(),Ua().memoizedState},useState:function(){Z=`useState`,c(),H();var e=W.H;W.H=Zx;try{return Xa(Ja)}finally{W.H=e}},useDebugValue:function(){Z=`useDebugValue`,c(),H()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,c(),H(),Ho(e,t)},useTransition:function(){return Z=`useTransition`,c(),H(),Qo()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,c(),H(),eo(e,t,n)},useId:function(){return Z=`useId`,c(),H(),Ua().memoizedState},useFormState:function(e){return Z=`useFormState`,c(),H(),xo(e)},useActionState:function(e){return Z=`useActionState`,c(),H(),xo(e)},useOptimistic:function(e,t){return Z=`useOptimistic`,c(),H(),lo(e,t)},useMemoCache:function(e){return c(),qa(e)},useHostTransitionStatus:es,useCacheRefresh:function(){return Z=`useCacheRefresh`,H(),Ua().memoizedState},useEffectEvent:function(e){return Z=`useEffectEvent`,c(),H(),Mo(e)}},Qx={readContext:function(e){return l(),ui(e)},use:function(e){return c(),Ka(e)},useCallback:function(e,t){return Z=`useCallback`,c(),H(),Ro(e,t)},useContext:function(e){return Z=`useContext`,c(),H(),ui(e)},useEffect:function(e,t){Z=`useEffect`,c(),H(),Oo(2048,Tx,e,t)},useImperativeHandle:function(e,t,n){return Z=`useImperativeHandle`,c(),H(),Io(e,t,n)},useInsertionEffect:function(e,t){return Z=`useInsertionEffect`,c(),H(),Oo(4,Cx,e,t)},useLayoutEffect:function(e,t){return Z=`useLayoutEffect`,c(),H(),Oo(4,wx,e,t)},useMemo:function(e,t){Z=`useMemo`,c(),H();var n=W.H;W.H=Zx;try{return Bo(e,t)}finally{W.H=n}},useReducer:function(e,t,n){Z=`useReducer`,c(),H();var r=W.H;W.H=Zx;try{return Qa(e,t,n)}finally{W.H=r}},useRef:function(){return Z=`useRef`,c(),H(),Ua().memoizedState},useState:function(){Z=`useState`,c(),H();var e=W.H;W.H=Zx;try{return Qa(Ja)}finally{W.H=e}},useDebugValue:function(){Z=`useDebugValue`,c(),H()},useDeferredValue:function(e,t){return Z=`useDeferredValue`,c(),H(),Uo(e,t)},useTransition:function(){return Z=`useTransition`,c(),H(),$o()},useSyncExternalStore:function(e,t,n){return Z=`useSyncExternalStore`,c(),H(),eo(e,t,n)},useId:function(){return Z=`useId`,c(),H(),Ua().memoizedState},useFormState:function(e){return Z=`useFormState`,c(),H(),wo(e)},useActionState:function(e){return Z=`useActionState`,c(),H(),wo(e)},useOptimistic:function(e,t){return Z=`useOptimistic`,c(),H(),fo(e,t)},useMemoCache:function(e){return c(),qa(e)},useHostTransitionStatus:es,useCacheRefresh:function(){return Z=`useCacheRefresh`,H(),Ua().memoizedState},useEffectEvent:function(e){return Z=`useEffectEvent`,c(),H(),Mo(e)}};var $x={},eS=new Set,tS=new Set,nS=new Set,rS=new Set,iS=new Set,aS=new Set,oS=new Set,sS=new Set,cS=new Set,lS=new Set;Object.freeze($x);var uS={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ql(e),i=da(r);i.payload=t,n!=null&&(ds(n),i.callback=n),t=fa(e,i,r),t!==null&&(vi(r,`this.setState()`,e),Xl(t,e,r),pa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ql(e),i=da(r);i.tag=sx,i.payload=t,n!=null&&(ds(n),i.callback=n),t=fa(e,i,r),t!==null&&(vi(r,`this.replaceState()`,e),Xl(t,e,r),pa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ql(e),r=da(n);r.tag=cx,t!=null&&(ds(t),r.callback=t),t=fa(e,r,n),t!==null&&(vi(n,`this.forceUpdate()`,e),Xl(t,e,n),pa(t,e,n))}},dS=null,fS=null,pS=Error(`This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue.`),mS=!1,hS={},gS={},_S={},vS={},yS=!1,bS={},xS={},SS={},CS={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null},wS=!1,TS=null;TS=new Set;var ES=!1,DS=null,OS=null,kS=0,AS=new Map,jS={},MS=0,NS=1,PS=2,FS=!1,IS=!1,LS=!1,RS=!1,zS=typeof WeakSet==`function`?WeakSet:Set,BS=null,VS=null,HS=null,US=!1,WS=!1,GS=!1,KS=!1,qS=null,JS=!1,YS=null,XS=!1,ZS=8192,QS={getCacheForType:function(e){var t=ui(gy),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ui(gy).controller.signal},getOwner:function(){return uh}};if(typeof Symbol==`function`&&Symbol.for){var $S=Symbol.for;$S(`selector.component`),$S(`selector.has_pseudo_class`),$S(`selector.role`),$S(`selector.test_id`),$S(`selector.text`)}var eC=[],tC=typeof WeakMap==`function`?WeakMap:Map,nC=0,rC=2,iC=4,aC=0,oC=1,sC=2,cC=3,lC=4,uC=6,dC=5,fC=nC,pC=null,Q=null,$=0,mC=0,hC=1,gC=2,_C=3,vC=4,yC=5,bC=6,xC=7,SC=8,CC=9,wC=mC,TC=null,EC=!1,DC=!1,OC=!1,kC=0,AC=aC,jC=0,MC=0,NC=0,PC=0,FC=0,IC=null,LC=null,RC=!1,zC=0,BC=0,VC=300,HC=1/0,UC=500,WC=null,GC=null,KC=null,qC=0,JC=1,YC=2,XC=3,ZC=0,QC=1,$C=2,ew=3,tw=4,nw=5,rw=0,iw=null,aw=null,ow=0,sw=0,cw=-0,lw=null,uw=null,dw=null,fw=null,pw=null,mw=null,hw=qC,gw=null,_w=50,vw=0,yw=null,bw=!1,xw=!1,Sw=50,Cw=0,ww=null,Tw=!1,Ew=!1,Dw=null,Ow=!1,kw=new Set,Aw={},jw=null,Mw=null,Nw=!1,Pw=!1,Fw=!1,Iw=!1,Lw=0,Rw={};(function(){for(var e=0;e<av.length;e++){var t=av[e],n=t.toLowerCase();t=t[0].toUpperCase()+t.slice(1),Yn(n,`on`+t)}Yn(Z_,`onAnimationEnd`),Yn(Q_,`onAnimationIteration`),Yn($_,`onAnimationStart`),Yn(`dblclick`,`onDoubleClick`),Yn(`focusin`,`onFocus`),Yn(`focusout`,`onBlur`),Yn(ev,`onTransitionRun`),Yn(tv,`onTransitionStart`),Yn(nv,`onTransitionCancel`),Yn(rv,`onTransitionEnd`)})(),mt(`onMouseEnter`,[`mouseout`,`mouseover`]),mt(`onMouseLeave`,[`mouseout`,`mouseover`]),mt(`onPointerEnter`,[`pointerout`,`pointerover`]),mt(`onPointerLeave`,[`pointerout`,`pointerover`]),pt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),pt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),pt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),pt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),pt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),pt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var zw=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),Bw=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zw)),Vw=`_reactListening`+Math.random().toString(36).slice(2),Hw=!1,Uw=!1,Ww=!1,Gw=!1,Kw=!1,qw=!1,Jw=!1,Yw={},Xw=/\r\n?/g,Zw=/\u0000|\uFFFD/g,Qw=`http://www.w3.org/1999/xlink`,$w=`http://www.w3.org/XML/1998/namespace`,eT={},tT=`javascript:throw new Error('React form unexpectedly submitted.')`,nT=`suppressHydrationWarning`,rT=`&`,iT=`/&`,aT=`$`,oT=`/$`,sT=`$?`,cT=`$~`,lT=`$!`,uT=`html`,dT=`body`,fT=`head`,pT=`F!`,mT=`F`,hT=`loading`,gT=`style`,_T=0,vT=1,yT=2,bT=null,xT=null,ST=!1,CT={dialog:!0,webview:!0},wT=null,TT=void 0,ET=typeof setTimeout==`function`?setTimeout:void 0,DT=typeof clearTimeout==`function`?clearTimeout:void 0,OT=-1,kT=typeof Promise==`function`?Promise:void 0,AT=typeof requestAnimationFrame==`function`?requestAnimationFrame:ET,jT=typeof queueMicrotask==`function`?queueMicrotask:kT===void 0?ET:function(e){return kT.resolve(null).then(e).catch(Zd)},MT=500;Ef.prototype.animate=function(e,t){return t=typeof t==`number`?{duration:t}:U({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Ef.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,n=e.getAnimations({subtree:!0}),r=[],i=0;i<n.length;i++){var a=n[i].effect;a!==null&&a.target===e&&a.pseudoElement===t&&r.push(n[i])}return r},Ef.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)},Of.prototype.addEventListener=function(e,t,n){var r=null,i=null;if(!(n!=null&&typeof n!=`boolean`&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var a=this._eventListeners;if(Nf(a,e,t,n)===-1){var o=this,s=t;n!=null&&typeof n!=`boolean`&&!0===n.once&&(s=function(r){o.removeEventListener(e,t,n),typeof t==`function`?t.call(this,r):t.handleEvent(r)}),r!==null&&(i=o.removeEventListener.bind(o,e,t,n),r.addEventListener(`abort`,i,{once:!0}),i=r.removeEventListener.bind(r,`abort`,i)),r=jf(n),a.push({type:e,listener:t,optionsOrUseCapture:n,attachedListener:s,cleanup:i}),oe(this._fragmentFiber,kf,e,s,r)}this._eventListeners=a}},Of.prototype.removeEventListener=function(e,t,n){var r=this._eventListeners;if(r!==null&&(t=Nf(r,e,t,n),t!==-1)){var i=r[t];n=i.attachedListener;var a=i.cleanup;i=jf(i.optionsOrUseCapture),oe(this._fragmentFiber,Af,e,n,i),r.splice(t,1),a!==null&&a()}},Of.prototype.dispatchEvent=function(e){var t=ce(this._fragmentFiber);if(t===null)return!0;t=fe(t);var n=this._eventListeners;if(n!==null&&0<n.length||!e.bubbles){var r=t.nodeType===9?t.createComment(``):document.createTextNode(``);if(n)for(var i=0;i<n.length;i++){var a=n[i];r.addEventListener(a.type,a.attachedListener,jf(a.optionsOrUseCapture))}if(t.appendChild(r),e=r.dispatchEvent(e),n)for(i=0;i<n.length;i++)a=n[i],r.removeEventListener(a.type,a.attachedListener,jf(a.optionsOrUseCapture));return t.removeChild(r),e}return t.dispatchEvent(e)},Of.prototype.focus=function(e){se(this._fragmentFiber.child,!0,Pf,e,void 0,void 0)},Of.prototype.focusLast=function(e){var t=[];se(this._fragmentFiber.child,!0,Ff,t,void 0,void 0);for(var n=t.length-1;0<=n&&!Pf(t[n],e);n--);},Of.prototype.blur=function(){var e=ce(this._fragmentFiber);e!==null&&(e=fe(e),e=Hd(e).activeElement,e!==null&&oe(this._fragmentFiber,If,e))},Of.prototype.observeUsing=function(e){var t=!1,n=!1;oe(this._fragmentFiber,function(e){if(e.tag===6)t=!0;else return n=!0;return!1}),t&&!n&&console.error(`observeUsing() was called on a FragmentInstance with only text children. Observers do not work on text nodes.`),this._observers===null&&(this._observers=new Set),this._observers.add(e),oe(this._fragmentFiber,Lf,e)},Of.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),oe(this._fragmentFiber,Rf,e);for(var n=t=0;n<NT.length;n++){var r=NT[n];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):NT[t++]=r}NT.length=t}else console.error(`You are calling unobserveUsing() with an observer that is not being observed with this fragment instance. First attach the observer with observeUsing()`)};var NT=[],PT=!1;Of.prototype.getClientRects=function(){var e=[];return oe(this._fragmentFiber,Bf,e),e},Of.prototype.getRootNode=function(e){var t=ce(this._fragmentFiber);return t===null?this:fe(t).getRootNode(e)},Of.prototype.compareDocumentPosition=function(e){var t=ce(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];oe(this._fragmentFiber,Ff,n);var r=fe(t);if(n.length===0){if(t=r,le(this._fragmentFiber)){a:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break a}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(t=n)}n=this._fragmentFiber;var i=r=t.compareDocumentPosition(e);return t===e?i=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=ue(n)[1],n===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=fe(n).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=fe(n[0]),i=fe(n[n.length-1]);var a=le(this._fragmentFiber)?t.parentElement:r;if(a==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=a.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,a=a.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var o=t.compareDocumentPosition(e),s=i.compareDocumentPosition(e),c=o&Node.DOCUMENT_POSITION_CONTAINED_BY||s&Node.DOCUMENT_POSITION_CONTAINED_BY;return s=r&&a&&o&Node.DOCUMENT_POSITION_FOLLOWING&&s&Node.DOCUMENT_POSITION_PRECEDING,t=r&&t===e||a&&i===e||c||s?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&t===e||!a&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:o,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Vf(t,this._fragmentFiber,n[0],n[n.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC},Of.prototype.scrollIntoView=function(e){if(typeof e==`object`)throw Error(`FragmentInstance.scrollIntoView() does not support scrollIntoViewOptions. Use the alignToTop boolean instead.`);var t=[];oe(this._fragmentFiber,Ff,t);var n=!1!==e;if(t.length===0){var r=ue(this._fragmentFiber);if(r=n?r[1]||r[0]||ce(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=fe(r),Hf(e,n);return}if(r=fe(r),r.nodeType!==9){if(r.nodeType===11){n=`host`in r?r.host:null,n===null?console.warn(`You are attempting to scroll a FragmentInstance that is only mounted inside a detached DocumentFragment. No scroll was performed.`):n.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=n?t.length-1:0;r!==(n?-1:t.length);){var i=t[r];i.tag===6?(i=fe(i),Hf(i,n)):fe(i).scrollIntoView(e),r+=n?-1:1}};var FT=null,IT=0,LT=1,RT=2,zT=3,BT=4,VT=new Map,HT=new Set,UT=Um.d;Um.d={f:function(){var e=UT.f(),t=tu();return e||t},r:function(e){var t=lt(e);t!==null&&t.tag===5&&t.type===`form`?Xo(t):UT.r(e)},D:function(e){UT.D(e),hp(`dns-prefetch`,e,null)},C:function(e,t){UT.C(e,t),hp(`preconnect`,e,t)},L:function(e,t,n){UT.L(e,t,n);var r=WT;if(r&&e&&t){var i=`link[rel="preload"][as="`+I(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+I(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+I(n.imageSizes)+`"]`)):i+=`[href="`+I(e)+`"]`;var a=i;switch(t){case`style`:a=vp(e);break;case`script`:a=Sp(e)}if(!(VT.has(a)||(e=U({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),VT.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(yp(a))||t===`script`&&r.querySelector(Cp(a))))){var o=r.createElement(`link`);Od(o,`link`,e),t===`style`&&(o[Yh]=!0,o.onload=o.onerror=function(){ft(o)}),A(o),r.head.appendChild(o)}}},m:function(e,t){UT.m(e,t);var n=WT;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+I(r)+`"][href="`+I(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Sp(e)}if(!VT.has(a)&&(e=U({rel:`modulepreload`,href:e},t),VT.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Cp(a)))return}r=n.createElement(`link`),Od(r,`link`,e),A(r),n.head.appendChild(r)}}},X:function(e,t){UT.X(e,t);var n=WT;if(n&&e){var r=dt(n).hoistableScripts,i=Sp(e),a=r.get(i);a||(a=n.querySelector(Cp(i)),a||(e=U({src:e,async:!0},t),(t=VT.get(i))&&Dp(e,t),a=n.createElement(`script`),A(a),Od(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){UT.S(e,t,n);var r=WT;if(r&&e){var i=dt(r).hoistableStyles,a=vp(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:IT,preload:null};if(o=r.querySelector(yp(a)))s.loading=LT|BT;else{e=U({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=VT.get(a))&&Ep(e,n);var c=o=r.createElement(`link`);A(c),Od(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=LT}),c.addEventListener(`error`,function(){s.loading|=RT}),s.loading|=BT,Tp(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){UT.M(e,t);var n=WT;if(n&&e){var r=dt(n).hoistableScripts,i=Sp(e),a=r.get(i);a||(a=n.querySelector(Cp(i)),a||(e=U({src:e,async:!0,type:`module`},t),(t=VT.get(i))&&Dp(e,t),a=n.createElement(`script`),A(a),Od(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}};var WT=typeof document>`u`?null:document,GT=null,KT=6e4,qT=800,JT=500,YT=0,XT=null,ZT=null,QT=Wm,$T={$$typeof:km,Provider:null,Consumer:null,_currentValue:QT,_currentValue2:QT,_threadCount:0},eE=`%c%s%c`,tE=`background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px`,nE=``,rE=` `,iE=Function.prototype.bind,aE=!1,oE=null,sE=null,cE=null,lE=null,uE=null,dE=null,fE=null,pE=null,mE=null,hE=null;oE=function(e,r,i,a){r=t(e,r),r!==null&&(i=n(r.memoizedState,i,0,a),r.memoizedState=i,r.baseState=i,e.memoizedProps=U({},e.memoizedProps),i=br(e,2),i!==null&&Xl(i,e,2))},sE=function(e,n,r){n=t(e,n),n!==null&&(r=a(n.memoizedState,r,0),n.memoizedState=r,n.baseState=r,e.memoizedProps=U({},e.memoizedProps),r=br(e,2),r!==null&&Xl(r,e,2))},cE=function(e,n,i,a){n=t(e,n),n!==null&&(i=r(n.memoizedState,i,a),n.memoizedState=i,n.baseState=i,e.memoizedProps=U({},e.memoizedProps),i=br(e,2),i!==null&&Xl(i,e,2))},lE=function(e,t,r){e.pendingProps=n(e.memoizedProps,t,0,r),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=br(e,2),t!==null&&Xl(t,e,2)},uE=function(e,t){e.pendingProps=a(e.memoizedProps,t,0),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=br(e,2),t!==null&&Xl(t,e,2)},dE=function(e,t,n){e.pendingProps=r(e.memoizedProps,t,n),e.alternate&&(e.alternate.pendingProps=e.pendingProps),t=br(e,2),t!==null&&Xl(t,e,2)},fE=function(e){var t=br(e,2);t!==null&&Xl(t,e,2)},pE=function(e){var t=$e(),n=br(e,t);n!==null&&Xl(n,e,t)},mE=function(e){s=e},hE=function(e){o=e};var gE=!0,_E=null,vE=!1,yE=null,bE=null,xE=null,SE=new Map,CE=new Map,wE=[],TE=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `),EE=null;if(hm.prototype.render=mm.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(`Cannot update an unmounted root.`);var n=arguments;typeof n[1]==`function`?console.error(`does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().`):ee(n[1])?console.error(`You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.`):n[1]!==void 0&&console.error(`You passed a second argument to root.render(...) but it only accepts one argument.`),n=e;var r=t.current;Gp(r,ql(r),n,t,null,null)},hm.prototype.unmount=mm.prototype.unmount=function(){var e=arguments;if(typeof e[0]==`function`&&console.error(`does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().`),e=this._internalRoot,e!==null){this._internalRoot=null;var t=e.containerInfo;(fC&(rC|iC))!==nC&&console.error(`Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition.`),Gp(e.current,2,null,e,null,null),tu(),t[Uh]=null}},hm.prototype.unstable_scheduleHydration=function(e){if(e){var t=O();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wE.length&&t!==0&&t<wE[n].priority;n++);wE.splice(n,0,e),n===0&&om(e)}},(function(){var e=vm.version;if(e!==`19.3.1`)throw Error(`Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      `+(e+`
  - react-dom:  19.3.1
Learn more: https://react.dev/warnings/version-mismatch`))})(),typeof Map==`function`&&Map.prototype!=null&&typeof Map.prototype.forEach==`function`&&typeof Set==`function`&&Set.prototype!=null&&typeof Set.prototype.clear==`function`&&typeof Set.prototype.forEach==`function`||console.error(`React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills`),Um.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(`Unable to find node on an unmounted component.`):(e=Object.keys(e).join(`,`),Error(`Argument appears to not be a ReactComponent. Keys: `+e));return e=ie(t),e=e===null?null:ae(e),e=e===null?null:e.stateNode,e},!(function(){var e={bundleType:1,version:`19.3.1`,rendererPackageName:`react-dom`,currentDispatcherRef:W,reconcilerVersion:`19.3.1`};return e.overrideHookState=oE,e.overrideHookStateDeletePath=sE,e.overrideHookStateRenamePath=cE,e.overrideProps=lE,e.overridePropsDeletePath=uE,e.overridePropsRenamePath=dE,e.scheduleUpdate=fE,e.scheduleRetry=pE,e.setErrorHandler=mE,e.setSuspenseHandler=hE,e.scheduleRefresh=v,e.scheduleRoot=_,e.setRefreshHandler=y,e.getCurrentFiber=Xp,Ge(e)})()&&Zg&&window.top===window.self&&(-1<navigator.userAgent.indexOf(`Chrome`)&&navigator.userAgent.indexOf(`Edge`)===-1||-1<navigator.userAgent.indexOf(`Firefox`))){var DE=window.location.protocol;/^(https?|file):$/.test(DE)&&console.info(`%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools`+(DE===`file:`?`
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq`:``),`font-weight:bold`)}e.createRoot=function(e,t){if(!ee(e))throw Error(`Target container is not a DOM element.`);gm(e);var n=!1,r=``,i=gs,a=_s,o=vs;return t!=null&&(t.hydrate?console.warn(`hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.`):typeof t==`object`&&t&&t.$$typeof===Cm&&console.error(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`),!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Up(e,1,!1,null,null,n,r,null,i,a,o,pm),e[Uh]=t.current,ud(e),new mm(t)},e.hydrateRoot=function(e,t,n){if(!ee(e))throw Error(`Target container is not a DOM element.`);gm(e),t===void 0&&console.error(`Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)`);var r=!1,i=``,a=gs,o=_s,s=vs,c=null;return n!=null&&(!0===n.unstable_strictMode&&(r=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(a=n.onUncaughtError),n.onCaughtError!==void 0&&(o=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=Up(e,1,!0,t,n??null,r,i,c,a,o,s,pm),t.context=Wp(null),n=t.current,r=ql(n),r=E(r),i=da(r),i.callback=null,fa(n,i,r),vi(r,`hydrateRoot()`,null),n=r,t.current.lanes=n,tt(t,n),Ju(t),e[Uh]=t.current,ud(e),new hm(t)},e.version=`19.3.1`,typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop==`function`&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error())})()})),g=o(((e,t)=>{t.exports=h()})),_=c(f(),1),v=g(),y={name:`AMRUTKALP`,tagline:`Pure Ayurvedic Herbals`,subheading:`Shastriya Ayurvedic Purity & Himalayan Mineral Science`,phone:`8141323395`,phoneFormatted:`+91 81413 23395`,whatsappNumber:`918141323395`,email:`care@amrutkalpayurved.com`,address:{shop:`108, Biz Hub Shopping`,landmark:`Near 99 Shopping, Amroli Cross Road`,area:`Amroli`,city:`Surat`,state:`Gujarat`,pincode:`394107`,country:`India`,full:`108, Biz Hub Shopping, Near 99 Shopping, Amroli Cross Road, Amroli, Surat, Gujarat 394107`},social:{instagram:`https://instagram.com/pure_ayurvedic_herbal`,instagramHandle:`@pure_ayurvedic_herbal`,facebook:`https://facebook.com/amrutkalp.ayurved`,facebookName:`Amrutkalp ayurved`},guarantee:{amount:`₹5,51,000`,headlineGujarati:`ડુપ્લીકેટ સાબિત કરીને બતાવો તો મળશે ₹5,51,000 ઈનામ*`,headlineHindi:`डुप्लीकेट साबित करके दिखाओ तो मिलेगा ₹5,51,000 का इनाम*`,headlineEnglish:`₹5,51,000 Reward if proven fake, synthetic, or adulterated in any certified lab.`,description:`We stake our complete reputation on the untampered purity of our Himalayan Shilajit resin. If any NABL-accredited laboratory finds chemical additives, heavy metal toxins, or adulteration, Amrutkalp will honour this public cash reward.`},shippingThreshold:699},ee=o((e=>{(function(){function t(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case v:return`Fragment`;case ee:return`Profiler`;case y:return`StrictMode`;case re:return`Suspense`;case ie:return`SuspenseList`;case se:return`Activity`;case ce:return`ViewTransition`}if(typeof e==`object`)switch(typeof e.tag==`number`&&console.error(`Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.`),e.$$typeof){case _:return`Portal`;case te:return e.displayName||`Context`;case b:return(e._context.displayName||`Context`)+`.Consumer`;case ne:var n=e.render;return e=e.displayName,e||=(e=n.displayName||n.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ae:return n=e.displayName||null,n===null?t(e.type)||`Memo`:n;case oe:n=e._payload,e=e._init;try{return t(e(n))}catch{}}return null}function n(e){return``+e}function r(e){try{n(e);var t=!1}catch{t=!0}if(t){t=console;var r=t.error,i=typeof Symbol==`function`&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||`Object`;return r.call(t,`The provided key is an unsupported type %s. This value must be coerced to a string before using it here.`,i),n(e)}}function i(e){if(e===v)return`<>`;if(typeof e==`object`&&e&&e.$$typeof===oe)return`<...>`;try{var n=t(e);return n?`<`+n+`>`:`<...>`}catch{return`<...>`}}function a(){var e=ue.A;return e===null?null:e.getOwner()}function o(){return Error(`react-stack-top-frame`)}function s(e){if(de.call(e,`key`)){var t=Object.getOwnPropertyDescriptor(e,`key`).get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function c(e,t){function n(){x||(x=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",t))}n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}function l(){var e=t(this.type);return me[e]||(me[e]=!0,console.error(`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`)),e=this.props.ref,e===void 0?null:e}function u(e,t,n,r,i,a){var o=n.ref;return e={$$typeof:g,type:e,key:t,props:n,_owner:r},(o===void 0?null:o)===null?Object.defineProperty(e,"ref",{enumerable:!1,value:null}):Object.defineProperty(e,"ref",{enumerable:!1,get:l}),e._store={},Object.defineProperty(e._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(e,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(e,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:i}),Object.defineProperty(e,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:a}),Object.freeze&&(Object.freeze(e.props),Object.freeze(e)),e}function d(e,n,i,o,l,d){var f=n.children;if(f!==void 0){if(o){if(fe(f)){for(o=0;o<f.length;o++)p(f[o]);Object.freeze&&Object.freeze(f)}else console.error(`React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.`)}else p(f)}if(de.call(n,`key`)){f=t(e);var m=Object.keys(n).filter(function(e){return e!==`key`});o=0<m.length?`{key: someKey, `+m.join(`: ..., `)+`: ...}`:`{key: someKey}`,_e[f+o]||(m=0<m.length?`{`+m.join(`: ..., `)+`: ...}`:`{}`,console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,o,f,m,f),_e[f+o]=!0)}if(f=null,i!==void 0&&(r(i),f=``+i),s(n)&&(r(n.key),f=``+n.key),`key`in n)for(var h in i={},n)h!==`key`&&(i[h]=n[h]);else i=n;return f&&c(i,typeof e==`function`?e.displayName||e.name||`Unknown`:e),u(e,f,i,a(),l,d)}function p(e){m(e)?e._store&&(e._store.validated=1):typeof e==`object`&&e&&e.$$typeof===oe&&(e._payload.status===`fulfilled`?m(e._payload.value)&&e._payload.value._store&&(e._payload.value._store.validated=1):e._store&&(e._store.validated=1))}function m(e){return typeof e==`object`&&!!e&&e.$$typeof===g}var h=f(),g=Symbol.for(`react.transitional.element`),_=Symbol.for(`react.portal`),v=Symbol.for(`react.fragment`),y=Symbol.for(`react.strict_mode`),ee=Symbol.for(`react.profiler`),b=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),ne=Symbol.for(`react.forward_ref`),re=Symbol.for(`react.suspense`),ie=Symbol.for(`react.suspense_list`),ae=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.activity`),ce=Symbol.for(`react.view_transition`),le=Symbol.for(`react.client.reference`),ue=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de=Object.prototype.hasOwnProperty,fe=Array.isArray,pe=console.createTask?console.createTask:function(){return null};h={react_stack_bottom_frame:function(e){return e()}};var x,me={},he=h.react_stack_bottom_frame.bind(h,o)(),ge=pe(i(o)),_e={};e.Fragment=v,e.jsxDEV=function(e,t,n,r){var a=1e4>ue.recentlyCreatedOwnerStacks++;if(a){var o=Error.stackTraceLimit;Error.stackTraceLimit=10;var s=Error(`react-stack-top-frame`);Error.stackTraceLimit=o}else s=he;return d(e,t,n,r,s,a?pe(i(e)):ge)}})()})),b=o(((e,t)=>{t.exports=ee()}))(),te=`/app/applet/src/context/CartContext.tsx`,ne=(0,_.createContext)(void 0),re=`amrutkalp_cart_v1`,ie=`amrutkalp_last_order_v1`,ae=({children:e})=>{let[t,n]=(0,_.useState)(()=>{try{let e=localStorage.getItem(re);return e?JSON.parse(e):[]}catch{return[]}}),[r,i]=(0,_.useState)(!1),[a,o]=(0,_.useState)(!1),[s,c]=(0,_.useState)(()=>{try{let e=localStorage.getItem(ie);return e?JSON.parse(e):null}catch{return null}});(0,_.useEffect)(()=>{try{localStorage.setItem(re,JSON.stringify(t))}catch(e){console.warn(`Failed to save cart to localStorage`,e)}},[t]);let l=(e,t=1)=>{n(n=>n.find(t=>t.product.id===e.id)?n.map(n=>n.product.id===e.id?{...n,quantity:n.quantity+t}:n):[...n,{product:e,quantity:t}]),i(!0)},u=e=>{n(t=>t.filter(t=>t.product.id!==e))},d=(e,t)=>{t<=0?u(e):n(n=>n.map(n=>n.product.id===e?{...n,quantity:t}:n))},f=()=>{n([])},p=t.reduce((e,t)=>e+t.quantity,0),m=t.reduce((e,t)=>e+t.product.price*t.quantity,0),h=y.shippingThreshold,g=m>=h||m===0?0:70,v=Math.max(0,h-m),ee=m+g;return(0,b.jsxDEV)(ne.Provider,{value:{cart:t,addToCart:l,removeFromCart:u,updateQuantity:d,clearCart:f,totalItems:p,subtotal:m,shippingFee:g,freeShippingThreshold:h,amountNeededForFreeShipping:v,grandTotal:ee,isCartDrawerOpen:r,setIsCartDrawerOpen:i,isCheckoutModalOpen:a,setIsCheckoutModalOpen:o,activeOrder:s,setActiveOrder:c,instantBuyNow:(e,t=1)=>{l(e,t),i(!1),o(!0)},placeOrder:e=>{let n={orderId:`AK-`+Math.floor(1e5+Math.random()*9e5),items:[...t],customer:e,subtotal:m,shipping:g,total:ee,createdAt:new Date().toISOString(),status:`confirmed`};c(n);try{localStorage.setItem(ie,JSON.stringify(n))}catch(e){console.warn(`Failed to save order`,e)}return f(),n},generateWhatsAppOrderUrl:e=>{let n=t.map(e=>`• ${e.product.name} (${e.product.weightOrQuantity}) x ${e.quantity} = ₹${e.product.price*e.quantity}`).join(`
`),r=`*New Order Inquiry - AMRUTKALP Ayurvedic Herbals*

`;r+=`*Order Items:*\n${n||`• No items selected yet`}\n\n`,r+=`*Subtotal:* ₹${m}\n`,r+=`*Shipping:* ${g===0?`FREE`:`₹${g}`}\n`,r+=`*Total Amount:* ₹${ee}\n\n`,e&&e.fullName?(r+=`*Customer Details:*
`,r+=`• Name: ${e.fullName}\n`,r+=`• Phone: ${e.phoneNumber}\n`,r+=`• Address: ${e.addressLine1}${e.addressLine2?`, `+e.addressLine2:``}\n`,r+=`• City/State: ${e.city}, ${e.state} - ${e.pincode}\n`,r+=`• Payment Preference: ${e.paymentMethod.toUpperCase()}\n`,e.notes&&(r+=`• Note: ${e.notes}\n`)):r+=`Hello Amrutkalp team, I would like to place an order for the items above. Please assist with delivery confirmation.`;let i=encodeURIComponent(r);return`https://wa.me/${y.whatsappNumber}?text=${i}`}},children:e},void 0,!1,{fileName:te,lineNumber:165,columnNumber:5},void 0)},oe=()=>{let e=(0,_.useContext)(ne);if(!e)throw Error(`useCart must be used within a CartProvider`);return e},se=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),ce=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),le=e=>{let t=ce(e);return t.charAt(0).toUpperCase()+t.slice(1)},ue=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),de=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0},fe={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},pe=(0,_.forwardRef)(({color:e=`currentColor`,size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>(0,_.createElement)(`svg`,{ref:c,...fe,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:ue(`lucide`,i),...!a&&!de(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])),x=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(pe,{ref:i,iconNode:t,className:ue(`lucide-${se(le(e))}`,`lucide-${e}`,n),...r}));return n.displayName=le(e),n},me=x(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),he=x(`arrow-up-down`,[[`path`,{d:`m21 16-4 4-4-4`,key:`f6ql7i`}],[`path`,{d:`M17 20V4`,key:`1ejh1v`}],[`path`,{d:`m3 8 4-4 4 4`,key:`11wl7u`}],[`path`,{d:`M7 4v16`,key:`1glfcx`}]]),ge=x(`award`,[[`path`,{d:`m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526`,key:`1yiouv`}],[`circle`,{cx:`12`,cy:`8`,r:`6`,key:`1vp47v`}]]),_e=x(`banknote`,[[`rect`,{width:`20`,height:`12`,x:`2`,y:`6`,rx:`2`,key:`9lu3g6`}],[`circle`,{cx:`12`,cy:`12`,r:`2`,key:`1c9p78`}],[`path`,{d:`M6 12h.01M18 12h.01`,key:`113zkx`}]]),ve=x(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),S=x(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ye=x(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),be=x(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),xe=x(`circle-alert`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`line`,{x1:`12`,x2:`12`,y1:`8`,y2:`12`,key:`1pkeuh`}],[`line`,{x1:`12`,x2:`12.01`,y1:`16`,y2:`16`,key:`4dfq90`}]]),Se=x(`circle-check`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Ce=x(`clock`,[[`path`,{d:`M12 6v6l4 2`,key:`mmk7yg`}],[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),we=x(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),Te=x(`credit-card`,[[`rect`,{width:`20`,height:`14`,x:`2`,y:`5`,rx:`2`,key:`ynyp8z`}],[`line`,{x1:`2`,x2:`22`,y1:`10`,y2:`10`,key:`1b3vmo`}]]),Ee=x(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),De=x(`droplets`,[[`path`,{d:`M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z`,key:`1ptgy4`}],[`path`,{d:`M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97`,key:`1sl1rz`}]]),Oe=x(`facebook`,[[`path`,{d:`M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z`,key:`1jg4f8`}]]),ke=x(`file-code`,[[`path`,{d:`M10 12.5 8 15l2 2.5`,key:`1tg20x`}],[`path`,{d:`m14 12.5 2 2.5-2 2.5`,key:`yinavb`}],[`path`,{d:`M14 2v4a2 2 0 0 0 2 2h4`,key:`tnqrlb`}],[`path`,{d:`M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z`,key:`1mlx9k`}]]),Ae=x(`flame`,[[`path`,{d:`M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4`,key:`1slcih`}]]),je=x(`folder`,[[`path`,{d:`M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z`,key:`1kt360`}]]),Me=x(`heart`,[[`path`,{d:`M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5`,key:`mvr1a0`}]]),Ne=x(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),Pe=x(`info`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M12 16v-4`,key:`1dtifu`}],[`path`,{d:`M12 8h.01`,key:`e9boi3`}]]),Fe=x(`instagram`,[[`rect`,{width:`20`,height:`20`,x:`2`,y:`2`,rx:`5`,ry:`5`,key:`2e1cvw`}],[`path`,{d:`M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,key:`9exkf1`}],[`line`,{x1:`17.5`,x2:`17.51`,y1:`6.5`,y2:`6.5`,key:`r4j83e`}]]),C=x(`leaf`,[[`path`,{d:`M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z`,key:`nnexq3`}],[`path`,{d:`M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12`,key:`mt58a7`}]]),Ie=x(`lock`,[[`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`,key:`1w4ew1`}],[`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`,key:`fwvmzm`}]]),Le=x(`map-pin`,[[`path`,{d:`M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,key:`1r0f0z`}],[`circle`,{cx:`12`,cy:`10`,r:`3`,key:`ilqhr7`}]]),w=x(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),Re=x(`message-circle`,[[`path`,{d:`M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719`,key:`1sd12s`}]]),ze=x(`minus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}]]),Be=x(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),Ve=x(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),He=x(`printer`,[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]),Ue=x(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),We=x(`rotate-ccw`,[[`path`,{d:`M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,key:`1357e3`}],[`path`,{d:`M3 3v5h5`,key:`1xhq8a`}]]),Ge=x(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),Ke=x(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),qe=x(`shield-alert`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`M12 8v4`,key:`1got3b`}],[`path`,{d:`M12 16h.01`,key:`1drbdi`}]]),Je=x(`shield-check`,[[`path`,{d:`M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,key:`oel41y`}],[`path`,{d:`m9 12 2 2 4-4`,key:`dzmm74`}]]),Ye=x(`shopping-bag`,[[`path`,{d:`M16 10a4 4 0 0 1-8 0`,key:`1ltviw`}],[`path`,{d:`M3.103 6.034h17.794`,key:`awc11p`}],[`path`,{d:`M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,key:`o988cm`}]]),Xe=x(`star`,[[`path`,{d:`M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z`,key:`r04s7s`}]]),Ze=x(`sun`,[[`circle`,{cx:`12`,cy:`12`,r:`4`,key:`4exip2`}],[`path`,{d:`M12 2v2`,key:`tus03m`}],[`path`,{d:`M12 20v2`,key:`1lh1kg`}],[`path`,{d:`m4.93 4.93 1.41 1.41`,key:`149t6j`}],[`path`,{d:`m17.66 17.66 1.41 1.41`,key:`ptbguv`}],[`path`,{d:`M2 12h2`,key:`1t8f8n`}],[`path`,{d:`M20 12h2`,key:`1q8mjw`}],[`path`,{d:`m6.34 17.66-1.41 1.41`,key:`1m8zz5`}],[`path`,{d:`m19.07 4.93-1.41 1.41`,key:`1shlcs`}]]),Qe=x(`thermometer`,[[`path`,{d:`M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z`,key:`17jzev`}]]),$e=x(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),et=x(`triangle-alert`,[[`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,key:`wmoenq`}],[`path`,{d:`M12 9v4`,key:`juzpu7`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),tt=x(`truck`,[[`path`,{d:`M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2`,key:`wrbu53`}],[`path`,{d:`M15 18H9`,key:`1lyqi6`}],[`path`,{d:`M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14`,key:`lysw3i`}],[`circle`,{cx:`17`,cy:`18`,r:`2`,key:`332jqn`}],[`circle`,{cx:`7`,cy:`18`,r:`2`,key:`19iecd`}]]),nt=x(`users`,[[`path`,{d:`M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`,key:`1yyitq`}],[`path`,{d:`M16 3.128a4 4 0 0 1 0 7.744`,key:`16gr8j`}],[`path`,{d:`M22 21v-2a4 4 0 0 0-3-3.87`,key:`kshegd`}],[`circle`,{cx:`9`,cy:`7`,r:`4`,key:`nufk8`}]]),rt=x(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),T=`/app/applet/src/components/Header.tsx`,it=({currentTab:e,setCurrentTab:t})=>{let[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(!0),{totalItems:o,setIsCartDrawerOpen:s}=oe(),c=e=>{t(e),r(!1),window.scrollTo({top:0,behavior:`smooth`})};return(0,b.jsxDEV)(`header`,{className:`sticky top-0 z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-b border-stone-200/80 transition-all`,children:[i&&(0,b.jsxDEV)(`div`,{className:`bg-[#111915] text-[#e6ded2] text-xs py-2 px-4 flex items-center justify-between border-b border-stone-800`,children:[(0,b.jsxDEV)(`div`,{className:`mx-auto flex items-center gap-2 text-center text-[11px] sm:text-xs tracking-wide`,children:[(0,b.jsxDEV)(`span`,{className:`inline-block text-[#c99a45] font-semibold`,children:`AUTHENTICITY GUARANTEE:`},void 0,!1,{fileName:T,lineNumber:29,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:y.guarantee.headlineEnglish},void 0,!1,{fileName:T,lineNumber:30,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`hidden md:inline text-stone-400`,children:`·`},void 0,!1,{fileName:T,lineNumber:31,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`hidden md:inline`,children:`Free Express Delivery on orders ₹699+`},void 0,!1,{fileName:T,lineNumber:32,columnNumber:13},void 0)]},void 0,!0,{fileName:T,lineNumber:28,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>a(!1),"aria-label":`Dismiss banner`,className:`text-stone-400 hover:text-white text-xs p-1`,children:(0,b.jsxDEV)(rt,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:T,lineNumber:39,columnNumber:13},void 0)},void 0,!1,{fileName:T,lineNumber:34,columnNumber:11},void 0)]},void 0,!0,{fileName:T,lineNumber:27,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 md:gap-8`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3 shrink-0`,children:(0,b.jsxDEV)(`button`,{onClick:()=>c(`home`),className:`text-left group flex items-center gap-3 cursor-pointer`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-full bg-[#111915] text-amber-100 flex items-center justify-center font-serif text-lg font-bold border border-amber-500/30 shadow-xs`,children:`AK`},void 0,!1,{fileName:T,lineNumber:53,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`font-serif text-2xl md:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors whitespace-nowrap`,children:`AMRUTKALP`},void 0,!1,{fileName:T,lineNumber:57,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`block text-[10px] uppercase tracking-widest text-stone-500 font-medium`,children:`Pure Ayurvedic Herbals`},void 0,!1,{fileName:T,lineNumber:60,columnNumber:15},void 0)]},void 0,!0,{fileName:T,lineNumber:56,columnNumber:13},void 0)]},void 0,!0,{fileName:T,lineNumber:49,columnNumber:11},void 0)},void 0,!1,{fileName:T,lineNumber:48,columnNumber:9},void 0),(0,b.jsxDEV)(`nav`,{className:`hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>c(`home`),className:`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${e===`home`?`border-[#111915] text-stone-950 font-semibold`:`border-transparent text-stone-600`}`,children:`Home`},void 0,!1,{fileName:T,lineNumber:69,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`shop`),className:`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${e===`shop`?`border-[#111915] text-stone-950 font-semibold`:`border-transparent text-stone-600`}`,children:`Shop Remedies`},void 0,!1,{fileName:T,lineNumber:77,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`authenticity`),className:`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 flex items-center gap-1.5 ${e===`authenticity`?`border-[#111915] text-stone-950 font-semibold`:`border-transparent text-stone-600`}`,children:[(0,b.jsxDEV)(Je,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:T,lineNumber:91,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`₹5.51L Challenge`},void 0,!1,{fileName:T,lineNumber:92,columnNumber:13},void 0)]},void 0,!0,{fileName:T,lineNumber:85,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`ingredients`),className:`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${e===`ingredients`?`border-[#111915] text-stone-950 font-semibold`:`border-transparent text-stone-600`}`,children:`Ingredients & Science`},void 0,!1,{fileName:T,lineNumber:94,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`journal`),className:`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${e===`journal`?`border-[#111915] text-stone-950 font-semibold`:`border-transparent text-stone-600`}`,children:`Ayurvedic Journal`},void 0,!1,{fileName:T,lineNumber:102,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`about`),className:`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${e===`about`?`border-[#111915] text-stone-950 font-semibold`:`border-transparent text-stone-600`}`,children:`Our Story`},void 0,!1,{fileName:T,lineNumber:110,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`contact`),className:`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 ${e===`contact`?`border-[#111915] text-stone-950 font-semibold`:`border-transparent text-stone-600`}`,children:`Contact`},void 0,!1,{fileName:T,lineNumber:118,columnNumber:11},void 0)]},void 0,!0,{fileName:T,lineNumber:68,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3 shrink-0`,children:[(0,b.jsxDEV)(`a`,{href:`https://wa.me/${y.whatsappNumber}?text=Hello%20Amrutkalp%2C%20I%20would%20like%20to%20consult%20about%20Shilajit%20%26%20Amrutvati.`,target:`_blank`,rel:`noopener noreferrer`,className:`hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap`,children:[(0,b.jsxDEV)(Be,{className:`w-3.5 h-3.5 text-emerald-700`},void 0,!1,{fileName:T,lineNumber:136,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`Ayurvedic Helpline`},void 0,!1,{fileName:T,lineNumber:137,columnNumber:13},void 0)]},void 0,!0,{fileName:T,lineNumber:130,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>s(!0),"aria-label":`View Shopping Cart`,className:`relative p-2.5 rounded-lg bg-stone-900 text-stone-100 hover:bg-stone-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(Ye,{className:`w-5 h-5 text-amber-200`},void 0,!1,{fileName:T,lineNumber:145,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`hidden sm:inline text-xs font-semibold tracking-wide`,children:`Cart`},void 0,!1,{fileName:T,lineNumber:146,columnNumber:13},void 0),o>0&&(0,b.jsxDEV)(`span`,{className:`w-5 h-5 rounded-full bg-[#c99a45] text-stone-950 text-[11px] font-bold flex items-center justify-center tabular-nums`,children:o},void 0,!1,{fileName:T,lineNumber:148,columnNumber:15},void 0)]},void 0,!0,{fileName:T,lineNumber:140,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>r(!n),"aria-label":`Toggle Navigation Menu`,className:`lg:hidden p-2 text-stone-700 hover:text-stone-950 focus:outline-none`,children:n?(0,b.jsxDEV)(rt,{className:`w-6 h-6`},void 0,!1,{fileName:T,lineNumber:160,columnNumber:31},void 0):(0,b.jsxDEV)(w,{className:`w-6 h-6`},void 0,!1,{fileName:T,lineNumber:160,columnNumber:59},void 0)},void 0,!1,{fileName:T,lineNumber:155,columnNumber:11},void 0)]},void 0,!0,{fileName:T,lineNumber:129,columnNumber:9},void 0)]},void 0,!0,{fileName:T,lineNumber:45,columnNumber:7},void 0),n&&(0,b.jsxDEV)(`div`,{className:`lg:hidden bg-[#fbfaf7] border-b border-stone-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150`,children:[(0,b.jsxDEV)(`div`,{className:`flex flex-col space-y-3 text-base font-medium text-stone-800`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>c(`home`),className:`text-left py-2 border-b border-stone-100 hover:text-amber-900`,children:`Home`},void 0,!1,{fileName:T,lineNumber:170,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`shop`),className:`text-left py-2 border-b border-stone-100 hover:text-amber-900 flex items-center justify-between`,children:[(0,b.jsxDEV)(`span`,{children:`Shop All Remedies`},void 0,!1,{fileName:T,lineNumber:180,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-amber-800 font-semibold`,children:`Featured`},void 0,!1,{fileName:T,lineNumber:181,columnNumber:15},void 0)]},void 0,!0,{fileName:T,lineNumber:176,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`authenticity`),className:`text-left py-2 border-b border-stone-100 hover:text-amber-900 flex items-center gap-2`,children:[(0,b.jsxDEV)(Je,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:T,lineNumber:187,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:`₹5,51,000 Purity Challenge`},void 0,!1,{fileName:T,lineNumber:188,columnNumber:15},void 0)]},void 0,!0,{fileName:T,lineNumber:183,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`ingredients`),className:`text-left py-2 border-b border-stone-100 hover:text-amber-900`,children:`Ingredients & Lab Sourcing`},void 0,!1,{fileName:T,lineNumber:190,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`journal`),className:`text-left py-2 border-b border-stone-100 hover:text-amber-900`,children:`Wellness Journal & Guides`},void 0,!1,{fileName:T,lineNumber:196,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`about`),className:`text-left py-2 border-b border-stone-100 hover:text-amber-900`,children:`About Amrutkalp (Surat Store)`},void 0,!1,{fileName:T,lineNumber:202,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(`contact`),className:`text-left py-2 border-b border-stone-100 hover:text-amber-900`,children:`Contact & Store Location`},void 0,!1,{fileName:T,lineNumber:208,columnNumber:13},void 0)]},void 0,!0,{fileName:T,lineNumber:169,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 flex flex-col gap-2`,children:[(0,b.jsxDEV)(`a`,{href:`https://wa.me/${y.whatsappNumber}?text=Hello%20Amrutkalp%2C%20I%20would%20like%20to%20order%20or%20consult.`,target:`_blank`,rel:`noopener noreferrer`,className:`w-full text-center py-3 bg-[#111915] text-amber-100 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 shadow-xs`,children:[(0,b.jsxDEV)(Be,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:T,lineNumber:223,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:[`Order via WhatsApp (+91 `,y.phone,`)`]},void 0,!0,{fileName:T,lineNumber:224,columnNumber:15},void 0)]},void 0,!0,{fileName:T,lineNumber:217,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-[11px] text-stone-500 text-center`,children:`Amroli Cross Road, Surat, Gujarat · Mon-Sat 9:30 AM - 8:00 PM`},void 0,!1,{fileName:T,lineNumber:226,columnNumber:13},void 0)]},void 0,!0,{fileName:T,lineNumber:216,columnNumber:11},void 0)]},void 0,!0,{fileName:T,lineNumber:168,columnNumber:9},void 0)]},void 0,!0,{fileName:T,lineNumber:24,columnNumber:5},void 0)},E=`/app/applet/src/components/Footer.tsx`,at=({setCurrentTab:e,onSelectProduct:t,onOpenSourceModal:n})=>{let r=t=>{e(t),window.scrollTo({top:0,behavior:`smooth`})},i=n=>{t?t(n):e(`shop`),window.scrollTo({top:0,behavior:`smooth`})};return(0,b.jsxDEV)(`footer`,{className:`bg-[#111915] text-stone-300 pt-16 pb-12 border-t border-stone-800`,children:(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-stone-800/80`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-start gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]`,children:(0,b.jsxDEV)(Je,{className:`w-5 h-5`},void 0,!1,{fileName:E,lineNumber:34,columnNumber:15},void 0)},void 0,!1,{fileName:E,lineNumber:33,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h4`,{className:`text-sm font-semibold text-stone-100`,children:`₹5.51 Lakh Purity Challenge`},void 0,!1,{fileName:E,lineNumber:37,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-400 mt-1`,children:`Open testing challenge on 100% genuine Himalayan Shilajit resin.`},void 0,!1,{fileName:E,lineNumber:38,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:36,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:32,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-start gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]`,children:(0,b.jsxDEV)(tt,{className:`w-5 h-5`},void 0,!1,{fileName:E,lineNumber:46,columnNumber:15},void 0)},void 0,!1,{fileName:E,lineNumber:45,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h4`,{className:`text-sm font-semibold text-stone-100`,children:`India-Wide Fast Dispatch`},void 0,!1,{fileName:E,lineNumber:49,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-400 mt-1`,children:`Shipped within 24–48 hours from Surat, Gujarat with real-time tracking.`},void 0,!1,{fileName:E,lineNumber:50,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:48,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:44,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-start gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]`,children:(0,b.jsxDEV)(Se,{className:`w-5 h-5`},void 0,!1,{fileName:E,lineNumber:58,columnNumber:15},void 0)},void 0,!1,{fileName:E,lineNumber:57,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h4`,{className:`text-sm font-semibold text-stone-100`,children:`Cash on Delivery Available`},void 0,!1,{fileName:E,lineNumber:61,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-400 mt-1`,children:`Inspect package on arrival before cash or UPI payment at doorstep.`},void 0,!1,{fileName:E,lineNumber:62,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:60,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:56,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-start gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]`,children:(0,b.jsxDEV)(Ue,{className:`w-5 h-5`},void 0,!1,{fileName:E,lineNumber:70,columnNumber:15},void 0)},void 0,!1,{fileName:E,lineNumber:69,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h4`,{className:`text-sm font-semibold text-stone-100`,children:`7-Day Transit Replacement`},void 0,!1,{fileName:E,lineNumber:73,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-400 mt-1`,children:`Direct replacement guarantee for any transit breakage or seal tampering.`},void 0,!1,{fileName:E,lineNumber:74,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:72,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:68,columnNumber:11},void 0)]},void 0,!0,{fileName:E,lineNumber:31,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-stone-800/80`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-2 space-y-4`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(`div`,{className:`w-8 h-8 rounded-full bg-amber-900/60 text-amber-200 flex items-center justify-center font-serif font-bold text-sm border border-amber-600/40`,children:`AK`},void 0,!1,{fileName:E,lineNumber:87,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`font-serif text-2xl font-bold tracking-tight text-white`,children:`AMRUTKALP`},void 0,!1,{fileName:E,lineNumber:90,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:86,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-400 leading-relaxed max-w-sm`,children:`Classical Shastriya Ayurvedic purity sourced from high-altitude Himalayan ranges and formulated in accordance with authentic Charaka and Sushruta Samhita principles.`},void 0,!1,{fileName:E,lineNumber:94,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 space-y-2 text-xs text-stone-300`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-start gap-2.5`,children:[(0,b.jsxDEV)(Le,{className:`w-4 h-4 text-[#c99a45] shrink-0 mt-0.5`},void 0,!1,{fileName:E,lineNumber:100,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:y.address.full},void 0,!1,{fileName:E,lineNumber:101,columnNumber:17},void 0)]},void 0,!0,{fileName:E,lineNumber:99,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2.5`,children:[(0,b.jsxDEV)(Be,{className:`w-4 h-4 text-[#c99a45] shrink-0`},void 0,!1,{fileName:E,lineNumber:104,columnNumber:17},void 0),(0,b.jsxDEV)(`a`,{href:`tel:${y.phone}`,className:`hover:text-white transition-colors`,children:[y.phoneFormatted,` (Call & WhatsApp)`]},void 0,!0,{fileName:E,lineNumber:105,columnNumber:17},void 0)]},void 0,!0,{fileName:E,lineNumber:103,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:98,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3 pt-2`,children:[(0,b.jsxDEV)(`a`,{href:y.social.instagram,target:`_blank`,rel:`noopener noreferrer`,className:`w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-amber-500 transition-colors`,"aria-label":`Instagram`,children:(0,b.jsxDEV)(Fe,{className:`w-4 h-4`},void 0,!1,{fileName:E,lineNumber:119,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:112,columnNumber:15},void 0),(0,b.jsxDEV)(`a`,{href:y.social.facebook,target:`_blank`,rel:`noopener noreferrer`,className:`w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-amber-500 transition-colors`,"aria-label":`Facebook`,children:(0,b.jsxDEV)(Oe,{className:`w-4 h-4`},void 0,!1,{fileName:E,lineNumber:128,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:121,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-stone-400`,children:y.social.instagramHandle},void 0,!1,{fileName:E,lineNumber:130,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:111,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:85,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,b.jsxDEV)(`h5`,{className:`text-xs font-semibold uppercase tracking-wider text-stone-200`,children:`Formulations`},void 0,!1,{fileName:E,lineNumber:138,columnNumber:13},void 0),(0,b.jsxDEV)(`ul`,{className:`space-y-2 text-xs text-stone-400`,children:[(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>i(`sanjivani-shilajit`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Sanjivani Shilajit 20g`},void 0,!1,{fileName:E,lineNumber:143,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:142,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>i(`amrutvati-pain-relief`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Amrutvati Pain Relief (30 Pcs)`},void 0,!1,{fileName:E,lineNumber:151,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:150,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>i(`vitality-mobility-bundle`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Complete Vitality Bundle`},void 0,!1,{fileName:E,lineNumber:159,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:158,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`shop`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left font-medium text-[#c99a45]`,children:`Browse Full Catalog →`},void 0,!1,{fileName:E,lineNumber:167,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:166,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:141,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:137,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,b.jsxDEV)(`h5`,{className:`text-xs font-semibold uppercase tracking-wider text-stone-200`,children:`Transparency`},void 0,!1,{fileName:E,lineNumber:179,columnNumber:13},void 0),(0,b.jsxDEV)(`ul`,{className:`space-y-2 text-xs text-stone-400`,children:[(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`authenticity`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`₹5.51 Lakh Challenge`},void 0,!1,{fileName:E,lineNumber:184,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:183,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`ingredients`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Fulvic Acid & Minerals`},void 0,!1,{fileName:E,lineNumber:192,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:191,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`journal`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Home Purity Tests`},void 0,!1,{fileName:E,lineNumber:200,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:199,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`journal`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Morning Back Pain Protocol`},void 0,!1,{fileName:E,lineNumber:208,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:207,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:182,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:178,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,b.jsxDEV)(`h5`,{className:`text-xs font-semibold uppercase tracking-wider text-stone-200`,children:`Customer Care`},void 0,!1,{fileName:E,lineNumber:220,columnNumber:13},void 0),(0,b.jsxDEV)(`ul`,{className:`space-y-2 text-xs text-stone-400`,children:[(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`contact`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Store Location & Timings`},void 0,!1,{fileName:E,lineNumber:225,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:224,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`policies`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Shipping & COD Policy`},void 0,!1,{fileName:E,lineNumber:233,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:232,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`policies`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Return & Replacement Policy`},void 0,!1,{fileName:E,lineNumber:241,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:240,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{children:(0,b.jsxDEV)(`button`,{onClick:()=>r(`policies`),className:`hover:text-stone-200 transition-colors cursor-pointer text-left`,children:`Statutory Medical Disclaimer`},void 0,!1,{fileName:E,lineNumber:249,columnNumber:17},void 0)},void 0,!1,{fileName:E,lineNumber:248,columnNumber:15},void 0),(0,b.jsxDEV)(`li`,{className:`pt-2 border-t border-stone-800 space-y-2`,children:[n&&(0,b.jsxDEV)(`button`,{onClick:n,className:`text-[#c99a45] hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer text-left`,children:[(0,b.jsxDEV)(`span`,{children:`Browse & Copy All Code Files`},void 0,!1,{fileName:E,lineNumber:262,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{children:`→`},void 0,!1,{fileName:E,lineNumber:263,columnNumber:21},void 0)]},void 0,!0,{fileName:E,lineNumber:258,columnNumber:19},void 0),(0,b.jsxDEV)(`a`,{href:`/amrutkalp-website-source.zip`,download:`amrutkalp-website-source.zip`,className:`text-stone-400 hover:text-stone-200 text-[11px] transition-colors flex items-center gap-1.5`,children:[(0,b.jsxDEV)(`span`,{children:`Direct Zip Package`},void 0,!1,{fileName:E,lineNumber:271,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:`↓`},void 0,!1,{fileName:E,lineNumber:272,columnNumber:19},void 0)]},void 0,!0,{fileName:E,lineNumber:266,columnNumber:17},void 0)]},void 0,!0,{fileName:E,lineNumber:256,columnNumber:15},void 0)]},void 0,!0,{fileName:E,lineNumber:223,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:219,columnNumber:11},void 0)]},void 0,!0,{fileName:E,lineNumber:82,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`py-6 border-b border-stone-800 text-[11px] text-stone-400 leading-relaxed`,children:(0,b.jsxDEV)(`p`,{children:[(0,b.jsxDEV)(`strong`,{className:`text-stone-300`,children:`Statutory Ayurvedic Notice:`},void 0,!1,{fileName:E,lineNumber:283,columnNumber:13},void 0),` The formulations and traditional claims presented on this website are based on traditional Shastriya Ayurvedic literature, empirical observation, and customer feedback. These products are not intended to diagnose, treat, cure, or prevent any medical disease in place of prescription medicines. Individuals with chronic renal dysfunction, severe cardiovascular conditions, pregnant women, or nursing mothers should consult their physician or an Ayurvedic Vaidya before initiating any wellness regimen.`]},void 0,!0,{fileName:E,lineNumber:282,columnNumber:11},void 0)},void 0,!1,{fileName:E,lineNumber:281,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4`,children:[(0,b.jsxDEV)(`p`,{children:[`© `,new Date().getFullYear(),` AMRUTKALP (Pure Ayurvedic Herbals). All rights reserved.`]},void 0,!0,{fileName:E,lineNumber:289,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-4 text-[11px]`,children:[(0,b.jsxDEV)(`span`,{children:`Surat, Gujarat, India`},void 0,!1,{fileName:E,lineNumber:291,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`·`},void 0,!1,{fileName:E,lineNumber:292,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`NABL Lab Tested Sourcing`},void 0,!1,{fileName:E,lineNumber:293,columnNumber:13},void 0)]},void 0,!0,{fileName:E,lineNumber:290,columnNumber:11},void 0)]},void 0,!0,{fileName:E,lineNumber:288,columnNumber:9},void 0)]},void 0,!0,{fileName:E,lineNumber:28,columnNumber:7},void 0)},void 0,!1,{fileName:E,lineNumber:27,columnNumber:5},void 0)},D=`/app/applet/src/components/CartDrawer.tsx`,ot=()=>{let{cart:e,isCartDrawerOpen:t,setIsCartDrawerOpen:n,updateQuantity:r,removeFromCart:i,subtotal:a,shippingFee:o,grandTotal:s,freeShippingThreshold:c,amountNeededForFreeShipping:l,setIsCheckoutModalOpen:u,generateWhatsAppOrderUrl:d}=oe();return t?(0,b.jsxDEV)(`div`,{className:`fixed inset-0 z-50 overflow-hidden`,children:[(0,b.jsxDEV)(`div`,{onClick:()=>n(!1),className:`absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity`},void 0,!1,{fileName:D,lineNumber:37,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`fixed inset-y-0 right-0 max-w-full flex pl-10`,children:(0,b.jsxDEV)(`div`,{className:`w-screen max-w-md bg-[#fbfaf7] shadow-2xl flex flex-col border-l border-stone-200`,children:[(0,b.jsxDEV)(`div`,{className:`p-5 border-b border-stone-200 flex items-center justify-between bg-white`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(`h2`,{className:`font-serif text-xl font-bold text-stone-900`,children:`Your Ayurvedic Remedy Bag`},void 0,!1,{fileName:D,lineNumber:48,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-stone-500 font-medium tabular-nums`,children:[`(`,e.reduce((e,t)=>e+t.quantity,0),` items)`]},void 0,!0,{fileName:D,lineNumber:51,columnNumber:15},void 0)]},void 0,!0,{fileName:D,lineNumber:47,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>n(!1),className:`p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors`,"aria-label":`Close cart drawer`,children:(0,b.jsxDEV)(rt,{className:`w-5 h-5`},void 0,!1,{fileName:D,lineNumber:60,columnNumber:15},void 0)},void 0,!1,{fileName:D,lineNumber:55,columnNumber:13},void 0)]},void 0,!0,{fileName:D,lineNumber:46,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`px-5 py-3 bg-stone-50 border-b border-stone-200`,children:l>0?(0,b.jsxDEV)(`div`,{className:`space-y-1.5`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between text-xs text-stone-700`,children:[(0,b.jsxDEV)(`span`,{className:`flex items-center gap-1.5 font-medium`,children:[(0,b.jsxDEV)(tt,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:D,lineNumber:70,columnNumber:21},void 0),`Add ₹`,l,` more for Free Express Delivery`]},void 0,!0,{fileName:D,lineNumber:69,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`font-bold tabular-nums`,children:[`₹`,a,` / ₹`,c]},void 0,!0,{fileName:D,lineNumber:73,columnNumber:19},void 0)]},void 0,!0,{fileName:D,lineNumber:68,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`w-full bg-stone-200 h-1.5 rounded-full overflow-hidden`,children:(0,b.jsxDEV)(`div`,{className:`bg-[#c99a45] h-full transition-all duration-300`,style:{width:`${Math.min(100,a/c*100)}%`}},void 0,!1,{fileName:D,lineNumber:76,columnNumber:19},void 0)},void 0,!1,{fileName:D,lineNumber:75,columnNumber:17},void 0)]},void 0,!0,{fileName:D,lineNumber:67,columnNumber:15},void 0):(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs font-semibold text-emerald-800`,children:[(0,b.jsxDEV)(Je,{className:`w-4 h-4 text-emerald-600`},void 0,!1,{fileName:D,lineNumber:84,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`You unlocked Free Express Shipping across India!`},void 0,!1,{fileName:D,lineNumber:85,columnNumber:17},void 0)]},void 0,!0,{fileName:D,lineNumber:83,columnNumber:15},void 0)},void 0,!1,{fileName:D,lineNumber:65,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`flex-1 overflow-y-auto p-5 space-y-4`,children:e.length===0?(0,b.jsxDEV)(`div`,{className:`h-full flex flex-col items-center justify-center text-center py-12 px-4`,children:[(0,b.jsxDEV)(`div`,{className:`w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4`,children:(0,b.jsxDEV)(tt,{className:`w-8 h-8`},void 0,!1,{fileName:D,lineNumber:95,columnNumber:19},void 0)},void 0,!1,{fileName:D,lineNumber:94,columnNumber:17},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-800`,children:`Your bag is empty`},void 0,!1,{fileName:D,lineNumber:97,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-500 mt-1.5 max-w-xs`,children:`Discover authentic Himalayan Shilajit resin and classical joint relief remedies.`},void 0,!1,{fileName:D,lineNumber:98,columnNumber:17},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>n(!1),className:`mt-5 px-5 py-2.5 bg-[#111915] text-amber-100 text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors`,children:`Explore Remedies`},void 0,!1,{fileName:D,lineNumber:101,columnNumber:17},void 0)]},void 0,!0,{fileName:D,lineNumber:93,columnNumber:15},void 0):e.map(({product:e,quantity:t})=>(0,b.jsxDEV)(`div`,{className:`flex gap-4 p-3 bg-white rounded-xl border border-stone-200/80 shadow-2xs`,children:[(0,b.jsxDEV)(`div`,{className:`w-20 h-20 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1.5`,children:e.primaryImage?(0,b.jsxDEV)(`img`,{src:e.primaryImage,alt:e.name,referrerPolicy:`no-referrer`,className:`w-full h-full object-contain`},void 0,!1,{fileName:D,lineNumber:116,columnNumber:23},void 0):(0,b.jsxDEV)(`div`,{className:`w-full h-full bg-[#111915] text-amber-200 rounded flex flex-col items-center justify-center text-center p-1 font-serif`,children:[(0,b.jsxDEV)(`span`,{className:`font-bold text-xs tracking-wider`,children:`AK`},void 0,!1,{fileName:D,lineNumber:124,columnNumber:25},void 0),(0,b.jsxDEV)(`span`,{className:`text-[9px] text-stone-400 font-sans`,children:e.category===`bundle`?`BUNDLE`:`TABLETS`},void 0,!1,{fileName:D,lineNumber:125,columnNumber:25},void 0)]},void 0,!0,{fileName:D,lineNumber:123,columnNumber:23},void 0)},void 0,!1,{fileName:D,lineNumber:114,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`flex-1 flex flex-col justify-between`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`div`,{className:`flex items-start justify-between gap-2`,children:[(0,b.jsxDEV)(`h4`,{className:`text-xs font-bold text-stone-900 leading-snug`,children:e.name},void 0,!1,{fileName:D,lineNumber:133,columnNumber:25},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>i(e.id),className:`text-stone-400 hover:text-red-600 p-1 transition-colors`,"aria-label":`Remove ${e.name}`,children:(0,b.jsxDEV)($e,{className:`w-4 h-4`},void 0,!1,{fileName:D,lineNumber:141,columnNumber:27},void 0)},void 0,!1,{fileName:D,lineNumber:136,columnNumber:25},void 0)]},void 0,!0,{fileName:D,lineNumber:132,columnNumber:23},void 0),(0,b.jsxDEV)(`p`,{className:`text-[11px] text-stone-500 mt-0.5`,children:e.weightOrQuantity},void 0,!1,{fileName:D,lineNumber:144,columnNumber:23},void 0)]},void 0,!0,{fileName:D,lineNumber:131,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between mt-2 pt-2 border-t border-stone-100`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center border border-stone-200 rounded-md bg-stone-50`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>r(e.id,t-1),className:`p-1 hover:bg-stone-200 text-stone-600 transition-colors`,"aria-label":`Decrease quantity`,children:(0,b.jsxDEV)(ze,{className:`w-3 h-3`},void 0,!1,{fileName:D,lineNumber:156,columnNumber:27},void 0)},void 0,!1,{fileName:D,lineNumber:151,columnNumber:25},void 0),(0,b.jsxDEV)(`span`,{className:`px-2.5 text-xs font-semibold text-stone-800 tabular-nums`,children:t},void 0,!1,{fileName:D,lineNumber:158,columnNumber:25},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>r(e.id,t+1),className:`p-1 hover:bg-stone-200 text-stone-600 transition-colors`,"aria-label":`Increase quantity`,children:(0,b.jsxDEV)(Ve,{className:`w-3 h-3`},void 0,!1,{fileName:D,lineNumber:166,columnNumber:27},void 0)},void 0,!1,{fileName:D,lineNumber:161,columnNumber:25},void 0)]},void 0,!0,{fileName:D,lineNumber:150,columnNumber:23},void 0),(0,b.jsxDEV)(`div`,{className:`text-right`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs font-bold text-stone-900 tabular-nums`,children:[`₹`,e.price*t]},void 0,!0,{fileName:D,lineNumber:171,columnNumber:25},void 0),e.originalPrice>e.price&&(0,b.jsxDEV)(`span`,{className:`block text-[10px] text-stone-400 line-through tabular-nums`,children:[`₹`,e.originalPrice*t]},void 0,!0,{fileName:D,lineNumber:175,columnNumber:27},void 0)]},void 0,!0,{fileName:D,lineNumber:170,columnNumber:23},void 0)]},void 0,!0,{fileName:D,lineNumber:149,columnNumber:21},void 0)]},void 0,!0,{fileName:D,lineNumber:130,columnNumber:19},void 0)]},e.id,!0,{fileName:D,lineNumber:110,columnNumber:17},void 0))},void 0,!1,{fileName:D,lineNumber:91,columnNumber:11},void 0),e.length>0&&(0,b.jsxDEV)(`div`,{className:`p-5 border-t border-stone-200 bg-white space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`space-y-1.5 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex justify-between text-stone-600`,children:[(0,b.jsxDEV)(`span`,{children:`Remedies Subtotal`},void 0,!1,{fileName:D,lineNumber:192,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`font-semibold text-stone-900 tabular-nums`,children:[`₹`,a]},void 0,!0,{fileName:D,lineNumber:193,columnNumber:19},void 0)]},void 0,!0,{fileName:D,lineNumber:191,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex justify-between text-stone-600`,children:[(0,b.jsxDEV)(`span`,{children:`Express Insured Shipping`},void 0,!1,{fileName:D,lineNumber:196,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`font-semibold text-stone-900 tabular-nums`,children:o===0?(0,b.jsxDEV)(`span`,{className:`text-emerald-700`,children:`FREE`},void 0,!1,{fileName:D,lineNumber:198,columnNumber:42},void 0):`₹${o}`},void 0,!1,{fileName:D,lineNumber:197,columnNumber:19},void 0)]},void 0,!0,{fileName:D,lineNumber:195,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100`,children:[(0,b.jsxDEV)(`span`,{children:`Total Amount`},void 0,!1,{fileName:D,lineNumber:202,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-base tabular-nums`,children:[`₹`,s]},void 0,!0,{fileName:D,lineNumber:203,columnNumber:19},void 0)]},void 0,!0,{fileName:D,lineNumber:201,columnNumber:17},void 0)]},void 0,!0,{fileName:D,lineNumber:190,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 space-y-2`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>{n(!1),u(!0)},className:`w-full py-3 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-xs cursor-pointer`,children:[(0,b.jsxDEV)(`span`,{children:`Proceed to Checkout`},void 0,!1,{fileName:D,lineNumber:212,columnNumber:19},void 0),(0,b.jsxDEV)(me,{className:`w-4 h-4`},void 0,!1,{fileName:D,lineNumber:213,columnNumber:19},void 0)]},void 0,!0,{fileName:D,lineNumber:208,columnNumber:17},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>{let e=d();window.open(e,`_blank`,`noopener,noreferrer`)},className:`w-full py-2.5 px-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(Re,{className:`w-4 h-4`},void 0,!1,{fileName:D,lineNumber:220,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:[`Order Directly on WhatsApp (+91 `,y.phone,`)`]},void 0,!0,{fileName:D,lineNumber:221,columnNumber:19},void 0)]},void 0,!0,{fileName:D,lineNumber:216,columnNumber:17},void 0)]},void 0,!0,{fileName:D,lineNumber:207,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`text-center pt-1`,children:(0,b.jsxDEV)(`span`,{className:`text-[11px] text-stone-500`,children:`Cash on Delivery & Instant UPI Available at Doorstep`},void 0,!1,{fileName:D,lineNumber:226,columnNumber:17},void 0)},void 0,!1,{fileName:D,lineNumber:225,columnNumber:15},void 0)]},void 0,!0,{fileName:D,lineNumber:189,columnNumber:13},void 0)]},void 0,!0,{fileName:D,lineNumber:43,columnNumber:9},void 0)},void 0,!1,{fileName:D,lineNumber:42,columnNumber:7},void 0)]},void 0,!0,{fileName:D,lineNumber:35,columnNumber:5},void 0):null},O=`/app/applet/src/components/CheckoutModal.tsx`,st=()=>{let{cart:e,subtotal:t,shippingFee:n,grandTotal:r,isCheckoutModalOpen:i,setIsCheckoutModalOpen:a,placeOrder:o,generateWhatsAppOrderUrl:s}=oe(),[c,l]=(0,_.useState)({fullName:``,phoneNumber:``,addressLine1:``,addressLine2:``,city:``,state:`Gujarat`,pincode:``,notes:``,paymentMethod:`cod`}),[u,d]=(0,_.useState)({}),[f,p]=(0,_.useState)(!1);if(!i)return null;let m=()=>{let e={};return c.fullName.trim()||(e.fullName=`Please enter your full name`),c.phoneNumber.trim()?/^[0-9]{10}$/.test(c.phoneNumber.replace(/\D/g,``))||(e.phoneNumber=`Please enter a valid 10-digit mobile number`):e.phoneNumber=`Phone number is required for delivery`,c.addressLine1.trim()||(e.addressLine1=`Street address is required`),c.city.trim()||(e.city=`City name is required`),c.pincode.trim()?/^[0-9]{6}$/.test(c.pincode.trim())||(e.pincode=`Enter a valid 6-digit Indian PIN code`):e.pincode=`Pincode is required`,d(e),Object.keys(e).length===0};return(0,b.jsxDEV)(`div`,{className:`fixed inset-0 z-50 overflow-y-auto`,children:[(0,b.jsxDEV)(`div`,{onClick:()=>a(!1),className:`fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity`},void 0,!1,{fileName:O,lineNumber:81,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`flex min-h-full items-center justify-center p-4 sm:p-6 text-center`,children:(0,b.jsxDEV)(`div`,{className:`relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-stone-200`,children:[(0,b.jsxDEV)(`div`,{className:`p-6 border-b border-stone-200 bg-[#fbfaf7] flex items-center justify-between`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:(0,b.jsxDEV)(`span`,{className:`font-serif text-2xl font-bold text-stone-900`,children:`Checkout & Dispatch Order`},void 0,!1,{fileName:O,lineNumber:93,columnNumber:17},void 0)},void 0,!1,{fileName:O,lineNumber:92,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-500 mt-1`,children:`Dispatched from Amrutkalp Surat, Gujarat within 24–48 hours`},void 0,!1,{fileName:O,lineNumber:97,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:91,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>a(!1),className:`p-1.5 text-stone-400 hover:text-stone-900 rounded-lg transition-colors cursor-pointer`,children:(0,b.jsxDEV)(rt,{className:`w-5 h-5`},void 0,!1,{fileName:O,lineNumber:105,columnNumber:15},void 0)},void 0,!1,{fileName:O,lineNumber:101,columnNumber:13},void 0)]},void 0,!0,{fileName:O,lineNumber:90,columnNumber:11},void 0),(0,b.jsxDEV)(`form`,{onSubmit:e=>{e.preventDefault(),m()&&(p(!0),setTimeout(()=>{o(c),p(!1),a(!1)},400))},className:`p-6 space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between text-xs font-semibold text-stone-700`,children:[(0,b.jsxDEV)(`span`,{children:[`Selected Formulations (`,e.length,`)`]},void 0,!0,{fileName:O,lineNumber:114,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-900`,children:[`Total: ₹`,r]},void 0,!0,{fileName:O,lineNumber:115,columnNumber:17},void 0)]},void 0,!0,{fileName:O,lineNumber:113,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-1.5 text-xs text-stone-600 max-h-28 overflow-y-auto`,children:e.map(e=>(0,b.jsxDEV)(`div`,{className:`flex justify-between`,children:[(0,b.jsxDEV)(`span`,{className:`truncate max-w-xs`,children:[e.product.name,` (`,e.product.weightOrQuantity,`) x `,e.quantity]},void 0,!0,{fileName:O,lineNumber:120,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{className:`font-semibold tabular-nums`,children:[`₹`,e.product.price*e.quantity]},void 0,!0,{fileName:O,lineNumber:123,columnNumber:21},void 0)]},e.product.id,!0,{fileName:O,lineNumber:119,columnNumber:19},void 0))},void 0,!1,{fileName:O,lineNumber:117,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 border-t border-stone-200 flex justify-between text-xs text-stone-500`,children:[(0,b.jsxDEV)(`span`,{children:[`Shipping: `,n===0?(0,b.jsxDEV)(`strong`,{className:`text-emerald-700`,children:`FREE`},void 0,!1,{fileName:O,lineNumber:130,columnNumber:54},void 0):`₹${n}`]},void 0,!0,{fileName:O,lineNumber:130,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`Includes ₹5.51L Purity Guarantee`},void 0,!1,{fileName:O,lineNumber:131,columnNumber:17},void 0)]},void 0,!0,{fileName:O,lineNumber:129,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:112,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,b.jsxDEV)(`h3`,{className:`text-sm font-semibold text-stone-900 uppercase tracking-wide`,children:`1. Delivery Details`},void 0,!1,{fileName:O,lineNumber:137,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Full Name *`},void 0,!1,{fileName:O,lineNumber:143,columnNumber:19},void 0),(0,b.jsxDEV)(`input`,{type:`text`,value:c.fullName,onChange:e=>l({...c,fullName:e.target.value}),placeholder:`e.g. Ramesh Patel`,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:O,lineNumber:146,columnNumber:19},void 0),u.fullName&&(0,b.jsxDEV)(`span`,{className:`text-[11px] text-red-600 mt-1 block flex items-center gap-1`,children:[(0,b.jsxDEV)(xe,{className:`w-3 h-3`},void 0,!1,{fileName:O,lineNumber:155,columnNumber:23},void 0),` `,u.fullName]},void 0,!0,{fileName:O,lineNumber:154,columnNumber:21},void 0)]},void 0,!0,{fileName:O,lineNumber:142,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Mobile Number (for delivery tracking) *`},void 0,!1,{fileName:O,lineNumber:161,columnNumber:19},void 0),(0,b.jsxDEV)(`input`,{type:`tel`,value:c.phoneNumber,onChange:e=>l({...c,phoneNumber:e.target.value}),placeholder:`10-digit mobile number`,maxLength:10,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:O,lineNumber:164,columnNumber:19},void 0),u.phoneNumber&&(0,b.jsxDEV)(`span`,{className:`text-[11px] text-red-600 mt-1 block flex items-center gap-1`,children:[(0,b.jsxDEV)(xe,{className:`w-3 h-3`},void 0,!1,{fileName:O,lineNumber:174,columnNumber:23},void 0),` `,u.phoneNumber]},void 0,!0,{fileName:O,lineNumber:173,columnNumber:21},void 0)]},void 0,!0,{fileName:O,lineNumber:160,columnNumber:17},void 0)]},void 0,!0,{fileName:O,lineNumber:141,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Full House / Flat / Street Address *`},void 0,!1,{fileName:O,lineNumber:181,columnNumber:17},void 0),(0,b.jsxDEV)(`input`,{type:`text`,value:c.addressLine1,onChange:e=>l({...c,addressLine1:e.target.value}),placeholder:`e.g. B-402, Shivalik Residency, Near Circle`,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:O,lineNumber:184,columnNumber:17},void 0),u.addressLine1&&(0,b.jsxDEV)(`span`,{className:`text-[11px] text-red-600 mt-1 block flex items-center gap-1`,children:[(0,b.jsxDEV)(xe,{className:`w-3 h-3`},void 0,!1,{fileName:O,lineNumber:193,columnNumber:21},void 0),` `,u.addressLine1]},void 0,!0,{fileName:O,lineNumber:192,columnNumber:19},void 0)]},void 0,!0,{fileName:O,lineNumber:180,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-4`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`City / Town *`},void 0,!1,{fileName:O,lineNumber:200,columnNumber:19},void 0),(0,b.jsxDEV)(`input`,{type:`text`,value:c.city,onChange:e=>l({...c,city:e.target.value}),placeholder:`e.g. Surat`,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:O,lineNumber:203,columnNumber:19},void 0),u.city&&(0,b.jsxDEV)(`span`,{className:`text-[11px] text-red-600 mt-1 block flex items-center gap-1`,children:[(0,b.jsxDEV)(xe,{className:`w-3 h-3`},void 0,!1,{fileName:O,lineNumber:212,columnNumber:23},void 0),` `,u.city]},void 0,!0,{fileName:O,lineNumber:211,columnNumber:21},void 0)]},void 0,!0,{fileName:O,lineNumber:199,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`State *`},void 0,!1,{fileName:O,lineNumber:218,columnNumber:19},void 0),(0,b.jsxDEV)(`input`,{type:`text`,value:c.state,onChange:e=>l({...c,state:e.target.value}),placeholder:`e.g. Gujarat`,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:O,lineNumber:221,columnNumber:19},void 0)]},void 0,!0,{fileName:O,lineNumber:217,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Pincode *`},void 0,!1,{fileName:O,lineNumber:231,columnNumber:19},void 0),(0,b.jsxDEV)(`input`,{type:`text`,value:c.pincode,onChange:e=>l({...c,pincode:e.target.value}),placeholder:`6-digit PIN`,maxLength:6,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:O,lineNumber:234,columnNumber:19},void 0),u.pincode&&(0,b.jsxDEV)(`span`,{className:`text-[11px] text-red-600 mt-1 block flex items-center gap-1`,children:[(0,b.jsxDEV)(xe,{className:`w-3 h-3`},void 0,!1,{fileName:O,lineNumber:244,columnNumber:23},void 0),` `,u.pincode]},void 0,!0,{fileName:O,lineNumber:243,columnNumber:21},void 0)]},void 0,!0,{fileName:O,lineNumber:230,columnNumber:17},void 0)]},void 0,!0,{fileName:O,lineNumber:198,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Special Delivery Instructions (Optional)`},void 0,!1,{fileName:O,lineNumber:251,columnNumber:17},void 0),(0,b.jsxDEV)(`input`,{type:`text`,value:c.notes||``,onChange:e=>l({...c,notes:e.target.value}),placeholder:`e.g. Please call before delivery, deliver in morning`,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:O,lineNumber:254,columnNumber:17},void 0)]},void 0,!0,{fileName:O,lineNumber:250,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:136,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,b.jsxDEV)(`h3`,{className:`text-sm font-semibold text-stone-900 uppercase tracking-wide`,children:`2. Payment Preference`},void 0,!1,{fileName:O,lineNumber:266,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3`,children:[(0,b.jsxDEV)(`label`,{onClick:()=>l({...c,paymentMethod:`cod`}),className:`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${c.paymentMethod===`cod`?`border-stone-900 bg-stone-50 ring-1 ring-stone-900`:`border-stone-200 hover:border-stone-300`}`,children:[(0,b.jsxDEV)(`input`,{type:`radio`,name:`paymentMethod`,checked:c.paymentMethod===`cod`,onChange:()=>{},className:`mt-0.5`},void 0,!1,{fileName:O,lineNumber:279,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(_e,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:O,lineNumber:288,columnNumber:23},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs font-bold text-stone-900`,children:`Cash on Delivery (COD)`},void 0,!1,{fileName:O,lineNumber:289,columnNumber:23},void 0)]},void 0,!0,{fileName:O,lineNumber:287,columnNumber:21},void 0),(0,b.jsxDEV)(`p`,{className:`text-[11px] text-stone-500 mt-1`,children:`Pay cash or scan UPI with the courier executive at your doorstep.`},void 0,!1,{fileName:O,lineNumber:293,columnNumber:21},void 0)]},void 0,!0,{fileName:O,lineNumber:286,columnNumber:19},void 0)]},void 0,!0,{fileName:O,lineNumber:271,columnNumber:17},void 0),(0,b.jsxDEV)(`label`,{onClick:()=>l({...c,paymentMethod:`online`}),className:`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${c.paymentMethod===`online`?`border-stone-900 bg-stone-50 ring-1 ring-stone-900`:`border-stone-200 hover:border-stone-300`}`,children:[(0,b.jsxDEV)(`input`,{type:`radio`,name:`paymentMethod`,checked:c.paymentMethod===`online`,onChange:()=>{},className:`mt-0.5`},void 0,!1,{fileName:O,lineNumber:307,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(Te,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:O,lineNumber:316,columnNumber:23},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs font-bold text-stone-900`,children:`Online UPI / Pre-Paid`},void 0,!1,{fileName:O,lineNumber:317,columnNumber:23},void 0)]},void 0,!0,{fileName:O,lineNumber:315,columnNumber:21},void 0),(0,b.jsxDEV)(`p`,{className:`text-[11px] text-stone-500 mt-1`,children:`Instant UPI payment confirmation via WhatsApp or Merchant QR.`},void 0,!1,{fileName:O,lineNumber:321,columnNumber:21},void 0)]},void 0,!0,{fileName:O,lineNumber:314,columnNumber:19},void 0)]},void 0,!0,{fileName:O,lineNumber:299,columnNumber:17},void 0)]},void 0,!0,{fileName:O,lineNumber:270,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:265,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3`,children:[(0,b.jsxDEV)(`button`,{type:`submit`,disabled:f,className:`w-full sm:flex-1 py-3 px-5 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-xs cursor-pointer disabled:opacity-50`,children:f?(0,b.jsxDEV)(`span`,{children:`Processing Order...`},void 0,!1,{fileName:O,lineNumber:337,columnNumber:19},void 0):(0,b.jsxDEV)(b.Fragment,{children:[(0,b.jsxDEV)(ve,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:O,lineNumber:340,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{children:[`Confirm Order (Pay ₹`,r,`)`]},void 0,!0,{fileName:O,lineNumber:341,columnNumber:21},void 0)]},void 0,!0,{fileName:O,lineNumber:339,columnNumber:19},void 0)},void 0,!1,{fileName:O,lineNumber:331,columnNumber:15},void 0),(0,b.jsxDEV)(`button`,{type:`button`,onClick:()=>{if(!m())return;let e=s(c);o(c),a(!1),window.open(e,`_blank`,`noopener,noreferrer`)},className:`w-full sm:w-auto py-3 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer whitespace-nowrap`,children:[(0,b.jsxDEV)(Re,{className:`w-4 h-4`},void 0,!1,{fileName:O,lineNumber:351,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`Submit & Order via WhatsApp`},void 0,!1,{fileName:O,lineNumber:352,columnNumber:17},void 0)]},void 0,!0,{fileName:O,lineNumber:346,columnNumber:15},void 0)]},void 0,!0,{fileName:O,lineNumber:330,columnNumber:13},void 0)]},void 0,!0,{fileName:O,lineNumber:109,columnNumber:11},void 0)]},void 0,!0,{fileName:O,lineNumber:87,columnNumber:9},void 0)},void 0,!1,{fileName:O,lineNumber:86,columnNumber:7},void 0)]},void 0,!0,{fileName:O,lineNumber:79,columnNumber:5},void 0)},k=`/app/applet/src/components/OrderConfirmationModal.tsx`,ct=()=>{let{activeOrder:e,setActiveOrder:t}=oe();return e?(0,b.jsxDEV)(`div`,{className:`fixed inset-0 z-50 overflow-y-auto`,children:[(0,b.jsxDEV)(`div`,{onClick:()=>t(null),className:`fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity`},void 0,!1,{fileName:k,lineNumber:23,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`flex min-h-full items-center justify-center p-4 sm:p-6 text-center`,children:(0,b.jsxDEV)(`div`,{className:`relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-stone-200`,children:[(0,b.jsxDEV)(`div`,{className:`p-6 bg-[#111915] text-white flex items-start justify-between`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400`,children:(0,b.jsxDEV)(Se,{className:`w-6 h-6`},void 0,!1,{fileName:k,lineNumber:35,columnNumber:17},void 0)},void 0,!1,{fileName:k,lineNumber:34,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-[11px] font-semibold tracking-wider text-amber-300 uppercase`,children:`Order Successfully Placed`},void 0,!1,{fileName:k,lineNumber:38,columnNumber:17},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-2xl font-bold tracking-tight`,children:[`Thank You, `,e.customer.fullName]},void 0,!0,{fileName:k,lineNumber:41,columnNumber:17},void 0)]},void 0,!0,{fileName:k,lineNumber:37,columnNumber:15},void 0)]},void 0,!0,{fileName:k,lineNumber:33,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>t(null),className:`p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer`,children:(0,b.jsxDEV)(rt,{className:`w-5 h-5`},void 0,!1,{fileName:k,lineNumber:50,columnNumber:15},void 0)},void 0,!1,{fileName:k,lineNumber:46,columnNumber:13},void 0)]},void 0,!0,{fileName:k,lineNumber:32,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-center justify-between text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-emerald-900 font-semibold`,children:[(0,b.jsxDEV)(tt,{className:`w-4 h-4 text-emerald-700`},void 0,!1,{fileName:k,lineNumber:59,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`Status: Preparing for Fast Dispatch`},void 0,!1,{fileName:k,lineNumber:60,columnNumber:17},void 0)]},void 0,!0,{fileName:k,lineNumber:58,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`text-right`,children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 text-[10px] block`,children:`Order Identifier`},void 0,!1,{fileName:k,lineNumber:63,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{className:`font-mono font-bold text-stone-900 text-xs`,children:e.orderId},void 0,!1,{fileName:k,lineNumber:64,columnNumber:17},void 0)]},void 0,!0,{fileName:k,lineNumber:62,columnNumber:15},void 0)]},void 0,!0,{fileName:k,lineNumber:57,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`text-xs space-y-1.5 p-3.5 bg-stone-50 rounded-xl border border-stone-200`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-1.5 text-stone-500 font-medium`,children:[(0,b.jsxDEV)(Le,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:k,lineNumber:71,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`Delivery Address`},void 0,!1,{fileName:k,lineNumber:72,columnNumber:17},void 0)]},void 0,!0,{fileName:k,lineNumber:70,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`font-semibold text-stone-900`,children:[e.customer.addressLine1,e.customer.addressLine2?`, ${e.customer.addressLine2}`:``]},void 0,!0,{fileName:k,lineNumber:74,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-600`,children:[e.customer.city,`, `,e.customer.state,` - `,e.customer.pincode]},void 0,!0,{fileName:k,lineNumber:78,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-600`,children:[`Phone: `,(0,b.jsxDEV)(`strong`,{children:e.customer.phoneNumber},void 0,!1,{fileName:k,lineNumber:82,columnNumber:24},void 0),` · Payment: `,(0,b.jsxDEV)(`strong`,{className:`uppercase`,children:e.customer.paymentMethod},void 0,!1,{fileName:k,lineNumber:82,columnNumber:87},void 0)]},void 0,!0,{fileName:k,lineNumber:81,columnNumber:15},void 0)]},void 0,!0,{fileName:k,lineNumber:69,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,b.jsxDEV)(`h4`,{className:`text-xs font-semibold uppercase tracking-wider text-stone-600`,children:`Remedy Package Contents`},void 0,!1,{fileName:k,lineNumber:88,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`divide-y divide-stone-100 text-xs`,children:e.items.map(e=>(0,b.jsxDEV)(`div`,{className:`py-2.5 flex justify-between items-center`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`font-bold text-stone-900`,children:e.product.name},void 0,!1,{fileName:k,lineNumber:95,columnNumber:23},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:[e.product.weightOrQuantity,` × `,e.quantity]},void 0,!0,{fileName:k,lineNumber:96,columnNumber:23},void 0)]},void 0,!0,{fileName:k,lineNumber:94,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{className:`font-semibold text-stone-900 tabular-nums`,children:[`₹`,e.product.price*e.quantity]},void 0,!0,{fileName:k,lineNumber:100,columnNumber:21},void 0)]},e.product.id,!0,{fileName:k,lineNumber:93,columnNumber:19},void 0))},void 0,!1,{fileName:k,lineNumber:91,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 border-t border-stone-200 space-y-1 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex justify-between text-stone-600`,children:[(0,b.jsxDEV)(`span`,{children:`Subtotal`},void 0,!1,{fileName:k,lineNumber:109,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`tabular-nums`,children:[`₹`,e.subtotal]},void 0,!0,{fileName:k,lineNumber:110,columnNumber:19},void 0)]},void 0,!0,{fileName:k,lineNumber:108,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex justify-between text-stone-600`,children:[(0,b.jsxDEV)(`span`,{children:`Shipping`},void 0,!1,{fileName:k,lineNumber:113,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:e.shipping===0?`FREE`:`₹${e.shipping}`},void 0,!1,{fileName:k,lineNumber:114,columnNumber:19},void 0)]},void 0,!0,{fileName:k,lineNumber:112,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100`,children:[(0,b.jsxDEV)(`span`,{children:`Total Amount Paid / Due on Delivery`},void 0,!1,{fileName:k,lineNumber:117,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`tabular-nums`,children:[`₹`,e.total]},void 0,!0,{fileName:k,lineNumber:118,columnNumber:19},void 0)]},void 0,!0,{fileName:k,lineNumber:116,columnNumber:17},void 0)]},void 0,!0,{fileName:k,lineNumber:107,columnNumber:15},void 0)]},void 0,!0,{fileName:k,lineNumber:87,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950 space-y-1`,children:[(0,b.jsxDEV)(`strong`,{className:`block font-semibold`,children:`What happens next?`},void 0,!1,{fileName:k,lineNumber:125,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-700 leading-relaxed text-[11px]`,children:`Your package is being hand-packed at our Surat dispensary with authentic batch seals. You will receive an SMS and WhatsApp tracking update from Amrutkalp as soon as the courier scans the parcel.`},void 0,!1,{fileName:k,lineNumber:126,columnNumber:15},void 0)]},void 0,!0,{fileName:k,lineNumber:124,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 flex flex-col sm:flex-row items-center gap-3`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>{let t=`Hello Amrutkalp, I have placed order ${e.orderId} for ₹${e.total}. Please provide shipment tracking updates.`;window.open(`https://wa.me/${y.whatsappNumber}?text=${encodeURIComponent(t)}`,`_blank`,`noopener,noreferrer`)},className:`w-full sm:flex-1 py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer`,children:[(0,b.jsxDEV)(Re,{className:`w-4 h-4`},void 0,!1,{fileName:k,lineNumber:137,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:[`Track via WhatsApp (+91 `,y.phone,`)`]},void 0,!0,{fileName:k,lineNumber:138,columnNumber:17},void 0)]},void 0,!0,{fileName:k,lineNumber:133,columnNumber:15},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>{window.print()},className:`w-full sm:w-auto py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 text-xs cursor-pointer`,children:[(0,b.jsxDEV)(He,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:k,lineNumber:145,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`Print Receipt`},void 0,!1,{fileName:k,lineNumber:146,columnNumber:17},void 0)]},void 0,!0,{fileName:k,lineNumber:141,columnNumber:15},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>t(null),className:`w-full sm:w-auto py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs cursor-pointer`,children:`Done`},void 0,!1,{fileName:k,lineNumber:149,columnNumber:15},void 0)]},void 0,!0,{fileName:k,lineNumber:132,columnNumber:13},void 0)]},void 0,!0,{fileName:k,lineNumber:54,columnNumber:11},void 0)]},void 0,!0,{fileName:k,lineNumber:29,columnNumber:9},void 0)},void 0,!1,{fileName:k,lineNumber:28,columnNumber:7},void 0)]},void 0,!0,{fileName:k,lineNumber:21,columnNumber:5},void 0):null},lt=`/app/applet/src/components/WhatsAppFloat.tsx`,ut=()=>{let e=`https://wa.me/${y.whatsappNumber}?text=Hello%20Amrutkalp%20team%2C%20I%20would%20like%20to%20inquire%20about%20Shilajit%20and%20Ayurvedic%20pain%20relief%20remedies.`;return(0,b.jsxDEV)(`div`,{className:`fixed bottom-5 right-5 z-30`,children:(0,b.jsxDEV)(`a`,{href:e,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Direct WhatsApp Consultation with Amrutkalp Vaidya`,className:`group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-emerald-500/50`,children:[(0,b.jsxDEV)(`div`,{className:`relative`,children:[(0,b.jsxDEV)(Re,{className:`w-5 h-5 fill-white text-emerald-600`},void 0,!1,{fileName:lt,lineNumber:18,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{className:`absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-emerald-600`},void 0,!1,{fileName:lt,lineNumber:19,columnNumber:11},void 0)]},void 0,!0,{fileName:lt,lineNumber:17,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`text-left hidden sm:block`,children:[(0,b.jsxDEV)(`span`,{className:`block text-[11px] font-bold leading-tight tracking-wide`,children:`Chat on WhatsApp`},void 0,!1,{fileName:lt,lineNumber:22,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{className:`block text-[9px] text-emerald-100 font-medium leading-none`,children:[`Direct Helpline: `,y.phone]},void 0,!0,{fileName:lt,lineNumber:25,columnNumber:11},void 0)]},void 0,!0,{fileName:lt,lineNumber:21,columnNumber:9},void 0)]},void 0,!0,{fileName:lt,lineNumber:10,columnNumber:7},void 0)},void 0,!1,{fileName:lt,lineNumber:9,columnNumber:5},void 0)},dt={"package.json":`{
  "name": "react-example",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite --port=3000 --host=0.0.0.0",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist server.js",
    "lint": "tsc --noEmit"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@tailwindcss/vite": "^4.3.3",
    "@vitejs/plugin-react": "^6.1.1",
    "lucide-react": "^0.546.0",
    "react": "^19.0.1",
    "react-dom": "^19.0.1",
    "vite": "^8.3.0",
    "express": "^4.21.2",
    "dotenv": "^17.2.3",
    "motion": "^12.23.24"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@types/react": "^19.3.0",
    "@types/react-dom": "^19.3.0",
    "autoprefixer": "^10.4.21",
    "esbuild": "^0.25.0",
    "tailwindcss": "^4.3.3",
    "tsx": "^4.21.0",
    "typescript": "^7.0.2",
    "@types/express": "^4.17.21"
  }
}
`,"index.html":`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>AMRUTKALP™ | Pure Ayurvedic Herbals & Himalayan Shilajit</title>
    <meta name="description" content="Official store for AMRUTKALP Himalayan Shilajit & Authentic Ayurvedic Formulations. Pure, lab-tested, traditional remedies with the ₹5.51 Lakh purity challenge." />
    <meta property="og:title" content="AMRUTKALP™ | Pure Ayurvedic Herbals & Himalayan Shilajit" />
    <meta property="og:description" content="Discover pure Himalayan Shilajit resin (20g) & Amrutvati Ayurvedic pain relief. Ethically sourced, lab-tested, 100% Shastriya Ayurveda from Surat, Gujarat." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="/assets/products/sanjivani-shilajit-pure.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="theme-color" content="#111915" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "AMRUTKALP - Pure Ayurvedic Herbals",
      "image": "/assets/products/sanjivani-shilajit-pure.jpg",
      "telephone": "+91-8141323395",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "108, Biz hub shopping near 99 shopping amroli cross road",
        "addressLocality": "Amroli, Surat",
        "addressRegion": "Gujarat",
        "postalCode": "394107",
        "addressCountry": "IN"
      },
      "priceRange": "₹599 - ₹1249",
      "openingHours": "Mo-Sa 09:30-20:00"
    }
    <\/script>
  </head>
  <body class="bg-[#fbfaf7] text-stone-900 antialiased selection:bg-amber-100 selection:text-amber-900">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"><\/script>
  </body>
</html>
`,"src/index.css":`@import "tailwindcss";

@layer base {
  :root {
    --font-serif: 'Cormorant Garamond', Georgia, serif;
    --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  }

  body {
    font-family: var(--font-sans);
    color: #1c1917;
    background-color: #fbfaf7;
  }

  h1, h2, h3, .font-serif {
    font-family: var(--font-serif);
  }
}

/* Custom scrollbar and subtle transitions */
html {
  scroll-behavior: smooth;
}

::selection {
  background-color: #fef3c7;
  color: #78350f;
}
`,"src/App.tsx":`import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AuthenticityPage } from './pages/AuthenticityPage';
import { IngredientsPage } from './pages/IngredientsPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { PoliciesPage } from './pages/PoliciesPage';

import { PRODUCTS, GET_PRODUCT_BY_SLUG } from './data/products';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);

  // Sync with browser URL hash for friendly navigation and back button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash.startsWith('product/')) {
        const slug = hash.replace('product/', '');
        setSelectedProductSlug(slug);
        setCurrentTab('product-detail');
      } else if (hash) {
        setCurrentTab(hash);
        setSelectedProductSlug(null);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectProduct = (slug: string) => {
    setSelectedProductSlug(slug);
    setCurrentTab('product-detail');
    window.location.hash = \`product/\${slug}\`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSetTab = (tab: string) => {
    setCurrentTab(tab);
    setSelectedProductSlug(null);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeProduct = selectedProductSlug ? GET_PRODUCT_BY_SLUG(selectedProductSlug) : null;

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#fbfaf7] text-stone-900 selection:bg-amber-100 selection:text-amber-950">
        
        {/* Persistent Top Navigation Bar */}
        <Header
          currentTab={currentTab}
          setCurrentTab={handleSetTab}
          onSelectProduct={handleSelectProduct}
        />

        {/* Dynamic Multi-Page Router View */}
        <main className="flex-1">
          {currentTab === 'home' && (
            <HomePage
              setCurrentTab={handleSetTab}
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentTab === 'shop' && (
            <ShopPage
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentTab === 'product-detail' && activeProduct && (
            <ProductDetailPage
              product={activeProduct}
              onBackToShop={() => handleSetTab('shop')}
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentTab === 'authenticity' && (
            <AuthenticityPage
              onGoToShop={() => handleSetTab('shop')}
            />
          )}

          {currentTab === 'ingredients' && (
            <IngredientsPage
              onGoToShop={() => handleSetTab('shop')}
            />
          )}

          {currentTab === 'about' && (
            <AboutPage
              onGoToShop={() => handleSetTab('shop')}
              onGoToContact={() => handleSetTab('contact')}
            />
          )}

          {currentTab === 'journal' && (
            <JournalPage
              onSelectProduct={handleSelectProduct}
            />
          )}

          {currentTab === 'contact' && (
            <ContactPage />
          )}

          {currentTab === 'policies' && (
            <PoliciesPage />
          )}
        </main>

        {/* Persistent Footer */}
        <Footer
          setCurrentTab={handleSetTab}
          onSelectProduct={handleSelectProduct}
        />

        {/* Global Modals & Float Elements */}
        <CartDrawer />
        <CheckoutModal />
        <OrderConfirmationModal />
        <WhatsAppFloat />

      </div>
    </CartProvider>
  );
}
`,"src/types/index.ts":`export interface IngredientDetail {
  name: string;
  botanicalName?: string;
  role: string;
  source?: string;
  percentage?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  sanskritName?: string;
  category: 'vitality' | 'pain-relief' | 'bundle' | 'general';
  categoryLabel: string;
  price: number;
  originalPrice: number;
  discountPercent: number;
  weightOrQuantity: string;
  servingCount: string;
  rating: number;
  reviewCount: number;
  images: string[];
  primaryImage: string;
  shortDescription: string;
  fullDescription: string;
  campaignKicker?: string;
  campaignSlogan?: string;
  keyHighlights: string[];
  verifiedBenefits: string[];
  safetyPrecautions: string[];
  howToUse: {
    timing: string;
    dosage: string;
    liquidVehicle: string;
    instructions: string[];
  };
  ingredients: IngredientDetail[];
  authenticityTests: {
    title: string;
    description: string;
    result: string;
  }[];
  transparencyStatus: {
    verifiedBy: string;
    originLocation: string;
    batchStatus: string;
    pendingLaboratoryReports?: string;
  };
  inStock: boolean;
  freeShipping: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerOrderDetails {
  fullName: string;
  phoneNumber: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  notes?: string;
  paymentMethod: 'cod' | 'online' | 'whatsapp';
}

export interface PlacedOrder {
  orderId: string;
  items: CartItem[];
  customer: CustomerOrderDetails;
  subtotal: number;
  shipping: number;
  total: number;
  createdAt: string;
  status: 'confirmed' | 'dispatched' | 'delivered';
}

export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  excerpt: string;
  content: {
    sectionHeading: string;
    body: string[];
  }[];
}
`,"src/data/brand.ts":`export const BRAND = {
  name: 'AMRUTKALP',
  tagline: 'Pure Ayurvedic Herbals',
  subheading: 'Shastriya Ayurvedic Purity & Himalayan Mineral Science',
  phone: '8141323395',
  phoneFormatted: '+91 81413 23395',
  whatsappNumber: '918141323395',
  email: 'care@amrutkalpayurved.com', // fallback contact channel
  address: {
    shop: '108, Biz Hub Shopping',
    landmark: 'Near 99 Shopping, Amroli Cross Road',
    area: 'Amroli',
    city: 'Surat',
    state: 'Gujarat',
    pincode: '394107',
    country: 'India',
    full: '108, Biz Hub Shopping, Near 99 Shopping, Amroli Cross Road, Amroli, Surat, Gujarat 394107'
  },
  social: {
    instagram: 'https://instagram.com/pure_ayurvedic_herbal',
    instagramHandle: '@pure_ayurvedic_herbal',
    facebook: 'https://facebook.com/amrutkalp.ayurved',
    facebookName: 'Amrutkalp ayurved'
  },
  guarantee: {
    amount: '₹5,51,000',
    headlineGujarati: 'ડુપ્લીકેટ સાબિત કરીને બતાવો તો મળશે ₹5,51,000 ઈનામ*',
    headlineHindi: 'डुप्लीकेट साबित करके दिखाओ तो मिलेगा ₹5,51,000 का इनाम*',
    headlineEnglish: '₹5,51,000 Reward if proven fake, synthetic, or adulterated in any certified lab.',
    description: 'We stake our complete reputation on the untampered purity of our Himalayan Shilajit resin. If any NABL-accredited laboratory finds chemical additives, heavy metal toxins, or adulteration, Amrutkalp will honour this public cash reward.'
  },
  shippingThreshold: 699
};
`,"src/data/products.ts":`import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'sanjivani-himalayan-shilajit',
    slug: 'sanjivani-shilajit',
    name: 'Sanjivani Pure Himalayan Shilajit',
    sanskritName: 'अमृतकल्प संजीवनी शुद्ध शिलाजीत',
    category: 'vitality',
    categoryLabel: 'Vitality & Stamina',
    price: 799,
    originalPrice: 2000,
    discountPercent: 60,
    weightOrQuantity: '20 Grams',
    servingCount: '40–50 Servings (30-day Supply)',
    rating: 4.9,
    reviewCount: 142,
    images: [
      '/assets/products/sanjivani-shilajit-pure.jpg'
    ],
    primaryImage: '/assets/products/sanjivani-shilajit-pure.jpg',
    shortDescription: 'Wild-harvested mineral pitch extracted from high Himalayan altitudes (16,000+ ft). Naturally rich in 84+ ionic trace minerals and >60% Fulvic Acid.',
    fullDescription: 'Amrutkalp Sanjivani is Grade A+ pure Himalayan Shilajit resin, traditionally purified through classical Shodhana methods using pure water and sun drying (Surya Tapi). Backed by Amrutkalp’s open ₹5,51,000 public authenticity challenge, every jar delivers raw botanical-mineral vitality without synthetic thickeners, preservatives, heavy metals, or added sugar.',
    campaignKicker: 'The Purity Challenge Winner',
    campaignSlogan: 'PURE POWER. PURE SHILAJIT.',
    keyHighlights: [
      'High-altitude Himalayan wild harvest (16,000–18,000 ft)',
      'Rich in bioactive Fulvic Acid (>60%) and Humic minerals',
      'Classical Surya-Tapi purification preserving living bio-enzymes',
      'Backed by our open ₹5,51,000 laboratory authenticity challenge',
      'Free specialized brass dosage spoon included in every box'
    ],
    verifiedBenefits: [
      'Promotes cellular ATP production for steady all-day stamina without jittery caffeine crashes',
      'Enhances natural testosterone levels, vitality, and muscle recovery speed',
      'Fulvic acid acts as an organic chelator, improving nutrient bioavailability across cell membranes',
      'Supports mental clarity, cognitive endurance, and stress adaptation (Rasayana)',
      'Assists healthy immune cell responses and cellular longevity'
    ],
    safetyPrecautions: [
      'Do not consume with boiling liquids; dissolve only in lukewarm water, warm milk, or green tea.',
      'Not recommended for individuals with diagnosed active kidney stone disorders (high uric acid) without medical advice.',
      'Store in a cool, dry place. Resin naturally solidifies when cold and softens at ambient temperatures (a hallmark of authentic Shilajit).'
    ],
    howToUse: {
      timing: 'Every morning on an empty stomach (or 30 mins before evening workout)',
      dosage: 'Pea-sized portion (300 mg to 500 mg) using the included spoon',
      liquidVehicle: '150ml of lukewarm water, warm cow’s milk, or green tea',
      instructions: [
        'Scoop a small pea-sized portion of resin onto the tip of the spoon.',
        'Stir gently into lukewarm water or warm milk until completely dissolved.',
        'Notice the golden amber to deep mahogany liquid color with an earthy herbal aroma.',
        'Drink while warm. Maintain consistent daily intake for 6 to 8 weeks for deep restorative effects.'
      ]
    },
    ingredients: [
      {
        name: 'Pure Himalayan Shilajit Resin (Asphaltum punjabianum)',
        botanicalName: 'Asphaltum punjabianum / Mineral Pitch',
        role: 'Primary active Rasayana compound',
        source: 'High-altitude Himalayan rock faces',
        percentage: '100% pure purified resin (0% additives)'
      },
      {
        name: 'Bioactive Fulvic Acid',
        role: 'Cellular transport molecule & antioxidant',
        source: 'Naturally occurring in purified resin',
        percentage: '> 60% w/w content'
      },
      {
        name: 'Ionic Trace Minerals (Zinc, Magnesium, Iron, Selenium)',
        role: 'Metabolic co-factors and cellular rehydration',
        source: 'Centuries-old decomposed medicinal alpine flora',
        percentage: '84+ ionic mineral profile'
      }
    ],
    authenticityTests: [
      {
        title: 'Complete Water Solubility Test',
        description: 'Authentic Shilajit dissolves smoothly in lukewarm liquid without leaving sand, grease, or synthetic sedimentation.',
        result: '100% clean translucent amber dissolution'
      },
      {
        title: 'Flame / Burn Test',
        description: 'Pure Shilajit bubbles and expands into a white ash structure without producing chemical sparks or toxic smoke.',
        result: 'Zero flammable ignition, pure mineral ash formation'
      },
      {
        title: 'Thermal Flexibility Test',
        description: 'Genuine resin hardens in refrigeration and becomes pliable, tacky, and glossy at body/room temperature.',
        result: 'Responsive natural rheology without artificial gums'
      }
    ],
    transparencyStatus: {
      verifiedBy: 'Classical Shodhana & Third-Party Chemical Analysis',
      originLocation: 'Western Himalayan Rock Formations (16,000 ft)',
      batchStatus: 'Fresh Batch Q4-2026',
      pendingLaboratoryReports: 'Individual batch Heavy Metals & Microbial Certificate of Analysis (COA) dispatched upon WhatsApp request to 8141323395.'
    },
    inStock: true,
    freeShipping: true
  },
  {
    id: 'amrutvati-ayurvedic-pain-relief',
    slug: 'amrutvati-pain-relief',
    name: 'Amrutvati Shuddh Ayurvedic Pain Relief',
    sanskritName: 'अमृतकल्प अमृतवटी (वातशामक व दर्द निवारक)',
    category: 'pain-relief',
    categoryLabel: 'Joint Health & Mobility',
    price: 599,
    originalPrice: 1200,
    discountPercent: 50,
    weightOrQuantity: '30 Tablets',
    servingCount: '15–30 Days (1–2 Tablets Daily)',
    rating: 4.8,
    reviewCount: 96,
    images: [],
    primaryImage: '',
    shortDescription: 'Classical Ayurvedic tablet formulation engineered for morning lower back pain (कमर दर्द), cervical spine stiffness, sciatica discomfort, and joint mobility.',
    fullDescription: 'Amrutvati is formulated around the principle "#आराम होगा तो काम होगा" (If there is relief, there is productivity). Morning lumbar stiffness and aching joints disrupt your entire workday. Amrutvati harnesses traditional Vata-pacifying herbs—Shallaki, Shuddha Guggulu, Rasna, and Ashwagandha—to soothe deep musculoskeletal inflammation without gastric burning or dependence.',
    campaignKicker: '#आराम होगा तो काम होगा',
    campaignSlogan: 'सुबह उठकर कमर में दर्द? यह है वो दर्द निवारक जो आपको चाहिए',
    keyHighlights: [
      'Targeted for morning lumbar stiffness and chronic lower back pain',
      'Provides relief for neck/cervical discomfort and shoulder tension',
      'Non-drowsy, 100% Ayurvedic herb formulation without NSAIDs or steroids',
      'Supports cartilage nutrition and smooth joint synovial lubrication',
      'Resealable multi-barrier pouch preserves active herbal oils'
    ],
    verifiedBenefits: [
      'Alleviates morning lumbar rigidity, enabling comfortable waking and standing',
      'Soothes sciatic nerve irritability and radiating leg tension',
      'Reduces inflammatory cytokines in synovial joint capsules (Boswellic acids)',
      'Aids desk workers and commuters experiencing postural spine strain',
      'Promotes deep restorative musculoskeletal relaxation overnight'
    ],
    safetyPrecautions: [
      'Always take after meals with lukewarm water; do not take on an entirely empty stomach.',
      'Consult an Ayurvedic Vaidya or physician if currently pregnant or undergoing chemotherapy.',
      'Keep pouch tightly sealed away from direct humidity.'
    ],
    howToUse: {
      timing: 'Twice daily after meals (Post-Breakfast and Post-Dinner)',
      dosage: '1 tablet twice daily for acute stiffness; 1 tablet daily for maintenance',
      liquidVehicle: 'Lukewarm water or warm milk',
      instructions: [
        'Take 1 tablet 20–30 minutes after your morning breakfast.',
        'Swallow with a full glass of lukewarm water.',
        'Repeat post-dinner for individuals with severe nocturnal or morning stiffness.',
        'Continue for at least 3 weeks alongside light morning lumbar stretches for optimal mobility.'
      ]
    },
    ingredients: [
      {
        name: 'Kunduru / Shallaki (Boswellia serrata)',
        botanicalName: 'Boswellia serrata (65% Boswellic acids)',
        role: 'Inhibits 5-LOX enzyme, soothing joint inflammation',
        source: 'Sustainably tapped organic tree resin'
      },
      {
        name: 'Shuddha Guggulu (Commiphora mukul)',
        botanicalName: 'Commiphora mukul',
        role: 'Vata-hara agent, stimulates joint toxin clearance (Ama)',
        source: 'Classical Shuddha gum resin'
      },
      {
        name: 'Rasna (Pluchea lanceolata)',
        botanicalName: 'Pluchea lanceolata',
        role: 'Traditional Ayurvedic herb for sciatic and lumbar discomfort',
        source: 'Sun-dried rhizome extract'
      },
      {
        name: 'Ashwagandha (Withania somnifera)',
        botanicalName: 'Withania somnifera',
        role: 'Nourishes deep connective muscle tissue and calms nerve strain',
        source: 'Nagori organic root'
      },
      {
        name: 'Shunthi & Maricha (Zingiber officinale & Piper nigrum)',
        role: 'Digestive bio-enhancers (Deepana/Pachana) boosting herbal absorption',
        source: 'Pure sun-dried whole spices'
      }
    ],
    authenticityTests: [
      {
        title: 'Zero Chemical Adulteration Screen',
        description: 'Verified free from synthetic analgesics, steroid compounds (prednisolone/dexamethasone), and heavy metals.',
        result: '100% Pure Botanical Formulation'
      },
      {
        title: 'Microbial & Moisture Integrity',
        description: 'Tablets processed in humidity-controlled cleanrooms to protect delicate volatile phyto-compounds.',
        result: 'Passes Indian Pharmacopoeia standard'
      }
    ],
    transparencyStatus: {
      verifiedBy: 'Classical Ayurvedic Text Guidance & Clean Extraction',
      originLocation: 'Gujarat Apothecary Production',
      batchStatus: 'Fresh Batch Q4-2026',
      pendingLaboratoryReports: 'Standard Certificate of Analysis available upon direct request via WhatsApp.'
    },
    inStock: true,
    freeShipping: false
  },
  {
    id: 'amrutkalp-vitality-mobility-bundle',
    slug: 'vitality-mobility-bundle',
    name: 'Sanjivani & Amrutvati Complete Wellness Bundle',
    sanskritName: 'अमृतकल्प संपूर्ण आरोग्य किट',
    category: 'bundle',
    categoryLabel: 'Value Pack',
    price: 1249,
    originalPrice: 3200,
    discountPercent: 61,
    weightOrQuantity: '20g Shilajit + 30 Tablets Amrutvati',
    servingCount: 'Full 30-Day Restorative Course',
    rating: 5.0,
    reviewCount: 68,
    images: [],
    primaryImage: '',
    shortDescription: 'The ultimate synergistic regimen: Sanjivani Shilajit for cellular energy and stamina, paired with Amrutvati to dissolve morning stiffness and back discomfort.',
    fullDescription: 'Our most recommended customer regimen. While Amrutvati soothes inflammation in the joints, lumbar vertebrae, and neuromuscular pathways, Sanjivani Shilajit replenishes the deeper Dhatus (tissues) with 84+ essential trace minerals, accelerating tissue repair and building lasting stamina.',
    campaignKicker: 'Complete Ayurvedic Care',
    campaignSlogan: 'Reclaim Active Energy & Pain-Free Mornings',
    keyHighlights: [
      'Includes 1x Sanjivani Pure Himalayan Shilajit (20g)',
      'Includes 1x Amrutvati Shuddh Ayurvedic Tablets (30 Pcs)',
      'Includes 1x Handcrafted Brass Measuring Spoon',
      'Free Express Delivery Across India with real-time tracking',
      'Save over ₹1,950 compared to standard individual pricing'
    ],
    verifiedBenefits: [
      'Dual-action Ayurvedic support: morning energy surge + sustained joint lubrication',
      'Ideal for active individuals, aging parents, and professionals with physical or desk stress',
      'Reduces dependence on quick-fix pain suppressants',
      'Holistic Rasayana therapy addressing root causes rather than temporary symptoms'
    ],
    safetyPrecautions: [
      'Follow individual product instructions for optimal timing.',
      'Consult our Ayurvedic helpline if you are taking blood thinning medication.'
    ],
    howToUse: {
      timing: 'Morning: Sanjivani Shilajit; Evening/Post-Meals: Amrutvati',
      dosage: '1 pea-sized scoop Shilajit in the AM, 1 tablet Amrutvati post-dinner',
      liquidVehicle: 'Lukewarm water or warm milk',
      instructions: [
        'Morning: Dissolve pea-sized Sanjivani Shilajit in warm water upon waking.',
        'Night: Take 1 Amrutvati tablet with lukewarm water 30 minutes after dinner.',
        'Maintain this consistent daily rhythm for 30 consecutive days for cumulative benefits.'
      ]
    },
    ingredients: [
      {
        name: 'Sanjivani Shilajit 20g (Grade A+ Resin)',
        role: 'Tissue replenishment & mineral bio-availability',
        percentage: '100% Pure Resin'
      },
      {
        name: 'Amrutvati 30 Tablets (Classical formulation)',
        role: 'Vata pacification and pain relief',
        percentage: 'Shallaki, Guggulu, Rasna, Ashwagandha'
      }
    ],
    authenticityTests: [
      {
        title: 'Full Synergy Verification',
        description: 'Both products formulated according to classical Ayurvedic compatibility (Samyoga) rules.',
        result: 'Zero negative herb-mineral interactions'
      }
    ],
    transparencyStatus: {
      verifiedBy: 'Amrutkalp Quality Assurance Cell, Surat',
      originLocation: 'Himalayan Altitude Harvest & Gujarat Formulation',
      batchStatus: 'Fresh Combined Q4-2026 Batch',
      pendingLaboratoryReports: 'Complete documentation provided on request.'
    },
    inStock: true,
    freeShipping: true
  }
];

export const GET_PRODUCT_BY_SLUG = (slug: string): Product | undefined => {
  return PRODUCTS.find(p => p.slug === slug || p.id === slug);
};
`,"src/data/articles.ts":`import { JournalArticle } from '../types';

export const ARTICLES: JournalArticle[] = [
  {
    id: 'how-to-verify-shilajit-purity',
    slug: 'how-to-verify-shilajit-purity',
    title: 'The 4-Step Home Purity Guide: How to Test Shilajit at Home (And Why We Put Up ₹5.51 Lakh)',
    category: 'Purity & Science',
    readTime: '5 min read',
    publishDate: 'Updated October 2026',
    excerpt: 'The Indian market is flooded with synthetic charcoal pastes and sugar syrups masquerading as Shilajit. Here are 4 rigorous physical tests you can perform right in your kitchen.',
    content: [
      {
        sectionHeading: 'The Crisis of Adulteration in Indian Shilajit',
        body: [
          'Authentic Shilajit takes centuries of microbial breakdown of high-altitude medicinal flora under extreme pressure between tectonic rock crevices in the Himalayas. Because raw extraction is perilous and limited, unethical vendors often mix pitch with coal-tar derivatives, black food coloring, industrial sugar syrup, and synthetic chemical stimulants.',
          'At Amrutkalp, we refuse to accept this compromise. To prove our confidence, we issued our public ₹5,51,000 challenge: if any certified NABL lab proves synthetic adulteration in Amrutkalp Sanjivani, we pay the reward in full.'
        ]
      },
      {
        sectionHeading: 'Test 1: The Water Dissolution & Amber Ribbon Test',
        body: [
          'Take a clear glass of warm water. Drop a small pea-sized portion of Amrutkalp Shilajit into the water without stirring.',
          'Observation: Authentic Shilajit will not clump into a rubbery lump at the bottom. Instead, it begins diffusing spontaneously in fine golden-amber to deep reddish-brown ribbons, eventually turning the water into a translucent brown elixir without leaving any gritty sand or oily film on top.'
        ]
      },
      {
        sectionHeading: 'Test 2: The Fire & Ash Test',
        body: [
          'Place a tiny quantity of resin on a metal spoon and hold a lighter flame underneath.',
          'Observation: Genuine Shilajit will bubble up into an organic foam and calcify into clean white or pale gray mineral ash. It will NEVER ignite into open flame like petroleum, nor will it emit toxic rubber or chemical smoke fumes.'
        ]
      },
      {
        sectionHeading: 'Test 3: Temperature Sensitivity (Rheology)',
        body: [
          'Pure Shilajit possesses distinct thermal flexibility. If you place the jar in the refrigerator, it will harden into a glass-like solid that snaps cleanly when struck. When held between warm fingertips, it quickly softens into a pliable, sticky, resinous tar.',
          'Artificial pastes loaded with gelatin or binders maintain the exact same gummy texture regardless of temperature.'
        ]
      },
      {
        sectionHeading: 'Test 4: Solubility in Alcohol',
        body: [
          'Pure Shilajit dissolves completely in water, but it will NOT dissolve cleanly in pure alcohol (surgical spirit or 99% ethanol). Synthetic dyes and artificial pitch dissolve readily in alcohol, exposing adulteration instantly.'
        ]
      }
    ]
  },
  {
    id: 'morning-back-pain-ayurvedic-approach',
    slug: 'morning-back-pain-ayurvedic-approach',
    title: 'Morning Lumbar Rigidity & Back Pain: Why Resting Doesn’t Fix It and What Ayurveda Recommends',
    category: 'Musculoskeletal Health',
    readTime: '6 min read',
    publishDate: 'October 2026',
    excerpt: 'Waking up with a stiff lower back that takes 30 minutes to "warm up"? Understand the vitiation of Apana and Vyana Vata, and why classical herbs like Shallaki and Guggulu restore fluid mobility.',
    content: [
      {
        sectionHeading: 'The Phenomenon of "Morning Vertebral Lock"',
        body: [
          'Hundreds of patients walk into clinics complaining: "Doctor, I feel fine while sleeping, but the moment my feet touch the floor in the morning, my lower back feels stiff as a wooden plank." This morning rigidity is typically accompanied by difficulty bending forward to tie shoelaces or turn in bed.',
          'In modern biomechanics, this occurs because overnight immobility causes synovial fluid in lumbar facet joints to thicken, while low-grade inflammation builds up around the intervertebral ligaments. In Ayurveda, this is the classic signature of stagnant Ama (metabolic toxins) binding with aggravated Vata dosha.'
        ]
      },
      {
        sectionHeading: 'Why Modern Painkillers Provide Only a Temporary Illusion',
        body: [
          'Non-steroidal anti-inflammatory drugs (NSAIDs) work by blocking COX enzymes in the brain and blood. While pain signals are masked for 4 to 6 hours, the structural friction, dry synovial membranes, and muscle spasms remain untreated. Over months, chronic NSAID consumption stresses the stomach lining and renal function.',
          'Ayurvedic management focuses on three simultaneous steps: (1) Deepana-Pachana to clear inflammatory Ama, (2) Srotoshodhana (clearing micro-vascular channels), and (3) Dhatu-Poshana (nourishing the Asthi and Majja tissues).'
        ]
      },
      {
        sectionHeading: 'The Synergy Behind Amrutkalp Amrutvati',
        body: [
          'Amrutvati was formulated specifically around the clinical mandate "#आराम होगा तो काम होगा" (Productivity begins with physical comfort).',
          'It combines Kunduru (Shallaki), rich in 65% Boswellic acids that naturally quiet inflammatory pathways without gastric irritation; Shuddha Guggulu, which scrapes away deep-seated toxic debris around vertebrae; Rasna, an ancient specific for radiating sciatic discomfort; and Ashwagandha to calm spinal nerve hyperexcitability.',
          'Combined with warm water and 5 minutes of gentle morning pelvic tilts (Marjariasana), thousands of individuals have experienced waking with light, agile flexibility.'
        ]
      }
    ]
  },
  {
    id: 'how-to-take-shilajit-properly',
    slug: 'how-to-take-shilajit-properly',
    title: 'The Master Guide to Consuming Shilajit: Dosage, Water vs Milk, Timing, and Cycling',
    category: 'Usage & Protocols',
    readTime: '4 min read',
    publishDate: 'October 2026',
    excerpt: 'Shilajit is a potent Rasayana, not a casual sweet. How you consume it determines whether your body absorbs 10% or 90% of its 84+ minerals. Here is the verified protocol.',
    content: [
      {
        sectionHeading: 'The Correct Anupana (Vehicle of Delivery)',
        body: [
          'In Shastriya Ayurveda, herbs and minerals are never consumed in isolation. They are paired with an "Anupana" (catalyst) that ferries active principles into deeper cellular membranes.',
          'For pure stamina, stamina, and physical strength: Lukewarm organic whole cow’s milk or A2 milk is the premier traditional Anupana. The healthy lipids in milk bind seamlessly to Fulvic and Humic complexes.',
          'For weight management, cellular detox, and metabolic vigor: Warm water with a teaspoon of pure raw honey (added only after water cools to lukewarm, never boiling) or light green tea is optimal.'
        ]
      },
      {
        sectionHeading: 'Exact Daily Dosage and the Brass Spoon',
        body: [
          'More is not better. High-grade Grade A+ Himalayan Shilajit like Amrutkalp Sanjivani is exceptionally concentrated. A portion the size of an ordinary grain of rice to an Indian chickpea (approximately 300 mg to 500 mg) is the verified daily threshold.',
          'Amrutkalp provides a calibrated brass dosage spoon inside every container so you never need to guess the quantity.'
        ]
      },
      {
        sectionHeading: 'The Optimal Daily Timing and 8-Week Cycle',
        body: [
          'Best Time: Morning on an empty stomach, 20 to 30 minutes before breakfast. This allows the Fulvic acid to prime your gastrointestinal tract for optimal nutrient uptake throughout the day.',
          'Secondary Time: 30 to 45 minutes prior to rigorous physical exercise or athletic training.',
          'Cycling: We recommend consuming Amrutkalp Sanjivani consistently for 6 to 8 weeks, followed by a 1 to 2-week pause. This honors natural circadian adaptation and prevents cellular desensitization.'
        ]
      }
    ]
  }
];
`,"src/context/CartContext.tsx":`import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, CustomerOrderDetails, PlacedOrder } from '../types';
import { BRAND } from '../data/brand';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  grandTotal: number;
  isCartDrawerOpen: boolean;
  setIsCartDrawerOpen: (open: boolean) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  activeOrder: PlacedOrder | null;
  setActiveOrder: (order: PlacedOrder | null) => void;
  instantBuyNow: (product: Product, quantity?: number) => void;
  placeOrder: (customer: CustomerOrderDetails) => PlacedOrder;
  generateWhatsAppOrderUrl: (customer?: CustomerOrderDetails) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'amrutkalp_cart_v1';
const RECENT_ORDER_KEY = 'amrutkalp_last_order_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [activeOrder, setActiveOrder] = useState<PlacedOrder | null>(() => {
    try {
      const saved = localStorage.getItem(RECENT_ORDER_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {
      console.warn('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const addToCart = (product: Product, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  
  const freeShippingThreshold = BRAND.shippingThreshold;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 70;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const grandTotal = subtotal + shippingFee;

  const instantBuyNow = (product: Product, quantity = 1) => {
    addToCart(product, quantity);
    setIsCartDrawerOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const placeOrder = (customer: CustomerOrderDetails): PlacedOrder => {
    const orderNumber = 'AK-' + Math.floor(100000 + Math.random() * 900000);
    const order: PlacedOrder = {
      orderId: orderNumber,
      items: [...cart],
      customer,
      subtotal,
      shipping: shippingFee,
      total: grandTotal,
      createdAt: new Date().toISOString(),
      status: 'confirmed'
    };

    setActiveOrder(order);
    try {
      localStorage.setItem(RECENT_ORDER_KEY, JSON.stringify(order));
    } catch (e) {
      console.warn('Failed to save order', e);
    }

    clearCart();
    return order;
  };

  const generateWhatsAppOrderUrl = (customer?: CustomerOrderDetails): string => {
    const itemList = cart
      .map(item => \`• \${item.product.name} (\${item.product.weightOrQuantity}) x \${item.quantity} = ₹\${item.product.price * item.quantity}\`)
      .join('\\n');

    let text = \`*New Order Inquiry - AMRUTKALP Ayurvedic Herbals*\\n\\n\`;
    text += \`*Order Items:*\\n\${itemList || '• No items selected yet'}\\n\\n\`;
    text += \`*Subtotal:* ₹\${subtotal}\\n\`;
    text += \`*Shipping:* \${shippingFee === 0 ? 'FREE' : \`₹\${shippingFee}\`}\\n\`;
    text += \`*Total Amount:* ₹\${grandTotal}\\n\\n\`;

    if (customer && customer.fullName) {
      text += \`*Customer Details:*\\n\`;
      text += \`• Name: \${customer.fullName}\\n\`;
      text += \`• Phone: \${customer.phoneNumber}\\n\`;
      text += \`• Address: \${customer.addressLine1}\${customer.addressLine2 ? ', ' + customer.addressLine2 : ''}\\n\`;
      text += \`• City/State: \${customer.city}, \${customer.state} - \${customer.pincode}\\n\`;
      text += \`• Payment Preference: \${customer.paymentMethod.toUpperCase()}\\n\`;
      if (customer.notes) {
        text += \`• Note: \${customer.notes}\\n\`;
      }
    } else {
      text += \`Hello Amrutkalp team, I would like to place an order for the items above. Please assist with delivery confirmation.\`;
    }

    const encoded = encodeURIComponent(text);
    return \`https://wa.me/\${BRAND.whatsappNumber}?text=\${encoded}\`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        shippingFee,
        freeShippingThreshold,
        amountNeededForFreeShipping,
        grandTotal,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        activeOrder,
        setActiveOrder,
        instantBuyNow,
        placeOrder,
        generateWhatsAppOrderUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
`,"src/components/Header.tsx":`import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { BRAND } from '../data/brand';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  onSelectProduct?: (slug: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);
  const { totalItems, setIsCartDrawerOpen } = useCart();

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fbfaf7]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Slim Top Announcement Banner */}
      {bannerVisible && (
        <div className="bg-[#111915] text-[#e6ded2] text-xs py-2 px-4 flex items-center justify-between border-b border-stone-800">
          <div className="mx-auto flex items-center gap-2 text-center text-[11px] sm:text-xs tracking-wide">
            <span className="inline-block text-[#c99a45] font-semibold">AUTHENTICITY GUARANTEE:</span>
            <span>{BRAND.guarantee.headlineEnglish}</span>
            <span className="hidden md:inline text-stone-400">·</span>
            <span className="hidden md:inline">Free Express Delivery on orders ₹699+</span>
          </div>
          <button
            onClick={() => setBannerVisible(false)}
            aria-label="Dismiss banner"
            className="text-stone-400 hover:text-white text-xs p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Top Bar Contract: 3 zones separated by gap-8 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Zone 1: Single Brand Wordmark Element */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-[#111915] text-amber-100 flex items-center justify-center font-serif text-lg font-bold border border-amber-500/30 shadow-xs">
              AK
            </div>
            <div>
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-stone-900 group-hover:text-amber-900 transition-colors whitespace-nowrap">
                AMRUTKALP
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-stone-500 font-medium">
                Pure Ayurvedic Herbals
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-700">
          <button
            onClick={() => handleNavClick('home')}
            className={\`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 \${
              currentTab === 'home' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }\`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('shop')}
            className={\`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 \${
              currentTab === 'shop' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }\`}
          >
            Shop Remedies
          </button>
          <button
            onClick={() => handleNavClick('authenticity')}
            className={\`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 flex items-center gap-1.5 \${
              currentTab === 'authenticity' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }\`}
          >
            <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
            <span>₹5.51L Challenge</span>
          </button>
          <button
            onClick={() => handleNavClick('ingredients')}
            className={\`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 \${
              currentTab === 'ingredients' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }\`}
          >
            Ingredients & Science
          </button>
          <button
            onClick={() => handleNavClick('journal')}
            className={\`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 \${
              currentTab === 'journal' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }\`}
          >
            Ayurvedic Journal
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={\`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 \${
              currentTab === 'about' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }\`}
          >
            Our Story
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={\`cursor-pointer whitespace-nowrap transition-colors hover:text-stone-950 py-1 border-b-2 \${
              currentTab === 'contact' ? 'border-[#111915] text-stone-950 font-semibold' : 'border-transparent text-stone-600'
            }\`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action + Quick Cart */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent('Hello Amrutkalp, I would like to consult about Shilajit & Amrutvati.')}\`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-700" />
            <span>Ayurvedic Helpline</span>
          </a>

          <button
            onClick={() => setIsCartDrawerOpen(true)}
            aria-label="View Shopping Cart"
            className="relative p-2.5 rounded-lg bg-stone-900 text-stone-100 hover:bg-stone-800 transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <ShoppingBag className="w-5 h-5 text-amber-200" />
            <span className="hidden sm:inline text-xs font-semibold tracking-wide">Cart</span>
            {totalItems > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#c99a45] text-stone-950 text-[11px] font-bold flex items-center justify-center tabular-nums">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbfaf7] border-b border-stone-200 px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3 text-base font-medium text-stone-800">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('shop')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900 flex items-center justify-between"
            >
              <span>Shop All Remedies</span>
              <span className="text-xs text-amber-800 font-semibold">Featured</span>
            </button>
            <button
              onClick={() => handleNavClick('authenticity')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
              <span>₹5,51,000 Purity Challenge</span>
            </button>
            <button
              onClick={() => handleNavClick('ingredients')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              Ingredients & Lab Sourcing
            </button>
            <button
              onClick={() => handleNavClick('journal')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              Wellness Journal & Guides
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              About Amrutkalp (Surat Store)
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-left py-2 border-b border-stone-100 hover:text-amber-900"
            >
              Contact & Store Location
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent('Hello Amrutkalp, I would like to order or consult.')}\`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-[#111915] text-amber-100 font-semibold rounded-lg text-sm flex items-center justify-center gap-2 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#c99a45]" />
              <span>Order via WhatsApp (+91 {BRAND.phone})</span>
            </a>
            <p className="text-[11px] text-stone-500 text-center">
              Amroli Cross Road, Surat, Gujarat · Mon-Sat 9:30 AM - 8:00 PM
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
`,"src/components/Footer.tsx":`import React from 'react';
import { BRAND } from '../data/brand';
import { MapPin, Phone, Instagram, Facebook, ShieldCheck, Truck, RefreshCw, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  setCurrentTab: (tab: string) => void;
  onSelectProduct?: (slug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentTab, onSelectProduct }) => {
  const handleNav = (tab: string) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProduct = (slug: string) => {
    if (onSelectProduct) {
      onSelectProduct(slug);
    } else {
      setCurrentTab('shop');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111915] text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges Strip (Authentic commitments) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-12 border-b border-stone-800/80">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">₹5.51 Lakh Purity Challenge</h4>
              <p className="text-xs text-stone-400 mt-1">
                Open testing challenge on 100% genuine Himalayan Shilajit resin.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">India-Wide Fast Dispatch</h4>
              <p className="text-xs text-stone-400 mt-1">
                Shipped within 24–48 hours from Surat, Gujarat with real-time tracking.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">Cash on Delivery Available</h4>
              <p className="text-xs text-stone-400 mt-1">
                Inspect package on arrival before cash or UPI payment at doorstep.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center shrink-0 text-[#c99a45]">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-stone-100">7-Day Transit Replacement</h4>
              <p className="text-xs text-stone-400 mt-1">
                Direct replacement guarantee for any transit breakage or seal tampering.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Company Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-12 border-b border-stone-800/80">
          
          {/* Brand & Address Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-amber-900/60 text-amber-200 flex items-center justify-center font-serif font-bold text-sm border border-amber-600/40">
                AK
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                AMRUTKALP
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              Classical Shastriya Ayurvedic purity sourced from high-altitude Himalayan ranges and formulated in accordance with authentic Charaka and Sushruta Samhita principles.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c99a45] shrink-0 mt-0.5" />
                <span>{BRAND.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c99a45] shrink-0" />
                <a href={\`tel:\${BRAND.phone}\`} className="hover:text-white transition-colors">
                  {BRAND.phoneFormatted} (Call & WhatsApp)
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-300 hover:text-white hover:border-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-xs text-stone-400">
                {BRAND.social.instagramHandle}
              </span>
            </div>
          </div>

          {/* Column 2: Products */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Formulations
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleProduct('sanjivani-shilajit')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Sanjivani Shilajit 20g
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProduct('amrutvati-pain-relief')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Amrutvati Pain Relief (30 Pcs)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleProduct('vitality-mobility-bundle')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Complete Vitality Bundle
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left font-medium text-[#c99a45]"
                >
                  Browse Full Catalog →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Transparency & Science */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Transparency
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('authenticity')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  ₹5.51 Lakh Challenge
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ingredients')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Fulvic Acid & Minerals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('journal')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Home Purity Tests
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('journal')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Morning Back Pain Protocol
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care & Policies */}
          <div className="space-y-3">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Customer Care
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Store Location & Timings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('policies')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Shipping & COD Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('policies')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Return & Replacement Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('policies')}
                  className="hover:text-stone-200 transition-colors cursor-pointer text-left"
                >
                  Statutory Medical Disclaimer
                </button>
              </li>
              <li className="pt-2 border-t border-stone-800">
                <a
                  href="/amrutkalp-website-source.zip"
                  download="amrutkalp-website-source.zip"
                  className="text-[#c99a45] hover:text-amber-300 font-semibold transition-colors flex items-center gap-1.5"
                >
                  <span>Download Source (.ZIP)</span>
                  <span>↓</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Statutory Ayurvedic Disclaimer */}
        <div className="py-6 border-b border-stone-800 text-[11px] text-stone-400 leading-relaxed">
          <p>
            <strong className="text-stone-300">Statutory Ayurvedic Notice:</strong> The formulations and traditional claims presented on this website are based on traditional Shastriya Ayurvedic literature, empirical observation, and customer feedback. These products are not intended to diagnose, treat, cure, or prevent any medical disease in place of prescription medicines. Individuals with chronic renal dysfunction, severe cardiovascular conditions, pregnant women, or nursing mothers should consult their physician or an Ayurvedic Vaidya before initiating any wellness regimen.
          </p>
        </div>

        {/* Bottom Copyright & Location */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} AMRUTKALP (Pure Ayurvedic Herbals). All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Surat, Gujarat, India</span>
            <span>·</span>
            <span>NABL Lab Tested Sourcing</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
`,"src/components/ProductCard.tsx":`import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight, Star, ShieldCheck, Sparkles, Leaf } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (slug: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const { addToCart, instantBuyNow } = useCart();
  const hasGenuinePhoto = Boolean(product.primaryImage);

  return (
    <div className="group flex flex-col bg-white rounded-xl border border-stone-200/90 overflow-hidden hover:border-stone-400/80 hover:shadow-lg transition-all duration-200">
      
      {/* Product Visual Area */}
      <div 
        onClick={() => onSelectProduct(product.slug)}
        className="relative aspect-4/3 w-full overflow-hidden cursor-pointer flex items-center justify-center"
      >
        {hasGenuinePhoto ? (
          /* Authentic Shilajeet Studio Photograph */
          <div className="w-full h-full bg-[#f4f2ec] p-4 flex items-center justify-center">
            <img
              src={product.primaryImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ) : (
          /* Pure Typographic Editorial Formulation Plate (No AI boxes, no mock screenshots) */
          <div className="w-full h-full bg-gradient-to-br from-[#131d18] via-[#0d1612] to-[#16231d] p-6 text-white flex flex-col justify-between border-b border-stone-800 relative overflow-hidden group-hover:from-[#17251f] transition-colors">
            
            {/* Top Formulation Badge */}
            <div className="flex items-center justify-between text-[11px] text-amber-200/90">
              <span className="font-mono tracking-widest uppercase text-[10px] text-stone-400">
                FORMULATION {product.category === 'bundle' ? 'KIT-01' : 'TAB-30'}
              </span>
              <span className="font-serif italic text-amber-300">
                Classical Shastriya Vidhi
              </span>
            </div>

            {/* Center Sanskrit & Botanical Typography */}
            <div className="my-auto py-2 text-center space-y-1.5">
              {product.sanskritName && (
                <div className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-amber-100">
                  {product.sanskritName}
                </div>
              )}
              {product.campaignKicker && (
                <p className="text-xs text-amber-300/90 font-medium tracking-wide">
                  "{product.campaignKicker}"
                </p>
              )}
              <div className="text-[11px] text-stone-400 max-w-xs mx-auto line-clamp-1 pt-1 border-t border-stone-800/80">
                {product.ingredients.map(i => i.name.split(' ')[0]).slice(0, 3).join(' · ')}
              </div>
            </div>

            {/* Bottom Apothecary Seal */}
            <div className="flex items-center justify-between text-[10px] text-stone-400 pt-2 border-t border-stone-800">
              <span className="uppercase tracking-wider">Surat Dispensary</span>
              <span className="text-amber-400 font-semibold">{product.weightOrQuantity}</span>
            </div>
          </div>
        )}

        {/* Minimalist Authentic Tag */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold text-stone-900 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded shadow-xs border border-stone-200/60">
          <ShieldCheck className="w-3.5 h-3.5 text-[#c99a45]" />
          <span>100% Authentic</span>
        </div>

        {product.discountPercent > 0 && (
          <div className="absolute top-3 right-3 text-[11px] font-bold text-amber-950 bg-amber-100/90 px-2 py-0.5 rounded border border-amber-300/60 tabular-nums">
            {product.discountPercent}% OFF
          </div>
        )}
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 flex flex-col flex-1 justify-between gap-4">
        <div>
          {/* Metadata line with typographic separator */}
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="uppercase tracking-wider text-[11px] font-semibold text-amber-900/80">
              {product.categoryLabel}
            </span>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <span>{product.weightOrQuantity}</span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onSelectProduct(product.slug)}
            className="font-serif text-lg md:text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors mt-1.5 cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Rating indicator */}
          <div className="flex items-center gap-1.5 mt-2.5 text-xs text-stone-600">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            </div>
            <span className="font-semibold text-stone-900 tabular-nums">{product.rating}</span>
            <span className="text-stone-400">({product.reviewCount} verified customers)</span>
          </div>
        </div>

        {/* Pricing and Action Buttons */}
        <div className="pt-3 border-t border-stone-100 space-y-3">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-stone-950 tabular-nums">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-stone-400 line-through tabular-nums">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[11px] text-emerald-700 font-medium">
              In Stock
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => addToCart(product, 1)}
              className="w-full py-2.5 px-3 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-stone-600" />
              <span>Add to Bag</span>
            </button>
            <button
              onClick={() => instantBuyNow(product, 1)}
              className="w-full py-2.5 px-3 text-xs font-semibold text-amber-50 bg-[#111915] hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs"
            >
              <span>Buy Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
`,"src/components/CartDrawer.tsx":`import React from 'react';
import { useCart } from '../context/CartContext';
import { BRAND } from '../data/brand';
import { X, Trash2, Plus, Minus, ArrowRight, MessageCircle, ShieldCheck, Truck } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingFee,
    grandTotal,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    setIsCheckoutModalOpen,
    generateWhatsAppOrderUrl
  } = useCart();

  if (!isCartDrawerOpen) return null;

  const handleCheckoutClick = () => {
    setIsCartDrawerOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleWhatsAppOrder = () => {
    const url = generateWhatsAppOrderUrl();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        onClick={() => setIsCartDrawerOpen(false)}
        className="absolute inset-0 bg-stone-950/60 backdrop-blur-xs transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fbfaf7] shadow-2xl flex flex-col border-l border-stone-200">
          
          {/* Drawer Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-white">
            <div className="flex items-center gap-2">
              <h2 className="font-serif text-xl font-bold text-stone-900">
                Your Ayurvedic Remedy Bag
              </h2>
              <span className="text-xs text-stone-500 font-medium tabular-nums">
                ({cart.reduce((sum, i) => sum + i.quantity, 0)} items)
              </span>
            </div>
            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress bar */}
          <div className="px-5 py-3 bg-stone-50 border-b border-stone-200">
            {amountNeededForFreeShipping > 0 ? (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-stone-700">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Truck className="w-4 h-4 text-[#c99a45]" />
                    Add ₹{amountNeededForFreeShipping} more for Free Express Delivery
                  </span>
                  <span className="font-bold tabular-nums">₹{subtotal} / ₹{freeShippingThreshold}</span>
                </div>
                <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#c99a45] h-full transition-all duration-300"
                    style={{ width: \`\${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%\` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>You unlocked Free Express Shipping across India!</span>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4">
                  <Truck className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-800">Your bag is empty</h3>
                <p className="text-xs text-stone-500 mt-1.5 max-w-xs">
                  Discover authentic Himalayan Shilajit resin and classical joint relief remedies.
                </p>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="mt-5 px-5 py-2.5 bg-[#111915] text-amber-100 text-xs font-semibold rounded-lg hover:bg-stone-800 transition-colors"
                >
                  Explore Remedies
                </button>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 bg-white rounded-xl border border-stone-200/80 shadow-2xs"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1.5">
                    {product.primaryImage ? (
                      <img
                        src={product.primaryImage}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#111915] text-amber-200 rounded flex flex-col items-center justify-center text-center p-1 font-serif">
                        <span className="font-bold text-xs tracking-wider">AK</span>
                        <span className="text-[9px] text-stone-400 font-sans">{product.category === 'bundle' ? 'BUNDLE' : 'TABLETS'}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-stone-900 leading-snug">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                          aria-label={\`Remove \${product.name}\`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-stone-500 mt-0.5">
                        {product.weightOrQuantity}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      <div className="flex items-center border border-stone-200 rounded-md bg-stone-50">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-stone-800 tabular-nums">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-stone-900 tabular-nums">
                          ₹{product.price * quantity}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="block text-[10px] text-stone-400 line-through tabular-nums">
                            ₹{product.originalPrice * quantity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer & Actions */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-white space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Remedies Subtotal</span>
                  <span className="font-semibold text-stone-900 tabular-nums">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Express Insured Shipping</span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    {shippingFee === 0 ? <span className="text-emerald-700">FREE</span> : \`₹\${shippingFee}\`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100">
                  <span>Total Amount</span>
                  <span className="text-base tabular-nums">₹{grandTotal}</span>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  onClick={handleCheckoutClick}
                  className="w-full py-3 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-xs cursor-pointer"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full py-2.5 px-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly on WhatsApp (+91 {BRAND.phone})</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-[11px] text-stone-500">
                  Cash on Delivery & Instant UPI Available at Doorstep
                </span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
`,"src/components/CheckoutModal.tsx":`import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CustomerOrderDetails } from '../types';
import { BRAND } from '../data/brand';
import { X, ShieldCheck, Truck, Check, AlertCircle, MessageCircle, CreditCard, Banknote } from 'lucide-react';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    subtotal,
    shippingFee,
    grandTotal,
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    placeOrder,
    generateWhatsAppOrderUrl
  } = useCart();

  const [formData, setFormData] = useState<CustomerOrderDetails>({
    fullName: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: 'Gujarat',
    pincode: '',
    notes: '',
    paymentMethod: 'cod'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerOrderDetails, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isCheckoutModalOpen) return null;

  const validate = (): boolean => {
    const errs: Partial<Record<keyof CustomerOrderDetails, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required for delivery';
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber.replace(/\\D/g, ''))) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.addressLine1.trim()) errs.addressLine1 = 'Street address is required';
    if (!formData.city.trim()) errs.city = 'City name is required';
    if (!formData.pincode.trim()) {
      errs.pincode = 'Pincode is required';
    } else if (!/^[0-9]{6}$/.test(formData.pincode.trim())) {
      errs.pincode = 'Enter a valid 6-digit Indian PIN code';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      placeOrder(formData);
      setIsSubmitting(false);
      setIsCheckoutModalOpen(false);
    }, 400);
  };

  const handleWhatsAppCheckout = () => {
    if (!validate()) return;
    const url = generateWhatsAppOrderUrl(formData);
    placeOrder(formData);
    setIsCheckoutModalOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed backdrop */}
      <div 
        onClick={() => setIsCheckoutModalOpen(false)}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-stone-200">
          
          {/* Header */}
          <div className="p-6 border-b border-stone-200 bg-[#fbfaf7] flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-stone-900">
                  Checkout & Dispatch Order
                </span>
              </div>
              <p className="text-xs text-stone-500 mt-1">
                Dispatched from Amrutkalp Surat, Gujarat within 24–48 hours
              </p>
            </div>
            <button
              onClick={() => setIsCheckoutModalOpen(false)}
              className="p-1.5 text-stone-400 hover:text-stone-900 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            
            {/* Order Items Preview */}
            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                <span>Selected Formulations ({cart.length})</span>
                <span className="text-stone-900">Total: ₹{grandTotal}</span>
              </div>
              <div className="space-y-1.5 text-xs text-stone-600 max-h-28 overflow-y-auto">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between">
                    <span className="truncate max-w-xs">
                      {item.product.name} ({item.product.weightOrQuantity}) x {item.quantity}
                    </span>
                    <span className="font-semibold tabular-nums">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-stone-200 flex justify-between text-xs text-stone-500">
                <span>Shipping: {shippingFee === 0 ? <strong className="text-emerald-700">FREE</strong> : \`₹\${shippingFee}\`}</span>
                <span>Includes ₹5.51L Purity Guarantee</span>
              </div>
            </div>

            {/* Customer Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">
                1. Delivery Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {errors.fullName && (
                    <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Mobile Number (for delivery tracking) *
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {errors.phoneNumber && (
                    <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Full House / Flat / Street Address *
                </label>
                <input
                  type="text"
                  value={formData.addressLine1}
                  onChange={e => setFormData({ ...formData, addressLine1: e.target.value })}
                  placeholder="e.g. B-402, Shivalik Residency, Near Circle"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
                {errors.addressLine1 && (
                  <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.addressLine1}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Surat"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {errors.city && (
                    <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.city}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    State *
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={e => setFormData({ ...formData, state: e.target.value })}
                    placeholder="e.g. Gujarat"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={e => setFormData({ ...formData, pincode: e.target.value })}
                    placeholder="6-digit PIN"
                    maxLength={6}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                  {errors.pincode && (
                    <span className="text-[11px] text-red-600 mt-1 block flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.pincode}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Special Delivery Instructions (Optional)
                </label>
                <input
                  type="text"
                  value={formData.notes || ''}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Please call before delivery, deliver in morning"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide">
                2. Payment Preference
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                  className={\`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all \${
                    formData.paymentMethod === 'cod'
                      ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-300'
                  }\`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => {}}
                    className="mt-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-[#c99a45]" />
                      <span className="text-xs font-bold text-stone-900">
                        Cash on Delivery (COD)
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1">
                      Pay cash or scan UPI with the courier executive at your doorstep.
                    </p>
                  </div>
                </label>

                <label
                  onClick={() => setFormData({ ...formData, paymentMethod: 'online' })}
                  className={\`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all \${
                    formData.paymentMethod === 'online'
                      ? 'border-stone-900 bg-stone-50 ring-1 ring-stone-900'
                      : 'border-stone-200 hover:border-stone-300'
                  }\`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    checked={formData.paymentMethod === 'online'}
                    onChange={() => {}}
                    className="mt-0.5"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#c99a45]" />
                      <span className="text-xs font-bold text-stone-900">
                        Online UPI / Pre-Paid
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-500 mt-1">
                      Instant UPI payment confirmation via WhatsApp or Merchant QR.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3 px-5 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-xs cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <Check className="w-4 h-4 text-[#c99a45]" />
                    <span>Confirm Order (Pay ₹{grandTotal})</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleWhatsAppCheckout}
                className="w-full sm:w-auto py-3 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit & Order via WhatsApp</span>
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};
`,"src/components/OrderConfirmationModal.tsx":`import React from 'react';
import { useCart } from '../context/CartContext';
import { BRAND } from '../data/brand';
import { CheckCircle2, PackageCheck, Printer, MessageCircle, X, MapPin, Truck } from 'lucide-react';

export const OrderConfirmationModal: React.FC = () => {
  const { activeOrder, setActiveOrder } = useCart();

  if (!activeOrder) return null;

  const handleWhatsAppHelp = () => {
    const text = \`Hello Amrutkalp, I have placed order \${activeOrder.orderId} for ₹\${activeOrder.total}. Please provide shipment tracking updates.\`;
    window.open(\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent(text)}\`, '_blank', 'noopener,noreferrer');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Dimmed backdrop */}
      <div 
        onClick={() => setActiveOrder(null)}
        className="fixed inset-0 bg-stone-950/70 backdrop-blur-xs transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 sm:p-6 text-center">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-stone-200">
          
          {/* Header */}
          <div className="p-6 bg-[#111915] text-white flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-semibold tracking-wider text-amber-300 uppercase">
                  Order Successfully Placed
                </span>
                <h3 className="font-serif text-2xl font-bold tracking-tight">
                  Thank You, {activeOrder.customer.fullName}
                </h3>
              </div>
            </div>
            <button
              onClick={() => setActiveOrder(null)}
              className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-6">
            
            {/* Status Strip */}
            <div className="p-4 bg-emerald-50/80 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-emerald-900 font-semibold">
                <Truck className="w-4 h-4 text-emerald-700" />
                <span>Status: Preparing for Fast Dispatch</span>
              </div>
              <div className="text-right">
                <span className="text-stone-500 text-[10px] block">Order Identifier</span>
                <span className="font-mono font-bold text-stone-900 text-xs">{activeOrder.orderId}</span>
              </div>
            </div>

            {/* Delivery Destination */}
            <div className="text-xs space-y-1.5 p-3.5 bg-stone-50 rounded-xl border border-stone-200">
              <div className="flex items-center gap-1.5 text-stone-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-[#c99a45]" />
                <span>Delivery Address</span>
              </div>
              <p className="font-semibold text-stone-900">
                {activeOrder.customer.addressLine1}
                {activeOrder.customer.addressLine2 ? \`, \${activeOrder.customer.addressLine2}\` : ''}
              </p>
              <p className="text-stone-600">
                {activeOrder.customer.city}, {activeOrder.customer.state} - {activeOrder.customer.pincode}
              </p>
              <p className="text-stone-600">
                Phone: <strong>{activeOrder.customer.phoneNumber}</strong> · Payment: <strong className="uppercase">{activeOrder.customer.paymentMethod}</strong>
              </p>
            </div>

            {/* Items Summary */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-600">
                Remedy Package Contents
              </h4>
              <div className="divide-y divide-stone-100 text-xs">
                {activeOrder.items.map(item => (
                  <div key={item.product.id} className="py-2.5 flex justify-between items-center">
                    <div>
                      <span className="font-bold text-stone-900">{item.product.name}</span>
                      <span className="text-stone-500 block text-[11px]">
                        {item.product.weightOrQuantity} × {item.quantity}
                      </span>
                    </div>
                    <span className="font-semibold text-stone-900 tabular-nums">
                      ₹{item.product.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-stone-200 space-y-1 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums">₹{activeOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Shipping</span>
                  <span>{activeOrder.shipping === 0 ? 'FREE' : \`₹\${activeOrder.shipping}\`}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100">
                  <span>Total Amount Paid / Due on Delivery</span>
                  <span className="tabular-nums">₹{activeOrder.total}</span>
                </div>
              </div>
            </div>

            {/* Next Steps Card */}
            <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950 space-y-1">
              <strong className="block font-semibold">What happens next?</strong>
              <p className="text-stone-700 leading-relaxed text-[11px]">
                Your package is being hand-packed at our Surat dispensary with authentic batch seals. You will receive an SMS and WhatsApp tracking update from Amrutkalp as soon as the courier scans the parcel.
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleWhatsAppHelp}
                className="w-full sm:flex-1 py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Track via WhatsApp (+91 {BRAND.phone})</span>
              </button>

              <button
                onClick={handlePrint}
                className="w-full sm:w-auto py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 text-xs cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={() => setActiveOrder(null)}
                className="w-full sm:w-auto py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs cursor-pointer"
              >
                Done
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
`,"src/components/WhatsAppFloat.tsx":`import React from 'react';
import { BRAND } from '../data/brand';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const whatsappUrl = \`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent('Hello Amrutkalp team, I would like to inquire about Shilajit and Ayurvedic pain relief remedies.')}\`;

  return (
    <div className="fixed bottom-5 right-5 z-30">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation with Amrutkalp Vaidya"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white pl-3.5 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-emerald-500/50"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border-2 border-emerald-600" />
        </div>
        <div className="text-left hidden sm:block">
          <span className="block text-[11px] font-bold leading-tight tracking-wide">
            Chat on WhatsApp
          </span>
          <span className="block text-[9px] text-emerald-100 font-medium leading-none">
            Direct Helpline: {BRAND.phone}
          </span>
        </div>
      </a>
    </div>
  );
};
`,"src/pages/HomePage.tsx":`import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { BRAND } from '../data/brand';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Check, 
  Phone, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Award,
  Zap,
  Activity,
  Droplets,
  Flame,
  Info
} from 'lucide-react';

interface HomePageProps {
  setCurrentTab: (tab: string) => void;
  onSelectProduct: (slug: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentTab, onSelectProduct }) => {
  const { instantBuyNow } = useCart();
  const featuredProducts = PRODUCTS;
  const sanjivaniProduct = PRODUCTS[0];
  const amrutvatiProduct = PRODUCTS[1];

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is the ₹5,51,000 Authenticity Challenge?',
      a: 'We publicly guarantee that Amrutkalp Sanjivani is 100% genuine Himalayan Shilajit resin free from synthetic additives, charcoal ash, chemical stimulants, or steroid contamination. If any NABL-accredited laboratory proves that our resin is adulterated or fake, we will immediately pay the claimant ₹5,51,000.'
    },
    {
      q: 'How do I take Amrutkalp Shilajit for best results?',
      a: 'Using the included brass spoon, measure a pea-sized portion (300–500 mg). Stir it into a cup of lukewarm water, warm milk, or green tea until fully dissolved into a clear golden-amber liquid. Drink every morning on an empty stomach for 6 to 8 weeks.'
    },
    {
      q: 'Does Amrutvati contain any synthetic painkillers or steroids?',
      a: 'Absolutely not. Amrutvati is a 100% Shastriya Ayurvedic botanical formulation containing Shallaki (Boswellia), Shuddha Guggulu, Rasna, and Ashwagandha. It relieves pain by soothing aggravated Vata and clearing inflammatory Ama, without damaging your stomach lining or kidneys.'
    },
    {
      q: 'Can I visit the Amrutkalp store in person in Surat?',
      a: 'Yes! We welcome all visitors to our registered dispensary at 108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Amroli, Surat, Gujarat 394107. You can inspect physical batches and consult our team directly.'
    },
    {
      q: 'What are the delivery charges and Cash on Delivery terms?',
      a: 'Delivery is 100% FREE on all orders of ₹699 and above. For smaller orders, a nominal ₹70 shipping charge applies. We offer Cash on Delivery across India where you can inspect your parcel before paying.'
    }
  ];

  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      
      {/* 1. HERO SECTION: Art-Directed Split Showcase with Authentic Product Asset */}
      <section className="relative overflow-hidden pt-8 md:pt-14 pb-12 border-b border-stone-200/90 bg-radial from-amber-50/40 via-[#fbfaf7] to-[#fbfaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet Kicker with separator */}
              <div className="flex items-center gap-2 text-xs text-stone-600 font-semibold tracking-wide">
                <span className="text-[#b3832f] uppercase tracking-wider">Shastriya Ayurveda</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>Himalayan Altitude 16,000+ Ft</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span className="text-stone-800">Surat, Gujarat</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1] text-balance">
                Pure Power. <br className="hidden sm:inline" />
                <span className="italic font-normal text-stone-800">Pure Himalayan</span> Shilajit.
              </h1>

              {/* Subtitle / Value proposition */}
              <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl">
                Unadulterated Grade A+ mineral resin wild-harvested from high-altitude Himalayan cliffs, rich in &gt;60% bioactive Fulvic Acid and 84+ trace minerals. Backed by our open <strong className="text-stone-900 font-semibold">₹5,51,000 Purity Challenge</strong>.
              </p>

              {/* Key Trust Checkmarks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700 font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>100% classical water-purified resin (Surya Tapi)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>Zero fillers, artificial gums, or steroids</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>₹5.51L cash reward if proven adulterated</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>Free brass dosage spoon included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => instantBuyNow(sanjivaniProduct, 1)}
                  className="py-3.5 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
                >
                  <span>Order Sanjivani Shilajit (₹799)</span>
                  <ArrowRight className="w-4 h-4 text-[#c99a45]" />
                </button>

                <button
                  onClick={() => setCurrentTab('shop')}
                  className="py-3.5 px-6 bg-white border border-stone-300 text-stone-900 font-semibold rounded-lg hover:bg-stone-100 transition-colors text-sm cursor-pointer"
                >
                  View All Formulations
                </button>
              </div>

              {/* Public Challenge Callout */}
              <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-950 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#c99a45] shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold block text-amber-900">
                    {BRAND.guarantee.headlineGujarati}
                  </strong>
                  <span className="text-stone-600 text-[11px] block mt-0.5">
                    {BRAND.guarantee.headlineEnglish}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Product Image Column (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden bg-gradient-to-b from-[#17221d] to-[#0c1410] p-6 text-white shadow-2xl border border-stone-800">
                
                {/* Genuine Product Photograph */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-stone-900/60 flex items-center justify-center border border-stone-700/60 p-2">
                  <img
                    src="/assets/products/sanjivani-shilajit-pure.jpg"
                    alt="AMRUTKALP SANJIVANI Pure Himalayan Shilajit 20 GM Glass Jar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-amber-200 border border-stone-700">
                    SANJIVANI · 20 GM
                  </div>
                </div>

                {/* Micro Product Brief Below Image */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-serif text-lg font-bold text-white">
                        Sanjivani Shilajit Resin
                      </h2>
                      <span className="text-xs text-stone-400">
                        Batch Q4-2026 · Surya Tapi Shodhana
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-amber-300 tabular-nums">₹799</span>
                      <span className="block text-xs text-stone-400 line-through tabular-nums">₹2,000</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-stone-800 text-[11px] text-stone-300">
                    <div>
                      <span className="text-stone-400 block">Fulvic Acid</span>
                      <strong className="text-white font-mono">&gt; 60% w/w</strong>
                    </div>
                    <div>
                      <span className="text-stone-400 block">Delivery</span>
                      <strong className="text-emerald-400">Free Express (Surat)</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct('sanjivani-shilajit')}
                    className="w-full py-2.5 text-center text-xs font-semibold text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer border border-stone-700"
                  >
                    Explore Lab Sourcing & Full Details →
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE METRICS STRIP: Clean unboxed stats with tabular numerals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-stone-200 text-stone-800">
          <div>
            <span className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950">
              16,000+
            </span>
            <span className="block text-xs font-medium text-stone-500 mt-1">
              Feet Elevation Himalayan Harvest
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950">
              ₹5.51L
            </span>
            <span className="block text-xs font-medium text-stone-500 mt-1">
              Public Purity Challenge Guarantee
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950">
              84+
            </span>
            <span className="block text-xs font-medium text-stone-500 mt-1">
              Ionic Trace Minerals & Fulvic Acid
            </span>
          </div>
          <div>
            <span className="font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950">
              24–48h
            </span>
            <span className="block text-xs font-medium text-stone-500 mt-1">
              Dispatch from Surat, Gujarat
            </span>
          </div>
        </div>
      </section>

      {/* 3. FEATURED REMEDIES COLLECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
              Classical Shastriya Formulations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 mt-1">
              Verified Ayurvedic Remedies
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1.5 max-w-xl">
              Authentic Ayurvedic preparations crafted with zero synthetic adulterants. Each package is individually batch-inspected.
            </p>
          </div>
          <button
            onClick={() => setCurrentTab('shop')}
            className="text-xs font-semibold text-stone-900 hover:text-amber-900 flex items-center gap-1 cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3-column product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 4. THE ₹5,51,000 AUTHENTICITY CHALLENGE SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#111915] text-stone-100 overflow-hidden border border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Left Challenge Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-950/80 border border-amber-600/50 text-amber-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
                <span>Open Public Challenge</span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {BRAND.guarantee.headlineGujarati}
                </h3>
                <p className="font-serif text-xl sm:text-2xl font-medium text-amber-200 mt-2">
                  Prove it Fake in Any Certified Lab and Win ₹5,51,000
                </p>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {BRAND.guarantee.description} We harvest raw resin from remote Himalayan screes, filter it in pure spring water, and dry it under natural sunlight (Surya Tapi). No corn syrup, no synthetic binders, and no heavy metal toxins.
              </p>

              {/* 3 Key Purity Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800">
                  <Flame className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="text-xs font-bold text-white">Flame Purity</h4>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Expands into pure mineral ash without flammable synthetic flames.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800">
                  <Droplets className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="text-xs font-bold text-white">Clean Dissolution</h4>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Diffuses in water into golden amber ribbons without sand residue.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800">
                  <Award className="w-5 h-5 text-amber-400 mb-2" />
                  <h4 className="text-xs font-bold text-white">NABL Tested</h4>
                  <p className="text-[11px] text-stone-400 mt-1">
                    Screened for lead, arsenic, mercury, and microbiological purity.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setCurrentTab('authenticity')}
                  className="py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs"
                >
                  Read Full Challenge Protocol & Rules
                </button>
                <a
                  href={\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent('Hello Amrutkalp, I want to learn more about the 5.51 Lakh purity challenge.')}\`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-stone-300 hover:text-white flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Call / WhatsApp Quality Desk: {BRAND.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Typographic Certificate Plate (5 cols) - No screenshots, pure editorial authority */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#18261f] via-[#101b15] to-[#0c1410] p-7 text-stone-100 shadow-2xl relative overflow-hidden space-y-5">
                
                {/* Certificate Header */}
                <div className="text-center pb-4 border-b border-stone-800 space-y-1">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-[#c99a45]">
                    Official Declaration & Warranty
                  </div>
                  <div className="font-serif text-2xl font-bold text-amber-200">
                    ₹5,51,000
                  </div>
                  <div className="text-xs text-stone-300 font-medium">
                    Open Laboratory Authenticity Bounty
                  </div>
                </div>

                {/* Original Gujarati Slogan in Bold Typography */}
                <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-center space-y-1">
                  <div className="font-serif text-base sm:text-lg font-bold text-amber-100 leading-snug">
                    "ડુપ્લીકેટ સાબિત કરીને બતાવો તો મળશે ₹5,51,000 ઈનામ*"
                  </div>
                  <div className="text-[11px] text-stone-400">
                    "डुप्लीकेट साबित करके दिखाओ तो मिलेगा ₹5,51,000 का इनाम*"
                  </div>
                </div>

                {/* Certified Testing Criteria */}
                <div className="space-y-2 text-xs">
                  <div className="text-[11px] uppercase font-bold tracking-wider text-stone-400">
                    Testing Criteria & Standards:
                  </div>
                  <div className="space-y-1.5 text-[11px] text-stone-300">
                    <div className="flex items-center justify-between py-1 border-b border-stone-800">
                      <span>Artificial Fillers / Sugar Syrup</span>
                      <strong className="text-emerald-400 font-mono">0.0% (Zero)</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-800">
                      <span>Bioactive Fulvic Acid Content</span>
                      <strong className="text-amber-300 font-mono">&gt; 60% w/w</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-800">
                      <span>Heavy Metals (Lead, Mercury, Arsenic)</span>
                      <strong className="text-emerald-400 font-mono">Passes NABL Limits</strong>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-stone-800">
                      <span>Synthetic Stimulants or Steroids</span>
                      <strong className="text-emerald-400 font-mono">100% Absent</strong>
                    </div>
                  </div>
                </div>

                {/* Signature Block */}
                <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400 font-mono">
                  <span>Amrutkalp Quality Cell</span>
                  <span className="text-amber-400">Surat, Gujarat</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AMRUTVATI MORNING BACK PAIN FEATURE: #आराम होगा तो काम होगा */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
            
            {/* Visual Formulation Plate (5 cols) - Pure typography & classical apothecary layout */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-stone-800 bg-gradient-to-b from-[#131d18] via-[#0e1713] to-[#15231c] p-7 text-white shadow-xl space-y-5">
                
                <div className="flex items-center justify-between border-b border-stone-800 pb-3 text-[11px]">
                  <span className="font-mono text-amber-300/80 uppercase tracking-widest text-[10px]">
                    Ayurvedic Pain Formulation
                  </span>
                  <span className="font-serif italic text-stone-300">
                    30 Tablets
                  </span>
                </div>

                <div className="text-center py-3 space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-amber-100">
                    अमृतकल्प अमृतवटी
                  </div>
                  <div className="text-xs text-amber-300/90 font-medium">
                    वातशामक व दर्द निवारक गुटिका
                  </div>
                  <div className="text-[11px] text-stone-400 font-mono pt-1">
                    #आराम होगा तो काम होगा
                  </div>
                </div>

                <div className="p-4 bg-stone-900/80 rounded-xl border border-stone-800 space-y-2 text-xs">
                  <div className="text-[11px] text-stone-400 uppercase font-semibold">Active Botanicals:</div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-300">
                    <div>• Shallaki (65% Boswellic)</div>
                    <div>• Shuddha Guggulu</div>
                    <div>• Rasna Rhizome</div>
                    <div>• Nagori Ashwagandha</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-stone-400 font-mono border-t border-stone-800 pt-3">
                  <span>Zero Synthetic Analgesics</span>
                  <span className="text-emerald-400 font-semibold">Surat Dispensary</span>
                </div>

              </div>
            </div>

            {/* Educational Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider">
                <span>#आराम होगा तो काम होगा</span>
                <span aria-hidden="true" className="text-stone-300">·</span>
                <span>30 Herbal Tablets</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 tracking-tight leading-tight">
                सुबह उठकर कमर में दर्द? <br />
                <span className="italic font-normal text-stone-700">यह है वो दर्द निवारक जो आपको चाहिए</span>
              </h3>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Do you wake up feeling like your lower spine is rigid and stiff? Morning lumbar pain and neck stiffness ruin productivity before your day even begins. <strong>Amrutkalp Amrutvati</strong> targets the aggravated Vata dosha and deep-seated synovial inflammation using classical Shallaki (65% Boswellic acids), Shuddha Guggulu, Rasna, and Ashwagandha.
              </p>

              {/* Verified Relief Points */}
              <div className="grid grid-cols-2 gap-3 text-xs text-stone-800">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="block text-stone-900 font-semibold">कमर दर्द (Lower Back)</strong>
                  <span className="text-[11px] text-stone-500">Relieves lumbar disc & muscular stiffness</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="block text-stone-900 font-semibold">गर्दन व कंधे (Neck & Shoulders)</strong>
                  <span className="text-[11px] text-stone-500">Relaxes cervical and postural tightness</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="block text-stone-900 font-semibold">जोड़ों का दर्द (Joint Mobility)</strong>
                  <span className="text-[11px] text-stone-500">Supports synovial fluid lubrication</span>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                  <strong className="block text-stone-900 font-semibold">साइटिका (Sciatica Relief)</strong>
                  <span className="text-[11px] text-stone-500">Soothes radiating nerve sensitivity</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => instantBuyNow(amrutvatiProduct, 1)}
                  className="w-full sm:w-auto py-3 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Order Amrutvati (₹599)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#c99a45]" />
                </button>

                <button
                  onClick={() => onSelectProduct('amrutvati-pain-relief')}
                  className="w-full sm:w-auto py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold rounded-lg transition-colors text-xs cursor-pointer"
                >
                  View Dosage & Herbs Breakdown
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 6. HOW TO CONSUME SHILAJIT: Classical 4-Step Shastriya Protocol */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Daily Vidhi & Anupana
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
            How to Consume Pure Shilajit
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5">
            Follow this verified traditional method to achieve maximum cellular bioavailability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center">
              01
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Measure Pea-Sized Portion
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Use the included brass dosage spoon to scoop approximately 300 mg to 500 mg of resin (about the size of an Indian chickpea).
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center">
              02
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Lukewarm Liquid Vehicle
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Pour 150ml of lukewarm water, warm A2 cow milk, or green tea. Never use boiling liquid to avoid denaturing living enzymes.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center">
              03
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Stir into Amber Ribbon
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Stir gently for 15 seconds. Observe the resin dissolving completely into a rich golden-amber to mahogany elixir without grittiness.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center">
              04
            </div>
            <h3 className="font-serif text-base font-bold text-stone-900">
              Morning Empty Stomach
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Drink warm 20–30 minutes before breakfast. Repeat consistently for 6 to 8 weeks to replenish deeper Dhatus and stamina.
            </p>
          </div>
        </div>
      </section>

      {/* 7. REAL SURAT DISPENSARY & FOUNDER COMMUNITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#f4f2ec] border border-stone-200/90 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Typographic Dispensary Plaque (4 cols) - Pure editorial authority */}
            <div className="lg:col-span-4">
              <div className="rounded-xl border border-stone-300 shadow-md bg-[#111915] text-stone-100 p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                  <span className="font-mono text-[10px] text-amber-300 tracking-widest uppercase">DISPENSARY REGISTER</span>
                  <span className="text-[10px] text-stone-400">SURAT · GUJARAT</span>
                </div>
                
                <div className="space-y-1">
                  <div className="font-serif text-xl font-bold text-white">AMRUTKALP</div>
                  <div className="text-xs text-amber-200/90 font-medium">Pure Ayurvedic Herbals</div>
                </div>

                <div className="p-3 bg-stone-900 rounded-lg border border-stone-800 space-y-1.5 text-xs">
                  <div className="text-stone-400 text-[10px] uppercase font-semibold">Physical Center:</div>
                  <p className="text-stone-300 text-[11px] leading-relaxed">
                    108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Surat - 394107
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Community: @pure_ayurvedic_herbal</span>
                  <span className="text-emerald-400">Verified</span>
                </div>
              </div>
            </div>

            {/* Store Information (8 cols) */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
                Transparent Gujarati Roots
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950">
                Direct from Our Surat Dispensary to Your Home
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Unlike faceless online brands that re-label generic contract manufacturing, Amrutkalp operates from our dedicated registered center in Surat, Gujarat. We personally oversee every batch extraction, purity verification, and customer delivery.
              </p>

              <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs space-y-2">
                <div className="flex items-start gap-2 text-stone-800">
                  <MapPin className="w-4 h-4 text-[#c99a45] shrink-0 mt-0.5" />
                  <span>
                    <strong>Visit Us In Person:</strong> {BRAND.address.full}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-stone-800">
                  <Phone className="w-4 h-4 text-[#c99a45] shrink-0" />
                  <span>
                    <strong>Direct Hotline:</strong> {BRAND.phoneFormatted} (Call & WhatsApp consultation)
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent('Hello Amrutkalp, I want to book an Ayurvedic consultation.')}\`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors text-xs flex items-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Consult an Ayurvedic Specialist via WhatsApp</span>
                </a>
                <button
                  onClick={() => setCurrentTab('about')}
                  className="text-xs font-semibold text-stone-800 hover:text-stone-950 underline underline-offset-4 cursor-pointer"
                >
                  Read Our Full Story & Mission →
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 8. VERIFIED FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Clear Answers
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Honest answers without marketing exaggeration.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = expandedFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-stone-200/90 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/70 transition-colors cursor-pointer"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-stone-900">
                    {faq.q}
                  </span>
                  <div className="p-1 rounded-full bg-stone-100 text-stone-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
`,"src/pages/ShopPage.tsx":`import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, ShieldCheck, Filter, ArrowUpDown } from 'lucide-react';

interface ShopPageProps {
  onSelectProduct: (slug: string) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories = [
    { id: 'all', label: 'All Formulations' },
    { id: 'vitality', label: 'Vitality & Shilajit' },
    { id: 'pain-relief', label: 'Joint Health & Pain Relief' },
    { id: 'bundle', label: 'Value Packs & Combos' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.sanskritName && p.sanskritName.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            The Amrutkalp Dispensary
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-1">
            Shop Authentic Ayurvedic Remedies
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-xl">
            Each formulation is laboratory batch-inspected and backed by our open ₹5,51,000 purity challenge. Fast express dispatch across India.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs text-stone-600 font-medium bg-stone-100 px-3 py-2 rounded-lg self-start md:self-auto">
          <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
          <span>All packages sealed at our Surat dispensary</span>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        
        {/* Interactive Segmented Filter Controls (allowed functional buttons per constitution) */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={\`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap \${
                selectedCategory === cat.id
                  ? 'bg-white text-stone-950 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-950'
              }\`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search & Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search Shilajit, Amrutvati..."
              className="pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 w-full sm:w-56 bg-white"
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-stone-500" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white text-stone-700 cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

        </div>

      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-xl border border-stone-200">
          <p className="font-serif text-lg text-stone-700">No matching remedies found.</p>
          <p className="text-xs text-stone-500 mt-1">Try resetting your search or filter options.</p>
          <button
            onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      )}

      {/* Purity Assurance Banner */}
      <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center md:text-left">
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Unsure which formulation matches your body constitution?
          </h3>
          <p className="text-xs text-stone-600">
            Our Ayurvedic team in Surat provides free dosage and regimen guidance via WhatsApp or phone.
          </p>
        </div>
        <a
          href="https://wa.me/918141323395?text=Hello%20Amrutkalp%20team%2C%20I%20need%20assistance%20choosing%20the%20right%20remedy."
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-5 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors text-xs shrink-0 shadow-xs"
        >
          Speak with Ayurvedic Advisor
        </a>
      </div>

    </div>
  );
};
`,"src/pages/ProductDetailPage.tsx":`import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { BRAND } from '../data/brand';
import { 
  ShieldCheck, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  Star, 
  Truck, 
  Check, 
  AlertTriangle, 
  Clock, 
  RotateCcw,
  Sparkles,
  HelpCircle,
  FileText,
  ChevronLeft,
  Info
} from 'lucide-react';

interface ProductDetailPageProps {
  product: Product;
  onBackToShop: () => void;
  onSelectProduct: (slug: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  product,
  onBackToShop
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'howToUse' | 'purity' | 'safety' | 'transparency'>('benefits');

  const { addToCart, instantBuyNow } = useCart();

  const handleWhatsAppProductInquiry = () => {
    const text = \`Hello Amrutkalp team, I have a question about \${product.name} (\${product.weightOrQuantity}) priced at ₹\${product.price}. Please provide more details on usage and delivery.\`;
    window.open(\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent(text)}\`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Back link */}
      <div>
        <button
          onClick={onBackToShop}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Formulations</span>
        </button>
      </div>

      {/* Main PDP Grid (Contiguous purchase module per Section 2.A) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Image Gallery (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Active Visual Plate */}
          <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-stone-200/90 flex items-center justify-center">
            {product.primaryImage ? (
              <div className="w-full h-full bg-[#f4f2ec] p-6 flex items-center justify-center">
                <img
                  src={product.primaryImage}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-[#131d18] via-[#0d1612] to-[#15231c] p-8 text-white flex flex-col justify-between border border-stone-800">
                <div className="flex items-center justify-between text-xs text-amber-200/90 border-b border-stone-800 pb-3">
                  <span className="font-mono tracking-widest uppercase text-[11px] text-stone-400">
                    DISPENSARY ARCHIVE · SURAT
                  </span>
                  <span className="font-serif italic text-amber-300">
                    Classical Shastriya Formula
                  </span>
                </div>

                <div className="text-center py-4 space-y-2">
                  <div className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-amber-100">
                    {product.sanskritName || product.name}
                  </div>
                  {product.campaignSlogan && (
                    <p className="text-xs sm:text-sm text-amber-200/90 italic font-serif max-w-md mx-auto">
                      "{product.campaignSlogan}"
                    </p>
                  )}
                  <div className="pt-3 flex flex-wrap justify-center gap-2 text-[11px] text-stone-400">
                    {product.ingredients.map((ing, i) => (
                      <span key={i} className="px-2.5 py-1 bg-stone-900/80 rounded border border-stone-800">
                        {ing.name.split('(')[0].trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-stone-800 font-mono">
                  <span>Zero Synthetics / Zero Steroids</span>
                  <span className="text-amber-400 font-semibold">{product.weightOrQuantity}</span>
                </div>
              </div>
            )}

            {/* Purity Badge */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-900 flex items-center gap-1.5 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
              <span>₹5.51L Purity Guarantee</span>
            </div>

            {product.discountPercent > 0 && (
              <div className="absolute top-4 right-4 bg-amber-100 text-amber-950 font-bold px-2.5 py-1 rounded text-xs border border-amber-300 tabular-nums">
                SAVE {product.discountPercent}%
              </div>
            )}
          </div>

          {/* Sourcing & Testing Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
              <span className="text-stone-500 block text-[11px]">Sourcing Altitude</span>
              <strong className="text-stone-900 font-semibold">16,000+ Ft Himalayas</strong>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
              <span className="text-stone-500 block text-[11px]">Classical Shodhana</span>
              <strong className="text-stone-900 font-semibold">Surya Tapi Sun-Dried</strong>
            </div>
            <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs">
              <span className="text-stone-500 block text-[11px]">Formulation Origin</span>
              <strong className="text-stone-900 font-semibold">Surat, Gujarat</strong>
            </div>
          </div>

        </div>

        {/* Right Column: Contiguous Purchase Module (5 cols) */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-xs space-y-6 lg:sticky lg:top-24">
          
          <div>
            {/* Category and weight metadata with typographic separator */}
            <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
              <span className="uppercase tracking-wider font-semibold text-amber-900">
                {product.categoryLabel}
              </span>
              <span aria-hidden="true">·</span>
              <span>{product.weightOrQuantity}</span>
              <span aria-hidden="true">·</span>
              <span>{product.servingCount}</span>
            </div>

            {/* Product Name */}
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1 leading-tight">
              {product.name}
            </h1>

            {product.sanskritName && (
              <p className="text-xs text-stone-500 font-serif italic mt-0.5">
                {product.sanskritName}
              </p>
            )}

            {/* Reviews */}
            <div className="flex items-center gap-2 mt-3 text-xs">
              <div className="flex items-center text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-stone-900 tabular-nums">{product.rating}</span>
              <span className="text-stone-400">·</span>
              <span className="text-stone-600">{product.reviewCount} Verified Customer Inquiries</span>
            </div>
          </div>

          {/* Pricing Module */}
          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-stone-950 tabular-nums">
                ₹{product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-stone-400 line-through tabular-nums">
                  ₹{product.originalPrice}
                </span>
              )}
              <span className="text-xs text-emerald-800 font-semibold">
                (Save ₹{product.originalPrice - product.price})
              </span>
            </div>
            <p className="text-[11px] text-stone-500">
              Inclusive of all taxes · Free express delivery included on this item
            </p>
          </div>

          {/* Campaign Slogan Callout */}
          {product.campaignSlogan && (
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950">
              <strong className="block font-semibold text-amber-900">
                {product.campaignKicker || 'Ayurvedic Slogan'}
              </strong>
              <span className="text-stone-700 text-[11px]">
                {product.campaignSlogan}
              </span>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-stone-700">
              Select Quantity:
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-stone-300 rounded-lg bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold text-stone-900 tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <span className="text-xs text-stone-500">
                Total: <strong className="text-stone-900 tabular-nums">₹{product.price * quantity}</strong>
              </span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <button
              onClick={() => instantBuyNow(product, quantity)}
              className="w-full py-3.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
            >
              <span>Instant Buy Now (₹{product.price * quantity})</span>
              <ArrowRight className="w-4 h-4 text-[#c99a45]" />
            </button>

            <button
              onClick={() => addToCart(product, quantity)}
              className="w-full py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-stone-600" />
              <span>Add to Remedy Bag</span>
            </button>

            <button
              onClick={handleWhatsAppProductInquiry}
              className="w-full py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quick Order via WhatsApp (+91 {BRAND.phone})</span>
            </button>
          </div>

          {/* Trust points list */}
          <div className="pt-3 border-t border-stone-200 space-y-2 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#c99a45] shrink-0" />
              <span>Cash on Delivery (COD) supported across India</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#c99a45] shrink-0" />
              <span>₹5,51,000 public lab challenge protection</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-[#c99a45] shrink-0" />
              <span>7-Day transit damage & broken seal replacement</span>
            </div>
          </div>

        </div>

      </div>

      {/* Structured Educational Tabs (The Most Critical Requirement) */}
      <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
        
        {/* Tab navigation */}
        <div className="flex overflow-x-auto border-b border-stone-200 bg-stone-50/70 p-2 gap-1">
          <button
            onClick={() => setActiveTab('benefits')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap \${
              activeTab === 'benefits'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            Verified Benefits & Uses
          </button>
          <button
            onClick={() => setActiveTab('ingredients')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap \${
              activeTab === 'ingredients'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            Ingredients & Botanical Role
          </button>
          <button
            onClick={() => setActiveTab('howToUse')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap \${
              activeTab === 'howToUse'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            How to Use & Dosage
          </button>
          <button
            onClick={() => setActiveTab('purity')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap \${
              activeTab === 'purity'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            Authenticity & Lab Tests
          </button>
          <button
            onClick={() => setActiveTab('safety')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap \${
              activeTab === 'safety'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            Precautions & Safety
          </button>
          <button
            onClick={() => setActiveTab('transparency')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap \${
              activeTab === 'transparency'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            Transparency Disclosure
          </button>
        </div>

        {/* Tab Content Panes */}
        <div className="p-6 sm:p-8">
          
          {/* 1. Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  What is {product.name}?
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                  Verified Traditional Actions & Modern Evidence
                </h4>
                <div className="space-y-2.5">
                  {product.verifiedBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 2. Ingredients Tab */}
          {activeTab === 'ingredients' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Botanical & Mineral Composition
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  100% active compounds. No chalk, talc, artificial coloring, or preservatives.
                </p>
              </div>

              <div className="divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden">
                {product.ingredients.map((ing, idx) => (
                  <div key={idx} className="p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                    <div>
                      <strong className="text-stone-900 block font-semibold text-sm">
                        {ing.name}
                      </strong>
                      {ing.botanicalName && (
                        <span className="italic text-stone-500 text-[11px]">
                          {ing.botanicalName}
                        </span>
                      )}
                      <p className="text-stone-600 text-xs mt-0.5">
                        {ing.role}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      {ing.percentage && (
                        <span className="font-mono text-stone-900 font-bold block text-xs">
                          {ing.percentage}
                        </span>
                      )}
                      {ing.source && (
                        <span className="text-stone-400 text-[10px] block">
                          Source: {ing.source}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. How to Use Tab */}
          {activeTab === 'howToUse' && (
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Dosage, Timing & Classical Vehicle (Anupana)
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="text-stone-500 block text-[11px]">Optimal Timing</span>
                  <strong className="text-stone-900 font-semibold">{product.howToUse.timing}</strong>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="text-stone-500 block text-[11px]">Measured Dosage</span>
                  <strong className="text-stone-900 font-semibold">{product.howToUse.dosage}</strong>
                </div>
                <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs">
                  <span className="text-stone-500 block text-[11px]">Recommended Vehicle</span>
                  <strong className="text-stone-900 font-semibold">{product.howToUse.liquidVehicle}</strong>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
                  Step-by-Step Instructions
                </h4>
                <div className="space-y-2">
                  {product.howToUse.instructions.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700">
                      <span className="font-mono font-bold text-stone-900 text-xs shrink-0">
                        0{i + 1}.
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 4. Authenticity & Purity Tests Tab */}
          {activeTab === 'purity' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Verification Protocols & The ₹5.51 Lakh Reward
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1">
                  You can verify every physical jar at home using classical physical tests.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {product.authenticityTests.map((t, i) => (
                  <div key={i} className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2">
                    <strong className="font-serif text-sm font-bold text-stone-900 block">
                      {t.title}
                    </strong>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {t.description}
                    </p>
                    <div className="pt-2 border-t border-stone-200 text-[11px] font-semibold text-emerald-800">
                      Standard: {t.result}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Safety Tab */}
          {activeTab === 'safety' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Important Precautions & Contraindications
              </h3>
              <p className="text-xs text-stone-600">
                Ayurvedic herbs are potent bioactive compounds. Please observe the following guidance:
              </p>

              <div className="space-y-2.5">
                {product.safetyPrecautions.map((precaution, i) => (
                  <div key={i} className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-950">
                    <AlertTriangle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{precaution}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600">
                <strong className="text-stone-900 block font-semibold mb-1">
                  Medical Consultation Disclaimer
                </strong>
                Always consult an Ayurvedic physician or qualified medical doctor if you are pregnant, nursing, taking blood-thinning pharmaceuticals, or managing chronic kidney disease before starting new herbal regimens.
              </div>
            </div>
          )}

          {/* 6. Transparency Disclosure Tab (Addressing Requirement 5: What is known vs unavailable) */}
          {activeTab === 'transparency' && (
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Verified Facts vs Information Under Laboratory Documentation
              </h3>
              <p className="text-xs text-stone-600">
                In compliance with strict consumer transparency standards, we disclose exactly what is verified on file and what documentation is available on demand:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800">
                    <Check className="w-4 h-4" />
                    <span>Verified Physical & Chemical Characteristics</span>
                  </div>
                  <ul className="text-xs text-stone-600 space-y-1.5 list-disc pl-4">
                    <li>High-altitude Himalayan origin ({product.transparencyStatus.originLocation})</li>
                    <li>Surya Tapi water purification method verified</li>
                    <li>Tested for absence of synthetic polymers & steroids</li>
                    <li>Direct dispensary packaging in Surat, Gujarat</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-800">
                    <Info className="w-4 h-4 text-[#c99a45]" />
                    <span>On-Demand Batch Documentation</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {product.transparencyStatus.pendingLaboratoryReports}
                  </p>
                  <a
                    href={\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent(\`Hello Amrutkalp, please share the batch COA lab report for \${product.name}.\`)}\`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold hover:underline"
                  >
                    <span>Request Batch COA PDF via WhatsApp →</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
`,"src/pages/AuthenticityPage.tsx":`import React from 'react';
import { BRAND } from '../data/brand';
import { ShieldCheck, Flame, Droplets, Thermometer, Award, AlertCircle, Phone, ArrowRight } from 'lucide-react';

interface AuthenticityPageProps {
  onGoToShop: () => void;
}

export const AuthenticityPage: React.FC<AuthenticityPageProps> = ({ onGoToShop }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-950 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-[#c99a45]" />
          <span>The Amrutkalp Purity Guarantee</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight">
          {BRAND.guarantee.headlineGujarati}
        </h1>

        <p className="font-serif text-xl sm:text-2xl text-stone-800 font-medium">
          {BRAND.guarantee.headlineEnglish}
        </p>

        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          We stake our company's reputation, our Surat dispensary, and ₹5,51,000 in cold cash on the uncompromised purity of our Grade A+ Himalayan Shilajit resin.
        </p>
      </div>

      {/* Campaign Poster & Manifesto Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111915] text-stone-100 rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl">
        
        {/* Left Manifesto (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#c99a45] font-semibold">
            Why We Created This Challenge
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            The Dark Truth Behind Cheap Shilajit in India
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed">
            <p>
              Genuine high-altitude Himalayan Shilajit takes centuries of geological pressure and alpine botanical fermentation to produce. It cannot be grown in a greenhouse or synthesized in a vat.
            </p>
            <p>
              Because raw Shilajit is scarce, more than 80% of what is sold online consists of industrial sugar syrup, charcoal powder, asphalt bitumen pitch, and cheap gums. Worse, several disreputable brands spike their pastes with synthetic chemical stimulants to mimic an immediate "kick."
            </p>
            <p className="text-amber-200">
              Amrutkalp was founded in Surat, Gujarat to dismantle this deception. We harvest raw pitch exclusively above 16,000 feet, purify it strictly with pure mountain water and sun-drying (Surya Tapi), and test every batch for heavy metals and pesticide residues.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={onGoToShop}
              className="py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs"
            >
              Order 100% Tested Shilajit (₹799)
            </button>
            <a
              href={\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent('Hello Amrutkalp, I want to verify batch lab reports for Shilajit.')}\`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-300 hover:text-white flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Contact Quality Desk: {BRAND.phone}</span>
            </a>
          </div>
        </div>

        {/* Right Typographic Warrant Certificate (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#18261f] via-[#101b15] to-[#0c1410] p-7 text-stone-100 shadow-2xl space-y-4">
            
            <div className="text-center pb-3 border-b border-stone-800 space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#c99a45]">
                LEGAL PURITY UNDERTAKING
              </span>
              <div className="font-serif text-2xl font-bold text-amber-200">
                ₹5,51,000 BOUNTY
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-center space-y-1.5">
              <div className="font-serif text-base font-bold text-amber-100 leading-snug">
                {BRAND.guarantee.headlineGujarati}
              </div>
              <div className="text-[11px] text-stone-400">
                {BRAND.guarantee.headlineHindi}
              </div>
            </div>

            <div className="space-y-2 text-[11px] text-stone-300">
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Testing Lab Recognition</span>
                <strong className="text-emerald-400">Any NABL Accredited Lab</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Acceptable Adulterants</span>
                <strong className="text-emerald-400 font-mono">0.00% (Strict Zero)</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-800">
                <span>Batch Traceability</span>
                <strong className="text-amber-300 font-mono">Laser Batch Seal</strong>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800 text-[10px] text-stone-400 font-mono flex justify-between items-center">
              <span>Amrutkalp QA Division</span>
              <span className="text-amber-400">Surat, Gujarat</span>
            </div>

          </div>
        </div>

      </div>

      {/* The 4 Home Testing Methods */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Laboratory at Home
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
            4 Physical Tests You Can Perform Yourself
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            Test any jar of Amrutkalp in your kitchen before consuming a single drop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Test 1 */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Test 01</span>
                <h3 className="font-serif text-lg font-bold text-stone-900">The Water Solubility & Amber Ribbon Test</h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Place a pea-sized drop into a clear glass of warm water. Pure Shilajit will not float or sink as a gummy lump. It immediately disperses in descending golden-amber ribbons, dissolving completely in 2 minutes without leaving grit, oily scum, or black residue.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700">
              <strong className="text-emerald-800">Pass Standard:</strong> Clear, deep mahogany or amber solution with smooth earthy aroma.
            </div>
          </div>

          {/* Test 2 */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Test 02</span>
                <h3 className="font-serif text-lg font-bold text-stone-900">The Flame & Ash Test</h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Hold a flame beneath a metal spatula with a small dab of resin. Genuine Shilajit will bubble, expand like volcanic lava, and calcify into pale ash. It will NEVER catch fire or emit black petrochemical fumes.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700">
              <strong className="text-emerald-800">Pass Standard:</strong> Non-combustible mineral calcification without chemical smoke.
            </div>
          </div>

          {/* Test 3 */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <Thermometer className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Test 03</span>
                <h3 className="font-serif text-lg font-bold text-stone-900">Thermal Flexibility (Rheology)</h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Place the jar in your refrigerator for 2 hours. Authentic Shilajit turns brittle and glass-like, snapping crisply. When held between your warm fingers, it immediately softens into a pliable, sticky, resinous texture.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700">
              <strong className="text-emerald-800">Pass Standard:</strong> Dynamic temperature-sensitive rheology, proving absence of synthetic plasticizers.
            </div>
          </div>

          {/* Test 4 */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400">Test 04</span>
                <h3 className="font-serif text-lg font-bold text-stone-900">Alcohol Insoluble Screen</h3>
              </div>
            </div>
            <p className="text-xs text-stone-600 leading-relaxed">
              Drop resin into pure rubbing alcohol (surgical spirit or 99% isopropyl). Pure Shilajit will NOT dissolve and will remain intact at the bottom. Adulterated pastes formulated with artificial dyes or fillers dissolve readily in alcohol.
            </p>
            <div className="p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700">
              <strong className="text-emerald-800">Pass Standard:</strong> Intact insoluble resin precipitate, proving absence of synthetic organic dyes.
            </div>
          </div>

        </div>
      </div>

      {/* Official Challenge Claim Terms */}
      <div className="p-6 sm:p-8 bg-stone-100 rounded-2xl border border-stone-300 space-y-4">
        <h3 className="font-serif text-xl font-bold text-stone-900">
          Official Terms & Procedure for the ₹5,51,000 Purity Reward
        </h3>
        
        <ol className="list-decimal pl-5 text-xs text-stone-700 space-y-2 leading-relaxed">
          <li>
            <strong>Procurement:</strong> The product sample must be an unopened, factory-sealed container of Amrutkalp Sanjivani Shilajit with tamper-evident seal intact.
          </li>
          <li>
            <strong>Testing Facility:</strong> Testing must be performed at an Indian government-recognized NABL-accredited chemical testing laboratory with certified Gas Chromatography (GC-MS) or Inductively Coupled Plasma Mass Spectrometry (ICP-MS) capabilities.
          </li>
          <li>
            <strong>Parameters for Payout:</strong> If the laboratory report demonstrates that the resin contains synthetic polymer thickeners, added artificial sugars, heavy metal concentrations exceeding Indian Pharmacopoeia limits (Lead &gt; 10 ppm, Arsenic &gt; 3 ppm, Mercury &gt; 1 ppm), or adulterant coal-tar derivatives, Amrutkalp will honor the ₹5,51,000 cash reward.
          </li>
          <li>
            <strong>Claim Submission:</strong> Submit the original testing report, invoice, and retained seal directly to Amrutkalp Head Dispensary, 108 Biz Hub Shopping, Amroli, Surat, Gujarat 394107.
          </li>
        </ol>
      </div>

    </div>
  );
};
`,"src/pages/IngredientsPage.tsx":`import React from 'react';
import { Leaf, Droplets, Sun, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';

interface IngredientsPageProps {
  onGoToShop: () => void;
}

export const IngredientsPage: React.FC<IngredientsPageProps> = ({ onGoToShop }) => {
  const botanicals = [
    {
      name: 'Pure Himalayan Shilajit',
      sanskrit: 'Shuddha Shilajatu (शुद्ध शिलाजीत)',
      botanical: 'Asphaltum punjabianum / Alpine Mineral Pitch',
      origin: 'High-Altitude Western Himalayan Rock Faces (16,000+ ft)',
      activePrinciple: '>60% Fulvic Acid, Humic Complexes, 84+ Ionic Minerals',
      description: 'Shilajit is a natural mineral-herbal resin formed through the gradual microbial decomposition of alpine flora (including Euphorbia and Trifolium species) under immense rock pressure over centuries. When the summer sun warms the Himalayan cliff faces, the dark resin exudes from fissures. It acts as a premier "Rasayana" (rejuvenator), delivering bioavailable minerals directly through cell walls via low-molecular-weight Fulvic acid.'
    },
    {
      name: 'Kunduru / Shallaki',
      sanskrit: 'Shallaki (शल्लकी)',
      botanical: 'Boswellia serrata (Tapped Resin Extract)',
      origin: 'Dry Deciduous Mountain Forests of Central India',
      activePrinciple: '65% Boswellic Acids (specifically AKBA: 3-O-acetyl-11-keto-beta-boswellic acid)',
      description: 'Shallaki is Ayurveda’s primary botanical intervention for chronic musculoskeletal inflammation. Unlike non-steroidal painkillers that damage gastric mucosa, Boswellic acids selectively inhibit 5-lipoxygenase (5-LOX), shutting down the synthesis of leukotrienes that cause swelling and synovial pain in the lumbar spine, knees, and neck.'
    },
    {
      name: 'Shuddha Guggulu',
      sanskrit: 'Guggulu (गुग्गुलु)',
      botanical: 'Commiphora mukul (Purified Gum Resin)',
      origin: 'Semi-Arid Regions of Gujarat and Rajasthan',
      activePrinciple: 'Guggulsterones (E- and Z-stereoisomers)',
      description: 'Classical texts describe Guggulu as having "Lekhana" (scraping) and "Vata-hara" (vata-pacifying) qualities. It clears stagnant metabolic debris (Ama) accumulated inside deep cartilage and micro-capillaries around vertebrae, restoring natural joint fluid circulation and freedom of movement.'
    },
    {
      name: 'Rasna',
      sanskrit: 'Rasna (रास्ना)',
      botanical: 'Pluchea lanceolata',
      origin: 'Sun-drenched River Valleys of Northwestern India',
      activePrinciple: 'Quercetin, Pluchine, and Terpenoids',
      description: 'Rasna is classical Ayurveda’s foremost single herb for "Amavata" and sciatic pain radiating down the lower limbs. It desensitizes irritated nerve endings, relieves deep muscular spasms in the pelvic girdle, and accelerates the restoration of comfortable mobility upon waking.'
    },
    {
      name: 'Nagori Ashwagandha',
      sanskrit: 'Ashwagandha (अश्वगंधा)',
      botanical: 'Withania somnifera (Dry Root Extract)',
      origin: 'Nagaur Organic Sourcing',
      activePrinciple: 'Withanolides, Withaferin A, and Alkaloids',
      description: 'Known as "Indian Ginseng," Ashwagandha strengthens the musculoskeletal framework (Mamsa and Asthi Dhatu) while mitigating the stress-induced cortisol spikes that cause chronic postural tension in desk-bound and active workers alike.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Shastriya Pharmacopoeia & Modern Phytochemistry
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight">
          Pure Botanical & Mineral Science
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Every Amrutkalp formulation contains 100% active compounds. We reject chemical extracts standardized with maltodextrin, artificial colorants, synthetic binders, and synthetic analgesics.
        </p>
      </div>

      {/* Surya Tapi Sun-Purification Feature */}
      <div className="p-8 bg-[#111915] text-stone-100 rounded-2xl border border-stone-800 shadow-xl space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider">
          <Sun className="w-4 h-4 text-[#c99a45]" />
          <span>The Traditional Purification Standard</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Why Surya Tapi (Sun-Drying) Matters Over Industrial Boiling
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Industrial mass-market brands use commercial boilers at temperatures above 100°C to rapidly evaporate water from raw Shilajit pitch. This brutal heat caramelizes sugars, burns the volatile organic acids, and kills delicate bio-enzymes.
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              At Amrutkalp, we practice authentic <strong>Surya Tapi Shodhana</strong>. Raw rock pitch is soaked in pure Himalayan spring water, filtered through multi-tier cotton screens to eliminate all insoluble grit, and left in shallow glass trays under natural sunlight for 45 to 60 days. The gentle solar heat evaporates moisture without compromising the organic matrix.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-stone-900/90 rounded-xl border border-stone-800 space-y-2">
              <span className="text-xs font-mono font-bold text-amber-300 block">Surya Tapi (Amrutkalp)</span>
              <p className="text-xs text-stone-300">
                Evaporated at ambient 35°C–40°C under sunlight. Retains 100% Fulvic Acid and ionic mineral bioavailability.
              </p>
            </div>
            <div className="p-4 bg-stone-900/90 rounded-xl border border-stone-800 space-y-2">
              <span className="text-xs font-mono font-bold text-red-400 block">Boiler Dried (Cheap Brands)</span>
              <p className="text-xs text-stone-400">
                Boiled at &gt;100°C in industrial kettles. Destroys organic acids and results in burnt, bitter black tar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Botanical Monographs */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Single Herb Monographs
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1">
            Active Ingredients Decoded
          </h2>
        </div>

        <div className="space-y-6">
          {botanicals.map((botanical, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-white rounded-2xl border border-stone-200/90 space-y-4 shadow-2xs"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-stone-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-[#c99a45]" />
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                      {botanical.name}
                    </h3>
                  </div>
                  <span className="text-xs text-stone-500 font-serif italic block mt-0.5">
                    {botanical.sanskrit} · {botanical.botanical}
                  </span>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <span className="text-[11px] font-bold text-stone-900 uppercase block tracking-wider">
                    Key Active
                  </span>
                  <span className="text-xs text-emerald-800 font-semibold font-mono">
                    {botanical.activePrinciple}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {botanical.description}
                </div>
                <div className="md:col-span-4 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2">
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase font-bold block">Geographic Origin</span>
                    <strong className="text-stone-800">{botanical.origin}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 text-[10px] uppercase font-bold block">Classical Action</span>
                    <span className="text-stone-700">Rasayana, Balya & Vata-Shamaka</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center p-8 bg-stone-100 rounded-2xl border border-stone-200 space-y-4">
        <h3 className="font-serif text-2xl font-bold text-stone-900">
          Experience the Difference of Unadulterated Herbal Extraction
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto">
          Explore our complete collection of pure Himalayan Shilajit and targeted joint formulations.
        </p>
        <button
          onClick={onGoToShop}
          className="py-3 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs inline-flex items-center gap-2 cursor-pointer shadow-xs"
        >
          <span>Shop Amrutkalp Formulations</span>
          <ArrowRight className="w-4 h-4 text-[#c99a45]" />
        </button>
      </div>

    </div>
  );
};
`,"src/pages/AboutPage.tsx":`import React from 'react';
import { BRAND } from '../data/brand';
import { MapPin, Phone, Instagram, ShieldCheck, Heart, Users, Sparkles, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onGoToShop: () => void;
  onGoToContact: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onGoToShop, onGoToContact }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Founded in Surat, Gujarat
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight">
          The Amrutkalp Heritage
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          We founded Amrutkalp to rescue classical Ayurveda from mass-market adulteration. Real healing requires real herbs, unhurried time, and uncompromising honesty.
        </p>
      </div>

      {/* Origin Story Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-2xl border border-stone-200/90 shadow-2xs">
        
        {/* Left text (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
            Our Mission & Philosophy
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
            Restoring Faith in Shastriya Ayurveda
          </h2>

          <div className="space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <p>
              In recent years, the wellness industry has turned ancient Ayurvedic wisdom into an assembly line of synthetic capsules and quick-fix pain suppressants. Shilajit, revered in Charaka Samhita as the master restorative resin (Rasayana), was reduced to black coal-tar pastes mixed with sugar and chemical additives.
            </p>
            <p>
              At Amrutkalp, we established our dispensary at <strong>Biz Hub Shopping, Amroli, Surat</strong> with a singular mandate: supply people with the exact, uncompromised formulations described in ancient texts.
            </p>
            <p>
              When we extract Himalayan Shilajit, we harvest only from pristine altitudes above 16,000 feet where no human contamination exists. When we craft Amrutvati for morning back and joint pain, we use genuine wild Shallaki resin and Shuddha Guggulu, rather than masking joint friction with synthetic steroids.
            </p>
          </div>

          <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-800 space-y-1">
            <strong className="text-stone-950 font-semibold block">
              The Surat Dispensary Pledge:
            </strong>
            <p className="text-stone-600 leading-relaxed text-[11px]">
              Every customer can walk into our Amroli center, inspect physical batch containers, witness solubility tests firsthand, and consult directly with our staff.
            </p>
          </div>
        </div>

        {/* Right Typographic Heritage Plate (5 cols) */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-stone-800 bg-[#111915] text-stone-100 p-7 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-[10px] font-mono">
              <span className="text-amber-300">ESTABLISHED IN SURAT</span>
              <span className="text-stone-400">GUJARAT, INDIA</span>
            </div>

            <div className="space-y-1">
              <div className="font-serif text-2xl font-bold text-white">AMRUTKALP</div>
              <div className="text-xs text-amber-200/90 font-serif italic">Pure Ayurvedic Herbals</div>
            </div>

            <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 space-y-2 text-xs">
              <div className="text-[10px] uppercase font-mono text-stone-400">Dispensary Premises:</div>
              <p className="text-stone-300 text-xs leading-relaxed">
                108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Amroli, Surat, Gujarat 394107
              </p>
              <div className="text-[11px] text-amber-300 pt-1 border-t border-stone-800/80">
                Direct Consultation: +91 81413 23395
              </div>
            </div>

            <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400 font-mono">
              <span>Ayurvedic Tradition</span>
              <span className="text-emerald-400">100% Shastriya</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Core Commitments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Zero Synthetic Adulteration
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            We reject synthetic thickeners, preservatives, artificial sweeteners, and pharmaceutical analgesics. What is on our label is 100% active botanical or mineral resin.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Human-to-Human Transparency
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            No robotic chatbots or outsourced phone trees. When you message or call +91 {BRAND.phone}, you speak directly with individuals who know our batches and formulation history.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Classical Surya Tapi Processing
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            We dry our purified resin under natural Gujarati sunlight over 60 days rather than flash-boiling in kettles, protecting delicate active enzymes and Fulvic acid.
          </p>
        </div>
      </div>

      {/* Location and Store Info Box */}
      <div className="p-8 bg-[#111915] text-stone-100 rounded-2xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-amber-300 text-xs font-semibold">
            <MapPin className="w-4 h-4 text-[#c99a45]" />
            <span>Surat Showroom & Consultation Center</span>
          </div>
          <h3 className="font-serif text-2xl font-bold text-white">
            {BRAND.address.shop}, Amroli, Surat
          </h3>
          <p className="text-xs text-stone-400 max-w-md">
            {BRAND.address.landmark}, Surat, Gujarat 394107 · Open Mon–Sat 9:30 AM to 8:00 PM
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <button
            onClick={onGoToContact}
            className="py-3 px-5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold rounded-lg transition-colors text-xs cursor-pointer border border-stone-700"
          >
            Store Hours & Map
          </button>
          <button
            onClick={onGoToShop}
            className="py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs"
          >
            Explore Remedies
          </button>
        </div>
      </div>

    </div>
  );
};
`,"src/pages/JournalPage.tsx":`import React, { useState } from 'react';
import { ARTICLES } from '../data/articles';
import { JournalArticle } from '../types';
import { BookOpen, Clock, Calendar, ArrowRight, ChevronLeft, ShieldCheck } from 'lucide-react';

interface JournalPageProps {
  onSelectProduct: (slug: string) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onSelectProduct }) => {
  const [selectedArticle, setSelectedArticle] = useState<JournalArticle | null>(null);

  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <button
          onClick={() => setSelectedArticle(null)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to All Articles</span>
        </button>

        {/* Article Header */}
        <div className="space-y-4 border-b border-stone-200 pb-6">
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span className="uppercase tracking-wider font-semibold text-[#b3832f]">
              {selectedArticle.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>{selectedArticle.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{selectedArticle.publishDate}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight leading-tight">
            {selectedArticle.title}
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed italic">
            "{selectedArticle.excerpt}"
          </p>
        </div>

        {/* Article Body */}
        <div className="space-y-8 text-stone-800 leading-relaxed text-sm sm:text-base">
          {selectedArticle.content.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-950">
                {sec.sectionHeading}
              </h2>
              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom Recommendation Box */}
        <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
          <div>
            <h3 className="font-serif text-lg font-bold text-stone-900">
              Ready to verify authentic Ayurvedic formulations?
            </h3>
            <p className="text-xs text-stone-600 mt-0.5">
              Explore Sanjivani Pure Shilajit with our open ₹5,51,000 guarantee.
            </p>
          </div>
          <button
            onClick={() => onSelectProduct('sanjivani-shilajit')}
            className="py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs whitespace-nowrap cursor-pointer shadow-xs"
          >
            Explore Sanjivani Shilajit →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Knowledge Base & Clinical Wisdom
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight">
          The Amrutkalp Wellness Journal
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Grounded, science-backed guides on Ayurvedic Rasayanas, testing purity, dosage protocols, and chronic joint care without marketing fluff.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map(article => (
          <div
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 p-6 hover:border-stone-400 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
                <span className="uppercase tracking-wider font-semibold text-[#b3832f]">
                  {article.category}
                </span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h2 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-900 group-hover:text-amber-900">
              <span>Read Full Guide</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
`,"src/pages/ContactPage.tsx":`import React, { useState } from 'react';
import { BRAND } from '../data/brand';
import { MapPin, Phone, MessageCircle, Clock, Send, CheckCircle2, AlertCircle, Instagram, Facebook } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    topic: 'consultation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError('Please fill in your name, phone, and message first.');
      return;
    }
    const text = \`*New Customer Inquiry - Amrutkalp Website*\\n\\n• Name: \${formData.name}\\n• Phone: \${formData.phone}\\n• Topic: \${formData.topic.toUpperCase()}\\n• Message: \${formData.message}\`;
    window.open(\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent(text)}\`, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Surat Dispensary & Care Desk
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight">
          Connect with Amrutkalp
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
          Whether you need personalized dosage advice, wish to verify a batch report, or want to visit our physical showroom in Surat, our team is directly reachable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Information Column (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Showroom Address Card */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Surat Showroom & Dispensary
                </h3>
                <span className="text-xs text-stone-500">Registered Office</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong>AMRUTKALP (Pure Ayurvedic Herbals)</strong><br />
              {BRAND.address.shop},<br />
              {BRAND.address.landmark},<br />
              {BRAND.address.area}, {BRAND.address.city},<br />
              {BRAND.address.state} - {BRAND.address.pincode}, India.
            </p>

            <a
              href={\`https://maps.google.com/?q=\${encodeURIComponent(BRAND.address.full)}\`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#b3832f] font-semibold hover:underline"
            >
              <span>Open in Google Maps →</span>
            </a>
          </div>

          {/* Direct Channels Card */}
          <div className="p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-4">
            <h3 className="font-serif text-base font-bold text-stone-900 border-b border-stone-100 pb-2">
              Direct Phone & WhatsApp Helplines
            </h3>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c99a45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[11px]">Direct Hotline</span>
                  <a href={\`tel:\${BRAND.phone}\`} className="font-semibold text-stone-900 hover:text-amber-900">
                    {BRAND.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[11px]">WhatsApp Advisory</span>
                  <a
                    href={\`https://wa.me/\${BRAND.whatsappNumber}?text=\${encodeURIComponent('Hello Amrutkalp team, I would like to consult with an Ayurvedic specialist.')}\`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-emerald-700 hover:underline"
                  >
                    +91 {BRAND.phone} (Tap to Chat)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#c99a45] shrink-0 mt-0.5" />
                <div>
                  <span className="text-stone-500 block text-[11px]">Consultation Timings</span>
                  <span className="text-stone-800 font-medium">
                    Monday to Saturday: 9:30 AM – 8:00 PM (IST)
                  </span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-3 border-t border-stone-100 flex items-center gap-4 text-xs">
              <a
                href={BRAND.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900"
              >
                <Instagram className="w-4 h-4" />
                <span>{BRAND.social.instagramHandle}</span>
              </a>
              <a
                href={BRAND.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900"
              >
                <Facebook className="w-4 h-4" />
                <span>{BRAND.social.facebookName}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Right Form Column (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs space-y-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Send an Ayurvedic Inquiry
            </h3>
            <p className="text-xs text-stone-500 mt-1">
              Have questions about dosage, batch certificates, or shipping status? Leave your message below.
            </p>
          </div>

          {submitted ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-lg font-bold text-emerald-950">
                Inquiry Received!
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed max-w-md mx-auto">
                Thank you, <strong>{formData.name}</strong>. An Amrutkalp representative from our Surat center will reach out to you at <strong>{formData.phone}</strong> shortly.
              </p>
              <button
                onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', topic: 'consultation', message: '' }); }}
                className="mt-3 px-4 py-2 bg-emerald-800 text-white text-xs font-semibold rounded-lg hover:bg-emerald-900"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Patel"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Topic of Consultation *
                </label>
                <select
                  value={formData.topic}
                  onChange={e => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white"
                >
                  <option value="consultation">Ayurvedic Dosage & Regimen Advice</option>
                  <option value="order">Order Dispatch & Delivery Tracking</option>
                  <option value="challenge">₹5,51,000 Authenticity Challenge Inquiry</option>
                  <option value="bulk">Wholesale / Practitioner Partnership</option>
                  <option value="other">General Feedback / Store Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Your Message or Health Query *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your health question, joint stiffness duration, or inquiry..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-5 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#c99a45]" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto py-3 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Send via WhatsApp (+91 {BRAND.phone})</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>

    </div>
  );
};
`,"src/pages/PoliciesPage.tsx":`import React, { useState } from 'react';
import { BRAND } from '../data/brand';
import { Truck, RotateCcw, ShieldAlert, Lock, CheckCircle2, Phone } from 'lucide-react';

export const PoliciesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shipping' | 'returns' | 'medical' | 'privacy'>('shipping');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#b3832f] font-semibold">
          Customer Commitments & Terms
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight">
          Policies & Transparency
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl mx-auto">
          Clear, honest business policies governing shipping, returns, Ayurvedic medical disclosures, and customer privacy.
        </p>
      </div>

      {/* Policy Tabs */}
      <div className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs">
        
        {/* Tab Bar */}
        <div className="flex overflow-x-auto border-b border-stone-200 bg-stone-50/70 p-2 gap-1">
          <button
            onClick={() => setActiveTab('shipping')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 \${
              activeTab === 'shipping'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            <Truck className="w-3.5 h-3.5 text-[#c99a45]" />
            <span>Shipping & COD</span>
          </button>

          <button
            onClick={() => setActiveTab('returns')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 \${
              activeTab === 'returns'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#c99a45]" />
            <span>Returns & Replacement</span>
          </button>

          <button
            onClick={() => setActiveTab('medical')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 \${
              activeTab === 'medical'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            <ShieldAlert className="w-3.5 h-3.5 text-[#c99a45]" />
            <span>Medical Disclaimer</span>
          </button>

          <button
            onClick={() => setActiveTab('privacy')}
            className={\`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 \${
              activeTab === 'privacy'
                ? 'bg-white text-stone-950 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }\`}
          >
            <Lock className="w-3.5 h-3.5 text-[#c99a45]" />
            <span>Privacy & Terms</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 sm:p-8 space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed">
          
          {/* 1. Shipping */}
          {activeTab === 'shipping' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Shipping & Cash on Delivery Policy
              </h2>
              
              <div className="space-y-3">
                <p>
                  All Amrutkalp orders are inspected, batch-sealed, and dispatched directly from our registered dispensary at <strong>108, Biz Hub Shopping, Amroli, Surat, Gujarat 394107</strong>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 text-sm font-semibold mb-1">
                      Dispatch Timelines
                    </strong>
                    <p className="text-stone-600 text-xs">
                      Orders placed before 2:00 PM are dispatched on the same business day. All other orders dispatch within 24 to 48 hours (excluding Sundays & national holidays).
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-200">
                    <strong className="block text-stone-900 text-sm font-semibold mb-1">
                      Free Express Delivery Threshold
                    </strong>
                    <p className="text-stone-600 text-xs">
                      Orders of ₹{BRAND.shippingThreshold} and above enjoy 100% Free Express Shipping. A flat fee of ₹70 applies to orders below this amount.
                    </p>
                  </div>
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 pt-2">
                  Estimated Delivery Times by Region
                </h3>
                <ul className="list-disc pl-5 space-y-1 text-xs text-stone-600">
                  <li><strong>Gujarat & Western India:</strong> 1 to 3 business days</li>
                  <li><strong>Metros (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata):</strong> 2 to 4 business days</li>
                  <li><strong>Rest of India:</strong> 3 to 6 business days</li>
                  <li><strong>Remote / Northeast / Island Regions:</strong> 5 to 8 business days via Speed Post</li>
                </ul>

                <h3 className="font-serif text-lg font-bold text-stone-900 pt-2">
                  Cash on Delivery (COD) Procedure
                </h3>
                <p className="text-xs text-stone-600">
                  We offer Cash on Delivery across most serviceable Indian pincodes. You may inspect the outer package for seal integrity before handing cash or scanning the courier agent's UPI QR code.
                </p>
              </div>
            </div>
          )}

          {/* 2. Returns */}
          {activeTab === 'returns' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                7-Day Replacement Guarantee
              </h2>

              <p>
                Due to the ingestible nature of Ayurvedic herbal preparations and hygiene regulations, opened jars and pouches cannot be returned for resale. However, we offer an unconditional <strong>7-Day Transit Replacement Guarantee</strong>.
              </p>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-2">
                <strong className="font-semibold block">When are you eligible for an immediate free replacement?</strong>
                <ul className="list-disc pl-5 space-y-1 text-emerald-900">
                  <li>If the product arrives broken, cracked, or leaking in transit.</li>
                  <li>If the outer security seal or pouch barrier has been tampered with prior to delivery.</li>
                  <li>If you received an incorrect variant or incomplete quantity.</li>
                </ul>
              </div>

              <h3 className="font-serif text-lg font-bold text-stone-900 pt-2">
                How to Request a Replacement in 3 Simple Steps:
              </h3>
              <ol className="list-decimal pl-5 space-y-2 text-xs text-stone-600">
                <li>
                  Take a photo or brief 5-second video of the damaged box or broken seal within 7 days of receiving the package.
                </li>
                <li>
                  Send the photo along with your Order Number (e.g. AK-XXXXXX) directly to our official WhatsApp care desk at <strong>+91 {BRAND.phone}</strong>.
                </li>
                <li>
                  Our dispatch supervisor in Surat will immediately ship a brand-new replacement unit at zero cost to you with expedited tracking.
                </li>
              </ol>
            </div>
          )}

          {/* 3. Medical Disclaimer */}
          {activeTab === 'medical' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Statutory Ayurvedic Medical Disclaimer
              </h2>

              <div className="p-4 bg-amber-50/80 border border-amber-300 rounded-xl space-y-2 text-xs text-amber-950">
                <strong className="block font-semibold">Important Health Notice:</strong>
                <p className="leading-relaxed">
                  The statements, articles, and product information published on this website have not been evaluated by the FDA or conventional pharmaceutical regulatory bodies. Amrutkalp products are classical Ayurvedic preparations formulated according to traditional Indian texts (Charaka Samhita, Sushruta Samhita, and the Ayurvedic Pharmacopoeia of India).
                </p>
              </div>

              <div className="space-y-3 text-xs text-stone-600 leading-relaxed">
                <p>
                  Amrutkalp formulations are intended to support natural vitality, metabolic equilibrium, and musculoskeletal joint mobility. They are <strong>not designed to diagnose, treat, cure, or prevent any severe medical disease</strong> in place of supervised medical therapeutics.
                </p>
                <p>
                  <strong>Specific Contraindications:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Individuals with chronic renal insufficiency, severe gout (hyperuricemia), or iron-overload conditions (hemochromatosis) should not consume Shilajit without specialized medical supervision.</li>
                  <li>Pregnant and breastfeeding mothers should not take Amrutvati or Shilajit without explicit authorization from an Ayurvedic Vaidya or obstetrician.</li>
                  <li>If you are currently taking prescription blood thinners or cardiac medications, please maintain a 2-hour window between pharmaceutical doses and herbal remedies.</li>
                </ul>
              </div>
            </div>
          )}

          {/* 4. Privacy */}
          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Customer Privacy & Data Protection
              </h2>

              <p className="text-xs text-stone-600">
                At Amrutkalp, we respect your privacy. We collect only the information necessary to fulfill your order and provide direct Ayurvedic consultation.
              </p>

              <div className="space-y-2 text-xs text-stone-600">
                <strong className="text-stone-900 block font-semibold">Our Privacy Commitments:</strong>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>We never sell, rent, or lease your phone number, email, or physical address to third-party telemarketers or ad brokers.</li>
                  <li>Your phone number is utilized strictly to provide order dispatch SMS updates and direct WhatsApp consultation if requested by you.</li>
                  <li>All payment transactions and order records are handled through encrypted channels.</li>
                </ul>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Direct Contact Banner */}
      <div className="p-6 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Have questions about our terms or a recent order?
          </h3>
          <p className="text-xs text-stone-600 mt-0.5">
            Our Surat care desk is available Monday through Saturday.
          </p>
        </div>
        <a
          href={\`tel:\${BRAND.phone}\`}
          className="py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-xs"
        >
          <Phone className="w-3.5 h-3.5 text-[#c99a45]" />
          <span>Call Quality Care (+91 {BRAND.phone})</span>
        </a>
      </div>

    </div>
  );
};
`},A=`/app/applet/src/components/SourceCodeModal.tsx`,ft=({isOpen:e,onClose:t})=>{let n=Object.keys(dt),[r,i]=(0,_.useState)(n[0]||`src/App.tsx`),[a,o]=(0,_.useState)(!1);if(!e)return null;let s=dt[r]||``;return(0,b.jsxDEV)(`div`,{className:`fixed inset-0 z-50 overflow-y-auto`,children:[(0,b.jsxDEV)(`div`,{onClick:t,className:`fixed inset-0 bg-stone-950/80 backdrop-blur-xs transition-opacity`},void 0,!1,{fileName:A,lineNumber:40,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`flex min-h-full items-center justify-center p-3 sm:p-6 text-left`,children:(0,b.jsxDEV)(`div`,{className:`relative w-full max-w-5xl rounded-2xl bg-[#111915] text-stone-100 shadow-2xl border border-stone-800 flex flex-col max-h-[90vh] overflow-hidden`,children:[(0,b.jsxDEV)(`div`,{className:`p-4 sm:p-5 border-b border-stone-800 bg-[#0d1511] flex items-center justify-between gap-4`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-9 h-9 rounded-lg bg-amber-950/70 border border-amber-600/40 flex items-center justify-center text-[#c99a45]`,children:(0,b.jsxDEV)(ke,{className:`w-5 h-5`},void 0,!1,{fileName:A,lineNumber:52,columnNumber:17},void 0)},void 0,!1,{fileName:A,lineNumber:51,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg sm:text-xl font-bold text-white`,children:`AMRUTKALP Source Code Browser`},void 0,!1,{fileName:A,lineNumber:55,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-400`,children:`Select any project file below to view, copy, or download directly without zips.`},void 0,!1,{fileName:A,lineNumber:58,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:54,columnNumber:15},void 0)]},void 0,!0,{fileName:A,lineNumber:50,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:t,className:`p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer`,"aria-label":`Close code browser`,children:(0,b.jsxDEV)(rt,{className:`w-5 h-5`},void 0,!1,{fileName:A,lineNumber:69,columnNumber:15},void 0)},void 0,!1,{fileName:A,lineNumber:64,columnNumber:13},void 0)]},void 0,!0,{fileName:A,lineNumber:49,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`flex flex-col md:flex-row flex-1 overflow-hidden min-h-0`,children:[(0,b.jsxDEV)(`div`,{className:`w-full md:w-64 bg-[#0a0f0d] border-b md:border-b-0 md:border-r border-stone-800 p-3 overflow-y-auto max-h-48 md:max-h-none space-y-1`,children:[(0,b.jsxDEV)(`div`,{className:`text-[10px] uppercase font-mono tracking-widest text-stone-500 px-2 py-1 flex items-center gap-1.5`,children:[(0,b.jsxDEV)(je,{className:`w-3.5 h-3.5 text-amber-400`},void 0,!1,{fileName:A,lineNumber:79,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:[`Project Files (`,n.length,`)`]},void 0,!0,{fileName:A,lineNumber:80,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:78,columnNumber:15},void 0),n.map(e=>(0,b.jsxDEV)(`button`,{onClick:()=>{i(e),o(!1)},className:`w-full text-left px-2.5 py-1.5 rounded text-xs font-mono truncate transition-colors flex items-center gap-2 cursor-pointer ${r===e?`bg-amber-900/40 text-amber-200 border border-amber-500/40`:`text-stone-400 hover:text-stone-200 hover:bg-stone-900`}`,children:[(0,b.jsxDEV)(`span`,{className:`text-[10px] text-stone-600 shrink-0`,children:`📄`},void 0,!1,{fileName:A,lineNumber:92,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`truncate`,children:e},void 0,!1,{fileName:A,lineNumber:93,columnNumber:19},void 0)]},e,!0,{fileName:A,lineNumber:83,columnNumber:17},void 0))]},void 0,!0,{fileName:A,lineNumber:77,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`flex-1 flex flex-col bg-[#0e1612] overflow-hidden min-w-0`,children:[(0,b.jsxDEV)(`div`,{className:`px-4 py-2.5 bg-[#141f19] border-b border-stone-800 flex items-center justify-between gap-3 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`font-mono text-amber-300 font-semibold truncate text-[11px] sm:text-xs`,children:r},void 0,!1,{fileName:A,lineNumber:103,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 shrink-0`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>{navigator.clipboard.writeText(s),o(!0),setTimeout(()=>o(!1),2e3)},className:`px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-700`,children:a?(0,b.jsxDEV)(b.Fragment,{children:[(0,b.jsxDEV)(ve,{className:`w-3.5 h-3.5 text-emerald-400`},void 0,!1,{fileName:A,lineNumber:114,columnNumber:25},void 0),(0,b.jsxDEV)(`span`,{className:`text-emerald-400`,children:`Copied!`},void 0,!1,{fileName:A,lineNumber:115,columnNumber:25},void 0)]},void 0,!0,{fileName:A,lineNumber:113,columnNumber:23},void 0):(0,b.jsxDEV)(b.Fragment,{children:[(0,b.jsxDEV)(we,{className:`w-3.5 h-3.5 text-stone-400`},void 0,!1,{fileName:A,lineNumber:119,columnNumber:25},void 0),(0,b.jsxDEV)(`span`,{children:`Copy Code`},void 0,!1,{fileName:A,lineNumber:120,columnNumber:25},void 0)]},void 0,!0,{fileName:A,lineNumber:118,columnNumber:23},void 0)},void 0,!1,{fileName:A,lineNumber:108,columnNumber:19},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>{let e=new Blob([s],{type:`text/plain;charset=utf-8`}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=r.split(`/`).pop()||`file.txt`,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(t)},className:`px-3 py-1.5 bg-[#c99a45] hover:bg-amber-400 text-stone-950 font-semibold rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(Ee,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:A,lineNumber:129,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{className:`hidden sm:inline`,children:`Save File`},void 0,!1,{fileName:A,lineNumber:130,columnNumber:21},void 0)]},void 0,!0,{fileName:A,lineNumber:125,columnNumber:19},void 0)]},void 0,!0,{fileName:A,lineNumber:107,columnNumber:17},void 0)]},void 0,!0,{fileName:A,lineNumber:102,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`flex-1 p-4 overflow-auto bg-[#0a0f0d] text-stone-300 font-mono text-[11px] sm:text-xs leading-relaxed select-all`,children:(0,b.jsxDEV)(`pre`,{className:`whitespace-pre`,children:s},void 0,!1,{fileName:A,lineNumber:137,columnNumber:17},void 0)},void 0,!1,{fileName:A,lineNumber:136,columnNumber:15},void 0)]},void 0,!0,{fileName:A,lineNumber:99,columnNumber:13},void 0)]},void 0,!0,{fileName:A,lineNumber:74,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-[#0d1511] border-t border-stone-800 text-center text-[11px] text-stone-400`,children:[`Click `,(0,b.jsxDEV)(`strong`,{children:`Copy Code`},void 0,!1,{fileName:A,lineNumber:148,columnNumber:19},void 0),` on any file to paste directly into your local IDE (VS Code, Cursor, etc.).`]},void 0,!0,{fileName:A,lineNumber:147,columnNumber:11},void 0)]},void 0,!0,{fileName:A,lineNumber:46,columnNumber:9},void 0)},void 0,!1,{fileName:A,lineNumber:45,columnNumber:7},void 0)]},void 0,!0,{fileName:A,lineNumber:38,columnNumber:5},void 0)},pt=`/app/applet/src/components/ErrorBoundary.tsx`,mt=class extends _.Component{constructor(...e){super(...e),this.state={hasError:!1,error:null},this.handleReload=()=>{window.location.hash=``,window.location.reload()},this.handleReset=()=>{try{localStorage.removeItem(`amrutkalp_cart_v1`)}catch{}window.location.hash=``,window.location.reload()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error(`Uncaught error in AMRUTKALP application:`,e,t)}render(){return this.state.hasError?(0,b.jsxDEV)(`div`,{className:`min-h-screen bg-[#fbfaf7] text-stone-900 flex items-center justify-center p-6 font-sans`,children:(0,b.jsxDEV)(`div`,{className:`max-w-lg w-full bg-white rounded-2xl border border-stone-200 p-8 shadow-xl text-center space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`w-16 h-16 rounded-full bg-amber-50 text-amber-800 flex items-center justify-center mx-auto border border-amber-200`,children:(0,b.jsxDEV)(qe,{className:`w-8 h-8`},void 0,!1,{fileName:pt,lineNumber:48,columnNumber:15},this)},void 0,!1,{fileName:pt,lineNumber:47,columnNumber:13},this),(0,b.jsxDEV)(`div`,{className:`space-y-2`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#c99a45] font-semibold`,children:`AMRUTKALP Pure Ayurvedic Herbals`},void 0,!1,{fileName:pt,lineNumber:52,columnNumber:15},this),(0,b.jsxDEV)(`h1`,{className:`text-2xl font-serif font-bold text-stone-900`,children:`Application Recovered`},void 0,!1,{fileName:pt,lineNumber:55,columnNumber:15},this),(0,b.jsxDEV)(`p`,{className:`text-sm text-stone-600 leading-relaxed`,children:`The page encountered an unexpected rendering issue. You can safely return to the home page or reload the store.`},void 0,!1,{fileName:pt,lineNumber:58,columnNumber:15},this)]},void 0,!0,{fileName:pt,lineNumber:51,columnNumber:13},this),(0,b.jsxDEV)(`div`,{className:`flex flex-col sm:flex-row gap-3 justify-center pt-2`,children:[(0,b.jsxDEV)(`button`,{onClick:this.handleReload,className:`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#111915] text-amber-100 font-semibold text-sm hover:bg-stone-800 transition-colors cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(Ue,{className:`w-4 h-4`},void 0,!1,{fileName:pt,lineNumber:68,columnNumber:17},this),(0,b.jsxDEV)(`span`,{children:`Reload Application`},void 0,!1,{fileName:pt,lineNumber:69,columnNumber:17},this)]},void 0,!0,{fileName:pt,lineNumber:64,columnNumber:15},this),(0,b.jsxDEV)(`button`,{onClick:this.handleReset,className:`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-stone-100 text-stone-700 hover:bg-stone-200 font-semibold text-sm transition-colors cursor-pointer`,children:[(0,b.jsxDEV)(Ne,{className:`w-4 h-4`},void 0,!1,{fileName:pt,lineNumber:76,columnNumber:17},this),(0,b.jsxDEV)(`span`,{children:`Clear Cache & Restart`},void 0,!1,{fileName:pt,lineNumber:77,columnNumber:17},this)]},void 0,!0,{fileName:pt,lineNumber:72,columnNumber:15},this)]},void 0,!0,{fileName:pt,lineNumber:63,columnNumber:13},this)]},void 0,!0,{fileName:pt,lineNumber:46,columnNumber:11},this)},void 0,!1,{fileName:pt,lineNumber:45,columnNumber:9},this):this.props.children}},ht=[{id:`sanjivani-himalayan-shilajit`,slug:`sanjivani-shilajit`,name:`Sanjivani Pure Himalayan Shilajit`,sanskritName:`अमृतकल्प संजीवनी शुद्ध शिलाजीत`,category:`vitality`,categoryLabel:`Vitality & Stamina`,price:799,originalPrice:2e3,discountPercent:60,weightOrQuantity:`20 Grams`,servingCount:`40–50 Servings (30-day Supply)`,rating:4.9,reviewCount:142,images:[`/assets/products/sanjivani-shilajit-pure.jpg`],primaryImage:`/assets/products/sanjivani-shilajit-pure.jpg`,shortDescription:`Wild-harvested mineral pitch extracted from high Himalayan altitudes (16,000+ ft). Naturally rich in 84+ ionic trace minerals and >60% Fulvic Acid.`,fullDescription:`Amrutkalp Sanjivani is Grade A+ pure Himalayan Shilajit resin, traditionally purified through classical Shodhana methods using pure water and sun drying (Surya Tapi). Backed by Amrutkalp’s open ₹5,51,000 public authenticity challenge, every jar delivers raw botanical-mineral vitality without synthetic thickeners, preservatives, heavy metals, or added sugar.`,campaignKicker:`The Purity Challenge Winner`,campaignSlogan:`PURE POWER. PURE SHILAJIT.`,keyHighlights:[`High-altitude Himalayan wild harvest (16,000–18,000 ft)`,`Rich in bioactive Fulvic Acid (>60%) and Humic minerals`,`Classical Surya-Tapi purification preserving living bio-enzymes`,`Backed by our open ₹5,51,000 laboratory authenticity challenge`,`Free specialized brass dosage spoon included in every box`],verifiedBenefits:[`Promotes cellular ATP production for steady all-day stamina without jittery caffeine crashes`,`Enhances natural testosterone levels, vitality, and muscle recovery speed`,`Fulvic acid acts as an organic chelator, improving nutrient bioavailability across cell membranes`,`Supports mental clarity, cognitive endurance, and stress adaptation (Rasayana)`,`Assists healthy immune cell responses and cellular longevity`],safetyPrecautions:[`Do not consume with boiling liquids; dissolve only in lukewarm water, warm milk, or green tea.`,`Not recommended for individuals with diagnosed active kidney stone disorders (high uric acid) without medical advice.`,`Store in a cool, dry place. Resin naturally solidifies when cold and softens at ambient temperatures (a hallmark of authentic Shilajit).`],howToUse:{timing:`Every morning on an empty stomach (or 30 mins before evening workout)`,dosage:`Pea-sized portion (300 mg to 500 mg) using the included spoon`,liquidVehicle:`150ml of lukewarm water, warm cow’s milk, or green tea`,instructions:[`Scoop a small pea-sized portion of resin onto the tip of the spoon.`,`Stir gently into lukewarm water or warm milk until completely dissolved.`,`Notice the golden amber to deep mahogany liquid color with an earthy herbal aroma.`,`Drink while warm. Maintain consistent daily intake for 6 to 8 weeks for deep restorative effects.`]},ingredients:[{name:`Pure Himalayan Shilajit Resin (Asphaltum punjabianum)`,botanicalName:`Asphaltum punjabianum / Mineral Pitch`,role:`Primary active Rasayana compound`,source:`High-altitude Himalayan rock faces`,percentage:`100% pure purified resin (0% additives)`},{name:`Bioactive Fulvic Acid`,role:`Cellular transport molecule & antioxidant`,source:`Naturally occurring in purified resin`,percentage:`> 60% w/w content`},{name:`Ionic Trace Minerals (Zinc, Magnesium, Iron, Selenium)`,role:`Metabolic co-factors and cellular rehydration`,source:`Centuries-old decomposed medicinal alpine flora`,percentage:`84+ ionic mineral profile`}],authenticityTests:[{title:`Complete Water Solubility Test`,description:`Authentic Shilajit dissolves smoothly in lukewarm liquid without leaving sand, grease, or synthetic sedimentation.`,result:`100% clean translucent amber dissolution`},{title:`Flame / Burn Test`,description:`Pure Shilajit bubbles and expands into a white ash structure without producing chemical sparks or toxic smoke.`,result:`Zero flammable ignition, pure mineral ash formation`},{title:`Thermal Flexibility Test`,description:`Genuine resin hardens in refrigeration and becomes pliable, tacky, and glossy at body/room temperature.`,result:`Responsive natural rheology without artificial gums`}],transparencyStatus:{verifiedBy:`Classical Shodhana & Third-Party Chemical Analysis`,originLocation:`Western Himalayan Rock Formations (16,000 ft)`,batchStatus:`Fresh Batch Q4-2026`,pendingLaboratoryReports:`Individual batch Heavy Metals & Microbial Certificate of Analysis (COA) dispatched upon WhatsApp request to 8141323395.`},inStock:!0,freeShipping:!0},{id:`amrutvati-ayurvedic-pain-relief`,slug:`amrutvati-pain-relief`,name:`Amrutvati Shuddh Ayurvedic Pain Relief`,sanskritName:`अमृतकल्प अमृतवटी (वातशामक व दर्द निवारक)`,category:`pain-relief`,categoryLabel:`Joint Health & Mobility`,price:599,originalPrice:1200,discountPercent:50,weightOrQuantity:`30 Tablets`,servingCount:`15–30 Days (1–2 Tablets Daily)`,rating:4.8,reviewCount:96,images:[],primaryImage:``,shortDescription:`Classical Ayurvedic tablet formulation engineered for morning lower back pain (कमर दर्द), cervical spine stiffness, sciatica discomfort, and joint mobility.`,fullDescription:`Amrutvati is formulated around the principle "#आराम होगा तो काम होगा" (If there is relief, there is productivity). Morning lumbar stiffness and aching joints disrupt your entire workday. Amrutvati harnesses traditional Vata-pacifying herbs—Shallaki, Shuddha Guggulu, Rasna, and Ashwagandha—to soothe deep musculoskeletal inflammation without gastric burning or dependence.`,campaignKicker:`#आराम होगा तो काम होगा`,campaignSlogan:`सुबह उठकर कमर में दर्द? यह है वो दर्द निवारक जो आपको चाहिए`,keyHighlights:[`Targeted for morning lumbar stiffness and chronic lower back pain`,`Provides relief for neck/cervical discomfort and shoulder tension`,`Non-drowsy, 100% Ayurvedic herb formulation without NSAIDs or steroids`,`Supports cartilage nutrition and smooth joint synovial lubrication`,`Resealable multi-barrier pouch preserves active herbal oils`],verifiedBenefits:[`Alleviates morning lumbar rigidity, enabling comfortable waking and standing`,`Soothes sciatic nerve irritability and radiating leg tension`,`Reduces inflammatory cytokines in synovial joint capsules (Boswellic acids)`,`Aids desk workers and commuters experiencing postural spine strain`,`Promotes deep restorative musculoskeletal relaxation overnight`],safetyPrecautions:[`Always take after meals with lukewarm water; do not take on an entirely empty stomach.`,`Consult an Ayurvedic Vaidya or physician if currently pregnant or undergoing chemotherapy.`,`Keep pouch tightly sealed away from direct humidity.`],howToUse:{timing:`Twice daily after meals (Post-Breakfast and Post-Dinner)`,dosage:`1 tablet twice daily for acute stiffness; 1 tablet daily for maintenance`,liquidVehicle:`Lukewarm water or warm milk`,instructions:[`Take 1 tablet 20–30 minutes after your morning breakfast.`,`Swallow with a full glass of lukewarm water.`,`Repeat post-dinner for individuals with severe nocturnal or morning stiffness.`,`Continue for at least 3 weeks alongside light morning lumbar stretches for optimal mobility.`]},ingredients:[{name:`Kunduru / Shallaki (Boswellia serrata)`,botanicalName:`Boswellia serrata (65% Boswellic acids)`,role:`Inhibits 5-LOX enzyme, soothing joint inflammation`,source:`Sustainably tapped organic tree resin`},{name:`Shuddha Guggulu (Commiphora mukul)`,botanicalName:`Commiphora mukul`,role:`Vata-hara agent, stimulates joint toxin clearance (Ama)`,source:`Classical Shuddha gum resin`},{name:`Rasna (Pluchea lanceolata)`,botanicalName:`Pluchea lanceolata`,role:`Traditional Ayurvedic herb for sciatic and lumbar discomfort`,source:`Sun-dried rhizome extract`},{name:`Ashwagandha (Withania somnifera)`,botanicalName:`Withania somnifera`,role:`Nourishes deep connective muscle tissue and calms nerve strain`,source:`Nagori organic root`},{name:`Shunthi & Maricha (Zingiber officinale & Piper nigrum)`,role:`Digestive bio-enhancers (Deepana/Pachana) boosting herbal absorption`,source:`Pure sun-dried whole spices`}],authenticityTests:[{title:`Zero Chemical Adulteration Screen`,description:`Verified free from synthetic analgesics, steroid compounds (prednisolone/dexamethasone), and heavy metals.`,result:`100% Pure Botanical Formulation`},{title:`Microbial & Moisture Integrity`,description:`Tablets processed in humidity-controlled cleanrooms to protect delicate volatile phyto-compounds.`,result:`Passes Indian Pharmacopoeia standard`}],transparencyStatus:{verifiedBy:`Classical Ayurvedic Text Guidance & Clean Extraction`,originLocation:`Gujarat Apothecary Production`,batchStatus:`Fresh Batch Q4-2026`,pendingLaboratoryReports:`Standard Certificate of Analysis available upon direct request via WhatsApp.`},inStock:!0,freeShipping:!1},{id:`amrutkalp-vitality-mobility-bundle`,slug:`vitality-mobility-bundle`,name:`Sanjivani & Amrutvati Complete Wellness Bundle`,sanskritName:`अमृतकल्प संपूर्ण आरोग्य किट`,category:`bundle`,categoryLabel:`Value Pack`,price:1249,originalPrice:3200,discountPercent:61,weightOrQuantity:`20g Shilajit + 30 Tablets Amrutvati`,servingCount:`Full 30-Day Restorative Course`,rating:5,reviewCount:68,images:[],primaryImage:``,shortDescription:`The ultimate synergistic regimen: Sanjivani Shilajit for cellular energy and stamina, paired with Amrutvati to dissolve morning stiffness and back discomfort.`,fullDescription:`Our most recommended customer regimen. While Amrutvati soothes inflammation in the joints, lumbar vertebrae, and neuromuscular pathways, Sanjivani Shilajit replenishes the deeper Dhatus (tissues) with 84+ essential trace minerals, accelerating tissue repair and building lasting stamina.`,campaignKicker:`Complete Ayurvedic Care`,campaignSlogan:`Reclaim Active Energy & Pain-Free Mornings`,keyHighlights:[`Includes 1x Sanjivani Pure Himalayan Shilajit (20g)`,`Includes 1x Amrutvati Shuddh Ayurvedic Tablets (30 Pcs)`,`Includes 1x Handcrafted Brass Measuring Spoon`,`Free Express Delivery Across India with real-time tracking`,`Save over ₹1,950 compared to standard individual pricing`],verifiedBenefits:[`Dual-action Ayurvedic support: morning energy surge + sustained joint lubrication`,`Ideal for active individuals, aging parents, and professionals with physical or desk stress`,`Reduces dependence on quick-fix pain suppressants`,`Holistic Rasayana therapy addressing root causes rather than temporary symptoms`],safetyPrecautions:[`Follow individual product instructions for optimal timing.`,`Consult our Ayurvedic helpline if you are taking blood thinning medication.`],howToUse:{timing:`Morning: Sanjivani Shilajit; Evening/Post-Meals: Amrutvati`,dosage:`1 pea-sized scoop Shilajit in the AM, 1 tablet Amrutvati post-dinner`,liquidVehicle:`Lukewarm water or warm milk`,instructions:[`Morning: Dissolve pea-sized Sanjivani Shilajit in warm water upon waking.`,`Night: Take 1 Amrutvati tablet with lukewarm water 30 minutes after dinner.`,`Maintain this consistent daily rhythm for 30 consecutive days for cumulative benefits.`]},ingredients:[{name:`Sanjivani Shilajit 20g (Grade A+ Resin)`,role:`Tissue replenishment & mineral bio-availability`,percentage:`100% Pure Resin`},{name:`Amrutvati 30 Tablets (Classical formulation)`,role:`Vata pacification and pain relief`,percentage:`Shallaki, Guggulu, Rasna, Ashwagandha`}],authenticityTests:[{title:`Full Synergy Verification`,description:`Both products formulated according to classical Ayurvedic compatibility (Samyoga) rules.`,result:`Zero negative herb-mineral interactions`}],transparencyStatus:{verifiedBy:`Amrutkalp Quality Assurance Cell, Surat`,originLocation:`Himalayan Altitude Harvest & Gujarat Formulation`,batchStatus:`Fresh Combined Q4-2026 Batch`,pendingLaboratoryReports:`Complete documentation provided on request.`},inStock:!0,freeShipping:!0}],gt=e=>ht.find(t=>t.slug===e||t.id===e),j=`/app/applet/src/components/ProductCard.tsx`,_t=({product:e,onSelectProduct:t})=>{let{addToCart:n,instantBuyNow:r}=oe(),i=!!e.primaryImage;return(0,b.jsxDEV)(`div`,{className:`group flex flex-col bg-white rounded-xl border border-stone-200/90 overflow-hidden hover:border-stone-400/80 hover:shadow-lg transition-all duration-200`,children:[(0,b.jsxDEV)(`div`,{onClick:()=>t(e.slug),className:`relative aspect-4/3 w-full overflow-hidden cursor-pointer flex items-center justify-center`,children:[i?(0,b.jsxDEV)(`div`,{className:`w-full h-full bg-[#f4f2ec] p-4 flex items-center justify-center`,children:(0,b.jsxDEV)(`img`,{src:e.primaryImage,alt:e.name,referrerPolicy:`no-referrer`,className:`w-full h-full object-contain group-hover:scale-105 transition-transform duration-300`,loading:`lazy`},void 0,!1,{fileName:j,lineNumber:26,columnNumber:13},void 0)},void 0,!1,{fileName:j,lineNumber:25,columnNumber:11},void 0):(0,b.jsxDEV)(`div`,{className:`w-full h-full bg-gradient-to-br from-[#131d18] via-[#0d1612] to-[#16231d] p-6 text-white flex flex-col justify-between border-b border-stone-800 relative overflow-hidden group-hover:from-[#17251f] transition-colors`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between text-[11px] text-amber-200/90`,children:[(0,b.jsxDEV)(`span`,{className:`font-mono tracking-widest uppercase text-[10px] text-stone-400`,children:[`FORMULATION `,e.category===`bundle`?`KIT-01`:`TAB-30`]},void 0,!0,{fileName:j,lineNumber:40,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`font-serif italic text-amber-300`,children:`Classical Shastriya Vidhi`},void 0,!1,{fileName:j,lineNumber:43,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:39,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`my-auto py-2 text-center space-y-1.5`,children:[e.sanskritName&&(0,b.jsxDEV)(`div`,{className:`font-serif text-xl sm:text-2xl font-bold tracking-wide text-amber-100`,children:e.sanskritName},void 0,!1,{fileName:j,lineNumber:51,columnNumber:17},void 0),e.campaignKicker&&(0,b.jsxDEV)(`p`,{className:`text-xs text-amber-300/90 font-medium tracking-wide`,children:[`"`,e.campaignKicker,`"`]},void 0,!0,{fileName:j,lineNumber:56,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`text-[11px] text-stone-400 max-w-xs mx-auto line-clamp-1 pt-1 border-t border-stone-800/80`,children:e.ingredients.map(e=>e.name.split(` `)[0]).slice(0,3).join(` · `)},void 0,!1,{fileName:j,lineNumber:60,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:49,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between text-[10px] text-stone-400 pt-2 border-t border-stone-800`,children:[(0,b.jsxDEV)(`span`,{className:`uppercase tracking-wider`,children:`Surat Dispensary`},void 0,!1,{fileName:j,lineNumber:67,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-amber-400 font-semibold`,children:e.weightOrQuantity},void 0,!1,{fileName:j,lineNumber:68,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:66,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:36,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`absolute top-3 left-3 flex items-center gap-1.5 text-[11px] font-semibold text-stone-900 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded shadow-xs border border-stone-200/60`,children:[(0,b.jsxDEV)(Je,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:j,lineNumber:75,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{children:`100% Authentic`},void 0,!1,{fileName:j,lineNumber:76,columnNumber:11},void 0)]},void 0,!0,{fileName:j,lineNumber:74,columnNumber:9},void 0),e.discountPercent>0&&(0,b.jsxDEV)(`div`,{className:`absolute top-3 right-3 text-[11px] font-bold text-amber-950 bg-amber-100/90 px-2 py-0.5 rounded border border-amber-300/60 tabular-nums`,children:[e.discountPercent,`% OFF`]},void 0,!0,{fileName:j,lineNumber:80,columnNumber:11},void 0)]},void 0,!0,{fileName:j,lineNumber:19,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`p-5 flex flex-col flex-1 justify-between gap-4`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-stone-500 font-medium`,children:[(0,b.jsxDEV)(`span`,{className:`uppercase tracking-wider text-[11px] font-semibold text-amber-900/80`,children:e.categoryLabel},void 0,!1,{fileName:j,lineNumber:91,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,className:`text-stone-300`,children:`·`},void 0,!1,{fileName:j,lineNumber:94,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:e.weightOrQuantity},void 0,!1,{fileName:j,lineNumber:95,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:90,columnNumber:11},void 0),(0,b.jsxDEV)(`h3`,{onClick:()=>t(e.slug),className:`font-serif text-lg md:text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors mt-1.5 cursor-pointer line-clamp-1`,children:e.name},void 0,!1,{fileName:j,lineNumber:99,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed`,children:e.shortDescription},void 0,!1,{fileName:j,lineNumber:107,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-1.5 mt-2.5 text-xs text-stone-600`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center text-amber-500`,children:(0,b.jsxDEV)(Xe,{className:`w-3.5 h-3.5 fill-amber-400 text-amber-400`},void 0,!1,{fileName:j,lineNumber:114,columnNumber:15},void 0)},void 0,!1,{fileName:j,lineNumber:113,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`font-semibold text-stone-900 tabular-nums`,children:e.rating},void 0,!1,{fileName:j,lineNumber:116,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-400`,children:[`(`,e.reviewCount,` verified customers)`]},void 0,!0,{fileName:j,lineNumber:117,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:112,columnNumber:11},void 0)]},void 0,!0,{fileName:j,lineNumber:88,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`pt-3 border-t border-stone-100 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-baseline justify-between`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-baseline gap-2`,children:[(0,b.jsxDEV)(`span`,{className:`text-xl font-bold text-stone-950 tabular-nums`,children:[`₹`,e.price]},void 0,!0,{fileName:j,lineNumber:125,columnNumber:15},void 0),e.originalPrice>e.price&&(0,b.jsxDEV)(`span`,{className:`text-xs text-stone-400 line-through tabular-nums`,children:[`₹`,e.originalPrice]},void 0,!0,{fileName:j,lineNumber:129,columnNumber:17},void 0)]},void 0,!0,{fileName:j,lineNumber:124,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`text-[11px] text-emerald-700 font-medium`,children:`In Stock`},void 0,!1,{fileName:j,lineNumber:134,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:123,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-2 gap-2`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>n(e,1),className:`w-full py-2.5 px-3 text-xs font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer`,children:[(0,b.jsxDEV)(Ye,{className:`w-3.5 h-3.5 text-stone-600`},void 0,!1,{fileName:j,lineNumber:144,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:`Add to Bag`},void 0,!1,{fileName:j,lineNumber:145,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:140,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>r(e,1),className:`w-full py-2.5 px-3 text-xs font-semibold text-amber-50 bg-[#111915] hover:bg-stone-800 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(`span`,{children:`Buy Now`},void 0,!1,{fileName:j,lineNumber:151,columnNumber:15},void 0),(0,b.jsxDEV)(me,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:j,lineNumber:152,columnNumber:15},void 0)]},void 0,!0,{fileName:j,lineNumber:147,columnNumber:13},void 0)]},void 0,!0,{fileName:j,lineNumber:139,columnNumber:11},void 0)]},void 0,!0,{fileName:j,lineNumber:122,columnNumber:9},void 0)]},void 0,!0,{fileName:j,lineNumber:87,columnNumber:7},void 0)]},void 0,!0,{fileName:j,lineNumber:16,columnNumber:5},void 0)},M=`/app/applet/src/pages/HomePage.tsx`,vt=({setCurrentTab:e,onSelectProduct:t})=>{let{instantBuyNow:n}=oe(),r=ht,i=ht[0],a=ht[1],[o,s]=(0,_.useState)(0);return(0,b.jsxDEV)(`div`,{className:`space-y-16 md:space-y-24 pb-20`,children:[(0,b.jsxDEV)(`section`,{className:`relative overflow-hidden pt-8 md:pt-14 pb-12 border-b border-stone-200/90 bg-radial from-amber-50/40 via-[#fbfaf7] to-[#fbfaf7]`,children:(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-7 space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-stone-600 font-semibold tracking-wide`,children:[(0,b.jsxDEV)(`span`,{className:`text-[#b3832f] uppercase tracking-wider`,children:`Shastriya Ayurveda`},void 0,!1,{fileName:M,lineNumber:72,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,className:`text-stone-300`,children:`·`},void 0,!1,{fileName:M,lineNumber:73,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`Himalayan Altitude 16,000+ Ft`},void 0,!1,{fileName:M,lineNumber:74,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,className:`text-stone-300`,children:`·`},void 0,!1,{fileName:M,lineNumber:75,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-800`,children:`Surat, Gujarat`},void 0,!1,{fileName:M,lineNumber:76,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:71,columnNumber:15},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1] text-balance`,children:[`Pure Power. `,(0,b.jsxDEV)(`br`,{className:`hidden sm:inline`},void 0,!1,{fileName:M,lineNumber:81,columnNumber:29},void 0),(0,b.jsxDEV)(`span`,{className:`italic font-normal text-stone-800`,children:`Pure Himalayan`},void 0,!1,{fileName:M,lineNumber:82,columnNumber:17},void 0),` Shilajit.`]},void 0,!0,{fileName:M,lineNumber:80,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl`,children:[`Unadulterated Grade A+ mineral resin wild-harvested from high-altitude Himalayan cliffs, rich in >60% bioactive Fulvic Acid and 84+ trace minerals. Backed by our open `,(0,b.jsxDEV)(`strong`,{className:`text-stone-900 font-semibold`,children:`₹5,51,000 Purity Challenge`},void 0,!1,{fileName:M,lineNumber:87,columnNumber:187},void 0),`.`]},void 0,!0,{fileName:M,lineNumber:86,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-stone-700 font-medium`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(`div`,{className:`w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0`,children:(0,b.jsxDEV)(ve,{className:`w-2.5 h-2.5`},void 0,!1,{fileName:M,lineNumber:94,columnNumber:21},void 0)},void 0,!1,{fileName:M,lineNumber:93,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:`100% classical water-purified resin (Surya Tapi)`},void 0,!1,{fileName:M,lineNumber:96,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:92,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(`div`,{className:`w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0`,children:(0,b.jsxDEV)(ve,{className:`w-2.5 h-2.5`},void 0,!1,{fileName:M,lineNumber:100,columnNumber:21},void 0)},void 0,!1,{fileName:M,lineNumber:99,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:`Zero fillers, artificial gums, or steroids`},void 0,!1,{fileName:M,lineNumber:102,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:98,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(`div`,{className:`w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0`,children:(0,b.jsxDEV)(ve,{className:`w-2.5 h-2.5`},void 0,!1,{fileName:M,lineNumber:106,columnNumber:21},void 0)},void 0,!1,{fileName:M,lineNumber:105,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:`₹5.51L cash reward if proven adulterated`},void 0,!1,{fileName:M,lineNumber:108,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:104,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(`div`,{className:`w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0`,children:(0,b.jsxDEV)(ve,{className:`w-2.5 h-2.5`},void 0,!1,{fileName:M,lineNumber:112,columnNumber:21},void 0)},void 0,!1,{fileName:M,lineNumber:111,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:`Free brass dosage spoon included`},void 0,!1,{fileName:M,lineNumber:114,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:110,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:91,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>n(i,1),className:`py-3.5 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer`,children:[(0,b.jsxDEV)(`span`,{children:`Order Sanjivani Shilajit (₹799)`},void 0,!1,{fileName:M,lineNumber:124,columnNumber:19},void 0),(0,b.jsxDEV)(me,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:M,lineNumber:125,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:120,columnNumber:17},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>e(`shop`),className:`py-3.5 px-6 bg-white border border-stone-300 text-stone-900 font-semibold rounded-lg hover:bg-stone-100 transition-colors text-sm cursor-pointer`,children:`View All Formulations`},void 0,!1,{fileName:M,lineNumber:128,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:119,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-950 flex items-start gap-3`,children:[(0,b.jsxDEV)(Je,{className:`w-5 h-5 text-[#c99a45] shrink-0 mt-0.5`},void 0,!1,{fileName:M,lineNumber:138,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`strong`,{className:`font-semibold block text-amber-900`,children:y.guarantee.headlineGujarati},void 0,!1,{fileName:M,lineNumber:140,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-600 text-[11px] block mt-0.5`,children:y.guarantee.headlineEnglish},void 0,!1,{fileName:M,lineNumber:143,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:139,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:137,columnNumber:15},void 0)]},void 0,!0,{fileName:M,lineNumber:68,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`lg:col-span-5 relative`,children:(0,b.jsxDEV)(`div`,{className:`relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden bg-gradient-to-b from-[#17221d] to-[#0c1410] p-6 text-white shadow-2xl border border-stone-800`,children:[(0,b.jsxDEV)(`div`,{className:`relative aspect-square w-full rounded-xl overflow-hidden bg-stone-900/60 flex items-center justify-center border border-stone-700/60 p-2`,children:[(0,b.jsxDEV)(`img`,{src:`/assets/products/sanjivani-shilajit-pure.jpg`,alt:`AMRUTKALP SANJIVANI Pure Himalayan Shilajit 20 GM Glass Jar`,referrerPolicy:`no-referrer`,className:`w-full h-full object-cover rounded-lg`},void 0,!1,{fileName:M,lineNumber:157,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`absolute bottom-3 left-3 bg-stone-950/85 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-amber-200 border border-stone-700`,children:`SANJIVANI · 20 GM`},void 0,!1,{fileName:M,lineNumber:163,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:156,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`mt-5 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h2`,{className:`font-serif text-lg font-bold text-white`,children:`Sanjivani Shilajit Resin`},void 0,!1,{fileName:M,lineNumber:172,columnNumber:23},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-stone-400`,children:`Batch Q4-2026 · Surya Tapi Shodhana`},void 0,!1,{fileName:M,lineNumber:175,columnNumber:23},void 0)]},void 0,!0,{fileName:M,lineNumber:171,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{className:`text-right`,children:[(0,b.jsxDEV)(`span`,{className:`text-2xl font-bold text-amber-300 tabular-nums`,children:`₹799`},void 0,!1,{fileName:M,lineNumber:180,columnNumber:23},void 0),(0,b.jsxDEV)(`span`,{className:`block text-xs text-stone-400 line-through tabular-nums`,children:`₹2,000`},void 0,!1,{fileName:M,lineNumber:181,columnNumber:23},void 0)]},void 0,!0,{fileName:M,lineNumber:179,columnNumber:21},void 0)]},void 0,!0,{fileName:M,lineNumber:170,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-2 gap-2 pt-2 border-t border-stone-800 text-[11px] text-stone-300`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-stone-400 block`,children:`Fulvic Acid`},void 0,!1,{fileName:M,lineNumber:187,columnNumber:23},void 0),(0,b.jsxDEV)(`strong`,{className:`text-white font-mono`,children:`> 60% w/w`},void 0,!1,{fileName:M,lineNumber:188,columnNumber:23},void 0)]},void 0,!0,{fileName:M,lineNumber:186,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-stone-400 block`,children:`Delivery`},void 0,!1,{fileName:M,lineNumber:191,columnNumber:23},void 0),(0,b.jsxDEV)(`strong`,{className:`text-emerald-400`,children:`Free Express (Surat)`},void 0,!1,{fileName:M,lineNumber:192,columnNumber:23},void 0)]},void 0,!0,{fileName:M,lineNumber:190,columnNumber:21},void 0)]},void 0,!0,{fileName:M,lineNumber:185,columnNumber:19},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>t(`sanjivani-shilajit`),className:`w-full py-2.5 text-center text-xs font-semibold text-stone-200 hover:text-white bg-stone-800/80 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer border border-stone-700`,children:`Explore Lab Sourcing & Full Details →`},void 0,!1,{fileName:M,lineNumber:196,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:169,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:153,columnNumber:15},void 0)},void 0,!1,{fileName:M,lineNumber:152,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:65,columnNumber:11},void 0)},void 0,!1,{fileName:M,lineNumber:64,columnNumber:9},void 0)},void 0,!1,{fileName:M,lineNumber:63,columnNumber:7},void 0),(0,b.jsxDEV)(`section`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,b.jsxDEV)(`div`,{className:`grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-stone-200 text-stone-800`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950`,children:`16,000+`},void 0,!1,{fileName:M,lineNumber:215,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`block text-xs font-medium text-stone-500 mt-1`,children:`Feet Elevation Himalayan Harvest`},void 0,!1,{fileName:M,lineNumber:218,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:214,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950`,children:`₹5.51L`},void 0,!1,{fileName:M,lineNumber:223,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`block text-xs font-medium text-stone-500 mt-1`,children:`Public Purity Challenge Guarantee`},void 0,!1,{fileName:M,lineNumber:226,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:222,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950`,children:`84+`},void 0,!1,{fileName:M,lineNumber:231,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`block text-xs font-medium text-stone-500 mt-1`,children:`Ionic Trace Minerals & Fulvic Acid`},void 0,!1,{fileName:M,lineNumber:234,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:230,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`font-mono text-2xl md:text-3xl font-bold tabular-nums text-stone-950`,children:`24–48h`},void 0,!1,{fileName:M,lineNumber:239,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{className:`block text-xs font-medium text-stone-500 mt-1`,children:`Dispatch from Surat, Gujarat`},void 0,!1,{fileName:M,lineNumber:242,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:238,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:213,columnNumber:9},void 0)},void 0,!1,{fileName:M,lineNumber:212,columnNumber:7},void 0),(0,b.jsxDEV)(`section`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,b.jsxDEV)(`div`,{className:`flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Classical Shastriya Formulations`},void 0,!1,{fileName:M,lineNumber:253,columnNumber:13},void 0),(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 mt-1`,children:`Verified Ayurvedic Remedies`},void 0,!1,{fileName:M,lineNumber:256,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 mt-1.5 max-w-xl`,children:`Authentic Ayurvedic preparations crafted with zero synthetic adulterants. Each package is individually batch-inspected.`},void 0,!1,{fileName:M,lineNumber:259,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:252,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>e(`shop`),className:`text-xs font-semibold text-stone-900 hover:text-amber-900 flex items-center gap-1 cursor-pointer whitespace-nowrap self-start md:self-auto`,children:[(0,b.jsxDEV)(`span`,{children:`View All Products`},void 0,!1,{fileName:M,lineNumber:267,columnNumber:13},void 0),(0,b.jsxDEV)(me,{className:`w-4 h-4`},void 0,!1,{fileName:M,lineNumber:268,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:263,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:251,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,children:r.map(e=>(0,b.jsxDEV)(_t,{product:e,onSelectProduct:t},e.id,!1,{fileName:M,lineNumber:275,columnNumber:13},void 0))},void 0,!1,{fileName:M,lineNumber:273,columnNumber:9},void 0)]},void 0,!0,{fileName:M,lineNumber:250,columnNumber:7},void 0),(0,b.jsxDEV)(`section`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,b.jsxDEV)(`div`,{className:`rounded-2xl bg-[#111915] text-stone-100 overflow-hidden border border-stone-800 shadow-xl`,children:(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-7 space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-950/80 border border-amber-600/50 text-amber-300 text-xs font-semibold`,children:[(0,b.jsxDEV)(Je,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:M,lineNumber:292,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`Open Public Challenge`},void 0,!1,{fileName:M,lineNumber:293,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:291,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight`,children:y.guarantee.headlineGujarati},void 0,!1,{fileName:M,lineNumber:297,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{className:`font-serif text-xl sm:text-2xl font-medium text-amber-200 mt-2`,children:`Prove it Fake in Any Certified Lab and Win ₹5,51,000`},void 0,!1,{fileName:M,lineNumber:300,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:296,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-300 leading-relaxed`,children:[y.guarantee.description,` We harvest raw resin from remote Himalayan screes, filter it in pure spring water, and dry it under natural sunlight (Surya Tapi). No corn syrup, no synthetic binders, and no heavy metal toxins.`]},void 0,!0,{fileName:M,lineNumber:305,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2`,children:[(0,b.jsxDEV)(`div`,{className:`p-3.5 bg-stone-900/90 rounded-xl border border-stone-800`,children:[(0,b.jsxDEV)(Ae,{className:`w-5 h-5 text-amber-400 mb-2`},void 0,!1,{fileName:M,lineNumber:312,columnNumber:19},void 0),(0,b.jsxDEV)(`h4`,{className:`text-xs font-bold text-white`,children:`Flame Purity`},void 0,!1,{fileName:M,lineNumber:313,columnNumber:19},void 0),(0,b.jsxDEV)(`p`,{className:`text-[11px] text-stone-400 mt-1`,children:`Expands into pure mineral ash without flammable synthetic flames.`},void 0,!1,{fileName:M,lineNumber:314,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:311,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-3.5 bg-stone-900/90 rounded-xl border border-stone-800`,children:[(0,b.jsxDEV)(De,{className:`w-5 h-5 text-amber-400 mb-2`},void 0,!1,{fileName:M,lineNumber:320,columnNumber:19},void 0),(0,b.jsxDEV)(`h4`,{className:`text-xs font-bold text-white`,children:`Clean Dissolution`},void 0,!1,{fileName:M,lineNumber:321,columnNumber:19},void 0),(0,b.jsxDEV)(`p`,{className:`text-[11px] text-stone-400 mt-1`,children:`Diffuses in water into golden amber ribbons without sand residue.`},void 0,!1,{fileName:M,lineNumber:322,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:319,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-3.5 bg-stone-900/90 rounded-xl border border-stone-800`,children:[(0,b.jsxDEV)(ge,{className:`w-5 h-5 text-amber-400 mb-2`},void 0,!1,{fileName:M,lineNumber:328,columnNumber:19},void 0),(0,b.jsxDEV)(`h4`,{className:`text-xs font-bold text-white`,children:`NABL Tested`},void 0,!1,{fileName:M,lineNumber:329,columnNumber:19},void 0),(0,b.jsxDEV)(`p`,{className:`text-[11px] text-stone-400 mt-1`,children:`Screened for lead, arsenic, mercury, and microbiological purity.`},void 0,!1,{fileName:M,lineNumber:330,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:327,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:310,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 flex flex-wrap items-center gap-4`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>e(`authenticity`),className:`py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs`,children:`Read Full Challenge Protocol & Rules`},void 0,!1,{fileName:M,lineNumber:337,columnNumber:17},void 0),(0,b.jsxDEV)(`a`,{href:`https://wa.me/${y.whatsappNumber}?text=Hello%20Amrutkalp%2C%20I%20want%20to%20learn%20more%20about%20the%205.51%20Lakh%20purity%20challenge.`,target:`_blank`,rel:`noopener noreferrer`,className:`text-xs font-medium text-stone-300 hover:text-white flex items-center gap-1.5`,children:[(0,b.jsxDEV)(Be,{className:`w-3.5 h-3.5 text-emerald-400`},void 0,!1,{fileName:M,lineNumber:349,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:[`Call / WhatsApp Quality Desk: `,y.phone]},void 0,!0,{fileName:M,lineNumber:350,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:343,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:336,columnNumber:15},void 0)]},void 0,!0,{fileName:M,lineNumber:290,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`lg:col-span-5`,children:(0,b.jsxDEV)(`div`,{className:`rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#18261f] via-[#101b15] to-[#0c1410] p-7 text-stone-100 shadow-2xl relative overflow-hidden space-y-5`,children:[(0,b.jsxDEV)(`div`,{className:`text-center pb-4 border-b border-stone-800 space-y-1`,children:[(0,b.jsxDEV)(`div`,{className:`text-[10px] uppercase font-mono tracking-widest text-[#c99a45]`,children:`Official Declaration & Warranty`},void 0,!1,{fileName:M,lineNumber:361,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`font-serif text-2xl font-bold text-amber-200`,children:`₹5,51,000`},void 0,!1,{fileName:M,lineNumber:364,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`text-xs text-stone-300 font-medium`,children:`Open Laboratory Authenticity Bounty`},void 0,!1,{fileName:M,lineNumber:367,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:360,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-center space-y-1`,children:[(0,b.jsxDEV)(`div`,{className:`font-serif text-base sm:text-lg font-bold text-amber-100 leading-snug`,children:`"ડુપ્લીકેટ સાબિત કરીને બતાવો તો મળશે ₹5,51,000 ઈનામ*"`},void 0,!1,{fileName:M,lineNumber:374,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`text-[11px] text-stone-400`,children:`"डुप्लीकेट साबित करके दिखाओ तो मिलेगा ₹5,51,000 का इनाम*"`},void 0,!1,{fileName:M,lineNumber:377,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:373,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-2 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`text-[11px] uppercase font-bold tracking-wider text-stone-400`,children:`Testing Criteria & Standards:`},void 0,!1,{fileName:M,lineNumber:384,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-1.5 text-[11px] text-stone-300`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between py-1 border-b border-stone-800`,children:[(0,b.jsxDEV)(`span`,{children:`Artificial Fillers / Sugar Syrup`},void 0,!1,{fileName:M,lineNumber:389,columnNumber:23},void 0),(0,b.jsxDEV)(`strong`,{className:`text-emerald-400 font-mono`,children:`0.0% (Zero)`},void 0,!1,{fileName:M,lineNumber:390,columnNumber:23},void 0)]},void 0,!0,{fileName:M,lineNumber:388,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between py-1 border-b border-stone-800`,children:[(0,b.jsxDEV)(`span`,{children:`Bioactive Fulvic Acid Content`},void 0,!1,{fileName:M,lineNumber:393,columnNumber:23},void 0),(0,b.jsxDEV)(`strong`,{className:`text-amber-300 font-mono`,children:`> 60% w/w`},void 0,!1,{fileName:M,lineNumber:394,columnNumber:23},void 0)]},void 0,!0,{fileName:M,lineNumber:392,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between py-1 border-b border-stone-800`,children:[(0,b.jsxDEV)(`span`,{children:`Heavy Metals (Lead, Mercury, Arsenic)`},void 0,!1,{fileName:M,lineNumber:397,columnNumber:23},void 0),(0,b.jsxDEV)(`strong`,{className:`text-emerald-400 font-mono`,children:`Passes NABL Limits`},void 0,!1,{fileName:M,lineNumber:398,columnNumber:23},void 0)]},void 0,!0,{fileName:M,lineNumber:396,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between py-1 border-b border-stone-800`,children:[(0,b.jsxDEV)(`span`,{children:`Synthetic Stimulants or Steroids`},void 0,!1,{fileName:M,lineNumber:401,columnNumber:23},void 0),(0,b.jsxDEV)(`strong`,{className:`text-emerald-400 font-mono`,children:`100% Absent`},void 0,!1,{fileName:M,lineNumber:402,columnNumber:23},void 0)]},void 0,!0,{fileName:M,lineNumber:400,columnNumber:21},void 0)]},void 0,!0,{fileName:M,lineNumber:387,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:383,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`pt-3 border-t border-stone-800 flex items-center justify-between text-[10px] text-stone-400 font-mono`,children:[(0,b.jsxDEV)(`span`,{children:`Amrutkalp Quality Cell`},void 0,!1,{fileName:M,lineNumber:409,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-amber-400`,children:`Surat, Gujarat`},void 0,!1,{fileName:M,lineNumber:410,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:408,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:357,columnNumber:15},void 0)},void 0,!1,{fileName:M,lineNumber:356,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:287,columnNumber:11},void 0)},void 0,!1,{fileName:M,lineNumber:286,columnNumber:9},void 0)},void 0,!1,{fileName:M,lineNumber:285,columnNumber:7},void 0),(0,b.jsxDEV)(`section`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,b.jsxDEV)(`div`,{className:`bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm`,children:(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-5`,children:(0,b.jsxDEV)(`div`,{className:`rounded-2xl border border-stone-800 bg-gradient-to-b from-[#131d18] via-[#0e1713] to-[#15231c] p-7 text-white shadow-xl space-y-5`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between border-b border-stone-800 pb-3 text-[11px]`,children:[(0,b.jsxDEV)(`span`,{className:`font-mono text-amber-300/80 uppercase tracking-widest text-[10px]`,children:`Ayurvedic Pain Formulation`},void 0,!1,{fileName:M,lineNumber:430,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`font-serif italic text-stone-300`,children:`30 Tablets`},void 0,!1,{fileName:M,lineNumber:433,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:429,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`text-center py-3 space-y-1`,children:[(0,b.jsxDEV)(`div`,{className:`font-serif text-2xl sm:text-3xl font-bold text-amber-100`,children:`अमृतकल्प अमृतवटी`},void 0,!1,{fileName:M,lineNumber:439,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`text-xs text-amber-300/90 font-medium`,children:`वातशामक व दर्द निवारक गुटिका`},void 0,!1,{fileName:M,lineNumber:442,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`text-[11px] text-stone-400 font-mono pt-1`,children:`#आराम होगा तो काम होगा`},void 0,!1,{fileName:M,lineNumber:445,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:438,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-900/80 rounded-xl border border-stone-800 space-y-2 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`text-[11px] text-stone-400 uppercase font-semibold`,children:`Active Botanicals:`},void 0,!1,{fileName:M,lineNumber:451,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-2 gap-2 text-[11px] text-stone-300`,children:[(0,b.jsxDEV)(`div`,{children:`• Shallaki (65% Boswellic)`},void 0,!1,{fileName:M,lineNumber:453,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{children:`• Shuddha Guggulu`},void 0,!1,{fileName:M,lineNumber:454,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{children:`• Rasna Rhizome`},void 0,!1,{fileName:M,lineNumber:455,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{children:`• Nagori Ashwagandha`},void 0,!1,{fileName:M,lineNumber:456,columnNumber:21},void 0)]},void 0,!0,{fileName:M,lineNumber:452,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:450,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between text-[10px] text-stone-400 font-mono border-t border-stone-800 pt-3`,children:[(0,b.jsxDEV)(`span`,{children:`Zero Synthetic Analgesics`},void 0,!1,{fileName:M,lineNumber:461,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-emerald-400 font-semibold`,children:`Surat Dispensary`},void 0,!1,{fileName:M,lineNumber:462,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:460,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:427,columnNumber:15},void 0)},void 0,!1,{fileName:M,lineNumber:426,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`lg:col-span-7 space-y-5`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-amber-900 uppercase tracking-wider`,children:[(0,b.jsxDEV)(`span`,{children:`#आराम होगा तो काम होगा`},void 0,!1,{fileName:M,lineNumber:471,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,className:`text-stone-300`,children:`·`},void 0,!1,{fileName:M,lineNumber:472,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:`30 Herbal Tablets`},void 0,!1,{fileName:M,lineNumber:473,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:470,columnNumber:15},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-950 tracking-tight leading-tight`,children:[`सुबह उठकर कमर में दर्द? `,(0,b.jsxDEV)(`br`,{},void 0,!1,{fileName:M,lineNumber:477,columnNumber:41},void 0),(0,b.jsxDEV)(`span`,{className:`italic font-normal text-stone-700`,children:`यह है वो दर्द निवारक जो आपको चाहिए`},void 0,!1,{fileName:M,lineNumber:478,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:476,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 leading-relaxed`,children:[`Do you wake up feeling like your lower spine is rigid and stiff? Morning lumbar pain and neck stiffness ruin productivity before your day even begins. `,(0,b.jsxDEV)(`strong`,{children:`Amrutkalp Amrutvati`},void 0,!1,{fileName:M,lineNumber:482,columnNumber:168},void 0),` targets the aggravated Vata dosha and deep-seated synovial inflammation using classical Shallaki (65% Boswellic acids), Shuddha Guggulu, Rasna, and Ashwagandha.`]},void 0,!0,{fileName:M,lineNumber:481,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-2 gap-3 text-xs text-stone-800`,children:[(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-lg border border-stone-200`,children:[(0,b.jsxDEV)(`strong`,{className:`block text-stone-900 font-semibold`,children:`कमर दर्द (Lower Back)`},void 0,!1,{fileName:M,lineNumber:488,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-[11px] text-stone-500`,children:`Relieves lumbar disc & muscular stiffness`},void 0,!1,{fileName:M,lineNumber:489,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:487,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-lg border border-stone-200`,children:[(0,b.jsxDEV)(`strong`,{className:`block text-stone-900 font-semibold`,children:`गर्दन व कंधे (Neck & Shoulders)`},void 0,!1,{fileName:M,lineNumber:492,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-[11px] text-stone-500`,children:`Relaxes cervical and postural tightness`},void 0,!1,{fileName:M,lineNumber:493,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:491,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-lg border border-stone-200`,children:[(0,b.jsxDEV)(`strong`,{className:`block text-stone-900 font-semibold`,children:`जोड़ों का दर्द (Joint Mobility)`},void 0,!1,{fileName:M,lineNumber:496,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-[11px] text-stone-500`,children:`Supports synovial fluid lubrication`},void 0,!1,{fileName:M,lineNumber:497,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:495,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-lg border border-stone-200`,children:[(0,b.jsxDEV)(`strong`,{className:`block text-stone-900 font-semibold`,children:`साइटिका (Sciatica Relief)`},void 0,!1,{fileName:M,lineNumber:500,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-[11px] text-stone-500`,children:`Soothes radiating nerve sensitivity`},void 0,!1,{fileName:M,lineNumber:501,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:499,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:486,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 flex flex-col sm:flex-row items-center gap-3`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>n(a,1),className:`w-full sm:w-auto py-3 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(`span`,{children:`Order Amrutvati (₹599)`},void 0,!1,{fileName:M,lineNumber:510,columnNumber:19},void 0),(0,b.jsxDEV)(me,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:M,lineNumber:511,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:506,columnNumber:17},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>t(`amrutvati-pain-relief`),className:`w-full sm:w-auto py-3 px-5 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold rounded-lg transition-colors text-xs cursor-pointer`,children:`View Dosage & Herbs Breakdown`},void 0,!1,{fileName:M,lineNumber:514,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:505,columnNumber:15},void 0)]},void 0,!0,{fileName:M,lineNumber:469,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:423,columnNumber:11},void 0)},void 0,!1,{fileName:M,lineNumber:422,columnNumber:9},void 0)},void 0,!1,{fileName:M,lineNumber:421,columnNumber:7},void 0),(0,b.jsxDEV)(`section`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-2xl mx-auto mb-10`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Daily Vidhi & Anupana`},void 0,!1,{fileName:M,lineNumber:531,columnNumber:11},void 0),(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1`,children:`How to Consume Pure Shilajit`},void 0,!1,{fileName:M,lineNumber:534,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 mt-1.5`,children:`Follow this verified traditional method to achieve maximum cellular bioavailability.`},void 0,!1,{fileName:M,lineNumber:537,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:530,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-4 gap-6`,children:[(0,b.jsxDEV)(`div`,{className:`p-5 bg-white rounded-xl border border-stone-200 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center`,children:`01`},void 0,!1,{fileName:M,lineNumber:544,columnNumber:13},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-base font-bold text-stone-900`,children:`Measure Pea-Sized Portion`},void 0,!1,{fileName:M,lineNumber:547,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`Use the included brass dosage spoon to scoop approximately 300 mg to 500 mg of resin (about the size of an Indian chickpea).`},void 0,!1,{fileName:M,lineNumber:550,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:543,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-5 bg-white rounded-xl border border-stone-200 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center`,children:`02`},void 0,!1,{fileName:M,lineNumber:556,columnNumber:13},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-base font-bold text-stone-900`,children:`Lukewarm Liquid Vehicle`},void 0,!1,{fileName:M,lineNumber:559,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`Pour 150ml of lukewarm water, warm A2 cow milk, or green tea. Never use boiling liquid to avoid denaturing living enzymes.`},void 0,!1,{fileName:M,lineNumber:562,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:555,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-5 bg-white rounded-xl border border-stone-200 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center`,children:`03`},void 0,!1,{fileName:M,lineNumber:568,columnNumber:13},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-base font-bold text-stone-900`,children:`Stir into Amber Ribbon`},void 0,!1,{fileName:M,lineNumber:571,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`Stir gently for 15 seconds. Observe the resin dissolving completely into a rich golden-amber to mahogany elixir without grittiness.`},void 0,!1,{fileName:M,lineNumber:574,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:567,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-5 bg-white rounded-xl border border-stone-200 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-8 h-8 rounded-full bg-stone-900 text-amber-200 font-mono text-xs font-bold flex items-center justify-center`,children:`04`},void 0,!1,{fileName:M,lineNumber:580,columnNumber:13},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-base font-bold text-stone-900`,children:`Morning Empty Stomach`},void 0,!1,{fileName:M,lineNumber:583,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`Drink warm 20–30 minutes before breakfast. Repeat consistently for 6 to 8 weeks to replenish deeper Dhatus and stamina.`},void 0,!1,{fileName:M,lineNumber:586,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:579,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:542,columnNumber:9},void 0)]},void 0,!0,{fileName:M,lineNumber:529,columnNumber:7},void 0),(0,b.jsxDEV)(`section`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,b.jsxDEV)(`div`,{className:`rounded-2xl bg-[#f4f2ec] border border-stone-200/90 p-6 sm:p-10`,children:(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-4`,children:(0,b.jsxDEV)(`div`,{className:`rounded-xl border border-stone-300 shadow-md bg-[#111915] text-stone-100 p-6 space-y-4`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between border-b border-stone-800 pb-2`,children:[(0,b.jsxDEV)(`span`,{className:`font-mono text-[10px] text-amber-300 tracking-widest uppercase`,children:`DISPENSARY REGISTER`},void 0,!1,{fileName:M,lineNumber:602,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-[10px] text-stone-400`,children:`SURAT · GUJARAT`},void 0,!1,{fileName:M,lineNumber:603,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:601,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-1`,children:[(0,b.jsxDEV)(`div`,{className:`font-serif text-xl font-bold text-white`,children:`AMRUTKALP`},void 0,!1,{fileName:M,lineNumber:607,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`text-xs text-amber-200/90 font-medium`,children:`Pure Ayurvedic Herbals`},void 0,!1,{fileName:M,lineNumber:608,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:606,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-900 rounded-lg border border-stone-800 space-y-1.5 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`text-stone-400 text-[10px] uppercase font-semibold`,children:`Physical Center:`},void 0,!1,{fileName:M,lineNumber:612,columnNumber:19},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-300 text-[11px] leading-relaxed`,children:`108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Surat - 394107`},void 0,!1,{fileName:M,lineNumber:613,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:611,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400`,children:[(0,b.jsxDEV)(`span`,{children:`Community: @pure_ayurvedic_herbal`},void 0,!1,{fileName:M,lineNumber:619,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-emerald-400`,children:`Verified`},void 0,!1,{fileName:M,lineNumber:620,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:618,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:600,columnNumber:15},void 0)},void 0,!1,{fileName:M,lineNumber:599,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`lg:col-span-8 space-y-4`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Transparent Gujarati Roots`},void 0,!1,{fileName:M,lineNumber:627,columnNumber:15},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-2xl sm:text-3xl font-bold text-stone-950`,children:`Direct from Our Surat Dispensary to Your Home`},void 0,!1,{fileName:M,lineNumber:630,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 leading-relaxed`,children:`Unlike faceless online brands that re-label generic contract manufacturing, Amrutkalp operates from our dedicated registered center in Surat, Gujarat. We personally oversee every batch extraction, purity verification, and customer delivery.`},void 0,!1,{fileName:M,lineNumber:633,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-white rounded-xl border border-stone-200 text-xs space-y-2`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-start gap-2 text-stone-800`,children:[(0,b.jsxDEV)(Le,{className:`w-4 h-4 text-[#c99a45] shrink-0 mt-0.5`},void 0,!1,{fileName:M,lineNumber:639,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:[(0,b.jsxDEV)(`strong`,{children:`Visit Us In Person:`},void 0,!1,{fileName:M,lineNumber:641,columnNumber:21},void 0),` `,y.address.full]},void 0,!0,{fileName:M,lineNumber:640,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:638,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-stone-800`,children:[(0,b.jsxDEV)(Be,{className:`w-4 h-4 text-[#c99a45] shrink-0`},void 0,!1,{fileName:M,lineNumber:645,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:[(0,b.jsxDEV)(`strong`,{children:`Direct Hotline:`},void 0,!1,{fileName:M,lineNumber:647,columnNumber:21},void 0),` `,y.phoneFormatted,` (Call & WhatsApp consultation)`]},void 0,!0,{fileName:M,lineNumber:646,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:644,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:637,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 flex flex-wrap items-center gap-4`,children:[(0,b.jsxDEV)(`a`,{href:`https://wa.me/${y.whatsappNumber}?text=Hello%20Amrutkalp%2C%20I%20want%20to%20book%20an%20Ayurvedic%20consultation.`,target:`_blank`,rel:`noopener noreferrer`,className:`py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors text-xs flex items-center gap-1.5 shadow-xs`,children:[(0,b.jsxDEV)(Be,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:M,lineNumber:659,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:`Consult an Ayurvedic Specialist via WhatsApp`},void 0,!1,{fileName:M,lineNumber:660,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:653,columnNumber:17},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>e(`about`),className:`text-xs font-semibold text-stone-800 hover:text-stone-950 underline underline-offset-4 cursor-pointer`,children:`Read Our Full Story & Mission →`},void 0,!1,{fileName:M,lineNumber:662,columnNumber:17},void 0)]},void 0,!0,{fileName:M,lineNumber:652,columnNumber:15},void 0)]},void 0,!0,{fileName:M,lineNumber:626,columnNumber:13},void 0)]},void 0,!0,{fileName:M,lineNumber:596,columnNumber:11},void 0)},void 0,!1,{fileName:M,lineNumber:595,columnNumber:9},void 0)},void 0,!1,{fileName:M,lineNumber:594,columnNumber:7},void 0),(0,b.jsxDEV)(`section`,{className:`max-w-4xl mx-auto px-4 sm:px-6`,children:[(0,b.jsxDEV)(`div`,{className:`text-center mb-8`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Clear Answers`},void 0,!1,{fileName:M,lineNumber:679,columnNumber:11},void 0),(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1`,children:`Frequently Asked Questions`},void 0,!1,{fileName:M,lineNumber:682,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-500 mt-1`,children:`Honest answers without marketing exaggeration.`},void 0,!1,{fileName:M,lineNumber:685,columnNumber:11},void 0)]},void 0,!0,{fileName:M,lineNumber:678,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[{q:`What is the ₹5,51,000 Authenticity Challenge?`,a:`We publicly guarantee that Amrutkalp Sanjivani is 100% genuine Himalayan Shilajit resin free from synthetic additives, charcoal ash, chemical stimulants, or steroid contamination. If any NABL-accredited laboratory proves that our resin is adulterated or fake, we will immediately pay the claimant ₹5,51,000.`},{q:`How do I take Amrutkalp Shilajit for best results?`,a:`Using the included brass spoon, measure a pea-sized portion (300–500 mg). Stir it into a cup of lukewarm water, warm milk, or green tea until fully dissolved into a clear golden-amber liquid. Drink every morning on an empty stomach for 6 to 8 weeks.`},{q:`Does Amrutvati contain any synthetic painkillers or steroids?`,a:`Absolutely not. Amrutvati is a 100% Shastriya Ayurvedic botanical formulation containing Shallaki (Boswellia), Shuddha Guggulu, Rasna, and Ashwagandha. It relieves pain by soothing aggravated Vata and clearing inflammatory Ama, without damaging your stomach lining or kidneys.`},{q:`Can I visit the Amrutkalp store in person in Surat?`,a:`Yes! We welcome all visitors to our registered dispensary at 108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Amroli, Surat, Gujarat 394107. You can inspect physical batches and consult our team directly.`},{q:`What are the delivery charges and Cash on Delivery terms?`,a:`Delivery is 100% FREE on all orders of ₹699 and above. For smaller orders, a nominal ₹70 shipping charge applies. We offer Cash on Delivery across India where you can inspect your parcel before paying.`}].map((e,t)=>{let n=o===t;return(0,b.jsxDEV)(`div`,{className:`bg-white rounded-xl border border-stone-200/90 overflow-hidden`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>s(n?null:t),className:`w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-stone-50/70 transition-colors cursor-pointer`,children:[(0,b.jsxDEV)(`span`,{className:`font-serif text-base sm:text-lg font-bold text-stone-900`,children:e.q},void 0,!1,{fileName:M,lineNumber:702,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`p-1 rounded-full bg-stone-100 text-stone-600 shrink-0`,children:n?(0,b.jsxDEV)(be,{className:`w-4 h-4`},void 0,!1,{fileName:M,lineNumber:706,columnNumber:31},void 0):(0,b.jsxDEV)(S,{className:`w-4 h-4`},void 0,!1,{fileName:M,lineNumber:706,columnNumber:67},void 0)},void 0,!1,{fileName:M,lineNumber:705,columnNumber:19},void 0)]},void 0,!0,{fileName:M,lineNumber:698,columnNumber:17},void 0),n&&(0,b.jsxDEV)(`div`,{className:`px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100`,children:e.a},void 0,!1,{fileName:M,lineNumber:710,columnNumber:19},void 0)]},t,!0,{fileName:M,lineNumber:694,columnNumber:15},void 0)})},void 0,!1,{fileName:M,lineNumber:690,columnNumber:9},void 0)]},void 0,!0,{fileName:M,lineNumber:677,columnNumber:7},void 0)]},void 0,!0,{fileName:M,lineNumber:60,columnNumber:5},void 0)},N=`/app/applet/src/pages/ShopPage.tsx`,yt=({onSelectProduct:e})=>{let[t,n]=(0,_.useState)(`all`),[r,i]=(0,_.useState)(``),[a,o]=(0,_.useState)(`featured`),s=[{id:`all`,label:`All Formulations`},{id:`vitality`,label:`Vitality & Shilajit`},{id:`pain-relief`,label:`Joint Health & Pain Relief`},{id:`bundle`,label:`Value Packs & Combos`}],c=(0,_.useMemo)(()=>ht.filter(e=>{let n=t===`all`||e.category===t,i=e.name.toLowerCase().includes(r.toLowerCase())||e.shortDescription.toLowerCase().includes(r.toLowerCase())||e.sanskritName&&e.sanskritName.toLowerCase().includes(r.toLowerCase());return n&&i}).sort((e,t)=>a===`price-asc`?e.price-t.price:a===`price-desc`?t.price-e.price:a===`rating`?t.rating-e.rating:0),[t,r,a]);return(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8`,children:[(0,b.jsxDEV)(`div`,{className:`border-b border-stone-200 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`The Amrutkalp Dispensary`},void 0,!1,{fileName:N,lineNumber:44,columnNumber:11},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl font-bold text-stone-950 mt-1`,children:`Shop Authentic Ayurvedic Remedies`},void 0,!1,{fileName:N,lineNumber:47,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 mt-1 max-w-xl`,children:`Each formulation is laboratory batch-inspected and backed by our open ₹5,51,000 purity challenge. Fast express dispatch across India.`},void 0,!1,{fileName:N,lineNumber:50,columnNumber:11},void 0)]},void 0,!0,{fileName:N,lineNumber:43,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-stone-600 font-medium bg-stone-100 px-3 py-2 rounded-lg self-start md:self-auto`,children:[(0,b.jsxDEV)(Je,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:N,lineNumber:56,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{children:`All packages sealed at our Surat dispensary`},void 0,!1,{fileName:N,lineNumber:57,columnNumber:11},void 0)]},void 0,!0,{fileName:N,lineNumber:55,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:42,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`flex flex-col lg:flex-row lg:items-center justify-between gap-4`,children:[(0,b.jsxDEV)(`div`,{className:`flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-lg`,children:s.map(e=>(0,b.jsxDEV)(`button`,{onClick:()=>n(e.id),className:`px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${t===e.id?`bg-white text-stone-950 shadow-xs font-semibold`:`text-stone-600 hover:text-stone-950`}`,children:e.label},e.id,!1,{fileName:N,lineNumber:67,columnNumber:13},void 0))},void 0,!1,{fileName:N,lineNumber:65,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`flex flex-col sm:flex-row items-stretch sm:items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`relative`,children:[(0,b.jsxDEV)(Ge,{className:`w-4 h-4 text-stone-400 absolute left-3 top-2.5`},void 0,!1,{fileName:N,lineNumber:86,columnNumber:13},void 0),(0,b.jsxDEV)(`input`,{type:`text`,value:r,onChange:e=>i(e.target.value),placeholder:`Search Shilajit, Amrutvati...`,className:`pl-9 pr-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 w-full sm:w-56 bg-white`},void 0,!1,{fileName:N,lineNumber:87,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:85,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(he,{className:`w-3.5 h-3.5 text-stone-500`},void 0,!1,{fileName:N,lineNumber:98,columnNumber:13},void 0),(0,b.jsxDEV)(`select`,{value:a,onChange:e=>o(e.target.value),className:`px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white text-stone-700 cursor-pointer`,children:[(0,b.jsxDEV)(`option`,{value:`featured`,children:`Sort: Featured`},void 0,!1,{fileName:N,lineNumber:104,columnNumber:15},void 0),(0,b.jsxDEV)(`option`,{value:`price-asc`,children:`Price: Low to High`},void 0,!1,{fileName:N,lineNumber:105,columnNumber:15},void 0),(0,b.jsxDEV)(`option`,{value:`price-desc`,children:`Price: High to Low`},void 0,!1,{fileName:N,lineNumber:106,columnNumber:15},void 0),(0,b.jsxDEV)(`option`,{value:`rating`,children:`Highest Rated`},void 0,!1,{fileName:N,lineNumber:107,columnNumber:15},void 0)]},void 0,!0,{fileName:N,lineNumber:99,columnNumber:13},void 0)]},void 0,!0,{fileName:N,lineNumber:97,columnNumber:11},void 0)]},void 0,!0,{fileName:N,lineNumber:82,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:62,columnNumber:7},void 0),c.length===0?(0,b.jsxDEV)(`div`,{className:`p-12 text-center bg-white rounded-xl border border-stone-200`,children:[(0,b.jsxDEV)(`p`,{className:`font-serif text-lg text-stone-700`,children:`No matching remedies found.`},void 0,!1,{fileName:N,lineNumber:118,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-500 mt-1`,children:`Try resetting your search or filter options.`},void 0,!1,{fileName:N,lineNumber:119,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>{n(`all`),i(``)},className:`mt-4 px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg`,children:`Reset Filters`},void 0,!1,{fileName:N,lineNumber:120,columnNumber:11},void 0)]},void 0,!0,{fileName:N,lineNumber:117,columnNumber:9},void 0):(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,children:c.map(t=>(0,b.jsxDEV)(_t,{product:t,onSelectProduct:e},t.id,!1,{fileName:N,lineNumber:130,columnNumber:13},void 0))},void 0,!1,{fileName:N,lineNumber:128,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-stone-100 rounded-2xl border border-stone-200/90 flex flex-col md:flex-row items-center justify-between gap-4`,children:[(0,b.jsxDEV)(`div`,{className:`space-y-1 text-center md:text-left`,children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Unsure which formulation matches your body constitution?`},void 0,!1,{fileName:N,lineNumber:142,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600`,children:`Our Ayurvedic team in Surat provides free dosage and regimen guidance via WhatsApp or phone.`},void 0,!1,{fileName:N,lineNumber:145,columnNumber:11},void 0)]},void 0,!0,{fileName:N,lineNumber:141,columnNumber:9},void 0),(0,b.jsxDEV)(`a`,{href:`https://wa.me/918141323395?text=Hello%20Amrutkalp%20team%2C%20I%20need%20assistance%20choosing%20the%20right%20remedy.`,target:`_blank`,rel:`noopener noreferrer`,className:`py-2.5 px-5 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors text-xs shrink-0 shadow-xs`,children:`Speak with Ayurvedic Advisor`},void 0,!1,{fileName:N,lineNumber:149,columnNumber:9},void 0)]},void 0,!0,{fileName:N,lineNumber:140,columnNumber:7},void 0)]},void 0,!0,{fileName:N,lineNumber:39,columnNumber:5},void 0)},P=`/app/applet/src/pages/ProductDetailPage.tsx`,bt=({product:e,onBackToShop:t})=>{let[n,r]=(0,_.useState)(0),[i,a]=(0,_.useState)(1),[o,s]=(0,_.useState)(`benefits`),{addToCart:c,instantBuyNow:l}=oe(),u=()=>{let t=`Hello Amrutkalp team, I have a question about ${e.name} (${e.weightOrQuantity}) priced at ₹${e.price}. Please provide more details on usage and delivery.`;window.open(`https://wa.me/${y.whatsappNumber}?text=${encodeURIComponent(t)}`,`_blank`,`noopener,noreferrer`)};return(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12`,children:[(0,b.jsxDEV)(`div`,{children:(0,b.jsxDEV)(`button`,{onClick:t,className:`inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer`,children:[(0,b.jsxDEV)(ye,{className:`w-4 h-4`},void 0,!1,{fileName:P,lineNumber:53,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{children:`Back to All Formulations`},void 0,!1,{fileName:P,lineNumber:54,columnNumber:11},void 0)]},void 0,!0,{fileName:P,lineNumber:49,columnNumber:9},void 0)},void 0,!1,{fileName:P,lineNumber:48,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-7 space-y-4`,children:[(0,b.jsxDEV)(`div`,{className:`relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-stone-200/90 flex items-center justify-center`,children:[e.primaryImage?(0,b.jsxDEV)(`div`,{className:`w-full h-full bg-[#f4f2ec] p-6 flex items-center justify-center`,children:(0,b.jsxDEV)(`img`,{src:e.primaryImage,alt:e.name,referrerPolicy:`no-referrer`,className:`w-full h-full object-contain`},void 0,!1,{fileName:P,lineNumber:68,columnNumber:17},void 0)},void 0,!1,{fileName:P,lineNumber:67,columnNumber:15},void 0):(0,b.jsxDEV)(`div`,{className:`w-full h-full bg-gradient-to-br from-[#131d18] via-[#0d1612] to-[#15231c] p-8 text-white flex flex-col justify-between border border-stone-800`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between text-xs text-amber-200/90 border-b border-stone-800 pb-3`,children:[(0,b.jsxDEV)(`span`,{className:`font-mono tracking-widest uppercase text-[11px] text-stone-400`,children:`DISPENSARY ARCHIVE · SURAT`},void 0,!1,{fileName:P,lineNumber:78,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`font-serif italic text-amber-300`,children:`Classical Shastriya Formula`},void 0,!1,{fileName:P,lineNumber:81,columnNumber:19},void 0)]},void 0,!0,{fileName:P,lineNumber:77,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`text-center py-4 space-y-2`,children:[(0,b.jsxDEV)(`div`,{className:`font-serif text-3xl sm:text-4xl font-bold tracking-wide text-amber-100`,children:e.sanskritName||e.name},void 0,!1,{fileName:P,lineNumber:87,columnNumber:19},void 0),e.campaignSlogan&&(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-amber-200/90 italic font-serif max-w-md mx-auto`,children:[`"`,e.campaignSlogan,`"`]},void 0,!0,{fileName:P,lineNumber:91,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{className:`pt-3 flex flex-wrap justify-center gap-2 text-[11px] text-stone-400`,children:e.ingredients.map((e,t)=>(0,b.jsxDEV)(`span`,{className:`px-2.5 py-1 bg-stone-900/80 rounded border border-stone-800`,children:e.name.split(`(`)[0].trim()},t,!1,{fileName:P,lineNumber:97,columnNumber:23},void 0))},void 0,!1,{fileName:P,lineNumber:95,columnNumber:19},void 0)]},void 0,!0,{fileName:P,lineNumber:86,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between text-xs text-stone-400 pt-3 border-t border-stone-800 font-mono`,children:[(0,b.jsxDEV)(`span`,{children:`Zero Synthetics / Zero Steroids`},void 0,!1,{fileName:P,lineNumber:105,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-amber-400 font-semibold`,children:e.weightOrQuantity},void 0,!1,{fileName:P,lineNumber:106,columnNumber:19},void 0)]},void 0,!0,{fileName:P,lineNumber:104,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:76,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-stone-200 text-xs font-semibold text-stone-900 flex items-center gap-1.5 shadow-xs`,children:[(0,b.jsxDEV)(Je,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:P,lineNumber:113,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:`₹5.51L Purity Guarantee`},void 0,!1,{fileName:P,lineNumber:114,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:112,columnNumber:13},void 0),e.discountPercent>0&&(0,b.jsxDEV)(`div`,{className:`absolute top-4 right-4 bg-amber-100 text-amber-950 font-bold px-2.5 py-1 rounded text-xs border border-amber-300 tabular-nums`,children:[`SAVE `,e.discountPercent,`%`]},void 0,!0,{fileName:P,lineNumber:118,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:65,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4`,children:[(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs`,children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`Sourcing Altitude`},void 0,!1,{fileName:P,lineNumber:127,columnNumber:15},void 0),(0,b.jsxDEV)(`strong`,{className:`text-stone-900 font-semibold`,children:`16,000+ Ft Himalayas`},void 0,!1,{fileName:P,lineNumber:128,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:126,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs`,children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`Classical Shodhana`},void 0,!1,{fileName:P,lineNumber:131,columnNumber:15},void 0),(0,b.jsxDEV)(`strong`,{className:`text-stone-900 font-semibold`,children:`Surya Tapi Sun-Dried`},void 0,!1,{fileName:P,lineNumber:132,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:130,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs`,children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`Formulation Origin`},void 0,!1,{fileName:P,lineNumber:135,columnNumber:15},void 0),(0,b.jsxDEV)(`strong`,{className:`text-stone-900 font-semibold`,children:`Surat, Gujarat`},void 0,!1,{fileName:P,lineNumber:136,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:134,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:125,columnNumber:11},void 0)]},void 0,!0,{fileName:P,lineNumber:62,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-xs space-y-6 lg:sticky lg:top-24`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-stone-500 font-medium`,children:[(0,b.jsxDEV)(`span`,{className:`uppercase tracking-wider font-semibold text-amber-900`,children:e.categoryLabel},void 0,!1,{fileName:P,lineNumber:148,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,children:`·`},void 0,!1,{fileName:P,lineNumber:151,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:e.weightOrQuantity},void 0,!1,{fileName:P,lineNumber:152,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,children:`·`},void 0,!1,{fileName:P,lineNumber:153,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:e.servingCount},void 0,!1,{fileName:P,lineNumber:154,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:147,columnNumber:13},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1 leading-tight`,children:e.name},void 0,!1,{fileName:P,lineNumber:158,columnNumber:13},void 0),e.sanskritName&&(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-500 font-serif italic mt-0.5`,children:e.sanskritName},void 0,!1,{fileName:P,lineNumber:163,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 mt-3 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center text-amber-500`,children:[...[,,,,,]].map((e,t)=>(0,b.jsxDEV)(Xe,{className:`w-3.5 h-3.5 fill-amber-400 text-amber-400`},t,!1,{fileName:P,lineNumber:172,columnNumber:19},void 0))},void 0,!1,{fileName:P,lineNumber:170,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`font-bold text-stone-900 tabular-nums`,children:e.rating},void 0,!1,{fileName:P,lineNumber:175,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-400`,children:`·`},void 0,!1,{fileName:P,lineNumber:176,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-600`,children:[e.reviewCount,` Verified Customer Inquiries`]},void 0,!0,{fileName:P,lineNumber:177,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:169,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:145,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-1`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-baseline gap-3`,children:[(0,b.jsxDEV)(`span`,{className:`text-3xl font-bold text-stone-950 tabular-nums`,children:[`₹`,e.price]},void 0,!0,{fileName:P,lineNumber:184,columnNumber:15},void 0),e.originalPrice>e.price&&(0,b.jsxDEV)(`span`,{className:`text-sm text-stone-400 line-through tabular-nums`,children:[`₹`,e.originalPrice]},void 0,!0,{fileName:P,lineNumber:188,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-emerald-800 font-semibold`,children:[`(Save ₹`,e.originalPrice-e.price,`)`]},void 0,!0,{fileName:P,lineNumber:192,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:183,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-[11px] text-stone-500`,children:`Inclusive of all taxes · Free express delivery included on this item`},void 0,!1,{fileName:P,lineNumber:196,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:182,columnNumber:11},void 0),e.campaignSlogan&&(0,b.jsxDEV)(`div`,{className:`p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-950`,children:[(0,b.jsxDEV)(`strong`,{className:`block font-semibold text-amber-900`,children:e.campaignKicker||`Ayurvedic Slogan`},void 0,!1,{fileName:P,lineNumber:204,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-700 text-[11px]`,children:e.campaignSlogan},void 0,!1,{fileName:P,lineNumber:207,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:203,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-2`,children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-semibold text-stone-700`,children:`Select Quantity:`},void 0,!1,{fileName:P,lineNumber:215,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center border border-stone-300 rounded-lg bg-white`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>a(Math.max(1,i-1)),className:`px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors`,"aria-label":`Decrease quantity`,children:`-`},void 0,!1,{fileName:P,lineNumber:220,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{className:`px-4 text-xs font-bold text-stone-900 tabular-nums`,children:i},void 0,!1,{fileName:P,lineNumber:227,columnNumber:17},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>a(i+1),className:`px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors`,"aria-label":`Increase quantity`,children:`+`},void 0,!1,{fileName:P,lineNumber:230,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:219,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-stone-500`,children:[`Total: `,(0,b.jsxDEV)(`strong`,{className:`text-stone-900 tabular-nums`,children:[`₹`,e.price*i]},void 0,!0,{fileName:P,lineNumber:240,columnNumber:24},void 0)]},void 0,!0,{fileName:P,lineNumber:239,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:218,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:214,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-2.5 pt-2`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>l(e,i),className:`w-full py-3.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer`,children:[(0,b.jsxDEV)(`span`,{children:[`Instant Buy Now (₹`,e.price*i,`)`]},void 0,!0,{fileName:P,lineNumber:251,columnNumber:15},void 0),(0,b.jsxDEV)(me,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:P,lineNumber:252,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:247,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>c(e,i),className:`w-full py-3 px-4 bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer`,children:[(0,b.jsxDEV)(Ye,{className:`w-4 h-4 text-stone-600`},void 0,!1,{fileName:P,lineNumber:259,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:`Add to Remedy Bag`},void 0,!1,{fileName:P,lineNumber:260,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:255,columnNumber:13},void 0),(0,b.jsxDEV)(`button`,{onClick:u,className:`w-full py-2.5 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(Re,{className:`w-4 h-4`},void 0,!1,{fileName:P,lineNumber:267,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:[`Quick Order via WhatsApp (+91 `,y.phone,`)`]},void 0,!0,{fileName:P,lineNumber:268,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:263,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:246,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`pt-3 border-t border-stone-200 space-y-2 text-xs text-stone-600`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(tt,{className:`w-4 h-4 text-[#c99a45] shrink-0`},void 0,!1,{fileName:P,lineNumber:275,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:`Cash on Delivery (COD) supported across India`},void 0,!1,{fileName:P,lineNumber:276,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:274,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(Je,{className:`w-4 h-4 text-[#c99a45] shrink-0`},void 0,!1,{fileName:P,lineNumber:279,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:`₹5,51,000 public lab challenge protection`},void 0,!1,{fileName:P,lineNumber:280,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:278,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(We,{className:`w-4 h-4 text-[#c99a45] shrink-0`},void 0,!1,{fileName:P,lineNumber:283,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:`7-Day transit damage & broken seal replacement`},void 0,!1,{fileName:P,lineNumber:284,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:282,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:273,columnNumber:11},void 0)]},void 0,!0,{fileName:P,lineNumber:143,columnNumber:9},void 0)]},void 0,!0,{fileName:P,lineNumber:59,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex overflow-x-auto border-b border-stone-200 bg-stone-50/70 p-2 gap-1`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>s(`benefits`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${o===`benefits`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:`Verified Benefits & Uses`},void 0,!1,{fileName:P,lineNumber:297,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>s(`ingredients`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${o===`ingredients`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:`Ingredients & Botanical Role`},void 0,!1,{fileName:P,lineNumber:307,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>s(`howToUse`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${o===`howToUse`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:`How to Use & Dosage`},void 0,!1,{fileName:P,lineNumber:317,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>s(`purity`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${o===`purity`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:`Authenticity & Lab Tests`},void 0,!1,{fileName:P,lineNumber:327,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>s(`safety`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${o===`safety`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:`Precautions & Safety`},void 0,!1,{fileName:P,lineNumber:337,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>s(`transparency`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${o===`transparency`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:`Transparency Disclosure`},void 0,!1,{fileName:P,lineNumber:347,columnNumber:11},void 0)]},void 0,!0,{fileName:P,lineNumber:296,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 sm:p-8`,children:[o===`benefits`&&(0,b.jsxDEV)(`div`,{className:`space-y-6`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-xl font-bold text-stone-900`,children:[`What is `,e.name,`?`]},void 0,!0,{fileName:P,lineNumber:366,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed`,children:e.fullDescription},void 0,!1,{fileName:P,lineNumber:369,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:365,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h4`,{className:`text-xs font-bold uppercase tracking-wider text-stone-800 mb-3`,children:`Verified Traditional Actions & Modern Evidence`},void 0,!1,{fileName:P,lineNumber:375,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-2.5`,children:e.verifiedBenefits.map((e,t)=>(0,b.jsxDEV)(`div`,{className:`flex items-start gap-2.5 text-xs sm:text-sm text-stone-700`,children:[(0,b.jsxDEV)(`div`,{className:`w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5`,children:(0,b.jsxDEV)(ve,{className:`w-2.5 h-2.5`},void 0,!1,{fileName:P,lineNumber:382,columnNumber:25},void 0)},void 0,!1,{fileName:P,lineNumber:381,columnNumber:23},void 0),(0,b.jsxDEV)(`span`,{children:e},void 0,!1,{fileName:P,lineNumber:384,columnNumber:23},void 0)]},t,!0,{fileName:P,lineNumber:380,columnNumber:21},void 0))},void 0,!1,{fileName:P,lineNumber:378,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:374,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:364,columnNumber:13},void 0),o===`ingredients`&&(0,b.jsxDEV)(`div`,{className:`space-y-6`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-xl font-bold text-stone-900`,children:`Botanical & Mineral Composition`},void 0,!1,{fileName:P,lineNumber:396,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 mt-1`,children:`100% active compounds. No chalk, talc, artificial coloring, or preservatives.`},void 0,!1,{fileName:P,lineNumber:399,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:395,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`divide-y divide-stone-200 border border-stone-200 rounded-xl overflow-hidden`,children:e.ingredients.map((e,t)=>(0,b.jsxDEV)(`div`,{className:`p-4 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`strong`,{className:`text-stone-900 block font-semibold text-sm`,children:e.name},void 0,!1,{fileName:P,lineNumber:408,columnNumber:23},void 0),e.botanicalName&&(0,b.jsxDEV)(`span`,{className:`italic text-stone-500 text-[11px]`,children:e.botanicalName},void 0,!1,{fileName:P,lineNumber:412,columnNumber:25},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-600 text-xs mt-0.5`,children:e.role},void 0,!1,{fileName:P,lineNumber:416,columnNumber:23},void 0)]},void 0,!0,{fileName:P,lineNumber:407,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{className:`text-left sm:text-right shrink-0`,children:[e.percentage&&(0,b.jsxDEV)(`span`,{className:`font-mono text-stone-900 font-bold block text-xs`,children:e.percentage},void 0,!1,{fileName:P,lineNumber:422,columnNumber:25},void 0),e.source&&(0,b.jsxDEV)(`span`,{className:`text-stone-400 text-[10px] block`,children:[`Source: `,e.source]},void 0,!0,{fileName:P,lineNumber:427,columnNumber:25},void 0)]},void 0,!0,{fileName:P,lineNumber:420,columnNumber:21},void 0)]},t,!0,{fileName:P,lineNumber:406,columnNumber:19},void 0))},void 0,!1,{fileName:P,lineNumber:404,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:394,columnNumber:13},void 0),o===`howToUse`&&(0,b.jsxDEV)(`div`,{className:`space-y-6`,children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-xl font-bold text-stone-900`,children:`Dosage, Timing & Classical Vehicle (Anupana)`},void 0,!1,{fileName:P,lineNumber:441,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4`,children:[(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs`,children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`Optimal Timing`},void 0,!1,{fileName:P,lineNumber:447,columnNumber:19},void 0),(0,b.jsxDEV)(`strong`,{className:`text-stone-900 font-semibold`,children:e.howToUse.timing},void 0,!1,{fileName:P,lineNumber:448,columnNumber:19},void 0)]},void 0,!0,{fileName:P,lineNumber:446,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs`,children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`Measured Dosage`},void 0,!1,{fileName:P,lineNumber:451,columnNumber:19},void 0),(0,b.jsxDEV)(`strong`,{className:`text-stone-900 font-semibold`,children:e.howToUse.dosage},void 0,!1,{fileName:P,lineNumber:452,columnNumber:19},void 0)]},void 0,!0,{fileName:P,lineNumber:450,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs`,children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`Recommended Vehicle`},void 0,!1,{fileName:P,lineNumber:455,columnNumber:19},void 0),(0,b.jsxDEV)(`strong`,{className:`text-stone-900 font-semibold`,children:e.howToUse.liquidVehicle},void 0,!1,{fileName:P,lineNumber:456,columnNumber:19},void 0)]},void 0,!0,{fileName:P,lineNumber:454,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:445,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h4`,{className:`text-xs font-bold uppercase tracking-wider text-stone-800 mb-3`,children:`Step-by-Step Instructions`},void 0,!1,{fileName:P,lineNumber:461,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-2`,children:e.howToUse.instructions.map((e,t)=>(0,b.jsxDEV)(`div`,{className:`flex items-start gap-3 p-3 bg-white rounded-lg border border-stone-200 text-xs sm:text-sm text-stone-700`,children:[(0,b.jsxDEV)(`span`,{className:`font-mono font-bold text-stone-900 text-xs shrink-0`,children:[`0`,t+1,`.`]},void 0,!0,{fileName:P,lineNumber:467,columnNumber:23},void 0),(0,b.jsxDEV)(`span`,{children:e},void 0,!1,{fileName:P,lineNumber:470,columnNumber:23},void 0)]},t,!0,{fileName:P,lineNumber:466,columnNumber:21},void 0))},void 0,!1,{fileName:P,lineNumber:464,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:460,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:440,columnNumber:13},void 0),o===`purity`&&(0,b.jsxDEV)(`div`,{className:`space-y-6`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-xl font-bold text-stone-900`,children:`Verification Protocols & The ₹5.51 Lakh Reward`},void 0,!1,{fileName:P,lineNumber:482,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 mt-1`,children:`You can verify every physical jar at home using classical physical tests.`},void 0,!1,{fileName:P,lineNumber:485,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:481,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4`,children:e.authenticityTests.map((e,t)=>(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2`,children:[(0,b.jsxDEV)(`strong`,{className:`font-serif text-sm font-bold text-stone-900 block`,children:e.title},void 0,!1,{fileName:P,lineNumber:493,columnNumber:21},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:e.description},void 0,!1,{fileName:P,lineNumber:496,columnNumber:21},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 border-t border-stone-200 text-[11px] font-semibold text-emerald-800`,children:[`Standard: `,e.result]},void 0,!0,{fileName:P,lineNumber:499,columnNumber:21},void 0)]},t,!0,{fileName:P,lineNumber:492,columnNumber:19},void 0))},void 0,!1,{fileName:P,lineNumber:490,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:480,columnNumber:13},void 0),o===`safety`&&(0,b.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-xl font-bold text-stone-900`,children:`Important Precautions & Contraindications`},void 0,!1,{fileName:P,lineNumber:511,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600`,children:`Ayurvedic herbs are potent bioactive compounds. Please observe the following guidance:`},void 0,!1,{fileName:P,lineNumber:514,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-2.5`,children:e.safetyPrecautions.map((e,t)=>(0,b.jsxDEV)(`div`,{className:`p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-950`,children:[(0,b.jsxDEV)(et,{className:`w-4 h-4 text-amber-700 shrink-0 mt-0.5`},void 0,!1,{fileName:P,lineNumber:521,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{children:e},void 0,!1,{fileName:P,lineNumber:522,columnNumber:21},void 0)]},t,!0,{fileName:P,lineNumber:520,columnNumber:19},void 0))},void 0,!1,{fileName:P,lineNumber:518,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-100 rounded-xl border border-stone-200 text-xs text-stone-600`,children:[(0,b.jsxDEV)(`strong`,{className:`text-stone-900 block font-semibold mb-1`,children:`Medical Consultation Disclaimer`},void 0,!1,{fileName:P,lineNumber:528,columnNumber:17},void 0),`Always consult an Ayurvedic physician or qualified medical doctor if you are pregnant, nursing, taking blood-thinning pharmaceuticals, or managing chronic kidney disease before starting new herbal regimens.`]},void 0,!0,{fileName:P,lineNumber:527,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:510,columnNumber:13},void 0),o===`transparency`&&(0,b.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-xl font-bold text-stone-900`,children:`Verified Facts vs Information Under Laboratory Documentation`},void 0,!1,{fileName:P,lineNumber:539,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600`,children:`In compliance with strict consumer transparency standards, we disclose exactly what is verified on file and what documentation is available on demand:`},void 0,!1,{fileName:P,lineNumber:542,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,b.jsxDEV)(`div`,{className:`p-4 bg-white rounded-xl border border-emerald-200 space-y-2`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-emerald-800`,children:[(0,b.jsxDEV)(ve,{className:`w-4 h-4`},void 0,!1,{fileName:P,lineNumber:549,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{children:`Verified Physical & Chemical Characteristics`},void 0,!1,{fileName:P,lineNumber:550,columnNumber:21},void 0)]},void 0,!0,{fileName:P,lineNumber:548,columnNumber:19},void 0),(0,b.jsxDEV)(`ul`,{className:`text-xs text-stone-600 space-y-1.5 list-disc pl-4`,children:[(0,b.jsxDEV)(`li`,{children:[`High-altitude Himalayan origin (`,e.transparencyStatus.originLocation,`)`]},void 0,!0,{fileName:P,lineNumber:553,columnNumber:21},void 0),(0,b.jsxDEV)(`li`,{children:`Surya Tapi water purification method verified`},void 0,!1,{fileName:P,lineNumber:554,columnNumber:21},void 0),(0,b.jsxDEV)(`li`,{children:`Tested for absence of synthetic polymers & steroids`},void 0,!1,{fileName:P,lineNumber:555,columnNumber:21},void 0),(0,b.jsxDEV)(`li`,{children:`Direct dispensary packaging in Surat, Gujarat`},void 0,!1,{fileName:P,lineNumber:556,columnNumber:21},void 0)]},void 0,!0,{fileName:P,lineNumber:552,columnNumber:19},void 0)]},void 0,!0,{fileName:P,lineNumber:547,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-white rounded-xl border border-stone-200 space-y-2`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs font-bold text-stone-800`,children:[(0,b.jsxDEV)(Pe,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:P,lineNumber:562,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{children:`On-Demand Batch Documentation`},void 0,!1,{fileName:P,lineNumber:563,columnNumber:21},void 0)]},void 0,!0,{fileName:P,lineNumber:561,columnNumber:19},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:e.transparencyStatus.pendingLaboratoryReports},void 0,!1,{fileName:P,lineNumber:565,columnNumber:19},void 0),(0,b.jsxDEV)(`a`,{href:`https://wa.me/${y.whatsappNumber}?text=${encodeURIComponent(`Hello Amrutkalp, please share the batch COA lab report for ${e.name}.`)}`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 text-xs text-emerald-700 font-semibold hover:underline`,children:(0,b.jsxDEV)(`span`,{children:`Request Batch COA PDF via WhatsApp →`},void 0,!1,{fileName:P,lineNumber:574,columnNumber:21},void 0)},void 0,!1,{fileName:P,lineNumber:568,columnNumber:19},void 0)]},void 0,!0,{fileName:P,lineNumber:560,columnNumber:17},void 0)]},void 0,!0,{fileName:P,lineNumber:546,columnNumber:15},void 0)]},void 0,!0,{fileName:P,lineNumber:538,columnNumber:13},void 0)]},void 0,!0,{fileName:P,lineNumber:360,columnNumber:9},void 0)]},void 0,!0,{fileName:P,lineNumber:293,columnNumber:7},void 0)]},void 0,!0,{fileName:P,lineNumber:45,columnNumber:5},void 0)},F=`/app/applet/src/pages/AuthenticityPage.tsx`,xt=({onGoToShop:e})=>(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-3xl mx-auto space-y-4`,children:[(0,b.jsxDEV)(`div`,{className:`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-950 text-xs font-semibold`,children:[(0,b.jsxDEV)(Je,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:F,lineNumber:16,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{children:`The Amrutkalp Purity Guarantee`},void 0,!1,{fileName:F,lineNumber:17,columnNumber:11},void 0)]},void 0,!0,{fileName:F,lineNumber:15,columnNumber:9},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight`,children:y.guarantee.headlineGujarati},void 0,!1,{fileName:F,lineNumber:20,columnNumber:9},void 0),(0,b.jsxDEV)(`p`,{className:`font-serif text-xl sm:text-2xl text-stone-800 font-medium`,children:y.guarantee.headlineEnglish},void 0,!1,{fileName:F,lineNumber:24,columnNumber:9},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto`,children:`We stake our company's reputation, our Surat dispensary, and ₹5,51,000 in cold cash on the uncompromised purity of our Grade A+ Himalayan Shilajit resin.`},void 0,!1,{fileName:F,lineNumber:28,columnNumber:9},void 0)]},void 0,!0,{fileName:F,lineNumber:14,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111915] text-stone-100 rounded-2xl p-6 sm:p-10 border border-stone-800 shadow-xl`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-7 space-y-6`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#c99a45] font-semibold`,children:`Why We Created This Challenge`},void 0,!1,{fileName:F,lineNumber:38,columnNumber:11},void 0),(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl sm:text-3xl font-bold text-white`,children:`The Dark Truth Behind Cheap Shilajit in India`},void 0,!1,{fileName:F,lineNumber:42,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3 text-xs sm:text-sm text-stone-300 leading-relaxed`,children:[(0,b.jsxDEV)(`p`,{children:`Genuine high-altitude Himalayan Shilajit takes centuries of geological pressure and alpine botanical fermentation to produce. It cannot be grown in a greenhouse or synthesized in a vat.`},void 0,!1,{fileName:F,lineNumber:47,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{children:`Because raw Shilajit is scarce, more than 80% of what is sold online consists of industrial sugar syrup, charcoal powder, asphalt bitumen pitch, and cheap gums. Worse, several disreputable brands spike their pastes with synthetic chemical stimulants to mimic an immediate "kick."`},void 0,!1,{fileName:F,lineNumber:50,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-amber-200`,children:`Amrutkalp was founded in Surat, Gujarat to dismantle this deception. We harvest raw pitch exclusively above 16,000 feet, purify it strictly with pure mountain water and sun-drying (Surya Tapi), and test every batch for heavy metals and pesticide residues.`},void 0,!1,{fileName:F,lineNumber:53,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:46,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 flex flex-wrap gap-4 items-center`,children:[(0,b.jsxDEV)(`button`,{onClick:e,className:`py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs`,children:`Order 100% Tested Shilajit (₹799)`},void 0,!1,{fileName:F,lineNumber:59,columnNumber:13},void 0),(0,b.jsxDEV)(`a`,{href:`https://wa.me/${y.whatsappNumber}?text=Hello%20Amrutkalp%2C%20I%20want%20to%20verify%20batch%20lab%20reports%20for%20Shilajit.`,target:`_blank`,rel:`noopener noreferrer`,className:`text-xs text-stone-300 hover:text-white flex items-center gap-1.5`,children:[(0,b.jsxDEV)(Be,{className:`w-4 h-4 text-emerald-400`},void 0,!1,{fileName:F,lineNumber:71,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{children:[`Contact Quality Desk: `,y.phone]},void 0,!0,{fileName:F,lineNumber:72,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:65,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:58,columnNumber:11},void 0)]},void 0,!0,{fileName:F,lineNumber:37,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`lg:col-span-5`,children:(0,b.jsxDEV)(`div`,{className:`rounded-2xl border border-amber-500/40 bg-gradient-to-b from-[#18261f] via-[#101b15] to-[#0c1410] p-7 text-stone-100 shadow-2xl space-y-4`,children:[(0,b.jsxDEV)(`div`,{className:`text-center pb-3 border-b border-stone-800 space-y-1`,children:[(0,b.jsxDEV)(`span`,{className:`text-[10px] uppercase font-mono tracking-widest text-[#c99a45]`,children:`LEGAL PURITY UNDERTAKING`},void 0,!1,{fileName:F,lineNumber:82,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`font-serif text-2xl font-bold text-amber-200`,children:`₹5,51,000 BOUNTY`},void 0,!1,{fileName:F,lineNumber:85,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:81,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-center space-y-1.5`,children:[(0,b.jsxDEV)(`div`,{className:`font-serif text-base font-bold text-amber-100 leading-snug`,children:y.guarantee.headlineGujarati},void 0,!1,{fileName:F,lineNumber:91,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`text-[11px] text-stone-400`,children:y.guarantee.headlineHindi},void 0,!1,{fileName:F,lineNumber:94,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:90,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-2 text-[11px] text-stone-300`,children:[(0,b.jsxDEV)(`div`,{className:`flex justify-between py-1 border-b border-stone-800`,children:[(0,b.jsxDEV)(`span`,{children:`Testing Lab Recognition`},void 0,!1,{fileName:F,lineNumber:101,columnNumber:17},void 0),(0,b.jsxDEV)(`strong`,{className:`text-emerald-400`,children:`Any NABL Accredited Lab`},void 0,!1,{fileName:F,lineNumber:102,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:100,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`flex justify-between py-1 border-b border-stone-800`,children:[(0,b.jsxDEV)(`span`,{children:`Acceptable Adulterants`},void 0,!1,{fileName:F,lineNumber:105,columnNumber:17},void 0),(0,b.jsxDEV)(`strong`,{className:`text-emerald-400 font-mono`,children:`0.00% (Strict Zero)`},void 0,!1,{fileName:F,lineNumber:106,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:104,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`flex justify-between py-1 border-b border-stone-800`,children:[(0,b.jsxDEV)(`span`,{children:`Batch Traceability`},void 0,!1,{fileName:F,lineNumber:109,columnNumber:17},void 0),(0,b.jsxDEV)(`strong`,{className:`text-amber-300 font-mono`,children:`Laser Batch Seal`},void 0,!1,{fileName:F,lineNumber:110,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:108,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:99,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`pt-3 border-t border-stone-800 text-[10px] text-stone-400 font-mono flex justify-between items-center`,children:[(0,b.jsxDEV)(`span`,{children:`Amrutkalp QA Division`},void 0,!1,{fileName:F,lineNumber:115,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-amber-400`,children:`Surat, Gujarat`},void 0,!1,{fileName:F,lineNumber:116,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:114,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:79,columnNumber:11},void 0)},void 0,!1,{fileName:F,lineNumber:78,columnNumber:9},void 0)]},void 0,!0,{fileName:F,lineNumber:34,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-2xl mx-auto`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Laboratory at Home`},void 0,!1,{fileName:F,lineNumber:127,columnNumber:11},void 0),(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1`,children:`4 Physical Tests You Can Perform Yourself`},void 0,!1,{fileName:F,lineNumber:130,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 mt-1`,children:`Test any jar of Amrutkalp in your kitchen before consuming a single drop.`},void 0,!1,{fileName:F,lineNumber:133,columnNumber:11},void 0)]},void 0,!0,{fileName:F,lineNumber:126,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-6`,children:[(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0`,children:(0,b.jsxDEV)(De,{className:`w-5 h-5`},void 0,!1,{fileName:F,lineNumber:144,columnNumber:17},void 0)},void 0,!1,{fileName:F,lineNumber:143,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-[10px] uppercase font-bold tracking-wider text-stone-400`,children:`Test 01`},void 0,!1,{fileName:F,lineNumber:147,columnNumber:17},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`The Water Solubility & Amber Ribbon Test`},void 0,!1,{fileName:F,lineNumber:148,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:146,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:142,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`Place a pea-sized drop into a clear glass of warm water. Pure Shilajit will not float or sink as a gummy lump. It immediately disperses in descending golden-amber ribbons, dissolving completely in 2 minutes without leaving grit, oily scum, or black residue.`},void 0,!1,{fileName:F,lineNumber:151,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700`,children:[(0,b.jsxDEV)(`strong`,{className:`text-emerald-800`,children:`Pass Standard:`},void 0,!1,{fileName:F,lineNumber:155,columnNumber:15},void 0),` Clear, deep mahogany or amber solution with smooth earthy aroma.`]},void 0,!0,{fileName:F,lineNumber:154,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:141,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0`,children:(0,b.jsxDEV)(Ae,{className:`w-5 h-5`},void 0,!1,{fileName:F,lineNumber:163,columnNumber:17},void 0)},void 0,!1,{fileName:F,lineNumber:162,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-[10px] uppercase font-bold tracking-wider text-stone-400`,children:`Test 02`},void 0,!1,{fileName:F,lineNumber:166,columnNumber:17},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`The Flame & Ash Test`},void 0,!1,{fileName:F,lineNumber:167,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:165,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:161,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`Hold a flame beneath a metal spatula with a small dab of resin. Genuine Shilajit will bubble, expand like volcanic lava, and calcify into pale ash. It will NEVER catch fire or emit black petrochemical fumes.`},void 0,!1,{fileName:F,lineNumber:170,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700`,children:[(0,b.jsxDEV)(`strong`,{className:`text-emerald-800`,children:`Pass Standard:`},void 0,!1,{fileName:F,lineNumber:174,columnNumber:15},void 0),` Non-combustible mineral calcification without chemical smoke.`]},void 0,!0,{fileName:F,lineNumber:173,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:160,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0`,children:(0,b.jsxDEV)(Qe,{className:`w-5 h-5`},void 0,!1,{fileName:F,lineNumber:182,columnNumber:17},void 0)},void 0,!1,{fileName:F,lineNumber:181,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-[10px] uppercase font-bold tracking-wider text-stone-400`,children:`Test 03`},void 0,!1,{fileName:F,lineNumber:185,columnNumber:17},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Thermal Flexibility (Rheology)`},void 0,!1,{fileName:F,lineNumber:186,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:184,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:180,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`Place the jar in your refrigerator for 2 hours. Authentic Shilajit turns brittle and glass-like, snapping crisply. When held between your warm fingers, it immediately softens into a pliable, sticky, resinous texture.`},void 0,!1,{fileName:F,lineNumber:189,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700`,children:[(0,b.jsxDEV)(`strong`,{className:`text-emerald-800`,children:`Pass Standard:`},void 0,!1,{fileName:F,lineNumber:193,columnNumber:15},void 0),` Dynamic temperature-sensitive rheology, proving absence of synthetic plasticizers.`]},void 0,!0,{fileName:F,lineNumber:192,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:179,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3 shadow-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0`,children:(0,b.jsxDEV)(ge,{className:`w-5 h-5`},void 0,!1,{fileName:F,lineNumber:201,columnNumber:17},void 0)},void 0,!1,{fileName:F,lineNumber:200,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-[10px] uppercase font-bold tracking-wider text-stone-400`,children:`Test 04`},void 0,!1,{fileName:F,lineNumber:204,columnNumber:17},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Alcohol Insoluble Screen`},void 0,!1,{fileName:F,lineNumber:205,columnNumber:17},void 0)]},void 0,!0,{fileName:F,lineNumber:203,columnNumber:15},void 0)]},void 0,!0,{fileName:F,lineNumber:199,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`Drop resin into pure rubbing alcohol (surgical spirit or 99% isopropyl). Pure Shilajit will NOT dissolve and will remain intact at the bottom. Adulterated pastes formulated with artificial dyes or fillers dissolve readily in alcohol.`},void 0,!1,{fileName:F,lineNumber:208,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-3 bg-stone-50 rounded-lg text-[11px] text-stone-700`,children:[(0,b.jsxDEV)(`strong`,{className:`text-emerald-800`,children:`Pass Standard:`},void 0,!1,{fileName:F,lineNumber:212,columnNumber:15},void 0),` Intact insoluble resin precipitate, proving absence of synthetic organic dyes.`]},void 0,!0,{fileName:F,lineNumber:211,columnNumber:13},void 0)]},void 0,!0,{fileName:F,lineNumber:198,columnNumber:11},void 0)]},void 0,!0,{fileName:F,lineNumber:138,columnNumber:9},void 0)]},void 0,!0,{fileName:F,lineNumber:125,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 sm:p-8 bg-stone-100 rounded-2xl border border-stone-300 space-y-4`,children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-xl font-bold text-stone-900`,children:`Official Terms & Procedure for the ₹5,51,000 Purity Reward`},void 0,!1,{fileName:F,lineNumber:221,columnNumber:9},void 0),(0,b.jsxDEV)(`ol`,{className:`list-decimal pl-5 text-xs text-stone-700 space-y-2 leading-relaxed`,children:[(0,b.jsxDEV)(`li`,{children:[(0,b.jsxDEV)(`strong`,{children:`Procurement:`},void 0,!1,{fileName:F,lineNumber:227,columnNumber:13},void 0),` The product sample must be an unopened, factory-sealed container of Amrutkalp Sanjivani Shilajit with tamper-evident seal intact.`]},void 0,!0,{fileName:F,lineNumber:226,columnNumber:11},void 0),(0,b.jsxDEV)(`li`,{children:[(0,b.jsxDEV)(`strong`,{children:`Testing Facility:`},void 0,!1,{fileName:F,lineNumber:230,columnNumber:13},void 0),` Testing must be performed at an Indian government-recognized NABL-accredited chemical testing laboratory with certified Gas Chromatography (GC-MS) or Inductively Coupled Plasma Mass Spectrometry (ICP-MS) capabilities.`]},void 0,!0,{fileName:F,lineNumber:229,columnNumber:11},void 0),(0,b.jsxDEV)(`li`,{children:[(0,b.jsxDEV)(`strong`,{children:`Parameters for Payout:`},void 0,!1,{fileName:F,lineNumber:233,columnNumber:13},void 0),` If the laboratory report demonstrates that the resin contains synthetic polymer thickeners, added artificial sugars, heavy metal concentrations exceeding Indian Pharmacopoeia limits (Lead > 10 ppm, Arsenic > 3 ppm, Mercury > 1 ppm), or adulterant coal-tar derivatives, Amrutkalp will honor the ₹5,51,000 cash reward.`]},void 0,!0,{fileName:F,lineNumber:232,columnNumber:11},void 0),(0,b.jsxDEV)(`li`,{children:[(0,b.jsxDEV)(`strong`,{children:`Claim Submission:`},void 0,!1,{fileName:F,lineNumber:236,columnNumber:13},void 0),` Submit the original testing report, invoice, and retained seal directly to Amrutkalp Head Dispensary, 108 Biz Hub Shopping, Amroli, Surat, Gujarat 394107.`]},void 0,!0,{fileName:F,lineNumber:235,columnNumber:11},void 0)]},void 0,!0,{fileName:F,lineNumber:225,columnNumber:9},void 0)]},void 0,!0,{fileName:F,lineNumber:220,columnNumber:7},void 0)]},void 0,!0,{fileName:F,lineNumber:11,columnNumber:5},void 0),I=`/app/applet/src/pages/IngredientsPage.tsx`,St=({onGoToShop:e})=>(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-3xl mx-auto space-y-4`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Shastriya Pharmacopoeia & Modern Phytochemistry`},void 0,!1,{fileName:I,lineNumber:57,columnNumber:9},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight`,children:`Pure Botanical & Mineral Science`},void 0,!1,{fileName:I,lineNumber:60,columnNumber:9},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto`,children:`Every Amrutkalp formulation contains 100% active compounds. We reject chemical extracts standardized with maltodextrin, artificial colorants, synthetic binders, and synthetic analgesics.`},void 0,!1,{fileName:I,lineNumber:63,columnNumber:9},void 0)]},void 0,!0,{fileName:I,lineNumber:56,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`p-8 bg-[#111915] text-stone-100 rounded-2xl border border-stone-800 shadow-xl space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider`,children:[(0,b.jsxDEV)(Ze,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:I,lineNumber:71,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{children:`The Traditional Purification Standard`},void 0,!1,{fileName:I,lineNumber:72,columnNumber:11},void 0)]},void 0,!0,{fileName:I,lineNumber:70,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`,children:[(0,b.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl sm:text-3xl font-bold text-white leading-snug`,children:`Why Surya Tapi (Sun-Drying) Matters Over Industrial Boiling`},void 0,!1,{fileName:I,lineNumber:77,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-300 leading-relaxed`,children:`Industrial mass-market brands use commercial boilers at temperatures above 100°C to rapidly evaporate water from raw Shilajit pitch. This brutal heat caramelizes sugars, burns the volatile organic acids, and kills delicate bio-enzymes.`},void 0,!1,{fileName:I,lineNumber:80,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-300 leading-relaxed`,children:[`At Amrutkalp, we practice authentic `,(0,b.jsxDEV)(`strong`,{children:`Surya Tapi Shodhana`},void 0,!1,{fileName:I,lineNumber:84,columnNumber:51},void 0),`. Raw rock pitch is soaked in pure Himalayan spring water, filtered through multi-tier cotton screens to eliminate all insoluble grit, and left in shallow glass trays under natural sunlight for 45 to 60 days. The gentle solar heat evaporates moisture without compromising the organic matrix.`]},void 0,!0,{fileName:I,lineNumber:83,columnNumber:13},void 0)]},void 0,!0,{fileName:I,lineNumber:76,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-900/90 rounded-xl border border-stone-800 space-y-2`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs font-mono font-bold text-amber-300 block`,children:`Surya Tapi (Amrutkalp)`},void 0,!1,{fileName:I,lineNumber:90,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-300`,children:`Evaporated at ambient 35°C–40°C under sunlight. Retains 100% Fulvic Acid and ionic mineral bioavailability.`},void 0,!1,{fileName:I,lineNumber:91,columnNumber:15},void 0)]},void 0,!0,{fileName:I,lineNumber:89,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-900/90 rounded-xl border border-stone-800 space-y-2`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs font-mono font-bold text-red-400 block`,children:`Boiler Dried (Cheap Brands)`},void 0,!1,{fileName:I,lineNumber:96,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-400`,children:`Boiled at >100°C in industrial kettles. Destroys organic acids and results in burnt, bitter black tar.`},void 0,!1,{fileName:I,lineNumber:97,columnNumber:15},void 0)]},void 0,!0,{fileName:I,lineNumber:95,columnNumber:13},void 0)]},void 0,!0,{fileName:I,lineNumber:88,columnNumber:11},void 0)]},void 0,!0,{fileName:I,lineNumber:75,columnNumber:9},void 0)]},void 0,!0,{fileName:I,lineNumber:69,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-2xl mx-auto`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Single Herb Monographs`},void 0,!1,{fileName:I,lineNumber:108,columnNumber:11},void 0),(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl sm:text-3xl font-bold text-stone-950 mt-1`,children:`Active Ingredients Decoded`},void 0,!1,{fileName:I,lineNumber:111,columnNumber:11},void 0)]},void 0,!0,{fileName:I,lineNumber:107,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-6`,children:[{name:`Pure Himalayan Shilajit`,sanskrit:`Shuddha Shilajatu (शुद्ध शिलाजीत)`,botanical:`Asphaltum punjabianum / Alpine Mineral Pitch`,origin:`High-Altitude Western Himalayan Rock Faces (16,000+ ft)`,activePrinciple:`>60% Fulvic Acid, Humic Complexes, 84+ Ionic Minerals`,description:`Shilajit is a natural mineral-herbal resin formed through the gradual microbial decomposition of alpine flora (including Euphorbia and Trifolium species) under immense rock pressure over centuries. When the summer sun warms the Himalayan cliff faces, the dark resin exudes from fissures. It acts as a premier "Rasayana" (rejuvenator), delivering bioavailable minerals directly through cell walls via low-molecular-weight Fulvic acid.`},{name:`Kunduru / Shallaki`,sanskrit:`Shallaki (शल्लकी)`,botanical:`Boswellia serrata (Tapped Resin Extract)`,origin:`Dry Deciduous Mountain Forests of Central India`,activePrinciple:`65% Boswellic Acids (specifically AKBA: 3-O-acetyl-11-keto-beta-boswellic acid)`,description:`Shallaki is Ayurveda’s primary botanical intervention for chronic musculoskeletal inflammation. Unlike non-steroidal painkillers that damage gastric mucosa, Boswellic acids selectively inhibit 5-lipoxygenase (5-LOX), shutting down the synthesis of leukotrienes that cause swelling and synovial pain in the lumbar spine, knees, and neck.`},{name:`Shuddha Guggulu`,sanskrit:`Guggulu (गुग्गुलु)`,botanical:`Commiphora mukul (Purified Gum Resin)`,origin:`Semi-Arid Regions of Gujarat and Rajasthan`,activePrinciple:`Guggulsterones (E- and Z-stereoisomers)`,description:`Classical texts describe Guggulu as having "Lekhana" (scraping) and "Vata-hara" (vata-pacifying) qualities. It clears stagnant metabolic debris (Ama) accumulated inside deep cartilage and micro-capillaries around vertebrae, restoring natural joint fluid circulation and freedom of movement.`},{name:`Rasna`,sanskrit:`Rasna (रास्ना)`,botanical:`Pluchea lanceolata`,origin:`Sun-drenched River Valleys of Northwestern India`,activePrinciple:`Quercetin, Pluchine, and Terpenoids`,description:`Rasna is classical Ayurveda’s foremost single herb for "Amavata" and sciatic pain radiating down the lower limbs. It desensitizes irritated nerve endings, relieves deep muscular spasms in the pelvic girdle, and accelerates the restoration of comfortable mobility upon waking.`},{name:`Nagori Ashwagandha`,sanskrit:`Ashwagandha (अश्वगंधा)`,botanical:`Withania somnifera (Dry Root Extract)`,origin:`Nagaur Organic Sourcing`,activePrinciple:`Withanolides, Withaferin A, and Alkaloids`,description:`Known as "Indian Ginseng," Ashwagandha strengthens the musculoskeletal framework (Mamsa and Asthi Dhatu) while mitigating the stress-induced cortisol spikes that cause chronic postural tension in desk-bound and active workers alike.`}].map((e,t)=>(0,b.jsxDEV)(`div`,{className:`p-6 sm:p-8 bg-white rounded-2xl border border-stone-200/90 space-y-4 shadow-2xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b border-stone-100 pb-4`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsxDEV)(C,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:I,lineNumber:125,columnNumber:21},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-xl sm:text-2xl font-bold text-stone-900`,children:e.name},void 0,!1,{fileName:I,lineNumber:126,columnNumber:21},void 0)]},void 0,!0,{fileName:I,lineNumber:124,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-stone-500 font-serif italic block mt-0.5`,children:[e.sanskrit,` · `,e.botanical]},void 0,!0,{fileName:I,lineNumber:130,columnNumber:19},void 0)]},void 0,!0,{fileName:I,lineNumber:123,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`text-left sm:text-right shrink-0`,children:[(0,b.jsxDEV)(`span`,{className:`text-[11px] font-bold text-stone-900 uppercase block tracking-wider`,children:`Key Active`},void 0,!1,{fileName:I,lineNumber:136,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-emerald-800 font-semibold font-mono`,children:e.activePrinciple},void 0,!1,{fileName:I,lineNumber:139,columnNumber:19},void 0)]},void 0,!0,{fileName:I,lineNumber:135,columnNumber:17},void 0)]},void 0,!0,{fileName:I,lineNumber:122,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-12 gap-6`,children:[(0,b.jsxDEV)(`div`,{className:`md:col-span-8 text-xs sm:text-sm text-stone-600 leading-relaxed`,children:e.description},void 0,!1,{fileName:I,lineNumber:146,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`md:col-span-4 p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-stone-400 text-[10px] uppercase font-bold block`,children:`Geographic Origin`},void 0,!1,{fileName:I,lineNumber:151,columnNumber:21},void 0),(0,b.jsxDEV)(`strong`,{className:`text-stone-800`,children:e.origin},void 0,!1,{fileName:I,lineNumber:152,columnNumber:21},void 0)]},void 0,!0,{fileName:I,lineNumber:150,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-stone-400 text-[10px] uppercase font-bold block`,children:`Classical Action`},void 0,!1,{fileName:I,lineNumber:155,columnNumber:21},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-700`,children:`Rasayana, Balya & Vata-Shamaka`},void 0,!1,{fileName:I,lineNumber:156,columnNumber:21},void 0)]},void 0,!0,{fileName:I,lineNumber:154,columnNumber:19},void 0)]},void 0,!0,{fileName:I,lineNumber:149,columnNumber:17},void 0)]},void 0,!0,{fileName:I,lineNumber:145,columnNumber:15},void 0)]},t,!0,{fileName:I,lineNumber:118,columnNumber:13},void 0))},void 0,!1,{fileName:I,lineNumber:116,columnNumber:9},void 0)]},void 0,!0,{fileName:I,lineNumber:106,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`text-center p-8 bg-stone-100 rounded-2xl border border-stone-200 space-y-4`,children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-2xl font-bold text-stone-900`,children:`Experience the Difference of Unadulterated Herbal Extraction`},void 0,!1,{fileName:I,lineNumber:167,columnNumber:9},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 max-w-xl mx-auto`,children:`Explore our complete collection of pure Himalayan Shilajit and targeted joint formulations.`},void 0,!1,{fileName:I,lineNumber:170,columnNumber:9},void 0),(0,b.jsxDEV)(`button`,{onClick:e,className:`py-3 px-6 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs inline-flex items-center gap-2 cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(`span`,{children:`Shop Amrutkalp Formulations`},void 0,!1,{fileName:I,lineNumber:177,columnNumber:11},void 0),(0,b.jsxDEV)(me,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:I,lineNumber:178,columnNumber:11},void 0)]},void 0,!0,{fileName:I,lineNumber:173,columnNumber:9},void 0)]},void 0,!0,{fileName:I,lineNumber:166,columnNumber:7},void 0)]},void 0,!0,{fileName:I,lineNumber:53,columnNumber:5},void 0),L=`/app/applet/src/pages/AboutPage.tsx`,Ct=({onGoToShop:e,onGoToContact:t})=>(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-3xl mx-auto space-y-4`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Founded in Surat, Gujarat`},void 0,!1,{fileName:L,lineNumber:16,columnNumber:9},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-tight`,children:`The Amrutkalp Heritage`},void 0,!1,{fileName:L,lineNumber:19,columnNumber:9},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto`,children:`We founded Amrutkalp to rescue classical Ayurveda from mass-market adulteration. Real healing requires real herbs, unhurried time, and uncompromising honesty.`},void 0,!1,{fileName:L,lineNumber:22,columnNumber:9},void 0)]},void 0,!0,{fileName:L,lineNumber:15,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-2xl border border-stone-200/90 shadow-2xs`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-7 space-y-5`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Our Mission & Philosophy`},void 0,!1,{fileName:L,lineNumber:32,columnNumber:11},void 0),(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl sm:text-3xl font-bold text-stone-900 leading-tight`,children:`Restoring Faith in Shastriya Ayurveda`},void 0,!1,{fileName:L,lineNumber:36,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed`,children:[(0,b.jsxDEV)(`p`,{children:`In recent years, the wellness industry has turned ancient Ayurvedic wisdom into an assembly line of synthetic capsules and quick-fix pain suppressants. Shilajit, revered in Charaka Samhita as the master restorative resin (Rasayana), was reduced to black coal-tar pastes mixed with sugar and chemical additives.`},void 0,!1,{fileName:L,lineNumber:41,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{children:[`At Amrutkalp, we established our dispensary at `,(0,b.jsxDEV)(`strong`,{children:`Biz Hub Shopping, Amroli, Surat`},void 0,!1,{fileName:L,lineNumber:45,columnNumber:62},void 0),` with a singular mandate: supply people with the exact, uncompromised formulations described in ancient texts.`]},void 0,!0,{fileName:L,lineNumber:44,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{children:`When we extract Himalayan Shilajit, we harvest only from pristine altitudes above 16,000 feet where no human contamination exists. When we craft Amrutvati for morning back and joint pain, we use genuine wild Shallaki resin and Shuddha Guggulu, rather than masking joint friction with synthetic steroids.`},void 0,!1,{fileName:L,lineNumber:47,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:40,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-800 space-y-1`,children:[(0,b.jsxDEV)(`strong`,{className:`text-stone-950 font-semibold block`,children:`The Surat Dispensary Pledge:`},void 0,!1,{fileName:L,lineNumber:53,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-600 leading-relaxed text-[11px]`,children:`Every customer can walk into our Amroli center, inspect physical batch containers, witness solubility tests firsthand, and consult directly with our staff.`},void 0,!1,{fileName:L,lineNumber:56,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:52,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:31,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`lg:col-span-5`,children:(0,b.jsxDEV)(`div`,{className:`rounded-2xl border border-stone-800 bg-[#111915] text-stone-100 p-7 shadow-xl space-y-4`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-between border-b border-stone-800 pb-2 text-[10px] font-mono`,children:[(0,b.jsxDEV)(`span`,{className:`text-amber-300`,children:`ESTABLISHED IN SURAT`},void 0,!1,{fileName:L,lineNumber:66,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-400`,children:`GUJARAT, INDIA`},void 0,!1,{fileName:L,lineNumber:67,columnNumber:15},void 0)]},void 0,!0,{fileName:L,lineNumber:65,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-1`,children:[(0,b.jsxDEV)(`div`,{className:`font-serif text-2xl font-bold text-white`,children:`AMRUTKALP`},void 0,!1,{fileName:L,lineNumber:71,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`text-xs text-amber-200/90 font-serif italic`,children:`Pure Ayurvedic Herbals`},void 0,!1,{fileName:L,lineNumber:72,columnNumber:15},void 0)]},void 0,!0,{fileName:L,lineNumber:70,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`p-3.5 bg-stone-900 rounded-xl border border-stone-800 space-y-2 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`text-[10px] uppercase font-mono text-stone-400`,children:`Dispensary Premises:`},void 0,!1,{fileName:L,lineNumber:76,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-300 text-xs leading-relaxed`,children:`108, Biz Hub Shopping, near 99 Shopping, Amroli Cross Road, Amroli, Surat, Gujarat 394107`},void 0,!1,{fileName:L,lineNumber:77,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`text-[11px] text-amber-300 pt-1 border-t border-stone-800/80`,children:`Direct Consultation: +91 81413 23395`},void 0,!1,{fileName:L,lineNumber:80,columnNumber:15},void 0)]},void 0,!0,{fileName:L,lineNumber:75,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400 font-mono`,children:[(0,b.jsxDEV)(`span`,{children:`Ayurvedic Tradition`},void 0,!1,{fileName:L,lineNumber:86,columnNumber:15},void 0),(0,b.jsxDEV)(`span`,{className:`text-emerald-400`,children:`100% Shastriya`},void 0,!1,{fileName:L,lineNumber:87,columnNumber:15},void 0)]},void 0,!0,{fileName:L,lineNumber:85,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:64,columnNumber:11},void 0)},void 0,!1,{fileName:L,lineNumber:63,columnNumber:9},void 0)]},void 0,!0,{fileName:L,lineNumber:28,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-6`,children:[(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center`,children:(0,b.jsxDEV)(Je,{className:`w-5 h-5`},void 0,!1,{fileName:L,lineNumber:98,columnNumber:13},void 0)},void 0,!1,{fileName:L,lineNumber:97,columnNumber:11},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Zero Synthetic Adulteration`},void 0,!1,{fileName:L,lineNumber:100,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`We reject synthetic thickeners, preservatives, artificial sweeteners, and pharmaceutical analgesics. What is on our label is 100% active botanical or mineral resin.`},void 0,!1,{fileName:L,lineNumber:103,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:96,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center`,children:(0,b.jsxDEV)(nt,{className:`w-5 h-5`},void 0,!1,{fileName:L,lineNumber:110,columnNumber:13},void 0)},void 0,!1,{fileName:L,lineNumber:109,columnNumber:11},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Human-to-Human Transparency`},void 0,!1,{fileName:L,lineNumber:112,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:[`No robotic chatbots or outsourced phone trees. When you message or call +91 `,y.phone,`, you speak directly with individuals who know our batches and formulation history.`]},void 0,!0,{fileName:L,lineNumber:115,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:108,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center`,children:(0,b.jsxDEV)(Me,{className:`w-5 h-5`},void 0,!1,{fileName:L,lineNumber:122,columnNumber:13},void 0)},void 0,!1,{fileName:L,lineNumber:121,columnNumber:11},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Classical Surya Tapi Processing`},void 0,!1,{fileName:L,lineNumber:124,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed`,children:`We dry our purified resin under natural Gujarati sunlight over 60 days rather than flash-boiling in kettles, protecting delicate active enzymes and Fulvic acid.`},void 0,!1,{fileName:L,lineNumber:127,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:120,columnNumber:9},void 0)]},void 0,!0,{fileName:L,lineNumber:95,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`p-8 bg-[#111915] text-stone-100 rounded-2xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6`,children:[(0,b.jsxDEV)(`div`,{className:`space-y-2 text-center md:text-left`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center justify-center md:justify-start gap-2 text-amber-300 text-xs font-semibold`,children:[(0,b.jsxDEV)(Le,{className:`w-4 h-4 text-[#c99a45]`},void 0,!1,{fileName:L,lineNumber:137,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`Surat Showroom & Consultation Center`},void 0,!1,{fileName:L,lineNumber:138,columnNumber:13},void 0)]},void 0,!0,{fileName:L,lineNumber:136,columnNumber:11},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-2xl font-bold text-white`,children:[y.address.shop,`, Amroli, Surat`]},void 0,!0,{fileName:L,lineNumber:140,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-400 max-w-md`,children:[y.address.landmark,`, Surat, Gujarat 394107 · Open Mon–Sat 9:30 AM to 8:00 PM`]},void 0,!0,{fileName:L,lineNumber:143,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:135,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`flex flex-col sm:flex-row items-center gap-3 shrink-0`,children:[(0,b.jsxDEV)(`button`,{onClick:t,className:`py-3 px-5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold rounded-lg transition-colors text-xs cursor-pointer border border-stone-700`,children:`Store Hours & Map`},void 0,!1,{fileName:L,lineNumber:149,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:e,className:`py-3 px-5 bg-[#c99a45] text-stone-950 font-semibold rounded-lg hover:bg-amber-400 transition-colors text-xs cursor-pointer shadow-xs`,children:`Explore Remedies`},void 0,!1,{fileName:L,lineNumber:155,columnNumber:11},void 0)]},void 0,!0,{fileName:L,lineNumber:148,columnNumber:9},void 0)]},void 0,!0,{fileName:L,lineNumber:134,columnNumber:7},void 0)]},void 0,!0,{fileName:L,lineNumber:12,columnNumber:5},void 0),wt=[{id:`how-to-verify-shilajit-purity`,slug:`how-to-verify-shilajit-purity`,title:`The 4-Step Home Purity Guide: How to Test Shilajit at Home (And Why We Put Up ₹5.51 Lakh)`,category:`Purity & Science`,readTime:`5 min read`,publishDate:`Updated October 2026`,excerpt:`The Indian market is flooded with synthetic charcoal pastes and sugar syrups masquerading as Shilajit. Here are 4 rigorous physical tests you can perform right in your kitchen.`,content:[{sectionHeading:`The Crisis of Adulteration in Indian Shilajit`,body:[`Authentic Shilajit takes centuries of microbial breakdown of high-altitude medicinal flora under extreme pressure between tectonic rock crevices in the Himalayas. Because raw extraction is perilous and limited, unethical vendors often mix pitch with coal-tar derivatives, black food coloring, industrial sugar syrup, and synthetic chemical stimulants.`,`At Amrutkalp, we refuse to accept this compromise. To prove our confidence, we issued our public ₹5,51,000 challenge: if any certified NABL lab proves synthetic adulteration in Amrutkalp Sanjivani, we pay the reward in full.`]},{sectionHeading:`Test 1: The Water Dissolution & Amber Ribbon Test`,body:[`Take a clear glass of warm water. Drop a small pea-sized portion of Amrutkalp Shilajit into the water without stirring.`,`Observation: Authentic Shilajit will not clump into a rubbery lump at the bottom. Instead, it begins diffusing spontaneously in fine golden-amber to deep reddish-brown ribbons, eventually turning the water into a translucent brown elixir without leaving any gritty sand or oily film on top.`]},{sectionHeading:`Test 2: The Fire & Ash Test`,body:[`Place a tiny quantity of resin on a metal spoon and hold a lighter flame underneath.`,`Observation: Genuine Shilajit will bubble up into an organic foam and calcify into clean white or pale gray mineral ash. It will NEVER ignite into open flame like petroleum, nor will it emit toxic rubber or chemical smoke fumes.`]},{sectionHeading:`Test 3: Temperature Sensitivity (Rheology)`,body:[`Pure Shilajit possesses distinct thermal flexibility. If you place the jar in the refrigerator, it will harden into a glass-like solid that snaps cleanly when struck. When held between warm fingertips, it quickly softens into a pliable, sticky, resinous tar.`,`Artificial pastes loaded with gelatin or binders maintain the exact same gummy texture regardless of temperature.`]},{sectionHeading:`Test 4: Solubility in Alcohol`,body:[`Pure Shilajit dissolves completely in water, but it will NOT dissolve cleanly in pure alcohol (surgical spirit or 99% ethanol). Synthetic dyes and artificial pitch dissolve readily in alcohol, exposing adulteration instantly.`]}]},{id:`morning-back-pain-ayurvedic-approach`,slug:`morning-back-pain-ayurvedic-approach`,title:`Morning Lumbar Rigidity & Back Pain: Why Resting Doesn’t Fix It and What Ayurveda Recommends`,category:`Musculoskeletal Health`,readTime:`6 min read`,publishDate:`October 2026`,excerpt:`Waking up with a stiff lower back that takes 30 minutes to "warm up"? Understand the vitiation of Apana and Vyana Vata, and why classical herbs like Shallaki and Guggulu restore fluid mobility.`,content:[{sectionHeading:`The Phenomenon of "Morning Vertebral Lock"`,body:[`Hundreds of patients walk into clinics complaining: "Doctor, I feel fine while sleeping, but the moment my feet touch the floor in the morning, my lower back feels stiff as a wooden plank." This morning rigidity is typically accompanied by difficulty bending forward to tie shoelaces or turn in bed.`,`In modern biomechanics, this occurs because overnight immobility causes synovial fluid in lumbar facet joints to thicken, while low-grade inflammation builds up around the intervertebral ligaments. In Ayurveda, this is the classic signature of stagnant Ama (metabolic toxins) binding with aggravated Vata dosha.`]},{sectionHeading:`Why Modern Painkillers Provide Only a Temporary Illusion`,body:[`Non-steroidal anti-inflammatory drugs (NSAIDs) work by blocking COX enzymes in the brain and blood. While pain signals are masked for 4 to 6 hours, the structural friction, dry synovial membranes, and muscle spasms remain untreated. Over months, chronic NSAID consumption stresses the stomach lining and renal function.`,`Ayurvedic management focuses on three simultaneous steps: (1) Deepana-Pachana to clear inflammatory Ama, (2) Srotoshodhana (clearing micro-vascular channels), and (3) Dhatu-Poshana (nourishing the Asthi and Majja tissues).`]},{sectionHeading:`The Synergy Behind Amrutkalp Amrutvati`,body:[`Amrutvati was formulated specifically around the clinical mandate "#आराम होगा तो काम होगा" (Productivity begins with physical comfort).`,`It combines Kunduru (Shallaki), rich in 65% Boswellic acids that naturally quiet inflammatory pathways without gastric irritation; Shuddha Guggulu, which scrapes away deep-seated toxic debris around vertebrae; Rasna, an ancient specific for radiating sciatic discomfort; and Ashwagandha to calm spinal nerve hyperexcitability.`,`Combined with warm water and 5 minutes of gentle morning pelvic tilts (Marjariasana), thousands of individuals have experienced waking with light, agile flexibility.`]}]},{id:`how-to-take-shilajit-properly`,slug:`how-to-take-shilajit-properly`,title:`The Master Guide to Consuming Shilajit: Dosage, Water vs Milk, Timing, and Cycling`,category:`Usage & Protocols`,readTime:`4 min read`,publishDate:`October 2026`,excerpt:`Shilajit is a potent Rasayana, not a casual sweet. How you consume it determines whether your body absorbs 10% or 90% of its 84+ minerals. Here is the verified protocol.`,content:[{sectionHeading:`The Correct Anupana (Vehicle of Delivery)`,body:[`In Shastriya Ayurveda, herbs and minerals are never consumed in isolation. They are paired with an "Anupana" (catalyst) that ferries active principles into deeper cellular membranes.`,`For pure stamina, stamina, and physical strength: Lukewarm organic whole cow’s milk or A2 milk is the premier traditional Anupana. The healthy lipids in milk bind seamlessly to Fulvic and Humic complexes.`,`For weight management, cellular detox, and metabolic vigor: Warm water with a teaspoon of pure raw honey (added only after water cools to lukewarm, never boiling) or light green tea is optimal.`]},{sectionHeading:`Exact Daily Dosage and the Brass Spoon`,body:[`More is not better. High-grade Grade A+ Himalayan Shilajit like Amrutkalp Sanjivani is exceptionally concentrated. A portion the size of an ordinary grain of rice to an Indian chickpea (approximately 300 mg to 500 mg) is the verified daily threshold.`,`Amrutkalp provides a calibrated brass dosage spoon inside every container so you never need to guess the quantity.`]},{sectionHeading:`The Optimal Daily Timing and 8-Week Cycle`,body:[`Best Time: Morning on an empty stomach, 20 to 30 minutes before breakfast. This allows the Fulvic acid to prime your gastrointestinal tract for optimal nutrient uptake throughout the day.`,`Secondary Time: 30 to 45 minutes prior to rigorous physical exercise or athletic training.`,`Cycling: We recommend consuming Amrutkalp Sanjivani consistently for 6 to 8 weeks, followed by a 1 to 2-week pause. This honors natural circadian adaptation and prevents cellular desensitization.`]}]}],R=`/app/applet/src/pages/JournalPage.tsx`,Tt=({onSelectProduct:e})=>{let[t,n]=(0,_.useState)(null);return t?(0,b.jsxDEV)(`div`,{className:`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>n(null),className:`inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer`,children:[(0,b.jsxDEV)(ye,{className:`w-4 h-4`},void 0,!1,{fileName:R,lineNumber:20,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{children:`Back to All Articles`},void 0,!1,{fileName:R,lineNumber:21,columnNumber:11},void 0)]},void 0,!0,{fileName:R,lineNumber:16,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-4 border-b border-stone-200 pb-6`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-stone-500 font-medium`,children:[(0,b.jsxDEV)(`span`,{className:`uppercase tracking-wider font-semibold text-[#b3832f]`,children:t.category},void 0,!1,{fileName:R,lineNumber:27,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,children:`·`},void 0,!1,{fileName:R,lineNumber:30,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:t.readTime},void 0,!1,{fileName:R,lineNumber:31,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,children:`·`},void 0,!1,{fileName:R,lineNumber:32,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:t.publishDate},void 0,!1,{fileName:R,lineNumber:33,columnNumber:13},void 0)]},void 0,!0,{fileName:R,lineNumber:26,columnNumber:11},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight leading-tight`,children:t.title},void 0,!1,{fileName:R,lineNumber:36,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-sm sm:text-base text-stone-600 leading-relaxed italic`,children:[`"`,t.excerpt,`"`]},void 0,!0,{fileName:R,lineNumber:40,columnNumber:11},void 0)]},void 0,!0,{fileName:R,lineNumber:25,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-8 text-stone-800 leading-relaxed text-sm sm:text-base`,children:t.content.map((e,t)=>(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,b.jsxDEV)(`h2`,{className:`font-serif text-xl sm:text-2xl font-bold text-stone-950`,children:e.sectionHeading},void 0,!1,{fileName:R,lineNumber:49,columnNumber:15},void 0),e.body.map((e,t)=>(0,b.jsxDEV)(`p`,{className:`text-stone-700 text-xs sm:text-sm leading-relaxed`,children:e},t,!1,{fileName:R,lineNumber:53,columnNumber:17},void 0))]},t,!0,{fileName:R,lineNumber:48,columnNumber:13},void 0))},void 0,!1,{fileName:R,lineNumber:46,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-12`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Ready to verify authentic Ayurvedic formulations?`},void 0,!1,{fileName:R,lineNumber:64,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 mt-0.5`,children:`Explore Sanjivani Pure Shilajit with our open ₹5,51,000 guarantee.`},void 0,!1,{fileName:R,lineNumber:67,columnNumber:13},void 0)]},void 0,!0,{fileName:R,lineNumber:63,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>e(`sanjivani-shilajit`),className:`py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs whitespace-nowrap cursor-pointer shadow-xs`,children:`Explore Sanjivani Shilajit →`},void 0,!1,{fileName:R,lineNumber:71,columnNumber:11},void 0)]},void 0,!0,{fileName:R,lineNumber:62,columnNumber:9},void 0)]},void 0,!0,{fileName:R,lineNumber:15,columnNumber:7},void 0):(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-3xl mx-auto space-y-3`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Knowledge Base & Clinical Wisdom`},void 0,!1,{fileName:R,lineNumber:87,columnNumber:9},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight`,children:`The Amrutkalp Wellness Journal`},void 0,!1,{fileName:R,lineNumber:90,columnNumber:9},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto`,children:`Grounded, science-backed guides on Ayurvedic Rasayanas, testing purity, dosage protocols, and chronic joint care without marketing fluff.`},void 0,!1,{fileName:R,lineNumber:93,columnNumber:9},void 0)]},void 0,!0,{fileName:R,lineNumber:86,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-8`,children:wt.map(e=>(0,b.jsxDEV)(`div`,{onClick:()=>n(e),className:`group flex flex-col justify-between bg-white rounded-2xl border border-stone-200/90 p-6 hover:border-stone-400 hover:shadow-lg transition-all duration-200 cursor-pointer`,children:[(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-2 text-xs text-stone-500 font-medium`,children:[(0,b.jsxDEV)(`span`,{className:`uppercase tracking-wider font-semibold text-[#b3832f]`,children:e.category},void 0,!1,{fileName:R,lineNumber:108,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{"aria-hidden":`true`,children:`·`},void 0,!1,{fileName:R,lineNumber:111,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:e.readTime},void 0,!1,{fileName:R,lineNumber:112,columnNumber:17},void 0)]},void 0,!0,{fileName:R,lineNumber:107,columnNumber:15},void 0),(0,b.jsxDEV)(`h2`,{className:`font-serif text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors leading-snug`,children:e.title},void 0,!1,{fileName:R,lineNumber:115,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 leading-relaxed line-clamp-3`,children:e.excerpt},void 0,!1,{fileName:R,lineNumber:119,columnNumber:15},void 0)]},void 0,!0,{fileName:R,lineNumber:106,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-900 group-hover:text-amber-900`,children:[(0,b.jsxDEV)(`span`,{children:`Read Full Guide`},void 0,!1,{fileName:R,lineNumber:125,columnNumber:15},void 0),(0,b.jsxDEV)(me,{className:`w-4 h-4 group-hover:translate-x-1 transition-transform`},void 0,!1,{fileName:R,lineNumber:126,columnNumber:15},void 0)]},void 0,!0,{fileName:R,lineNumber:124,columnNumber:13},void 0)]},e.id,!0,{fileName:R,lineNumber:101,columnNumber:11},void 0))},void 0,!1,{fileName:R,lineNumber:99,columnNumber:7},void 0)]},void 0,!0,{fileName:R,lineNumber:83,columnNumber:5},void 0)},z=`/app/applet/src/pages/ContactPage.tsx`,Et=()=>{let[e,t]=(0,_.useState)({name:``,phone:``,topic:`consultation`,message:``}),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(``);return(0,b.jsxDEV)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-3xl mx-auto space-y-3`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Surat Dispensary & Care Desk`},void 0,!1,{fileName:z,lineNumber:41,columnNumber:9},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-950 tracking-tight`,children:`Connect with Amrutkalp`},void 0,!1,{fileName:z,lineNumber:44,columnNumber:9},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto`,children:`Whether you need personalized dosage advice, wish to verify a batch report, or want to visit our physical showroom in Surat, our team is directly reachable.`},void 0,!1,{fileName:z,lineNumber:47,columnNumber:9},void 0)]},void 0,!0,{fileName:z,lineNumber:40,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start`,children:[(0,b.jsxDEV)(`div`,{className:`lg:col-span-5 space-y-6`,children:[(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-4`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxDEV)(`div`,{className:`w-10 h-10 rounded-xl bg-amber-50 text-[#b3832f] flex items-center justify-center shrink-0`,children:(0,b.jsxDEV)(Le,{className:`w-5 h-5`},void 0,!1,{fileName:z,lineNumber:61,columnNumber:17},void 0)},void 0,!1,{fileName:z,lineNumber:60,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Surat Showroom & Dispensary`},void 0,!1,{fileName:z,lineNumber:64,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{className:`text-xs text-stone-500`,children:`Registered Office`},void 0,!1,{fileName:z,lineNumber:67,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:63,columnNumber:15},void 0)]},void 0,!0,{fileName:z,lineNumber:59,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-700 leading-relaxed`,children:[(0,b.jsxDEV)(`strong`,{children:`AMRUTKALP (Pure Ayurvedic Herbals)`},void 0,!1,{fileName:z,lineNumber:72,columnNumber:15},void 0),(0,b.jsxDEV)(`br`,{},void 0,!1,{fileName:z,lineNumber:72,columnNumber:66},void 0),y.address.shop,`,`,(0,b.jsxDEV)(`br`,{},void 0,!1,{fileName:z,lineNumber:73,columnNumber:36},void 0),y.address.landmark,`,`,(0,b.jsxDEV)(`br`,{},void 0,!1,{fileName:z,lineNumber:74,columnNumber:40},void 0),y.address.area,`, `,y.address.city,`,`,(0,b.jsxDEV)(`br`,{},void 0,!1,{fileName:z,lineNumber:75,columnNumber:58},void 0),y.address.state,` - `,y.address.pincode,`, India.`]},void 0,!0,{fileName:z,lineNumber:71,columnNumber:13},void 0),(0,b.jsxDEV)(`a`,{href:`https://maps.google.com/?q=${encodeURIComponent(y.address.full)}`,target:`_blank`,rel:`noopener noreferrer`,className:`inline-flex items-center gap-1.5 text-xs text-[#b3832f] font-semibold hover:underline`,children:(0,b.jsxDEV)(`span`,{children:`Open in Google Maps →`},void 0,!1,{fileName:z,lineNumber:85,columnNumber:15},void 0)},void 0,!1,{fileName:z,lineNumber:79,columnNumber:13},void 0)]},void 0,!0,{fileName:z,lineNumber:58,columnNumber:11},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-white rounded-2xl border border-stone-200/90 shadow-2xs space-y-4`,children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-base font-bold text-stone-900 border-b border-stone-100 pb-2`,children:`Direct Phone & WhatsApp Helplines`},void 0,!1,{fileName:z,lineNumber:91,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3 text-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex items-start gap-3`,children:[(0,b.jsxDEV)(Be,{className:`w-4 h-4 text-[#c99a45] shrink-0 mt-0.5`},void 0,!1,{fileName:z,lineNumber:97,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`Direct Hotline`},void 0,!1,{fileName:z,lineNumber:99,columnNumber:19},void 0),(0,b.jsxDEV)(`a`,{href:`tel:${y.phone}`,className:`font-semibold text-stone-900 hover:text-amber-900`,children:y.phoneFormatted},void 0,!1,{fileName:z,lineNumber:100,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:98,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:96,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-start gap-3`,children:[(0,b.jsxDEV)(Re,{className:`w-4 h-4 text-emerald-600 shrink-0 mt-0.5`},void 0,!1,{fileName:z,lineNumber:107,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`WhatsApp Advisory`},void 0,!1,{fileName:z,lineNumber:109,columnNumber:19},void 0),(0,b.jsxDEV)(`a`,{href:`https://wa.me/${y.whatsappNumber}?text=Hello%20Amrutkalp%20team%2C%20I%20would%20like%20to%20consult%20with%20an%20Ayurvedic%20specialist.`,target:`_blank`,rel:`noopener noreferrer`,className:`font-semibold text-emerald-700 hover:underline`,children:[`+91 `,y.phone,` (Tap to Chat)`]},void 0,!0,{fileName:z,lineNumber:110,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:108,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:106,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`flex items-start gap-3`,children:[(0,b.jsxDEV)(Ce,{className:`w-4 h-4 text-[#c99a45] shrink-0 mt-0.5`},void 0,!1,{fileName:z,lineNumber:122,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`span`,{className:`text-stone-500 block text-[11px]`,children:`Consultation Timings`},void 0,!1,{fileName:z,lineNumber:124,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{className:`text-stone-800 font-medium`,children:`Monday to Saturday: 9:30 AM – 8:00 PM (IST)`},void 0,!1,{fileName:z,lineNumber:125,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:123,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:121,columnNumber:15},void 0)]},void 0,!0,{fileName:z,lineNumber:95,columnNumber:13},void 0),(0,b.jsxDEV)(`div`,{className:`pt-3 border-t border-stone-100 flex items-center gap-4 text-xs`,children:[(0,b.jsxDEV)(`a`,{href:y.social.instagram,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-1.5 text-stone-600 hover:text-stone-900`,children:[(0,b.jsxDEV)(Fe,{className:`w-4 h-4`},void 0,!1,{fileName:z,lineNumber:140,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:y.social.instagramHandle},void 0,!1,{fileName:z,lineNumber:141,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:134,columnNumber:15},void 0),(0,b.jsxDEV)(`a`,{href:y.social.facebook,target:`_blank`,rel:`noopener noreferrer`,className:`flex items-center gap-1.5 text-stone-600 hover:text-stone-900`,children:[(0,b.jsxDEV)(Oe,{className:`w-4 h-4`},void 0,!1,{fileName:z,lineNumber:149,columnNumber:17},void 0),(0,b.jsxDEV)(`span`,{children:y.social.facebookName},void 0,!1,{fileName:z,lineNumber:150,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:143,columnNumber:15},void 0)]},void 0,!0,{fileName:z,lineNumber:133,columnNumber:13},void 0)]},void 0,!0,{fileName:z,lineNumber:90,columnNumber:11},void 0)]},void 0,!0,{fileName:z,lineNumber:55,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/90 shadow-2xs space-y-6`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-2xl font-bold text-stone-900`,children:`Send an Ayurvedic Inquiry`},void 0,!1,{fileName:z,lineNumber:160,columnNumber:13},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-500 mt-1`,children:`Have questions about dosage, batch certificates, or shipping status? Leave your message below.`},void 0,!1,{fileName:z,lineNumber:163,columnNumber:13},void 0)]},void 0,!0,{fileName:z,lineNumber:159,columnNumber:11},void 0),n?(0,b.jsxDEV)(`div`,{className:`p-6 bg-emerald-50 border border-emerald-200 rounded-xl space-y-3 text-center`,children:[(0,b.jsxDEV)(`div`,{className:`w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto`,children:(0,b.jsxDEV)(Se,{className:`w-6 h-6`},void 0,!1,{fileName:z,lineNumber:171,columnNumber:17},void 0)},void 0,!1,{fileName:z,lineNumber:170,columnNumber:15},void 0),(0,b.jsxDEV)(`h4`,{className:`font-serif text-lg font-bold text-emerald-950`,children:`Inquiry Received!`},void 0,!1,{fileName:z,lineNumber:173,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-emerald-800 leading-relaxed max-w-md mx-auto`,children:[`Thank you, `,(0,b.jsxDEV)(`strong`,{children:e.name},void 0,!1,{fileName:z,lineNumber:177,columnNumber:28},void 0),`. An Amrutkalp representative from our Surat center will reach out to you at `,(0,b.jsxDEV)(`strong`,{children:e.phone},void 0,!1,{fileName:z,lineNumber:177,columnNumber:137},void 0),` shortly.`]},void 0,!0,{fileName:z,lineNumber:176,columnNumber:15},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>{r(!1),t({name:``,phone:``,topic:`consultation`,message:``})},className:`mt-3 px-4 py-2 bg-emerald-800 text-white text-xs font-semibold rounded-lg hover:bg-emerald-900`,children:`Send Another Message`},void 0,!1,{fileName:z,lineNumber:179,columnNumber:15},void 0)]},void 0,!0,{fileName:z,lineNumber:169,columnNumber:13},void 0):(0,b.jsxDEV)(`form`,{onSubmit:t=>{t.preventDefault(),!e.name.trim()||!e.phone.trim()||!e.message.trim()?a(`Please fill in all required fields.`):(a(``),r(!0))},className:`space-y-4`,children:[i&&(0,b.jsxDEV)(`div`,{className:`p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700 flex items-center gap-2`,children:[(0,b.jsxDEV)(xe,{className:`w-4 h-4 shrink-0`},void 0,!1,{fileName:z,lineNumber:190,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:i},void 0,!1,{fileName:z,lineNumber:191,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:189,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 sm:grid-cols-2 gap-4`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Your Full Name *`},void 0,!1,{fileName:z,lineNumber:197,columnNumber:19},void 0),(0,b.jsxDEV)(`input`,{type:`text`,value:e.name,onChange:n=>t({...e,name:n.target.value}),placeholder:`e.g. Ramesh Patel`,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:z,lineNumber:200,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:196,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Phone / WhatsApp Number *`},void 0,!1,{fileName:z,lineNumber:210,columnNumber:19},void 0),(0,b.jsxDEV)(`input`,{type:`tel`,value:e.phone,onChange:n=>t({...e,phone:n.target.value}),placeholder:`10-digit mobile number`,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:z,lineNumber:213,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:209,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:195,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Topic of Consultation *`},void 0,!1,{fileName:z,lineNumber:224,columnNumber:17},void 0),(0,b.jsxDEV)(`select`,{value:e.topic,onChange:n=>t({...e,topic:n.target.value}),className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900 bg-white`,children:[(0,b.jsxDEV)(`option`,{value:`consultation`,children:`Ayurvedic Dosage & Regimen Advice`},void 0,!1,{fileName:z,lineNumber:232,columnNumber:19},void 0),(0,b.jsxDEV)(`option`,{value:`order`,children:`Order Dispatch & Delivery Tracking`},void 0,!1,{fileName:z,lineNumber:233,columnNumber:19},void 0),(0,b.jsxDEV)(`option`,{value:`challenge`,children:`₹5,51,000 Authenticity Challenge Inquiry`},void 0,!1,{fileName:z,lineNumber:234,columnNumber:19},void 0),(0,b.jsxDEV)(`option`,{value:`bulk`,children:`Wholesale / Practitioner Partnership`},void 0,!1,{fileName:z,lineNumber:235,columnNumber:19},void 0),(0,b.jsxDEV)(`option`,{value:`other`,children:`General Feedback / Store Inquiry`},void 0,!1,{fileName:z,lineNumber:236,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:227,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:223,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`label`,{className:`block text-xs font-medium text-stone-700 mb-1`,children:`Your Message or Health Query *`},void 0,!1,{fileName:z,lineNumber:241,columnNumber:17},void 0),(0,b.jsxDEV)(`textarea`,{rows:4,value:e.message,onChange:n=>t({...e,message:n.target.value}),placeholder:`Describe your health question, joint stiffness duration, or inquiry...`,className:`w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-900`},void 0,!1,{fileName:z,lineNumber:244,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:240,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`pt-2 flex flex-col sm:flex-row items-center gap-3`,children:[(0,b.jsxDEV)(`button`,{type:`submit`,className:`w-full sm:flex-1 py-3 px-5 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 text-xs shadow-xs cursor-pointer`,children:[(0,b.jsxDEV)(Ke,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:z,lineNumber:258,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:`Submit Inquiry`},void 0,!1,{fileName:z,lineNumber:259,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:254,columnNumber:17},void 0),(0,b.jsxDEV)(`button`,{type:`button`,onClick:()=>{if(!e.name.trim()||!e.phone.trim()||!e.message.trim()){a(`Please fill in your name, phone, and message first.`);return}let t=`*New Customer Inquiry - Amrutkalp Website*\n\n• Name: ${e.name}\n• Phone: ${e.phone}\n• Topic: ${e.topic.toUpperCase()}\n• Message: ${e.message}`;window.open(`https://wa.me/${y.whatsappNumber}?text=${encodeURIComponent(t)}`,`_blank`,`noopener,noreferrer`),r(!0)},className:`w-full sm:w-auto py-3 px-4 bg-emerald-700 text-white font-semibold rounded-lg hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2 text-xs cursor-pointer shadow-xs whitespace-nowrap`,children:[(0,b.jsxDEV)(Re,{className:`w-3.5 h-3.5`},void 0,!1,{fileName:z,lineNumber:267,columnNumber:19},void 0),(0,b.jsxDEV)(`span`,{children:[`Send via WhatsApp (+91 `,y.phone,`)`]},void 0,!0,{fileName:z,lineNumber:268,columnNumber:19},void 0)]},void 0,!0,{fileName:z,lineNumber:262,columnNumber:17},void 0)]},void 0,!0,{fileName:z,lineNumber:253,columnNumber:15},void 0)]},void 0,!0,{fileName:z,lineNumber:187,columnNumber:13},void 0)]},void 0,!0,{fileName:z,lineNumber:158,columnNumber:9},void 0)]},void 0,!0,{fileName:z,lineNumber:52,columnNumber:7},void 0)]},void 0,!0,{fileName:z,lineNumber:37,columnNumber:5},void 0)},B=`/app/applet/src/pages/PoliciesPage.tsx`,Dt=()=>{let[e,t]=(0,_.useState)(`shipping`);return(0,b.jsxDEV)(`div`,{className:`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10`,children:[(0,b.jsxDEV)(`div`,{className:`text-center max-w-3xl mx-auto space-y-3`,children:[(0,b.jsxDEV)(`span`,{className:`text-xs uppercase tracking-widest text-[#b3832f] font-semibold`,children:`Customer Commitments & Terms`},void 0,!1,{fileName:B,lineNumber:13,columnNumber:9},void 0),(0,b.jsxDEV)(`h1`,{className:`font-serif text-3xl sm:text-4xl font-bold text-stone-950 tracking-tight`,children:`Policies & Transparency`},void 0,!1,{fileName:B,lineNumber:16,columnNumber:9},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs sm:text-sm text-stone-600 leading-relaxed max-w-xl mx-auto`,children:`Clear, honest business policies governing shipping, returns, Ayurvedic medical disclosures, and customer privacy.`},void 0,!1,{fileName:B,lineNumber:19,columnNumber:9},void 0)]},void 0,!0,{fileName:B,lineNumber:12,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs`,children:[(0,b.jsxDEV)(`div`,{className:`flex overflow-x-auto border-b border-stone-200 bg-stone-50/70 p-2 gap-1`,children:[(0,b.jsxDEV)(`button`,{onClick:()=>t(`shipping`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${e===`shipping`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:[(0,b.jsxDEV)(tt,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:B,lineNumber:37,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`Shipping & COD`},void 0,!1,{fileName:B,lineNumber:38,columnNumber:13},void 0)]},void 0,!0,{fileName:B,lineNumber:29,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>t(`returns`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${e===`returns`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:[(0,b.jsxDEV)(We,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:B,lineNumber:49,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`Returns & Replacement`},void 0,!1,{fileName:B,lineNumber:50,columnNumber:13},void 0)]},void 0,!0,{fileName:B,lineNumber:41,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>t(`medical`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${e===`medical`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:[(0,b.jsxDEV)(qe,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:B,lineNumber:61,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`Medical Disclaimer`},void 0,!1,{fileName:B,lineNumber:62,columnNumber:13},void 0)]},void 0,!0,{fileName:B,lineNumber:53,columnNumber:11},void 0),(0,b.jsxDEV)(`button`,{onClick:()=>t(`privacy`),className:`px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${e===`privacy`?`bg-white text-stone-950 shadow-xs`:`text-stone-600 hover:text-stone-900`}`,children:[(0,b.jsxDEV)(Ie,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:B,lineNumber:73,columnNumber:13},void 0),(0,b.jsxDEV)(`span`,{children:`Privacy & Terms`},void 0,!1,{fileName:B,lineNumber:74,columnNumber:13},void 0)]},void 0,!0,{fileName:B,lineNumber:65,columnNumber:11},void 0)]},void 0,!0,{fileName:B,lineNumber:28,columnNumber:9},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 sm:p-8 space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed`,children:[e===`shipping`&&(0,b.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl font-bold text-stone-900`,children:`Shipping & Cash on Delivery Policy`},void 0,!1,{fileName:B,lineNumber:84,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3`,children:[(0,b.jsxDEV)(`p`,{children:[`All Amrutkalp orders are inspected, batch-sealed, and dispatched directly from our registered dispensary at `,(0,b.jsxDEV)(`strong`,{children:`108, Biz Hub Shopping, Amroli, Surat, Gujarat 394107`},void 0,!1,{fileName:B,lineNumber:90,columnNumber:127},void 0),`.`]},void 0,!0,{fileName:B,lineNumber:89,columnNumber:17},void 0),(0,b.jsxDEV)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4 py-2`,children:[(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200`,children:[(0,b.jsxDEV)(`strong`,{className:`block text-stone-900 text-sm font-semibold mb-1`,children:`Dispatch Timelines`},void 0,!1,{fileName:B,lineNumber:95,columnNumber:21},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-600 text-xs`,children:`Orders placed before 2:00 PM are dispatched on the same business day. All other orders dispatch within 24 to 48 hours (excluding Sundays & national holidays).`},void 0,!1,{fileName:B,lineNumber:98,columnNumber:21},void 0)]},void 0,!0,{fileName:B,lineNumber:94,columnNumber:19},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-stone-50 rounded-xl border border-stone-200`,children:[(0,b.jsxDEV)(`strong`,{className:`block text-stone-900 text-sm font-semibold mb-1`,children:`Free Express Delivery Threshold`},void 0,!1,{fileName:B,lineNumber:104,columnNumber:21},void 0),(0,b.jsxDEV)(`p`,{className:`text-stone-600 text-xs`,children:[`Orders of ₹`,y.shippingThreshold,` and above enjoy 100% Free Express Shipping. A flat fee of ₹70 applies to orders below this amount.`]},void 0,!0,{fileName:B,lineNumber:107,columnNumber:21},void 0)]},void 0,!0,{fileName:B,lineNumber:103,columnNumber:19},void 0)]},void 0,!0,{fileName:B,lineNumber:93,columnNumber:17},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900 pt-2`,children:`Estimated Delivery Times by Region`},void 0,!1,{fileName:B,lineNumber:113,columnNumber:17},void 0),(0,b.jsxDEV)(`ul`,{className:`list-disc pl-5 space-y-1 text-xs text-stone-600`,children:[(0,b.jsxDEV)(`li`,{children:[(0,b.jsxDEV)(`strong`,{children:`Gujarat & Western India:`},void 0,!1,{fileName:B,lineNumber:117,columnNumber:23},void 0),` 1 to 3 business days`]},void 0,!0,{fileName:B,lineNumber:117,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:[(0,b.jsxDEV)(`strong`,{children:`Metros (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Kolkata):`},void 0,!1,{fileName:B,lineNumber:118,columnNumber:23},void 0),` 2 to 4 business days`]},void 0,!0,{fileName:B,lineNumber:118,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:[(0,b.jsxDEV)(`strong`,{children:`Rest of India:`},void 0,!1,{fileName:B,lineNumber:119,columnNumber:23},void 0),` 3 to 6 business days`]},void 0,!0,{fileName:B,lineNumber:119,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:[(0,b.jsxDEV)(`strong`,{children:`Remote / Northeast / Island Regions:`},void 0,!1,{fileName:B,lineNumber:120,columnNumber:23},void 0),` 5 to 8 business days via Speed Post`]},void 0,!0,{fileName:B,lineNumber:120,columnNumber:19},void 0)]},void 0,!0,{fileName:B,lineNumber:116,columnNumber:17},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900 pt-2`,children:`Cash on Delivery (COD) Procedure`},void 0,!1,{fileName:B,lineNumber:123,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600`,children:`We offer Cash on Delivery across most serviceable Indian pincodes. You may inspect the outer package for seal integrity before handing cash or scanning the courier agent's UPI QR code.`},void 0,!1,{fileName:B,lineNumber:126,columnNumber:17},void 0)]},void 0,!0,{fileName:B,lineNumber:88,columnNumber:15},void 0)]},void 0,!0,{fileName:B,lineNumber:83,columnNumber:13},void 0),e===`returns`&&(0,b.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl font-bold text-stone-900`,children:`7-Day Replacement Guarantee`},void 0,!1,{fileName:B,lineNumber:136,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{children:[`Due to the ingestible nature of Ayurvedic herbal preparations and hygiene regulations, opened jars and pouches cannot be returned for resale. However, we offer an unconditional `,(0,b.jsxDEV)(`strong`,{children:`7-Day Transit Replacement Guarantee`},void 0,!1,{fileName:B,lineNumber:141,columnNumber:194},void 0),`.`]},void 0,!0,{fileName:B,lineNumber:140,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 space-y-2`,children:[(0,b.jsxDEV)(`strong`,{className:`font-semibold block`,children:`When are you eligible for an immediate free replacement?`},void 0,!1,{fileName:B,lineNumber:145,columnNumber:17},void 0),(0,b.jsxDEV)(`ul`,{className:`list-disc pl-5 space-y-1 text-emerald-900`,children:[(0,b.jsxDEV)(`li`,{children:`If the product arrives broken, cracked, or leaking in transit.`},void 0,!1,{fileName:B,lineNumber:147,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:`If the outer security seal or pouch barrier has been tampered with prior to delivery.`},void 0,!1,{fileName:B,lineNumber:148,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:`If you received an incorrect variant or incomplete quantity.`},void 0,!1,{fileName:B,lineNumber:149,columnNumber:19},void 0)]},void 0,!0,{fileName:B,lineNumber:146,columnNumber:17},void 0)]},void 0,!0,{fileName:B,lineNumber:144,columnNumber:15},void 0),(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900 pt-2`,children:`How to Request a Replacement in 3 Simple Steps:`},void 0,!1,{fileName:B,lineNumber:153,columnNumber:15},void 0),(0,b.jsxDEV)(`ol`,{className:`list-decimal pl-5 space-y-2 text-xs text-stone-600`,children:[(0,b.jsxDEV)(`li`,{children:`Take a photo or brief 5-second video of the damaged box or broken seal within 7 days of receiving the package.`},void 0,!1,{fileName:B,lineNumber:157,columnNumber:17},void 0),(0,b.jsxDEV)(`li`,{children:[`Send the photo along with your Order Number (e.g. AK-XXXXXX) directly to our official WhatsApp care desk at `,(0,b.jsxDEV)(`strong`,{children:[`+91 `,y.phone]},void 0,!0,{fileName:B,lineNumber:161,columnNumber:127},void 0),`.`]},void 0,!0,{fileName:B,lineNumber:160,columnNumber:17},void 0),(0,b.jsxDEV)(`li`,{children:`Our dispatch supervisor in Surat will immediately ship a brand-new replacement unit at zero cost to you with expedited tracking.`},void 0,!1,{fileName:B,lineNumber:163,columnNumber:17},void 0)]},void 0,!0,{fileName:B,lineNumber:156,columnNumber:15},void 0)]},void 0,!0,{fileName:B,lineNumber:135,columnNumber:13},void 0),e===`medical`&&(0,b.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl font-bold text-stone-900`,children:`Statutory Ayurvedic Medical Disclaimer`},void 0,!1,{fileName:B,lineNumber:173,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`p-4 bg-amber-50/80 border border-amber-300 rounded-xl space-y-2 text-xs text-amber-950`,children:[(0,b.jsxDEV)(`strong`,{className:`block font-semibold`,children:`Important Health Notice:`},void 0,!1,{fileName:B,lineNumber:178,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{className:`leading-relaxed`,children:`The statements, articles, and product information published on this website have not been evaluated by the FDA or conventional pharmaceutical regulatory bodies. Amrutkalp products are classical Ayurvedic preparations formulated according to traditional Indian texts (Charaka Samhita, Sushruta Samhita, and the Ayurvedic Pharmacopoeia of India).`},void 0,!1,{fileName:B,lineNumber:179,columnNumber:17},void 0)]},void 0,!0,{fileName:B,lineNumber:177,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-3 text-xs text-stone-600 leading-relaxed`,children:[(0,b.jsxDEV)(`p`,{children:[`Amrutkalp formulations are intended to support natural vitality, metabolic equilibrium, and musculoskeletal joint mobility. They are `,(0,b.jsxDEV)(`strong`,{children:`not designed to diagnose, treat, cure, or prevent any severe medical disease`},void 0,!1,{fileName:B,lineNumber:186,columnNumber:152},void 0),` in place of supervised medical therapeutics.`]},void 0,!0,{fileName:B,lineNumber:185,columnNumber:17},void 0),(0,b.jsxDEV)(`p`,{children:(0,b.jsxDEV)(`strong`,{children:`Specific Contraindications:`},void 0,!1,{fileName:B,lineNumber:189,columnNumber:19},void 0)},void 0,!1,{fileName:B,lineNumber:188,columnNumber:17},void 0),(0,b.jsxDEV)(`ul`,{className:`list-disc pl-5 space-y-1`,children:[(0,b.jsxDEV)(`li`,{children:`Individuals with chronic renal insufficiency, severe gout (hyperuricemia), or iron-overload conditions (hemochromatosis) should not consume Shilajit without specialized medical supervision.`},void 0,!1,{fileName:B,lineNumber:192,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:`Pregnant and breastfeeding mothers should not take Amrutvati or Shilajit without explicit authorization from an Ayurvedic Vaidya or obstetrician.`},void 0,!1,{fileName:B,lineNumber:193,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:`If you are currently taking prescription blood thinners or cardiac medications, please maintain a 2-hour window between pharmaceutical doses and herbal remedies.`},void 0,!1,{fileName:B,lineNumber:194,columnNumber:19},void 0)]},void 0,!0,{fileName:B,lineNumber:191,columnNumber:17},void 0)]},void 0,!0,{fileName:B,lineNumber:184,columnNumber:15},void 0)]},void 0,!0,{fileName:B,lineNumber:172,columnNumber:13},void 0),e===`privacy`&&(0,b.jsxDEV)(`div`,{className:`space-y-4`,children:[(0,b.jsxDEV)(`h2`,{className:`font-serif text-2xl font-bold text-stone-900`,children:`Customer Privacy & Data Protection`},void 0,!1,{fileName:B,lineNumber:203,columnNumber:15},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600`,children:`At Amrutkalp, we respect your privacy. We collect only the information necessary to fulfill your order and provide direct Ayurvedic consultation.`},void 0,!1,{fileName:B,lineNumber:207,columnNumber:15},void 0),(0,b.jsxDEV)(`div`,{className:`space-y-2 text-xs text-stone-600`,children:[(0,b.jsxDEV)(`strong`,{className:`text-stone-900 block font-semibold`,children:`Our Privacy Commitments:`},void 0,!1,{fileName:B,lineNumber:212,columnNumber:17},void 0),(0,b.jsxDEV)(`ul`,{className:`list-disc pl-5 space-y-1.5`,children:[(0,b.jsxDEV)(`li`,{children:`We never sell, rent, or lease your phone number, email, or physical address to third-party telemarketers or ad brokers.`},void 0,!1,{fileName:B,lineNumber:214,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:`Your phone number is utilized strictly to provide order dispatch SMS updates and direct WhatsApp consultation if requested by you.`},void 0,!1,{fileName:B,lineNumber:215,columnNumber:19},void 0),(0,b.jsxDEV)(`li`,{children:`All payment transactions and order records are handled through encrypted channels.`},void 0,!1,{fileName:B,lineNumber:216,columnNumber:19},void 0)]},void 0,!0,{fileName:B,lineNumber:213,columnNumber:17},void 0)]},void 0,!0,{fileName:B,lineNumber:211,columnNumber:15},void 0)]},void 0,!0,{fileName:B,lineNumber:202,columnNumber:13},void 0)]},void 0,!0,{fileName:B,lineNumber:79,columnNumber:9},void 0)]},void 0,!0,{fileName:B,lineNumber:25,columnNumber:7},void 0),(0,b.jsxDEV)(`div`,{className:`p-6 bg-stone-100 rounded-2xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4`,children:[(0,b.jsxDEV)(`div`,{children:[(0,b.jsxDEV)(`h3`,{className:`font-serif text-lg font-bold text-stone-900`,children:`Have questions about our terms or a recent order?`},void 0,!1,{fileName:B,lineNumber:229,columnNumber:11},void 0),(0,b.jsxDEV)(`p`,{className:`text-xs text-stone-600 mt-0.5`,children:`Our Surat care desk is available Monday through Saturday.`},void 0,!1,{fileName:B,lineNumber:232,columnNumber:11},void 0)]},void 0,!0,{fileName:B,lineNumber:228,columnNumber:9},void 0),(0,b.jsxDEV)(`a`,{href:`tel:${y.phone}`,className:`py-2.5 px-4 bg-[#111915] text-amber-100 font-semibold rounded-lg hover:bg-stone-800 transition-colors text-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer shadow-xs`,children:[(0,b.jsxDEV)(Be,{className:`w-3.5 h-3.5 text-[#c99a45]`},void 0,!1,{fileName:B,lineNumber:240,columnNumber:11},void 0),(0,b.jsxDEV)(`span`,{children:[`Call Quality Care (+91 `,y.phone,`)`]},void 0,!0,{fileName:B,lineNumber:241,columnNumber:11},void 0)]},void 0,!0,{fileName:B,lineNumber:236,columnNumber:9},void 0)]},void 0,!0,{fileName:B,lineNumber:227,columnNumber:7},void 0)]},void 0,!0,{fileName:B,lineNumber:9,columnNumber:5},void 0)},Ot=`/app/applet/src/App.tsx`,kt=[`home`,`shop`,`product-detail`,`authenticity`,`ingredients`,`about`,`journal`,`contact`,`policies`];function At(){let[e,t]=(0,_.useState)(`home`),[n,r]=(0,_.useState)(null),[i,a]=(0,_.useState)(!1);(0,_.useEffect)(()=>{let e=()=>{try{let e=window.location.hash.replace(/^#\/?/,``).trim();if(!e){t(`home`),r(null);return}if(e.startsWith(`product/`)){let n=gt(e.replace(`product/`,``).trim());n?(r(n.slug),t(`product-detail`)):(r(null),t(`shop`));return}kt.includes(e)?(t(e),r(null)):(t(`home`),r(null))}catch(e){console.error(`Error handling URL hash change:`,e),t(`home`),r(null)}};return e(),window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]);let o=e=>{let n=gt(e);n?(r(n.slug),t(`product-detail`),window.location.hash=`product/${n.slug}`):(t(`shop`),window.location.hash=`shop`),window.scrollTo({top:0,behavior:`smooth`})},s=e=>{let n=kt.includes(e)?e:`home`;t(n),r(null),window.location.hash=n===`home`?``:n,window.scrollTo({top:0,behavior:`smooth`})},c=n?gt(n):null;return(0,b.jsxDEV)(mt,{children:(0,b.jsxDEV)(ae,{children:(0,b.jsxDEV)(`div`,{className:`min-h-screen flex flex-col bg-[#fbfaf7] text-stone-900 selection:bg-amber-100 selection:text-amber-950`,children:[(0,b.jsxDEV)(it,{currentTab:e,setCurrentTab:s,onSelectProduct:o},void 0,!1,{fileName:Ot,lineNumber:117,columnNumber:11},this),(0,b.jsxDEV)(`main`,{className:`flex-1`,children:[e===`home`&&(0,b.jsxDEV)(vt,{setCurrentTab:s,onSelectProduct:o},void 0,!1,{fileName:Ot,lineNumber:126,columnNumber:15},this),e===`shop`&&(0,b.jsxDEV)(yt,{onSelectProduct:o},void 0,!1,{fileName:Ot,lineNumber:133,columnNumber:15},this),e===`product-detail`&&(c?(0,b.jsxDEV)(bt,{product:c,onBackToShop:()=>s(`shop`),onSelectProduct:o},void 0,!1,{fileName:Ot,lineNumber:140,columnNumber:17},this):(0,b.jsxDEV)(yt,{onSelectProduct:o},void 0,!1,{fileName:Ot,lineNumber:146,columnNumber:17},this)),e===`authenticity`&&(0,b.jsxDEV)(xt,{onGoToShop:()=>s(`shop`)},void 0,!1,{fileName:Ot,lineNumber:153,columnNumber:15},this),e===`ingredients`&&(0,b.jsxDEV)(St,{onGoToShop:()=>s(`shop`)},void 0,!1,{fileName:Ot,lineNumber:159,columnNumber:15},this),e===`about`&&(0,b.jsxDEV)(Ct,{onGoToShop:()=>s(`shop`),onGoToContact:()=>s(`contact`)},void 0,!1,{fileName:Ot,lineNumber:165,columnNumber:15},this),e===`journal`&&(0,b.jsxDEV)(Tt,{onSelectProduct:o},void 0,!1,{fileName:Ot,lineNumber:172,columnNumber:15},this),e===`contact`&&(0,b.jsxDEV)(Et,{},void 0,!1,{fileName:Ot,lineNumber:178,columnNumber:15},this),e===`policies`&&(0,b.jsxDEV)(Dt,{},void 0,!1,{fileName:Ot,lineNumber:182,columnNumber:15},this),!kt.includes(e)&&(0,b.jsxDEV)(vt,{setCurrentTab:s,onSelectProduct:o},void 0,!1,{fileName:Ot,lineNumber:187,columnNumber:15},this)]},void 0,!0,{fileName:Ot,lineNumber:124,columnNumber:11},this),(0,b.jsxDEV)(at,{setCurrentTab:s,onSelectProduct:o,onOpenSourceModal:()=>a(!0)},void 0,!1,{fileName:Ot,lineNumber:195,columnNumber:11},this),(0,b.jsxDEV)(ot,{},void 0,!1,{fileName:Ot,lineNumber:202,columnNumber:11},this),(0,b.jsxDEV)(st,{},void 0,!1,{fileName:Ot,lineNumber:203,columnNumber:11},this),(0,b.jsxDEV)(ct,{},void 0,!1,{fileName:Ot,lineNumber:204,columnNumber:11},this),(0,b.jsxDEV)(ut,{},void 0,!1,{fileName:Ot,lineNumber:205,columnNumber:11},this),(0,b.jsxDEV)(ft,{isOpen:i,onClose:()=>a(!1)},void 0,!1,{fileName:Ot,lineNumber:206,columnNumber:11},this)]},void 0,!0,{fileName:Ot,lineNumber:114,columnNumber:9},this)},void 0,!1,{fileName:Ot,lineNumber:113,columnNumber:7},this)},void 0,!1,{fileName:Ot,lineNumber:112,columnNumber:5},this)}var jt=`/app/applet/src/main.tsx`;(0,v.createRoot)(document.getElementById(`root`)).render((0,b.jsxDEV)(mt,{children:(0,b.jsxDEV)(At,{},void 0,!1,{fileName:jt,lineNumber:8,columnNumber:5},void 0)},void 0,!1,{fileName:jt,lineNumber:7,columnNumber:3},void 0));