module.exports = function (frame, assert, browserWidth, helper) {
    describe('Collapse more-less {INTERACTION}', function () {
        var trigger;
        var content;

        beforeEach(function () {
            trigger = frame.get('#collapse-more-less a.sc-collapse-target.in').toDomElement();
            content = frame.get('#collapse-more-less div.sc-collapse-target');
        })

        afterEach(function (done) {
            frame.reload(done);
        })

        it('content is shown after first click', function () {
            helper.click(trigger);
            assert.equal(content.getRawStyle('display'), 'block', 'should be block');
        });

        it('content is hidden after second click', function () {
            helper.click(trigger);
            helper.click(trigger);
            assert.equal(content.getRawStyle('display'), 'none', 'should be none');
        });

        it('initial state is changing from (more) to (less)', function () {
            assert.include(trigger.innerText, 'More Content', 'contains');
            helper.click(trigger);
            trigger = frame.get('#collapse-more-less a.sc-collapse-target.in').toDomElement();
            assert.include(trigger.innerText, 'Less Content', 'contains');
        });
    });
    describe('Collapse more-less {LAYOUT}', function () {
        var trigger;

        beforeEach(function () {
            trigger = frame.get('#collapse-more-less a.sc-collapse-target.in').toDomElement();
        })

        afterEach(function (done) {
            frame.reload(done);
        })

        it('less link is shown under content', function () {
            helper.click(trigger);
            var content = frame.get('#collapse-more-less div.sc-collapse-target.in');
            var link = frame.get('#collapse-more-less a.sc-collapse-target.in');
            content.assert({
                bottom: link.top
            });
        });
    });
    describe('Collapse toggle {INTERACTION}', function () {
        var trigger;
        var content;

        beforeEach(function () {
            trigger = frame.get('#collapse-toggle [data-toggle="sc-collapse"]').toDomElement();
            content = frame.get('#collapse');
        })


        afterEach(function (done) {
            frame.reload(done);
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
    describe('Toggle {LAYOUT}', function () {
        var trigger;

        beforeEach(function () {
            trigger = frame.get('#collapse-toggle [data-toggle="sc-collapse"]').toDomElement();
        })

        afterEach(function (done) {
            frame.reload(done);
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
