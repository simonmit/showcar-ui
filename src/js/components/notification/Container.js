class Container {

    constructor(target) {
        this.target        = target;
        this.element       = this.createElement('div', document.body, '', ['sc-notification-container']);
        this.notifications = [];

        this.updatePosition();

        $(document).on('scroll', this.onScroll.bind(this));
    }

    /**
     * @returns {Array}
     */
    get childNodes() {
        return this.element.childNodes;
    }

    /**
     * @returns {Node}
     */
    remove() {
        return this.element.remove();
    }

    addNotificationToTarget(notification) {
        this.element.appendChild(notification.element);
    }

    addNotification(notification) {
        if (this.notifications.indexOf(notification) < 0) {
            this.notifications.push(notification);
        }
        this.addNotificationToTarget(notification);
    }

    removeNotification(notification) {
        return this.notifications.splice(this.notifications.indexOf(notification), 1);
    }

    /**
     * @param {Notification} notification
     * @param {String} attribute
     * @param {String} value
     */
    updateNotification(notification, attribute, value) {
        notification.update(attribute, value);

        if ('target' === attribute || ('class' === attribute && 'show' === value)) {
            this.addNotification(notification);
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
                left: offset.left + 'px'
            });
        }
    }

    onScroll() {
        this.updatePosition();
    }

}

module.exports = Container;
