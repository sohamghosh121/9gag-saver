console.log("Loaded 9GAG-saver. GO FUN YOURSELF");

$('.badge-item-vote-up').click(function(ev){
	var elem = ev.target;
	var article = elem.closest('article');
	var imgPath = article.children[1].children[0].children[0].src;
	var imgName = article.children[0].children[0].children[0].text.trim();
	chrome.runtime.sendMessage({
	  from:    '9GAG-saver',
	  subject: imgName,
	  imgsrc: imgPath
	});
});