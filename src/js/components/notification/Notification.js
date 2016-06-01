class Notification {


    /**
     * @param {HTMLElement} element
     */
    constructor(element) {
        this.element = element;
        this._body   = '';
        this.body    = this.element.innerHTML;

        this.closeBtn = null;
        this.titleTag = null;
    }

    get title() {
        return this.element.getAttribute('title');
    }

    get timeout() {
        return this.element.getAttribute('timeout');
    }

    get close() {
        return this.element.getAttribute('close');
    }

    get body() {
        return this._body;
    }

    set body(value) {
        this._body = value;
    }

    get target() {
        return document.querySelector(this.targetName);
    }

    get targetName() {
        return this.element.getAttribute('target');
    }

    hide() {
        this.element.classList.remove('show');
        this.element.classList.remove('prefade');
    }

    isShow() {
        return this.element.classList.contains('show');
    }

    /**
     * Create the html structure of the notification element
     */
    create() {
        this.element.classList.add('prefade');
        this.element.innerHTML = '';
        this.container = this.createElement('div', this.element, '', ['icon']);
        this.titleTag = this.createElement('span', this.container, this.title, ['sc-font-m', 'sc-font-bold']);
        this.createElement('div', this.container, this.body);

        if (this.close) {
            this.closeBtn = this.createCloseButton();
        }
    }

    /**
     * @param {String} attribute
     * @param {String} value
     */
    update(attribute, value) {
        if ('class' === attribute && this.isShow()) {
            this.element.classList.remove('prefade');
            if (this.timeout) {
                window.setTimeout(this.hide.bind(this), this.timeout);
            }
        } else if ('class' === attribute && !this.isShow()) {
            this.hide();
        }
        if ('title' === attribute) {
            this.titleTag.innerHTML = value;
        }
        if ('close' === attribute) {
            if (!this.closeBtn && "true" === value) {
                this.closeBtn = this.createCloseButton();
            } else {
                this.closeBtn.remove();
                this.closeBtn = null;
            }
        }
    }

    /**
     * @param {String} name
     * @param {String} body
     * @param {Array} classes
     * @param {HTMLElement} parent
     * @returns {Element}
     */
    createElement(name, parent, body, classes = []) {
        let element = document.createElement(name);

        classes.forEach((cls) => {
            element.classList.add(cls);
        });
        element.innerHTML = body;

        parent.appendChild(element);

        return element;
    }

    createCloseButton() {
        let closeBtn = this.createElement('a', this.container, '');
        $(closeBtn).on('click', this.hide.bind(this));

        let icon  = this.createElement('as24-icon', closeBtn, '');
        icon.setAttribute('type', 'close');

        return closeBtn;
    }

}

module.exports = Notification;
