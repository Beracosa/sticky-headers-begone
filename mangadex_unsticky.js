function injectCSS(s) {
	var node = document.createElement('style');
	node.appendChild(document.createTextNode(s));
	document.body.appendChild(node);
}

injectCSS(".fixed-top {position: absolute; top: 0; right: 0; left: 0; z-index: 1030;}");