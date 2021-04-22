import { Card } from './Card'
import { FormValidator } from './FormValidator'

const valid = new FormValidator(validationConfig);
valid.enableValidation()

function openPopup(popupElement) {
    popupElement.classList.remove('invisible');
    addListenerEsc();
    addListenerClickPopup(popupElement);
}

function closePopup(popupElement) {
    popupElement.classList.add('invisible');
    removeListenerEsc();
    removeListenerClickPopup(popupElement);
}


function fillEditProfilePopupFields() {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
}

function submitEditProfileForm() {
    userInfo.textContent = inputUserInfo.value;
    userName.textContent = inputUserName.value;
    closePopup(popupProfile);
}


popupCloseBtn.forEach((closeButton) => {
    closeButton.addEventListener('click', function() {
        const popup = closeButton.closest('.popup');
        closePopup(popup);
    })
});
popupProfile.addEventListener('submit', submitEditProfileForm);

function addCard(item) {
    const card = new Card(item.name, item.link);
    const place = card.createCard();
    places.prepend(place);
}

function renderCards() {
    reverseInitialCards.forEach(item => {
        addCard(item);
    })
}



function addNewCard() {
    const item = {
        name: popupPlaceInputName.value,
        link: popupPlaceInputLink.value
    }
    addCard(item);
    closePopup(popupPlace);
    popupPlaceForm.reset();
}

openAddCardPopupBtn.addEventListener('click', function() {
    popupPlaceForm.reset();
    openPopup(popupPlace);
    hiddenErrorInput(popupPlaceInputName, popupPlaceNameError);
    hiddenErrorInput(popupPlaceInputLink, popupPlaceLinkError);
    disableSubmitButton(popupPlaceBtnSubmit);
});
openEditProfilePopupBtn.addEventListener('click', function() {
    fillEditProfilePopupFields();
    openPopup(popupProfile);
    hiddenErrorInput(inputUserName, popupProfileUserNameError);
    hiddenErrorInput(inputUserInfo, popupProfileUserInfoError);
    disableSubmitButton(popupProfileBtnSubmit);
});

popupPlaceForm.addEventListener('submit', addNewCard);

renderCards();

function disableSubmitButton(button) {
    button.setAttribute('disabled', 'disabled')
    button.classList.add('popup__button_condition_disable');
    button.classList.remove('popup__button_condition_active');
}

function closeByEsc(e) {
    const popupOpen = document.querySelector(".popup:not(.invisible)")
    if (e.key === 'Escape') {
        closePopup(popupOpen)
    }
}


function addListenerEsc() {
    document.addEventListener('keydown', closeByEsc)
}

function removeListenerEsc() {
    document.removeEventListener('keydown', closeByEsc);
}

function closeByOverlayClick(e) {
    if (e.target.classList.contains('popup')) {
        closePopup(e.target);
    }
}

function addListenerClickPopup(popup) {
    popup.addEventListener('click', closeByOverlayClick);
}

function removeListenerClickPopup(popup) {
    popup.removeEventListener('click', closeByOverlayClick);
}

function hiddenErrorInput(errorPopupInputBorder, errorText) {
    if (errorPopupInputBorder.classList.contains('open')) {
        errorPopupInputBorder.classList.remove('popup__error');
    }

    if (errorText.classList.contains('open')) {
        errorText.classList.add('invisible');
    }
}