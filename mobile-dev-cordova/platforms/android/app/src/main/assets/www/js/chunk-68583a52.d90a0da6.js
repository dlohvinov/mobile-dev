(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68583a52"],{"8f96":function(r,t,e){"use strict";e.d(t,"a",function(){return a}),e.d(t,"b",function(){return c}),e.d(t,"c",function(){return s}),e.d(t,"d",function(){return f});var n=e("9ab4"),i=void 0,s=function(r,t){return null!==t.closest(r)},a=function(r){var t;return"string"===typeof r&&r.length>0?(t={"ion-color":!0},t["ion-color-"+r]=!0,t):void 0},o=function(r){if(void 0!==r){var t=Array.isArray(r)?r:r.split(" ");return t.filter(function(r){return null!=r}).map(function(r){return r.trim()}).filter(function(r){return""!==r})}return[]},c=function(r){var t={};return o(r).forEach(function(r){return t[r]=!0}),t},l=/^[a-z][a-z0-9+\-.]*:/,f=function(r,t,e){return n["a"](i,void 0,void 0,function(){var i;return n["c"](this,function(n){return null!=r&&"#"!==r[0]&&!l.test(r)&&(i=document.querySelector("ion-router"),i)?(null!=t&&t.preventDefault(),[2,i.push(r,e)]):[2,!1]})})}},e11b:function(r,t,e){"use strict";e.r(t),e.d(t,"ion_spinner",function(){return c});var n=e("54a1"),i=e("027b"),s=e("8f96"),a={bubbles:{dur:1e3,circles:9,fn:function(r,t,e){var n=r*t/e-r+"ms",i=2*Math.PI*t/e;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(r,t,e){var n=t/e,i=r*n-r+"ms",s=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:44,cy:44,fill:"none",viewBox:"22 22 44 44",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(r,t){var e=-110*t+"ms";return{r:6,style:{left:9-9*t+"px","animation-delay":e}}}},lines:{dur:1e3,lines:12,fn:function(r,t,e){var n="rotate("+(30*t+(t<6?180:-180))+"deg)",i=r*t/e-r+"ms";return{y1:17,y2:29,style:{transform:n,"animation-delay":i}}}},"lines-small":{dur:1e3,lines:12,fn:function(r,t,e){var n="rotate("+(30*t+(t<6?180:-180))+"deg)",i=r*t/e-r+"ms";return{y1:12,y2:20,style:{transform:n,"animation-delay":i}}}}},o=a,c=function(){function r(r){Object(n["l"])(this,r),this.paused=!1}return r.prototype.getName=function(){var r=this.name||i["b"].get("spinner"),t=Object(n["e"])(this);return r||("ios"===t?"lines":"circular")},r.prototype.render=function(){var r,t=this,e=Object(n["e"])(t),a=t.getName(),c=o[a]||o["lines"],u="number"===typeof t.duration&&t.duration>10?t.duration:c.dur,p=[];if(void 0!==c.circles)for(var m=0;m<c.circles;m++)p.push(l(c,u,m,c.circles));else if(void 0!==c.lines)for(m=0;m<c.lines;m++)p.push(f(c,u,m,c.lines));return Object(n["i"])(n["a"],{class:Object.assign({},Object(s["a"])(t.color),(r={},r[e]=!0,r["spinner-"+a]=!0,r["spinner-paused"]=!!t.paused||i["b"].getBoolean("_testing"),r)),role:"progressbar",style:c.elmDuration?{animationDuration:u+"ms"}:{}},p)},Object.defineProperty(r,"style",{get:function(){return":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host-context([dir=rtl]) svg,[dir=rtl] svg{left:unset;right:unset;right:0;-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke-width:3.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) circle,:host(.spinner-paused) svg{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1);transform:scale(1);opacity:.9}50%{-webkit-transform:scale(.4);transform:scale(.4);opacity:.3}to{-webkit-transform:scale(1);transform:scale(1);opacity:.9}}@-webkit-keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinner-circular{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px}to{stroke-dasharray:100px,200px;stroke-dashoffset:-125px}}"},enumerable:!0,configurable:!0}),r}(),l=function(r,t,e,i){var s=r.fn(t,e,i);return s.style["animation-duration"]=t+"ms",Object(n["i"])("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(n["i"])("circle",{transform:s.transform||"translate(32,32)",cx:s.cx,cy:s.cy,r:s.r,style:r.elmDuration?{animationDuration:t+"ms"}:{}}))},f=function(r,t,e,i){var s=r.fn(t,e,i);return s.style["animation-duration"]=t+"ms",Object(n["i"])("svg",{viewBox:s.viewBox||"0 0 64 64",style:s.style},Object(n["i"])("line",{transform:"translate(32,32)",y1:s.y1,y2:s.y2}))}}}]);
//# sourceMappingURL=chunk-68583a52.d90a0da6.js.map