#!/bin/bash

set -ev

chmod 600 release_key
eval `ssh-agent -s`
ssh-add release_key

RELEASE_BRANCH=release
mkdir temp-release
cd temp-release

git clone -b $RELEASE_BRANCH --single-branch "git@github.com:AutoScout24/showcar-ui.git" .
git config user.name "Travis CI"
git config user.email "${GIT_EMAIL}"
git config push.default simple

#remove all files except .gitignore and all inside.git "shopt -s extglob" extends bash
shopt -s extglob
rm -rf !(.git*)

cp -r ../dist .
cp -r ../src .
cp ../package.json .

git add . -A

#checking for files to commit, if exists then commit. If not go further
if [ -n "$(git status --porcelain)" ]; then
	git commit -am "Release"
	git push origin $RELEASE_BRANCH
fi

cd ..
