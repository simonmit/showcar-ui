var config = {
    url: 'http://localhost:9876/test/',   // karma url with port
    width: [320, 768, 1024],
    filesSet: [
        require.context('./src/', true, /\.specs.js$/)
    ]
};
require('showcar-gulp/gulptasks/quixote.js')(config);
