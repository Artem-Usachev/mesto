import { PopupWithForm } from "./PopupWithForm";
export class PopupConfirmation extends PopupWithForm {
    constructor({ popup, submit }) {
        super({ popup, submit });
    }
    _transferSubmit() {
        this.submit(this.data);
    }
    setEventListeners() {
        super.setEventListeners();
        this.submitForm.addEventListener("submit", (e) => {
            e.preventDefault();
            () => this._transferSubmit()
        });

    }
    open(data) {
        super.open();
        this.data = data
        this.submitButton.textContent = this.submitButton.value
    }
}