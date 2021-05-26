class FormValidator {
    constructor(validation) {
        this.validation = validation;
    }
    enableValidation() {
        this.forms = document.querySelectorAll(this.validation.formSelector);
        this.formInputes = document.querySelectorAll(this.validation.inputSelector);
        this.submitButton = document.getElementById(this.validation.submitButton);
        this.formPopup = document.querySelector(this.validation.formPopup);
        this.inputList = Array.from(this.formPopup.querySelectorAll(this.validation.inputList));
        this._setEventListeners(this.formInputes, this.inputList, this.submitButton);
    }
    resetErrors() {
        const errorsText = this.formPopup.querySelectorAll('.text-error');
        const errorsInput = this.formPopup.querySelectorAll('.popup__text');
        errorsInput.forEach((error) => {
            error.classList.remove(this.validation.errorClass);
        })
        errorsText.forEach((error) => {
            error.classList.add(this.validation.invisibleClass);
        })
        this._disableSubmitBtn(this.submitButton)
    }
    _disableSubmitBtn(btn) {
        btn.setAttribute('disabled', 'disabled')
        btn.textContent = btn.value
        btn.classList.remove(this.validation.activeButtonClass);
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

    _setEventListeners(formInputes, inputList, submitButton) {
        formInputes.forEach((input) => {
            input.addEventListener('input', (e) => {
                this._validateInputValue(e.currentTarget)
                this._toggleButtonState(inputList, submitButton)
            });
        });
    }

    _hasInvalidInput(inputList) {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState(inputList, button) {
        if (this._hasInvalidInput(inputList)) {
            this._disableSubmitBtn(button)

        } else {
            button.removeAttribute('disabled')
            button.classList.add(this.validation.activeButtonClass);

        }
    }
}
export { FormValidator }