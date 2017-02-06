describe('forms - radios tests', function(){

    beforeEach(function() {
        browser.url('/');
    });

    it('should have the correct size',function() {
        browser.getElementSize('.example-radios input+label', 'height').should.to.satisfy(function(heights) {
            return heights.every(function(h) {
                return h === 24;
            })
        });

        return browser;
    });
});
