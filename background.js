console.log("heyo");

var sendNotif = function(msg){
	var notif = chrome.notifications.create('Meme Saved', {
	      icon: './icon.png',
	      body: "Saved meme \"" + msg.subject + "\". Go fun yourself. " + msg.imgsrc,
	      onshow: setTimeout(function(){  chrome.notifications.clear('Meme Saved');}, 3000)
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
	});
    
	response({ok: true});
  }
});


