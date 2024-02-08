import Drawing from "./z_drawing.js"
import Painting from "./z_painting.js"
import Photograph from "./z_photography.js"
import Printmaking from "./z_printmaking.js"
import Carousel from "./carousel.js"

export default class Gallery {
    artStation;   
    audioElement

    constructor() {
        this.artStation = [];
        this.audioElement = new Audio();


    }

    addArt(ArtPiece) {
        let nextPiece = null;
        switch (ArtPiece.type) {
            case "drawing":
                nextPiece = new Drawing(ArtPiece, (src) => {this.playAudio(src)});
                break;
            case "painting":
                nextPiece = new Painting(ArtPiece, (src) => {this.playAudio(src)});
                break;
            case "photograph":
                nextPiece = new Photograph(ArtPiece, (src) => {this.playAudio(src)});
                break;
            case "printmaking":
                nextPiece = new Printmaking(ArtPiece, (src) => {this.playAudio(src)});
                break;
            default:
                break;
        }
        if (nextPiece) this.artStation.push(nextPiece);
    }
    finish() {new Carousel('.section-wrapper > section', '#prevButton', '#nextButton', () => {this.stopAudio()});}

    playAudio(src) {
        if (this.audioElement.paused) {
            this.audioElement.src = src
            this.audioElement.play();
        } else {
            this.audioElement.pause();
            this.audioElement.currentTime = 0;
        }
    }

    stopAudio() {
        this.audioElement.pause()
    }
}