chrome.commands.onCommand.addListener(function (command) {
    if (command === "_execute_browser_action") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {command: "paste"});
      });
    }
  });
  