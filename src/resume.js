console.log("✅ Resume script loaded");

const skills = ["PHP", "PHP", "PHP", "PHP", "PHP", "PHP", "PHP", "PHP"];

const experiences = [
  {
    title: "Engineering Student at SMK Negeri 1 Surabaya",
    period: "July 2019 - May 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi. Phasellus congue turpis tortor.",
  },
  {
    title: "Front end developer & video editor intern",
    period: "October 2021 - March 2022",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi. Phasellus congue turpis tortor.",
  },
  {
    title: "College student at the State Polytechnic of Malang",
    period: "October 2023 - March 2027",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi. Phasellus congue turpis tortor.",
  },
];

const capabilities = [
  {
    icon: "📚",
    title: "Back End",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi.",
  },
  {
    icon: "🎨",
    title: "Video Editing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi.",
  },
  {
    icon: "💻",
    title: "API",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi.",
  },
];

// Render desktop version
const skillGrid = document.getElementById("skill-grid");
const expList = document.getElementById("experience-list");
const capList = document.getElementById("capability-list");

skills.forEach((s) => {
  const el = document.createElement("div");
  el.className =
    "bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center gap-2";
  el.innerHTML = `
    <div class="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-full font-bold">PHP</div>
    <span class="text-sm">${s}</span>
  `;
  skillGrid.appendChild(el);
});

experiences.forEach((e) => {
  const el = document.createElement("div");
  el.className = "space-y-2";
  el.innerHTML = `
    <h4 class="font-bold">${e.title}</h4>
    <p class="text-xs text-gray-500">${e.period}</p>
    <p class="text-sm text-gray-600 dark:text-gray-300">${e.description}</p>
  `;
  expList.appendChild(el);
});

capabilities.forEach((c) => {
  const el = document.createElement("div");
  el.className = "bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2";
  el.innerHTML = `
    <div class="text-3xl">${c.icon}</div>
    <h4 class="font-bold">${c.title}</h4>
    <p class="text-sm text-gray-600 dark:text-gray-300">${c.description}</p>
  `;
  capList.appendChild(el);
});

// ====== Mobile Tabs ======
const btnSkill = document.getElementById("btn-skill");
const btnExp = document.getElementById("btn-exp");
const btnWhat = document.getElementById("btn-what");

const contentSkill = document.getElementById("content-skill");
const contentExp = document.getElementById("content-exp");
const contentWhat = document.getElementById("content-what");

function resetActive() {
  // Reset semua tombol ke warna default (dark mode)
  document.querySelectorAll(".resume-btn").forEach(btn => {
    btn.classList.remove("dark:bg-white", "text-black");
    btn.classList.add("dark:bg-gray-900", "text-white");
  });

  // Sembunyikan semua konten
  contentSkill.classList.add("hidden");
  contentExp.classList.add("hidden");
  contentWhat.classList.add("hidden");
}

// Event untuk masing-masing tombol
btnSkill.addEventListener("click", () => {
  resetActive();
  btnSkill.classList.remove("dark:bg-gray-900", "text-white");
  btnSkill.classList.add("dark:bg-white", "text-black");
  contentSkill.classList.remove("hidden");
});

btnExp.addEventListener("click", () => {
  resetActive();
  btnExp.classList.remove("dark:bg-gray-900", "text-white");
  btnExp.classList.add("dark:bg-white", "text-black");
  contentExp.classList.remove("hidden");
});

btnWhat.addEventListener("click", () => {
  resetActive();
  btnWhat.classList.remove("dark:bg-gray-900", "text-white");
  btnWhat.classList.add("dark:bg-white", "text-black");
  contentWhat.classList.remove("hidden");
});

// Render mobile tab contents
skills.forEach((s) => {
  const el = document.createElement("div");
  el.className =
    "bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex flex-col items-center gap-2";
  el.innerHTML = `
    <div class="w-12 h-12 bg-indigo-500 text-white flex items-center justify-center rounded-full font-bold">PHP</div>
    <span class="text-sm">${s}</span>
  `;
  contentSkill.appendChild(el);
});

experiences.forEach((e) => {
  const el = document.createElement("div");
  el.className = "space-y-2 pb-4 border-b border-gray-200 last:border-0";
  el.innerHTML = `
    <h4 class="font-bold">${e.title}</h4>
    <p class="text-xs text-gray-500">${e.period}</p>
    <p class="text-sm text-gray-600 dark:text-gray-300">${e.description}</p>
  `;
  contentExp.appendChild(el);
});

capabilities.forEach((c) => {
  const el = document.createElement("div");
  el.className = "bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-2";
  el.innerHTML = `
    <div class="text-3xl">${c.icon}</div>
    <h4 class="font-bold">${c.title}</h4>
    <p class="text-sm text-gray-600 dark:text-gray-300">${c.description}</p>
  `;
  contentWhat.appendChild(el);
});
