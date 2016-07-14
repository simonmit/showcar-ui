!function($) {
    $('.notification-demo').click(function(event) {
        var id = this.getAttribute('data-id');
        var el = document.querySelector('#' + id);

        el.classList.toggle('show');
    });
}(window.Zepto);
