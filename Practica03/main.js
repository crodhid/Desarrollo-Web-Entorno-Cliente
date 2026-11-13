let fechaHoy = document.getElementById("fecha-hoy");
let horaActual = document.getElementById("hora-actual");

window.onload = () => {
    formatoFecha();
    horaRefrescable();
    setInterval(horaRefrescable, 1000);
    pintarTablaSocios(arraySocios);
};

/**
 * Muestra la fecha de hoy en texto con la primera letra en mayúscula.
 */
function formatoFecha() {
    let hoy = new Date();

    let texto = hoy.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    fechaHoy.textContent = texto.charAt(0).toUpperCase() + texto.slice(1);
}

/**
 * Muestra la hora actual (hh:mm:ss). Se llama cada segundo desde setInterval.
 */
function horaRefrescable() {
    horaActual.textContent = new Date().toLocaleTimeString("es-ES");
}


/**
 * SOCIOS CREADOS
 */

let arraySocios = [
    {
        id: "SOC-0001",
        nombre: "Lucía",
        apellidos: "Martín Ruiz",
        dni: "12345678Z",
        email: "lucia.martin@correo.es",
        telefono: "612345678",
        fechaNacimiento: "1995-03-14",
        fechaAlta: "2019-09-02",
        actividades: ["natación", "yoga"],
        cuota: 35
    },
    {
        id: "SOC-0002",
        nombre: "Álvaro",
        apellidos: "García López",
        dni: "23456789D",
        email: "alvaro.garcia@gmail.com",
        telefono: "655123456",
        fechaNacimiento: "1988-11-02",
        fechaAlta: "2017-01-15",
        actividades: ["musculación", "spinning"],
        cuota: 42
    },
    {
        id: "SOC-0003",
        nombre: "María José",
        apellidos: "Fernández Soto",
        dni: "34567890V",
        email: "mariajose.fernandez@correo.es",
        telefono: "699876543",
        fechaNacimiento: "2001-07-21",
        fechaAlta: "2022-03-10",
        actividades: ["pilates"],
        cuota: 25
    },
    {
        id: "SOC-0004",
        nombre: "Carlos",
        apellidos: "Sánchez Pérez",
        dni: "45678901G",
        email: "carlos.sanchez@hotmail.com",
        telefono: "722334455",
        fechaNacimiento: "1979-02-09",
        fechaAlta: "2015-06-20",
        actividades: ["pádel", "natación", "musculación"],
        cuota: 55
    },
    {
        id: "SOC-0005",
        nombre: "Laura",
        apellidos: "Gómez Navarro",
        dni: "56789012B",
        email: "laura.gomez@gmail.com",
        telefono: "611223344",
        fechaNacimiento: "1999-12-30",
        fechaAlta: "2023-09-01",
        actividades: ["yoga", "pilates"],
        cuota: 30
    },
    {
        id: "SOC-0006",
        nombre: "Pablo",
        apellidos: "Ruiz Molina",
        dni: "67890123B",
        email: "pablo.ruiz@correo.es",
        telefono: "688990011",
        fechaNacimiento: "2010-05-18",
        fechaAlta: "2024-02-12",
        actividades: ["natación"],
        cuota: 20
    },
    {
        id: "SOC-0007",
        nombre: "Nuria",
        apellidos: "Ortega Díaz",
        dni: "78901234X",
        email: "nuria.ortega@outlook.com",
        telefono: "933445566",
        fechaNacimiento: "1970-08-25",
        fechaAlta: "2012-10-05",
        actividades: ["yoga", "spinning"],
        cuota: 38
    },
    {
        id: "SOC-0008",
        nombre: "Iván",
        apellidos: "Castro Vega",
        dni: "89012345E",
        email: "ivan.castro@gmail.com",
        telefono: "644556677",
        fechaNacimiento: "1992-04-03",
        fechaAlta: "2020-01-27",
        actividades: ["pádel"],
        cuota: 28
    },
    {
        id: "SOC-0009",
        nombre: "Sofía",
        apellidos: "Ramos Iglesias",
        dni: "90123456A",
        email: "sofia.ramos@correo.es",
        telefono: "677889900",
        fechaNacimiento: "2004-09-15",
        fechaAlta: "2021-05-30",
        actividades: ["spinning", "pádel", "yoga"],
        cuota: 48
    },
    {
        id: "SOC-0010",
        nombre: "Daniel",
        apellidos: "Torres Núñez",
        dni: "11223344B",
        email: "daniel.torres@outlook.com",
        telefono: "666112233",
        fechaNacimiento: "1985-01-11",
        fechaAlta: "2018-11-08",
        actividades: ["musculación"],
        cuota: 32
    }
];


function cargaTabla() {
}

