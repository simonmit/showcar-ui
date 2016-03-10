var chai        = require('chai'),
    assert      = chai.assert,
    webdriverio = require('webdriverio');

describe('Components collapse tests', function(){

    this.timeout(30000);
    var client = {};

    beforeEach(function() {
        console.log('beforeEach');
        browser.url('http://localhost:63342/showcar-ui/docs/pages/components.html');
    });


    it('collapse test toggle example',function() {
        browser.isVisible('#collapse-target-1').should.be.false;
        browser.isExisting('#collapse-target-1.in').should.be.false;
        browser.isVisible('[data-target="#collapse-target-1"]').should.be.true;

        browser.click('[data-target="#collapse-target-1"]');
        browser.isVisible('[data-target="#collapse-target-1"]').should.be.true;
        browser.isExisting('#collapse-target-1.in').should.be.true;
        browser.isVisible('#collapse-target-1').should.be.true;

        browser.click('[data-target="#collapse-target-1"]');
        browser.isVisible('[data-target="#collapse-target-1"]').should.be.true;
        browser.isExisting('#collapse-target-1.in').should.be.false;
        browser.isVisible('#collapse-target-1').should.be.false;

        return browser;
    });


    it('collapse test more/less example',function () {

        /*
        return browser
            .click('[data-test="example-collapse-show"]')
            .isVisible('[data-test="example-collapse-show"]').should.eventually.be.false
            .getText('[data-test="example-collapse-show"]').should.eventually.be.equal('Show content')
        ;
        */

        //browser.isVisible('[data-test=example-collapse-show]').should.be.true;
        /*
        return browser.isVisible('[data-test="example-collapse-show"]').then(function(visible) {
            visible.should.be.true;
        });
        */
        browser.isVisible('[data-test="example-collapse-show"]').should.be.true;
        browser.isVisible('.sc-collapse-target:not([data-test="example-collapse-show"])').should.be.all.false;


        return browser;
        //browser.call(done)
    });


    after(function(done) {
        //browser.end(done);
    });
});
