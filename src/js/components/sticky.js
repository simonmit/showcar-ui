module.exports = () => {

    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        return false;
    }

    function handleStickies() {
        
        let scrollPos = detectIE() ? document.documentElement.scrollTop : $(window).scrollTop();

        Array.prototype.forEach.call($('[data-sticky]'), (stickyButton) => {
            let stickyEl = $(stickyButton);
            let id = stickyEl.attr('data-sticky');
            let undockEl = $('[data-sticky-undock="' + id + '"]');
            let dockEl = $('[data-sticky-dock="' + id + '"]');

            // if there is no dock and undock element leave sticky class
            if (undockEl.length === 0 && dockEl.length === 0) {
                stickyEl.addClass('sticky');
            }

            // get undock position
            let undockPos = 0;
            if (undockEl.length > 0) {
                undockPos = undockEl.offset().top;
            }

            // get dock position
            let dockPos = $(document).height();
            if(dockEl.length > 0) {
                dockPos = dockEl.offset().top;
            }

            // if element is within scrolling area, scroll, else don't
            if (scrollPos + $(window).height() > undockPos && scrollPos < dockPos - $(window).height() + stickyEl.height() * 1.5) {
                stickyEl.addClass('sc-sticky');
            } else {
                stickyEl.removeClass('sc-sticky');
            }
        });
    }

    handleStickies();

    window.addEventListener("deviceorientation", () => {
        handleStickies();
    });

    window.addEventListener("resize", () => {
        handleStickies();
    });

    window.addEventListener("pageSizeChanged", () => {
        handleStickies();
    });

    document.addEventListener('scroll', () => {
        handleStickies();
    });

    document.addEventListener('collapse', () => {
        handleStickies();
    });
};
