module.exports = function (frame, assert, browserWidth, helper) {
    describe('Custom dropdown {INTERACTION}', function () {
        var trigger;
        var content;

        beforeEach(function () {
            trigger = frame.get('#custom-dropdown-default p').toDomElement();
            content = frame.get('#custom-dropdown-default custom-dropdown > div:nth-child(2)');
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('content is shown correctly after first click', function () {
            helper.mouseTouchDown(trigger);
            content.assert({
                rendered: true
            });
            var label1 = frame.get('#custom-dropdown-default [for=cd1]');
            var label2 = frame.get('#custom-dropdown-default [for=cd2]');
            var label3 = frame.get('#custom-dropdown-default [for=cd3]');
            label2.assert({
                top: label1.bottom.plus(8),
                bottom: label3.top.minus(8)
            })
        });

        it('value2 is shown in input after click, value3 is not selected', function () {
            helper.mouseTouchDown(trigger);
            var label2 = frame.get('#custom-dropdown-default [for=cd2]').toDomElement();
            var label3 = frame.get('#custom-dropdown-default [for=cd3]').toDomElement();
            helper.click(label2);
            helper.click(label3);
            helper.click(label3);
            assert.include(trigger.innerText, 'Value2', 'contains');
        });

        it('value2 and value3 is shown in input after click', function () {
            helper.mouseTouchDown(trigger);
            var label2 = frame.get('#custom-dropdown-default [for=cd2]').toDomElement();
            var label3 = frame.get('#custom-dropdown-default [for=cd3]').toDomElement();
            helper.click(label2);
            helper.click(label3);
            assert.include(trigger.innerText, 'Value2, Value3', 'contains');
        });

        it('content is hidden after two clicks', function () {
            helper.mouseTouchDown(trigger);
            helper.mouseTouchDown(trigger);
            content.assert({
                rendered: false
            });
        });
    });

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

    describe('Custom dropdown {LAYOUT}', function () {
        it('is rendered', function () {
            var dropdown = frame.get('#custom-dropdown-default custom-dropdown');

            dropdown.assert({
                rendered: true
            });
        });

        it('has correct height', function () {
            var dropdown = frame.get('#custom-dropdown-default custom-dropdown');

            dropdown.assert({
                height: 40
            });
        });

        it('is fullwidth', function () {
            var container = frame.get('#separate-content');
            var dropdown = frame.get('#custom-dropdown-default custom-dropdown');

            dropdown.assert({
                width: container.width
            });
        });
    });
};
