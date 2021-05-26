export class Section {
    constructor({ items, renderer }, containerSelector) {
        this.items = items;
        this.renderer = renderer;
        this.containerElement = document.querySelector(containerSelector);
    }
    setItems(items) {
        this.items = items
    }
    removeCard() {
        this.containerElement.remove();
        this.containerElement = null;
    }
    render() {
        this.items.forEach((element) => this.renderer({ name: element.name, link: element.link, likes: element.likes, _id: element._id, owner: element.owner }, '.place'));
    }
    addItem(element) {
        this.containerElement.prepend(element);
    }
}