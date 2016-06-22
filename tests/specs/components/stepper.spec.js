describe('Components stepper tests', function() {

    beforeEach(function () {
        browser.url('/');
    });

    it('should load the stepper with default value 0',function() {
        browser.element('.sc-stepper-input').getValue().should.equal("0");

        return browser;
    });

    it('should increment the value by one after clicking the increment button',function() {
        browser.click('.sc-stepper-button-increment');
        browser.element('.sc-stepper-input').getValue().should.equal("1");

        browser.click('.sc-stepper-button-increment');
        browser.element('.sc-stepper-input').getValue().should.equal("2");

        return browser;
    });

    it('should decrement the value by one after clicking the decrement button',function() {
        browser.setValue('.sc-stepper-input', '5');

        browser.click('.sc-stepper-button-decrement');
        browser.element('.sc-stepper-input').getValue().should.equal("4");

        browser.click('.sc-stepper-button-decrement');
        browser.element('.sc-stepper-input').getValue().should.equal("3");

        return browser;
    });

    it('should not increment the value more than the max value (10)',function() {
        browser.setValue('.sc-stepper-input', '9');

        browser.click('.sc-stepper-button-increment');
        browser.element('.sc-stepper-input').getValue().should.equal("10");

        browser.click('.sc-stepper-button-increment');
        browser.element('.sc-stepper-input').getValue().should.equal("10");

        return browser;
    });

    it('should not decrement the value less than 0',function() {
        browser.setValue('.sc-stepper-input', '1');

        browser.click('.sc-stepper-button-decrement');
        browser.element('.sc-stepper-input').getValue().should.equal("0");

        browser.click('.sc-stepper-button-decrement');
        browser.element('.sc-stepper-input').getValue().should.equal("0");

        return browser;
    });
});
