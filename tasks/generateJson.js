module.exports = () => {
    const fs = require('fs');
    const globalJSON = require('../helpers/renderContentJson.js')();
    fs.writeFileSync("./docs/globalJSON.json", JSON.stringify(globalJSON, null, 4), err => {
        if (err) {
            return console.log(err);
        }
        console.log("JSON file was saved!");
    });
}
