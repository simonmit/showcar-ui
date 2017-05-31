module.exports = function (frame, assert, browserWidth, helper) {
    describe('Expandable box', function () {
        var box;
        var content;

        beforeEach(function () {
            box = frame.get('#expandable-box .sc-expandable-box__label').toDomElement();
            content = frame.get('#expandable-box .sc-expandable-box__content');
        });

        afterEach(function (done) {
            helper.reload(frame, done)
        });

        it('opens on click', function () {
            content.assert({
                rendered: false
            });
            helper.click(box);
            content.assert({
                rendered: true
            })
        });
    });
};
