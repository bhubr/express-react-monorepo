#!/bin/bash

exit_on_error() {
  exit_code=$1
  if [ $exit_code -ne 0 ]; then
    >&2 echo "build command failed with exit code ${exit_code}."
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
echo build the damn backend
yarn build
exit_on_error $?
echo build the frontend
cd ../front
yarn
yarn build
