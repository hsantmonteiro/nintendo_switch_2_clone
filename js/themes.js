const colorThemes = document.querySelectorAll('[name="theme"]');

const applyTheme = function (theme) {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
};

const storeTheme = function (theme) {
    localStorage.setItem("theme", theme);
    applyTheme(theme);
};

const retrieveTheme = function () {
    let activeTheme = localStorage.getItem("theme");

    if (!activeTheme) {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        activeTheme = prefersDark ? 'basic-dark' : 'basic-light';
    }

    applyTheme(activeTheme);

    colorThemes.forEach((themeOption) => {
        themeOption.checked = (themeOption.id === activeTheme);
    });
};

colorThemes.forEach((themeOption) => {
    themeOption.addEventListener("click", () => {
        storeTheme(themeOption.id);
    });
});

document.addEventListener("DOMContentLoaded", retrieveTheme);
