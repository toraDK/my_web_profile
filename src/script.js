document.addEventListener("DOMContentLoaded", () => { 
    const desktopMenu = document.getElementById("desktop-menu");
    const navButtons = desktopMenu.querySelectorAll(".nav-btn");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // ========== EVENT KLIK UNTUK NAVIGATION ==========
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            const targetId = link.getAttribute("data-target");
            document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
            
            // Hilangkan status aktif di semua tombol
            navLinks.forEach(l => l.classList.remove("border-b-2", "border-white", "text-gray-400"));
            
            // Tambahkan status aktif ke tombol yang diklik
            link.classList.add("border-b-2", "border-white", "text-gray-400");
        });
    });

    // ========== SCROLL UNTUK UPDATE ACTIVE NAV ==========
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 100) {
            current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            const target = link.getAttribute("data-target");
            link.classList.remove("border-b-2", "border-white", "text-gray-400");
            if (target === `#${current}`) {
            link.classList.add("border-b-2", "border-white", "text-gray-400");
            }
        });
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

    document.querySelectorAll(".logo").forEach((logo) => {
        logo.addEventListener("click", () => {
            const target = document.querySelector("#home");
            if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            }
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

    // ===== contact form submission =====
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log("Form submitted:", { name, email, message });

        if (!name || !email || !message) {
            showMessage('Please fill in all fields.', 'error');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        try {
            // Ganti dengan URL web app Anda dari Google Apps Script
            const response = await fetch('https://script.google.com/macros/s/AKfycbxFiWApojpzskqAapr94ZFSJw8lVvhg1OoKYYE5r_ItF7A_0-PbB6dLwVmgzharaeNbRg/exec', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
            });

            // Karena mode no-cors, asumsikan sukses jika tidak ada error
            showMessage('Thank you! Your message has been sent.', 'success');
            form.reset();
        } catch (error) {
            console.error('Error sending message:', error);
            showMessage('Failed to send message. Please try again later.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send';
        }
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `mt-4 p-3 rounded-md ${type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`;
        messageDiv.classList.remove('hidden');
        setTimeout(() => {
            messageDiv.classList.add('hidden');
        }, 5000);
    }

    // ====== Certificate Script ======
    const certificateGrid = document.getElementById("certificate-grid");

    const Certificates = [
        ["Analisis_Data_Python", "MRZMYK8KLZYQ"], 
        ["Dasar_AI", "GRX5O08J3P0M"], 
        ["Dasar_JS", "2VX3RY4GQZYQ"], 
        ["Dasar_Web", "L4PQQN6Y4PO1"], 
        ["Front-End_Web", 'RVZKR8W5NPD5'], 
        ["Pemrograman_Python", "NVP7Q3RR4ZR0"],
        ["SQL", "2VX3RLR84ZYQ"], 
        ["Visualisasi_Data", "JMZV30NJJPN9"],
        ["AWS", "GRX5J4VWKX0M"],
        ["ML_beginner", "NVP7J40JVXR0"]
    ];

    // Bersihkan grid sebelum isi (jaga-jaga kalau sudah ada isi sebelumnya)
    certificateGrid.innerHTML = "";

    // Loop semua sertifikat dan tambahkan elemen
    Certificates.forEach((certificate) => {
    
    const [fileName, url] = certificate;

    const card = document.createElement("div");
    card.className = "certificate-card w-full h-auto rounded-lg hover:shadow-lg transition-shadow relative cursor-pointer overflow-hidden";

    // isi HTML tiap kartu
    card.innerHTML = `
    <div class="relative bg-gray-600 rounded-lg overflow-hidden">
        <img src="../assets/certificates/${fileName}.webp" alt="${fileName}" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105">
        
        <div class="absolute inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 opacity-0 hover:opacity-[.95] transition-opacity duration-300 cursor-pointer">
            <a href="https://www.dicoding.com/certificates/${url}" target="_blank" rel="noopener noreferrer">
                <button class="bg-white text-blue-600 px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-100 cursor-pointer">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                </button>
            </a>
        </div>
    </div>
    `;

    certificateGrid.appendChild(card);
    });
});