module.exports = (frame, assert) => {
    describe('Buttons', function () {
        it('All buttons are visible', function () {
            var buttons = frame.getAll('[class*="sc-btn-"]');

            for (var i = 0; i < buttons.length() - 1; i++) {
                buttons.at(i).assert({
                    rendered: true
                });
            }
        });

        it('Buttons have the correct height', function () {
            var buttons = frame.getAll('[class*="sc-btn-"]');

            for (var i = 0; i < buttons.length() - 1; i++) {
                buttons.at(i).assert({
                    height: 40
                });
            }
        });

        it('Fullwidth button', function () {
            var container = frame.get('#separate-content');
            var fullWidthButton = frame.get('#button-full-width .sc-btn-block');

            fullWidthButton.assert({
                width: container.width
            });
        });
    });
};
