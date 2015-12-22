require('../../vendor/zepto/zepto.min.js');

var polyfills = require('./components/polyfills.js');
polyfills();

var collapse = require('./components/collapse.js');
collapse();

require('../../vendor/showcar-icons/dist/showcar-icons.min.js');

window.Storage = require('../../vendor/showcar-storage/src/storage.js');


require('./components/rotating-arrow.js')();
require('./components/custom-dropdown.js');
require('./components/sticky.js')();

var FontFaceObserver = require('fontfaceobserver');
var observer = new FontFaceObserver('Source Sans Pro');
observer.check().then(function () {
    $('body').addClass('font-loaded');
});

