describe('typography - body-copy tests', function(){
    beforeEach(function() {
        browser.url('/docs/pages/typography.html#headlines');
    });

    it('should have the correct font sizes',function() {
        browser.getCssProperty('.example-body-copy .sc-font-s', 'font-size').value.should.equal('12px');
        browser.getCssProperty('.example-body-copy .sc-font-m', 'font-size').value.should.equal('16px');
        browser.getCssProperty('.example-body-copy .sc-font-l', 'font-size').value.should.equal('20px');
        browser.getCssProperty('.example-body-copy .sc-font-xl', 'font-size').value.should.equal('24px');
        browser.getCssProperty('.example-body-copy .sc-font-xxl', 'font-size').value.should.equal('32px');
        browser.getCssProperty('.example-body-copy .sc-font-xxxl', 'font-size').value.should.equal('40px');

        browser.getCssProperty('.example-body-copy .sc-font-silent', 'font-size').value.should.equal('16px');
        browser.getCssProperty('.example-body-copy .sc-font-bold', 'font-size').value.should.equal('16px');

        return browser;
    });

    it('should have the correct font weight',function() {
        browser.getCssProperty('.example-body-copy .sc-font-s', 'font-weight').value.should.equal('normal');
        browser.getCssProperty('.example-body-copy .sc-font-m', 'font-weight').value.should.equal('normal');
        browser.getCssProperty('.example-body-copy .sc-font-l', 'font-weight').value.should.equal('normal');
        browser.getCssProperty('.example-body-copy .sc-font-xl', 'font-weight').value.should.equal('normal');
        browser.getCssProperty('.example-body-copy .sc-font-xxl', 'font-weight').value.should.equal('normal');
        browser.getCssProperty('.example-body-copy .sc-font-xxxl', 'font-weight').value.should.equal('normal');

        browser.getCssProperty('.example-body-copy .sc-font-bold', 'font-weight').value.should.equal(600);

        return browser;
    });
});
