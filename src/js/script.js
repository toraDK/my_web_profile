document.addEventListener("DOMContentLoaded", () => { 
    
    // ========= NAVIGATION FUNCTION ==========

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
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
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

    // // ===== ANIMATE SECTION FADE IN ON SCROLL =====
    // const observer = new IntersectionObserver(
    // (entries) => {
    //     entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //         entry.target.classList.add("animate-fade-in");
    //     }
    //     });
    // },
    // { threshold: 0.2 }
    // );

    // document.querySelectorAll("section").forEach((sec) => observer.observe(sec));
});