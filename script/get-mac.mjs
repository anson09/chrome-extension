import os from "os";

let networkInterfaces = os.networkInterfaces();

export default function getMac() {
  return Object.values(networkInterfaces)
    .flat()
    .filter((i) => i.internal === false && i.family === "IPv4")[0]?.mac;
}
