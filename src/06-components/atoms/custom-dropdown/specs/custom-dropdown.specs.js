module.exports = function (frame) {
    describe('Custom dropdown', function () {
        it('is rendered', function () {
            var dropdown = frame.get('#custom-dropdown-default custom-dropdown');

            dropdown.assert({
                rendered: true
            });
        });

        it('has correct height', function () {
            var dropdown = frame.get('#custom-dropdown-default custom-dropdown');

            dropdown.assert({
                height: 40
            });
        });

        it('is fullwidth', function () {
            var container = frame.get('#separate-content');
            var dropdown = frame.get('#custom-dropdown-default custom-dropdown');

            dropdown.assert({
                width: container.width
            });
        });
    });
};
