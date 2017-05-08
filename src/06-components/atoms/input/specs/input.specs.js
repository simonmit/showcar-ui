module.exports = function (frame, assert) {
    describe('Checkbox', function () {
        it('default input is hidden', function () {
            var checkboxInput = frame.get('#checkbox #as24-checkbox-1');
            assert.equal(checkboxInput.getRawStyle('opacity'), 0, 'opacity should be 0');
        });

        it('label is rendered', function () {
            var checkboxLabel = frame.get('#checkbox label[for=as24-checkbox-1]');

            checkboxLabel.assert({
                rendered: true
            });
        });

        it('label has proper height', function () {
            var checkboxLabel = frame.get('#checkbox label[for=as24-checkbox-1]');

            checkboxLabel.assert({
                height: 24
            });
        });
    });

    describe('Input', function () {
        it('has a proper height', function () {
            var input = frame.get('#input-default input[type=text].sc-input');

            input.assert({
                height: 40
            });
        });

        it('is fullwidth', function () {
            var container = frame.get('#separate-content');
            var input = frame.get('#input-default input[type=text].sc-input');

            input.assert({
                width: container.width
            });
        });
    });

    describe('Radio button', function () {
        it('default input is hidden', function () {
            var radioInput = frame.get('#radio-button #as24-radio-1');
            assert.equal(radioInput.getRawStyle('opacity'), 0, 'opacity should be 0');
        });

        it('label is rendered', function () {
            var radioLabel = frame.get('#radio-button label[for=as24-radio-1]');

            radioLabel.assert({
                rendered: true
            });
        });

        it('label has proper height', function () {
            var radioLabel = frame.get('#radio-button label[for=as24-radio-1]');

            radioLabel.assert({
                height: 24
            });
        });
    });

    describe('Default dropdown', function () {
        it('has proper height', function () {
            var dropdown = frame.get('#select-box-default select');
            dropdown.assert({
                height: 40
            });
        });
    });

    describe('Textarea', function () {
        it('is rendered', function () {
            var textarea = frame.get('#textarea');

            textarea.assert({
                rendered: true
            });
        });

        it('is fullwidth', function () {
            var container = frame.get('#separate-content');
            var textarea = frame.get('#textarea textarea.sc-input');

            textarea.assert({
                width: container.width
            });
        });
    });
};
