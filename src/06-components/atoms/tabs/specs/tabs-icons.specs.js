module.exports = (frame, assert, browserWidth, helper) => {
    describe('Tabs with icons', () => {
        let tabAuto;
        let tabMoto;
        let contentAuto;
        let contentMoto;

        beforeEach(() => {
            tabAuto = frame.get("#tabs-icons .sc-tab--with-icon[data-section=tab-auto]");
            tabMoto = frame.get("#tabs-icons .sc-tab--with-icon[data-section=tab-moto]");
            contentAuto = frame.get("#tabs-icons .sc-tabs__content[data-section=tab-auto]");
            contentMoto = frame.get("#tabs-icons .sc-tabs__content[data-section=tab-moto]");
        })

        afterEach(done => {
            helper.reload(frame, done)
        })

        it('Click on auto tabs shows auto', () => {
            helper.click(tabAuto.toDomElement());
            assert.include(contentAuto.toDomElement().innerText, 'Auto', 'contains');
            contentAuto.assert({
                rendered: true
            })
            tabAuto.assert({
                height: 45
            })
        });

        it('Click on moto tabs shows moto', () => {
            helper.click(tabMoto.toDomElement());
            assert.include(contentMoto.toDomElement().innerText, 'Moto', 'contains');

            // moto is active
            contentMoto.assert({
                rendered: true
            })
            tabMoto.assert({
                height: 45
            })

            // auto is inactive
            contentAuto.assert({
                rendered: false
            })
            tabAuto.assert({
                height: 36
            })
        });
    });
};
