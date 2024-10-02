$(document).ready(function() {
    function updateDarkMode() {
        var isChecked = $("#darkModeCheckbox").is(":checked");
        if (isChecked) {
            const body = document.querySelector('body');
            body.style.backgroundColor = '#404040';

            const text = document.querySelector('.footer');
            text.style.backgroundColor = 'grey';

        } else {
            const body = document.querySelector('body');
            body.style.backgroundColor = '#f1f1f1';

            const text = document.querySelector('.footer');
            text.style.backgroundColor = '#ddd';

        }
    }

    $("#darkModeCheckbox").on("change", function() {
        updateDarkMode();
    });

    updateDarkMode();
});
