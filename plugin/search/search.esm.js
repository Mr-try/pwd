var e,t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=function(e){try{return!!e()}catch(e){return!0}},o=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),i=function(e){return e&&e.Math==Math&&e},c=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n&&n)||function(){return this}()||Function("return this")(),a=r,u=/#|\.prototype\./,l=function(e,t){var n=s[f(e)];return n==d||n!=p&&("function"==typeof t?a(t):!!t)},f=l.normalize=function(e){return String(e).replace(u,".").toLowerCase()},s=l.data={},p=l.NATIVE="N",d=l.POLYFILL="P",g=l,v=function(e){return"object"==typeof e?null!==e:"function"==typeof e},h=v,y=function(e){if(!h(e))throw TypeError(String(e)+" is not an object");return e},b=v,x=y,m=function(e){if(!b(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e},w=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,r){return x(n),m(r),t?e.call(n,r):n.__proto__=r,n}}():void 0),S=v,O=w,E={},j=v,R=c.document,T=j(R)&&j(R.createElement),I=function(e){return T?R.createElement(e):{}},_=I,A=!o&&!r((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),P=c,C=function(e){return"function"==typeof e?e:void 0},k=function(e,t){return arguments.length<2?C(P[e]):P[e]&&P[e][t]},N=c,$=k("navigator","userAgent")||"",M=N.process,L=N.Deno,D=M&&M.versions||L&&L.version,F=D&&D.v8;F?t=(e=F.split("."))[0]<4?1:e[0]+e[1]:$&&(!(e=$.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=$.match(/Chrome\/(\d+)/))&&(t=e[1]);var z=t&&+t,U=r,W=!!Object.getOwnPropertySymbols&&!U((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&z&&z<41})),K=W&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,B=k,V=K?function(e){return"symbol"==typeof e}:function(e){var t=B("Symbol");return"function"==typeof t&&Object(e)instanceof t},Y=v,q={exports:{}},G=c,H=function(e,t){try{Object.defineProperty(G,e,{value:t,configurable:!0,writable:!0})}catch(n){G[e]=t}return t},X=H,J=c["__core-js_shared__"]||X("__core-js_shared__",{}),Q=J;(q.exports=function(e,t){return Q[e]||(Q[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.16.4",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var Z=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},ee=Z,te=function(e){return Object(ee(e))},ne=te,re={}.hasOwnProperty,oe=Object.hasOwn||function(e,t){return re.call(ne(e),t)},ie=0,ce=Math.random(),ae=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++ie+ce).toString(36)},ue=c,le=q.exports,fe=oe,se=ae,pe=W,de=K,ge=le("wks"),ve=ue.Symbol,he=de?ve:ve&&ve.withoutSetter||se,ye=function(e){return fe(ge,e)&&(pe||"string"==typeof ge[e])||(pe&&fe(ve,e)?ge[e]=ve[e]:ge[e]=he("Symbol."+e)),ge[e]},be=v,xe=V,me=function(e,t){var n,r;if("string"===t&&"function"==typeof(n=e.toString)&&!Y(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!Y(r=n.call(e)))return r;if("string"!==t&&"function"==typeof(n=e.toString)&&!Y(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},we=ye("toPrimitive"),Se=function(e,t){if(!be(e)||xe(e))return e;var n,r=e[we];if(void 0!==r){if(void 0===t&&(t="default"),n=r.call(e,t),!be(n)||xe(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),me(e,t)},Oe=V,Ee=function(e){var t=Se(e,"string");return Oe(t)?t:String(t)},je=o,Re=A,Te=y,Ie=Ee,_e=Object.defineProperty;E.f=je?_e:function(e,t,n){if(Te(e),t=Ie(t),Te(n),Re)try{return _e(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var Ae=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},Pe=E,Ce=Ae,ke=o?function(e,t,n){return Pe.f(e,t,Ce(1,n))}:function(e,t,n){return e[t]=n,e},Ne={},$e={}.toString,Me=function(e){return $e.call(e).slice(8,-1)},Le=Me,De="".split,Fe=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==Le(e)?De.call(e,""):Object(e)}:Object,ze=Z,Ue=function(e){return Fe(ze(e))},We=Math.ceil,Ke=Math.floor,Be=function(e){return isNaN(e=+e)?0:(e>0?Ke:We)(e)},Ve=Be,Ye=Math.min,qe=function(e){return e>0?Ye(Ve(e),9007199254740991):0},Ge=Be,He=Math.max,Xe=Math.min,Je=Ue,Qe=qe,Ze=function(e,t){var n=Ge(e);return n<0?He(n+t,0):Xe(n,t)},et=function(e){return function(t,n,r){var o,i=Je(t),c=Qe(i.length),a=Ze(r,c);if(e&&n!=n){for(;c>a;)if((o=i[a++])!=o)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},tt={includes:et(!0),indexOf:et(!1)},nt={},rt=oe,ot=Ue,it=tt.indexOf,ct=nt,at=function(e,t){var n,r=ot(e),o=0,i=[];for(n in r)!rt(ct,n)&&rt(r,n)&&i.push(n);for(;t.length>o;)rt(r,n=t[o++])&&(~it(i,n)||i.push(n));return i},ut=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],lt=at,ft=ut.concat("length","prototype");Ne.f=Object.getOwnPropertyNames||function(e){return lt(e,ft)};var st=v,pt=Me,dt=ye("match"),gt=V,vt=function(e){if(gt(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)},ht=y,yt=function(){var e=ht(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},bt={},xt=r,mt=c.RegExp;bt.UNSUPPORTED_Y=xt((function(){var e=mt("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),bt.BROKEN_CARET=xt((function(){var e=mt("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));var wt={exports:{}},St=J,Ot=Function.toString;"function"!=typeof St.inspectSource&&(St.inspectSource=function(e){return Ot.call(e)});var Et,jt,Rt,Tt=St.inspectSource,It=Tt,_t=c.WeakMap,At="function"==typeof _t&&/native code/.test(It(_t)),Pt=q.exports,Ct=ae,kt=Pt("keys"),Nt=function(e){return kt[e]||(kt[e]=Ct(e))},$t=At,Mt=v,Lt=ke,Dt=oe,Ft=J,zt=Nt,Ut=nt,Wt=c.WeakMap;if($t||Ft.state){var Kt=Ft.state||(Ft.state=new Wt),Bt=Kt.get,Vt=Kt.has,Yt=Kt.set;Et=function(e,t){if(Vt.call(Kt,e))throw new TypeError("Object already initialized");return t.facade=e,Yt.call(Kt,e,t),t},jt=function(e){return Bt.call(Kt,e)||{}},Rt=function(e){return Vt.call(Kt,e)}}else{var qt=zt("state");Ut[qt]=!0,Et=function(e,t){if(Dt(e,qt))throw new TypeError("Object already initialized");return t.facade=e,Lt(e,qt,t),t},jt=function(e){return Dt(e,qt)?e[qt]:{}},Rt=function(e){return Dt(e,qt)}}var Gt={set:Et,get:jt,has:Rt,enforce:function(e){return Rt(e)?jt(e):Et(e,{})},getterFor:function(e){return function(t){var n;if(!Mt(t)||(n=jt(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},Ht=c,Xt=ke,Jt=oe,Qt=H,Zt=Tt,en=Gt.get,tn=Gt.enforce,nn=String(String).split("String");(wt.exports=function(e,t,n,r){var o,i=!!r&&!!r.unsafe,c=!!r&&!!r.enumerable,a=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof t||Jt(n,"name")||Xt(n,"name",t),(o=tn(n)).source||(o.source=nn.join("string"==typeof t?t:""))),e!==Ht?(i?!a&&e[t]&&(c=!0):delete e[t],c?e[t]=n:Xt(e,t,n)):c?e[t]=n:Qt(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&en(this).source||Zt(this)}));var rn=k,on=E,cn=o,an=ye("species"),un=r,ln=c.RegExp,fn=un((function(){var e=ln(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)})),sn=r,pn=c.RegExp,dn=sn((function(){var e=pn("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")})),gn=o,vn=c,hn=g,yn=function(e,t,n){var r,o;return O&&"function"==typeof(r=t.constructor)&&r!==n&&S(o=r.prototype)&&o!==n.prototype&&O(e,o),e},bn=ke,xn=E.f,mn=Ne.f,wn=function(e){var t;return st(e)&&(void 0!==(t=e[dt])?!!t:"RegExp"==pt(e))},Sn=vt,On=yt,En=bt,jn=wt.exports,Rn=r,Tn=oe,In=Gt.enforce,_n=function(e){var t=rn(e),n=on.f;cn&&t&&!t[an]&&n(t,an,{configurable:!0,get:function(){return this}})},An=fn,Pn=dn,Cn=ye("match"),kn=vn.RegExp,Nn=kn.prototype,$n=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,Mn=/a/g,Ln=/a/g,Dn=new kn(Mn)!==Mn,Fn=En.UNSUPPORTED_Y,zn=gn&&(!Dn||Fn||An||Pn||Rn((function(){return Ln[Cn]=!1,kn(Mn)!=Mn||kn(Ln)==Ln||"/a/i"!=kn(Mn,"i")})));if(hn("RegExp",zn)){for(var Un=function(e,t){var n,r,o,i,c,a,u=this instanceof Un,l=wn(e),f=void 0===t,s=[],p=e;if(!u&&l&&f&&e.constructor===Un)return e;if((l||e instanceof Un)&&(e=e.source,f&&(t="flags"in p?p.flags:On.call(p))),e=void 0===e?"":Sn(e),t=void 0===t?"":Sn(t),p=e,An&&"dotAll"in Mn&&(r=!!t&&t.indexOf("s")>-1)&&(t=t.replace(/s/g,"")),n=t,Fn&&"sticky"in Mn&&(o=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,"")),Pn&&(e=(i=function(e){for(var t,n=e.length,r=0,o="",i=[],c={},a=!1,u=!1,l=0,f="";r<=n;r++){if("\\"===(t=e.charAt(r)))t+=e.charAt(++r);else if("]"===t)a=!1;else if(!a)switch(!0){case"["===t:a=!0;break;case"("===t:$n.test(e.slice(r+1))&&(r+=2,u=!0),o+=t,l++;continue;case">"===t&&u:if(""===f||Tn(c,f))throw new SyntaxError("Invalid capture group name");c[f]=!0,i.push([f,l]),u=!1,f="";continue}u?f+=t:o+=t}return[o,i]}(e))[0],s=i[1]),c=yn(kn(e,t),u?this:Nn,Un),(r||o||s.length)&&(a=In(c),r&&(a.dotAll=!0,a.raw=Un(function(e){for(var t,n=e.length,r=0,o="",i=!1;r<=n;r++)"\\"!==(t=e.charAt(r))?i||"."!==t?("["===t?i=!0:"]"===t&&(i=!1),o+=t):o+="[\\s\\S]":o+=t+e.charAt(++r);return o}(e),n)),o&&(a.sticky=!0),s.length&&(a.groups=s)),e!==p)try{bn(c,"source",""===p?"(?:)":p)}catch(e){}return c},Wn=function(e){e in Un||xn(Un,e,{configurable:!0,get:function(){return kn[e]},set:function(t){kn[e]=t}})},Kn=mn(kn),Bn=0;Kn.length>Bn;)Wn(Kn[Bn++]);Nn.constructor=Un,Un.prototype=Nn,jn(vn,"RegExp",Un)}_n("RegExp");var Vn={},Yn={},qn={}.propertyIsEnumerable,Gn=Object.getOwnPropertyDescriptor,Hn=Gn&&!qn.call({1:2},1);Yn.f=Hn?function(e){var t=Gn(this,e);return!!t&&t.enumerable}:qn;var Xn=o,Jn=Yn,Qn=Ae,Zn=Ue,er=Ee,tr=oe,nr=A,rr=Object.getOwnPropertyDescriptor;Vn.f=Xn?rr:function(e,t){if(e=Zn(e),t=er(t),nr)try{return rr(e,t)}catch(e){}if(tr(e,t))return Qn(!Jn.f.call(e,t),e[t])};var or={};or.f=Object.getOwnPropertySymbols;var ir,cr=Ne,ar=or,ur=y,lr=k("Reflect","ownKeys")||function(e){var t=cr.f(ur(e)),n=ar.f;return n?t.concat(n(e)):t},fr=oe,sr=lr,pr=Vn,dr=E,gr=c,vr=Vn.f,hr=ke,yr=wt.exports,br=H,xr=function(e,t){for(var n=sr(t),r=dr.f,o=pr.f,i=0;i<n.length;i++){var c=n[i];fr(e,c)||r(e,c,o(t,c))}},mr=g,wr=at,Sr=ut,Or=Object.keys||function(e){return wr(e,Sr)},Er=E,jr=y,Rr=Or,Tr=o?Object.defineProperties:function(e,t){jr(e);for(var n,r=Rr(t),o=r.length,i=0;o>i;)Er.f(e,n=r[i++],t[n]);return e},Ir=k("document","documentElement"),_r=y,Ar=Tr,Pr=ut,Cr=nt,kr=Ir,Nr=I,$r=Nt("IE_PROTO"),Mr=function(){},Lr=function(e){return"<script>"+e+"<\/script>"},Dr=function(e){e.write(Lr("")),e.close();var t=e.parentWindow.Object;return e=null,t},Fr=function(){try{ir=new ActiveXObject("htmlfile")}catch(e){}var e,t;Fr="undefined"!=typeof document?document.domain&&ir?Dr(ir):((t=Nr("iframe")).style.display="none",kr.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(Lr("document.F=Object")),e.close(),e.F):Dr(ir);for(var n=Pr.length;n--;)delete Fr.prototype[Pr[n]];return Fr()};Cr[$r]=!0;var zr=Object.create||function(e,t){var n;return null!==e?(Mr.prototype=_r(e),n=new Mr,Mr.prototype=null,n[$r]=e):n=Fr(),void 0===t?n:Ar(n,t)},Ur=vt,Wr=yt,Kr=bt,Br=q.exports,Vr=zr,Yr=Gt.get,qr=fn,Gr=dn,Hr=RegExp.prototype.exec,Xr=Br("native-string-replace",String.prototype.replace),Jr=Hr,Qr=function(){var e=/a/,t=/b*/g;return Hr.call(e,"a"),Hr.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),Zr=Kr.UNSUPPORTED_Y||Kr.BROKEN_CARET,eo=void 0!==/()??/.exec("")[1];(Qr||eo||Zr||qr||Gr)&&(Jr=function(e){var t,n,r,o,i,c,a,u=this,l=Yr(u),f=Ur(e),s=l.raw;if(s)return s.lastIndex=u.lastIndex,t=Jr.call(s,f),u.lastIndex=s.lastIndex,t;var p=l.groups,d=Zr&&u.sticky,g=Wr.call(u),v=u.source,h=0,y=f;if(d&&(-1===(g=g.replace("y","")).indexOf("g")&&(g+="g"),y=f.slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==f.charAt(u.lastIndex-1))&&(v="(?: "+v+")",y=" "+y,h++),n=new RegExp("^(?:"+v+")",g)),eo&&(n=new RegExp("^"+v+"$(?!\\s)",g)),Qr&&(r=u.lastIndex),o=Hr.call(d?n:u,y),d?o?(o.input=o.input.slice(h),o[0]=o[0].slice(h),o.index=u.lastIndex,u.lastIndex+=o[0].length):u.lastIndex=0:Qr&&o&&(u.lastIndex=u.global?o.index+o[0].length:r),eo&&o&&o.length>1&&Xr.call(o[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&p)for(o.groups=c=Vr(null),i=0;i<p.length;i++)c[(a=p[i])[0]]=o[a[1]];return o});var to=Jr;(function(e,t){var n,r,o,i,c,a=e.target,u=e.global,l=e.stat;if(n=u?gr:l?gr[a]||br(a,{}):(gr[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=vr(n,r))&&c.value:n[r],!mr(u?r:a+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;xr(i,o)}(e.sham||o&&o.sham)&&hr(i,"sham",!0),yr(n,r,i,e)}})({target:"RegExp",proto:!0,forced:/./.exec!==to},{exec:to});var no=wt.exports,ro=y,oo=vt,io=r,co=yt,ao=RegExp.prototype,uo=ao.toString,lo=io((function(){return"/a/b"!=uo.call({source:"a",flags:"b"})})),fo="toString"!=uo.name;(lo||fo)&&no(RegExp.prototype,"toString",(function(){var e=ro(this),t=oo(e.source),n=e.flags;return"/"+t+"/"+oo(void 0===n&&e instanceof RegExp&&!("flags"in ao)?co.call(e):n)}),{unsafe:!0});var so=wt.exports,po=to,go=r,vo=ye,ho=ke,yo=vo("species"),bo=RegExp.prototype,xo=Be,mo=vt,wo=Z,So=function(e){return function(t,n){var r,o,i=mo(wo(t)),c=xo(n),a=i.length;return c<0||c>=a?e?"":void 0:(r=i.charCodeAt(c))<55296||r>56319||c+1===a||(o=i.charCodeAt(c+1))<56320||o>57343?e?i.charAt(c):r:e?i.slice(c,c+2):o-56320+(r-55296<<10)+65536}},Oo={codeAt:So(!1),charAt:So(!0)}.charAt,Eo=te,jo=Math.floor,Ro="".replace,To=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Io=/\$([$&'`]|\d{1,2})/g,_o=Me,Ao=to,Po=function(e,t,n,r){var o=vo(e),i=!go((function(){var t={};return t[o]=function(){return 7},7!=""[e](t)})),c=i&&!go((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[yo]=function(){return n},n.flags="",n[o]=/./[o]),n.exec=function(){return t=!0,null},n[o](""),!t}));if(!i||!c||n){var a=/./[o],u=t(o,""[e],(function(e,t,n,r,o){var c=t.exec;return c===po||c===bo.exec?i&&!o?{done:!0,value:a.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));so(String.prototype,e,u[0]),so(bo,o,u[1])}r&&ho(bo[o],"sham",!0)},Co=r,ko=y,No=Be,$o=qe,Mo=vt,Lo=Z,Do=function(e,t,n){return t+(n?Oo(e,t).length:1)},Fo=function(e,t,n,r,o,i){var c=n+e.length,a=r.length,u=Io;return void 0!==o&&(o=Eo(o),u=To),Ro.call(i,u,(function(i,u){var l;switch(u.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(c);case"<":l=o[u.slice(1,-1)];break;default:var f=+u;if(0===f)return i;if(f>a){var s=jo(f/10);return 0===s?i:s<=a?void 0===r[s-1]?u.charAt(1):r[s-1]+u.charAt(1):i}l=r[f-1]}return void 0===l?"":l}))},zo=function(e,t){var n=e.exec;if("function"==typeof n){var r=n.call(e,t);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==_o(e))throw TypeError("RegExp#exec called on incompatible receiver");return Ao.call(e,t)},Uo=ye("replace"),Wo=Math.max,Ko=Math.min,Bo="$0"==="a".replace(/./,"$0"),Vo=!!/./[Uo]&&""===/./[Uo]("a","$0");Po("replace",(function(e,t,n){var r=Vo?"$":"$0";return[function(e,n){var r=Lo(this),o=null==e?void 0:e[Uo];return void 0!==o?o.call(e,r,n):t.call(Mo(r),e,n)},function(e,o){var i=ko(this),c=Mo(e);if("string"==typeof o&&-1===o.indexOf(r)&&-1===o.indexOf("$<")){var a=n(t,i,c,o);if(a.done)return a.value}var u="function"==typeof o;u||(o=Mo(o));var l=i.global;if(l){var f=i.unicode;i.lastIndex=0}for(var s=[];;){var p=zo(i,c);if(null===p)break;if(s.push(p),!l)break;""===Mo(p[0])&&(i.lastIndex=Do(c,$o(i.lastIndex),f))}for(var d,g="",v=0,h=0;h<s.length;h++){p=s[h];for(var y=Mo(p[0]),b=Wo(Ko(No(p.index),c.length),0),x=[],m=1;m<p.length;m++)x.push(void 0===(d=p[m])?d:String(d));var w=p.groups;if(u){var S=[y].concat(x,b,c);void 0!==w&&S.push(w);var O=Mo(o.apply(void 0,S))}else O=Fo(y,c,b,x,w,o);b>=v&&(g+=c.slice(v,b)+O,v=b+y.length)}return g+c.slice(v)}]}),!!Co((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}))||!Bo||Vo);var Yo={};Yo[ye("toStringTag")]="z";var qo="[object z]"===String(Yo),Go=qo,Ho=Me,Xo=ye("toStringTag"),Jo="Arguments"==Ho(function(){return arguments}()),Qo=Go?Ho:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),Xo))?n:Jo?Ho(t):"Object"==(r=Ho(t))&&"function"==typeof t.callee?"Arguments":r},Zo=qo?{}.toString:function(){return"[object "+Qo(this)+"]"},ei=qo,ti=wt.exports,ni=Zo;ei||ti(Object.prototype,"toString",ni,{unsafe:!0})
/*!
 * Handles finding a text string anywhere in the slides and showing the next occurrence to the user
 * by navigatating to that slide and highlighting it.
 *
 * @author Jon Snyder <snyder.jon@gmail.com>, February 2013
 */;var ri=function(){var e,t,n,r,o,i,c;function a(){(t=document.createElement("div")).classList.add("searchbox"),t.style.position="absolute",t.style.top="10px",t.style.right="10px",t.style.zIndex=10,t.innerHTML='<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>\n\t\t</span>',(n=t.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",e.getRevealElement().appendChild(t),n.addEventListener("keyup",(function(t){switch(t.keyCode){case 13:t.preventDefault(),function(){if(i){var t=n.value;""===t?(c&&c.remove(),r=null):(c=new f("slidecontent"),r=c.apply(t),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(e.slide(r[o].h,r[o].v),o++))}(),i=!1;break;default:i=!0}}),!1),l()}function u(){t||a(),t.style.display="inline",n.focus(),n.select()}function l(){t||a(),t.style.display="none",c&&c.remove()}function f(t,n){var r=document.getElementById(t)||document.body,o=n||"EM",i=new RegExp("^(?:"+o+"|SCRIPT|FORM)$"),c=["#ff6","#a0ffff","#9f9","#f99","#f6f"],a=[],u=0,l="",f=[];this.setRegex=function(e){e=e.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),l=new RegExp("("+e+")","i")},this.getRegex=function(){return l.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(t){if(null!=t&&t&&l&&!i.test(t.nodeName)){if(t.hasChildNodes())for(var n=0;n<t.childNodes.length;n++)this.hiliteWords(t.childNodes[n]);var r,s;if(3==t.nodeType)if((r=t.nodeValue)&&(s=l.exec(r))){for(var p=t;null!=p&&"SECTION"!=p.nodeName;)p=p.parentNode;var d=e.getIndices(p),g=f.length,v=!1;for(n=0;n<g;n++)f[n].h===d.h&&f[n].v===d.v&&(v=!0);v||f.push(d),a[s[0].toLowerCase()]||(a[s[0].toLowerCase()]=c[u++%c.length]);var h=document.createElement(o);h.appendChild(document.createTextNode(s[0])),h.style.backgroundColor=a[s[0].toLowerCase()],h.style.fontStyle="inherit",h.style.color="#000";var y=t.splitText(s.index);y.nodeValue=y.nodeValue.substring(s[0].length),t.parentNode.insertBefore(h,y)}}},this.remove=function(){for(var e,t=document.getElementsByTagName(o);t.length&&(e=t[0]);)e.parentNode.replaceChild(e.firstChild,e)},this.apply=function(e){if(null!=e&&e)return this.remove(),this.setRegex(e),this.hiliteWords(r),f}}return{id:"search",init:function(n){(e=n).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",(function(e){"F"==e.key&&(e.ctrlKey||e.metaKey)&&(e.preventDefault(),t||a(),"inline"!==t.style.display?u():l())}),!1)},open:u}};export{ri as default};
