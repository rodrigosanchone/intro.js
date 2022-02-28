/**Funciones sin parametros */

//**declaro la función que tarea que voy a ejecutar */

function saludo() {
    //Tarea de la función 

    console.log("hola");
}

//**Ejecutamos la funcion */

saludo();

/**Funciones con parámetros */

function operacion(digito1, digito2) {
    var resultado = digito1 + digito2;
    console.log(resultado)
}

operacion(5, 10);
operacion(5, 7);

/**funciones con retorno sin parámetros  */

function retorno1() {
    var numero = 5;

    return numero;
}

console.log(retorno1());

/**funciones con retorno con parámetros  */

function retorno2(numero) {
    return numero;
}

console.log(retorno2(10))