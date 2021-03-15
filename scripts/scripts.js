let openButton = document.querySelector('.info__setting-box');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__exit-img');
let inputUserName = popup.querySelector('input[name="name"]');
let inputUserInfo = popup.querySelector('input[name="job"]');
let userName = document.querySelector('.info__title');
let userInfo = document.querySelector('.info__subtitle');

function openPopup() {
    inputUserName.value = userName.innerText;
    inputUserInfo.value = userInfo.innerText;
    popup.classList.remove('invisible');
}

function closePopup() {
    popup.classList.add('invisible');
}

function clickHeandlerInfo(e) {

    e.preventDefault();
    userInfo.textContent = inputUserInfo.value;
    userName.textContent = inputUserName.value;
    closePopup();

}

openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popup.addEventListener('submit', (e) => clickHeandlerInfo(e));