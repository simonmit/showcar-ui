import { Selector } from 'testcafe';

//const trigger = Selector('#lightbox [data-lightbox-trigger]');
//const lightbox = Selector('as24-lightbox');
//const lightboxCloseIcon = Selector('as24-lightbox as24-icon[data-lightbox-close]');
//const lightboxCloseButton = Selector('as24-lightbox button[data-lightbox-close]');
//const lightboxTitle = Selector('as24-lightbox .sc-lightbox-title');

fixture `Spy-navigation`
    .page `https://autoscout24.github.io/showcar-ui/#lightbox-link`;

test('Sticky when scrolling', async t => {
    await t
        .click(trigger)
        .expect(lightbox.getStyleProperty('display')).notEql('none')
        .expect(lightboxTitle.innerText).contains('The modal window title', { timeout: 100 });
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
