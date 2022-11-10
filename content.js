console.log("Kdrama content script go");

let paragraph = document.getElementsByTagName("div");
let img = document.getElementsByTagName("img");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log("Got Message function: " + message);

  // Hide elements to shrink display
  document.getElementsByClassName("logo")[0].style.display = "none";
  document.getElementsByClassName("char-list")[0].style.display = "none";
  document.getElementsByClassName("menu_top")[0].style.display = "none";
  document.getElementsByClassName("slide_mobilde")[0].style.display = "none";
  document.getElementsByClassName("content-right")[0].style.display = "none";
  document.getElementsByClassName("tab")[0].style.display = "none";
  document.getElementsByClassName("block-tab")[1].style.display = "none";

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
        // Hide parent so that hidden nodes are not displayed.
        anchor.parentNode.style.display = "none";
      }
    }
  });
}
