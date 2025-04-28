
// load header and footer
document.addEventListener("DOMContentLoaded", () => {
  fetch("includes/header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      initializeHeaderFunctions();
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });

  // Load and insert the footer
  fetch("includes/footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
      initializeFooterFunctions();
    })
    .catch(error => {
      console.error("Error loading footer:", error);
    });
});

function initializeHeaderFunctions() {
  // mobile menu button toggle
  const menu = document.querySelector("#mobile-menu");
  const menuLinks = document.querySelector(".navbar__menu");
  if (menu && menuLinks) {
    menu.addEventListener("click", function () {
      menu.classList.toggle("is-active");
      menuLinks.classList.toggle("active");
    });
  } else {
    console.error("Menu or menuLinks elements are missing in the header.");
  }
}

function initializeFooterFunctions() {
    // set the current year for the footer copyright
    const yearElement = document.getElementById("year");
    if (yearElement) {
      const currentYear = new Date().getFullYear();
      yearElement.textContent = currentYear;
    } else {
      console.error("Year element is missing in the footer.");
    }
}

// button commands
document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.getElementById("aboutBtn");
  const expBtn = document.getElementById("expBtn");
  const projBtn = document.getElementById("projBtn");
  const resumeBtn = document.getElementById("resumeBtn");

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

  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
        window.open("resume.pdf", "_blank");
    });
  }
});

let currentIndex = 0;
const images = [
    "images/about/headshot.jpeg",
    "images/about/dashlight.jpeg",
    "images/about/ikomed.jpeg"
];

const carouselImage = document.getElementById('carousel-image');

function updateCarouselImage() {
    carouselImage.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarouselImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarouselImage();
}