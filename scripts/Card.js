 export class Card {
     constructor(name, link) {
         this.name = name;
         this.link = link;
     }
     _openPhoto() {
         popupPhotoImg.src = this.link;
         popupPhotoImg.alt = this.name;
         photoSignature.textContent = this.name;
         openPopup(photoPopup);
     }
     _toggleLike(e) {
         e.target.classList.toggle('place__heart_active');
     }
     _deleteCard(item) {
         item.remove();
     }
     createCard() {
         const placeElement = placeTemplate.querySelector('.place').cloneNode(true);
         placeElement.querySelector('.place__title').textContent = this.name;
         const placeElementImg = placeElement.querySelector('.place__illustration');
         placeElementImg.src = this.link
         placeElementImg.alt = this.name
         const placeDeleteButton = placeElement.querySelector('.place__delete');
         const cardDelete = placeDeleteButton.closest('.place');
         placeDeleteButton.addEventListener('click', () => this._deleteCard(cardDelete));
         placeElement.querySelector('.place__heart').addEventListener('click', this._toggleLike);
         placeElement.querySelector('.place__illustration').addEventListener('click', () => this._openPhoto());
         return placeElement
     }
 }