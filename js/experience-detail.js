// carousel.js
let images = [];
let currentIndex = 0;
let carouselInterval = null;

// Called after dynamic HTML is rendered
function setupCarousel() {
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

  window.nextImage = function () {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarouselImage();
  };

  window.prevImage = function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarouselImage();
  };

  carouselInterval = setInterval(window.nextImage, 2000);

  carouselContainer.addEventListener("mouseenter", () => {
    clearInterval(carouselInterval);
  });

  carouselContainer.addEventListener("mouseleave", () => {
    carouselInterval = setInterval(window.nextImage, 2000);
  });

  // Hook up buttons if using DOM events (alternative to inline onclick)
  document.getElementById("prev-btn").addEventListener("click", window.prevImage);
  document.getElementById("next-btn").addEventListener("click", window.nextImage);
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function loadExperienceData(id) {
  const res = await fetch(`experiences/${id}.json`);
  return res.json();
}

async function renderExperienceDetail() {
  const id = getQueryParam("id");
  const container = document.getElementById("experience-detail");

  if (!id) {
    container.innerText = "Experience not found.";
    return;
  }

  try {
    const experience = await loadExperienceData(id);
    images = experience.images || [];

    const links = Object.entries(experience.links || {})
      .map(([label, url]) => `<a href="${url}" target="_blank">${label}</a>`)
      .join(" | ");

    container.innerHTML = `
      <section class="blurb">
        <div class="blurb-content">
          <h1>${experience.title}</h1>
          <p>${experience.fullDescription}</p>
          <div class="item-links">${links}</div>
        </div>
      </section>

      <section class="carousel" id="carousel">
        <div class="carousel-body">
          <div class="carousel-images">
            <img id="carousel-img" src="${images[0]}" alt="Carousel Image">
          </div>

          <div class="controls">
            <button class="carousel-btn" id="prev-btn">&#10094;</button>
            <button class="carousel-btn" id="next-btn">&#10095;</button>
          </div>
        </div>

        <p class="image-index-indicator">
          <span id="image-index"></span> / <span id="image-count"></span>
        </p>
      </section>
    `;

    setupCarousel(); // Only now is the DOM ready
  } catch (error) {
    console.error("Failed to load experience:", error);
    container.innerText = "Error loading experience.";
  }
}

// Run this on page load
renderExperienceDetail();
