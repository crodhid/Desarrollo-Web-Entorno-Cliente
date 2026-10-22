var usersWindow = null;
const info = document.getElementById("info");
const login = document.getElementById("login");
const mail = document.getElementById("mail");

document.getElementById("aSendMail").onclick = function () {
    try {
        if (login.value == "")
            throw Error ("Nombre está vacío!");
        if (document.querySelector("input[type='password']").value == "")
            throw Error ("Password está vacío!");
        if (mail.value == "")
            throw Error ("Email está vacío!");

        if ((!usersWindow) || (usersWindow.closed))
            usersWindow = window.open("email.html","_blank", "width=650,height=850");
        else {
            info.innerHTML = "Ya tienes la ventana email abierta";
            usersWindow.focus();
        }

        // Pasamos Login e email:
        usersWindow.onload = function () {
            usersWindow.document.getElementById("nombre").value = login.value;
        }
        

    }
    catch (err) {
        info.innerHTML = "<b style='color:red;'>" + err + "</b>";
        setTimeout(function () { info.innerHTML = ""}, 3000);
    }
}

document.getElementById("moverVentana").onclick = function() {
    if (usersWindow && !usersWindow.closed) {
        usersWindow.moveBy(500, 300);
        usersWindow.focus();
    }
    else {
        alert("La ventana ya se cerró");
    }

}