chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.command === "paste") {
        document.execCommand("paste");
      }
    }
  );
  