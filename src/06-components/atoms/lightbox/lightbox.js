import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
    const onOpenCallbacks = [];
    const onCloseCallbacks = [];
    let scrollbarWidth;

    function attachedCallback() {
        let lb = {
            parent: this.parentElement,
            container: this.querySelector('.sc-lightbox__container'),
            content: this.querySelector('.sc-lightbox__content'),
            close: Array.from(this.querySelectorAll('[data-lightbox-close]')),
            preventOutsideClose: this.getAttribute('prevent-outsideclose'),
            customIdentifier: this.getAttribute('data-custom') || ''
        };

        const id = this.id || '';
        const openElements = Array.from(document.querySelectorAll('[data-lightbox-open="' + id + '"]'));
        scrollbarWidth = measureScrollbarWidth();

        openElements.forEach(el => {
            el.addEventListener('click', () => show(lb, el), false);
        });

        lb.close.forEach(el => {
            el.addEventListener('click', e => hide(lb, e, lb.preventOutsideClose !== null), false);
        });
    }

    const show = (lb, opener) => {
        if (
            opener.hasAttribute('data-lightbox-prevent-open') &&
            opener.getAttribute('data-lightbox-prevent-open') == 'true'
        ) {
            return;
        }
        lb.overlay = document.createElement('div');
        lb.overlay.classList.add('sc-lightbox__overlay');

        if (lb.customIdentifier) {
            lb.overlay.setAttribute('data-custom', lb.customIdentifier);
        }

        document.body.appendChild(lb.overlay);

        lb.overlay.classList.add('sc-lightbox__overlay--visible');

        lb.overlay.appendChild(lb.container);

        lb.overlay.appendChild(lb.container);

        lb.container.classList.add('sc-lightbox__container--visible');

        if (lb.preventOutsideClose === null) {
            lb.overlay.addEventListener('click', e => hide(lb, e), false);
            document.addEventListener('keydown', e => {
                if (e.keyCode === 27) hide(lb, e);
            });
        }

        const html = document.querySelector('html');
        html.classList.add('sc-unscroll');
        html.style.marginRight = scrollbarWidth ? `${scrollbarWidth}px` : 0;

        setTimeout(() => {
            lb.overlay.classList.add('sc-lightbox--fadein');
        }, 20);

        onOpenCallbacks.forEach(cb => cb());
    };

    /**
     * @param {boolean} executeOnCloseCallback executeOnCloseCallback Hide method gets called twice when clicking on close button, but we want to run close callback only-once
     */
    const hide = (lb, e, executeOnCloseCallback = true) => {
        const html = document.querySelector('html');
        html.classList.remove('sc-unscroll');
        html.style.marginRight = 0; // reset margin

        if (e.target === lb.overlay || lb.close.includes(e.target) || e.keyCode === 27) {
            e.preventDefault();
            lb.container.classList.remove('sc-lightbox__container--visible');
            lb.parent.appendChild(lb.container);
            if (lb.overlay) {
                lb.overlay.classList.remove('sc-lightbox--fadein');
                setTimeout(() => {
                    lb.overlay.remove();
                }, 250);
            }

            executeOnCloseCallback && onCloseCallbacks.forEach(cb => cb());
        }
    };

    const registerOnOpenCallback = cb => onOpenCallbacks.push(cb);
    const registerOnCloseCallback = cb => onCloseCallbacks.push(cb);

    const measureScrollbarWidth = () => window && document && (window.innerWidth - document.documentElement.clientWidth) || 0;

    registerElement(
        {
            attachedCallback,
            tagName
        },
        {
            registerOnOpenCallback: {
                value: registerOnOpenCallback
            },
            registerOnCloseCallback: {
                value: registerOnCloseCallback
            }
        }
    );
}
