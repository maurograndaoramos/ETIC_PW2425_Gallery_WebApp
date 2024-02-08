import artPiece from "./artPiece.js";

export default class Painting extends artPiece {

    constructor(data, callback) {
        super(data, callback);
        this.populateElements();
        this.attachElements();
    }

    populateElements() {
        this.imageElement.src = this.data.image;
        this.labelElement.textContent = this.data.title;
        this.descriptionElement.textContent = this.data.description;

        this.imageElement.onclick = () => {
            this.callback(this.audio)
        }
    }

    attachElements() {
        this.sectionElement.appendChild(this.divImageElement);
        this.sectionElement.appendChild(this.divLabelElement);
        this.sectionElement.appendChild(this.divDescriptionElement);

        this.divImageElement.appendChild(this.imageElement);
        this.divLabelElement.appendChild(this.labelElement);
        this.divDescriptionElement.appendChild(this.descriptionElement);
    
        const sectionWrapper = document.querySelector('.section-wrapper');
        sectionWrapper.appendChild(this.sectionElement);
    }
}