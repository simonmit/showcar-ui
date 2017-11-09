module.exports = (frame, assert) => {
    describe('Icon', () => {
        let icon;

        beforeEach(() => {
            icon = frame.getAll('#icon-default as24-icon').at(0);
        });

        it('Icon is rendered', () => {
            icon.assert({
                rendered: true
            });
        });
    });
};
