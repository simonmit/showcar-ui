class Tooltip extends HTMLElement {
    show() {
        clearTimeout(this.timeoutID);
        this.content.classList.add('tooltip-shown');
        this.setPosition();
    }

    hide() {
        this.timeoutID = window.setTimeout(() => {
            this.content.classList.remove('tooltip-shown')
        }, 300);
    }

    setPosition() {
        const distance = { vertical: 6, horizontal: 8 };
        const contentDim = {
            width: this.content.offsetWidth,
            height: this.content.offsetHeight,
        }
        const wrapperDim = {
            top: this.offsetTop,
            left: this.offsetLeft,
            width: this.offsetWidth,
            height: this.offsetHeight,
        }

        let top = wrapperDim.top - contentDim.height - distance.vertical;
        let left = wrapperDim.left - (contentDim.width / 2) + (wrapperDim.width / 2);

        const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

        if (top - scrollPosition <= 0) {
            top = wrapperDim.top + wrapperDim.height + distance.vertical;
            this.content.classList.remove('tooltip-top');
            this.content.classList.add('tooltip-bottom');
        } else {
            this.content.classList.remove('tooltip-bottom');
            this.content.classList.add('tooltip-top');
        }

        this.content.classList.remove('tooltip-right', 'tooltip-left');

        if (left + contentDim.width > window.innerWidth) {
            left = wrapperDim.left - contentDim.width + wrapperDim.width + distance.horizontal;
            this.content.classList.remove('tooltip-right');
            this.content.classList.add('tooltip-left');
        } else if (left <= 0) {
            left = wrapperDim.left - distance.horizontal;
            this.content.classList.remove('tooltip-left');
            this.content.classList.add('tooltip-right');
        }

        this.content.style.top = top + 'px';
        this.content.style.left = left + 'px';
    }

    attachedCallback() {
        this.content = this.querySelector('.sc-tooltip-content');
        this.arrow = document.createElement('span');
        this.arrow.classList.add('tooltip-arrow');
        this.content.appendChild(this.arrow);

        this.onmouseover = this.show;
        this.onmousedown = this.show;
        this.ontouchstart = this.show;
        this.onclick = this.show;
        document.ontouchstart = ()=> {this.hide() };
        this.onmouseleave = this.hide;
    }
}

export default function registerDS() {
    try {
        return document.registerElement('as24-tooltip', Tooltip);
    } catch (e) {
        return null;
    }
}
module.exports = () => {
    registerDS();
}