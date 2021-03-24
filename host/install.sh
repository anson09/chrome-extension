#!/bin/sh

set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET_DIR=~/Library/Application\ Support/Google/Chrome/NativeMessagingHosts
HOST_NAME=com.anson.chrome.get_mac_address

cp "$DIR/$HOST_NAME.json" "$TARGET_DIR"

# HOST_PATH=$DIR/bin/get-mac
HOST_PATH=$DIR/get-mac.js
sed -i '' "s#HOST_PATH#$HOST_PATH#" "$TARGET_DIR/$HOST_NAME.json"

echo "Native messaging host $HOST_NAME has been installed."
