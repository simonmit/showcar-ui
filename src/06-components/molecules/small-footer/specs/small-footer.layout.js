module.exports = (frame, assert, browserWidth) => {
    describe('Small footer', function () {
        if (browserWidth < 768) {
            it('shown correctly on mobile and tablets', function () {
                var container = frame.get('#small-footer .sc-small-footer');
                var iconsBlock = frame.get('#small-footer .sc-pull-right');
                var textBlock = frame.get('#small-footer .sc-pull-left');

                iconsBlock.assert({
                    top: container.top.plus(16),
                    center: container.center
                });
                textBlock.assert({
                    top: iconsBlock.bottom,
                    center: container.center
                });
            });
        } else {
            it('shown correctly on desktop', function () {
                var container = frame.get('#small-footer .sc-small-footer');
                var iconsBlock = frame.get('#small-footer .sc-pull-right');
                var textBlock = frame.get('#small-footer .sc-pull-left');

                container.assert({
                    height: 68
                });
                textBlock.assert({
                    top: container.top.plus(16),
                    left: container.left.plus(16)
                });
                iconsBlock.assert({
                    top: container.top.plus(16),
                    right: container.right.minus(16)
                });
            });
        }
    });
};
