let nota = parseInt(Math.random() * 10);

console.log(nota);

if (nota >= 1 && nota < 4) {
    console.log("Muy mal");
} else if (nota < 7) {
    console.log("Mal");
} else if (nota < 10) {
    console.log("Bien")
} else if (nota === 10) {
    console.log("Muy bien");
}


switch (nota) {
    case 1:
    case 2:
    case 3:
        console.log("Muy mal")
        break;
    case 4:
    case 5:
    case 6:
        console.log("Mal");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Bien");
        break;
    case 10:
        console.log("Muy bien");
        break;
    default:
        break;
}

let miArray = ["Hola", "Me", "Llamo", "Cristian", "Pepito"];
const h1Header = document.getElementById("h1Header");

for (let index = 0; index < miArray.length; index++) {
    h1Header.innerText += miArray[index] + "";

}

//sumar dos numeros
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let botonSumar = document.getElementById("botonSumar");
let resultadoSuma = document.getElementById("resultadoSuma");

/**
 * Estamos diciendo aqui que cuando le da al botón se haga la funcion doSumas
 */
// botonSumar.onclick = doSuma;


//vamos a hacer lo del boton pero con funciones
botonSumar.addEventListener("click", function(){
    alert("Has pulsado el botón");
});

//con funciones anonimas
botonSumar.onclick = function (){
    alert("NO PULSES ");
}

botonSumar.onmouseover = function (){
    this.style.backgroundColor = "#446812";
    this.style.color = "#fff";
}

botonSumar.onmouseleave = function (){
    this.style.backgroundColor = "";
    this.style.color = "";
}

//FUNCIONES ////////////////////////////////////////

/**
 * Funcion para hacer una suma de la cual sacamos los parametros de dos inputs
 * tenemos que parsear los parametros porque el typeof nos devuelve un string
 * hacemos la verificacion y la suma
 * reseteamos los valores a 0 para que el usuario no tenga que hacer nada
 * 
 * NUEVO CAMBIO
 * HACEMOS QUE ESTA FUNCION PUEDA FUNCIONAR POR PARAMETRO Y SIN PARAMETRO
 */
function doSuma(dato_1, dato_2) {
    //Arguments es un array que crea js automaticamente al hacer una funcion con todos los parametros dentro
    console.dir(arguments);

    //esto se hace para que pueda poner un dato u otro teniendo preferencia el primero
    let a = dato_1 || parseFloat(n1.value);
    let b = dato_2 || parseFloat(n2.value);
    let result = 0;

         
    if ((typeof a == "number") && (typeof b == "number")) {
        result = a+b;
        resultadoSuma.innerHTML = "Resultado es: " +result;
        n1.value = "0";
        n2.value = "0";
    } else {
        resultadoSuma.innerHTML += "Valores no válidos para hacer la suma";
    }

    return result;
}