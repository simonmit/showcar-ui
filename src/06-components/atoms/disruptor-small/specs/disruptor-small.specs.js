module.exports = (frame) => {
    describe('Disruptor Small', () => {
        it('Disruptor Small is rendered', () => {
            const disruptorSmall = frame.getAll('.sc-disruptor-small');

            disruptorSmall.at(0).assert({
                rendered: true
            });
        });
    });
};
