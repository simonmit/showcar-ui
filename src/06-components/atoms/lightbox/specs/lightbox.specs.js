module.exports = function (frame, assert, browserWidth, helper) {
    describe('Lightbox', function () {
        var trigger;
        var lightbox;

        beforeEach(function () {
            frame.reset();
            trigger = frame.get('#lightbox [data-lightbox-trigger]').toDomElement();
            lightbox = frame.get('as24-lightbox');
        })

        it('Open lightbox', function () {
            helper.click(trigger);
            assert.notEqual(lightbox.getRawStyle('display'), 'none', 'showd be shown');
        });

        it('Close lightbox using icon', function (done) {
            helper.click(trigger);
            setTimeout(function () {
                var lightboxCloseIcon = frame.get('as24-lightbox as24-icon[data-lightbox-close]').toDomElement();
                helper.click(lightboxCloseIcon);
                setTimeout(function () {
                    lightbox = frame.get('as24-lightbox');
                    assert.equal(lightbox.getRawStyle('display'), 'none', 'showd not be shown');
                    done();
                }, 1000); //wait for fadeOut
            }, 1000); //wait for fadeIn

        });

        it('Close lightbox using button', function (done) {
            helper.click(trigger);
            setTimeout(function () {
                var lightboxCloseButton = frame.get('as24-lightbox button[data-lightbox-close]').toDomElement();
                helper.click(lightboxCloseButton);
                setTimeout(function () {
                    lightbox = frame.get('as24-lightbox');
                    assert.equal(lightbox.getRawStyle('display'), 'none', 'showd not be shown');
                    done();
                }, 1000); //wait for fadeOut
            }, 1000); //wait for fadeIn
        });
    });
};
