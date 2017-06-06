module.exports = (frame, assert, browserWidth, helper) => {
    describe('Stepper {LAYOUT}', () => {
        let stepper;

        beforeEach(() => {
            stepper = frame.get('#stepper .sc-stepper');
        });

        it('is rendered', () => {
            stepper.assert({
                rendered: true
            });
        });

        it('has a proper height', () => {
            stepper.assert({
                height: 40
            });
        });

        it('is fullwidth', () => {
            const container = frame.get('#separate-content');

            stepper.assert({
                width: container.width
            });
        });

        it('decrease button is on left side of input', () => {
            const input = frame.get('#stepper .sc-stepper-input');
            const decreaseButton = frame.get('#stepper .sc-stepper-button-decrement');

            decreaseButton.assert({
                right: input.left.plus(0)
            });
        });

        it('increase button is on left side of input', () => {
            const input = frame.get('#stepper .sc-stepper-input');
            const increaseButton = frame.get('#stepper .sc-stepper-button-increment');

            increaseButton.assert({
                left: input.right.plus(0)
            });
        });

        it('decrease/increase buttons are inside', () => {
            const decreaseButton = frame.get('#stepper .sc-stepper-button-decrement');
            const increaseButton = frame.get('#stepper .sc-stepper-button-increment');

            decreaseButton.assert({
                top: stepper.bottom.minus(40)
            });
            increaseButton.assert({
                top: stepper.bottom.minus(40)
            });
        });
    });


    describe('Stepper {INTERACTION}', () => {
        let stepper;
        let input;
        let increaseButton;
        let decreaseButton;

        beforeEach(() => {
            stepper = frame.get('#stepper .sc-stepper').toDomElement();
            input = frame.get('#stepper .sc-stepper-input').toDomElement();
            decreaseButton = frame.get('#stepper .sc-stepper-button-decrement').toDomElement();
            increaseButton = frame.get('#stepper .sc-stepper-button-increment').toDomElement();
        })

        afterEach(done => {
            helper.reload(frame, done)
        });

        it('has default value 0', () => {
            assert.include(input.value, '0', 'contains');
        });

        it('should increment the value by one after clicking the increment button', () => {
            helper.click(increaseButton);
            assert.include(input.value, '1', 'contains');
            helper.click(increaseButton);
            assert.include(input.value, '2', 'contains');
        });

        it('should decrement the value by one after clicking the decrement button', () => {
            input.value = '5';
            helper.click(decreaseButton);
            assert.include(input.value, '4', 'contains');
            helper.click(decreaseButton);
            assert.include(input.value, '3', 'contains');
        });

        it('should not increment the value more than the max value (10)', () => {
            input.value = '9';
            helper.click(increaseButton);
            assert.include(input.value, '10', 'contains');
            helper.click(increaseButton);
            assert.include(input.value, '10', 'contains');
        });

        it('should not decrement the value less than 0', () => {
            input.value = '1';
            helper.click(decreaseButton);
            assert.include(input.value, '0', 'contains');
            helper.click(decreaseButton);
            assert.include(input.value, '0', 'contains');
        });
    });
};
