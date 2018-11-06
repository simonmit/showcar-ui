#!/bin/bash

set -e

cd ..

RELEASE_BRANCH="build-${COMMIT_HASH}"

fail() {
  echo "FAIL: $*"
  exit 1
}

build_code() {
    git checkout -b $RELEASE_BRANCH
    npm run build
    npm run docs
    git add dist
    git add docs
    sed -i -e "s=@@COMMIT_HASH@@=${GIT_COMMIT}=" ./package.json
    PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
    git commit -am "build ${COMMIT_HASH} release ${PACKAGE_VERSION}" origin $RELEASE_BRANCH
    git push --no-verify  origin $RELEASE_BRANCH
    git tag -a $PACKAGE_VERSION
    git push --no-verify --follow-tags
}

publish() {
    npm publish
}

clean () {
    git checkout master
    git branch -D origin $RELEASE_BRANCH
}
build_code
#publish
