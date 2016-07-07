#!/bin/bash -e

if ! [ -e scripts/release.sh ]; then
  echo >&2 "Please run scripts/release.sh from the repo root"
  exit 1
fi

npm test
npm run clean
npm run compile
npm run build-umd
npm run build-min

# Update changelog, set new version in package.json and add the version tag
./node_modules/.bin/standard-version
# Set new latest tag
git tag latest -f

git push --follow-tags origin master

npm publish

npm run build-docs
npm run release-docs
