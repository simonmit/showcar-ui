document.addEventListener('click', e => {
    const openTrigger = e.target.closest('.sc-lightbox-trigger');
    const closeTrigger = e.target.closest('.sc-lightbox-close, .sc-lightbox-overlay');

    if (!openTrigger && !closeTrigger) { return; }

    if (openTrigger) {
        show(openTrigger);
    } else {
        hide();
    }
});

document.addEventListener('keydown', e => {
    if (e.keyCode == 27) {
        hide();
    }
});

const show = (lightboxTrigger) => {
    const dataId = lightboxTrigger.getAttribute('data-id');
    const container = document.getElementById(dataId);

    const overlay = document.createElement('div');
    overlay.className = 'sc-lightbox-overlay';

    document.body.appendChild(overlay);

    container.classList.add('sc-lightbox');
    container.classList.remove('sc-hidden');
};

const hide = () => {
    [...document.querySelectorAll('.sc-lightbox-overlay')].forEach(el => {
        el.remove();
    });

    [...document.querySelectorAll('.sc-lightbox')].forEach(el => {
        el.classList.remove('sc-lightbox');
        el.classList.add('sc-hidden');
    });
};