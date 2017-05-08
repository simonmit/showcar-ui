module.exports = function (frame, assert, browserWidth, helper) {
    describe('Lazy images', function () {
        var image;

        beforeEach(function () {
            image = frame.get('#lazy-image .sc-lazy-image.lazyload').toDomElement();
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('changes classes from lazyload to lazyloaded', function (done) {
            assert.isTrue(helper.hasClass(image, 'lazyload'), 'image should have lazyload initial class');
            assert.isFalse(helper.hasClass(image, 'lazyloaded'), 'image should not have lazyloaded class');
            image.scrollIntoView(true);
            setTimeout(function () {
                assert.isFalse(helper.hasClass(image, 'lazyload'), 'image should not have lazyload class');
                assert.isTrue(helper.hasClass(image, 'lazyloaded'), 'image should have lazyloaded class');
                done();
            }, 4000);
        });

        // tracking lazyloading style makes tests flaky
        // it('changes gray background to picture', function (done) {
        //     var image = frame.get('#lazy-image .sc-lazy-image').toDomElement();
        //     image.scrollIntoView(true);
        //     setTimeout(function () {
        //         assert.isTrue(helper.hasClass(image, 'lazyloading'), 'image should have lazyloaded class');
        //         done();
        //     }, 1000);
        // });
    });
};
