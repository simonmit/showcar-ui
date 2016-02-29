function smoothScroll(el, to, duration) {
    if (duration < 0) {
        return;
    }
    var difference = to - $(window).scrollTop();
    var perTick = difference / duration * 10;
    $(this).scrollToTimerCache = setTimeout(function() {
        if (!isNaN(parseInt(perTick, 10))) {
            window.scrollTo(0, $(window).scrollTop() + perTick);
            smoothScroll(el, to, duration - 10);
        }
    }.bind(this), 10);
}

Zepto(function($) {
    $('a[href*="#"]').on('click', function(e) {
        var scrollDuration = 300;
        var targetName = $(e.currentTarget).attr('href').split('#');
        var targetSelector = 'a[name="' + targetName[1] + '"]';

        if ($(targetSelector).length === 0) {
            return;
        }

        e.preventDefault();

        smoothScroll($(window), $(targetSelector).offset().top, scrollDuration);
    });
});
