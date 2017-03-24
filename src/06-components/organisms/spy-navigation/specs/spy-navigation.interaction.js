import { Selector } from 'testcafe';

const nonstickyNavigation = Selector('.sc-spy-navigation');
const stickyNavigation = Selector('.sc-spy-navigation--sticked');
const lastLink = Selector('.sc-spy-navigation__link:last-child');
const activeLink = Selector('.sc-spy-navigation__link--active');

fixture `Spy-navigation`
    .page `http://localhost:5000/docs/organisms/spy-navigation`;

test('Initial state is non-sticky and inactive', async t => {
    const activeLinkExists = Selector(activeLink).exists;

    await t
        .expect(nonstickyNavigation.getStyleProperty('position')).eql('relative')
        .expect(activeLinkExists).notOk();
})

test('Sticky behaviour', async t => {
    const activeLinkExists = Selector(activeLink).exists;

    await t
        .resizeWindowToFitDevice('iPad', {
            portraitOrientation: false
        })
        .click(lastLink) // simulate scrolling
        .expect(stickyNavigation.getStyleProperty('position')).eql('fixed')
        .expect(activeLinkExists).ok();
})

test('Scroll to anchor and set active tab', async t => {
    const activeLinkExists = Selector(activeLink).exists;
    const secondLink = Selector('.sc-spy-navigation__link:nth-child(2)');

    await t
        .click(secondLink)
        .expect(activeLinkExists).ok()
        .expect(activeLink.count).eql(1)
        .expect(secondLink.hasClass('sc-spy-navigation__link--active')).ok()
})
