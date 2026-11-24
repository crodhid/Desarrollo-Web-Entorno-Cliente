const info = document.getElementById("info");
info.innerHTML = "Número de formularios en la app: " + document.forms.length;

/**
 * Si hay más de un formulario entonces guardamos el primero y mostramos sus elementos
 */
if (document.forms.length > 1) {
    const primerForm = document.forms[0];
    console.log("El primer formulario tiene " + primerForm.elements.length + " elementos");
}

/**
 * Al pulsar sobre el enlace de enviar, obtenemos el usuario
 */
document.getElementById("aForm1").onclick = function (e) {
    e.preventDefault();
    const primerForm = document.forms.form1;
    console.log("El usuario es " + primerForm.usuario.value);
}

for (const element of document.getElementsByName("edades")) {
    element.addEventListener("change", (e) => {
        if (e.target.checked) {
            info.innerHTML = `Radio pulsado: ${element.value}`
        }
    })
} 