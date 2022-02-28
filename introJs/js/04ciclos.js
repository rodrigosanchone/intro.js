/*ciclo for */

//for (var i = 1; i <= 5; i++) {
//  console.log(i);
//}

//ciclo while

//var n = 1;

//while (n <= 5) {
//  console.log(n);
//n++;

//}

//ciclo Do while
//var p = 1;

/*do {
    console.log(p);
    p++
}
while (p <= 5);*/

var cajas = document.querySelectorAll(".cajas");
console.log("cajas", cajas);

for (var i = 0; i < cajas.length; i++) {
    cajas[i].style.width = "50px";
    cajas[i].style.height = "50px";
    cajas[i].style.backgroundColor = "blue";
    cajas[i].style.margin = "5px";
    cajas[i].style.display = "inline-block"
}

for (var i = 1; i <= 5; i++) {
    console.log("i", i);
}