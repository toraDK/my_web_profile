document.addEventListener("DOMContentLoaded", () => { 
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
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.add('flex');
        mobileMenu.classList.toggle('border-b-8');
        if (mobileMenu.classList.contains('hidden')) {
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
        } else {
        menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
        }
    });

    document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(button => {
        button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth < 768) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('border-b-8');
            menuIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />';
            }
        }
        });
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
});