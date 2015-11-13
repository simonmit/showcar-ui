# showcar-ui

This module provides several predefined classes, scss mixins and variables for simple page styling with the showcar ui library

## Installation:

To install showcar-ui within your project use bower.

    bower install --save git@github.com:AutoScout24/showcar-ui.git


## How to include:
To make the ShowCar-UI Library available within you frontend, it is necessary to include some javascript and (s)css

### Simple Include

The simple include only needs some additions in your html code:

CSS

    <link href="./src/lib/showcar-ui/dist/showcar-ui.css" ... >
    
CSS (Namespaced version)

If you want to use the showcar ui styling only in a certain part of your application, you can use the namespaced version.
Therefor you have to include the namespaced version of the css and add the data-showcar-ui attribute to the element you want to apply the styles to.

    <link href="./src/lib/showcar-ui/dist/showcar-ui-namespaced.css" ... >
    
    <body data-showcar-ui>

JavaScript

    <script src="./src/lib/showcar-ui/dist/showcar-ui.js"></script>


### Advanced Include

The advanced include needs some changes in your main scss and main JavaScript file:

CSS

    @import "../lib/showcar-ui/src/scss/showcar-ui";

JavaScript

    require('../lib/showcar-ui/js/showcar-ui.js');

## How to use:

for the use of the library have a look at the documentation that is located in the docs directory.

## How to contribute:

TBD

## License

MIT License
