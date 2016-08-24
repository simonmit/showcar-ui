// https://gist.github.com/brettz9/4212262
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/of
if (!Array.of) {
    Array.of = function() {
        return Array.prototype.slice.call(arguments);
    };
}
