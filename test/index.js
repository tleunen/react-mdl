import path from 'path';
import glob from 'glob';

const cwd = process.cwd();

glob('test/spec/**/*.spec.js', (err, files) => {
    files
        .map(file => path.resolve(cwd, file))
        .forEach(module => require(module));
});
