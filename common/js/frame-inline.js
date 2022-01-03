function inlineIframe(iframe) {
	var onLoad = function () {
		iframe.insertAdjacentHTML("afterend", iframe.contentDocument.body.innerHTML)
		iframe.parentNode.removeChild(iframe)
		iframe.onload = null
	}
	if (
		iframe.contentWindow.location.href === "about:blank" ||
		iframe.contentDocument.readyState === "loading"
	) {
		iframe.onload = onLoad
	} else {
		onLoad()
	}
}

window.onload = function() {
	inlineIframe(document.getElementById("headerIframe"))
};