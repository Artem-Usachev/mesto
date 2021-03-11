let openButton = document.querySelector('.info__setting-box');
let closeButton = document.querySelector('.popup__exit-img');
let popup = document.querySelector('.popup');

popup.classList.add('invisible');

function addVisiblePopup() {
    popup.classList.remove('invisible');
}
openButton.addEventListener('click', addVisiblePopup);

function closePopup() {
    popup.classList.add('invisible');
}

closeButton.addEventListener('click', closePopup);