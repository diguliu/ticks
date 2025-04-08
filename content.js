// Function to convert ticks to timestamp
function ticksToTimestamp(ticks) {
  // Ticks are in 100-nanosecond intervals since January 1, 1601
  const ticksPerSecond = 10000000;
  const epochOffset = 621355968000000000; // Ticks from 1601 to 1970

  try {
    const ticksNum = BigInt(ticks);
    const unixTicks = ticksNum - BigInt(epochOffset);
    const seconds = Number(unixTicks) / ticksPerSecond;
    
    if (isNaN(seconds) || seconds < 0) {
      return null;
    }

    const date = new Date(seconds * 1000);
    return date.toLocaleString();
  } catch (error) {
    return null;
  }
}

// Create and style the tooltip element
const tooltip = document.createElement('div');
tooltip.style.cssText = `
  position: absolute;
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 10000;
  display: none;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
`;

document.body.appendChild(tooltip);

// Listen for messages from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "convertTicks") {
    const selectedText = request.text;
    const timestamp = ticksToTimestamp(selectedText);
    
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    tooltip.textContent = timestamp || "Not valid ticks time";
    tooltip.style.display = "block";
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
    
    // Hide tooltip after 3 seconds
    setTimeout(() => {
      tooltip.style.display = "none";
    }, 3000);
  }
}); 