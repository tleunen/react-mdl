// require all `test/components/**/index.js`
const testsContext = require.context('.', true, /\.test\.js$/);

testsContext.keys().forEach(testsContext);

// require all `src/components/**/index.js`
const componentsContext = require.context('../src/', true, /index\.js$/);

componentsContext.keys().forEach(componentsContext);
