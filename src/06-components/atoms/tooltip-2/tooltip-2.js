import registerElement from '../../../07-utilities/helpers.js';

export default function (tagName) {
let tooltip, content, shown, arrow, timeoutID;

    function attachedCallback() {
        tooltip = this; // temporary TODO REFACTOR
        shown = false;
        arrow = document.createElement('span');
        arrow.classList.add('tooltip-arrow');
        content = this.querySelector('.sc-tooltip-content');
        content.appendChild(arrow);

        this.addEventListener('mouseover', show, false)
        this.addEventListener('mousedown', show, false)
        this.addEventListener('touchstart', show, false)
        this.addEventListener('click', show, false)
        this.addEventListener('mouseleave', hide, false)
        document.addEventListener('touchstart', () => hide(), false)
    };

    function show() {
        clearTimeout(timeoutID);
        if (shown === true) return;
        content.classList.add('tooltip-shown');
        setPosition();
    }

    function hide() {
        timeoutID = window.setTimeout(() => {
            shown = false;
            content.classList.remove('tooltip-shown');
        }, 300);
    };

    function setPosition() {
        shown = true;
        const distance = { vertical: 6, horizontal: 8 };
        const contentDim = {
            width: content.offsetWidth,
            height: content.offsetHeight,
        }
        const wrapperDim = {
            top: tooltip.offsetTop,
            left: tooltip.offsetLeft,
            width: tooltip.offsetWidth,
            height: tooltip.offsetHeight,
        }

        let top = wrapperDim.top - contentDim.height - distance.vertical;
        let left = wrapperDim.left - (contentDim.width / 2) + (wrapperDim.width / 2);

        const scrollPosition = document.documentElement.scrollTop;

        if (top - scrollPosition <= 0) {
            top = wrapperDim.top + wrapperDim.height + distance.vertical;
            content.classList.remove('tooltip-top');
            content.classList.add('tooltip-bottom');
        } else {
            content.classList.remove('tooltip-bottom');
            content.classList.add('tooltip-top');
        }

        content.classList.remove('tooltip-right', 'tooltip-left');

        if (left + contentDim.width > window.innerWidth) {
            left = wrapperDim.left - contentDim.width + wrapperDim.width + distance.horizontal;
            content.classList.remove('tooltip-right');
            content.classList.add('tooltip-left');
        } else if (left <= 0) {
            left = wrapperDim.left - distance.horizontal;
            content.classList.remove('tooltip-left');
            content.classList.add('tooltip-right');
        }

        content.style.top = top + 'px';
        content.style.left = left + 'px';
    };
    registerElement({
        attachedCallback,
        tagName
    });
};
