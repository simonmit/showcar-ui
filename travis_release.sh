#!/bin/bash

set -ev

RELEASE_BRANCH=release
DOCS_BRANCH=gh-pages

chmod 600 release_key
eval `ssh-agent -s`
ssh-add release_key

mkdir temp-release
cd temp-release

git clone -b $RELEASE_BRANCH --single-branch "git@github.com:AutoScout24/showcar-ui.git" .
git config user.name "Travis CI"
git config user.email "${GIT_EMAIL}"
git config push.default simple
git checkout $RELEASE_BRANCH

cp -r ../dist .
cp -r ../src .
cp ../package.json .
cp ../History.md .

git add . -A
git commit -am "Release"
git push origin $RELEASE_BRANCH


###### DOCS ######
cd ..
mkdir temp-gh-pages
cd  temp-gh-pages

git clone -b $DOCS_BRANCH --single-branch "git@github.com:AutoScout24/showcar-ui.git" .
git config user.name "Travis CI"
git config user.email "${GIT_EMAIL}"
git config push.default simple
git checkout $DOCS_BRANCH

cp -r ../docs .
cp -r ../dist docs/lib
cp -r ../src/06-components docs/components
cp  ../package.json .
cp ../History.md .

git add . -A
git commit -am "Release"
git push origin $DOCS_BRANCH
