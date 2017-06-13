module.exports = (frame, assert, browserWidth) => {
    describe('Search mask {LAYOUT}', () => {
        let options;
        let filterContainer;
        let makeFilter;
        let modelFilter;
        let marketFilter;
        let cityFilter;
        let link;
        let button;

        beforeEach(() => {
            options = frame.get('#search-mask .sc-search__options');
            filterContainer = frame.get('#search-mask .sc-grid-row');
            makeFilter = frame.get('#search-mask .sc-grid-row select.sc-input:first-child');
            modelFilter = frame.get('#search-mask .sc-grid-row select.sc-input:nth-child(2)');
            marketFilter = frame.get('#search-mask .sc-grid-row select.sc-input:nth-child(5)');
            cityFilter = frame.get('#search-mask .sc-grid-row input.sc-input');
            link = frame.get('#search-mask .sc-search__link');
            button = frame.get('#search-mask .sc-search__content__actions button');
        });

        if (browserWidth <= 767) {
            it('Options are hidden', () => {
                options.assert({
                    rendered: false
                })
            });

            it('Filters are shown in one column', () => {
                makeFilter.assert({
                    top: filterContainer.top
                });

                modelFilter.assert({
                    top: makeFilter.bottom.plus(8)
                });
            });

            it('Button is shown correctly on S+M view', () => {
                button.assert({
                    top: cityFilter.bottom.plus(8)
                })
            });

            it('Link is shown correctly on S+M view', () => {
                link.assert({
                    top: button.bottom
                })
            });


        } else {
            it('Options are shown', () => {
                options.assert({
                    rendered: true
                })
            });

            it('Filters are shown in two columns', () => {
                makeFilter.assert({
                    top: filterContainer.top
                });

                modelFilter.assert({
                    top: filterContainer.top
                });

            });

            it('Button is shown correctly on L and higher view', () => {
                button.assert({
                    top: cityFilter.bottom.plus(24)
                })
            });

            it('Link is shown correctly on L and higher view', () => {
                link.assert({
                    top: marketFilter.bottom.plus(24)
                })
            });
        }
    });
};
