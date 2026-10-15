const h21 = document.getElementById("h21");

// h21.innerHTML += `Ancho total: ${screen.width}, Alto total: ${screen.height}px <br> `
// h21.innerHTML += `Ancho disponible: ${screen.availWidth}, Alto total: ${screen.availHeight }px <br> `


if (screen.height > screen.width) 
    h21.innerHTML = "landscape";
else 
    h21.innerHTML = "portrait";

document.body.onresize = function () {
    if (screen.height > screen.width) 
        h21.innerHTML = "landscape";
    else 
        h21.innerHTML = "portrait";
}




