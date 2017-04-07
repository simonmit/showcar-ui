window.__karma__.loaded = function () {}; //  prevent of execution mocha  https://zerokspot.com/weblog/2013/07/12/delay-test-execution-in-karma/
var quixote = require('quixote');
var assert = require('chai').assert;
var frame;
setTimeout(function () {
    window.__karma__.start(); //execute mocha; Wait while frame will load https://github.com/karma-runner/karma/blob/v0.8.6/adapter/mocha.wrapper#L6
}, 2000);

var runTest = function (browserWidth) {
    frame = quixote.createFrame({
        src: 'http://localhost:9876/docs/',     // karma url with port
        width: browserWidth
    }, function () { //keep callback

    });
    describe('Device width: ' + browserWidth, function () {
        // require('./src/06-components/atoms/button/specs/button.layout.js')(frame, assert); not working if we open /docs/ page, only works with /docs/atoms/button
        // require('./src/06-components/atoms/custom-dropdown/specs/custom-dropdown.layout.js')(frame, assert);
        // require('./src/06-components/atoms/input/specs/input.layout.js')(frame, assert);
        // require('./src/06-components/atoms/spinner/specs/spinner.layout.js')(frame, assert);
        // require('./src/06-components/atoms/stepper/specs/stepper.layout.js')(frame, assert);

        // require('./src/06-components/molecules/breadcrumb/specs/breadcrumb.layout.js')(frame, assert, browserWidth);
        // require('./src/06-components/molecules/input-group/specs/input-group.layout.js')(frame, assert);
        // require('./src/06-components/molecules/small-footer/specs/small-footer.layout.js')(frame, assert, browserWidth);
        // require('./src/06-components/molecules/small-header/specs/small-header.layout.js')(frame, assert, browserWidth);
        // require('./src/06-components/molecules/validations/specs/validation.layout.js')(frame, assert);

        require('./src/06-components/organisms/spy-navigation/specs/spy-navigation.layout.js')(assert, browserWidth);
        // require('./src/**/specs/*layout.js', { mode: 'list' }).forEach(function (file) {
        //     file.module(frame, assert, browserWidth);
        // });
    });
    beforeEach(function () {
        frame.reset();
    });
    after(function () {
        frame.remove();
    });
};

[320, 768, 1024].forEach(runTest);
