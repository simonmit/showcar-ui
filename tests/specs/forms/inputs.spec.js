describe('forms - inputs tests', function(){

    const inputHeight = 40;

    beforeEach(function() {
        browser.url('/');
    });

    it('should have the correct size',function() {
        browser.getElementSize('.example-inputs input', 'height').should.to.satisfy(function(heights) {
            return heights.every(function(h) {
                return h === inputHeight;
            })
        });

        return browser;
    });
});
