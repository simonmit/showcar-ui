module.exports = function() {
    function handleStickies() {
        var scrollPos = $(window).scrollTop();

        var stickyButtons = $('[data-sticky]');
        Array.prototype.forEach.call(stickyButtons, function (stickyButton) {
            var stickyEl = $(stickyButton);
            var id = stickyEl.attr('data-sticky');
            var undockEl = $('[data-sticky-undock="' + id + '"]');
            var dockEl = $('[data-sticky-dock="' + id + '"]');

            // if there is no dock and undock element leave sticky class
            if (undockEl.length === 0 && dockEl.length === 0) {
                stickyEl.addClass('sticky');
            }

            // get undock position
            var undockPos = 0;
            if (undockEl.length > 0) {
                undockPos = undockEl.offset().top;
            }

            // get dock position
            var dockPos = $(document).height();
            if(dockEl.length > 0) {
                dockPos = dockEl.offset().top;
            }

            console.log('u', undockPos, 'd', dockPos);

            // if element is within scrolling area, scroll, else don't
            if (scrollPos + $(window).height() > undockPos && scrollPos < dockPos - $(window).height() + stickyEl.height() * 1.5) {
                stickyEl.addClass('sticky');
            } else {
                stickyEl.removeClass('sticky');
            }
        });
    }

    handleStickies();

    window.addEventListener("deviceorientation", function () {
        handleStickies();
    });

    window.addEventListener("resize", function () {
        handleStickies();
    });

    window.addEventListener("pageSizeChanged", function () {
        handleStickies();
    });

    document.addEventListener('scroll', function () {
        handleStickies();
    });
};
