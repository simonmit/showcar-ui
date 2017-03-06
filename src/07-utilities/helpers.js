const registerElement = element => {
    try {
        document.registerElement(element.tagName, {
            prototype: Object.create(HTMLElement.prototype, {
                createdCallback: {
                    value: element.createdCallback
                },
                attributeChangedCallback: {
                    value: element.attributeChangedCallback
                },
                attachedCallback: {
                    value: element.attachedCallback
                }
            })
        });
    } catch (e) {
        if (window && window.console) {
            window.console.warn('Failed to register CustomElement "' + element.tagName + '".', e);
        }
    }
}

export default registerElement;
