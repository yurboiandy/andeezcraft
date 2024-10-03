$(document).ready(function() {
    function updateDarkMode() {
        var isChecked = $("#darkModeCheckbox").is(":checked");
        if (isChecked) {
            const body = document.querySelector('body');
            body.style.backgroundColor = '#141414';
            body.style.color = '#f1f1f1';

            const p = document.querySelector('p');
            p.style.color = '#f1f1f1';

            const headTwo = document.querySelector('h2');
            headTwo.style.color = '#f1f1f1';

            const head = document.querySelector('h1');
            head.style.color = '#f1f1f1';
            
            const foot = document.querySelector('.footer');
            foot.style.backgroundColor = '#808080';

            const button = document.querySelector('button');
            button.style.backgroundColor = '#21ccaa';

        } else {
            const body = document.querySelector('body');
            body.style.backgroundColor = '#f1f1f1';
            body.style.color = 'black';

            const p = document.querySelector('p');
            p.style.color = 'black';

            const headTwo = document.querySelector('h2');
            headTwo.style.color = 'black';

            const head = document.querySelector('h1');
            head.style.color = 'black';
            
            const foot = document.querySelector('.footer');
            foot.style.backgroundColor = '#ddd';

            const button = document.querySelector('button');
            button.style.backgroundColor = '#4caf50';

        }
    }

    $("#darkModeCheckbox").on("change", function() {
        updateDarkMode();
    });

    updateDarkMode();
});
