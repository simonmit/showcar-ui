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

window.Storage = require('../../vendor/showcar-storage/src/storage.js');

require('./components/custom-dropdown.js');
require('./components/navigation.js');
require('./components/rotating-arrow.js')();
require('./components/sticky.js')();
require('./components/collapse.js')();

if (!window.notification) {
    window.notification = require('./components/notification.js');
} else {
    warn('window.notification is already registered.');
}
