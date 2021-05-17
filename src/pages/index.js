import { FormValidator } from '../scripts/FormValidator.js'
import { Card } from '../scripts/Card.js'
import { PopupWithForm } from '../scripts/PopupWithForm';
import { UserInfo } from '../scripts/UserInfo';
import { Section } from '../scripts/Section';
import { PopupWithImage } from '../scripts/PopupWithImage';
import {
    openEditProfilePopupBtn,
    inputUserName,
    inputUserInfo,
    openAddCardPopupBtn,
    reverseInitialCards,
    popupPhotoImg,
    photoSignature,
    popupProfile,
    popupPlace,
    photoPopup,
    formValidationPopupPlace,
    formValidationPopupProfile

} from '../scripts/constants.js'
import '../pages/index.css';

const section = new Section({ items: reverseInitialCards, renderer: addNewCard }, '.places')
const userInfoInstance = new UserInfo('.info__title', '.info__subtitle');
const validationInputesPopupPlace = new FormValidator(formValidationPopupPlace);
const validationInputesPopupProfile = new FormValidator(formValidationPopupProfile)
const popupWithImage = new PopupWithImage(photoPopup, popupPhotoImg, photoSignature);
const popupProfileForm = new PopupWithForm(popupProfile, submitEditProfileForm);
const popupPlaceForm = new PopupWithForm(popupPlace, addNewCard);

function handleCardClick(data) {
    popupWithImage.open(data);
}

function addNewCard(data) {
    const card = new Card(data, '.place', () => handleCardClick(data));
    const cardElement = card.generateCard();
    section.addItem(cardElement);
}

function submitEditProfileForm({ name, job }) {
    userInfoInstance.setUserInfo(name, job);
}

function fillEditProfilePopupFields() {
    const { name, info } = userInfoInstance.getUserInfo();
    inputUserName.value = name;
    inputUserInfo.value = info;
}

openEditProfilePopupBtn.addEventListener('click', function() {
    fillEditProfilePopupFields();
    popupProfileForm.open();
    validationInputesPopupProfile.resetErrors();

});

openAddCardPopupBtn.addEventListener('click', function() {
    popupPlaceForm.open();
    validationInputesPopupPlace.resetErrors();

});
popupWithImage.setEventListeners()
popupProfileForm.setEventListeners()
popupPlaceForm.setEventListeners()
validationInputesPopupPlace.enableValidation();
validationInputesPopupProfile.enableValidation();
section.render();