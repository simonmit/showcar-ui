import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {

    function attachedCallback() {
        let tt = {
            tooltip: this,
            shown: false,
            arrow: document.createElement('span'),
            content: this.querySelector('.sc-tooltip-content'),
            timeoutID: 0
        };

        tt.arrow.classList.add('tooltip-arrow');
        tt.content.appendChild(tt.arrow);

        tt.tooltip.addEventListener('mouseover', () => show(tt), false);
        tt.tooltip.addEventListener('mousedown', () => show(tt), false);
        tt.tooltip.addEventListener('touchstart', () => show(tt), false);
        tt.tooltip.addEventListener('click', () => show(tt), false);
        tt.tooltip.addEventListener('mouseleave', () => hide(tt), false);
        document.addEventListener('touchstart', () => hide(tt), false);
    }

    function show(tt) {
        clearTimeout(tt.timeoutID);
        if (tt.shown === true) return;
        tt.content.classList.add('tooltip-shown');
        setPosition(tt);
    }

    function hide(tt) {
        tt.timeoutID = window.setTimeout(() => {
            tt.shown = false;
            tt.content.classList.remove('tooltip-shown');
        }, 300);
    }

    function setPosition(tt) {
        tt.shown = true;
        const distance = { vertical: 6, horizontal: 8 };
        const contentDim = {
            width: tt.content.offsetWidth,
            height: tt.content.offsetHeight
        };
        const wrapperDim = {
            top: tt.tooltip.offsetTop,
            left: tt.tooltip.offsetLeft,
            width: tt.tooltip.offsetWidth,
            height: tt.tooltip.offsetHeight
        };

        let top = wrapperDim.top - contentDim.height - distance.vertical;
        let left = wrapperDim.left - (contentDim.width / 2) + (wrapperDim.width / 2);

        const scrollPosition = document.documentElement.scrollTop;

        if (top - scrollPosition <= 0) {
            top = wrapperDim.top + wrapperDim.height + distance.vertical;
            tt.content.classList.remove('tooltip-top');
            tt.content.classList.add('tooltip-bottom');
        } else {
            tt.content.classList.remove('tooltip-bottom');
            tt.content.classList.add('tooltip-top');
        }

        tt.content.classList.remove('tooltip-right', 'tooltip-left');

        if (left + contentDim.width > window.innerWidth) {
            left = wrapperDim.left - contentDim.width + wrapperDim.width + distance.horizontal;
            tt.content.classList.remove('tooltip-right');
            tt.content.classList.add('tooltip-left');
        } else if (left <= 0) {
            left = wrapperDim.left - distance.horizontal;
            tt.content.classList.remove('tooltip-left');
            tt.content.classList.add('tooltip-right');
        }

        tt.content.style.top = top + 'px';
        tt.content.style.left = left + 'px';
    }

    registerElement({
        attachedCallback,
        tagName
    });
};
