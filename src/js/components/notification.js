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
        let container = this.createElement('div', this.element, '', ['sc-content-container', 'icon']);
        this.createElement('h3', container, this.title, ['sc-font-m', 'sc-font-bold']);
        this.createElement('div', container, this.body);
    }

    /**
     * @param {String} attribute
     * @param {String} value
     */
    update(attribute, value) {
        if ('class' === attribute && 'show' === value && this.timeout) {
            window.setTimeout(this.hide.bind(this), this.timeout);
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

try {
    module.exports = document.registerElement(tagName, {
        prototype: Object.create(HTMLElement.prototype, {
            createdCallback: { value: onElementCreated },
            attributeChangedCallback: { value: onElementChanged }
        })
    });
} catch (e) {
    if (window && window.console) {
        window.console.warn('Failed to register CustomElement "' + tagName + '".', e);
    }
}


