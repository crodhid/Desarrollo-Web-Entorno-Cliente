const h21 = document.getElementById("h21");
const calendario = document.getElementById("calendario");
let myBirthDate = new Date(2005, 11, 16);
let dateNow = new Date();

calendario.oninput = function () {
    h21.innerHTML = "Desde la fecha seleccionada y tu nacimiento han pasado " + (new Date(this.value) - myBirthDate) / (1000*60*60*24) + " días.";
}

