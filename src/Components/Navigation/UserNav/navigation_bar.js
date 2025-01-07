// Dark and Light Mode
const checkTheme = () => {
    if (document.documentElement.getAttribute('color-scheme') === 'dark') {
        return true;
    }
    return false;
};

const setTheme = () => {
    if (document.documentElement.getAttribute('color-scheme') === 'dark') {
        document.documentElement.setAttribute('color-scheme', 'light');
    } else {
        document.documentElement.setAttribute('color-scheme', 'dark');
    }
};

export { setTheme, checkTheme };
