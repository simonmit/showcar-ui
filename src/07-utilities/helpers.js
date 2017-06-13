const registerElement = element => {
    try {
        let attached = [];
        document.registerElement(element.tagName, {
            prototype: Object.create(HTMLElement.prototype, {
                createdCallback: {
                    value: element.createdCallback
                },
                attributeChangedCallback: {
                    value: element.attributeChangedCallback
                },
                attachedCallback: {
                    value () {
                        if (attached.indexOf(this) != - 1) return; // run as singleton

                        element.attachedCallback.bind(this)();
                        attached.push(this);
                    }
                }
            })
        });
    } catch (e) {
        if (window && window.console) {
            window.console.warn('Failed to register CustomElement "' + element.tagName + '".', e);
        }
    }
};

export default registerElement;
