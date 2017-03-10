const fs = require('fs');
const renderMenu = require('/Users/asolovev/scout24/source/showcar-ui/docs/renderMenu.js')
module.exports = (globalJSON, content) => {

    if (! globalJSON) {
        globalJSON = JSON.parse(fs.readFileSync('/Users/asolovev/scout24/source/showcar-ui/docs/globalJSON.json', 'utf8'));
    }

    if (! content) {
        const wrap = (name, el) => {
            for (var index in el) {
                el[index] = JSON.parse(el[index]);
            }
            // jsExample
            return `
                <div class="element" id="${name}">
                    <div class="markdown">${el.markDown}</div>
                    <div class="sample">${el.html}</div>
                    <div class="code">
                        <button class="clipbrd-btn" data-clipboard-target="#copy_code-${name}"  alt="Copy to clipboard"><span></span></button>
                        <pre><code class="html js css scss"  id="copy_code-${name}">${el.code}</code></pre>
                    </div>
                     <a class="hide-code-sample">Hide code sample</a>
                </div>
            `
        }
        let type = [];
        let group = [];
        content = Object.keys(globalJSON)
                .map(el => {
                    let content = '';
                    if (type.indexOf(globalJSON[el].type) === - 1) {
                        type.push(globalJSON[el].type);
                        group.push(globalJSON[el].group);
                        content += `<h2 class="type_name">${globalJSON[el].type}</h2>`;
                    } else {
                        if (group.indexOf(globalJSON[el].group) === - 1) {
                            group.push(globalJSON[el].group);
                            content += `<hr>`
                        }
                    }
                    content += wrap(globalJSON[el].name,
                        {
                            markDown: globalJSON[el].markDown,
                            html: globalJSON[el].html,
                            code: globalJSON[el].codeExample
                        })
                    return content;
                }).join('') || 'empty';
    }

    let scriptsFiles = [
        'dist/showcar-icons.js',
        'dist/showcar-tracking.js',
        'dist/showcar-ui.js',
        'docs/assets/js/highlight.min.js',
        'docs/assets/js/clipboard.min.js',
    ];
    let stylesFiles = [
        'docs/assets/styles/github.min.css',
        'dist/showcar-ui.css',
        'docs/assets/styles/docs.css',
    ];

    scriptsFiles = scriptsFiles.map(script => {
        return `<script src="/assets/${script}"></script>`
    }).join('\n');

    stylesFiles = stylesFiles.map(style => {
        return `<link rel="stylesheet" href="/assets/${style}">`
    }).join('\n');

    const head = `
        <!DOCTYPE html>
        <html lang="en" class="ndpl-c-background">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width">
                <title v-text="ShowCar UI docs"></title>
                <link rel="shortcut icon" type="image/png" href="favicon.png"/>
                ${scriptsFiles}
                ${stylesFiles}
             </head>
             <body>
    `;

    const menu = renderMenu(globalJSON);

    const leftMenu = `
        <div id="sidebar">
            <a href="/"><div id="sidebar-logo"></div></a>
            <h1>ShowCar UI</h1>
            <div id="left-menu">
                ${menu}
            </div>
         </div>
    `;

    const body = `
        <div id="content">${content}</div>
    `;

    const footer = `
        <script>
            hljs.initHighlightingOnLoad();
            
            var clipboard = new Clipboard('.clipbrd-btn');
            /*clipboard.on('success', function (e) {
                e.clearSelection();
            });*/
            </script>
        </body>
        </html>
    `;

    const html = head + leftMenu + body + footer;
    /*    fs.writeFile("/Users/asolovev/scout24/source/showcar-ui/docs/index.html", html, err => {
     if(err) {
     return console.log(err);
     }
     console.log("HTML file was saved!");
     });*/
    return html;
}


