import artPiece from "./artPiece.js";

export default class Drawing extends artPiece {

    constructor(data) {
        super(data);
        this.populateElements();
        this.attachElements();
    }

    populateElements() {
        this.imageElement.src = this.data.image;
        this.labelElement.textContent = this.data.title;
        this.descriptionElement.textContent = this.data.description;
    }

    attachElements() {
        this.sectionElement.appendChild(this.imageElement);
        this.sectionElement.appendChild(this.labelElement);
        this.sectionElement.appendChild(this.descriptionElement);
    
        document.body.appendChild(this.sectionElement);
    }
}