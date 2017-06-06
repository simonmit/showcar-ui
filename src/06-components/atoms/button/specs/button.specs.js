module.exports = (frame, assert) => {
    describe('Buttons', () => {
        let buttons;

        beforeEach(() => {
            buttons = frame.getAll('.group-button [class*="sc-btn-"]');
            assert(buttons.length() > 0, 'we have no buttons on the page');
        });

        it('All buttons are rendered', () => {
            for (var i = 0; i < buttons.length() - 1; i ++) {
                buttons.at(i).assert({
                    rendered: true
                });
            }
        });

        it('Buttons have the correct height', () => {
            for (var i = 0; i < buttons.length() - 1; i ++) {
                buttons.at(i).assert({
                    height: 40
                });
            }
        });

        it('Fullwidth button', () => {
            const container = frame.get('#separate-content');
            const fullWidthButton = frame.get('#button-full-width .sc-btn-block');

            fullWidthButton.assert({
                width: container.width
            });
        });
    });
};
