var userWindow = null;

document.getElementById("aSendMail").onclick = function (){
    //creamos una constante para abrir ventanas, en este caso la de google,
    //con blank se me abre una pestaña nueva
    //widht y height en pixeles SIEMPRE para especificar como la quiero abrir 
     
        //Esto comprueba que la ventana no esta abierta o no se ha cerrado
          if (!userWindow || (userWindow.closed)) {
            userWindow = window.open("../email.html",
         "_blank",
          "width=650px,height=450px,top=300px,left=500px");
          }else{
            alert ("Ya tienes abierta la ventana")  
            //devuelvo el foco es decir me sale otra vez en pantalla
            userWindow.focus();        
          }

}


//Vamos a mover la ventana
document.getElementById("moverVentana").onclick = function (){
    if (userWindow) {
        userWindow.moveBy(500,300);
        userWindow.focus();
    }else{
        alert("La ventana está cerrada");
    }
}



