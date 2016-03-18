describe('Components collapse tests', function(){

    beforeEach(function() {
        browser.url('/docs/pages/components.html#navigation');
    });

    it('should hide all nav menues',function() {
        browser.isVisible('.example-navigation .sc-navigation nav .title+ul').should.not.include(true);

        return browser;
    });

    it('should open & close first menue',function() {
        browser.click('.example-navigation .sc-navigation nav ul:first-child li:first-child');
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:first-child ul').should.be.true;
        browser.click('.example-navigation .sc-navigation nav ul:first-child li:first-child');
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:first-child ul').should.be.false;

        return browser;
    });

    it('should close when other menu opens',function() {
        browser.click('.example-navigation .sc-navigation nav ul:first-child li:first-child');
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(2) ul').should.be.false;

        browser.click('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(2)');
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(1) ul').should.be.false;
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(2) ul').should.be.true;

        browser.click('.example-navigation .sc-navigation nav>ul:last-child>li');
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(2) ul').should.be.false;
        browser.isVisible('.example-navigation .sc-navigation nav>ul:last-child>li ul').should.be.true;

        return browser;
    });

    it('should navigate menues with keys',function() {
        browser.click('.example-navigation .sc-navigation nav ul:first-child li:first-child');
        browser.keys('Tab');
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(1) ul').should.be.false;
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(2) ul').should.be.true;

        browser.keys(['Shift', 'Tab']);
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(1) ul').should.be.true;
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(2) ul').should.be.false;

        return browser;
    });

    it('should close menu with escape key',function() {
        browser.click('.example-navigation .sc-navigation nav ul:first-child li:first-child');
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(1) ul').should.be.true;

        browser.keys(['Escape']);
        browser.isVisible('.example-navigation .sc-navigation nav>ul:first-child>li:nth-child(1) ul').should.be.false;

        return browser;
    });
});
