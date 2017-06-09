// Not yet working
module.exports = function (frame, assert, browserWidth) {
    // describe('Visibility classes', function () {
    //     var visibleS;
    //
    //     beforeEach(function () {
    //         visibleS = frame.get('#visibility .sc-visible--s');
    //     });
    //
    //     afterEach(function (done) {
    //         helper.reload(frame, done)
    //     });
    //
    //     it('Visible S class', function () {
    //         it('is visible from S view', function () {
    //             visibleS.assert({
    //                 rendered: true
    //             });
    //         });
    //     });
    //
    //     it('Visible S class', function () {
    //         if (browserWidth > 320) {
    //             it('is visible from S view', function () {
    //                 visibleS.assert({
    //                     rendered: true
    //                 });
    //             });
    //         }
    //     });
    //
    //     it('Hidden S class', function () {
    //         if (browserWidth > 320) {
    //             it('is hidden from S view', function () {
    //                 hiddenS.assert({
    //                     rendered: false
    //                 });
    //             });
    //         }
    //     });
    //
    //     it('Hidden M class', function () {
    //         var hiddenEl = frame.get('#hiddenM');
    //
    //         if (browserWidth > 768) {
    //             it('is hidden from M view', function () {
    //                 hiddenEl.assert({
    //                     rendered: false
    //                 });
    //             });
    //         } else {
    //             it('is visible on S view', function () {
    //                 hiddenEl.assert({
    //                     rendered: true
    //                 });
    //             });
    //         }
    //     });
    // });

    describe('Visibility classes', () => {
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
            it('shown correctly on S view', (done) => {
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
            it('shown correctly on M view', (done) => {
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
            it('shown correctly on L and XL view', (done) => {
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
