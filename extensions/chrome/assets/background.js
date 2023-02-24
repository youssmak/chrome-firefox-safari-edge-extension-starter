chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'ON',
  });
});

chrome.tabs.onCreated.addListener(async (tabId) => {
  updateScripting(tabId);
});

chrome.tabs.onUpdated.addListener(async (tabId) => {
  updateScripting(tabId);
});

chrome.action.onClicked.addListener(async (tab) => {
  const prevState = await chrome.action.getBadgeText({});
  const nextState = prevState === 'ON' ? 'OFF' : 'ON';
  await chrome.action.setBadgeText({
    text: nextState,
  });
  if (nextState === 'ON') {
    updateScripting(tab.id);
  } else if (nextState === 'OFF') {
    chrome.tabs.reload(tab.id);
  }
});

async function updateScripting(tabId) {
  const state = await chrome.action.getBadgeText({});
  if (state === 'ON') {
    await chrome.scripting.insertCSS({
      files: ['assets/styles.css'],
      target: { tabId },
    });
    chrome.scripting.executeScript({
      target: { tabId },
      files: ['assets/content.js'],
    });
  }
}
