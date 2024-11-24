// IntersectionObserver para observar cuando las tarjetas estén en el viewport
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.9, // Mostrar tarjeta cuando esté 90% visible
      }
    );

    cards.forEach((card) => observer.observe(card));
  });