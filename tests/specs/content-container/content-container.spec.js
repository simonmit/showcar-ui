describe('content-container tests', function(){

    beforeEach(function() {
        browser.url('/docs/pages/content-container.html');
    });

    it('should be centered and 1100px in large viewport ',function() {
        browser.setViewportSize({width: 1280, height: 1024});
        browser.getElementSize('body>.sc-content-container', 'width').should.be.equal(1100);

        return browser;
    });


    it('should have full width in smaller viewport',function () {
        browser.setViewportSize({width: 800, height: 600});
        browser.getElementSize('body>.sc-content-container', 'width').should.be.equal(800);

        return browser;
    });
});
