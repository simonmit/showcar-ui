module.exports = (frame, assert, browserWidth, helper) => {
    describe('Spy-navigation', () => {
        let spyNavigation;
        let links;
        let lastLink;
        let lastSection;

        beforeEach(() => {
            spyNavigation = frame.get('.sc-spy-navigation');
            links = frame.getAll('.sc-spy-navigation__link');
            assert(links.length() > 0, 'we have no links on page');
            lastLink = frame.get('.sc-spy-navigation__link:last-child').toDomElement();
            lastSection = frame.get('a#section-5');
        })

        afterEach(done => {
            helper.reload(frame, done)
        })

        it('Initial state is non-sticky and inactive', () => {
            assert.equal(spyNavigation.getRawStyle('position'), 'relative', 'position should be relative');

            for (var i = 0; i < links.length() - 1; i++) {
                assert.isFalse(helper.hasClass(links.at(i).toDomElement(), 'sc-spy-navigation__link--active'), 'has not active link');
            }
        });

        it('Sticky behaviour, scroll to anchor and set active tab', done => {
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                done();
                return;
            }
            //as timeout is too long, we must check all behaviours in one test
            helper.click(lastLink);

            setTimeout(() => {
                assert.equal(spyNavigation.getRawStyle('position'), 'fixed', 'position should be fixed');

                //ie calculates differently than other browsers
                assert.oneOf(Math.round(lastSection.getRawPosition().top), [- 1, 0, 1], 'position should be on top');

                assert.isTrue(helper.hasClass(lastLink, 'sc-spy-navigation__link--active'), 'last link has active class');
                done();
            }, 1200); //timeout for scrolling
        });

        it('Change class by scrolling to the section', (done) => {
            //as timeout is too long, we must check all behaviours in one test
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                done();
                return;
            }

            lastSection.toDomElement().scrollIntoView();

            setTimeout(() => {
                assert.equal(spyNavigation.getRawStyle('position'), 'fixed', 'position should be fixed');
                assert.isTrue(helper.hasClass(lastLink, 'sc-spy-navigation__link--active'), 'last link has active class');
                done();
            }, 400); //timeout for scrolling
        });

    });
};
