const oOnline = function() {
    const content_div = document.getElementById("content");
    const h1 = document.createElement('h1');
    h1.innerHTML = "Hello from oOnline.js";
    h1.classList.add("contentC");
    content_div.appendChild(h1);
}


export {oOnline}