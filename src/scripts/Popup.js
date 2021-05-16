import { popupCloseBtn } from '../scripts/constants.js'
export class Popup {
    constructor(popup) {
        this.popup = popup;
        this._closeBtn = this.popup.querySelector('.popup__exit');
        this._handleClickClose = this._handleClickClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this.popup.classList.remove('invisible');
        this.popup.addEventListener('click', this._handleClickClose)
        document.addEventListener('keydown', this._handleEscClose)
    }
    close() {
        this.popup.classList.add('invisible');
        this.popup.removeEventListener('click', this._handleClickClose)
        document.removeEventListener('keydown', this._handleEscClose)
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
        this._closeBtn.addEventListener('click', this.close.bind(this))
    }
}