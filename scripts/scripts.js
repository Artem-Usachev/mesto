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




let saveButton = document.querySelector('.popup__button')
let inputUserName = document.querySelector('.popup__userName');
let inputUserInfo = document.querySelector('.popup__userInfo');
let userName = document.querySelector('.info__title');
let userInfo = document.querySelector('.info__subtitle');

// equalization userName inputUserName
inputUserName.value = userName.innerText;

// equalization userInfo inputUserInfo
inputUserInfo.value = userInfo.innerText;

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


inputUserName.addEventListener('change', (e) => nameValueHandler(e));
saveButton.addEventListener('click', (e) => clickHeandlerName(e));

inputUserInfo.addEventListener('change', (e) => infoValueHandler(e));
saveButton.addEventListener('click', (e) => clickHeandlerInfo(e));