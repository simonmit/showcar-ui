module.exports = (frame, assert, browserWidth, helper) => {
    describe('Lightbox', () => {
        let trigger;
        let trigger2;
        let trigger3;
        let lightbox;
        let lightbox2;

        beforeEach(() => {
            lightbox = frame.get('#lb1 .sc-lightbox__container');
            lightbox2 = frame.get('#lb2 .sc-lightbox__container');
            trigger = frame.getAll('[data-lightbox-open="lb1"]').at(0).toDomElement();
            trigger2 = frame.get('[data-lightbox-open="lb2"]').toDomElement();
            trigger3 = frame.getAll('[data-lightbox-open="lb1"]').at(1).toDomElement();
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
            const lightboxCloseIcon = frame.getAll('[data-test="icon"]').at(0).toDomElement();
            helper.click(lightboxCloseIcon);

            setTimeout(() => {
                assert.equal(lightbox.getRawStyle('display'), 'none', 'should not be shown');
                done();
            }, 250); //wait for fadeOut
        });

        it('Close lightbox using button', (done) => {
            helper.click(trigger);
            const lightboxCloseButton = frame.getAll('[data-test="button"]').at(0).toDomElement();
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

        it('Do not close lightbox clicking on overlay when prevent close attribute is provided', (done) => {
            helper.click(trigger2);
            const lightboxOverlay = frame.get('.sc-overlay').toDomElement();
            helper.click(lightboxOverlay);

            setTimeout(() => {
                assert.equal(lightbox2.getRawStyle('display'), 'flex', 'should be shown');
                done();
            }, 250); //wait for fadeOut
        });

        it('Do not open lightbox clicking on trigger button when prevent open attribute is provided', (done) => {
            helper.click(trigger3);

            setTimeout(() => {
                assert.equal(lightbox.getRawStyle('display'), 'none', 'should be not shown');
                done();
            }, 250); //wait for fadeOut
        });
    });
};
