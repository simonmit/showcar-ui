module.exports = () => {
    'use strict';

    let needsPlaceholderPolyfill = !('placeholder' in document.createElement('input'));

    let isDom4Browser = document.head
        && ('matches' in document.head)
        && ('classList' in document.head)
        && 'CustomEvent' in window;

    let isEs5Browser = 'map' in Array.prototype
        && 'isArray' in Array
        && 'bind' in Function.prototype
        && 'keys' in Object
        && 'trim' in String.prototype;

    require('document-register-element/build/document-register-element.js');
    require('picturefill/dist/picturefill.js');

    if (!isDom4Browser) {
        require('dom4/build/dom4.js');
    }
    if (!isEs5Browser) {
        require('es5-shim/es5-shim.min.js');
    }
    if (needsPlaceholderPolyfill) {
        //check if this is required anymore and can be dropped - midler, 09.02.2016
        //needed only for IE9 support
        require('placeholders/dist/placeholders.min.js');
    }
};
