var quixote = require('quixote');

module.exports = (assert, browserWidth) => {
    var frame = quixote.createFrame({
        src: 'http://localhost:9876/docs/organisms/spy-navigation/',     // karma url with port
        width: browserWidth
    }, function () { //keep callback

    });

    frame.scroll(1000, 1000);
    describe('Spy-navigation (initial state)', function () {
        if (browserWidth < 768) {
            it('renders correctly on smallest devices', function () {
                frame.scroll(1000, 1000);
                var navPanel = frame.get('#spy-navigation .sc-spy-navigation__wrapper');
                var hiddenLinks = frame.getAll('#spy-navigation .sc-spy-navigation__link:not(.sc-spy-navigation__link--active)');
                var activeLink = frame.get('#spy-navigation .sc-spy-navigation__link--active');
                var toggle = frame.get('#spy-navigation .sc-spy-navigation__toggle');

                navPanel.assert({
                    height: 54,
                    top: 0
                });
                for (var i = 0; i < hiddenLinks.length() - 1; i++) {
                    assert.equal(hiddenLinks.at(i).getRawStyle('opacity'), 0, 'opacity should be 0');
                }
                activeLink.assert({
                    height: 54,
                    top: 0
                });
                toggle.assert({
                    height: 55,
                    top: 0
                });
            });
        } else {
            it('renders correctly on tablets and desktops', function () {
                // var navPanel = frame.get('#spy-navigation .sc-spy-navigation__wrapper');
                // var hiddenLinks = frame.getAll('#spy-navigation .sc-spy-navigation__link');
                // var activeLink = frame.get('#spy-navigation .sc-spy-navigation__link--active');

                // navPanel.assert({
                //     height: 54,
                //     top: 0
                // });
                // for (var i = 0; i < hiddenLinks.length() - 1; i++) {
                //     assert.equal(hiddenLinks.at(i).getRawStyle('opacity'), 0, 'opacity should be 0');
                // }
                // activeLink.assert({
                //     height: 54,
                //     top: 0
                // });
            });
        }
    });
};
