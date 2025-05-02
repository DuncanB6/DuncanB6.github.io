let currentIndex = 0;
const images = [
    "images/about/IMG_7346.jpg",  
    "images/about/IMG_5773.jpg",
    "images/about/IMG_0866.jpg",
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