// 每次点击popup加载

console.log("popup.js running...");

function p_test() {
  console.log("call p_test");
  return "p_test:hey";
}

// 和background通信
var backend = chrome.extension.getBackgroundPage();
console.log(backend.b_test());

// 和content通信
chrome.runtime.onMessage.addListener(function (message, sender, callback) {
  console.log(message, sender);
  callback && callback("popup responded");
});

function sendToActiveTab(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabs[0] &&
      !tabs[0].url.startsWith("chrome://") &&
      chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
        console.log("from active tab:", res);
      });
  });
}

sendToActiveTab("popup message");
