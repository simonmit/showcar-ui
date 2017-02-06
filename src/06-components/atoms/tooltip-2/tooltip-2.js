const registerTooltip = (name = 'as24-tooltip') => {
    const AS24TooltipPrototype = Object.create(HTMLElement.prototype, {
        attachedCallback: {
            value: function () {
                this.shown = false;
                this.content = this.querySelector('.sc-tooltip-content');
                this.arrow = document.createElement('span');
                this.arrow.classList.add('tooltip-arrow');
                this.content.appendChild(this.arrow);

                this.addEventListener('mouseover', this.show, false)
                this.addEventListener('mousedown', this.show, false)
                this.addEventListener('touchstart', this.show, false)
                this.addEventListener('click', this.show, false)
                this.addEventListener('mouseleave', this.hide, false)
                document.addEventListener('touchstart', () => this.hide(), false)
            }
        },

        show: {
            value: function () {
                clearTimeout(this.timeoutID);
                if (this.shown === true) return;
                this.content.classList.add('tooltip-shown');
                this.setPosition();
            }
        },

        hide: {
            value: function () {
                this.timeoutID = window.setTimeout(() => {
                    this.shown = false;
                    this.content.classList.remove('tooltip-shown');
                    this.content.style.top = 0 + 'px';
                    this.content.style.left = 0 + 'px';
                }, 300);
            }
        },

        setPosition: {
            value: function () {
                this.shown = true;
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
        }
    });
    try {
        document.registerElement(name, { prototype: AS24TooltipPrototype });
    } catch (e) {
        if (window && window.console) {
            window.console.warn('Failed to register CustomElement "' + name + '".', e);
        }
    }
};

module.exports = () => registerTooltip();
