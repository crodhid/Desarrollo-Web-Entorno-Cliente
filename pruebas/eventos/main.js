let divs = document.getElementsByTagName("div");

for (let div of divs) {
    div.addEventListener("click", ocultar);
    div.addEventListener("mouseenter", ocultar);
    div.addEventListener("mouseleave", ocultar);
}

/**
 * Función con la cual estamos controlando el tipo de evento que le llega, si lo clica
 * se oculta, si el cursor pasa por encima se muestra, si se va se vuelve a ocultar
 * @param {*} e 
 */
function ocultar(e) {

    let h1Local = this.querySelector("h1");

    switch (e.type) {
        case "click":
            h1Local.style.visibility = "hidden"
            break;
        case "mouseenter":
            h1Local.style.visibility = "visible"
            break;
        case "mouseleave":
            h1Local.style.visibility = "hidden";
            break;
        default:
            break;
    }
}