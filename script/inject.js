console.log("inject.js running");

function mockApi() {
  console.log("this is from inject.js");
}

// 与content通信
window.addEventListener("message", function (message) {
  message.data.content && console.log("inject received:", message.data);
});

window.postMessage({ inject: "hello,from inject post message" }, "*");
