import mainImg from "./homepage.png";
import mainImg2 from "./homepageImg2.png";


const homepage = function() {
    const content_div = document.getElementById("content");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const mImg = document.createElement("img");
    const mImg2 = document.createElement("img");
    const heading1 = document.createElement("h1");
    mImg.src = mainImg;
    mImg2.src = mainImg2;
    heading1.innerText = "Serving the best fast food in town, from burgers to wraps and everything in between.";
    mImg.classList.add("HPMimg");
    mImg2.classList.add("HPimg2");
    heading1.classList.add("HPheading1")
    div1.classList.add("contentC");
    div1.classList.add("HPdiv1")
    div2.classList.add("contentC");
    div2.classList.add("HPdiv2");
    div1.appendChild(mImg);
    div2.appendChild(mImg2);
    div2.appendChild(heading1);
    content_div.appendChild(div1);
    content_div.appendChild(div2);

    // const h1 = document.createElement('h1');
    // h1.innerHTML = "Hello from homepage.js";
    // h1.classList.add("contentC")
    // content_div.appendChild(h1);







}

export {homepage}