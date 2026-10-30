
/**
 * Ejercicio 1
 * Tengo que hacer la creación de distintos objetos de los cuales
 * unos heredan de otros
 */
let btnEj1 = document.getElementById("btnEj1");
let salida1 = document.getElementById("salida1");
/**
 * Defino mi objeto persona y dentro de el le pongo un metodo tambien con una funcion dentro
 */
let persona = {
    nombre: "Cristian",
    edad: 20,
    genero: "Masculino",
    obtDetalles: function () {
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Genero: " + this.genero;
    }

};

/**
 * Creo mi objeto estudiante 
 * e implementa su propio método
 */
let estudiante = {
    nombre: "Cristian",
    edad: 20,
    genero: "masculino",
    curso: "2ºDAW",
    grupo: "A",
    registrar: function () {
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Género: " + this.genero + " Curso: " + this.curso + " Grupo: " + this.grupo;
    }
};

/**
 * Creo mi objeto profesor 
 * e implementa su propio método
 */
let profesor = {
    nombre: "Cristian",
    edad: 20,
    genero: "masculino",
    curso: "2ºDAW",
    grupo: "A",
    asignatura: "JS",
    nivel: "Alto",
    asignar: function () {
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Género: " + this.genero + " Curso: " + this.curso + " Grupo: " + this.grupo + " Asignatura: " + this.asignatura + " Nivel: " + this.nivel;
    }
};

btnEj1.onclick = function () {
    salida1.innerHTML += persona.obtDetalles();
    salida1.innerHTML += "<br>" + estudiante.registrar();
    salida1.innerHTML += "<br>" + profesor.asignar();

}

/**
 * Ejercicio 2
 * Calcular pendiente, inclinacion, y angulo de inclinacion
 */
let btnej2Pendiente = document.getElementById("btnej2Pendiente");
let btnej2Inclinacion = document.getElementById("btnej2Inclinacion");
let btnej2Porcentaje = document.getElementById("btnej2Pendiente"); btnej2Porcentaje;


/**
 * Ejercicio 3
 */

let salida3 = document.getElementById("salida3");
let btnEj3 = document.getElementById("btnEj3");


/**
 * Función para formatear el número pi a 4 decimales
 */
btnEj3.addEventListener("click", function () {
    salida3.innerHTML = Math.PI.toFixed(4);
})

/**
 * Dias que llevo viviendo
 */
let salida4 = document.getElementById("salida4");
let fechaNacimiento4 = document.getElementById("fechaNacimiento4");
let btnEj4 = document.getElementById("btnEj4");

function calcularNumeroDias() {
    let fecha = new Date(fechaNacimiento4.value);
    let fechaActual = new Date();
    let msPorDia = 1000 * 60 * 60 * 24;
    let total = 0;

    if (isNaN(fecha)) {
        salida4.innerHTML = "Introduce bien el formato";
        return;
    }

    if (fecha > fechaActual) {
        salida4.innerHTML = "No se cuantos años tendrás en un futuro";
        return;
    }

    total = Math.floor((fechaActual - fecha) / msPorDia);
    salida4.innerHTML = "Has vivido: " + total + " días";
}
btnEj4.addEventListener("click", calcularNumeroDias);


/**
 * Ejercicio 5, calcular mi edad.
 */
let fechaNacimiento5 = document.getElementById("fechaNacimiento5");
let btnEj5 = document.getElementById("btnEj5");
let salida5 = document.getElementById("salida5");

function calculaEdad() {
    let fecha = new Date(fechaNacimiento5.value);
    let fechaActual = new Date();
    let total = 0;

    if (isNaN(fecha)) {
        salida5.innerHTML = "Introduce bien el formato";
        return;
    }

    if (fecha > fechaActual) {
        salida5.innerHTML = "No se cuantos años tendrás en un futuro";
        return;
    }

    total = fechaActual.getFullYear() - fecha.getFullYear();

    let diferenciaMes = fechaActual.getMonth() - fecha.getMonth();

    if (diferenciaMes < 0 || (diferenciaMes === 0 && fechaActual.getDate() < fecha.getDate())) {
        total--;
    }

    salida5.innerHTML = "Tienes " + total + " años";
}
btnEj5.addEventListener("click", calculaEdad);

