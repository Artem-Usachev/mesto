export const popupProfile = document.querySelector('.popup_type_profile');
export const inputUserName = popupProfile.querySelector('input[name="name"]');
export const inputUserInfo = popupProfile.querySelector('input[name="about"]');
export const popupPlace = document.querySelector('.popup_type_place');
export const openAddCardPopupBtn = document.querySelector('.add-button');
export const photoPopup = document.querySelector('.popup_type_photo');
export const popupPhotoImg = document.querySelector('.popup__illustration');
export const photoSignature = document.querySelector('.popup__signature');
export const avatarBtn = document.querySelector('.avatar-box')
export const avatarPopup = document.querySelector('.popup_type_avatar')
export const confirmationPopup = document.querySelector('.popup_type_confirmation')
export const popupPlaceSubmitForm = document.querySelector('.popup__place-form')
export const popupProfileSubmitForm = document.querySelector('.popup__profile-form')
export const popupAvatarSubmitForm = document.querySelector('.popup__avatar-form')
export const popupConfirmationSubmitForm = document.querySelector('.popup__confirmation-form')
export const cardsContainer = document.querySelector('.places')
export const formValidationPopupAvatar = {
    formSelector: '.popup__content',
    inputSelector: '.popup__text',
    inputList: '.popup__text',
    submitButton: 'btn-avatar',
    formPopup: '.popup_type_avatar',
    activeButtonClass: 'popup__button_condition_active',
    errorClass: 'popup__error',
    invisibleClass: 'invisible',
    openClass: 'open'
}
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