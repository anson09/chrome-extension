// 可以访问页面DOM，但不能访问页面js变量，需要通过ineject到页面的来访问
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
  console.log("content received:", res);
});

//与inject通信
window.addEventListener("message", function (message) {
  message.data.inject && console.log("content received:", message.data);
});

setTimeout(() => {
  window.postMessage({ content: "hello,from content post message" }, "*");
}, 2000);
