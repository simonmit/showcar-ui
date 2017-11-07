module.exports = (frame, assert) => {
    describe('Buttons', () => {
        let button, icon;

        beforeEach(() => {
            button = frame.getAll('button')[0];
            icon = button.getAll('as24-icon')[0];
        });

        it('Button is rendered with icon', () => {
            button.assert({
                rendered: true
            });
            icon.assert({
                rendered: true
            });
        });
    });
};
