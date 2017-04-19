module.exports = function (frame, assert) {
    describe('Spinner', function () {
        it('circles are rendered', function () {
            var circles = frame.getAll('#spinner .sc-spinner-loading');

            assert(circles.length() > 0, 'we have no circles on page');
            for (var i = 0; i < circles.length() - 1; i++) {
                circles.at(i).assert({
                    rendered: true
                });
            }
        });
    });
    describe('Spinner with percentage', function () {
        it('circles are rendered', function () {
            var circles = frame.getAll('#spinner-percentage .sc-spinner-loading');

            assert(circles.length() > 0, 'we have no circles on page');
            for (var i = 0; i < circles.length() - 1; i++) {
                circles.at(i).assert({
                    rendered: true
                });
            }
        });
        it('values are rendered', function () {
            var values = frame.getAll('#spinner-percentage .sc-spinner-value');

            assert(values.length() > 0, 'we have no values on page');
            for (var i = 0; i < values.length() - 1; i++) {
                values.at(i).assert({
                    rendered: true
                });
            }
        });
        it('values are verticaly centered inside of circles', function () {
            var circles = frame.getAll('#spinner-percentage .sc-spinner-value-wrapper');
            var values = frame.getAll('#spinner-percentage .sc-spinner-value');

            assert(values.length() > 0, 'we have no values on page');
            assert(circles.length() > 0, 'we have no circles on page');
            for (var i = 0; i < values.length() - 1; i++) {
                values.at(i).assert({
                    top: circles.at(i).bottom.minus(34.5)
                });
            }
        });
    });
};
