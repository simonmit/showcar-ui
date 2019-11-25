module.exports = (frame, assert, browserWidth, helper) => {
  describe('Popover', () => {
    afterEach(done => {
      helper.reload(frame, done);
    });

    it('Close button is rendered', () => {
      const popoverCloseButton = frame
        .getAll('.sc-popover .sc-popover__close as24-icon')
        .at(0);
      popoverCloseButton.assert({
        rendered: true,
      });
    });

    it('Check position of close button', () => {
      const popoverCloseButton = frame
        .getAll('.sc-popover .sc-popover__close')
        .at(0);
      assert.equal(
        popoverCloseButton.getRawStyle('top'),
        '16px',
        'top should be 16px',
      );
      assert.equal(
        popoverCloseButton.getRawStyle('right'),
        '16px',
        'right should be 16px',
      );
    });

    it('Check position of left arrow', () => {
      const popoverArrow = frame.getAll('.sc-popover:before').at(1);
      assert.equal(popover.getRawStyle('top'), '16px', 'top should be 16px');
    });

    it('Check position of centered arrow', () => {
      const popoverArrow = frame.get('.sc-popover.sc-popover-center');
      assert.equal(popover.getRawStyle('top'), '16px', 'top should be 16px');
    });

    it('Check position of right arrow', () => {
      const popover = frame.get('.sc-popover.sc-popover-right');
      assert.equal(
        popoverCloseButton.getRawStyle('top'),
        '16px',
        'top should be 16px',
      );
    });
  });
};
