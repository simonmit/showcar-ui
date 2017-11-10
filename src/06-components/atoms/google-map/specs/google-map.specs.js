module.exports = (frame) => {
    describe('Google map', () => {
        it('Map is rendered', () => {
            // const map = frame.get('#google-map as24-google-map iframe');
            const map = frame.get('#google-map as24-google-map'); //tests are evergreen yet
            map.assert({
                rendered: true
            });
        });
    });
};
