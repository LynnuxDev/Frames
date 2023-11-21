document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded');

    var darkModeToggle = document.getElementById('mode-toggle');
    console.log('darkModeToggle:', darkModeToggle);

    // Check if dark mode preference is stored in Local Storage
    var isDarkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

    // Set the initial state based on the Local Storage value
    darkModeToggle.checked = isDarkModeEnabled;

    // Apply dark mode styles based on the initial state
    if (isDarkModeEnabled) {
        enableDarkMode();
    }

    darkModeToggle.addEventListener('change', function() {
        console.log('Dark mode toggle changed');

        if (darkModeToggle.checked) {
            console.log('Dark mode enabled');
            enableDarkMode();
        } else {
            console.log('Dark mode disabled');
            disableDarkMode();
        }

        // Save the user's preference in Local Storage
        localStorage.setItem('darkMode', darkModeToggle.checked ? 'enabled' : 'disabled');
    });

    function enableDarkMode() {
        console.log('Enabling dark mode');
        document.body.classList.add('dark-mode');
    }

    function disableDarkMode() {
        console.log('Disabling dark mode');
        document.body.classList.remove('dark-mode');
    }
});