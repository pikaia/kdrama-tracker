console.log("Kdrama content script go");

let paragraph = document.getElementsByTagName("div");
let img = document.getElementsByTagName("img");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log("Got Message function: " + message);
  // Limit to the left content div
  // Filter for links to episodes which already are dubbed in English (Not RAW)
  const episodes = [
    ...document
      .querySelector("div.tab-content.left-tab-1.selected")
      .querySelectorAll("a"),
  ].forEach((anchor) => {
    console.log("Iterating through each anchor: " + anchor);
    if (anchor.href.includes("episode")) {
      console.log("Checking link: " + anchor);
      if (anchor.getElementsByClassName("ep RAW").length > 0) {
        anchor.style.visibility = "hidden";
      }
    }
  });
}
