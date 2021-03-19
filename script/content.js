console.log("hello, from content.js");

(function () {
  let path = "script/inject.js";
  let script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.src = chrome.runtime.getURL(path);
  script.onload = function () {
    this.parentNode.removeChild(this);
  };
  document.body.appendChild(script);
})();

// 和popup以及background通信
chrome.runtime.onMessage.addListener(function (message, sender, callback) {
  console.log(message, sender);
  callback && callback("content responded");
});

// popup和background均能收到消息，callback谁快谁掉用
chrome.runtime.sendMessage("content.js send message", (res) => {
  console.log("response:", res);
});
