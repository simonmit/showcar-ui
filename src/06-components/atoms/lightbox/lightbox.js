import registerElement from '../../../07-utilities/helpers.js';
export default function (tagName) {


    function createdCallback() {
        let overlay = document.querySelector('sc-overlay');

        if (! overlay) {
            overlay = document.createElement('div');
            overlay.classList.add('sc-overlay');
            document.body.appendChild(overlay);
        }

        let lb = {
            parent: this.parentElement,
            open: this.querySelector('.sc-lightbox-open'),
            container: this.querySelector('.sc-lightbox-container'),
            close: this.querySelector('.sc-lightbox-close'),
            content: this.querySelector('.sc-lightbox-content'),
            overlay,
        };

        lb.open.addEventListener('click', () => show(lb), false);
        lb.close.addEventListener('click', (e) => hide(lb, e), false);
        lb.overlay.addEventListener('click', (e) => hide(lb, e), false);
    }

    const show = lb => {
        lb.overlay.classList.add('sc-visible');
        lb.overlay.appendChild(lb.container);
        lb.container.classList.add('sc-visible');

        document.addEventListener('keydown', e => {
            if (e.keyCode == 27) hide(lb);
        });
        setTimeout(() => lb.overlay.classList.add('sc-fade-in'), 20);
    };

    const hide = (lb, e) => {
        e.stopPropagation();
        if (e.target === lb.overlay || e.target === lb.close) {
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
