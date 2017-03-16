module.exports = () => {
    const fs = require('fs');
    const html = require('../helpers/renderHtml.js')();
    fs.writeFileSync("./docs/index.html", html)
}
