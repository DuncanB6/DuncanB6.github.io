const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

window.addEventListener("load", () => {
    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutBtn = document.getElementById("aboutBtn");
    const expBtn = document.getElementById("expBtn");
    const projBtn = document.getElementById("projBtn");
  
    if (aboutBtn) {
      aboutBtn.addEventListener("click", () => {
        window.location.href = "about.html";
      });
    }
  
    if (expBtn) {
      expBtn.addEventListener("click", () => {
        window.location.href = "experiences.html";
      });
    }

    if (projBtn) {
        projBtn.addEventListener("click", () => {
          window.location.href = "projects.html";
        });
      }
  });