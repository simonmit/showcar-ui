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

class NotificationContainerHandler {

    constructor() {
        this.containers = {};
    }

    addNotification(notification) {
        let container;
        if (!this.hasContainer(notification.targetName)) {
            container = this.createContainer(notification.targetName);
        } else {
            container = this.getContainer(notification.targetName);
        }

        container.addNotification(notification);
    }

    /**
     * Create container below the target element
     *
     * @param target
     */
    createContainer(target) {
        let container = new NotificationContainer(target);
        this.containers[target] = container;

        return container;
    }

    /**
     * @param {String} target
     * @returns {NotificationContainer}
     */
    getContainer(target) {
        return this.containers[target];
    }

    /**
     *
     * @param {String} name
     * @returns {boolean}
     */
    hasContainer(name) {
        return this.containers.hasOwnProperty(name);
    }

}

class NotificationContainer {

    constructor(target) {
        this.target        = target;
        this.element       = this.createElement('div', document.body, '', ['sc-notification-container']);
        this.notifications = [];

        this.updatePosition();

        $(document).on('scroll', this.onScroll.bind(this));
    }

    addNotification(notification) {
        this.notifications.push(notification);
        notification.create();
        this.element.appendChild(notification.element);
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
        this.updatePosition();
    }

}

let containerHandler = new NotificationContainerHandler();

function onElementCreated() {
    this.notification = new Notification(this);
    containerHandler.addNotification(this.notification);
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


