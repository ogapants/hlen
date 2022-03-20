document.getElementById("directly").addEventListener("click", function () {
  //Notify background.js
  chrome.runtime.sendMessage("directly");
  //Notify script.js
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: "clickedPopup",
      data: "ja",
    });
  });
  window.close();
});
