module.exports = function (frame, assert, browserWidth, helper) {
    describe('Input groups {LAYOUT}', function () {
        it('are full width', function () {
            var container = frame.get('#separate-content');
            var inputGroup = frame.get('#input-group .sc-input-group');
            var inputGroupRadio = frame.get('#input-group-radio .sc-input-group-radio');

            inputGroup.assert({
                width: container.width
            });
            inputGroupRadio.assert({
                width: container.width
            });
        });

        it('have proper height', function () {
            var inputGroup = frame.get('#input-group .sc-input-group');
            var inputGroupRadio = frame.get('#input-group-radio .sc-input-group-radio');

            inputGroup.assert({
                height: 40
            });
            inputGroupRadio.assert({
                height: 40
            });
        });

        it('default elements are positioned next to each other', function () {
            var firstEl = frame.get('#input-group .sc-input-group input:first-of-type');
            var secondEl = frame.get('#input-group .sc-input-group input:nth-of-type(2)');
            var thirdEl = frame.get('#input-group .sc-input-group .sc-btn-bob');

            firstEl.assert({
                right: secondEl.left.plus(1)
            });
            secondEl.assert({
                right: thirdEl.left.plus(1)
            });
        });

        it('radio elements are positioned next to each other', function () {
            var firstEl = frame.get('#input-group-radio .sc-input-group-radio label:first-of-type');
            var secondEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(2)');
            var thirdEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(3)');

            firstEl.assert({
                right: secondEl.left
            });
            secondEl.assert({
                right: thirdEl.left
            });
        });

        it('option 2 is checked by default', function () {
            var secondEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(2)');
            assert.equal(secondEl.getRawStyle('background-color'), 'rgb(196, 196, 196)', 'should be gray');
        });
    });
    describe('Input group toggle {INTERACTION}', function () {
        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('option 1 changes color after click', function (done) {
            var firstEltrigger = frame.get('#input-group-radio .sc-input-group-radio label:first-of-type').toDomElement();
            var firstEl = frame.get('#input-group-radio .sc-input-group-radio label:first-of-type');
            var secondEl = frame.get('#input-group-radio .sc-input-group-radio label:nth-of-type(2)');
            helper.click(firstEltrigger);
            setTimeout(function () {
                assert.oneOf(secondEl.getRawStyle('background-color'), ['rgba(0, 0, 0, 0)', 'transparent'], 'should be transparent');
                assert.equal(firstEl.getRawStyle('background-color'), 'rgb(196, 196, 196)', 'should be gray');
                done();
            }, 500); //wait for transition
        });
    });
};
