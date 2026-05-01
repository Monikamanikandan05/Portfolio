document.addEventListener('DOMContentLoaded', () => {
    // Page Navigation Elements
    const homePage = document.getElementById('home-page');
    const aboutPage = document.getElementById('about-page');
    const btnAboutMe = document.getElementById('btn-about-me');
    const btnBackHome = document.getElementById('btn-back-home');

    // Section Navigation Elements
    const navButtons = document.querySelectorAll('.nav-btn');
    const contentSections = document.querySelectorAll('.content-section');

    // Navigate to About Page (which contains all details)
    btnAboutMe.addEventListener('click', () => {
        homePage.classList.remove('active');
        aboutPage.classList.add('active');

        // Ensure the "About" section is the first one visible when opening the details page
        navButtons.forEach(btn => btn.classList.remove('active'));
        contentSections.forEach(sec => sec.classList.remove('active'));

        const firstNavBtn = document.querySelector('.nav-btn[data-target="about-section"]');
        const firstSection = document.getElementById('about-section');

        if (firstNavBtn && firstSection) {
            firstNavBtn.classList.add('active');
            firstSection.classList.add('active');
        }

        window.scrollTo(0, 0);
    });

    // Navigate Back to Home Page
    btnBackHome.addEventListener('click', () => {
        aboutPage.classList.remove('active');
        homePage.classList.add('active');
        window.scrollTo(0, 0);
    });

    // Switch between sections within About Page
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and sections
            navButtons.forEach(btn => btn.classList.remove('active'));
            contentSections.forEach(sec => sec.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show target section
            const targetId = button.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission / page reload

            // Show success message
            successMessage.classList.remove('hidden');

            // Reset form fields
            contactForm.reset();

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
            }, 5000);
        });
    }
});