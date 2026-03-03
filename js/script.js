// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 200
});

// Smooth Scroll Interlinking
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for sticky header
                behavior: 'smooth'
            });
        }
    });
});