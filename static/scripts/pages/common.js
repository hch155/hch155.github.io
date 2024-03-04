// base.html

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

document.addEventListener('DOMContentLoaded', () => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkModePreferred = storedTheme === 'dark' || (!storedTheme && prefersDarkMode);

    document.documentElement.classList.toggle('dark', isDarkModePreferred);

    const btnThemeToggler = document.getElementById('themeToggle');
    if (btnThemeToggler) {
        btnThemeToggler.textContent = isDarkModePreferred ? 'Light Mode' : 'Dark Mode';
        
        btnThemeToggler.addEventListener('click', () => {
            const isDarkModeNow = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDarkModeNow ? 'dark' : 'light');
            btnThemeToggler.textContent = isDarkModeNow ? 'Light Mode' : 'Dark Mode';

            // Custom event indicating the theme has changed
            window.dispatchEvent(new CustomEvent('themeChanged', { detail: { isDarkMode: isDarkModeNow } }));
        });
    }
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
