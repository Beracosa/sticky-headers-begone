function injectCSS(s) {
	var node = document.createElement('style');
	node.appendChild(document.createTextNode(s));
	document.body.appendChild(node);
}

injectCSS(".SiteHeader {position: absolute; background: #fff; top: 0;left: 0;width: 100%;min-height: 50px;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;z-index: 800;font-size: 14px;color: #fff;border-top: 2px solid #b92b27;border-bottom: 1px solid #ddd;box-shadow: 0 3px 2px -2px rgba(200,200,200,0.2); } ;");

window.onscroll = function (e) {  
	document.getElementsByClassName("BelowQuestionAddPrompt fixable_fixed")[0].style = null;
}
