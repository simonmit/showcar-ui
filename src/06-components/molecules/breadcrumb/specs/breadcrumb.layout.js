module.exports = function (frame, assert, browserWidth) {
    describe('Breadcrumbs', function () {
        if (browserWidth < 500) {
            it('shown correctly on mobile', function () {
                var wrapper = frame.get('#breadcrumb .sc-breadcrumbs');
                var firstBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:first-of-type');
                var middleBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:nth-of-type(2)');
                var lastBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:last-of-type');

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
            it('shown correctly on tablet and higher', function () {
                var wrapper = frame.get('#breadcrumb .sc-breadcrumbs');
                var firstBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:first-of-type');
                var middleBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:nth-of-type(2)');
                var lastBreadcrumb = frame.get('#breadcrumb .sc-breadcrumbs li:last-of-type');

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
