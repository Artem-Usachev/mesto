class Card {
    constructor({ data, template, openPhoto, openPopupConfirmation, handleLike, userId, }) {
        this._name = data.name;
        this._link = data.link;
        this._userId = userId
        this._id = data._id
        this._template = template;
        this._userLike = data.likes.find(like => like._id === this._userId)
        this._openPhotoFunction = openPhoto;
        this._comparisonID = data.owner._id === userId;
        this._openPopupConfirmation = openPopupConfirmation
        this._placeTemplate = document.querySelector('.place-template').content;
        this._handleLike = handleLike
        this._card = this._getTemplate();
        this.data = data
        this.cardHeart = this._card.querySelector('.place__heart')
    }

    _getTemplate() {
        const cardElement = this._placeTemplate.querySelector(this._template).cloneNode(true);
        return cardElement;
    }

    _setEventListeners() {
        const cardDeleteButton = this._card.querySelector('.place__delete');
        const cardIllustration = this._card.querySelector('.place__illustration');
        cardIllustration.addEventListener('click', this._openPhotoFunction);
        cardDeleteButton.addEventListener('click', () => this._openPopupConfirmation(this));
        this.cardHeart.addEventListener('click', this._clickLikes.bind(this))


    }
    _clickLikes() {
        if (this.cardHeart.classList.contains('place__heart_active')) {
            this._handleLike(this, false)
        } else {
            this._handleLike(this, true)
        }
    }
    toggleBtnLike() {
        this.cardHeart.classList.toggle('place__heart_active');
    }

    setLikes(data) {
        this._numberLikes = this._card.querySelector('.place__heart-signature');
        if (data.likes.length > 0) {
            this._numberLikes.textContent = data.likes.length
        } else {
            this._numberLikes.textContent = ''
        }

    }
    deleteCard() {
        this._card.remove()
        this._card = null
    }
    generateCard() {
        const cardDeleteButton = this._card.querySelector('.place__delete');
        const cardIllustration = this._card.querySelector('.place__illustration');
        const cardTitle = this._card.querySelector('.place__title');
        if (this._comparisonID) {
            cardDeleteButton.removeAttribute('disabled')
        }
        if (this._userLike) {
            this.cardHeart.classList.add('place__heart_active')
        } else {
            this.cardHeart.classList.remove('place__heart_active')
        }
        cardIllustration.src = this._link;
        cardIllustration.alt = this._name;
        cardTitle.textContent = this._name;
        this.setLikes(this.data)
        this._setEventListeners();
        return this._card
    }
}
export { Card }