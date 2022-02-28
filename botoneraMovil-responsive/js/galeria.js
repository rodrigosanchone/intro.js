/*=============================================
objetos con la propiedades de la galería
=============================================*/

var pg = {
    imgGaleria: document.querySelectorAll("#galeria ul li img"),
    rutaImage: null,
    cuerpoDom: document.querySelector("body"),
    lightbox: null,
    modal: null,
    animacionGaleria: "slideTop"
}

/*=============================================
objetos con los metodos  de la galería
=============================================*/

var mg = {
    inicioGaleria: function() {

        for (var i = 0; i < pg.imgGaleria.length; i++) {
            pg.imgGaleria[i].addEventListener("click", mg.capturaImagen)
        }

    },

    capturaImagen: function(img) {
        console.log(img.target);

        pg.rutaImage = img.target;

        mg.ligthbox(pg.rutaImage)

    },

    ligthbox: function(img) {
        pg.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
        pg.lightbox = document.querySelector("#lightbox");

        pg.lightbox.style.width = "100%";
        pg.lightbox.style.height = "100%";
        pg.lightbox.style.position = "fixed";
        pg.lightbox.style.zIndex = "10";
        pg.lightbox.style.background = "rgba(0,0,0,.8)";
        pg.lightbox.style.top = 0;
        pg.lightbox.style.left = 0;
        // console.log("hola guapo")
        pg.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");
        pg.modal = document.querySelector("#modal");
        pg.modal.innerHTML = img.outerHTML + "<div>X</div>"; //traigame el contenido html

        pg.modal.style.display = "block";
        pg.modal.style.position = "relative"
        pg.modal.childNodes[0].style.width = "100%"
        pg.modal.childNodes[0].style.border = "15px solid white";

        if (window.matchMedia("(max-width:1000px)").matches) {
            pg.modal.style.width = "90%";
            //pg.modal.style.marginRigth = "30px";
        } else {
            pg.modal.style.width = "60%";

        }

        if (pg.animacionGaleria == "slide") {
            pg.modal.style.top = "50%";
            pg.modal.style.left = 0;
            pg.modal.style.opacity = 0;


            setTimeout(function() {
                //alert("olis")
                pg.modal.style.transition = ".5s left ease";
                pg.modal.style.left = "50%"
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px"; //usar este calculo para obener valore relativos para pantallas responsivas y no valores absolutos
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
        }


        if (pg.animacionGaleria == "slideTop") {
            pg.modal.style.top = "-100%";
            pg.modal.style.left = "50%";
            pg.modal.style.opacity = 0;


            setTimeout(function() {
                //alert("olis")
                pg.modal.style.transition = ".5s top ease";
                pg.modal.style.top = "50%"
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px"; //usar este calculo para obener valore relativos para pantallas responsivas y no valores absolutos
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
        }


        if (pg.animacionGaleria == "fade") {
            pg.modal.style.top = "50%";
            pg.modal.style.left = "50%";
            pg.modal.style.opacity = 0;


            setTimeout(function() {
                //alert("olis")
                pg.modal.style.transition = ".5s opacity ease";
                pg.modal.style.left = "50%"
                pg.modal.style.opacity = 1;
                pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px"; //usar este calculo para obener valore relativos para pantallas responsivas y no valores absolutos
                pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";
            }, 50)
        }


        //pg.modal.style.display = "block";
        //pg.modal.style.position = "relative";
        // pg.modal.style.width = "60%";
        // pg.modal.style.top = "50%";
        // pg.modal.style.left = "50%";
        console.log("pg.modal", pg.modal.childNodes[0].width / 2); // manera para hacer el calculo de lo que debo restar
        // pg.modal.style.marginLeft = -pg.modal.childNodes[0].width / 2 + "px"; //usar este calculo para obener valore relativos para pantallas responsivas y no valores absolutos
        // pg.modal.style.marginTop = -pg.modal.childNodes[0].height / 2 + "px";


        //estilos de la "X"

        pg.modal.childNodes[1].style.position = "absolute";
        pg.modal.childNodes[1].style.right = "5px";
        pg.modal.childNodes[1].style.padding = "5px";
        pg.modal.childNodes[1].style.top = "5px";
        pg.modal.childNodes[1].style.color = "black";
        pg.modal.childNodes[1].style.cursor = "pointer";
        pg.modal.childNodes[1].style.fontSize = "30px";
        pg.modal.childNodes[1].style.width = "40px";
        pg.modal.childNodes[1].style.height = "40px";
        pg.modal.childNodes[1].style.textAling = "center";
        pg.modal.childNodes[1].style.background = "white";
        pg.modal.childNodes[1].style.borderRadius = "0px 0px 0px 5px";

        pg.modal.childNodes[1].addEventListener("click", mg.salirGaleria)
    },

    salirGaleria: function() {
        pg.lightbox.parentNode.removeChild(pg.lightbox);
    }


}

mg.inicioGaleria();