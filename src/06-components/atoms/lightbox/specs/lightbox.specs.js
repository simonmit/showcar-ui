module.exports = function (frame, assert, browserWidth, helper) {
    describe('Lightbox', function () {
        var trigger;
        var lightbox;

        beforeEach(function () {
            lightbox = frame.get('.sc-lightbox__container');
            trigger = frame.get('[data-lightbox-open="lb1"]').toDomElement();
        });

        afterEach(function (done) {
            helper.reload(frame, done)
        });

        it('Open lightbox', function () {
            helper.click(trigger);
            assert.notEqual(lightbox.getRawStyle('display'), 'none', 'should be shown');
        });

        it('Close lightbox using icon', function (done) {
            helper.click(trigger);
            var lightboxCloseIcon = frame.getAll('.sc-lightbox__container [data-lightbox-close]').at(0).toDomElement();
            helper.click(lightboxCloseIcon);
            setTimeout(function () {
                assert.equal(lightbox.getRawStyle('display'), 'none', 'should not be shown');
                done();
            }, 250); //wait for fadeOut
        });

        it('Close lightbox using button', function (done) {
            helper.click(trigger);
            var lightboxCloseButton = frame.getAll('.sc-lightbox__container [data-lightbox-close]').at(0).toDomElement();
            helper.click(lightboxCloseButton);
            setTimeout(function () {
                assert.equal(lightbox.getRawStyle('display'), 'none', 'should not be shown');
                done();
            }, 250); //wait for fadeOut
        });

        it('Close lightbox clicking on overlay', function (done) {
            helper.click(trigger);
            var lightboxOverlay = frame.get('.sc-overlay').toDomElement();
            helper.click(lightboxOverlay);
            setTimeout(function () {
                assert.equal(lightbox.getRawStyle('display'), 'none', 'should not be shown');
                done();
            }, 250); //wait for fadeOut
        });

        it('Lightbox stays open if click is inside of it', function (done) {
            helper.click(trigger);
            var lightboxInput = frame.get('.sc-lightbox__container input').toDomElement();
            helper.click(lightboxInput);
            setTimeout(function () {
                assert.notEqual(lightbox.getRawStyle('display'), 'none', 'should be shown');
                done();
            }, 250); //wait for fadeOut
        });
    });
};
