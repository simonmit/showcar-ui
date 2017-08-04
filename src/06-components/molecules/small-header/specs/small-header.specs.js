module.exports = (frame, assert, browserWidth) => {
    describe('Small header', () => {
        let smallHeader;
        let headerIcon;

        beforeEach(() => {
            smallHeader = frame.get('#small-header .sc-small-header');
            headerIcon = frame.get('#small-header .sc-small-header as24-icon');
        });

        if (browserWidth < 923) {
            it('shown correctly on viewports smaller than 923', () => {
                smallHeader.assert({
                    height: 56
                });

                headerIcon.assert({
                    top: smallHeader.top.plus(11),
                    center: smallHeader.center
                });
            });

        } else {
            it('shown correctly on viewports higher or equal than 923', () => {
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
