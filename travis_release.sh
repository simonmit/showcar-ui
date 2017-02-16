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

cp -r ../dist .
cp -r ../src .
cp ../package.json .
cp ../History.md .

git add . -A

#checking for files to commit, if exists then commit. If not make DOCS task.
if [ -n "$(git status --porcelain)" ]; then
	git commit -am "Release"
	git push origin $RELEASE_BRANCH
fi

###DOCS###
cd ..
mkdir temp-gh-pages
cd  temp-gh-pages

#remove all files except .gitignore and all inside.git "shopt -s extglob" extends bash
shopt -s extglob
rm -rf !(.git*)

git clone -b $DOCS_BRANCH --single-branch "git@github.com:AutoScout24/showcar-ui.git" .
git config user.name "Travis CI"
git config user.email "${GIT_EMAIL}"
git config push.default simple


cp -r ../docs .
cp -r ../dist docs/lib
mkdir src
cp -r ../src/06-components ./src/06-components
cp  ../index.html .

git add . -A
git commit -am "Release"
git push origin $DOCS_BRANCH
