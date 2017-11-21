module.exports = (frame, assert, browserWidth, helper) => {
    describe('Custom dropdown {INTERACTION}', () => {
        let trigger;
        let content;
        let label1;
        let label2;
        let label3;

        beforeEach(() => {
            trigger = frame.get('#custom-dropdown-default custom-dropdown p').toDomElement();
            content = frame.get('#custom-dropdown-default custom-dropdown > div:nth-child(2)');
            label1 = frame.get('#custom-dropdown-default [for=cd1]');
            label2 = frame.get('#custom-dropdown-default [for=cd2]');
            label3 = frame.get('#custom-dropdown-default [for=cd3]');
        })

        afterEach(done => {
            helper.reload(frame, done)
        });

        it('content is shown correctly after first click', () => {
            helper.click(trigger);
            content.assert({
                rendered: true
            });
            label2.assert({
                top: label1.bottom.plus(8),
                bottom: label3.top.minus(8)
            })
        });

        it('value2 is shown in input after click, value3 is not selected', () => {
            helper.click(trigger);

            helper.click(label2.toDomElement());
            helper.click(label3.toDomElement());
            helper.click(label3.toDomElement());
            assert.include(trigger.innerText, 'Value2', 'contains');
        });

        it('value2 and value3 is shown in input after click', () => {
            helper.click(trigger);
            helper.click(label2.toDomElement());
            helper.click(label3.toDomElement());
            assert.include(trigger.innerText, 'Value2, Value3', 'contains');
        });

        it('content is hidden after two clicks', () => {
            helper.click(trigger);
            helper.click(trigger);
            content.assert({
                rendered: false
            });
        });

        it('close on click on item with closeonselect attr', () => {
            const closeonselectTrigger = frame.get('#custom-dropdown-closeonselect p').toDomElement();
            const closeonselectLabel = frame.get('#custom-dropdown-closeonselect [for=cy-be]').toDomElement();
            const closeonselectContent = frame.get('#custom-dropdown-closeonselect custom-dropdown > div:nth-child(2)');
            helper.click(closeonselectTrigger);
            helper.click(closeonselectLabel);
            closeonselectContent.assert({
                rendered: false
            });
        });
    });

    describe('Custom dropdown {LAYOUT}', () => {
        let dropdown;

        beforeEach(() => {
            dropdown = frame.get('#custom-dropdown-default custom-dropdown');
        })

        it('is rendered', () => {
            dropdown.assert({
                rendered: true
            });
        });

        it('has correct height', () => {
            dropdown.assert({
                height: 40
            });
        });

        it('is fullwidth', () => {
            const container = frame.get('#separate-content');
            dropdown.assert({
                width: container.width
            });
        });
    });
};
