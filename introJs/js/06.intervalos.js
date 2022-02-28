var tiempo = document.querySelector("#tiempo");
var segundos = 0;


/**Set interval intervalo de tiempo */

var intervalo = setInterval(function() {
    segundos++;
    console.log("segundos", segundos)
    tiempo.innerHTML = segundos;
}, 1000);

/**Set time out retardo de tiempo */

setTimeout(function() {
    alert("Se cumplio el tiempo")
    clearInterval(intervalo);
}, 5000);