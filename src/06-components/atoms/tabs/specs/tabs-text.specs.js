module.exports = (frame, assert, browserWidth, helper) => {
    describe("Tabs with text", () => {
        let firstTab;
        let secondTab;
        let firstContent;
        let secondContent;

        beforeEach(() => {
            firstTab = frame.get("#tabs-text .sc-tab[data-section=Tab1]");
            secondTab = frame.get("#tabs-text .sc-tab[data-section=Tab2]");
            firstContent = frame.get("#tabs-text .sc-tabs__content[data-section=Tab1]");
            secondContent = frame.get("#tabs-text .sc-tabs__content[data-section=Tab2]");
        });

        afterEach(done => {
            helper.reload(frame, done);
        });

        if (browserWidth < 768) {
            it("Click on first tab shows first content as accordion", () => {
                helper.click(firstTab.toDomElement());
                assert.include(firstContent.toDomElement().innerText, "Tab 1", "contains");

                firstContent.assert({
                    rendered: true,
                    top: firstTab.bottom,
                    bottom: secondTab.top
                });
                secondContent.assert({
                    rendered: false
                });
            });
            it("Click on second tab shows second content as accordion", () => {
                helper.click(secondTab.toDomElement());
                assert.include(secondContent.toDomElement().innerText, "Tab 2", "contains");

                firstContent.assert({
                    rendered: false
                });
                secondContent.assert({
                    rendered: true,
                    top: secondTab.bottom
                });
            });
        } else {
            it("Click on first tab shows first content", () => {
                helper.click(firstTab.toDomElement());
                assert.include(firstContent.toDomElement().innerText, "Tab 1", "contains");

                firstContent.assert({
                    rendered: true,
                    top: firstTab.bottom
                });
                secondContent.assert({
                    rendered: false
                });
                secondTab.assert({
                    left: firstTab.right.plus(1)
                });
            });
            it("Click on second tab shows second content", () => {
                helper.click(secondTab.toDomElement());
                assert.include(secondContent.toDomElement().innerText, "Tab 2", "contains");

                firstContent.assert({
                    rendered: false
                });
                secondContent.assert({
                    rendered: true,
                    top: firstTab.bottom.plus(1)
                });
            });
        }
    });
};
