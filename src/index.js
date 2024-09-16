import "./style.css";
import "./homepage.css";
import "./menupage.css";
import "./aboutpage.css";
import { homepage } from "./homepage";
import { menupage } from "./menupage";
import { aboutPage } from "./aboutpage";


const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const aboutBtn = document.querySelector(".aboutBtn");
const contentDiv = document.querySelector("#content");

const cleanContentDiv = function() {
    const contentC = document.querySelectorAll(".contentC");
    contentC.forEach((C) => {
        C.remove();
    })
}

homepage();


homeBtn.addEventListener("click", ()=> {
    cleanContentDiv();
    homepage();
})

menuBtn.addEventListener("click", ()=> {
    cleanContentDiv();
    menupage();
})

aboutBtn.addEventListener("click", ()=> {
    cleanContentDiv();
    aboutPage();
})


// homepage();
// menupage();
// aboutpage();