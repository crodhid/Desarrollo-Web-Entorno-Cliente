let cuerpo = document.body;

//Ejercicio 1
//creamos el parrafo
const parrafo = document.createElement("p");
//creamos el texto del parrafo
const textoParrafo = document.createTextNode("Hola DOM")
//añadimos el texto al parrafo
parrafo.appendChild(textoParrafo)
//añadimos todo al body
cuerpo.appendChild(parrafo);

//Ejercicio 2
//CREO EL H1
const h1Clase = document.createElement("h1");
//LE AÑADO UN TEXTO
h1Clase.textContent = "HOLA";
//LE AÑADO UNA CLASE
h1Clase.className = "claseEjercicio2";
//LE AÑADO UN ID
h1Clase.id = "idEjercicio2";
//LO AÑADO AL BODY
cuerpo.prepend(h1Clase);

//Ejercicio 3
const listaUL = document.createElement("ul");
for (let index = 0; index < 5; index++) {
    let li = document.createElement("li");
    li.textContent = "" + index;
    listaUL.appendChild(li);
}
cuerpo.appendChild(listaUL);

//Ejercicio 4
//creo el div
const div = document.createElement("div");
//creo el a
const enlace = document.createElement("a");
//le doy un texto
enlace.textContent = "Redireccion simulatoria"
enlace.target = "_blank"
//la pagina a la que la quiero mandar
enlace.href = "https://www.google.com"
div.appendChild(enlace);
cuerpo.appendChild(div);

//Ejercicio 5
const imagen = document.createElement("img");
imagen.setAttribute("src", "./imagenPrueba.jpg")
imagen.setAttribute("alt", "")
cuerpo.appendChild(imagen);


//Ejercicio 6
const ul6 = document.getElementById("lista");
const li6 = document.createElement("li");
li6.textContent = "Hola";
//decimos lo que queremos insertar y donde insertarlo
ul6.insertBefore(li6, ul6.children[1]);