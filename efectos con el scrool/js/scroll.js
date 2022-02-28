/*=============================================
  Objeto con Propiedades del scroll
=============================================*/
var ps = {
    posicionScroll: 0,
    article: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    encabezado: document.querySelector("header"),
    botones: document.querySelectorAll("nav ul li a"),
    ruta: null,
    intervalo: null,
    destinoScroll: 0,
    padding: 0
}

/*============================================
  Objeto con metodos con el scroll
=============================================*/

var ms = {
    inicioScroll: function() {
        document.addEventListener("scroll", ms.efectoParralax)

        for (var i = 0; i < ps.botones.length; i++) {
            ps.botones[i].addEventListener("click", ms.desplazamiento)
        }

    },

    efectoParralax: function() {
        //console.log(window.pageYOffset)

        ps.posicionScroll = window.pageYOffset;

        if (ps.posicionScroll > 100) {
            ps.encabezado.style.position = "fixed";
            ps.encabezado.style.zIndex = 10;
            ps.padding = 80;

        } else {
            ps.encabezado.style.position = "relative";
            ps.encabezado.style.zIndex = 0;
            ps.padding = 180;
        }


        if (ps.posicionScroll > ps.cajaScroll.offsetTop - 200) {
            //  console.log("limite")
            for (var i = 0; i < ps.article.length; i++) {
                ps.article[i].style.marginLeft = "0%";
            }

        } else {
            for (var i = 0; i < ps.article.length; i++) {
                ps.article[i].style.marginLeft = ps.posicionScroll / 23.8 - 100 + "%";
                console.log(ps.posicionScroll - 100 + "%")
            }
        }
    },

    desplazamiento: function(ruta) {

        // console.log("ruta", ruta.target.getAttribute("href"))
        ruta.preventDefault();
        ps.ruta = ruta.target.getAttribute("href");
        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop - ps.padding;

        ps.intervalo = setInterval(function() {
            if (ps.posicionScroll < ps.destinoScroll) {
                ps.posicionScroll += 100;
                if (ps.posicionScroll >= ps.destinoScroll) {
                    ps.posicionScroll = ps.destinoScroll;
                    clearInterval(ps.intervalo)
                }
            } else {
                ps.posicionScroll -= 100;
                if (ps.posicionScroll <= ps.destinoScroll) {
                    ps.posicionScroll = ps.destinoScroll;
                    clearInterval(ps.intervalo)
                }
            }

            window.scrollTo(0, ps.posicionScroll); //x en horizontal , y en vertical 
        }, 50)
    }
}

ms.inicioScroll();