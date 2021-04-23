 import { disableSubmitButton } from './index.js'
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
         this._setEventListeners(this.formInputes, this.inputList, this.submitButton, this.forms);
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
     _setEventListeners(inputes, inputList, formPopup, forms) {
         inputes.forEach((input) => {
             input.addEventListener('input', (e) => {
                 this._validateInputValue(e.currentTarget)
                 this._toggleButtonState(inputList, formPopup)

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
 export { FormValidator }