const mainHTML = document.getElementById("main1");

//mostramos una variable por consola
let userName = "Pepe";

//variable para sumar 

console.log("Nombre de usuario logueado: " + userName);

userName = 5;
console.log("Nombre de usuario logueado: " + userName);

userName = true;
console.log("Nombre de usuario logueado: " + userName);

userName = 55.14;
console.log("Nombre de usuario logueado: " + userName);

//Creamos un boton 
var newButtonMain = document.createElement("button");
//Le ponemos el texto dentro del boton
newButtonMain.innerHTML = "Hello universe!";

//ponemos el boton de color rosa y mas estilos
newButtonMain.style.backgroundColor = "pink";
newButtonMain.style.border = "1px black solid";
newButtonMain.style.borderRadius = "15px";
newButtonMain.style.padding = "1%"

//añadimos el boton
mainHTML.appendChild(newButtonMain);

//añadimos el evento que al pulsar el boton nos manda una alerta por navegador
newButtonMain.addEventListener("click", function (){
    alert("You just press the button");
    console.log("Inside the function from the button");
    newButtonMain.style.backgroundColor = "green";
})

var a = 5;

// //funcion que va concatenando o sumando el input
// document.getElementById("numItemsCarrito").addEventListener("input", function (){
//         a+=parseInt(this.value);
//         console.log(a);
         
// })


//arrays de literales

var alumno = ["Pepe", true, 5.67, null, {name:"Ana", curso:"2ºDAW"}, [7,8.3,9.5], undefined];

console.dir("Mi array es: " + alumno);
console.log("Longitud de mi array: " + alumno.length);

//Añado otro item a mi array en la última posición
alumno[alumno.length] = "Maria";
console.dir("Mi array es: " + alumno);

a = "5";
if (a === 5) {
    console.log("A es igual a 5");
}else{
    console.log("A no es igual a 5")
}