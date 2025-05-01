
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
    "images/about/IMG_7346.jpg",  
    "images/about/IMG_5773.jpeg",
    "images/about/IMG_0866.JPG",
    "images/about/IMG_2592.jpg",
    "images/about/IMG_1545.jpeg",
    "images/about/IMG_3250.jpeg",
    "images/about/IMG_3331.jpeg",
    "images/about/IMG_8486.jpg",
    "images/about/whistler_run.jpeg",
];


const carouselImage = document.getElementById('carousel-image');
const carouselContainer = document.getElementById('carousel');
const indexElement = document.getElementById("image_index");
const allImagesElement = document.getElementById("all_images");

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