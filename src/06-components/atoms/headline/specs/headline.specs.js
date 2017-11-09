module.exports = (frame) => {
    describe('headline', () => {
        it('headline is rendered', () => {
            const headline = frame.getAll('h1');

            headline.at(0).assert({
                rendered: true
            });
        });
    });
};
