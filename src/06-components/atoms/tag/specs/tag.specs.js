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
        afterEach(done => {
            helper.reload(frame, done)
        });

        it('is removed after clicking close button', done => {
            const tag = frame.getAll('#tag .sc-tag').at(0);
            const tagEl = tag.toDomElement();

            // const tagClose = frame.getAll('#tag .sc-tag as24-icon').at(0).toDomElement();
            const tagClose = tag.toDomElement().querySelector('.sc-tag__close');

            const checkOnAnimationEnd = () => {
                tag.assert({
                    rendered: false
                });
                clearTimeout(fallbackTimeout);
                fallbackTimeout = ()=>{};
                done();
            }
            tagEl.addEventListener('animationend', checkOnAnimationEnd);

            // fallbackTimeout for stupid browsers
            let fallbackTimeout = setTimeout(checkOnAnimationEnd, 5000);

            helper.click(tagClose);
        });
    });
};
