import registerElement from '../../../07-utilities/helpers.js';
export default function (tagName) {
    function createdCallback() {
        this.classList.add('sc-hidden');
    }

    const clickHandler = e => {
        const openTrigger = e.target.closest('[data-lightbox-trigger]');
        const closeTrigger = e.target.closest('[data-lightbox-close]') || !e.target.closest('.sc-lightbox');
        if (!openTrigger && !closeTrigger) { return; }
        if (openTrigger) {
            show(openTrigger);
        } else {
            hide();
        }
    };

    document.documentElement.addEventListener('click', clickHandler);

    document.addEventListener('keydown', e => {
        if (e.keyCode == 27) {
            hide();
        }
    });

    const show = (lightboxTrigger) => {
        const dataId = lightboxTrigger.getAttribute('data-id');
        const overlay = document.getElementById(dataId);
        const container = overlay.firstElementChild;
        overlay.classList.remove('sc-hidden');
        overlay.classList.add('sc-lightbox-overlay');

        document.body.insertBefore(overlay, document.body.firstChild);

        container.classList.add('sc-lightbox');
        container.classList.remove('sc-hidden');
        setTimeout(() => overlay.classList.add('sc-fade-in'), 20);
    };

    const hide = () => {
        [...document.querySelectorAll('.sc-lightbox-overlay')].forEach(fadeOut);
    };

    const fadeOut = (overlay) => {
        overlay.classList.remove('sc-fade-in');
        setTimeout(() => overlay.classList.add('sc-hidden'), 250);
    };

    registerElement({
        createdCallback,
        tagName
    });
}
