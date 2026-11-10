const info = document.getElementById("info");
var listaPaises = document.getElementById("paises");
const opRadio = document.getElementsByName("edad");

const oplista1 = Array.from(document.getElementsByClassName("pares"));
const oplista2 = Array.from(document.getElementsByClassName("impares"));

const opciones = listaPaises.getElementsByTagName("li");

// if (opciones.length > 0) {
//     console.log("Número de opciones de la lista: " + opciones.length);
//     info.innerHTML = opciones[2].innerHTML;
// }
// else
//     throw Error("No existen opciones e lista")

// info.innerHTML = "Opciones del radio edad: ";
// for (let op of opRadio)
//     info.innerHTML += op.value + ", ";

// document.getElementById("bChangeClassStyle").onclick = function () {
//     let lista = Array.from(listaPaises.getElementsByTagName("li"));
//     for (const elem of lista) {
//         if (elem.className == "pares") {
//             elem.className = "impares";
//         } else {
//             elem.className = "pares";
//         }
//     }
// }

// document.getElementById("bNuevoPais").onclick = function () {
//     const items = listaPaises.getElementsByTagName("li");
//     let nuevoPais = document.getElementById("nuevoPais").value;
//     if (nuevoPais == "")
//         info.innerHTML = "Debe escribir un País";
//     else {
//         let nuevoNodoPais = document.createElement("li");
//         nuevoNodoPais.className = (items.length % 2 == 0) ? "impares" : "pares";
//         nuevoNodoPais.appendChild(document.createTextNode(nuevoPais));
//         listaPaises.appendChild(nuevoNodoPais);
//     }
// }


// document.getElementById("añadirNodo").onclick = function () {
//     let nuevoNodo = crearNodo("p", "Registrarse", "a1", "background-color:red; color:green", []);
//     if (nuevoNodo) {
//         document.body.appendChild(nuevoNodo);
//     } else {

//     }
// }

/******************************************************** */
//FUNCION PARA CREAR NODOS

/**
 * 
 * @param tipo
 * @param texto 
 * @param id 
 * @param styles, estilos a implementar en mi elemento
 * @param props, cosa a mejorar de array
 */
function crearNodo(tipo, texto, id, styles, props) {
    let elemento = null;

    //Comprobamos que el tipo es string y que se ha pasado
    if ((!tipo) || (typeof tipo != "string")) {
        throw new Error("No se ha pasado tipo");
    }

    //Si el tipo es distinto de cadena vacia creamos el elemento de ese tipo
    if (tipo != "") {
        elemento = document.createElement(tipo);
    } else {
        throw new Error("El tipo no puede ser cadena vacia");

    }

    //Si hay texto lo añadimos al elemento que acabamos de crear arriba
    if (texto != "") {
        let elementoText = document.createTextNode(texto);
        elemento.appendChild(elementoText);
    }

    //le añadimos al elemento la id 
    if (id != "") {
        elemento.id = id;
    }

    //Comprobmaos que styles existe y que es un string
    if ((styles) && (typeof styles === "string") && (styles != "")) {
        elemento.style = styles;
    }
    return elemento;
}

// document.getElementById("borrarTercero").onclick = function () {
//     let miArray = Array.from(listaPaises.getElementsByTagName("li"));
//     let lista = document.getElementById("paises");

//     //Compruebo que mi lista tenga mas de 3 elementos y le borro el segundo
//     if (miArray.length > 3) {
//         //con este al borrar me devuelve el nodo.
//         miArray[2].parentNode.removeChild(miArray[2]);
//         //Con el remove lo borramos directamente, pero no me devuelve el item borrado.
//         // miArray[2].remove();
//     }
// }

//funcion para mis section
//creo el nodo a
let enlaceImagen = crearNodo("a", "Cambiar Imagen", "", "background-color:#1276af; border-radius:8px; color:white; padding:0.2%; margin: 0.2%;",[]);
let section1 =  document.getElementsByClassName("section1");

//cargo mi imagen desde aqui
document.getElementById("img1").setAttribute("src","images.jpg")


if (section1.length >= 2) {
        section1[1].appendChild(enlaceImagen);
        enlaceImagen.href = "#";
        enlaceImagen.onclick = function () {
            document.getElementById("img1").src = "imagen2.jpg"
        }
}

let inputRead = document.getElementById("input");
let bloquear = document.getElementById("bloquear");
let desbloquear = document.getElementById("desbloquear");

bloquear.onclick = function(){
    //le añado el atributo read only
    inputRead.setAttribute("readOnly", "true");
}

desbloquear.onclick = function(){
    //le quito el atributo read only
    inputRead.removeAttribute("readOnly");
}

//Boton que devuelve los impares
document.getElementById("bDevuelveImpares").onclick = function () {
    //esto me devuelve todos los li que hay dentro de la section
    let lista2 = document.querySelectorAll(".section1 li");
    let arrayImpares = new Array();

    for (let i = 0; i< lista2.length; i += 2) {
        //guardamos los impares
        arrayImpares.push(lista2[i].innerText);
    }
    console.dir(arrayImpares);
}

//cambiamos a modo noche la pagina
document.getElementById("aModoNoche").onclick = function () {
    // document.body.style.backgroundColor = "#B0ACAC";
    // document.body.style.color= "#EDEBEB";
    // const botones = document.getElementsByTagName("button");
    // for (const elem of botones) {
    //     elem.style.backgroundColor = "darkgray";
    //     elem.style.color = "darkwhite";
    // }

    // const enlaces = document.getElementsByTagName("a");
    // for (const elem of enlaces) {
    //     elem.style.backgroundColor = "darkgray";
    //     elem.style.color = "red";
    // }

    //Ahora lo hacemos con las clases implementadas en el css
    document.body.className = "modoNoche";
    const botones = document.getElementsByTagName("button");
    //Con esto sacamos el estilo que tiene el boton
    let buttonStyle = window.getComputedStyle(botones[0])

    if (buttonStyle.getPropertyValue("background-color") == "darkgray") {
        //estoy en modo noche cambio a modo dia
        this.innerText = "Cambiar a modo noche"
        document.body.className = ""
    }else{
        document.body.className = "modoNoche";
        this.innerText = "Cambiar a modo dia"
    }

}