module.exports = function (frame) {
    describe('Inlined info', function () {
        it('has correct height', function () {
            var addon = frame.get('#inlined-info .sc-inlined-info__addon');

            addon.assert({
                height: 22
            });
        });

        it('positioned correctly', function () {
            var container = frame.get('#inlined-info .sc-input');
            var addon = frame.get('#inlined-info .sc-inlined-info__addon');

            addon.assert({
                middle: container.middle,
                right: container.right.minus(10)
            });
        });
    });
};
