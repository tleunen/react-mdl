var fs = require('fs');
var path = require('path');
var execSync = require('child_process').execSync

var marked = require('marked');
var mdlRenderer = require('marked-renderer-mdl');
var Prism = require('prismjs');
require('prismjs/components/prism-jsx');

var babel = require('babel-core');
var React = require('react');
var ReactMDL = require('../');
for(component in ReactMDL) global[component] = ReactMDL[component];
var ReactDOMServer = require('react-dom/server');

var markedOpts = { renderer: enhanceRenderer(mdlRenderer) };

var DOC_PAGES_DIR = path.join('docs', 'pages');
var DOC_PAGES_DIR_OUTPUT = path.join('docs', 'pages', 'html');

function enhanceRenderer(renderer) {
    function escape(html, encode) {
        return html
            .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }


    renderer.code = function(code, lang, escaped) {
        if(lang === 'jsx') return convertJSX(code);
        if(lang === 'css_demo') return convertCSS(code);
        return '<pre><code>'
              + (escaped ? code : escape(code, true))
              + '\n</code></pre>';
    };

    return renderer;
}

function convertJSX(code) {
    var highlightedCode = Prism.highlight(code, Prism.languages.jsx);

    // remove {/* comments */}
    var code = code.replace(/{\/\*.*\*\/}\n/g, '');

    var codeSplit = code.split('\n\n');
    var columns = codeSplit.length;
    if(columns > 1) {
        var code = '<Grid>';

        codeSplit.forEach(function(c) {
            code += (
                `<Cell col={${12/columns}}>
                    ${c}
                </Cell>`
            );
        });

        code += '</Grid>';
    }

    var transformedCode = babel.transform(code).code;
    transformedCode = transformedCode.replace(/^"use strict";\n\n/, '');
    code = ReactDOMServer.renderToStaticMarkup(eval(transformedCode));

    return code +
        '<pre class="language-jsx">' +
        '<code class="language-jsx">' +
        highlightedCode +
        '</code></pre>\n';
}

function convertCSS(code) {
    return '<style>' + code + '</style>';
}

function convertPages() {
    execSync('mkdir -p ' + DOC_PAGES_DIR_OUTPUT, { stdio: [0, 1, 2] });

    var files = fs.readdirSync(DOC_PAGES_DIR);
    files.forEach(function(file) {
        var fileIn = path.join(DOC_PAGES_DIR, file);
        var fileOut = path.join(DOC_PAGES_DIR_OUTPUT, file + '.html');

        var stats = fs.lstatSync(fileIn);
        if(!stats.isFile()) return;

        var data = fs.readFileSync(fileIn);

        var content = data.toString('utf8');
        var html = marked(content, markedOpts);

        fs.writeFileSync(fileOut, html, 'utf8');
        console.log(file + ' converted.');
    });
}

function generatePageIndex() {
    var files = fs.readdirSync(DOC_PAGES_DIR_OUTPUT);
    var content = 'module.exports = {\n';

    files.forEach(function(file) {
        var name = file.substring(0, file.indexOf('.'));
        if(name === 'index') return;
        content += '\t' + name + ': require(\'./' + file + '\'),\n';
    });
    content += '};';


    var fileOut = path.join(DOC_PAGES_DIR_OUTPUT, 'index.js');
    fs.writeFileSync(fileOut, content, 'utf8');
    console.log('index.js generated.')
}

convertPages();
generatePageIndex();
