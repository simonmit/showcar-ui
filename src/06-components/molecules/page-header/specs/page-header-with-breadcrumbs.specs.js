module.exports = (frame) => {
    describe('Page header with breadcrumbs', () => {
        let header;
        let breadcrumbs

        beforeEach(() => {
            breadcrumbs = frame.get('#page-header-with-breadcrumbs .sc-breadcrumbs');
            header = frame.get('#page-header-with-breadcrumbs h1');
        });

        it('positioned correctly', () => {
            breadcrumbs.assert({
                left: header.left,
                bottom: header.top
            });
        });
    });
};
