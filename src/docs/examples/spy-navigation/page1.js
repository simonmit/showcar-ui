window.showcar.spyNavigation({
    stickPosFn: function(scrollTop, stickToElem, componentElem) {
        var info = componentElem.querySelector('.page-navigation-title');
        return scrollTop > stickToElem.offsetTop - info.getBoundingClientRect().height;
    },
    unstickPosFn: null
});