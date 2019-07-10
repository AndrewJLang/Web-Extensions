function openMineSweeper() {
    browser.tabs.create({
        url: "http://www.freeminesweeper.org/minecore.html"
    });
}

browser.browserAction.onClicked.addListener(openMineSweeper);