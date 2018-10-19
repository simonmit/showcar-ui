#!/bin/bash

set -ev

bundle install --deployment
bundle exec rake test:pull test:screenshot
