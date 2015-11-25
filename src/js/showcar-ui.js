require('../../vendor/zepto/zepto.min.js');

var polyfills = require('./components/polyfills.js');
polyfills();

var collapse = require('./components/collapse.js');
collapse();

require('../../vendor/showcar-icons/dist/showcar-icons.min.js');

window.Storage = require('../../vendor/showcar-storage/src/storage.js');


require('./components/rotating-arrow.js')();
require('./components/custom-dropdown.js');

$(function () {
    var dataFontSource = $('[data-font-source]');

    if (dataFontSource.length > 0) {
        window.WebFontConfig = {
            custom: {
                families: ['Source Sans Pro'],
                urls: [dataFontSource.attr('data-font-source')]
            }
        };
    }
});

