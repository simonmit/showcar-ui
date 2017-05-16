module.exports = function (frame, assert) {
    describe('Highlight', function () {
        it('Highlight is rendered', function () {
            var highlights = frame.getAll('.sc-highlight');

            highlights.at(0).assert({
               rendered: true
            });
        });
    });
};
