(window.msfast_searchux_sb_jsonp=window.msfast_searchux_sb_jsonp||[]).push([["cpl-clear~cpl-exit~cpl-hidemasub~cpl-host~cpl-invoker~cpl-magsubmit~cpl-no-submit~cpl-search~cpl-sub~1521a1df"],{"/GYi":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.pseudoLocalize=void 0;var n={a:"ȧ",A:"Ȧ",b:"ƀ",B:"Ɓ",c:"ƈ",C:"Ƈ",d:"ḓ",D:"Ḓ",e:"ḗ",E:"Ḗ",f:"ƒ",F:"Ƒ",g:"ɠ",G:"Ɠ",h:"ħ",H:"Ħ",i:"ī",I:"Ī",j:"ĵ",J:"Ĵ",k:"ķ",K:"Ķ",l:"ŀ",L:"Ŀ",m:"ḿ",M:"Ḿ",n:"ƞ",N:"Ƞ",o:"ǿ",O:"Ǿ",p:"ƥ",P:"Ƥ",q:"ɋ",Q:"Ɋ",r:"ř",R:"Ř",s:"ş",S:"Ş",t:"ŧ",T:"Ŧ",v:"ṽ",V:"Ṽ",u:"ŭ",U:"Ŭ",w:"ẇ",W:"Ẇ",x:"ẋ",X:"Ẋ",y:"ẏ",Y:"Ẏ",z:"ẑ",Z:"Ẑ"};r.pseudoLocalize=function(e){return e.split("").reduce((function(e,r){var t=n[r]||r;return e+(t+(function(e){return"aeiou".indexOf(e.toLowerCase())>=0}(r)?t:""))}),"")}},"0wKj":function(e,r,t){"use strict";t.r(r),t.d(r,"mapMidgardLocaleToCLDRLocale",(function(){return l})),t.d(r,"getStringForRange",(function(){return d})),t.d(r,"mapNumberToRangeForLocale",(function(){return s})),t.d(r,"createICUString",(function(){return f})),t.d(r,"parsePluralString",(function(){return g})),t.d(r,"getPluralStringUnsafe",(function(){return p})),t.d(r,"getPluralString",(function(){return v}));var n=t("wuwP"),o=t("jTHf"),i=t("SZ9T"),a=t.n(i),u=["zero","one","two","few","many","other"],c={zero:/zero\s*{([^}]+)}/,one:/one\s*{([^}]+)}/,two:/two\s*{([^}]+)}/,few:/few\s*{([^}]+)}/,many:/many\s*{([^}]+)}/,other:/other\s*{([^}]+)}/};function l(e){return e.split("-")[0]}function d(e,r){var t=Object(n.__read)(c[r].exec(e)||[],2)[1];return void 0===t?"":t}function s(e,r){return a()(r,e)}function f(e){var r="";return u.forEach((function(t){e[t]&&(r+=" ".concat(t,"{").concat(e[t],"}"))})),"".concat("{count, plural,").concat(r).concat("}")}function g(e,r,t){return d(e,s(r,t)||"other")}function p(e,r,t){if(r<0||r!==1/0&&!Object(o.a)(r))throw new Error("count must be a positive integer or Infinity");return g(e,r,t)}function v(e,r,t){if(void 0===r)return e;try{return p(e,r,t||"en")}catch(r){return e}}},"3Pva":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.lookupStringInDefaultStringProvider=r.clearStringMapLoadersForDefaultStringProvider=r.setCurrentLocaleForDefaultStringProvider=r.getCurrentLocaleForDefaultStringProvider=r.addStringMapLoaderForDefaultStringProvider=r.addStringMapForDefaultStringProvider=r.setLocalizationErrorHandlerForDefaultStringProvider=r.getDefaultStringProvider=void 0;var n=t("wuwP"),o=t("fAc5"),i={currentLocale:void 0,strings:{},errorHandler:function(e){return console.error(e)},loaders:[],stringMapInitialized:!1};function a(){return i}r.getDefaultStringProvider=a,r.setLocalizationErrorHandlerForDefaultStringProvider=function(e){i=(0,o.setLocalizationErrorHandler)(e,i)},r.addStringMapForDefaultStringProvider=function(e,r){i=(0,o.addStringMap)(e,r,i)},r.addStringMapLoaderForDefaultStringProvider=function(e){i=(0,o.addStringMapLoader)(e,i)},r.getCurrentLocaleForDefaultStringProvider=function(){return(0,o.getCurrentLocale)(a())},r.setCurrentLocaleForDefaultStringProvider=function(e){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(r){switch(r.label){case 0:return[4,(0,o.setCurrentLocale)(e,i)];case 1:return[2,(i=r.sent()).currentLocale]}}))}))},r.clearStringMapLoadersForDefaultStringProvider=function(){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(e){switch(e.label){case 0:return[4,(0,o.clearStringMapLoaders)(a())];case 1:return i=e.sent(),[2]}}))}))},r.lookupStringInDefaultStringProvider=function(e){return(0,o.lookUpString)(e,a())}},"6e3C":function(e,r,t){"use strict";function n(e){return"string"==typeof e}function o(e){return e.length?e[0].toUpperCase()+e.slice(1):e}function i(e){return e.length?e[0].toLowerCase()+e.slice(1):e}function a(e,r){return e.slice(0,r.length)===r}function u(e,r){return e.slice(0-r.length)===r}t.d(r,"b",(function(){return n})),t.d(r,"e",(function(){return o})),t.d(r,"c",(function(){return i})),t.d(r,"d",(function(){return a})),t.d(r,"a",(function(){return u}))},Eh0g:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getStringDescriptionWithPlaceholders=r.getStringDescriptionWithoutPlaceholders=r.getStringDescriptionWithOnlyKey=void 0;var n=t("wuwP"),o=t("FAWu"),i=t("Qhd2"),a=t("wdIV");function u(e){return(e=(0,o.upperFirst)(e.trim()))&&!(0,o.endsWith)(e,".")&&(e+="."),e}r.getStringDescriptionWithOnlyKey=function(e){return{key:e,stringToBeLocalized:"",comment:"",placeholderNames:[]}},r.getStringDescriptionWithoutPlaceholders=function(e,r){return{key:e,stringToBeLocalized:r.text,comment:r.comment,placeholderNames:[]}},r.getStringDescriptionWithPlaceholders=function(e,r){for(var t=(0,o.keys)(r.placeholders).filter(o.isString).sort(),c={},l=0,d=(0,o.keys)(r.placeholders);l<d.length;l++){var s=d[l];c[s]=(0,o.isString)(s)?"{".concat(t.indexOf(s),"}"):(0,a.throwError)("Placeholder name ".concat(s," is not a string"))}var f=r.text(c),g=n.__spreadArray([r.comment],t.map((function(e,t){var n=r.placeholders[e].trim();return n?"{".concat(t,"} is a placeholder for ").concat((0,o.lowerFirst)(n)):null})),!0),p=(0,i.filterOutNull)(g).map(u).filter(Boolean).join(" ");return t.forEach((function(e,r){p=p.replace("{"+e+"}","{"+r+"}")})),{key:e,stringToBeLocalized:f,comment:p,placeholderNames:t}}},FAWu:function(e,r,t){"use strict";t.r(r),t.d(r,"filterOutNull",(function(){return n.filterOutNull})),t.d(r,"generateGuid",(function(){return o.a})),t.d(r,"isDefined",(function(){return i.a})),t.d(r,"isEmpty",(function(){return u})),t.d(r,"flattenJoin",(function(){return l})),t.d(r,"keys",(function(){return d.keys})),t.d(r,"makeObject",(function(){return s})),t.d(r,"matchAll",(function(){return f})),t.d(r,"merge",(function(){return g})),t.d(r,"memoizeFunction",(function(){return p.a})),t.d(r,"memoizeSelector",(function(){return _})),t.d(r,"memoizeFunctionProperties",(function(){return z})),t.d(r,"range",(function(){return j})),t.d(r,"sortObjectBy",(function(){return D})),t.d(r,"throwError",(function(){return w.throwError})),t.d(r,"defaultToEmptyArray",(function(){return k.d})),t.d(r,"omitEmpty",(function(){return k.g})),t.d(r,"omitNull",(function(){return k.h})),t.d(r,"updateWith",(function(){return k.j})),t.d(r,"hasOwnProperty",(function(){return k.e})),t.d(r,"cacheLatest",(function(){return k.b})),t.d(r,"undefinedToNull",(function(){return k.i})),t.d(r,"createArrayAndFillWith",(function(){return k.c})),t.d(r,"identity",(function(){return k.f})),t.d(r,"areEqualNumbers",(function(){return k.a})),t.d(r,"uniq",(function(){return F})),t.d(r,"uniqBy",(function(){return M})),t.d(r,"countStringOccurrences",(function(){return E})),t.d(r,"isString",(function(){return x.b})),t.d(r,"upperFirst",(function(){return x.e})),t.d(r,"lowerFirst",(function(){return x.c})),t.d(r,"startsWith",(function(){return x.d})),t.d(r,"endsWith",(function(){return x.a})),t.d(r,"find",(function(){return W.a})),t.d(r,"backfillUndefined",(function(){return T})),t.d(r,"neverGuard",(function(){return C.a})),t.d(r,"neverGuardDefault",(function(){return C.b}));var n=t("Qhd2"),o=t("CVAo"),i=t("At10"),a=t("Jsdl");function u(e){return Object(a.a)(e)}var c=t("iD1a");function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return Object(c.a)(Object(n.filterOutNull)(e)).join(",")}var d=t("Tvpb");function s(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var n={};return r.forEach((function(r){return n[r]=e(r)})),n}function f(e,r){var t=[];if(!r.global)throw new Error("regular expression must have the global flag set");var n=null;do{(n=r.exec(e))&&t.push(n)}while(n&&n[0]);return t}function g(e,r,t){if(0===r.length)return e;if(0===e.length)return r;for(var n=0,o=0,i=[];n<e.length&&o<r.length;)switch(t(e[n],r[o])){case 1:i.push(r[o++]);break;default:i.push(e[n++])}return n===e.length&&i.push.apply(i,r.slice(o)),o===r.length&&i.push.apply(i,e.slice(n)),i}var p=t("NeXG"),v=t("ksoO"),h=t("nOQk"),S=t.n(h),b=t("TsMp"),P=t.n(b),m=t("wuwP"),L=P.a,y=function(e,r){if(!e||!r||e===r)return e===r;var t=L(e);return t.length===L(r).length&&t.every((function(t){return r.hasOwnProperty(t)&&e[t]===r[t]}))},_=function(e,r){var t,n,o=(t=r,n=[],function(e){var r=void 0;if(n.forEach((function(t){var n=Object(m.__read)(t,2),o=n[0],i=n[1];return y(o,e)&&(r=i)})),r)return r;var o=t(e);return n.unshift([e,o]),n=n.slice(0,25),o}),i=void 0;return function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var n=o(e.apply(void 0,Object(m.__spreadArray)([],Object(m.__read)(r),!1)));if(void 0!==i&&i!==n)if(S()(n)&&S()(i)){var a=i;if(n.length===a.length&&n.every((function(e,r){return e===a[r]})))return i}else if("object"===Object(v.a)(n)&&"object"===Object(v.a)(i)&&y(i,n))return i;return i=n,n}},O=P.a;function z(e){var r,t,n={};try{for(var o=Object(m.__values)(O(e)),i=o.next();!i.done;i=o.next()){var a=i.value,u=e[a];n[a]="function"==typeof u?Object(p.a)(u.bind(n)):u}}catch(e){r={error:e}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(r)throw r.error}}return n}function j(e,r,t){return Object(m.__spreadArray)([],Array(e),!0).map((function(e,n){return(r||0)+n*(t||1)}))}function D(e,r){var t=Object(d.keys)(e).sort((function(e,t){return r(e.toString()).localeCompare(r(t.toString()))})),n={};return t.forEach((function(r){n[r]=e[r]})),n}var w=t("wdIV"),k=t("rZMw");function M(e,r){var t=e.map(r);return e.filter((function(e,n){return t.indexOf(r(e))===n}))}function F(e){return M(e,(function(e){return e}))}function E(e){return e.reduce((function(e,r){var t;return Object(m.__assign)(Object(m.__assign)({},e),((t={})[r]=(e[r]||0)+1,t))}),{})}var x=t("6e3C"),W=t("cQB/");function T(e,r){return void 0===e?r:e}var C=t("KUM7")},I1pI:function(e,r,t){"use strict";t.r(r);var n=t("NeXG");t.d(r,"memoizeFunction",(function(){return n.a}))},NeXG:function(e,r,t){"use strict";t.d(r,"a",(function(){return y}));var n,o,i,a=t("ksoO"),u=t("TsMp"),c=t.n(u),l=t("ZgiZ"),d=t.n(l),s=t("VwB9"),f=t.n(s),g=t("wuwP"),p=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r]},v="undefined"!=typeof console?console:void 0,h={trace:(null!==(n=null==v?void 0:v.trace)&&void 0!==n?n:p).bind(v),warn:(null!==(o=null==v?void 0:v.warn)&&void 0!==o?o:p).bind(v),table:(null!==(i=null==v?void 0:v.table)&&void 0!==i?i:p).bind(v)},S=t("jTRx"),b="undefined"!=typeof __WHY_DID_YOU_RECOMPUTE__&&__WHY_DID_YOU_RECOMPUTE__||"undefined"!=typeof globalThis&&globalThis.__WHY_DID_YOU_RECOMPUTE__,P={empty:!0},m={},L=void 0===f.a?null:f.a,y=function(e,r){if(void 0===r&&(r=100),!L)return e;var t=O(),n=0,o=0,i=b?new d.a:void 0,a=b?new Error("Memoized function defined").stack:"";return function(){for(var u,l,d,s,f=[],p=0;p<arguments.length;p++)f[p]=arguments[p];var v=t;(0!==o||r>0&&n>r)&&(t=O(),n=0,o=0,null==i||i.clear()),v=t;for(var P=function(e){var r=_(f[e]);if(!(null===(u=v.map)||void 0===u?void 0:u.has(r))&&(null===(l=v.map)||void 0===l||l.set(r,O()),b&&i)){var t=null!==(d=i.get(v))&&void 0!==d?d:[],n=t.filter((function(e){return e!==r&&Object(S.a)(e,r)}))[0];if(n){h.warn("Why-did-you-recompute: Identical (deep-comparison) past arguments to memoizeFunction found with differing instance equality: ");var o=new Error("Indentical argument passed").stack;!function e(r,t){h.table(r),c()(r).forEach((function(n){var o=r[n],i=t[n];o!==i&&Object(S.a)(o,i)&&(h.warn("Duplication present in child prop '".concat(n,"'")),e(o,i))}))}(n,r),h.warn(o),h.warn(a)}i.set(v,Object(g.__spreadArray)(Object(g.__spreadArray)([],Object(g.__read)(t),!1),[r],!1))}v=null===(s=v.map)||void 0===s?void 0:s.get(r)},m=0;m<f.length;m++)P(m);return v.hasOwnProperty("value")||(v.value=e.apply(void 0,Object(g.__spreadArray)([],Object(g.__read)(f),!1)),n++),v.value}};function _(e){return e?"object"===Object(a.a)(e)||"function"==typeof e?e:(m[e]||(m[e]={val:e}),m[e]):P}function O(){return{map:L?new L:null}}},"OU+2":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.mapStringsWithPlaceholdersToStandardFormat=r.mapStringsToStandardFormat=r.declarePluralStringWithPlaceholders=r.declarePluralString=void 0;var n=t("0wKj"),o=t("cUPg"),i=t("3Pva"),a=t("qVAB"),u=t("Eh0g"),c=t("fAc5");function l(e){var r=e.comment,t=e.placeholders,o=e.strings;return{comment:r,placeholders:t,text:function(e){return(0,n.createICUString)(o(e))}}}r.declarePluralString=function(e,r){var t=r&&{text:(0,n.createICUString)(r.strings),comment:r.comment},a=function(r){return void 0===r&&(r=(0,i.getDefaultStringProvider)()),(0,o.resolveString)(e,t,r)};return a.toString=a,a.key=e,a},r.declarePluralStringWithPlaceholders=function(e,r){var t=r&&l(r),n=function(r,n){return void 0===n&&(n=(0,i.getDefaultStringProvider)()),(0,o.resolveStringWithPlaceholders)(e,t,n)(r)};return n.toString=function(r){return void 0===r&&(r=(0,i.getDefaultStringProvider)()),(0,a.isDevLocalization)()&&t||!(0,c.stringExists)(e,r)&&t?(0,u.getStringDescriptionWithPlaceholders)(e,t).stringToBeLocalized:(0,c.lookUpString)(e,r)},n.key=e,n},r.mapStringsToStandardFormat=function(e){var r=e.comment,t=e.strings;return{text:(0,n.createICUString)(t),comment:r}},r.mapStringsWithPlaceholdersToStandardFormat=l},SKLN:function(e,r,t){"use strict";t.r(r),t.d(r,"isSupportedLocale",(function(){return o})),t.d(r,"supportedLocales",(function(){return n})),t.d(r,"toSupportedLocale",(function(){return i}));var n=["af","am","ar","as-in","az-latn-az","be-by","bg","bn-in","bn-bd","bs-latn-ba","ca","ca-es-valencia","cs","cy","da","de","el","en-gb","en-us","es","es-mx","et","eu","fa","fi","fil","fr","fr-ca","ga-ie","gd-gb","gl","gu","ha-latn-ng","he","hi","hr","hu","hy","id","is","it","ja","ka","kk","km-kh","kn","ko","kok","ky","lb-lu","lo-la","lt","lv","mi-nz","mk","ml","mn-mn","mr","ms","mt-mt","ne-np","nl","nn-no","no","or","pa-in","pl","prs","pt","pt-pt","quz-pe","ro","ru","sd-arab-pk","si-lk","sk","sl","sq","sr","sr-cyrl","sr-cyrl-ba","sv","sw","ta","te","th","tk-tm","tr","tt","ug-cn","uk","ur","uz","vi","zh-hans","zh-hant","zu-za"];function o(e){return n.indexOf(e)>=0}function i(e,r){if(e){var t=e.toLowerCase().replace("_","-"),i=a(t);if(i)return i;if(o(t))return t;var u=t.split("-");if(u.length>2){var c=u.slice(0,u.length-1).join("-");if(o(c))return c;var l=a(c);if(l)return l}var d=t.substr(0,2);if(o(d))return d;var s=a(d);if(s)return s;for(var f=0,g=n;f<g.length;f++){var p=g[f];if(0===p.indexOf(d))return p}}if(r)return r;throw new Error("".concat(e," cannot be mapped to a supported locale"))}function a(e){if(0===e.indexOf("es-")&&"es-es"!==e)return"es-mx";if(0===e.indexOf("en-")&&"en-us"!==e)return"en-gb";switch(e){case"zh-hk":case"zh-mo":return"zh-hant";case"zh-rcn":return"zh-hans";case"zh-rhk":case"zh-rtw":case"zh-sg":case"zh-tw":return"zh-hant";case"be":return"nl";case"ga":return"ga-ie";case"in":return"id";case"iw":return"he";case"nb":return"no";default:return}}},TPuk:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.toSupportedLocale=r.supportedLocales=r.isSupportedLocale=void 0;var n=t("SKLN");Object.defineProperty(r,"isSupportedLocale",{enumerable:!0,get:function(){return n.isSupportedLocale}}),Object.defineProperty(r,"supportedLocales",{enumerable:!0,get:function(){return n.supportedLocales}}),Object.defineProperty(r,"toSupportedLocale",{enumerable:!0,get:function(){return n.toSupportedLocale}})},Tvpb:function(e,r,t){"use strict";function n(e){return"string"==typeof e?Object.keys(e.split("")):"number"==typeof e||"boolean"==typeof e?[]:Object.keys(e)}t.r(r),t.d(r,"keys",(function(){return n}))},"cQB/":function(e,r,t){"use strict";function n(e,r){for(var t=0;t<e.length;t++){var n=e[t];if(r(n))return n}}t.d(r,"a",(function(){return n}))},cUPg:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.declareStringWithPlaceholders=r.declareString=r.lookupStringInStringProvider=r.resolveStringWithPlaceholders=r.resolveString=void 0;var n=t("Tvpb"),o=t("I1pI"),i=t("3Pva"),a=t("qVAB"),u=t("Eh0g"),c=t("/GYi"),l=t("fAc5"),d=/\\{\\d+\\}/g,s=(0,o.memoizeFunction)((function(e){return new RegExp("\\{".concat(e,"\\}"),"g")}));function f(e,r,t){try{return(0,a.isDevLocalization)()&&r?(0,a.doPseudoLocalization)()?function(e){var r={},t={};(e.match(/({.+?})/g)||[]).forEach((function(e,n){var o="".concat("0.7059175321136157","_").concat(n);r[e]=o,t[o]=e}));var n=Object.keys(r).reduce((function(e,t){return e.replace(t,r[t])}),h(e)),o=(0,c.pseudoLocalize)(n);return Object.keys(t).reduce((function(e,r){return e.replace(r,t[r])}),S(o))}(r.text):r.text:!(0,l.stringExists)(e,t)&&r?r.text:(0,l.lookUpString)(e,t)}catch(e){return(0,l.handleLocalizationError)(e,t),""}}r.resolveString=f;var g=function(e,r){return function(t){try{return e(t)}catch(e){return(0,l.handleLocalizationError)(e,r),""}}};function p(e,r,t){try{return(0,a.isDevLocalization)()&&r&&r.text?g((function(e){return(0,a.doPseudoLocalization)()?function(e,r){var t={},o={};(0,n.keys)(r).forEach((function(e,n){var i="".concat("0.7059175321136157","_").concat(n);t[e]=i,o[i]=r[e]}));var i=(0,c.pseudoLocalize)(h(e.text(t)));return(0,n.keys)(o).reduce((function(e,r){return e.replace(r,o[r])}),S(i))}(r,e):r.text(e)}),t):!(0,l.stringExists)(e,t)&&r&&r.text?g(r.text,t):g((function(r){return(0,n.keys)(r).sort().reduce((function(e,t,n){var o=r[t],i=("string"==typeof o&&o||o&&o.toString&&o.toString()||"").replace(d,"");return(e||"").replace(s(n),i)}),(0,l.lookUpString)(e,t))}),t)}catch(e){return(0,l.handleLocalizationError)(e,t),function(){return""}}}r.resolveStringWithPlaceholders=p,r.lookupStringInStringProvider=function(e){return function(r){return function(t){return t?p(r,void 0,e)(t):f(r,void 0,e)}}},r.declareString=function(e,r){var t=function(t){return void 0===t&&(t=(0,i.getDefaultStringProvider)()),f(e,r,t)};return t.toString=t,t.key=e,t},r.declareStringWithPlaceholders=function(e,r){var t=function(t,n){return void 0===n&&(n=(0,i.getDefaultStringProvider)()),p(e,r,n)(t)};return t.toString=function(t){return void 0===t&&(t=(0,i.getDefaultStringProvider)()),(0,a.isDevLocalization)()&&r||!(0,l.stringExists)(e,t)&&r?(0,u.getStringDescriptionWithPlaceholders)(e,r).stringToBeLocalized:(0,l.lookUpString)(e,t)},t.key=e,t};var v="".concat("0.7059175321136157","_-1");function h(e){return e.replace(new RegExp("->INF::","g"),v)}function S(e){return e.replace(new RegExp(v,"g"),"->INF::")}},fAc5:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.lookUpString=r.stringExists=r.flattenStringMap=r.clearStringMapLoaders=r.setCurrentLocale=r.getCurrentLocale=r.addStringMapLoader=r.addStringMap=r.handleLocalizationError=r.setLocalizationErrorHandler=void 0;var n=t("wuwP"),o=t("Tvpb"),i=t("I1pI"),a=t("qVAB");r.setLocalizationErrorHandler=function(e,r){return n.__assign(n.__assign({},r),{errorHandler:e})},r.handleLocalizationError=function(e,r){r.errorHandler(e)};var u,c=(0,i.memoizeFunction)((function(e,r){var t=d(r);return function(r){return Promise.resolve(e===r?t:{})}}));function l(e,r){return-1===r.loaders.indexOf(e)?n.__assign(n.__assign({},r),{loaders:r.loaders.concat(e)}):r}function d(e){var r={};return e&&function e(t,n){for(var i=0,a=(0,o.keys)(n);i<a.length;i++){var u=a[i];if("string"==typeof u){var c=n[u];"string"==typeof c?r[t+u]=c:"object"==typeof c&&e(t+u+".",c)}}}("",e),r}r.addStringMap=function(e,r,t){if(t.currentLocale===e||void 0===t.currentLocale){var o=d(r);return n.__assign(n.__assign({},t),{currentLocale:void 0===t.currentLocale?e:t.currentLocale,strings:n.__assign(n.__assign({},t.strings),o),stringMapInitialized:!0})}return l(c(e,r),t)},r.addStringMapLoader=l,r.getCurrentLocale=function(e){return u?u.then((function(e){return e.currentLocale})):Promise.resolve(e.currentLocale)},r.setCurrentLocale=function(e,r){var t=function(e,r){return n.__awaiter(this,void 0,void 0,(function(){var t,o,i=this;return n.__generator(this,(function(a){switch(a.label){case 0:return t=function(t){return n.__awaiter(i,void 0,void 0,(function(){var o,i;return n.__generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,t(e)];case 1:return[2,n.sent()];case 2:return o=n.sent(),i=o.message||"unknown error",r.errorHandler("Async string map loader failed: ".concat(i)),[2,{}];case 3:return[2]}}))}))},o=r.loaders.map(t),[4,Promise.all(o)];case 1:return[2,a.sent().map(d).reduce((function(e,r){return n.__assign(n.__assign({},e),r)}),{})]}}))}))}(e,r).then((function(t){return n.__assign(n.__assign({},r),{strings:t,currentLocale:e,stringMapInitialized:!0})}));return u=u?u.then((function(){return t})):t},r.clearStringMapLoaders=function(e){return n.__awaiter(this,void 0,void 0,(function(){return n.__generator(this,(function(r){switch(r.label){case 0:return u?[4,u]:[3,2];case 1:r.sent(),r.label=2;case 2:return u=void 0,[2,n.__assign(n.__assign({},e),{loaders:[],strings:{},currentLocale:void 0})]}}))}))},r.flattenStringMap=d,r.stringExists=function(e,r){return"string"==typeof r.strings[e]},r.lookUpString=function(e,r){var t=r.strings[e];if(!t||"string"!=typeof t){var n=(0,a.isDev)()||(0,a.isTest)()?e:"";return!function(e){for(var r in e)if(e.hasOwnProperty(r))return!1;return!0}(r.strings)?r.errorHandler("Key ".concat(e," does not exist in string map"),{stringsLoaded:!!r.stringMapInitialized}):!r.suppressEmptyStringMapErrors&&r.errorHandler("The current string map is empty. The string is probably resolved too early, at import time. Key: ".concat(e)),n}return t}},n5ha:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.makeGetStringMapLoader=r.setLocalizationErrorHandlerForDefaultStringProvider=r.setCurrentLocaleForDefaultStringProvider=r.lookupStringInDefaultStringProvider=r.getDefaultStringProvider=r.getCurrentLocaleForDefaultStringProvider=r.clearStringMapLoadersForDefaultStringProvider=r.addStringMapLoaderForDefaultStringProvider=r.addStringMapForDefaultStringProvider=r.toSupportedLocale=r.supportedLocales=r.isSupportedLocale=r.stringExists=r.setLocalizationErrorHandler=r.setCurrentLocale=r.lookUpString=r.getCurrentLocale=r.flattenStringMap=r.clearStringMapLoaders=r.addStringMapLoader=r.addStringMap=r.getStringDescriptionWithoutPlaceholders=r.getStringDescriptionWithPlaceholders=r.getStringDescriptionWithOnlyKey=r.isDevLocalization=r.isDev=r.disableDevModeForLocalization=r.enableDevModeForLocalization=r.togglePseudoLocalization=r.enablePseudoLocalization=r.disablePseudoLocalization=r.mapStringsWithPlaceholdersToStandardFormat=r.mapStringsToStandardFormat=r.declarePluralStringWithPlaceholders=r.declarePluralString=r.lookupStringInStringProvider=r.declareStringWithPlaceholders=r.declareString=void 0;var n=t("cUPg");Object.defineProperty(r,"declareString",{enumerable:!0,get:function(){return n.declareString}}),Object.defineProperty(r,"declareStringWithPlaceholders",{enumerable:!0,get:function(){return n.declareStringWithPlaceholders}}),Object.defineProperty(r,"lookupStringInStringProvider",{enumerable:!0,get:function(){return n.lookupStringInStringProvider}});var o=t("OU+2");Object.defineProperty(r,"declarePluralString",{enumerable:!0,get:function(){return o.declarePluralString}}),Object.defineProperty(r,"declarePluralStringWithPlaceholders",{enumerable:!0,get:function(){return o.declarePluralStringWithPlaceholders}}),Object.defineProperty(r,"mapStringsToStandardFormat",{enumerable:!0,get:function(){return o.mapStringsToStandardFormat}}),Object.defineProperty(r,"mapStringsWithPlaceholdersToStandardFormat",{enumerable:!0,get:function(){return o.mapStringsWithPlaceholdersToStandardFormat}});var i=t("qVAB");Object.defineProperty(r,"disablePseudoLocalization",{enumerable:!0,get:function(){return i.disablePseudoLocalization}}),Object.defineProperty(r,"enablePseudoLocalization",{enumerable:!0,get:function(){return i.enablePseudoLocalization}}),Object.defineProperty(r,"togglePseudoLocalization",{enumerable:!0,get:function(){return i.togglePseudoLocalization}}),Object.defineProperty(r,"enableDevModeForLocalization",{enumerable:!0,get:function(){return i.enableDevModeForLocalization}}),Object.defineProperty(r,"disableDevModeForLocalization",{enumerable:!0,get:function(){return i.disableDevModeForLocalization}}),Object.defineProperty(r,"isDev",{enumerable:!0,get:function(){return i.isDev}}),Object.defineProperty(r,"isDevLocalization",{enumerable:!0,get:function(){return i.isDevLocalization}});var a=t("Eh0g");Object.defineProperty(r,"getStringDescriptionWithOnlyKey",{enumerable:!0,get:function(){return a.getStringDescriptionWithOnlyKey}}),Object.defineProperty(r,"getStringDescriptionWithPlaceholders",{enumerable:!0,get:function(){return a.getStringDescriptionWithPlaceholders}}),Object.defineProperty(r,"getStringDescriptionWithoutPlaceholders",{enumerable:!0,get:function(){return a.getStringDescriptionWithoutPlaceholders}});var u=t("fAc5");Object.defineProperty(r,"addStringMap",{enumerable:!0,get:function(){return u.addStringMap}}),Object.defineProperty(r,"addStringMapLoader",{enumerable:!0,get:function(){return u.addStringMapLoader}}),Object.defineProperty(r,"clearStringMapLoaders",{enumerable:!0,get:function(){return u.clearStringMapLoaders}}),Object.defineProperty(r,"flattenStringMap",{enumerable:!0,get:function(){return u.flattenStringMap}}),Object.defineProperty(r,"getCurrentLocale",{enumerable:!0,get:function(){return u.getCurrentLocale}}),Object.defineProperty(r,"lookUpString",{enumerable:!0,get:function(){return u.lookUpString}}),Object.defineProperty(r,"setCurrentLocale",{enumerable:!0,get:function(){return u.setCurrentLocale}}),Object.defineProperty(r,"setLocalizationErrorHandler",{enumerable:!0,get:function(){return u.setLocalizationErrorHandler}}),Object.defineProperty(r,"stringExists",{enumerable:!0,get:function(){return u.stringExists}});var c=t("TPuk");Object.defineProperty(r,"isSupportedLocale",{enumerable:!0,get:function(){return c.isSupportedLocale}}),Object.defineProperty(r,"supportedLocales",{enumerable:!0,get:function(){return c.supportedLocales}}),Object.defineProperty(r,"toSupportedLocale",{enumerable:!0,get:function(){return c.toSupportedLocale}});var l=t("3Pva");Object.defineProperty(r,"addStringMapForDefaultStringProvider",{enumerable:!0,get:function(){return l.addStringMapForDefaultStringProvider}}),Object.defineProperty(r,"addStringMapLoaderForDefaultStringProvider",{enumerable:!0,get:function(){return l.addStringMapLoaderForDefaultStringProvider}}),Object.defineProperty(r,"clearStringMapLoadersForDefaultStringProvider",{enumerable:!0,get:function(){return l.clearStringMapLoadersForDefaultStringProvider}}),Object.defineProperty(r,"getCurrentLocaleForDefaultStringProvider",{enumerable:!0,get:function(){return l.getCurrentLocaleForDefaultStringProvider}}),Object.defineProperty(r,"getDefaultStringProvider",{enumerable:!0,get:function(){return l.getDefaultStringProvider}}),Object.defineProperty(r,"lookupStringInDefaultStringProvider",{enumerable:!0,get:function(){return l.lookupStringInDefaultStringProvider}}),Object.defineProperty(r,"setCurrentLocaleForDefaultStringProvider",{enumerable:!0,get:function(){return l.setCurrentLocaleForDefaultStringProvider}}),Object.defineProperty(r,"setLocalizationErrorHandlerForDefaultStringProvider",{enumerable:!0,get:function(){return l.setLocalizationErrorHandlerForDefaultStringProvider}});var d=t("zVSZ");Object.defineProperty(r,"makeGetStringMapLoader",{enumerable:!0,get:function(){return d.makeGetStringMapLoader}})},qVAB:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.doPseudoLocalization=r.disableDevModeForLocalization=r.enableDevModeForLocalization=r.enablePseudoLocalization=r.disablePseudoLocalization=r.togglePseudoLocalization=r.isTest=r.isDevLocalization=r.skipLocalization=r.isDev=void 0;var t=!1;function n(){return!1}function o(){return"undefined"!=typeof __SKIP_LOC__&&__SKIP_LOC__}r.isDev=n,r.skipLocalization=o,r.isDevLocalization=function(){return o()},r.isTest=function(){return Boolean(void 0!==e&&e.env&&!1)},r.togglePseudoLocalization=function(){t=!t},r.disablePseudoLocalization=function(){t=!0},r.enablePseudoLocalization=function(){t=!1},r.enableDevModeForLocalization=function(){!1},r.disableDevModeForLocalization=function(){!0},r.doPseudoLocalization=function(){return!1}}).call(this,t("6AAz"))},rZMw:function(e,r,t){"use strict";t.d(r,"d",(function(){return a})),t.d(r,"g",(function(){return u})),t.d(r,"h",(function(){return c})),t.d(r,"j",(function(){return d})),t.d(r,"e",(function(){return s})),t.d(r,"b",(function(){return f})),t.d(r,"i",(function(){return g})),t.d(r,"c",(function(){return p})),t.d(r,"f",(function(){return v})),t.d(r,"a",(function(){return h}));var n=t("kjQx"),o=t("Tvpb"),i=[];function a(e){return e||i}function u(e){return l(e,(function(e){return null!=e&&""!==e&&(!(e instanceof Array)||e.length>0)}))}function c(e){return l(e,(function(e){return null!==e}))}function l(e,r){if(null==e)return e;for(var t={},n=0,i=Object(o.keys)(e);n<i.length;n++){var a=i[n];r(e[a])&&(t[a]=e[a])}return t}function d(e,r){return Object(n.a)({},e,r)}function s(e,r){return e.hasOwnProperty(r)}function f(e){var r=void 0;return function(t){if(r&&t===r.arg)return r.result;var n=e(t);return r={arg:t,result:n},n}}function g(e){return void 0===e?null:e}function p(e,r){var t=[];if(e>0&&e<Number.MAX_VALUE)for(var n=0;n<e;n+=1)t.push(r(n));return t}function v(e){return e}function h(e,r,t){return void 0===t&&(t=1e-5),Math.abs(e-r)<t}},wdIV:function(e,r,t){"use strict";function n(e){throw new Error(e)}t.r(r),t.d(r,"throwError",(function(){return n}))},zVSZ:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.makeGetStringMapLoader=void 0;var n=t("TPuk");r.makeGetStringMapLoader=function(e){return function(r){var t=function(r){return e((0,n.toSupportedLocale)(r,"en-us"))};return r?e((0,n.toSupportedLocale)(r,"en-us")).catch((function(){})).then((function(){return t})):Promise.resolve(t)}}}}]);