chrome.browserAction.onClicked.addListener(() => {
    chrome.tabs.create({ 'url': "http://www.freeminesweeper.org/minecore.html" })
})