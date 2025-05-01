/*
Javascript functions for website functionality

Duncan Boyd
duncan@wapta.ca
Apr 30, 2025
*/


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
  const menuLinks = document.querySelector(".navbar-menu");
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

// button commands for all pages
document.addEventListener("DOMContentLoaded", () => {
  const aboutBtn = document.getElementById("about-btn");
  const expBtn = document.getElementById("exp-btn");
  const projBtn = document.getElementById("proj-btn");
  const resumeBtn = document.getElementById("resume-btn");

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
    "images/about/IMG_7346.jpg",  
    "images/about/IMG_5773.jpg",
    "images/about/IMG_0866.JPG",
    "images/about/IMG_2592.jpg",
    "images/about/IMG_1545.jpg",
    "images/about/IMG_3250.jpg",
    "images/about/IMG_3331.jpg",
    "images/about/IMG_8486.jpg",
    "images/about/whistler_run.jpg",
];

// controls for image carousel

const carouselImage = document.getElementById('carousel-img');
const carouselContainer = document.getElementById('carousel');
const indexElement = document.getElementById("image-index");
const allImagesElement = document.getElementById("image-count");

indexElement.textContent = currentIndex + 1;
allImagesElement.textContent = images.length;

function updateCarouselImage() {
    carouselImage.src = images[currentIndex];
    indexElement.textContent = currentIndex + 1;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarouselImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarouselImage();
}

// automatic scroll for carousel
let carouselInterval = setInterval(nextImage, 2000);

// stop carousel if mouse is over it
carouselContainer.addEventListener("mouseenter", () => {
  console.log("entered")
  clearInterval(carouselInterval);
});

// start carousel if mouse leaves
carouselContainer.addEventListener("mouseleave", () => {
  carouselInterval = setInterval(nextImage, 2000);
});