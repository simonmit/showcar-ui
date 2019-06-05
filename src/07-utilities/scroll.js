const scroll = (to, duration) => {
    if (duration <= 0) {
        window.scrollTo(0, to);
    } else {
        let difference = to - window.pageYOffset;

        let perTick = difference / duration * 10;
        $(this).scrollToTimerCache = setTimeout(() => {
            if (!isNaN(parseInt(perTick, 10))) {
                window.scrollTo(0, window.pageYOffset + perTick);
                scroll(to, duration - 10);
            }
        }, 10);
    }
};

export function smoothScroll(target, duration = 300, cb) {

    let targetSelector = '';
    const hrefTarget = $(target).attr('href');

    // We need to handle href and name since spy navigation is using name as target
    if (hrefTarget && hrefTarget.length) {
        targetSelector = 'a[name="' + hrefTarget.split('#')[1] + '"]';
        if (!$(targetSelector).length) {
            targetSelector = hrefTarget;
        }
    } else {
        const nameTarget = $(target).attr('name');
        const idTarget = $(target).attr('id');
        if (nameTarget) {
            targetSelector = 'a[name="' + nameTarget + '"]';
        } else if (idTarget) {
            targetSelector = 'a#' + idTarget;
        } else {
            console.warn('No target for scroll');
            return;
        }
    }

    const offset = $(targetSelector).offset();
    const to = (offset && offset.top) || 0;

    scroll(to, duration);

    if (cb) { cb(); }
}

export default function registerSmoothScrolling() {
    // TODO: Get rid of .sc-smooth-scroll class once all teams have migrated to data attribute
    $(document).on('click', '.sc-smooth-scroll, [data-smooth-scroll]', (e) => {
        e.preventDefault();
        smoothScroll(e.currentTarget);
    });
}
