

// Mobile menu functionality - Versión corregida
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const closeMenuBtn = document.getElementById("closeMenuBtn");
const navMenu = document.getElementById("navMenu");

// Abrir menú
mobileMenuBtn.addEventListener("click", function () {
  navMenu.classList.add("mobile-active");
  mobileMenuBtn.classList.add("menu-open");
  document.body.style.overflow = "hidden";
});

// Cerrar menú
closeMenuBtn.addEventListener("click", function () {
  navMenu.classList.remove("mobile-active");
  mobileMenuBtn.classList.remove("menu-open");
  document.body.style.overflow = "auto";
});

// Cerrar menú al hacer clic en un enlace (solo móvil)
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("mobile-active");
      mobileMenuBtn.classList.remove("menu-open");
      document.body.style.overflow = "auto";
    }
  });
});


