module.exports = (frame, assert) => {
    describe('Buttons', () => {
        let buttons;

        beforeEach(() => {
            labels = frame.getAll('#label .sc-input__label');
            inputs = frame.getAll('#label .sc-input__label + .sc-input');
            assert(labels.length() > 0, 'we have no labels on the page');
            assert(inputs.length() > 0, 'we have no inputs on the page');
            console.log('length', inputs.length());
        });

        it('Labels position is correct', () => {
            for (var i = 0; i < labels.length() - 1; i ++) {
                labels.at(i).assert({
                    bottom: inputs.at(i).top.minus(0.82), // magic numbers
                    left: inputs.at(i).left
                });
            }
        });
    });
};
