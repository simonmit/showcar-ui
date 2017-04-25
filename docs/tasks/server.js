const express = require('express');
const app = express();
const port = 5000;

const globalJSON = require('../helpers/renderContentJson.js')();
const generateHtml = require('../helpers/renderHtml.js');

const renderContent = (el) => {
    let html = globalJSON[el].html ? JSON.parse(globalJSON[el].html) : '';
    return `<div id="${globalJSON[el].name}" class="group-${globalJSON[el].group}">` + JSON.parse(globalJSON[el].markDown) + html + '</div><br>';
};

app.get('/', (req, res) => {
    res.send(generateHtml(globalJSON));
});

app.get('/test/', (req, res) => {
    const elementsArray = Object.keys(globalJSON).filter((el) => {
        const type = globalJSON[el].type;
        return type === 'atoms' ||
            type === 'molecules' ||
            type === 'organisms';
    });
    let content = elementsArray
            .map(el => {
                return renderContent(el);
            }).join('') || 'empty';
    res.send(generateHtml(globalJSON, content, true));
});

app.get('/docs/:type/', (req, res) => {
    const elementsArray = Object.keys(globalJSON).filter((el) => {
        return globalJSON[el].type === req.params.type;
    });
    let content = `<div id="${req.params.type}-target">`;
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
    let content = `<div id="${req.params.group}-target">`;
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
