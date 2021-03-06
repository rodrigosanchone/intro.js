/*=============================================
EL OBJETO CON LAS PROPIEDADES DEL BOTÓN MOVIL
=============================================*/

var pb = {
    botonMovil: document.querySelector("#btnMovil Span"),
    vistaBotones: false,
    botonera: document.querySelector("nav"),
    botones: document.querySelectorAll("nav ul li a")
}

/*=============================================
EL OBJETO CON LOS MÉTODOS DEL BOTON MOVIL 
=============================================*/

var mb = {
    inicioMovil: function() {

        pb.botonMovil.addEventListener("click", mb.mostrarBotonera)

        for (var i = 0; i < pb.botones.length; i++) {
            pb.botones[i].addEventListener("click", mb.ocultarBotonera)
        }
    },

    mostrarBotonera: function() {
        if (!pb.vistaBotones) {
            pb.vistaBotones = true;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-12";
        } else {
            pb.vistaBotones = false;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0";
        }
    },

    ocultarBotonera: function() {
        if (window.matchMedia("(max-width:767px)").matches) {
            pb.vistaBotones = false;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-8 col-xs-0";

            // console("cocultar")
        }
    }
}

mb.inicioMovil();