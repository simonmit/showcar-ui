describe('Components collapse tests', function(){

    beforeEach(function() {
        browser.url('/docs/pages/components.html');
    });

    it('should toggle collapse example',function() {
        browser.isVisible('#collapse-target-1').should.be.false;
        browser.isExisting('#collapse-target-1.in').should.be.false;
        browser.isVisible('[data-target="#collapse-target-1"]').should.be.true;

        browser.click('[data-target="#collapse-target-1"]')
            .isVisible('[data-target="#collapse-target-1"]').should.be.true;
        browser.isExisting('#collapse-target-1.in').should.be.true;
        browser.isVisible('#collapse-target-1').should.be.true;

        browser.click('[data-target="#collapse-target-1"]')
            .isVisible('[data-target="#collapse-target-1"]').should.be.true;
        browser.isExisting('#collapse-target-1.in').should.be.false;
        browser.isVisible('#collapse-target-1').should.be.false;

        return browser;
    });


    it('should collapse more/less example',function () {
        browser.isVisible('[data-test="example-collapse-show"]').should.be.true;
        browser.isVisible('[data-test="example-collapse-hide"]').should.be.false;
        browser.isVisible('[data-test="example-collapse-box"]').should.be.false;

        browser.click('[data-test="example-collapse-show"]');
        browser.isVisible('[data-test="example-collapse-show"]').should.be.false;
        browser.isVisible('[data-test="example-collapse-hide"]').should.be.true;
        browser.isVisible('[data-test="example-collapse-box"]').should.be.true;

        browser.click('[data-test="example-collapse-hide"]');
        browser.isVisible('[data-test="example-collapse-show"]').should.be.true;
        browser.isVisible('[data-test="example-collapse-hide"]').should.be.false;
        browser.isVisible('[data-test="example-collapse-box"]').should.be.false;

        return browser;
    });
});
