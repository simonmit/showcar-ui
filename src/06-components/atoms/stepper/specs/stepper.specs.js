module.exports = function (frame, assert, browserWidth, helper) {
    describe('Stepper {LAYOUT}', function () {
        it('is rendered', function () {
            var stepper = frame.get('#stepper .sc-stepper');

            stepper.assert({
                rendered: true
            });
        });

        it('has a proper height', function () {
            var stepper = frame.get('#stepper .sc-stepper');

            stepper.assert({
                height: 40
            });
        });

        it('is fullwidth', function () {
            var container = frame.get('#separate-content');
            var stepper = frame.get('#stepper .sc-stepper');

            stepper.assert({
                width: container.width
            });
        });

        it('decrease button is on left side of input', function () {
            var input = frame.get('#stepper .sc-stepper-input');
            var decreaseButton = frame.get('#stepper .sc-stepper-button-decrement');

            decreaseButton.assert({
                right : input.left.plus(0)
            });
        });

        it('increase button is on left side of input', function () {
            var input = frame.get('#stepper .sc-stepper-input');
            var increaseButton = frame.get('#stepper .sc-stepper-button-increment');

            increaseButton.assert({
                left : input.right.plus(0)
            });
        });

        it('decrease/increase buttons are inside', function () {
            var stepper = frame.get('#stepper .sc-stepper');
            var decreaseButton = frame.get('#stepper .sc-stepper-button-decrement');
            var increaseButton = frame.get('#stepper .sc-stepper-button-increment');

            decreaseButton.assert({
                top: stepper.bottom.minus(40)
            });
            increaseButton.assert({
                top: stepper.bottom.minus(40)
            });
        });
    });
    describe('Stepper {INTERACTION}', function () {
        var stepper;
        var input;
        var increaseButton;
        var decreaseButton;

        beforeEach(function () {
            stepper = frame.get('#stepper .sc-stepper').toDomElement();
            input = frame.get('#stepper .sc-stepper-input').toDomElement();
            decreaseButton = frame.get('#stepper .sc-stepper-button-decrement').toDomElement();
            increaseButton = frame.get('#stepper .sc-stepper-button-increment').toDomElement();
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('has default value 0', function () {
            assert.include(input.value, '0', 'contains');
        });

        it('should increment the value by one after clicking the increment button', function () {
            helper.click(increaseButton);
            assert.include(input.value, '1', 'contains');
            helper.click(increaseButton);
            assert.include(input.value, '2', 'contains');
        });

        it('should decrement the value by one after clicking the decrement button', function () {
            input.value = '5';
            helper.click(decreaseButton);
            assert.include(input.value, '4', 'contains');
            helper.click(decreaseButton);
            assert.include(input.value, '3', 'contains');
        });

        it('should not increment the value more than the max value (10)', function () {
            input.value = '9';
            helper.click(increaseButton);
            assert.include(input.value, '10', 'contains');
            helper.click(increaseButton);
            assert.include(input.value, '10', 'contains');
        });

        it('should not decrement the value less than 0', function () {
            input.value = '1';
            helper.click(decreaseButton);
            assert.include(input.value, '0', 'contains');
            helper.click(decreaseButton);
            assert.include(input.value, '0', 'contains');
        });
    });
};
