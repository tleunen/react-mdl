const frontMatter = require('front-matter');
const markdownIt = require('markdown-it');
const markdownItUtils = require('markdown-it/lib/common/utils');
const Prism = require('prismjs');
require('prismjs/components/prism-jsx');
const renderDemo = require('./render-demo');

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

const demoLanguagesMap = new Map([
    ['jsx_demo', 'jsx'],
    ['jsx_demo_class', 'jsx'],
]);

function getDemoCode(lang, token) {
    if (lang === 'jsx_demo') {
        return renderDemo(token.content);
    }
    if (lang === 'jsx_demo_class') {
        return renderDemo(token.content, true);
    }
    return '';
}

md.renderer.rules.table_open = () => '<table class="mdl-data-table mdl-shadow--2dp">\n';

// const defaultFenceRenderer = md.renderer.rules.fence;
// https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js#L31
md.renderer.rules.fence = (tokens, idx, options) => {
    const token = tokens[idx];
    const info = token.info ? markdownItUtils.unescapeAll(token.info).trim() : '';
    const langName = info ? info.split(/\s+/g)[0] : '';
    const realLangName = demoLanguagesMap.has(langName) ? demoLanguagesMap.get(langName) : langName;

    const highlighted = options.highlight(token.content, realLangName)
        || markdownItUtils.escapeHtml(token.content);

    const demo = getDemoCode(langName, token);
    const prefix = `<pre class="language-${realLangName}"><code class="language-${realLangName}">`;
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
