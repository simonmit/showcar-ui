module.exports = function (frame, assert, browserWidth, helper) {
    describe('Expandable box adaptive', function () {
        var box;
        var content;

        beforeEach(function () {
            box = frame.get('#expandable-box-adaptive .sc-expandable-box__label').toDomElement();
            content = frame.get('#expandable-box-adaptive .sc-expandable-box__content');
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        if (browserWidth > 767) {
            it('is open on desktop', function () {
                content.assert({
                    rendered: true
                })
                helper.click(box);
                content.assert({
                    rendered: true

                })
            });
        } else {
            it('opens on click on mobile', function () {
                content.assert({
                    rendered: false
                })
                helper.click(box);
                content.assert({
                    rendered: true
                })
            });
        }
    });
};
