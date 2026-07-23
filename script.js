// ==============================
// Animación al hacer scroll
// ==============================

const elementos = document.querySelectorAll(
    ".producto, .review, .beneficios div"
);

const mostrarElementos = () => {

    const altoPantalla = window.innerHeight;

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;

        if (posicion < altoPantalla - 100) {
            elemento.classList.add("mostrar");
        }

    });

};

window.addEventListener("scroll", mostrarElementos);
window.addEventListener("load", mostrarElementos);


// ==============================
// Navbar al hacer scroll
// ==============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        nav.style.background = "rgba(0,70,110,.96)";
        nav.style.boxShadow = "0 8px 25px rgba(0,0,0,.25)";

    } else {

        nav.style.background = "rgba(0,80,120,.85)";
        nav.style.boxShadow = "none";

    }

});


// ==============================
// Movimiento de las olas
// ==============================

const ola = document.querySelector(".olas svg");

let desplazamiento = 0;

function moverOla() {

    desplazamiento += 0.4;

    ola.style.transform =
        `translateX(${Math.sin(desplazamiento * 0.05) * 10}px)`;

    requestAnimationFrame(moverOla);

}

moverOla();


// ==============================
// Animación de entrada del Hero
// ==============================

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero");

    hero.animate(
        [
            {
                opacity: 0,
                transform: "translateY(40px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 1000,
            easing: "ease-out",
            fill: "forwards"
        }
    );

});


// ==============================
// Efecto en botones
// ==============================

const botones = document.querySelectorAll(
    ".botonPrincipal, .contenido a, .whatsappFlotante"
);

botones.forEach(boton => {

    boton.addEventListener("mouseenter", () => {
        boton.style.transform = "scale(1.05)";
    });

    boton.addEventListener("mouseleave", () => {
        boton.style.transform = "";
    });

});
