document.addEventListener("DOMContentLoaded", () => {
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
});