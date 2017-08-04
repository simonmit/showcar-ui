module.exports = (frame) => {
    describe('Validation', () => {
        it('error label positioned right', () => {
            const input = frame.get('#validation .sc-input.error');
            const label = frame.get('#validation .sc-font-error');

            label.assert({
                top: input.bottom.plus(4),
                left: input.left
            });
        });
    });
};
