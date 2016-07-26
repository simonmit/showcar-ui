function smoothScroll(el, to, duration) {
    if (duration < 0) {
        return;
    }

    let difference = to - window.pageYOffset;
    let perTick = difference / duration * 10;
    $(this).scrollToTimerCache = setTimeout(() => {
        if (!isNaN(parseInt(perTick, 10))) {
            window.scrollTo(0, window.pageYOffset + perTick);
            smoothScroll(el, to, duration - 10);
        }
    }, 10);
}

$('a[href*="#"]').on('click', (e) => {
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
