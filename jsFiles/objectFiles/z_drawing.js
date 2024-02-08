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
        // may not work
        this.audioElement.src = this.data.descriptionSound;

        this.imageElement.onclick = () => {
            if (this.audioElement.src) {
                if (this.audioElement.paused) {
                    this.audioElement.play();
                } else {
                    this.audioElement.pause();
                    this.audioElement.currentTime = 0;
                }
            }
        }
    // may not work
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