const expresion = document.getElementById("expresion");
const parrafo = document.getElementById("parrafo");
const comprobar = document.getElementById("comprobar");
const regexDNI_NIE = /^([0-9]{8}|[XYZ][0-9]{7})[A-Z]$/i;
const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const telefono = document.getElementById("telefono");
const comprobarTelefono = document.getElementById("comprobarTelefono");
//Teléfono que puede empezzar por prefijo o directamente los 9 numeros
const regexTlf = /^(\+\d{2} | \d{9})$/

/**
 * Esto hace que pueda empezar por 8 números y una letra O XYZ y 7 numeros
 * el $ hace que acabe justo ahi, el /i ignora mayusculas y minusculas
 */
comprobar.onclick = function () {
    
   

    if (regexDNI_NIE.test(expresion.value.trim())) {
        parrafo.innerHTML = "El DNI/NIE es válido";
        parrafo.style.color = "green"; // Opcional: un toque visual de éxito
    } else {
        parrafo.innerHTML = "El DNI/NIE no es válido";
        parrafo.style.color = "red";   // Opcional: un toque visual de error
    }
};
