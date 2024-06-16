import{Q as r}from"./QItemLabel.74043884.js";import{Q as Y,a as w,b as m}from"./QList.b75e4db9.js";import{_ as Z,aD as J,L as K,aS as W,r as x,c as s,G as ee,w as B,o as ae,R as b,$ as T,f as a,U as t,aT as te,F as U,Y as i,Z as o,a1 as E,m as v,a0 as ne,aU as se,X as j,V as F,S as oe,aV as le,aE as ie,a3 as ce}from"./index.0fa726e0.js";import{Q as ue,a as de,b as re}from"./QBar.b977ec46.js";import{C as ge}from"./ClosePopup.ea452ccc.js";import{u as fe}from"./use-quasar.02d069fc.js";import{a as G}from"./index.27935773.js";import{u as me}from"./vue-i18n.runtime.esm-bundler.e3e13b44.js";import"./selection.d7a33888.js";import"./axios.e6fce94e.js";const pe=J({name:"HandCount",data(){return{}},setup(){const e=K();W();const c=fe(),g=x(0),{t:f}=me(),I=s({get:()=>e.state.fabchange.fab1}),N=s({get:()=>e.state.fabchange.fab2}),l=s({get:()=>e.state.fabchange.fab3}),p=s({get:()=>e.state.fabchange.fab4}),h=s({get:()=>e.state.screenchange.screenscroll}),_=s({get:()=>e.state.loginauth.authin}),H=s({get:()=>e.state.loginauth.login_name}),y=s({get:()=>e.state.loginauth.operator}),C=s({get:()=>e.state.settings.openid}),V=s({get:()=>e.state.langchange.lang}),$=s({get:()=>e.state.settings.server}),D=s({get:()=>e.state.scanchanged.scandata,set:n=>{e.commit("scanchanged/ScanChanged",n)}}),M=s({get:()=>e.state.scanchanged.datadetail,set:n=>{e.commit("scanchanged/ScanDataChanged",n)}}),O=s({get:()=>e.state.scanchanged.dndata,set:n=>{e.commit("scanchanged/DNDataChanged",n)}}),P=s({get:()=>e.state.scanchanged.bindata,set:n=>{e.commit("scanchanged/BinDataChanged",n)}}),R=s({get:()=>e.state.scanchanged.tablelist,set:n=>{e.commit("scanchanged/TableDataChanged",n)}}),Q=s({get:()=>e.state.scanchanged.scanmode}),A=s({get:()=>e.state.scanchanged.bar_scanned}),q=s({get:()=>e.state.scanchanged.apiurl,set:n=>{e.commit("scanchanged/ApiUrlChanged",n)}}),S=s({get:()=>e.state.scanchanged.apiurlnext,set:n=>{e.commit("scanchanged/ApiUrlNextChanged",n)}}),z=s({get:()=>e.state.scanchanged.apiurlprevious,set:n=>{e.commit("scanchanged/ApiUrlPreviousChanged",n)}}),u=ee({tableData:[],bin_name:"",goods_code:"",affirmresultVisible:!1});function k(){u.tableData=[],L()}function L(n){G.get($.value+`cyclecount/manualcyclecount/?bin_name=${u.bin_name}&goods_code=${u.goods_code}`,{headers:{"Content-Type":'application/json, charset="utf-8"',token:C.value,language:V.value,operator:y.value}}).then(d=>{d.data&&d.data.length>0&&(u.tableData=d.data)})}function X(){G.post($.value+"cyclecount/manualcyclecount/",u.tableData,{headers:{"Content-Type":"application/json",token:C.value,language:V.value,operator:y.value}}).then(n=>{c.notify({message:f("notice.handcount.notice7")}),u.affirmresultVisible=!1,k()})}return B(A,(n,d)=>{Q.value==="GOODS"&&(u.goods_code=D.value),Q.value==="BINSET"&&(u.bin_name=D.value),k()}),B(h,(n,d)=>{n===1?S.value!==null&&(q.value=S.value,g.value=1):g.value=0}),B(g,(n,d)=>{n===1&&(_.value==="0"?c.notify({type:"negative",message:f("notice.mobile_userlogin.notice9")}):L())}),ae(()=>{_.value==="0"?c.notify({type:"negative",message:f("notice.mobile_userlogin.notice9")}):k()}),{state:u,t:f,fab1:I,fab2:N,fab3:l,fab4:p,screenscroll:h,authin:_,login_name:H,openid:C,operator:y,lang:V,requestauth:g,baseurl:$,apiurl:q,apiurlnext:S,apiurlprevious:z,scandata:D,datadetail:M,tablelist:R,dndata:O,bindata:P,scanmode:Q,bar_scanned:A,handleAffirmresultSubmit:X}}}),he={style:{float:"right",padding:"15px"}};function be(e,c,g,f,I,N){return b(),T(U,null,[a(Y,{bordered:"",padding:""},{default:t(()=>[a(w,null,{default:t(()=>[a(m,null,{default:t(()=>[a(r,{overline:""},{default:t(()=>[i(o(e.$t("notice.handcount.notice2")),1)]),_:1}),a(r,{caption:""},{default:t(()=>[i(o(e.$t("notice.handcount.notice8")),1)]),_:1})]),_:1})]),_:1}),a(E,{spaced:""}),a(w,null,{default:t(()=>[a(m,null,{default:t(()=>[i(o(e.$t("notice.handcount.notice1")),1)]),_:1}),a(m,{side:""},{default:t(()=>[a(v,{onClick:c[0]||(c[0]=l=>e.state.affirmresultVisible=!0),color:"primary",size:"sm"},{default:t(()=>[i(o(e.$t("notice.handcount.notice5")),1)]),_:1})]),_:1})]),_:1}),(b(!0),T(U,null,ne(e.state.tableData,(l,p)=>(b(),T(U,{key:p},[a(w,null,{default:t(()=>[a(m,null,{default:t(()=>[a(r,null,{default:t(()=>[i(o(l.bin_name),1)]),_:2},1024),a(r,{caption:"",lines:"2"},{default:t(()=>[i(o(l.goods_code),1)]),_:2},1024)]),_:2},1024),a(m,{side:"",top:""},{default:t(()=>[a(r,{caption:""},{default:t(()=>[i(o(e.$t("notice.handcount.notice3"))+"\uFF1A"+o(l.goods_qty),1)]),_:2},1024),a(r,{caption:""},{default:t(()=>[a(ie,{dense:"",outlined:"",square:"",modelValue:l.physical_inventory,"onUpdate:modelValue":h=>l.physical_inventory=h,modelModifiers:{number:!0},type:"number",style:{width:"100px"},label:e.$t("notice.handcount.notice4")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1024)]),_:2},1024)]),_:2},1024),F(a(E,{spaced:"",inset:"item"},null,512),[[ce,p+1!==e.state.tableData.length]])],64))),128))]),_:1}),a(te,{modelValue:e.state.affirmresultVisible,"onUpdate:modelValue":c[2]||(c[2]=l=>e.state.affirmresultVisible=l)},{default:t(()=>[a(se,{class:"shadow-24"},{default:t(()=>[a(ue,{class:"bg-light-blue-10 text-white rounded-borders",style:{height:"50px"}},{default:t(()=>[j("div",null,o(e.$t("notice.handcount.notice6")),1),a(de),F((b(),oe(v,{dense:"",flat:"",icon:"close"},{default:t(()=>[a(re,null,{default:t(()=>[i(o(e.$t("index.close")),1)]),_:1})]),_:1})),[[ge]])]),_:1}),a(le,{class:"scroll"},{default:t(()=>[i(o(e.$t("deletetip")),1)]),_:1}),j("div",he,[a(v,{color:"white","text-color":"black",style:{"margin-right":"25px"},onClick:c[1]||(c[1]=l=>e.state.affirmresultVisible=!1)},{default:t(()=>[i(o(e.$t("cancel")),1)]),_:1}),a(v,{color:"primary",onClick:e.handleAffirmresultSubmit},{default:t(()=>[i(o(e.$t("submit")),1)]),_:1},8,["onClick"])])]),_:1})]),_:1},8,["modelValue"])],64)}var we=Z(pe,[["render",be]]);export{we as default};
