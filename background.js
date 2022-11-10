console.log("kdrama background script running");

chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  console.log("button clicked: " + tab);
  chrome.tabs.sendMessage(tab.id, {
    txt: "Kdrama content script go",
  });
}
