// Animación simple al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
  
    window.addEventListener("scroll", function () {
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 50) {
          card.classList.add("visible");
        }
      });
    });
  });
  