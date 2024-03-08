function adjustFooterPosition() {
    const footer = document.querySelector('footer'); 
    const bodyHeight = document.body.offsetHeight;
    const viewportHeight = window.innerHeight;

   if (bodyHeight <= viewportHeight) {
       footer.classList.add('mt-auto');
   } else {
       footer.classList.remove('mt-auto');
   }
}

document.addEventListener('DOMContentLoaded', function() {
    adjustFooterPosition();
});

window.addEventListener('resize', adjustFooterPosition);

document.addEventListener('DOMContentLoaded', function() {
    adjustFooterPosition();
});

window.addEventListener('resize', adjustFooterPosition);


document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkModePreferred = storedTheme === 'dark' || (!storedTheme && prefersDarkMode);

    const btnThemeToggler = document.getElementById('themeToggle');
    const themeIcon = document.createElement('img'); 
    themeIcon.src = isDarkModePreferred ? '/static/images/sunrise.svg' : '/static/images/sunset.svg';
    if (btnThemeToggler) {
        btnThemeToggler.appendChild(themeIcon); // Add the img element

        btnThemeToggler.addEventListener('click', () => {
            const isDarkModeNow = document.body.classList.toggle('dark');
            localStorage.setItem('theme', isDarkModeNow ? 'dark' : 'light');
            themeIcon.src = isDarkModeNow ? '/static/images/sunrise.svg' : '/static/images/sunset.svg';
        });
    }

    document.body.classList.toggle('dark', isDarkModePreferred);
});

// Scroll up
document.addEventListener('DOMContentLoaded', (event) => {
    const backToTopBtn = document.getElementById('backToTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backtoTopBtn.classList.remove('hidden');
        } else {
            backtoTopBtn.classList.add('hidden');
        }
    backtoTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
 });
}); 
