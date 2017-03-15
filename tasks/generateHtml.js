const fs = require('fs');
const html = require('../helpers/renderHtml.js')();
module.exports = () => {
    fs.writeFile("./docs/index.html", html, err => {
        if (err) {
            return console.log(err);
        }
        console.log("HTML file was saved!");
    });
}
