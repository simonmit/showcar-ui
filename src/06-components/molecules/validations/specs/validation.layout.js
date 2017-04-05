module.exports = frame => {
    describe('Validation', function () {
        it('error label positioned right', function () {
            var input = frame.get('#validation .sc-input.error');
            var label = frame.get('#validation .sc-font-error');

            label.assert({
                top: input.bottom.plus(4),
                left: input.left
            });
        });
    });
};
