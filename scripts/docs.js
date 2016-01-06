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

function getCodePenForm(jsx) {
    const JS = `
for(const component in ReactMDL) { if(ReactMDL.hasOwnProperty(component)) { window[component] = ReactMDL[component]; } }

const Demo = (props) => {
    return ${jsx};
}

ReactDOM.render(<Demo />, document.getElementById('demo'))
    `;

    const data = {
        title: 'React-MDL example',
        editors: '001',
        html: '<div id="demo"></div>',
        css: '@import url(https://fonts.googleapis.com/icon?family=Material+Icons);',
        js: JS,
        js_pre_processor: 'babel',
        css_external: 'https://npmcdn.com/react-mdl/extra/material.css',
        js_external: 'https://npmcdn.com/react@0.14.3/dist/react.js;https://npmcdn.com/react-dom/dist/react-dom.js;https://npmcdn.com/react-mdl/extra/material.js;https://npmcdn.com/react-mdl/out/ReactMDL.js'
    };

    const JSONstring = JSON.stringify(data)
        .replace(/"/g, '&​quot;')
        .replace(/'/g, '&apos;');


    return '<form class="codepen" action="http://codepen.io/pen/define" method="POST" target="_blank">' +
        '<input type="hidden" name="data" value=\'' + JSONstring + '\'>' +
        '<input type="image" src="http://s.cdpn.io/3/cp-arrow-right.svg" width="40" height="40" value="Create New Pen with Prefilled Data" class="codepen-mover-button">' +
    '</form>';
}

let demoContainerId = 0;
function convertJSX(jsxCode) {
    demoContainerId++;

    const highlightedCode = Prism.highlight(jsxCode, Prism.languages.jsx);

    // remove {/* comments */}
    let code = jsxCode.replace(/{\/\*.*\*\/}\n/g, '');

    const codeSplit = code.split('\n\n');
    const columns = codeSplit.length;
    if(columns > 1) {
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
    const jsScript = '<script class="demo-js">' +
            'var elem = ' + transformedCode + '\n' +
            'var cont = document.getElementById("demo-' + demoContainerId + '");\n' +
            'ReactDOM.render(elem, cont);\n' +
        '</script>';

    return '<div id="demo-' + demoContainerId + '"></div>' +
        jsScript +
        '<pre class="language-jsx">' +
        '<code class="language-jsx">' +
        highlightedCode +
        '</code>' +
        getCodePenForm(code) +
        '</pre>\n';
}

function convertCSS(code) {
    return '<style>' + code + '</style>';
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
        if(lang === 'jsx') return convertJSX(code);
        if(lang === 'css_demo') return convertCSS(code);
        return '<pre><code>'
              + (escaped ? code : escape(code, true))
              + '\n</code></pre>';
    };

    return renderer;
}

function convertPages() {
    execSync('mkdir -p ' + DOC_PAGES_DIR_OUTPUT, { stdio: [0, 1, 2] });

    const files = fs.readdirSync(DOC_PAGES_DIR);
    files.forEach(file => {
        const fileIn = path.join(DOC_PAGES_DIR, file);
        const fileOut = path.join(DOC_PAGES_DIR_OUTPUT, file + '.html');

        const stats = fs.lstatSync(fileIn);
        if(!stats.isFile()) return;

        const data = fs.readFileSync(fileIn);

        const content = data.toString('utf8');
        const html = marked(content, { renderer: enhanceRenderer(mdlRenderer) });

        fs.writeFileSync(fileOut, html, 'utf8');
        console.log(file + ' converted.');
    });
}

function generatePageIndex() {
    const files = fs.readdirSync(DOC_PAGES_DIR_OUTPUT);
    let content = 'module.exports = {\n';

    files.forEach(file => {
        const name = file.substring(0, file.indexOf('.'));
        if(name === 'index') return;
        content += '\t' + name + ': require(\'./' + file + '\'),\n';
    });
    content += '};';


    const fileOut = path.join(DOC_PAGES_DIR_OUTPUT, 'index.js');
    fs.writeFileSync(fileOut, content, 'utf8');
    console.log('index.js generated.');
}

convertPages();
generatePageIndex();
