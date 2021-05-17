import { initialCards } from './initial-сards.js'
export const openEditProfilePopupBtn = document.querySelector('.info__setting-box');
export const popupProfile = document.querySelector('.popup_type_profile');
export const inputUserName = popupProfile.querySelector('input[name="name"]');
export const inputUserInfo = popupProfile.querySelector('input[name="job"]');
export const popupPlace = document.querySelector('.popup_type_place');
export const openAddCardPopupBtn = document.querySelector('.add-button');
export const reverseInitialCards = initialCards.reverse();
export const photoPopup = document.querySelector('.popup_type_photo');
export const popupPhotoImg = document.querySelector('.popup__illustration');
export const photoSignature = document.querySelector('.popup__signature');
export const formValidationPopupProfile = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    inputList: '.popup__text',
    submitButton: 'btn-profile',
    formPopup: '.popup_type_profile',
    activeButtonClass: 'popup__button_condition_active',
    errorClass: 'popup__error',
    invisibleClass: 'invisible',
    openClass: 'open'
}
export const formValidationPopupPlace = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    submitButton: 'btn-place',
    inputList: '.popup__text',
    formPopup: '.popup_type_place',
    activeButtonClass: 'popup__button_condition_active',
    errorClass: 'popup__error',
    invisibleClass: 'invisible',
    openClass: 'open'
}