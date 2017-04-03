module.exports = (frame,assert) => {
    var buttons;
    var BUTTON_HEIGHT = '40px';
    describe('Collapse', function () {
        before(function () {
            buttons = frame.getAll('.sc-btn-bob');
        });
        it('we have got buttons', function () {
            assert(buttons.length() > 0, 'we have not got any button');
        });
        it('Propper height', function () {
            for (var i = 0; i < buttons.length(); i ++) {
                assert.equal(buttons.at(i).getRawStyle('height'), BUTTON_HEIGHT, 'should have propper height' + buttons.at(i));
            }
        });
        it('fullwidth button', function () {
            var container = frame.get('#separate-content');
            var fullWidthButton = frame.get('#button-full-width .sc-btn-block');
            fullWidthButton.assert({
                width: container.width   // compare to another descriptor
            });
        });
        it('fullwidth button = 1000px', function () {
            var fullWidthButton = frame.get('#button-full-width .sc-btn-block');
            assert.equal(fullWidthButton.getRawStyle('width'), '970px', 'should have propper width');
        });
    });
};
