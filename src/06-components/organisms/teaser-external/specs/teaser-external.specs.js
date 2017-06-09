/*module.exports = (frame, assert, browserWidth, helper) => {
    describe('Expandable box', () => {
        let box;
        let content;

        beforeEach(() => {
            box = frame.get('#expandable-box .sc-expandable-box__label').toDomElement();
            content = frame.get('#expandable-box .sc-expandable-box__content');
        });

        afterEach(done => {
            helper.reload(frame, done)
        });

        it('opens on click', () => {
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
*/
