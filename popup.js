document.getElementById('link1').addEventListener('click', function() {
    chrome.runtime.sendMessage({text: 'Text from link 1'});
  });
  
  document.getElementById('link2').addEventListener('click', function() {
    chrome.runtime.sendMessage({text: 'Text from link 2'});
  });
  