document.addEventListener("DOMContentLoaded", () => {
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
                    View Certificate
                </button>
            </a>
        </div>
    </div>
    `;

    certificateGrid.appendChild(card);
    });
});