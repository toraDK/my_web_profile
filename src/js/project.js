document.addEventListener("DOMContentLoaded", () => {
const projects = [
    {
        title: "Nama Projek 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        software: ["Software 1", "Software 2"],
    },
    {
        title: "Nama Projek 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        software: ["Software 1", "Software 2"],
    },
    {
        title: "Nama Projek 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        software: ["Software 1", "Software 2"],
    },
    {
        title: "Nama Projek 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        software: ["Software 3", "Software 4"],
    },
    {
        title: "Nama Projek 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        software: ["Software 3", "Software 4"],
    },
    {
        title: "Nama Projek 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        software: ["Software 3", "Software 4"],
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
        <div class="w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
        <div class="p-6 space-y-4">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white">${p.title}</h3>
        <p class="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">${p.description}</p>
        <div>
            <p class="text-sm font-semibold text-gray-800 dark:text-white mb-2">Software:</p>
            <div class="flex flex-wrap gap-2">${p.software.map(s => `<span class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full">${s}</span>`).join("")}</div>
        </div>
        <button class="w-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-sm font-medium py-2 rounded transition"> Link Project </button>
        </div>`;
    projectFlex.appendChild(card);
});

const projectCards = document.querySelectorAll("#project-flex > div");
let currentIndex = 0;

//   // ===== RENDER DOTS =====
//   projects.forEach((_, i) => {
//     const dot = document.createElement("button");
//     dot.className = "w-2.5 h-2.5 rounded-full bg-gray-400 dark:bg-gray-600 transition-all duration-300";
//     if (i === 0) dot.classList.add("bg-blue-600", "scale-125");
//     dot.addEventListener("click", () => scrollToCard(i));
//     dotsContainer.appendChild(dot);
//   });

//   const dots = dotsContainer.querySelectorAll("button");

//   function updateDots(index) {
//     dots.forEach((dot, i) => {
//       dot.classList.toggle("bg-blue-600", i === index);
//       dot.classList.toggle("scale-125", i === index);
//       dot.classList.toggle("bg-gray-400", i !== index);
//     });
//   }

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

//   // Update dot saat user scroll manual
//   scrollContainer.addEventListener("scroll", () => {
//     const scrollLeft = scrollContainer.scrollLeft;
//     const cardWidth = projectCards[0].offsetWidth + 24; // +gap (6 = 1.5rem = 24px)
//     const index = Math.round(scrollLeft / cardWidth);
//     if (index !== currentIndex) {
//       currentIndex = index;
//       updateDots(index);
//     }
//   });
});