(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2106b9"],{b88e:function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return e.binding?n("v-select",{attrs:{loading:e.loading,label:e.label,items:e.items,outlined:"","error-messages":e.err_messages,error:e.error,shaped:"",clearable:"","hide-details":"","small-chips":"",dense:"",multiple:"","item-text":"display","item-value":"code"},on:{change:function(a){return e.updateSearch()},"click:clear":function(a){return e.clearSearch()}},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}}):n("v-text-field",{attrs:{label:e.label,dense:"",outlined:"","hide-details":"",shaped:"",clearable:""},on:{change:function(a){return e.updateSearch()},"click:clear":function(a){return e.clearSearch()}},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}})},l=[],i={name:"gofr-search-term",props:["label","expression","binding"],data:function(){return{loading:!1,items:[],error:!1,err_messages:null,value:[]}},mounted:function(){var e=this;this.loading=!0,this.$fhirutils.expand(this.binding).then((function(a){e.items=a,e.loading=!1})).catch((function(a){e.error=!0,e.err_messages=a.message,e.loading=!1}))},methods:{updateSearch:function(){this.$emit("termChange",this.expression,this.value)},clearSearch:function(){this.$emit("termChange",this.expression,[])}}},r=i,s=n("2877"),c=n("6544"),u=n.n(c),o=n("b974"),d=n("8654"),h=Object(s["a"])(r,t,l,!1,null,null,null);a["default"]=h.exports;u()(h,{VSelect:o["a"],VTextField:d["a"]})}}]);
//# sourceMappingURL=chunk-2d2106b9.e89bcc50.js.map