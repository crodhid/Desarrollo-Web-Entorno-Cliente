let numero = 5;

// Función 1
function calcular() {
    console.log("Estoy en calcular");

    let resultado = sumar(numero);

    console.log("El resultado es: " + resultado);
    console.warn("Estamos en el aviso")
}

// Función 2
function sumar(numero) {
    console.log("Estoy en sumar");

    let resultado = numero + 10;

    return resultado;
}

// Función 3
function mostrarNumeros() {

    for (let i = 0; i < 5; i++) {
        console.log("Número: " + i);
    }
}

// Error provocado
function provocarError() {
    throw new Error("Este es un error provocado");
}

//Tabla
console.table([1, 2, 3, 4, 5]);

// Botones
document.getElementById("btnCalcular").addEventListener("click", calcular);

document.getElementById("btnNumeros").addEventListener("click", mostrarNumeros);

document.getElementById("btnError").addEventListener("click", provocarError);