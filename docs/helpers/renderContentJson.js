const path = require('path');
const fs = require('fs');
const recursiveSync = require('recursive-readdir-sync');
const marked = require('marked');
var renderer = new marked.Renderer();
renderer.heading = (text, level) => {
    return `<h${level}>${text}</h${level}>`;
}
    
const entities = require('html-entities').AllHtmlEntities;

const docsData = {
    "general information": {
        about: 'src/08-docs-info/general-information/about.md',
        "how-to-include": 'src/08-docs-info/general-information/how-to-include.md',
        contribution: 'src/08-docs-info/general-information/contribution.md',
        faq: 'src/08-docs-info/general-information/faq.md',
    },
    globals: {
        variables: 'src/01-settings/docs/',
        fonts: 'src/03-generic/docs',
    },
    atoms: 'src/06-components/atoms/',
    molecules: 'src/06-components/molecules/',
    organisms: 'src/06-components/organisms/',
    utilities: {
        layout: 'src/05-layout/docs',
        utilities: 'src/07-utilities/docs',
    },
    "extra packages": {
        carousel: 'src/08-docs-info/extra-packages/carousel.md'
    }
}


const getFiles = (route, name, routesArr) => {
    let routes = route ?  recursiveSync(route) : routesArr ;
    return routes
        .filter(fileName => {
            return path.parse(fileName).ext === '.md';
        }).map((mdPath) => {
            const group = name || mdPath.split('/').slice(- 3, - 2)[0];
            return {
                name: path.parse(mdPath).name,
                group,
                mdPath
            }
        })
}

const setObj = (type, files) => {
    return files
        .map((file) => {
            const group = file.group;
            const paths = file.mdPath;
            const srcDir = path.parse(paths).dir;
            const name = path.parse(paths).name;
            const markDown = marked(fs.readFileSync(paths, 'utf8'), { renderer: renderer });
            
            const element = {
                name,
                type: type,
                group: group,
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
}


module.exports = () => {
    let obj = Object.keys(docsData)
        .map((key) => {
            if (docsData[key] === Object(docsData[key])) {
                return Object.keys(docsData[key])
                    .map((deepKey) => {
                    if(path.parse(docsData[key][deepKey]).ext === '.md'){
                        return setObj(key, getFiles(false , deepKey, [docsData[key][deepKey]]))
                    }
                        return setObj(key, getFiles(docsData[key][deepKey], deepKey))
                    });
            }
            return setObj(key, getFiles(docsData[key]));
        })
        .reduce((acc, val) =>
                acc.concat(val),
            []
        )
        .reduce((acc, val) =>
                acc.concat(val),
            []
        )
        .reduce((res, obj) => {
            res[obj.name] = obj;
            return res;
        }, ({}));
    return obj
}
