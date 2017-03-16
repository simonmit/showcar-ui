module.exports = () => {
    const fs = require('fs');
    const globalJSON = require('../helpers/renderContentJson.js')();
    fs.writeFileSync("./docs/globalJSON.json", JSON.stringify(globalJSON, null, 4))
}
