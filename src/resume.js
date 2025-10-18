const skills = ["bootstrap", "css3", "html5", "javascript", "python", "sass", "streamlit", "tailwindcss", "laravel", "jupyter", "php", "mysql", "git", "figma", "java"];

const experiences = [
  {
    title: "Software Engineering Student at SMK Negeri 1 Surabaya",
    period: "January 2020 - May 2023",
    description:
      "Learned about software engineering principles and how software is developed. Gained experience in programming languages such as HTML, CSS, PHP, SQL, basic JavaScript, basic Java, and C++, as well as frameworks like Bootstrap and Laravel. Created several projects as part of school assignments.",
  },
  {
    title: "Front-End Developer & Video Editor Intern",
    period: "October 2021 - March 2022",
    description:
      "Responsible for managing YouTube content and creating a company profile website. Built a responsive website using HTML, CSS, Bootstrap, and JavaScript. Edited YouTube videos using CapCut.",
  },
  {
    title: "College Student at State Polytechnic of Malang",
    period: "October 2023 - March 2027",
    description:
      "Learning the fundamentals of programming, object-oriented programming, web development, algorithms, data structures, artificial intelligence, and machine learning. Experienced with programming languages such as HTML, CSS, JavaScript, PHP, and MySQL, as well as frameworks like Laravel and Tailwind. Also currently studying mobile programming with Dart and exploring computer vision and image processing.",
  },
];


const capabilities = [
  {
    icon: "backend",
    title: "Back End",
    description:
      "Able to develop and manage server-side applications using PHP and Laravel. Experienced in building CRUD functionality and creating RESTful APIs for data exchange.",
  },
  {
    icon: "api",
    title: "API",
    description:
      "Capable of designing and implementing APIs to enable seamless communication between applications and systems.",
  },
  {
    icon: "frontend",
    title: "Front End",
    description:
      "Skilled in creating responsive and user-friendly interfaces using HTML, CSS, Tailwind CSS, and vanilla JavaScript.",
  }
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
    <div class="w-12 h-12  text-white flex items-center justify-center rounded-full font-bold"><img src="../assets/tech/${s}.svg" alt="${s}"></div>
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
    <div class="text-3xl"><img src="../assets/capabilities/${c.icon}.svg" alt=""></div>
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
  <div class="w-12 h-12  text-white flex items-center justify-center rounded-full font-bold"><img src="../assets/tech/${s}.svg" alt="${s}"></div>
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
