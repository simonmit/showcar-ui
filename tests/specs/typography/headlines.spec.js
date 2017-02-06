describe('typography - headlines tests', function(){
    beforeEach(function() {
        browser.url('/');
    });

    it('should have the correct font sizes in viewport < M ',function() {
        browser.setViewportSize({width: 640, height: 800});

        browser.getCssProperty('.example-headlines h1.sc-font', 'font-size').value.should.equal('24px');
        browser.getCssProperty('.example-headlines h1.sc-font', 'font-weight').value.should.equal('normal');

        browser.getCssProperty('.example-headlines h2.sc-font', 'font-size').value.should.be.equal('20px');
        browser.getCssProperty('.example-headlines h2.sc-font', 'font-weight').value.should.equal(600);

        browser.getCssProperty('.example-headlines h3.sc-font', 'font-size').value.should.be.equal('16px');
        browser.getCssProperty('.example-headlines h3.sc-font', 'font-weight').value.should.equal(600);

        browser.getCssProperty('.example-headlines h4.sc-font', 'font-size').value.should.be.equal('16px');
        browser.getCssProperty('.example-headlines h4.sc-font', 'font-weight').value.should.equal('normal');

        browser.getCssProperty('.example-headlines h5.sc-font', 'font-size').value.should.be.equal('16px');
        browser.getCssProperty('.example-headlines h5.sc-font', 'font-weight').value.should.equal('normal');

        return browser;
    });


    it('should have the correct font sizes in viewport >= M ',function() {
        browser.setViewportSize({width: 1280, height: 1024});

        browser.getCssProperty('.example-headlines h1.sc-font', 'font-size').value.should.be.equal('32px');
        browser.getCssProperty('.example-headlines h1.sc-font', 'font-weight').value.should.equal('normal');

        browser.getCssProperty('.example-headlines h2.sc-font', 'font-size').value.should.be.equal('24px');
        browser.getCssProperty('.example-headlines h2.sc-font', 'font-weight').value.should.equal(600);

        browser.getCssProperty('.example-headlines h3.sc-font', 'font-size').value.should.be.equal('24px');
        browser.getCssProperty('.example-headlines h3.sc-font', 'font-weight').value.should.equal('normal');

        browser.getCssProperty('.example-headlines h4.sc-font', 'font-size').value.should.be.equal('20px');
        browser.getCssProperty('.example-headlines h4.sc-font', 'font-weight').value.should.equal(600);

        browser.getCssProperty('.example-headlines h5.sc-font', 'font-size').value.should.be.equal('16px');
        browser.getCssProperty('.example-headlines h5.sc-font', 'font-weight').value.should.equal(600);

        return browser;
    });
});
