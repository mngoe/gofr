(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53cb3a14"],{"1da1":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("d3b7");function r(t,e,i,r,n,s,a){try{var o=t[s](a),c=o.value}catch(u){return void i(u)}o.done?e(c):Promise.resolve(c).then(r,n)}function n(t){return function(){var e=this,i=arguments;return new Promise((function(n,s){var a=t.apply(e,i);function o(t){r(a,n,s,o,c,"next",t)}function c(t){r(a,n,s,o,c,"throw",t)}o(void 0)}))}}},7958:function(t,e,i){},"96cf":function(t,e,i){var r=function(t){"use strict";var e,i=Object.prototype,r=i.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(V){c=function(t,e,i){return t[e]=i}}function u(t,e,i,r){var n=e&&e.prototype instanceof g?e:g,s=Object.create(n.prototype),a=new C(r||[]);return s._invoke=_(t,i,a),s}function h(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(V){return{type:"throw",arg:V}}}t.wrap=u;var l="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function g(){}function m(){}function y(){}var b={};c(b,s,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(L([])));x&&x!==i&&r.call(x,s)&&(b=x);var k=y.prototype=g.prototype=Object.create(b);function $(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function i(n,s,a,o){var c=h(t[n],t,s);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){i("next",t,a,o)}),(function(t){i("throw",t,a,o)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,o)}))}o(c.arg)}var n;function s(t,r){function s(){return new e((function(e,n){i(t,r,e,n)}))}return n=n?n.then(s,s):s()}this._invoke=s}function _(t,e,i){var r=l;return function(n,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===n)throw s;return M()}i.method=n,i.arg=s;while(1){var a=i.delegate;if(a){var o=R(a,i);if(o){if(o===v)continue;return o}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===l)throw r=p,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=f;var c=h(t,e,i);if("normal"===c.type){if(r=i.done?p:d,c.arg===v)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=p,i.method="throw",i.arg=c.arg)}}}function R(t,i){var r=t.iterator[i.method];if(r===e){if(i.delegate=null,"throw"===i.method){if(t.iterator["return"]&&(i.method="return",i.arg=e,R(t,i),"throw"===i.method))return v;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=h(r,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,v;var s=n.arg;return s?s.done?(i[t.resultName]=s.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,v):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,v)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function q(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function L(t){if(t){var i=t[s];if(i)return i.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function i(){while(++n<t.length)if(r.call(t,n))return i.value=t[n],i.done=!1,i;return i.value=e,i.done=!0,i};return a.next=a}}return{next:M}}function M(){return{value:e,done:!0}}return m.prototype=y,c(k,"constructor",y),c(y,"constructor",m),m.displayName=c(y,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,o,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},$(A.prototype),c(A.prototype,a,(function(){return this})),t.AsyncIterator=A,t.async=function(e,i,r,n,s){void 0===s&&(s=Promise);var a=new A(u(e,i,r,n),s);return t.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},$(k),c(k,o,"Generator"),c(k,s,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},t.values=L,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(q),!t)for(var i in this)"t"===i.charAt(0)&&r.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function n(r,n){return o.type="throw",o.arg=t,i.next=r,n&&(i.method="next",i.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=t,a.arg=e,s?(this.method="next",this.next=s.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),q(i),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var n=r.arg;q(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,r){return this.delegate={iterator:L(t),resultName:i,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(n){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},bb89:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"my-3"},[i("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._t("default",null,{source:t.source}),i("v-overlay",{attrs:{value:t.overlay}},[i("v-progress-circular",{attrs:{size:"50",color:"primary",indeterminate:""}})],1),i("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",left:"",permanent:"",clipped:"",width:"350"}},[i("v-list",{staticClass:"white--text"},[i("v-list-item",[t.edit?i("v-btn",{staticClass:"secondary",attrs:{small:"",dark:""},on:{click:function(e){return t.$router.go(0)}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-pencil-off")]),i("span",[t._v("Cancel")])],1):[i("v-btn",{staticClass:"secondary",attrs:{small:"",dark:""},on:{click:function(e){return t.$emit("set-edit",!t.edit)}}},[i("v-icon",{attrs:{left:"",light:""}},[t._v("mdi-pencil")]),i("span",[t._v("Edit")])],1),i("v-spacer"),t.$store.state.requestResourceUpdateData.requestAction&&t.hasPermission?i("v-btn",{attrs:{small:"",color:"success",disabled:"approved"===t.currentRequestStatus||""===t.currentRequestStatus},on:{click:function(e){return t.processRequest("approved")}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-check-circle")]),t._v(" Approve ")],1):t._e(),i("v-spacer"),t.$store.state.requestResourceUpdateData.requestAction&&t.hasPermission?i("v-btn",{attrs:{small:"",color:"error",disabled:"pending"!==t.currentRequestStatus},on:{click:function(e){return t.processRequest("rejected")}}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-cancel")]),t._v(" Reject ")],1):t._e()],i("v-spacer"),t.edit&&"send-update-request"!==t.$store.state.searchAction?[t.valid?i("v-btn",{staticClass:"success darken-1",attrs:{small:"",dark:"",disabled:!t.valid},on:{click:function(e){return t.processFHIR()}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),i("span",[t._v("Save")])],1):i("v-btn",{staticClass:"warning",attrs:{small:"",dark:""},on:{click:function(e){return t.$refs.form.validate()}}},[i("v-icon",{attrs:{light:""}},[t._v("mdi-content-save")]),i("span",[t._v("Save")])],1)]:t.edit&&"send-update-request"===t.$store.state.searchAction?[i("v-btn",{attrs:{small:"",color:"success"},on:{click:t.createUpdateRequest}},[i("v-icon",{attrs:{left:""}},[t._v("mdi-check-circle")]),t._v(" Send Update Request ")],1)]:t._e()],2),i("v-divider",{attrs:{color:"white"}}),!t.edit&&t.links&&t.links.length?t._l(t.links,(function(e,r){return i("v-list-item",{key:e.url},[i("v-btn",{key:e.url,staticClass:"primary",attrs:{text:!e.button,to:t.getLinkUrl(e)}},[e.icon?i("v-icon",{attrs:{light:""}},[t._v(t._s(e.icon))]):t._e(),t._v(" "+t._s(t.linktext[r])+" ")],1)],1)})):t._e(),t.sectionMenu?i("v-subheader",{staticClass:"white--text"},[i("h2",[t._v("Sections")])]):t._e(),t._l(t.sectionMenu,(function(e){return i("v-list-item",{key:e.name,attrs:{href:"#section-"+e.name}},[t.edit&&e.secondary?t._e():i("v-list-item-content",{staticClass:"white--text"},[i("v-list-item-title",{staticClass:"text-uppercase"},[i("h4",[t._v(t._s(e.title))])]),i("v-list-item-subtitle",{staticClass:"white--text"},[t._v(t._s(e.desc))])],1)],1)}))],2)],1)],2)],1)},n=[],s=i("1da1"),a=i("b85c"),o=(i("96cf"),i("b64b"),i("2ca0"),i("ac1f"),i("1276"),i("caad"),i("2532"),i("fb6a"),i("5319"),i("bc3a")),c=i.n(o),u={name:"gofr-resource",props:["title","field","fhirId","page","profile","section-menu","edit","links","constraints"],data:function(){return{fhir:{},orig:{},valid:!0,source:{data:{},path:""},loading:!1,overlay:!1,isEdit:!1,linktext:[],advancedValid:!0,currentRequestStatus:""}},created:function(){var t=this;if(this.fhirId)this.loading=!0,c.a.get("/fhir/"+this.$store.state.config.userConfig.FRDatasource+"/"+this.field+"/"+this.fhirId).then((function(e){var i=e.data;if(t.orig=i,t.source={data:i,path:t.field},t.setLinkText(),t.loading=!1,i.extension){var r,n=Object(a["a"])(i.extension);try{for(n.s();!(r=n.n()).done;){var s=r.value;"http://gofr.org/fhir/StructureDefinition/request-status"===s.url&&(t.currentRequestStatus=s.valueCoding.code)}}catch(o){n.e(o)}finally{n.f()}}})).catch((function(e){console.log(t.field,t.fhirId,e)}));else if(this.$route.query){for(var e={resourceType:this.field},i=!1,r=0,n=Object.keys(this.$route.query);r<n.length;r++){var s=n[r];if(s.startsWith(this.field+".")){i=!0;var o,u=s.substring(this.field.length+1).split("."),h=u.pop(),l=e,d=Object(a["a"])(u);try{for(d.s();!(o=d.n()).done;){var f=o.value;if(f.includes("["))try{var p=f.split("["),v=p[0],g=p[1].slice(0,-1);if(l.hasOwnProperty(v)||(l[v]=[]),g){var m={};l[v][parseInt(g)]=m,l=m}else{var y={};l[v].push(y),l=y}}catch(k){console.log("Unable to process",s);continue}else l.hasOwnProperty(f)||(l[f]={},l=l[f])}}catch(k){d.e(k)}finally{d.f()}if(h.includes("["))try{var b=h.split("["),w=b[0],x=b[1].slice(0,-1);l.hasOwnProperty(w)||(l[w]=[]),x?l[w][parseInt(x)]=this.$route.query[s]:l[w].push(this.$route.query[s])}catch(k){console.log("Unable to process",s);continue}else l[h]=this.$route.query[s]}}i&&(this.source={data:e,path:this.field})}},computed:{hasFhirId:function(){return""!=this.fhirId&&!!this.fhirId},hasPermission:function(){return!!("process-update-request"===this.$store.state.requestResourceUpdateData.requestAction&&this.$tasksVerification.hasPermissionByName("special","custom","process-update-facility-request")||"process-add-request"===this.$store.state.requestResourceUpdateData.requestAction&&this.$tasksVerification.hasPermissionByName("special","custom","process-add-facility-request"))}},methods:{createUpdateRequest:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form.validate(),t.valid){e.next=3;break}return e.abrupt("return");case 3:return t.fhir={resourceType:t.field,meta:{profile:["http://gofr.org/fhir/StructureDefinition/gofr-facility-update-request"]}},e.prev=4,e.next=7,t.processChildren(t.field,t.fhir,t.$children);case 7:e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](4),t.advancedValid=!1,console.log(e.t0);case 13:if(t.advancedValid){e.next=18;break}return t.overlay=!1,t.loading=!1,t.$store.commit("setMessage",{type:"error",text:"There were errors on the form."}),e.abrupt("return");case 18:t.fhir.extension||(t.fhir.extension=[]),t.fhir.extension.push({url:"http://gofr.org/fhir/StructureDefinition/request-status",valueCoding:{system:"http://gofr.org/fhir/StructureDefinition/request-status-codesystem",code:"pending",display:"Pending"}},{url:"http://gofr.org/fhir/StructureDefinition/request-affected-resource",valueReference:{reference:"Location/"+t.fhirId}}),i="/fhir/"+t.$store.state.config.userConfig.FRDatasource+"/"+t.field,r={method:"POST",url:i,headers:{"Content-Type":"application/json"},data:t.fhir},t.overlay=!0,t.loading=!0,c()(r).then((function(){t.overlay=!1,t.loading=!1,t.$store.state.searchAction="",t.$store.commit("setMessage",{type:"info",text:"Request submitted successfully."}),t.$router.go(-1)})).catch((function(e){t.overlay=!1,t.loading=!1,t.$store.commit("setMessage",{type:"error",text:"Request submition failed."}),console.error(e)}));case 25:case"end":return e.stop()}}),e,null,[[4,9]])})))()},processRequest:function(t){var e,i=this;"process-add-request"===this.$store.state.requestResourceUpdateData.requestAction?e="/facilitiesRequests/add":"process-update-request"===this.$store.state.requestResourceUpdateData.requestAction&&(e="/facilitiesRequests/update");var r={method:"POST",url:e,headers:{"Content-Type":"application/json"},data:{resource:this.source.data,requestStatus:t}};this.overlay=!0,this.loading=!0,c()(r).then((function(){i.overlay=!1,i.loading=!1,i.$store.state.requestResourceUpdateData={requestAction:"",requestUpdatingResource:""},i.$store.commit("setMessage",{type:"info",text:"Request "+t+" successfully."}),i.$router.go(-1)})).catch((function(e){i.overlay=!1,i.loading=!1,i.$store.commit("setMessage",{type:"error",text:"Failed to "+t+" request."}),console.error(e)}))},getLinkField:function(t){var e=this.$fhirpath.evaluate(this.source.data,t);return!!e&&e[0]},getLinkUrl:function(t){var e;if(t.field&&(e=this.getLinkField(t.field)),e){if(e.includes("/")){var i=e.split("/");e=i[1]}return t.url.replace("FIELD",e)}return t.url},setLinkText:function(){var t=this,e=function(e){var i=t.links[e];if(i.text)t.linktext[e]=i.text;else if(i.field){var r=t.getLinkField(i.field);r&&t.$fhirutils.lookup(r).then((function(i){t.$set(t.linktext,e,i)}))}};for(var i in this.links)e(i)},processChildren:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e,i,r){var n,s,o,c,u,h,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=Object(a["a"])(r),t.prev=1,n.s();case 3:if((s=n.n()).done){t.next=36;break}if(o=s.value,c=e,u=i,o.field&&!o.fieldType&&(h=void 0,o.sliceName?o.field.startsWith("value[x]")?(h=o.field.substring(9),c+="."+h):(h=o.field.replace(":"+o.sliceName,""),c+="."+h):(h=o.field,c+="."+h),"1"!==o.max||"1"!==o.baseMax?i.hasOwnProperty(h)||(u[h]=[]):u[h]={},o.hasOwnProperty("value")?(Array.isArray(u[h])?u[h].push(o.value):u[h]=o.value,u=u[h]):Array.isArray(u[h])?(l={},o.profile?l.url=o.profile:"extension"===h&&o.sliceName&&(l.url=o.sliceName),u[h].push(l),u=l):u=u[h]),!o.$children){t.next=18;break}return t.prev=9,t.next=12,this.processChildren(c,u,o.$children);case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](9),this.advancedValid=!1,console.log(t.t0);case 18:if(!o.constraints){t.next=34;break}if(o.errors=[],t.prev=20,t.t1=this.advancedValid,!t.t1){t.next=26;break}return t.next=25,this.$fhirutils.checkConstraints(o.constraints,this.constraints,u,o.errors,this.fhirId);case 25:t.t1=t.sent;case 26:this.advancedValid=t.t1,t.next=34;break;case 29:t.prev=29,t.t2=t["catch"](20),this.advancedValid=!1,o.errors.push("An unknown error occurred."),console.log(t.t2);case 34:t.next=3;break;case 36:t.next=41;break;case 38:t.prev=38,t.t3=t["catch"](1),n.e(t.t3);case 41:return t.prev=41,n.f(),t.finish(41);case 44:case"end":return t.stop()}}),t,this,[[1,38,41,44],[9,14],[20,29]])})));function e(e,i,r){return t.apply(this,arguments)}return e}(),processFHIR:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,i,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.$refs.form.validate(),this.valid){t.next=3;break}return t.abrupt("return");case 3:return this.advancedValid=!0,this.overlay=!0,this.loading=!0,this.fhir={resourceType:this.field,meta:{profile:[this.profile]}},t.prev=7,t.next=10,this.processChildren(this.field,this.fhir,this.$children);case 10:t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](7),this.advancedValid=!1,console.log(t.t0);case 16:if(this.advancedValid){t.next=21;break}return this.overlay=!1,this.loading=!1,this.$store.commit("setMessage",{type:"error",text:"There were errors on the form."}),t.abrupt("return");case 21:e="/fhir/"+this.$store.state.config.userConfig.FRDatasource+"/"+this.field,i={method:"POST",url:e,headers:{"Content-Type":"application/json"}},this.fhirId&&(this.fhir.id=this.fhirId,e+="/"+this.fhirId,i.method="PUT",i.url=e),i.data=this.fhir,c()(i).then((function(t){var e=t.data;r.overlay=!1,r.loading=!1,r.fhirId?r.$router.go(0):r.$router.push({name:"ResourceView",params:{page:r.page,id:e.id}})}));case 26:case"end":return t.stop()}}),t,this,[[7,12]])})));function e(){return t.apply(this,arguments)}return e}()},beforeDestroy:function(){this.$store.state.searchAction="",this.$store.state.requestResourceUpdateData={requestAction:"",requestUpdatingResource:""}}},h=u,l=i("2877"),d=i("6544"),f=i.n(d),p=i("8336"),v=i("a523"),g=i("ce7e"),m=i("4bd4"),y=i("132d"),b=i("8860"),w=i("da13"),x=i("5d23"),k=i("f774"),$=i("a797"),A=i("490a"),_=i("2fa4"),R=i("e0c7"),O=Object(l["a"])(h,r,n,!1,null,null,null);e["default"]=O.exports;f()(O,{VBtn:p["a"],VContainer:v["a"],VDivider:g["a"],VForm:m["a"],VIcon:y["a"],VList:b["a"],VListItem:w["a"],VListItemContent:x["a"],VListItemSubtitle:x["b"],VListItemTitle:x["c"],VNavigationDrawer:k["a"],VOverlay:$["a"],VProgressCircular:A["a"],VSpacer:_["a"],VSubheader:R["a"]})},f774:function(t,e,i){"use strict";var r=i("5530"),n=(i("a9e3"),i("c7cd"),i("99af"),i("7958"),i("adda")),s=i("3a66"),a=i("a9ad"),o=i("b848"),c=i("e4cd"),u=i("e707"),h=i("d10f"),l=i("7560"),d=i("a293"),f=i("dc22"),p=i("c3f0"),v=i("80d2"),g=i("58df"),m=Object(g["a"])(Object(s["a"])("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),a["a"],o["a"],c["a"],u["a"],h["a"],l["a"]);e["a"]=m.extend({name:"v-navigation-drawer",directives:{ClickOutside:d["a"],Resize:f["a"],Touch:p["a"]},provide:function(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default:function(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default:function(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:function(){return{isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}},computed:{applicationProperty:function(){return this.right?"right":"left"},classes:function(){return Object(r["a"])({"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary},this.themeClasses)},computedMaxHeight:function(){if(!this.hasApp)return null;var t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop:function(){if(!this.hasApp)return 0;var t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform:function(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth:function(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp:function(){return this.app&&!this.isMobile&&!this.temporary},isBottom:function(){return this.bottom&&this.isMobile},isMiniVariant:function(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile:function(){return!this.stateless&&!this.permanent&&c["a"].options.computed.isMobile.call(this)},reactsToClick:function(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile:function(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize:function(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute:function(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay:function(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles:function(){var t=this.isBottom?"translateY":"translateX";return{height:Object(v["h"])(this.height),top:this.isBottom?"auto":Object(v["h"])(this.computedTop),maxHeight:null!=this.computedMaxHeight?"calc(100% - ".concat(Object(v["h"])(this.computedMaxHeight),")"):void 0,transform:"".concat(t,"(").concat(Object(v["h"])(this.computedTransform,"%"),")"),width:Object(v["h"])(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive:function(t){this.$emit("input",t)},isMobile:function(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent:function(t){t&&(this.isActive=!0)},showOverlay:function(t){t?this.genOverlay():this.removeOverlay()},value:function(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover:function(t){this.updateMiniVariant(!t)}},beforeMount:function(){this.init()},methods:{calculateTouchArea:function(){var t=this.$el.parentNode;if(t){var e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}}},closeConditional:function(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend:function(){return this.genPosition("append")},genBackground:function(){var t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives:function(){var t=this,e=[{name:"click-outside",value:{handler:function(){t.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners:function(){var t=this,e={transitionend:function(e){if(e.target===e.currentTarget){t.$emit("transitionend",e);var i=document.createEvent("UIEvents");i.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(i)}}};return this.miniVariant&&(e.click=function(){return t.$emit("update:mini-variant",!1)}),this.expandOnHover&&(e.mouseenter=function(){return t.isMouseover=!0},e.mouseleave=function(){return t.isMouseover=!1}),e},genPosition:function(t){var e=Object(v["t"])(this,t);return e?this.$createElement("div",{staticClass:"v-navigation-drawer__".concat(t)},e):e},genPrepend:function(){return this.genPosition("prepend")},genContent:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder:function(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init:function(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange:function(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft:function(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight:function(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication:function(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;var t=Number(this.computedWidth);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant:function(t){this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render:function(t){var e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||Object(v["t"])(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}})}}]);
//# sourceMappingURL=chunk-53cb3a14.0d89a8d2.js.map