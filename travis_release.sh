#!/bin/bash

if [ "$TRAVIS_BRANCH" == "master" ]; then
  # only run for master branch, we don't want to release PRs and other branches
  echo 'we are releasing now...'
  ls dist -R
fi

