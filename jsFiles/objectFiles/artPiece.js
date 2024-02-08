export default class ArtPiece {
    sectionElement;
    imageElement;
    labelElement;
    descriptionElement;
    data;

    constructor(data) {
        this.data = data;
        this.createElements();
    }

    createElements() {
        this.sectionElement = document.createElement("section");
        this.sectionElement.className = "gallery-section";

        this.imageElement = document.createElement("img");
        this.imageElement.className = "art-display";

        this.labelElement = document.createElement("label");
        this.labelElement.className = "title";

        this.descriptionElement = document.createElement("p");
        this.descriptionElement.className = "text";
    }
}
