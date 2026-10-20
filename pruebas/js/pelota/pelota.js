const ball = document.getElementById("ball");

console.log("Alto: " + screen.height);
ball.style.top = (parseInt(screen.availHeight/2) - 50) + "px";
ball.style.left = "0px";

let intervalo = mueveBola();

//Para la bola cuando pasan 3 segundos
// setTimeout(() => {
//     clearInterval(intervalo);
//     ball.style.backgroundColor = "#569";
    
// }, 3000);

/**
 * Funcion que al parar la pelota, a los 5 segundos vuelva a andar
 */
document.getElementById("ball").addEventListener("click" ,() =>{
    clearInterval(intervalo);
    ball.style.backgroundColor = "#569";
    setTimeout(() => {
        intervalo = mueveBola();
    }, 5000);
})

function mueveBola() {
    return setInterval(function () {
        let izq = parseInt(ball.style.left.substring(0, ball.style.left.length - 2));
        if (izq < (screen.width - 100))
            ball.style.left = (izq + 10) + "px";
    }, 100);
}
