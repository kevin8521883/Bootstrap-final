$(document).ready(function () {
    //愛心
    $('.item-favorite').click(function () {
        $(this).find('.far-heart').toggleClass('d-none');
        $(this).find('.fas-heart').toggleClass('d-none');
    });
    //刪除訂單
    $('#removeModal').on('show.bs.modal', function (e) {
        var btn = $(e.relatedTarget);
        var title = btn.data('title');
        var modal = $(this);
        modal.find('.modal-title').text('刪除 ' + title);
    });
});

//驗證
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);

            //a連結驗證功能
            var submitLink = document.querySelector('.sub-link');
            submitLink.addEventListener('click', function (event) {    
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

