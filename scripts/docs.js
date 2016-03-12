/* eslint no-console: 0 */

const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const marked = require('marked');
const mdlRenderer = require('marked-renderer-mdl');
const Prism = require('prismjs');
require('prismjs/components/prism-jsx');

const babel = require('babel-core');

const DOC_PAGES_DIR = path.join('docs', 'pages');
const DOC_PAGES_DIR_OUTPUT = path.join('docs', 'pages', 'html');

function getCodePenForm(jsx, entireClass) {
    const prefix = `for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } }
const dialogs = document.querySelector("dialog"); dialogs && dialogPolyfill.registerDialog(dialogs);`;
    const suffix = "ReactDOM.render(<Demo />, document.getElementById('demo'))";
    const code = (entireClass) ? jsx : `
const Demo = (props) => {
    return ${jsx};
}`;

    const JS = `${prefix}
${code}
${suffix}`;

    const data = {
        title: 'React-MDL example',
        editors: '001',
        html: '<div id="demo"></div>',
        css: '@import url(https://fonts.googleapis.com/icon?family=Material+Icons);',
        js: JS,
        js_pre_processor: 'babel',
        css_external: 'https://npmcdn.com/react-mdl/extra/material.css;https://npmcdn.com/dialog-polyfill/dialog-polyfill.css',
        js_external: 'https://npmcdn.com/react@0.14.7/dist/react.js;https://npmcdn.com/react-dom@0.14.7/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js;https://npmcdn.com/dialog-polyfill/dialog-polyfill.js'
    };

    const JSONstring = JSON.stringify(data)
        .replace(/"/g, '&​quot;')
        .replace(/'/g, '&apos;');


    return `<form class="codepen" action="http://codepen.io/pen/define" method="POST" target="_blank">
<input type="hidden" name="data" value='${JSONstring}'>
<input type="image" src="http://s.cdpn.io/3/cp-arrow-right.svg" width="40" height="40" value="Create New Pen with Prefilled Data" class="codepen-mover-button">
</form>`;
}

let demoContainerId = 0;
function convertJSX(jsxCode) {
    demoContainerId++;

    const highlightedCode = Prism.highlight(jsxCode, Prism.languages.jsx);

    // remove {/* comments */}
    let code = jsxCode.replace(/{\/\*.*\*\/}\n/g, '');

    const codeSplit = code.split('\n\n');
    const columns = codeSplit.length;
    if (columns > 1) {
        code = '<Grid>';

        codeSplit.forEach(c => {
            code += (
                `<Cell col={${12 / columns}}>
                    ${c}
                </Cell>`
            );
        });

        code += '</Grid>';
    }


    let transformedCode = babel.transform(code, { presets: ['react'] }).code;
    transformedCode = transformedCode.replace(/^"use strict";\n\n/, '');
    const jsScript = `<script class="demo-js">
        var elem = ${transformedCode};
        var cont = document.getElementById("demo-${demoContainerId}");
        ReactDOM.render(elem, cont);
    </script>`;

    return `<div id="demo-${demoContainerId}"></div>
        ${jsScript}
        <pre class="language-jsx"><code class="language-jsx">${highlightedCode}</code>${getCodePenForm(code)}</pre>`;
}

function convertJSXClass(jsxClass) {
    demoContainerId++;

    const highlightedCode = Prism.highlight(jsxClass, Prism.languages.js);
    let transformedCode = babel.transform(jsxClass, { presets: ['es2015', 'stage-0', 'react'] }).code;
    transformedCode = transformedCode.replace(/^"use strict";\n\n/, '');

    const jsScript = `<script class="demo-js">
        ${transformedCode}
        var elem = React.createElement(Demo);
        var cont = document.getElementById("demo-${demoContainerId}");
        ReactDOM.render(elem, cont);
    </script>`;

    return `<div id="demo-${demoContainerId}"></div>
        ${jsScript}
        <pre class="language-js"><code class="language-js">${highlightedCode}</code>${getCodePenForm(jsxClass, true)}</pre>`;
}

function convertCSS(code) {
    return `<style>${code}</style>`;
}

function enhanceRenderer(renderer) {
    function escape(html, encode) {
        return html
            .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }


    renderer.code = (code, lang, escaped) => { // eslint-disable-line no-param-reassign
        if (lang === 'jsx') return convertJSX(code);
        if (lang === 'css_demo') return convertCSS(code);
        if (lang === 'jsx_demo_class') return convertJSXClass(code);
        return `<pre><code>${(escaped ? code : escape(code, true))}</code></pre>`;
    };

    return renderer;
}

function convertPages() {
    execSync(`mkdir -p ${DOC_PAGES_DIR_OUTPUT}`, { stdio: [0, 1, 2] });

    const files = fs.readdirSync(DOC_PAGES_DIR);
    files.forEach(file => {
        if (file[0] === '.') return;

        const fileIn = path.join(DOC_PAGES_DIR, file);
        const fileOut = path.join(DOC_PAGES_DIR_OUTPUT, `${file}.html`);

        const stats = fs.lstatSync(fileIn);
        if (!stats.isFile()) return;

        const data = fs.readFileSync(fileIn);

        const content = data.toString('utf8');
        const html = marked(content, { renderer: enhanceRenderer(mdlRenderer) });

        fs.writeFileSync(fileOut, html, 'utf8');
        console.log(`${file} converted.`);
    });
}

function generatePageIndex() {
    const files = fs.readdirSync(DOC_PAGES_DIR_OUTPUT);
    let content = '';

    files.forEach(file => {
        const name = file.substring(0, file.indexOf('.'));
        if (name === 'index' || file[0] === '.') return;
        content += `export ${name} from './${file}';\n`;
    });


    const fileOut = path.join(DOC_PAGES_DIR_OUTPUT, 'index.js');
    fs.writeFileSync(fileOut, content, 'utf8');
    console.log('index.js generated.');
}

// build html documentation
convertPages();
generatePageIndex();

// build js app
execSync('webpack docs/src/app.js out/docs/app.js', { stdio: [0, 1, 2] });

// copy static files in the output folder
execSync('cp -r extra/material.min.* docs/*.html docs/*.css out/docs/', { stdio: [0, 1, 2] });

console.log('Documentation files generated.');
