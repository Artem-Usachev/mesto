// work1
const openButton = document.querySelector('.info__setting-box');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__exit');
const inputUserName = popup.querySelector('input[name="name"]');
const inputUserInfo = popup.querySelector('input[name="job"]');
const userName = document.querySelector('.info__title');
const userInfo = document.querySelector('.info__subtitle');


function openPopup(popupElement) {
    inputUserName.value = userName.innerText;
    inputUserInfo.value = userInfo.innerText;
    popupElement.classList.remove('invisible');
}

function closePopup(popupElement) {
    popupElement.classList.add('invisible');
}

function clickHeandlerInfo(e) {
    e.preventDefault();
    userInfo.textContent = inputUserInfo.value;
    userName.textContent = inputUserName.value;
    closePopup(popup);
}

openButton.addEventListener('click', function() {
    openPopup(popup);
});
closeButton.addEventListener('click', function() {
    closePopup(popup);
});
popup.addEventListener('submit', (e) => clickHeandlerInfo(e));


// work2
// open popupPlace
const popupPlace = document.querySelector('.popup_place');
const openButtonPlace = document.querySelector('.add-button');
const closeButtonPlace = document.querySelector('.popup__exit_place');
closeButtonPlace.addEventListener('click', function() {
    closePopup(popupPlace);
})
openButtonPlace.addEventListener('click', function() {
    openPopup(popupPlace);
});
// load cards
const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
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
const places = document.querySelector('.places');
const cards = initialCards.forEach(function(item) {
    const card = document.querySelector('.place_template').content;
    const conteiner = card.cloneNode(true);
    const cardTitle = conteiner.querySelector('.place__title');
    const cardImg = conteiner.querySelector('.place__illustration');
    cardTitle.textContent = item.name;
    cardImg.src = item.link;
    places.prepend(conteiner)
    cardImg.addEventListener('click', function() {
        // openPopup(popupPlace);
    });
})