// This component have to be initialized with an object with two functions:

// Each function takes 3 arguments:
// scrollTop - scroll amount
// stickToElem - the element to which the navigation should stick to
// componentElem - the component element (the one with the root class ".sc-spy-navigation")

showcar.spyNavigation({
    stickPosFn: function(scrollTop, stickToElem, componentElem) {
        // Define when the navigation should be sticky, return Boolean
    },
    unstickPosFn: function(scrollTop, stickToElem, componentElem) {
        // Define when the navigation should not be sticky, return Boolean
    }
});

// Example
const stickyYStartPosition = $('.sc-spy-navigation').offset().top;

showcar.spyNavigation({
    stickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop > stickyYStartPosition,
    unstickPosFn: (scrollTop, stickToElem, componentElem) => scrollTop <= stickyYStartPosition
});
