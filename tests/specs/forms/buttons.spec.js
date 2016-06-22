describe('forms - buttons tests', function(){

    const inputHeight = 39;

    beforeEach(function() {
        browser.url('/');
    });

    it('should have the correct size',function() {
        browser.getElementSize('.example-buttons .sc-btn-bob, .example-buttons .sc-btn-ross', 'height').should.to.satisfy(function(heights) {
            return heights.every(function(h) {
                return h === inputHeight;
            })
        });

        return browser;
    });

    it('should have the correct font size',function() {
        browser.getCssProperty('.example-buttons .sc-btn-bob, .example-buttons .sc-btn-ross', 'font-size').should.to.satisfy(function(styles) {
            return styles.every(function(s) {
                return s.value === '20px';
            })
        });

        return browser;
    });
});
