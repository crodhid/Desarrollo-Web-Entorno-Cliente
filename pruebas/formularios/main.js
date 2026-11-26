const info = document.getElementById("info");
info.innerHTML = "Número de formularios en la app: " + document.forms.length;

/**
 * Si hay más de un formulario entonces guardamos el primero y mostramos sus elementos
 */
if (document.forms.length > 1) {
    const primerForm = document.forms[0];
    console.log("El primer formulario tiene " + primerForm.elements.length + " elementos");
}

/**
 * Al pulsar sobre el enlace de enviar, obtenemos el usuario
 */
document.getElementById("aForm1").onclick = function (e) {
    e.preventDefault();
    const primerForm = document.forms.form1;
    console.log("El usuario es " + primerForm.usuario.value);
}

for (const element of document.getElementsByName("edades")) {
    element.addEventListener("change", (e) => {
        if (e.target.checked) {
            info.innerHTML = `Radio pulsado: ${element.value}`
        }
    })
}

//Colores para fondo
let lista = document.getElementById("listaColores");

lista.onchange = (e) => {
    let valor = lista.value;
    document.body.style.backgroundColor = valor;
    //me devuelve un número empezando por 0 de cual opción hemos marcado
    console.dir(lista.selectedIndex)
    //en una lista múltiple esto nos devuelve una coleccion con nuestros valores seleccionados
    //para convertirlo a array es array.from o ...
    console.log(lista.selectedOptions)
}

/**
 * Campo de texto en el cual no se pueden escribir las e
 */

let textoArea = document.getElementById("textoArea");

textoArea.oninput = () => {
    let valor = textoArea.value;
    if (valor.charAt(valor.length - 1).toLowerCase() == "e") {
        // quitamos la última letra (la e)
        valor = valor.slice(0, -1);
    }
    textoArea.value = valor;
};