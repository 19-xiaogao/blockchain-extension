export * from "./storage"

export function closeNewTabPage() {
    // 获取当前标签页的信息
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // 获取当前标签页的 ID
        const currentTabId = tabs[0].id;

        // 关闭当前标签页
        chrome.tabs.remove(currentTabId, function () {
            // 打开扩展的 popup 页面
            // chrome.browserAction.openPopup();
        });
    });
}

chrome.action.onClicked.addListener(function (tab) {
    // 在用户点击扩展图标时触发的操作
    // 可以在这里编写您的逻辑代码
    console.log(tab);
});