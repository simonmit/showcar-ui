module.exports = function (frame) {
    describe('Input groups', function () {
        it('are full width', function () {
            var container = frame.get('#separate-content');
            var inputGroup = frame.get('#input-group .sc-input-group');
            var inputGroupRadio = frame.get('#input-group-radio .sc-input-group-radio');

            inputGroup.assert({
                width: container.width
            });
            inputGroupRadio.assert({
                width: container.width
            });
        });

        it('have proper height', function () {
            var inputGroup = frame.get('#input-group .sc-input-group');
            var inputGroupRadio = frame.get('#input-group-radio .sc-input-group-radio');

            inputGroup.assert({
                height: 40
            });
            inputGroupRadio.assert({
                height: 40
            });
        });

        it('default elements are positioned next to each other', function () {
            var firstEl = frame.get('#input-group .sc-input-group input:first-of-type');
            var secondEl = frame.get('#input-group .sc-input-group input:nth-of-type(2)');
            var thirdEl = frame.get('#input-group .sc-input-group .sc-btn-bob');

            firstEl.assert({
                right: secondEl.left.plus(1)
            });
            secondEl.assert({
                right: thirdEl.left.plus(1)
            });
        });

        it('radio elements are positioned next to each other', function () {
            var firstEl = frame.get('#input-group-radio .sc-input-group-radio label:first-of-type');
            var secondEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(2)');
            var thirdEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(3)');

            firstEl.assert({
                right: secondEl.left
            });
            secondEl.assert({
                right: thirdEl.left
            });
        });
    });
};
