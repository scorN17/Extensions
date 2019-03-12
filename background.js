/*var currentUrl = false;

chrome.browserAction.setBadgeBackgroundColor({color: '#A60D0D'});

chrome.tabs.onUpdated.addListener(function(id,info,tab){
	currentUrl = tab.url;
	set_idc(currentUrl);
});
chrome.tabs.onActivated.addListener(function(info){
	chrome.tabs.get(info.tabId, function(tab){
		currentUrl = tab.url;
		set_idc(currentUrl);
	});
});

function set_idc(url)
{
	chrome.browserAction.setBadgeText({text: ''});
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://bunker-yug.ru/extensions/01/ajax.php?a=get_idc&b='+url, true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if (xhr.readyState != 4) return;
		if (xhr.status != 200) return;
		if ( ! xhr.responseText) return;
		chrome.browserAction.setBadgeText({text: xhr.responseText});
	};
}*/
