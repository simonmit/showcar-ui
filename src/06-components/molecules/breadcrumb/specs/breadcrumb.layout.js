module.exports = (frame, assert, browserWidth) => {
    describe('Breadcrumbs', function () {
        if (browserWidth < 500) {
            it('shown correctly on mobile', function () {
                var firstBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:first-of-type');
                var lastBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:last-of-type');

                firstBreadcrumb.assert({
                    rendered: false
                });
                lastBreadcrumb.assert({
                    rendered: true
                });
            });
        } else {
            it('shown correctly on tablet and higher', function () {
                var firstBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:first-of-type');
                var lastBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:last-of-type');

                firstBreadcrumb.assert({
                    rendered: true,
                    // right: lastBreadcrumb.right.minus(60) how can we detect is it on the left side of lastBreadcrumb? %?
                });
                lastBreadcrumb.assert({
                    rendered: true
                });
            });
        }
    });
};
