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
    $('a[href^="#"]').on('click', function(e) {
        var targetName, targetSelector,
            scrollDuration = 300;

        e.preventDefault();

        targetName = $(e.currentTarget).attr('href').replace('#', '');
        targetSelector = 'a[name="' + targetName + '"]';
        if ($(targetSelector).length === 0) {
            return;
        }

        smoothScroll($(window), $(targetSelector).offset().top, scrollDuration);
    });
});
