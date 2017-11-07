module.exports = (frame, assert) => {
    describe('Icon', () => {
        let icon;

        beforeEach(() => {
            icon = frame.get('#icon-default as24-icon');
        });

        it('Icon is rendered', () => {
            icon.assert({
                rendered: true
            });
        });
    });
};
