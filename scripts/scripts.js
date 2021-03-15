let popup = document.querySelector('.popup');
let openButton = document.querySelector('.info__setting-box');
let closeButton = popup.querySelector('.popup__exit-img');


function openPopup() {
    popup.classList.remove('invisible');
    inputUserName.value = userName.innerText;
    inputUserInfo.value = userInfo.innerText;
}

function closePopup() {
    popup.classList.add('invisible');
}

let saveButton = document.querySelector('.popup__button')
let inputUserName = document.querySelector('.popup__user-name');
let inputUserInfo = document.querySelector('.popup__user-info');
let userName = document.querySelector('.info__title');
let userInfo = document.querySelector('.info__subtitle');

// receiving ValueName 
let inputValueName = '';

function infoValueHandler(e) {
    inputValueInfo = e.target.value;
}

//  receiving ValueInfo
let inputValueInfo = '';

function nameValueHandler(e) {
    inputValueName = e.target.value;
}

// conclusion Value in userName
function clickHeandlerName(e) {

    e.preventDefault();
    userName.textContent = inputValueName;

}
//  conclusion Value in userInfo

function clickHeandlerInfo(e) {

    e.preventDefault();
    userInfo.textContent = inputValueInfo;


}
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);


inputUserName.addEventListener('change', (e) => nameValueHandler(e));
saveButton.addEventListener('submit', (e) => clickHeandlerName(e));

inputUserInfo.addEventListener('change', (e) => infoValueHandler(e));
saveButton.addEventListener('submit', (e) => clickHeandlerInfo(e));