(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.validation=e}var n,r;return n=t,(r=[{key:"enableValidation",value:function(){this.forms=document.querySelectorAll(this.validation.formSelector),this.formInputes=document.querySelectorAll(this.validation.inputSelector),this.submitButton=document.getElementById(this.validation.submitButton),this.formPopup=document.querySelector(this.validation.formPopup),this.inputList=Array.from(this.formPopup.querySelectorAll(this.validation.inputList)),this._setEventListeners(this.formInputes,this.inputList,this.submitButton)}},{key:"resetErrors",value:function(){var e=this,t=this.formPopup.querySelectorAll(".text-error");this.formPopup.querySelectorAll(".popup__text").forEach((function(t){t.classList.remove(e.validation.errorClass)})),t.forEach((function(t){t.classList.add(e.validation.invisibleClass)})),this._disableSubmitBtn(this.submitButton)}},{key:"_disableSubmitBtn",value:function(e){e.setAttribute("disabled","disabled"),e.textContent=e.value,e.classList.remove(this.validation.activeButtonClass)}},{key:"_hideError",value:function(e){var t=document.querySelector(".".concat(e,"-error")),n=document.getElementById(e);n.classList.remove(this.validation.errorClass),t.classList.add(this.validation.invisibleClass),n.classList.remove(this.validation.openClass),t.classList.remove(this.validation.openClass)}},{key:"_showError",value:function(e,t){var n=document.querySelector(".".concat(e,"-error")),r=document.getElementById(e);r.classList.add(this.validation.errorClass),n.textContent=t,n.classList.remove(this.validation.invisibleClass),n.classList.add(this.validation.openClass),r.classList.add(this.validation.openClass)}},{key:"_validateInputValue",value:function(e){e.validity.valid?this._hideError(e.id):this._showError(e.id,e.validationMessage)}},{key:"_setEventListeners",value:function(e,t,n){var r=this;e.forEach((function(e){e.addEventListener("input",(function(e){r._validateInputValue(e.currentTarget),r._toggleButtonState(t,n)}))}))}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?this._disableSubmitBtn(t):(t.removeAttribute("disabled"),t.classList.add(this.validation.activeButtonClass))}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t){var n=this,r=t.data,o=t.template,i=t.openPhoto,a=t.openPopupConfirmation,s=t.handleLike,u=t.userId;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r.name,this._link=r.link,this._userId=u,this._id=r._id,this._template=o,this._userLike=r.likes.find((function(e){return e._id===n._userId})),this._openPhotoFunction=i,this._comparisonID=r.owner._id===u,this._openPopupConfirmation=a,this._placeTemplate=document.querySelector(".place-template").content,this._handleLike=s,this._card=this._getTemplate(),this.data=r,this.cardHeart=this._card.querySelector(".place__heart")}var t,r;return t=e,(r=[{key:"_getTemplate",value:function(){return this._placeTemplate.querySelector(this._template).cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this,t=this._card.querySelector(".place__delete");this._card.querySelector(".place__illustration").addEventListener("click",this._openPhotoFunction),t.addEventListener("click",(function(){return e._openPopupConfirmation(e)})),this.cardHeart.addEventListener("click",this._clickLikes.bind(this))}},{key:"_clickLikes",value:function(){this.cardHeart.classList.contains("place__heart_active")?this._handleLike(this,!1):this._handleLike(this,!0)}},{key:"toggleBtnLike",value:function(){this.cardHeart.classList.toggle("place__heart_active")}},{key:"setLikes",value:function(e){this._numberLikes=this._card.querySelector(".place__heart-signature"),e.likes.length>0?this._numberLikes.textContent=e.likes.length:this._numberLikes.textContent=""}},{key:"deleteCard",value:function(){this._card.remove(),this._card=null}},{key:"generateCard",value:function(){var e=this._card.querySelector(".place__delete"),t=this._card.querySelector(".place__illustration"),n=this._card.querySelector(".place__title");return this._comparisonID&&e.removeAttribute("disabled"),this._userLike?this.cardHeart.classList.add("place__heart_active"):this.cardHeart.classList.remove("place__heart_active"),t.src=this._link,t.alt=this._name,n.textContent=this._name,this.setLikes(this.data),this._setEventListeners(),this._card}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.popup=t,this._closeBtn=this.popup.querySelector(".popup__exit"),this._handleClickClose=this._handleClickClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this.popup.classList.remove("invisible"),this.popup.addEventListener("mousedown",this._handleClickClose),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this.popup.classList.add("invisible"),this.popup.removeEventListener("mousedown",this._handleClickClose),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_handleClickClose",value:function(e){e.target.classList.contains("popup")&&this.close()}},{key:"setEventListeners",value:function(){this._closeBtn.addEventListener("click",this.close.bind(this))}}])&&o(t.prototype,n),e}();function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(r);if(o){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return l(this,e)});function a(e){var t,n=e.popup,r=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,n)).submit=r,t.submitForm=t.popup.querySelector(".popup__content"),t.submitButton=t.submitForm.querySelector(".popup__button"),t}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this.popup.querySelectorAll("input"),t={};return e.forEach((function(e){t[e.name]=e.value})),t}},{key:"_reset",value:function(){this.popup.querySelector("form").reset()}},{key:"_submit",value:function(){var e=this._getInputValues();this.submit(e)}},{key:"_transferSubmit",value:function(){this._submit()}},{key:"renderLoading",value:function(e){this.submitButton.textContent=e?"Сохранение...":"Сохранено!"}},{key:"setEventListeners",value:function(){var e=this;u(p(a.prototype),"setEventListeners",this).call(this),this.submitForm.addEventListener("submit",(function(t){t.preventDefault(),e._transferSubmit()}))}},{key:"close",value:function(){this._reset(),u(p(a.prototype),"close",this).call(this)}}])&&s(t.prototype,n),a}(i);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nameElement=document.querySelector(t),this.infoElement=document.querySelector(n),this.avatarElement=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this.nameElement.textContent,info:this.infoElement.textContent,userId:this.id,avatar:this.avatarElement}}},{key:"setUserAvatar",value:function(e){e&&(this.avatarElement.src=e)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.info,r=e.id;t&&(this.nameElement.textContent=t),n&&(this.infoElement.textContent=n),r&&(this.id=r)}}])&&h(t.prototype,n),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){var n=t.renderer,r=t.containerSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.renderer=n,this.containerElement=r}var t,n;return t=e,(n=[{key:"render",value:function(e){var t=this;e.forEach((function(e){return t.renderer(e)}))}},{key:"addItem",value:function(e){this.containerElement.prepend(e)}}])&&v(t.prototype,n),e}();function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e)).popupPhotoImg=t,r.photoSignature=n,r}return t=a,(n=[{key:"open",value:function(e){this.popupPhotoImg.src=e.link,this.popupPhotoImg.alt=e.name,this.photoSignature.textContent=e.name,b(S(a.prototype),"open",this).call(this)}}])&&m(t.prototype,n),a}(i),L=document.querySelector(".info__setting-box"),C=document.querySelector(".popup_type_profile"),w=C.querySelector('input[name="name"]'),O=C.querySelector('input[name="about"]'),P=document.querySelector(".popup_type_place"),q=document.querySelector(".add-button"),I=document.querySelector(".popup_type_photo"),j=document.querySelector(".popup__illustration"),R=document.querySelector(".popup__signature"),B=document.querySelector(".avatar-box"),x=document.querySelector(".popup_type_avatar"),T=document.querySelector(".popup_type_confirmation"),A=(document.querySelector(".popup__place-form"),document.querySelector(".popup__profile-form"),document.querySelector(".popup__avatar-form"),document.querySelector(".popup__confirmation-form"),document.querySelector(".places"));function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.address,r=t.headers,o=void 0===r?{}:r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._address=n,this._headers=o}var t,n;return t=e,(n=[{key:"_cheackServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{method:"GET",headers:this._headers}).then(this._cheackServerResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{method:"GET",headers:this._headers}).then(this._cheackServerResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._cheackServerResponse)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then(this._cheackServerResponse)}},{key:"submitCard",value:function(e,t){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._cheackServerResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._cheackServerResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then(this._cheackServerResponse)}},{key:"unlikeCard",value:function(e){return fetch("".concat(this._address,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._cheackServerResponse)}}])&&U(t.prototype,n),e}();function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t,n){return(F="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return J(this,e)});function a(e){var t=e.popup,n=e.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),i.call(this,{popup:t,submit:n})}return t=a,(n=[{key:"_transferSubmit",value:function(){this.submit(this.data)}},{key:"setEventListeners",value:function(){F(G(a.prototype),"setEventListeners",this).call(this),this.submitForm.addEventListener("submit",(function(e){e.preventDefault()}))}},{key:"open",value:function(e){F(G(a.prototype),"open",this).call(this),this.data=e,this.submitButton.textContent=this.submitButton.value}}])&&V(t.prototype,n),a}(f),M=new d(".info__title",".info__subtitle",".avatar-box__avatar"),K=new t({formSelector:".popup__content",inputSelector:".popup__text",submitButton:"btn-place",inputList:".popup__text",formPopup:".popup_type_place",activeButtonClass:"popup__button_condition_active",errorClass:"popup__error",invisibleClass:"invisible",openClass:"open"}),Q=new t({formSelector:".popup__content",inputSelector:".popup__text",inputList:".popup__text",submitButton:"btn-profile",formPopup:".popup_type_profile",activeButtonClass:"popup__button_condition_active",errorClass:"popup__error",invisibleClass:"invisible",openClass:"open"}),W=new t({formSelector:".popup__content",inputSelector:".popup__text",inputList:".popup__text",submitButton:"btn-avatar",formPopup:".popup_type_avatar",activeButtonClass:"popup__button_condition_active",errorClass:"popup__error",invisibleClass:"invisible",openClass:"open"}),X=new E(I,j,R),Y=new D({address:"https://mesto.nomoreparties.co/v1/cohort-24",headers:{authorization:"45fe691c-4e69-4960-96f4-c33130dd614b","Content-Type":"application/json"}}),Z=new y({renderer:function(e){var t=ie(e);Z.addItem(t.generateCard())},containerSelector:A}),$=new z({popup:T,submit:function(e){$.renderLoading(!0),Y.deleteCard(e._id).then((function(){return e.deleteCard()})).then((function(){$.close()})).catch((function(e){return console.error(e)})).finally((function(){return $.renderLoading(!1)}))}}),ee=new f({popup:C,submit:function(e){ee.renderLoading(!0),Y.setUserInfo(e).then((function(e){var t=e.name,n=e.about;M.setUserInfo({name:t,info:n})})).then((function(){ee.close()})).catch((function(e){return console.error(e)})).finally((function(){return ee.renderLoading(!1)}))}}),te=new f({popup:P,submit:function(e){te.renderLoading(!0),Y.submitCard(e.name,e.link).then((function(e){var t=ie(e);Z.addItem(t.generateCard())})).then((function(){te.close()})).catch((function(e){return console.error(e)})).finally((function(){return te.renderLoading(!1)}))}}),ne=new f({popup:x,submit:function(e){ne.renderLoading(!0),Y.setUserAvatar(e.link).then((function(e){M.setUserAvatar(e.avatar)})).then((function(){ne.close()})).catch((function(e){return console.error(e)})).finally((function(){return ne.renderLoading(!1)}))}});function re(e){$.open(e)}function oe(e,t){t?Y.likeCard(e).then((function(t){e.setLikes(t),e.toggleBtnLike()})).catch((function(e){return console.error(e)})):Y.unlikeCard(e).then((function(t){e.toggleBtnLike(),e.setLikes(t)})).catch((function(e){return console.error(e)}))}function ie(e){var t=M.getUserInfo().userId;return new r({data:e,template:".place",openPhoto:function(){return function(e){X.open(e)}(e)},openPopupConfirmation:re,handleLike:oe,userId:t})}Y.getUserInfo().then((function(e){M.setUserInfo({name:e.name,info:e.about,id:e._id}),M.setUserAvatar(e.avatar)})).then((function(){Y.getInitialCards().then((function(e){var t=e.reverse();Z.render(t)}))})).catch((function(e){return console.error(e)})),$.setEventListeners(),X.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),W.enableValidation(),Q.enableValidation(),K.enableValidation(),L.addEventListener("click",(function(){var e,t,n;t=(e=M.getUserInfo()).name,n=e.info,w.value=t,O.value=n,ee.open(),Q.resetErrors()})),q.addEventListener("click",(function(){te.open(),K.resetErrors()})),B.addEventListener("click",(function(){ne.open(),W.resetErrors()}))})();