const mainHTML = document.getElementById("main1");

//mostramos una variable por consola
let userName = "Pepe";

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

