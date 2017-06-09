module.exports = (frame, assert, browserWidth, helper) => {
    describe('Notification with time out', () => {
        let container;
        let trigger;

        beforeEach(() => {
            container = frame.get('#notification-timeout #example-notification-target-s');
            trigger = frame.get('#notification-timeout [data-id=succ1]').toDomElement();
        });

        afterEach(done => {
            helper.reload(frame, done)
        });

        it('hides after timeout', (done) => {
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                done();
                return;
            }

            const notification = frame.get('as24-notification#succ1');
            helper.click(trigger);
            setTimeout(() => {
                notification.assert({
                    height: 0
                });
                done();
            }, 4000);
        });
    });
};
