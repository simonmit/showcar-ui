module.exports = (frame, assert, browserWidth) => {
    describe('Default breadcrumbs', () => {
        let wrapper;
        let firstBreadcrumb;
        let middleBreadcrumb;
        let lastBreadcrumb;

        beforeEach(() => {
            wrapper = frame.getAll('#breadcrumb .sc-breadcrumbs').at(0);
            firstBreadcrumb = frame.getAll('#breadcrumb .sc-breadcrumbs li:first-of-type').at(0);
            middleBreadcrumb = frame.getAll('#breadcrumb .sc-breadcrumbs li:nth-of-type(2)').at(0);
            lastBreadcrumb = frame.getAll('#breadcrumb .sc-breadcrumbs li:last-of-type').at(0);
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
                    // right: middleBreadcrumb.left
                });

                middleBreadcrumb.assert({
                    rendered: true,
                    top: wrapper.top.plus(10)
                    // right: lastBreadcrumb.left
                });

                lastBreadcrumb.assert({
                    rendered: true
                });
            });
        }
    });

    describe('Custom breadcrumbs', () => {
        let wrapper;
        let firstBreadcrumbCustom;
        let middleBreadcrumbCustom;
        let lastBreadcrumbCustom;

        beforeEach(() => {
            wrapper = frame.getAll('#breadcrumb .sc-breadcrumbs').at(1);
            firstBreadcrumbCustom = frame.getAll('#breadcrumb .sc-breadcrumbs li:first-of-type').at(1);
            middleBreadcrumbCustom = frame.getAll('#breadcrumb .sc-breadcrumbs li:nth-of-type(2)').at(1);
            lastBreadcrumbCustom = frame.getAll('#breadcrumb .sc-breadcrumbs li:last-of-type').at(1);
        });


        if (browserWidth < 500) {
            it('shown correctly on mobile', () => {
                firstBreadcrumbCustom.assert({
                    rendered: true,
                    top: wrapper.top.plus(10),
                    left: wrapper.left.plus(16)
                });

                middleBreadcrumbCustom.assert({
                    rendered: false
                });

                lastBreadcrumbCustom.assert({
                    rendered: false
                });
            });
        }
    });
};