/**
 * Devuelve las iniciales del socio: primera letra del nombre
 * + primera letra del primer apellido (Lucía Martín Ruiz -> "LM").
 * @param {Object} socio
 * @returns {string}
 */
function formatoId(socio) {
    return (socio.nombre.charAt(0) + socio.apellidos.charAt(0)).toUpperCase();
}

/**
 * Spliteo mis apellidos para despues poder devolver la forma que yo quiero
 * de nombre
 * @param {Object} socio 
 * @returns 
 */
function formatoNombre(socio) {
    let apellidos = socio.apellidos.split(" ");
    return (socio.nombre + " " + apellidos[0] + " " + apellidos[1].charAt(0) + ".");
}

/**
 * Oculta parcialmente el email: deja visibles las 2 primeras letras
 * y el dominio (lucia.martin@correo.es -> lu**********@correo.es).
 * @param {Object} socio
 * @returns {string}
 */
function formatoEmail(socio) {
    let emailSplit = socio.email.split("@");
    let contadorCaracteres = emailSplit[0].length;
    let emailResultado = emailSplit[0].slice(0, 2);

    for (let i = 0; i < contadorCaracteres - 2; i++) {
        emailResultado += "*";
    }

    emailResultado += "@";
    emailResultado += emailSplit[1];

    return emailResultado;
}

/**
 * Calcula los años cumplidos del socio a día de hoy.
 * @param {Object} socio
 * @returns {number}
 */
function calculaEdad(socio) {
    let socioFecha = socio.fechaNacimiento.split("-");
    let anioNac = Number(socioFecha[0]);
    let mesNac = Number(socioFecha[1]);
    let diaNac = Number(socioFecha[2]);

    let hoy = new Date();
    let edad = hoy.getFullYear() - anioNac;

    // getMonth() va de 0 a 11, por eso se le suma 1
    let mesActual = hoy.getMonth() + 1;
    let diaActual = hoy.getDate();

    // Si aún no ha cumplido años este año, se resta uno
    if (mesNac > mesActual || (mesNac === mesActual && diaNac > diaActual)) {
        edad--;
    }

    return edad;
}

/**
 * Función en la que recorro mi array de actividades y borro la última posición de mi cadena para quitar
 * la ,
 * @param {Object} socio 
 * @returns 
 */
function mostrarActividades(socio) {
    let cadena = "";
    for (const elem of socio.actividades) {
        cadena += elem + ", ";
    }
    //Hago esto para borrar la coma del final, esto coge la cadena desde el inicio
    //hasta la ultima posicion -2 porque tengo un espacio y coma
    cadena = cadena.slice(0, -2);
    return cadena;
}

function mostrarCuota(socio) {
    return socio.cuota.toFixed(2);
}

/**
 * Pinta en la tabla los socios que recibe por parámetro.
 * Si la lista está vacía, muestra el mensaje de "sin resultados".
 * @param {Array} listaSocios
 */
function pintarTablaSocios(listaSocios) {
    const tbody = document.getElementById("cuerpo-tabla");

    if (listaSocios.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="vacio">No hay socios que coincidan</td></tr>`;
        return;
    }

    let filas = "";

    for (let socio of listaSocios) {
        filas += `
            <tr>
                <td><span class="iniciales">${formatoId(socio)}</span>${socio.id}</td>
                <td>${formatoNombre(socio)}</td>
                <td>${formatoEmail(socio)}</td>
                <td class="num">${calculaEdad(socio)}</td>
                <td>${mostrarActividades(socio)}</td>
                <td class="num">${mostrarCuota(socio)}</td>
            </tr>`;
    }

    // Se asigna una sola vez al final, es más rápido que usar += sobre el innerHTML
    tbody.innerHTML = filas;
}

/**
 * Pasa a minúsculas y quita las tildes (Álvaro -> alvaro).
 * @param {string} texto
 * @returns {string}
 */
function normalizar(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

/**
 * Filtra los socios por el texto del buscador (nombre, apellidos o email).
 * No empieza a buscar hasta que hay 2 caracteres. No modifica arraySocios.
 * El includes busca dentro del texto el texto que yo le paso
 */
function buscarPorInput() {
    let textoBuscador = normalizar(document.getElementById("buscador").value.trim());

    if (textoBuscador.length < 2) {
        pintarTablaSocios(arraySocios);
        return;
    }

    let nuevoArrayPintar = [];

    for (const elem of arraySocios) {
        if (normalizar(elem.nombre).includes(textoBuscador)
            || normalizar(elem.apellidos).includes(textoBuscador)
            || normalizar(elem.email).includes(textoBuscador)) {
            nuevoArrayPintar.push(elem);
        }
    }

    pintarTablaSocios(nuevoArrayPintar);
}

//añado el evento al input
document.getElementById("buscador").addEventListener("input",buscarPorInput);