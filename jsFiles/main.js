// window.onload = async () => {
//     const request = await fetch("../test.json");
//     const result = await request.json();
//     console.log(result)

// }

import Gallery from "./objectFiles/gallery.js"


window.onload = async () => {
    const request = await fetch("../test.json");
    const result = await request.json();

    const gallery = new Gallery();


    result.forEach(item => {
        gallery.addArt(item);
    });
    gallery.finish()
}