export class UserInfo{
    constructor(nameSelector, infoSelector){
        this.nameElement = document.querySelector(nameSelector);
        this.infoElement = document.querySelector(infoSelector);
    }

    getUserInfo(){
        const name = this.nameElement.textContent;
        const info = this.infoElement.textContent;
        return {name, info};
    }
    setUserInfo(name, info){
        this.nameElement.textContent = name;
        this.infoElement.textContent = info;
    }
}
