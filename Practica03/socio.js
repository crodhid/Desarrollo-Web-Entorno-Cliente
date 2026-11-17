let iniciales = document.getElementById("ficha-iniciales");
let nombreDato = document.getElementById("ficha-nombre");
let idDato = document.getElementById("ficha-id");
let dniDato = document.getElementById("ficha-dni-dato");
let emailDato = document.getElementById("ficha-email");
let tlfDato = document.getElementById("ficha-telefono");
let nacDato = document.getElementById("ficha-nacimiento");
let altaDato = document.getElementById("ficha-alta");
let actsDato = document.getElementById("ficha-actividades");
let cuotaDato = document.getElementById("ficha-cuota");
let curiosidades = document.getElementById("ficha-curiosidades");

// socio a recibir de la primera ventana
let socioRecibido = null;

/**
 * La llama la ventana principal para pasarnos el socio.
 * Lo guarda y pinta sus datos en los campos.
 * @param {Object} objeto  socio a mostrar
 */
function recibirMensaje(objeto) {
    socioRecibido = objeto;

    let nombre = socioRecibido.nombre + socioRecibido.apellidos;
    nombre = normalizar(nombre);
    let curiosidadesNum = 0;
    for (let i = 0; i < nombre.length; i++) {
        if ((nombre.charAt(i) == "a") || (nombre.charAt(i) == "e") || (nombre.charAt(i) == "i") ||
                (nombre.charAt(i) == "o") || (nombre.charAt(i) == "u")) {
            curiosidadesNum++;
        }
        
    }

    iniciales.textContent = window.opener.formatoId(socioRecibido);
    nombreDato.textContent = socioRecibido.nombre + " " + socioRecibido.apellidos;
    idDato.textContent = socioRecibido.id;
    dniDato.textContent = socioRecibido.dni;
    emailDato.textContent = socioRecibido.email;
    tlfDato.textContent = socioRecibido.telefono;
    nacDato.textContent = socioRecibido.fechaNacimiento;
    altaDato.textContent = socioRecibido.fechaAlta;
    curiosidades.textContent = "El nombre del socio tiene " + curiosidadesNum + " vocales";
    // estas funciones están en la página padre, por eso van con window.opener
    actsDato.textContent = window.opener.mostrarActividades(socioRecibido);
    cuotaDato.textContent = window.opener.mostrarCuota(socioRecibido);
}

// Cuando esta ventana ya ha cargado, avisa al padre para que le mande el socio
window.onload = () => {
    if (window.opener !== null && !window.opener.closed) {
        window.opener.secundariaLista();
    }
};


/**
 * Pasa a minúsculas y quita las tildes
 * @param {string} texto
 * @returns {string}
 */
function normalizar(texto) {
    return texto
        .toLowerCase()
        .replace(/[áàäâ]/g, "a")
        .replace(/[éèëê]/g, "e")
        .replace(/[íìïî]/g, "i")
        .replace(/[óòöô]/g, "o")
        .replace(/[úùüû]/g, "u");
}

// // Envía el contenido del campo a la ventana principal, en este caso no me hace nada no me serviria
// function enviarPrincipal() {
//     // window.opener es la ventana que nos abrió
//     if (window.opener === null || window.opener.closed) {
//         avisoSecundaria.textContent = "La ventana principal no está disponible.";
//         return;
//     }
//     avisoSecundaria.textContent = "";
//     window.opener.recibirDesdeSecundaria(mensajeSecundaria.value);
// }

// btnEnviarPrincipal.onclick = enviarPrincipal;