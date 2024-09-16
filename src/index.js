import "./style.css";
import "./homepage.css";
import "./menupage.css";
import { homepage } from "./homepage";
import { menupage } from "./menupage";
import { aboutPage } from "./aboutpage";


const homeBtn = document.querySelector(".homeBtn");
const menuBtn = document.querySelector(".menuBtn");
const oOnlineBtn = document.querySelector(".oOnlineBtn");
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
    console.log("menuBtnClicked")
    cleanContentDiv();
    menupage();
})

oOnlineBtn.addEventListener("click", ()=> {
    console.log("oOnlineClicked")
    cleanContentDiv();
    aboutPage();
})


console.log("helllo");
console.log('another hello');
console.log("this is also hello");


// homepage();
// menupage();
// aboutpage();