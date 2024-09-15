import mainImg from "./homepage.png";
import krunchBurger from "./Images/krunchBurger.png";
import mightyZinger from "./Images/mightyZinger.png";
import Hazlenut from "./Images/Hazlenut-Iced-Latte.png"
const homepage = function() {
    const content_div = document.getElementById("content");
    pageOneTwo(content_div);
    pageThree(content_div);
    // const h1 = document.createElement('h1');
    // h1.innerHTML = "Hello from homepage.js";
    // h1.classList.add("contentC")
    // content_div.appendChild(h1);







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


    menuCard(HPBS2, mightyZinger, "Mighty Zinger", "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo, lettuce and cheese- sandwiched between a sesame seed bun", "Rs 799");
    menuCard(HPBS3, Hazlenut, "Hazelnut Iced Latte", "A cup of cold and refreshing Hazelnut coffee mixed with base of energizing espresso waiting to be picked up", "Rs 500")



    const BSheading = document.createElement("h2");
    const BSpara = document.createElement("p");
    const img1 = document.createElement("img");
    const BSprice = document.createElement("h3");
    const BSbtn = document.createElement("button");
    BSheading.innerText = "Krunch Burger";
    BSpara.innerText = "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun";
    BSprice.innerText = "Rs 290";
    BSbtn.innerText = "Add to Cart"
    img1.src = krunchBurger;
    BSbtn.type = "button";
    img1.classList.add("BSimg");
    BSheading.classList.add("BSheading");
    BSpara.classList.add("BSpara");
    BSprice.classList.add("BSprice");
    BSbtn.classList.add("addtobtn");
    HPBS1.appendChild(img1);
    HPBS1.appendChild(BSheading);
    HPBS1.appendChild(BSpara);
    HPBS1.appendChild(BSprice);
    HPBS1.appendChild(BSbtn);





    

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

export {homepage}