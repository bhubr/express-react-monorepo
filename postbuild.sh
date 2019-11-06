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
echo build the frontend
cd ../front
yarn build
