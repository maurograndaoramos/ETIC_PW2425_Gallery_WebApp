// window.onload = async () => {
//     const request = await fetch("../test.json");
//     const result = await request.json();
//     console.log(result)

// }

import Gallery from "./objectFiles/gallery.js"
import Carousel from './objectFiles/carousel.js'

window.onload = async () => {
    const request = await fetch("../test.json");
    const result = await request.json();

    const gallery = new Gallery();


    result.forEach(item => {
        gallery.addArt(item);
    });

    new Carousel('.section-wrapper > section', '#prevButton', '#nextButton');

}