import registerElement from '../../../07-utilities/helpers.js';
export default function(tagName) {
    function createdCallback() {
        this.classList.add('sc-hidden');
    }

    const clickHandler = e => {
        const openTrigger = e.target.closest('.sc-lightbox-trigger');
        const closeTrigger = e.target.closest('.sc-lightbox-close') || ! e.target.closest('.sc-lightbox');
        if (! openTrigger && ! closeTrigger) { return; }
        if (openTrigger) {
            show(openTrigger);
        } else {
            hide();
        }
    };

    const touchHandler = e => {
        const closeTrigger = e.target.closest('.sc-lightbox-close') || ! e.target.closest('.sc-lightbox');
        if (! closeTrigger) { return; }
        hide();
    };

    document.documentElement.addEventListener('touchstart', touchHandler);
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
    };

    const hide = () => {
        [].forEach.call(document.querySelectorAll('.sc-lightbox-overlay'), el => {
            el.classList.add('sc-hidden');
        });
    };

    registerElement({
        createdCallback,
        tagName
    });
}
