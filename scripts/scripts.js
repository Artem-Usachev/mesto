// work1
const openEditProfilePopupBtn = document.querySelector('.info__setting-box');
const popupProfile = document.querySelector('.popup_type_profile');
const popup = document.querySelectorAll('.popup');
const inputUserName = popupProfile.querySelector('input[name="name"]');
const inputUserInfo = popupProfile.querySelector('input[name="job"]');
const userName = document.querySelector('.info__title');
const userInfo = document.querySelector('.info__subtitle');
const popupProfileForm = document.querySelector('.popup__profile-form');
const popupCloseBtn = document.querySelectorAll('.popup__exit')

function openPopup(popupElement) {

    popupElement.classList.remove('invisible');
    addListenerEsc();
    addListenerClickPopup()
}

function closePopup(popupElement) {
    popupElement.classList.add('invisible');
    removeListenerEsc()
    removeListenerClickPopup()
}

function fillEditProfilePopupFields() {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
}

function submitEditProfileForm(e) {
    e.preventDefault();
    userInfo.textContent = inputUserInfo.value;
    userName.textContent = inputUserName.value;
    closePopup(popupProfile);
    removeButtonVisible(profileBtn);

}
openEditProfilePopupBtn.addEventListener('click', function() {
    fillEditProfilePopupFields();
    hiddenErrorInput()
    openPopup(popupProfile, popupProfileForm);
});

popupCloseBtn.forEach((closeButton) =>
    closeButton.addEventListener('click', function() {
        const popup = closeButton.closest('.popup');
        closePopup(popup);
    }));;
popupProfile.addEventListener('submit', submitEditProfileForm);

// work2
// open popupPlace
const popupPlace = document.querySelector('.popup_type_place');
const openAddCardPopupBtn = document.querySelector('.add-button');
const reverseInitialCards = initialCards.reverse();
const photoPopup = document.querySelector('.popup_type_photo');
const places = document.querySelector('.places');
const placeTemplate = document.querySelector('.place-template').content;
const popupPlaceName = document.querySelector('.popup__place-name');
const popupPlaceLink = document.querySelector('.popup__place-link');
const popupPlaceForm = document.querySelector('.popup__place-form');
const popupPhotoImg = document.querySelector('.popup__illustration');

function getCardElement(item) {
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
    placeElement.querySelector('.place__title').textContent = item.name;
    const placeElementImg = placeElement.querySelector('.place__illustration');
    placeElementImg.src = item.link
    placeElementImg.alt = item.name
    placeElement.querySelectorAll('.place__delete').forEach((placeDeleteButton) =>
        placeDeleteButton.addEventListener('click', function() {
            const cardDelete = placeDeleteButton.closest('.place');
            deleteCard(cardDelete);
        }));
    placeElement.querySelector('.place__heart').addEventListener('click', e => addLike(e));
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
        getCardElement(item);
    })
}

function deleteCard(item) {
    item.remove();
}

function addLike(e) {
    e.target.classList.toggle('place__heart_active');

}

function openPhoto(item) {
    popupPhotoImg.src = item.link;
    popupPhotoImg.alt = item.name;
    document.querySelector('.popup__signature').textContent = item.name;
    openPopup(photoPopup);
}

function addNewCard(e) {
    e.preventDefault();
    let item = {
        name: popupPlaceName.value,
        link: popupPlaceLink.value
    }
    getCardElement(item)
    closePopup(popupPlace);
    removeButtonVisible(placeBtn);
    popupPlaceForm.reset();

}
openAddCardPopupBtn.addEventListener('click', function() {
    popupPlaceForm.reset();
    removeButtonVisible(placeBtn);
    openPopup(popupPlace);
    hiddenErrorInput();
});
popupPlaceForm.addEventListener('submit', addNewCard);

renderCards();
//work3
const errorTextInput = document.querySelectorAll('.text-error');

function removeButtonVisible(button) {
    button.setAttribute('disabled', "disabled")
    button.classList.add('popup__button_condition_disable');
    button.classList.remove('popup__button_condition_active');
}

function addButtonVisible(button) {
    button.removeAttribute('disabled')
    button.classList.remove('popup__button_condition_disable');
    button.classList.add('popup__button_condition_active');
}

function toggleButtonState(inputList, button) {

    if (hasInvalidInput(inputList)) {
        removeButtonVisible(button)
    } else {
        addButtonVisible(button)
    }

};

function createEscCloseBtn(e) {
    if (e.keyCode === 27) {
        closePopup(popupPlace)
        closePopup(popupProfile)
        closePopup(photoPopup)
    }
}

function addListenerEsc() {
    document.addEventListener('keydown', e => createEscCloseBtn(e))
}

function removeListenerEsc() {
    document.removeEventListener('keydown', e => createEscCloseBtn(e))
}

function createClickPopupClosing(e) {

    if (e.target.classList.contains('popup')) {
        closePopup(e.target);
    }
}

function addListenerClickPopup() {
    popup.forEach((popup) => {
        popup.addEventListener('click', e => createClickPopupClosing(e));
    })
}

function removeListenerClickPopup() {
    popup.forEach((popup) => {
        popup.removeEventListener('click', e => createClickPopupClosing(e));
    })
}

function hiddenErrorInput() {
    formInputes.forEach((error) => {
        error.classList.remove('popup__error');
    })
    errorTextInput.forEach((error) => {
        error.classList.add('invisible');
    })
}