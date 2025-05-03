/*
Javascript to create pages for each individual experience with details. Similar to project-detail.js.

Duncan Boyd
duncan@wapta.ca
May 2, 2025
*/

let images = [];
let currentIndex = 0;
let carouselInterval = null;

// called after dynamic HTML is rendered
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

  document.getElementById("prev-btn").addEventListener("click", window.prevImage);
  document.getElementById("next-btn").addEventListener("click", window.nextImage);
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

async function loadProjectData(id) {
  const res = await fetch(`projects/${id}.json`);
  return res.json();
}

async function renderProjectDetail() {
  const id = getQueryParam("id");
  const container = document.getElementById("project-detail");

  if (!id) {
    container.innerText = "Project not found.";
    return;
  }

  try {
    const project = await loadProjectData(id);
    images = project.images || [];

    const links = Object.entries(project.links || {})
      .map(([label, url]) => `<a href="${url}" target="_blank">${label}</a>`)
      .join(" | ");

    container.innerHTML = `
      <section class="blurb">
        <div class="blurb-content">
          <h1>${project.title}</h1>
          <p>${project.fullDescription}</p>
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

    setupCarousel();
  } catch (error) {
    console.error("Failed to load project:", error);
    container.innerText = "Error loading project.";
  }
}

renderProjectDetail();
