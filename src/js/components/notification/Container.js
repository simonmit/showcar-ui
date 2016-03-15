class Container {

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

    updateNotification(notification, attribute, value) {

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

module.exports = Container;
