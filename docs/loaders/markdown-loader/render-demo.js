const babel = require('babel-core');

function renderSimpleDemo(containerId, jsxCode) {
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
        var cont = document.getElementById("demo-${containerId}");
        ReactDOM.render(elem, cont);
    </script>`;

    return `<div id="demo-${containerId}" class="demo-container"></div>
${jsScript}`;
}

function renderClassDemo(containerId, jsxCode) {
    let transformedCode = babel.transform(jsxCode, { presets: ['es2015', 'stage-0', 'react'] }).code;
    transformedCode = transformedCode.replace(/^"use strict";\n\n/, '');

    const jsScript = `<script class="demo-js">
        ${transformedCode}
        var elem = React.createElement(Demo);
        var cont = document.getElementById("demo-${containerId}");
        ReactDOM.render(elem, cont);
    </script>`;

    return `<div id="demo-${containerId}"></div>
        ${jsScript}`;
}

let demoContainerId = 0;
module.exports = (jsxCode, isClass) => {
    demoContainerId++;

    return isClass
        ? renderClassDemo(demoContainerId, jsxCode)
        : renderSimpleDemo(demoContainerId, jsxCode);
};
