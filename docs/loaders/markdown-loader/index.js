const babel = require('babel-core');
const frontMatter = require('front-matter');
const markdownIt = require('markdown-it');
const markdownItUtils = require('markdown-it/lib/common/utils');
const Prism = require('prismjs');
require('prismjs/components/prism-jsx');

let demoContainerId = 0;

function renderDemo(jsxCode) {
    demoContainerId++;

    let code = jsxCode.replace(/{\/\*.*\*\/}\n/g, '');

    const codeSplit = code.split('\n\n');
    const columns = codeSplit.length;
    if (columns > 1) {
        code = `${codeSplit.reduce((memo, c) => (
            `${memo}<Cell col={${12 / columns}}>${c}</Cell>`
        ), '<Grid>')}</Grid>`;
    }

    let transformedCode = babel.transform(code, { presets: ['react'] }).code;
    transformedCode = transformedCode.replace(/^"use strict";\n\n/, '');
    const jsScript = `<script class="demo-js">
        var elem = ${transformedCode};
        var cont = document.getElementById("demo-${demoContainerId}");
        ReactDOM.render(elem, cont);
    </script>`;

    return `<div id="demo-${demoContainerId}" class="demo-container"></div>
${jsScript}`;
}

const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
        const prismLang = Prism.languages[lang];
        if (lang && prismLang) {
            return Prism.highlight(str, prismLang);
        }
        return '';
    }
});

// const defaultFenceRenderer = md.renderer.rules.fence;
// https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js#L31
md.renderer.rules.fence = (tokens, idx, options) => {
    const token = tokens[idx];
    const info = token.info ? markdownItUtils.unescapeAll(token.info).trim() : '';
    const langName = info ? info.split(/\s+/g)[0] : '';

    if (info) {
        token.attrJoin('class', options.langPrefix + langName);
    }

    const highlighted = options.highlight(token.content, langName)
        || markdownItUtils.escapeHtml(token.content);

    const demo = langName === 'jsx'
        ? renderDemo(token.content)
        : '';

    const prefix = `<pre class="language-${langName}"><code class="language-${langName}">`;
    const suffix = '</code></pre>';
    return demo + prefix + highlighted + suffix;
};

module.exports = function mdLoader(content) {
    this.cacheable();
    const meta = frontMatter(content);
    const body = md.render(meta.body);
    const result = {
        ...meta.attributes,
        body,
    };
    this.value = result;
    return `module.exports = ${JSON.stringify(result)}`;
};
