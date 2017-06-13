export const once = (fn, context) =>{
    let result;
    return function() {
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
};

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
                    value () {
                        once(element.attachedCallback.bind(this)());
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
