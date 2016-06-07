# showcar-ui

This module provides several predefined classes, scss mixins and variables for simple page styling with the showcar ui library

## Using Sass version

In order to use showcar-ui sass files, you need to include this importer in your sass pipeline
 
```js
importer: function(url, prev, done) {
    return done(url.split(':')[0].toLowerCase() === 'npm'
        ? { file: require.resolve(url.split(':')[1]) }
        : null);
}
```

In case of grunt-sass you'll have:
 
```
sass: {
    options: {
        importer: function(url, prev, done) {
            return done(url.split(':')[0].toLowerCase() === 'npm'
                ? { file: require.resolve(url.split(':')[1]) }
                : null);
        }
    },
    files: []
}
```

## Installation:

To install showcar-ui within your project use npm.

    npm install git@gitlab.com:web-experience/showcar-ui.git --save


## How to include:
To make the ShowCar-UI Library available within you frontend, it is necessary to include some javascript and (s)css

### Simple Include

The simple include only needs some additions in your html code:

#### CSS

    <link href="./src/lib/showcar-ui/dist/showcar-ui.css" ... >
    
#### CSS (Namespaced version)

If you want to use the showcar ui styling only in a certain part of your application, you can use the namespaced version.
Therefor you have to include the namespaced version of the css and add the data-showcar-ui attribute to the element you want to apply the styles to.

    <link href="./src/lib/showcar-ui/dist/showcar-ui-namespaced.css" ... >
    
    <body data-showcar-ui>

#### JavaScript

You only need to include one JavaScript file. It enables all supported elements by default and exports some global variables, such as Storage.

    <script async src="./src/lib/showcar-ui/dist/showcar-ui.min.js"></script>


### Advanced Include

The advanced include needs some changes in your main scss file:

#### CSS

    @import "../lib/showcar-ui/src/scss/showcar-ui";
    
With this method, you can use all the mixins defined in the library within your own scss code.
    
## Additional information

The showcar-ui library includes some other libraries:

* showcar-storage
* showcar-icons
* Zepto
* webfontloader

### showcar-storage

You can access the Stroage API via the global `Storage` object. For further information see the documentation under https://github.com/AutoScout24/showcar-storage

### showcar-icons

You can use all the icons defined by showcar-icons with the custom `<as24-icon>` tag. For further information see the documentation under https://github.com/AutoScout24/showcar-icons

### Zepto

Showcar-ui includes Zepto, which is a lightweight replacement for jQuery. You can access Zepto via the global variables `$` and `Zepto`. 
For a detailed usage guide, have a look at http://zeptojs.com/
 
### webfontloader

webfontloader is a tool which is co-developed by Google and is used for loading fonts. It is possible to load fonts asynchronously and from various sources including Google servers.
The current implementation uses a CSS file with inlined fonts. The CSS file is `dist/fonts.css`. To use webfontloader in your project you have to include the following snipped:

    <script async src="./src/lib/showcar-ui/dist/webfontloader.js" data-font-source="./src/lib/showcar-ui/dist/fonts.css"></script>

## How to use:

for the use of the library have a look at the [documentation](https://web-experience.gitlab.io/showcar-ui/).

## How to contribute:

TBD

## License

MIT License

## Release notes

<<<<<<< HEAD
*Next release*

- Cleaned-up deployment script 

*1.4.1*

- Fixed buttons height

*1.4.0*

- Improved css regression tests
- Updated icons ( carInsertion.svg, carInsertionEdit.svg, hookSquare.svg )
- Bugfixes

*1.3.5*

- Fixed button CSS by removing fixed height

*1.3.3*

- Added css regression tests
- Fixed the javascript sanity tests
- Improved the gitlab-ci config

*1.3.2*

- Bugfixes

*1.3.1*

- Improved support for older iOS devices

*1.3.0*

- Proper Font loading added
- Bug fixes

