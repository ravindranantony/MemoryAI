// Keep track of the last focused element
let lastFocused;

document.addEventListener('focusin', function(e) {
  lastFocused = e.target;
});

document.addEventListener('DOMContentLoaded', function () {
  var links = document.getElementsByTagName("a");
  for (var i = 0; i < links.length; i++) {
    (function () {
      var ln = links[i];
      var clickHandler = function (e) {
        e.preventDefault();
        // Get the link text
        var text = ln.innerText || ln.textContent;
        // Copy text to clipboard
        navigator.clipboard.writeText(text)
          .then(() => {
            console.log('Text copied to clipboard');
            // Send message to background script
            chrome.runtime.sendMessage({command: "paste", text: text});
          })
          .catch(err => {
            console.error('Could not copy text: ', err);
          });
      };
      ln.addEventListener('click', clickHandler, false);
    })();
  }
});
