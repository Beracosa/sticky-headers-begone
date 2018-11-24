function injectCSS(s) {
	var node = document.createElement('style');
	node.appendChild(document.createTextNode(s));
	document.body.appendChild(node);
}

injectCSS(".top-bar._fixed {position: absolute; min-width: auto; box-shadow: 0 1px 0 rgba(12,13,14,0.1),0 1px 6px rgba(59,64,69,0.1);}");
