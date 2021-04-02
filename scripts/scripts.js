// work1
const openButton = document.querySelector('.info__setting-box');
const popupProfile = document.querySelector('.popup_type_profile');
const popup = document.querySelector('.popup');
const inputUserName = popupProfile.querySelector('input[name="name"]');
const inputUserInfo = popupProfile.querySelector('input[name="job"]');
const userName = document.querySelector('.info__title');
const userInfo = document.querySelector('.info__subtitle');

function openPopup(popupElement) {
    popupElement.classList.remove('invisible');
}

function closePopup(popupElement) {
    popupElement.classList.add('invisible');
}

function addPopupText() {
    inputUserName.value = userName.textContent;
    inputUserInfo.value = userInfo.textContent;
}

function clickHeandlerInfo(e) {
    e.preventDefault();
    userInfo.textContent = inputUserInfo.value;
    userName.textContent = inputUserName.value;
    closePopup(popupProfile);
}
openButton.addEventListener('click', function() {
    addPopupText();
    openPopup(popupProfile);
});
document.querySelectorAll('.popup__exit').forEach((closeButton) =>
    closeButton.addEventListener('click', function() {
        const popup = closeButton.closest('.popup');
        closePopup(popup);
    }));;
popupProfile.addEventListener('submit', clickHeandlerInfo);

// work2
// open popupPlace
const popupPlace = document.querySelector('.popup_type_place');
const openButtonPlace = document.querySelector('.add-button');
openButtonPlace.addEventListener('click', function() {
    openPopup(popupPlace);
});
// add cards massiv
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Урал',
        link: 'https://images.unsplash.com/photo-1503943196655-59560afb7902?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1363&q=80'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
const reverseInitialCards = initialCards.reverse();
const photoPopup = document.querySelector('.popup_type_photo');
const places = document.querySelector('.places');
const placeTemplate = document.querySelector('.place-template').content;
const popupPlaceName = document.querySelector('.popup__place-name');
const popupPlaceLink = document.querySelector('.popup__place-link');
const popupPlaceForm = document.querySelector('.popup__place-form');

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
    const popupPhotoImg = document.querySelector('.popup__illustration');
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
    popupPlaceForm.reset();

}
popupPlaceForm.addEventListener('submit', addNewCard);
renderCards();