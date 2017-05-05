module.exports = function (frame, assert, browserWidth, helper) {
    describe('Collapse toggle {INTERACTION}', function () {
        var trigger;
        var content;

        beforeEach(function () {
            trigger = frame.get('#collapse-toggle [data-toggle="sc-collapse"]').toDomElement();
            content = frame.get('#collapse');
        })


        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('content is shown after first click', function () {
            helper.click(trigger);
            content.assert({
                rendered: true
            });
        });

        it('content is hidden after second click', function () {
            helper.click(trigger);
            helper.click(trigger); //add one more click
            content.assert({
                rendered: false
            });
        });
    });
    describe('Collapse toggle {LAYOUT}', function () {
        var trigger;

        beforeEach(function () {
            trigger = frame.get('#collapse-toggle [data-toggle="sc-collapse"]').toDomElement();
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('content is shown under toggle', function () {
            helper.click(trigger);
            var content = frame.get('#collapse');
            var link = frame.get('#collapse-toggle [data-toggle="sc-collapse"]');
            content.assert({
                top: link.bottom
            });
        });
    });
};
