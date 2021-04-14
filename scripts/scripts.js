function openPopup(popupElement) {
    popupElement.classList.add('open')
    popupElement.classList.remove('invisible');
    addListenerEsc();
    addListenerClickPopup();
}

function closePopup() {
    popup.forEach((popup) => {
        if (popup.classList.contains('open')) {
            popup.classList.add('invisible');
            popup.classList.remove('open')
            removeListenerEsc()
            removeListenerClickPopup()
        }
    })

}

function fillEditProfilePopupFields() {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
}

function submitEditProfileForm(e) {
    e.preventDefault();
    userInfo.textContent = inputUserInfo.value;
    userName.textContent = inputUserName.value;
    closePopup();
}


popupCloseBtn.forEach((closeButton) =>
    closeButton.addEventListener('click', function() {
        if (closeButton.closest('.popup')) {
            closePopup();
        }
    }));
popupProfile.addEventListener('submit', submitEditProfileForm);

function createCard(item) {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    placeElement.querySelector('.place__title').textContent = item.name;
    const placeElementImg = placeElement.querySelector('.place__illustration');
    placeElementImg.src = item.link
    placeElementImg.alt = item.name
    return placeElement
}

function addCard(item) {
    const placeElement = createCard(item);
    const placeDeleteButton = placeElement.querySelector('.place__delete');
    placeDeleteButton.addEventListener('click', function() {
        const cardDelete = placeDeleteButton.closest('.place');
        deleteCard(cardDelete);
    });
    placeElement.querySelector('.place__heart').addEventListener('click', e => toggleLike(e));
    placeElement.querySelector('.place__illustration').addEventListener('click', function() {
        openPhoto(item);
    });
    addCards(placeElement)
}

function addCards(item) {
    places.prepend(item);
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

function addNewCard(e) {
    e.preventDefault();
    const item = {
        name: popupPlaceName.value,
        link: popupPlaceLink.value
    }
    addCard(item)
    closePopup();
    popupPlaceForm.reset();
}

function addOpenBtnPopupsFormsEventListener(popupPlace, popupProfile, formInputes, profileBtn, placeBtn) {
    openAddCardPopupBtn.addEventListener('click', function() {
        popupPlaceForm.reset();
        openPopup(popupPlace);
        hiddenErrorInput(formInputes);
        disableSubmitButton(placeBtn);
    });
    openEditProfilePopupBtn.addEventListener('click', function() {
        fillEditProfilePopupFields();
        hiddenErrorInput(formInputes)
        openPopup(popupProfile);
        disableSubmitButton(profileBtn);
    });
}

popupPlaceForm.addEventListener('submit', addNewCard);

renderCards();

function disableSubmitButton(button) {
    button.setAttribute('disabled', "disabled")
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

function closeByEsc(e) {
    if (e.key === 'Escape') {
        closePopup()
    }
}

function addListenerEsc() {
    popup.forEach((popup) => {
        if (popup.classList.contains('open')) {
            document.addEventListener('keydown', e => closeByEsc(e))
        }
    })
}

function removeListenerEsc() {
    popup.forEach((popup) => {
        if (popup.classList.contains('invisible')) {
            document.removeEventListener('keydown', closeByEsc);
        }
    })
}

function closeByOverlayClick(e) {
    if (e.target.classList.contains('popup')) {
        closePopup();
    }
}

function addListenerClickPopup() {
    popup.forEach((popup) => {
        if (popup.classList.contains('open')) {
            popup.addEventListener('click', e => closeByOverlayClick(e));
        }
    })
}

function removeListenerClickPopup() {
    popup.forEach((popup) => {
        if (popup.classList.contains('invisible')) {
            popup.removeEventListener('click', closeByOverlayClick);
        }
    })
}

function hiddenErrorInput(formInputes) {
    formInputes.forEach((error) => {
        if (error.classList.contains('open')) {
            error.classList.remove('popup__error');
        }
    })
    errorTextInput.forEach((error) => {
        if (error.classList.contains('open')) {
            error.classList.add('invisible');
        }
    })
}