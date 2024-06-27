document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');
    const indexContent = document.getElementById('index-content');
    const regErrorMessage = document.getElementById('reg-error-message');
    const errorMessage = document.getElementById('error-message');
    const contentSections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-links a');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const regUsername = document.getElementById('reg-username').value;
        const regPassword = document.getElementById('reg-password').value;

        regErrorMessage.textContent = '';

        document.getElementById('registration-page').style.display = 'none';
        document.getElementById('login-page').style.display = 'flex';

    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        errorMessage.textContent = '';

        document.getElementById('login-page').style.display = 'none';
        indexContent.style.display = 'block';
        showContent('home');

    });

    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const servicesLink = document.getElementById('services-link');
    const contactLink = document.getElementById('contact-link');
    const womenShopLink = document.getElementById('women-shop'); // Corrected ID

    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        showContent('home');
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        showContent('about');
    });

    servicesLink.addEventListener('click', function(event) {
        event.preventDefault();
        showContent('services');
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        showContent('contact');
    });

    womenShopLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'women_shop.html';
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'about.html';
    });

    servicesLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'services.html';
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'contact.html';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const pageId = this.getAttribute('href').replace('#', '');
            showContent(pageId);
        });
    });

    function showContent(pageId) {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });

        const pageContent = document.getElementById(`${pageId}-content`);
        if (pageContent) {
            pageContent.style.display = 'block';
        }
        
        // Scroll to the top of the main content when switching pages
        indexContent.scrollIntoView({ behavior: 'smooth' });
    }
    
});
