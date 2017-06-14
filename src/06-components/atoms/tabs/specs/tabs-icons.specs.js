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

            if (browserWidth < 510) {
                tabAuto.assert({
                    height: 45
                })
            } else {
                tabAuto.assert({
                    height: 53
                })
            }
        });

        it('Click on moto tabs shows moto', () => {
            helper.click(tabMoto.toDomElement());
            assert.include(contentMoto.toDomElement().innerText, 'Moto', 'contains');

            // moto is active
            contentMoto.assert({
                rendered: true
            })
            if (browserWidth < 510) {
                tabMoto.assert({
                    height: 45
                })
            } else {
                tabMoto.assert({
                    height: 53
                })
            }

            // auto is inactive
            contentAuto.assert({
                rendered: false
            })
            if (browserWidth < 510) {
                tabAuto.assert({
                    height: 36
                })
            } else {
                tabAuto.assert({
                    height: 48
                })
            }
        });
    });
};
