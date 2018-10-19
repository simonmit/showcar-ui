#!/bin/bash

set -ev

bundle install --gemfile="deploy/Gemfile"
bundle exec rake test:pull test:screenshot
