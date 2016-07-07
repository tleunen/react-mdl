#!/usr/bin/env node
/**
 * Creates a conventional changelog from the current git repository / metadata.
 * Inspired by https://github.com/angular/material2/blob/master/scripts/release/changelog.js
 */

const fs = require('fs');
const addStream = require('add-stream');
const cl = require('conventional-changelog');
const inStream = fs.createReadStream('CHANGELOG.md');

/**
 * When the command line argument `--force` is provided, then the full changelog will created and overwritten.
 * By default, it will only create the changelog from the latest tag to head and prepends it to the changelog.
 */
const isForce = process.argv.indexOf('--force') !== -1;

inStream.on('error', err => {
    console.error(`An error occurred, while reading the previous changelog file.
If there is no previous changelog, then you should create an empty file or use the '--force' flag.
${err}`);
    process.exit(1);
});

const config = {
    preset: 'angular',
    releaseCount: isForce ? 0 : 1
};

function getOutputStream() {
    return fs.createWriteStream('CHANGELOG.md');
}

const stream = cl(config)
.on('error', err => {
    console.error(`An error occurred while generating the changelog: ${err}`);
})
.pipe(!isForce && addStream(inStream) || getOutputStream());

// When we are pre-pending the new changelog, then we need to wait for the input stream to be ending,
// otherwise we can't write into the same destination.
if (!isForce) {
    inStream.on('end', () => {
        stream.pipe(getOutputStream());
    });
}
