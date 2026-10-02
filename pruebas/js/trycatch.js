document.getElementById("n1").onfocus = function () {
    this.value = "";
    document.getElementById("pError").innerHTML = "";
}

document.getElementById("n2").onfocus = function () {
    this.value = "";
    document.getElementById("pError").innerHTML = "";
}

document.getElementById("botonSumar").addEventListener("click", function () {
    let in1 = document.getElementById("n1").value;
    let in2 = document.getElementById("n2").value;

    try {
      errorFilter(in1);
      errorFilter(in2);
      alert ("Resultado: " + (parseFloat(in1)+parseFloat(in2)));
    }
    catch (err) {
        document.getElementById("pError").innerHTML = err + ":" + err.cause;
    }
})

/************** FUNCTIONS *****************************************************/
/**
 * Comprueba si el dato que se pasa es un número positivo. Ejecutar siempre dentro de try - catch
 * @param valor a filtrar
 */
function errorFilter(data) {
    if (data == "")            
        throw new Error("Error en dato", {cause:"Cadena vacía"});

    data = parseFloat(data);

    if (isNaN(data))
        throw new Error ("Error en dato", {cause:"No es un número"})

    if (data < 0)
        throw new Error ("Error en dato", {cause:"Valor negativo"})
}