(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a6f3fea"],{"91dd":function(e,t,r){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,s){t=t||"&",r=r||"=";var i={};if("string"!==typeof e||0===e.length)return i;var o=/\+/g;e=e.split(t);var c=1e3;s&&"number"===typeof s.maxKeys&&(c=s.maxKeys);var l=e.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var d,v,p,h,f=e[u].replace(o,"%20"),m=f.indexOf(r);m>=0?(d=f.substr(0,m),v=f.substr(m+1)):(d=f,v=""),p=decodeURIComponent(d),h=decodeURIComponent(v),a(i,p)?n(i[p])?i[p].push(h):i[p]=[i[p],h]:i[p]=h}return i};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},b15a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"my-3"},[r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e._t("default"),r("v-overlay",{attrs:{value:e.overlay}},[r("v-progress-circular",{attrs:{size:"50",color:"primary",indeterminate:""}}),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.overlay=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1),r("v-navigation-drawer",{staticClass:"primary darken-1 white--text",staticStyle:{"z-index":"3"},attrs:{app:"",right:"",permanent:"",clipped:""}},[r("v-list",{staticClass:"white--text"},[r("v-list-item",[r("v-btn",{staticClass:"secondary",attrs:{small:"",dark:""},on:{click:function(t){return e.$router.go(-1)}}},[r("v-icon",{attrs:{light:""}},[e._v("mdi-pencil-off")]),r("span",[e._v("Cancel")])],1),r("v-spacer"),e.valid?r("v-btn",{staticClass:"success darken-1",attrs:{small:"",dark:"",disabled:!e.valid},on:{click:function(t){return e.processFHIR()}}},[r("v-icon",{attrs:{light:""}},[e._v("mdi-content-save")]),r("span",[e._v("Save")])],1):r("v-btn",{staticClass:"warning",attrs:{dark:"",small:""},on:{click:function(t){return e.$refs.form.validate()}}},[r("v-icon",{attrs:{light:""}},[e._v("mdi-content-save")]),r("span",[e._v("Save")])],1)],1),r("v-divider",{attrs:{color:"white"}}),e.sectionMenu?r("v-subheader",{staticClass:"white--text"},[r("h2",[e._v("Sections")])]):e._e(),e._l(e.sectionMenu,(function(t){return r("v-list-item",{key:t.id,attrs:{href:"#section-"+t.id}},[r("v-list-item-content",{staticClass:"white--text"},[r("v-list-item-title",{staticClass:"text-uppercase"},[r("h4",[e._v(e._s(t.title))])]),r("v-list-item-subtitle",{staticClass:"white--text"},[e._v(e._s(t.desc))])],1)],1)}))],2)],1)],2)],1)},n=[],s=r("b85c"),i=r("1da1"),o=(r("ac1f"),r("1276"),r("96cf"),r("bc3a")),c=r.n(o),l=r("b383"),u={name:"gofr-questionnaire",props:["id","url","title","description","purpose","section-menu","view-page","edit","constraints"],data:function(){return{fhir:{},loading:!1,overlay:!1,isEdit:!1,valid:!0,advancedValid:!0}},methods:{processFHIR:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$refs.form.validate(),this.valid){e.next=3;break}return e.abrupt("return");case 3:return this.advancedValid=!0,this.overlay=!0,this.loading=!0,t=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a,n,i){var o,c,l,u,d,v,p,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i||(i={}),o=Object(s["a"])(n),e.prev=2,o.s();case 4:if((c=o.n()).done){e.next=67;break}if(l=c.value,u=a,d={},!l.isArray){e.next=11;break}e.next=39;break;case 11:if(!l.isQuestionnaireGroup){e.next=17;break}v={linkId:l.path,text:l.label,item:[]},u.push(v),u=v.item,e.next=39;break;case 17:if(!l.qField){e.next=39;break}if(p=void 0,i.hasOwnProperty(l.path)?p=i[l.path]:(p={linkId:l.path,answer:[]},i[l.path]=p,u.push(p)),h={},h[l.qField]=l.value,p.answer.push(h),!l.constraints){e.next=39;break}if(l.errors=[],e.prev=25,e.t0=r.advancedValid,!e.t0){e.next=31;break}return e.next=30,r.$fhirutils.checkConstraints(l.constraints,r.constraints,l.value,l.errors);case 30:e.t0=e.sent;case 31:r.advancedValid=e.t0,e.next=39;break;case 34:e.prev=34,e.t1=e["catch"](25),r.advancedValid=!1,l.errors.push("An unknown error occurred."),console.log(e.t1);case 39:if(!l.$children){e.next=49;break}return e.prev=40,e.next=43,t(u,l.$children,d);case 43:e.next=49;break;case 45:e.prev=45,e.t2=e["catch"](40),r.advancedValid=!1,console.log(e.t2);case 49:if(!l.isQuestionnaireGroup||!l.constraints){e.next=65;break}if(l.errors=[],e.prev=51,e.t3=r.advancedValid,!e.t3){e.next=57;break}return e.next=56,r.$fhirutils.checkConstraints(l.constraints,r.constraints,u,l.errors);case 56:e.t3=e.sent;case 57:r.advancedValid=e.t3,e.next=65;break;case 60:e.prev=60,e.t4=e["catch"](51),r.advancedValid=!1,l.errors.push("An unknown error occurred."),console.log(e.t4);case 65:e.next=4;break;case 67:e.next=72;break;case 69:e.prev=69,e.t5=e["catch"](2),o.e(e.t5);case 72:return e.prev=72,o.f(),e.finish(72);case 75:case"end":return e.stop()}}),e,null,[[2,69,72,75],[25,34],[40,45],[51,60]])})));return function(t,r,a){return e.apply(this,arguments)}}(),this.fhir={resourceType:"QuestionnaireResponse",questionnaire:this.url,status:"completed",item:[]},e.prev=8,e.next=11,t(this.fhir.item,this.$children);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](8),this.advancedValid=!1,console.log(e.t0);case 17:if(this.advancedValid){e.next=22;break}return this.overlay=!1,this.loading=!1,this.$store.commit("setMessage",{type:"error",text:"There were errors on the form."}),e.abrupt("return");case 22:c()({url:"/fhir/"+this.$store.state.config.userConfig.FRDatasource+"/QuestionnaireResponse?"+l.stringify(this.$route.query),method:"POST",data:this.fhir}).then((function(e){r.overlay=!1,r.loading=!1,r.$store.state.alert.show=!0,r.$store.state.alert.width="600px",r.$store.state.alert.msg="Saved successfully!",r.$store.state.alert.type="success",r.$router.push({name:"ResourceView",params:{page:r.viewPage,id:e.data.subject.reference.split("/")[1]}})})).catch((function(e){r.overlay=!1,r.loading=!1,console.log(e),r.$store.state.alert.show=!0,r.$store.state.alert.width="600px",r.$store.state.alert.msg="Failed to save!",r.$store.state.alert.type="error"}));case 23:case"end":return e.stop()}}),e,this,[[8,13]])})));function t(){return e.apply(this,arguments)}return t}()}},d=u,v=r("2877"),p=r("6544"),h=r.n(p),f=r("8336"),m=r("a523"),b=r("ce7e"),y=r("4bd4"),g=r("132d"),x=r("8860"),k=r("da13"),w=r("5d23"),V=r("f774"),C=r("a797"),$=r("490a"),R=r("2fa4"),_=r("e0c7"),I=Object(v["a"])(d,a,n,!1,null,null,null);t["default"]=I.exports;h()(I,{VBtn:f["a"],VContainer:m["a"],VDivider:b["a"],VForm:y["a"],VIcon:g["a"],VList:x["a"],VListItem:k["a"],VListItemContent:w["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VNavigationDrawer:V["a"],VOverlay:C["a"],VProgressCircular:$["a"],VSpacer:R["a"],VSubheader:_["a"]})},b383:function(e,t,r){"use strict";t.decode=t.parse=r("91dd"),t.encode=t.stringify=r("e099")},e099:function(e,t,r){"use strict";var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,o){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"===typeof e?s(i(e),(function(i){var o=encodeURIComponent(a(i))+r;return n(e[i])?s(e[i],(function(e){return o+encodeURIComponent(a(e))})).join(t):o+encodeURIComponent(a(e[i]))})).join(t):o?encodeURIComponent(a(o))+r+encodeURIComponent(a(e)):""};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function s(e,t){if(e.map)return e.map(t);for(var r=[],a=0;a<e.length;a++)r.push(t(e[a],a));return r}var i=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t}}}]);
//# sourceMappingURL=chunk-0a6f3fea.97807e92.js.map