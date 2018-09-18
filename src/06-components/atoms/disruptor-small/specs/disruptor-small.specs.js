module.exports = (frame) => {
    describe('Disruptor Small', () => {
        it('Disruptor Small is rendered', () => {
            const disruptorSmall = frame.getAll('.sc-disruptor-small');

            disruptor.at(0).assert({
                rendered: true
            });
        });
    });
};
