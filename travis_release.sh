#!/bin/bash

set -ev

TARGET_BRANCH=release

mkdir temp-git
cd temp-git
git clone "https://${GITHUB_TOKEN}@github.com/AutoScout24/showcar-ui.git" .
git config user.name "Travis CI"
git config user.email "${GIT_EMAIL}"
git config push.default simple
git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH

cp -r ../dist .
cp -r ../src .
cp ../package.json .
cp ../History.md .

git add . -A
git commit -am "Release"
git push origin $TARGET_BRANCH

