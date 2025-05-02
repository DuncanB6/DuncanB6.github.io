const experienceListDiv = document.getElementById("experience-list");

// Static list of project IDs
const experienceIds = ['experience1', 'experience2']; // Add more as needed

async function loadExperienceData(id) {
  const res = await fetch(`experiences/${id}.json`);
  return res.json();
}

async function renderExperiences() {
  for (const id of experienceIds) {
    try {
      const experience = await loadExperienceData(id);
      const item = document.createElement("div");
      item.innerHTML = `
        <div class="item-container">
            <div class="item-box">
                <div class="item-image">
                    <a href="experience.html?id=${experience.id}">
                        <img src="${experience.images[0]}" alt="${experience.title}" width="200"/>
                    </a>
                </div>

                <div class="item-content">
                    <a id="item-link" href="item.html?id=${experience.id}">
                        <h1 id="experience-title">${experience.title}</h3>
                    </a>

                    <p>${experience.description}</p>
                </div>
            </div>
        </div>
      `;
      experienceListDiv.appendChild(item);
    } catch (error) {
      console.error(`Error loading experience ${id}:`, error);
    }
  }
}

renderExperiences();
