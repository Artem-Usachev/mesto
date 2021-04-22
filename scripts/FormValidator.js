export class FormValidator {
    constructor(validation) {
        this.validation = validation;
    }
    enableValidation() {
        this.forms = document.querySelectorAll(this.validation.formSelector);
        this.formInputes = document.querySelectorAll(this.validation.inputSelector);
        this.placeBtn = document.getElementById(this.validation.submitButtonSelectorPlace);
        this.profileBtn = document.getElementById(this.validation.submitButtonSelectorProfile);
        this.popupProfileInput = document.querySelector(this.validation.formPopupProfile);
        this.popupAddPlace = document.querySelector(this.validation.formPopupPlace);
        this.inputListProfile = Array.from(this.popupProfileInput.querySelectorAll(this.validation.inputListProfileSelector));
        this.inputListPlace = Array.from(this.popupAddPlace.querySelectorAll(this.validation.inputListPlaceSelector));
        this._setEventListeners(this.formInputes, this.inputListPlace, this.inputListProfile, this.placeBtn, this.profileBtn, this.forms);
    }

    _hideError(inputId) {
        const errorElement = document.querySelector(`.${inputId}-error`);
        const input = document.getElementById(inputId);
        input.classList.remove('popup__error');
        errorElement.classList.remove('visible');
        errorElement.classList.add('invisible');
        input.classList.remove('open');
        errorElement.classList.remove('open');
    }

    _showError(inputId, message) {
        const errorElement = document.querySelector(`.${inputId}-error`);
        const input = document.getElementById(inputId);
        input.classList.add('popup__error');
        errorElement.textContent = message;
        errorElement.classList.remove('invisible');
        errorElement.classList.add('visible');
        errorElement.classList.add('open');
        input.classList.add('open');
    }

    _validateInputValue(input) {
        if (input.validity.valid) {
            this._hideError(input.id);
            return;
        }
        this._showError(input.id, input.validationMessage);
    }
    _cancelPageReloadWhenSubmitForm(e) {
        e.preventDefault();
    }
    _setEventListeners(inputes, inputListPlace, inputListProfile, placeBtn, profileBtn, forms) {
        inputes.forEach((input) => {
            input.addEventListener('input', (e) => {
                this._validateInputValue(e.currentTarget)
                this._toggleButtonState(inputListPlace, placeBtn)
                this._toggleButtonState(inputListProfile, profileBtn)
            });
        });
        forms.forEach((form) => {
            form.addEventListener('submit', e => this._cancelPageReloadWhenSubmitForm(e))
        })

    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _addButtonVisibility(button) {
        button.removeAttribute('disabled')
        button.classList.remove('popup__button_condition_disable');
        button.classList.add('popup__button_condition_active');

    }

    _toggleButtonState(inputList, button) {
        if (this._hasInvalidInput(inputList)) {
            disableSubmitButton(button)
        } else {
            this._addButtonVisibility(button)
        }
    }
}