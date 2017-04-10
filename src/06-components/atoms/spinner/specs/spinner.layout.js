module.exports = function (frame) {
    describe('Spinner', function () {
        it('circles are rendered', function () {
            var circles = frame.getAll('#spinner .sc-spinner-loading');

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

            for (var i = 0; i < circles.length() - 1; i++) {
                circles.at(i).assert({
                    rendered: true
                });
            }
        });
        it('values are rendered', function () {
            var values = frame.getAll('#spinner-percentage .sc-spinner-value');

            for (var i = 0; i < values.length() - 1; i++) {
                values.at(i).assert({
                    rendered: true
                });
            }
        });
        it('values are verticaly centered inside of circles', function () {
            var circles = frame.getAll('#spinner-percentage .sc-spinner-value-wrapper');
            var values = frame.getAll('#spinner-percentage .sc-spinner-value');

            for (var i = 0; i < values.length() - 1; i++) {
                values.at(i).assert({
                    top: circles.at(i).bottom.minus(34.5)
                });
            }
        });
    });
};
