describe('Components breadcrumbs tests', function() {

    beforeEach(function () {
        browser.url('/docs/pages/components.html');
    });

    it('should show all breadcrumbs in large viewport',function() {
        browser.isVisible('[data-test="breadcrumbs-responsive"] .sc-breadcrumbs li').should.not.include(false);

        return browser;
    });

    it('should only show one breadcrumb in small viewport',function() {
        browser.setViewportSize({width: 480, height: 640});

        browser.isVisible('[data-test="breadcrumbs-responsive"] .sc-breadcrumbs li:not(:last-child)').should.not.include(true);
        browser.isVisible('[data-test="breadcrumbs-responsive"] .sc-breadcrumbs li:last-child').should.be.true

        return browser;
    });
});
