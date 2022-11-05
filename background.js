function checkLinks() {
  console.log("Check Links called");
  // Limit to the left content div
  // Filter for links to episodes which already are dubbed in English (Not RAW)
  console.table([...document.querySelector("div.tab-content.left-tab-1.selected")
    .querySelectorAll("a")].filter(l => l.href.includes('episode') && l.getElementsByClassName("ep RAW").length == 0).map(l=> l.href));
}

chrome.action.onClicked.addListener((tab) => {
  console.error("Krama Tracker Loaded");
  if (!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: checkLinks
    });
  }
});
