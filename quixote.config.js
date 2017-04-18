var config = {
    url: 'http://localhost:9876/test/',   // karma url with port
    testingWidth: [320, 768, 1024],
    files: function () {
        return require('./src/**/specs/*layout.js', { mode: 'list' }); //we can provide url only here, broserify limitation
    }(), //run this function (hack for browserify transform)
};
require('showcar-gulp/gulptasks/quixote.js')(config);
