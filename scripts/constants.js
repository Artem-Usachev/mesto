const openEditProfilePopupBtn = document.querySelector('.info__setting-box');
const popupProfile = document.querySelector('.popup_type_profile');
const popup = document.querySelectorAll('.popup');
const popupProfileBtnSubmit = document.querySelector('.popup__button_type_profile');
const popupPlaceBtnSubmit = document.querySelector('.popup__button_type_place');
const inputUserName = popupProfile.querySelector('input[name="name"]');
const inputUserInfo = popupProfile.querySelector('input[name="job"]');
const userName = document.querySelector('.info__title');
const userInfo = document.querySelector('.info__subtitle');
const popupProfileForm = document.querySelector('.popup__profile-form');
const popupCloseBtn = document.querySelectorAll('.popup__exit')
const popupPlace = document.querySelector('.popup_type_place');
const openAddCardPopupBtn = document.querySelector('.add-button');
const reverseInitialCards = initialCards.reverse();
const photoPopup = document.querySelector('.popup_type_photo');
const places = document.querySelector('.places');
const placeTemplate = document.querySelector('.place-template').content;
const popupPlaceForm = document.querySelector('.popup__place-form');
const popupPhotoImg = document.querySelector('.popup__illustration');
const photoSignature = document.querySelector('.popup__signature');
const errorTextInput = document.querySelectorAll('.text-error');
const mestoPopups = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    submitButtonSelectorPlace: 'btn-place',
    submitButtonSelectorProfile: 'btn-profile',
    inputListProfileSelector: '.popup__text',
    inputListPlaceSelector: '.popup__text',
    formPopupPlace: '.popup_type_place',
    formPopupProfile: '.popup_type_profile',
    submitButtonSelector: '.popup__button'
}
const popupProfileUserNameError = document.querySelector('.user-name-error');
const popupProfileUserInfoError = document.querySelector('.user-info-error');
const popupPlaceNameError = document.querySelector('.place-name-error');
const popupPlaceLinkError = document.querySelector('.place-link-error');
const popupPlaceInputName = document.querySelector('.popup__place-name');
const popupPlaceInputLink = document.querySelector('.popup__place-link');
const popupProfileInputUserName = document.querySelector('.popup__user-name');
const popupProfileInputUserInfo = document.querySelector('.popup__user-info');