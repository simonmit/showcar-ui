const express = require('express');
const app = express();
const fs = require('fs');
const port = 5000;

const globalJSON = require('../helpers/renderContentJson.js')();
const generateHtml = require('../helpers/renderHtml.js');

const gspec = (elementsArray) => {
    let gspecFiles = [];
    elementsArray.forEach((el) => {
        let directUrl = globalJSON[el].srcDir.split('/').slice(0, - 1);
        let name = directUrl[directUrl.length - 1];
        let gspec = directUrl.join('/') + '/specs/' + name + '.gspec';
        if (gspecFiles.indexOf(gspec) === - 1 && fs.existsSync(gspec)) {
            gspecFiles.push(gspec);
        }
    });
    return gspecFiles;
};

const renderContent = (el)=>{
    let html = globalJSON[el].html ? JSON.parse(globalJSON[el].html) : '';
    return `<div id="${globalJSON[el].name}">` + JSON.parse(globalJSON[el].markDown) + html + '</div><br>';
};

app.get('/', (req, res) => {
    if (req.query['gspec']) {
        res.send(gspec(Object.keys(globalJSON)));
    } else {
        res.send(generateHtml(globalJSON));
    }
});

app.get('/docs/', (req, res) => {
    const elementsArray = Object.keys(globalJSON).filter((el) => {
        const type = globalJSON[el].type;
        return type ==='atoms'||
            type === 'molecules'||
            type === 'organisms';
    });
    if (req.query['gspec']) {
        res.send(gspec(elementsArray));
        return;
    }
    let content = `<div id="${req.params.type}-link">`;
    content += elementsArray
            .map(el => {
                return renderContent(el);
            }).join('') || 'empty';
    content += '</div>';
    res.send(generateHtml(globalJSON, content));
});

app.get('/docs/:type/', (req, res) => {
    const elementsArray = Object.keys(globalJSON).filter((el) => {
        return globalJSON[el].type === req.params.type;
    });
    if (req.query['gspec']) {
        res.send(gspec(elementsArray));
        return;
    }
    let content = `<div id="${req.params.type}-link">`;
    content += elementsArray
            .map(el => {
                return renderContent(el);
            }).join('') || 'empty';
    content += '</div>';
    res.send(generateHtml(globalJSON, content));
});

app.get('/docs/:type/:group', (req, res) => {
    const elementsArray = Object.keys(globalJSON).filter((el) => {
        return globalJSON[el].group === req.params.group;
    });
    if (req.query['gspec']) {
        res.send(gspec(elementsArray));
        return;
    }
    let content = `<div id="${req.params.group}-link">`;
    content += elementsArray
            .map(el => {
                return renderContent(el);
            }).join('') || 'empty';
    content += '</div>';
    res.send(generateHtml(globalJSON, content));
});

app.use('/showcar-ui', express.static('./'));

app.get('*', (req, res) => {
    res.send('WTF???');
});

app.listen(port, () => {
    console.log(`Express docs server runs on port ${port}!`);
});
