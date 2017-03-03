const registerElement = element => {
    try {
        document.registerElement(element.tagName, {
            prototype: Object.create(HTMLElement.prototype, {
                createdCallback: {
                    value: element.createdCallback || null
                },
                attributeChangedCallback: {
                    value: element.attributeChangedCallback || null
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
