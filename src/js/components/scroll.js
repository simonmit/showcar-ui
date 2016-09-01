function smoothScroll(el, to, duration, cb) {
    if (duration <= 0) {
        if (cb) cb();
        window.scrollTo(0, to);
    } else {
        let difference = to - window.pageYOffset;

        let perTick = difference / duration * 10;
        $(this).scrollToTimerCache = setTimeout(() => {
            if (!isNaN(parseInt(perTick, 10))) {
                window.scrollTo(0, window.pageYOffset + perTick);
                smoothScroll(el, to, duration - 10, cb);
            }
        }, 10);
    }
}

module.exports = smoothScroll;

$(window).on('click', '.sc-smooth-scroll', e => {
    let scrollDuration = 300;
    let targetName     = $(e.currentTarget).attr('href').split('#');
    let targetSelector = 'a[name="' + targetName[1] + '"]';

    if ($(targetSelector).length === 0) {
        targetSelector = '#' + targetName[1];
        if ($(targetSelector).length === 0) {
            return;
        }
    }

    e.preventDefault();

    smoothScroll($(window), $(targetSelector).offset().top, scrollDuration);

    return false;
});
