class Notification {


    /**
     * @event Notification#onScroll
     * @param {HTMLElement} element
     */
    constructor(element) {
        this.element = element;
        this._body   = '';
        this.body    = this.element.innerHTML;
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
    }

    isShow() {
        return this.element.classList.contains('show');
    }

    /**
     * Create the html structure of the notification element
     */
    create() {
        this.element.innerHTML = '';
        let container = this.createElement('div', this.element, '', ['sc-content-container', 'icon']);
        this.createElement('span', container, this.title, ['sc-font-m', 'sc-font-bold']);
        this.createElement('div', container, this.body);

        if (this.close) {
            let close = this.createElement('a', this.element, '');
            $(close).on('click', this.hide.bind(this));

            let icon  = this.createElement('as24-icon', close, '');
            icon.setAttribute('type', 'close');
        }
    }

    /**
     * @param {String} attribute
     * @param {String} value
     */
    update(attribute, value) {
        if ('class' === attribute && this.isShow()) {
            if (this.timeout) {
                window.setTimeout(this.hide.bind(this), this.timeout);
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

}

module.exports = Notification;
