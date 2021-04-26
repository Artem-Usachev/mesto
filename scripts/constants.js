import { initialCards } from './initial-сards.js'
export const openEditProfilePopupBtn = document.querySelector('.info__setting-box');
export const popupProfile = document.querySelector('.popup_type_profile');
export const popupProfileBtnSubmit = document.querySelector('.popup__button_type_profile');
export const popupPlaceBtnSubmit = document.querySelector('.popup__button_type_place');
export const inputUserName = popupProfile.querySelector('input[name="name"]');
export const inputUserInfo = popupProfile.querySelector('input[name="job"]');
export const userName = document.querySelector('.info__title');
export const userInfo = document.querySelector('.info__subtitle');
export const popupCloseBtn = document.querySelectorAll('.popup__exit')
export const popupPlace = document.querySelector('.popup_type_place');
export const openAddCardPopupBtn = document.querySelector('.add-button');
export const reverseInitialCards = initialCards.reverse();
export const photoPopup = document.querySelector('.popup_type_photo');
export const places = document.querySelector('.places');
export const placeTemplate = document.querySelector('.place-template').content;
export const popupPlaceForm = document.querySelector('.popup__place-form');
export const popupPhotoImg = document.querySelector('.popup__illustration');
export const photoSignature = document.querySelector('.popup__signature');
export const errorTextInput = document.querySelectorAll('.text-error');
export const formValidation = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    submitButtonPlace: 'btn-place',
    inputList: '.popup__text',
    formPopupPlace: '.popup_type_place',
    submitButtonProfile: 'btn-profile',
    formPopupProfile: '.popup_type_profile',
    activeButtonClass: 'popup__button_condition_active',
    errorClass: 'popup__error',
    invisibleClass: 'invisible',
    openClass: 'open'
}
export const popupProfileUserNameError = document.querySelector('.user-name-error');
export const popupProfileUserInfoError = document.querySelector('.user-info-error');
export const popupPlaceNameError = document.querySelector('.place-name-error');
export const popupPlaceLinkError = document.querySelector('.place-link-error');
export const popupPlaceInputName = document.querySelector('.popup__place-name');
export const popupPlaceInputLink = document.querySelector('.popup__place-link');