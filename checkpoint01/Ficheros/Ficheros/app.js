
// Catálogo de servicios: el id coincide con el id del input del HTML
const SERVICIOS = [
  { id: "aceite", nombre: "Cambio de aceite", precio: 45 },
  { id: "filtros", nombre: "Cambio de filtros", precio: 30 },
  { id: "frenos", nombre: "Pastillas de freno (eje)", precio: 80 },
  { id: "neumaticos", nombre: "Neumático", precio: 70 },
  { id: "alineado", nombre: "Alineado de dirección", precio: 35 }
];

/**
 * Obtencion de mis items del html
 */
let cliente = document.getElementById("cliente");
let matricula = document.getElementById("matricula");
let vehiculo = document.getElementById("vehiculo");
let aceite = document.getElementById("aceite");
let filtros = document.getElementById("filtros");
let frenos = document.getElementById("frenos");
let neumaticos = document.getElementById("neumaticos");
let alineado = document.getElementById("alineado");
let pago = document.getElementById("pago");
let btnPresupuesto = document.getElementById("btnPresupuesto");
let mensaje = document.getElementById("mensaje");
let presupuesto = document.getElementById("presupuesto");
let total = document.getElementById("total");
let totalResultadoAbajo = document.getElementById("totalResultadoAbajo");

function calculaTotal(){
  //reseteo mi zona de error y mi zona de resultado
  mensaje.innerHTML =  "";
  presupuesto.innerHTML = "";
  total.innerHTML = "";


  //Definimos mis variables con los values
  let clienteCalculo = cliente.value; 
  console.log(clienteCalculo)
  let matriculaCalculo = matricula.value;
  let vehiculoCalculo = vehiculo.value;
  console.log(vehiculoCalculo)
  let tasaBaseVehiculo = 0;
  let resultado = 0;
  let resultadoBase = 0;
  let resultadoConIva = 0;
  let descuento = 0;
  let resultadoDescuento = 0;
  let resultadoTasaPago = 0;
  let iva = 0;
  let pagoCalculo = pago.value;
  let tasaPago = 0;


  //Comprobamos que el nombre no está vacío
  if (clienteCalculo.length == 0) {
    mensaje.innerHTML = "El nombre no puede estar vacío";
    return;
  }

  //Comprobamos que la matricula tiene buen formato y no está vacía
  if (matriculaCalculo.length != 7) {
    mensaje.innerHTML = "La matrícula no puede estar vacía";
    return;
  }

  //comprobamos que las cantidades sean entre 0 y 4
  if (comprobarCantidad()) {
    return;
  };

  //obtenemos la tasa base por el tipo de vehiculo seleccionado
  switch (vehiculoCalculo) {
    case "moto":
      tasaBaseVehiculo = 0.7;
      break;
    case "turismo":
      tasaBaseVehiculo = 1;
      break;
    case "suv":
      tasaBaseVehiculo = 1.2;
      break;
    case "furgoneta":
      tasaBaseVehiculo = 1.35;
      break;
    default:
      break;
  }
  
  //controlo que la moto no puede tener alineado ni cambiarse mas de 2 neumaticos
  if (vehiculoCalculo.value == "moto") {
    if (neumaticos.value > 2 || alineado.value != 0) {
      mensaje.innerHTML += "Una moto no puede hacerse ni alineados ni cambiarse mas de 2 ruedas"
      return;
    }
  }
  console.log(tasaBaseVehiculo);

  //Calculamos ahora la operacion que quiere hacer
  resultado = ((aceite.value * 45) + (filtros.value * 30) + (frenos.value * 80) + (neumaticos.value * 70) + (alineado.value * 35)) * tasaBaseVehiculo;
  console.log(resultado);
  resultadoBase = resultado;

  //controlamos la forma de pago
  switch (pagoCalculo) {
    case "financiado":
      tasaPago = 5;
      break;
  
    default:
      tasaPago =0;
      break;
  }

  console.log(tasaPago);
  //compruebo que la tasa pago no este vacía para aplicar la comisión
  resultadoTasaPago = resultado * (tasaPago/100)
  if (tasaPago == 5) {
    resultado = resultado *1.05;
  }

  //calculamos el descuento
  if (resultado >= 300) {
    descuento = 10;
    resultadoDescuento = resultado * (descuento/100);
    resultado = resultado*0.9;
  }else if (resultado >= 150 ) {
    descuento = 5;
    resultadoDescuento = resultado * (descuento/100);
    resultado = resultado*0.95
  }
  console.log(resultado + " con descuento");


  //Calculamos los resultados con iva y el iva
  iva = resultado * 0.21;
  resultadoConIva = resultado + iva;

  //hago el formato de salida
   presupuesto.innerHTML += "Presupuesto para " + cliente.value + " - " + matricula.value;
  if (aceite.value != 0) {
    presupuesto.innerHTML += "<br>Cambio de aceite " + aceite.value + " Precio: " + (aceite.value*tasaBaseVehiculo*45).toFixed(2)+"€";
  }
  if(filtros.value != 0){
    presupuesto.innerHTML += "<br>Cambio de filtros " + filtros.value + " Precio: " + (filtros.value*tasaBaseVehiculo*30).toFixed(2)+"€";
  }
  if(frenos.value != 0){
    presupuesto.innerHTML += "<br>Pastillas de freno " + frenos.value + " Precio: " + (frenos.value*tasaBaseVehiculo*80).toFixed(2)+"€";
  }
  if (neumaticos.value != 0) {
    presupuesto.innerHTML += "<br>Neúmatico " + neumaticos.value + " Precio: " + (neumaticos.value*tasaBaseVehiculo*70).toFixed(2)+"€";
  }
  if (alineado.value != 0) {
    presupuesto.innerHTML += "<br>Alineado de dirección: " + alineado.value + " Precio: " + (alineado.value*tasaBaseVehiculo*35).toFixed(2) +"€";
  }
    
  //Enmaqueto el formato de salida con mi funcion
  muestraResultado(tasaBaseVehiculo, resultadoBase, descuento, resultadoDescuento, tasaPago, resultadoTasaPago, iva, resultadoConIva);
  

}

btnPresupuesto.addEventListener("click", calculaTotal);


/**
 * Funcion en la que le llegan mis parametros para poder mostrar el resultado con el formato que yo quiero
 */
function muestraResultado(tasaBaseVehiculo, resultadoBase, descuento, resultadoDescuento, tasaPago, resultadoTasaPago, iva, resultadoConIva) {
  presupuesto.innerHTML +="<br> Base (vehiculo x" + tasaBaseVehiculo.toFixed(2) + "): " + resultadoBase +
    "<br>Descuento (" + descuento + "%):-" + resultadoDescuento.toFixed(2) + "€" +
    "<br>Recargo por pago (" + tasaPago + "%): " + resultadoTasaPago.toFixed(2) + "€" +
    "<br>IVA (21%): +" + iva.toFixed(2) + "€";

  totalResultadoAbajo.innerHTML = resultadoConIva.toFixed(2) + "€";
}

function comprobarCantidad(){
  if ((aceite.value > 4) || filtros.value > 4 || neumaticos.value > 4 || frenos.value > 4
       || alineado.value > 4) {
    mensaje.innerHTML = "No puedes poner mas de 4 de cantidad"
    return true;
  }
  if ((aceite.value < 0) || filtros.value < 0|| neumaticos.value < 0 || frenos.value < 0
       || alineado.value < 0) {
    mensaje.innerHTML = "No puedes poner menos de 0 de cantidad"
    return true;
  }
}