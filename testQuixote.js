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
        require('./src/06-components/atoms/button/specs/button.test.layout.js')(frame, assert);
        require('./src/06-components/atoms/collapse/specs/collapse.test.layout.js')(frame, assert);
    });
    beforeEach(function () {
        frame.reset();
    });
    after(function () {
        frame.remove();
    });
};

[1000, 1500, 1400, 1300, 1200, 400].forEach(runTest);
