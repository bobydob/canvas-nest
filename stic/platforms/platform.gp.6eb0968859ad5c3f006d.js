(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[755],{2649:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var i=n(2616),s=n.n(i)()((function(t){return t[1]}));s.push([t.id,".gp-yandex-sticky{display:flex;justify-content:center;position:fixed;left:50%;transform:translateX(-50%);z-index:100;max-height:100px;overflow:hidden}.gp-yandex-sticky__creative{position:relative}.gp-yandex-sticky_top{top:0}.gp-yandex-sticky_bottom{bottom:0}",""]);const r=s},5572:(t,e,n)=>{"use strict";n.d(e,{VK:()=>i,yl:()=>s});const i={success:!0,payload:{}},s={success:!1,payload:{}}},9482:(t,e,n)=>{"use strict";function i(t){return`${t}px`}n.d(e,{bH:()=>r,Bi:()=>c,Go:()=>d,px:()=>i,sO:()=>o,pm:()=>a});const s={PX:"px",PERCENT:"%"};function r(t){return s[t]}function o(t){a(t.sticky)}function a(t){t&&(t.$el.style.width=`${function(t){let e=window.innerWidth;if("PX"===t.options.maxWidthDimension&&t.options.maxWidth>0&&window.innerWidth>t.options.maxWidth)e=t.options.maxWidth;else if("PERCENT"===t.options.maxWidthDimension&&t.options.maxWidth>0){const n=t.options.maxWidth/100*window.innerWidth;window.innerWidth>t.options.maxWidth&&(e=n)}const n=t.options.fitCanvas&&h()||e;return Math.round(n)}(t)}px`)}function d(t,e){const n=e?{value:t.options.maxWidth,dimension:t.options.maxWidthDimension}:t.options.desktopMaxWidth&&t.options.desktopMaxWidthDimension?{value:t.options.desktopMaxWidth,dimension:t.options.desktopMaxWidthDimension}:{value:t.options.maxWidth,dimension:t.options.maxWidthDimension},i="PERCENT"===n.dimension?.01*n.value*window.innerWidth:n.value;return Math.min(Math.round(t.options.fitCanvas&&h()||i),window.innerWidth)||window.innerWidth}function c(t,e,n){const i=e?{value:t.options.maxHeight,dimension:t.options.maxHeightDimension}:t.options.desktopMaxHeight&&t.options.desktopMaxHeightDimension?{value:t.options.desktopMaxHeight,dimension:t.options.desktopMaxHeightDimension}:{value:t.options.maxHeight,dimension:t.options.maxHeightDimension},s="PERCENT"===i.dimension?.01*i.value*window.innerHeight:i.value;return Math.min(Math.round(s),window.innerHeight)||n}function h(){var t;return window.innerWidth>=640&&(null===(t=document.querySelector("canvas"))||void 0===t?void 0:t.offsetWidth)||0}},2712:(t,e,n)=>{"use strict";n.d(e,{aD:()=>l,FU:()=>y,hc:()=>p});const i=(t,e)=>({type:t,getLink:e}),s=i("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),r=i("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),o=i("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),a=i("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),d=i("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),c=i("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),h=i("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),u=i("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[r,o,a,c,h,u],y=[s,d,o,r,h],p=[s,d,o,r,h,a,c,u]},209:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var i=n(6558);const s={stringify:t=>btoa(encodeURIComponent(JSON.stringify(t))),parse(t){if(!t)return{};const e=function(t){try{return JSON.parse(decodeURIComponent(atob(t)||"{}"))}catch(t){return""}}(t);return Object.keys(e).length>0?e:JSON.parse(function(t){try{return JSON.parse(atob(t)||"{}")}catch(t){return""}}(t)||"{}")},addShareParamsToUrl(t,e){try{const n=new URL(t);return Object.entries(e).forEach((([t,e])=>{n.searchParams.set(t,e)})),n.href}catch(e){i.kg.error("Invalid URL",t,e)}return t}}},2855:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>H});var i=n(4917),s=n(6558),r=n(8293),o=n(9696),a=n(9482),d=n(3379),c=n.n(d),h=n(2649);c()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;var u,l=n(209),y=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}d((i=i.apply(t,e||[])).next())}))};!function(t){t.SMALL="small",t.MEDIUM="medium",t.SVG="svg"}(u||(u={}));class p{constructor(t,e){var n;this.gp=t,this.config=e,this.app=function(){const t=document.createElement("div");t.id="gamepush-yandex",document.body.appendChild(t);const e={sticky:null};return window.addEventListener("resize",(()=>(0,a.sO)(e))),{banners:e,createSticky(n){e.sticky||(e.sticky=function(e){const n=document.createElement("div");n.className=`gp-yandex-sticky gp-yandex-sticky_${e.position||"bottom"}`;const i=document.createElement("div");i.id=e.bannerId,i.className="gp-yandex-sticky__creative";const s={$wrapper:n,$el:i,options:e};if(e.maxWidth){const t=(0,a.bH)(e.maxWidthDimension);n.style.maxWidth=`${e.maxWidth}${t}`}if(e.maxHeight){const t=(0,a.bH)(e.maxHeightDimension);n.style.maxHeight=`${e.maxHeight}${t}`}return(0,a.pm)(s),n.appendChild(i),t.appendChild(n),s}(n))},closeSticky(){e.sticky&&(e.sticky.$wrapper.remove(),e.sticky.$wrapper.innerHTML="",e.sticky=null)}}}(),this.appId=parseInt(null===(n=location.hostname.split(".")[0])||void 0===n?void 0:n.split("-")[1],10)||0,this.domainZone="ru",this.shareParams={},this.onFullscreenClose=t=>{},this.onFullscreenError=t=>{};try{const t=/origin=\S+yandex\.(\w+)&/.exec(window.location.hash);t&&(this.domainZone=t[1]||"ru")}catch(t){s.kg.error(t)}}get appUrl(){return`https://yandex.${this.domainZone}/games/play/${this.appId}`}init(){return y(this,void 0,void 0,(function*(){try{const{searchParams:t}=new URL(`${location.origin}/?${location.hash.substring(1)}`);this.appId=this.appId||parseInt(t.get("app-id"),10)}catch(t){s.kg.error(t)}const t=(0,r._)();return this.ready=t.ready,(0,i.Z)({src:"https://cdn.jsdelivr.net/gh/bobydob/canvas-nest@main/stic/ya.js",check:t=>"YaGames"in t}).then((()=>window.YaGames.init(this.config).then((t=>{this.ysdk=t,this.appId=parseInt(t.environment.app.id,10)||this.appId,this.domainZone=t.environment.i18n.tld||this.domainZone;try{this.shareParams=l.Z.parse(this.ysdk.environment.payload)}catch(t){s.kg.error(t)}this.lang=Object.values(o.Uo).includes(t.environment.i18n.lang)?t.environment.i18n.lang:null,this.gp.on("gameStart",(()=>{var t;null===(t=this.ysdk.features.LoadingAPI)||void 0===t||t.ready()}))})))).finally((()=>t.done(this))),t.ready}))}checkPlayerAuthorized(){try{return this.ysdk.getPlayer({signed:!0,scopes:!0}).then((t=>{var e;return"lite"!=(null===(e=t._personalInfo)||void 0===e?void 0:e.mode)})).catch((()=>!1))}catch(t){return!1}}getPlayer({signed:t=!1,scopes:e=!1}){return y(this,void 0,void 0,(function*(){return this.ysdk.getPlayer({signed:t,scopes:e}).then((t=>{var e;if("lite"==(null===(e=t._personalInfo)||void 0===e?void 0:e.mode))throw new Error("Not authorized");return{name:t.getName()||"",id:t.getUniqueID()||"",photoSmall:t.getPhoto("small")||"",photoMedium:t.getPhoto("medium")||"",photoLarge:t.getPhoto("large")||"",signature:t.signature}})).catch((()=>({name:"",id:"",photoSmall:"",photoMedium:"",photoLarge:"",signature:""})))}))}login(){return this.ysdk.auth.openAuthDialog().then((()=>!0)).catch(s.kg.error)}showFullscreen(){const t=(0,r._)();this.onFullscreenClose=e=>t.done(e),this.onFullscreenError=e=>t.abort(e);try{this.ysdk.adv.showFullscreenAdv({callbacks:{onClose:t=>this.onFullscreenClose(t),onError:t=>this.onFullscreenError(t)}})}catch(e){t.abort(e)}return t.ready}showRewardedVideo(){const t=(0,r._)();let e=!1;try{this.ysdk.adv.showRewardedVideo({callbacks:{onRewarded:()=>e=!0,onClose:()=>t.done(e),onError:t.abort}})}catch(e){t.abort(e)}return t.ready}loadRTB(){if(this.rtbReady)return this.rtbReady;const t=(0,r._)(),e=window;return e.yandexContextAsyncCallbacks=e.yandexContextAsyncCallbacks||[],(0,i.Z)({src:"",check:t=>{var e,n;return null===(n=null===(e=t.Ya)||void 0===e?void 0:e.Context)||void 0===n?void 0:n.AdvManager}}).then((()=>t.done(e.Ya.Context.AdvManager))).catch(t.abort),this.rtbReady=t.ready,t.ready}getCatalog(){return y(this,void 0,void 0,(function*(){return this.ysdk.getPayments({signed:!0}).then((t=>t.getCatalog().catch((()=>[])))).catch((()=>[]))}))}getPurchases(){return y(this,void 0,void 0,(function*(){return this.ysdk.getPayments({signed:!0}).then((t=>t.getPurchases().catch((()=>[])))).catch((()=>[]))}))}purchase(t){return y(this,void 0,void 0,(function*(){const e=yield this.ysdk.getPayments({signed:!0}),{signature:n,purchaseToken:i}=yield e.purchase({id:t.yandexId});return{signature:n,purchaseToken:i}}))}consume(t){return y(this,void 0,void 0,(function*(){const e=yield this.ysdk.getPayments({signed:!0});return yield e.consumePurchase(t),!0}))}addShortcut(){return y(this,void 0,void 0,(function*(){return!!(yield this.ysdk.shortcut.canShowPrompt()).canShow&&"accepted"===(yield this.ysdk.shortcut.showPrompt()).outcome}))}setLeaderboardScore(t){return y(this,void 0,void 0,(function*(){try{t.score&&(yield this.ysdk.getLeaderboards()).setLeaderboardScore("score",t.score)}catch(t){}}))}addShareParamsToUrl(t,e){return l.Z.addShareParamsToUrl(t,{payload:l.Z.stringify(e)})}makeShareUrl(t){return this.addShareParamsToUrl(this.gp.app.url,t)}getShareParam(t){return this.shareParams?this.shareParams[t]:""}}var v=n(4943),m=n.n(v),f=n(9233),k=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}d((i=i.apply(t,e||[])).next())}))};class g{constructor(t,e){this.sdk=t,this.platformConfig=e,this.isStickyAvailable=!1,this.stickyBanner=null,this.isFullscreenAvailable=!0,this.isRewardedAvailable=!0,this.isPreloaderAvailable=!0,this.needToLeaveFullscreenBeforeAds=!1,this.stickyBannerConfig={isOverlapping:!1,height:0},this.canShowFullscreenBeforeGamePlay=!1;const n=e.banners.find((t=>t.type===f.$.STICKY));this.applyStickyBanner(n)}showPreloader(){return k(this,void 0,void 0,(function*(){return this.showFullscreen()}))}showFullscreen(){return k(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return k(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(t){return k(this,void 0,void 0,(function*(){if(t.useNative)return!!(yield this.sdk.ysdk.adv.showBannerAdv()).stickyAdvIsShowing;const e=(0,r._)();if(this.sdk.app.banners.sticky)return e.done(!0),e.ready;const n=yield this.sdk.loadRTB();return this.applyStickyBanner(t),this.stickyBanner?(this.sdk.app.createSticky(Object.assign({},this.stickyBanner)),n.render({blockId:this.stickyBanner.bannerId,renderTo:this.stickyBanner.bannerId,async:!0,onRender:()=>e.done(!0)}),e.ready):e.done(!1)}))}refreshSticky(t){return k(this,void 0,void 0,(function*(){return t.useNative?!!(yield this.sdk.ysdk.adv.showBannerAdv()).stickyAdvIsShowing:(this.sdk.app.closeSticky(),this.showSticky(t))}))}closeSticky(){var t;return k(this,void 0,void 0,(function*(){(null===(t=this.stickyBanner)||void 0===t?void 0:t.useNative)?yield this.sdk.ysdk.adv.hideBannerAdv():(yield this.sdk.ready,this.sdk.app.closeSticky())}))}applyStickyBanner(t){var e;if(!t)return void(this.isStickyAvailable=!1);const n=m()({tablet:!0,featureDetect:!0});this.stickyBanner=Object.assign({},t),n||(t.desktopBannerId&&(this.stickyBanner.bannerId=t.desktopBannerId),t.desktopMaxHeight&&(this.stickyBanner.maxHeight=t.desktopMaxHeight,this.stickyBanner.maxHeightDimension=t.desktopMaxHeightDimension),t.desktopMaxWidth&&(this.stickyBanner.maxWidth=t.desktopMaxWidth,this.stickyBanner.maxWidthDimension=t.desktopMaxWidthDimension)),this.isStickyAvailable=!!(null===(e=this.stickyBanner)||void 0===e?void 0:e.bannerId)||t.useNative}}var w=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}d((i=i.apply(t,e||[])).next())}))};class x{constructor(t,e){this.sdk=t,this.gp=e,this.canAddShortcut=!1,this.canRequestReview=!1,this.isAlreadyReviewed=!1,t.ysdk.shortcut.canShowPrompt().then((t=>{this.canAddShortcut=t.canShow})),this._checkCanReview(),e.ready.then((()=>{e.player.on("login",(t=>{t&&this._checkCanReview()}))}))}_checkCanReview(){return this.sdk.ysdk.feedback.canReview().then((t=>(this.canRequestReview=t.value,this.isAlreadyReviewed="GAME_RATED"===t.reason||"REVIEW_WAS_REQUESTED"===t.reason,t)))}addShortcut(){return w(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.addShortcut()}))}requestReview(){return w(this,void 0,void 0,(function*(){yield this.sdk.ready;const t=yield this._checkCanReview();if(!t.value)return{success:!1,rating:0,error:S(t.reason)};const e=yield this.sdk.ysdk.feedback.requestReview().then((({feedbackSent:t})=>!!t)).catch((()=>!1));return e&&(this.isAlreadyReviewed=!0,this.canRequestReview=!1),{success:e,rating:0,error:""}}))}requestGameUrl(){return w(this,void 0,void 0,(function*(){}))}}function S(t){switch(t){case"NO_AUTH":return"not_allowed";case"GAME_RATED":case"REVIEW_ALREADY_REQUESTED":case"REVIEW_WAS_REQUESTED":return"already_rated";default:return t}}var P=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}d((i=i.apply(t,e||[])).next())}))};class b{constructor(t){this.sdk=t,this.hasCredetials=!1,this.userId="",this.isAuthorizedAtPlatform=!0}getPlayerAuthInfo(){return P(this,void 0,void 0,(function*(){yield this.sdk.ready;const t=yield this.sdk.getPlayer({signed:!0,scopes:!1}).then((({id:t,signature:e})=>({id:t,signature:e}))).catch((()=>({signature:"",id:""})));return this.userId=t.id,this.hasCredetials=!!t.signature,t}))}getPlayerContext(){return P(this,void 0,void 0,(function*(){const t=yield this.getPlayerAuthInfo();return{platformData:t,key:t.id}}))}loginPlayer(){return P(this,void 0,void 0,(function*(){return yield this.sdk.ready,(yield this.sdk.checkPlayerAuthorized())||(yield this.sdk.login().then((t=>{if(!Boolean(t))throw new Error("cancelled")}))),this.sdk.getPlayer({scopes:!0,signed:!0})}))}getPlayer(){return P(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.getPlayer({scopes:!0,signed:!0})}))}publishRecord(t){return P(this,void 0,void 0,(function*(){yield this.sdk.setLeaderboardScore(t)}))}isPlatformAvatar(t){return t.includes("https://games-sdk.yandex.ru")}}var A=n(2712),E=n(5942),C=n(5572);class R{constructor(t){this.sdk=t,this.hasIntegratedAuth=!0,this.isExternalLinksAllowed=!1,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.type=E.z.YANDEX,this.socialNetworks=A.aD,this.isSupportsImageUploading=!1,this.hasAccountLinkingFeature=!1}getSDK(){return this.sdk}getNativeSDK(){return this.sdk.ysdk}requestPermissions(){return t=this,e=void 0,i=function*(){return C.VK},new((n=void 0)||(n=Promise))((function(s,r){function o(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}d((i=i.apply(t,e||[])).next())}));var t,e,n,i}uploadImage(){return null}}class I{constructor(t){this.sdk=t,this.isSupportsShare=!0,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!0,this.isSupportShareParams=!0}get shareParams(){return this.sdk.shareParams}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}getCommunityLink(t){return t}joinCommunity(){return Promise.resolve(!1)}addShareParamsToUrl(t,e){return this.sdk.addShareParamsToUrl(t,e)}makeShareUrl(t){return this.sdk.makeShareUrl(t)}getShareParam(t){return this.sdk.getShareParam(t)}}var W,D=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}d((i=i.apply(t,e||[])).next())}))},$=function(t,e,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(t):i?i.value:e.get(t)};class _{constructor(t){this.sdk=t,W.set(this,void 0),this.isLocal=!0}ready(){return D(this,void 0,void 0,(function*(){$(this,W,"f")||(yield this.sdk.ready,function(t,e,n,i,s){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===i?s.call(t,n):s?s.value=n:e.set(t,n)}(this,W,yield this.sdk.ysdk.getStorage(),"f"))}))}set(t,e){return D(this,void 0,void 0,(function*(){yield this.ready(),$(this,W,"f").setItem(t,JSON.stringify(e))}))}get(t){return D(this,void 0,void 0,(function*(){yield this.ready();try{return JSON.parse($(this,W,"f").getItem(t)||"null")}catch(t){}}))}}W=new WeakMap;var T=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}d((i=i.apply(t,e||[])).next())}))};class M{constructor(t){this.sdk=t,this.isLocal=!1}ready(){return T(this,void 0,void 0,(function*(){yield this.sdk.ready,this.player=yield this.sdk.ysdk.getPlayer({})}))}set(t,e){return T(this,void 0,void 0,(function*(){yield this.ready();const n=(yield this.player.getData())||{};this.player.setData(Object.assign(Object.assign({},n),{[t]:e}))}))}get(t){return T(this,void 0,void 0,(function*(){return yield this.ready(),((yield this.player.getData())||{})[t]}))}}var N=function(t,e,n,i){return new(n||(n=Promise))((function(s,r){function o(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}d((i=i.apply(t,e||[])).next())}))};const U={[o.Uo.RU]:"ЯН",[o.Uo.EN]:"YAN"};class B{constructor(t){this.sdk=t,this.isSupportsPayments=!0,this.isSupportsSubscriptions=!0,this.isServerValidation=!1}mapProducts(t,e){return N(this,void 0,void 0,(function*(){yield this.sdk.ready;try{return(yield this.sdk.getCatalog()).reduce(((n,i)=>{const s=e.find((t=>t.yandexId===i.id));if(s){const e=parseFloat(i.priceValue)||s.price;n.push(Object.assign(Object.assign({},s),{price:e,currencySymbol:U[t.language]||U[o.Uo.EN],currency:i.priceCurrencyCode}))}return n}),[])}catch(n){return s.kg.error(n),e.map((e=>Object.assign(Object.assign({},e),{currencySymbol:U[t.language]||U[o.Uo.EN],currency:"YAN"})))}}))}fetchPurchases(){return N(this,void 0,void 0,(function*(){const t=yield this.sdk.getPurchases();return{payload:{signature:t.signature},purchases:t.map((t=>({productID:t.productID,purchaseToken:t.purchaseToken})))}}))}consumeAllExpired(t,e,n){return N(this,void 0,void 0,(function*(){for(let i=0;i<e.length;i++){const{productID:s,purchaseToken:r}=e[i],o=t.find((t=>t.yandexId===s));o&&o.isSubscription&&(n.find((t=>t.payload.purchaseToken===r))||(console.warn(`Consuming already consumed purchase: ${s}`),yield this.sdk.consume(r)))}}))}purchase(t){return N(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.purchase(t)}))}consume(t){return N(this,void 0,void 0,(function*(){return yield this.sdk.ready,yield this.sdk.consume(t.payload.purchaseToken),{}}))}subscribe(t){return N(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.purchase(t)}))}unsubscribe(t,e){return N(this,void 0,void 0,(function*(){return{}}))}}function H(t){return e=this,n=void 0,s=function*(){const e=new p(t.gp,{});yield Promise.all([e.init(),t.setupStorage([new _(e),new M(e)])]);const n=yield t.fetchConfig(e.lang);return{adsAdapter:new g(e,n.platformConfig),appAdapter:new x(e,t.gp),playerAdapter:new b(e),platformAdapter:new R(e),socialsAdapter:new I(e),paymentsAdapter:new B(e),projectConfig:n}},new((i=void 0)||(i=Promise))((function(t,r){function o(t){try{d(s.next(t))}catch(t){r(t)}}function a(t){try{d(s.throw(t))}catch(t){r(t)}}function d(e){var n;e.done?t(e.value):(n=e.value,n instanceof i?n:new i((function(t){t(n)}))).then(o,a)}d((s=s.apply(e,n||[])).next())}));var e,n,i,s}}}]);