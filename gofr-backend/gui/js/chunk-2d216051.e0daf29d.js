(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216051"],{c14a:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ihris-template",{key:n.$route.path},[n._v(" Loading... ")])},u=[],r=(t("d3b7"),t("3ca3"),t("ddb0"),t("a026")),c=t("bc3a"),a=t.n(c),h={name:"fhir-page-add",props:["page"],data:function(){return{}},created:function(){this.getTemplate()},methods:{getTemplate:function(){var n=this;a.a.get("/config/page/"+this.page).then((function(e){var i=e.data;"OperationOutcome"===i.resourceType?r["a"].component("ihris-template",{name:"ihris-template",data:function(){return{issues:i.issue}},components:{"ihris-outcome":function(){return t.e("fhir-outcome").then(t.bind(null,"adbd"))}},template:'<div><ihris-outcome :issues="issues"></ihris-outcome></div>'}):r["a"].component("ihris-template",{name:"ihris-template",data:function(){return{isEdit:!0,fhirId:void 0,sectionMenu:i.data.sectionMenu,subFields:i.data.subFields,columns:i.data.columns,actions:i.data.actions,links:i.data.links,constraints:i.data.constraints}},components:{"ihris-resource":function(){return t.e("chunk-ea42a9f0").then(t.bind(null,"7372"))},"ihris-codesystem":function(){return t.e("chunk-5474d9c5").then(t.bind(null,"2d9b"))},"ihris-section":function(){return t.e("chunk-2d2245b0").then(t.bind(null,"e07f"))},"ihris-secondary":function(){return t.e("chunk-69ce93ab").then(t.bind(null,"39e1"))},"ihris-array":function(){return t.e("chunk-2d21a389").then(t.bind(null,"bb1d"))},"fhir-extension":function(){return t.e("chunk-2d0da301").then(t.bind(null,"6b10"))},"fhir-reference":function(){return Promise.all([t.e("chunk-67c19840"),t.e("chunk-f4ca1e72")]).then(t.bind(null,"99fa"))},"fhir-backbone-element":function(){return t.e("chunk-08ab496f").then(t.bind(null,"8142"))},"fhir-string":function(){return t.e("chunk-1b3f2290").then(t.bind(null,"b78c"))},"fhir-attachment":function(){return t.e("chunk-616686dc").then(t.bind(null,"ca33"))},"fhir-human-name":function(){return t.e("chunk-07768e92").then(t.bind(null,"89c1"))},"fhir-code":function(){return t.e("chunk-77a2aa0c").then(t.bind(null,"1131"))},"fhir-date":function(){return t.e("chunk-32fc7ad8").then(t.bind(null,"7fb0"))},"fhir-date-time":function(){return t.e("chunk-0a2355b0").then(t.bind(null,"45dd"))},"fhir-period":function(){return t.e("chunk-789dd4ca").then(t.bind(null,"4807"))},"fhir-identifier":function(){return t.e("chunk-5e719bed").then(t.bind(null,"c408"))},"fhir-contact-point":function(){return t.e("chunk-69e25fe0").then(t.bind(null,"4b80"))},"fhir-address":function(){return t.e("chunk-63f87f9c").then(t.bind(null,"b248"))},"fhir-codeable-concept":function(){return t.e("chunk-2d0b8b5d").then(t.bind(null,"309c"))},"fhir-uri":function(){return t.e("chunk-69078b64").then(t.bind(null,"6d39"))},"fhir-boolean":function(){return t.e("chunk-5caeefd5").then(t.bind(null,"ff03"))},"fhir-positive-int":function(){return t.e("chunk-19a703d4").then(t.bind(null,"b750"))},"fhir-unsigned-int":function(){return t.e("chunk-53787938").then(t.bind(null,"4c52"))},"fhir-integer":function(){return t.e("chunk-5368b584").then(t.bind(null,"eaae"))},"fhir-coding":function(){return t.e("chunk-5e70ac24").then(t.bind(null,"eee9"))},"fhir-money":function(){return t.e("chunk-1f82ee10").then(t.bind(null,"a6ba"))},"fhir-decimal":function(){return t.e("chunk-2f5fab82").then(t.bind(null,"8892"))},"fhir-time":function(){return t.e("chunk-3d173b39").then(t.bind(null,"1286"))}},template:i.template}),n.$forceUpdate()})).catch((function(e){console.log(e),r["a"].component("ihris-template",{template:"<div><h1>Error</h1><p>An error occurred trying to load this page</p>.</div>"}),n.$forceUpdate()}))}},components:{},beforeCreate:function(){r["a"].component("ihris-template",{template:"<div>Loading...</div>"})}},o=h,d=t("2877"),l=Object(d["a"])(o,i,u,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d216051.e0daf29d.js.map