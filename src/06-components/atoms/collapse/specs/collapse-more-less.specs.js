module.exports = (frame, assert, browserWidth, helper) => {
    let trigger;
    let content;

    describe('Collapse more-less {INTERACTION}', () => {
        beforeEach(() => {
            trigger = frame.get('#collapse-more-less a.sc-collapse-target.in').toDomElement();
            content = frame.get('#collapse-more-less div.sc-collapse-target');
        });

        afterEach(done => {
            helper.reload(frame, done)
        });

        it('content is shown after first click', () => {
            helper.click(trigger);
            assert.equal(content.getRawStyle('display'), 'block', 'should be block');
        });

        it('content is hidden after second click', () => {
            helper.click(trigger);
            helper.click(trigger);
            assert.equal(content.getRawStyle('display'), 'none', 'should be none');
        });

        it('initial state is changing from (more) to (less)', () => {
            assert.include(trigger.innerText, 'More Content', 'contains');
            helper.click(trigger);
            trigger = frame.get('#collapse-more-less a.sc-collapse-target.in').toDomElement();
            assert.include(trigger.innerText, 'Less Content', 'contains');
        });
    });

    describe('Collapse more-less {LAYOUT}', () => {
        beforeEach(() => {
            trigger = frame.get('#collapse-more-less a.sc-collapse-target.in').toDomElement();
            content = frame.get('#collapse-more-less div.sc-collapse-target');
        });

        afterEach((done) => {
            helper.reload(frame, done)
        });

        it('less link is shown under content', () => {
            helper.click(trigger);
            const content = frame.get('#collapse-more-less div.sc-collapse-target.in');
            const link = frame.get('#collapse-more-less a.sc-collapse-target.in');
            content.assert({
                bottom: link.top
            });
        });
    });
};
