(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a437"],{bb89:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"my-3"},[r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e._t("default",null,{source:e.source}),r("v-overlay",{attrs:{value:e.overlay}},[r("v-progress-circular",{attrs:{size:"50",color:"primary",indeterminate:""}})],1),r("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",right:"",permanent:"",clipped:"",width:"350"}},[r("v-list",{staticClass:"white--text"},[r("v-list-item",[e.edit?r("v-btn",{staticClass:"secondary",attrs:{small:"",dark:""},on:{click:function(t){return e.$router.go(0)}}},[r("v-icon",{attrs:{light:""}},[e._v("mdi-pencil-off")]),r("span",[e._v("Cancel")])],1):[r("v-btn",{staticClass:"secondary",attrs:{small:"",dark:""},on:{click:function(t){return e.$emit("set-edit",!e.edit)}}},[r("v-icon",{attrs:{left:"",light:""}},[e._v("mdi-pencil")]),r("span",[e._v("Edit")])],1),r("v-spacer"),e.$store.state.requestResourceUpdateData.requestAction&&e.hasPermission?r("v-btn",{attrs:{small:"",color:"success",disabled:"approved"===e.currentRequestStatus||""===e.currentRequestStatus},on:{click:function(t){return e.processRequest("approved")}}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-check-circle")]),e._v(" Approve ")],1):e._e(),r("v-spacer"),e.$store.state.requestResourceUpdateData.requestAction&&e.hasPermission?r("v-btn",{attrs:{small:"",color:"error",disabled:"pending"!==e.currentRequestStatus},on:{click:function(t){return e.processRequest("rejected")}}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-cancel")]),e._v(" Reject ")],1):e._e()],r("v-spacer"),e.edit&&"send-update-request"!==e.$store.state.searchAction?[e.valid?r("v-btn",{staticClass:"success darken-1",attrs:{small:"",dark:"",disabled:!e.valid},on:{click:function(t){return e.processFHIR()}}},[r("v-icon",{attrs:{light:""}},[e._v("mdi-content-save")]),r("span",[e._v("Save")])],1):r("v-btn",{staticClass:"warning",attrs:{small:"",dark:""},on:{click:function(t){return e.$refs.form.validate()}}},[r("v-icon",{attrs:{light:""}},[e._v("mdi-content-save")]),r("span",[e._v("Save")])],1)]:e.edit&&"send-update-request"===e.$store.state.searchAction?[r("v-btn",{attrs:{small:"",color:"success"},on:{click:e.createUpdateRequest}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-check-circle")]),e._v(" Send Update Request ")],1)]:e._e()],2),r("v-divider",{attrs:{color:"white"}}),!e.edit&&e.links&&e.links.length?e._l(e.links,(function(t,s){return r("v-list-item",{key:t.url},[r("v-btn",{key:t.url,staticClass:"primary",attrs:{text:!t.button,to:e.getLinkUrl(t)}},[t.icon?r("v-icon",{attrs:{light:""}},[e._v(e._s(t.icon))]):e._e(),e._v(" "+e._s(e.linktext[s])+" ")],1)],1)})):e._e(),e.sectionMenu?r("v-subheader",{staticClass:"white--text"},[r("h2",[e._v("Sections")])]):e._e(),e._l(e.sectionMenu,(function(t){return r("v-list-item",{key:t.name,attrs:{href:"#section-"+t.name}},[e.edit&&t.secondary?e._e():r("v-list-item-content",{staticClass:"white--text"},[r("v-list-item-title",{staticClass:"text-uppercase"},[r("h4",[e._v(e._s(t.title))])]),r("v-list-item-subtitle",{staticClass:"white--text"},[e._v(e._s(t.desc))])],1)],1)}))],2)],1)],2)],1)},i=[],a=r("1da1"),n=r("b85c"),o=(r("96cf"),r("b64b"),r("2ca0"),r("ac1f"),r("1276"),r("caad"),r("2532"),r("fb6a"),r("5319"),r("bc3a")),c=r.n(o),u={name:"gofr-resource",props:["title","field","fhirId","page","profile","section-menu","edit","links","constraints","partition"],data:function(){return{fhir:{},orig:{},valid:!0,source:{data:{},path:""},loading:!1,overlay:!1,isEdit:!1,linktext:[],advancedValid:!0,currentRequestStatus:""}},created:function(){var e=this;if(this.fhirId){this.loading=!0;var t=this.$store.state.config.userConfig.FRDatasource;this.partition&&(t=this.partition),c.a.get("/fhir/"+t+"/"+this.field+"/"+this.fhirId).then((function(t){var r=t.data;if(e.orig=r,e.source={data:r,path:e.field},e.setLinkText(),e.loading=!1,r.extension){var s,i=Object(n["a"])(r.extension);try{for(i.s();!(s=i.n()).done;){var a=s.value;"http://gofr.org/fhir/StructureDefinition/request-status"===a.url&&(e.currentRequestStatus=a.valueCoding.code)}}catch(o){i.e(o)}finally{i.f()}}})).catch((function(t){console.log(e.field,e.fhirId,t)}))}else if(this.$route.query){for(var r={resourceType:this.field},s=!1,i=0,a=Object.keys(this.$route.query);i<a.length;i++){var o=a[i];if(o.startsWith(this.field+".")){s=!0;var u,l=o.substring(this.field.length+1).split("."),d=l.pop(),h=r,f=Object(n["a"])(l);try{for(f.s();!(u=f.n()).done;){var p=u.value;if(p.includes("["))try{var v=p.split("["),m=v[0],g=v[1].slice(0,-1);if(h.hasOwnProperty(m)||(h[m]=[]),g){var y={};h[m][parseInt(g)]=y,h=y}else{var b={};h[m].push(b),h=b}}catch($){console.log("Unable to process",o);continue}else h.hasOwnProperty(p)||(h[p]={},h=h[p])}}catch($){f.e($)}finally{f.f()}if(d.includes("["))try{var k=d.split("["),q=k[0],x=k[1].slice(0,-1);h.hasOwnProperty(q)||(h[q]=[]),x?h[q][parseInt(x)]=this.$route.query[o]:h[q].push(this.$route.query[o])}catch($){console.log("Unable to process",o);continue}else h[d]=this.$route.query[o]}}s&&(this.source={data:r,path:this.field})}},computed:{hasFhirId:function(){return""!=this.fhirId&&!!this.fhirId},hasPermission:function(){return!!("process-update-request"===this.$store.state.requestResourceUpdateData.requestAction&&this.$tasksVerification.hasPermissionByName("special","custom","process-update-facility-request")||"process-add-request"===this.$store.state.requestResourceUpdateData.requestAction&&this.$tasksVerification.hasPermissionByName("special","custom","process-add-facility-request"))}},methods:{createUpdateRequest:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$refs.form.validate(),e.valid){t.next=3;break}return t.abrupt("return");case 3:return e.fhir={resourceType:e.field,meta:{profile:["http://gofr.org/fhir/StructureDefinition/gofr-facility-update-request"]}},t.prev=4,t.next=7,e.processChildren(e.field,e.fhir,e.$children);case 7:t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](4),e.advancedValid=!1,console.log(t.t0);case 13:if(e.advancedValid){t.next=18;break}return e.overlay=!1,e.loading=!1,e.$store.commit("setMessage",{type:"error",text:"There were errors on the form."}),t.abrupt("return");case 18:e.fhir.extension||(e.fhir.extension=[]),e.fhir.extension.push({url:"http://gofr.org/fhir/StructureDefinition/request-status",valueCoding:{system:"http://gofr.org/fhir/StructureDefinition/request-status-codesystem",code:"pending",display:"Pending"}},{url:"http://gofr.org/fhir/StructureDefinition/request-affected-resource",valueReference:{reference:"Location/"+e.fhirId}}),r="/fhir/"+e.$store.state.config.userConfig.FRDatasource+"/"+e.field,s={method:"POST",url:r,headers:{"Content-Type":"application/json"},data:e.fhir},e.overlay=!0,e.loading=!0,c()(s).then((function(){e.overlay=!1,e.loading=!1,e.$store.state.searchAction="",e.$store.commit("setMessage",{type:"info",text:"Request submitted successfully."}),e.$router.go(-1)})).catch((function(t){e.overlay=!1,e.loading=!1,e.$store.commit("setMessage",{type:"error",text:"Request submition failed."}),console.error(t)}));case 25:case"end":return t.stop()}}),t,null,[[4,9]])})))()},processRequest:function(e){var t,r=this;"process-add-request"===this.$store.state.requestResourceUpdateData.requestAction?t="/facilitiesRequests/add":"process-update-request"===this.$store.state.requestResourceUpdateData.requestAction&&(t="/facilitiesRequests/update");var s={method:"POST",url:t,headers:{"Content-Type":"application/json"},data:{resource:this.source.data,requestStatus:e,requestUpdatingResource:this.$store.state.requestResourceUpdateData.requestUpdatingResource}};this.overlay=!0,this.loading=!0,c()(s).then((function(){r.overlay=!1,r.loading=!1,r.$store.state.requestResourceUpdateData={requestAction:"",requestUpdatingResource:""},r.$store.commit("setMessage",{type:"info",text:"Request "+e+" successfully."}),r.$router.go(-1)})).catch((function(t){r.overlay=!1,r.loading=!1,r.$store.commit("setMessage",{type:"error",text:"Failed to "+e+" request."}),console.error(t)}))},getLinkField:function(e){var t=this.$fhirpath.evaluate(this.source.data,e);return!!t&&t[0]},getLinkUrl:function(e){var t;if(e.field&&(t=this.getLinkField(e.field)),t){if(t.includes("/")){var r=t.split("/");t=r[1]}return e.url.replace("FIELD",t)}return e.url},setLinkText:function(){var e=this,t=function(t){var r=e.links[t];if(r.text)e.linktext[t]=r.text;else if(r.field){var s=e.getLinkField(r.field);s&&e.$fhirutils.lookup(s).then((function(r){e.$set(e.linktext,t,r)}))}};for(var r in this.links)t(r)},processChildren:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(t,r,s){var i,a,o,c,u,l,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=Object(n["a"])(s),e.prev=1,i.s();case 3:if((a=i.n()).done){e.next=36;break}if(o=a.value,c=t,u=r,o.field&&!o.fieldType&&(l=void 0,o.sliceName?o.field.startsWith("value[x]")?(l=o.field.substring(9),c+="."+l):(l=o.field.replace(":"+o.sliceName,""),c+="."+l):(l=o.field,c+="."+l),"1"!==o.max||"1"!==o.baseMax?r.hasOwnProperty(l)||(u[l]=[]):u[l]={},o.hasOwnProperty("value")?(Array.isArray(u[l])?u[l].push(o.value):u[l]=o.value,u=u[l]):Array.isArray(u[l])?(d={},o.profile?d.url=o.profile:"extension"===l&&o.sliceName&&(d.url=o.sliceName),u[l].push(d),u=d):u=u[l]),!o.$children){e.next=18;break}return e.prev=9,e.next=12,this.processChildren(c,u,o.$children);case 12:e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](9),this.advancedValid=!1,console.log(e.t0);case 18:if(!o.constraints){e.next=34;break}if(o.errors=[],e.prev=20,e.t1=this.advancedValid,!e.t1){e.next=26;break}return e.next=25,this.$fhirutils.checkConstraints(o.constraints,this.constraints,u,o.errors,this.fhirId);case 25:e.t1=e.sent;case 26:this.advancedValid=e.t1,e.next=34;break;case 29:e.prev=29,e.t2=e["catch"](20),this.advancedValid=!1,o.errors.push("An unknown error occurred."),console.log(e.t2);case 34:e.next=3;break;case 36:e.next=41;break;case 38:e.prev=38,e.t3=e["catch"](1),i.e(e.t3);case 41:return e.prev=41,i.f(),e.finish(41);case 44:case"end":return e.stop()}}),e,this,[[1,38,41,44],[9,14],[20,29]])})));function t(t,r,s){return e.apply(this,arguments)}return t}(),processFHIR:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t,r,s,i=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$refs.form.validate(),this.valid){e.next=3;break}return e.abrupt("return");case 3:return this.advancedValid=!0,this.overlay=!0,this.loading=!0,this.fhir={resourceType:this.field,meta:{profile:[this.profile]}},e.prev=7,e.next=10,this.processChildren(this.field,this.fhir,this.$children);case 10:e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](7),this.advancedValid=!1,console.log(e.t0);case 16:if(this.advancedValid){e.next=21;break}return this.overlay=!1,this.loading=!1,this.$store.commit("setMessage",{type:"error",text:"There were errors on the form."}),e.abrupt("return");case 21:t=this.$store.state.config.userConfig.FRDatasource,this.partition&&(t=this.partition),r="/fhir/"+t+"/"+this.field,s={method:"POST",url:r,headers:{"Content-Type":"application/json"}},this.fhirId&&(this.fhir.id=this.fhirId,r+="/"+this.fhirId,s.method="PUT",s.url=r),s.data=this.fhir,c()(s).then((function(e){var t=e.data;i.overlay=!1,i.loading=!1,i.fhirId?i.$router.go(0):i.$router.push({name:"ResourceView",params:{page:i.page,id:t.id}})}));case 28:case"end":return e.stop()}}),e,this,[[7,12]])})));function t(){return e.apply(this,arguments)}return t}()},beforeDestroy:function(){this.$store.state.searchAction="",this.$store.state.requestResourceUpdateData={requestAction:"",requestUpdatingResource:""}}},l=u,d=r("2877"),h=r("6544"),f=r.n(h),p=r("8336"),v=r("a523"),m=r("ce7e"),g=r("4bd4"),y=r("132d"),b=r("8860"),k=r("da13"),q=r("5d23"),x=r("f774"),$=r("a797"),R=r("490a"),_=r("2fa4"),w=r("e0c7"),C=Object(d["a"])(l,s,i,!1,null,null,null);t["default"]=C.exports;f()(C,{VBtn:p["a"],VContainer:v["a"],VDivider:m["a"],VForm:g["a"],VIcon:y["a"],VList:b["a"],VListItem:k["a"],VListItemContent:q["a"],VListItemSubtitle:q["b"],VListItemTitle:q["c"],VNavigationDrawer:x["a"],VOverlay:$["a"],VProgressCircular:R["a"],VSpacer:_["a"],VSubheader:w["a"]})}}]);
//# sourceMappingURL=chunk-2d21a437.c72c8c6b.js.map