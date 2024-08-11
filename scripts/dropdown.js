
        document.addEventListener('DOMContentLoaded', function() {
     
            const menu = document.querySelector('.menu');
            const menuBtn = document.querySelector('.menu-btn');

            menuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                menu.classList.toggle('open');
            });


            document.addEventListener('click', function(e) {
                if (!menu.contains(e.target)) {
                    menu.classList.remove('open');
                }
            });

        });
