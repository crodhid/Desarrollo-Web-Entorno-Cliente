
/**
 * Ejercicio 1
 * Tengo que hacer la creación de distintos objetos de los cuales
 * unos heredan de otros
 */
let btnEj1 = document.getElementById("btnEj1");
let salida1 = document.getElementById("salida1");
/**
 * Defino mi objeto persona y dentro de el le pongo un metodo tambien con una funcion dentro
 */
let persona = {
    nombre : "Cristian",
    edad : 20,
    genero : "Masculino",
    obtDetalles : function (){
        return "Nombre: " + this.nombre + " Edad: " + this.edad+ " Genero: " + this.genero;
    }

};

/**
 * Creo mi objeto estudiante 
 * e implementa su propio método
 */
let estudiante = {
    nombre:"Cristian",
    edad: 20,
    genero: "masculino",
    curso : "2ºDAW",
    grupo : "A",
    registrar : function (){
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Género: " + this.genero + " Curso: " + this.curso + " Grupo: " + this.grupo;
    }
};

/**
 * Creo mi objeto profesor 
 * e implementa su propio método
 */
let profesor = {
    nombre:"Cristian",
    edad: 20,
    genero: "masculino",
    curso : "2ºDAW",
    grupo : "A",
    asignatura : "JS",
    nivel : "Alto",
    asignar : function (){
        return "Nombre: " + this.nombre + " Edad: " + this.edad + " Género: " + this.genero + " Curso: " + this.curso + " Grupo: " + this.grupo + " Asignatura: " + this.asignatura + " Nivel: " + this.nivel;
    }
};

btnEj1.onclick = function () {
    salida1.innerHTML += persona.obtDetalles();
    salida1.innerHTML += "<br>" + estudiante.registrar();
    salida1.innerHTML += "<br>" + profesor.asignar();

}

/**
 * Ejercicio 2
 * Calcular pendiente, inclinacion, y angulo de inclinacion
 */
let btnej2Pendiente = document.getElementById("btnej2Pendiente");
let btnej2Inclinacion = document.getElementById("btnej2Inclinacion");
let btnej2Porcentaje = document.getElementById("btnej2Pendiente");btnej2Porcentaje;