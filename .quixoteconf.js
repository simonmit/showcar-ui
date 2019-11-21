var config = {
    url: 'http://localhost:9876/test/',   // karma url with port
    width: [320, 768, 1024],
    filesSet: [
        require.context('./src/', true, /\.specs.js$/),
    ]
};
require('showcar-gulp/gulptasks/quixote.js')(config);
// require.context('./src/06-components/molecules/', true, /\.specs.js$/),
// require.context('./src/06-components/organisms/', true, /^((?!navigation).)*(specs.js)$/),
// require.context('./src/07-utilities/', true, /\.specs.js$/),
