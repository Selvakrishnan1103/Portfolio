document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('mobile-menu');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const themeToggleButton = document.getElementById('modeToggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    themeToggleButton.addEventListener('click', function() {
        body.classList.toggle('light-theme');
        body.classList.toggle('dark-theme');

        const currentTheme = body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        localStorage.setItem('theme', currentTheme);
    });
});
