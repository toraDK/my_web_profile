document.addEventListener("DOMContentLoaded", () => {
    aboutContent = document.getElementById("about-content");

    function renderAboutContent() {
        if(window.innerWidth > 768) {
            aboutContent.innerHTML = `
            <p>I am a fifth-semester student in the D4 Informatics Engineering program at Politeknik Negeri Malang.</p>
            <p>I have internship experience as a Web Developer at PR Institute Surabaya for six months (October 2021 – March 2022).</p>
            <p>I am skilled in backend web development using PHP Native and Laravel, performing database query optimization, and building CRUD features.Additionally, I can design and develop user interfaces using Tailwind CSS and Vanilla JavaScript.</p>
            <p>I am a detail-oriented individual who can work both independently and collaboratively, focusing on delivering efficient and high-quality results.</p>
            `;
        } else {
            aboutContent.innerHTML = `
            <p>
                A fifth-semester Informatics Engineering student at Politeknik Negeri Malang with six months of internship experience as a Web Developer at PR Institute Surabaya. Skilled in backend development using PHP and Laravel, database optimization, CRUD implementation, and UI design with Tailwind CSS and Vanilla JavaScript.
            </p>
            `;
        }
    
    }

    // Render pertama kali
    renderAboutContent();

    // Update otomatis jika ukuran layar berubah
    window.addEventListener("resize", () => {
        renderAboutContent();
    });
});