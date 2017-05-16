module.exports = function (frame, assert, browserWidth, helper) {
    describe('Tag {LAYOUT}', function () {
        it('is rendered', function () {
            var tag = frame.getAll('#tag .sc-tag').at(0);

            tag.assert({
                rendered: true
            });
        });

        it('has a proper height', function () {
            var tag = frame.getAll('#tag .sc-tag').at(0);

            tag.assert({
                height: 32
            });
        });

        it('shows the close icon', function () {
            var closeIcon = frame.getAll('#tag .sc-tag as24-icon[type="close"] svg').at(0);

            closeIcon.assert({
                rendered: true
            });
        });

        it('are positioned next to each other', function () {
            var first = frame.getAll('#tag .sc-tag').at(0);
            var second = frame.getAll('#tag .sc-tag').at(1);

            first.assert({
                right : second.left.minus(8)
            });
        });
    });

    describe('Tag {INTERACTION}', function () {
        var tag;
        var tagEl;
        var tagClose;

        beforeEach(function () {
            tag = frame.getAll('#tag .sc-tag').at(0);
            tagEl = tag.toDomElement();
            tagClose = frame.getAll('#tag .sc-tag as24-icon').at(0).toDomElement();
        });

        afterEach(function (done) {
            helper.reload(frame, done)
        });

        it('is removed after clicking close button', function (done) {
            tagEl.addEventListener('animationend', function() {
               tag.assert({
                   rendered: false
               });
               done();
            });

            helper.click(tagClose);
        });
    });
};
