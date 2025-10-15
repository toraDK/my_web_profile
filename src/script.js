// Mobile menu toggle
const menuBtnResume = document.getElementById("menu-btn");
const mobileMenuResume = document.getElementById("mobile-menu");
menuBtnResume.addEventListener("click", () => {
  mobileMenuResume.classList.toggle("hidden");
});

// ========== NAVIGATION SCROLL ==========
document.querySelectorAll(".nav-btn, .mobile-nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile menu if open
    document.getElementById("mobile-menu").classList.add("hidden");
  });
});

// ========== MOBILE MENU TOGGLE ==========
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menuBtn.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden");
  if (isOpen) {
    mobileMenu.classList.add("hidden");
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>';
  } else {
    mobileMenu.classList.remove("hidden");
    menuIcon.innerHTML =
      '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>';
  }
});

// ========== THEME TOGGLE ==========
const themeBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeBtn.addEventListener("click", () => {
  const html = document.documentElement;
  const isDark = html.classList.toggle("dark");
  themeIcon.innerHTML = isDark
    ? `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>`
    : `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M12 3v1m0 16v1m8.66-11.66l-.7.7M4.34 17.66l.7-.7M21 12h1M2 12H1m16.66 5.66l-.7-.7M4.34 6.34l.7.7M12 5a7 7 0 100 14 7 7 0 000-14z"/>`;
});

// ========== LANGUAGE TOGGLE ==========
const langEn = document.getElementById("lang-en");
const langId = document.getElementById("lang-id");

langEn.addEventListener("click", () => {
  langEn.classList.add("bg-white", "dark:bg-gray-800");
  langId.classList.remove("bg-white", "dark:bg-gray-800");
});

langId.addEventListener("click", () => {
  langId.classList.add("bg-white", "dark:bg-gray-800");
  langEn.classList.remove("bg-white", "dark:bg-gray-800");
});

// ===== SCROLL TO SECTION (Hero scroll button) =====
document.getElementById("scroll-about")?.addEventListener("click", () => {
  const target = document.querySelector("#about");
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
});

// ===== ANIMATE SECTION FADE IN ON SCROLL =====
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll("section").forEach((sec) => observer.observe(sec));

// ===== PROJECT DATA =====
const projects = [
  {
    title: "Nama Projek 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi. Phasellus congue turpis tortor, eu fermentum tellus rhoncus non.",
    software: ["Software 1", "Software 2"],
  },
  {
    title: "Nama Projek 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi. Phasellus congue turpis tortor, eu fermentum tellus rhoncus non.",
    software: ["Software 1", "Software 2"],
  },
  {
    title: "Nama Projek 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero mi. Phasellus congue turpis tortor, eu fermentum tellus rhoncus non.",
    software: ["Software 1", "Software 2"],
  },
];

// ===== RENDER PROJECTS =====
const projectGrid = document.getElementById("project-grid");

projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow";

    projectCard.innerHTML = ` <div class="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
        <div class="p-6 space-y-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-gray-100">${project.title}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">${project.description}</p>
        <div>
            <p class="text-sm font-semibold text-gray-900 dark:text-gray-200 mb-2">Software :</p>
            <div class="flex flex-wrap gap-2">
            ${project.software
                .map(
                (soft) =>
                    `<span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">${soft}</span>`
                )
                .join("")}
            </div>
        </div>
        <button class="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition">
            Link Project
        </button>
        </div>
    `;
    projectGrid.appendChild(projectCard);
});

// ===== OPTIONAL: SCROLL LEFT / RIGHT INTERACTION =====
const prevBtn = document.getElementById("prev-project");
const nextBtn = document.getElementById("next-project");

let scrollPosition = 0;
const scrollStep = 300;

prevBtn.addEventListener("click", () => {
    projectGrid.scrollBy({ left: -scrollStep, behavior: "smooth" });
});
nextBtn.addEventListener("click", () => {
    projectGrid.scrollBy({ left: scrollStep, behavior: "smooth" });
});

