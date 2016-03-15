describe('Components custom-dropdowns tests', function() {

    beforeEach(function () {
        browser.url('/docs/pages/components.html');
    });

    it('should have custom dropdowns on page',function() {
        browser.elements('.example-custom-dropdown custom-dropdown').value.should.have.lengthOf(2);

        return browser;
    });

    it('should have the correct size of 40px',function() {
        browser.getElementSize('.example-custom-dropdown custom-dropdown', 'height').should.to.satisfy(function(widths) {
            return widths.every(function(w) {
                return w === 50;
            })
        });

        return browser;
    });


});
