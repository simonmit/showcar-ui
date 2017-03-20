export function smoothScroll(target, duration = 300, cb) {
    let targetSelector = '';
    const hrefTarget = $(target).attr('href');
    const nameTarget = $(target).attr('name');

    // We need to handle href and name since spy navigation is using name as target
    if (hrefTarget.length > 0) {
        targetSelector = 'a[name="' + hrefTarget.split('#')[1] + '"]';;
    }

    if (nameTarget.length > 0) {
        targetSelector = 'a[name="' + nameTarget + '"]';
    }

    const to = $(targetSelector).offset().top;

    if (duration <= 0) {
        if (cb) cb();
        window.scrollTo(0, to);
    } else {
        let difference = to - window.pageYOffset;

        let perTick = difference / duration * 10;
        $(this).scrollToTimerCache = setTimeout(() => {
            if (!isNaN(parseInt(perTick, 10))) {
                window.scrollTo(0, window.pageYOffset + perTick);
                smoothScroll(target, duration - 10, cb);
            }
        }, 10);
    }
}

export default function registerSmoothScrolling() {
    // TODO: Get rid of .sc-smooth-scroll class once all teams have migrated to data attribute
    $(document).on('click', '.sc-smooth-scroll, [data-smooth-scroll]', (e) => {
        e.preventDefault();
        smoothScroll(e.currentTarget);
        return false;
    });
}
