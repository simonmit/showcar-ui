import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
    function attachedCallback() {

        let lb = {
            parent: this.parentElement,
            container: this.querySelector('.sc-lightbox-container') /*remove*/ || this.querySelector('.sc-lightbox__container'),
            content: this.querySelector('.sc-lightbox-content') /*remove*/ || this.querySelector('.sc-lightbox__content'),
            close: Array.from(this.querySelectorAll('[data-lightbox-close]')),
            closeOld: this.querySelector('.sc-lightbox-close'), /*remove*/
            preventOutsideClose: this.getAttribute('prevent-outsideclose')
        };

        const oldOpener = this.querySelector('.sc-lightbox-open');
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



        // TODO: remove later
        const closeIcon = document.querySelector('.sc-lightbox-close as24-icon');

        if (! closeIcon) {
            const closeButton = document.querySelector('.sc-lightbox-close');

            if (! closeButton) return;

            const close = document.createElement('as24-icon');
            close.setAttribute('type', 'close');
            closeButton.appendChild(close);
        }
    }

    const show = lb => {
        lb.overlay = document.createElement('div');
        lb.overlay.classList.add('sc-lightbox__overlay');
        lb.overlay.classList.add('sc-overlay'); //remove
        document.body.appendChild(lb.overlay);

        if (lb.preventOutsideClose === null) {
            lb.overlay.addEventListener('click', (e) => hide(lb, e), false);
        }

        lb.overlay.classList.add('sc-temporary-visible'); //remove
        lb.overlay.classList.add('sc-lightbox__overlay--visible');
        lb.overlay.appendChild(lb.container);
        lb.container.classList.add('sc-temporary-visible'); //remove
        lb.container.classList.add('sc-lightbox__container--visible');

        document.addEventListener('keydown', e => {
            if (e.keyCode === 27) hide(lb, e);
        });

        setTimeout(() => {
            lb.overlay.classList.add('sc-fade-in'); //remove
            lb.overlay.classList.add('sc-lightbox--fadein');
        }, 20);
    };

    const hide = (lb, e) => {
        e.stopPropagation();

        if (e.target === lb.overlay || lb.close.includes(e.target) || e.keyCode === 27 || e.target === lb.closeOld) {
            e.preventDefault();
            lb.container.classList.remove('sc-lightbox__container--visible');
            lb.container.classList.remove('sc-temporary-visible'); //remove
            lb.parent.appendChild(lb.container);
            lb.overlay.classList.remove('sc-fade-in'); //remove
            lb.overlay.classList.remove('sc-lightbox--fadein');
            setTimeout(() => {
                lb.overlay.remove();
            }, 250);
        }
    };

    registerElement({
        attachedCallback,
        tagName
    });
}
