let mensajeSecundaria = document.getElementById("mensajeSecundaria");
let btnEnviarPrincipal = document.getElementById("btnEnviarPrincipal");
let recibidoSecundaria = document.getElementById("recibidoSecundaria");
let avisoSecundaria = document.getElementById("avisoSecundaria");

// La llamará la principal para entregarnos su mensaje
function recibirMensaje(texto) {
    recibidoSecundaria.value = texto;
}

// Envía el contenido del campo a la ventana principal
function enviarPrincipal() {
    // window.opener es la ventana que nos abrió
    if (window.opener === null || window.opener.closed) {
        avisoSecundaria.textContent = "La ventana principal no está disponible.";
        return;
    }
    avisoSecundaria.textContent = "";
    window.opener.recibirDesdeSecundaria(mensajeSecundaria.value);
}

btnEnviarPrincipal.onclick = enviarPrincipal;