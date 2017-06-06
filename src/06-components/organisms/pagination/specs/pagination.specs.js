module.exports =  (frame,assert, browserWidth) => {
    describe('Pagination',  () => {
        let pagination;
        let previousPage;
        let nextPage;

        beforeEach(() => {
             pagination = frame.get('#pagination .sc-pagination');
             previousPage = frame.get('#pagination .previous-page');
             nextPage = frame.get('#pagination .next-page');
        });

        if (browserWidth <= 320) {
            it('renders correctly on smallest devices',  () => {
                const info = frame.get('#pagination .info-page');

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
            it('renders correctly on tablets and desktops',  () => {
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
