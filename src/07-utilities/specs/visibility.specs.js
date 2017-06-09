module.exports = (frame, assert, browserWidth) => {
    describe('Visibility classes', () => {
        console.log('sdfs');
        let visibleS, visibleM, visibleL, visibleXL;
        let hiddenS, hiddenM, hiddenL, hiddenXL, hiddenAll;

        beforeEach(() => {
            visibleS = frame.get('#visibility .sc-visible-at-s');
            visibleM = frame.get('#visibility .sc-visible-at-m');
            visibleL = frame.get('#visibility .sc-visible-at-l');
            visibleXL = frame.get('#visibility .sc-visible-at-xl');
            hiddenS = frame.get('#visibility .sc-hidden-at-s');
            hiddenM = frame.get('#visibility .sc-hidden-at-m');
            hiddenL = frame.get('#visibility .sc-hidden-at-l');
            hiddenXL = frame.get('#visibility .sc-hidden-at-xl');
            hiddenAll = frame.get('#visibility .sc-hidden');
        });

        if (browserWidth < 767) {

            it('shown correctly on S view', () => {
                visibleS.assert({ rendered: false });
                visibleM.assert({ rendered: true });
                visibleL.assert({ rendered: true });
                visibleXL.assert({ rendered: true });
                hiddenS.assert({ rendered: false });
                hiddenM.assert({ rendered: true });
                hiddenL.assert({ rendered: true });
                hiddenXL.assert({ rendered: true });
                hiddenAll.assert({ rendered: true });
            });

        } else if (browserWidth >= 768 && browserWidth < 1023) {

            it('shown correctly on M view', () => {
                visibleS.assert({ rendered: true });
                visibleM.assert({ rendered: false });
                visibleL.assert({ rendered: true });
                visibleXL.assert({ rendered: true });
                hiddenS.assert({ rendered: true });
                hiddenM.assert({ rendered: false });
                hiddenL.assert({ rendered: true });
                hiddenXL.assert({ rendered: true });
                hiddenAll.assert({ rendered: true });
            });

        } else {

            it('shown correctly on L and XL view', () => {
                visibleS.assert({ rendered: true });
                visibleM.assert({ rendered: false });
                visibleL.assert({ rendered: true });
                visibleXL.assert({ rendered: true });
                hiddenS.assert({ rendered: true });
                hiddenM.assert({ rendered: false });
                hiddenL.assert({ rendered: true });
                hiddenXL.assert({ rendered: true });
                hiddenAll.assert({ rendered: true });
            });

        }
    });
};
