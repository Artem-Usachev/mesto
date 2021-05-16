class Card {
    constructor(data, template, openPhotoFunction) {
        this._name = data.name;
        this._link = data.link;
        this._template = template;
        this.openPhotoFunction = openPhotoFunction;
        this.placeTemplate = document.querySelector('.place-template').content;
    }

    _getTemplate() {
        const cardElement = this.placeTemplate.querySelector(this._template).cloneNode(true);
        return cardElement;
    }

    _deleteCard() {
        this._card.remove();
        this._card = null
    }
    _toggleLike(e) {
        e.target.classList.toggle('place__heart_active');
    }

    _setEventListeners() {
        const cardDeleteButton = this._card.querySelector('.place__delete');
        const cardDelete = cardDeleteButton.closest('.place');
        const cardHeart = this._card.querySelector('.place__heart')
        const cardIllustration = this._card.querySelector('.place__illustration');
        cardIllustration.addEventListener('click', this.openPhotoFunction);
        cardDeleteButton.addEventListener('click', () => { this._deleteCard() });
        cardHeart.addEventListener('click', this._toggleLike);

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