module.exports = (frame, assert, browserWidth, helper) => {
    describe('Notification', () => {
        let container;
        let cross;
        let trigger;
        let notification;

        beforeEach(() => {
            frame.scroll(0, 0);
            container = frame.get('#notification-closable #example-notification-target');
            trigger = frame.get('#notification-closable [data-id=succ2]').toDomElement();
            cross = frame.get('as24-notification#succ2 a').toDomElement();
            notification = frame.get('as24-notification#succ2');
        });

        afterEach(done => {
            helper.reload(frame, done)
        });

        it('shows on click', (done) => {
            helper.click(trigger);

            setTimeout(() => {
                notification.assert({
                    rendered: true,
                    width: container.width,
                    top: container.bottom
                });
                done();
            }, 100); //waiting for animation
        });

        it('hides if cross is clicked', done => {
            helper.click(trigger);
            helper.click(cross);

            setTimeout(() => {
                notification.assert({
                    height: 0
                });
                done();
            }, 550); //waiting for animation
        });

        it('two notifications sticks on each other', done => {
            const triggerInfo = frame.get('#notification-closable [data-id=info2]').toDomElement();
            helper.click(trigger);
            helper.click(triggerInfo);
            const notificationInfo = frame.get('as24-notification#info2');

            notificationInfo.assert({
                top: notification.bottom
            });

            helper.click(cross);

            setTimeout(() => {
                notificationInfo.assert({
                    top: container.bottom
                });
                done();
            }, 550); //waiting for animation
        });

        // not working on Mobile Safari
        it('notification is sticky', function (done) {
            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
                done();
                return;
            }
            helper.click(trigger);

            // const smallFooter = frame.get('#small-footer');
            // const scrollTo = smallFooter.toDomElement().getBoundingClientRect().top;

            // frame.scroll(scrollTo, 0);

            // smallFooter.toDomElement().scrollIntoView();

            document.querySelector('#small-footer').scrollIntoView();

            setTimeout(function () {
                var notification = frame.get('.sc-notification-container');
                var viewport = frame.viewport();
                notification.assert({
                    top: viewport.top
                });
                done();
            }, 1000); //waiting for scrolling
        });
    });
};
