describe('forms - selects tests', function(){

    const inputHeight = 40;

    beforeEach(function() {
        browser.url('/docs/pages/forms.html');
    });

    it('should have the correct size',function() {
        browser.getElementSize('.example-selects select', 'height').should.to.satisfy(function(heights) {
            return heights.every(function(h) {
                return h === inputHeight;
            })
        });

        return browser;
    });
});
