function save_options() {
  var color = document.getElementById("color").value;
  chrome.storage.sync.set(
    {
      favoriteColor: color,
    },
    function () {}
  );
}
function restore_options() {
  chrome.storage.sync.get(
    {
      favoriteColor: "red",
    },
    function (items) {
      document.getElementById("color").value = items.favoriteColor;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
