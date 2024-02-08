export default class ArtPiece {
    sectionElement;
    imageElement;
    labelElement;
    descriptionElement;
    divLabelElement;
    divDescriptionElement;
    divImageElement;
    audioElement;
    data;
    callback;

    constructor(data, callback) {
        this.callback = callback;
        this.data = data;
        this.createElements();
    }

    createElements() {
        this.sectionElement = document.createElement("section");
        this.sectionElement.className = "gallery-section";

        this.divImageElement = document.createElement("div")
        this.divImageElement.className = "image-wrapper";

        this.imageElement = document.createElement("img");
        this.imageElement.className = "art-display";

        this.divLabelElement = document.createElement("div")
        this.divLabelElement.className = "label-wrapper";

        this.labelElement = document.createElement("label");
        this.labelElement.className = "title";

        this.divDescriptionElement = document.createElement("div")
        this.divDescriptionElement.className = "description-wrapper";

        this.descriptionElement = document.createElement("p");
        this.descriptionElement.className = "text";
    }

    get audio() {
        return this.data.descriptionSound
    }
}
