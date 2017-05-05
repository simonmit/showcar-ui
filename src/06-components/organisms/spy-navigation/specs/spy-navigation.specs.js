module.exports = function (frame, assert, browserWidth, helper) {
    describe('Spy-navigation', function () {
        var spyNavigation;
        var links;

        beforeEach(function () {
            spyNavigation = frame.get('.sc-spy-navigation');
            links = frame.getAll('.sc-spy-navigation__link');
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('Initial state is non-sticky and inactive', function () {
            assert.equal(spyNavigation.getRawStyle('position'), 'relative', 'position should be relative');
            assert(links.length() > 0, 'we have no links on page');
            for (var i = 0; i < links.length() - 1; i ++) {
                assert.isFalse(helper.hasClass(links.at(i).toDomElement(), 'sc-spy-navigation__link--active'), 'has not active link');
            }
        });
/*
        it('Sticky behaviour, scroll to anchor and set active tab', function (done) {
            //as timeout is too long, we must check all behaviours in one test
            var lastLink = frame.get('.sc-spy-navigation__link:last-child').toDomElement();
            helper.click(lastLink);
            setTimeout(function () {
                assert.equal(spyNavigation.getRawStyle('position'), 'fixed', 'position should be fixed');

                var lastSection = frame.get('a[name="section-4"]');
                //ie calculates differently than other browsers
                assert.oneOf(Math.round(lastSection.getRawPosition().top), [- 1, 0, 1], 'position should be on top');

                assert.isTrue(helper.hasClass(lastLink, 'sc-spy-navigation__link--active'), 'last link has active class');
                done();
            }, 1000); //timeout for scrolling
        });*/

        // it('Change class by scrolling to the section', function (done) {
        //     //as timeout is too long, we must check all behaviours in one test
        //     var lastSection = frame.get('a[name="section-4"]').toDomElement();
        //     var lastLink = frame.get('.sc-spy-navigation__link:last-child').toDomElement();
        //     lastSection.scrollIntoView(true);
        //     setTimeout(function () {
        //         assert.equal(spyNavigation.getRawStyle('position'), 'fixed', 'position should be fixed');
        //         assert.isTrue(helper.hasClass(lastLink, 'sc-spy-navigation__link--active'), 'last link has active class');
        //         done();
        //     }, 400); //timeout for scrolling
        // });

    });
};
