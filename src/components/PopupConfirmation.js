import { Popup } from "./Popup";
export class PopupConfirmation extends Popup {
    constructor({ popup, submit }) {
        super(popup);
        this.submitForm = this.popup.querySelector('.popup__content')
        this.submitButton = this.submitForm.querySelector('.popup__button')
        this.submit = submit;
    }
    renderLoading(loading) {
        if (loading) {
            this.submitButton.textContent = 'Удаление...';
        } else {
            this.submitButton.textContent = 'Удалено!';
        }
    };
    setEventListeners() {
        super.setEventListeners();
        this.submitForm.addEventListener("submit", (e) => {
            e.preventDefault();
            this.submit(this.data);
        });

    }
    open(data) {
        super.open();
        this.data = data
        this.submitButton.textContent = this.submitButton.value
    }
}