module.exports = function(callback) {
    'use strict';

    var loadJs = function(polyfill) {
        var script = document.createElement('script');
        script.src = cdnPaths[polyfill];
        document.body.appendChild(script);
    };

    var cdnPaths = {
        'document-register-element' : 'https://cdnjs.cloudflare.com/ajax/libs/document-register-element/0.5.4/document-register-element.js',
        'picturefill': 'https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.1/picturefill.min.js',
        'dom4': 'https://cdnjs.cloudflare.com/ajax/libs/dom4/1.6.0/dom4.js',
        'es5-shim': 'https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.4.1/es5-shim.min.js',
        'placeholders': 'https://cdnjs.cloudflare.com/ajax/libs/placeholders/4.0.1/placeholders.min.js',
    };

    // intermediate solution
    var needsPlaceholderPolyfill = !('placeholder' in document.createElement('input'));

    var isDom4Browser = document.head
        && ('matches' in document.head)
        && ('classList' in document.head)
        && 'CustomEvent' in window;

    var isEs5Browser = 'map' in Array.prototype
        && 'isArray' in Array
        && 'bind' in Function.prototype
        && 'keys' in Object
        && 'trim' in String.prototype;

    loadJs('document-register-element');
    loadJs('picturefill');

    if (!isDom4Browser) {
        loadJs('dom4');
    }

    if (!isEs5Browser) {
        loadJs('es5-shim');
    }

    if (needsPlaceholderPolyfill) {
        loadJs('placeholders');
    }

    if (callback && typeof callback === 'function') {
        callback();
    }
};
