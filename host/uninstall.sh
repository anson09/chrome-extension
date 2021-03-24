#!/bin/sh

set -e

TARGET_DIR=~/Library/Application\ Support/Google/Chrome/NativeMessagingHosts
HOST_NAME=com.anson.chrome.get_mac_address

rm "$TARGET_DIR/com.anson.chrome.get_mac_address.json"
echo "Native messaging host $HOST_NAME has been uninstalled."
