const ProjectsData = [
  {
    name: "Farmify",
    logo: "./assets/img/farmify-logo.png",
    description: "Farmify - A platform for farmers to access the market directly.",
    link: "https://manthansachdev12.github.io/Farmify-DMA/",
  },
  {
    name: "Senior Citizen",
    logo: "./assets/img/Senior Citizen-logo.png",
    description: "Connect Seniors - Platform to Combat Isolation.",
    link: "https://manthansachdev12.github.io/seniorcitizen/",
  },
  {
    name: "Career Path",
    logo: "./assets/img/Career path.png",
    description: "career path - for finding job and interships.",
    link: "https://hritikjaiswal1499.github.io/Job-Internships/",
  },
 
];

const ProjectsDataHTML = ProjectsData.map(
  (item) => `
           <div class="projects-card">
            <div>
              <img loading="lazy" src="${item.logo}" alt="${item.name}">
              <h3>${item.name}</h3>
            </div>
            <div>
              <p>${item.description}</p>
              <a href="${item.link}" title="${item.name}" target="_blank">View</a>
            </div>
          </div>
      `
).join("");

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("projects-card-container").innerHTML =
    ProjectsDataHTML;
});
