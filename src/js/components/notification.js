class Notification {

    constructor(element) {
        this.element = element;
        this._body   = '';
        this.body    = this.element.innerHTML;

        $(document).on('scroll', this.onScroll.bind(this));
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

    get target() {
        return document.querySelector(this.element.getAttribute('target'));
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
        this.createElement('h3', container, this.title, ['sc-font-m', 'sc-font-bold']);
        this.createElement('div', container, this.body);
    }

    /**
     * @param {String} attribute
     * @param {String} value
     */
    update(attribute, value) {
        if ('class' === attribute && this.isShow()) {
            this.updatePosition();

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

        classes.forEach(function(cls) {
            element.classList.add(cls);
        });
        element.innerHTML = body;

        parent.appendChild(element);

        return element;
    }

    /**
     * Update the position of the notification directly below the target element
     */
    updatePosition() {
        if (!this.target) return;

        let target  = $(this.target);
        let offset  = target.offset();
        let width   = target.width();
        let element = $(this.element);

        if ($(window).scrollTop() > (offset.top + offset.height)) {
            element.css({
                position: 'fixed',
                top: 0,
                width: width + 'px',
                left: offset.left + 'px'
            });
        } else {
            let top = (offset.top + offset.height) - $(target).offsetParent().offset().top;
            element.css({
                position: 'absolute',
                width: width + 'px',
                top: top + 'px',
                left: this.target.offsetLeft + 'px'
            });
        }
    }

    onScroll() {
        if (this.element.classList.contains('show')) {
            this.updatePosition();
        }
    }

}

function onElementCreated() {
    this.notification = new Notification(this);
    this.notification.create();
}

function onElementChanged(attributeName, previous, value) {
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


