(window.msfast_searchux_sb_jsonp=window.msfast_searchux_sb_jsonp||[]).push([["cpl-tooltip"],{"00m5":function(t,e,r){"use strict";r.r(e);var n=r("6JqZ"),a=r("GtFt"),i=r("617D"),c=r("sRpU"),o=Object(i.a)({classNames:function(t){var e,r;return!t.empty&&t.active?null===(e=t.styles)||void 0===e?void 0:e.submitSearchButton:null===(r=t.styles)||void 0===r?void 0:r.submitSearchButtonInactive},buttonName:a.h,searchIconContext:{SearchIcon:c.a}}),u=r("n5ha"),s=(Object(u.declareString)("search-box-container-plugins.searchux.strings.SearchBoxMagnifierSubmitButton.label")),l=r("wuwP"),f=r("QlCf"),d=r("6MuY"),p=r("83V4"),v=r("bwaI"),b=r("GOdE"),g=function(t){return Object(l.__assign)(Object(l.__assign)({},Object(b.c)(t)),{fontSize:t.fonts.large.fontSize,svg:Object(l.__assign)(Object(l.__assign)({},Object(v.c)(t)),Object(f.c)({color:"black",fill:"black"}))})},h=function(t){return Object(l.__assign)(Object(l.__assign)({},Object(b.b)(t)),{fontSize:t.fonts.large.fontSize,svg:Object(l.__assign)({},Object(v.b)(t))})},m=Object(d.b)((function(t){return Object(p.b)({submitSearchButton:g(t),submitSearchButtonInactive:h(t)})}));e.default=Object(n.a)(o,m,s)},"25hB":function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c}));var n=r("KmCS"),a=Object(n.regs)("searchux.instrumenter",void 0,{required:!0,tags:["global","deprecated"]}),i=function(){try{var t=a();return t&&t.conversationManager}catch(t){return}};function c(t){try{var e=i(),r=void 0;return{conversationId:(r="serp"===t?e.getLastSubmittedConversation():e.getActiveConversation()).conversationId,logicalId:r.getLogicalSearchId(t)}}catch(t){return{conversationId:void 0,logicalId:void 0}}}},"29hz":function(t,e,r){"use strict";r.r(e);var n=r("wuwP"),a=r("GtFt"),i=r("ftI+"),c=r("kZ6q"),o=r("cDcd"),u=r("R0Os");var s=Object(u.a)(a.k,"startButton",(function(t){var e,r=Object(n.__read)(o.useState(),2),a=r[0],u=r[1],s=null===(e=t.searchBox)||void 0===e?void 0:e.getInputElement();return o.useEffect((function(){if(a&&s){var t=[];return t.push({eventName:"mouseenter",callback:function(){return!s.value&&function(t){var e=t.value;t.value=t.placeholder;var r=t.scrollWidth>t.clientWidth;return t.value=e,r}(s)&&a.show()}}),t.push({eventName:"mouseleave",callback:function(){return a.dismiss()}}),t.forEach((function(t){return s.addEventListener(t.eventName,t.callback)})),function(){t.forEach((function(t){return s.removeEventListener(t.eventName,t.callback)}))}}}),[a]),s?o.createElement(i.a,{content:s.getAttribute("placeholder")||"",directionalHint:c.a.bottomCenter,componentRef:function(t){return t&&!a&&u(t)},tooltipProps:{calloutProps:{hidden:t.active},targetElement:s}}):o.createElement(o.Fragment,null)}));e.default=s},"2rja":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("2CHH");function a(t,e){var r=t.monitorName,a=t.factoryErrorPropExtractor,c=t.successPropExtractor,o=t.failurePropExtractor;return function(t){var u,s=Math.round(performance.now()),l=Object(n.getDispatcher)();function f(t,e){var n=Math.round(performance.now())-s;l.dispatch({eventType:"QOSSTOP",name:"ResponseReceived",result:t,nameDetail:r,startTimestamp:s,totalTime:n,properties:{LogicalId:e.properties&&e.properties.logicalSearchId,ConversationId:e.properties&&e.properties.conversationId,Version:e.version,TraceId:e.traceId,Status:e.status,ProviderName:e.providerName,Latency:n,properties:JSON.stringify(e.properties)}})}l.dispatch({eventType:"QOSSTART",name:"ResponseReceived",nameDetail:r,timestamp:s});try{u=e(t)}catch(t){return f("FAILURE",i(t,a,{status:0,properties:{promiseFactoryFailed:!0}})),Promise.reject(t)}return u.then((function(t){return f("SUCCESS",i(t,c,{status:0,properties:{successExtractorFailed:!0}})),Promise.resolve(t)}),(function(t){return f("FAILURE",i(t,o,{status:0,properties:{failureExtractorFailed:!0}})),Promise.reject(t)}))}}var i=function(t,e,r){try{return(e||c)(t)}catch(t){return r}},c=function(){return{}}},"7w/n":function(t,e,r){"use strict";r.r(e),r.d(e,"registration",(function(){return b}));var n=r("wuwP"),a=r("rpSO"),i=r("KmCS"),c=r("F6lS"),o=r("POWj"),u=r("bs+K"),s=r("a7o/"),l=r("ohlq"),f=r("xo1z"),d=r("qGDX"),p=r("q9uV"),v=function(){function t(t,e,r,n){this.config=t,this.fetcher=e,this.site=r,this.conversation=n}return t.prototype.getId=function(){return"AutoSuggestSiteScopedSiteSuggestionProvider"},t.prototype.createStream=function(t){return Object(d.b)(this.fetcher,"Site",{searchText:t,entityTypes:Object(p.b)(this.config,t),scenario:Object(f.a)(Object(l.a)()),appOverride:Object(o.a)(),logicalSearchId:this.conversation&&this.conversation.getLogicalSearchId("sb"),conversationId:this.conversation&&this.conversation.conversationId}).select((function(e){var r=e.AccessUrl,n=e.Acronym,a=e.Color,i=e.Title,c=e.logProps,o=e.originalLogicalSearchId,l=e.entityType;return{id:r,acronym:n,color:a,searchText:t,title:Object(s.c)([t],Object(u.a)(i)),url:r,secondaryDisplayText:r,displayText:Object(s.c)([t],Object(u.a)(i)),logProps:c,originalLogicalSearchId:o,entityType:l}}))},t=Object(n.__decorate)([Object(p.a)({entityType:"Site"}),Object(n.__param)(0,Object(a.a)("config")),Object(n.__param)(1,Object(a.a)("fetcher")),Object(n.__param)(2,Object(a.a)("site")),Object(n.__param)(3,Object(a.a)("conversation"))],t)}();e.default=v;var b=Object(i.regs)("".concat(c.a,".autosuggestsitescopedsite"),v)},AvfC:function(t,e,r){"use strict";var n=r("UlRC"),a=r("EJZo"),i=r("GWPu"),c=r("9PIf");e.a=function(t,e,r){var n,o=Object(a.a)(t)?t:[t],u=e||o[0],s=r?Object(a.a)(t)?(n=r,function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.call(void 0,Object(i.a)(t))}):r:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t[0]},l=function(t,e){try{var r=[];return o.forEach((function(e){r.push(Object(c.a)(t,e))})),e[u]=s.apply(null,r),e}catch(t){throw new Error("Map source members '"+o.join("', '")+"' into target member '"+u+"' "+t.message)}};return l.getSources=function(){return o},l.getTarget=function(){return e||o[0]},l.getMapper=function(){return r},l},n.Observable.prototype.propmap=function(t){var e=this,r=t.filter((function(t){return t.subscribe})),a=t.filter((function(t){return!t.subscribe})),i=n.Observable;return i.createWithDisposable((function(t){return e.selectMany((function(t){return i.merge(r).merge(i.fromArray(a)).scan({},(function(e,r){return r(t,e)})).takeLast(1)})).subscribe(t)}))}},DHVw:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("wuwP"),a=r("3WoE");function i(t){return new Promise((function(e,r){var i=new(t.XMLHttpRequest||XMLHttpRequest);i.requestLogData=Object(n.__assign)({},t.requestLogData),i.open(t.method,t.url,!0),t.timeoutMs&&(i.timeout=t.timeoutMs),t.withCredentials&&(i.withCredentials=t.withCredentials);var c=t.headers||{};Object.keys(c).map((function(t){i.setRequestHeader(t,c[t])})),i.onload=function(){4===i.readyState&&(Object(a.a)(i.status)?e(i):r(i))},i.onerror=function(){r(i)},i.ontimeout=function(){r(i)};var o=t.body||null;i.send(o)}))}},DphO:function(t,e,r){"use strict";r.r(e);var n=r("wuwP"),a=r("cDcd"),i=r("TkU3"),c=r("4Zy8");e.default=function(t){var e=t.officeLocation,r=i.g({name:t.displayName});return a.createElement(c.a,Object(n.__assign)({ariaLabel:i.d(r,e,!1),captionText:r},t),a.createElement("span",null,e))}},DtAH:function(t,e,r){"use strict";r.r(e),r.d(e,"registration",(function(){return c}));var n=r("1USP"),a=Object(n.a)({entityType:"Text"}),i=a.provider,c=a.registration;e.default=i},KQxh:function(t,e,r){"use strict";r.r(e);var n=r("6JqZ"),a=r("Y66L"),i=r("bwaI");e.default=Object(n.a)(a.a,i.a)},QZIT:function(t,e,r){"use strict";r.r(e),r.d(e,"registration",(function(){return c}));var n=r("1USP"),a=Object(n.a)({entityType:"Site"}),i=a.provider,c=a.registration;e.default=i},SQh4:function(t,e,r){"use strict";e.a=function(t){var e=null==t?0:t.length;return e?t[e-1]:void 0}},"VkO+":function(t,e,r){"use strict";e.a=function(t){return null===t}},"d/aS":function(t,e,r){"use strict";e.a=function(t,e,r,n){for(var a=t.length,i=r+(n?1:-1);n?i--:++i<a;)if(e(t[i],i,t))return i;return-1}},dG3J:function(t,e,r){"use strict";r.r(e),r.d(e,"registration",(function(){return c}));var n=r("1USP"),a=Object(n.a)({entityType:"Topic"}),i=a.provider,c=a.registration;e.default=i},deeS:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("25hB");function a(t){var e=t&&t.conversation;if(!e)try{var r=Object(n.a)();e=r&&r.getActiveConversation()}catch(t){return}return e}},e24R:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("KmCS"),a=r("LLyz"),i=r("rcVC");function c(t){return Object(n.regs)("searchux.api.".concat(t,".tokenProvider"),(function(t){return Promise.resolve(null)}),{required:!1,validator:i.a,wrapper:function(e){return function(){for(var r,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];try{r=e.apply(null,n)}catch(e){Object(a.a)("Token provider '".concat(t,"' failed with an error."))}var c="function"==typeof r.then;return c?r:Object(a.a)("Token provider '".concat(t,"' did not provide a promise."))}},tags:["session","deprecated"]})}},"g+lP":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("KmCS"),a=Object(n.regs)("searchux.personalUrl","",{required:!1,tags:["session","deprecated"]})},uCUg:function(t,e,r){"use strict";r.r(e),r.d(e,"registration",(function(){return c}));var n=r("1USP"),a=Object(n.a)({entityType:"File"}),i=a.provider,c=a.registration;e.default=i}}]);