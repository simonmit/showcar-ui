const path = require('path');
const fs = require('fs');
const recursiveSync = require('recursive-readdir-sync');
const marked = require('marked');
const entities = require('html-entities').AllHtmlEntities;

const docsData = {
    globals: {
        variables: '/Users/asolovev/scout24/source/showcar-ui/src/01-settings/docs/',
        fonts: '/Users/asolovev/scout24/source/showcar-ui/src/03-generic/docs',
    },
    atoms: '/Users/asolovev/scout24/source/showcar-ui/src/06-components/atoms/',
    molecules: '/Users/asolovev/scout24/source/showcar-ui/src/06-components/molecules/',
    organisms: '/Users/asolovev/scout24/source/showcar-ui/src/06-components/organisms/',
    utilities: {
        layout: '/Users/asolovev/scout24/source/showcar-ui/src/05-layout/docs',
        utilities: '/Users/asolovev/scout24/source/showcar-ui/src/07-utilities/docs',
    }
    // extras: '/Users/asolovev/scout24/source/showcar-ui/docs/helpers/extras'
}


const getFiles = (route, name) => {
    let routes = recursiveSync(route)
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
    return routes;
}

const getGroup = (route) => {
    return route.split('/').slice(- 2, - 1)[0];
}

const setAttr = (paths) => {
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
}

const setObj = (type, route, name) => {
    let files = getFiles(route, name);
    return files
        .map((file) => {
            // console.log(type)
            const group = file.group;
            const paths = file.mdPath;
            const srcDir = path.parse(paths).dir;
            const name = path.parse(paths).name;
            const markDown = marked(fs.readFileSync(paths, 'utf8'));
            
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
                        return setObj(key, docsData[key][deepKey], deepKey)
                    });
            }
            return setObj(key, docsData[key]);
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
