module.exports = function (frame, assert, browserWidth, helper) {
    describe('Notification with time out', function () {
        var container;
        var trigger;

        beforeEach(function () {
            container = frame.get('#notification-timeout #example-notification-target-s');
            trigger = frame.get('#notification-timeout [data-id=succ1]').toDomElement();
        });

        afterEach(function (done) {
            helper.reload(frame, done)
        });

        it('hides after timeout', function (done) {
            var notification = frame.get('as24-notification#succ1');
            helper.click(trigger);
            setTimeout(function () {
                notification.assert({
                    height: 0
                });
                done();
            }, 3500);
        });
    });
};
