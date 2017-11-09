module.exports = (frame) => {
    describe('Google map', () => {
        it('Map is rendered', () => {
            const map = frame.get('#google-map as24-google-map iframe');
            map.assert({
                rendered: true
            });
        });
    });
};
