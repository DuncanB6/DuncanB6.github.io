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
    if (!id) {
      document.getElementById("project-detail").innerText = "Project not found.";
      return;
    }
  
    try {
      const project = await loadProjectData(id);
      const links = Object.entries(project.links || {})
        .map(([label, url]) => `<a href="${url}" target="_blank">${label}</a>`)
        .join(" | ");
  
      document.getElementById("project-detail").innerHTML = `
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
                    <img id="carousel-img" src="images/about/IMG_7346.jpg" alt="Carousel Image">
                </div>

                <div class="controls">
                    <button class="carousel-btn" onclick="prevImage()">&#10094;</button>
                    <button class="carousel-btn" onclick="nextImage()">&#10095;</button>
                </div>
            </div>

            <p class="image-index-indicator">
                <span id="image-index"></span> / <span id="image-count"></span>
            </p>
        </section>
      `;
    } catch (error) {
      console.error("Failed to load project:", error);
      document.getElementById("project-detail").innerText = "Error loading project.";
    }
  }
  
renderProjectDetail();
  