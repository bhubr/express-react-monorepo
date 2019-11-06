#!/bin/bash

exit_on_error() {
  exit_code=$1
  last_command=${@:2}
  if [ $exit_code -ne 0 ]; then
    >&2 echo "\"${last_command}\" command failed with exit code ${exit_code}."
    exit $exit_code
  fi
}

echo Running postbuild

cd packages/back
ls node_modules | grep babel

echo Print out node and yarn versions
which node
node -v
which yarn
yarn -v

echo Install deps
yarn
ls node_modules | grep babel
echo build the damn backend
yarn build
exit_on_error $? !!
echo build the frontend
cd ../front
yarn build
