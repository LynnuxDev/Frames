document.addEventListener('DOMContentLoaded', function() {
    // console.log('DOM Loaded');    Used for debuging

    var darkModeToggle = document.getElementById('mode-toggle');
    // console.log('darkModeToggle:', darkModeToggle);    Used for debuging

    var isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    darkModeToggle.checked = isDarkModeEnabled;

    if (isDarkModeEnabled) {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('change', function() {
        // console.log('Dark mode toggle changed');    Used for debuging

        if (darkModeToggle.checked) {
            // console.log('Dark mode enabled');     Used for debuging
            enableDarkMode();
        } else {
            // console.log('Dark mode disabled');    Used for debuging
            disableDarkMode();
        }

        // Save the user's preference in Local Storage
        localStorage.setItem('darkMode', darkModeToggle.checked ? 'enabled' : 'disabled');
    });

    function enableDarkMode() {
        // console.log('Enabling dark mode');    Used for debuging
        document.body.classList.add('dark-mode');
    }

    function disableDarkMode() {
        // console.log('Disabling dark mode');    Used for debuging
        document.body.classList.remove('dark-mode');
    }
});