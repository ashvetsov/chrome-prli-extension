var PREFIX = 'prli:';

chrome.browserAction.onClicked.addListener(function(tab) {
	var url = tab.url;
	if (url.substring(0, 5) != PREFIX) url = PREFIX + url;
	chrome.tabs.update({ url: url });
});
