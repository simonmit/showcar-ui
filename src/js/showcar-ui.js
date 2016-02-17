require('../../vendor/zepto/zepto.min.js');
require('./components/polyfills.js')();

var FontFaceObserver = require('fontfaceobserver');
var observer = new FontFaceObserver('Source Sans Pro');
try {
    observer.check().then(function () {
        $('body').addClass('font-loaded');
    }, function () {
        warn('Cannot load font.');
    });
} catch (e) {
    warn('Failed to use FontFaceObserver', e);
}

var warn = function (msg) {
    if (!window || !window.console) {
        return;
    }
    window.console.warn(msg);
};

var isRegistered = function(name) {
    var registered = document.createElement(name).constructor !== HTMLElement;
    if (registered) {
        warn('CustomElement "' + name + '" is already registered.');
    }
    return registered;
};

if (!window.storage) {
    window.Storage = require('../../vendor/showcar-storage/src/storage.js');
} else {
    warn('window.storage is already registered.');
}

if (!isRegistered('as24-icon')) {
    require('../../vendor/showcar-icons/dist/showcar-icons.min.js');
}

if (!isRegistered('custom-dropdown')) {
    require('./components/custom-dropdown.js');
}

require('./components/navigation.js');
require('./components/rotating-arrow.js')();
require('./components/sticky.js')();
require('./components/collapse.js')();

if (!window.notification) {
    window.notification = require('./components/notification.js');
} else {
    warn('window.notification is already registered.');
}


