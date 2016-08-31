const jsExternal = [
    'https://unpkg.com/react/dist/react.js',
    'https://unpkg.com/react-dom/dist/react-dom.js',
    'https://unpkg.com/react-mdl/extra/material.js',
    'https://unpkg.com/react-mdl/out/ReactMDL.js',
    'https://unpkg.com/dialog-polyfill/dialog-polyfill.js'
];
const cssExternal = [
    'https://unpkg.com/react-mdl/extra/material.css',
    'https://unpkg.com/dialog-polyfill/dialog-polyfill.css'
];

function getSimpleDemoCode(jsxCode) {
    let code = jsxCode.replace(/{\/\*.*\*\/}\n/g, '');

    const codeSplit = code.split('\n\n');
    const columns = codeSplit.length;
    if (columns > 1) {
        code = `${codeSplit.reduce((memo, c) => (
            `${memo}<Cell col={${12 / columns}}>

${c}

</Cell>`
        ), '<Grid>')}</Grid>`;
    }

    return code;
}


module.exports = (jsx, isClass) => {
    const prefix = `// export the React MDL components globally to use them without the ReactMDL prefix
for(const component in ReactMDL) {
    if(ReactMDL.hasOwnProperty(component)) {
        window[component] = ReactMDL[component];
    }
}
// for the dialog example, we have to register the dialogs window
const dialogs = document.querySelector("dialog"); dialogs && dialogPolyfill.registerDialog(dialogs);`;

    const suffix = "ReactDOM.render(<Demo />, document.getElementById('demo'))";
    const code = isClass
        ? jsx
        : `
const Demo = (props) => (
${getSimpleDemoCode(jsx)}
);`;

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
        css_external: cssExternal.join(';'),
        js_external: jsExternal.join(';')
    };

    const JSONstring = JSON.stringify(data)
        .replace(/"/g, '&​quot;')
        .replace(/'/g, '&apos;');


    return `<form class="codepen" action="http://codepen.io/pen/define" method="POST" target="_blank">
<input type="hidden" name="data" value='${JSONstring}'>
<input type="image" src="http://s.cdpn.io/3/cp-arrow-right.svg" width="40" height="40" value="Create New Pen with Prefilled Data" class="codepen-mover-button">
</form>`;
};
