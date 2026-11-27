//Las importaciones por defecto va fuera de las llaves
import muestraPassword, {saluda,edad, Usuario as User} from "./modules/usuarios.js"
const info = document.getElementById("info");

// info.innerHTML = saluda("Antonio");
// info.innerHTML += "<br>" + muestraPassword()

var user1 = new User("Pepe",undefined);
info.innerHTML = user1.nombre + " " + user1.apellidos;

var user2 = new User();
info.innerHTML += "<br> " + user2.nombre + " " + user2.apellidos

// document.getElementById("btn1").addEventListener("click", async function() {
//     const usuarios = await import("./modules/usuarios.js")
//     info.innerHTML = `Tu contraseña es ${usuarios.default()}`
// })