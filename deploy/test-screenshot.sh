#!/bin/bash

set -ev

cd deploy
bundle install
bundle exec rake test:pull test:screenshot # we need to provide a proper Gemfile. 
