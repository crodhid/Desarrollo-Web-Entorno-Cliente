
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
 */
botonComprobarArrow.addEventListener("click", () =>{
    let num1 = Number(numeroArrow.value);

    if (num1 % 2 == 0) {
    ejercicio10.innerHTML = "El número: " + num1 + " es par";
    }else{
    ejercicio10.innerHTML = "El número: " + num1 + " es impar";

    }

})

