module.exports = (frame, assert, browserWidth) => {
    describe('Navigation - 2', () => {
        let panel;
        let icon;

        beforeEach(() => {
            panel = frame.get('#navigation-v2-default .sc-navigation-v2');
            icon = frame.get('#navigation-v2-default .icon-auto24');
        });

        if (browserWidth < 923) {
            it('renders correctly on viewports less than 923', () => {
                const menuButton = frame.get('#navigation-v2-default .sc-btn-mobile-menu');

                panel.assert({
                    height: 52 //was 57
                });

                menuButton.assert({
                    left: panel.left.plus(16),
                    top: panel.top.plus(10),
                    height: 36
                });

                icon.assert({
                    top: panel.top.plus(9),
                    center: panel.center
                });
            });

        } else if (923 <= browserWidth) {
            it('renders correctly on viewports higher or equal than 923', () => {
                const myMenu = frame.get('#navigation-v2 .right > li:first-of-type');
                const menu1Text = frame.get('#navigation-v2 nav > ul:not(.right) > li:first-of-type .title');
                const menu2Text = frame.get('#navigation-v2 nav > ul:not(.right) > li:nth-of-type(2) .title');
                const menu3Text = frame.get('#navigation-v2 nav > ul:not(.right) > li:nth-of-type(3) .title');

                panel.assert({
                    height: 70
                });

                icon.assert({
                    top: panel.top.plus(15),
                    right: menu1Text.left.minus(43)
                });

                menu1Text.assert({
                    top: panel.top.plus(11),
                    right: menu2Text.left.minus(67.22)
                });

                menu2Text.assert({
                    top: panel.top.plus(11),
                    right: menu3Text.left.minus(67.22)
                });

                menu3Text.assert({
                    top: panel.top.plus(11)
                });

                myMenu.assert({
                    top: panel.top.minus(13),
                    right: panel.right.plus(1)
                });
            });
        }
    });
};
