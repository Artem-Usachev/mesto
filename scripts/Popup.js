import { popupCloseBtn } from '../scripts/constants.js'
export class Popup {
    constructor(selector) {
        this.selector = selector;
        this.popup = document.querySelector(selector);
        this._handleEscClose = this._handleEscClose.bind(this)
        this._handleClickClose = this._handleClickClose.bind(this)
    }
    open() {
        this.popup.classList.remove('invisible');
    }
    close() {
        this.popup.classList.add('invisible');
        this._removeListeners();
    }

    _removeListeners() {
        this.popup.removeEventListener('click', this._handleClickClose);
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(e) {
        if (e.key === 'Escape') {
            this.close();
        }
    }
    _handleClickClose(e) {
        if (e.target.classList.contains('popup')) {
            this.close();
        }
    }
    setEventListeners() {
        this.popup.addEventListener('click', this._handleClickClose)
        document.addEventListener('keydown', this._handleEscClose)
        popupCloseBtn.forEach((closeButton) => {
            closeButton.addEventListener('click', () => {
                this.close();
            })
        });

    }
}