chrome.browserAction.onClicked.addListener(function(tab) {
	var url = 'prli:' + tab.url;
	chrome.tabs.update({ url: url });
});
