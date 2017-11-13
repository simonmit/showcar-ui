module.exports = (frame, assert) => {
    describe('Buttons with icons', () => {
        let icons, buttons;

        beforeEach(() => {
            icons = frame.getAll('#button-with-icon-default .sc-btn-with-icon as24-icon');
            buttons = frame.getAll('#button-with-icon-default .sc-btn-with-icon');
        });

        it('Icon is rendered inside button', () => {
            let icon;

            for (let i = 0; i < icons.length(); i++) {
                icon = icons.at(i);
                icon.assert({
                    rendered: true
                });
                assert.equal(icon.parent().toDomElement().tagName, 'BUTTON', 'should be a button');
            }
        });

        it('Icon is positioned on left w.r.t text inside button', () => {
            for (let i = 0; i < buttons.length(); i++) {
                assert.equal(buttons.at(i).toDomElement().childNodes[0].tagName, 'AS24-ICON', 'should be an icon');
            }
        });
    });
};
