module.exports = (frame,assert, browserWidth) => {
    describe('Navigation', function () {
        if (browserWidth < 923) {
            it('renders correctly on viewports less than 923', function () {
                var panel = frame.get('#navigation .sc-navigation');
                var menuButton = frame.get('#navigation .sc-btn-mobile-menu');
                var icon = frame.get('#navigation .icon-auto24');

                panel.assert({
                    height: 57
                });
                menuButton.assert({
                    left: panel.left.plus(16),
                    top: panel.top.plus(7),
                    height: 36
                });
                icon.assert({
                    top: panel.top.plus(9),
                    center: panel.center
                });
            });
        } else if (923 <= browserWidth) {
            it('renders correctly on viewports higher or equal than 923', function () {
                var panel = frame.get('#navigation .sc-navigation');
                var myMenu = frame.get('#navigation .right > li:first-of-type');
                var menu1Text = frame.get('#navigation nav > ul:not(.right) > li:first-of-type .title');
                var menu2Text = frame.get('#navigation nav > ul:not(.right) > li:nth-of-type(2) .title');
                var menu3Text = frame.get('#navigation nav > ul:not(.right) > li:nth-of-type(3) .title');
                var icon = frame.get('#navigation .icon-auto24');

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
