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
    var spyOnHold = false;

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

    function handleResize() {
        var containerHeight = 55;
        var rootEl = document.querySelector(componentClass);
        var toggle = rootEl.querySelector(toggleClass);
        var toggleIconWidth = 28;
        var toggleWidth = toggle.offsetWidth;
        var toggleVisibleClass = 'sc-spy-navigation__toggle--visible';
        var containerWidth = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        containerWidth = containerWidth > 1100 ? 1100 : containerWidth;
        var navigationWidth = 0;
        var elementY = containerHeight + 1;
        var elements = componentElem.querySelectorAll(linkClass);
        var index = 0;
        var count = elements.length;
        var minWidth = 0;
        Array.prototype.forEach.call(elements, function(element) {
            element.style.width = 'auto';
            if(element.offsetWidth + toggleIconWidth > minWidth){
                minWidth = element.offsetWidth + toggleIconWidth;
            }
        });
        var first = true;
        Array.prototype.forEach.call(elements, function(element) {
            navigationWidth += element.offsetWidth + 1;
            if(navigationWidth > containerWidth - toggleWidth && containerWidth > 768){
                toggle.classList.add(toggleVisibleClass);
                element.style.position = 'absolute';
                element.style.top = elementY+'px';
                element.style.right = 0;
                element.style.borderLeft = '1px solid #dcdcdc';
                element.style.width = minWidth+'px';
                element.style.padding = '12px 16px';
                if(first){
                    first = false;
                    element.style.padding = '20px 16px 12px 16px';
                } else if(index === count - 1){
                    element.style.borderBottom = '1px solid #dcdcdc';
                    element.style.padding = '12px 16px 20px 16px';
                }
                elementY += element.offsetHeight;
            } else {
                toggle.classList.remove(toggleVisibleClass);
                element.removeAttribute('style');
            }
            index++;
        });
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
            smoothScroll(target, targetOffset, 300, function() {
                spyOnHold = false;
                spyScroll();
            });
        }
    }

    function closeNavigation() {
        if (!componentElem) return;

        componentElem.classList.remove('sc-spy-navigation--expanded');
    }

    var spyScroll = function() {
        if (spyOnHold) return;

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
            closeNavigation();
            spyOnHold = true;
            navigateToAnchor(linkEl);
        });
    });

    var debSpyScroll = debounce(spyScroll, 300);

    window.addEventListener('resize', function() {
        handleStickiness();
        handleResize();
        debSpyScroll();
    });

    window.addEventListener('scroll', function() {
        handleStickiness();
        debSpyScroll();
    });

    handleStickiness();
    spyScroll();
    initMobileToggle();
    document.addEventListener("DOMContentLoaded", function(event) {
        handleResize();
    });
};