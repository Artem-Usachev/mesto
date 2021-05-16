import { FormValidator } from '../scripts/FormValidator.js'
import { Card } from '../scripts/Card.js'
import { PopupWithForm } from '../scripts/PopupWithForm';
import { UserInfo } from '../scripts/UserInfo';
import { Section } from '../scripts/Section';
import { PopupWithImage } from '../scripts/PopupWithImage';
import {
    openEditProfilePopupBtn,
    popupProfileBtnSubmit,
    popupPlaceBtnSubmit,
    inputUserName,
    inputUserInfo,
    openAddCardPopupBtn,
    reverseInitialCards,
    popupProfileUserNameError,
    popupProfileUserInfoError,
    popupPlaceNameError,
    popupPlaceLinkError,
    popupPlaceInputName,
    popupPlaceInputLink,
    popupPhotoImg,
    photoSignature,
    popupProfile,
    popupPlace,
    photoPopup,
    formValidationPopupPlace,
    formValidationPopupProfile

} from '../scripts/constants.js'
import '../pages/index.css';

const section = new Section({ items: reverseInitialCards, renderer: createCardElement }, '.places')
const userInfoInstance = new UserInfo('.info__title', '.info__subtitle');
const validationInputesPopupPlace = new FormValidator(formValidationPopupPlace);
const validationInputesPopupProfile = new FormValidator(formValidationPopupProfile)
const popupWithImage = new PopupWithImage(photoPopup, popupPhotoImg, photoSignature);
const popupProfileForm = new PopupWithForm(popupProfile, submitEditProfileForm);
const popupPlaceForm = new PopupWithForm(popupPlace, submitCardForm);

function handleCardClick(data) {
    popupWithImage.open(data);
}

function createCardElement(data, template) {
    const card = new Card(data, template, () => handleCardClick(data));
    const cardElement = card.generateCard();
    section.addItem(cardElement);
}

function submitCardForm({ place, link }) {
    const card = new Card({ name: place, link }, '.place', () => handleCardClick({ name: place, link }));
    const element = card.generateCard();
    section.addItem(element);
}

function submitEditProfileForm({ name, job }) {
    userInfoInstance.setUserInfo(name, job);
}

function fillEditProfilePopupFields() {
    const { name, info } = userInfoInstance.getUserInfo();
    inputUserName.value = name;
    inputUserInfo.value = info;
}

function disableSubmitButton(button) {
    button.setAttribute('disabled', 'disabled')
    button.classList.remove('popup__button_condition_active');
}

function hiddenErrorInput(errorPopupInputBorder, errorText) {
    if (errorPopupInputBorder.classList.contains('open')) {
        errorPopupInputBorder.classList.remove('popup__error');
    }

    if (errorText.classList.contains('open')) {
        errorText.classList.add('invisible');
    }
}
openEditProfilePopupBtn.addEventListener('click', function() {
    fillEditProfilePopupFields();
    popupProfileForm.open();
    hiddenErrorInput(inputUserName, popupProfileUserNameError);
    hiddenErrorInput(inputUserInfo, popupProfileUserInfoError);
    disableSubmitButton(popupProfileBtnSubmit);
});

openAddCardPopupBtn.addEventListener('click', function() {
    popupPlaceForm.open()
    hiddenErrorInput(popupPlaceInputName, popupPlaceNameError);
    hiddenErrorInput(popupPlaceInputLink, popupPlaceLinkError);
    disableSubmitButton(popupPlaceBtnSubmit);
});
popupWithImage.setEventListeners()
popupProfileForm.setEventListeners()
popupPlaceForm.setEventListeners()
validationInputesPopupPlace.enableValidation();
validationInputesPopupProfile.enableValidation();
section.render();