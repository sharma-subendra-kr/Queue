window.onload = function () {
	console.log("onload");

	var rawData = [1, 2, 3];

	window.queue = new Queue.ArrayQueue({
		data: rawData,
		initialSize: 3,
		maxSize: 3,
	});
	var $contentBody = document.getElementsByClassName("content-body")[0];
};
