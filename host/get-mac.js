#!/usr/local/bin/node
// build to bin dir:<pkg -t node14-macos-x64 get-mac.js> for user don't have a local nodejs

const os = require("os");
const sendMessage = require("./protocol")(handleMessage);

function handleMessage(req) {
  if (req.command === "GET_MAC_ADDRESS") {
    sendMessage({ message: getMac() });
  } else sendMessage({ error: "native do not understand command" });
}

const networkInterfaces = os.networkInterfaces();

function getMac() {
  return Object.values(networkInterfaces)
    .flat()
    .filter((i) => i.internal === false && i.family === "IPv4")[0]?.mac;
}

module.exports = getMac;
