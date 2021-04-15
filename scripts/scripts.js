function openPopup(popupElement) {
    popupElement.classList.remove('invisible');
    addListenerEsc(popupElement);
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

function createCard(item) {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    placeElement.querySelector('.place__title').textContent = item.name;
    const placeElementImg = placeElement.querySelector('.place__illustration');
    placeElementImg.src = item.link
    placeElementImg.alt = item.name
    const placeDeleteButton = placeElement.querySelector('.place__delete');
    placeDeleteButton.addEventListener('click', function() {
        const cardDelete = placeDeleteButton.closest('.place');
        deleteCard(cardDelete);
    });
    placeElement.querySelector('.place__heart').addEventListener('click', e => toggleLike(e));
    placeElement.querySelector('.place__illustration').addEventListener('click', function() {
        openPhoto(item);
    });
    return placeElement
}

function addCard(item) {
    createCard(item);
    const card = createCard(item);
    places.prepend(card);
}

function renderCards() {
    reverseInitialCards.forEach(item => {
        addCard(item);
    })
}

function deleteCard(item) {
    item.remove();
}

function toggleLike(e) {
    e.target.classList.toggle('place__heart_active');
}

function openPhoto(item) {
    popupPhotoImg.src = item.link;
    popupPhotoImg.alt = item.name;
    photoSignature.textContent = item.name;
    openPopup(photoPopup);
}

function addNewCard() {
    const item = {
        name: popupPlaceName.value,
        link: popupPlaceLink.value
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
    hiddenErrorInput(popupProfileInputUserName, popupProfileUserNameError);
    hiddenErrorInput(popupProfileInputUserInfo, popupProfileUserInfoError);
    disableSubmitButton(popupProfileBtnSubmit);
});

popupPlaceForm.addEventListener('submit', addNewCard);

renderCards();

function disableSubmitButton(button) {
    button.setAttribute('disabled', 'disabled')
    button.classList.add('popup__button_condition_disable');
    button.classList.remove('popup__button_condition_active');


}

function addButtonVisibility(button) {
    button.removeAttribute('disabled')
    button.classList.remove('popup__button_condition_disable');
    button.classList.add('popup__button_condition_active');

}

function toggleButtonState(inputList, button) {
    if (hasInvalidInput(inputList)) {
        disableSubmitButton(button)
    } else {
        addButtonVisibility(button)
    }
};

function closeByEsc(e, popup) {
    if (e.key === 'Escape') {
        closePopup(popup)
    }
}

function addListenerEsc(popup) {
    document.addEventListener('keydown', e => closeByEsc(e, popup))
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
    popup.addEventListener('click', e => closeByOverlayClick(e));
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

function cancelPageReloadWhenSubmitForm(e) {
    e.preventDefault();
}