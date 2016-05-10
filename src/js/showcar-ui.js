window.$ = window.Zepto = require('zepto-browserify').$;
require('./components/polyfills.js')();

let warn = (msg) => {
    if (!window || !window.console) {
        return;
    }
    window.console.warn(msg);
};

window.Storage = require('showcar-storage');
window.Pager = require('./components/pager.js');

require('showcar-icons');
// require('showcar-tracking');
require('./components/custom-dropdown.js');

Zepto(_ => {
    require('./components/navigation.js');
    require('./components/rotating-arrow.js')();
    require('./components/sticky.js')();
    require('./components/collapse.js')();
    require('./components/scroll.js');
});

if (!window.notification) {
    window.notification = require('./components/notification.js');
} else {
    warn('window.notification is already registered.');
}
