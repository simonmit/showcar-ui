import { Selector } from 'testcafe';

fixture `Collapse`
    .page `https://autoscout24.github.io/showcar-ui/#collapse-link`;

test('Toggle more-less', async t => {
    const trigger = Selector('#collapse-more-less .sc-collapse');
    const content = Selector('#collapse-more-less .sc-collapse-target.in');

    await t
        .click(trigger)
        .expect(content.innerText).contains('Lorem ipsum dolor sit amet')
});

test('Toggle toggle', async t => {
    const trigger = Selector('[data-toggle="sc-collapse"]');
    const content = Selector('#collapse');

    await t
        .click(trigger)
        .expect(content.innerText).contains('Lorem ipsum dolor sit amet');
});
