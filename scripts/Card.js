import { openPopup } from './index.js'
class Card {
    constructor(data, template) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
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
        const cardDeleteButton = this._card.querySelector('.place__delete');
        const cardDelete = cardDeleteButton.closest('.place');
        const cardHeart = this._card.querySelector('.place__heart')
        const cardIllustration = this._card.querySelector('.place__illustration');
        cardDeleteButton.addEventListener('click', () => this._deleteCard(cardDelete));
        cardHeart.addEventListener('click', this._toggleLike);
        cardIllustration.querySelector('.place__illustration').addEventListener('click', () => this._openPhoto());
    }
    generateCard() {
        this._card = this._getTemplate();
        const cardIllustration = this._card.querySelector('.place__illustration');
        const cardTitle = this._card.querySelector('.place__title');
        cardIllustration.src = this._link;
        cardIllustration.alt = this._name;
        cardTitle.textContent = this._name;
        this._setEventListeners();
        return this._card
    }
}
export { Card }