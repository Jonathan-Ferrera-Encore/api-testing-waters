import{a as Ce,c as Ae}from"./chunk-5ICEPYHB.js";import{C as B,G as Se,H as xe,I as _e,J as Ie,b as be,c as ye,d as ve,e as we,g as Ee,h as Me,i as Te}from"./chunk-ZLERH3GN.js";import{$ as E,A as v,Aa as F,Ab as me,Ba as re,Bb as L,Cb as pe,Ea as ne,Eb as ue,Fb as he,G as d,I as $,Jb as h,P as q,Rb as ge,Sb as fe,Va as ie,W as w,Wa as ae,Y as J,Z as X,a as Z,aa as k,ca as T,db as _,dc as I,ea as P,eb as j,fa as m,fb as se,ga as S,i as G,kc as V,l as K,lb as le,m as A,n as Q,nb as U,oa as ee,q as c,qa as te,qb as ce,rb as de,t as Y,ta as x,tb as p,u as R,ub as u,vb as W,w as O,wa as oe,y as N,z as f}from"./chunk-E6B27HEZ.js";var De=(r,t)=>!0;var Re=[{path:"",loadComponent:()=>import("./chunk-PUI5P43X.js").then(r=>r.LoginComponent)},{path:"dashboard",loadComponent:()=>import("./chunk-3UHNUKY6.js").then(r=>r.DashboardComponent),canActivate:[De]}];var We="@",Le=(()=>{class r{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=m(te,{optional:!0});loadingSchedulerFn=m(Ve,{optional:!0});_engine;constructor(e,o,n,a,i){this.doc=e,this.delegate=o,this.zone=n,this.animationType=a,this.moduleImpl=i}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-LMUWHWQG.js").then(n=>n),o;return this.loadingSchedulerFn?o=this.loadingSchedulerFn(e):o=e(),o.catch(n=>{throw new X(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc);let i=new a(this.delegate,this._engine,this.zone);return this.delegate=i,i})}createRenderer(e,o){let n=this.delegate.createRenderer(e,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let a=new z(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(i=>{let s=i.createRenderer(e,o);a.use(s),this.scheduler?.notify(11)}).catch(i=>{a.use(n)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(o){ie()};static \u0275prov=E({token:r,factory:r.\u0275fac})}return r})(),z=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,o,n){this.delegate.insertBefore(t,e,o,n)}removeChild(t,e,o){this.delegate.removeChild(t,e,o)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,o,n){this.delegate.setAttribute(t,e,o,n)}removeAttribute(t,e,o){this.delegate.removeAttribute(t,e,o)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,o,n){this.delegate.setStyle(t,e,o,n)}removeStyle(t,e,o){this.delegate.removeStyle(t,e,o)}setProperty(t,e,o){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(t,e,o)),this.delegate.setProperty(t,e,o)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,o){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(t,e,o)),this.delegate.listen(t,e,o)}shouldReplay(t){return this.replay!==null&&t.startsWith(We)}},Ve=new T("");function Oe(r="animations"){return ne("NgAsyncAnimations"),S([{provide:ae,useFactory:(t,e,o)=>new Le(t,e,o,r),deps:[I,ve,x]},{provide:re,useValue:r==="noop"?"NoopAnimations":"BrowserAnimations"}])}var C="Service workers are disabled or not supported by this browser";function Be(r){return R(()=>Q(new Error(r)))}var b=class{serviceWorker;worker;registration;events;constructor(t){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=Be(C);else{let o=O(t,"controllerchange").pipe(c(()=>t.controller)),n=R(()=>A(t.controller)),a=Y(n,o);this.worker=a.pipe(v(g=>!!g)),this.registration=this.worker.pipe(w(()=>t.getRegistration()));let y=O(t,"message").pipe(c(g=>g.data)).pipe(v(g=>g&&g.type)).pipe(q());y.connect(),this.events=y}}postMessage(t,e){return this.worker.pipe(d(1),J(o=>{o.postMessage(Z({action:t},e))})).toPromise().then(()=>{})}postMessageWithOperation(t,e,o){let n=this.waitForOperationCompleted(o),a=this.postMessage(t,e);return Promise.all([a,n]).then(([,i])=>i)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(t){let e;return typeof t=="string"?e=o=>o.type===t:e=o=>t.includes(o.type),this.events.pipe(v(e))}nextEventOfType(t){return this.eventsOfType(t).pipe(d(1))}waitForOperationCompleted(t){return this.eventsOfType("OPERATION_COMPLETED").pipe(v(e=>e.nonce===t),d(1),c(e=>{if(e.result!==void 0)return e.result;throw new Error(e.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},ze=(()=>{class r{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new G;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=f,this.notificationClicks=f,this.subscription=f;return}this.messages=this.sw.eventsOfType("PUSH").pipe(c(n=>n.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(c(n=>n.data)),this.pushManager=this.sw.registration.pipe(c(n=>n.pushManager));let o=this.pushManager.pipe(w(n=>n.getSubscription()));this.subscription=N(o,this.subscriptionChanges)}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(C));let o={userVisibleOnly:!0},n=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),a=new Uint8Array(new ArrayBuffer(n.length));for(let i=0;i<n.length;i++)a[i]=n.charCodeAt(i);return o.applicationServerKey=a,this.pushManager.pipe(w(i=>i.subscribe(o)),d(1)).toPromise().then(i=>(this.subscriptionChanges.next(i),i))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(C));let e=o=>{if(o===null)throw new Error("Not subscribed to push notifications.");return o.unsubscribe().then(n=>{if(!n)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(d(1),w(e)).toPromise()}decodeBase64(e){return atob(e)}static \u0275fac=function(o){return new(o||r)(P(b))};static \u0275prov=E({token:r,factory:r.\u0275fac})}return r})(),He=(()=>{class r{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=f,this.unrecoverable=f;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(C));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(C));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(o){return new(o||r)(P(b))};static \u0275prov=E({token:r,factory:r.\u0275fac})}return r})();var Ne=new T("");function Ze(r,t,e,o){return()=>{if(!(V(o)&&"serviceWorker"in navigator&&e.enabled!==!1))return;let n=r.get(x),a=r.get(U);n.runOutsideAngular(()=>{let s=navigator.serviceWorker,l=()=>s.controller?.postMessage({action:"INITIALIZE"});s.addEventListener("controllerchange",l),a.onDestroy(()=>{s.removeEventListener("controllerchange",l)})});let i;if(typeof e.registrationStrategy=="function")i=e.registrationStrategy();else{let[s,...l]=(e.registrationStrategy||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":i=A(null);break;case"registerWithDelay":i=ke(+l[0]||0);break;case"registerWhenStable":let y=K(r.get(U).whenStable());i=l[0]?N(y,ke(+l[0])):y;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${e.registrationStrategy}`)}}n.runOutsideAngular(()=>i.pipe(d(1)).subscribe(()=>navigator.serviceWorker.register(t,{scope:e.scope}).catch(s=>console.error("Service worker registration failed with:",s))))}}function ke(r){return A(null).pipe($(r))}function Ge(r,t){return new b(V(t)&&r.enabled!==!1?navigator.serviceWorker:void 0)}var M=class{enabled;scope;registrationStrategy};function Pe(r,t={}){return S([ze,He,{provide:Ne,useValue:r},{provide:M,useValue:t},{provide:b,useFactory:Ge,deps:[M,F]},{provide:le,useFactory:Ze,deps:[ee,Ne,M,F],multi:!0}])}var Fe={providers:[ge(),Ae(Re),Me(Ee()),Oe(),be(ye()),Pe("ngsw-worker.js",{enabled:!fe(),registrationStrategy:"registerWhenStable:30000"})]};var Ke=["*",[["mat-toolbar-row"]]],Qe=["*","mat-toolbar-row"],Ye=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275dir=se({type:r,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return r})(),je=(()=>{class r{_elementRef=m(oe);_platform=m(Te);_document=m(I);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(o){return new(o||r)};static \u0275cmp=_({type:r,selectors:[["mat-toolbar"]],contentQueries:function(o,n,a){if(o&1&&pe(a,Ye,5),o&2){let i;ue(i=he())&&(n._toolbarRows=i)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(o,n){o&2&&(de(n.color?"mat-"+n.color:""),ce("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",n._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Qe,decls:2,vars:0,template:function(o,n){o&1&&(me(Ke),L(0),L(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}"],encapsulation:2,changeDetection:0})}return r})();var Ue=(()=>{class r{static \u0275fac=function(o){return new(o||r)};static \u0275mod=j({type:r});static \u0275inj=k({imports:[B,B]})}return r})();var D=class r{static \u0275fac=function(e){return new(e||r)};static \u0275cmp=_({type:r,selectors:[["waters-root"]],decls:20,vars:0,consts:[["mat-icon-button","","aria-label","Main menu link"],[1,"navigation-spacer"],["mat-icon-button","","aria-label","Account menu link"],["mat-icon-button","","aria-label","Setting menu link"],["mat-icon-button","","aria-label","History menu link"],["mat-icon-button","","aria-label","Share link"]],template:function(e,o){e&1&&(p(0,"mat-toolbar")(1,"button",0)(2,"mat-icon"),h(3,"menu"),u()(),p(4,"span"),h(5,"DummyJSON - API Testing Waters"),u(),W(6,"span",1),p(7,"button",2)(8,"mat-icon"),h(9,"account_circle"),u()(),p(10,"button",3)(11,"mat-icon"),h(12,"settings"),u()(),p(13,"button",4)(14,"mat-icon"),h(15,"history"),u()(),p(16,"button",5)(17,"mat-icon"),h(18,"share"),u()()(),W(19,"router-outlet"))},dependencies:[Ce,xe,Se,Ie,_e,Ue,je],styles:[".navigation-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"],changeDetection:0})};we(D,Fe).catch(r=>console.error(r));
