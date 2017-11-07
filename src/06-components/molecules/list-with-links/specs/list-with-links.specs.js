module.exports =  (frame, assert) => {
    describe('List with links',  () => {
        it('links are rendered',  () => {
            const links = frame.getAll('#list-with-links .sc-link-list a');
            assert(links.length() > 0, 'we have no links on page');
            for (var i = 0; i < links.length() - 1; i++) {
                links.at(i).assert({
                    rendered: true
                });
            }
        });
    });
};
