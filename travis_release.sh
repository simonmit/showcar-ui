#!/bin/bash

set -ev

chmod 600 release_key
eval `ssh-agent -s`
ssh-add release_key

RELEASE_BRANCH=release
mkdir temp-release
cd temp-release

git clone -b $RELEASE_BRANCH --single-branch "git@github.com:AutoScout24/showcar-ui.git" .
git config user.name "$(git log -1 --pretty=format:'%an')"
git config user.email "$(git log -1 --pretty=format:'%ae')"
git config push.default simple

#remove all files except .gitignore and all inside.git "shopt -s extglob" extends bash
shopt -s extglob
rm -rf ./!(.git*|.|..)

cp -r ../dist .
cp -r ../src .
cp ../package.json .
cp ../README.md .
cp ../LICENSE.md .

git add . -A

#checking for files to commit, if exists then commit. If not go further
if [ -n "$(git status --porcelain)" ]; then
	git commit -am "$(git log -1 --pretty=%B)"
	# npm version patch
	git push origin $RELEASE_BRANCH --follow-tags
fi

cd ..
