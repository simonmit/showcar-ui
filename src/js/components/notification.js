let ContainerHandler = require('./notification/ContainerHandler');
let containerHandler = new ContainerHandler();

function onElementCreated() {
    containerHandler.addNotification(this);
}

function onElementChanged(attributeName, previous, value) {
    containerHandler.updateNotification(this, attributeName, value);
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
