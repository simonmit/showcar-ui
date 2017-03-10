// This component have to be initialized with an object with two functions:

showcar.spyNavigation({
    stickPosFn: function(scrollTop, stickToElem, componentElem) {
        // scrollTop - amount of window scroll
        // stickToElem - in the example, #data-stick-when
        // componentElem - in the example, .sc-spy-navigation
        // Do your calculations, return Boolean
    },
    unstickPosFn: function(scrollTop, stickToElem, componentElem) {
        // scrollTop - amount of window scroll
        // stickToElem - in the example, #data-stick-when
        // componentElem - in the example, .sc-spy-navigation
        // Do your calculations, return Boolean
    }
});

// Each function takes 3 arguments:
// scrollTop - scroll amount
// stickToElem - the element to which the navigation should stick to
// componentElem - the component element (the one with the root class ".sc-spy-navigation")
