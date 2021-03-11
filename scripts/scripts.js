// open Popup
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



// write nex text
let inputUserName = document.querySelector('.popup__userName');
let inputUserInfo = document.querySelector('.popup__userInfo');
let userName = document.querySelector('.info__title');
let userInfo = document.querySelector('.info__subtitle');
console.log(inputUserName.textContent);
console.log(userInfo.textContent);

inputUserName.insertAdjacentText('afterbegin', 'hello');