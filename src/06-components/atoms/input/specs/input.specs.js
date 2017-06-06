module.exports = (frame, assert) => {
    describe('Checkbox', () => {
        let checkboxLabel;

        beforeEach(() => {
            checkboxLabel = frame.get('#checkbox label[for=as24-checkbox-1]');
        })

        it('default input is hidden', () => {
            const checkboxInput = frame.get('#checkbox #as24-checkbox-1');
            assert.equal(checkboxInput.getRawStyle('opacity'), 0, 'opacity should be 0');
        });

        it('label is rendered', () => {
            checkboxLabel.assert({
                rendered: true
            });
        });

        it('label has proper height', () => {
            checkboxLabel.assert({
                height: 24
            });
        });
    });

    describe('Input', () => {
        let input;

        beforeEach(() => {
            input = frame.get('#input-default input[type=text].sc-input');
        })

        it('has a proper height', () => {
            input.assert({
                height: 40
            });
        });

        it('is fullwidth', () => {
            const container = frame.get('#separate-content');
            input.assert({
                width: container.width
            });
        });
    });

    describe('Radio button', () => {
        let radioInput;
        let radioLabel;

        beforeEach(() => {
            radioInput = frame.get('#radio-button #as24-radio-1');
            radioLabel = frame.get('#radio-button label[for=as24-radio-1]');
        })

        it('default input is hidden', () => {
            assert.equal(radioInput.getRawStyle('opacity'), 0, 'opacity should be 0');
        });

        it('label is rendered', () => {
            radioLabel.assert({
                rendered: true
            });
        });

        it('label has proper height', () => {
            radioLabel.assert({
                height: 24
            });
        });
    });

    describe('Default dropdown', () => {
        it('has proper height', () => {
            const dropdown = frame.get('#select-box-default select');

            dropdown.assert({
                height: 40
            });
        });
    });

    describe('Textarea', () => {
        let textarea;

        beforeEach(() => {
            textarea = frame.get('#textarea');
        })

        it('is rendered', () => {
            textarea.assert({
                rendered: true
            });
        });

        it('is fullwidth', () => {
            const container = frame.get('#separate-content');

            textarea.assert({
                width: container.width
            });
        });
    });
};
