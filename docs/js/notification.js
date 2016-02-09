!function($) {
    $('.notification-demo').click(function(event) {
        var id = this.getAttribute('data-id');
        var el = document.querySelector('#' + id);

        if (el.hasAttribute('hidden')) {
            el.removeAttribute('hidden');
        } else {
            el.setAttribute('hidden', '');
        }
    });
}(window.Zepto);
