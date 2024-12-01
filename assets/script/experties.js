const ExpertiseData = [
  {
    name: "HTML",
    logo: "https://www.svgrepo.com/download/303205/html-5-logo.svg",
  },
  {
    name: "CSS",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "Javascript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "C++",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
  },
  {
    name: "Python",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    name: "Canva",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
];

const ExpertiseDataHTML = ExpertiseData.map(
  (item) => `
        <div class="expertise-card">
            <img loading="lazy" src="${item.logo}" alt="${item.name}">
            <span>${item.name}</span>
        </div>
    `
).join("");

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('expertise-card-container').innerHTML = ExpertiseDataHTML;
});
