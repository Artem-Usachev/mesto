export class Section {
    constructor({ renderer, containerSelector }) {
        this.renderer = renderer;
        this.containerElement = containerSelector;
    }
    render(items) {
        items.forEach((element) => this.renderer(element));
    }
    addItem(element) {
        this.containerElement.prepend(element);
    }
}