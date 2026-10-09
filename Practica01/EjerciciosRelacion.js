
/**
 * Ejercicio 1 
 * creo un array bidimensional
 */

let botonEjercicio1 = document.getElementById("botonEjercicio1");
let ejercicio1 = document.getElementById("ejercicio1");
let alumnos = [
    ["Cristian", "Rodríguez Hidalgo", "2ºDAW", [10, 10, 10]],
    ["Antonio", "Marin", "2ºDAW", [10, 10, 10]],
    ["Pepa", "Marin", "2ºDAW", [10, 10, 10]],
]


/**
 * Funcion en la cual estouy recorriendo mi array con las notas de los alumnos
*/
function mostrarAlumnos() {
    for (let i = 0; i < alumnos.length; i++) {
        for (let j = 0; j < alumnos[i].length; j++) {
            ejercicio1.innerHTML += alumnos[i][j] + " ";
        }
        ejercicio1.innerHTML += "<br>";
    }

}

botonEjercicio1.addEventListener("click", mostrarAlumnos);





/*********** EJERCICIO 2  ********************
 * Ejercicio XOR
*/
let inputEjercicio2N1 = document.getElementById("inputEjercicio2N1");
let inputEjercicio2N2 = document.getElementById("inputEjercicio2N2");
let ejercicio2 = document.getElementById("ejercicio2");
let botonXOR = document.getElementById("botonXOR");

function xor() {
    let n1 = Number(inputEjercicio2N1.value);
    let n2 = Number(inputEjercicio2N2.value);

    if ((n1 < 0) || (n1 > 1) ||
        (n2 < 0) || (n2 > 1)) {
        ejercicio2.innerHTML = "Números no válidos, tiene que ser 0 o 1";
    } else if ((n1 == 0) && (n2 == 0)) {
        ejercicio2.innerHTML = "0";
    } else if ((n1 == 0) && (n2 == 1)) {
        ejercicio2.innerHTML = "1";
    } else if ((n1 == 1) && (n2 == 0)) {
        ejercicio2.innerHTML = "1";
    } else {
        ejercicio2.innerHTML = "0";
    }
}

botonXOR.addEventListener("click", xor);


/**
 * Ejercicio 3
 */

let botonConvertir = document.getElementById("botonConvertir");
let ejercicio3 = document.getElementById("ejercicio3");
let euros = document.getElementById("euros");

function convertirEurosADolaresYYENES() {

    ejercicio3.innerHTML = "Dolares: " + (euros.value * 1.12).toFixed(2) +
        "<br>Yenes: " + (euros.value * 177).toFixed(2);
}

botonConvertir.addEventListener("click", convertirEurosADolaresYYENES);

/**
 * Ejercicio 4
 * Script que calcula area y perimetro de una circunferencia
 */

let radio = document.getElementById("radio");
let calcularCirculo = document.getElementById("calcularCirculo");
let ejercicio4 = document.getElementById("ejercicio4");

/**
 * Función para calcular el radio y el perimetro de un radio dado
 */
function radioYPerimetro() {
    ejercicio4.innerHTML = "Área: " + (2 * Math.PI * Math.pow(radio.value, 2))
        + "<br> Perímetro= " + (2 * Math.PI * radio.value);
}

calcularCirculo.addEventListener("click", radioYPerimetro);



/**
 * Ejercicio 5
 * Ejercicio para mostrar pares entre dos números de rangos
 */

let inicio = document.getElementById("inicio");
let fin = document.getElementById("fin");
let botonPares = document.getElementById("botonPares");
let ejercicio5 = document.getElementById("ejercicio5");

/**
 * Funcion en la cual controlamos que los numeros no sean ni menores de 100
 * ni mayores de 5000, dentro de ella hacemos un bucle para comprobar cuales
 * son pares en el rango de esos 2 números
 */
