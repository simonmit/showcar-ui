import { Selector } from 'testcafe';

const nonstickyNavigation = Selector('.sc-spy-navigation');
const stickyNavigation = Selector('.sc-spy-navigation--sticked');

fixture `Spy-navigation`
    .page `https://autoscout24.github.io/showcar-ui/#spy-navigation-link`;

test('Sticky when scrolling', async t => {
    await t
        .wait(500)
        .expect(nonstickyNavigation.getStyleProperty('position')).eql('relative')
        .pressKey('down') // simulate scrolling
        .expect(stickyNavigation.getStyleProperty('position')).eql('fixed');
})

//test('Set active tab', async t => {
//    await t
//
//})
//
//test('Scroll to anchor', async t => {
//    await t
//
//})
