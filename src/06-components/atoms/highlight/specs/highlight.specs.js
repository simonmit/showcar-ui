module.exports = (frame) => {
    describe('Highlight', () => {
        it('Highlight is rendered', () => {
            const highlights = frame.getAll('.sc-highlight');

            highlights.at(0).assert({
                rendered: true
            });
        });
    });
};
