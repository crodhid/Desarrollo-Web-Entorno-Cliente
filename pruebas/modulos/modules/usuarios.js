export { saluda, edad }

function saluda(nombre) {
    return  iniciaSaludo() + " " + nombre;
}

var edad = 30;

//Si utilizamos una función en una que se exporta ya no hace falta volver a exportarla
function iniciaSaludo() {
    let fecha = new Date();
    let result="";
    if (fecha.getHours < 12) {
        result = "Buenos días"
    }else{
        result = "Buenas noches"
    }
    return result;
}

export var password = "asasasa3fefghyu";

export default function muestraPassword() {
    return password;
}

export class Usuario {
    /**
     * Constructor que le tengo puesto que si no le llega nada pone defecto en mis variables
     * @param {*} nombre 
     * @param {*} apellidos 
     */
    constructor(nombre = "defecto", apellidos = "defecto") {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.password = "asas96564assff";
    }

    nombreCompleto() {
        return this.nombre + " " + this.apellidos;
    }

    saluda() {
        return "Hola " + this.nombreCompleto();
    }
}