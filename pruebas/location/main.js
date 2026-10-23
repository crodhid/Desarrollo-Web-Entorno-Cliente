//Guardamos en una constante donde se carga mi página asi no da problemas posteriormente
const URL = location.origin;
console.log(URL);

var usersWindow = null;
var h11 = document.getElementById("h11");
var aMail = document.getElementById("aMail");
var aUsuarios = document.getElementById("aUsuarios");


//devuelve el nombre del dominio, en nuestro caso localhost
h11.innerHTML = location.host;
//lo mismo que el de antes sin el puerto
h11.innerHTML += "<br>" + location.hostname;
//Url completa de nuestro proyecto
h11.innerHTML += "<br>" + location.pathname;
//protocolo que seguimos
h11.innerHTML += "<br>" + location.protocol;
//url completa
h11.innerHTML += "<br>" + location.origin;

//devuelve la url completa pero esta es de escritura 
//Con esto podemos modificar la url que abrimos de nuestro programa, en este caso he cambiado y estoy abriendo
//el mail
// location.href = "http://127.0.0.1:5500/pruebas/location/email.html";
h11.innerHTML += "<br>" + location.href;

//Esto hace que el pinchar en un a cambiamos de ruta a otra
aMail.onclick = function () {
    location.assign(URL +"pruebas/location/email.html");
}

//Esto hace que el pinchar en un a cambiamos de ruta a otra
aUsuarios.onclick = function () {
    location.assign(URL + "/pruebas/location/usuarios.html");
}


