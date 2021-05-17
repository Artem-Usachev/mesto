import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this.submitForm = submitForm;
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
        this.submitForm(values);
        this.close();
    }

    setEventListeners() {
        this.popup.addEventListener('submit', this._submit.bind(this));
        super.setEventListeners();
    }

    close() {
        this._reset();
        super.close();
    }
}