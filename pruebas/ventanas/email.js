var userWindow = null;
//con function sin ser anonimo no iria el this, porque coge literalmente el id
document.getElementById("cerrarVentana").onclick =   () =>{
    this.close();
}

//Vamos a mover la ventana
document.getElementById("moverVentana").onclick = function (){
    if (userWindow) {
        userWindow.moveTo(500,300);
        userWindow.focus();
    }else{
        alert("La ventana está cerrada");
    }
}