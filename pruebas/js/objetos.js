const h11 = document.getElementById("h11");


/**
 * Primera forma de crear un objeto añadiendolo a mano
 */
let myAlumn = {
    name: "Antonio",
    surname: "Rodríguez",
    age: 29,
    active: true,
    mail: "antonio@mail.com",
    notes: [6, 7.86, 5, 9]

};

//Para borrar propiedades
delete myAlumn.name;

h11.innerHTML = "Nombre del alumno: " + myAlumn.name + " Nota 1: " + myAlumn.notes[0];


/**
 * Segunda forma creando al objeto llamando al constructor, y despues poniendo las propiedades
 * a mano como si estuvieran creadas de antes
 */
let myAlumn2 = new Object();
myAlumn2.name = "Cristian";
myAlumn2.surname = "Pepe";
myAlumn2.age = 12;
myAlumn2.active = false;
myAlumn2.mail = "Cristian@mail.com";
myAlumn2.notes = [7, 8, 9, 10];

h11.innerHTML += "<br> Nombre del alumno: " + myAlumn2.name + " Nota 1: " + myAlumn2.notes[0];

/**
 * Creamos otro alumno con este metodo que es por value
 */

let myAlumn3 = new Object();
Object.defineProperties(myAlumn3, {
    name: { value: "Pepe" },
    surname: { value: "perez" },
    age: { value: 23 }

});

h11.innerHTML += "<br> Nombre del alumno: " + myAlumn3.name;

/**
 * FOR OF PARA DEVOLVER TODAS LAS PROPIEDADES DEL PRIMER OBJETO
 * con entries muestra tanto el nombre de la propiedad como el valor
 * con values solo muestra el valor
 * con keys muestra solo el nombre de la propiedad
 */
let myAlums = new Array(myAlumn, myAlumn2, myAlumn3);

// for (const data of myAlums) {
//     console.dir("Datos de alumnos: " + Object.entries(data))    
// }

/**
 * Bucle para preguntar dentro del array de mis alumnos cada clave y su valor
 */
for (let data of myAlums) {
    let claves = Object.keys(data);
    for (let i of claves) {
        console.log("Valor de la clave: " + i + " es " + data[i]);
    }
}

/**
 * Para evitar que un objeto se le añadan propiedades
 */
Object.preventExtensions(myAlumn);
myAlumn.paco = "PACOOOOO";

