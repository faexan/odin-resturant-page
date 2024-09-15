const aboutpage = function() {
    const content_div = document.getElementById("content");
    const h1 = document.createElement('h1');
    h1.innerHTML = "Hello from aboutpage.js";
    content_div.appendChild(h1);
}


export {aboutpage}