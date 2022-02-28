// Variables
/*======*/

//variables numericas

var numero_decimal = 5;

console.log("numero: " + numero_decimal);

// variables de texto

var palabra = "palabra";

console.log("palabra: " + palabra);

// variables booleanas

var boolena = true;

console.log("booleano: " + boolena);

//varaible array

var colores = ["Rojo", "Naraja", "Amarillo", "Azul"];

console.log("array: " + colores);


//tipo objeto , tiene propiedad y valor del objeto 

var jugo = {
    ingredient1: "Fresa",
    ingrediente2: "Mandarina",
    ingredienrte3: "Banano"
}

console.log("jugo:", jugo);

//variables doom

var caja = document.getElementById("caja");
console.log(caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red"
var cajas = document.querySelectorAll(".cajas");
console.log(cajas);