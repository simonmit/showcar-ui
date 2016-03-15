let Notification = require('./Notification');
let Container    = require('./Container');

class ContainerHandler {

    constructor() {
        this.notifications = [];
        this.containers    = {};
    }

    /**
     * Add a new notification
     *
     * @param {HTMLElement} element
     */
    addNotification(element) {
        let notification;
        if (!this.hasNotification(element)) {
            notification = new Notification(element);
            element.notification = notification;
            this.notifications.push(element);
        } else {
            notification = this.getNotification(element);
        }

        this.addNotificationToContainer(notification);
    }

    /**
     * Update a existing notification
     *
     * @param {HTMLElement} element
     * @param {String} attribute
     * @param {String} value
     */
    updateNotification(element, attribute, value) {
        let notification = this.getNotification(element);
        notification.update(attribute, value);

        if ('target' === attribute) {
            this.addNotificationToContainer(notification);
        }
    }

    /**
     * @param {Notification} notification
     */
    addNotificationToContainer(notification) {
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
        let container = new Container(target);
        this.containers[target] = container;

        return container;
    }

    /**
     * @param {String} target
     * @returns {Container}
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

    /**
     * @param {HTMLElement} element
     * @returns {Notification}
     */
    getNotification(element) {
        return this.notifications[this.notifications.indexOf(element)].notification;
    }

    /**
     * @param {HTMLElement} element
     * @returns {boolean}
     */
    hasNotification(element) {
        return this.notifications.indexOf(element) > -1;
    }

}

module.exports = ContainerHandler;
