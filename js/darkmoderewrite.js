$(document).ready(function() {
    function updateDarkMode() {
        var isChecked = $("#darkModeCheckbox").is(":checked");
        if (isChecked) {
            const body = document.querySelector('body');
            body.style.backgroundColor = '#404040';
            body.style.color = '#f1f1f1';
            
            const text = document.querySelector('.footer');
            text.style.backgroundColor = 'grey';

            const body = document.querySelector('button');
            body.style.backgroundColor = '#13f4f3';

        } else {
            const body = document.querySelector('body');
            body.style.backgroundColor = '#f1f1f1';
            body.style.color = 'black';
            
            const text = document.querySelector('.footer');
            text.style.backgroundColor = '#ddd';

            const body = document.querySelector('button');
            body.style.backgroundColor = '#4caf50';

        }
    }

    $("#darkModeCheckbox").on("change", function() {
        updateDarkMode();
    });

    updateDarkMode();
});
