window.MSA=window.MSA||{};window.MSA.MeControl=window.MSA.MeControl||{};window.MSA.MeControl.Config={"ver":"10.22108.2","mkt":"en-US","ptn":"sharepoint","gfx":"https://amcdn.msftauth.net","dbg":false,"aad":true,"int":false,"pxy":true,"msTxt":false,"rwd":true,"telEvs":"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall, TrackedScenario","instKey":"b8ffe739c47a401190627519795ca4d2-044a8309-9d4b-430b-9d47-6e87775cbab6-6888","oneDSUrl":"https://js.monitor.azure.com/scripts/c/ms.shared.analytics-3.1.11.gbl.min.js","remAcc":true,"main":"meBoot","wrapperId":"suiteshell","cdnRegex":"^(?:https?:\\/\\/)?(mem\\.gfx\\.ms(?!\\.)|controls\\.account.microsoft?(?:-int|-dev)?(\\.com)?(:[0-9]{1,6})|amcdn\\.ms(?:ft)?auth\\.net(?!\\.))","timeoutMs":600000,"graphv2":true,"graphinfo":{"graphclientid":"7eadcef8-456d-4611-9480-4fff72b8b9e2","graphscope":"user.read","graphcodeurl":"https://login.microsoftonline.com/common/oauth2/v2.0/authorize","graphredirecturi":"https://amcdn.msftauth.net/me/callgraph","graphphotourl":"https://graph.microsoft.com/v1.0/me/photos/96x96/$value"},"aadUrl":"https://myaccount.microsoft.com","msaUrl":"https://account.microsoft.com/","cache":true};window.MeControl=window.MeControl||{};window.MeControl.Config={"ver":"10.22108.2","mkt":"en-US","ptn":"sharepoint","gfx":"https://amcdn.msftauth.net","dbg":false,"aad":true,"int":false,"pxy":true,"msTxt":false,"rwd":true,"telEvs":"PageAction, PageView, ContentUpdate, OutgoingRequest, ClientError, PartnerApiCall, TrackedScenario","instKey":"b8ffe739c47a401190627519795ca4d2-044a8309-9d4b-430b-9d47-6e87775cbab6-6888","oneDSUrl":"https://js.monitor.azure.com/scripts/c/ms.shared.analytics-3.1.11.gbl.min.js","remAcc":true,"main":"meBoot","wrapperId":"suiteshell","cdnRegex":"^(?:https?:\\/\\/)?(mem\\.gfx\\.ms(?!\\.)|controls\\.account.microsoft?(?:-int|-dev)?(\\.com)?(:[0-9]{1,6})|amcdn\\.ms(?:ft)?auth\\.net(?!\\.))","timeoutMs":600000,"graphv2":true,"graphinfo":{"graphclientid":"7eadcef8-456d-4611-9480-4fff72b8b9e2","graphscope":"user.read","graphcodeurl":"https://login.microsoftonline.com/common/oauth2/v2.0/authorize","graphredirecturi":"https://amcdn.msftauth.net/me/callgraph","graphphotourl":"https://graph.microsoft.com/v1.0/me/photos/96x96/$value"},"aadUrl":"https://myaccount.microsoft.com","msaUrl":"https://account.microsoft.com/","cache":true};this.MeControl=this.MeControl||{},this.MeControl.WebInline=function(t){"use strict";var o=function(){return(o=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)};function i(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}var n,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=16,c=63,u=f();function s(){return u}function f(e){var n=0,t=e||function(){var e="";for(;e.length<a;)e+=r[Math.floor(Math.random()*r.length)];return e}();return{getValue:function(){var e=t+"."+n;return e.length>c&&(e=e.substring(0,c)+"!"),e},extend:function(){t=this.getValue(),n=0},increment:function(){n++}}}function l(){return n}function d(e){n=e}var p=window,m=p.MeControl=p.MeControl||{},v=Date.now?function(){return Date.now()}:function(){return+new Date},g=function(){return p.performance.now()},h=function(){return p.performance&&p.performance.getEntries?window.performance.getEntries():[]},y=function(){return p.location};var e=p.requestAnimationFrame?function(e){return p.requestAnimationFrame(e)}:function(e){return setTimeout(function(){return e(g())})},C="mectrl",w="_",b=new RegExp("^"+C,"i");function S(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=e.join(w);return b.test(t)||(t=C+w+t),t}var E="MeControlError::";function A(e,n){void 0===n&&(n=!1);var t=new Error(""+E+e);return t.mcIsTimeout=n,t}var T=(Object.defineProperty(N.prototype,"defaultPrevented",{get:function(){return this._defaultPrevented},enumerable:!0,configurable:!0}),N.prototype.preventDefault=function(){this._defaultPrevented=!0},N);function N(e,n){this.type=e,this.detail=n,this._defaultPrevented=!1}var I=(P.prototype.addEventListener=function(e,n){e in this._listeners||(this._listeners[e]=[]),this._listeners[e].push(n)},P.prototype.removeEventListener=function(e,n){if(e in this._listeners){var t=this._listeners[e],r=t.indexOf(n);-1!==r&&t.splice(r,1)}},P.prototype.dispatchEvent=function(e){if(!(e.type in this._listeners))return!0;for(var n=this._listeners[e.type],t=new T(e.type,e.detail),r=0,o=n.length;r<o;r++)n[r].call(this,t);return!t.defaultPrevented},P);function P(){this._listeners={}}var M="msameid";t.id=D();try{var O=p.sessionStorage;O&&(t.id=O.getItem(M)||D(),O.setItem(M,t.id))}catch(e){}function D(){return(e()+e()+"-"+e()+"-4"+e().substr(0,3)+"-"+e()+"-"+e()+e()+e()).toLowerCase();function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}}function U(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var x,_,L=Object.assign||o,k={};function R(e,n){e=e.toLowerCase(),k[e]=k[e]||{},L(k[e],n)}var j=null;function F(){var e=m.Config;return null==j&&""!=m.Config.cdnRegex&&(_=new RegExp(m.Config.cdnRegex),j=B(_)),j||e.gfx}function B(e){var n=document.getElementsByTagName("script");if(n)for(var t=Array.prototype.slice.call(n),r=0;r<t.length;r++){var o=e.exec(t[r].src);if(o)return o[0]}}var V,J=[],q=/ContentUpdate|PageAction|TrackedScenario/,W="https://web.vortex.data.microsoft.com/collect/v1",G=!0,H=!1,X="complete"===document.readyState,z=[];function K(e){!(G=e)&&0<z.length&&Z()}function Q(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];J.push(e),J.sort(function(e,n){return e[2]-n[2]})}function Y(e,n){var t=e.partA.name.split(".").pop();m.Config.telEvs&&-1!==m.Config.telEvs.indexOf(t)&&(z.push(e),G?(H||(H=!0,window.addEventListener("beforeunload",Z,!0)),X&&!1!==n&&(!0===n||q.test(t))&&setTimeout(Z,0)):Z())}function Z(){if(window.removeEventListener("beforeunload",Z,!0),H=!1,0<z.length){if(!m.Config.isUT)V(z),function(){for(var e=0;e<J.length;e++)if(J[e][1]())return J[e][0];return function(){}}()(z);z=[]}}function $(e){return e?e.replace(/([^?&]*)=([^&#]*)/g,"$1=**").replace(/#.*/,""):e}X||window.addEventListener("load",function(){X=!0,Z()});var ee=D(),ne=[],te="None",re={counts:"0-0"};function oe(e){var n=s();return n.increment(),"ContentUpdate"===e.eventType&&e.content&&"Application"===e.content.source&&(te=e.content.id),{cv:n.getValue(),impressionGuid:ee,pageName:te,date:new Date,timestamp:g(),accounts:re}}var ie=g(),ae={};function ce(e,n){var t=$(y().href);return{metaTags:{authtype:n&&n.toString(),pgpart:m.Config.ptn},config:m.Config,url:t,accts:e}}function ue(e,n,t){return{ver:"2.1",name:e,time:n.toISOString(),appId:"JS:MeControl",cV:t,flags:2097152,ext:{javascript:{ver:"1.1",libVer:"4.2.3",domain:y().hostname,userConsent:!1},app:{env:m.Config.int?"Test":"Prod"}}}}function se(e,n){ae[e]=n,function(e){for(var n=[],t=[],r=0;r<ne.length;r++)ne[r][0].eventType===e?t.push(ne[r]):n.push(ne[r]);return ne=n,t}(e).forEach(function(e){Y(n(e[0],e[1]),e[0].isCritical)})}function fe(e){var n=function(e){var n=ae[e.eventType];return n?n(e,oe(e)):null}(e);n?Y(n,e.isCritical):function(e){ne.push([e,oe(e)])}(e)}function le(e){for(var n=0,t=e;n<t.length;n++){var r=t[n],o=[pe(r.partA),r.partB&&pe(r.partB,"-"),pe(r.partC,"*")].join("&").replace(/&&/g,"&");document.createElement("img").src=W+"/t.gif?"+o}}function de(){return!0}function pe(r,o){return void 0===o&&(o=""),r?Object.getOwnPropertyNames(r).map(function(e){var n=r[e],t=""+o+e;switch(typeof n){case"object":return null!==n?pe(n,t+"-"):null;case"string":n="%27"+encodeURIComponent(n)+"%27";case"number":case"boolean":return t+"="+n}return null}).filter(function(e){return!!e}).join("&"):""}var me=!1;function ve(e){!function(){if(me)return;window.awa._registerSchemas([function(e,n){var t;return(t={name:e})[e]={part:"C",def:{fields:n}},t}("Ms.Webi.MeControl.PartnerApiCall",[he("partner","string",!0),he("controlVersion","string",!0),he("methodName","string",!0),he("parameters","string",!0)])]),me=!0}(),window.awa.vortexEvents.SendOrScheduleEvent(e.map(function(e){return function(e){var n=o(o({},e.partA),{data:o({baseData:e.partB&&o({},e.partB)},e.partC)});return delete n.flags,n}(e)}))}function ge(){return!1}function he(e,n,t){return{req:!!t||void 0,name:e,type:n}}var ye="Ms.Webi.ClientError";function Ce(e,n){var t;return{partA:ue(ye,n.date,n.cv),partB:void 0,partC:{baseType:void 0,errorName:e.name,errorMessage:(t=e.details,t.replace(/\n/g,"\\n")),errorType:e.type,errorInfo:JSON.stringify(ce(n.accounts.counts,n.accounts.current)),severity:e.severity||2,wasDisplayed:e.displayed,pageName:n.pageName,impressionGuid:n.impressionGuid,market:m.Config.mkt}}}var we="Ms.Webi.OutgoingRequest",be="Ms.Qos.OutgoingServiceRequest";function Se(e,n){var t=function(e){for(var n=h(),t=0,r=n;t<r.length;t++){var o=r[t];if(o.name===e||-1!==o.name.indexOf(e))return o}return}(e.url),r=Math.round(Ee(t)||e.duration),o=function(e){if(e){var n=document.createElement("a");n.href=e;for(var t=n.pathname.split("/"),r=t.length-1;0<=r;r--)if(t[r])return t[r]}return}(t?t.name:e.url)||e.serviceOperation;return{partA:ue(we,n.date,n.cv),partB:{operationName:o,dependencyOperationName:e.serviceOperation,dependencyName:e.service,latencyMs:r,succeeded:e.success,targetUri:$(e.url)},partC:{baseType:be,message:e.message,pageName:n.pageName,impressionGuid:n.impressionGuid,market:m.Config.mkt,customData:JSON.stringify(L({},{computedDuration:e.duration||-1,perfDuration:Ee(t)||-1},ce(n.accounts.counts,n.accounts.current)))}}}function Ee(e){if(e)switch(e.entryType){case"navigation":return e.responseEnd-e.startTime;case"resource":default:return e.duration}}var Ae="Ms.Webi.MeControl.TrackedScenario";function Te(e,n){return{partA:ue(Ae,n.date,n.cv),partB:void 0,partC:{baseType:void 0,partner:m.Config.ptn,controlVersion:m.Config.ver,market:m.Config.mkt,scenario:e.scenario,action:e.action,previousAction:e.previousAction,success:e.success,durationMs:e.durationMs,details:e.details}}}var Ne=setTimeout;function Ie(e){return Boolean(e&&void 0!==e.length)}function Pe(){}function Me(e){if(!(this instanceof Me))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],Le(e,this)}function Oe(t,r){for(;3===t._state;)t=t._value;0!==t._state?(t._handled=!0,Me._immediateFn(function(){var e=1===t._state?r.onFulfilled:r.onRejected;if(null!==e){var n;try{n=e(t._value)}catch(e){return void Ue(r.promise,e)}De(r.promise,n)}else(1===t._state?De:Ue)(r.promise,t._value)})):t._deferreds.push(r)}function De(n,e){try{if(e===n)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if(e instanceof Me)return n._state=3,n._value=e,void xe(n);if("function"==typeof t)return void Le(function(e,n){return function(){e.apply(n,arguments)}}(t,e),n)}n._state=1,n._value=e,xe(n)}catch(e){Ue(n,e)}}function Ue(e,n){e._state=2,e._value=n,xe(e)}function xe(e){2===e._state&&0===e._deferreds.length&&Me._immediateFn(function(){e._handled||Me._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;n<t;n++)Oe(e,e._deferreds[n]);e._deferreds=null}function _e(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}function Le(e,n){var t=!1;try{e(function(e){t||(t=!0,De(n,e))},function(e){t||(t=!0,Ue(n,e))})}catch(e){if(t)return;t=!0,Ue(n,e)}}Me.prototype.catch=function(e){return this.then(null,e)},Me.prototype.then=function(e,n){var t=new this.constructor(Pe);return Oe(this,new _e(e,n,t)),t},Me.prototype.finally=function(n){var t=this.constructor;return this.then(function(e){return t.resolve(n()).then(function(){return e})},function(e){return t.resolve(n()).then(function(){return t.reject(e)})})},Me.all=function(n){return new Me(function(r,o){if(!Ie(n))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(n);if(0===i.length)return r([]);var a=i.length;function c(n,e){try{if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t)return void t.call(e,function(e){c(n,e)},o)}i[n]=e,0==--a&&r(i)}catch(e){o(e)}}for(var e=0;e<i.length;e++)c(e,i[e])})},Me.resolve=function(n){return n&&"object"==typeof n&&n.constructor===Me?n:new Me(function(e){e(n)})},Me.reject=function(t){return new Me(function(e,n){n(t)})},Me.race=function(o){return new Me(function(e,n){if(!Ie(o))return n(new TypeError("Promise.race accepts an array"));for(var t=0,r=o.length;t<r;t++)Me.resolve(o[t]).then(e,n)})},Me._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){Ne(e,0)},Me._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var ke,Re=window;if("performance"in window==0&&(Re.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in window.performance==!1){var je=Date.now();window.performance.timing&&window.performance.timing.navigationStart&&(je=window.performance.timing.navigationStart),window.performance.now=function(){return Date.now()-je}}var Fe=[];function Be(e){Fe=Fe.concat(e),Ve()}function Ve(){ke&&(Fe.forEach(function(e){ke.track(function(e){return{name:e.partA.name,data:o(o({},e.partA),{data:o({baseData:e.partB&&o({},e.partB)},e.partC)})}}(e))}),Fe=[])}function Je(e){!function(e){V=e}(Be),Q(le,de,10),Q(ve,ge,1),K(!1),se("ClientError",Ce),se("OutgoingRequest",Se),se("TrackedScenario",Te)}function qe(e){var n,t;if("ContentUpdate"===(t=e).eventType&&"Application"===t.content.source&&"Initial Collapsed"===t.content.id||"PageAction"===(n=e).eventType&&n.content&&("Sign Out"==n.content.id||"View Account"==n.content.id)){var r=l();if(r){var o=new T("telemetry",{data:{event:e}});r.syntheticEventTarget.dispatchEvent(o)}}fe(e)}function We(){var n=g();h().filter(function(e){return function(e){var n=document.createElement("a");n.href=e;var t=n.hostname;return Ge.test(t)}(e.name)}).forEach(function(e){return qe({eventType:"OutgoingRequest",serviceOperation:"LoadResource",service:"MeControl",url:e.name,success:!0,duration:n-e.startTime})})}Je(m.Config&&m.Config.main);var Ge=/^(?:mem\.gfx\.ms|controls\.account\.microsoft|amcdn\.ms(?:ft)?auth\.net)/i;function He(r,o){return new Me(function(e,n){var t=setTimeout(function(){n(A("Promise timed out after "+o+"ms.",!0))},o);r.then(e,n).finally(function(){clearTimeout(t)})})}void 0!==p.Promise&&-1!==p.Promise.toString().indexOf("[native code]")&&(Me._immediateFn=function(e){return p.Promise.resolve().then(e)}),Me._unhandledRejectionFn=function(e){qe({eventType:"ClientError",isCritical:!0,name:e.message||"(falsey message property on error)",type:"UnhandledPromiseRejection",details:e.stack||"",displayed:!1,severity:e.mcIsTimeout?3:2})};var Xe=[];var ze={};function Ke(e){return ze[e]}function Qe(e,n,t){ze[e]={id:e,bundlePromise:n,exports:t}}function Ye(e,n,t){var r,o;o="function"==typeof n?(r=[],n):(r=n,t),function(e,n,t){Xe.push({id:e,deps:n,factory:t})}(e,r,o)}var Ze={"@mecontrol/web-inline":"meInline","@mecontrol/web-boot":"meBoot","@mecontrol/web-core":"meCore"};function $e(e){try{e in Ze&&(e=Ze[e]),en();var n=Ke(e);if(n)return n.bundlePromise;var t=function(s){return new Me(function(i,a){var e=g(),c=function(e){var n=m.Config;return F()+"/scripts/me/MeControl/"+n.ver+"/"+n.mkt+"/"+e+(n.dbg?"":".min")+".js"}(s),n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.async=!0,t.type="text/javascript",t.charset="UTF-8",t.src=c;var r=setTimeout(function(){var e=u(),n="Bundle download timed out";nn(s,e,c,!0,n),a(A(n+": "+s+" ("+c+")",!0))},m.Config.timeoutMs);function u(){return clearTimeout(r),t&&(t.onerror=t.onload=void 0,t=void 0),g()-e}t.onload=function(e){var t=u();en();var n=Ke(s),r=n&&n.exports;if(r)He(r,m.Config.timeoutMs).then(function(e){nn(s,t,c,!1),i(e)}).catch(function(e){var n=e.mcIsTimeout?"Resolving deps and exports timed out":"Resolving deps and exports failed";nn(s,t,c,!0,n),a(A(n+": "+s+" ("+c+"). Inner error: "+e.message,e.mcIsTimeout))});else{var o=void 0;o=p.MeControlDefine!=Ye?"window.MeControlDefine does not equal this bundle's meDefine function. Did you load Me Control twice?":"Bundle failed to load exports",nn(s,t,c,!0,o),a(A(o+": "+s+" ("+c+")",!1))}},t.onerror=function(e){var n=u(),t="Bundle failed to download/parse/compile";nn(s,n,c,!0,t),a(A(t+": "+s+" ("+c+")",!1))},t.crossOrigin="anonymous",n.appendChild(t)})}(e);return Qe(e,t),t}catch(e){return Me.reject(e)}}function en(){for(var e=function(){var n=Xe.pop();if(n){var t={},e=Me.all(n.deps.map(function(e){return"exports"===e?t:$e(e)})).then(function(e){n.factory.apply(n,e)}).then(function(){return t}),r=Ke(n.id);r?r.exports=e:Qe(n.id,e,e)}};Xe.length;)e()}function nn(e,n,t,r,o){qe({eventType:"OutgoingRequest",serviceOperation:"DownloadScript",service:"MeControl",url:t,success:!r,duration:n,message:o})}function tn(){var i,a=[],c=0;function u(e){var n=e.name;i&&U(i,n)&&i[n].apply(i,e.params)}return{setComponent:function(e){i=e;var n=a;a=[];for(var t=0;t<n.length;t++)u(n[t])},handleCall:function(r,o){return void 0===o&&(o=!1),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t={name:r,params:e};i?u(t):a.splice(o?c++:a.length,0,t)}}}}var rn=tn(),on=rn.setComponent,an=function(){return on},cn={setActiveAccount:un("setActiveAccount"),setCommands:un("setCommands"),setAccountPicture:un("setAccountPicture"),setProfilePicture:un("setProfilePicture"),refreshProfilePicture:un("refreshProfilePicture"),refreshAccountPicture:un("refreshAccountPicture"),setTheme:un("setTheme"),setHeaderTheme:un("setHeaderTheme"),setDisplayMode:un("setDisplayMode"),loadPresenceConfig:un("loadPresenceConfig"),setPresence:un("setPresence"),addEventListener:un("addEventListener"),removeEventListener:un("removeEventListener")};function un(t){var r=rn.handleCall(t);return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];qe({eventType:"PartnerApiCall",method:t,params:i(e)}),r.apply(void 0,e)}}var sn="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 160px; display: inline-block; line-height: 48px; font-family: 'Segoe UI'; font-size: 12.4px; color: rgb(80,80,80); padding: 0 10px;",fn=0;function ln(n,t){fn=g();function r(e){qe({eventType:"TrackedScenario",scenario:"Load",previousAction:"START",action:"END",success:e,durationMs:dn(),details:t})}return $e(m.Config.main).then(function(e){return e.init(n,an())}).then(function(){r(!0)},function(e){throw"suiteshell"!==m.Config.wrapperId&&pn(n),r(!1),e})}function dn(){return g()-fn}function pn(e){if(!e)throw A("No options object given before showHeaderNoJs was called");var n=function(e){var n,t=e.currentAccount&&"signedIn"==e.currentAccount.authenticatedState,r=t?e.primaryUXConfig.signOutStr:e.primaryUXConfig.signInStr,o=null,i=e.authProviderConfig;switch(i.type){case"partnerManaged":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:i.signInExperienceTypes})};break;case"adalJsWithMsaFed":case"adalJsAadOnly":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:4})};break;case"msalJsAadOnly":case"msalJsWithMsa":o=t?function(){return i.signOutFromApp({currentAccount:e.currentAccount})}:function(){return i.signIn({signInType:4})};break;case"v1BackCompat":var a=i.rpData,c=t?"signOutUrl":"signInUrl",u=a.aadInfo&&a.aadInfo[c],s=a.msaInfo&&a.msaInfo[c];"aad"===a.preferredIdp&&u?n=u:"msa"===a.preferredIdp&&s?n=s:u?n=u:s&&(n=s);break;default:var f=t?i.appSignOutUrl:i.appSignInUrl;n="function"==typeof f?f({currentAccount:e.currentAccount}):f}return{str:r,href:n,onClick:o}}(e),t=document.createTextNode(n.str||""),r=document.createElement("a");r.href=n.href||"#",r.style.cssText=sn,r.onclick=n.onClick,r.appendChild(t);var o=document.createElement("div");o.className="msame_Header",o.appendChild(r);var i=document.createElement("div");i.appendChild(o);var a=e.shadowDOMContainerElement||document.getElementById(e.containerId);a&&(a.innerHTML="",a.appendChild(i))}function mn(e){return vn(e.currentPresence)&&function(e){if(e){for(var n=0;n<e.length;n++)if(!vn(e[n]))return!1;return!0}return!1}(e.presenceList)}function vn(e){return!!e&&(0<e.key.length&&null!=e.key&&null!=e.key&&0<e.presenceString.length&&null!=e.presenceString&&null!=e.presenceString&&0<e.imageUrl.length&&null!=e.imageUrl&&null!=e.imageUrl)}function gn(e){if(!e)throw A("Options must be an object. Received "+typeof e+".");if(!(e=o({},e)).authProviderConfig)throw A("options.authProviderConfig not correctly defined. Received "+e.authProviderConfig+".");e.presenceConfig&&mn(e.presenceConfig);var n=e.primaryUXConfig=e.primaryUXConfig||{};e.events=e.events||{},e.primaryUXConfig.signInStr=n.signInStr||"Sign in",e.primaryUXConfig.signOutStr=n.signOutStr||"Sign out";var t=["compressed"];e.primaryUXConfig.displayModes=n.displayModes&&n.displayModes.filter(function(e){return-1!=t.indexOf(e.type)})||[],e.appContextConfig&&e.appContextConfig.commands&&(e.appContextConfig.commands=e.appContextConfig.commands.slice(0,5));var r=e;return r.syntheticEventTarget=new I,function(e){var n;if(e&&e.events)for(n in e.events)if(U(e.events,n)){var t=e.events[n];t&&e.syntheticEventTarget.addEventListener(n.toLowerCase(),t)}}(r),d(r),r}function hn(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return L.apply(void 0,i([m],e))}function yn(e){return{apiGeneration:"GEN2",containerId:e.containerId,appContextConfig:{commands:Cn(e.extensibleLinks)},currentAccount:e.userData?Sn(e.userData):void 0,events:e.events?wn(e.events):void 0,authProviderConfig:function(e){return{type:"v1BackCompat",rpData:e}}(e.rpData)}}function Cn(e){return e&&null!=e.map?e.map(function(n,e){return{type:"link",id:n.id?n.id:S("command_id_",e),text:n.label?n.label:n.string?n.string:"Label "+e,ariaLabel:void 0,url:n.url,openInNewTab:!!n.openInNewTab,onClick:n.onClick?function(e){n.onClick()&&e.preventDefault()}:void 0}}):[]}function wn(n){if(n){var e={};return n.onSignIn&&(e.beforeSignIn=function(e){e.preventDefault(),n.onSignIn()}),n.onBeforeSignOut&&(e.beforeSignOutFromApp=function(e){n.onBeforeSignOut(function(e){return{idp:function(e){switch(e){case"msa":return"msa";case"aad":return"aad";case"msaFed":return"msaFed"}}(e.type),authenticatedState:function(e){switch(e){case"notSignedIn":return"3";case"signedIn":return"1";case"signedInIDPOnly":return"2"}}(e.authenticatedState),firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,nickName:e.memberName,tileUrl:e.pictureUrl}}(e.detail.currentAccount))}),n.onEventLog&&(e.controlExpanded=function(){n.onEventLog("DropdownOpen",{type:"bici",ts:v(),uaid:t.id})},e.afterSignOutAndForgetFromIdp=function(e){n.onEventLog("RemoveUser",{userCount:0,idp:e.detail.account.type,currentUser:e.detail.account.memberName})},e.beforeSignIn=function(){n.onEventLog("SignIn",{userCount:0,idp:"",currentUser:""})},e.beforeSwitch=function(e){n.onEventLog("SwitchUser",{userCount:1,idp:1===e.detail.signInType?"Converged":4===e.detail.signInType?"Aad":"Msa",currentUser:e.detail.currentAccount.memberName})},e.afterGetRememberedAccounts=function(e){n.onEventLog("AccountListReady",{duration:0,count:e.detail.rememberedAccounts.length})},e.telemetry=function(e){if(e.detail.data&&e.detail.data.event)try{switch(e.detail.data.event.content.id){case"View Account":n.onEventLog("ViewAccount",{userCount:1,currentUser:"",idp:""});break;case"Sign Out":n.onEventLog("SignOutAll",{userCount:0,currentUser:""});break;case"Initial Collapsed":n.onEventLog("HeaderReady",{duration:0}),n.onEventLog("DropdownReady",{duration:0})}}catch(e){}}),e}}function bn(e){if(!e||!e.idp)return!1;switch(e.idp){case"aad":return function(e){return e&&null!=e.memberName&&0<e.memberName.length}(e);case"msa":case"msaFed":return function(e){return e&&null!=e.memberName&&0<e.memberName.length}(e)}}function Sn(e){if(bn(e))switch(e.idp){case"aad":return function(e){return{type:"aad",authenticatedState:En(e.authenticatedState),displayName:e.displayName,firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,orgName:e.orgName,orgLogoUrl:e.orgLogoUrl,pictureUrl:e.tileUrl,roleName:e.roleName,sessionId:e.sessionId,profile:An(e)}}(e);case"msa":return function(e){return{type:"msa",authenticatedState:En(e.authenticatedState),firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,pictureUrl:e.tileUrl,cid:e.cid,profile:An(e)}}(e);case"msaFed":return function(e){return{type:"msaFed",authenticatedState:En(e.authenticatedState),displayName:e.displayName,firstName:e.firstName,lastName:e.lastName,memberName:e.memberName,orgName:e.orgName,orgLogoUrl:e.orgLogoUrl,pictureUrl:e.tileUrl,roleName:e.roleName,sessionId:e.sessionId,cid:e.cid,profile:An(e)}}(e)}}function En(e){switch(e.toString()){case"3":return"notSignedIn";case"1":return"signedIn";case"2":return"signedInIDPOnly";default:return"notSignedIn"}}function An(e){return e.nickName&&""!==e.nickName.trim()?{profileName:e.nickName||"",profilePictureUrl:e.tileUrl||""}:void 0}p.MSA=p.MSA||{};var Tn=p.MSA.MeControl=p.MSA.MeControl||{};var Nn=tn(),In=an();var Pn,Mn,On,Dn={setActiveUser:Un("setActiveUser"),setExtensibleLinks:Un("setExtensibleLinks"),refreshUserPicture:Un("refreshUserPicture"),setUserPicture:Un("setUserPicture"),setMobileState:Un("setMobileState"),openCloseDropdown:Un("openCloseDropdown")};function Un(t){var r=Nn.handleCall(t);return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];qe({eventType:"PartnerApiCall",method:"V1:"+t,params:i(e)}),r.apply(void 0,e)}}on=function(e){In(e);var n=function(t){return{setActiveUser:function(e){var n=Sn(e);n&&t.setActiveAccount(n)},setExtensibleLinks:function(e){t.setCommands(Cn(e))},refreshUserPicture:function(){t.refreshAccountPicture(!0)},setUserPicture:function(e){t.setProfilePicture(e)},setMobileState:function(e){var n;switch(e){case-1:n="auto";break;case 0:case 2:n="standard";break;case 1:n="compressed";break;default:n="auto"}t.setDisplayMode(n)},openCloseDropdown:function(e){}}}(e);Nn.setComponent(n)},Pn=cn,Mn=function(e){We(),qe({eventType:"PartnerApiCall",method:"load",params:e});try{ln(gn(e),"load")}catch(e){return!1}return!0},On=function(t){return new Me(function(e,n){We(),qe({eventType:"PartnerApiCall",method:"loadAsync",params:t}),e(ln(gn(t),"loadAsync"))})},p.MeControlDefine=Ye,p.MeControlImport=$e,hn({API:Pn,Loader:{load:Mn,loadAsync:On},Config:m.Config||{}},{Strings:{addStrings:R}}),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];L.apply(void 0,i([Tn],e))}({API:Dn,Loader:{load:function(e){if(We(),qe({eventType:"PartnerApiCall",method:"loadV1",params:e}),!e)return!1;if(!e.rpData)return!1;try{ln(gn(yn(e)),"loadV1")}catch(e){return!1}return!0}},IDP:{AAD:"aad",MSA:"msa"},AccountType:{AAD:"aad",MSA:"msa",MSA_FED:"msaFed"},AuthState:{SignedIn:1,SignedInIdp:2,NotSignedIn:3},Config:Tn.Config||{}});var xn=p.onMeControlReadyToLoad;return setTimeout(function(){return xn&&xn()},0),t.ME=m,t.MEV1=Tn,t.Promise=Me,t.SyntheticEvent=T,t.SyntheticEventTarget=I,t.addEventWriter=Q,t.addStrings=R,t.assertNever=function(e,n){throw A("Never assertion failed: "+n)},t.assign=L,t.batchEvents=K,t.checkIfCDNDomainExists=B,t.createCV=f,t.createError=A,t.createId=S,t.createPartA=ue,t.extendMe=hn,t.fireEvent=fe,t.flushEvents=Ve,t.getContentJson=function(e){var n={id:e.id,cT:e.type,sN:e.slot,cS:e.source};return JSON.stringify(n,function(e,n){return null==n?void 0:n})},t.getCv=s,t.getOptions=l,t.getPageLocation=y,t.getPageTags=ce,t.getPerfEntries=h,t.getRootDomainUrl=F,t.getStartTime=function(){return fn},t.getString=function(e){var n=(x||m.Config.mkt||"en-US").toLowerCase();return k[n]&&k[n][e]||"ERROR: "+e},t.getTime=v,t.getTimeSince=function(e){return e-ie},t.getTimeSinceStart=dn,t.guid=D,t.hasOwn=U,t.initialize1DS=function(){return new Me(function(r,n){if(ke)r();else{var o=0,t=m.Config.oneDSUrl,e=document.getElementsByTagName("head")[0],i=document.createElement("script");i.async=!0,i.type="text/javascript",i.charset="UTF-8",i.src=t;var a=setTimeout(function(){c(),n(A("OneDS download timed out: "+t,!0))},m.Config.timeoutMs);i.onload=u,i.onerror=function(e){c(),n(A("OneDS failed to download/parse/compile: "+t,!0))},i.crossOrigin="anonymous",e.appendChild(i)}function c(){clearTimeout(a),i&&(i.onerror=i.onload=void 0,i=void 0)}function u(e){o<3?setTimeout(s,0):n("OneDS did not instantiate")}function s(){o++;try{if(!Re.oneDS)throw"oneDS variable is undefined";var e=new Re.oneDS.AppInsightsCore,n=new Re.oneDS.PostChannel,t={instrumentationKey:m.Config.instKey,extensions:[n],extensionConfig:[n.identifier={eventsLimitInMem:50}]};e.initialize(t,[]),ke=e,c(),r()}catch(e){u()}}})},t.loadCss=function(e){var n=document,t=n.createElement("style");t.type="text/css",t.appendChild(document.createTextNode(e));var r=l();r&&r.shadowDOMContainerElement&&r.shadowDOMContainerElement.appendChild?r.shadowDOMContainerElement.appendChild(t):(n.head||n.getElementsByTagName("head")[0]).appendChild(t)},t.logTelemetryEvent=qe,t.mapV1ConfigToV2Config=yn,t.mapV1EventsToV2Events=wn,t.mapV1ExtensibleLinksToV2Commands=Cn,t.mapV1UserDataToV2Account=Sn,t.meImport=$e,t.perfNow=g,t.requestAnimationFrame=e,t.scrubUrl=$,t.setCurrentLang=function(e){x=e.toLowerCase()},t.setCv=function(e){u=f(e)},t.setEventCreator=se,t.setOptions=d,t.setUpTelemetry=Je,t.showHeaderNoJs=pn,t.timeout=He,t.toJsonable=function(e){var n={},t=e;return Object.getOwnPropertyNames(e).forEach(function(e){return n[e]=t[e]}),n},t.updateMoment=function(e,n){var t=e?1:0,r=n-t;re.counts=t+"-"+r,re.current=e},t.v1UserDataIsUseable=bn,t.vortexEndpoint=W,t.w=p,t.writeEvent=Y,t}({}),MeControlDefine("meInline",["exports"],function(e){var n=MeControl.WebInline;n.assign(e,n)});
//# sourceMappingURL=meInlineBackCompat.min.js.map
