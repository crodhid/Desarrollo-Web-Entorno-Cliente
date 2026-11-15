let fechaHoy = document.getElementById("fecha-hoy");
let horaActual = document.getElementById("hora-actual");

window.onload = () => {
    formatoFecha();
    horaRefrescable();
    setInterval(horaRefrescable, 1000);
    pintarTablaSocios(arraySocios);
    estadisticas();
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
    if (apellidos.length < 2) {
        return socio.nombre + " " + apellidos[0];
    }
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
    let añoNac = Number(socioFecha[0]);
    let mesNac = Number(socioFecha[1]);
    let diaNac = Number(socioFecha[2]);

    let hoy = new Date();
    let edad = hoy.getFullYear() - añoNac;

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

/**
 * Devuelve la cuota con dos decimales y el símbolo del euro (35 -> "35.00 €").
 * @param {Object} socio
 * @returns {string}
 */
function mostrarCuota(socio) {
    return socio.cuota.toFixed(2) + " €";
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
 * Pasa a minúsculas y quita las tildes (Álvaro -> alvaro), sin usar normalize.
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
/**
 * Devuelve los socios cuyo nombre, apellidos o email contienen el texto del buscador.
 * Con menos de 2 caracteres devuelve todos. No modifica arraySocios.
 * @returns {Array}
 */
function buscarPorInput() {
    let textoBuscador = normalizar(document.getElementById("buscador").value.trim());

    if (textoBuscador.length < 2) {
        return [...arraySocios];
    }

    let nuevoArrayPintar = [];

    for (const elem of arraySocios) {
        if (normalizar(elem.nombre).includes(textoBuscador)
            || normalizar(elem.apellidos).includes(textoBuscador)
            || normalizar(elem.email).includes(textoBuscador)) {
            nuevoArrayPintar.push(elem);
        }
    }

    return nuevoArrayPintar;
}



/**
 * Devuelve los socios matriculados en la actividad seleccionada.
 * Con "todas" devuelve todos.
 * @returns {Array}
 */
function filtroActividad() {
    let valorActividad = document.getElementById("filtro-actividad").value;

    if (valorActividad == "todas") {
        return [...arraySocios];
    }

    let arrayAuxiliar = [];

    for (const elem of arraySocios) {
        if (elem.actividades.includes(valorActividad)) {
            arrayAuxiliar.push(elem);
        }
    }

    return arrayAuxiliar;
}

/**
 * Función que ordena la tabla dependiendo del value que le esta llegando
 */
function ordenarTabla(arrayAuxiliar) {
    let valorOrdenar = document.getElementById("orden").value;
    //hacemos una copia para no modificar el original

    switch (valorOrdenar) {
        case "nombre":
            arrayAuxiliar.sort((a, b) => a.nombre.localeCompare(b.nombre));
            break;
        case "apellidos":
            arrayAuxiliar.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
            break;
        case "jovenes":
            arrayAuxiliar.sort((a, b) => calculaEdad(a) - calculaEdad(b));
            break;
        case "antiguos":
            arrayAuxiliar.sort((a, b) => a.fechaAlta.localeCompare(b.fechaAlta));
            break;
    }


}


/**
 * Función que me calcula la antiguedad de los socios
 * @param {Object} socio 
 * @returns 
 */
function calcularAntiguedad(socio) {
    let socioFecha = socio.fechaAlta.split("-");
    let añoAlta = Number(socioFecha[0]);
    let mesAlta = Number(socioFecha[1]);
    let diaAlta = Number(socioFecha[2]);

    let hoy = new Date();
    let edad = hoy.getFullYear() - añoAlta;

    // getMonth() va de 0 a 11, por eso se le suma 1
    let mesActual = hoy.getMonth() + 1;
    let diaActual = hoy.getDate();

    if (mesAlta > mesActual || (mesAlta === mesActual && diaAlta > diaActual)) {
        edad--;
    }

    return edad;
}



/**
 * Cruza buscador y filtro de actividad (solo salen los socios que están en
 * las dos listas), ordena el resultado y pinta la tabla.
 */
function actualizarTabla() {
    let arrayTexto = buscarPorInput();
    let arrayActividad = filtroActividad();

    let lista = arrayTexto.filter(socio => arrayActividad.includes(socio));

    ordenarTabla(lista);
    pintarTablaSocios(lista);
}

//añado los eventos a las busquedas
document.getElementById("buscador").addEventListener("input", actualizarTabla);
document.getElementById("filtro-actividad").addEventListener("change", actualizarTabla);
document.getElementById("orden").addEventListener("change", actualizarTabla);

/**
 * Alterna la pantalla completa de la sección del listado.
 */
function pantallaCompleta() {
    let seccionTabla = document.getElementById("seccion-listado");

    if (document.fullscreenElement == null) {
        seccionTabla.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
let botonPantallaCompleta = document.getElementById("btn-pantalla-completa");
botonPantallaCompleta.addEventListener("click", pantallaCompleta);




// Referencia a la ventana secundaria
let secundaria = null;
let socioActual = null;   // socio que se va a mostrar en la ficha
let errorBuscar = document.getElementById("ficha-error");
let busquedaDNI = document.getElementById("ficha-dni");

/**
 * Busca el socio por DNI y abre la ficha en una ventana nueva
 * (o le manda el socio y la trae al frente si ya está abierta).
 * @param {Event} e  evento submit del formulario
 */
function abrirSecundaria(e) {
    e.preventDefault();

    let dni = busquedaDNI.value.trim().toUpperCase();
    // find devuelve el socio, o undefined si no hay ninguno con ese DNI
    let socio = arraySocios.find(elem => elem.dni === dni);

    if (socio === undefined) {
        errorBuscar.textContent = "El socio con ese DNI no existe";
        errorBuscar.hidden = false;
        return;
    }

    errorBuscar.hidden = true;
    socioActual = socio;

    if (secundaria !== null && !secundaria.closed) {
        // Ya está cargada: se le manda el socio directamente
        secundaria.recibirMensaje(socio);
        secundaria.focus();
    } else {
        secundaria = window.open("busquedaSocio.html", "secundaria", "width=520,height=700");

        // Si el navegador bloquea las ventanas emergentes, open() devuelve null
        if (secundaria === null) {
            errorBuscar.textContent = "El navegador ha bloqueado la ventana emergente.";
            errorBuscar.hidden = false;
        }
    }
}

/**
 * La llama la ventana secundaria cuando termina de cargar.
 * Es el momento seguro para mandarle el socio con recibirMensaje.
 */
function secundariaLista() {
    secundaria.recibirMensaje(socioActual);
}

document.getElementById("form-ficha").addEventListener("submit", abrirSecundaria);

// // Funcion en la cual me llega el mensaje desde la segunda, en este caso no hace nada
// function recibirDesdeSecundaria(texto) {
//     recibidoPrincipal.value = texto;
// }

/************************ELEMENTOS NECESARIOS PARA DAR DE ALTA A UN SOCIO */

let nombreAlta = document.getElementById("alta-nombre");
let apellidosAlta = document.getElementById("alta-apellidos");
let dniAlta = document.getElementById("alta-dni");
let emailAlta = document.getElementById("alta-email");
let telefonoAlta = document.getElementById("alta-telefono");
let nacAlta = document.getElementById("alta-nacimiento");
let actsAlta = document.getElementById("alta-actividades");

//p errores
let errorNombre = document.getElementById("error-nombre");
let errorApellidos = document.getElementById("error-apellidos");
let errorDni = document.getElementById("error-dni");
let errorEmail = document.getElementById("error-email");
let errorTlf = document.getElementById("error-telefono");
let errorNac = document.getElementById("error-nacimiento");
let errorActs = document.getElementById("error-actividades");




/**
 * Función que me valida un nombre con la expresión regular
 * @param {*} nombre 
 * @returns 
 */
function validaNombreYApellidos(nombre) {
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+( [A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;
    if (regexNombre.test(nombre)) {
        return true;
    }
    return false;
}


/**
 * Comprueba que el DNI tiene 8 dígitos y una letra, y que la letra es la correcta.
 * @param {string} dni
 * @returns {boolean}
*/
function validaDni(dni) {
    let letrasDNI = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    dni = dni.toUpperCase();

    //expresion regular para el dni
    if (!/^\d{8}[A-Z]$/.test(dni)) {
        return false;
    }

    let numero = Number(dni.slice(0, 8));

    return letrasDNI[numero % 23] === dni.charAt(8);
}


/**
 * Comprueba si ya existe un socio con ese DNI.
 * @param {string} dni
 * @returns {boolean}
 */
function dniRepetido(dni) {
    let socioEncontrado = arraySocios.find(elem => elem.dni === dni.toUpperCase());

    return socioEncontrado !== undefined;
}


/**
 * Función que me valida si un email es correcto o no
 * @param {*} email 
 * @returns 
 */
function validaEmail(email) {
    let regexEmail = /^[\w.+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
    return regexEmail.test(email);
}

/**
 * Función que valida si el telefono que me llega es correcto o no
 * @param {*} telefono 
 * @returns 
 */
function validaTlf(telefono) {
    let regexTlf = /^[6-9]\d{8}$/;
    return regexTlf.test(telefono);
}

/**
 * Función que me valida primero la fecha por el formato de llegada
 * Despues continua haciendole un split y creando una nueva fecha a dia de hoy
 * si esta es futura devuelve false, si no calculamos la edad y si es menor de 
 * 14 años devuelve false también, si no devuelve true
 * @param {*} fecha 
 * @returns 
 */
function validaFecha(fecha) {
    let regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regexFecha.test(fecha)) {
        return false;
    }

    let partes = fecha.split("/");
    let diaNac = Number(partes[0]);
    let mesNac = Number(partes[1]);
    let añoNac = Number(partes[2]);

    // Comprobamos que la fecha existe: si no, Date la "corrige"
    // (31/02 pasa a ser 03/03) y los valores dejan de coincidir
    let fechaNac = new Date(añoNac, mesNac - 1, diaNac);
    if (fechaNac.getFullYear() !== añoNac
        || fechaNac.getMonth() !== mesNac - 1
        || fechaNac.getDate() !== diaNac) {
        return false;
    }

    let hoy = new Date();

    // Comprobamos que no es una fecha futura
    if (fechaNac > hoy) {
        return false;
    }

    let edad = hoy.getFullYear() - añoNac;

    // getMonth() va de 0 a 11, por eso se le suma 1
    let mesActual = hoy.getMonth() + 1;
    let diaActual = hoy.getDate();

    // Si aún no ha cumplido años este año, se resta uno
    if (mesNac > mesActual || (mesNac === mesActual && diaNac > diaActual)) {
        edad--;
    }

    return edad >= 14;
}

/**
 * Función que calcula el id a poner en mi socio nuevo insertado
 * (el siguiente al mayor id que exista)
 * @param {*} arraySocios 
 * @returns 
 */
function calculaId(arraySocios) {
    let id = "SOC-";

    let mayor = 0;
    for (const elem of arraySocios) {
        let numero = Number(elem.id.slice(4));   // "SOC-0007" -> 7
        if (numero > mayor) {
            mayor = numero;
        }
    }
    let numeroId = mayor + 1;

    //El padstart va rellenando el texto con lo especificado hasta que alcanza la longitud
    //que yo le digo
    return id + String(numeroId).padStart(4, "0");
}

/**
 * CAMBIO: función nueva. Devuelve la fecha de hoy en formato aaaa-mm-dd
 * usando la hora local (toISOString usa UTC y puede dar el día anterior).
 * @returns {string}
 */
function fechaAltaHoy() {
    let hoy = new Date();
    let anio = hoy.getFullYear();
    let mes = String(hoy.getMonth() + 1).padStart(2, "0");
    let dia = String(hoy.getDate()).padStart(2, "0");

    return anio + "-" + mes + "-" + dia;
}

/************************FUNCIÓN NUEVA: DAR DE ALTA A UN SOCIO */

let formAlta = document.getElementById("form-alta");
let avisoAlta = document.getElementById("aviso-alta");

/**
 * Pone la primera letra de cada palabra en mayúscula (maría josé -> María José).
 * @param {string} texto
 * @returns {string}
 */
function mayusculaPrimera(texto) {
    texto = texto.toLowerCase();
    let arrayTexto = texto.split(" ");
    let resultado = "";

    for (const elem of arrayTexto) {
        // primera letra en mayúscula + el resto de la palabra tal cual
        resultado += elem.charAt(0).toUpperCase() + elem.slice(1) + " ";
    }

    //quito el espacio sobrante del final
    return resultado.trim();
}

/**
 * Valida el formulario de alta. Si hay errores, los escribe en el párrafo de cada campo;
 * si todo es correcto, añade el socio con el formato del array, vacía el formulario,
 * avisa y actualiza el listado.
 * @param {Event} e  evento submit del formulario
 */
function añadeSocio(e) {
    e.preventDefault();

    let nombre = nombreAlta.value.trim();
    let apellidos = apellidosAlta.value.trim();
    let dni = dniAlta.value.trim().toUpperCase();
    let email = emailAlta.value.trim();
    let telefono = telefonoAlta.value.replace(/\s/g, "");   // se admiten espacios al escribirlo
    let nac = nacAlta.value.trim();

    // actsAlta es el fieldset y no tiene value: se recorren los checkboxes y se guardan los marcados
    let checks = document.querySelectorAll('input[name="actividad"]');
    let acts = [];

    for (let i = 0; i < checks.length; i++) {
        if (checks[i].checked) {
            acts.push(checks[i].value);
        }
    }
    // Vacio los errores y el aviso de la vez anterior
    errorNombre.textContent = "";
    errorApellidos.textContent = "";
    errorDni.textContent = "";
    errorEmail.textContent = "";
    errorTlf.textContent = "";
    errorNac.textContent = "";
    errorActs.textContent = "";
    avisoAlta.hidden = true;

    //  quito también el rojo de los campos de la vez anterior
    nombreAlta.style.border = "";
    apellidosAlta.style.border = "";
    dniAlta.style.border = "";
    emailAlta.style.border = "";
    telefonoAlta.style.border = "";
    nacAlta.style.border = "";
    actsAlta.style.border = "";

    let hayErrores = false;

    if (!validaNombreYApellidos(nombre)) {
        errorNombre.textContent = "Solo letras y un único espacio entre palabras";
        nombreAlta.style.border = "2px solid red";   
        hayErrores = true;
    }

    if (!validaNombreYApellidos(apellidos)) {
        errorApellidos.textContent = "Solo letras y un único espacio entre palabras";
        apellidosAlta.style.border = "2px solid red";   
        hayErrores = true;
    }

    if (!validaDni(dni)) {
        errorDni.textContent = "DNI incorrecto: 8 dígitos y la letra que corresponde";
        dniAlta.style.border = "2px solid red";   
        hayErrores = true;
    } else if (dniRepetido(dni)) {
        errorDni.textContent = "Ya existe un socio con ese DNI";
        dniAlta.style.border = "2px solid red";   
        hayErrores = true;
    }

    if (!validaEmail(email)) {
        errorEmail.textContent = "Formato usuario@dominio.extensión";
        emailAlta.style.border = "2px solid red";   
        hayErrores = true;
    }

    if (!validaTlf(telefono)) {
        errorTlf.textContent = "9 dígitos que empiecen por 6, 7, 8 o 9";
        telefonoAlta.style.border = "2px solid red";   
        hayErrores = true;
    }

    if (!validaFecha(nac)) {
        errorNac.textContent = "Fecha dd/mm/aaaa válida, no futura y con 14 años como mínimo";
        nacAlta.style.border = "2px solid red";    
        hayErrores = true;
    }

    if (acts.length === 0) {
        errorActs.textContent = "Marca al menos una actividad";
        actsAlta.style.border = "2px solid red";   
        hayErrores = true;
    }

    if (hayErrores) {
        return;
    }

    // El id se calcula ANTES de añadir el socio al array
    let socioNuevo = {
        id: calculaId(arraySocios),
        nombre: mayusculaPrimera(nombre),
        apellidos: mayusculaPrimera(apellidos),
        dni: dni,
        email: email.toLowerCase(),
        telefono: telefono,
        fechaNacimiento: nac.split("/").reverse().join("-"),   // dd/mm/aaaa -> aaaa-mm-dd
        fechaAlta: fechaAltaHoy(),     
        actividades: acts,
        cuota: 30   // cuota puesta a mano
    };

    arraySocios.push(socioNuevo);

    formAlta.reset();
    avisoAlta.textContent = "Socio " + socioNuevo.nombre + " dado de alta con id " + socioNuevo.id;
    avisoAlta.hidden = false;

    actualizarTabla();   
    estadisticas();

}

formAlta.addEventListener("submit", añadeSocio);


/********************ESTADISTICAS */
let totalSocios = document.getElementById("est-total");
let totalIngresos = document.getElementById("est-ingresos");
let totalMediaIngresos = document.getElementById("est-cuota-media");
let totalEdadMedia = document.getElementById("est-edad-media");
let totalEdadMinima = document.getElementById("est-edad-min");
let totalEdadMax = document.getElementById("est-edad-max");
let totalActividadPopular = document.getElementById("est-popular");
let totalMenores = document.getElementById("est-menores");
let totalTodosActividad = document.getElementById("est-todos-actividad");
let totalVeteranos = document.getElementById("est-veteranos");
let totalDominios = document.getElementById("est-dominios");

/**
 * Función que rellena todas las estadísticas con los datos actuales.
 */
function estadisticas() {
    totalSocios.textContent = recuentaSocios();
    totalIngresos.textContent = ingresosMensuales() + " €";
    totalMediaIngresos.textContent = mediaIngresosMensuales() + " €";
    totalEdadMedia.textContent = edadMedia();
    totalEdadMinima.textContent = edadMinima();
    totalEdadMax.textContent = edadMaxima();
    totalActividadPopular.textContent = actividadPopular();
    totalMenores.textContent = menorDeEdad();
    totalTodosActividad.textContent = todosConActividad();
    totalVeteranos.textContent = textoVeteranos();
    totalDominios.textContent = dominiosCorreo().join(", ");
}

/**
 * Función que devuelve si todos los socios tienen al menos una actividad
 * @returns {string} "Sí" o "No"
 */
function todosConActividad() {
    for (const elem of arraySocios) {
        if (elem.actividades.length === 0) {
            return "No";
        }
    }
    return "Sí";   
}

/**
 * Función que me dice cuantos socios tengo
 * @returns 
 */
function recuentaSocios() {
    return arraySocios.length;
}

/**
 * Función que me calcula los ingresos mensuales
 * @returns 
 */
function ingresosMensuales() {
    let total = 0;
    for (const elem of arraySocios) {
        total += elem.cuota;
    }
    return total.toFixed(2);
}

/**
 * Función que me da una media mensual de cuanto paga cada socio
 * @returns 
 */
function mediaIngresosMensuales() {
    return (ingresosMensuales() / arraySocios.length).toFixed(2);
}

/**
 * Función que me calcula la edad media
 */
function edadMedia() {
    let edad = 0;
    for (const elem of arraySocios) {
        edad += calculaEdad(elem);
    }
    return (edad / arraySocios.length).toFixed(1);
}

/**
 * Funcion que me calcula la edad minima
 * @returns 
 */
function edadMinima() {
    let edad = 10000;
    for (const elem of arraySocios) {
        if (calculaEdad(elem) < edad) {
            edad = calculaEdad(elem);
        }
    }
    return edad;
}

/**
 * Función que me calcula la edad máxima
 * @param {} params 
 * @returns 
 */
function edadMaxima() {
    let edad = 0;
    for (const elem of arraySocios) {
        if (calculaEdad(elem) > edad) {
            edad = calculaEdad(elem);
        }
    }
    return edad;
}

/**
 * Función que calcula la actividad más popular
 */
function actividadPopular() {
    let natacion = 0;
    let yoga = 0;
    let padel = 0;
    let musculacion = 0;
    let spinning = 0;
    let pilates = 0;
    for (const elem of arraySocios) {
        for (const elem2 of elem.actividades) {
            switch (elem2) {
                case "natación":
                    natacion++;
                    break;
                case "yoga":
                    yoga++;
                    break;
                case "pádel":
                    padel++;
                    break;
                case "musculación":
                    musculacion++;
                    break;
                case "spinning":
                    spinning++;
                    break;
                case "pilates":
                    pilates++;
                    break;
                default:
                    break;
            }
        }
    }

    let nombreMax = "natación";
    let cantidadMax = natacion;

    if (yoga > cantidadMax) {
        nombreMax = "yoga";
        cantidadMax = yoga;
    }
    if (padel > cantidadMax) {
        nombreMax = "pádel";
        cantidadMax = padel;
    }
    if (musculacion > cantidadMax) {
        nombreMax = "musculación";
        cantidadMax = musculacion;
    }
    if (spinning > cantidadMax) {
        nombreMax = "spinning";
        cantidadMax = spinning;
    }
    if (pilates > cantidadMax) {
        nombreMax = "pilates";
        cantidadMax = pilates;
    }

    return nombreMax + ": " + cantidadMax + " socios";
}

/**
 * Función que devuelve si o no si hay algun menor de edad
 */
function menorDeEdad(){
    let booleano = false;
    for (const elem of arraySocios) {
        if (calculaEdad(elem)<18) {
            booleano = true;
        }
    }
    return booleano?"Sí":"No";   
}

/**
 * Función que devuelve los 3 socios más veteranos (fecha de alta más antigua).
 * Hace una copia del array para no modificar el original.
 * @returns {Array}
 */
function sociosVeteranos() {
    let copia = [...arraySocios];

    // Las fechas están en formato aaaa-mm-dd, así que se pueden comparar como texto
    copia.sort((a, b) => a.fechaAlta.localeCompare(b.fechaAlta));

    return copia.slice(0, 3);
}

/**
 * Función que devuelve los nombres de los 3 socios más veteranos como texto.
 * @returns {string}
 */
function textoVeteranos() {
    let cadena = "";
    for (const elem of sociosVeteranos()) {
        cadena += formatoNombre(elem) + ", ";
    }
    return cadena.slice(0, -2);
}


/**
 * Función que devuelve los dominios de correo que usan los socios, sin repetir.
 * @returns {Array}
 */
function dominiosCorreo() {
    let dominios = [];

    for (const elem of arraySocios) {
        let dominio = elem.email.split("@")[1];

        if (!dominios.includes(dominio)) {
            dominios.push(dominio);
        }
    }

    return dominios;
}