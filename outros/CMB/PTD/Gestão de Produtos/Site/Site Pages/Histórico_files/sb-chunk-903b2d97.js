(window.msfast_searchux_sb_jsonp=window.msfast_searchux_sb_jsonp||[]).push([["pro-3spqh"],{"4FZc":function(t,e,n){"use strict";function r(t,e){return"".concat(t,"|").concat(e)}n.d(e,"a",(function(){return r}))},"85Gg":function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return b}));var r=n("INM4"),c=n("KmCS"),o=n("OJcW"),a=n("QHBp"),i=Object(c.regs)("searchux.useStrictSearchCenterUrlValidation",!1,!1),u=Object(c.regs)("searchux.api.sharePointSearchCenter.url","");function s(t){return r.a.concatenate(b(t),a.b)}var f=new RegExp("^(https?://)?((([a-zd]([a-zd-]*[a-zd])*).)+[a-z]{2,}|((d{1,3}.){3}d{1,3}))(:d+)?(/[-a-zd%_.~+]*)*");function b(t){if(!function(t){var e=Object(o.b)(t)?u():t;return!(i()&&!f.test(e))&&/\/search\/?/i.test(e)}(t))return"";var e=Object(o.b)(t)?u().toLowerCase()+"/":t,n=e.lastIndexOf("/search/");return n<0?"":e.substring(0,n+"/search/".length).replace(/\/$/,"")}},AJTS:function(t,e,n){"use strict";function r(t,e,n,r){return r.Observable.merge(n.map((function(t){return r.Observable.merge(t).distinct(e)})))}n.d(e,"a",(function(){return r}))},"CE7+":function(t,e,n){"use strict";function r(t){return t}n.d(e,"a",(function(){return r}))},"K+fw":function(t,e,n){"use strict";n.r(e),n.d(e,"registration",(function(){return h}));var r=n("wuwP"),c=n("rpSO"),o=n("KmCS"),a=n("F6lS"),i=n("POWj"),u=n("a7o/"),s=n("ohlq"),f=n("xo1z"),b=n("qGDX"),g=n("Xopu"),d=n("q9uV"),p=/<(\/?)B>/g,l=function(){function t(t,e,n,r){this.config=t,this.searchBox=e,this.fetcher=n,this.conversation=r}return t.prototype.getId=function(){return"AutoSuggestTextSuggestionProvider"},t.prototype.createStream=function(t){var e=this;return Object(b.b)(this.fetcher,"Text",{searchText:t,entityTypes:Object(d.b)(this.config,t),scenario:Object(f.a)(Object(s.a)()),appOverride:Object(i.a)(),logicalSearchId:this.conversation&&this.conversation.getLogicalSearchId("sb"),conversationId:this.conversation&&this.conversation.conversationId}).where((function(t){return!t.Attributes||!1===t.Attributes.IsHistory})).select((function(n){var r=n.ReferenceId,c=n.Text,o=n.logProps,a=n.originalLogicalSearchId,i=n.entityType,s=n.Attributes;return{logProps:o,id:r,searchText:t,url:"",displayText:Object(u.b)([t],c),onClick:function(t){t.preventDefault();var n=(c||"").replace(p,"");e.searchBox.submitSearch(n),e.searchBox.setSearchText(n)},originalLogicalSearchId:a,entityType:i,isHistory:Boolean(s&&s.IsHistory)}}))},t=Object(r.__decorate)([Object(d.a)({entityType:"Text"}),Object(r.__param)(0,Object(c.a)("config")),Object(r.__param)(1,Object(c.a)("searchBox")),Object(r.__param)(2,Object(c.a)("fetcher")),Object(r.__param)(3,Object(c.a)("conversation"))],t)}();e.default=l;var h=Object(o.regs)("".concat(a.a,".").concat(g.g),l)},LswY:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={addSelectors:function(t){return{selectors:t}}}},"Q+ZD":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={display:"none"}},QHBp:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));var r=n("INM4"),c="_api",o=r.a.concatenate(c,"search")},Wr3k:function(t,e,n){"use strict";var r=n("Rcmk");var c=function(t,e,n,r){for(var c=-1,o=null==t?0:t.length;++c<o;){var a=t[c];e(r,a,n(a),t)}return r},o=n("lRRq");var a=function(t,e,n,r){return Object(o.a)(t,(function(t,c,o){e(r,t,n(t),o)})),r},i=n("n/Gf"),u=n("EJZo");var s=function(t,e){return function(n,r){var o=Object(u.a)(n)?c:a,s=e?e():{};return o(n,t,Object(i.a)(r,2),s)}},f=Object.prototype.hasOwnProperty,b=s((function(t,e,n){f.call(t,n)?t[n].push(e):Object(r.a)(t,n,[e])}));e.a=b},"Z/gI":function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("wuwP"),c=n("Az8T"),o=n("Wr3k");function a(t,e,n){var a=Object(c.a)(Object(o.a)(e,(function(t){return t.id})),(function(t){return t[0]})),i=t.map((function(t){var e=t.id;return a[e]})),u=i.map((function(t){return t?t.suggestions.length:0})),s=u.reduce((function(t,e){return t+e}),0),f=t.map((function(t){return t.optimalCount}));return(s<=f.reduce((function(t,e){return t+e}))?i:function(t,e){var n=t.reduce((function(t,e){return t+e}),0),r=e.map((function(e,n){return Math.min(e,t[n])})),c=n-r.reduce((function(t,e){return t+e}),0);return r.map((function(t,n){var r=Math.min(t+c,e[n]);return c-=r-t,r}))}(f,u).map((function(t,e){return t?Object(r.__assign)(Object(r.__assign)({},i[e]),{suggestions:i[e].suggestions.slice(0,t)}):null}))).filter((function(t){return t}))}n("AJTS");var i=n("W4Bk"),u=n("UlRC"),s=n("eHwz");function f(){var t={},e={};return this.select((function(t){if(t.logProps&&t.logProps.traceId&&t.logProps.entityId)return t;var n=t.providerId;e[n]=e[n]||Object(i.a)();var c=t.logProps&&t.logProps.traceId||e[n],o=t.logProps&&t.logProps.entityId||Object(i.a)();return Object(r.__assign)(Object(r.__assign)({},t),{entityType:"External",logProps:{traceId:c,entityId:o}})})).select((function(e){return function(e){var n=e.groupId;t[n]=t[n]?t[n].addSuggestion(e):new b(n,[e])}(e),Object(s.a)(t)}))}var b=function(){function t(t,e){this.id=t,this.suggestions=e}return t.prototype.addSuggestion=function(e){return new t(this.id,this.suggestions.concat(e))},t}();function g(t){return d(a,t)}function d(t,e){return function(n,r,c,o,a){var i=n.map((function(t){return t.optimalCount})),u=n.map((function(t){return t.maxCount||Number.MAX_VALUE}));return(e({optimals:i,maxes:u},r,c,o)||o.Observable.empty()).toSuggestionGroups().select((function(e){return t(n,e,a)}))}}u.Observable.prototype.toSuggestionGroups=f},bQbu:function(t,e,n){"use strict";n.r(e),n.d(e,"registration",(function(){return l}));var r=n("wuwP"),c=n("rpSO"),o=n("KmCS"),a=n("F6lS"),i=n("POWj"),u=n("a7o/"),s=n("ohlq"),f=n("xo1z"),b=n("qGDX"),g=n("q9uV"),d=/<(\/?)B>/g,p=function(){function t(t,e,n,r){this.config=t,this.searchBox=e,this.fetcher=n,this.conversation=r}return t.prototype.getId=function(){return"AutoSuggestPersonalQuerySuggestionProvider"},t.prototype.createStream=function(t){var e=this;return Object(b.b)(this.fetcher,"Text",{searchText:t,entityTypes:Object(g.b)(this.config,t),scenario:Object(f.a)(Object(s.a)()),appOverride:Object(i.a)(),logicalSearchId:this.conversation&&this.conversation.getLogicalSearchId("sb"),conversationId:this.conversation&&this.conversation.conversationId}).where((function(t){return Boolean(t.Attributes&&t.Attributes.IsHistory)})).select((function(n){var r=n.ReferenceId,c=n.Text,o=n.logProps,a=n.originalLogicalSearchId,i=n.entityType,s=n.Attributes,f=n.customProps;return{logProps:o,id:r,searchText:t,url:"",displayText:Object(u.b)([t],c),onClick:function(t){t.preventDefault();var n=(c||"").replace(d,"");e.searchBox.submitSearch(n),e.searchBox.setSearchText(n)},originalLogicalSearchId:a,entityType:i,isHistory:Boolean(s&&s.IsHistory),customProps:f}}))},t=Object(r.__decorate)([Object(g.a)({entityType:"Text"}),Object(r.__param)(0,Object(c.a)("config")),Object(r.__param)(1,Object(c.a)("searchBox")),Object(r.__param)(2,Object(c.a)("fetcher")),Object(r.__param)(3,Object(c.a)("conversation"))],t)}();e.default=p;var l=Object(o.regs)("".concat(a.a,".autosuggestpersonalquery"),p)},eTzd:function(t,e,n){"use strict";n.d(e,"g",(function(){return f})),n.d(e,"h",(function(){return b})),n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return h})),n.d(e,"f",(function(){return O})),n.d(e,"i",(function(){return v})),n.d(e,"c",(function(){return j})),n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return m}));var r=n("INM4"),c=n("KmCS"),o=n("OJcW"),a=n("e24R"),i=Object(c.regs)("searchux.isCheckSharePointAndSearchCenterUrlsInDifferentDomainFlighted",!1),u=n("QHBp"),s=n("85Gg"),f=Object(a.a)("sharePoint"),b=Object(c.regs)("searchux.api.sharePoint.url","",{required:!1,tags:["session","global","obsolete"]}),g=(r.a.concatenate(u.a,"contextinfo"),r.a.concatenate(u.a,"SP.UserProfiles.PeopleManager"),r.a.concatenate(u.b,"query")),d=r.a.concatenate(u.b,"postquery"),p=(r.a.concatenate(u.b,"searchcenterurl"),r.a.concatenate(u.b,"RecordPageClick"));function l(t){var e=Object(s.a)(t),n=b();return Object(o.b)(e)||i()&&!function(t,e){try{return window&&new window.URL(t).host===new window.URL(e).host}catch(t){return!1}}(n,e)?n:e}function h(t){return r.a.concatenate(l(t),g)}function O(){return r.a.concatenate(l(),d)}function v(){return r.a.concatenate(b(),"_layouts/15")}function j(){return r.a.concatenate(b(),d)}function y(){return r.a.concatenate(b(),g)}function m(){return r.a.concatenate(b(),p)}},npGR:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("pgot"),c=n("wuwP"),o=n("PS6g"),a=n("83V4"),i=n("6MuY"),u=n("y1hr"),s=Object(i.b)((function(t){void 0===t&&(t=o.b);var e=Object(u.a)(t),n=o.a.FileIcon;return Object(a.b)(Object(c.__assign)({iconWrapper:e.suggestionIconWrapper,fileIcon:e.suggestionIcon,icon:Object(c.__assign)(Object(c.__assign)({},n),{backgroundColor:"rgba(0, 0, 0, 0)",margin:"0 auto",color:t.themeStyles.palette.neutralPrimary,marginLeft:"14px",fontSize:"16px"}),textWrapper:e.suggestionTextWrapper,displayText:e.suggestionTitle,secondaryDisplayText:e.suggestionSecondaryTitle},e))}));function f(t){return Object(r.a)()&&t?s(t):n("yGLR")}},"v1F/":function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.Unknown=0]="Unknown",t[t.RecentlyViewed=1]="RecentlyViewed",t[t.Modified=2]="Modified",t[t.TrendingAround=4]="TrendingAround"}(r||(r={}))},xo1z:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("KmCS"),c=Object(r.regs)("searchux.substrateSuggestionsScenario","",{required:!1,tags:["session"]});function o(t){var e=c();return["teamsitesearch","commsitesearch","hubsitesearch"].indexOf(t.toLowerCase())>-1||""===e?t:e}},ye32:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("e3sy"),c=n("sRSV"),o=n("WdAZ");function a(t){var e=c.a.getInstance(),n=[];for(var a in t)t.hasOwnProperty(a)&&n.push(a,"{",Object(o.b)(Object(r.a)(),t[a]),"}");var i=n.join(""),u=e.classNameFromKey(i);if(u)return u;var s=e.getClassName();return e.insertRule("@keyframes "+s+"{"+i+"}",!0),e.cacheClassName(s,i,[],["keyframes",i]),s}},zFwc:function(t,e,n){"use strict";var r=n("4DJX"),c=n("V1An"),o=n("RPdE"),a=Object(c.a)((function(t,e){Object(r.a)(e,Object(o.a)(e),t)}));e.a=a}}]);