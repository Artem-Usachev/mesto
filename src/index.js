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
    formValidation,
    popupProfileUserNameError,
    popupProfileUserInfoError,
    popupPlaceNameError,
    popupPlaceLinkError,
    popupPlaceInputName,
    popupPlaceInputLink
} from '../scripts/constants.js'
import '../pages/index.css';

const section = new Section({ items: reverseInitialCards, renderer: createCardElement }, '.places')
const userInfoInstance = new UserInfo('.info__title', '.info__subtitle');
const validationInputesPopups = new FormValidator(formValidation);

function handleCardClick(selector, imgSource, imgLabel) {
    const popup = new PopupWithImage(selector, imgSource, imgLabel);
    popup.open();
}

function createCardElement(data, template) {
    const card = new Card(data, template, (e) => handleCardClick('.popup_type_photo', e.target.src, e.target.alt));
    const cardElement = card.generateCard();
    section.addItem(cardElement);
}

function createNewPopupWithForm(selector, submitForm) {
    const popup = new PopupWithForm(selector, submitForm);
    popup.setEventListeners();
    popup.open();
};

function submitCardForm({ place, link }) {
    const card = new Card({ name: place, link }, '.place', (e) => handleCardClick('.popup_type_photo', e.target.src, e.target.alt));
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
    createNewPopupWithForm('.popup_type_profile', submitEditProfileForm);

    hiddenErrorInput(inputUserName, popupProfileUserNameError);
    hiddenErrorInput(inputUserInfo, popupProfileUserInfoError);
    disableSubmitButton(popupProfileBtnSubmit);
});


openAddCardPopupBtn.addEventListener('click', function() {
    createNewPopupWithForm('.popup_type_place', submitCardForm);
    hiddenErrorInput(popupPlaceInputName, popupPlaceNameError);
    hiddenErrorInput(popupPlaceInputLink, popupPlaceLinkError);
    disableSubmitButton(popupPlaceBtnSubmit);
});
validationInputesPopups.enableValidation();

section.render();