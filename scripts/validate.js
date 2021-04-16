function enableValidation(validation) {
    const forms = document.querySelectorAll(validation.formSelector);
    const formInputes = document.querySelectorAll(validation.inputSelector);
    const placeBtn = document.getElementById(validation.submitButtonSelectorPlace);
    const profileBtn = document.getElementById(validation.submitButtonSelectorProfile);
    const popupProfileInput = document.querySelector(validation.formPopupProfile);
    const popupAddPlace = document.querySelector(validation.formPopupPlace);
    const inputListProfile = Array.from(popupProfileInput.querySelectorAll(validation.inputListProfileSelector));
    const inputListPlace = Array.from(popupAddPlace.querySelectorAll(validation.inputListPlaceSelector));
    setEventListeners(formInputes, inputListPlace, inputListProfile, placeBtn, profileBtn, forms);
}

function hideError(inputId) {
    const errorElement = document.querySelector(`.${inputId}-error`);
    const input = document.getElementById(inputId);
    input.classList.remove('popup__error');
    errorElement.classList.remove('visible');
    errorElement.classList.add('invisible');
    input.classList.remove('open');
    errorElement.classList.remove('open');
}

function showError(inputId, message) {
    const errorElement = document.querySelector(`.${inputId}-error`);
    const input = document.getElementById(inputId);
    input.classList.add('popup__error');
    errorElement.textContent = message;
    errorElement.classList.remove('invisible');
    errorElement.classList.add('visible');
    errorElement.classList.add('open');
    input.classList.add('open');
}

function validateInputValue(input) {
    if (input.validity.valid) {
        hideError(input.id);
        return;
    }
    showError(input.id, input.validationMessage);
}

function setEventListeners(inputes, inputListPlace, inputListProfile, placeBtn, profileBtn, forms) {
    inputes.forEach((input) => {
        input.addEventListener('input', (e) => {
            validateInputValue(e.currentTarget)
            toggleButtonState(inputListPlace, placeBtn)
            toggleButtonState(inputListProfile, profileBtn)
        });
    });
    forms.forEach((form) => {
        form.addEventListener('submit', e => cancelPageReloadWhenSubmitForm(e))
    })

}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

enableValidation(validationConfig);