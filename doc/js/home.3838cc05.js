(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"05a4":function(t,a,e){"use strict";var n=e("5b5b"),i=e.n(n);i.a},"0985":function(t,a,e){t.exports=e.p+"img/ball_policy.174874ee.png"},"11e9":function(t,a,e){var n=e("52a7"),i=e("4630"),r=e("6821"),o=e("6a99"),s=e("69a8"),u=e("c69a"),c=Object.getOwnPropertyDescriptor;a.f=e("9e1e")?c:function(t,a){if(t=r(t),a=o(a,!0),u)try{return c(t,a)}catch(e){}if(s(t,a))return i(!n.f.call(t,a),t[a])}},"14b8":function(t,a,e){t.exports=e.p+"img/ball_news.b034c052.png"},1715:function(t,a,e){t.exports=e.p+"img/ball_award.e01adacd.png"},"1e1b":function(t,a,e){t.exports=e.p+"img/ball_paper.28704acc.png"},"21d7":function(t,a,e){t.exports=e.p+"img/logo.0cec17e2.png"},"2d5b":function(t,a,e){"use strict";var n=e("d7e3"),i=e.n(n);i.a},3824:function(t,a,e){"use strict";var n=e("eb6a"),i=e.n(n);i.a},5324:function(t,a,e){t.exports=e.p+"img/ball_expert.f175ca3c.png"},"5b5b":function(t,a,e){},"5dbc":function(t,a,e){var n=e("d3f4"),i=e("8b97").set;t.exports=function(t,a,e){var r,o=a.constructor;return o!==e&&"function"==typeof o&&(r=o.prototype)!==e.prototype&&n(r)&&i&&i(t,r),t}},"733f":function(t,a,e){t.exports=e.p+"img/map-shadow.9c0c57ab.png"},7731:function(t,a,e){t.exports=e.p+"img/ball_trade.6858472d.png"},"7abe":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home-wrapper"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.logo,alt:""}})]),e("div",{staticClass:"title"},[e("img",{attrs:{src:t.title,alt:""}})]),e("div",{staticClass:"map-wrapper"},[e("img",{attrs:{id:"map",src:t.map,alt:""}}),t.showEupo?e("Count",{staticClass:"cnt europe",attrs:{num:123999,type:"europe",txt:"欧洲专利局"}}):t._e(),t.showChina?e("Count",{staticClass:"cnt china",attrs:{num:223344,type:"china",txt:"中国"}}):t._e(),t.showCanada?e("Count",{staticClass:"cnt canada",attrs:{num:556677,type:"canada",txt:"加拿大"}}):t._e(),t.showUsa?e("Count",{staticClass:"cnt usa",attrs:{num:77886,type:"usa",txt:"美国"}}):t._e(),t.showEngland?e("Count",{staticClass:"cnt england",attrs:{num:77886,type:"usa",txt:"英国"}}):t._e(),t.showFrance?e("Count",{staticClass:"cnt france",attrs:{num:77886,type:"usa",txt:"法国"}}):t._e(),t.showGe?e("Count",{staticClass:"cnt ge",attrs:{num:77886,type:"usa",txt:"德国"}}):t._e(),t.showTW?e("Count",{staticClass:"cnt tw",attrs:{num:77886,type:"usa",txt:"台湾地区"}}):t._e(),t.showJP?e("Count",{staticClass:"cnt jp",attrs:{num:999999,type:"usa",txt:"日本"}}):t._e(),t.showKorea?e("Count",{staticClass:"cnt korea",attrs:{num:77886,type:"usa",txt:"韩国"}}):t._e(),t.showAu?e("Count",{staticClass:"cnt au",attrs:{num:77886,type:"usa",txt:"澳大利亚"}}):t._e()],1),e("div",{staticClass:"light-wrapper"},[e("img",{attrs:{id:"light",src:t.light,alt:""}})]),e("div",{staticClass:"cloud-left"},[t.showCloud?e("tag-cloud",{attrs:{tags:t.tags,direct:"up",id:"left"}}):t._e()],1),e("div",{staticClass:"cloud-right"},[t.showCloud?e("tag-cloud",{attrs:{tags:t.tags,id:"right",direct:"down"}}):t._e()],1)])},i=[],r=e("21d7"),o=e.n(r),s=e("d312"),u=e.n(s),c=e("ae53"),l=e.n(c),p=e("733f"),d=e.n(p),f=e("c86e"),h=e.n(f),m=e("1209"),g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"count-wrapper"},[e("div",{staticClass:"content",class:t.contentCls},[e("CountTo",{staticClass:"cnt",attrs:{endVal:t.num,duration:2e3}}),e("span",[t._v(t._s(t.txt))])],1),e("div",{staticClass:"inner-circle",class:t.inCls}),e("div",{staticClass:"outter-circle",class:t.outCls})])},w=[],v=(e("c5f6"),e("ec1b")),y=e.n(v),C={name:"Count",components:{CountTo:y.a},props:{num:{type:Number,required:!0},txt:{type:String,required:!0},type:{type:String,required:!0}},mounted:function(){var t=this;this.$nextTick(function(){t.init()})},computed:{contentCls:function(){return"".concat(this.type,"-content")},outCls:function(){return"".concat(this.type,"-outter-circle")},inCls:function(){return"".concat(this.type,"-inner-circle")}},methods:{init:function(){m["a"].timeline({duration:300,loop:!1,easing:"linear"}).add({targets:"."+this.outCls,keyframes:[{scale:0,opacity:0},{scale:.5,opacity:.5},{scale:1,opacity:1},{opacity:0}],duration:2e3}).add({targets:"."+this.inCls,keyframes:[{scale:0,opacity:0},{scale:.5,opacity:.5},{scale:1,opacity:1},{opacity:0}],duration:2e3},300)}}},b=C,_=(e("05a4"),e("2877")),x=Object(_["a"])(b,g,w,!1,null,"ebdd9ab4",null),T=x.exports,V=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tag-cloud-wrapper"},[e("canvas",{attrs:{width:t.containerWidth,height:t.containerHeight,id:t.guid}},[e("ul",{attrs:{id:"taglist"}},t._l(t.tags,function(t){return e("li",{key:t.url},[e("router-link",{attrs:{to:t.url}},[e("img",{attrs:{src:t.img,width:"64px",height:"64px"}})])],1)}),0)])])},F=[],A={name:"TagCloud",props:{containerWidth:{type:Number,default:400},containerHeight:{type:Number,default:800},tags:{type:Array},id:{type:String,required:!0},direct:{type:String,default:"up"}},data:function(){return{ttags:"taglist",lock:"y",shape:"vcylinder"}},mounted:function(){this.initTag()},computed:{guid:function(){return"".concat(this.id,"-tagcanvas")},tagGuid:function(){return"".concat(this.id,"-taglist")}},methods:{initTag:function(){window.TagCanvas.initial=[0,"up"===this.direct?.02:-.02],window.TagCanvas.outlineColour="rgba(255, 255, 255,0.1)",window.TagCanvas.maxSpeed=.05,window.TagCanvas.minSpeed=.02,window.TagCanvas.wheelZoom=!1,window.TagCanvas.outlineRadius=40,window.TagCanvas.imageMode="image",window.TagCanvas.imageRadius="50%",window.TagCanvas.imageScale=1,window.TagCanvas.radiusY=2,window.TagCanvas.radiusX=.6,window.TagCanvas.activeCursor="pointer",window.TagCanvas.outlineMethod="size",window.TagCanvas.outlineIncrease=16,window.TagCanvas.dragControl=!0,window.TagCanvas.shape="hring",window.TagCanvas.lock="x",window.TagCanvas.offsetY=-60,window.TagCanvas.Start(this.guid,this.taglist)},restart:function(){window.TagCanvas.shape=this.shape,window.TagCanvas.lock=this.lock,window.TagCanvas.Start(this.guid,this.ttags)},changetags:function(t){this.ttags=t,this.restart()},changeshape:function(t){var a={hcylinder:"x",vcylinder:"y",hring:"x",vring:"y",sphere:""};this.lock=a[t]||"",this.shape=t,window.TagCanvas.initial="x"===this.lock&&[0,.2]||"y"===this.lock&&[.2,0]||[.2,.2],this.restart()}}},N=A,S=(e("2d5b"),Object(_["a"])(N,V,F,!1,null,"c311450c",null)),E=S.exports,q=e("1715"),O=e.n(q),k=e("999e"),I=e.n(k),j=e("5324"),M=e.n(j),D=e("f67e"),P=e.n(D),R=e("14b8"),$=e.n(R),G=e("1e1b"),Y=e.n(G),J=e("f0d2"),L=e.n(J),U=e("0985"),W=e.n(U),H=e("c8fc"),K=e.n(H),X=e("7731"),z=e.n(X),B={name:"Homepage",components:{Count:T,TagCloud:E},data:function(){return{logo:o.a,title:u.a,map:l.a,shadow:d.a,light:h.a,showEupo:!1,showChina:!1,showCanada:!1,showUsa:!1,showEngland:!1,showFrance:!1,showGe:!1,showTW:!1,showJP:!1,showKorea:!1,showAu:!1,showCloud:!1,tags:[{img:O.a,url:"/report/award"},{img:I.a,url:"/report/enterprise"},{img:M.a,url:"/report/expert"},{img:P.a,url:"/report/invest"},{img:$.a,url:"/report/news"},{img:Y.a,url:"/report/paper"},{img:L.a,url:"/report/patent"},{img:W.a,url:"/report/policy"},{img:K.a,url:"/report/project"},{img:z.a,url:"/report/trade"}]}},mounted:function(){var t=this;this.initLogo(),this.initTitle(),setTimeout(function(){t.initMap()},900),setTimeout(function(){t.showEupo=!0},3100),setTimeout(function(){t.showChina=!0},3500),setTimeout(function(){t.showCanada=!0},4300),setTimeout(function(){t.showUsa=!0},5e3),setTimeout(function(){t.showEngland=!0,t.showFrance=!0,t.showGe=!0},5500),setTimeout(function(){t.showTW=!0,t.showJP=!0,t.showKorea=!0},6100),setTimeout(function(){t.showAu=!0},6500),setTimeout(function(){t.showCloud=!0,t.initCloud()},2e3)},methods:{initLogo:function(){Object(m["a"])({targets:".logo img",duration:900,opacity:{value:[0,1]},loop:!1,easing:"linear",translateY:{value:[20,0]}})},initTitle:function(){Object(m["a"])({targets:".title img",duration:900,opacity:{value:[0,1]},loop:!1,easing:"linear",translateY:{value:[-20,0]}})},initMap:function(){m["a"].timeline({duration:300,loop:!1,easing:"linear"}).add({targets:".map-wrapper",opacity:{value:[0,1]}}).add({targets:"#light",duration:700,opacity:{value:[0,1]}}).add({targets:"#map",duration:700,opacity:{value:[0,1]},loop:!1,easing:"linear",translateY:{value:[46,0]}})},initCloud:function(){Object(m["a"])({targets:[".cloud-left",".cloud-right"],scale:{value:[0,1]},opacity:{value:[0,1]},duration:2e3})}}},Z=B,Q=(e("3824"),Object(_["a"])(Z,n,i,!1,null,"68f948ec",null));a["default"]=Q.exports},"8b97":function(t,a,e){var n=e("d3f4"),i=e("cb7c"),r=function(t,a){if(i(t),!n(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,n){try{n=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),a=!(t instanceof Array)}catch(i){a=!0}return function(t,e){return r(t,e),a?t.__proto__=e:n(t,e),t}}({},!1):void 0),check:r}},9093:function(t,a,e){var n=e("ce10"),i=e("e11e").concat("length","prototype");a.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"999e":function(t,a,e){t.exports=e.p+"img/ball_enterprise.0f7f1d1f.png"},aa77:function(t,a,e){var n=e("5ca1"),i=e("be13"),r=e("79e5"),o=e("fdef"),s="["+o+"]",u="​",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),p=function(t,a,e){var i={},s=r(function(){return!!o[t]()||u[t]()!=u}),c=i[t]=s?a(d):o[t];e&&(i[e]=c),n(n.P+n.F*s,"String",i)},d=p.trim=function(t,a){return t=String(i(t)),1&a&&(t=t.replace(c,"")),2&a&&(t=t.replace(l,"")),t};t.exports=p},ae53:function(t,a,e){t.exports=e.p+"img/map.ef3dbbc1.png"},c5f6:function(t,a,e){"use strict";var n=e("7726"),i=e("69a8"),r=e("2d95"),o=e("5dbc"),s=e("6a99"),u=e("79e5"),c=e("9093").f,l=e("11e9").f,p=e("86cc").f,d=e("aa77").trim,f="Number",h=n[f],m=h,g=h.prototype,w=r(e("2aeb")(g))==f,v="trim"in String.prototype,y=function(t){var a=s(t,!1);if("string"==typeof a&&a.length>2){a=v?a.trim():d(a,3);var e,n,i,r=a.charCodeAt(0);if(43===r||45===r){if(e=a.charCodeAt(2),88===e||120===e)return NaN}else if(48===r){switch(a.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+a}for(var o,u=a.slice(2),c=0,l=u.length;c<l;c++)if(o=u.charCodeAt(c),o<48||o>i)return NaN;return parseInt(u,n)}}return+a};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof h&&(w?u(function(){g.valueOf.call(e)}):r(e)!=f)?o(new m(y(a)),e,h):y(a)};for(var C,b=e("9e1e")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;b.length>_;_++)i(m,C=b[_])&&!i(h,C)&&p(h,C,l(m,C));h.prototype=g,g.constructor=h,e("2aba")(n,f,h)}},c86e:function(t,a,e){t.exports=e.p+"img/light.fa1a546c.png"},c8fc:function(t,a,e){t.exports=e.p+"img/ball_pro.c36d78e4.png"},d312:function(t,a,e){t.exports=e.p+"img/title.76354f26.png"},d7e3:function(t,a,e){},eb6a:function(t,a,e){},ec1b:function(t,a,e){!function(a,e){t.exports=e()}(0,function(){return function(t){function a(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,a),i.l=!0,i.exports}var e={};return a.m=t,a.c=e,a.i=function(t){return t},a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},a.p="/dist/",a(a.s=2)}([function(t,a,e){var n=e(4)(e(1),e(5),null,null);t.exports=n.exports},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(3);a.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,a,e,n){return e*(1-Math.pow(2,-10*t/n))*1024/1023+a}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var a=t-this.startTime;this.remaining=this.localDuration-a,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(a,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(a,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(a/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(a/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),a<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var a=t.split("."),e=a[0],n=a.length>1?this.decimal+a[1]:"",i=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;i.test(e);)e=e.replace(i,"$1"+this.separator+"$2");return this.prefix+e+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e(0),i=function(t){return t&&t.__esModule?t:{default:t}}(n);a.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",i.default)},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=0,i="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)a.requestAnimationFrame=r=function(){},a.cancelAnimationFrame=o=function(){};else{a.requestAnimationFrame=r=window.requestAnimationFrame,a.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,u=0;u<i.length&&(!r||!o);u++)s=i[u],a.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],a.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(a.requestAnimationFrame=r=function(t){var a=(new Date).getTime(),e=Math.max(0,16-(a-n)),i=window.setTimeout(function(){t(a+e)},e);return n=a+e,i},a.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}a.requestAnimationFrame=r,a.cancelAnimationFrame=o},function(t,a){t.exports=function(t,a,e,n){var i,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(i=t,r=t.default);var s="function"==typeof r?r.options:r;if(a&&(s.render=a.render,s.staticRenderFns=a.staticRenderFns),e&&(s._scopeId=e),n){var u=Object.create(s.computed||null);Object.keys(n).forEach(function(t){var a=n[t];u[t]=function(){return a}}),s.computed=u}return{esModule:i,exports:r,options:s}}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])})},f0d2:function(t,a,e){t.exports=e.p+"img/ball_patent.de52809c.png"},f67e:function(t,a,e){t.exports=e.p+"img/ball_invest.1d6e1788.png"},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=home.3838cc05.js.map