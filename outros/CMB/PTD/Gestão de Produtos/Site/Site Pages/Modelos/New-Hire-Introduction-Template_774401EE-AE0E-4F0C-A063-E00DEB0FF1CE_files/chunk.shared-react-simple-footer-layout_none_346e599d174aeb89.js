(window.webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0=window.webpackJsonp_764afdc3_183e_47f5_8d20_a62aff2b0881_0_1_0||[]).push([[21],{"65Qx":function(e,t,n){"use strict";n.r(t),n.d(t,"SimpleFooter",function(){return _}),n.d(t,"getFooterProps",function(){return f});var a=n("KL1q"),i=n("17wl"),r=n("cDcd"),o=n("UoEp"),s=n("vyKV"),c=n("jidH"),d=n("K9kD"),l=n("9PQO"),u=Object(a.classNamesFunction)();function f(e,t,n,a){var r={footerStrings:t,pageContext:a};if(n&&(r.theme=n),e&&Array.isArray(e))for(var s=0,c=e;s<c.length;s++){var d=c[s];d&&(d.name===o.t.footerNavLogo?r.logo=Object(i.__assign)(Object(i.__assign)({},r.logo),{srcImgUrl:d.url}):d.name===o.t.footerNavName?d.links&&d.links.length&&(r.logo=Object(i.__assign)(Object(i.__assign)({},r.logo),{name:d.links[0].name})):d.name===o.t.footerNavLinks&&(r.links=d.links))}return r}var p=function(e){function t(t){var n=e.call(this,t)||this;return n._onLogoError=function(){n.setState({hasLogoLoadError:!0})},n._onEditLinksClicked=function(){if(d.Engagement.logData({name:"FooterLinks.Edit.Click"}),n.props.onEditNavClicked){var e={links:n.props.links||[],name:o.t.footerNavLinks};n.props.onEditNavClicked(e,void 0,n._updateFooterDisplayLink)}},n._updateFooterDisplayLink=function(e,t){n.props.onFooterLinksUpdated&&n.props.onFooterLinksUpdated(),t&&t()},n.state={hasLogoLoadError:!1},n}return Object(i.__extends)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.styles,a=void 0===n?this.props.getStyles:n,i=t.theme;return this._classNames=u(a,{theme:i}),r.createElement("div",{className:this._classNames.simpleFooterContainer,role:"contentinfo","data-automationid":"SimpleFooter"},r.createElement("div",{className:this._classNames.simpleFooterLogoSlot},this.props.logo&&this._renderLogo(this.props.logo)),r.createElement("div",{className:this._classNames.simpleFooterLinkSlots},this._showEditNavLink&&this._renderEditLink(),this.props.links&&this.props.links.map(function(t,n){return e._renderNavLink(t,n)})))},t.prototype._renderEditLink=function(){return this.props.footerStrings.edit?r.createElement("div",{className:this._classNames.simpleFooterItem,"data-automationid":"SimpleFooter-edit"},r.createElement("button",{className:this._classNames.simpleFooterEditItem,id:"FooterEditLink",onClick:this._onEditLinksClicked,"aria-label":this.props.footerStrings.editAriaLabel?this.props.footerStrings.editAriaLabel:""},this.props.footerStrings.edit)):null},Object.defineProperty(t.prototype,"_showEditNavLink",{get:function(){if(!this.props.pageContext||"portals"===window.teamsCustomAppType)return!1;var e=this.props.pageContext.isAnonymousGuestUser||this._allowExternalUserwEditPermissionKSActivated()&&this.props.pageContext.isExternalGuestUser;return s.e.hasPermission(this.props.pageContext.webPermMasks,s.e.manageLists)&&!e},enumerable:!1,configurable:!0}),t.prototype._getCreateSiteLink=function(){return d.Uri.concatenate(window.location.origin,"_layouts/15/createGroup.aspx?siteTemplate=68")},t.prototype._renderLogo=function(e){var t=!this.state.hasLogoLoadError,n=e.destinationUrl&&e.destinationUrl.length>0?new d.Uri(e.destinationUrl).toString():void 0,i=void 0===n?"_blank":c.e.shouldLinkOpenInSameWindow(n)?"_self":"_blank";if(e.name&&e.srcImgUrl){var o=[];return t&&o.push(r.createElement("div",{className:Object(a.css)(this._classNames.simpleFooterItem,"simpleFooterLogoItem"),key:"logo"},e.destinationUrl&&e.destinationUrl.length>0?r.createElement("a",{href:n,"data-interception":"propagate",target:i,"data-navigationcomponent":Object(l.t)(l.e.Footer)},r.createElement("img",{className:this._classNames.simpleFooterLogoImage,src:new d.Uri(e.srcImgUrl).toString(),onError:this._onLogoError,alt:e.name})):r.createElement("img",{className:this._classNames.simpleFooterLogoImage,src:new d.Uri(e.srcImgUrl).toString(),onError:this._onLogoError,alt:e.name}))),o.push(r.createElement("div",{className:Object(a.css)(this._classNames.simpleFooterItem,"simpleFooterNameItem"),key:"name"},e.destinationUrl&&e.destinationUrl.length?r.createElement("a",{href:n,"data-interception":"propagate",target:i},e.name):e.name)),o}return e.name?r.createElement("div",{className:Object(a.css)(this._classNames.simpleFooterItem,"simpleFooterNameItem")},e.destinationUrl&&e.destinationUrl.length?r.createElement("a",{href:n,"data-interception":"propagate",target:i,"data-navigationcomponent":Object(l.t)(l.e.Footer)},e.name):e.name):t&&e.srcImgUrl?r.createElement("div",{className:Object(a.css)(this._classNames.simpleFooterItem,"simpleFooterLogoItem")},e.destinationUrl&&e.destinationUrl.length>0?r.createElement("a",{href:n,"data-interception":"propagate",target:i},r.createElement("img",{className:this._classNames.simpleFooterLogoImage,src:new d.Uri(e.srcImgUrl).toString(),onError:this._onLogoError,alt:this.props.footerStrings.companyLogoAlt?this.props.footerStrings.companyLogoAlt:""})):r.createElement("img",{className:this._classNames.simpleFooterLogoImage,src:new d.Uri(e.srcImgUrl).toString(),onError:this._onLogoError,alt:this.props.footerStrings.companyLogoAlt?this.props.footerStrings.companyLogoAlt:""})):void 0},t.prototype._renderNavLink=function(e,t){var n=this;if("defaultPoweredBySharePointNode"===e.key)return r.createElement("div",{key:"footerLinkDiv".concat(t),className:this._classNames.simpleFooterItem,"data-automationid":"simpleFooter-defaultPoweredBySharePointNode"},r.createElement("span",null,"".concat(this.props.footerStrings.poweredBy," "),r.createElement("a",{href:this._getCreateSiteLink(),"data-interception":"propagate",target:"_self",onClick:e.onClick},this.props.footerStrings.createSite)));var a=c.e.shouldLinkOpenInSameWindow(e.url)?"_self":"_blank";return r.createElement("div",{className:this._classNames.simpleFooterItem,key:"footerLinkDiv".concat(t)},e.url&&e.url.length&&"http://linkless.header/"!==e.url?r.createElement("a",{href:e.url,"data-interception":"propagate",key:"footerLink".concat(t),target:a,onClick:function(t){return n._itemOnClick(t,e)},"data-navigationcomponent":Object(l.t)(l.e.Footer)},e.name):e.name)},t.prototype._itemOnClick=function(e,t){var n=this.props.pageContext,a=this.props.links?this.props.links.length:0;setTimeout(function(){return d.Engagement.logData({name:"Footer.Link.Click",extraData:{siteId:n&&n.siteId,numFooterLinks:a,layout:"SimpleFooter"}})},0),t.onClick&&t.onClick(e,t)},t.prototype._allowExternalUserwEditPermissionKSActivated=function(){return d.Killswitch.isActivated("6ca65d20-b5b3-4f3e-8c04-6e8553ed6b6c","1/13/2022","Allow exteral user with edit permission to edit footer")},t}(a.BaseComponent),m=n("tNuu"),_=Object(a.styled)(p,function(e){var t=e.theme,n=t.fonts,a=t.semanticColors;return{simpleFooterContainer:{backgroundColor:a.bodyBackground,zIndex:13,minHeight:48,display:"flex",flexWrap:"wrap",justifyContent:"space-between",height:"auto",overflow:"hidden",padding:"0 ".concat(24,"px")},simpleFooterLogoSlot:{display:"flex",fontWeight:Object(m.e)(t).semibold.fontWeight,selectors:{".simpleFooterNameItem":{fontSize:n.medium.fontSize,fontWeight:Object(m.e)(t).semibold.fontWeight,margin:"14px 0 10px 0",lineHeight:"1.4em"},".simpleFooterLogoItem":{margin:"8px 0 4px 0",maxHeight:32,selectors:{a:{maxHeight:32}},lineHeight:"1.4em"}}},simpleFooterLogoImage:{maxHeight:32,marginRight:8},simpleFooterLinkSlots:{padding:0,display:"flex",flexWrap:"wrap"},simpleFooterItem:Object(i.__assign)(Object(i.__assign)({lineHeight:"19px",textAlign:"left",color:a.bodyText},n.medium),{margin:"14px ".concat(24,"px 14px 0"),display:"flex",alignItems:"center",selectors:{a:{color:"inherit",textDecoration:"none",selectors:{":hover":{color:a.actionLinkHovered,textDecoration:"underline"}}},":last-of-type":{marginRight:0}}}),simpleFooterEditItem:Object(i.__assign)(Object(i.__assign)({border:"none",background:"none",color:a.link,cursor:"pointer",padding:0,textDecoration:"none"},n.medium),{selectors:{":hover":{color:a.linkHovered,textDecoration:"underline"}},lineHeight:"19px"})}})},"9PQO":function(e,t,n){"use strict";var a;function i(e){switch(e){case a.CompositeHeader:return"SiteHeader";case a.HubNav:return"HubNav";case a.Footer:return"SiteFooter";default:return"UnknownSource"}}n.d(t,"e",function(){return a}),n.d(t,"t",function(){return i}),function(e){e[e.Unknown=0]="Unknown",e[e.CompositeHeader=1]="CompositeHeader",e[e.HubNav=2]="HubNav",e[e.Footer=3]="Footer"}(a||(a={}))},tNuu:function(e,t,n){"use strict";function a(e){return{regular:{fontWeight:400},semibold:{fontWeight:600},bold:{fontWeight:700}}}n.d(t,"e",function(){return a})}}]);