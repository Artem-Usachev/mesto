import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { PopupWithForm } from '../components/PopupWithForm';
import { UserInfo } from '../components/UserInfo';
import { Section } from '../components/Section';
import { PopupWithImage } from '../components/PopupWithImage';
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

} from '../components/constants.js'
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