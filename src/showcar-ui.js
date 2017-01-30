// Todo: remove Zepto
if(!window.jQuery) window.$ = window.Zepto = require('zepto-browserify').$;

let warn = (msg) => window.console && window.console.warn(msg);

window.Storage = require('showcar-storage');
window.Pager = require('./06-components/organisms/pager/pager.js');

window.lazySizesConfig = { loadMode: 1, expFactor: 0, hFac:0 };
require('lazysizes');

// Todo: remove from the library
// require('showcar-icons');

// const ctor = document.createElement('as24-tracking').constructor;

/*if (ctor === HTMLElement || ctor === HTMLUnknownElement) {
    require('showcar-tracking');
}*/

var showcar = {};

showcar.spyNavigation = require('./06-components/organisms/spy-navigation/spy-navigation.js');

require('./06-components/atoms/custom-dropdown.js');

$(_ => {
    require('./06-components/organisms/navigation/navigation.js');
    require('./06-components/atoms/rotating-arrow/rotating-arrow.js')(); // Todo: Check usages and remove
    require('./06-components/organisms/sticky/sticky.js')();
    require('./06-components/molecules/collapse/collapse.js')();
    require('./js/components/scroll/scroll.js');
    require('./06-components/atoms/stepper/stepper.js');
    require('./06-components/atoms/tooltip/tooltip.js')();
    require('./06-components/atoms/lightbox/lightbox.js');
});

// TODO: question for the guild
if (!window.notification) {
    window.notification = require('./06-components/molecules/notification.js');
} else {
    warn('window.notification is already registered.');
}

window.showcar = window.showcar || showcar;
module.exports = showcar;
