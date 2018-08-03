/**
 * @param {object} additionalProperties must be of the form { value : function } |
 */
const registerElement = (element, additionalProperties = {}) => {
    try {
        let attached = [];
        document.registerElement(element.tagName, {
            prototype: Object.create(
                HTMLElement.prototype,
                Object.assign(
                    {
                        createdCallback: {
                            value: element.createdCallback
                        },
                        attributeChangedCallback: {
                            value: element.attributeChangedCallback
                        },
                        attachedCallback: {
                            value() {
                                if (attached.indexOf(this) != -1) return; // run as singleton. We need it for (p)react

                                element.attachedCallback.bind(this)();
                                attached.push(this);
                            }
                        }
                    },
                    additionalProperties
                )
            )
        });
    } catch (e) {
        if (window && window.console) {
            window.console.warn('Failed to register CustomElement "' + element.tagName + '".', e);
        }
    }
};

export default registerElement;
