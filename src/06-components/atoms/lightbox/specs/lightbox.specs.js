module.exports = (frame, assert, browserWidth, helper) => {
    describe('Lightbox', () => {
        let trigger;
        let lightbox;

        beforeEach(() => {
            lightbox = frame.get('.sc-lightbox__container');
            trigger = frame.get('[data-lightbox-open="lb1"]').toDomElement();
        });

        afterEach(done => {
            helper.reload(frame, done)
        });

        it('Open lightbox and show container', () => {
            helper.click(trigger);

            assert.equal(lightbox.getRawStyle('display'), 'flex', 'should be shown');
        });

        it('Open lightbox and show overlay', () => {
            helper.click(trigger);
            const overlay = frame.get('.sc-lightbox__overlay');

            assert.equal(overlay.getRawStyle('display'), 'block', 'should be shown');
        });

        it('Close lightbox using icon', (done) => {
            helper.click(trigger);
            const lightboxCloseIcon = frame.getAll('.sc-lightbox__container [data-lightbox-close]').at(0).toDomElement();
            helper.click(lightboxCloseIcon);

            setTimeout(() => {
                assert.equal(lightbox.getRawStyle('display'), 'none', 'should not be shown');
                done();
            }, 250); //wait for fadeOut
        });

        it('Close lightbox using button', (done) => {
            helper.click(trigger);
            const lightboxCloseButton = frame.getAll('.sc-lightbox__container [data-lightbox-close]').at(0).toDomElement();
            helper.click(lightboxCloseButton);

            setTimeout(() => {
                assert.equal(lightbox.getRawStyle('display'), 'none', 'should not be shown');
                done();
            }, 250); //wait for fadeOut
        });

        it('Close lightbox clicking on overlay', (done) => {
            helper.click(trigger);
            const lightboxOverlay = frame.get('.sc-overlay').toDomElement();
            helper.click(lightboxOverlay);

            setTimeout(() => {
                assert.equal(lightbox.getRawStyle('display'), 'none', 'should not be shown');
                done();
            }, 250); //wait for fadeOut
        });

        it('Lightbox stays open if click is inside of it', (done) => {
            helper.click(trigger);
            const lightboxInput = frame.get('.sc-lightbox__container input').toDomElement();
            helper.click(lightboxInput);

            setTimeout(() => {
                assert.notEqual(lightbox.getRawStyle('display'), 'none', 'should be shown');
                done();
            }, 250); //wait for fadeOut
        });
    });
};
