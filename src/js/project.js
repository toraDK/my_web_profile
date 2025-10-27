document.addEventListener("DOMContentLoaded", () => {
const projects = [
    {
        img: "isfor",
        title: "Is For website",
        description: "This website is a Problem-Based Learning (PBL) project developed during the third semester. It serves as a platform to accommodate research conducted by lecturers and students at the State Polytechnic of Malang. My role in this project was to develop website features using PHP Native, optimize database queries, design database tables, and implement CRUD functionalities.",
        software: ["html5", "microsoftsqlserver", "tailwindcss", "javascript", "php"],
        link: ["https://github.com/KhalidFinny/isFor-website"],
    },
    {
        img: "rentBike",
        title: "rent bike",
        description: `Rent-bike-data" is a dashboard that displays bike rental data from January 1, 2011, to December 31, 2012. This project was completed as part of the Dicoding bootcamp for "Belajar Analisis Data dengan Python" class.`,
        software: ["python", "jupyter", "streamlit"],
        link: ["https://rentbike.streamlit.app/"]
    },
    {
        img: "simple-notes",
        title: "notes app",
        description: `This is a simple notes application that allows users to create, read, update, and delete notes. This project was built using : `,
        software: ["html", "css", "javascript"],
        link: ["https://rentbike.streamlit.app/"]
    },
    {
        img: "todo",
        title: "todo list app",
        description: `This is a “to-do list” website, designed to keep track of both completed and incomplete tasks. This project was developed as part of the Dicoding bootcamp for “Belajar Membuat Front-End web untuk pemula” class. This project was built using : `,
        software: ["html5", "css3", "javascript"],
        link: ["https://toradk.github.io/Todo-Apps/src/index.html"],
    },
    {
        img: "bookshelf",
        title: "BookShelf App",
        description: `This is the "Bookshelf Apps" website, a platform designed to keep track of books you've read and those you haven't. This project was developed as part of the completion of the Dicoding bootcamp for "Belajar Membuat Front-End web untuk pemula" class. This project was built using : html5, css3, javascript`,
        software: ["html5", "css3", "javascript"],
        link: ["https://toradk.github.io/bookshelf-Apps/"],
    },
    {
        img: "laundry",
        title: "Laundry Website",
        description: "This laundry website is a personal project where I learned to structure the layout using vanilla CSS based on an existing design.",
        software: ["html5", "css3"],
        link: ["https://toradk.github.io/laundry-website/"],
    },
    {
        img: "discusionForum",
        title: "Discusion Forum Website",
        description: `This Forum website is a project to completed as part of the Dicoding bootcamp for "Belajar Dasar Pemograman Web" class.`,
        software: ["html5", "css3"],
        link: ["https://toradk.github.io/projek-dicoding/"]
    },
];

const projectFlex = document.getElementById("project-flex");
//  const scrollContainer = document.getElementById("project-scroll");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
//  const dotsContainer = document.getElementById("dots");

// ===== RENDER PROJECT CARDS =====
projects.forEach((p) => {
    const card = document.createElement("div");
    card.className = "snap-start flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 w-80";

    card.innerHTML = `
    <div class="w-full h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <img src="../assets/project/${p.img}.webp" alt="${p.title}" class="w-full h-full object-contain">
    </div>
    <div class="p-6 space-y-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">${p.title}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">${p.description}</p>
        <div>
        <p class="text-sm font-semibold text-gray-800 dark:text-white mb-2">Software:</p>
        <div class="flex flex-wrap gap-2">
            ${p.software.map(s => `
            <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">
                <img src="../assets/tech/${s}.svg" alt="${s}" class="w-5 h-5">
            </span>
            `).join("")}
        </div>
        </div>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="block mt-4">
        <button class="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm font-medium py-2 rounded transition cursor-pointer">Link Project</button>
        </a>
    </div>
    `;
    projectFlex.appendChild(card);
});

const projectCards = document.querySelectorAll("#project-flex > div");
let currentIndex = 0;

function scrollToCard(index) {
    const card = projectCards[index];
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    updateDots(index);
    currentIndex = index;
}

  // Tombol Next → 1 card ke kanan
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % projectCards.length;
    scrollToCard(currentIndex);
});

  // Tombol Prev → 1 card ke kiri
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
    scrollToCard(currentIndex);
});
});
