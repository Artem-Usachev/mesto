import { Popup } from './Popup.js'
export class PopupWithImage extends Popup {
    constructor(popup, popupPhotoImg, photoSignature) {
        super(popup);
        this.popupPhotoImg = popupPhotoImg;
        this.photoSignature = photoSignature;
    }
    open(data) {
        this.popupPhotoImg.src = data.link;
        this.popupPhotoImg.alt = data.name;
        this.photoSignature.textContent = data.name;
        super.open();
    }
}