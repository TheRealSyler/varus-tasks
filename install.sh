source .env set
rm -r "build"
echo "cleaned \"build\""

yarn ncc build src/index.ts -o build

cp -r src/assets/ build/assets/
echo "copied \"src/assets/*\" to \"build/assets/*\""

rm -r "$VARUS_INSTALL_PATH/varus-tasks"
echo "cleaned \"$VARUS_INSTALL_PATH/varus-tasks\""

mkdir "$VARUS_INSTALL_PATH/varus-tasks/"


cp -r build/* "$VARUS_INSTALL_PATH/varus-tasks/"
echo "copied \"build/*\" to \"$VARUS_INSTALL_PATH/varus-tasks/\""


echo "node \"$(cygpath.exe -m "$VARUS_INSTALL_PATH/varus-tasks/index.js")\"" > "$VARUS_INSTALL_PATH/start-varus-tasks.bat"
echo "created \"$VARUS_INSTALL_PATH/start-varus-tasks.bat\""