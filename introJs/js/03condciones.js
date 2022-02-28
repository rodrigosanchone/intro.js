//condiciones

var a = 10;
var b = 51;

if (a > b) {
    console.log("A es mayor que b")
} else {
    console.log("B es mayor A")
}

if (a > b) {
    console.log("A es mayor que b")
} else if (a == b) {
    console.log("A es igual b")
} else {
    console.log(" A no es lo mismo que b")
}


//cambios , switch

var dia = "lunes"

switch (dia) {
    case "sabado":
        console.log("voy a estudiar php");
        break;

    case "martes":
        console.log("voy a estudiar css");
        break;

    case "jueves":
        console.log("voy a estudiar HTML");
        break;
    case "domingo":
        console.log("voy a descansar");
        break;

    default:
        console.log("voy a estudiar javascript ")
}