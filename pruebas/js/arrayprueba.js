
let myArray = new Array();
myArray.push("Pepe");
myArray.push(56);
myArray.push(true);
myArray.push("Ana");
myArray.push("76.98");
myArray.push(new Array(1, 2, 3));
myArray.push({ modelo: "Ford", matricula: "123456A" });
myArray.push(false);
myArray.push(Math.PI);

for (let i = 0; i < myArray.length; i++) {
    const elem = myArray[i];
    let texto;

    if (
        typeof elem === "object" && elem !== null &&
        Object.hasOwn(elem, "modelo") &&
        Object.hasOwn(elem, "matricula")
    ) {
        texto = elem.modelo + " " + elem.matricula;
    } else {
        texto = elem;
    }

    h11.textContent += texto;
    if (i < myArray.length - 1) {
        h11.textContent += " - ";
    }
}

/**
 * Funcion para guardar en otro array los componentes booleanos dentro de mi anterior array
 * para que sea una funcion arrow seria myArray.filter((elem) =>)
 */
let myArrayBoolean = myArray.filter(function(elem){
    return typeof elem == "boolean"
})

h11.textContent = "";
for (const elem of myArrayBoolean) {
    h11.textContent += elem + " - ";
}

/**
 * Mapas
 * Las claves no tienen que ser del mismo tipo pero SI TIENEN QUE SER UNICAS
 * los valores igual del tipo que queramos
 */
let myMap = new Map();
myMap.set(1,"Pepe");
myMap.set(2,"María");
myMap.set(true,"25.6");
myMap.set("123456c", "Ana");
 h11.innerText = "";

 /**
  * Bucle para recorrer mi mapa
  */
 for([clave,valor] of myMap){
    h11.innerHTML += `Clave ${clave}: ${valor}<br>`;
 }

 /**
  * Tamaño del mapa
  */
 h11.innerHTML += "Tamaño del mapa: " + myMap.size;
