(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5e53ff"],{"83f2":function(t,n,e){"use strict";e.r(n),e.d(n,"ion_menu",function(){return l}),e.d(n,"ion_menu_button",function(){return y}),e.d(n,"ion_menu_controller",function(){return w}),e.d(n,"ion_menu_toggle",function(){return x});var i=e("9ab4"),o=e("54a1"),r=e("027b"),a=(e("0995"),e("bb79")),s=e("8b3a"),u=e("8f96"),c=e("975a"),d=e("9342"),h=void 0,l=function(){function t(t){Object(o["l"])(this,t),this.lastOnEnd=0,this.blocker=a["GESTURE_CONTROLLER"].createBlocker({disableScroll:!0}),this.mode=Object(o["e"])(this),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(o["d"])(this,"ionWillOpen",7),this.ionWillClose=Object(o["d"])(this,"ionWillClose",7),this.ionDidOpen=Object(o["d"])(this,"ionDidOpen",7),this.ionDidClose=Object(o["d"])(this,"ionDidClose",7),this.ionMenuChange=Object(o["d"])(this,"ionMenuChange",7)}return t.prototype.typeChanged=function(t,n){var e=this.contentEl;e&&(void 0!==n&&e.classList.remove("menu-content-"+n),e.classList.add("menu-content-"+t),e.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(c["h"])(this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.connectedCallback=function(){return i["a"](this,void 0,void 0,function(){var t,n,o,a,u=this;return i["c"](this,function(i){switch(i.label){case 0:return void 0===this.type&&(this.type=r["b"].get("menuType","ios"===this.mode?"reveal":"overlay")),t=this.el,n=t.parentNode,o=void 0!==this.contentId?document.getElementById(this.contentId):n&&n.querySelector&&n.querySelector("[main]"),o&&o.tagName?(this.contentEl=o,o.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),s["a"]._register(this),a=this,[4,Promise.resolve().then(e.bind(null,"bb79"))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]);case 1:return a.gesture=i.sent().createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(t){return u.canStart(t)},onWillStart:function(){return u.onWillStart()},onStart:function(){return u.onStart()},onMove:function(t){return u.onMove(t)},onEnd:function(t){return u.onEnd(t)}}),this.updateState(),[2]}})})},t.prototype.componentDidLoad=function(){return i["a"](this,void 0,void 0,function(){return i["c"](this,function(t){return this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState(),[2]})})},t.prototype.disconnectedCallback=function(){this.blocker.destroy(),s["a"]._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){if(this._isOpen&&this.lastOnEnd<t.timeStamp-100){var n=!!t.composedPath&&!t.composedPath().includes(this.menuInnerEl);n&&(t.preventDefault(),t.stopPropagation(),this.close())}},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,n){return void 0===n&&(n=!0),s["a"]._setOpen(this,t,n)},t.prototype._setOpen=function(t,n){return void 0===n&&(n=!0),i["a"](this,void 0,void 0,function(){return i["c"](this,function(e){switch(e.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,!1]:(this.beforeAnimation(t),[4,this.loadAnimation()]);case 1:return e.sent(),[4,this.startAnimation(t,n)];case 2:return e.sent(),this.afterAnimation(t),[2,!0]}})})},t.prototype.loadAnimation=function(){return i["a"](this,void 0,void 0,function(){var t,n;return i["c"](this,function(e){switch(e.label){case 0:return t=this.menuInnerEl.offsetWidth,t===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),n=this,[4,s["a"]._createAnimation(this.type,this)]);case 1:return n.animation=e.sent(),r["b"].getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"),[2]}})})},t.prototype.startAnimation=function(t,n){return i["a"](this,void 0,void 0,function(){var e,o;return i["c"](this,function(i){switch(i.label){case 0:return e=!t,o=this.animation.direction(e?"reverse":"normal").easing(e?"cubic-bezier(0.4, 0.0, 0.6, 1)":"cubic-bezier(0.0, 0.0, 0.2, 1)"),n?[4,o.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:o.playSync(),i.label=3;case 3:return[2]}})})},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!s["a"]._getOpenSync()&&b(window,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.direction(this._isOpen?"reverse":"normal").progressStart(!0):Object(c["b"])(!1,"isAnimating has to be true")},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var n=p(t.deltaX,this._isOpen,this.isEndSide),e=n/this.width;this.animation.progressStep(e)}else Object(c["b"])(!1,"isAnimating has to be true")},t.prototype.onEnd=function(t){var n=this;if(this.isAnimating&&this.animation){var e=this._isOpen,i=this.isEndSide,o=p(t.deltaX,e,i),r=this.width,a=o/r,s=t.velocityX,u=r/2,h=s>=0&&(s>.2||t.deltaX>u),l=s<=0&&(s<-.2||t.deltaX<-u),b=e?i?h:l:i?l:h,f=!e&&b;e&&!b&&(f=!0),this.lastOnEnd=t.timeStamp;var m=b?.001:-.001,g=a<=0?.01:a;m+=Object(d["b"])(new d["a"](0,0),new d["a"](.4,0),new d["a"](.6,1),new d["a"](1,1),g),this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(function(){return n.afterAnimation(f)},{oneTimeCallback:!0}).progressEnd(b,m,300)}else Object(c["b"])(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(t){Object(c["b"])(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(f),this.backdropEl&&this.backdropEl.classList.add(m),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()},t.prototype.afterAnimation=function(t){Object(c["b"])(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(g),this.ionDidOpen.emit()):(this.el.classList.remove(f),this.contentEl&&this.contentEl.classList.remove(g),this.backdropEl&&this.backdropEl.classList.remove(m),this.animation&&this.animation.stop(),this.ionDidClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||s["a"]._setActiveMenu(this),Object(c["b"])(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){Object(c["b"])(this._isOpen,"menu cannot be closed"),this.isAnimating=!0;var t=this.animation.direction("reverse");t.playSync(),this.afterAnimation(!1)},t.prototype.render=function(){var t,n=this,e=this,i=e.isEndSide,r=e.type,a=e.disabled,s=e.mode,u=e.isPaneVisible;return Object(o["i"])(o["a"],{role:"navigation",class:(t={},t[s]=!0,t["menu-type-"+r]=!0,t["menu-enabled"]=!a,t["menu-side-end"]=i,t["menu-side-start"]=!i,t["menu-pane-visible"]=u,t)},Object(o["i"])("div",{class:"menu-inner",ref:function(t){return n.menuInnerEl=t}},Object(o["i"])("slot",null)),Object(o["i"])("ion-backdrop",{ref:function(t){return n.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o["f"])(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),p=function(t,n,e){return Math.max(0,n!==e?-t:t)},b=function(t,n,e,i){return e?n>=t.innerWidth-i:n<=i},f="show-menu",m="show-backdrop",g="menu-content-open",v=function(t){return i["a"](h,void 0,void 0,function(){var n,e;return i["c"](this,function(i){switch(i.label){case 0:return[4,s["a"].get(t)];case 1:return n=i.sent(),e=n,e?[4,n.isActive()]:[3,3];case 2:e=i.sent(),i.label=3;case 3:return[2,!!e]}})})},y=function(){function t(t){var n=this;Object(o["l"])(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=function(){return i["a"](n,void 0,void 0,function(){return i["c"](this,function(t){return[2,s["a"].toggle(this.menu)]})})}}return t.prototype.componentDidLoad=function(){this.visibilityChanged()},t.prototype.visibilityChanged=function(){return i["a"](this,void 0,void 0,function(){var t;return i["c"](this,function(n){switch(n.label){case 0:return t=this,[4,v(this.menu)];case 1:return t.visible=n.sent(),[2]}})})},t.prototype.render=function(){var t,n=this,e=n.color,i=n.disabled,a=Object(o["e"])(this),s=r["b"].get("menuIcon","menu"),c=this.autoHide&&!this.visible,d={type:this.type};return Object(o["i"])(o["a"],{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":c?"true":null,class:Object.assign((t={},t[a]=!0,t),Object(u["a"])(e),{button:!0,"menu-button-hidden":c,"menu-button-disabled":i,"ion-activatable":!0,"ion-focusable":!0})},Object(o["i"])("button",Object.assign({},d,{disabled:i,class:"button-native"}),Object(o["i"])("slot",null,Object(o["i"])("ion-icon",{icon:s,mode:a,lazy:!1})),"md"===a&&Object(o["i"])("ion-ripple-effect",{type:"unbounded"})))},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}"},enumerable:!0,configurable:!0}),t}(),w=function(){function t(t){Object(o["l"])(this,t)}return t.prototype.open=function(t){return s["a"].open(t)},t.prototype.close=function(t){return s["a"].close(t)},t.prototype.toggle=function(t){return s["a"].toggle(t)},t.prototype.enable=function(t,n){return s["a"].enable(t,n)},t.prototype.swipeGesture=function(t,n){return s["a"].swipeGesture(t,n)},t.prototype.isOpen=function(t){return s["a"].isOpen(t)},t.prototype.isEnabled=function(t){return s["a"].isEnabled(t)},t.prototype.get=function(t){return s["a"].get(t)},t.prototype.getOpen=function(){return s["a"].getOpen()},t.prototype.getMenus=function(){return s["a"].getMenus()},t.prototype.isAnimating=function(){return s["a"].isAnimating()},t.prototype.registerAnimation=function(t,n){return i["a"](this,void 0,void 0,function(){return i["c"](this,function(e){return[2,s["a"].registerAnimation(t,n)]})})},Object.defineProperty(t,"style",{get:function(){return".menu-content{-webkit-transform:translateZ(0);transform:translateZ(0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}.ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}[dir=rtl].ios .menu-content-reveal{-webkit-box-shadow:8px 0 42px rgba(0,0,0,.08);box-shadow:8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}"},enumerable:!0,configurable:!0}),t}(),x=function(){function t(t){var n=this;Object(o["l"])(this,t),this.visible=!1,this.autoHide=!0,this.onClick=function(){return s["a"].toggle(n.menu)}}return t.prototype.connectedCallback=function(){this.visibilityChanged()},t.prototype.visibilityChanged=function(){return i["a"](this,void 0,void 0,function(){var t;return i["c"](this,function(n){switch(n.label){case 0:return t=this,[4,v(this.menu)];case 1:return t.visible=n.sent(),[2]}})})},t.prototype.render=function(){var t,n=Object(o["e"])(this),e=this.autoHide&&!this.visible;return Object(o["i"])(o["a"],{onClick:this.onClick,"aria-hidden":e?"true":null,class:(t={},t[n]=!0,t["menu-toggle-hidden"]=e,t)},Object(o["i"])("slot",null))},Object.defineProperty(t,"style",{get:function(){return":host(.menu-toggle-hidden){display:none}"},enumerable:!0,configurable:!0}),t}()},"8f96":function(t,n,e){"use strict";e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u}),e.d(n,"c",function(){return r}),e.d(n,"d",function(){return d});var i=e("9ab4"),o=void 0,r=function(t,n){return null!==n.closest(t)},a=function(t){var n;return"string"===typeof t&&t.length>0?(n={"ion-color":!0},n["ion-color-"+t]=!0,n):void 0},s=function(t){if(void 0!==t){var n=Array.isArray(t)?t:t.split(" ");return n.filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t})}return[]},u=function(t){var n={};return s(t).forEach(function(t){return n[t]=!0}),n},c=/^[a-z][a-z0-9+\-.]*:/,d=function(t,n,e){return i["a"](o,void 0,void 0,function(){var o;return i["c"](this,function(i){return null!=t&&"#"!==t[0]&&!c.test(t)&&(o=document.querySelector("ion-router"),o)?(null!=n&&n.preventDefault(),[2,o.push(t,e)]):[2,!1]})})}},9342:function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o});var i=function(){function t(t,n){this.x=t,this.y=n}return t}(),o=function(t,n,e,i,o){var s=a(t.y,n.y,e.y,i.y,o);return r(t.x,n.x,e.x,i.x,s[0])},r=function(t,n,e,i,o){var r=3*n*Math.pow(o-1,2),a=-3*e*o+3*e+i*o,s=t*Math.pow(o-1,3);return o*(r+o*a)-s},a=function(t,n,e,i,o){t-=o,n-=o,e-=o,i-=o;var r=u(i-3*e+3*n-t,3*e-6*n+3*t,3*n-3*t,t);return r.filter(function(t){return t>=0&&t<=1})},s=function(t,n,e){var i=n*n-4*t*e;return i<0?[]:[(-n+Math.sqrt(i))/(2*t),(-n-Math.sqrt(i))/(2*t)]},u=function(t,n,e,i){if(0===t)return s(n,e,i);n/=t,e/=t,i/=t;var o=(3*e-n*n)/3,r=(2*n*n*n-9*n*e+27*i)/27;if(0===o)return[Math.pow(-r,1/3)];if(0===r)return[Math.sqrt(-o),-Math.sqrt(-o)];var a=Math.pow(r/2,2)+Math.pow(o/3,3);if(0===a)return[Math.pow(r/2,.5)-n/3];if(a>0)return[Math.pow(-r/2+Math.sqrt(a),1/3)-Math.pow(r/2+Math.sqrt(a),1/3)-n/3];var u=Math.sqrt(Math.pow(-o/3,3)),c=Math.acos(-r/(2*Math.sqrt(Math.pow(-o/3,3)))),d=2*Math.pow(u,1/3);return[d*Math.cos(c/3)-n/3,d*Math.cos((c+2*Math.PI)/3)-n/3,d*Math.cos((c+4*Math.PI)/3)-n/3]}},"975a":function(t,n,e){"use strict";e.d(n,"a",function(){return i}),e.d(n,"b",function(){return u}),e.d(n,"c",function(){return s}),e.d(n,"d",function(){return l}),e.d(n,"e",function(){return p}),e.d(n,"f",function(){return r}),e.d(n,"g",function(){return o}),e.d(n,"h",function(){return h}),e.d(n,"i",function(){return c}),e.d(n,"j",function(){return d}),e.d(n,"k",function(){return a});var i=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},r=function(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null},a=function(t,n,e,i,r){if(t||o(n)){var a=n.querySelector("input.aux-input");a||(a=n.ownerDocument.createElement("input"),a.type="hidden",a.classList.add("aux-input"),n.appendChild(a)),a.disabled=r,a.name=e,a.value=i||""}},s=function(t,n,e){return Math.max(t,Math.min(n,e))},u=function(t,n){if(!t){var e="ASSERT: "+n;throw console.error(e),new Error(e)}},c=function(t){return t.timeStamp||Date.now()},d=function(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},h=function(t){var n="rtl"===document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},l=function(t,n){var e=t._original||t;return{_original:t,emit:p(e.emit.bind(e),n)}},p=function(t,n){var e;return void 0===n&&(n=0),function(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(i))}}}}]);
//# sourceMappingURL=chunk-5a5e53ff.532d81ed.js.map