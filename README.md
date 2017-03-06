# showcar-ui

This library provides several predefined classes and variables for simple page styling with the showcar ui library

## Installation:

To install showcar-ui within your project use npm.

    npm install git@github.com:AutoScout24/showcar-ui.git --save

## How to build:

For building on your local machine install all npm packages first. Then you can use the gulp command to run the build:

    npm install
    gulp build

## How to include:

You can either include showcar-ui as a fragment or directly include the JS, CSS and inline HTML on your page.
The library provides some HTML content that needs to be inlined on your page. Use the index.html in the dist folder as a template in order to include the inline HTML, CSS and JS on your page.

    <link rel="stylesheet" href="@@ASSET_PATH/showcar-ui.css">
    <script src="@@ASSET_PATH/showcar-ui.js"></script>

Make sure to replace the @@ASSET_PATH string with the path to the JS/CSS file.

## Additional information

The showcar-ui library includes some other libraries:

* showcar-storage
* showcar-icons (also available as standalone fragment)
* Zepto

### showcar-storage

You can access the Stroage API via the global `Storage` object. For further information see the documentation under https://github.com/AutoScout24/showcar-storage

### showcar-icons

You can use all the icons defined by showcar-icons with the custom `<as24-icon>` tag. For further information see the documentation under https://github.com/AutoScout24/showcar-icons

### Zepto

Showcar-ui includes Zepto, which is a lightweight replacement for jQuery. You can access Zepto via the global variables `$` and `Zepto`.
For a detailed usage guide, have a look at http://zeptojs.com/

## How to use:

for the use of the library have a look at the [documentation](https://autoscout24.github.io/showcar-ui/).

## How to contribute:

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

See [LICENSE.md](LICENSE.md)

## Changelog / History

See [History.md](History.md)

## Z-indexes table

See [here](https://docs.google.com/spreadsheets/d/1B_PHfNSwqWI76jiBCK2JHRc3HwvGyVP8aNWlsmwba0A/edit#gid=0) published 02.03.2017
