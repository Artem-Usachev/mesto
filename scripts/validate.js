const forms = document.querySelectorAll('.popup__content');
const formInputes = document.querySelectorAll('.popup__text');
const placeBtn = document.getElementById('btn-place');
const profileBtn = document.getElementById('btn-profile');
const popupProfileInpur = document.querySelector('.popup_type_profile')
const popupAddPlace = document.querySelector('.popup_type_place')
const inputListProfile = Array.from(popupProfileInpur.querySelectorAll('.popup__text'));
const inputListPlace = Array.from(popupAddPlace.querySelectorAll('.popup__text'));

function hideError(inputId) {
    const errorElement = document.querySelector(`.${inputId}-error`);
    const input = document.getElementById(inputId);
    input.classList.remove('popup__error');
    errorElement.classList.remove('visible');
    errorElement.classList.add('invisible');
}

function showError(inputId, message) {
    const errorElement = document.querySelector(`.${inputId}-error`);
    const input = document.getElementById(inputId);
    input.classList.add('popup__error');
    errorElement.textContent = message;
    errorElement.classList.remove('invisible');
    errorElement.classList.add('visible');
}

function validateInputValue(input) {
    if (input.validity.valid) {
        hideError(input.id);
        return;
    }
    showError(input.id, input.validationMessage);
}

function addValidateListeners(inputes) {
    inputes.forEach((input) => {
        input.addEventListener('input', (e) => {
            validateInputValue(e.currentTarget)
            toggleButtonState(inputListPlace, placeBtn)
            toggleButtonState(inputListProfile, profileBtn)
        });
    });
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

addValidateListeners(formInputes)