import{aw as ye,av as M,t as Ee,aK as we,ar as U,aL as j,ap as ee,s as X,ag as W,as as Y,a9 as Ce,j as _e,a4 as ze,r as S,a6 as Ae,c,aP as Te,I as Ne,H as Oe,n as fe,h as E,x as Re,V as G,g as Ie,aQ as te,aR as ae,_ as Pe,aD as De,L as Le,aS as Me,M as Be,w as Fe,o as qe,O as ke,a3 as Ue,R as xe,S as Ge,U as B,X as ne,W as He,f as R,Q as Qe,m as oe,aE as $e,aF as ie}from"./index.0e255557.js";import{Q as le}from"./QResizeObserver.7aa99f47.js";import{Q as Ve}from"./QScrollObserver.10d1c006.js";import{g as re,s as se}from"./touch.70a9dd44.js";import{c as je}from"./selection.f8d7fb69.js";import{b as x}from"./format.a33550d6.js";import{Q as Xe}from"./QPage.5c904c13.js";import{u as Ye}from"./use-quasar.f59abdcf.js";import{a as Ke}from"./index.9b9dbd7c.js";import{u as Je}from"./vue-i18n.runtime.esm-bundler.4cd666b7.js";import"./axios.d3fea899.js";function K(e,r,s){const v=W(e);let t,n=v.left-r.event.x,i=v.top-r.event.y,a=Math.abs(n),f=Math.abs(i);const d=r.direction;d.horizontal===!0&&d.vertical!==!0?t=n<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=i<0?"up":"down":d.up===!0&&i<0?(t="up",a>f&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.down===!0&&i>0?(t="down",a>f&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.left===!0&&n<0?(t="left",a<f&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down"))):d.right===!0&&n>0&&(t="right",a<f&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down")));let y=!1;if(t===void 0&&s===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,y=!0,t==="left"||t==="right"?(v.left-=n,a=0,n=0):(v.top-=i,f=0,i=0)}return{synthetic:y,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:v,direction:t,isFirst:r.event.isFirst,isFinal:s===!0,duration:Date.now()-r.event.time,distance:{x:a,y:f},offset:{x:n,y:i},delta:{x:v.left-r.event.lastX,y:v.top-r.event.lastY}}}}let We=0;var ce=ye({name:"touch-pan",beforeMount(e,{value:r,modifiers:s}){if(s.mouse!==!0&&M.has.touch!==!0)return;function v(n,i){s.mouse===!0&&i===!0?Ce(n):(s.stop===!0&&X(n),s.prevent===!0&&ee(n))}const t={uid:"qvtp_"+We++,handler:r,modifiers:s,direction:re(s),noop:Ee,mouseStart(n){se(n,t)&&we(n)&&(U(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(se(n,t)){const i=n.target;U(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,i){if(M.is.firefox===!0&&j(e,!0),t.lastEvt=n,i===!0||s.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0)){const d=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&ee(d),n.cancelBubble===!0&&X(d),Object.assign(d,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:d}}X(n)}const{left:a,top:f}=W(n);t.event={x:a,y:f,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:f}},move(n){if(t.event===void 0)return;const i=W(n),a=i.left-t.event.x,f=i.top-t.event.y;if(a===0&&f===0)return;t.lastEvt=n;const d=t.event.mouse===!0,y=()=>{v(n,d),s.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),je(),t.styleCleanup=p=>{if(t.styleCleanup=void 0,s.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),d===!0){const w=()=>{document.body.classList.remove("no-pointer-events--children")};p!==void 0?setTimeout(()=>{w(),p()},50):w()}else p!==void 0&&p()}};if(t.event.detected===!0){t.event.isFirst!==!0&&v(n,t.event.mouse);const{payload:p,synthetic:w}=K(n,t,!1);p!==void 0&&(t.handler(p)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&y(),t.event.lastX=p.position.left,t.event.lastY=p.position.top,t.event.lastDir=w===!0?void 0:p.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&t.modifiers.mouseAllDir===!0){y(),t.event.detected=!0,t.move(n);return}const b=Math.abs(a),g=Math.abs(f);b!==g&&(t.direction.horizontal===!0&&b>g||t.direction.vertical===!0&&b<g||t.direction.up===!0&&b<g&&f<0||t.direction.down===!0&&b<g&&f>0||t.direction.left===!0&&b>g&&a<0||t.direction.right===!0&&b>g&&a>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,i){if(t.event!==void 0){if(Y(t,"temp"),M.is.firefox===!0&&j(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(K(n===void 0?t.lastEvt:n,t).payload);const{payload:a}=K(n===void 0?t.lastEvt:n,t,!0),f=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,s.mouse===!0&&U(t,"main",[[e,"mousedown","mouseStart",`passive${s.mouseCapture===!0?"Capture":""}`]]),M.has.touch===!0&&U(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const s=e.__qtouchpan;s!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&s.end(),s.handler=r.value),s.direction=re(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),Y(r,"main"),Y(r,"temp"),M.is.firefox===!0&&j(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});const ue=["vertical","horizontal"],J={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},de={prevent:!0,mouse:!0,mouseAllDir:!0},ve=e=>e>=250?50:Math.ceil(e/5);var Ze=_e({name:"QScrollArea",props:{...ze,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:r,emit:s}){const v=S(!1),t=S(!1),n=S(!1),i={vertical:S(0),horizontal:S(0)},a={vertical:{ref:S(null),position:S(0),size:S(0)},horizontal:{ref:S(null),position:S(0),size:S(0)}},{proxy:f}=Ie(),d=Ae(e,f.$q);let y,b;const g=S(null),p=c(()=>"q-scrollarea"+(d.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=c(()=>{const o=a.vertical.size.value-i.vertical.value;if(o<=0)return 0;const u=x(a.vertical.position.value/o,0,1);return Math.round(u*1e4)/1e4}),a.vertical.thumbHidden=c(()=>(e.visible===null?n.value:e.visible)!==!0&&v.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=c(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=c(()=>Math.round(x(i.vertical.value*i.vertical.value/a.vertical.size.value,ve(i.vertical.value),i.vertical.value))),a.vertical.style=c(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=c(()=>{const o=a.horizontal.size.value-i.horizontal.value;if(o<=0)return 0;const u=x(a.horizontal.position.value/o,0,1);return Math.round(u*1e4)/1e4}),a.horizontal.thumbHidden=c(()=>(e.visible===null?n.value:e.visible)!==!0&&v.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=c(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=c(()=>Math.round(x(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,ve(i.horizontal.value),i.horizontal.value))),a.horizontal.style=c(()=>({...e.thumbStyle,...e.horizontalThumbStyle,left:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const w=c(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),H=[[ce,o=>{T(o,"vertical")},void 0,{vertical:!0,...de}]],F=[[ce,o=>{T(o,"horizontal")},void 0,{horizontal:!0,...de}]];function I(){const o={};return ue.forEach(u=>{const h=a[u];o[u+"Position"]=h.position.value,o[u+"Percentage"]=h.percentage.value,o[u+"Size"]=h.size.value,o[u+"ContainerSize"]=i[u].value}),o}const P=Te(()=>{const o=I();o.ref=f,s("scroll",o)},0);function D(o,u,h){if(ue.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?ae:te)(g.value,u,h)}function A({height:o,width:u}){let h=!1;i.vertical.value!==o&&(i.vertical.value=o,h=!0),i.horizontal.value!==u&&(i.horizontal.value=u,h=!0),h===!0&&_()}function q({position:o}){let u=!1;a.vertical.position.value!==o.top&&(a.vertical.position.value=o.top,u=!0),a.horizontal.position.value!==o.left&&(a.horizontal.position.value=o.left,u=!0),u===!0&&_()}function L({height:o,width:u}){a.horizontal.size.value!==u&&(a.horizontal.size.value=u,_()),a.vertical.size.value!==o&&(a.vertical.size.value=o,_())}function T(o,u){const h=a[u];if(o.isFirst===!0){if(h.thumbHidden.value===!0)return;b=h.position.value,t.value=!0}else if(t.value!==!0)return;o.isFinal===!0&&(t.value=!1);const l=J[u],m=i[u].value,pe=(h.size.value-m)/(m-h.thumbSize.value),be=o.distance[l.dist],Se=b+(o.direction===l.dir?1:-1)*be*pe;k(Se,u)}function N(o,u){const h=a[u];if(h.thumbHidden.value!==!0){const l=o[J[u].offset];if(l<h.thumbStart.value||l>h.thumbStart.value+h.thumbSize.value){const m=l-h.thumbSize.value/2;k(m/i[u].value*h.size.value,u)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function Q(o){N(o,"vertical")}function C(o){N(o,"horizontal")}function _(){v.value===!0?clearTimeout(y):v.value=!0,y=setTimeout(()=>{v.value=!1},e.delay),e.onScroll!==void 0&&P()}function k(o,u){g.value[J[u].scroll]=o}function $(){n.value=!0}function V(){n.value=!1}let O=null;return Ne(()=>{O={top:a.vertical.position.value,left:a.horizontal.position.value}}),Oe(()=>{if(O===null)return;const o=g.value;o!==null&&(te(o,O.left),ae(o,O.top))}),fe(P.cancel),Object.assign(f,{getScrollTarget:()=>g.value,getScroll:I,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:D,setScrollPercentage(o,u,h){D(o,u*(a[o].size.value-i[o].value),h)}}),()=>E("div",{class:p.value,onMouseenter:$,onMouseleave:V},[E("div",{ref:g,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[E("div",{class:"q-scrollarea__content absolute",style:w.value},Re(r.default,[E(le,{debounce:0,onResize:L})])),E(Ve,{axis:"both",onScroll:q})]),E(le,{debounce:0,onResize:A}),E("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:Q}),E("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:C}),G(E("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),H),G(E("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),F)])}}),me="false",Z={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){Z.receivedEvent("deviceready"),console.log(0,window.Media),he(),et()},onPause:function(){console.log("Paused"),tt()},onResume:function(){console.log("Resumed"),he()},receivedEvent:function(e){console.log("Received Event: "+e)}};function et(){z("com.symbol.datawedge.api.GET_VERSION_INFO","")}function z(e,r){console.log("Sending Command: "+e+", "+JSON.stringify(r));var s={};s[e]=r,s.SEND_RESULT=me,window.plugins.intentShim.sendBroadcast({action:"com.symbol.datawedge.api.ACTION",extras:s},function(){},function(){})}function he(){window.plugins.intentShim.registerBroadcastReceiver({filterActions:["com.zebra.cordovademo.ACTION","com.symbol.datawedge.api.RESULT_ACTION"],filterCategories:["android.intent.category.DEFAULT"]},function(e){if(console.log("Received Intent: "+JSON.stringify(e.extras)),e.extras.hasOwnProperty("RESULT_INFO")){var r=e.extras.RESULT+" ("+e.extras.COMMAND.substring(e.extras.COMMAND.lastIndexOf(".")+1,e.extras.COMMAND.length)+")";it(r.toLowerCase())}if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO")){var s=e.extras["com.symbol.datawedge.api.RESULT_GET_VERSION_INFO"];console.log("Version Info: "+JSON.stringify(s));var v=s.DATAWEDGE;v=v.padStart(5,"0"),console.log("Datawedge version: "+v),v>="006.3"&&at(),v>="006.4"&&nt(),v>="006.5"&&ot()}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")){var t=e.extras["com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS"];lt(t)}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){var n=e.extras["com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE"];rt(n)}else e.extras.hasOwnProperty("RESULT_INFO")||st(e,new Date().toLocaleString())})}function tt(){window.plugins.intentShim.unregisterBroadcastReceiver()}function at(){console.log("Datawedge 6.3 APIs are available"),z("com.symbol.datawedge.api.CREATE_PROFILE","ZebraCordovaDemo"),z("com.symbol.datawedge.api.GET_ACTIVE_PROFILE",""),z("com.symbol.datawedge.api.ENUMERATE_SCANNERS","")}function nt(){console.log("Datawedge 6.4 APIs are available");var e={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",RESET_CONFIG:"true",PARAM_LIST:{}},APP_LIST:[{PACKAGE_NAME:"org.greaterwms.app",ACTIVITY_LIST:["*"]}]};z("com.symbol.datawedge.api.SET_CONFIG",e);var r={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"INTENT",RESET_CONFIG:"true",PARAM_LIST:{intent_output_enabled:"true",intent_action:"com.zebra.cordovademo.ACTION",intent_delivery:"2"}}};z("com.symbol.datawedge.api.SET_CONFIG",r),setTimeout(function(){z("com.symbol.datawedge.api.GET_ACTIVE_PROFILE","")},1e3)}function ot(){console.log("Datawedge 6.5 APIs are available"),me="true"}function it(e){console.log("commandReceived:",e)}function lt(e){for(var r="",s=0;s<e.length;s++)console.log("Scanner found: name= "+e[s].SCANNER_NAME+", id="+e[s].SCANNER_INDEX+", connected="+e[s].SCANNER_CONNECTION_STATE),r+=e[s].SCANNER_NAME,s<e.length-1&&(r+=", ");console.log("enumerateScanners:",r)}function rt(e){console.log("activeProfile:",e)}function st(e,r){var s=e.extras["com.symbol.datawedge.data_string"];console.log("scaned Data:"+s),document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=s,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}function ct(){document.addEventListener("deviceready",ge,!1)}function ge(){window.addEventListener("getcodedata",ut,!1)}function ut(e){document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=e.data,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}const dt=De({name:"ScanAPP",data(){return{wholewidth:this.screenwidth-20+"px",wholeheight:this.screenheight-165+"px",handlewidth:this.screenwidth-22+"px",handleheight:this.screenheight-225+"px"}},setup(){const e=Le(),r=Me();Be();const s=Ye(),v=S(""),{t}=Je(),n=c({get:()=>e.state.fabchange.fab1}),i=c({get:()=>e.state.fabchange.fab2}),a=c({get:()=>e.state.fabchange.fab3}),f=c({get:()=>e.state.fabchange.fab4}),d=c({get:()=>e.state.linkchange.oldlink,set:l=>{e.commit("linkchange/OldLinkChanged",l)}}),y=c({get:()=>e.state.linkchange.newlink,set:l=>{e.commit("linkchange/NewLinkChanged",l)}}),b=c({get:()=>e.state.screenchange.screenwidth,set:l=>{e.commit("screenchange/screenwidthChanged",l)}}),g=c({get:()=>e.state.screenchange.screenheight,set:l=>{e.commit("screenchange/screenheightChanged",l)}}),p=c({get:()=>e.state.screenchange.screenscroll,set:l=>{e.commit("screenchange/screenScrollChanged",l)}}),w=c({get:()=>e.state.loginauth.authin}),H=c({get:()=>e.state.loginauth.login_name}),F=c({get:()=>e.state.loginauth.operator}),I=c({get:()=>e.state.settings.openid}),P=c({get:()=>e.state.langchange.lang}),D=c({get:()=>e.state.settings.server}),A=c({get:()=>e.state.scanchanged.scandata,set:l=>{e.commit("scanchanged/ScanChanged",l)}}),q=c({get:()=>e.state.scanchanged.datadetail,set:l=>{e.commit("scanchanged/ScanDataChanged",l)}}),L=c({get:()=>e.state.scanchanged.asndata,set:l=>{e.commit("scanchanged/ASNDataChanged",l)}}),T=c({get:()=>e.state.scanchanged.dndata,set:l=>{e.commit("scanchanged/DNDataChanged",l)}}),N=c({get:()=>e.state.scanchanged.bindata,set:l=>{e.commit("scanchanged/BinDataChanged",l)}}),Q=c({get:()=>e.state.scanchanged.tablelist,set:l=>{e.commit("scanchanged/TableDataChanged",l)}}),C=c({get:()=>e.state.scanchanged.scanmode,set:l=>{e.commit("scanchanged/ScanModeChanged",l)}}),_=c({get:()=>e.state.scanchanged.bar_scanned,set:l=>{e.commit("scanchanged/BarScannedChanged",l)}}),k=c({get:()=>e.state.scanchanged.apiurl,set:l=>{e.commit("scanchanged/ApiUrlChanged",l)}}),$=c({get:()=>e.state.scanchanged.apiurlnext,set:l=>{e.commit("scanchanged/ApiUrlNextChanged",l)}}),V=c({get:()=>e.state.scanchanged.apiurlprevious,set:l=>{e.commit("scanchanged/ApiUrlPreviousChanged",l)}});function O(l){p.value=l.verticalPercentage}function o(l){Ke.get(D.value+"scanner/list/"+l+"/",{headers:{"Content-Type":'application/json, charset="utf-8"',token:I.value,language:P.value,operator:F.value}}).then(m=>{m.data.detail?s.notify({type:"negative",message:t("notice.mobile_scan.notice2")}):(A.value="",q.value="",C.value="",L.value="",T.value="",N.value="",A.value=m.data.code,C.value=m.data.mode,_.value=m.data.request_time,C.value==="ASN"?L.value=m.data.code:C.value==="DN"?T.value=m.data.code:C.value==="GOODS"?A.value=m.data.code:C.value==="BINSET"&&(N.value=m.data.code))}).catch(m=>{s.notify({type:"negative",message:t("notice.mobile_scan.notice3")})})}function u(){cordova.plugins.barcodeScanner.scan(function(l){v.value=l.text,navigator.vibrate(100)},function(l){navigator.vibrate(100)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,disableSuccessBeep:!1})}function h(){let l=s.screen.width,m=s.screen.height;b.value=l,g.value=m}return Fe(v,(l,m)=>{l!==m&&(w.value==="0"?s.notify({type:"negative",message:t("notice.mobile_userlogin.notice9")}):o(l))}),qe(()=>{h(),window.device&&(window.device.manufacturer==="Zebra Technologies"?Z.initialize():window.device.manufacturer==="SEUIC"&&ct())}),fe(()=>{window.device&&(window.device.manufacturer==="Zebra Technologies"?window.removeEventListener("deviceready",Z.onDeviceReady,!1):window.device.manufacturer==="SEUIC"&&window.removeEventListener("deviceready",ge,!1))}),{t,fab1:n,fab2:i,fab3:a,fab4:f,oldlink:d,newlink:y,screenwidth:b,screenheight:g,screenscroll:p,onScroll:O,authin:w,login_name:H,openid:I,operator:F,lang:P,baseurl:D,apiurl:k,apiurlnext:$,apiurlprevious:V,scandata:A,datadetail:q,tablelist:Q,asndata:L,dndata:T,bindata:N,scanmode:C,bar_scanned:_,bar_check:v,thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},StartScan(){window.device?u():s.notify({type:"negative",message:t("notice.mobile_scan.notice4")})},BackButton(){r.push({name:d.value})}}}});function vt(e,r,s,v,t,n){const i=ke("router-view");return G((xe(),Ge(Xe,{class:"flex flex-top"},{default:B(()=>[ne("div",{style:ie({width:e.wholewidth,height:e.wholeheight,marginTop:"10px",marginLeft:"10px"})},[G(ne("input",{id:"scannedBarcodes","onUpdate:modelValue":r[0]||(r[0]=a=>e.bar_check=a),type:"text",style:{display:"none"}},null,512),[[He,e.bar_check]]),R($e,{dense:"",outlined:"",square:"",readonly:"",disable:"",debounce:"500",modelValue:e.scandata,"onUpdate:modelValue":r[1]||(r[1]=a=>e.scandata=a),label:e.$t("scan.scan")},{append:B(()=>[R(Qe,{name:"search"})]),after:B(()=>[R(oe,{round:"",dense:"",flat:"",icon:"border_horizontal",onClick:e.StartScan},null,8,["onClick"])]),before:B(()=>[R(oe,{round:"",dense:"",flat:"",icon:"keyboard_return",onClick:e.BackButton},null,8,["onClick"])]),_:1},8,["modelValue","label"]),R(Ze,{onScroll:e.onScroll,delay:500,"thumb-style":e.thumbStyle,"bar-style":e.barStyle,style:ie({maxWidth:e.handlewidth,width:e.handlewidth,height:e.handleheight,marginTop:"10px"})},{default:B(()=>[R(i)]),_:1},8,["onScroll","thumb-style","bar-style","style"])],4)]),_:1},512)),[[Ue,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]])}var _t=Pe(dt,[["render",vt]]);export{_t as default};
