
var directly = false

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request) {
    case "onLoad"://from script.js
      if (directly) {
        directly = false
      } else {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {
            type: "forceEn"
          });
        });
      }
      break;
    case "directly"://from popup.js
      directly = true
      break;
    default:
      sendResponse();
      break;
  }
});