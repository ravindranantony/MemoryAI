chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    copyToClipboard(request.text);
  });
  
  function copyToClipboard(text) {
    var input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = text;
    input.focus();
    input.select();
    document.execCommand('Copy');
    input.remove();
  }
  