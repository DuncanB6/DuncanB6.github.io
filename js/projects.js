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
        <div class="item-container">
            <div class="item-box">
                <div class="item-image">
                    <a href="project.html?id=${project.id}">
                        <img src="${project.images[0]}" alt="${project.title}" width="200"/>
                    </a>
                </div>

                <div class="item-content">
                    <a id="item-link" href="item.html?id=${project.id}">
                        <h1 id="project-title">${project.title}</h3>
                    </a>

                    <p>${project.description}</p>
                </div>
            </div>
        </div>
      `;
      projectListDiv.appendChild(item);
    } catch (error) {
      console.error(`Error loading project ${id}:`, error);
    }
  }
}

renderProjects();
