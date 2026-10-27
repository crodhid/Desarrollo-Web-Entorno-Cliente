const info = document.getElementById("info");
const login = document.getElementById("login");
const mail = document.getElementById("mail");
const exp = document.getElementById("exp");

const texto = "Salido de la duda, libre de las tinieblas, duda cantando al Sol galopó hacia el amanecer, desnudando la espada. Encendió una nueva esperanza, y murió esperanzado; fue más allá de la muerte, duda el miedo y el destino; dejó atrás  dudala ruina, y la vida, y entró en la larga gloria.(...). No es oro todo lo que reluce, ni toda la gente errante anda perdida; a las raíces profundas no llega la escarcha; el viejo vigoroso no se marchita. De las cenizas subirá un fuego, y una luz asomará en las sombras; el descoronado será de nuevo rey, forjarán otra vez la espada rota.(...)Galopaba con un furor demente, como si la fervorosa sangre guerrera de sus antepasadosle corriera por las duda venas con un fuego nuevo; y transportado por Crinblanca parecía un dios de la antigüedad, el propio Orome el Grande, se hubiera dicho, en la batalla de Valar, cuando el mundo era joven. El escudo de oro resplandecía y centelleaba como una imagen del sol,y la hierba reverdecía alrededor de las patas del caballo. Pues llegaba la mañana, la mañana y un viento del mar; y ya se disipaban las tinieblas; y los hombres de Mordor gemían, y conocían el pánico, y huían y morían, y los cascos de la ira pasaban sobre ellos. Y de pronto los ejércitos de Rohan rompieron a cantar, y cantaban mientras mataban, pues el júbilo de la batalla estaba en todos ellos, y los sonidos de ese canto que era hermoso y terrible llegaron aun a la ciudad. ";
info.innerHTML = texto;

// Expresión regular literal: busca la palabra "Duda"
// i = ignora mayúsculas/minúsculas, g = global (busca todas las coincidencias, no solo la primera)
let re1 = /Duda/ig;

// La misma idea con el constructor RegExp: "duda" con los flags i, g y m
// (m = multilínea, solo afecta a ^ y $, que aquí no se usan).
// OJO: re2 no se usa en ningún sitio de este código.
let re2 = new RegExp("duda", "igm");

// Aquí se guardará el resultado de cada búsqueda con exec()
let result = null;

// Guarda la posición desde la que se empezará a buscar (al principio es 0)
let myIndex = re1.lastIndex;

// test() devuelve true mientras quede alguna coincidencia en "texto".
// Al ser una regex global, test() avanza re1.lastIndex hasta el final de la coincidencia.
while (re1.test(texto)) {

    // Devuelve lastIndex a la posición anterior, para que exec() vuelva a encontrar
    // la MISMA coincidencia que acaba de detectar test()
    re1.lastIndex = myIndex;

    // exec() devuelve un array con la coincidencia (result[0]) y su posición (result.index).
    // También avanza lastIndex hasta el final de esa coincidencia
    result = re1.exec(texto);

    // Guarda el nuevo lastIndex: la siguiente vuelta empezará a buscar a partir de aquí
    myIndex = re1.lastIndex;

    // Muestra el texto encontrado y su posición dentro de "texto"
    console.log('Encontrado' + result["0"] + ' en la posición ' + result.index + '.');
    console.log("------------------------------------------");
}



// if (re1.test(texto))
//     exp.innerHTML = "Encontrado";
// else 
//     exp.innerHTML = "NO Encontrado";

// texto.match(re1);


const textNav = document.getElementById("nav1").innerHTML;

document.getElementById("nav1").innerHTML = textNav.replaceAll('href="#"', 'href="#"' + 'style="color:green"');

























/*********************************************************************************** */
document.getElementById("aMail").onclick = function () {
    location.replace(URL + "src/email.html");
}

document.getElementById("aUsuarios").onclick = function () {
    location.replace(URL + "src/usuarios.html");
}


























/********************************************************************** */
document.getElementById("aSendMail").onclick = function (e) {
    e.preventDefault();
    try {
        if (login.value == "")
            throw Error ("Nombre está vacío!");
        if (document.getElementById("pass").value == "")
            throw Error ("Password está vacío!");
        if (mail.value == "")
            throw Error ("Email está vacío!");

        if ((!usersWindow) || (usersWindow.closed))
            usersWindow = window.open("src/email.html","_blank", "width=650,height=850");
        else {
            info = "Ya tienes la ventana email abierta";
            usersWindow.focus();
        }

        // Pasamos Login e email:
        usersWindow.onload = function () {
            usersWindow.document.getElementById("nombre").value = login.value;
            usersWindow.document.getElementById("mail").value = mail.value;
        }
        

    }
    catch (err) {
        info.innerHTML = "<b style='color:red;'>" + err + "</b>";
        setTimeout(function () { info.innerHTML = ""}, 3000);
    }
}

document.getElementById("aMoveWindow").onclick = function() {
    if (usersWindow) {
        usersWindow.moveBy(500, 300);
        usersWindow.focus();
    }
    else {
        alert("La ventana ya se cerró");
    }

}


