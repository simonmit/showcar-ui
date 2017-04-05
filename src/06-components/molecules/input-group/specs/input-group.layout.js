module.exports = frame => {
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
    });
};
