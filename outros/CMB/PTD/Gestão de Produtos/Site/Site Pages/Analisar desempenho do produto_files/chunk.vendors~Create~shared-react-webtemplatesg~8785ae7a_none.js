(window.webpackJsonpb6917cb1_93a0_4b97_a84d_7cf49975d4ec_0_2_0=window.webpackJsonpb6917cb1_93a0_4b97_a84d_7cf49975d4ec_0_2_0||[]).push([[1],{"1uA/":function(e,t,n){"use strict";n.d(t,"e",function(){return y});var a=n("KL1q"),i=n("17wl"),r=n("cDcd"),o=a.AnimationVariables.durationValue2,s={root:"ms-Modal",main:"ms-Dialog-main",scrollableContent:"ms-Modal-scrollableContent",isOpen:"is-open",layer:"ms-Modal-Layer"},c=n("YyHq"),d=n("aZIE"),l=n("QQr+"),u=n("WdsD"),f=Object(a.memoizeFunction)(function(e,t){return{root:Object(a.mergeStyles)(e,t&&{touchAction:"none",selectors:{"& *":{userSelect:"none"}}})}}),p={start:"touchstart",move:"touchmove",stop:"touchend"},m={start:"mousedown",move:"mousemove",stop:"mouseup"},_=function(e){function t(t){var n=e.call(this,t)||this;return n._currentEventType=m,n._events=[],n._onMouseDown=function(e){var t=r.Children.only(n.props.children).props.onMouseDown;return t&&t(e),n._currentEventType=m,n._onDragStart(e)},n._onMouseUp=function(e){var t=r.Children.only(n.props.children).props.onMouseUp;return t&&t(e),n._currentEventType=m,n._onDragStop(e)},n._onTouchStart=function(e){var t=r.Children.only(n.props.children).props.onTouchStart;return t&&t(e),n._currentEventType=p,n._onDragStart(e)},n._onTouchEnd=function(e){var t=r.Children.only(n.props.children).props.onTouchEnd;t&&t(e),n._currentEventType=p,n._onDragStop(e)},n._onDragStart=function(e){if("number"==typeof e.button&&0!==e.button)return!1;if(!(n.props.handleSelector&&!n._matchesSelector(e.target,n.props.handleSelector)||n.props.preventDragSelector&&n._matchesSelector(e.target,n.props.preventDragSelector))){n._touchId=n._getTouchId(e);var t=n._getControlPosition(e);if(void 0!==t){var i=n._createDragDataFromPosition(t);n.props.onStart&&n.props.onStart(e,i),n.setState({isDragging:!0,lastPosition:t}),n._events=[Object(a.on)(document.body,n._currentEventType.move,n._onDrag,!0),Object(a.on)(document.body,n._currentEventType.stop,n._onDragStop,!0)]}}},n._onDrag=function(e){"touchmove"===e.type&&e.preventDefault();var t=n._getControlPosition(e);if(t){var a=n._createUpdatedDragData(n._createDragDataFromPosition(t)),i=a.position;n.props.onDragChange&&n.props.onDragChange(e,a),n.setState({position:i,lastPosition:t})}},n._onDragStop=function(e){if(n.state.isDragging){var t=n._getControlPosition(e);if(t){var a=n._createDragDataFromPosition(t);n.setState({isDragging:!1,lastPosition:void 0}),n.props.onStop&&n.props.onStop(e,a),n.props.position&&n.setState({position:n.props.position}),n._events.forEach(function(e){return e()})}}},n.state={isDragging:!1,position:n.props.position||{x:0,y:0},lastPosition:void 0},n}return Object(i.__extends)(t,e),t.prototype.componentDidUpdate=function(e){!this.props.position||e.position&&this.props.position===e.position||this.setState({position:this.props.position})},t.prototype.componentWillUnmount=function(){this._events.forEach(function(e){return e()})},t.prototype.render=function(){var e=r.Children.only(this.props.children),t=e.props,n=this.props.position,a=this.state,o=a.position,s=a.isDragging,c=o.x,d=o.y;return n&&!s&&(c=n.x,d=n.y),r.cloneElement(e,{style:Object(i.__assign)(Object(i.__assign)({},t.style),{transform:"translate("+c+"px, "+d+"px)"}),className:f(t.className,this.state.isDragging).root,onMouseDown:this._onMouseDown,onMouseUp:this._onMouseUp,onTouchStart:this._onTouchStart,onTouchEnd:this._onTouchEnd})},t.prototype._getControlPosition=function(e){var t=this._getActiveTouch(e);if(void 0===this._touchId||t){var n=t||e;return{x:n.clientX,y:n.clientY}}},t.prototype._getActiveTouch=function(e){return e.targetTouches&&this._findTouchInTouchList(e.targetTouches)||e.changedTouches&&this._findTouchInTouchList(e.changedTouches)},t.prototype._getTouchId=function(e){var t=e.targetTouches&&e.targetTouches[0]||e.changedTouches&&e.changedTouches[0];if(t)return t.identifier},t.prototype._matchesSelector=function(e,t){if(!e||e===document.body)return!1;var n=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return!!n&&(n.call(e,t)||this._matchesSelector(e.parentElement,t))},t.prototype._findTouchInTouchList=function(e){if(void 0!==this._touchId)for(var t=0;t<e.length;t++)if(e[t].identifier===this._touchId)return e[t]},t.prototype._createDragDataFromPosition=function(e){var t=this.state.lastPosition;return void 0===t?{delta:{x:0,y:0},lastPosition:e,position:e}:{delta:{x:e.x-t.x,y:e.y-t.y},lastPosition:t,position:e}},t.prototype._createUpdatedDragData=function(e){var t=this.state.position;return{position:{x:t.x+e.delta.x,y:t.y+e.delta.y},delta:e.delta,lastPosition:t}},t}(r.Component),h=n("dEWz"),b={eventBubblingEnabled:!1},g=Object(a.classNamesFunction)(),v=function(e){function t(t){var n=e.call(this,t)||this;n._focusTrapZone=r.createRef(),n._focusTrapZoneMergedRef=Object(a.createMergedRef)(),n._registerInitialModalPosition=function(){var e,t=document.querySelector("[data-id="+n.state.id+"]");if(t){var a=t.getBoundingClientRect();!(null===(e=n.props.dragOptions)||void 0===e?void 0:e.keepInBounds)||n._minClampedPosition||n._maxClampedPosition||(n._minClampedPosition={x:-a.x,y:-a.y},n._maxClampedPosition={x:a.x,y:a.y}),n.setState({modalRectangleTop:a.top})}},n._allowScrollOnModal=function(e){e?n._allowTouchBodyScroll?Object(a.allowOverscrollOnElement)(e,n._events):Object(a.allowScrollOnElement)(e,n._events):n._events.off(n._scrollableContent),n._scrollableContent=e},n._onModalContextMenuClose=function(){n.setState({isModalMenuOpen:!1})},n._onModalClose=function(){n._lastSetX=0,n._lastSetY=0,n.setState({isModalMenuOpen:!1,isInKeyboardMoveMode:!1,isOpen:!1,x:0,y:0}),n.props.dragOptions&&n._hasRegisteredKeyUp&&n._events.off(window,"keyup",n._onKeyUp,!0),n.props.onDismissed&&n.props.onDismissed()},n._onDragStart=function(){n.setState({isModalMenuOpen:!1,isInKeyboardMoveMode:!1})},n._onDrag=function(e,t){var a=n.state,i=a.x,r=a.y;n.setState(n._getClampedPosition({x:i+t.delta.x,y:r+t.delta.y}))},n._onDragStop=function(){n.focus()},n._onKeyUp=function(e){e.altKey&&e.ctrlKey&&e.keyCode===a.KeyCodes.space&&Object(a.elementContains)(n._scrollableContent,e.target)&&(n.setState({isModalMenuOpen:!n.state.isModalMenuOpen}),e.preventDefault(),e.stopPropagation())},n._onKeyDown=function(e){if(e.altKey&&e.ctrlKey&&e.keyCode===a.KeyCodes.space)return e.preventDefault(),void e.stopPropagation();if(n.state.isModalMenuOpen&&(e.altKey||e.keyCode===a.KeyCodes.escape)&&n.setState({isModalMenuOpen:!1}),!n.state.isInKeyboardMoveMode||e.keyCode!==a.KeyCodes.escape&&e.keyCode!==a.KeyCodes.enter||(n.setState({isInKeyboardMoveMode:!1}),e.preventDefault(),e.stopPropagation()),n.state.isInKeyboardMoveMode){var t=!0,i=n._getMoveDelta(e);switch(e.keyCode){case a.KeyCodes.escape:n.setState({x:n._lastSetX,y:n._lastSetY});case a.KeyCodes.enter:n._lastSetX=0,n._lastSetY=0,n.setState({isInKeyboardMoveMode:!1});break;case a.KeyCodes.up:n.setState({y:n._getClampedPositionY(n.state.y-i)});break;case a.KeyCodes.down:n.setState({y:n._getClampedPositionY(n.state.y+i)});break;case a.KeyCodes.left:n.setState({x:n._getClampedPositionX(n.state.x-i)});break;case a.KeyCodes.right:n.setState({x:n._getClampedPositionX(n.state.x+i)});break;default:t=!1}t&&(e.preventDefault(),e.stopPropagation())}},n._onEnterKeyboardMoveMode=function(){n._lastSetX=n.state.x,n._lastSetY=n.state.y,n.setState({isInKeyboardMoveMode:!0,isModalMenuOpen:!1}),n._events.on(window,"keydown",n._onKeyDown,!0)},n._onExitKeyboardMoveMode=function(e){var t,a,i;null===(i=null===(t=n.props.focusTrapZoneProps)||void 0===t?void 0:(a=t).onBlur)||void 0===i||i.call(a,e),n._lastSetX=0,n._lastSetY=0,n.setState({isInKeyboardMoveMode:!1}),n._events.off(window,"keydown",n._onKeyDown,!0)},n._registerForKeyUp=function(){n._hasRegisteredKeyUp||(n._events.on(window,"keyup",n._onKeyUp,!0),n._hasRegisteredKeyUp=!0)},n._async=new a.Async(n),n._events=new a.EventGroup(n),Object(h.initializeComponentRef)(n),Object(a.warnDeprecations)("Modal",t,{onLayerDidMount:"layerProps.onLayerDidMount"}),n.state={id:Object(a.getId)("Modal"),isOpen:t.isOpen,isVisible:t.isOpen,hasBeenOpened:t.isOpen,x:0,y:0},n._lastSetX=0,n._lastSetY=0;var i=n.props.allowTouchBodyScroll,o=void 0!==i&&i;return n._allowTouchBodyScroll=o,n}return Object(i.__extends)(t,e),t.prototype.UNSAFE_componentWillReceiveProps=function(e){clearTimeout(this._onModalCloseTimer),e.isOpen&&(this.state.isOpen?this.setState({hasBeenOpened:!0,isVisible:!0}):(this.setState({isOpen:!0}),e.dragOptions&&this._registerForKeyUp())),!e.isOpen&&this.state.isOpen&&(this._onModalCloseTimer=this._async.setTimeout(this._onModalClose,1e3*parseFloat(o)),this.setState({isVisible:!1}))},t.prototype.componentDidMount=function(){var e=this;this.state.isOpen&&this.state.isVisible&&(this._registerForKeyUp(),requestAnimationFrame(function(){return setTimeout(e._registerInitialModalPosition,0)}))},t.prototype.componentDidUpdate=function(e,t){var n=this;e.isOpen||t.isVisible||this.setState({isVisible:!0}),!e.isOpen&&this.props.isOpen&&requestAnimationFrame(function(){return setTimeout(n._registerInitialModalPosition,0)})},t.prototype.componentWillUnmount=function(){this._async.dispose(),this._events.dispose()},t.prototype.render=function(){var e,t,n,o,s,f,p,m,h,v,y,S,D,I,x,C=this.props,O=C.className,w=C.containerClassName,E=C.scrollableContentClassName,A=C.elementToFocusOnDismiss,L=C.firstFocusableSelector,k=C.focusTrapZoneProps,M=C.forceFocusInsideTrap,P=C.ignoreExternalFocusing,T=C.isBlocking,U=C.isClickableOutsideFocusTrap,F=C.isDarkOverlay,H=C.onDismiss,R=C.layerProps,N=C.overlay,B=C.responsiveMode,j=C.titleAriaId,V=C.styles,z=C.subtitleAriaId,G=C.theme,K=C.topOffsetFixed,W=C.onLayerDidMount,q=C.isModeless,Q=C.isAlert,Y=C.dragOptions,J=C.enableAriaHiddenSiblings,X=this.state,Z=X.isOpen,$=X.isVisible,ee=X.hasBeenOpened,te=X.modalRectangleTop,ne=X.x,ae=X.y,ie=X.isInKeyboardMoveMode;if(!Z)return null;var re=void 0===R?"":R.className,oe=null!=Q?Q:T&&!q,se=g(V,{theme:G,className:O,containerClassName:w,scrollableContentClassName:E,isOpen:Z,isVisible:$,hasBeenOpened:ee,modalRectangleTop:te,topOffsetFixed:K,isModeless:q,layerClassName:re,isDefaultDragHandle:Y&&!Y.dragHandleSelector}),ce=Object(i.__assign)(Object(i.__assign)(Object(i.__assign)({},b),this.props.layerProps),{onLayerDidMount:R&&R.onLayerDidMount?R.onLayerDidMount:W,insertFirst:q,className:se.layer}),de=r.createElement(a.FocusTrapZone,Object(i.__assign)({},k,{"data-id":this.state.id,componentRef:this._focusTrapZoneMergedRef(this._focusTrapZone,null===(e=k)||void 0===e?void 0:e.componentRef),className:Object(a.css)(se.main,null===(t=k)||void 0===t?void 0:t.className),elementToFocusOnDismiss:(o=null===(n=k)||void 0===n?void 0:n.elementToFocusOnDismiss,null!=o?o:A),isClickableOutsideFocusTrap:(f=null===(s=k)||void 0===s?void 0:s.isClickableOutsideFocusTrap,null!=f?f:q||U||!T),ignoreExternalFocusing:(m=null===(p=k)||void 0===p?void 0:p.ignoreExternalFocusing,null!=m?m:P),forceFocusInsideTrap:(v=null===(h=k)||void 0===h?void 0:h.forceFocusInsideTrap,(null!=v?v:M)&&!q),firstFocusableSelector:(null===(y=k)||void 0===y?void 0:y.firstFocusableSelector)||L,focusPreviouslyFocusedInnerElement:(D=null===(S=k)||void 0===S?void 0:S.focusPreviouslyFocusedInnerElement,null==D||D),onBlur:ie?this._onExitKeyboardMoveMode:void 0,enableAriaHiddenSiblings:(x=null===(I=k)||void 0===I?void 0:I.enableAriaHiddenSiblings,null!=x?x:J)}),Y&&ie&&r.createElement("div",{className:se.keyboardMoveIconContainer},Y.keyboardMoveIconProps?r.createElement(u.Icon,Object(i.__assign)({},Y.keyboardMoveIconProps)):r.createElement(u.Icon,{iconName:"move",className:se.keyboardMoveIcon})),r.createElement("div",{ref:this._allowScrollOnModal,className:se.scrollableContent,"data-is-scrollable":!0},Y&&this.state.isModalMenuOpen&&r.createElement(Y.menu,{items:[{key:"move",text:Y.moveMenuItemText,onClick:this._onEnterKeyboardMoveMode},{key:"close",text:Y.closeMenuItemText,onClick:this._onModalClose}],onDismiss:this._onModalContextMenuClose,alignTargetEdge:!0,coverTarget:!0,directionalHint:a.DirectionalHint.topLeftEdge,directionalHintFixed:!0,shouldFocusOnMount:!0,target:this._scrollableContent}),this.props.children));return B>=l.ResponsiveMode.small?r.createElement(c.e,Object(i.__assign)({},ce),r.createElement(d.Popup,{role:oe?"alertdialog":"dialog","aria-modal":!q,ariaLabelledBy:j,ariaDescribedBy:z,onDismiss:H,shouldRestoreFocus:!P},r.createElement("div",{className:se.root,role:q?void 0:"document"},!q&&r.createElement(a.Overlay,Object(i.__assign)({isDarkThemed:F,onClick:T?void 0:H,allowTouchBodyScroll:this._allowTouchBodyScroll},N)),Y?r.createElement(_,{handleSelector:Y.dragHandleSelector||"."+se.main.split(" ")[0],preventDragSelector:"button",onStart:this._onDragStart,onDragChange:this._onDrag,onStop:this._onDragStop,position:{x:ne,y:ae}},de):de))):null},t.prototype.focus=function(){this._focusTrapZone.current&&this._focusTrapZone.current.focus()},t.prototype._getClampedPosition=function(e){return this.props.dragOptions&&this.props.dragOptions.keepInBounds?{x:this._getClampedPositionX(e.x),y:this._getClampedPositionY(e.y)}:e},t.prototype._getClampedPositionY=function(e){var t=this._minClampedPosition,n=this._maxClampedPosition;return t&&(e=Math.max(t.y,e)),n&&(e=Math.min(n.y,e)),e},t.prototype._getClampedPositionX=function(e){var t=this._minClampedPosition,n=this._maxClampedPosition;return t&&(e=Math.max(t.x,e)),n&&(e=Math.min(n.x,e)),e},t.prototype._getMoveDelta=function(e){var t=10;return e.shiftKey?e.ctrlKey||(t=50):e.ctrlKey&&(t=1),t},t.defaultProps={isOpen:!1,isDarkOverlay:!0,isBlocking:!1,className:"",containerClassName:""},Object(i.__decorate)([l.withResponsiveMode],t)}(r.Component),y=Object(a.styled)(v,function(e){var t,n=e.className,i=e.containerClassName,r=e.scrollableContentClassName,c=e.isOpen,d=e.isVisible,l=e.hasBeenOpened,u=e.modalRectangleTop,f=e.theme,p=e.topOffsetFixed,m=e.isModeless,_=e.layerClassName,h=e.isDefaultDragHandle,b=f.palette,g=f.effects,v=f.fonts,y=Object(a.getGlobalClassNames)(s,f);return{root:[y.root,v.medium,{backgroundColor:"transparent",position:m?"absolute":"fixed",height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",opacity:0,pointerEvents:"none",transition:"opacity "+o},p&&"number"==typeof u&&l&&{alignItems:"flex-start"},c&&y.isOpen,d&&{opacity:1,pointerEvents:"auto"},n],main:[y.main,{boxShadow:g.elevation64,borderRadius:g.roundedCorner2,backgroundColor:b.white,boxSizing:"border-box",position:"relative",textAlign:"left",outline:"3px solid transparent",maxHeight:"calc(100% - 32px)",maxWidth:"calc(100% - 32px)",minHeight:"176px",minWidth:"288px",overflowY:"auto",zIndex:m?a.ZIndexes.Layer:void 0},p&&"number"==typeof u&&l&&{top:u},h&&{cursor:"move"},i],scrollableContent:[y.scrollableContent,{overflowY:"auto",flexGrow:1,maxHeight:"100vh",selectors:(t={},t["@supports (-webkit-overflow-scrolling: touch)"]={maxHeight:window.innerHeight},t)},r],layer:m&&[_,y.layer,{position:"static",width:"unset",height:"unset"}],keyboardMoveIconContainer:{position:"absolute",display:"flex",justifyContent:"center",width:"100%",padding:"3px 0px"},keyboardMoveIcon:{fontSize:v.xLargePlus.fontSize,width:"24px"}}},void 0,{scope:"Modal",fields:["theme","styles","enableAriaHiddenSiblings"]})},WdsD:function(e,t,n){var a=n("KL1q");e.exports=a.workaround_IconIndex},YyHq:function(e,t,n){"use strict";n.d(t,"e",function(){return m});var a,i=n("KL1q"),r=n("17wl"),o=n("cDcd"),s=n("faye"),c={},d={},l=Object(i.classNamesFunction)(),u=function(e){function t(t){var n=e.call(this,t)||this;return n._rootRef=o.createRef(),n._createLayerElement=function(){var e,t,a=n.props.hostId,r=Object(i.getDocument)(n._rootRef.current),o=n._getHost();if(o){n._removeLayerElement();var s=null===(t=null!=(e=o.ownerDocument)?e:r)||void 0===t?void 0:t.createElement("div");if(s){var c=n._getClassNames();s.className=c.root,Object(i.setPortalAttribute)(s),Object(i.setVirtualParent)(s,n._rootRef.current),n.props.insertFirst?o.insertBefore(s,o.firstChild):o.appendChild(s),n.setState({hostId:a,layerElement:s},function(){var e=n.props,t=e.onLayerDidMount,a=e.onLayerMounted;a&&a(),t&&t()})}}},n.state={},n}return Object(r.__extends)(t,e),t.prototype.componentDidMount=function(){var e=this.props.hostId;this._createLayerElement(),e&&function(e,t){c[e]||(c[e]=[]),c[e].push(t);var n=d[e];if(n)for(var a=0,i=n;a<i.length;a++)i[a].notifyLayersChanged()}(e,this._createLayerElement)},t.prototype.render=function(){var e=this.state.layerElement,t=this._getClassNames(),n=this.props.eventBubblingEnabled;return o.createElement("span",{className:"ms-layer",ref:this._rootRef},e&&s.createPortal(o.createElement(i.Fabric,Object(r.__assign)({},!n&&(a||(a={},["onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOver","onMouseOut","onMouseUp","onTouchMove","onTouchStart","onTouchCancel","onTouchEnd","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit"].forEach(function(e){return a[e]=f})),a),{className:t.content}),this.props.children),e))},t.prototype.componentDidUpdate=function(){this.props.hostId!==this.state.hostId&&this._createLayerElement()},t.prototype.componentWillUnmount=function(){var e=this.props.hostId;this._removeLayerElement(),e&&function(e,t){var n=c[e];if(n){var a=n.indexOf(t);a>=0&&(n.splice(a,1),0===n.length&&delete c[e])}var i=d[e];if(i)for(var r=0,o=i;r<o.length;r++)o[r].notifyLayersChanged()}(e,this._createLayerElement)},t.prototype._removeLayerElement=function(){var e=this.props.onLayerWillUnmount,t=this.state.layerElement;if(t&&Object(i.setVirtualParent)(t,null),e&&e(),t&&t.parentNode){var n=t.parentNode;n&&n.removeChild(t)}},t.prototype._getClassNames=function(){var e=this.props,t=e.className,n=e.styles,a=e.theme;return l(n,{theme:a,className:t,isNotHost:!this.props.hostId})},t.prototype._getHost=function(){var e,t,n,a,r,o=this.props.hostId,s=Object(i.getDocument)(this._rootRef.current);if(o){var c=function(e){var t=d[e];return t&&t[0]||void 0}(o);return c?null!=(e=c.rootRef.current)?e:null:null!=(n=null===(t=s)||void 0===t?void 0:t.getElementById(o))?n:null}return null!=(r=null===(a=s)||void 0===a?void 0:a.body)?r:null},t.defaultProps={onLayerDidMount:function(){},onLayerWillUnmount:function(){}},Object(r.__decorate)([Object(i.customizable)("Layer",["theme","hostId"])],t)}(o.Component),f=function(e){e.eventPhase===Event.BUBBLING_PHASE&&"mouseenter"!==e.type&&"mouseleave"!==e.type&&"touchstart"!==e.type&&"touchend"!==e.type&&e.stopPropagation()},p={root:"ms-Layer",rootNoHost:"ms-Layer--fixed",content:"ms-Layer-content"},m=Object(i.styled)(u,function(e){var t=e.className,n=e.isNotHost,a=e.theme,r=Object(i.getGlobalClassNames)(p,a);return{root:[r.root,a.fonts.medium,n&&[r.rootNoHost,{position:"fixed",zIndex:i.ZIndexes.Layer,top:0,left:0,bottom:0,right:0,visibility:"hidden"}],t],content:[r.content,{visibility:"visible"}]}},void 0,{scope:"Layer",fields:["hostId","theme","styles"]})},aZIE:function(e,t,n){var a=n("KL1q");e.exports=a.workaround_PopupIndex},dEWz:function(e,t,n){var a=n("fglE");e.exports=a._Utilities}}]);