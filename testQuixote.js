window.__karma__.loaded = function () {}; //  prevent of execution mocha  https://zerokspot.com/weblog/2013/07/12/delay-test-execution-in-karma/
var quixote = require('quixote');
var assert = require('chai').assert;
var frame;
var deviceWidth = [320, 768, 1024];

var runTests = function (browserWidth, index) {
    frame = quixote.createFrame({
        src: 'http://localhost:9876/docs/',     // karma url with port
        width: browserWidth
    }, function () {
        if (index === 0) {
            window.__karma__.start(); //execute mocha
        }
    });
    describe('Device width: ' + browserWidth, function () {
        require('./src/**/specs/*layout.js', { mode: 'list' }).forEach(function (file) {
            file.module(frame, assert, browserWidth);
        });
    });
    beforeEach(function () {
        frame.reset();
    });
    after(function () {
        frame.remove();
    });
};

deviceWidth.forEach(runTests);