/**
 * Ejercicio 6 lista dinámica
 */

let lista = [];
let tituloEvento = document.getElementById("tituloEvento");
let fechaEvento = document.getElementById("fechaEvento");
let btnEj6 = document.getElementById("btnEj6");
let aviso6 = document.getElementById("aviso6");
let listaEventos = document.getElementById("listaEventos");

/**
 * Función la cual me añade un evento dentro de un array
 * que es una lista dinámica, es decir tiene clave y valor.
 */
function añadirEventos() {
    let titulo = tituloEvento.value;
    let fecha = new Date(fechaEvento.value);
    if (titulo === "" || isNaN(fecha)) {
        aviso6.innerHTML = "No esta bien rellenos los campos"
        return;
    }
    //mi lista dinámica
    lista.push({ tituloEvento: titulo, fecha: fecha });

    //Funcion para ordenar por fecha
    lista.sort(function (a, b) {
        return a.fecha - b.fecha;
    })
    mostrarLista();
}

/**
 * Función para recorrer mi lista con un foreach
 */
function mostrarLista() {
    listaEventos.innerHTML = "";
    lista.forEach(elem => {
        listaEventos.innerHTML += "Título: " + elem.tituloEvento + " Fecha: " + elem.fecha + "<br>";

    });
}
btnEj6.addEventListener("click", añadirEventos);






/**
 * Ejercicio 7
 */
let areaTexto = document.getElementById("areaTexto");
let btnEj7 = document.getElementById("btnEj7");
let salida7 = document.getElementById("salida7");

/**
 * Función la cual me encuentra los guiones con matchall
 * y voy guardando su posición en mi array, ya que matchall tiene
 * un metodo index, que te devuelve el array
 */
function contarGuiones() {
    texto = areaTexto.value;
    let posiciones = [];

    //Esto me va guardando las posiciones de los - en un array.
    //el metodo matchAll de por si trae el .index que son las posiciones
    // en las que se encuentran los elementos que encuentra
    for (let m of texto.matchAll(/-/g)) {
        posiciones.push(m.index);
    }

    salida7.innerHTML = "Elementos encontrados: " + posiciones.length + " Posiciones:";

    for (const elem of posiciones) {
        salida7.innerHTML += " " + elem;
    }
}
btnEj7.addEventListener("click", contarGuiones);

/**
 * Ejercicio 8
 * Jugar con los arrays
 */
let valorArray = document.getElementById("valorArray");
let posicionArray = document.getElementById("posicionArray");

//botones
let btnAlFinal = document.getElementById("btnAlFinal");
let btnAlPrincipio = document.getElementById("btnAlPrincipio");
let btnBorrarPrimero = document.getElementById("btnBorrarPrimero");
let btnBorrarUltimo = document.getElementById("btnBorrarUltimo");
let btnInsertarPosicion = document.getElementById("btnInsertarPosicion");
let btnEliminarPosicion = document.getElementById("btnEliminarPosicion");
let btnOrdenarAsc = document.getElementById("btnOrdenarAsc");
let btnOrdenarDesc = document.getElementById("btnOrdenarDesc");
let mostrarArray = document.getElementById("mostrarArray");
let salida8 = document.getElementById("salida8");

let array = [];
let valor;
let posicion;

//lee los inputs en el momento del clic y los guarda en las variables globales
function leerDatos() {
    valor = valorArray.value;
    posicion = parseInt(posicionArray.value);
}

//añade un elemento al final
function insertarValorAlFinal() {
    leerDatos();
    array.push(valor);
}
btnAlFinal.onclick = insertarValorAlFinal;

//añade un elemento al inicio
function insertarValorAlInicio() {
    leerDatos();
    array.unshift(valor);
}
btnAlPrincipio.onclick = insertarValorAlInicio;

//Borra el primer elemento de mi array
function borrarPrimerElemento() {
    array.shift();
}
btnBorrarPrimero.onclick = borrarPrimerElemento;

