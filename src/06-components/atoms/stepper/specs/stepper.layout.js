module.exports = (frame, assert) => {
    describe('Stepper', function () {
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
};
