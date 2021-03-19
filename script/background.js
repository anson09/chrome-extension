// 插件启动时该文件仅执行一次

console.log("background.js running...");

function b_test() {
  console.log("call b_test");
  return "b_test:hey";
}

// 和popup通信，当popup激活时才能获取到
function getPopup() {
  let views = chrome.extension.getViews({ type: "popup" });
  let popup = null;
  if (views.length > 0) {
    popup = views[0];
    console.log(popup.p_test());
  }
}

// 和content通信
chrome.runtime.onMessage.addListener(function (message, sender, callback) {
  console.log(message, sender);
  callback && callback("background responded");
});

function sendToActiveTab(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    tabs[0] &&
      !tabs[0].url.startsWith("chrome://") &&
      chrome.tabs.sendMessage(tabs[0].id, message, (res) => {
        console.log("background received [active tab]:", res);
      });
  });
}

sendToActiveTab("background message");
