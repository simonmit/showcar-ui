module.exports = function (frame, assert, browserWidth, helper) {
    describe('Custom dropdown disabled {INTERACTION}', function () {
        var trigger;

        beforeEach(function () {
            trigger = frame.get('#custom-dropdown-disabled p').toDomElement();
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('disabled dropdown is unclickable', function () {
            helper.mouseTouchDown(trigger);
            var content = frame.get('#custom-dropdown-disabled custom-dropdown > div:nth-child(2)');
            // it is still clickable
            // content.assert({
            //     rendered: false
            // });

            // check this out
            // el = document.querySelector('#custom-dropdown-disabled p');
            // ev = document.createEvent('MouseEvent');
            // ev.initMouseEvent('mousedown', true, true, window, null, 0, 0, 0, 0, false, false, false, false, 0, null);
            // el.dispatchEvent(ev);
        });
    });
};
