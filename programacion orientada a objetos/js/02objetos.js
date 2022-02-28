/**
 * Objetos: dentro de POO es una coleción de propiedades y metodos
 * 
 */

var object = {
    //Una propiedad es una asociación entre un nombre y valor.
    nombre: "Juan",
    edad: 37,
    //El método es una funcion dentro de un objeto 
    descripción: function() {
        console.log("Su nombre es: " + object.nombre + " y tiene " + object.edad + " años.");
    },
    saludar: function(saludo) {
        console.log(saludo + " " + object.nombre);
    }

}


object.descripción();

console.log(object.nombre);


object.saludar("Hola");


/**
 * Objetos Primitivos
 */

//El objeto date se utiliza para trabajar fechas y horas

var d = new Date();

console.log(d)

var y = d.getFullYear()

console.log(y)