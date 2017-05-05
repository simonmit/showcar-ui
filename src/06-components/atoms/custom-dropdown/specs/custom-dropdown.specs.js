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

        it('content is shown correctly after first click', function (done) {
            // var label1 = frame.get('#custom-dropdown-default [for=cd1]');
            // var label2 = frame.get('#custom-dropdown-default [for=cd2]');
            // var label3 = frame.get('#custom-dropdown-default [for=cd3]');
            // helper.mouseTouchDown(trigger);
            // setTimeout(function () {
            //     content.assert({
            //         rendered: true
            //     });
            //     label2.assert({
            //         top: label1.bottom.plus(8),
            //         bottom: label3.top.minus(8)
            //     })
            //     done();
            // }, 4000);
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
