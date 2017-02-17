#!/bin/bash

set -ev

chmod 600 release_key
eval `ssh-agent -s`
ssh-add release_key
