class FormValidator {
    constructor(validation) {
        this.validation = validation;
    }
    enableValidation() {
        this.forms = document.querySelectorAll(this.validation.formSelector);
        this.formInputes = document.querySelectorAll(this.validation.inputSelector);
        this.submitButtonPlace = document.getElementById(this.validation.submitButtonPlace);
        this.submitButtonProfile = document.getElementById(this.validation.submitButtonProfile);
        this.formPopupPlace = document.querySelector(this.validation.formPopupPlace);
        this.formPopupProfile = document.querySelector(this.validation.formPopupProfile);
        this.inputListPlace = Array.from(this.formPopupPlace.querySelectorAll(this.validation.inputList));
        this.inputListProfile = Array.from(this.formPopupProfile.querySelectorAll(this.validation.inputList));
        this._setEventListeners(this.formInputes, this.inputListPlace, this.inputListProfile, this.submitButtonPlace, this.submitButtonProfile);
    }

    _hideError(inputId) {
        const errorElement = document.querySelector(`.${inputId}-error`);
        const input = document.getElementById(inputId);
        input.classList.remove(this.validation.errorClass);
        errorElement.classList.add(this.validation.invisibleClass);
        input.classList.remove(this.validation.openClass);
        errorElement.classList.remove(this.validation.openClass);
    }

    _showError(inputId, message) {
        const errorElement = document.querySelector(`.${inputId}-error`);
        const input = document.getElementById(inputId);
        input.classList.add(this.validation.errorClass);
        errorElement.textContent = message;
        errorElement.classList.remove(this.validation.invisibleClass);
        errorElement.classList.add(this.validation.openClass);
        input.classList.add(this.validation.openClass);
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
    _setEventListeners(formInputes, inputListPlace, inputListProfile, submitButtonPlace, submitButtonProfile) {
        formInputes.forEach((input) => {
            input.addEventListener('input', (e) => {
                this._validateInputValue(e.currentTarget)
                this._toggleButtonState(inputListPlace, submitButtonPlace)
                this._toggleButtonState(inputListProfile, submitButtonProfile)

            });
        });
        this.forms.forEach((form) => {
            form.addEventListener('submit', e => this._cancelPageReloadWhenSubmitForm(e))
        })

    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, button) {
        if (this._hasInvalidInput(inputList)) {
            button.setAttribute('disabled', 'disabled')
            button.classList.remove(this.validation.activeButtonClass);

        } else {
            button.removeAttribute('disabled')
            button.classList.add(this.validation.activeButtonClass);

        }
    }
}
export { FormValidator }