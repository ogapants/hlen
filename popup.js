document.getElementById("directly").addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: "clickedPopup",
      data: "ja",
    });
  });
  window.close();
});
