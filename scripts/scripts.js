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
popup.addEventListener('submit', clickHeandlerInfo);


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

const photo = document.querySelector('.photo_template');
const avatar = document.querySelector('.avatar');
const photoExit = document.querySelector('.photo__exit');
photoExit.addEventListener('click', function() {
    photo.classList.add('invisible');
})
const places = document.querySelector('.places');

function addPlaceTemplate(title, link) {
    const placeTemplate = document.querySelector('.place_template').content;
    const placeElement = placeTemplate.querySelector('.place').cloneNode(true);

    placeElement.querySelector('.place__title').textContent = title;
    placeElement.querySelector('.place__illustration').src = link;
    placeElement.querySelectorAll('.place__delete').forEach((placeDeleteButton) =>
        placeDeleteButton.addEventListener('click', function() {
            const placeDelete = placeDeleteButton.closest('.place');
            placeDelete.remove();
        }));
    // addLike
    placeElement.querySelector('.place__heart').addEventListener('click', function(e) {
        e.target.classList.add('place__heart_active')
    });
    // openPhoto
    placeElement.querySelector('.place__illustration').addEventListener('click', function(e) {
        photo.classList.remove('invisible');
        document.querySelector('.photo__illustration').src = link;
        document.querySelector('.photo__text').textContent = title;
    });
    places.append(placeElement);
}

function clearCards() {
    const cards = document.querySelectorAll('.place');
    cards.forEach((card) => card.remove());
}

function cardsRender() {
    clearCards();
    initialCards.forEach(function(item) {
        addPlaceTemplate(item.name, item.link);
    })
}

function addNewPlace(e) {
    e.preventDefault();
    const newPlaceTitle = document.querySelector('.popup__place-name').value;
    const newPlaceLink = document.querySelector('.popup__place-link').value;
    const newPlace = {
        name: newPlaceTitle,
        link: newPlaceLink,
    }

    initialCards.unshift(newPlace);
    closePopup(popupPlace);

    cardsRender();
}

const newPlaceForm = document.querySelector('.popup__place-form');
newPlaceForm.addEventListener('submit', addNewPlace);

cardsRender();