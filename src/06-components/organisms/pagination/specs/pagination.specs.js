module.exports = function (frame,assert, browserWidth) {
    describe('Pagination', function () {
        if (browserWidth <= 320) {
            it('renders correctly on smallest devices', function () {
                var pagination = frame.get('#pagination .sc-pagination');
                var previousPage = frame.get('#pagination .previous-page');
                var info = frame.get('#pagination .info-page');
                var nextPage = frame.get('#pagination .next-page');

                pagination.assert({
                    height: 50
                });
                previousPage.assert({
                    top: pagination.top,
                    left: pagination.left,
                    width: pagination.width.times(1/2)
                });
                info.assert({
                    rendered: false
                });
                nextPage.assert({
                    top: pagination.top,
                    left: previousPage.right,
                    right: pagination.right,
                    width: pagination.width.times(1/2)
                });
            });
        } else {
            it('renders correctly on tablets and desktops', function () {
                var pagination = frame.get('#pagination .sc-pagination');
                var previousPage = frame.get('#pagination .previous-page');
                var nextPage = frame.get('#pagination .next-page');

                // shall we check state when 5/7/9/11 pages shown?
                pagination.assert({
                    height: 50
                });
                previousPage.assert({
                    top: pagination.top,
                    left: pagination.left
                });
                nextPage.assert({
                    top: pagination.top,
                    right: pagination.right
                });
            });
        }
    });
};
