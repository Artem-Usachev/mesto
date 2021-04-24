import { openPopup } from './index.js'
class Card {
    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template
    }
    _getTemplate() {
        const cardElement = placeTemplate.querySelector(this._template).cloneNode(true);
        return cardElement;
    }
    _openPhoto() {
        popupPhotoImg.src = this._link;
        popupPhotoImg.alt = this._name;
        photoSignature.textContent = this._name;
        openPopup(photoPopup);
    }
    _deleteCard(item) {
        item.remove();
    }
    _toggleLike(e) {
        e.target.classList.toggle('place__heart_active');
    }
    _setEventListeners() {
        const placeDeleteButton = this._card.querySelector('.place__delete');
        const cardDelete = placeDeleteButton.closest('.place');
        placeDeleteButton.addEventListener('click', () => this._deleteCard(cardDelete));
        this._card.querySelector('.place__heart').addEventListener('click', this._toggleLike);
        this._card.querySelector('.place__illustration').addEventListener('click', () => this._openPhoto());
    }
    generateCard() {
        this._card = this._getTemplate();
        this._setEventListeners();
        this._card.querySelector('.place__illustration').src = this._link;
        this._card.querySelector('.place__illustration').alt = this._name;
        this._card.querySelector('.place__title').textContent = this._name;
        return this._card
    }
}
export { Card }