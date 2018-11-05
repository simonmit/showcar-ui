#!/bin/bash

set -e

fail() {
  echo "FAIL: $*"
  exit 1
}


build_code() {
    PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
    npm run build
    npm run docs
    git commit -am "build ${COMMIT_HASH} release ${PACKAGE_VERSION}"
}

publish() {
    npm version patch
    git push --no-verify
    npm publish
}

build_code
publish
