import Drawing from "./z_drawing.js"
import Painting from "./z_painting.js"
import Photograph from "./z_photography.js"
import Printmaking from "./z_printmaking.js"

export default class Gallery {
    artStation;   

    constructor() {
        this.artStation = [];
    }

    addArt(ArtPiece) {
        let nextPiece = null;
        switch (ArtPiece.type) {
            case "drawing":
                nextPiece = new Drawing(ArtPiece);
                break;
            case "painting":
                nextPiece = new Painting(ArtPiece);
                break;
            case "photograph":
                nextPiece = new Photograph(ArtPiece);
                break;
            case "printmaking":
                nextPiece = new Printmaking(ArtPiece);
                break;
            default:
                break;
        }
        if (nextPiece) this.artStation.push(nextPiece);
    }
    
}