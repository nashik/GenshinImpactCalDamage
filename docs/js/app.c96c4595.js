(function(t){function a(a){for(var r,i,l=a[0],o=a[1],u=a[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&f.push(c[i][0]),c[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);s&&s(a);while(f.length)f.shift()();return n.push.apply(n,u||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],r=!0,l=1;l<e.length;l++){var o=e[l];0!==c[o]&&(r=!1)}r&&(n.splice(a--,1),t=i(i.s=e[0]))}return t}var r={},c={app:0},n=[];function i(a){if(r[a])return r[a].exports;var e=r[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)i.d(e,r,function(a){return t[a]}.bind(null,r));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/GenshinCalculator/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var s=o;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"43a9":function(t,a){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-app-bar",{attrs:{color:"primary",dark:"",app:""}},[e("Header")],1),e("v-main",[e("Input",{on:{"change:total_attack":function(a){t.total_attack=a},"change:critical_rate":function(a){t.critical_rate=a},"change:critical_damage":function(a){t.critical_damage=a}}}),e("Output",{attrs:{total_attack:t.total_attack,critical_rate:t.critical_rate,critical_damage:t.critical_damage}})],1),e("v-footer",{attrs:{color:"primary",dark:"",app:""}},[e("Footer")],1)],1)},n=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-toolbar-title",[e("strong",[t._v("原神ダメージ計算ツール")])])},l=[],o=e("2877"),u=e("6544"),s=e.n(u),p=e("2a7f"),f={},_=Object(o["a"])(f,i,l,!1,null,null,null),d=_.exports;s()(_,{VToolbarTitle:p["a"]});var m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),e("strong",[t._v("Nashik")])])},h=[],v=e("62ad"),g={},b=Object(o["a"])(g,m,h,!1,null,null,null),k=b.exports;s()(b,{VCol:v["a"]});var y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto my-10",attrs:{width:"500px"}},[e("v-card-title",[t._v("Input")]),e("v-card-text",[e("InputAttack",{attrs:{attack_label:"基礎攻撃力"},on:{"change:attack":t.changeBaseAttack}}),e("InputAttack",{attrs:{attack_label:"聖遺物攻撃力"},on:{"change:attack":t.changeArtifactsAttack}}),e("InputCriticalRate",{on:{"change:critical_rate":t.changeCriticalRate}}),e("InputCriticalDamage",{on:{"change:critical_damage":t.changeCriticalDamage}})],1)],1)},x=[],C=(e("a9e3"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-text-field",{attrs:{label:t.attack_label,type:"number",min:"0",placeholder:"1234"},on:{keypress:t.validateInteger},model:{value:t.attack_val,callback:function(a){t.attack_val="string"===typeof a?a.trim():a},expression:"attack_val"}})}),O=[],w={name:"InputAttack",props:{attack_label:{type:String},attack:{type:Number}},computed:{attack_val:{get:function(){return this.attack},set:function(t){this.$emit("change:attack",t)}}},methods:{validateInteger:function(t){var a=t.which?t.which:t.keyCode;if(!(a>31&&(a<48||a>57)))return!0;t.preventDefault()}}},j=w,N=e("ece7"),D=e.n(N),V=e("43a9"),$=e.n(V),I=e("8654"),A=Object(o["a"])(j,C,O,!1,null,null,null);"function"===typeof D.a&&D()(A),"function"===typeof $.a&&$()(A);var T=A.exports;s()(A,{VTextField:I["a"]});var F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-text-field",{attrs:{label:"会心率(%)",type:"number",min:"0",placeholder:"12.3"},on:{keypress:t.validateFloat},model:{value:t.critical_rate_val,callback:function(a){t.critical_rate_val="string"===typeof a?a.trim():a},expression:"critical_rate_val"}})},E=[],S={name:"InputCriticalRate",props:{critical_rate:{type:Number}},computed:{critical_rate_val:{get:function(){return this.critical_rate},set:function(t){this.$emit("change:critical_rate",t)}}},methods:{validateFloat:function(t){var a=t.which?t.which:t.keyCode;if(!(a>31&&(a<46||47==a||a>57)))return!0;t.preventDefault()}}},P=S,M=Object(o["a"])(P,F,E,!1,null,null,null),R=M.exports;s()(M,{VTextField:I["a"]});var B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-text-field",{attrs:{label:"会心ダメージ(%)",type:"number",min:"0",placeholder:"12.3"},on:{keypress:t.validateFloat},model:{value:t.critical_damage_val,callback:function(a){t.critical_damage_val="string"===typeof a?a.trim():a},expression:"critical_damage_val"}})},G=[],H={name:"InputCriticalDamage",props:{critical_damage:{type:Number}},computed:{critical_damage_val:{get:function(){return this.critical_damage},set:function(t){this.$emit("change:critical_damage",t)}}},methods:{validateFloat:function(t){var a=t.which?t.which:t.keyCode;if(!(a>31&&(a<46||47==a||a>57)))return!0;t.preventDefault()}}},J=H,Y=Object(o["a"])(J,B,G,!1,null,null,null),q=Y.exports;s()(Y,{VTextField:I["a"]});var z={name:"Main",components:{InputAttack:T,InputCriticalRate:R,InputCriticalDamage:q},data:function(){return{base_attack:0,artifacts_attack:0}},props:{total_attack:{type:Number},critical_rate:{type:Number},critical_damage:{type:Number}},methods:{changeBaseAttack:function(t){this.base_attack=t,this.$emit("change:total_attack",Number(this.base_attack)+Number(this.artifacts_attack))},changeArtifactsAttack:function(t){this.artifacts_attack=t,this.$emit("change:total_attack",Number(this.base_attack)+Number(this.artifacts_attack))},changeCriticalRate:function(t){this.$emit("change:critical_rate",Number(t))},changeCriticalDamage:function(t){this.$emit("change:critical_damage",Number(t))}}},K=z,L=e("b0af"),Q=e("99d9"),U=Object(o["a"])(K,y,x,!1,null,null,null),W=U.exports;s()(U,{VCard:L["a"],VCardText:Q["a"],VCardTitle:Q["b"]});var X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-card",{staticClass:"mx-auto my-10",attrs:{width:"500px"}},[e("v-card-title",[t._v("Output")]),e("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("Name")]),e("th",{staticClass:"text-left"},[t._v("Value")])])]),e("tbody",[e("tr",[e("td",[t._v("通常ダメージ")]),e("td",[t._v(t._s(t.normalDamage))])]),e("tr",[e("td",[t._v("会心ダメージ")]),e("td",[t._v(t._s(t.criticalDamage))])]),e("tr",[e("td",[t._v("期待値")]),e("td",[t._v(t._s(t.expectedDamage))])])])]},proxy:!0}])})],1)},Z=[],tt={name:"Output",props:{total_attack:{type:Number},critical_rate:{type:Number},critical_damage:{type:Number}},computed:{normalDamage:function(){return this.total_attack},criticalDamage:function(){return this.total_attack*(1+this.critical_damage/100)},expectedDamage:function(){return this.total_attack*(1-this.critical_rate/100)+this.criticalDamage*(this.critical_rate/100)}}},at=tt,et=e("1f4f"),rt=Object(o["a"])(at,X,Z,!1,null,null,null),ct=rt.exports;s()(rt,{VCard:L["a"],VCardTitle:Q["b"],VSimpleTable:et["a"]});var nt={name:"GenshinCalc",components:{Header:d,Footer:k,Input:W,Output:ct},data:function(){return{total_attack:0,critical_rate:0,critical_damage:0}}},it=nt,lt=e("7496"),ot=e("40dc"),ut=e("553a"),st=e("f6c4"),pt=Object(o["a"])(it,c,n,!1,null,null,null),ft=pt.exports;s()(pt,{VApp:lt["a"],VAppBar:ot["a"],VFooter:ut["a"],VMain:st["a"]});var _t=e("f309");r["a"].use(_t["a"]);var dt=new _t["a"]({});r["a"].config.devtools=!0,r["a"].config.productionTip=!1,new r["a"]({vuetify:dt,render:function(t){return t(ft)}}).$mount("#app")},ece7:function(t,a){}});
//# sourceMappingURL=app.c96c4595.js.map