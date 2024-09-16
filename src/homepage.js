import mainImg from "./homepage.png";
import krunchBurger from "./Images/krunchBurger.png";
import mightyZinger from "./Images/mightyZinger.png";
import chickChips from "./Images/chickchips.png";
import family from "./Images/family.png";
const homepage = function() {
    const content_div = document.getElementById("content");
    pageOneTwo(content_div);
    pageThree(content_div);
    newletterSec(content_div);




}


function pageOneTwo(content_div) {
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const mImg = document.createElement("img");
    const heading11 = document.createElement("h1");
    const para1 = document.createElement("p");
    const orderNow = document.createElement("button");
    mImg.src = mainImg;
    orderNow.type = "button";
    heading11.innerHTML = "Fresh, <span class='h11sp'>Fast,</span> and Flavorful!";
    orderNow.innerText = "Order Now";
    para1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit.<br> Laudantium, suscipit! Labore excepturi corrupti officiis natus quas<br> amet tempora";
    mImg.classList.add("HPMimg");
    heading11.classList.add("HPheading1");
    para1.classList.add("HPpara1");
    orderNow.classList.add("HPOrderNowBtn");
    div1.classList.add("contentC");
    div1.classList.add("HPdiv1")
    div2.classList.add("contentC");
    div2.classList.add("HPdiv2");
    div1.appendChild(mImg);
    div2.appendChild(heading11);
    div2.appendChild(para1);
    div2.appendChild(orderNow);
    content_div.appendChild(div1);
    content_div.appendChild(div2);
}

function pageThree(content_div) {
    const div1 = document.createElement("div");
    const heading21 = document.createElement("h1");
    div1.classList.add("HPdiv3");
    div1.classList.add("contentC");
    heading21.innerText = "Our Bestsellers"
    heading21.classList.add("HPheading2");
    div1.appendChild(heading21);
    content_div.appendChild(div1);
    bestsellersGrid(content_div);
}



const bestsellersGrid = function(content_div) {
    const div = document.createElement("div");
    div.classList.add("HPdiv4");
    div.classList.add("contentC");
    for(let i=0; i <= 3; i++) {
        let div1 = document.createElement("div");
        div1.classList.add("HPBS");
        div1.classList.add("HPBS" + i);
        for(let j=0; j<1; j++) {
            let div2 = document.createElement("div");
            div2.classList.add("HPBs" + i + j);
            div2.classList.add("HPBs");
            div1.appendChild(div2);
        }
        div.appendChild(div1);
    }
    content_div.appendChild(div);

    const HPBS1 = document.querySelector(".HPBs00");
    const HPBS2 = document.querySelector(".HPBs10");
    const HPBS3 = document.querySelector(".HPBs20");
    const HPBS4 = document.querySelector(".HPBs30");


    menuCard(HPBS1, krunchBurger, "Krunch Burger", "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun with a wrapper to fold it", "Rs 790")
    menuCard(HPBS2, mightyZinger, "Mighty Zinger", "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo", "Rs 799");
    menuCard(HPBS3, chickChips, "Chicken Chips", "2 pieces of Hot and Crispy Fried Chicken + Fries + Dinner roll + signature Vietnamese Sauce", "Rs 590")
    menuCard(HPBS4, family, "Family Festival 1", "It includes 4 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner Rolls + 1.5 Liter drink for the fam", "Rs 2250"    );

    

}




const menuCard = function(div, img, name, des, price) {
    const BSheading = document.createElement("h2");
    const BSpara = document.createElement("p");
    const img1 = document.createElement("img");
    const BSprice = document.createElement("h3");
    const BSbtn = document.createElement("button");
    BSheading.innerText = name;
    BSpara.innerText = des;
    BSprice.innerText = price;
    BSbtn.innerText = "Add to Cart"
    img1.src = img;
    BSbtn.type = "button";
    img1.classList.add("BSimg");
    BSheading.classList.add("BSheading");
    BSpara.classList.add("BSpara");
    BSprice.classList.add("BSprice");
    BSbtn.classList.add("addtobtn");
    div.appendChild(img1);
    div.appendChild(BSheading);
    div.appendChild(BSpara);
    div.appendChild(BSprice);
    div.appendChild(BSbtn);
}


const newletterSec = function(content_div) {
    const div1 = document.createElement("div");
    const h1 = document.createElement("h1");
    const NLform = document.createElement("form");
    const NLemail = document.createElement("input");
    const NLsubbtn = document.createElement("input");


    div1.classList.add("contentC");
    div1.classList.add("HPdiv5")
    h1.classList.add("NLheading");
    NLemail.classList.add("NLemail");
    NLform.classList.add("NLform");
    NLsubbtn.classList.add("NLbtn");


    h1.innerText = "Stay in the loop for exclusive deals!";
    NLsubbtn.value = "Submit";
    

    NLemail.type = "email";
    NLemail.placeholder = "Email";
    NLsubbtn.type = "submit";


    content_div.appendChild(div1);
    div1.appendChild(h1);
    NLform.appendChild(NLemail);
    NLform.appendChild(NLsubbtn);
    div1.appendChild(NLform);







}








export {homepage}

export {menuCard}