export class UserInfo {
    constructor(nameSelector, infoSelector, avatar) {
        this.nameElement = document.querySelector(nameSelector);
        this.infoElement = document.querySelector(infoSelector);
        this.avatarElement = document.querySelector(avatar)
    }
    getUserInfo() {
        return {
            name: this.nameElement.textContent,
            info: this.infoElement.textContent,
            userId: this.id,
            avatar: this.avatarElement
        };
    }
    setUserAvatar(link) {
        this.avatarElement.src = link;
    }

    setUserInfo({ name, info, id }) {
        this.nameElement.textContent = name;
        this.infoElement.textContent = info;
        this.id = id
    }
}