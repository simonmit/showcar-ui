module.exports = (frame, assert, browserWidth, helper) => {
    describe('Tooltip', () => {
        let tooltip;

        beforeEach(() => {
            tooltip = frame.get('#tooltip as24-tooltip').toDomElement();
        })

        afterEach(done => {
            helper.reload(frame, done)
        })

        it('Hover tooltip', () => {
            helper.hoverOn(tooltip);
            const tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();

            assert.include(tooltipContent.innerText, 'Information in tooltip', 'contains');
        });

        it('Click tooltip', () => {
            helper.click(tooltip);
            const tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();

            assert.include(tooltipContent.innerText, 'Information in tooltip', 'contains');
        });

        it('Check normal position of tooltip', () => {
            helper.hoverOn(tooltip);
            const tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();

            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-top'), 'position top');
        });

        it('Check top-left position of tooltip', () => {
            tooltip.style.position = 'fixed';
            tooltip.style.left = 0;
            tooltip.style.top = 0;
            helper.hoverOn(tooltip);
            const tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();

            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-bottom'), 'position top');
            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-right'), 'position left');
        });

        it('Check top-right position of tooltip', () => {
            tooltip.style.position = 'fixed';
            tooltip.style.right = 0;
            tooltip.style.top = 0;
            helper.hoverOn(tooltip);
            const tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();

            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-bottom'), 'position top');
            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-left'), 'position right');
        });

        it('Check bottom-left position of tooltip', () => {
            tooltip.style.position = 'fixed';
            tooltip.style.left = 0;
            tooltip.style.bottom = 0;
            helper.hoverOn(tooltip);
            const tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();

            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-top'), 'position bottom');
            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-right'), 'position left');
        });

        it('Check bottom-right position of tooltip', () => {
            tooltip.style.position = 'fixed';
            tooltip.style.right = 0;
            tooltip.style.bottom = 0;
            helper.hoverOn(tooltip);
            const tooltipContent = frame.get('.sc-tooltip-content.sc-tooltip-shown').toDomElement();

            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-top'), 'position bottom');
            assert.isTrue(helper.hasClass(tooltipContent, 'sc-tooltip-left'), 'position right');
        });
    });
};
