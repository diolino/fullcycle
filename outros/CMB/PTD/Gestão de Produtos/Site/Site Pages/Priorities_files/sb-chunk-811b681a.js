(window.msfast_searchux_sb_jsonp=window.msfast_searchux_sb_jsonp||[]).push([["pro-3s-univbestmatch~pro-3s-univconnector~pro-3s-univfile~pro-3s-univpeople~pro-3s-univsite~pro-3s-u~59e4e517"],{"6SpP":function(e,t,r){"use strict";var a,n=r("UlRC"),o=r("udHp"),i=r("ldpi"),s=r("g5mr"),c=r("rcVC"),m=r("TxZW");"object"==typeof window&&(a=window.sessionStorage)||(a={getItem:function(){return null},removeItem:function(){},setItem:function(){},clear:function(){return{}}});var u=Object(i.a)((function(){return new l})),l=function(){function e(){this.cachedStreams={},this.sessionStorageError=!1}return e.prototype.clear=function(){this.cachedStreams={},this.sessionStorageError=!1},e.prototype.removeEntry=function(e){delete this.cachedStreams[e],a.removeItem(e),this.sessionStorageError=!1},e.currentTime=function(){return(new Date).getTime()},e.serializeKey=function(e){if(!Object(s.a)(e))throw new Error("Key argument must be an object.");for(var t,r,a=0,n=Object.keys(e).sort(),o=n.length,i=[];a<o;a++)null===(t=e[r=n[a]])||void 0===t||Object(s.a)(t)||Object(c.a)(t)||(t+="")&&i.push(r+":"+t);return i.join(",")},e.prototype.getEntryFromStreamCache=function(e,t){var r=this.cachedStreams[e];return r?r.version!==t?(delete this.cachedStreams[e],null):r:null},e.prototype.getEntryFromSessionStorage=function(t,r){var n;try{var o=a.getItem(t);if(!o)return null;n=JSON.parse(o)}catch(t){return this.sessionStorageError||(this.sessionStorageError=!0,Object(m.a)({eventType:"ERROR",name:e.sessionStorageErrorName,detail:"Failed to read from session storage."})),null}return n?n.version!==r?(a.removeItem(t),null):n:null},e.prototype.setSessionStorageItem=function(t,r){try{a.setItem(t,JSON.stringify(r))}catch(t){this.sessionStorageError||(this.sessionStorageError=!0,Object(m.a)({eventType:"ERROR",name:e.sessionStorageErrorName,detail:"Failed to write to session storage."}))}},e.prototype.saveToSessionStorage=function(e,t,r,a,n){var o=this.getEntryFromSessionStorage(e,r);o||(o={version:r,items:{}}),o.items[t]={value:a,expiryTime:n},this.setSessionStorageItem(e,o)},e.prototype.addStreamToCache=function(e,t,r,a,n,o){var i=this.getEntryFromStreamCache(e,r);i||(i={version:r,items:{}}),i.items[t]={value:a,expiryTime:n,streamState:o},this.cachedStreams[e]=i},e.prototype.removeStream=function(e,t){var r=this.cachedStreams[e];r&&delete r.items[t]},e.prototype.getStream=function(t,r,a){var o=e.serializeKey(r),i=this.getEntryFromStreamCache(t,a),s=i&&i.items[o];if(s)return e.currentTime()>s.expiryTime?(this.removeStream(t,o),null):{stream:s.value,streamState:s.streamState};var c=this.getEntryFromSessionStorage(t,a);if(c){var m=c.items[o];if(m){if(e.currentTime()>m.expiryTime)return delete c.items[o],this.setSessionStorageItem(t,c),null;var u=n.Observable.returnValue(m.value);return this.addStreamToCache(t,o,a,u,m.expiryTime,"Complete"),{stream:u,streamState:"Complete"}}}return null},e.prototype.saveStream=function(t,r,a,n,o,i){var s=this,c=e.serializeKey(r);this.addStreamToCache(t,c,a,n,Number.MAX_VALUE,"Pending"),n.subscribe((function(e){if(i&&i(e))s.removeStream(t,c);else{var r=Number.MAX_VALUE;void 0!==o&&(r=(new Date).getTime()+o),s.saveToSessionStorage(t,c,a,e,r);var n=s.cachedStreams[t];if(n){var m=n.items[c];m&&(n.items[c]={value:m.value,expiryTime:r,streamState:"Complete"})}}}),(function(){s.removeStream(t,c)}))},e}();r("O38G");function d(e,t,r,a,i,s){var c,m,l=null,d=n.Observable.create((function(r){var a,n=!l;l||(c=0,m=!1,l=new o.ReplaySubject),a=c<=1?"New":m?"Complete":"Pending";var i=l.subscribe((function(e){m=!0,r.onNext({value:e,streamState:a,clearCache:function(){return u().removeEntry(t)}})}),(function(e){return r.onError(e)}),(function(){return r.onCompleted()}));return n&&e.subscribe((function(e){l&&l.onNext(e)}),(function(e){l&&l.onError(e),l=null}),(function(){return l&&l.onCompleted()})),i})),g=d.select((function(e){return e.value}));return u().saveStream(t,r,a,g,i,s),d.onSubscribe((function(){c++}))}n.Observable.prototype.cache=function(e,t,r,a,o){var i=this,s=u().getStream(e,t,r);if(!s)return d(this,e,t,r,a,o);var c=!1;return n.Observable.create((function(n){if(c&&!(s=u().getStream(e,t,r)))return d(i,e,t,r,a,o);c=!0,s&&s.stream.subscribe((function(t){s&&n.onNext({value:t,streamState:s.streamState,clearCache:function(){return u().removeEntry(e)}})}),(function(e){return n.onError(e)}),(function(){return n.onCompleted()}))}))}},D2tU:function(e,t,r){"use strict";var a,n,o;r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return o})),function(e){e[e.center=0]="center",e[e.contain=1]="contain",e[e.cover=2]="cover",e[e.none=3]="none",e[e.centerCover=4]="centerCover",e[e.centerContain=5]="centerContain"}(a||(a={})),function(e){e[e.landscape=0]="landscape",e[e.portrait=1]="portrait"}(n||(n={})),function(e){e[e.notLoaded=0]="notLoaded",e[e.loaded=1]="loaded",e[e.error=2]="error",e[e.errorLoaded=3]="errorLoaded"}(o||(o={}))},IsnF:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var a=r("9qEO"),n=r("wuwP"),o=r("cDcd"),i=r("mDnK"),s=r("5mBh"),c=r("D2tU"),m=r("B7We"),u=r("r50O"),l=Object(i.a)(),d=/\.svg$/i;var g=o.forwardRef((function(e,t){var r=o.useRef(),a=o.useRef(),i=function(e,t){var r=e.onLoadingStateChange,a=e.onLoad,n=e.onError,i=e.src,s=o.useState(c.c.notLoaded),u=s[0],l=s[1];Object(m.a)((function(){l(c.c.notLoaded)}),[i]),o.useEffect((function(){u===c.c.notLoaded&&(!!t.current&&(i&&t.current.naturalWidth>0&&t.current.naturalHeight>0||t.current.complete&&d.test(i))&&l(c.c.loaded))})),o.useEffect((function(){null==r||r(u)}),[u]);var g=o.useCallback((function(e){null==a||a(e),i&&l(c.c.loaded)}),[i,a]),h=o.useCallback((function(e){null==n||n(e),l(c.c.error)}),[n]);return[u,g,h]}(e,a),g=i[0],h=i[1],f=i[2],p=Object(s.d)(e,s.f,["width","height"]),v=e.src,b=e.alt,S=e.width,C=e.height,y=e.shouldFadeIn,I=void 0===y||y,E=e.shouldStartVisible,O=e.className,j=e.imageFit,w=e.role,N=e.maximizeFrame,F=e.styles,L=e.theme,_=e.loading,x=function(e,t,r,a){var n=o.useRef(t),i=o.useRef();(void 0===i||n.current===c.c.notLoaded&&t===c.c.loaded)&&(i.current=function(e,t,r,a){var n=e.imageFit,o=e.width,i=e.height;if(void 0!==e.coverStyle)return e.coverStyle;if(t===c.c.loaded&&(n===c.b.cover||n===c.b.contain||n===c.b.centerContain||n===c.b.centerCover)&&r.current&&a.current){var s=void 0;if(s="number"==typeof o&&"number"==typeof i&&n!==c.b.centerContain&&n!==c.b.centerCover?o/i:a.current.clientWidth/a.current.clientHeight,r.current.naturalWidth/r.current.naturalHeight>s)return c.a.landscape}return c.a.portrait}(e,t,r,a));return n.current=t,i.current}(e,g,a,r),P=l(F,{theme:L,className:O,width:S,height:C,maximizeFrame:N,shouldFadeIn:I,shouldStartVisible:E,isLoaded:g===c.c.loaded||g===c.c.notLoaded&&e.shouldStartVisible,isLandscape:x===c.a.landscape,isCenter:j===c.b.center,isCenterContain:j===c.b.centerContain,isCenterCover:j===c.b.centerCover,isContain:j===c.b.contain,isCover:j===c.b.cover,isNone:j===c.b.none,isError:g===c.c.error,isNotImageFit:void 0===j});return o.createElement("div",{className:P.root,style:{width:S,height:C},ref:r},o.createElement("img",Object(n.__assign)({},p,{onLoad:h,onError:f,key:"fabricImage"+e.src||"",className:P.image,ref:Object(u.a)(a,t),src:v,alt:b,role:w,loading:_})))}));g.displayName="ImageBase";var h=r("oQm7"),f=r("fXJh"),p={root:"ms-Image",rootMaximizeFrame:"ms-Image--maximizeFrame",image:"ms-Image-image",imageCenter:"ms-Image-image--center",imageContain:"ms-Image-image--contain",imageCover:"ms-Image-image--cover",imageCenterContain:"ms-Image-image--centerContain",imageCenterCover:"ms-Image-image--centerCover",imageNone:"ms-Image-image--none",imageLandscape:"ms-Image-image--landscape",imagePortrait:"ms-Image-image--portrait"},v=Object(a.a)(g,(function(e){var t=e.className,r=e.width,a=e.height,n=e.maximizeFrame,o=e.isLoaded,i=e.shouldFadeIn,s=e.shouldStartVisible,c=e.isLandscape,m=e.isCenter,u=e.isContain,l=e.isCover,d=e.isCenterContain,g=e.isCenterCover,v=e.isNone,b=e.isError,S=e.isNotImageFit,C=e.theme,y=Object(h.r)(p,C),I={position:"absolute",left:"50% /* @noflip */",top:"50%",transform:"translate(-50%,-50%)"},E=Object(f.a)(),O=void 0!==E&&void 0===E.navigator.msMaxTouchPoints,j=u&&c||l&&!c?{width:"100%",height:"auto"}:{width:"auto",height:"100%"};return{root:[y.root,C.fonts.medium,{overflow:"hidden"},n&&[y.rootMaximizeFrame,{height:"100%",width:"100%"}],o&&i&&!s&&h.a.fadeIn400,(m||u||l||d||g)&&{position:"relative"},t],image:[y.image,{display:"block",opacity:0},o&&["is-loaded",{opacity:1}],m&&[y.imageCenter,I],u&&[y.imageContain,O&&{width:"100%",height:"100%",objectFit:"contain"},!O&&j,!O&&I],l&&[y.imageCover,O&&{width:"100%",height:"100%",objectFit:"cover"},!O&&j,!O&&I],d&&[y.imageCenterContain,c&&{maxWidth:"100%"},!c&&{maxHeight:"100%"},I],g&&[y.imageCenterCover,c&&{maxHeight:"100%"},!c&&{maxWidth:"100%"},I],v&&[y.imageNone,{width:"auto",height:"auto"}],S&&[!!r&&!a&&{height:"auto",width:"100%"},!r&&!!a&&{height:"100%",width:"auto"},!!r&&!!a&&{height:"100%",width:"100%"}],c&&y.imageLandscape,!c&&y.imagePortrait,!o&&"is-notLoaded",i&&"is-fadeIn",b&&"is-error"]}}),void 0,{scope:"Image"},!0);v.displayName="Image"},PgSv:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return i}));var a=r("oQm7"),n=Object(a.z)({root:{display:"inline-block"},placeholder:["ms-Icon-placeHolder",{width:"1em"}],image:["ms-Icon-imageContainer",{overflow:"hidden"}]}),o="ms-Icon",i=function(e){var t=e.className,r=e.iconClassName,a=e.isPlaceholder,o=e.isImage,i=e.styles;return{root:[a&&n.placeholder,n.root,o&&n.image,r,t,i&&i.root,i&&i.imageContainer]}}},eoQ1:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"a",(function(){return l}));var a=r("wuwP"),n=r("cDcd"),o=r("PgSv"),i=r("6MuY"),s=r("5mBh"),c=r("TYRs"),m=r("oQm7"),u=Object(i.b)((function(e){var t=Object(m.t)(e)||{subset:{},code:void 0},r=t.code,a=t.subset;return r?{children:r,iconClassName:a.className,fontFamily:a.fontFace&&a.fontFace.fontFamily,mergeImageProps:a.mergeImageProps}:null}),void 0,!0),l=function(e){var t=e.iconName,r=e.className,i=e.style,m=void 0===i?{}:i,l=u(t)||{},d=l.iconClassName,g=l.children,h=l.fontFamily,f=l.mergeImageProps,p=Object(s.d)(e,s.e),v=e["aria-label"]||e.title,b=e["aria-label"]||e["aria-labelledby"]||e.title?{role:f?void 0:"img"}:{"aria-hidden":!0},S=g;return f&&"object"==typeof g&&"object"==typeof g.props&&v&&(S=n.cloneElement(g,{alt:v})),n.createElement("i",Object(a.__assign)({"data-icon-name":t},b,p,f?{title:void 0,"aria-label":void 0}:{},{className:Object(c.a)(o.a,o.b.root,d,!t&&o.b.placeholder,r),style:Object(a.__assign)({fontFamily:h},m)}),S)};Object(i.b)((function(e,t,r){return l({iconName:e,className:t,"aria-label":r})}))},"q+8m":function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var a,n=r("9qEO"),o=r("wuwP"),i=r("cDcd");!function(e){e[e.default=0]="default",e[e.image=1]="image",e[e.Default=1e5]="Default",e[e.Image=100001]="Image"}(a||(a={}));var s=r("IsnF"),c=r("D2tU"),m=r("mDnK"),u=r("5mBh"),l=r("eoQ1"),d=Object(m.a)({cacheSize:100}),g=function(e){function t(t){var r=e.call(this,t)||this;return r._onImageLoadingStateChange=function(e){r.props.imageProps&&r.props.imageProps.onLoadingStateChange&&r.props.imageProps.onLoadingStateChange(e),e===c.c.error&&r.setState({imageLoadError:!0})},r.state={imageLoadError:!1},r}return Object(o.__extends)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,r=e.className,n=e.styles,c=e.iconName,m=e.imageErrorAs,g=e.theme,h="string"==typeof c&&0===c.length,f=!!this.props.imageProps||this.props.iconType===a.image||this.props.iconType===a.Image,p=Object(l.b)(c)||{},v=p.iconClassName,b=p.children,S=p.mergeImageProps,C=d(n,{theme:g,className:r,iconClassName:v,isImage:f,isPlaceholder:h}),y=f?"span":"i",I=Object(u.d)(this.props,u.e,["aria-label"]),E=this.state.imageLoadError,O=Object(o.__assign)(Object(o.__assign)({},this.props.imageProps),{onLoadingStateChange:this._onImageLoadingStateChange}),j=E&&m||s.a,w=this.props["aria-label"]||this.props.ariaLabel,N=O.alt||w||this.props.title,F=!!(N||this.props["aria-labelledby"]||O["aria-label"]||O["aria-labelledby"])?{role:f||S?void 0:"img","aria-label":f||S?void 0:N}:{"aria-hidden":!0},L=b;return S&&b&&"object"==typeof b&&N&&(L=i.cloneElement(b,{alt:N})),i.createElement(y,Object(o.__assign)({"data-icon-name":c},F,I,S?{title:void 0,"aria-label":void 0}:{},{className:C.root}),f?i.createElement(j,Object(o.__assign)({},O)):t||L)},t}(i.Component),h=r("PgSv"),f=Object(n.a)(g,h.c,void 0,{scope:"Icon"},!0);f.displayName="Icon"}}]);