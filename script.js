const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Toggle classes when hamburger button is clicked
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Auto-close menu drawer when a user selects any link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});