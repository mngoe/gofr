(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5369b150"],{"5e89":function(t,e,s){var r=s("861d"),a=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&a(t)===t}},"8ba4":function(t,e,s){var r=s("23e7"),a=s("5e89");r({target:"Number",stat:!0},{isInteger:a})},d79a:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.edit?s("v-container",[t._t("form")],2):s("div",[s("v-row",{attrs:{dense:""}},[s("v-col",{staticClass:"font-weight-bold",attrs:{cols:t.$store.state.cols.header}},[t._t("header")],2),t.loading?s("v-col",{attrs:{cols:t.$store.state.cols.content}},[s("v-progress-linear",{attrs:{indeterminate:"",color:"primary"}})],1):s("v-col",{attrs:{cols:t.$store.state.cols.content}},[t._t("value")],2)],1),s("v-divider")],1)],1)},a=[],i={name:"gofr-element",props:["edit","loading"]},o=i,n=s("2877"),l=s("6544"),u=s.n(l),d=s("62ad"),c=s("a523"),h=s("ce7e"),p=s("8e36"),f=s("0fd9"),v=Object(n["a"])(o,r,a,!1,null,null,null);e["a"]=v.exports;u()(v,{VCol:d["a"],VContainer:c["a"],VDivider:h["a"],VProgressLinear:p["a"],VRow:f["a"]})},eaae:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("gofr-element",{attrs:{edit:t.edit,loading:!1},scopedSlots:t._u([{key:"form",fn:function(){return[s("v-text-field",{attrs:{"error-messages":t.errors,label:t.display,disabled:t.disabled,name:t.field,outlined:"","hide-details":"auto",rules:t.rules,dense:""},on:{change:function(e){t.errors=[]}},scopedSlots:t._u([{key:"label",fn:function(){return[t._v(t._s(t.display)+" "),t.required?s("span",{staticClass:"red--text font-weight-bold"},[t._v("*")]):t._e()]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=t._n(e)},expression:"value"}})]},proxy:!0},{key:"header",fn:function(){return[t._v(" "+t._s(t.display)+" ")]},proxy:!0},{key:"value",fn:function(){return[t._v(" "+t._s(t.value)+" ")]},proxy:!0}])})},a=[],i=(s("a9e3"),s("8ba4"),s("d79a")),o={name:"fhir-integer",props:["field","label","min","max","id","path","slotProps","sliceName","base-min","base-max","edit","readOnlyIfSet","constraints"],components:{GofrElement:i["a"]},data:function(){return{source:{path:"",data:{}},value:"",disabled:!1,errors:[],lockWatch:!1}},created:function(){this.setupData()},watch:{slotProps:{handler:function(){this.lockWatch||this.setupData()},deep:!0}},methods:{setupData:function(){if(this.slotProps&&this.slotProps.source){if(this.source={path:this.slotProps.source.path+"."+this.field,data:{}},this.slotProps.source.fromArray)this.source.data=this.slotProps.source.data,this.value=this.source.data,this.lockWatch=!0;else{var t=this.$fhirutils.pathFieldExpression(this.field);this.source.data=this.$fhirpath.evaluate(this.slotProps.source.data,t),1==this.source.data.length&&(this.value=this.source.data[0],this.lockWatch=!0)}this.disabled=this.readOnlyIfSet&&!!this.value}}},computed:{index:function(){return this.slotProps?this.slotProps.input:void 0},display:function(){return this.slotProps&&this.slotProps.input?this.slotProps.input.label:this.label},required:function(){return(this.index||0)<this.min},rules:function(){var t=this,e=function(e){var s=Number(e);return Number.isInteger(s)||t.display+" must be an integer"},s=[e];return this.required&&s.push((function(e){return!!e||t.display+" is required"})),s}}},n=o,l=s("2877"),u=s("6544"),d=s.n(u),c=s("8654"),h=Object(l["a"])(n,r,a,!1,null,null,null);e["default"]=h.exports;d()(h,{VTextField:c["a"]})}}]);
//# sourceMappingURL=chunk-5369b150.5e1e4a4b.js.map