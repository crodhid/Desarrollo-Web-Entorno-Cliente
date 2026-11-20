
//Importamos mi array de objetos obstaculos de la clase obstaculos
import { obstaculos } from "./Obstaculos.js";

const personaje = document.getElementById("personaje");
//Esto me guarda todos los estilos de mi personaje
const personajeStyle = window.getComputedStyle(personaje);

//obtenemos en cuanto esta el left en nuestro personaje
let positionLeft = personajeStyle.getPropertyValue("left");
let positionTop = personajeStyle.getPropertyValue("top");
let positionWidth = personajeStyle.getPropertyValue("width");
//quitamos los px del final de mi cadena convirtiendolo a número
positionLeft = new Number(positionLeft.substring(0, (positionLeft.length - 2)));
positionTop = new Number(positionTop.substring(0, (positionTop.length - 2)));
positionWidth = new Number(positionWidth.substring(0, (positionWidth.length - 2)));
const velocidad = 10;

dibujaObstaculos();

document.addEventListener("keydown", function (e) {
    if (e.repeat) {
        switch (e.key) {
            case "ArrowRight":
                if (!colision(e.key)) {
                    //Le sumamos 1 a positionLeft
                    positionLeft += velocidad;
                    console.log(`Posición ${positionLeft}`);
                    personaje.style.left = positionLeft + "px"
                }

                break;
            case "ArrowLeft":
                if (!colision(e.key)) {
                    //Le sumamos 1 a positionLeft
                    positionLeft -= velocidad;
                    console.log(`Posición ${positionLeft}`);
                    personaje.style.left = positionLeft + "px"
                    break;
                }
            case "ArrowUp":
                if (!colision(e.key)) {
                    //Para subir le decrementamos el top
                    positionTop -= velocidad;
                    console.log(`Posición ${positionTop}`);
                    personaje.style.top = positionTop + "px"
                    break;
                }
            case "ArrowDown":
                if (!colision(e.key)) {
                    //Para bajar incrementamos el top
                    positionTop += velocidad;
                    console.log(`Posición ${positionTop}`);
                    personaje.style.top = positionTop + "px"
                    break;
                }

            default:
                break;
        }
    }
})

/**
 * Función para dibujar los obstaculos
 */
function dibujaObstaculos() {
    for (const elem of obstaculos) {
        let obstaculo = document.createElement("div");
        obstaculo.style.position = "absolute";
        obstaculo.style.left = elem.x + "px";
        obstaculo.style.top = elem.y + "px";
        obstaculo.style.width = elem.ancho + "px";
        obstaculo.style.height = elem.alto + "px";
        obstaculo.style.backgroundColor = elem.colorFondo;
        document.body.appendChild(obstaculo);
    }
}

function colision(direc) {
    let colision = false;
    switch (direc) {
        case "ArrowRight":
            for (const elem of obstaculos) {
                if (((positionLeft + positionWidth) >= elem.x)) {
                    if (positionTop < (elem.y + elem.alto)) {
                        colision = true;
                        break;
                    }
                    
                }
            }
            break;
        case "ArrowLeft":
            break;
        case "ArrowUp":
            break;
        case "ArrowDown":
            break;

        default:
            break;
    }
    return colision;
}