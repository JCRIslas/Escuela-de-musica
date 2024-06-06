window.onload = function() {
    var carrusel = document.querySelector('.carrusel');
    var items = document.querySelectorAll('.curso');

    var intervalo = 5000; // Cambiar imagen cada 5 segundos
    var timer;
    var avanzando = true;

    function avanzarCarrusel() {
        if (avanzando) {
            carrusel.scrollLeft += 1; // Desplaza el carrusel una unidad hacia adelante
            if (carrusel.scrollLeft >= carrusel.scrollWidth - carrusel.clientWidth) {
                avanzando = false; // Cambia la dirección a opuesta cuando llega al final
            }
        } else {
            carrusel.scrollLeft -= 1; // Desplaza el carrusel una unidad hacia atrás
            if (carrusel.scrollLeft <= 0) {
                avanzando = true; // Cambia la dirección a opuesta cuando llega al principio
            }
        }
    }

    timer = setInterval(avanzarCarrusel, 20); // Intervalo más lento

    // Pausa el carrusel automático cuando se hace hover
    carrusel.addEventListener('mouseenter', function() {
        clearInterval(timer);
    });

    // Reanuda el carrusel automático cuando se quita el hover
    carrusel.addEventListener('mouseleave', function() {
        timer = setInterval(avanzarCarrusel, 20); // Intervalo más lento
    });
};
