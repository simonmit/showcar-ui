const path = require('path');
const fs = require('fs');
const recursiveSync = require('recursive-readdir-sync');
const marked = require('marked');
const entities = require('html-entities').AllHtmlEntities;
let files = recursiveSync(path.join(__dirname, '../src/06-components'));

const globalJSON = files
    .filter(fileName => {
        return path.parse(fileName).ext === '.html';
    })
    .map(htmlPaths => {
        const srcDir = path.parse(htmlPaths).dir;
        const dirsArr = srcDir.split('/').slice(- 3, - 1);
        const name = htmlPaths.split('/').slice(- 1).join('/').split('.html')[0];
        const mdPaths = htmlPaths.split('.html')[0] + '.md';
        const markDown = marked(fs.readFileSync(mdPaths, 'utf8'));
        const html = fs.readFileSync(htmlPaths, 'utf8');
        const codeExample = `${entities.encode(html)}`;
        const jsPaths = htmlPaths.split('.html')[0] + '.js';
        const jsExample = fs.existsSync(jsPaths) ? fs.readFileSync(jsPaths, 'utf8') : '';
        return {
            name,
            type: dirsArr[0],
            group: dirsArr[1],
            srcDir,
            html: JSON.stringify(html),
            markDown: JSON.stringify(markDown),
            codeExample: JSON.stringify(codeExample),
            jsExample: JSON.stringify(jsExample),
        }
    })
    .reduce((res, obj) => {
        res[obj.name] = {
            type: obj.type,
            name: obj.name,
            group: obj.group,
            srcDir: obj.srcDir,
            html: obj.html,
            markDown: obj.markDown,
            codeExample: obj.codeExample,
            jsExample: obj.jsExample,
        };
        return res;
    }, ({}));

module.exports = globalJSON;
/*
 fs.writeFile("/Users/asolovev/scout24/source/showcar-ui/docs/globalJSON.json", JSON.stringify(globalJSON, null, 4), err => {
 if(err) {
 return console.log(err);
 }
 console.log("JSON file was saved!");
 });*/
