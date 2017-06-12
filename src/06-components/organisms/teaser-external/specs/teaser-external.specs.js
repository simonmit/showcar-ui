module.exports = (frame, assert, browserWidth, helper) => {
    describe('Teaser external', () => {
        let label;
        let content;

        beforeEach(() => {
            label = frame.getAll('#teaser-external .sc-teaser__label').at(0).toDomElement();
            content = frame.getAll('#teaser-external .sc-teaser__content').at(0);
        });

        afterEach(done => {
            helper.reload(frame, done)
        });

        if(browserWidth < 768) {
          it('opens on click', () => {
              content.assert({
                  rendered: false
              });

              //helper.click(label);
              label.click();

              content.assert({
                  rendered: true
              })
          });
        }
    });
};
