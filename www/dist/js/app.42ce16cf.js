(function(e){function t(t){for(var r,o,u=t[0],c=t[1],i=t[2],f=0,p=[];f<u.length;f++)o=u[f],s[o]&&p.push(s[o][0]),s[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==s[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0804":function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),s=n("cebc"),a=n("7ffd"),o=n("b9d9"),u=!0,c=function(){return{loading:!1,messages:[]}},i=Object(s["a"])({},a["d"].getters(c)),l=Object(s["a"])({},a["d"].mutations(c),{ADD_MESSAGE:function(e,t){var n=e.messages;n.push(t),e.message=n}}),f=Object(s["a"])({},a["d"].actions(c),{send:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(t,n){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.prev=1,r("SET_LOADING",!0),r("ADD_MESSAGE",{text:n,me:!0}),e.next=6,o["default"].chat.send(n);case 6:s=e.sent,r("ADD_MESSAGE",{text:s,me:!1}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](1),r("ADD_MESSAGE",{text:"Что-то пошло не так",e:!0});case 13:return e.prev=13,r("SET_LOADING",!1),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[1,10,13,16]])}));function t(t,n){return e.apply(this,arguments)}return t}()});t["default"]={namespaced:u,state:c,mutations:l,actions:f,getters:i}},"1ac1":function(e,t,n){},"22df":function(e,t,n){"use strict";var r=n("1ac1"),s=n.n(r);s.a},"2a74":function(e,t,n){"use strict";n.r(t);n("a481"),n("ac6a");var r=n("d307"),s={};r.keys().forEach(function(e){"./index.js"!==e&&(s[e.replace(/(\.\/|\.js)/g,"")]=r(e).default)}),t["default"]=s},"2ce2":function(e,t,n){},3372:function(e,t,n){"use strict";n.r(t);n("96cf");var r=n("3b8d"),s=n("bc3a"),a=n.n(s),o=n("5929"),u=a.a.create({baseURL:o["a"].CurrentAPI});u.interceptors.request.use(function(e){return e.headers={"Content-type":"application/x-www-form-urlencoded; charset=UTF-8"},e},function(e){throw console.error("REQUEST error -",e.response),e});var c="post",i=u,l={send:function(){return{method:c,url:"/get-answer"}}};function f(e){return p.apply(this,arguments)}function p(){return p=Object(r["a"])(regeneratorRuntime.mark(function e(t){var n,r,s,a,o,u,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=new FormData,n.append("q",t),r=l.send(),s=r.url,a=r.method,e.next=6,i[a](s,n);case 6:if(o=e.sent,u=o.status,c=o.data,console.log("Chat.send",{q:t},{status:u,data:c}),200==u){e.next=12;break}throw"Bad status (".concat(u,")");case 12:if(c.ok){e.next=14;break}throw c;case 14:return e.abrupt("return",c.a.trim());case 17:throw e.prev=17,e.t0=e["catch"](0),console.error("Chat.send - ",e.t0),e.t0;case 21:case"end":return e.stop()}},e,null,[[0,17]])})),p.apply(this,arguments)}t["default"]={send:f}},"3b46":function(e,t,n){"use strict";var r=n("caee"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),s=n("b828"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("chat")],1)},o=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["chat",{collapsed:e.collapsed}]},[n("close-button",{on:{close:e.close}}),n("show-button",{on:{show:e.show}}),n("message-box"),n("message-form")],1)},c=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"close-button",attrs:{type:"button"},on:{click:function(t){return e.$emit("close")}}},[n("svg-close",{staticClass:"icon"})],1)},l=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",e._b({attrs:{viewBox:"0 0 512 512",width:"12px",height:"12px",fill:"#2d9ee0"}},"svg",e.$attrs,!1),[n("path",{attrs:{d:"M231.5 254.3L4.9 480.9c-6.3 6.3-6.3 16.5 0 22.8 3.1 3.2 7.3 4.7 11.4 4.7 4.1 0 8.2-1.6 11.4-4.7L256 275.4l228.3 228.3c3.2 3.2 7.3 4.7 11.4 4.7s8.2-1.6 11.4-4.7c6.3-6.3 6.3-16.5 0-22.8L280.5 254.3 507.3 27.5c6.3-6.3 6.3-16.5 0-22.8-6.3-6.3-16.5-6.3-22.8 0L256 233.2 27.5 4.7C21.2-1.6 11-1.6 4.7 4.7c-6.3 6.3-6.3 16.5 0 22.8l226.8 226.8z"}})])},p=[],d=n("2877"),m={},h=Object(d["a"])(m,f,p,!1,null,null,null),v=h.exports,g={name:"Close-Button",components:{SvgClose:v}},b=g,w=(n("22df"),Object(d["a"])(b,i,l,!1,null,null,null)),x=w.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"show-button",attrs:{type:"button"},on:{click:function(t){return e.$emit("show")}}},[n("svg-plus",{staticClass:"icon"})],1)},y=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{viewBox:"0 0 24 24"}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{fill:"#fff","fill-rule":"nonzero",transform:"translate(3 3)"}},[n("rect",{attrs:{width:"18",height:"2",y:"8",rx:"1"}}),n("path",{attrs:{d:"M10 1v16a1 1 0 0 1-2 0V1a1 1 0 1 1 2 0z"}})]),n("path",{attrs:{d:"M0 0h24v24H0z"}})])])},j=[],C={},E=Object(d["a"])(C,O,j,!1,null,null,null),S=E.exports,M={name:"Show-Button",components:{SvgPlus:S}},k=M,$=(n("3b46"),Object(d["a"])(k,_,y,!1,null,null,null)),D=$.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message-box"},[n("transition-group",{ref:"Messages",staticClass:"message-list",attrs:{name:"list",mode:"out-in",appear:"",tag:"ul"}},e._l(e.messages,function(t,r){return n("message-item",e._b({key:"key-"+r},"message-item",t,!1))}),1)],1)},B=[],P=n("7ffd"),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{class:["message-item",{"--me":e.me,"--e":e.e}]},[n("span",{staticClass:"message-item__content"},[e._v(e._s(e.text))])])},T=[],R={name:"Chat-Message",props:{text:{type:String,default:""},me:{type:Boolean,default:!1},e:{type:Boolean,default:!1}}},z=R,I=(n("61b0"),Object(d["a"])(z,L,T,!1,null,null,null)),N=I.exports,U={name:"Chat-Message-Box",components:{MessageItem:N},computed:{messages:Object(P["c"])("Chat/messages")},methods:{scroll:function(){this.$refs.Messages.$el.scrollTop=this.$refs.Messages.$el.scrollHeight}},watch:{"messages.length":function(){setTimeout(this.scroll,100)}}},F=U,G=(n("f5ac"),Object(d["a"])(F,A,B,!1,null,null,null)),q=G.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{ref:"form",staticClass:"message-form",on:{submit:function(t){return t.preventDefault(),e.send(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],ref:"Input",staticClass:"message-input",attrs:{type:"text",placeholder:"Напишите сообщение",required:"true"},domProps:{value:e.message},on:{input:[function(t){t.target.composing||(e.message=t.target.value)},function(t){return e.$emit("input",t.target.value)}]}}),n("button",{staticClass:"send-button",attrs:{type:"submit"}},[n("Svg-Send")],1)])},J=[],Q=(n("96cf"),n("3b8d")),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[n("path",{attrs:{d:"M0 0h24v24H0z"}}),n("path",{attrs:{fill:"#2d9ee0","fill-rule":"nonzero",d:"M3 20l18-8L3 4v6.222L15.857 12 3 13.778z"}})])])},K=[],W={},X=Object(d["a"])(W,V,K,!1,null,null,null),Y=X.exports,Z={name:"Chat-Message-Form",components:{SvgSend:Y},data:function(){return{message:""}},methods:{callSend:Object(P["a"])("Chat/send"),send:function(){var e=Object(Q["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.callSend(this.message);case 2:this.message="",this.$refs.Input.focus(),this.$bus.emit("scroll");case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},ee=Z,te=(n("9c10"),Object(d["a"])(ee,H,J,!1,null,null,null)),ne=te.exports,re={name:"Chat",components:{CloseButton:x,ShowButton:D,MessageBox:q,MessageForm:ne},data:function(){return{collapsed:!0}},methods:{close:function(){this.collapsed=!0},show:function(){this.collapsed=!1}}},se=re,ae=(n("8750"),Object(d["a"])(se,u,c,!1,null,null,null)),oe=ae.exports,ue={name:"App",components:{Chat:oe}},ce=ue,ie=(n("5c0b"),Object(d["a"])(ce,a,o,!1,null,null,null)),le=ie.exports,fe=n("2f62"),pe=n("2a74"),de=n("5929");r["a"].use(fe["a"]),P["b"].options={mapping:"standard",strict:!0,cache:!0,deep:!0};var me=new fe["a"].Store({modules:pe["default"],plugins:[P["b"].plugin],strict:de["a"].isProduction});r["a"].use(s["a"]),r["a"].config.productionTip=!1,new r["a"]({store:me,render:function(e){return e(le)}}).$mount("#app")},5929:function(e,t,n){"use strict";var r=n("d225"),s=n("b0b4"),a=function(){function e(){Object(r["a"])(this,e)}return Object(s["a"])(e,[{key:"isDevelopment",get:function(){return!1}},{key:"isProduction",get:function(){return!0}},{key:"CurrentAPI",get:function(){return"http://127.0.0.1:8044/api"}}]),e}(),o=new a;t["a"]=o},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),s=n.n(r);s.a},"5e27":function(e,t,n){},"5ee4":function(e,t,n){var r={"./chat.js":"3372","./index.js":"b9d9"};function s(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id="5ee4"},"61b0":function(e,t,n){"use strict";var r=n("f91d"),s=n.n(r);s.a},8750:function(e,t,n){"use strict";var r=n("87e2"),s=n.n(r);s.a},"87e2":function(e,t,n){},"9c10":function(e,t,n){"use strict";var r=n("2ce2"),s=n.n(r);s.a},b9d9:function(e,t,n){"use strict";n.r(t);n("a481"),n("ac6a");var r=n("5ee4"),s={};r.keys().forEach(function(e){"./index.js"!==e&&(s[e.replace(/(\.\/|\.js)/g,"")]=r(e).default)}),t["default"]=s},caee:function(e,t,n){},d307:function(e,t,n){var r={"./Chat.js":"0804","./index.js":"2a74"};function s(e){var t=a(e);return n(t)}function a(e){var t=r[e];if(!(t+1)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t}s.keys=function(){return Object.keys(r)},s.resolve=a,e.exports=s,s.id="d307"},f5ac:function(e,t,n){"use strict";var r=n("fab0"),s=n.n(r);s.a},f91d:function(e,t,n){},fab0:function(e,t,n){}});
//# sourceMappingURL=app.42ce16cf.js.map