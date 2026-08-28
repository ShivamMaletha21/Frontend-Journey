// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth Navbar Scroll Background Change
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#0f172a';
        nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
    } else {
        nav.style.background = 'rgba(15, 23, 42, 0.8)';
        nav.style.boxShadow = 'none';
    }
});