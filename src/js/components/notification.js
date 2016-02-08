document.registerElement('as24-notification');

class Notification {

    constructor() {
        this.timeouts = {};
    }

    /**
     * @param {String} type
     * @returns {Element}
     */
    getElement(type) {
        return document.querySelector("[type="+type+"]");
    }

    /**
     * @param {String} type
     * @param {Number} timeout
     */
    setTimeout(type, timeout) {
        if (!this.timeouts[type]) {
            this.timeouts[type] = window.setTimeout(this.hide.bind(this, type), timeout);
        }
    }

    /**
     * @param {String} type
     */
    clearTimeout(type) {
        if (this.timeouts[type]) {
            delete this.timeouts[type];
        }
    }

    /**
     * @param {String} type
     * @param {Boolean} autoClose
     * @param {Number} timeout
     */
    show(type, autoClose = false, timeout = 1500) {
        let element = this.getElement(type);
        if (element && !element.classList.contains('show')) {
            element.classList.add('show');
        }

        if (true === autoClose) {
            this.setTimeout(type, timeout);
        }
    }

    /**
     * @param {String} type
     */
    hide(type) {
        let element = this.getElement(type);
        if (element && element.classList.contains('show')) {
            element.classList.remove('show');
        }

        this.clearTimeout(type);
    }

    /**
     * @param {String} type
     * @param {String} text
     */
    setTitle(type, text) {
        let element = this.getElement(type);
        if (element) {
            let title = element.querySelector('h3');
            title.innerHTML = text;
        }
    }

    /**
     * @param {String} type
     * @param {String} text
     */
    setBody(type, text) {
        let element = this.getElement(type);
        if (element) {
            let body = element.querySelector('p');
            body.innerHTML = text;
        }
    }

}

let notification    = new Notification();
window.notification = notification;
module.exports      = notification;
