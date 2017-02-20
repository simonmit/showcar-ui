#!/bin/bash

set -ev

chmod 600 release_key
eval `ssh-agent -s`
ssh-add release_key

DOCS_BRANCH=gh-pages
mkdir temp-gh-pages
cd  temp-gh-pages

git clone -b $DOCS_BRANCH --single-branch "git@github.com:AutoScout24/showcar-ui.git" .
git config user.name "Travis CI"
git config user.email "${GIT_EMAIL}"
git config push.default simple

#remove all files except .gitignore and all inside.git "shopt -s extglob" extends bash
shopt -s extglob
rm -rf !(.git*)

cp -r ../docs .
cp -r ../dist docs/lib
mkdir src
cp -r ../src/06-components ./src/06-components
mkdir -p ./src/06-components/globals/settings
cp -r ../src/01-settings/docs ./src/06-components/globals/settings
mkdir -p ./src/06-components/globals/layout
cp -r ../src/05-layout/docs ./src/06-components/globals/layout
#temporary DELETE it
cp  ../src/06-components/atoms/description.md ./src/06-components/globals/description.md

cp  ../index.html .

git add . -A

#checking for files to commit, if exists then commit. If not go further.
if [ -n "$(git status --porcelain)" ]; then
	git commit -am "Release"
	git push origin $DOCS_BRANCH
fi

cd ..
