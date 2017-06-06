module.exports = (frame, assert, browserWidth, helper) => {
    describe('Custom dropdown with icons {INTERACTION}', () => {
        afterEach(done => {
            helper.reload(frame, done)
        });

        it('dropdown with icons have only one choice', () => {
            const trigger = frame.get('#custom-dropdown-icons p').toDomElement();
            helper.mouseTouchDown(trigger);
            const labelCabrio = frame.get('#custom-dropdown-icons [for=cabrio]').toDomElement();
            const labelCoupe = frame.get('#custom-dropdown-icons [for=coupe]').toDomElement();
            helper.click(labelCabrio);
            helper.click(labelCoupe);
            assert.include(trigger.innerText, ' Coupé', 'contains');
        });
    });
};
