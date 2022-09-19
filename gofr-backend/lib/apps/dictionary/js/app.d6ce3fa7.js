(function(){"use strict";var e={9084:function(e,t,o){o.d(t,{Y:function(){return N}});var r=o(538),n=o(998),i=o(4562),a=o(3059),s=function(){var e=this,t=e._self._c;return t(n.Z,{attrs:{id:"top"}},[t("IhrisHeader",{attrs:{app:""}}),t("center",[t(i.Z,{attrs:{rounded:"",outlined:"",small:"",color:"primary",to:"/"}},[e._v("Enabled Languages")]),e._v("  "),t(i.Z,{attrs:{rounded:"",outlined:"",small:"",color:"primary",to:"/"}},[e._v("Home")])],1),t("br"),t(a.Z,[t("router-view")],1)],1)},u=[],l=o(5716),c=o(9582),d=o(4886),h=o(4324),f=o(5495),p=o(2933),g=o(3305),v=o(3687),m=o(7953),y=function(){var e=this,t=e._self._c;return t("div",[t(l.Z,{attrs:{color:"white",app:"","clipped-left":"","clipped-right":""}},[t("router-link",{attrs:{to:e.$store.state.coreURL}},[t(f.Z,{attrs:{src:"/ihrisapp/dictionary/images/"+e.header.logo,contain:"","max-height":"36","max-width":"106"}})],1),t(m.qW,{staticClass:"headline ml-2",attrs:{bottom:"true"}},[e.header.title?t("span",{staticClass:"primary--text font-weight-bold"},[e._v(e._s(e.header.title))]):e._e(),e.header.site?t("span",{staticClass:"secondary--text font-weight-bold"},[e._v(" | "+e._s(e.header.site))]):e._e()]),e.$store.state.security_off?t(v.Z):e._e(),e.$store.state.security_off?t("div",{staticClass:"error font-weight-bold white--text",attrs:{dark:""}},[e._v(" Security has been disabled for remote configuration and modules! "),t("br"),e._v(" This should only be done during development. ")]):e._e(),t(v.Z),t("div",[e._v("Welcome "),e.$store.state.user.loggedin?t("span",[e._v(", "+e._s(e.$store.state.user.name))]):e._e()]),t(v.Z),e.header.title?e._e():t(g.Z,{attrs:{indeterminate:"",color:"primary"}}),t(i.Z,{attrs:{icon:"",to:e.$store.state.coreURL,title:"Home"}},[t(h.Z,[e._v("mdi-home")])],1),t(i.Z,{attrs:{icon:"",title:"Help"}},[t(h.Z,[e._v("mdi-help")])],1),t("div"),e.$store.state.user.loggedin?[t(i.Z,{attrs:{small:"",fab:"",dark:"",title:"Logout",loading:e.loading,disabled:e.loading},on:{click:e.logout}},[t(h.Z,[e._v("mdi-logout")])],1)]:e._e()],2),t(p.Z,{attrs:{value:e.idle_countdown}},[t(c.Z,{staticClass:"secondary lighten-1"},[t(d.EB,{staticClass:"headline warning white--text",attrs:{"primary-title":""}},[e._v("Idle - Auto Logout")]),t(d.ZB,{staticClass:"black--text"},[e._v("You have been idle too long and will be logged out in "+e._s(e.idle_logout)+" seconds.")])],1)],1)],1)},b=[],_=o(1705);r.ZP.use(_.Z);var w=new _.Z({}),O=o(629);r.ZP.use(O.ZP);var Z=new O.ZP.Store({state:{user:{loggedin:!1,name:""},coreURL:""},getters:{},mutations:{login(e,t){e.user.loggedin=!0,e.user.name=t.name,e.user.location=t.location,e.user.role=t.role,e.user.userId=t.userId,e.user.reference=t.reference,e.user.facilityId=t.facilityId,e.user.physicalLocation=t.physicalLocation},logout(e){e.user.loggedin=!1,e.user.name="",e.user.name="",e.user.location="",e.user.role="",e.user.reference="",e.user.facilityId="",e.user.physicalLocation=""},securityOff(e,t){e.security_off=t}},actions:{},modules:{}}),k=o(8345);r.ZP.use(k.Z);const P=[{path:"/",name:"home",component:()=>o.e(443).then(o.bind(o,5015))},{path:"/review/:locale",name:"review",component:()=>o.e(443).then(o.bind(o,8469))}],j=new k.Z({routes:P});var C=j,I={name:"IhriHeader",vuetify:w,store:Z,router:C,data:function(){return{loading:!1,idle_countdown:!1,idle_logout:30,header:{title:!1,site:null,logo:"iHRIS5Logo.png",auths:[]},footer:{links:[]},nav:{active:null,menu:{},auths:[]}}},onIdle(){this.$store.state.user.loggedin&&this.idleDialog()},onActive(){this.idle_countdown=!1},methods:{idleDialog(){this.idle_logout=30,this.idle_countdown=!0;const e=setInterval((()=>{if(!this.isAppIdle)return clearInterval(e);this.idle_logout-=1,this.idle_logout<1&&(clearInterval(e),this.logout(null,!0))}),1e3)},logout(e,t){"keycloak"===this.$store.state.idp?this.$keycloak.logout():(this.loading=!0,fetch("/auth/logout").then((()=>{this.loading=!1,this.$emit("loggedout"),t?this.$store.commit("setMessage",{type:"warning",text:"You have been logged out due to inactivity.",timeout:36e5}):this.$store.commit("setMessage",{type:"success",text:"You have logged out."}),this.$router.push({path:"/"})})))},updateConfig:function(){fetch("/auth").then((()=>{fetch("/config/site").then((e=>{e.json().then((e=>{if(Object.prototype.hasOwnProperty.call(e,"security")&&Object.prototype.hasOwnProperty.call(e.security,"disabled")&&this.$store.commit("securityOff",e.security.disabled),Object.prototype.hasOwnProperty.call(e,"title")&&(this.header.title=e.title),Object.prototype.hasOwnProperty.call(e,"site")&&(this.header.site=e.site),Object.prototype.hasOwnProperty.call(e,"logo")&&(this.header.logo=e.logo),Object.prototype.hasOwnProperty.call(e,"auth")){this.header.auths=[],this.nav.auths=[];for(const t of Object.keys(e.auth))e.auth[t].id=t,this.header.auths.push(e.auth[t]),this.nav.auths.push(e.auth[t])}if(Object.prototype.hasOwnProperty.call(e,"user"))if(e.user.loggedin){const t={name:e.user.name,location:e.user.location,role:e.user.role,reference:e.user.reference,facilityId:e.user.facilityId,physicalLocation:e.user.physicalLocation};this.$store.commit("login",t)}else this.$store.commit("logout");Object.prototype.hasOwnProperty.call(e,"nav")&&(Object.prototype.hasOwnProperty.call(e.nav,"active")&&(this.nav.active=e.nav.active),Object.prototype.hasOwnProperty.call(e.nav,"menu")&&(this.nav.menu=e.nav.menu),Object.prototype.hasOwnProperty.call(e.nav,"home")&&(this.nav.home=e.nav.home))}))}))}))}},created(){this.updateConfig()}},L=I,$=o(1001),x=(0,$.Z)(L,y,b,!1,null,null,null),E=x.exports,A={components:{IhrisHeader:E},created(){let e=location.search;e=e.substring(1),e=e.split("=");const t=e.findIndex((e=>"baseURL"===e));-1!==t&&(this.$store.state.coreURL=e[t+1])}},S=A,T=(0,$.Z)(S,s,u,!1,null,null,null),H=T.exports;r.ZP.config.productionTip=!1,new r.ZP({router:C,vuetify:w,store:Z,render:e=>e(H)}).$mount("#app");const N=new r.ZP}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,i){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],i=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(c--,1);var l=n();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,n,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,r){return o.f[r](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.1347f646.js"}}(),function(){o.miniCssF=function(e){return"css/about.9d9c0c73.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ihris-dictionary:";o.l=function(r,n,i,a){if(e[r])e[r].push(n);else{var s,u;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[n];var h=function(t,o){s.onerror=s.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/ihrisapp/dictionary/"}(),function(){var e=function(e,t,o,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)o();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,n.parentNode.removeChild(n),r(u)}};return n.onerror=n.onload=i,n.href=t,document.head.appendChild(n),n},t=function(e,t){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===e||i===t))return n}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){n=a[r],i=n.getAttribute("data-href");if(i===e||i===t)return n}},r=function(r){return new Promise((function(n,i){var a=o.miniCssF(r),s=o.p+a;if(t(a,s))return n();e(r,s,n,i)}))},n={143:0};o.f.miniCss=function(e,t){var o={443:1};n[e]?t.push(n[e]):0!==n[e]&&o[e]&&t.push(n[e]=r(e).then((function(){n[e]=0}),(function(t){throw delete n[e],t})))}}(),function(){var e={143:0};o.f.j=function(t,r){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(o,r){n=e[t]=[o,r]}));r.push(n[2]=i);var a=o.p+o.u(t),s=new Error,u=function(r){if(o.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}};o.l(a,u,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,i,a=r[0],s=r[1],u=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(u)var c=u(o)}for(t&&t(r);l<a.length;l++)i=a[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},r=self["webpackChunkihris_dictionary"]=self["webpackChunkihris_dictionary"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(9084)}));r=o.O(r)})();
//# sourceMappingURL=app.d6ce3fa7.js.map