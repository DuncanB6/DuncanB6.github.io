function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  async function loadProjectData(id) {
    const res = await fetch(`projects/${id}.json`);
    return res.json();
  }
  
  function createImageCarousel(images) {
    return images.map(src => `<img src="${src}" width="300" style="margin-right:10px;">`).join('');
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
        <h1>${project.title}</h1>
        <div>${createImageCarousel(project.images)}</div>
        <p>${project.fullDescription}</p>
        <div>${links}</div>
      `;
    } catch (error) {
      console.error("Failed to load project:", error);
      document.getElementById("project-detail").innerText = "Error loading project.";
    }
  }
  
  renderProjectDetail();
  