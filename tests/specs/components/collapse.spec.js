describe('Components collapse tests', function(){

    beforeEach(function() {
        console.log('beforeEach');
        browser.url('http://localhost:63342/showcar-ui/docs/pages/components.html');
    });


    it('collapse test toggle example',function() {
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


    it('collapse test more/less example',function () {

        browser.isVisible('#collapse-target-1').should.be.false;
        browser
            .click('[data-target="#collapse-target-1"]')
            .isVisible('#collapse-target-1').should.be.true;

        return browser;
    });

    it('should have a submenu after click on the main menu link', function () {

    });
});
