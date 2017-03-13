const path = require('path');
const fs = require('fs');
const recursiveSync = require('recursive-readdir-sync');
const marked = require('marked');
const entities = require('html-entities').AllHtmlEntities;
let files = recursiveSync(path.join(__dirname, '../../src/06-components'));

const globalJSON = files
    .filter(fileName => {
        return path.parse(fileName).ext === '.md';
    })
    .map(paths => {
        const srcDir = path.parse(paths).dir;
        const dirsArr = srcDir.split('/').slice(- 3, - 1);
        const name = path.parse(paths).name;
        const markDown = marked(fs.readFileSync(paths, 'utf8'));
        
        const element = {
            name,
            type: dirsArr[0],
            group: dirsArr[1],
            srcDir,
            markDown: JSON.stringify(markDown),
        }
        
        const htmlPaths = paths.split('.md')[0] + '.html';
        if (fs.existsSync(htmlPaths)) {
            const html = fs.readFileSync(htmlPaths, 'utf8');
            element.html = JSON.stringify(html);
            element.codeExample = JSON.stringify(entities.encode(html));
        }
    
        const jsPaths = paths.split('.md')[0] + '.js';
        if (fs.existsSync(jsPaths)) {
            element.jsExample = JSON.stringify(fs.readFileSync(jsPaths, 'utf8'));
        }
        
        return element;
    })
    .reduce((res, obj) => {
        res[obj.name] = obj;
        return res;
    }, ({}));

module.exports = globalJSON;
fs.writeFile("/Users/asolovev/scout24/source/showcar-ui/docs/globalJSON.json", JSON.stringify(globalJSON, null, 4), err => {
    if (err) {
        return console.log(err);
    }
    console.log("JSON file was saved!");
});
