import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor({ popup, submitForm, submit }) {
        super(popup);
        this.submit = submit;
        this.submitForm = submitForm
        this.submitButton = this.submitForm.querySelector('.popup__button')

    }

    _getInputValues() {
        const inputs = this.popup.querySelectorAll(`input`);
        let values = {};
        inputs.forEach((i) => {
            values[i.name] = i.value;
        });
        return values;
    }
    _reset() {
        const formElement = this.popup.querySelector(`form`);
        formElement.reset();
    }
    _submit() {
        const values = this._getInputValues();
        this.submit(values);
    }
    openConfirmation(data) {
        super.open();
        this.data = data
    }
    renderLoading(loading) {
        if (loading) {
            this.submitButton.textContent = 'Сохранение...';
        } else {
            this.submitButton.textContent = 'Сохранено!';
        }
    };
    setEventListenersConfirmation() {
        super.setEventListeners();
        this.submitForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.submit(this.data);
        });

    }
    setEventListeners() {
        super.setEventListeners();
        this.submitForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._submit()
        });
    }

    close() {
        this._reset();
        super.close();
    }
}