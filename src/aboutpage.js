const aboutPage = function() {
    const content_div = document.getElementById("content");



    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const h1 = document.createElement("h1");
    const p1 = document.createElement("p");
    const h2 = document.createElement("h1")
    const p2 = document.createElement("p");



    div1.classList.add("contentC");
    div2.classList.add("contentC");
    div1.classList.add("APdiv1");
    div2.classList.add("APdiv2");
    h1.classList.add("missionheading");
    h1.classList.add("APheadings");
    h2.classList.add("APheadings")
    p1.classList.add("APparas");
    p2.classList.add("APparas");
    p2.classList.add('APpara2')




    h1.innerHTML = "Our <span class='mission'>Mission</span>";
    p1.innerText = "At Zesty, our mission is simple: to bring fresh, flavorful, and fast meals to our customers. We believe food should be exciting, convenient, and made from quality ingredients. Whether you’re grabbing a quick bite or enjoying a meal with friends, we’re here to deliver great flavors, every time."
    h2.innerHTML = "Our <span class='journey'>Journey</span>";
    p2.innerText = "Zesty began with a vision of offering a unique fast-food experience where every bite is filled with flavor. We started as a small, local restaurant, committed to delivering fresh and satisfying meals to our community. Over the years, we’ve grown into a beloved fast-food spot, but our values remain the same—serve food that’s fast, fresh, and full of zest";





    div1.appendChild(h1);
    div1.appendChild(p1);
    div2.appendChild(h2);
    div2.appendChild(p2);
    content_div.appendChild(div1);
    content_div.appendChild(div2);
    







}


export {aboutPage}