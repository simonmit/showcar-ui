module.exports = function (frame, assert, browserWidth, helper) {
    describe('Notification', function () {
        var container;
        var cross;
        var trigger;

        beforeEach(function () {
            container = frame.get('#notification-closable #example-notification-target');
            trigger = frame.get('#notification-closable [data-id=succ2]').toDomElement();
        })

        afterEach(function (done) {
            helper.reload(frame, done)
        })

        it('shows on click', function (done) {
            helper.click(trigger);
            var notification = frame.get('as24-notification#succ2');
            setTimeout(function () {
                notification.assert({
                    rendered: true,
                    width: container.width,
                    top: container.bottom
                });
                done();
            }, 1000); //waiting for animation
        });

        it('hides if cross is clicked', function (done) {
            var notification = frame.get('as24-notification#succ2');
            var cross = frame.get('as24-notification#succ2 a').toDomElement();
            helper.click(trigger);
            helper.click(cross);
            setTimeout(function () {
                notification.assert({
                    height: 0
                });
                done();
            }, 1000); //waiting for animation
        });

        it('two notifications sticks on each other', function (done) {
            var triggerInfo = frame.get('#notification-closable [data-id=info2]').toDomElement();
            var cross = frame.get('as24-notification#succ2 a').toDomElement();
            helper.click(trigger);
            helper.click(triggerInfo);
            var notification = frame.get('as24-notification#succ2');
            var notificationInfo = frame.get('as24-notification#info2');
            notificationInfo.assert({
                top: notification.bottom
            });
            helper.click(cross);
            setTimeout(function () {
                notificationInfo.assert({
                    top: container.bottom
                });
                done();
            }, 1000); //waiting for animation
        });

        // it('notification is sticky', function (done) {
        //     // var scrollPoint = frame.get('#notification-closable').toDomElement();
        //     // scrollPoint.scrollIntoView(true);
        //     helper.click(trigger);
        //     var header = frame.get('#small-footer').toDomElement();
        //     header.scrollIntoView(true);
        //     // header.scrollIntoViewIfNeeded(true);
        //     setTimeout(function () {
        //         var notification = frame.get('.sc-notification-container');
        //         notification.assert({
        //             top: frame.viewport().top.plus(10)
        //         });
        //         done();
        //     }, 2000); //waiting for scrolling
        // });
    });
};
