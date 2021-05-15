import { popupPhotoImg, photoSignature } from '../scripts/constants.js'
import { Popup } from '../scripts/Popup.js'
export class PopupWithImage extends Popup {
    constructor(selector, imgSource, imgLabel) {
        super(selector);
        this.imgSource = imgSource;
        this.imgLabel = imgLabel;
    }
    open() {
        popupPhotoImg.src = this.imgSource;
        popupPhotoImg.alt = this.imgLabel;
        photoSignature.textContent = this.imgLabel;
        super.setEventListeners();
        super.open();
    }
}