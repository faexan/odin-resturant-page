import { menuCard } from "./homepage";
import krunchBurger from "./Images/krunchBurger.png";
import twister from "./Images/wrap.png";
import pepsiReg from "./Images/pepsiReg.png";
import familyF1 from "./Images/family.png";
import familyF2 from "./Images/family2.png";
import sprite from "./Images/sprite-3.png";
import mightyZ from "./Images/mightyZinger.png";
import KBurger from "./Images/KBurger.png";
import zingerSticker from "./Images/zingerSticker.png";
import BBQWrap from "./Images/BBQ-Wrap.png";
import CheesyWrap from "./Images/Cheese-Mayo-Wrap.png";
import ChWrap  from "./Images/Chipotle-Wrap.png";
import pizza1 from "./Images/pizza1.png";
import pizza2 from "./Images/pizza2.png";
import pizza3 from "./Images/pizza3.png";
import pizza4 from "./Images/pizza4.png";
import deal3 from "./Images/deal3.png";
import deal4 from "./Images/deal4.png";
import drink2 from "./Images/cokeCane.png";
import drink3 from "./Images/pepsi2.png";


const menupage = function() {
    const content_div = document.getElementById("content");


    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const heading = document.createElement("h1");
    const subT = document.createElement("p");
    


    div1.classList.add("contentC");
    div1.classList.add("MPdiv1");
    heading.classList.add("MPheading");
    subT.classList.add("subText");



    heading.innerHTML = "Our <span class='menu'>Menu</span>";
    subT.innerText = "Tasty meals at your fingertips";



    div1.appendChild(heading);
    div1.appendChild(subT);
    content_div.appendChild(div1);  



    console.log(content_div)

    for(let i=2; i<7; i++) {
        let div = document.createElement("div");
        div.classList.add("MPdiv" + i);
        div.classList.add("contentC")
        for(let j=0; j<2; j++) {
            let d = document.createElement("div");
            d.classList.add("MPdiv" + i + j);

            if(j==0) {
                d.classList.add("menuHeadsDiv");
                let h = document.createElement("h2");
                h.classList.add("menuHeads");

                if (i == 2) {
                    h.innerText = "Burgers";
                } else if (i==3) {
                    h.innerText = "Wraps";
                } else if (i==4) {
                    h.innerText = "Drinks";
                } else if (i==5) {
                    h.innerText = "Pizzas";
                } else if (i==6) {
                    h.innerText = "Today's Deals!"
                }



                d.appendChild(h);
            } else {
                d.classList.add("menuCardsDiv");

                for(let k=0; k<4; k++) {
                    let d2 = document.createElement("div");
                    d2.classList.add("menuCard");
                    d2.classList.add("menuCard" + i + k);



                    if (i==2 && k ==0) {
                        menuCard(d2, krunchBurger, "Krunch Burger", "Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun with a wrapper to fold it", "Rs 790");
                    } else if (i==2 && k==1) {
                        menuCard(d2, mightyZ, "Mighty Zinger", "Our signature Zinger but Bigger! Double Zinger fillet with a combination of spicy and plain mayo", "Rs 990");
                    } else if (i==2 && k==2) {
                        menuCard(d2, KBurger, "Kentucky Burger", "Kentucky BurgerOG Zinger fillet layered with beef pepperoni, crispy fried onions, cheese and smokey BBQ", "Rs 890");
                    } else if (i==2 && k==3) {
                        menuCard(d2, zingerSticker, "Zinger Stacker", "Double krunch fillet, jalapenos, spicy mayo, lettuce and cheese with our signature Vietnamese sauce- sandwiched between a corn meal bun", "Rs 790");
                    } else if (i==3 && k==0) {
                        menuCard(d2, twister, "Twister", "Tender boneless strips, black pepper mayo, diced tomatoes and lettuce- wrapped in a tortilla", "Rs 420");
                    } else if (i==3 && k==1) {
                        menuCard(d2, BBQWrap, "BBQ Wrap", "Topped with the delicious BBQ sauce with our crispy chicken  freshly wrapped in a soft flour tortilla", "Rs 520")
                    } else if (i==3 && k==2) {
                        menuCard(d2, CheesyWrap, "Cheese Mayo Wrap", "Unwrap the experience of love with our classic Cheesy Mayo wrap combined with savory ingredients", "Rs 520");
                    } else if(i==3 && k==3) {
                        menuCard(d2, ChWrap, "Chipotle Wrap", "Our Chipotle Wrap made with crispy chicken strips gathers the tastiest ingredients from tomatoes, to green lettuce", "Rs 420");
                    } else if(i==4 && k==0) {
                        menuCard(d2, pepsiReg, "Pepsi Regular", "Pepsi Regular: Quench your thirst with the classic taste of Pepsi in a regular-sized bottle 345ml", "Rs 170");
                    } else if (i==4 && k==1) {
                        menuCard(d2, drink2, "Coke Cane", "There’s nothing like the world famous, thirst-quenching taste.", "Rs 150");
                    } else if (i==4 && k==2) {
                        menuCard(d2, drink3, "Pepsi Cane", "Pepsi Cane: Quench your thirst with the classic taste of Pepsi in a regular-sized Cane", "Rs 490");
                    } else if (i==4 && k==3) {
                        menuCard(d2, sprite, "Sprite", "It’s refreshing, with a delightful lemonade taste", "Rs 150");
                    } else if (i==5 && k==0) {
                        menuCard(d2, pizza1, "Margherita Sush", "Pizza margherita, as the Italians call it, is a simple pizza hailing from Naples", "Rs 1590");
                    } else if (i==5 && k==1) {
                        menuCard(d2, pizza2, "Peppepperoni pizza", "A Blend of Marinated Black Pepper Chicken, Onion and Bell Pepper", "Rs 1790");
                    } else if (i==5 && k==2) {
                        menuCard(d2, pizza3, "Chicken Extreme", "Combination of 3 Flavors of Chicken with Onion Bell Pepper, Green Olives, and Mushrooms" , "Rs 2100");
                    } else if (i==5 && k==3) {
                        menuCard(d2, pizza4 ,"Black Pepper Tikka", "A Blend of Marinated Black Pepper Chicken, Onion and Bell Pepper.", "Rs 1590");
                    } else if (i==6 && k==0) {
                        menuCard(d2, familyF1, "Family Festival 1", "A feel-good meal for the fam. It includes 4 Krunch burgers+ 4 pieces Hot and Crispy Chicken+ 2 Dinner Rolls + 1.5 Liter drink", "Rs 2150");
                    } else if (i==6 && k==1) {
                        menuCard(d2, familyF2,  "Family Festival 2","A hearty meal for the fam. It includes 2 Zinger burgers + 2 Krunch burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink", "Rs 2350")
                    } else if (i==6 && k==2) {
                        menuCard(d2, deal3, "Krunch Burger + Drink​", "1 Krunch burger + 1 Regular drink", "Rs 990");
                    } else if (i==6 && k==3) {
                        menuCard(d2, deal4, "Krunch Chicken Combo", "1 Krunch burger + 1 pc of Hot and Crispy Fried Chicken + 1 Regular drink", "Rs 1090");
                    } 



                    d.appendChild(d2);
                }


            }







            div.appendChild(d);
        }
        content_div.appendChild(div);
    }
    








    
    
}

export {menupage};