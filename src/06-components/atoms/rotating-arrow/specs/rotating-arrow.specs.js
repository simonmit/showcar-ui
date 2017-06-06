module.exports = (frame, assert, browserWidth, helper) => {
    describe('Rotating arrow', () => {
        afterEach(done => {
            helper.reload(frame, done)
        })

        // we can only check classes
        it('rotates on click', () => {
            const trigger = frame.get('#rotating-arrow [data-toggle=arrow]').toDomElement();
            assert.isFalse(helper.hasClass(trigger, 'open'), 'should point down');
            helper.click(trigger);
            assert.isTrue(helper.hasClass(trigger, 'open'), 'should point down');
        });
    });
};
