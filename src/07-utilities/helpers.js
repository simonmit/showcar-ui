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
                    value: function () {
                        if (attached.indexOf(this) === - 1) {
                            element.attachedCallback.bind(this)();
                            attached.push(this);
                        } else {
                            window.console.warn('Test attachedCallback fail "' + element.tagName + '"');
                        }
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
