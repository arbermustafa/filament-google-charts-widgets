var Mr=Object.create;var yt=Object.defineProperty;var jr=Object.getOwnPropertyDescriptor;var Lr=Object.getOwnPropertyNames;var kr=Object.getPrototypeOf,qr=Object.prototype.hasOwnProperty;var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var zr=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Lr(e))!qr.call(r,n)&&n!==t&&yt(r,n,{get:()=>e[n],enumerable:!(i=jr(e,n))||i.enumerable});return r};var p=(r,e,t)=>(t=r!=null?Mr(kr(r)):{},zr(e||!r||!r.__esModule?yt(t,"default",{value:r,enumerable:!0}):t,r));var y=u(()=>{"use strict";});var W=u(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.ensureTokenIsValid=J.secretToken=void 0;y();J.secretToken={};function Yr(r){}J.ensureTokenIsValid=Yr});var me=u(j=>{"use strict";Object.defineProperty(j,"__esModule",{value:!0});j.TEST_ONLY=j.getTrustedTypesPolicy=j.getTrustedTypes=void 0;var ve="google#safe";function Jr(){if(typeof window<"u")return window.trustedTypes}function kt(){var r;return ve!==""&&(r=Jr())!==null&&r!==void 0?r:null}j.getTrustedTypes=kt;var ae;function Kr(){var r,e;if(ae===void 0)try{ae=(e=(r=kt())===null||r===void 0?void 0:r.createPolicy(ve,{createHTML:function(t){return t},createScript:function(t){return t},createScriptURL:function(t){return t}}))!==null&&e!==void 0?e:null}catch{ae=null}return ae}j.getTrustedTypesPolicy=Kr;j.TEST_ONLY={resetDefaults:function(){ae=void 0,ve="google#safe"},setTrustedTypesPolicyName:function(r){ve=r}}});var T=u($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.unwrapResourceUrl=$.isResourceUrl=$.createResourceUrl=$.TrustedResourceUrl=void 0;y();var qt=W(),ot=me(),ye=function(){function r(e,t){(0,qt.ensureTokenIsValid)(t),this.privateDoNotAccessOrElseWrappedResourceUrl=e}return r.prototype.toString=function(){return this.privateDoNotAccessOrElseWrappedResourceUrl.toString()},r}(),nt=typeof window!==void 0?window.TrustedScriptURL:void 0;$.TrustedResourceUrl=nt??ye;function Xr(r){var e,t=r,i=(e=(0,ot.getTrustedTypesPolicy)())===null||e===void 0?void 0:e.createScriptURL(t);return i??new ye(t,qt.secretToken)}$.createResourceUrl=Xr;function Zr(r){var e;return((e=(0,ot.getTrustedTypes)())===null||e===void 0?void 0:e.isScriptURL(r))||r instanceof ye}$.isResourceUrl=Zr;function Qr(r){var e;if(!((e=(0,ot.getTrustedTypes)())===null||e===void 0)&&e.isScriptURL(r))return r;if(r instanceof ye)return r.privateDoNotAccessOrElseWrappedResourceUrl;var t="";throw new Error(t)}$.unwrapResourceUrl=Qr});var ge=u(S=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.unwrapScript=S.isScript=S.EMPTY_SCRIPT=S.createScript=S.SafeScript=void 0;y();var zt=W(),_e=me(),Se=function(){function r(e,t){(0,zt.ensureTokenIsValid)(t),this.privateDoNotAccessOrElseWrappedScript=e}return r.prototype.toString=function(){return this.privateDoNotAccessOrElseWrappedScript.toString()},r}();function Dt(r,e){return e??new Se(r,zt.secretToken)}var st=typeof window!==void 0?window.TrustedScript:void 0;S.SafeScript=st??Se;function ei(r){var e,t=r;return Dt(t,(e=(0,_e.getTrustedTypesPolicy)())===null||e===void 0?void 0:e.createScript(t))}S.createScript=ei;S.EMPTY_SCRIPT=function(){var r;return Dt("",(r=(0,_e.getTrustedTypes)())===null||r===void 0?void 0:r.emptyScript)}();function ti(r){var e;return((e=(0,_e.getTrustedTypes)())===null||e===void 0?void 0:e.isScript(r))||r instanceof Se}S.isScript=ti;function ri(r){var e;if(!((e=(0,_e.getTrustedTypes)())===null||e===void 0)&&e.isScript(r))return r;if(r instanceof Se)return r.privateDoNotAccessOrElseWrappedScript;var t="";throw new Error(t)}S.unwrapScript=ri});var It=u(we=>{"use strict";Object.defineProperty(we,"__esModule",{value:!0});we.assertIsTemplateObject=void 0;function ii(r,e,t){if(!Array.isArray(r)||!Array.isArray(r.raw)||!e&&r.length!==1)throw new TypeError(t)}we.assertIsTemplateObject=ii});var Vt=u(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.objectUrlFromScript=C.replaceFragment=C.appendParams=C.trustedResourceUrl=void 0;y();var F=T(),ni=ge(),Go=It();function oi(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(e.length===0)return(0,F.createResourceUrl)(r[0]);for(var i=r[0].toLowerCase(),n=[r[0]],o=0;o<e.length;o++)n.push(encodeURIComponent(e[o])),n.push(r[o+1]);return(0,F.createResourceUrl)(n.join(""))}C.trustedResourceUrl=oi;function si(r,e){var t=(0,F.unwrapResourceUrl)(r).toString();if(/#/.test(t)){var i="";throw new Error(i)}var n=/\?/.test(t)?"&":"?";return e.forEach(function(o,s){for(var l=o instanceof Array?o:[o],a=0;a<l.length;a++){var c=l[a];c!=null&&(t+=n+encodeURIComponent(s)+"="+encodeURIComponent(String(c)),n="&")}}),(0,F.createResourceUrl)(t)}C.appendParams=si;var ai=/[^#]*/;function li(r,e){var t=(0,F.unwrapResourceUrl)(r).toString();return(0,F.createResourceUrl)(ai.exec(t)[0]+"#"+e)}C.replaceFragment=li;function ui(r){var e=(0,ni.unwrapScript)(r).toString(),t=new Blob([e],{type:"text/javascript"});return(0,F.createResourceUrl)(URL.createObjectURL(t))}C.objectUrlFromScript=ui});var Gt=u(O=>{"use strict";var ci=O&&O.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(O,"__esModule",{value:!0});O.unwrapAttributePrefix=O.createAttributePrefix=O.SafeAttributePrefix=void 0;y();var Wt=W(),Ft=function(){function r(){}return r}();O.SafeAttributePrefix=Ft;var Bt=function(r){ci(e,r);function e(t,i){var n=r.call(this)||this;return(0,Wt.ensureTokenIsValid)(i),n.privateDoNotAccessOrElseWrappedAttrPrefix=t,n}return e.prototype.toString=function(){return this.privateDoNotAccessOrElseWrappedAttrPrefix},e}(Ft);function pi(r){return new Bt(r,Wt.secretToken)}O.createAttributePrefix=pi;function di(r){if(r instanceof Bt)return r.privateDoNotAccessOrElseWrappedAttrPrefix;var e="";throw new Error(e)}O.unwrapAttributePrefix=di});var K=u(g=>{"use strict";Object.defineProperty(g,"__esModule",{value:!0});g.unwrapHtml=g.isHtml=g.EMPTY_HTML=g.createHtml=g.SafeHtml=void 0;y();var Yt=W(),Ae=me(),Ee=function(){function r(e,t){(0,Yt.ensureTokenIsValid)(t),this.privateDoNotAccessOrElseWrappedHtml=e}return r.prototype.toString=function(){return this.privateDoNotAccessOrElseWrappedHtml.toString()},r}();function Jt(r,e){return e??new Ee(r,Yt.secretToken)}var at=typeof window!==void 0?window.TrustedHTML:void 0;g.SafeHtml=at??Ee;function hi(r){var e,t=r;return Jt(t,(e=(0,Ae.getTrustedTypesPolicy)())===null||e===void 0?void 0:e.createHTML(t))}g.createHtml=hi;g.EMPTY_HTML=function(){var r;return Jt("",(r=(0,Ae.getTrustedTypes)())===null||r===void 0?void 0:r.emptyHTML)}();function fi(r){var e;return((e=(0,Ae.getTrustedTypes)())===null||e===void 0?void 0:e.isHTML(r))||r instanceof Ee}g.isHtml=fi;function vi(r){var e;if(!((e=(0,Ae.getTrustedTypes)())===null||e===void 0)&&e.isHTML(r))return r;if(r instanceof Ee)return r.privateDoNotAccessOrElseWrappedHtml;var t="";throw new Error(t)}g.unwrapHtml=vi});var Zt=u(w=>{"use strict";var mi=w&&w.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(w,"__esModule",{value:!0});w.unwrapStyle=w.isStyle=w.createStyle=w.SafeStyle=void 0;y();var Kt=W(),Xt=function(){function r(){}return r}();w.SafeStyle=Xt;var lt=function(r){mi(e,r);function e(t,i){var n=r.call(this)||this;return(0,Kt.ensureTokenIsValid)(i),n.privateDoNotAccessOrElseWrappedStyle=t,n}return e.prototype.toString=function(){return this.privateDoNotAccessOrElseWrappedStyle},e}(Xt);function yi(r){return new lt(r,Kt.secretToken)}w.createStyle=yi;function _i(r){return r instanceof lt}w.isStyle=_i;function Si(r){if(r instanceof lt)return r.privateDoNotAccessOrElseWrappedStyle;var e="";throw new Error(e)}w.unwrapStyle=Si});var tr=u(A=>{"use strict";var gi=A&&A.__extends||function(){var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,n){i.__proto__=n}||function(i,n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])},r(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");r(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}();Object.defineProperty(A,"__esModule",{value:!0});A.unwrapStyleSheet=A.isStyleSheet=A.createStyleSheet=A.SafeStyleSheet=void 0;y();var Qt=W(),er=function(){function r(){}return r}();A.SafeStyleSheet=er;var ut=function(r){gi(e,r);function e(t,i){var n=r.call(this)||this;return(0,Qt.ensureTokenIsValid)(i),n.privateDoNotAccessOrElseWrappedStyleSheet=t,n}return e.prototype.toString=function(){return this.privateDoNotAccessOrElseWrappedStyleSheet},e}(er);function wi(r){return new ut(r,Qt.secretToken)}A.createStyleSheet=wi;function Ai(r){return r instanceof ut}A.isStyleSheet=Ai;function Ei(r){if(r instanceof ut)return r.privateDoNotAccessOrElseWrappedStyleSheet;var e="";throw new Error(e)}A.unwrapStyleSheet=Ei});var P=u(U=>{"use strict";Object.defineProperty(U,"__esModule",{value:!0});U.restrictivelySanitizeUrl=U.unwrapUrlOrSanitize=U.sanitizeJavascriptUrl=U.extractScheme=void 0;y();function ct(r){var e;try{e=new URL(r)}catch{return"https:"}return e.protocol}U.extractScheme=ct;var bi=["data:","http:","https:","mailto:","ftp:"];function rr(r){var e=ct(r);if(e!=="javascript:")return r}U.sanitizeJavascriptUrl=rr;function xi(r){return rr(r)}U.unwrapUrlOrSanitize=xi;function $i(r){var e=ct(r);return e!==void 0&&bi.indexOf(e.toLowerCase())!==-1?r:"about:invalid#zClosurez"}U.restrictivelySanitizeUrl=$i});var ir=u(be=>{"use strict";Object.defineProperty(be,"__esModule",{value:!0});be.setHref=void 0;var Ti=P();function Ci(r,e){var t=(0,Ti.unwrapUrlOrSanitize)(e);t!==void 0&&(r.href=t)}be.setHref=Ci});var nr=u(xe=>{"use strict";Object.defineProperty(xe,"__esModule",{value:!0});xe.setHref=void 0;var Oi=P();function Ui(r,e){var t=(0,Oi.unwrapUrlOrSanitize)(e);t!==void 0&&(r.href=t)}xe.setHref=Ui});var or=u($e=>{"use strict";Object.defineProperty($e,"__esModule",{value:!0});$e.setHref=void 0;var Pi=T();function Hi(r,e){r.href=(0,Pi.unwrapResourceUrl)(e)}$e.setHref=Hi});var sr=u(Te=>{"use strict";Object.defineProperty(Te,"__esModule",{value:!0});Te.setFormaction=void 0;var Ri=P();function Ni(r,e){var t=(0,Ri.unwrapUrlOrSanitize)(e);t!==void 0&&(r.formAction=t)}Te.setFormaction=Ni});var lr=u(v=>{"use strict";var Mi=v&&v.__read||function(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),n,o=[],s;try{for(;(e===void 0||e-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(l){s={error:l}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(s)throw s.error}}return o},ji=v&&v.__spreadArray||function(r,e,t){if(t||arguments.length===2)for(var i=0,n=e.length,o;i<n;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return r.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(v,"__esModule",{value:!0});v.setPrefixedAttribute=v.buildPrefixedAttributeSetter=v.insertAdjacentHtml=v.setCssText=v.setOuterHtml=v.setInnerHtml=void 0;y();var Li=Gt(),pt=K(),ki=Zt();function qi(r,e){Wi(r)&&dt(r),r.innerHTML=(0,pt.unwrapHtml)(e)}v.setInnerHtml=qi;function zi(r,e){var t=r.parentElement;t!==null&&dt(t),r.outerHTML=(0,pt.unwrapHtml)(e)}v.setOuterHtml=zi;function Di(r,e){r.style.cssText=(0,ki.unwrapStyle)(e)}v.setCssText=Di;function Ii(r,e,t){var i=e==="beforebegin"||e==="afterend"?r.parentElement:r;i!==null&&dt(i),r.insertAdjacentHTML(e,(0,pt.unwrapHtml)(t))}v.insertAdjacentHtml=Ii;function Vi(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];var i=ji([r],Mi(e),!1);return function(n,o,s){ar(i,n,o,s)}}v.buildPrefixedAttributeSetter=Vi;function ar(r,e,t,i){if(r.length===0){var n="";throw new Error(n)}var o=r.map(function(l){return(0,Li.unwrapAttributePrefix)(l)}),s=t.toLowerCase();if(o.every(function(l){return s.indexOf(l)!==0}))throw new Error('Attribute "'.concat(t,'" does not match any of the allowed prefixes.'));e.setAttribute(t,i)}v.setPrefixedAttribute=ar;function dt(r){var e="";if(r.tagName.toLowerCase()==="script")throw new Error(e);if(r.tagName.toLowerCase()==="style")throw new Error(e)}function Wi(r){return r.tagName!==void 0}});var ur=u(Ce=>{"use strict";Object.defineProperty(Ce,"__esModule",{value:!0});Ce.setSrc=void 0;var Fi=T();function Bi(r,e){r.src=(0,Fi.unwrapResourceUrl)(e)}Ce.setSrc=Bi});var cr=u(Oe=>{"use strict";Object.defineProperty(Oe,"__esModule",{value:!0});Oe.setAction=void 0;var Gi=P();function Yi(r,e){var t=(0,Gi.unwrapUrlOrSanitize)(e);t!==void 0&&(r.action=t)}Oe.setAction=Yi});var pr=u(Z=>{"use strict";Object.defineProperty(Z,"__esModule",{value:!0});Z.setSrcdoc=Z.setSrc=void 0;var Ji=K(),Ki=T();function Xi(r,e){r.src=(0,Ki.unwrapResourceUrl)(e).toString()}Z.setSrc=Xi;function Zi(r,e){r.srcdoc=(0,Ji.unwrapHtml)(e)}Z.setSrcdoc=Zi});var dr=u(Ue=>{"use strict";Object.defineProperty(Ue,"__esModule",{value:!0});Ue.setFormaction=void 0;var Qi=P();function en(r,e){var t=(0,Qi.unwrapUrlOrSanitize)(e);t!==void 0&&(r.formAction=t)}Ue.setFormaction=en});var fr=u(Pe=>{"use strict";Object.defineProperty(Pe,"__esModule",{value:!0});Pe.setHrefAndRel=void 0;var tn=P(),hr=T(),rn=["alternate","author","bookmark","canonical","cite","help","icon","license","next","prefetch","dns-prefetch","prerender","preconnect","preload","prev","search","subresource"];function nn(r,e,t){if((0,hr.isResourceUrl)(e))r.href=(0,hr.unwrapResourceUrl)(e).toString();else{if(rn.indexOf(t)===-1)throw new Error('TrustedResourceUrl href attribute required with rel="'.concat(t,'"'));var i=(0,tn.unwrapUrlOrSanitize)(e);if(i===void 0)return;r.href=i}r.rel=t}Pe.setHrefAndRel=nn});var vr=u(He=>{"use strict";Object.defineProperty(He,"__esModule",{value:!0});He.setData=void 0;var on=T();function sn(r,e){r.data=(0,on.unwrapResourceUrl)(e)}He.setData=sn});var yr=u(Q=>{"use strict";Object.defineProperty(Q,"__esModule",{value:!0});Q.setSrc=Q.setTextContent=void 0;var an=T(),ln=ge();function un(r){var e,t=r.document,i=(e=t.querySelector)===null||e===void 0?void 0:e.call(t,"script[nonce]");return i&&(i.nonce||i.getAttribute("nonce"))||""}function mr(r){var e=r.ownerDocument&&r.ownerDocument.defaultView,t=un(e||window);t&&r.setAttribute("nonce",t)}function cn(r,e){r.textContent=(0,ln.unwrapScript)(e),mr(r)}Q.setTextContent=cn;function pn(r,e){r.src=(0,an.unwrapResourceUrl)(e),mr(r)}Q.setSrc=pn});var _r=u(Re=>{"use strict";Object.defineProperty(Re,"__esModule",{value:!0});Re.setTextContent=void 0;var dn=tr();function hn(r,e){r.textContent=(0,dn.unwrapStyleSheet)(e)}Re.setTextContent=hn});var Sr=u(Ne=>{"use strict";Object.defineProperty(Ne,"__esModule",{value:!0});Ne.setHref=void 0;y();var fn=P();function vn(r,e){var t=(0,fn.extractScheme)(e);if(t==="javascript:"||t==="data:"){if(!1)var i;return}r.setAttribute("href",e)}Ne.setHref=vn});var gr=u(L=>{"use strict";Object.defineProperty(L,"__esModule",{value:!0});L.execCommandInsertHtml=L.execCommand=L.write=void 0;var ht=K();function mn(r,e){r.write((0,ht.unwrapHtml)(e))}L.write=mn;function yn(r,e,t){var i=String(e),n=t;return i.toLowerCase()==="inserthtml"&&(n=(0,ht.unwrapHtml)(t)),r.execCommand(i,!1,n)}L.execCommand=yn;function _n(r,e){return r.execCommand("insertHTML",!1,(0,ht.unwrapHtml)(e))}L.execCommandInsertHtml=_n});var Ar=u(k=>{"use strict";Object.defineProperty(k,"__esModule",{value:!0});k.parseFromString=k.parseXml=k.parseHtml=void 0;y();var wr=K();function Sn(r,e){return ft(r,e,"text/html")}k.parseHtml=Sn;function gn(r,e){for(var t=ft(r,(0,wr.createHtml)(e),"text/xml"),i=document.createNodeIterator(t,NodeFilter.SHOW_ALL,null,!1),n;n=i.nextNode();)if(n instanceof HTMLElement||n instanceof SVGElement){var o="unsafe XML";throw new Error(o)}return t}k.parseXml=gn;function ft(r,e,t){return r.parseFromString((0,wr.unwrapHtml)(e),t)}k.parseFromString=ft});var Er=u(Me=>{"use strict";Object.defineProperty(Me,"__esModule",{value:!0});Me.globalEval=void 0;var wn=ge();function An(r,e){var t=(0,wn.unwrapScript)(e),i=r.eval(t);return i===t&&(i=r.eval(t.toString())),i}Me.globalEval=An});var br=u(q=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.assign=q.replace=q.setHref=void 0;var vt=P();function En(r,e){var t=(0,vt.unwrapUrlOrSanitize)(e);t!==void 0&&(r.href=t)}q.setHref=En;function bn(r,e){var t=(0,vt.unwrapUrlOrSanitize)(e);t!==void 0&&r.replace(t)}q.replace=bn;function xn(r,e){var t=(0,vt.unwrapUrlOrSanitize)(e);t!==void 0&&r.assign(t)}q.assign=xn});var xr=u(je=>{"use strict";Object.defineProperty(je,"__esModule",{value:!0});je.createContextualFragment=void 0;var $n=K();function Tn(r,e){return r.createContextualFragment((0,$n.unwrapHtml)(e))}je.createContextualFragment=Tn});var $r=u(Le=>{"use strict";Object.defineProperty(Le,"__esModule",{value:!0});Le.register=void 0;var Cn=T();function On(r,e,t){return r.register((0,Cn.unwrapResourceUrl)(e),t)}Le.register=On});var Tr=u(ke=>{"use strict";Object.defineProperty(ke,"__esModule",{value:!0});ke.objectUrlFromSafeSource=void 0;function Un(r){var e=r.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);return e?.length===2&&(Pn(e[1])||Hn(e[1])||Rn(e[1]))}function Pn(r){return/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon|heic|heif)$/i.test(r)}function Hn(r){return/^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(r)}function Rn(r){return/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(r)}function Nn(r){if(typeof MediaSource<"u"&&r instanceof MediaSource)return URL.createObjectURL(r);var e=r;if(!Un(e.type)){var t="";throw new Error(t)}return URL.createObjectURL(e)}ke.objectUrlFromSafeSource=Nn});var Cr=u(qe=>{"use strict";Object.defineProperty(qe,"__esModule",{value:!0});qe.open=void 0;var Mn=P();function jn(r,e,t,i){var n=(0,Mn.unwrapUrlOrSanitize)(e);return n!==void 0?r.open(n,t,i):null}qe.open=jn});var Or=u(E=>{"use strict";var Ln=E&&E.__read||function(r,e){var t=typeof Symbol=="function"&&r[Symbol.iterator];if(!t)return r;var i=t.call(r),n,o=[],s;try{for(;(e===void 0||e-- >0)&&!(n=i.next()).done;)o.push(n.value)}catch(l){s={error:l}}finally{try{n&&!n.done&&(t=i.return)&&t.call(i)}finally{if(s)throw s.error}}return o},kn=E&&E.__spreadArray||function(r,e,t){if(t||arguments.length===2)for(var i=0,n=e.length,o;i<n;i++)(o||!(i in e))&&(o||(o=Array.prototype.slice.call(e,0,i)),o[i]=e[i]);return r.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(E,"__esModule",{value:!0});E.importScripts=E.createShared=E.create=void 0;var mt=T();function qn(r,e){return new Worker((0,mt.unwrapResourceUrl)(r),e)}E.create=qn;function zn(r,e){return new SharedWorker((0,mt.unwrapResourceUrl)(r),e)}E.createShared=zn;function Dn(r){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];r.importScripts.apply(r,kn([],Ln(e.map(function(i){return(0,mt.unwrapResourceUrl)(i)})),!1))}E.importScripts=Dn});var ce=window,pe=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ze=Symbol(),_t=new WeakMap,ee=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ze)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pe&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=_t.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&_t.set(t,e))}return e}toString(){return this.cssText}},St=r=>new ee(typeof r=="string"?r:r+"",void 0,ze),De=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((i,n,o)=>i+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[o+1],r[0]);return new ee(t,r,ze)},Ie=(r,e)=>{pe?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let i=document.createElement("style"),n=ce.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=t.cssText,r.appendChild(i)})},de=pe?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return St(t)})(r):r;var Ve,he=window,gt=he.trustedTypes,Dr=gt?gt.emptyScript:"",wt=he.reactiveElementPolyfillSupport,Fe={toAttribute(r,e){switch(e){case Boolean:r=r?Dr:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},At=(r,e)=>e!==r&&(e==e||r==r),We={attribute:!0,type:String,converter:Fe,reflect:!1,hasChanged:At},Be="finalized",H=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,i)=>{let n=this._$Ep(i,t);n!==void 0&&(this._$Ev.set(n,i),e.push(n))}),e}static createProperty(e,t=We){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);n!==void 0&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){let o=this[e];this[t]=n,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||We}static finalize(){if(this.hasOwnProperty(Be))return!1;this[Be]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let n of i)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let n of i)t.unshift(de(n))}else e!==void 0&&t.push(de(e));return t}static _$Ep(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ie(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=We){var n;let o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){let s=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:Fe).toAttribute(t,i.type);this._$El=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var i;let n=this.constructor,o=n._$Ev.get(e);if(o!==void 0&&this._$El!==o){let s=n.getPropertyOptions(o),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((i=s.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?s.converter:Fe;this._$El=o,this[o]=l.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||At)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,o)=>this[o]=n),this._$Ei=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(n=>{var o;return(o=n.hostUpdate)===null||o===void 0?void 0:o.call(n)}),this.update(i)):this._$Ek()}catch(n){throw t=!1,this._$Ek(),n}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};H[Be]=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},wt?.({ReactiveElement:H}),((Ve=he.reactiveElementVersions)!==null&&Ve!==void 0?Ve:he.reactiveElementVersions=[]).push("1.6.3");var Ge,fe=window,B=fe.trustedTypes,Et=B?B.createPolicy("lit-html",{createHTML:r=>r}):void 0,Je="$lit$",N=`lit$${(Math.random()+"").slice(9)}$`,Ut="?"+N,Ir=`<${Ut}>`,I=document,re=()=>I.createComment(""),ie=r=>r===null||typeof r!="object"&&typeof r!="function",Pt=Array.isArray,Vr=r=>Pt(r)||typeof r?.[Symbol.iterator]=="function",Ye=`[ 	
\f\r]`,te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,bt=/-->/g,xt=/>/g,z=RegExp(`>|${Ye}(?:([^\\s"'>=/]+)(${Ye}*=${Ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,Tt=/"/g,Ht=/^(?:script|style|textarea|title)$/i,Rt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),Nt=Rt(1),Kn=Rt(2),V=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ct=new WeakMap,D=I.createTreeWalker(I,129,null,!1);function Mt(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Et!==void 0?Et.createHTML(e):e}var Wr=(r,e)=>{let t=r.length-1,i=[],n,o=e===2?"<svg>":"",s=te;for(let l=0;l<t;l++){let a=r[l],c,d,h=-1,m=0;for(;m<a.length&&(s.lastIndex=m,d=s.exec(a),d!==null);)m=s.lastIndex,s===te?d[1]==="!--"?s=bt:d[1]!==void 0?s=xt:d[2]!==void 0?(Ht.test(d[2])&&(n=RegExp("</"+d[2],"g")),s=z):d[3]!==void 0&&(s=z):s===z?d[0]===">"?(s=n??te,h=-1):d[1]===void 0?h=-2:(h=s.lastIndex-d[2].length,c=d[1],s=d[3]===void 0?z:d[3]==='"'?Tt:$t):s===Tt||s===$t?s=z:s===bt||s===xt?s=te:(s=z,n=void 0);let x=s===z&&r[l+1].startsWith("/>")?" ":"";o+=s===te?a+Ir:h>=0?(i.push(c),a.slice(0,h)+Je+a.slice(h)+N+x):a+N+(h===-2?(i.push(void 0),l):x)}return[Mt(r,o+(r[t]||"<?>")+(e===2?"</svg>":"")),i]},ne=class r{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,s=0,l=e.length-1,a=this.parts,[c,d]=Wr(e,t);if(this.el=r.createElement(c,i),D.currentNode=this.el.content,t===2){let h=this.el.content,m=h.firstChild;m.remove(),h.append(...m.childNodes)}for(;(n=D.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){let h=[];for(let m of n.getAttributeNames())if(m.endsWith(Je)||m.startsWith(N)){let x=d[s++];if(h.push(m),x!==void 0){let Nr=n.getAttribute(x.toLowerCase()+Je).split(N),ue=/([.?@])?(.*)/.exec(x);a.push({type:1,index:o,name:ue[2],strings:Nr,ctor:ue[1]==="."?Xe:ue[1]==="?"?Ze:ue[1]==="@"?Qe:Y})}else a.push({type:6,index:o})}for(let m of h)n.removeAttribute(m)}if(Ht.test(n.tagName)){let h=n.textContent.split(N),m=h.length-1;if(m>0){n.textContent=B?B.emptyScript:"";for(let x=0;x<m;x++)n.append(h[x],re()),D.nextNode(),a.push({type:2,index:++o});n.append(h[m],re())}}}else if(n.nodeType===8)if(n.data===Ut)a.push({type:2,index:o});else{let h=-1;for(;(h=n.data.indexOf(N,h+1))!==-1;)a.push({type:7,index:o}),h+=N.length-1}o++}}static createElement(e,t){let i=I.createElement("template");return i.innerHTML=e,i}};function G(r,e,t=r,i){var n,o,s,l;if(e===V)return e;let a=i!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[i]:t._$Cl,c=ie(e)?void 0:e._$litDirective$;return a?.constructor!==c&&((o=a?._$AO)===null||o===void 0||o.call(a,!1),c===void 0?a=void 0:(a=new c(r),a._$AT(r,t,i)),i!==void 0?((s=(l=t)._$Co)!==null&&s!==void 0?s:l._$Co=[])[i]=a:t._$Cl=a),a!==void 0&&(e=G(r,a._$AS(r,e.values),a,i)),e}var Ke=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:n}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:I).importNode(i,!0);D.currentNode=o;let s=D.nextNode(),l=0,a=0,c=n[0];for(;c!==void 0;){if(l===c.index){let d;c.type===2?d=new oe(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new et(s,this,e)),this._$AV.push(d),c=n[++a]}l!==c?.index&&(s=D.nextNode(),l++)}return D.currentNode=I,o}v(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},oe=class r{constructor(e,t,i,n){var o;this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=(o=n?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),ie(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Vr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==f&&ie(this._$AH)?this._$AA.nextSibling.data=e:this.$(I.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ne.createElement(Mt(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(i);else{let s=new Ke(o,this),l=s.u(this.options);s.v(i),this.$(l),this._$AH=s}}_$AC(e){let t=Ct.get(e.strings);return t===void 0&&Ct.set(e.strings,t=new ne(e)),t}T(e){Pt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,n=0;for(let o of e)n===t.length?t.push(i=new r(this.k(re()),this.k(re()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Y=class{constructor(e,t,i,n,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){let o=this.strings,s=!1;if(o===void 0)e=G(this,e,t,0),s=!ie(e)||e!==this._$AH&&e!==V,s&&(this._$AH=e);else{let l=e,a,c;for(e=o[0],a=0;a<o.length-1;a++)c=G(this,l[i+a],t,a),c===V&&(c=this._$AH[a]),s||(s=!ie(c)||c!==this._$AH[a]),c===f?e=f:e!==f&&(e+=(c??"")+o[a+1]),this._$AH[a]=c}s&&!n&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Xe=class extends Y{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}},Fr=B?B.emptyScript:"",Ze=class extends Y{constructor(){super(...arguments),this.type=4}j(e){e&&e!==f?this.element.setAttribute(this.name,Fr):this.element.removeAttribute(this.name)}},Qe=class extends Y{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=G(this,e,t,0))!==null&&i!==void 0?i:f)===V)return;let n=this._$AH,o=e===f&&n!==f||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==f&&(n===f||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},et=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}};var Ot=fe.litHtmlPolyfillSupport;Ot?.(ne,oe),((Ge=fe.litHtmlVersions)!==null&&Ge!==void 0?Ge:fe.litHtmlVersions=[]).push("2.8.0");var jt=(r,e,t)=>{var i,n;let o=(i=t?.renderBefore)!==null&&i!==void 0?i:e,s=o._$litPart$;if(s===void 0){let l=(n=t?.renderBefore)!==null&&n!==void 0?n:null;o._$litPart$=s=new oe(e.insertBefore(re(),l),l,void 0,t??{})}return s._$AI(r),s};var tt,rt;var M=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=jt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return V}};M.finalized=!0,M._$litElement$=!0,(tt=globalThis.litElementHydrateSupport)===null||tt===void 0||tt.call(globalThis,{LitElement:M});var Lt=globalThis.litElementPolyfillSupport;Lt?.({LitElement:M});((rt=globalThis.litElementVersions)!==null&&rt!==void 0?rt:globalThis.litElementVersions=[]).push("3.3.3");var Br=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},Gr=(r,e,t)=>{e.constructor.createProperty(t,r)};function b(r){return(e,t)=>t!==void 0?Gr(r,e,t):Br(r,e)}var it,bo=((it=window.HTMLSlotElement)===null||it===void 0?void 0:it.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var X=p(Vt(),1);var xs=p(ir(),1),$s=p(nr(),1),Ts=p(or(),1),Cs=p(sr(),1),Os=p(lr(),1),Us=p(ur(),1),Ps=p(cr(),1),Hs=p(pr(),1),Rs=p(dr(),1),Ns=p(fr(),1),Ms=p(vr(),1),Ur=p(yr(),1),js=p(_r(),1),Ls=p(Sr(),1),ks=p(gr(),1),qs=p(Ar(),1),zs=p(Er(),1),Ds=p(br(),1),Is=p(xr(),1),Vs=p($r(),1),Ws=p(Tr(),1),Fs=p(Cr(),1),Bs=p(Or(),1);var In=new Promise((r,e)=>{if(typeof google<"u"&&google.charts&&typeof google.charts.load=="function")r();else{let t=document.querySelector('script[src="https://www.gstatic.com/charts/loader.js"]');t||(t=document.createElement("script"),Ur.setSrc(t,X.trustedResourceUrl`https://www.gstatic.com/charts/loader.js`),document.head.appendChild(t)),t.addEventListener("load",r),t.addEventListener("error",e)}});async function Pr(r={}){await In;let{version:e="current",packages:t=["corechart"],language:i=document.documentElement.lang||"en",mapsApiKey:n}=r;return google.charts.load(e,{packages:t,language:i,mapsApiKey:n})}async function le(r){if(await Pr(),r==null)return new google.visualization.DataTable;if(r.getNumberOfRows)return r;if(r.cols)return new google.visualization.DataTable(r);if(r.length>0)return google.visualization.arrayToDataTable(r);throw r.length===0?new Error("Data was empty."):new Error("Data format was not recognized.")}async function Hr(r){return await Pr(),new google.visualization.ChartWrapper({container:r})}var R=function(r,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,i);else for(var l=r.length-1;l>=0;l--)(s=r[l])&&(o=(n<3?s(o):n>3?s(e,t,o):s(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o},Rr=["ready","select"],Vn={area:"AreaChart",bar:"BarChart","md-bar":"google.charts.Bar",bubble:"BubbleChart",calendar:"Calendar",candlestick:"CandlestickChart",column:"ColumnChart",combo:"ComboChart",gantt:"Gantt",gauge:"Gauge",geo:"GeoChart",histogram:"Histogram",line:"LineChart","md-line":"google.charts.Line",org:"OrgChart",pie:"PieChart",sankey:"Sankey",scatter:"ScatterChart","md-scatter":"google.charts.Scatter","stepped-area":"SteppedAreaChart",table:"Table",timeline:"Timeline",treemap:"TreeMap",wordtree:"WordTree"},_=class extends M{constructor(){super(...arguments),this.type="column",this.events=[],this.options=void 0,this.cols=void 0,this.rows=void 0,this.data=void 0,this.view=void 0,this.selection=void 0,this.drawn=!1,this._data=void 0,this.chartWrapper=null,this.redrawTimeoutId=void 0}render(){return Nt`
      <div id="styles"></div>
      <div id="chartdiv"></div>
    `}firstUpdated(){Hr(this.shadowRoot.getElementById("chartdiv")).then(e=>{this.chartWrapper=e,this.typeChanged(),google.visualization.events.addListener(e,"ready",()=>{this.drawn=!0,this.selection&&this.selectionChanged()}),google.visualization.events.addListener(e,"select",()=>{this.selection=e.getChart().getSelection()}),this.propagateEvents(Rr,e)})}updated(e){e.has("type")&&this.typeChanged(),(e.has("rows")||e.has("cols"))&&this.rowsOrColumnsChanged(),e.has("data")&&this.dataChanged(),e.has("view")&&this.viewChanged(),(e.has("_data")||e.has("options"))&&this.redraw(),e.has("selection")&&this.selectionChanged()}typeChanged(){if(this.chartWrapper==null)return;this.chartWrapper.setChartType(Vn[this.type]||this.type);let e=this.chartWrapper.getChart();google.visualization.events.addOneTimeListener(this.chartWrapper,"ready",()=>{let t=this.chartWrapper.getChart();t!==e&&this.propagateEvents(this.events.filter(n=>!Rr.includes(n)),t);let i=this.shadowRoot.getElementById("styles");i.children.length||this.localizeGlobalStylesheets(i)}),this.redraw()}propagateEvents(e,t){for(let i of e)google.visualization.events.addListener(t,i,n=>{this.dispatchEvent(new CustomEvent(`google-chart-${i}`,{bubbles:!0,composed:!0,detail:{chart:this.chartWrapper.getChart(),data:n}}))})}selectionChanged(){if(this.chartWrapper==null)return;let e=this.chartWrapper.getChart();if(e!=null&&e.setSelection){if(this.type==="timeline"){let t=JSON.stringify(e.getSelection());if(JSON.stringify(this.selection)===t)return}e.setSelection(this.selection)}}redraw(){this.chartWrapper==null||this._data==null||(this.chartWrapper.setDataTable(this._data),this.chartWrapper.setOptions(this.options||{}),this.drawn=!1,this.redrawTimeoutId!==void 0&&clearTimeout(this.redrawTimeoutId),this.redrawTimeoutId=window.setTimeout(()=>{this.chartWrapper.draw()},5))}get imageURI(){if(this.chartWrapper==null)return null;let e=this.chartWrapper.getChart();return e&&e.getImageURI()}viewChanged(){this.view&&(this._data=this.view)}async rowsOrColumnsChanged(){let{rows:e,cols:t}=this;if(!(!e||!t))try{let i=await le({cols:t});i.addRows(e),this._data=i}catch(i){this.shadowRoot.getElementById("chartdiv").textContent=String(i)}}dataChanged(){let e=this.data,t;if(!e)return;let i=!1;try{e=JSON.parse(e)}catch{i=typeof e=="string"||e instanceof String}i?t=fetch(e).then(n=>n.json()):t=Promise.resolve(e),t.then(le).then(n=>{this._data=n})}localizeGlobalStylesheets(e){let t=Array.from(document.head.querySelectorAll('link[rel="stylesheet"][type="text/css"][id^="load-css-"]'));for(let i of t){let n=document.createElement("link");n.setAttribute("rel","stylesheet"),n.setAttribute("type","text/css"),n.setAttribute("href",i.getAttribute("href")),e.appendChild(n)}}};_.styles=De`
    :host {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      margin: 0;
      padding: 0;
      width: 400px;
      height: 300px;
    }

    :host([hidden]) {
      display: none;
    }

    :host([type="gauge"]) {
      width: 300px;
      height: 300px;
    }

    #chartdiv {
      width: 100%;
    }

    /* Workaround for slow initial ready event for tables. */
    .google-visualization-table-loadtest {
      padding-left: 6px;
    }
  `;R([b({type:String,reflect:!0})],_.prototype,"type",void 0);R([b({type:Array})],_.prototype,"events",void 0);R([b({type:Object,hasChanged:()=>!0})],_.prototype,"options",void 0);R([b({type:Array})],_.prototype,"cols",void 0);R([b({type:Array})],_.prototype,"rows",void 0);R([b({type:String})],_.prototype,"data",void 0);R([b({type:Object})],_.prototype,"view",void 0);R([b({type:Array})],_.prototype,"selection",void 0);R([b({type:Object})],_.prototype,"_data",void 0);customElements.define("google-chart",_);function Wn({type:r,options:e,cachedData:t}){return{chart:null,init:function(){let i=this.initChart();this.$wire.$on("updateChart",async({data:n})=>{i.data=n})},initChart:function(i=null){return this.chart=this.$refs.googleChart,this.chart.type=r,this.chart.options=e??{},le(i??t).then(n=>{this.chart.data=n}),this.chart}}}export{Wn as default};
/*! Bundled license information:

safevalues/environment/dev.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/secrets.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/trusted_types.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/resource_url_impl.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/script_impl.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/string_literal.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/builders/resource_url_builders.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/attribute_impl.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/html_impl.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/style_impl.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/internals/style_sheet_impl.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/builders/url_sanitizer.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/anchor.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/area.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/base.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/button.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/element.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/embed.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/form.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/iframe.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/input.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/link.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/object.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/script.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/style.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/elements/svg_use.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/document.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/dom_parser.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/global.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/location.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/range.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/service_worker_container.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/url.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/window.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/globals/worker.js:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

safevalues/index.mjs:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

safevalues/dom/index.mjs:
  (**
   * @license
   * SPDX-License-Identifier: Apache-2.0
   *)

@google-web-components/google-chart/loader.js:
  (**
   * @license
   * Copyright 2014-2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@google-web-components/google-chart/google-chart.js:
  (**
   * @license
   * Copyright 2014-2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
