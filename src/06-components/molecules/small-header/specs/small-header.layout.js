module.exports = (frame, assert, browserWidth) => {
    describe('Small header', function () {
        if (browserWidth < 923) {
            it('shown correctly on viewports smaller than 923', function () {
                var smallHeader = frame.get('#small-header .sc-small-header');
                var headerIcon = frame.get('#small-header .sc-small-header as24-icon');

                smallHeader.assert({
                    height: 56
                });
                headerIcon.assert({
                    top: smallHeader.top.plus(11),
                    center: smallHeader.center
                });
            });
        } else {
            it('shown correctly on viewports higher or equal than 923', function () {
                var smallHeader = frame.get('#small-header .sc-small-header');
                var headerIcon = frame.get('#small-header .sc-small-header as24-icon');

                smallHeader.assert({
                    height: 71
                });
                headerIcon.assert({
                    top: smallHeader.top.plus(15),
                    left: smallHeader.left.plus(15)
                });
            });
        }
    });
};
