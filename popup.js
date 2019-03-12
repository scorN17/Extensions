
var currentUrl;

window.onload = function(){

	// currentUrl = chrome.extension.getBackgroundPage().currentUrl;
	chrome.windows.getCurrent(function(win){
		chrome.tabs.getSelected(win.id, function(tab){
			currentUrl = tab.url;
			
			var frame = document.getElementById('mainframe');
			frame.src = frame.dataset.src+'?url='+currentUrl;
		});
	});

	window.addEventListener('message',function(e){
		var frame = document.getElementById('mainframe');
		frame.style.height = e.data.h+'px';
	},false);

};
