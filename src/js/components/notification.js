class Notification {

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

    get body() {
        return this._body;
    }

    set body(value) {
        this._body = value;
    }

    hide() {
        this.element.classList.remove('show');
    }

    /**
     * Create the html structure of the notification element
     */
    create() {
        this.element.innerHTML = '';
        let container = this.createElement('div', '', ['sc-content-container'], this.element);
        this.createElement('h3', this.title, ['sc-font-m', 'sc-font-bold', 'icon'], container);
        this.createElement('div', this.body, [], container);
    }

    /**
     * @param {String} attribute
     * @param {String} value
     */
    update(attribute, value) {
        switch(attribute) {
            case 'class':
                if ('show' == value && this.timeout) {
                    window.setTimeout(this.hide.bind(this), this.timeout);
                }
                break;
        }
    }

    /**
     * @param {String} name
     * @param {String} body
     * @param {Array} classes
     * @param {HTMLElement} parent
     * @returns {Element}
     */
    createElement(name, body, classes, parent) {
        let element = document.createElement(name);
        classes.forEach(function(cls) {
            element.classList.add(cls);
        });
        element.innerHTML = body;

        parent.appendChild(element);

        return element;
    }

}

function onElementCreated() {
    this.notification = new Notification(this);
    this.notification.create();
}

function onElementChanged(attributeName, previousValue, value) {
    this.notification.update(attributeName, value);
}

let tagName = 'as24-notification';

module.exports = document.registerElement(tagName, {
    prototype: Object.create(HTMLElement.prototype, {
        createdCallback: { value: onElementCreated },
        attributeChangedCallback: { value: onElementChanged }
    })
});