function calcularPares() {
    let numeroInicio = Number(inicio.value);
    let numeroFin = Number(fin.value);

    if ((numeroInicio < -100) || (numeroFin > 5000)) {
        ejercicio5.innerHTML = "El inicio no puede ser menor que -100 y el fin no puede ser mayor de 5000";
    } else {
        ejercicio5.innerHTML = "";

        for (let i = numeroInicio; i <= numeroFin; i++) {
            if (i % 2 === 0) {
                ejercicio5.innerHTML += i + " ";
            }
        }
    }
}

botonPares.addEventListener("click", calcularPares);

/**
 * Ejercicio 6
 * suma resta division y multiplicacion
 */

let calcularOperaciones = document.getElementById("calcularOperaciones");
let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let ejercicio6 = document.getElementById("ejercicio6");

/**
 * Funcion para hacer suma resta division y multiplicación
 * controlando la división entre 0
 */
function operaciones() {
    let num1 = Number(numero1.value);
    let num2 = Number(numero2.value);

    ejercicio6.innerHTML = "";
    ejercicio6.innerHTML += "Suma: " + (num1 + num2) +
        "<br>Resta: " + (num1 - num2) +
        "<br>Multiplicación:" + (num1 * num2) +
        "<br> División: ";

    if (num2 == 0) {
        ejercicio6.innerHTML += "No se puede dividir entre 0"
    } else {
        ejercicio6.innerHTML += (num1 / num2);
    }
}

calcularOperaciones.addEventListener("click", operaciones);


/**
 * Ejercicio 7
 * Media entre 3 notas
 */
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
let calcularMedia = document.getElementById("calcularMedia");
let ejercicio7 = document.getElementById("ejercicio7");

/**
 * Función en la cual hago el casteo a number de los valores que me llegan
 * calculo la media y en torno a eso con los ifs muestro los valores que
 * yo quiero
 */
function media() {
    num1 = Number(nota1.value);
    num2 = Number(nota2.value);
    num3 = Number(nota3.value);

    let media = (num1 + num2 + num3) / 3;

    if ((num1 < 0) || (num2 < 0) || (num3 < 0)) {
        ejercicio7.innerHTML = "No puede haber notas negativas";
    } else {
        if (media < 5) {
            ejercicio7.innerHTML = "Suspenso, nota: " + media;
        } else if (media < 7) {
            ejercicio7.innerHTML = "Aprobado, nota: " + media;
        } else if (media < 8.5) {
            ejercicio7.innerHTML = "Notable, nota: " + media;
        } else {
            ejercicio7.innerHTML = "Sobresaliente, nota: " + media;
        }

    }
}

calcularMedia.addEventListener("click", media);

/**
 * Ejercicio 8
 * Escribir pirámide de números repetidos desde 1 a 50
 */

let generarPiramideRepetidos = document.getElementById("generarPiramideRepetidos");
let ejercicio8 = document.getElementById("ejercicio8");


/**
 * Función en la que creo dos bucles for anidados, uno para recorrer los números
 * y otro que va comparando y mientras el contador sea menor que el número 
 * seguira escribiendo el número asi son todos repetidos
 */
function piramideRepetidos() {
    let finNumeros = 50;
    for (let i = 1; i <= finNumeros; i++) {
        for (let j = 0; j < i; j++) {
            ejercicio8.innerHTML += i + " ";
        }
        ejercicio8.innerHTML += "<br>";
    }
}

generarPiramideRepetidos.addEventListener("click", piramideRepetidos);


/**
 * Ejercicio 9
 *  Pirámide de números consecutivos
 */

let generarPiramideConsecutiva = document.getElementById("generarPiramideConsecutiva");
let ejercicio9 = document.getElementById("ejercicio9");

/**
 * Función que hace lo mismo que la anterior pero con un contador externo
 * para que sean consecutivos los números
 * 
 */
function piramideConsecutiva() {
    ejercicio9.innerHTML = "";

    let finNumeros = 50;
    let contador = 1;
    for (let i = 1; i <= finNumeros; i++) {
        for (let j = 0; j < i; j++) {
            ejercicio9.innerHTML += contador + " ";
            contador++;
        }
        ejercicio9.innerHTML += "<br>";
        contador = 1;
    }

}
generarPiramideConsecutiva.addEventListener("click", piramideConsecutiva);

