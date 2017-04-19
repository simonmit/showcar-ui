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

        it('Close lightbox using icon', function () {
            var lightboxCloseIcon = frame.get('as24-lightbox as24-icon[data-lightbox-close]').toDomElement();
            helper.click(trigger);
            helper.click(lightboxCloseIcon);
            assert.equal(lightbox.getRawStyle('display'), 'none', 'showd not be shown');
        });

        it('Close lightbox using button', function () {
            var lightboxCloseButton = frame.get('as24-lightbox button[data-lightbox-close]').toDomElement();
            helper.click(trigger);
            helper.click(lightboxCloseButton);
            assert.equal(lightbox.getRawStyle('display'), 'none', 'showd not be shown');
        });
    });
};
