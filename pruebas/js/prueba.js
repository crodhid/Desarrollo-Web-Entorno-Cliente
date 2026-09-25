
/**
 * Declaramos las variables
 * las variables var son globales
 * let es local al bloque en el que se crea
 */
let a = 5;
var b = 10;
var c = 20;

console.log("Valor de a: " + a + " valor de b: " + b );

if (a < 10) {
    showA();
}


//funciones
function showA(){
    console.log("El valor de a es menor de 10 es: " + a)
    
}

// //le pongo el value en js al campo de texcto
// document.getElementById("campoTexto").value = "Hola";

a = 5;
if (a == 5) {
    console.log("A es igual a 5");
}else{
    console.log("A no es igual a 5")
}