/**
 * Ejercicio 10
 * Esto se está haciendo con una funcion arrow, es decir una función 
 * anónima
 */

let botonComprobarArrow = document.getElementById("botonComprobarArrow");
let numeroArrow = document.getElementById("numeroArrow");
let ejercicio10 = document.getElementById("ejercicio10");

/**
 * Esto sería la función arrow
 * en la cual estoy comprobando si los números son primos o no
 */
botonComprobarArrow.addEventListener("click", () => {
    let num1 = Number(numeroArrow.value);

    if (num1 % 2 == 0) {
        ejercicio10.innerHTML = "El número: " + num1 + " es par";
    } else {
        ejercicio10.innerHTML = "El número: " + num1 + " es impar";

    }

})

/**
 * Ejercicio 11
 * Pagina que genera el juego del pum hasta 100
 * Cuando encuentra un múltiplo de 7 escribe PUM y cambia de renglón
 */

let botonPum = document.getElementById("botonPum");
let botonPumGeneradores = document.getElementById("botonPumGeneradores");
let ejercicio11 = document.getElementById("ejercicio11");



function PUM() {
    //limpio mi parrafo
    ejercicio11.innerHTML = "";
    for (let i = 1; i <= 100; i++) {
        if ((i % 10 == 7) || (i % 7 == 0)) {
            ejercicio11.innerHTML += "PUM <br>";
        } else {
            ejercicio11.innerHTML += i + ", "
        }
    }
}
botonPum.addEventListener("click", PUM);

/**
 * Ahora lo hago con generadores
 */

function* generadorPum() {
    ejercicio11.innerHTML = ""; // limpia el resultado anterior

    for (let i = 1; i <= 100; i++) {
        if (i % 7 === 0 || i % 10 === 7) {
            ejercicio11.innerHTML += "PUM<br>";
            yield "PUM";
        } else {
            ejercicio11.innerHTML += i + ", ";
            yield i;
        }
    }
}

function jugarPumGeneradores() {
    for (const valor of generadorPum()) {
        // no hace falta hacer nada: al pedir cada valor, el generador ya escribe en la página
    }
}

botonPumGeneradores.addEventListener("click", jugarPumGeneradores);

/**
 * Ejercicio 12
 * 
 */

let botonConteo = document.getElementById("botonConteo");
let ejercicio12 = document.getElementById("ejercicio12");


/**
 * Funcion en la cual estoy generando números hasta 300
 * Si es multiplo de 4 aumento 4px y pongo color verde
 * Si es multiplo de 9 aumento 2px y pongo color rojo
 * Tengo que crear un elemento span para poder modificar los 
 * estilos ya que directamente estaría todo el rato modificando
 * lo mismo
 */
function contar() {
    ejercicio12.innerHTML = ""; // limpio el contenedor

    // tamaño de letra actual en píxeles (por ejemplo 16)
    const tamañoBase = parseFloat(getComputedStyle(ejercicio12).fontSize);

    for (let i = 1; i <= 300; i++) {
        // creo un span donde van a estar los números para
        //poder modificarle despues los estilos
        const numero = document.createElement("span");
        numero.innerHTML = i + ", ";

        if (i % 4 === 0) {
            numero.style.fontSize = (tamañoBase + 4) + "px";
            numero.style.color = "green";
        } else if (i % 9 === 0) {
            numero.style.fontSize = (tamañoBase + 2) + "px";
            numero.style.color = "red";
        }

        /**
         * Tiene que ser con appenChild, porque número al ser un
         * elemento del dom y no un número como tal
         * con innerHTML no iria
         */
        ejercicio12.appendChild(numero);

        // corto la línea DESPUÉS de cada 10 números
        if (i % 10 === 0) {
            ejercicio12.innerHTML += "<br>";
        }
    }
}

botonConteo.addEventListener("click", contar);

/**
 * Ejercicio 13
 * Generar 36000 dados, guardando la suma en un array las veces que ha salido
 * posicion 0 = 2, 1=3, asi todo el rato siendo la posicion una 
 * menos que el resultado de la suma
 */

