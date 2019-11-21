module.exports = (frame, assert, browserWidth, helper) => {
    describe('Tag {LAYOUT}', () => {
        it('is rendered', () => {
            const tag = frame.getAll('#tag .sc-tag').at(0);

            tag.assert({
                rendered: true
            });
        });

        it('has a proper height', () => {
            const tag = frame.getAll('#tag .sc-tag').at(0);

            tag.assert({
                height: 32
            });
        });

        it('shows the close icon', () => {
            const closeIcon = frame.getAll('#tag .sc-tag as24-icon[type="close"] svg').at(0);

            closeIcon.assert({
                rendered: true
            });
        });

        it('are positioned next to each other', () => {
            const first = frame.getAll('#tag .sc-tag').at(0);
            const second = frame.getAll('#tag .sc-tag').at(1);

            first.assert({
                right: second.left.minus(8)
            });
        });
    });

    describe('Tag {INTERACTION}', () => {
        let tags;
        let firstTagClose;

        beforeEach(() => {
            tags = frame.getAll('#tag .sc-tag');
            firstTagClose = frame.getAll('#tag .sc-tag .sc-tag__close').at(0).toDomElement();
        });

        afterEach(done => {
            helper.reload(frame, done)
        });

        it('is removed after clicking close button', (done) => {
            helper.click(frame.getAll('#tag .sc-tag .sc-tag__close').at(0).toDomElement());
            setTimeout(() => {
                assert(frame.getAll('#tag .sc-tag').length() === 2, 'three tags shown instead of two');
                done();
            }, 5000); //wait for animation
        });
    });
};
