#!/bin/bash

set -ev

echo 'we are releasing now...'
ls dist -R

mkdir temp-git
cd temp-git
git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"
git clone "https://${GH_TOKEN}@github.com/AutoScout24/showcar-ui.git" .
git checkout release

cp ../dist .
cp ../src .
cp ../package.json .
cp ../History.md .

git add . -A
git commit -am "Release"
git push