//Función para borrar el último elemento
function borrarUltimoElemento() {
    array.pop();
}
btnBorrarUltimo.onclick = borrarUltimoElemento;

//Función para insertar por posición
//splice recibe la posición, el número de elementos a borrar (0) y el valor
function insertarPorPosicion() {
    leerDatos();
    if (isNaN(posicion) || posicion < 0 || posicion > array.length) {
        salida8.innerHTML = "Posición no válida (de 0 a " + array.length + ")";
        return;
    }
    array.splice(posicion, 0, valor);
}
btnInsertarPosicion.onclick = insertarPorPosicion;

//Para borrar por posición: splice con la posición y 1 elemento a borrar
function borrarPorPosicion() {
    leerDatos();
    if (isNaN(posicion) || posicion < 0 || posicion >= array.length) {
        salida8.innerHTML = "Posición no válida";
        return;
    }
    array.splice(posicion, 1);
}
btnEliminarPosicion.onclick = borrarPorPosicion;

//ordenar de forma ascendente (A-Z)
function ordenarFormaAscendente() {
    array.sort((a, b) => a.localeCompare(b, "es"));
}
btnOrdenarAsc.onclick = ordenarFormaAscendente;

//ordenar de forma descendente (Z-A)
function ordenarFormaDescendente() {
    array.sort((a, b) => b.localeCompare(a, "es"));
}
btnOrdenarDesc.onclick = ordenarFormaDescendente;

function mostrarArraySalida() {
    salida8.innerHTML = "Array: ";
    for (const elem of array) {
        salida8.innerHTML += "<br>" + elem;
    }
}
mostrarArray.onclick = mostrarArraySalida;



/************************************************************************************************** */
//Ejercicios de ventanas
/**
 * Ejercicio 9
 */
let ventana  = window;
let anchoPantalla = document.getElementById("anchoPantalla");
let altoPantalla = document.getElementById("altoPantalla");
let tipoDispositivo = document.getElementById("tipoDispositivo");

/**
 * Función la cual muestra ancho alto total de mi pantalla 
 * y el tipo de dispositivo con el que estaríamos viendolo
 * al modificar la resolución de la página 
 * que estamos usando
 */
function mostrarAnchoyAlto() {
    anchoPantalla.innerHTML = screen.width;
    ancho = ventana.innerWidth;
    altoPantalla.innerHTML = screen.height;
    if ( ancho < 768) {
        tipoDispositivo.innerHTML = "Móvil";
    }else if (ancho <= 1024 ) {
        tipoDispositivo.innerHTML = "Táblet";
    }else{
        tipoDispositivo.innerHTML = "Ordenador";
    }
}
//se ejecuta una vez al cargar la página
mostrarAnchoyAlto();
//se ejecuta cada vez que se modifica el tamaño
ventana.onresize = mostrarAnchoyAlto;

/**
 * Ejercicio 10
 */

let btnEj10 = document.getElementById("btnEj10");
let nueva ;
/**
 * Abre una ventana restandole al ancho y al alto
 * para abrirlas en esas coordenadas
 */
function abreVentana() {
    let x = screen.width -40;
    let y = screen.height -20;  
    nueva = window.open(
        "",
        "_blank",
        "width=300,height=200,left=" + x + ",top=" + y
    );
}

btnEj10.onclick = abreVentana;


/**
 * Ejercicio 11
 */
let btnAbrirEj11 = document.getElementById("btnAbrirEj11");
let btnEj11 = document.getElementById("btnEj11");
let aviso11 = document.getElementById("aviso11");

/**
 * Función la cual controla que la ventana esta abierta o no,
 * si está abierta le cambiamos las dimensiones que tiene
 * @returns 
 */
function redimensionarVentana(){
    if (!nueva || nueva.closed) {
        aviso11.innerHTML = "Primero crea la ventana";
        return;
    }
    nueva.resizeTo(600,500);
}

btnAbrirEj11.onclick = abreVentana;
btnEj11.onclick = redimensionarVentana;

