chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.command === "paste") {
      // Get the active tab
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // Inject JavaScript to paste the text into the last focused element
        chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'if (document.activeElement) { document.activeElement.value = "' + request.text + '"; }'});
      });
    }
  }
);
