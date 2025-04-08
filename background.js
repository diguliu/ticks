chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "convertTicksToTimestamp",
    title: "Convert Ticks to Timestamp",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "convertTicksToTimestamp") {
    chrome.tabs.sendMessage(tab.id, {
      action: "convertTicks",
      text: info.selectionText
    });
  }
}); 