export class Section {
    constructor({ items, renderer, containerSelector }) {
        this.items = items;
        this.renderer = renderer;
        this.containerElement = containerSelector;
    }
    render() {
        this.items.forEach((element) => this.renderer(element, '.place'));
    }
    addItem(element) {
        this.containerElement.prepend(element);
    }
}