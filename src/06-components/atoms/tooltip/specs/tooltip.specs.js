module.exports = function (frame, assert, browserWidth, helper) {
    describe('Tooltip', function () {
        var tooltip;
        var tooltipContent;

        beforeEach(function (done) {
            frame.reload(function () {
                tooltip = frame.get('#tooltip as24-tooltip').toDomElement();
                done();
            });
        })

        it('Hover tooltip', function () {
            helper.hoverOn(tooltip);
            tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();
            assert.include(tooltipContent.innerText, 'Information in tooltip', 'contains');
        });

        it('Click tooltip', function () {
            helper.click(tooltip);
            tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();
            assert.include(tooltipContent.innerText, 'Information in tooltip', 'contains');
        });
        /*
         it('Check position of tooltip', function (done) {
         setTimeout(function () {
         helper.hoverOn(tooltip);
         setTimeout(function () {
         tooltipContent = frame.get('#tooltip .sc-tooltip-shown').toDomElement();
         assert.isOk(helper.hasClass(tooltipContent,'sc-tooltip-top'), 'position top');
         done();
         }, 100); //wait for text
         }, 100); //wait for reseting
         });
         */

    });
};
