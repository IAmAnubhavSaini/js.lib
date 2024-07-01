#!/usr/bin/env bash

# set -euxo pipefail
set -o errexit
set -o nounset
set -o pipefail
set -o xtrace

TEST_COMMAND="npm run test"

# Check if current directory has src folder
# if yes, then execute the tests from src folder
# else go to project root directory and execute the tests
if [ -d "src" ]; then
    echo "src folder found, running tests from src folder"
else
    # go up until we find package.json
    while [ ! -f "package.json" ]; do
        cd ..
    done
fi

cd "$(pwd)/src"

## || true
# This is to prevent the script from exiting if the tests fail
# This is useful when we are watching for changes and we don't want the script to exit
# if the tests fail. We want to keep watching for changes and run the tests again
# when the files change.

# Run the tests once before watching for changes
$TEST_COMMAND || true

# Watching for changes in .test.js files
inotifywait -m -e close_write,moved_to,create **/* \
    --format "%w%f" | while read FILE; do
    if [[ "$FILE" =~ \.test\.js$ ]]; then
        echo "Detected change in $FILE, running tests..."
        $TEST_COMMAND || true
    fi
done
