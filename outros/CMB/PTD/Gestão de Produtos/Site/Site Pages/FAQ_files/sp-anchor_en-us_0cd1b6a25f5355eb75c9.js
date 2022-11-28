define("bdb0f5dd-3bb4-4b93-b12a-71aa9e20bb09_0.10.9",["tslib","@microsoft/office-ui-fabric-react-bundle","@microsoft/sp-core-library","react","@microsoft/load-themed-styles","@microsoft/sp-diagnostics","@ms/odsp-utilities-bundle"],function(n,a,i,r,o,s,c){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="mwqp")}({"17wl":function(e,t){e.exports=n},KL1q:function(e,t){e.exports=a},UWqr:function(e,t){e.exports=i},cDcd:function(e,t){e.exports=r},jOlS:function(e,t){e.exports=o},mGD9:function(e){e.exports=JSON.parse('{"e":"Permalink for {0}"}')},mwqp:function(e,t,n){"use strict";n.r(t),n.d(t,"anchorServiceManager",function(){return c}),n.d(t,"AnchorZone",function(){return I}),n.d(t,"HiddenAnchorZone",function(){return x});var a=n("ut3N"),i=n("17wl"),r=n("UWqr"),o=function(){function e(){var t=this;this._componentIdToAnchorDataMap=new Map,this._anchorIdToAnchorDataMap=new Map,this.register=function(n,o){r.Validate.isNonemptyString(n,"uniqueId"),r.Validate.isNotNullOrUndefined(o,"anchorList"),t._componentIdToAnchorDataMap.set(n,o.map(function(e){return Object(i.__assign)(Object(i.__assign)({},e),{anchorId:void 0})})),a._TraceLogger.logVerbose(e._logSource,"Component '".concat(n,"' registered with ").concat(o.length," anchors"))},this.unregister=function(n){var i=t._componentIdToAnchorDataMap.get(n);i?(i.forEach(function(e){e.anchorId&&(e.onDisposeAnchorId&&e.onDisposeAnchorId(e.anchorTargetElement,e.anchorId),t._anchorIdToAnchorDataMap.delete(e.anchorId))}),t._componentIdToAnchorDataMap.delete(n),a._TraceLogger.logVerbose(e._logSource,"Successfully unregistered component '".concat(n,"'"))):a._TraceLogger.logError(e._logSource,new Error("Trying to unregister a non-exists component '".concat(n,"'")))},this.finishRegistration=function(){a._TraceLogger.logVerbose(e._logSource,"finishRegistration invoked");var n=[];t._componentIdToAnchorDataMap.forEach(function(e){return n=n.concat(e)}),n.sort(e._compareAnchorLocation),t._anchorIdToAnchorDataMap.clear();var i=new Map,o={action:"AnchorsUpdated",sortedAnchors:n.map(function(n){var r=e.sanitizeAnchorId(n.suggestedAnchorId);return r||(r=e.DEFAULT_ANCHOR_NAME),r=t._handleCollision(r,i),n.anchorId=r,t._anchorIdToAnchorDataMap.set(r,n),n.onReceiveAnchorId&&n.onReceiveAnchorId(n.anchorTargetElement,r),a._TraceLogger.logVerbose(e._logSource,"Anchor ID '".concat(r,"' allocated")),{anchorText:n.suggestedAnchorId,anchoredElementTagName:n.anchorTargetElement.tagName,anchorId:r}})};r._SPEventManager.instance.raiseStickyEvent("anchorEvent",o)}}return e.sanitizeAnchorId=function(t){return t?t.trim().toLowerCase().replace(e._unsafeCharacters,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").substring(0,e.MAX_ID_LENGTH):""},e._compareAnchorLocation=function(e,t){return e.anchorTargetElement.compareDocumentPosition(t.anchorTargetElement)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1},e.prototype.getElementByAnchorId=function(e){var t=this._anchorIdToAnchorDataMap.get(e);return t&&t.anchorTargetElement},e.prototype.scrollTo=function(e){var t,n=this._anchorIdToAnchorDataMap.get(e);return!!n&&(n.anchorTargetElement.scrollIntoView(),null===(t=n.onScrollToAnchorId)||void 0===t||t.call(n,n.anchorTargetElement,e),!0)},e.prototype._handleCollision=function(e,t){for(var n=e,a=0;t.has(n);)n=(e=n)+"-"+(a=t.get(e)||0);return t.set(e,a+1),t.set(n,1),n},e._logSource=a._LogSource.create("AnchorService"),e._unsafeCharacters=/[`"'<>#%{}|\\^~\/\[\];?:@=&\s\0]/g,e.MAX_ID_LENGTH=128,e.DEFAULT_ANCHOR_NAME="anchor",e}(),s=function(){function e(){var e=this;this._register=function(t,n){e._anchorService.register(t,n),e._pendingRegistrations.delete(t),e._checkFinishRegistration()},this._unregister=function(t){e._anchorService.unregister(t),e._pendingRegistrations.delete(t),e._checkFinishRegistration()},this._refresh=function(t,n){e._anchorService.register(t,n),e._pendingRegistrations.delete(t),e._checkFinishRegistration()},this._pendingFinishRegistration=!1,this._pendingRegistrations=new Set,this._anchorService=new o}return e.prototype.initialize=function(e){var t=this;e.forEach(function(e){t.handleAnchorEvent(e)})},e.prototype.scrollTo=function(e){var t=this;return new Promise(function(n,a){var i=function(){t._anchorService.scrollTo(e)?n():a(new Error("Failed to find anchor to scroll"))};t._pendingFinishRegistration?t._resolveScroll=i:i()})},e.prototype.handleAnchorEvent=function(e){switch(e.action){case"ReserveRegistration":this._reserveRegistration(e.uniqueId);break;case"Register":this._register(e.uniqueId,e.anchorList);break;case"Unregister":this._unregister(e.uniqueId);break;case"Refresh":this._refresh(e.uniqueId,e.anchorList)}},e.prototype._reserveRegistration=function(e){this._pendingRegistrations.add(e)},e.prototype._checkFinishRegistration=function(){this._pendingRegistrations.size||(this._anchorService.finishRegistration(),this._pendingFinishRegistration=!1,this._resolveScroll&&(this._resolveScroll(),this._resolveScroll=void 0))},e}(),c=new(function(){function e(){var e=this;this.componentId="bdb0f5dd-3bb4-4b93-b12a-71aa9e20bb09",this.instanceId="e1163200-0719-4a64-9f9a-bc6592953704",this.isDisposed=!1,this._anchorServiceQueue=new s,this.reserve=function(t){e._anchorServiceQueue.handleAnchorEvent({action:"ReserveRegistration",uniqueId:t})},this.raiseAnchorEvent=function(t){e._anchorServiceQueue.handleAnchorEvent(t)},this._scroll=function(){if(e._anchorIdToScroll){var t=e._anchorServiceQueue.scrollTo(e._anchorIdToScroll);return e._anchorIdToScroll=void 0,t}return Promise.reject("AnchorId is undefined, multiple scroll Task planned")}}return e.prototype.scrollTo=function(e,t){var n=this;if(void 0===t&&(t=5e3),e||!(t<-1)){var i,r;this._anchorIdToScroll=e;var o=-1!==t?new Promise(function(e){setTimeout(function(){e("timeout")},t)}):void 0,s=new Promise(function(e,t){i=function(){return e("execute")},r=function(){return t("cancel")}}),c=new a._QosMonitor("AnchorService");return{execute:i,cancel:r,scrollPromise:Promise.race([o,s]).then(function(e){return n._scroll().then(function(){"timeout"===e?c.writeExpectedFailure("TimeoutTriggerScroll"):c.writeSuccess()},function(t){c.writeUnexpectedFailure("FailedToScroll",t,{message:e})})}).catch(function(e){c.writeExpectedFailure("CancelScroll",e)})}}},e}()),d=n("cDcd"),l=n.n(d),u=n("KL1q"),f="data-sp-anchor-id",p=n("y88i"),m=n("mGD9"),_=function(e,t,n,i){var o=new p.Uri(window.location.href);o.setFragment(encodeURIComponent(n));var s=o.toString();e.setAttribute("id",n),t.setAttribute("role","link"),t.setAttribute("aria-label",r.Text.format(m.e,i)),t.setAttribute(f,n),t.setAttribute("href",s),t.setAttribute("target","_self"),t.onclick=function(){a._EngagementLogger.logEvent("AnchorZone.ClickAnchor")}},h=function(e){return{focusBorder:{"&:focus:not(:active) i":{border:"1px solid",borderColor:null==e?void 0:e.semanticColors.focusBorder}}}},b=n("jOlS");b.loadStyles(".b_b_1310c973{display:contents}.c_b_1310c973{opacity:0;text-decoration:none;outline:none;position:absolute}.c_b_1310c973:focus,:focus>.c_b_1310c973,:hover>.c_b_1310c973{transition:.1s linear;opacity:1}[dir=ltr] .c_b_1310c973.e_b_1310c973{margin-left:5px}[dir=rtl] .c_b_1310c973.e_b_1310c973{margin-right:5px}.c_b_1310c973.e_b_1310c973 .f_b_1310c973{font-style:normal;padding:3px;line-height:1}.c_b_1310c973.e_b_1310c973 .f_b_1310c973.g_b_1310c973{vertical-align:middle}.c_b_1310c973.e_b_1310c973.h_b_1310c973:focus:not(:active) .f_b_1310c973{border:1px solid #605e5c}[dir=ltr] .c_b_1310c973:not(.e_b_1310c973) .f_b_1310c973{margin-left:8px}[dir=rtl] .c_b_1310c973:not(.e_b_1310c973) .f_b_1310c973{margin-right:8px}.f_b_1310c973{font-style:normal;font-weight:400;font-size:16px}",!0);var g="c_b_1310c973",v="f_b_1310c973";function y(){return r._SPKillSwitch.isActivated("21a5c693-298f-4811-bfa7-2bde29fa2a82")}function S(){return r._SPKillSwitch.isActivated("54a06e8e-da4b-49fa-b28c-76d6e3bc75f1")}function D(){return r._SPKillSwitch.isActivated("ff318617-20eb-4b97-bd02-09d26024cef4")}var I=function(e){function t(){var n=null!==e&&e.apply(this,arguments)||this;return n.instanceId="4e00f196-1bdc-4f2a-8581-6075c77437c6",n._addAnchorIcon=function(e,t,a){if(!n.props.hideAnchorIcon){var i=n._insertAnchorIcon(e);try{_(e,i,t,a)}catch(e){}}},n._insertAnchorIcon=function(e){var a,i=void 0;if(y()){for(var r=e.childElementCount,o=0;o<r;o++){var s=e.children[o];if(t._isElementAnchorIcon(s)){i=s;break}if("BR"===s.tagName){i=t._anchorIconElement,e.insertBefore(i,s);break}}i||(i=t._anchorIconElement,e.appendChild(i))}else{var c=e.nextElementSibling;if(c&&t._isElementAnchorIcon(c))i=c;else{if(i=t._anchorIconElement,!D()){var d=Object(u.mergeStyleSets)(h(n.props.variantTheme));i.classList.add(d.focusBorder)}var l,f=document.createElement("div");null===(a=e.parentElement)||void 0===a||a.insertBefore(f,e),f.appendChild(e),f.appendChild(i),S()||(l=(e.clientHeight-i.offsetHeight)/2);var p=document.createElement("span");p.className=g,n._insertElementToAnchoredElement(p,e),f.onmouseover=function(){if(S())i.style.left="".concat(p.offsetLeft,"px"),i.style.top="".concat(p.offsetTop,"px");else{var e=Object(u.getRTL)();i.style.left="".concat(e?p.offsetLeft-i.offsetWidth-5:p.offsetLeft,"px"),i.style.top="".concat(p.offsetTop+l,"px")}}}}return i},n._insertElementToAnchoredElement=function(e,t){for(var n=t.childElementCount,a=0;a<n;a++){var i=t.children[a];if("BR"===i.tagName)return void t.insertBefore(e,i)}t.appendChild(e)},n._removeAnchorIcon=function(e,n){e.lastElementChild&&t._isElementAnchorIcon(e.lastElementChild)&&e.removeChild(e.lastElementChild)},n}return Object(i.__extends)(t,e),Object.defineProperty(t,"_anchorIconElement",{get:function(){if(!t._anchorIconElementCache){var e=document.createElement("i"),n=S()?v:Object(u.css)(v,"g_b_1310c973");e.className=Object(u.css)(n,Object(u.getIconClassName)("Link")),e.setAttribute("aria-hidden","true"),t._anchorIconElementCache=document.createElement("a"),t._anchorIconElementCache.classList.add(g,"e_b_1310c973"),D()&&t._anchorIconElementCache.classList.add("h_b_1310c973"),t._anchorIconElementCache.appendChild(e)}return t._anchorIconElementCache.cloneNode(!0)},enumerable:!1,configurable:!0}),t._isElementAnchorIcon=function(e){return e.hasAttribute(f)&&e.classList.contains(g)},t._isInlineImageEnabled=function(){return r._BrowserDetection.getBrowserInformation().browser!==r._Browser.IE},t.prototype.componentDidMount=function(){this._registerAnchors()},t.prototype.componentDidUpdate=function(){this._registerAnchors(!0)},t.prototype.componentWillUnmount=function(){this._unregister(this.props.componentId)},t.prototype.render=function(){return t._isInlineImageEnabled()?(this.props.elementForSearch&&this._registerAnchors(!0),d.createElement(d.Fragment,null)):d.createElement("div",{className:r._SPKillSwitch.isActivated("e17386a1-e2f5-44c9-aa64-7d8510c36c26")?void 0:"b_b_1310c973",ref:this._resolveRef("_wrapperElement")},this.props.children)},t.prototype._registerAnchors=function(e){var n=this;void 0===e&&(e=!1);var a=t._isInlineImageEnabled()&&this.props.elementForSearch||this._wrapperElement;if(a){var i=[].slice.call(a.querySelectorAll(this.props.anchorElementSelector));this._register(this.props.componentId,e,i.map(function(e,t){var a=n.props.suggestAnchorId?n.props.suggestAnchorId(e,t):e.textContent||"";return{suggestedAnchorId:a,anchorTargetElement:e,onReceiveAnchorId:function(e,t){return n._addAnchorIcon(e,t,a)},onDisposeAnchorId:n._removeAnchorIcon}}))}},t.prototype._register=function(e,t,n){var a={action:t?"Refresh":"Register",uniqueId:e,anchorList:n};c.raiseAnchorEvent(a)},t.prototype._unregister=function(e){var t={action:"Unregister",uniqueId:e};c.raiseAnchorEvent(t)},t}(u.BaseComponent);function x(e){var t=e.anchorElementSelector,n=e.componentId,a=e.elementForSearch,i=e.onShow,r=e.suggestAnchorId;l.a.useEffect(function(){c.reserve(n)},[]);var o=l.a.useMemo(function(){return[].slice.call(a.querySelectorAll(t)).map(function(e){return[e,document.createElement(e.tagName)]})},[a,t]);l.a.useEffect(function(){return c.raiseAnchorEvent({action:"Register",uniqueId:n,anchorList:o.map(function(e,t){var n=e[0],a=e[1],o=r?r(n,t):n.textContent||"";return{suggestedAnchorId:o,anchorTargetElement:a,onReceiveAnchorId:function(e,t){var n=document.createElement("a");_(e,n,t,o),e.append(n)},onDisposeAnchorId:function(e,t){e.remove()},onScrollToAnchorId:function(e,t){null==i||i()}}})}),function(){c.raiseAnchorEvent({action:"Unregister",uniqueId:n})}},[r,n,c,o,i]);var s=l.a.useRef(void 0),d=l.a.useCallback(function(e){s.current&&o.forEach(function(e){return e[0],e[1].remove()}),e&&o.forEach(function(t){t[0];var n=t[1];return e.append(n)}),s.current=e},[o]);return l.a.createElement("div",{className:"a_a_1310c973",ref:d})}b.loadStyles(".a_a_1310c973{height:0}",!0)},ut3N:function(e,t){e.exports=s},y88i:function(e,t){e.exports=c}})});