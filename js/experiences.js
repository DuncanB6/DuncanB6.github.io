const experienceListDiv = document.getElementById("experience-list");

// Static list of project IDs
const experienceIds = ['aerodesign', 'cellcentric', 'ikomed', 'redcross', 'uofc']; // Add more as needed

async function loadExperienceData(id) {
  const res = await fetch(`experiences/${id}.json`);
  return res.json();
}

async function renderExperiences() {
  const experiences = [];

  for (const id of experienceIds) {
    try {
      const experience = await loadExperienceData(id);
      experiences.push(experience);
    } catch (error) {
      console.error(`Error loading experience ${id}:`, error);
    }
  }

  // Sort experiences by date descending (most recent first)
  experiences.sort((a, b) => new Date(b.date) - new Date(a.date));

  for (const experience of experiences) {
    const item = document.createElement("div");
    item.innerHTML = `
      <div class="item-container">
          <div class="item-box">
              <div class="item-image">
                  <a href="experience.html?id=${experience.id}">
                      <img class="item-img" src="${experience.images[0]}" alt="${experience.title}" width="200"/>
                  </a>
              </div>

              <div class="item-content">
                  <a id="item-link" href="experience.html?id=${experience.id}">
                      <h1 id="experience-title">${experience.title}</h1>
                  </a>

                  <p>${experience.description}</p>
              </div>
          </div>
      </div>
    `;
    experienceListDiv.appendChild(item);
  }
}


renderExperiences();
