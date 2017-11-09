module.exports = (frame, assert, browserWidth) => {
    describe('Breadcrumbs', () => {
        let wrapper;
        let firstBreadcrumb;
        let middleBreadcrumb;
        let lastBreadcrumb;
        let headline = frame.getAll('.sc-headline');

        beforeEach(() => {
            wrapper = frame.get('#breadcrumb .sc-breadcrumbs');
            firstBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:first-of-type');
            middleBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:nth-of-type(2)');
            lastBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:last-of-type');
        });

        it('headline is shown', () => {
            headline.at(0).assert({
                rendered: true
            });
        });

        if (browserWidth < 500) {
            it('shown correctly on mobile', () => {
                firstBreadcrumb.assert({
                    rendered: false
                });

                middleBreadcrumb.assert({
                    rendered: false
                });

                lastBreadcrumb.assert({
                    rendered: true,
                    top: wrapper.top.plus(10),
                    left: wrapper.left.plus(16)
                });
            });

        } else {
            it('shown correctly on tablet and higher', () => {
                firstBreadcrumb.assert({
                    rendered: true,
                    top: wrapper.top.plus(10),
                    left: wrapper.left.plus(16),
                    right: middleBreadcrumb.left
                });

                middleBreadcrumb.assert({
                    rendered: true,
                    top: wrapper.top.plus(10),
                    right: lastBreadcrumb.left
                });

                lastBreadcrumb.assert({
                    rendered: true
                });
            });
        }
    });
};
