module.exports = {
    files: [
        {flatten: true, expand: true, src: 'vendor/dom4/build/dom4.js', dest: 'dist/polyfills'},
        {flatten: true, expand: true, src: 'vendor/es5-shim/es5-shim.min.js', dest: 'dist/polyfills'},
        {flatten: true, expand: true, src: 'vendor/placeholders/dist/placeholders.min.js', dest: 'dist/polyfills'},
        {flatten: true, expand: true, src: 'vendor/picturefill/dist/picturefill.min.js', dest: 'dist/polyfills'}
    ]
};
