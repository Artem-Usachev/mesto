import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { PopupWithForm } from '../components/PopupWithForm';
import { UserInfo } from '../components/UserInfo';
import { Section } from '../components/Section';
import { PopupWithImage } from '../components/PopupWithImage';
import {
    cardsContainer,
    confirmationPopup,
    formValidationPopupAvatar,
    avatarPopup,
    avatarBtn,
    inputUserName,
    inputUserInfo,
    openAddCardPopupBtn,
    popupPhotoImg,
    photoSignature,
    popupProfile,
    popupPlace,
    photoPopup,
    formValidationPopupPlace,
    formValidationPopupProfile
} from '../components/constants.js'
import '../pages/index.css';
import { Api } from '../components/Api.js'
import { PopupConfirmation } from '../components/PopupConfirmation.js';
import { openEditProfilePopupBtn } from '../utils/openEditProfilePopupBtn'
const userInfoInstance = new UserInfo('.info__title', '.info__subtitle', '.avatar-box__avatar');
const validationInputesPopupPlace = new FormValidator(formValidationPopupPlace);
const validationInputesPopupProfile = new FormValidator(formValidationPopupProfile);
const validationInputesPopupAvatar = new FormValidator(formValidationPopupAvatar);
const popupWithImage = new PopupWithImage(photoPopup, popupPhotoImg, photoSignature);
const api = new Api({
    address: 'https://mesto.nomoreparties.co/v1/cohort-24',
    headers: {
        authorization: '45fe691c-4e69-4960-96f4-c33130dd614b',
        "Content-Type": 'application/json',
    },
});

function createSection(items) {
    const section = new Section({
        items: items,
        renderer: (data) => {
            const card = addNewCard(data);
            section.addItem(card.generateCard());
        },
        containerSelector: cardsContainer
    });
    return section
}
const popupConfirmationForm = new PopupConfirmation({
    popup: confirmationPopup,
    submit: (data) => {
        popupConfirmationForm.renderLoading(true)
        api
            .deleteCard(data._id)
            .then(() => data.deleteCard())
            .then(() => {
                popupConfirmationForm.close()
            })
            .catch((err) => console.error(err))
            .finally(() => popupConfirmationForm.renderLoading(false))
    },

})
const popupProfileForm = new PopupWithForm({
    popup: popupProfile,
    submit: (data) => {
        popupProfileForm.renderLoading(true)
        api
            .setUserInfo(data)
            .then((res) => {
                const {
                    name,
                    about,
                } = res;
                userInfoInstance.setUserInfo({ name: name, info: about })
            })
            .then(() => {
                popupProfileForm.close()
            })
            .catch((err) => console.error(err))
            .finally(() => popupProfileForm.renderLoading(false))
    }
});
const popupPlaceForm = new PopupWithForm({
    popup: popupPlace,
    submit: (data) => {
        popupPlaceForm.renderLoading(true)
        api
            .submitCard(data.name, data.link)
            .then((res) => {
                const card = addNewCard(res)
                const section = createSection(card)
                section.addItem(card.generateCard());
            })
            .then(() => {
                popupPlaceForm.close()
            })
            .catch((err) => console.error(err))
            .finally(() => popupPlaceForm.renderLoading(false))
    }
});
const popupAvatarForm = new PopupWithForm({
    popup: avatarPopup,
    submit: (data) => {
        popupAvatarForm.renderLoading(true)
        api.setUserAvatar(data.link)
            .then((res) => {
                userInfoInstance.setUserAvatar(res.avatar)
            })
            .then(() => {
                popupAvatarForm.close()
            })
            .catch((err) => console.error(err))
            .finally(() => popupAvatarForm.renderLoading(false))
    }
})

function handleCardClick(data) {
    popupWithImage.open(data);
}

function handleDeleteBtnClick(data) {
    popupConfirmationForm.open(data)
}

function fillEditProfilePopupFields() {
    const { name, info } = userInfoInstance.getUserInfo();
    inputUserName.value = name;
    inputUserInfo.value = info;
}

function toggleLike(card, comparisonID) {
    if (comparisonID) {
        api
            .likeCard(card)
            .then((res) => {
                card.setLikes(res);
                card.toggleBtnLike()
            })
            .catch((err) => console.error(err))
    } else {
        api
            .unlikeCard(card)
            .then((res) => {
                card.toggleBtnLike()
                card.setLikes(res);
            })
            .catch((err) => console.error(err))
    }
}

function addNewCard(data) {
    const { userId } = userInfoInstance.getUserInfo();
    return new Card({
        data: data,
        template: '.place',
        openPhoto: () => handleCardClick(data),
        openPopupConfirmation: handleDeleteBtnClick,
        handleLike: toggleLike,
        userId: userId,
    });
};

api.getUserInfo().then(res => {
    userInfoInstance.setUserInfo({
        name: res.name,
        info: res.about,
        id: res._id
    })
    userInfoInstance.setUserAvatar(res.avatar)
}).then(() => {
    api.getInitialCards().then((res) => {
        const cards = res.reverse()
        const section = createSection(cards)
        section.render()
    })
}).catch((err) => console.error(err))



popupConfirmationForm.setEventListeners()
popupWithImage.setEventListeners()
popupProfileForm.setEventListeners()
popupPlaceForm.setEventListeners();
popupAvatarForm.setEventListeners()
validationInputesPopupAvatar.enableValidation()
validationInputesPopupProfile.enableValidation();
validationInputesPopupPlace.enableValidation();

openEditProfilePopupBtn.addEventListener('click', function() {
    fillEditProfilePopupFields();
    popupProfileForm.open();
    validationInputesPopupProfile.resetErrors();

});

openAddCardPopupBtn.addEventListener('click', function() {
    popupPlaceForm.open();
    validationInputesPopupPlace.resetErrors();
});

avatarBtn.addEventListener('click', () => {
    popupAvatarForm.open();
    validationInputesPopupAvatar.resetErrors()
})