console.log("heyo");

var sendNotif = function(msg){
	console.log(chrome.notifications.create)
	var notif = chrome.notifications.create('Meme Saved', {
		  type: 'basic',
	      iconUrl: './icon.png',
	      title: 'Saved meme! Go fun yourself.',
	      message: msg.subject,
	}, function(){
		setTimeout(function(){
			chrome.notifications.clear('Meme Saved');
		}, 1500)
	});
}
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  if (msg.from === '9GAG-saver') {
    chrome.downloads.download({
		url: msg.imgsrc,
		filename: msg.subject + ".jpg",
		saveAs: false,
		conflictAction: "overwrite"
	}, function cb(){
		console.log("Done.");
		sendNotif(msg);
	});
	response({ok: true});
  }
});
