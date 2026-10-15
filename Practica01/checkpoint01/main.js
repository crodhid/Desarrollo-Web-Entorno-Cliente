let tipoCafe = document.getElementById("tipoCafe");
let procesarPedido = document.getElementById("procesarPedido");
let paraLlevar = document.getElementById("paraLlevar");
let cantidad = document.getElementById("cantidad");
let resultado = document.getElementById("resultado");

function calcularPedido() {
    let llevar = null;
    let resultadoCuenta = 0;
    let cantidadCalculo = Number(cantidad.value);
    if (paraLlevar.checked) {
        llevar = true;
    }else{
        llevar = false;
    }

    console.log(tipoCafe.value);

    switch (tipoCafe.value) {
        case "solo":
            resultadoCuenta = cantidadCalculo * 1.5;
            break;
        case "leche":
            resultadoCuenta = cantidadCalculo * 2;
            break;
        case "capuchino":
            resultadoCuenta = cantidadCalculo * 2.5;
            break;
        default:
            break;
    }

    if (llevar) {
        resultadoCuenta += (0.2 * cantidadCalculo);
    }

    if (cantidadCalculo > 5) {
        resultadoCuenta = resultadoCuenta * 0.9;
    }

    resultado.innerHTML = "El coste total es: " + resultadoCuenta; 
    
}

procesarPedido.addEventListener("click", calcularPedido);