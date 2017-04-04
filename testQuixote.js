window.__karma__.loaded = function () {}; //  prevent of execution mocha
var quixote = require('quixote');
var assert = require('chai').assert;
var frame;
setTimeout(function () {
    window.__karma__.start(); //execute mocha; Wait while frame will load
}, 2000);

var runTest = function (browserWidth) {
    frame = quixote.createFrame({
        src: 'http://localhost:9876/docs/atoms/',     // karma url with port //change to http://localhost:9876
        width: browserWidth
    },function () { //keep callback

    });
    describe('Device width: ' + browserWidth, function () {
        require('./src/06-components/atoms/button/specs/button.layout.js')(frame, assert);
        require('./src/06-components/atoms/custom-dropdown/specs/custom-dropdown.layout.js')(frame, assert);
    });
    beforeEach(function () {
        frame.reset();
    });
    after(function () {
        frame.remove();
    });
};

[320, 640].forEach(runTest);
