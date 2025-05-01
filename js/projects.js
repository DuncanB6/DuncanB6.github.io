const projectListDiv = document.getElementById("project-list");

// Static list of project IDs
const projectIds = ['project1', 'project2']; // Add more as needed

async function loadProjectData(id) {
  const res = await fetch(`projects/${id}.json`);
  return res.json();
}

async function renderProjects() {
  for (const id of projectIds) {
    try {
      const project = await loadProjectData(id);
      const item = document.createElement("div");
      item.innerHTML = `
        <a href="project.html?id=${project.id}">
          <img src="${project.images[0]}" alt="${project.title}" width="200"/>
          <h3 id="project-title">${project.title}</h3>
          <p>${project.description}</p>
        </a>
      `;
      projectListDiv.appendChild(item);
    } catch (error) {
      console.error(`Error loading project ${id}:`, error);
    }
  }
}

renderProjects();
