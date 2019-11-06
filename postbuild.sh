#!/bin/bash

exit_on_error() {
  exit_code=$1
  if [ $exit_code -ne 0 ]; then
    >&2 echo "build command failed with exit code ${exit_code}."
    exit $exit_code
  fi
}

cd packages/back
ls
pwd
# yarn
# cd ../front
# yarn
# yarn build