document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM Loaded');
    const darkModeToggle = document.getElementById('darkModeToggle');
    console.log('darkModeToggle:', darkModeToggle);
    const bodyElement = document.body;
    const logoImage = document.querySelector('.navbar-brand img');

    // Check if the user's dark mode preference is already set in cookies
    const isDarkModeEnabled = getCookie('darkMode') === 'enabled';

    // Apply the dark mode class if the preference is set or saved
    if (isDarkModeEnabled) {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    function enableDarkMode() {
        bodyElement.classList.add('dark-mode');
        setCookie('darkMode', 'enabled', 365); // Set cookie to expire in 365 days
        updateLogoImage('https://cdn.lynnux.xyz/cloudteam/large_cloudteam_white.png');
    }

    function disableDarkMode() {
        bodyElement.classList.remove('dark-mode');
        deleteCookie('darkMode');
        updateLogoImage('https://cdn.lynnux.xyz/cloudteam/large_cloudteam_black.png');
    }

    function updateLogoImage(src) {
        logoImage.src = src;
    }

    function setCookie(name, value, days) {
        var expires = '';
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + value + expires + '; path=/';
    }

    function getCookie(name) {
        var nameEQ = name + '=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function deleteCookie(name) {
        document.cookie = name + '=; Max-Age=-99999999;';
    }
});
