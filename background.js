var directly = false

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case "onLoad"://from script.js      
      if (!directly) {
        sendMessage("forceEn", "")
      }
      directly = false
      break;
    case "clickedPopup"://from script.js      
      directly = true
      sendMessage("directly", request.data)
      break;
    default:
      sendResponse();
      break;
  }
});

function sendMessage(type, data) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      type: type,
      data: data
    });
  });
}