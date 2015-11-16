module.exports = function(callback) {
    'use strict';

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

    require('document-register-element/build/document-register-element.js');

    if (!isDom4Browser) {
        require('dom4/build/dom4.js');
    }

    if (!isEs5Browser) {
        require('es5-shim/es5-shim.min.js');
    }

    if (needsPlaceholderPolyfill) {
        require('placeholders/dist/placeholders.min.js');
    }


    if (callback && typeof callback === 'function') {
        callback();
    }
    return;



    var polyfills = [];

    var sjs = require('scriptjs');

    function getPolyfillPath() {
        var src = document.querySelector('script[src*="showcar-ui.min.js"]').src;
        src = src.split('?')[0];
        return src.substr(0, src.lastIndexOf('/')) + '/polyfills/';
    }

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

    if (!isDom4Browser) {
        polyfills.push(getPolyfillPath() + 'dom4.js');
    }

    if (!isEs5Browser) {
        polyfills.push(getPolyfillPath() + 'es5-shim.min.js');
    }

    if (needsPlaceholderPolyfill) {
        polyfills.push(getPolyfillPath() + 'placeholders.min.js');
    }

    if (polyfills.length) {
        sjs(polyfills, start);
    } else {
        start();
    }

    function start() {
        require('document-register-element/build/document-register-element.js');
        if (callback && typeof callback === 'function') {
            callback();
        }
    }
};
