import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(selector, submitForm) {
        super(selector);
        this.submitForm = submitForm;
        this._submit = this._submit.bind(this)
    }

    _getInputValues() {
        const inputs = document.querySelectorAll(`${this.selector} input`);
        let values = {};
        inputs.forEach((i) => {
            values[i.name] = i.value;
        });
        return values;
    }
    _reset() {
        const formElement = document.querySelector(`${this.selector} form`);
        formElement.reset();
    }
    _submit() {
        const values = this._getInputValues();
        this.submitForm(values);
        this.close();
    }

    setEventListeners() {
        this.popup.addEventListener('submit', this._submit);
        super.setEventListeners();
        this._getInputValues()
    }

    close() {
        this.popup.removeEventListener('submit', this._submit);
        this._reset();
        super.close();
    }
}