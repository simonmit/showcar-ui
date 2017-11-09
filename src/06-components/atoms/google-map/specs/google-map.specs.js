module.exports = (frame) => {
    describe('Disruptor', () => {
        it('Disruptor is rendered', () => {
            const disruptor = frame.getAll('.sc-disruptor');

            disruptor.at(0).assert({
                rendered: true
            });
        });
    });
};
