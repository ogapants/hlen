function forceEn() {
  var url = new URL(window.location.href);
  var hl = url.searchParams.get("hl");
  if (hl != "en") {
    url.searchParams.set("hl", "en");
    window.location.replace(url);
  }
}

function directly(hl) {
  var url = new URL(window.location.href);
  url.searchParams.set("hl", hl);
  window.location.replace(url);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case "forceEn"://from background.js
      forceEn();
      break;
    case "clickedPopup"://from popup.js
      directly(request.data);
      break;
    default:
      sendResponse();
      break;
  }
});

//Notify background.js
chrome.runtime.sendMessage("onLoad");