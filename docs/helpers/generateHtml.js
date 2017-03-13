const fs = require('fs');
const renderMenu = require('/Users/asolovev/scout24/source/showcar-ui/docs/helpers/renderMenu.js')
module.exports = (globalJSON, content) => {
    
    if (! globalJSON) {
        globalJSON = JSON.parse(fs.readFileSync('/Users/asolovev/scout24/source/showcar-ui/docs/globalJSON.json', 'utf8'));
    }
    
    if (! content) {
        const wrap = (el) => {
            const html = el.html ? `<div class="sample">${JSON.parse(el.html)}</div>` : '';
            
            const sample = (type, content) => {
                return `
                    <div class="code-sample">
                        <div class="code">
                            <button class="clipbrd-btn" data-clipboard-target="#copy_code-${type}-${el.name}"  alt="Copy to clipboard"><span></span></button>
                            <pre><code class="html js css scss"  id="copy_code-${type}-${el.name}">${content}</code></pre>
                        </div>
                        <div class="code-sample-toggle"><span>Show</span> ${type} sample</div>
                    </div>
                `
            }
            
            const codeSample = el.codeExample ? sample('code', JSON.parse(el.codeExample)) : '';
            const jsSample = el.jsExample ? sample('js', JSON.parse(el.jsExample)) : '';
            
            return `
                <div class="element" id="${el.name}">
                    <div class="markdown">${JSON.parse(el.markDown)}</div>
                   ${html} ${codeSample} ${jsSample}
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
                        content += `<div id="${globalJSON[el].group}-link"  class="positon-anchor">`
                        content += `<h2 class="type_name">${globalJSON[el].type}</h2>`;
                        content += wrap(globalJSON[el])
                        content+='</div>'
                    } else {
                        if (group.indexOf(globalJSON[el].group) === - 1) {
                            group.push(globalJSON[el].group);
                            content += `<div id="${globalJSON[el].group}-link" class="positon-anchor">`
                            content += `<hr>`
                            content += wrap(globalJSON[el])
                            content+='</div>'
                        }
                    }
                    return content;
                }).join('') || 'empty';
    }
    
    let scriptsFiles = [
        'dist/showcar-icons.js',
        'dist/showcar-tracking.js',
        'dist/showcar-ui.js',
        'docs/assets/js/highlight.min.js',
        'docs/assets/js/clipboard.min.js',
        'docs/assets/js/smooth-scroll.min.js',
        'docs/assets/js/docs.js',
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
            <div id="all-code-toggler">Are you developer?</div>
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


