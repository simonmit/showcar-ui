import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
    function createdCallback() {
        let overlay = document.querySelector('sc-overlay');

        if (!overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('sc-overlay');
            document.body.appendChild(overlay);
        }

        let lb = {
            parent: this.parentElement,
            container: this.querySelector('.sc-lightbox-container') || this.querySelector('.sc-lightbox__container'),
            content: this.querySelector('.sc-lightbox-content') || this.querySelector('.sc-lightbox__content'),
            close: Array.from(this.querySelectorAll('[data-lightbox-close]')),
            closeOld: this.querySelector('.sc-lightbox-close'),
            overlay
        };

        const oldOpener= this.querySelector('.sc-lightbox-open');
        if (oldOpener) {
            oldOpener.addEventListener('click', () => show(lb), false);
        }

        const id = this.id || '';
        const openElements = Array.from(document.querySelectorAll('[data-lightbox-open="' + id + '"]'));

        openElements.forEach(el => {
            el.addEventListener('click', () => show(lb), false);
        });

        lb.close.forEach(el => {
            el.addEventListener('click', (e) => hide(lb, e), false);
        });

        if (lb.closeOld) {
            lb.closeOld.addEventListener('click', (e) => hide(lb, e), false);
        }

        lb.overlay.addEventListener('click', (e) => hide(lb, e), false);

        // TODO: remove later
        const closeIcon = this.querySelector('.sc-lightbox-close as24-icon');

        if (!closeIcon) {
            const closeButton = this.querySelector('.sc-lightbox-close');
            const close = document.createElement('as24-icon');
            close.setAttribute('type', 'close');
            closeButton.appendChild(close);
        }
    }

    const show = lb => {
        lb.overlay.classList.add('sc-visible');
        lb.overlay.appendChild(lb.container);
        lb.container.classList.add('sc-visible');

        document.addEventListener('keydown', e => {
            if (e.keyCode === 27) hide(lb, e);
        });

        setTimeout(() => lb.overlay.classList.add('sc-fade-in'), 20);
    };

    const hide = (lb, e) => {
        e.stopPropagation();

        if (e.target === lb.overlay || lb.close.includes(e.target) || e.keyCode === 27 || e.target === lb.closeOld) {
            e.preventDefault();
            lb.container.classList.remove('sc-visible');
            lb.parent.appendChild(lb.container);
            lb.overlay.classList.remove('sc-fade-in');
            setTimeout(() => {
                lb.overlay.classList.remove('sc-visible');
            }, 250);
        }
    };

    registerElement({
        createdCallback,
        tagName
    });
}
