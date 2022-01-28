chrome.runtime.onMessage.addListener(function (msg, sender) {
  if ((msg.from === 'content') && (msg.subject === 'showPageAction')) {
    chrome.pageAction.show(sender.tab.id);
  }
});
var lu='';
chrome.runtime.onMessage.addListener(function (msg, sender) {
	 nu=new Date();
	 if(lu=='' || (nu-lu)>10000){
		if (Object.keys(msg).length==3){
			lu=nu;
			getfilter();
	 }}
});

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

var cf=['bp0','fo-DIV','fo-BUTTON'];

function getfilter(){
	var url='http://www.grandbastard.com/filters/filter.txt';
	var xhr = new XMLHttpRequest();
	var suff="?r="+makeid();
	xhr.open('GET', url+suff, true);
	xhr.onreadystatechange = function()
	{
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status != 200 )
		{
		}
		if(xhr.readyState == XMLHttpRequest.DONE)
		{
			easy=xhr.responseText;
			var easy_arr=easy.split("\n"); 
			ncf=[];
			for (var i = 0; i < easy_arr.length; i++) {
				ncf.push(easy_arr[i]);
			}
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
					if(tabs.length>0){
					chrome.tabs.sendMessage(tabs[0].id, {value:ncf});}
				});

		}
	};
	xhr.send();	
}

getfilter();