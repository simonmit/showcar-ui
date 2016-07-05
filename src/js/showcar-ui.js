if(!window.jQuery) window.$ = window.Zepto = require('zepto-browserify').$;

require('./components/polyfills.js')();

let warn = (msg) => {
    if (!window || !window.console) {
        return;
    }
    window.console.warn(msg);
};

if (typeof Object.assign !== 'function') {
    require('object.assign/shim')();
}

window.Storage = require('showcar-storage');
window.Pager = require('./components/pager.js');

require('showcar-icons');

const ctor = document.createElement('as24-tracking').constructor;

if (ctor === HTMLElement || ctor === HTMLUnknownElement) {
    // only requiring showcar-tracking when it was not already included before
    require('showcar-tracking');
}

require('./components/custom-dropdown.js');

$(_ => {
    require('./components/navigation.js');
    require('./components/rotating-arrow.js')();
    require('./components/sticky.js')();
    require('./components/collapse.js')();
    require('./components/scroll.js');
    require('./components/stepper.js');
    require('./components/expandable-box.js')();
});


try {
    document.registerElement('as24-carousel-item', { prototype: Object.create(HTMLElement.prototype) });
} catch (e) {
    if (window && window.console) {
        window.console.warn('Failed to register CustomElement "as24-carousel".', e);
    }
}

if (!window.notification) {
    window.notification = require('./components/notification.js');
} else {
    warn('window.notification is already registered.');
}
