document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('carousel');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  const slideWidth = carousel.children[0].offsetWidth; // Ancho de cada slide

  // Función para avanzar
  const moveNext = () => {
    carousel.style.transition = "transform 0.5s ease"; // Aplica la animación
    carousel.style.transform = `translateX(-${slideWidth}px)`; // Mueve el carrusel hacia la izquierda

    carousel.addEventListener(
      "transitionend",
      () => {
        const firstSlide = carousel.children[0]; // Primera imagen
        carousel.appendChild(firstSlide); // Mueve la primera imagen al final
        carousel.style.transition = "none"; // Elimina la animación temporalmente
        carousel.style.transform = "translateX(0)"; // Resetea la posición visual
      },
      { once: true } // Se ejecuta una vez para evitar múltiples llamadas
    );
  };

  // Función para retroceder
  const movePrev = () => {
    const lastSlide = carousel.children[carousel.children.length - 1]; // Última imagen
    carousel.insertBefore(lastSlide, carousel.children[0]); // Mueve la última imagen al principio
    carousel.style.transition = "none"; // Evita animación al reordenar
    carousel.style.transform = `translateX(-${slideWidth}px)`; // Coloca el carrusel desplazado

    requestAnimationFrame(() => {
      // Permite que el navegador renderice antes de animar
      carousel.style.transition = "transform 0.5s ease"; // Aplica la animación
      carousel.style.transform = "translateX(0)"; // Mueve el carrusel de regreso
    });
  };

  // Configurar botones
  nextBtn.addEventListener('click', moveNext);
  prevBtn.addEventListener('click', movePrev);
});
