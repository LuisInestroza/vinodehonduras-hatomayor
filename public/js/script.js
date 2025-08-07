// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Simple animation on scroll
const animateOnScroll = function () {
  const elements = document.querySelectorAll(
    ".section-title, .wine-card, .about-content, .about-content-catalogo, .testimonial-card"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementPosition < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial state for animated elements
document
  .querySelectorAll(
    ".wine-card, .about-content,.about-content-catalogo,.about-content-catalogo"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

// Animation on load
document.addEventListener("DOMContentLoaded", function () {
  const errorContent = document.querySelector(".error-content");
  errorContent.style.opacity = "0";
  errorContent.style.transform = "translateY(30px)";
  errorContent.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  setTimeout(() => {
    errorContent.style.opacity = "1";
    errorContent.style.transform = "translateY(0)";
  }, 100);

});
