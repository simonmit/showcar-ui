module.exports = (frame, assert) => {
    describe('Icon', () => {
        let icon;

        beforeEach(() => {
            icon = frame.getAll('as24-icon')[0];
        });

        it('Icon is rendered', () => {
            icon.assert({
                rendered: true
            });
        });
    });
};
