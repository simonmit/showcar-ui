module.exports =  (frame, assert) => {
    describe('Link with icon',  () => {
        it('links are rendered',  () => {
            const links = frame.getAll('#link-with-icon .sc-link-with-icon');
            assert(links.length() > 0, 'we have no links on page');
            for (var i = 0; i < links.length() - 1; i++) {
                links.at(i).assert({
                    rendered: true
                });
            }
        });

        it('icons are rendered',  () => {
            const icons = frame.getAll('#link-with-icon .sc-link-with-icon as24-icon');
            assert(icons.length() > 0, 'we have no icons on page');
            for (var i = 0; i < icons.length() - 1; i++) {
                icons.at(i).assert({
                    rendered: true
                });
            }
        });
    });
};
