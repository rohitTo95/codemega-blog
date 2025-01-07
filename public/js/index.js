import {getSystemColorScheme} from "../../src/js/helper.js"
document.addEventListener('DOMContentLoaded', () => {
    const sys_color = getSystemColorScheme();
    // Set default color-scheme if not already set
    if (!document.documentElement.hasAttribute('color-scheme') ) {
        document.documentElement.setAttribute('color-scheme', `${sys_color}`);
    }
});

// TODO : Add prefered-color feature