let botonDados = document.getElementById("botonDados");
let ejercicio13 = document.getElementById("ejercicio13");
let miArray = [0,0,0,0,0,0,0,0,0,0,0];
function lanzamientoDados() {
    for (let i = 0; i < 36000; i++) {
        let num1 = Math.floor(Math.random() * 6) + 1;
        let num2 = Math.floor(Math.random() * 6) + 1;
        let suma = num1 + num2;
        /**
         * Switch para ir sumando dentro del array
         */
        switch (suma) {
            case 2:
                miArray[0]++;
                break;
            case 3:
                miArray[1]++;
                break;
            case 4:
                miArray[2]++;
                break;
            case 5:
                miArray[3]++;
                break;
            case 6:
                miArray[4]++;
                break;
            case 7:
                miArray[5]++;
                break;
            case 8:
                miArray[6]++;
                break;
            case 9:
                miArray[7]++;
                break;
            case 10:
                miArray[8]++;
                break;
            case 11:
                miArray[9]++;
                break;
            case 12:
                miArray[10]++;
                break;
            default:
                break;
        }
    }
    let contador = 2;
    for(let i = 0; i<miArray.length ;i++){
    ejercicio13.innerHTML += "La suma con resultado: "+ contador + " ha salido: " + miArray[i] + " veces <br>"; 
    contador++;
    }
}

botonDados.addEventListener("click", lanzamientoDados);

/**
 * Ejercicio 14
 * Tengo que recoger una lista de números y que cuando pulse
 * 0 se muestren los números parando la recogida de ellos
 */

let botonAgregarNumero = document.getElementById("botonAgregarNumero");
let ejercicio14 = document.getElementById("ejercicio14");
let inputEjercicio14 = document.getElementById("inputEjercicio14");
let miArrayEj14 = [];

/**
 * Se ejecuta en cada clic: lee un número, lo guarda
 * y, si es 0, termina la recogida y muestra los resultados.
 */
function agregarNumero() {
    // Validaciones: que no esté vacío y que sea entero
    if (inputEjercicio14.value === "") {
        ejercicio14.innerHTML = "Introduce un número.";
        return;
    }
    let numero = Number(inputEjercicio14.value);
    
/**
 * Si es distinto de 0 llamo a guardar numero que lo mete en mi array, reseteo el input y voy mostrando cuantos números 
 * lleva guardados
 */
    if (numero !== 0) {
        guardarNumero(numero);
        ejercicio14.innerHTML = "Números guardados: " + miArrayEj14.length;
        inputEjercicio14.value = "";
    } else {
        mostrarResultado();
    }
}

/**
 * Guarda el número que le llega como parámetro
 */
function guardarNumero(numero) {
    miArrayEj14.push(numero);
}

/**
 * Muestra la lista en orden descendente, el mayor, el menor
 * y cuántas veces aparece cada uno (apartado c)
 */
function mostrarResultado() {

    /**
     * Primero tengo que ordenar el array de forma descendente
     * esto va comparando los parámetros y hace el ultimo menos el primero, asi sería de forma descendente, si fuera ascendente
     * sería al revés
     */
    miArrayEj14.sort((a,b) => b-a);


    ejercicio14.innerHTML = "Números guardados: "
    for(let i = 0; i < miArrayEj14.length ; i++){
        ejercicio14.innerHTML+= miArrayEj14[i] +", ";
    }

    sumarNumArray();

}

/**
 * Función para sumar todos los números de mi array ordenado,
 * solo funciona si el array está ordenado previamente
 */
function sumarNumArray() {
    let suma = 1;
    for(let i =1; i < miArrayEj14.length ; i++){
        let num  = miArray[i-1];
        if (miArray[i] != num) {
            ejercicio14.innerHTML += "<br>El número: " + num +"ha salido: " + suma + " veces";
        }else{
            suma++;
        }
    }
}

botonAgregarNumero.addEventListener("click", agregarNumero);



