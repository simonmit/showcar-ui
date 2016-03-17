describe('Components custom-dropdowns tests', function() {

    beforeEach(function () {
        browser.url('/docs/pages/components.html');
    });

    it('should have custom dropdowns on page',function() {
        browser.elements('.example-custom-dropdown custom-dropdown').value.should.have.lengthOf(2);

        return browser;
    });

    it('should have the correct size of 40px',function() {
        browser.getElementSize('.example-custom-dropdown custom-dropdown', 'height').should.to.satisfy(function(heights) {
            return heights.every(function(h) {
                return h === 40;
            })
        });

        return browser;
    });

    it('should show the first child node and hide the second by default', function() {

        browser.isVisible('.example-custom-dropdown custom-dropdown div:first-child').should.not.include(false);
        browser.isVisible('.example-custom-dropdown custom-dropdown div:last-child').should.not.include(true);

        return browser;
    });

    it('should open and close dropdown', function() {
        browser.click('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"]');
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"] div:last-child').should.be.true;
        browser.click('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"]');
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"] div:last-child').should.be.false;

        browser.click('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-2"]');
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-2"] div:last-child').should.be.true;
        browser.click('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-2"]');
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-2"] div:last-child').should.be.false;

        return browser;
    });

    it('should open and close other dropdowns', function() {
        browser.click('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-2"]');
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"] div:last-child').should.be.false;
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-2"] div:last-child').should.be.true;

        browser.click('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"]');
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"] div:last-child').should.be.true;
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-2"] div:last-child').should.be.false;

        browser.click('a[name=custom-dropdown]+h3');
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"] div:last-child').should.be.false;
        browser.isVisible('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-2"] div:last-child').should.be.false;

        return browser;
    });

    it('should open menu and select items', function() {
        browser.click('.example-custom-dropdown custom-dropdown[data-test="custom-dropdown-1"]');
        browser.click('custom-dropdown[data-test="custom-dropdown-1"] label[for="cd1"]');
        browser.click('custom-dropdown[data-test="custom-dropdown-1"] label[for="cd3"]');

        browser.getText('custom-dropdown[data-test="custom-dropdown-1"] div:first-child p').should.contain("Value1");
        browser.getText('custom-dropdown[data-test="custom-dropdown-1"] div:first-child p').should.not.contain("Value2");
        browser.getText('custom-dropdown[data-test="custom-dropdown-1"] div:first-child p').should.contain("Value3");

        return browser;
    });
});
