(window.msfast_searchux_sb_jsonp=window.msfast_searchux_sb_jsonp||[]).push([["aria"],{"617D":function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("wuwP"),o=n("4zpW"),i=n("rP0q"),c=n("R0Os"),a=n("cDcd"),s=n("3twC"),u=n("hrgu"),l=n("YpVp"),f=n("JnXn");function p(t){return Object(i.a)(Object(c.b)()(function(t){var e=t.classNames,n=t.buttonName,o=t.searchIconContext,i=t.createOnMouseDownAction;function c(t,n){var r=t.styles,o=Object(u.a)().SearchIcon;return a.createElement("button",{onClick:function(e){var r,o;d&&(null===(r=t.onAction)||void 0===r||r.call(t,d(n))),null===(o=t.onClick)||void 0===o||o.call(t,e)},className:e(t),title:t.label,"aria-label":t.label,onMouseDown:f.a,"data-tab":!t.empty&&t.active},a.createElement(o,{className:null==r?void 0:r.icon}))}var p=Object(s.a)("endButton",n)((function(t){return o?a.createElement(l.a,{value:o},a.createElement(c,Object(r.__assign)({},t))):a.createElement(c,Object(r.__assign)({},t))})),d=null==i?void 0:i(p,"onClick");return p}(Object(r.__assign)(Object(r.__assign)({},t),{createOnMouseDownAction:o.a}))))}},"6AAz":function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var s,u=[],l=!1,f=-1;function p(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&d())}function d(){if(!l){var t=a(p);l=!0;for(var e=u.length;e;){for(s=u,u=[];++f<e;)s&&s[f].run();f=-1,e=u.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||l||a(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"7ueh":function(t,e,n){"use strict";n.r(e);var r=n("wuwP"),o=n("rpSO"),i=n("KmCS"),c=n("qTII"),a=n("eTzd"),s=n("UlRC"),u=(n("Jvpx"),n("AvfC")),l=[Object(u.a)("id","id"),Object(u.a)("title","title"),Object(u.a)("webUrl","url"),Object(u.a)("firstPublishedDate","lastModifiedTime"),Object(u.a)("createdBy","lastModifiedBy",(function(t){return"object"==typeof t&&"object"==typeof t.user?t.user.displayName:void 0}))],f=n("XgOi"),p=n("/hiP"),d=n("DHVw");var h="fetchVRoomNews",g=Object(p.a)((function(t){return e=function(e){var n=e.sitePath,o=e.locale;return{url:"".concat(n,"/_api/v2.1/getNewsFeed?section=SharePointNewsFeedTargeted&preferredLanguage=").concat(o),method:"GET",headers:Object(r.__assign)({Accept:"application/json;odata=verbose",Caller:"SearchBox",scenario:"SPSearchBox"},t?{Authorization:"Bearer ".concat(t)}:{})}},function(t){return(t.prefetchFetch||d.a)(e(t))};var e}),{monitorName:h,cacheId:h,cacheVersion:"0",cacheItemLifetime:18e5,cacheKeyExtractor:function(t){return{sitePath:t.sitePath,locale:t.locale}}}),b=function(){function t(t){this.options=t}return t.prototype.createStream=function(t){var e=new f.a;return s.Observable.fromPromise(g({sitePath:this.options.site.sitePath,locale:this.options.locale,tokenProvider:this.options.tokenProvider,prefetchTimeSinceOrigin:this.options.now,prefetchUserInfoPuid:this.options.puid,prefetchCacheCollection:this.options.cache,prefetchFetch:this.options.fetch,prefetchDispatch:this.options.dispatch}).then((function(t){return JSON.parse(t.xhr.responseText)}))).selectMany((function(t){var e=t.value;return s.Observable.fromArray(e)})).propmap(l).specFilter(t,e)},t}(),m=n("F6lS"),v=n("Xopu"),O="".concat(m.a,".").concat(v.q),_=function(t){function e(e){return t.call(this,{site:e,locale:Object(c.a)(),tokenProvider:Object(a.g)()})||this}return Object(r.__extends)(e,t),e.prototype.getId=function(){return"VRoomNewsProvider"},e=Object(r.__decorate)([Object(r.__param)(0,Object(o.a)("site"))],e)}(b);e.default=_;Object(i.regs)(O,_)},Az8T:function(t,e,n){"use strict";var r=n("Rcmk"),o=n("3MGJ"),i=n("n/Gf");e.a=function(t,e){var n={};return e=Object(i.a)(e,3),Object(o.a)(t,(function(t,o,i){Object(r.a)(n,o,e(t,o,i))})),n}},E8GB:function(t,e,n){"use strict";n.r(e),n.d(e,"getAppData",(function(){return a}));var r=n("wuwP"),o=n("rpSO"),i=n("KmCS"),c=n("F6lS"),a=Object(i.regs)("searchux.appData",[],!1),s=function(){function t(t){this.rx=t}return t.prototype.getId=function(){return"ThirdPartyAppsFastSuggestionProvider"},t.prototype.createStream=function(t){var e=this;return this.rx.Observable.fromPromise(Promise.resolve(a()).then((function(e){return e.map((function(e){return Object(r.__assign)({id:e.Id,url:e.LaunchFullUrl,title:e.Title,searchText:t,displayText:e.Title,secondaryDisplayText:e.Subtitle,iconClass:e.IconAnonymousUrl?"":e.FontIconCss||"ms-Icon  ms-Icon--OfficeAddinsLogo",color:e.BackgroundColor},{type:"app",iconUrl:e.IconAnonymousUrl})}))}))).select((function(e){return e.filter((function(e){return!t||e.displayText&&-1!==e.displayText.toLocaleLowerCase().indexOf(t.toLocaleLowerCase().trim())}))})).selectMany((function(t){return e.rx.Observable.fromArray(t)}))},t=Object(r.__decorate)([Object(r.__param)(0,Object(o.a)("rxjs"))],t)}();e.default=s,Object(i.regs)("".concat(c.a,".suiteuxThirdPartyAppsSuggestionProvider"),s)},MZP7:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("cDcd"),o=n("oQm7"),i=n("zMcp"),c=[16,20,24,32,40,48,64,96];function a(t,e){void 0===t&&(t="https://spoppe-b.azureedge.net/files/fabric-cdn-prod_20220309.001/assets/item-types/"),c.forEach((function(n){!function(t,e,n){var c=Object.keys(i.a),a={};c.forEach((function(n){var o=t+e+"/"+n;a[n+e+"_png"]=r.createElement("img",{src:o+".png",alt:""}),a[n+e+"_svg"]=r.createElement("img",{src:o+".svg",alt:""}),a[n+e+"_1.5x_png"]=r.createElement("img",{src:t+e+"_1.5x/"+n+".png",height:"100%",width:"100%",alt:""}),a[n+e+"_1.5x_svg"]=r.createElement("img",{src:t+e+"_1.5x/"+n+".svg",height:"100%",width:"100%",alt:""}),a[n+e+"_2x_png"]=r.createElement("img",{src:t+e+"_2x/"+n+".png",height:"100%",width:"100%",alt:""}),a[n+e+"_3x_png"]=r.createElement("img",{src:t+e+"_3x/"+n+".png",height:"100%",width:"100%",alt:""}),a[n+e+"_4x_png"]=r.createElement("img",{src:t+e+"_4x/"+n+".png",height:"100%",width:"100%",alt:""})})),Object(o.E)({fontFace:{},style:{width:e,height:e,overflow:"hidden"},icons:a,mergeImageProps:!0},n)}(t,n,e)}))}},PWAA:function(t,e,n){"use strict";n.r(e);var r=n("Z/gI"),o=n("AJTS");e.default=Object(r.a)(o.a)},PnaX:function(t,e,n){"use strict";n.r(e);var r=n("960r"),o={createLogger:function(t){return new r.AWTLogger(t)},flushAndTeardownLogManager:function(){return r.AWTLogManager.flushAndTeardown()},initializeLogManager:function(t,e){return r.AWTLogManager.initialize(t,e)},addNotificationListener:function(t){return r.AWTLogManager.addNotificationListener(t)}};e.default=o},TDQE:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r={borderRadius:"2px 0px 0px 2px",margin:0},o={borderRadius:"0px 2px 2px 0px",margin:0}},bwaI:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"c",(function(){return p}));var r=n("wuwP"),o=n("QlCf"),i=n("TDQE"),c=n("6MuY"),a=n("83V4"),s=n("PS6g"),u="cubic-bezier(.1,.9,.2,1)",l=Object(r.__assign)(Object(r.__assign)({display:"inline-block",border:"none",background:"transparent",outline:"none",verticalAlign:"top",fontSize:"16px",textAlign:"center",cursor:"text",transition:"padding-right ".concat("0.167s"," ").concat(u),backgroundColor:"transparent",paddingLeft:"12px",paddingRight:"8px",paddingTop:"0px",paddingBottom:"0px",margin:0,height:"100% !important"},s.a.IconContainer),{selectors:{"&:active":{outline:"none",border:"none",position:"static",top:0,left:0},"&:hover":{background:"transparent"}}}),f=function(t,e){var n=t.palette;return Object(r.__assign)(Object(r.__assign)(Object(r.__assign)({},o.f),e?{transform:"scale(-1, 1)"}:{}),{transition:"color ".concat("0.167s"," ").concat(u),color:n.themeDarkAlt,fill:n.themeDarkAlt,selectors:Object(r.__assign)({},Object(o.d)({color:n.white,fill:n.white}))})},p=function(t){var e=t.palette;return Object(r.__assign)(Object(r.__assign)({},o.f),{transition:"color ".concat("0.167s"," ").concat(u),color:e.white,fill:e.white})},d=Object(c.b)((function(t){return Object(a.b)(function(t,e){return{magnifierButton:l,icon:f(t,e)}}(t),{magnifierButton:i.b})}));e.a=d},ghw8:function(t,e,n){"use strict";e.a=function(t){for(var e=-1,n=null==t?0:t.length,r=0,o=[];++e<n;){var i=t[e];i&&(o[r++]=i)}return o}},qTII:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"c",(function(){return s}));var r=n("n5ha"),o=n("KmCS"),i=o.regs("searchux.locale","en-US",{required:!0,includeInLogs:!0,tags:["session","deprecated"]}),c=function(){return Object(r.toSupportedLocale)(i(),"en-us")},a=function(t){return o.sets(i.settingName,t),Object(r.setCurrentLocaleForDefaultStringProvider)(t)},s=function(t){var e=c();o.listen(i.settingName,(function(n,o){var i=Object(r.toSupportedLocale)(o,"en-us");i!==e&&t(e=i)}),{skipDefaultValue:!0})}}}]);