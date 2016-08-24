module.exports = function(config) {
    const smoothScroll = require('./scroll');
    // This one is needed for check whether active link element has changed or not
    var activeNavItemCache;
    var componentClass = '.sc-spy-navigation';
    var linkClass = componentClass + '__link';
    var toggleClass = componentClass + '__toggle';
    var expandedStateModifier = (componentClass + '--expanded').substr(1);
    var stickedStateModifier = (componentClass + '--sticked').substr(1);
    var activeLinkModifier = (linkClass + '--active').substr(1);
    var componentElem = document.querySelector(componentClass);

    if (componentElem == null) return;

    var stickElemSelector = componentElem.getAttribute('data-stick-when');
    var stickElem = document.querySelector(stickElemSelector);

    var links = componentElem.querySelectorAll(linkClass);

    if (!links.length) return;

    var linkTargetPairs = Array.prototype.map.call(links, function(link) {
        var href = link.getAttribute('data-href');
        var target = document.querySelector("[name = '" + href + "']");
        return {link: link, target: target};
    });

    function componentSticked() {
        return componentElem.classList.contains(stickedStateModifier);
    }

    function stick() {
        var navHeight = componentElem.getBoundingClientRect().height;
        stickElem.style.marginTop = navHeight + 'px';
        componentElem.classList.add(stickedStateModifier);
    }

    function unstick() {
        componentElem.classList.remove(stickedStateModifier);
        stickElem.style.marginTop = '0px';
    }

    function defaultStickWhenFn(scrollTop, stickToElem, componentElem) {
        return scrollTop > stickToElem.offsetTop;
    }

    function defaultUnstickWhen(scrollTop, stickToElem, componentElem) {
        return scrollTop < stickToElem.offsetTop - componentElem.getBoundingClientRect().height;
    }

    function handleStickiness() {
        if (!stickElem) return;

        var needToStick = ((config && config.stickPosFn) || defaultStickWhenFn)(window.pageYOffset, stickElem, componentElem);
        var needToUnstick = ((config && config.unstickPosFn) || defaultUnstickWhen)(window.pageYOffset, stickElem, componentElem);

        if (!componentSticked() && needToStick) {
            stick();
        } else if (componentSticked() && needToUnstick) {
            unstick();
        }
    }

    function navigateToAnchor($item) {
        var targetName, target, targetTopOffset, navEl, navHeight, targetOffset;

        targetName = $item.getAttribute('data-href');
        navEl = document.querySelector(componentClass);
        target = document.querySelector("[name = '" + targetName + "']");
        if (target) {
            targetTopOffset = target.offsetTop;
            navHeight = navEl.getBoundingClientRect().height;
            targetOffset = targetTopOffset - navHeight;
            smoothScroll(target, targetOffset, 300);
        }
    }

    var spyScroll = function() {
        var activeNavItem,
            scrollTop = window.pageYOffset,
            componentHeight = componentElem.getBoundingClientRect().height;

        activeNavItem = linkTargetPairs.filter(function(pair) {
            return pair.target.offsetTop <= scrollTop + componentHeight + 5;
        }).pop();

        if (activeNavItemCache !== activeNavItem) {
            activeNavItemCache = activeNavItem;

            linkTargetPairs.forEach(function(pair) {
                pair.link.classList.remove(activeLinkModifier);
            });

            if (activeNavItem) {
                activeNavItem.link.classList.add(activeLinkModifier);
            }
        }
    };

    var initMobileToggle = function() {
        var rootEl = document.querySelector(componentClass);
        var toggle = rootEl.querySelector(toggleClass);
        toggle.addEventListener('click', function() {
            rootEl.classList.toggle(expandedStateModifier);
        });
    };

    function debounce(func, wait) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            if (timeout) return;
            timeout = setTimeout(function() {
                func.apply(context, args);
                clearTimeout(timeout);
                timeout = null;
            }, wait);
        };
    }

    Array.prototype.forEach.call(componentElem.querySelectorAll(linkClass), function(linkEl) {
        linkEl.addEventListener('click', function(evt) {
            evt.preventDefault();
            navigateToAnchor(linkEl);
        });
    });

    var debSpyScroll = debounce(spyScroll, 300);

    window.addEventListener('resize', function() {
        handleStickiness();
        debSpyScroll();
    });

    window.addEventListener('scroll', function() {
        handleStickiness();
        debSpyScroll();
    });

    handleStickiness();
    spyScroll();
    initMobileToggle();
};