!function($) {
    $('.notification-demo').click(function(event) {
        $('[type=' + this.getAttribute('data-type') + ']').toggleClass('show');
    });
}(window.Zepto);
