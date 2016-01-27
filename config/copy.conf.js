module.exports = {
    files: [
        {flatten: true, expand: true, src: 'vendor/dom4/build/dom4.js', dest: 'dist/polyfills'},
        {flatten: true, expand: true, src: 'vendor/es5-shim/es5-shim.min.js', dest: 'dist/polyfills'},
        {flatten: true, expand: true, src: 'vendor/placeholders/dist/placeholders.min.js', dest: 'dist/polyfills'},
        {flatten: true, expand: true, src: 'vendor/picturefill/dist/picturefill.min.js', dest: 'dist/polyfills'},
        {flatten: true, expand: true, src: 'vendor/source-sans-pro/WOFF2/OTF/SourceSansPro-Light.otf.woff2', dest: 'dist/fonts'},
        {flatten: true, expand: true, src: 'vendor/source-sans-pro/WOFF2/OTF/SourceSansPro-Regular.otf.woff2', dest: 'dist/fonts'},
        {flatten: true, expand: true, src: 'vendor/source-sans-pro/WOFF2/OTF/SourceSansPro-Semibold.otf.woff2', dest: 'dist/fonts'},
        {flatten: true, expand: true, src: 'vendor/source-sans-pro/WOFF/OTF/SourceSansPro-Light.otf.woff', dest: 'dist/fonts'},
        {flatten: true, expand: true, src: 'vendor/source-sans-pro/WOFF/OTF/SourceSansPro-Regular.otf.woff', dest: 'dist/fonts'},
        {flatten: true, expand: true, src: 'vendor/source-sans-pro/WOFF/OTF/SourceSansPro-Semibold.otf.woff', dest: 'dist/fonts'}
    ]
};
