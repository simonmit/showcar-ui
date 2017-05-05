module.exports = function (frame, assert, browserWidth, helper) {
    describe('Custom dropdown with icons {INTERACTION}', function () {
        var trigger;

        beforeEach(function () {
            trigger = frame.get('#custom-dropdown-icons p').toDomElement();
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('dropdown with icons have only one choice', function () {
            helper.mouseTouchDown(trigger);
            var labelCabrio = frame.get('#custom-dropdown-icons [for=cabrio]').toDomElement();
            var labelCoupe = frame.get('#custom-dropdown-icons [for=coupe]').toDomElement();
            helper.click(labelCabrio);
            helper.click(labelCoupe);
            assert.include(trigger.innerText, ' Coupé', 'contains');
        });
    });
};
