module.exports = (frame, assert, browserWidth) => {
    describe('Small footer', function () {
        if (browserWidth < 768) {
            it('shown correctly on mobile and tablets', function () {
                var iconsBlock = frame.get('#small-footer .sc-pull-right');
                var textBlock = frame.get('#small-footer .sc-pull-left');

                textBlock.assert({
                    top: iconsBlock.bottom
                });
            });
        } else {
            it('shown correctly on desktop', function () {
                var container = frame.get('#small-footer .sc-small-footer');
                // should we check left/right positioning of elements inside?
                container.assert({
                    // impossimple to check hight  because of left panel on docs/ page
                    // height: 68
                });
            });
        }
    });
};
